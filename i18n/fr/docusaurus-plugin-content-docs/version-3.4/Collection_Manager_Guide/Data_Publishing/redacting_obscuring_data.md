---
title: "Masquage / Occultation de données"
Date: 2021-11-01
lastmod: 2026-05-08
authors: ["Katie Pearson", "Ed Gilbert"]
editors: ["Lindsay Walker"]
sidebar_position: 20
keywords: ["espèces rares", "protection des données", "occultation"]
---

import ReactPlayer from "react-player";

:::info

Cette page explique le fonctionnement du masquage des données (redaction) dans un portail Symbiota.

:::

Les gestionnaires de collections peuvent souhaiter masquer les données de localisation pour certaines occurrences, par exemple celles concernant des espèces rares ou menacées, ou des sites situés sur des propriétés privées. Dans les portails Symbiota, les données de localisation peuvent être masquées de trois manières : (a) individuellement (par occurrence), (b) globalement (par taxon) ou (c) par État/province.

Une occurrence peut faire l'objet d'un masquage de localisation (« Sécurité de localisation appliquée ») ou non (« Sécurité non appliquée »). Lorsque les paramètres de sécurité sont activés dans l'éditeur d'occurrences (ou que la valeur « 1 » est attribuée au champ de sécurité de l'enregistrement) pour une occurrence donnée, un utilisateur ne disposant pas des droits de lecture ou d'édition pour les espèces rares ne pourra pas voir les éléments suivants pour cette occurrence :

- La localisation à un niveau plus précis que le comté (ou l'équivalent administratif)
- Les coordonnées (si elles sont fournies)
- L'image

## Impact du masquage des données sur les différents utilisateurs

L'application de mesures de sécurité aux occurrences de spécimens affecte les utilisateurs du portail comme suit :

- **Administrateurs, Éditeurs** : tous les détails de localisation sont visibles et modifiables, au niveau de la collection.
- **Lecteurs d'espèces rares** : les détails de localisation sont visibles et téléchargeables, _mais non modifiables_, au niveau de la collection.
- **Tous les autres utilisateurs** : aucun détail de localisation n'est visible en dessous du niveau du comté (si cette information est fournie). Dans la vue publique de l'enregistrement, les champs liés à la localisation contenant des données masquées seront regroupés sous la mention _Information Withheld_ (Information non divulguée).

![Exemple de l'éditeur d'occurrences](/img/redaction_informationwithheld2026.png)

:::tip

La liste complète des champs masqués lorsque la fonction de masquage de localisation est activée comprend : _recordnumber_, _eventdate_, _verbatimeventdate_, _locality_, _locationid_, _decimallatitude_, _decimallongitude_, _verbatimcoordinates_, _locationremarks_, _georeferenceremarks_, _geodeticdatum_, _minimumelevationinmeters_, _maximumelevationinmeters_, _verbatimelevation_, _habitat_, _associatedtaxa_

:::

:::tip

Les utilisateurs disposant de droits d'administrateur peuvent accorder ou révoquer l'accès aux données de leurs collections via le panneau de contrôle d'administration. [Découvrez comment procéder ici](/Collection_Manager_Guide/user_permissions).

:::

## Quels taxons sont protégés dans mon portail ?

La liste de référence des espèces protégées d'un portail donné peut être consultée par tous les utilisateurs, y compris ceux qui ne sont pas connectés au portail.

| ![Espèces protégées](/img/redaction_protectedspecies2026.png)                                                                          |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Pour afficher tous les taxons protégés d'un portail, accédez à _Plan du site > Collections > Espèces protégées_. Cet exemple provient [de SEINet](https://swbiodiversity.org/seinet/collections/misc/protectedspecies.php). |

:::tip

Pour trouver les enregistrements de votre collection faisant l'objet d'une masquage de données, utilisez le formulaire de recherche de l'éditeur de données pour créer une requête où « _Record Security_ + ÉGAL À + 1 ».

:::

## Comment masquer des données

### Masquage individuel des données de localité pour certaines occurrences

Les données de localité peuvent être masquées pour des occurrences individuelles en utilisant la liste déroulante « Security » (dans la section « Locality » de l'éditeur d'occurrence).

![Exemple d'éditeur d'occurrence](/img/redaction_occurrenceeditor2026.png)

### Masquage en lot des données de localité pour certaines occurrences

Si vous souhaitez masquer des données en lot, vous pouvez télécharger un fichier CSV contenant toutes les notices de spécimens concernées depuis le [formulaire de recherche de notices](/Collection_Manager_Guide/Downloading/downloading_subset), puis ajouter une colonne nommée « RecordSecurity ». Saisissez « 1 » dans cette colonne pour tous les spécimens dont vous souhaitez masquer les données (inversement, saisissez « 0 » pour rendre les données publiques ou laissez le champ vide). Utilisez l'outil [Skeletal File Uploader](/Collection_Manager_Guide/Importing_Uploading/#file-upload-or-skeletal-file-upload) pour importer ce tableau dans le portail, en associant la nouvelle colonne au champ _localitySecurity_. Il peut être nécessaire de demander au gestionnaire du portail de supprimer les valeurs existantes dans ce champ avant de procéder à l'importation via le Skeletal File Uploader.

### Masquage global des données de localité pour certains taxons

Les données de localité et les médias (par ex. images) peuvent être masqués pour toutes les occurrences d'un taxon spécifique par un utilisateur disposant des droits « Super Administrator » ou « Taxon Editor ». Pour ce faire, recherchez l'espèce dans le visualiseur d'arbre taxonomique (Taxonomic Tree Viewer) ou l'explorateur de taxonomie (Taxonomy Explorer) et ouvrez l'éditeur (en cliquant sur le nom du taxon ou sur l'icône en forme de crayon à côté du nom). Modifiez le paramètre _Locality Security_ en passant de « show all locality data » (afficher toutes les données de localité) à « hide locality data » (masquer les données de localité).

![Exemple d'éditeur de taxonomie](/img/redaction_taxoneditorexample.png)

**Cette action masquera les données de localité pour toutes les occurrences de ce taxon dans l'ensemble du portail, et pas seulement pour votre collection.** Les collections peuvent choisir de ne pas appliquer cette option en réglant individuellement le champ « Security » sur « Security not applied » dans l'éditeur d'occurrence pour chaque spécimen, ou en contactant le gestionnaire du portail pour effectuer des modifications en lot.

### Masquage des données par État

Enfin, il est possible de masquer les données de localisation et les images relatives aux occurrences d'un taxon donné collecté dans un État spécifique, en gérant une « liste des espèces rares, menacées ou protégées ». Les utilisateurs disposant des droits d'administrateur pour les espèces rares peuvent créer une liste dédiée à la gestion des espèces sensibles, puis attribuer des droits de modification à un ou plusieurs utilisateurs appropriés chargés d'alimenter et de gérer cette liste pour l'État concerné. L'ajout d'une espèce à la liste entraînera automatiquement la protection des détails de localisation pour tous les spécimens collectés dans l'État désigné.

**Cette mesure masquera les données de localisation pour toutes les occurrences de ce taxon dans l'État concerné sur l'ensemble du portail, et pas seulement pour votre collection.** Les collections peuvent choisir de ne pas appliquer cette option en réglant individuellement le champ « Sécurité » sur « Sécurité non appliquée » dans l'éditeur d'occurrences pour chaque spécimen, ou en contactant le gestionnaire du portail pour effectuer des modifications par lots.

### Mes données masquées seront-elles visibles si elles sont publiées sur le GBIF ?

Par défaut, non. Veillez à laisser la case « Masquer les localisations sensibles » (Redact Sensitive Localities) cochée dans l'outil de publication d'archives Darwin Core (Darwin Core Archive Publisher) afin que les données masquées restent dissimulées lors de l'envoi du fichier d'archive Darwin Core au GBIF. Pour accéder à cet outil, allez dans _Panneau de contrôle d'administration > Publication d'archives Darwin Core_ (Administration Control Panel > Darwin Core Archive Publishing). Faites défiler la page jusqu'à la section « Créer/Actualiser l'archive Darwin Core » (Create/Refresh Darwin Core Archive).

N'oubliez pas que le champ _Sécurité_ (Security) doit contenir la valeur « 1 » pour que vos données soient correctement masquées au sein du portail ainsi que lors de leur publication ; cela s'applique aussi bien aux collections gérées en temps réel qu'à celles gérées par instantanés (snapshots). Si le champ _Sécurité_ est vide, vos données resteront visibles et pourront être publiées.

#### Instructions pour créer des listes d'espèces masquées à l'échelle d'un État

1. **Créez une nouvelle liste de contrôle vide pour les espèces rares.**
- Cliquez sur « Mon profil », sélectionnez l'onglet « Listes de contrôle des espèces » et cliquez sur le signe « plus » vert. 
- Modifiez le type de liste de contrôle pour choisir « Liste d'espèces rares, menacées ou protégées ». Si vous ne voyez pas le champ « Type de liste de contrôle » situé sous le champ « Auteur », c'est que vous ne disposez pas des autorisations d'administrateur « Espèces rares » nécessaires pour créer ce type de liste. Dans ce cas, vous pouvez poursuivre la création de la liste (comme d'habitude) et demander ultérieurement à un gestionnaire du portail d'en modifier le type. 
- Saisissez le nom de l'État dans le champ « Localité ». N'utilisez pas d'abréviation et n'ajoutez aucun autre texte que le nom de l'État. 
- La liste de contrôle peut être privée ou publique et mise à la disposition du grand public.
2. **Ajoutez un ou plusieurs éditeurs à la liste de contrôle.**
- Depuis la nouvelle liste de contrôle, cliquez sur l'icône de modification (crayon) située vers la droite de la page.
- Les éditeurs de la liste n'ont pas besoin du statut d'administrateur « Espèces rares » ni d'aucun autre droit de modification particulier pour gérer la liste.
3. Les éditeurs ajoutent les espèces nécessitant une protection à l'aide des outils habituels de modification des listes de contrôle. 

- Consultez les [tutoriels sur les listes de contrôle](/User_Guide/Checklists/) pour obtenir de l'aide sur la création et la gestion de ces listes. 

![Exemple de liste de contrôle](/img/checklist_protected2026.png)

## Comment les utilisateurs peuvent demander l'accès aux données masquées

Les personnes ayant besoin d'accéder à des données masquées pour des motifs légitimes sont encouragées à [contacter directement](/User_Guide/Providing_Feedback/contacting_collection) les personnes indiquées sur les profils des collections pour obtenir cet accès. Toutefois, si la demande est complexe et nécessite de contacter de nombreuses collections, ces personnes peuvent s'adresser au centre d'assistance Symbiota (Symbiota Support Hub) pour obtenir de l'aide afin de contacter les collections concernées. Veuillez tenir à jour les [coordonnées de votre collection](/Collection_Manager_Guide/editing_collection_metadata#collection-contacts) afin que les utilisateurs du portail et le centre d'assistance puissent vous contacter au sujet de ces demandes. Il est également recommandé d'ajouter l'adresse hub@symbiota.org à vos contacts pour éviter que ces messages ne soient bloqués par un pare-feu institutionnel ou dirigés vers les courriers indésirables (spam).

## Related Resources

<ReactPlayer
  playing={false}
  controls
  url="https://vimeo.com/584160186"
/>
