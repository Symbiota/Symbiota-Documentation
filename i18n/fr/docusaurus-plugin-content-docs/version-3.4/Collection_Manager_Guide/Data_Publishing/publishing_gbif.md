---
title: "Publication de données sur le GBIF"
authors: ["Ed Gilbert","Katie Pearson"]
editors: ["Katie Pearson", "Lindsay Walker"]
date: 2021-10-07
lastmod: 2026-04-14
sidebar_position: 10
keywords: ["agrégateur","GBIF","publication de données"]
---

import ReactPlayer from "react-player";

:::info

Cette page explique comment publier les données de votre collection sur l'agrégateur mondial [GBIF](https://www.gbif.org).

:::

Les collections gérées comme des « jeux de données dynamiques » (ou « live datasets ») au sein d'un portail Symbiota peuvent être publiées immédiatement sur le GBIF sans difficulté. Les collections utilisant un système de gestion interne (par ex. Specify, Axiell Emu, Filemaker Pro, etc.) et ne publiant qu'un instantané de leurs données vers une instance Symbiota peuvent également utiliser le portail pour publier leurs données sur le GBIF, mais uniquement si : 1) elles ne publient pas déjà leurs données par un autre moyen (par ex. installation IPT, VertNet, etc.), et 2) un _occurrenceID_ (généralement un « GUID ») est inclus dans les données transférées de leur base de données interne vers le jeu de données Symbiota (voir les [instructions supplémentaires ci-dessous](/Collection_Manager_Guide/Data_Publishing/publishing_gbif/#special-instructions-for-snapshots)). Si la collection utilise l'outil de publication Symbiota intégré à Specify, l'_occurrenceID_ sera automatiquement inclus lors du transfert des données depuis Specify.

:::note

Votre portail doit être configuré en tant qu'installation de publication GBIF pour permettre la publication de vos données sur le GBIF. Cette configuration peut être effectuée par l'administrateur de votre portail.

:::

## Procédure pour les nouveaux diffuseurs de données
1. [Suivez ces instructions](/Collection_Manager_Guide/Data_Publishing/requesting_endorsement) pour créer un compte institutionnel auprès du GBIF, afin d'établir un accord de diffusion direct entre le GBIF et votre institution. Comme le compte institutionnel peut servir à répertorier plusieurs jeux de données de collections associés à cette institution (par ex. https://www.gbif.org/publisher/4c0e9f60-c489-11d8-bf60-b8a03c50a862 ), vous devriez vous coordonner avec les autres collections de votre institution, le cas échéant. Notez que les jeux de données institutionnels peuvent être publiés sur le GBIF via différents outils de diffusion. Par exemple, les collections zoologiques pourraient importer leurs données depuis l'IPT de VertNet (http://ipt.vertnet.org) ou leur propre IPT institutionnel, les données sur les plantes vasculaires depuis [SEINet](https://swbiodiversity.org), et celles sur les lichens depuis le [Lichen Portal](https://lichenportal.org). 
* Si vous êtes certain que votre institution n'est pas encore enregistrée, remplissez le formulaire d'inscription indiqué ci-dessus et suivez les instructions fournies par le GBIF. 
* Si votre institution est déjà enregistrée, vérifiez les métadonnées GBIF relatives à votre organisation ainsi que les jeux de données existants, puis contactez le GBIF pour effectuer les modifications nécessaires. Assurez-vous qu'aucun des jeux de données existants ne contient les mêmes données que celles que vous souhaitez publier. Si c'est le cas, prenez les dispositions nécessaires avec le GBIF pour que l'ancien jeu de données soit archivé AVANT la nouvelle publication.
2. Connectez-vous à votre portail Symbiota, accédez à votre **Panneau de configuration administrateur** (cliquez sur « My Profile », puis sur le nom de la collection dans l'encadré « Collection Management ») et sélectionnez **Edit Metadata** (Modifier les métadonnées). 
* Vérifiez que le nom et la description de votre collection sont exacts (ils seront tous deux visibles sur la page du jeu de données correspondante sur le GBIF). 
* Cochez la case « Publish to Aggregators » (Publier vers les agrégateurs), pour le GBIF. Si vous ne voyez pas de case à cocher pour la publication vers le GBIF, contactez l'administrateur de votre portail et demandez-lui de configurer le portail pour la publication vers le GBIF. 
* Cliquez sur le bouton « Save Edits » (Enregistrer les modifications).
3. Retournez au **Panneau de contrôle d'administration** et accédez au lien **Darwin Core Archive Publishing** (Publication d'archives Darwin Core). Cliquez sur le bouton « Create/Refresh Darwin Core Archive » (Créer/Actualiser l'archive Darwin Core).
4. Saisissez la clé d'éditeur GBIF de votre institution et cliquez sur le bouton « Validate Key » (Valider la clé). (La clé GBIF doit respecter le format suivant : xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx, par ex. « 4c0e9f60-c489-11d8-bf60-b8a03c50a872 »). Si la clé est validée, des instructions supplémentaires s'afficheront, accompagnées d'un bouton « Submit Data » (Soumettre les données). Vous pouvez également saisir l'URL complète de votre page d'éditeur GBIF ([exemple](https://www.gbif.org/publisher/d16f32bb-204f-4c07-95eb-6673e90225e9)) ; la clé sera alors extraite automatiquement.
5. Avant de soumettre des données au GBIF pour la première fois, vous devrez contacter le service d'assistance du GBIF (helpdesk@gbif.org). **Consultez le modèle d'e-mail recommandé à envoyer au GBIF en suivant les instructions situées sous le bouton « Validate Key ».**
6. Une fois que le GBIF aura confirmé que le portail est autorisé à soumettre des données sur votre page d'éditeur GBIF, cliquez sur le bouton « Submit Data ». Un lien vers votre jeu de données GBIF s'affichera immédiatement, bien qu'il puisse s'écouler environ une heure avant que vos données ne soient chargées, indexées et disponibles.

## Pour actualiser vos données après la première publication
1. Retournez au **Panneau de contrôle d'administration** et accédez au lien **Darwin Core Archive Publishing** (Publication d'archives Darwin Core). Cliquez sur le bouton « Create/Refresh Darwin Core Archive » (Créer/Actualiser l'archive Darwin Core).

## Instructions spécifiques pour les instantanés (snapshots)
### Comment savoir si mon instantané contient déjà des valeurs _occurrenceid_ ?

Pour déterminer si votre collection d'instantanés contient des valeurs _occurrenceid_ dans un portail Symbiota, vous pouvez :
1) ouvrir un enregistrement existant dans le portail (accédez au panneau de contrôle d'administration : cliquez sur _My Profile_, puis sur le nom de la collection dans la zone _Collection Management_, cliquez ensuite sur _Edit Existing Occurrence Records_ et ouvrez une fiche de catalogue). Faites défiler la page jusqu'à la section « Curation » du formulaire d'édition des occurrences et vérifiez la présence d'une valeur dans le champ _Occurrence ID_. Si ce champ est vide, vos enregistrements ne possèdent pas de valeurs _occurrenceid_ attribuées dans le portail.
2) ou [télécharger une copie de sauvegarde](/Collection_Manager_Guide/Downloading/downloading_copy) de vos données, décompresser le fichier ZIP obtenu, ouvrir le fichier « occurrences.csv » et rechercher des valeurs dans la colonne _occurrenceid_.

:::tip

Si votre collection a déjà été publiée auprès d'un agrégateur externe tel que le GBIF, il est probable que tout ou partie de vos enregistrements se soient déjà vu attribuer des valeurs _occurrenceid_. Ces valeurs **doivent** être incluses dans les données de votre instantané au sein du portail si vous prévoyez de republier ces enregistrements via Symbiota.

:::

### Flux de travail suggérés pour renseigner le champ _occurrenceid_ :

Si vous avez la certitude qu'aucune valeur _occurrenceid_ n'a jamais été attribuée aux enregistrements de votre instantané, vous pouvez renseigner cette information a posteriori en utilisant l'une des méthodes suivantes.

#### Option 1 : Générer des GUID en dehors de Symbiota, puis les importer dans le portail
* Dans votre feuille de calcul destinée à l'importation, incluez une colonne ou un champ nommé « occurrenceid ».
* Remplissez cette colonne avec des GUID générés à l'aide d'un outil tel que celui-ci (copiez-collez les résultats dans votre feuille de calcul) : [guidgenerator.com](https://www.guidgenerator.com).
* Lorsque vous [téléversez](/Collection_Manager_Guide/Importing_Uploading/) des données depuis une feuille de calcul vers le portail, associez vos nouvelles valeurs _occurrenceid_ au champ d'importation de données correspondant. 
* **Important :** Si le portail contient déjà des données, sélectionnez l'option de correspondance basée sur vos valeurs existantes de _catalogNumber_ ou d'_occurrenceid_ afin d'éviter la création d'enregistrements en double lors de l'importation.
* Une fois vos enregistrements téléversés, les nouveaux GUID apparaîtront dans le champ « occurrenceid » du formulaire d'édition des occurrences (Occurrence Editor).

#### Option 2 : Utiliser les GUID générés par Symbiota
* Chaque fois que vous souhaitez transmettre des données au GBIF, envoyez un e-mail à help@symbiota.org pour demander au SSH de remplir le champ _occurrenceid_ pour vous.
* **Important :** Une fois ce champ rempli, n'oubliez pas de télécharger une copie de vos données depuis le portail et d'ajouter les GUID générés par Symbiota à l'endroit où vous gérez vos enregistrements en dehors de Symbiota.

:::warning

Quelle que soit la méthode choisie pour renseigner le champ _occurrenceid_, le point **le plus important** est de veiller à ce que vos valeurs _occurrenceid_ (généralement des GUID) soient conservées avec vos enregistrements de spécimens de référence, quel que soit l'outil utilisé pour leur gestion en dehors de Symbiota (feuille de calcul, MS Access, FileMaker Pro, etc.). À cet égard, nous vous suggérons d'opter pour la méthode la plus pérenne au regard des pratiques internes de gestion des données de votre collection. Veuillez contacter le service d'assistance (Help Desk) du SSH si vous souhaitez publier des données instantanées (snapshots) à partir d'un portail Symbiota et que vous avez besoin de conseils supplémentaires.

:::

<ReactPlayer
  playing={false}
  controls
  url="https://www.youtube.com/watch?v=aDbw9RF4w08"
/>
