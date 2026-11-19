---
title: "Importation et téléversement de données"
date: 2021-10-07
lastmod: 2026-06-01
authors: ["Ed Gilbert"]
editors: ["Katie Pearson", "Lindsay Walker"]
sidebar_position: 45
keywords: ["data upload", "data import", "file upload", "IPT"]
---

import ReactPlayer from "react-player";

:::info

Cette page fournit des instructions pour importer des données dans une collection existante au sein d'un portail Symbiota. Si vous ne disposez pas encore de collection dans le portail Symbiota concerné, veuillez contacter le gestionnaire du portail.

:::

Les options d'importation de données se trouvent dans la section _Importer/Mettre à jour les enregistrements de spécimens_ (Import/Update Specimen Records) du panneau de contrôle d'administration :
![Panneau de contrôle d'administration](/img/uploadoptions.png)

## Types d'importation

Il existe plusieurs options pour importer des données dans un portail Symbiota :

- **[Importation de fichier complet](#file-upload-or-skeletal-file-upload) :** Utilisez cette option si vous fournissez un fichier au format CSV (valeurs séparées par des virgules) ou TSV (valeurs séparées par des tabulations) contenant TOUS les champs de vos données d'occurrence. Vous pouvez convertir un document Excel en fichier CSV en utilisant la fonction « Enregistrer sous » et en sélectionnant le format CSV. **⚠️ Attention : si des données existent déjà dans le portail pour l'une des occurrences que vous importez, ces données seront écrasées par les nouvelles informations.** Pour importer des enregistrements partiels, utilisez l'option « Importation de fichier partiel » (Skeletal File Upload).
- **[Importation de fichier partiel](#file-upload-or-skeletal-file-upload) :** Utilisez cette option si vous fournissez un fichier CSV ou TSV ne contenant que quelques champs (par exemple, des géoréférences ou d'autres données complémentaires). **⚠️ Attention : ce type d'importation ne peut remplir que les champs actuellement _vides_ dans le portail.** Les données fournies via ce type d'importation n'écraseront PAS les données déjà présentes dans la base de données ; par conséquent, si vous souhaitez remplacer des données existantes, vous devez d'abord supprimer les valeurs actuelles dans les champs concernés.
- **[Importation manuelle d'une archive Darwin Core](#darwin-core-archive-manual-upload) :** Utilisez cette option si les données que vous souhaitez importer sont au format [Darwin Core Archive](http://en.wikipedia.org/wiki/Darwin_Core_Archive). Une archive Darwin Core (DwC-A) est une norme de données couramment utilisée pour regrouper des données sur les occurrences d'espèces au sein d'un jeu de données unique et autonome. Une DwC-A comprend des métadonnées, un fichier de données d'occurrence et, souvent, des fichiers relatifs aux déterminations (identifications) ainsi que des liens vers des ressources multimédias (par exemple, des images).
- **[Ressource IPT / Fournisseur d'archives Darwin Core](#ipt-resource--darwin-core-archive-provider) :** Utilisez ce type de téléversement si vous fournissez une URL pointant vers une archive Darwin Core existante, publiée sur le Web (par exemple, une archive fournie via un IPT).
- **Importation de données étendues (Extended Data Import) :** Utilisez cette option pour importer des données permettant de créer des associations entre vos enregistrements de spécimens et des ressources, qu'elles soient internes ou externes à votre portail. Des instructions détaillées sont disponibles [ici](/Collection_Manager_Guide/Importing_Uploading/linked_resources).
- **Téléversement de fichiers « Notes from Nature » :** Utilisez ce type de téléversement si vous fournissez un fichier CSV généré à partir de [Notes from Nature](https://www.zooniverse.org/organizations/md68135/notes-from-nature).
- **Profils d'importation enregistrés :** Il est possible de créer et d'enregistrer des « profils d'importation » si vous prévoyez d'intégrer régulièrement des données provenant d'une source spécifique (procédure décrite [ci-dessous](#initiating-the-upload)).

### Options de téléversement avancées
- **Mappage direct de base de données** : Option d'importation avancée permettant de mapper directement des données provenant d'une autre base de données MySQL.
- **[Procédure stockée](#stored-procedure) :** Utilisez cette option si vous effectuez un transfert depuis un schéma source vers une base de données Symbiota située sur le même serveur MySQL. La configuration initiale peut nécessiter l'assistance de votre gestionnaire de portail (Portal Manager).
- **[Téléversement par script](#script-upload) :** Utilisez cette option si vous effectuez un transfert depuis une source MySQL vers une base de données Symbiota située sur un serveur différent.

## Lancement du téléversement

Ce processus vous permet de lancer le téléversement de vos données tout en créant un « profil d'importation » (Import Profile) enregistré pour une utilisation ultérieure.

1. Accédez à votre panneau de contrôle d'administration (_cliquez sur « Mon profil » [My Profile], puis sur le nom de la collection dans la section « Gestion des collections » [Collection Management]_).
2. Dans le panneau de contrôle d'administration, sélectionnez _Importer/Mettre à jour les enregistrements de spécimens > Créer un nouveau profil d'importation_ (Import/Update Specimen Records > Create a new Import Profile).
3. Donnez un titre à votre nouveau profil d'importation dans le champ _Titre_ (Title), par exemple : « Importation depuis votre IPT ».
4. Sélectionnez le _type de téléversement_ (Upload Type) souhaité dans le menu déroulant (voir la section [Types de téléversement](#upload-types) ci-dessus).
5. Suivez les instructions ci-dessous en fonction du _type de téléversement_ que vous avez choisi.

### Téléversement de fichier complet ou téléversement de fichier partiel (Skeletal File Upload)

:::warning

Un **téléversement de fichier complet** (Full Text File Upload) utilise les données entrantes pour **écraser** toutes les données d'occurrence existantes dans la base de données, y compris pour les champs qui ne sont pas inclus dans le fichier téléversé. Par exemple, si votre base de données contient un champ « pays » (country), mais que votre fichier source ne contient pas ce champ, alors après le téléversement, le champ « pays » sera vide. Après un téléversement de fichier complet, les seules données associées à vos spécimens dans l'éditeur d'occurrences seront celles présentes dans le fichier téléversé. À l'inverse, un **téléversement de fichier partiel** (Skeletal File Upload) n'importe des données que dans les champs actuellement vides. Il ne remplace pas les valeurs déjà présentes dans les champs. Consultez la section [Conseils pour le téléversement](#uploading-tips) pour plus d'informations.

:::

1. Si votre gestionnaire de portail (Portal Manager) a créé une [procédure stockée](#stored-procedure) incluant un nettoyage des données ou d'autres vérifications, saisissez le nom de cette procédure dans le champ prévu à cet effet. Sinon, ignorez cette étape.
2. Cliquez sur le bouton « Créer un profil » (Create Profile).
3. Sur la page suivante, vous verrez une liste des profils d'importation existants. Sélectionnez le profil que vous souhaitez utiliser (celui que vous venez de créer) et cliquez sur « Initialiser le téléversement... » (Initialize Upload...). 
- Pour modifier votre profil de téléversement ultérieurement, vous pouvez cliquer sur l'icône en forme de crayon présente sur cette page.
4. Cliquez sur « Choisir un fichier » (Choose File) et recherchez le fichier que vous souhaitez téléverser via votre gestionnaire de fichiers ou votre fenêtre Finder. Sélectionnez le fichier, puis cliquez sur « Ouvrir ».
5. Cliquez sur le bouton « Analyser le fichier » (Analyze File).
6. Si la collection vers laquelle vous téléversez des données est **gérée en temps réel** (c'est-à-dire que le portail constitue votre système de base de données principal), passez à l'étape 7. Si la collection vers laquelle vous téléversez des données est un « **instantané** » (snapshot) — une copie statique — d'une base de données de spécimens gérée au sein de l'institution d'origine, sélectionnez la clé primaire correspondant à l'enregistrement du spécimen source dans le menu déroulant. La clé primaire est un champ obligatoire pour les jeux de données de type « instantané » ; elle servira d'identifiant principal pour l'enregistrement (le lien permanent entre la base de données source et les enregistrements du portail). Ce champ doit être renseigné pour chaque enregistrement avec des valeurs uniques. Ces valeurs doivent également être stables et ne pas être modifiées dans la base de données centrale au fil du temps. Pour les « instantanés », on utilise généralement le numéro de catalogue (numéro d'accession), le code-barres ou la clé primaire issue de la table des spécimens de la base de données source.
7. Une page s'affichera alors, semblable à celle présentée ci-dessous. La longueur et le contenu du tableau « Champ source / Champ cible » (Source Field/Target Field) dépendront des colonnes présentes dans le fichier CSV d'origine.

![Exemple du module de téléversement de données](/img/datauploadmodule2026.png)

8. Déterminez quels champs de votre fichier CSV (**Champs sources**) correspondent aux champs du portail Symbiota (**Champs cibles**). Consultez les guides sur les [champs de données pour l'importation](/Collection_Manager_Guide/Importing_Uploading/data_import_fields) et les [définitions des champs de données](/Editor_Guide/Editing_Searching_Records/symbiota_data_fields) pour obtenir plus d'informations sur chaque champ dans Symbiota. Consultez également la section **[Conseils pour le téléversement](#uploading-tips)** ci-dessous.
9. Une fois que la correspondance entre vos champs et ceux du portail vous convient (voir les remarques suivantes), cliquez sur le bouton « Enregistrer la correspondance » (Save Mapping).
10. Indiquez si le script doit faire correspondre les données de votre fichier avec celles déjà présentes dans le portail, en utilisant le « Numéro de catalogue » (Catalog Number) ou les « Autres numéros de catalogue » (Other Catalog Numbers). Cette étape n'est nécessaire que si vous ajoutez des informations à des enregistrements qui existent déjà dans le portail. Sinon, laissez ces options décochées.
11. Cochez la case « Versionner les modifications des données » (Version data changes) si vous souhaitez conserver un historique de toutes les modifications apportées aux champs dans la [table d'historique des modifications](/Collection_Manager_Guide/reviewing_edits). Ne cochez pas cette case si vous importez des données entièrement nouvelles dans le portail.
12. Cochez la case « Vérifier les liens vers les images à partir du champ associatedMedia » si vous ajoutez des URL d'images à vos enregistrements via un champ *associatedMedia*.
13. Sélectionnez le « Statut de traitement » (Processing Status) que vous souhaitez appliquer à l'ensemble des enregistrements importés (si nécessaire) en choisissant une option dans le menu déroulant.
14. Cliquez sur le bouton « Lancer le téléversement » (Start Upload). Vos données seront alors chargées dans une table _temporaire_, ce qui vous permettra de les examiner avant de finaliser l'importation. **Ne quittez pas cette page avant que la fenêtre « Rapport de transfert de données en attente » (Pending Data Transfer Report) ne s'affiche.**

![Capture d'écran du rapport de transfert de données en attente](/img/PendingDataTransport_3-4.png)

15. Vérifiez que le nombre d'enregistrements mis à jour et/ou ajoutés est correct en consultant le « Rapport de transfert de données en attente ». À cette étape, vos données restent stockées dans la table temporaire, ce qui vous permet de vérifier que le mappage et le formatage sont corrects avant le transfert définitif vers la base de données. Vous pouvez prévisualiser l'importation de vos données en procédant comme suit :
- Cliquez sur la petite icône en forme de case située à droite des rubriques « Occurrences en attente de transfert », « Enregistrements à mettre à jour » et/ou « Nouveaux enregistrements » pour afficher les données dans un tableau au sein de votre navigateur. 
- Sélectionnez l'icône de téléchargement (représentée par une flèche), située à droite de l'icône en forme de case, pour télécharger un fichier CSV contenant les enregistrements à mettre à jour ou à ajouter.
16. Si une erreur est constatée, ne sélectionnez pas « Transférer les enregistrements vers la table centrale des spécimens » ; corrigez plutôt votre fichier CSV et importez-le à nouveau en suivant les étapes décrites précédemment, ou revenez à l'étape de mappage des champs pour effectuer les corrections nécessaires. Si tout est correct, cliquez sur le bouton « Transférer les enregistrements vers la table centrale des spécimens ». **Cette étape est définitive et irréversible !**

### Téléversement manuel d'une archive Darwin Core

Utilisez ce profil d'importation lorsque vous téléversez manuellement une [archive Darwin Core](https://dwc.tdwg.org/text/). Au lieu d'effectuer une correspondance basée sur le numéro de catalogue ou un autre identifiant similaire, ce profil d'importation utilise le champ interne « id » présent dans l'archive Darwin Core fournie. Ce champ « id » est ensuite stocké dans le champ « dbpk » de la table des occurrences et servira aux futures mises à jour des données. **_Pour cette raison, il est primordial que les valeurs du champ « id » ne soient pas modifiées lors des téléversements ultérieurs de votre archive Darwin Core._** Il est fortement recommandé d'utiliser un identifiant unique global (par exemple, la valeur utilisée pour votre « occurrenceID ») dans ce champ.

Si vous avez déjà créé un profil d'importation, ou si l'on vous a demandé d'en utiliser un existant, cliquez sur « Profils d'importation enregistrés » (Saved Import Profiles) sous l'option « Importer/Mettre à jour les enregistrements de spécimens » (Import/Update Specimen Records), puis passez directement à l'étape 5.

1. Saisissez un nom pour votre téléversement dans le champ « Titre » (Title).
2. Si vous (ou le gestionnaire de votre portail) avez créé une procédure stockée (Stored Procedure) destinée au nettoyage des données ou à d'autres vérifications, saisissez le nom de cette procédure dans le champ prévu à cet effet. Sinon, ignorez cette étape.
3. Cliquez sur « Créer un profil » (Create Profile).
4. Sélectionnez, via le bouton radio, le profil que vous souhaitez utiliser pour votre importation (si vous venez de créer un profil, sélectionnez celui-ci).
5. Cliquez sur le bouton « Initialiser le téléversement » (Initialize Upload).
6. Cliquez sur le bouton « Choisir un fichier » (Choose File) et sélectionnez l'archive Darwin Core (compressée au format .zip) que vous souhaitez téléverser. Cliquez ensuite sur le bouton « Analyser le fichier » (Analyze File).
7. Sur la page qui s'affiche, vous aurez la possibilité de consulter et/ou de vérifier les correspondances (mappings) pour : (1) le fichier des occurrences, (2) le fichier de l'historique des identifications (s'il existe) et (3) le fichier multimédia (s'il existe). Si l'un de ces fichiers est absent de l'archive Darwin Core (DwC-A) fournie, la case à cocher située à sa gauche apparaîtra grisée. Pour consulter ou vérifier les correspondances, cliquez sur « voir les détails » à droite du fichier que vous souhaitez examiner.

![Page de correspondance du profil d'importation Darwin Core](/img/dwc_import_profile2026.png)

8. Comme le fichier entrant est structuré selon le standard Darwin Core, il ne sera probablement pas nécessaire de modifier les correspondances des champs. Il est toutefois recommandé de les vérifier. Consultez le [Guide des champs de données Symbiota](/Collection_Manager_Guide/Importing_Uploading/data_import_fields) pour obtenir la définition de chaque champ. Consultez également la section **Conseils pour le téléversement** ci-dessous.

9. Une fois que vous avez vérifié la correspondance entre les champs, cliquez sur le bouton « Enregistrer la correspondance » (Save Mapping).
10. Si vous souhaitez attribuer un statut de traitement spécifique à l'ensemble des données entrantes, sélectionnez-le dans le menu déroulant. Sinon, conservez l'option par défaut : « Laisser tel quel / Aucun paramètre explicite » (Leave as is / No Explicit Setting).
11. Cliquez sur le bouton « Lancer le téléversement » (Start Upload).
12. Examinez les données stockées dans la table temporaire pour vous assurer que la correspondance et le formatage des champs importés sont corrects. Vérifiez notamment que le nombre de nouveaux enregistrements et celui des enregistrements mis à jour correspondent à vos attentes. Un nombre élevé de nouveaux enregistrements, si vous ne vous y attendiez pas, peut indiquer que votre champ « id » a été modifié depuis le dernier téléversement. Pour visualiser la correspondance de vos champs, vous pouvez :
- Cliquer sur la petite icône en forme de case située à droite de « Enregistrements à mettre à jour » (Records to be updated) ou « Nouveaux enregistrements » (New records) pour afficher ces données dans un tableau au sein de votre navigateur. 
- Cliquer sur l'icône représentant plusieurs fichiers, située à droite de l'icône en forme de case, pour télécharger un fichier CSV contenant les enregistrements à mettre à jour ou les nouveaux enregistrements.

Il est également possible que certains enregistrements présents dans votre portail Symbiota ne figurent pas dans les données entrantes. Notez que **_ces enregistrements ne seront pas automatiquement supprimés du portail Symbiota_**. Si vous avez supprimé ces enregistrements dans votre base de données source ou via votre fournisseur IPT, vous devrez également les supprimer manuellement dans votre portail Symbiota. Pour des suppressions en masse, veuillez contacter l'administrateur de votre portail.

13. Si un élément est incorrect, revenez aux « Profils d'importation enregistrés » (Saved Import Profiles), relancez le chargement et corrigez vos correspondances (mappages). Si tout semble correct, cliquez sur le bouton « Transférer les enregistrements vers la table centrale des spécimens » (Transfer Records to Central Specimen Table). **Notez que cette étape est définitive et ne peut pas être annulée !**

### Ressource IPT / Fournisseur d'archives Darwin Core

Utilisez ce profil d'importation lorsque vous importez des données depuis un [IPT](https://www.gbif.org/ipt) ou toute autre source fournissant une URL vers une [archive Darwin Core](https://dwc.tdwg.org/text/).
Suivez les étapes décrites ci-dessus pour le « Chargement manuel d'une archive Darwin Core » ; toutefois, au lieu de charger une archive Darwin Core sous forme de fichier ZIP à l'étape 6, vous devrez indiquer l'URL de l'IPT ou du fournisseur d'archives Darwin Core dans le champ « chemin » (path) lors de l'étape 2. Si vous importez des données depuis un IPT, l'URL ressemblera à ceci (avec une URL de base différente) : https://fmipt.fieldmuseum.org/ipt/archive.do?r=fmnh_seedplants. Cette URL est parfois appelée « point d'accès » (endpoint) de l'archive Darwin Core pour un jeu de données donné.

Les mêmes précautions que celles applicables au chargement manuel d'une archive Darwin Core s'appliquent à ce type d'importation.

### Procédure stockée

1. Rédigez une procédure stockée destinée au transfert des enregistrements (les scripts de nettoyage des collections peuvent être intégrés à une procédure stockée centrale ou conservés séparément).
2. Configurez le script pour qu'il s'exécute régulièrement via une tâche planifiée (cronjob).

### Chargement par script

1. Créez une procédure stockée destinée au transfert des enregistrements. Un exemple de script pour Linux est disponible ici : [SampleSystemUpload.sh](https://symbiota.org/wp-content/uploads/SampleSystemUpload.sh). Les scripts de nettoyage peuvent être intégrés à une procédure stockée centralisée ou conservés séparément.
2. Configurez le script pour qu'il s'exécute régulièrement via une tâche planifiée (cron).

## Modèle de chargement

À l'aide du bouton ci-dessous, vous pouvez télécharger un modèle prédéfini, conçu pour les collections de plantes ou d'herbiers. Celui-ci peut être personnalisé afin d'inclure davantage (ou moins) de [champs de données](/Editor_Guide/Editing_Searching_Records/symbiota_data_fields) selon vos besoins. Dans ce fichier, la deuxième ligne contient des explications sur les champs, et la troisième ligne fournit un exemple de valeur à importer dans votre portail. Avant de procéder au chargement du fichier, supprimez ces deux lignes (en conservant la première ligne, celle d'en-tête) et enregistrez le fichier au format CSV (encodage UTF-8).

import Button from '@site/src/components/Button';
import ButtonLink from '@site/src/components/ButtonLink';

<ButtonLink
  link="/documents/UploadTemplateForCollectors.xlsx"
  label="Download Example Template"
  download={true}
  style={{marginBottom: '2vh'}}/>

## Conseils pour le téléversement

:::tip

Vous trouverez [ici](/Collection_Manager_Guide/Importing_Uploading/data_import_fields) la liste des champs pouvant être importés dans un portail de données Symbiota.

:::

:::warning

Avant de mettre à jour ou de modifier un grand nombre d'enregistrements existants via les différentes options de téléversement de Symbiota, pensez à télécharger un [fichier de sauvegarde](/Collection_Manager_Guide/Downloading/downloading_copy). Celui-ci vous permettra de [restaurer](/Collection_Manager_Guide/restoring_database) vos données si l'importation ne donne pas le résultat escompté.

:::

:::warning

Il est possible de supprimer des enregistrements erronés [un par un](/Collection_Manager_Guide/deleting_records), mais pas en masse. Si vous débutez avec les outils d'intégration de données des portails Symbiota, commencez par téléverser un petit nombre d'enregistrements avant de procéder à l'intégration de jeux de données plus volumineux.

:::

- **Identifiants principaux** : Chaque enregistrement (ligne) de votre fichier d'importation doit comporter un **identifiant** qui est soit unique au sein de votre collection (par ex. un numéro de catalogue), soit un identifiant unique à l'échelle mondiale, tel qu'un [dwc:occurrenceID](https://dwc.tdwg.org/terms/#dwc:occurrenceID) (par ex. un GUID).
- **Identifiants supplémentaires** : Pour utiliser le système « Nom de l'étiquette + Identifiant » (qui permet d'associer un identifiant ou un autre numéro de catalogue à un intitulé spécifique), saisissez le nom de l'étiquette suivi d'un deux-points, puis de la valeur de l'identifiant ; par exemple : « Ancien numéro d'acquisition : 12345 ». Si vous avez plusieurs identifiants, séparez les couples « nom de l'étiquette + identifiant » par des points-virgules ; par exemple : « NP # : 4321 ; Numéro d'acquisition : 9876 ».
- **Noms scientifiques** : Si les noms scientifiques présents dans votre fichier CSV incluent l'auteur du taxon (par ex. _Acer circinatum_ Pursh), faites correspondre ce champ au champ cible « scientificName (including author) ». Si les noms scientifiques de votre fichier CSV n'incluent PAS l'auteur du taxon (par ex. _Acer circinatum_), faites correspondre ce champ à « scientificName (excluding author) ».
- **Dates** : Les dates de collecte associées au champ `eventDate` seront examinées et validées. Les dates non valides seront placées dans le champ `verbatimEventDate`. La plupart des formats de date standard sont acceptés, notamment les dates du calendrier grégorien et le format numérique utilisé par Excel (spécifique aux États-Unis). 
Le champ `eventDate` sera généré à partir des valeurs distinctes des champs année, mois et jour. Si les champs mois ou jour sont laissés vides, la valeur « 00 » sera utilisée (par ex. : 1954-03-00, 1965-00-00). Les valeurs du champ mois peuvent être numériques ou textuelles (en anglais ou en espagnol). 
- Des scripts tentent d'extraire des dates valides à partir du champ `verbatimEventDate` lorsque le champ `eventDate` est vide. Les valeurs « 00 » sont utilisées pour indiquer un mois ou un jour manquant (ex. : 1954-03-00, 1965-00-00).
- **Altitudes** : Si votre champ d’altitude n’est pas exprimé systématiquement en mètres, mappez-le vers le champ `verbatimElevation`. Les altitudes exprimées en pieds seront converties en mètres, à condition que les unités soient précisées dans le champ.
- **Coordonnées géographiques** :
- Lors du téléversement, des scripts en arrière-plan tenteront d'extraire les valeurs de latitude et de longitude à partir du champ `verbatimCoordinates`. Ce champ est analysé pour détecter les formats DMS (degrés, minutes, secondes) et UTM, qui sont ensuite convertis en latitude et longitude décimales. 
- Si vos coordonnées (latitude/longitude) figurent dans un seul champ, vous pouvez associer ce champ à `verbatimCoordinates` ; les valeurs de latitude et de longitude décimales seront alors extraites automatiquement. 
- Si vos coordonnées UTM sont réparties dans plusieurs champs, associez ces champs (coordonnée nord, coordonnée est, zone) aux champs UTM correspondants (`utmnorthing`, `utmeasting`, `utmzone`). Cela déclenchera la conversion des coordonnées UTM en latitude et longitude décimales. Les valeurs seront également conservées dans le champ `verbatimCoordinates`. 
- Si vos coordonnées UTM figurent dans un seul champ, associez ce champ à `utmnorthing` et laissez les autres champs UTM vides ; les scripts utiliseront alors exclusivement l'analyseur UTM. 
- Les coordonnées TRS (système d'arpentage des terres publiques, ou *Public Lands Survey System*) peuvent être saisies dans un champ unique (`verbatimCoordinates`) ou dans des champs distincts (`trstownship`, `trsrange`, `trssection`, `trssectiondetails`). Toutefois, ces coordonnées ne seront pas converties automatiquement en degrés décimaux, en raison de possibles divergences d'interprétation. Consultez la section consacrée à la géoréférencement dans ce guide (à venir) pour savoir comment convertir les coordonnées TRS en degrés décimaux.
- **Données sur les spécimens fossiles** : L'importation de données dans le [module paléontologique](/Editor_Guide/Editing_Searching_Records/paleontological_data#orientation) s'effectue de la même manière que l'importation de données dans les autres champs du formulaire d'édition des occurrences (*Occurrence Editor*). Cependant, lorsque vous utilisez l'option « Téléversement de fichier simplifié » (*Skeletal File Upload*) pour modifier des enregistrements existants, l'importation de valeurs dans le champ « Intervalle précoce » (*Early Interval*) OU « Intervalle tardif » (*Late Interval*) peut remplacer ou compléter les valeurs déjà présentes dans le champ opposé par la valeur importée, et ce, même si ces champs ne sont pas vides (NULL) avant l'importation. Pour modifier les données de ces champs sur un grand nombre d'enregistrements simultanément, privilégiez d'autres méthodes, comme le « Téléversement de fichier complet » (*Full Text File Upload*) ou l'outil de « Modification par lot » (*Batch Editing*).
- **Instantanés (*Snapshots*)** : Si vous utilisez un portail Symbiota pour partager un « instantané » (*snapshot*) de données gérées dans une base de données externe ou locale, votre fichier d'importation DOIT inclure un champ contenant les identifiants uniques de chaque enregistrement de spécimen (`dbpk`). Ce champ sert de lien entre l'enregistrement source et l'enregistrement correspondant dans le portail.
- **Formatage du fichier** :
- Si vous importez un tableau au format CSV dans votre portail — comme c'est généralement le cas pour un « Téléversement de fichier complet » ou un « Téléversement de fichier simplifié » — la première ligne de votre tableau doit contenir les noms des champs que vous avez choisis pour l'importation. 
- Les noms des champs dans votre fichier ne doivent pas nécessairement correspondre exactement aux noms des champs d'importation de données de Symbiota, mais les caractères spéciaux ($#@&%) ne sont pas autorisés. Si vous rencontrez des difficultés lors de l'enregistrement de votre profil d'importation, il est possible que les noms de vos champs soient trop longs ; essayez de les raccourcir dans votre fichier CSV. 
- Vous pouvez inclure autant de champs de données que vous le souhaitez dans votre fichier CSV, bien que certains soient plus couramment utilisés que d'autres. Le « modèle de téléversement » (*upload template*) contient certains des champs les plus fréquemment employés par les herbiers ou les collections botaniques.

## Tutoriels vidéo associés (en anglais)

<ReactPlayer
  playing={false}
  controls
  url="https://youtu.be/3YaBxZdXjeE?si=-V5Tnq_LSHorhJDJ"
/>

<ReactPlayer
  playing={false}
  controls
  url="https://www.youtube.com/watch?v=zrwHIDtae-c"
/>

<ReactPlayer
  playing={false}
  controls
  url="https://youtu.be/0i6zudJFtu8?si=kYsfjOHXs8CeA6OZ"
/>
