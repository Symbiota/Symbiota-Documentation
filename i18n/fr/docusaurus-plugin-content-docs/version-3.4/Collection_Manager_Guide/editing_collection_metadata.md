---
title: "Modification des métadonnées et des coordonnées de la collection"
date: 2021-11-16
lastmod: 2026-03-30
sidebar_position: 110
draft: false
authors: ["Katie Pearson", "Lindsay Walker"]
keywords: ["collection name", "metadata", "contact info"]
---

:::info

Cette page explique comment modifier ou ajouter des coordonnées ou des informations concernant votre collection (par exemple : page d'accueil, titre de la collection, acronyme, description). Les nouvelles collections devront remplir [ce formulaire](https://forms.gle/JcSB35c9wyPxiFPi7) pour faciliter la configuration initiale de leur profil ; ces informations pourront être modifiées ultérieurement en suivant les instructions ci-dessous. Si vous choisissez de [publier des données sur le GBIF](/Collection_Manager_Guide/Data_Publishing/publishing_gbif), les métadonnées fournies pour votre collection seront également transmises au GBIF.

:::

![Exemple de modification des métadonnées](/img/metadata_editor.png)

## Métadonnées de la collection

1. Accédez à votre panneau de contrôle d'administration (_cliquez sur « Mon profil », puis sur le nom de la collection dans le bloc « Gestion de la collection »_).
2. Dans le panneau de contrôle d'administration, cliquez sur « Modifier les métadonnées ». Dans le premier onglet, vous pouvez modifier les éléments suivants :
- **Code de l'institution** - Le nom (ou l'acronyme) utilisé par l'institution qui détient les enregistrements d'occurrences. Ce champ est obligatoire. Pour plus de détails, consultez la définition Darwin Core. Les herbiers doivent également enregistrer ce code auprès de l'[Index Herbariorum](https://sweetgum.nybg.org/science/ih/). 
- **Code de la collection** - Le nom, l'acronyme ou le code identifiant la collection ou le jeu de données dont provient l'enregistrement. Ce champ est facultatif. Pour plus de détails, consultez la définition Darwin Core. 
- **Nom de la collection** - Le titre de votre collection, par ex. « Arizona State University Vascular Plant Herbarium ». 
- **Description** - Une brève description de votre collection et de son contenu (2000 caractères maximum). Les détails peuvent inclure des informations telles que la portée taxonomique et géographique de la collection, ses points forts ainsi que d'autres éléments marquants (par ex. collecteurs notables, périodes couvertes et/ou expéditions de terrain). 
- **Latitude/Longitude** - Saisissez les coordonnées à l'aide de l'icône en forme de globe. 
- **Catégorie** (le cas échéant) - par ex. bryophytes, lichens, poissons, si le portail regroupe plusieurs groupes taxonomiques.
- **Autoriser les modifications publiques** - Cocher la case « Autoriser les modifications publiques » permettra à tout utilisateur connecté au système de modifier les fiches de spécimens et de corriger les erreurs présentes dans la collection. Toutefois, si l'utilisateur ne dispose pas d'une autorisation explicite pour la collection concernée, les modifications ne seront appliquées qu'après avoir été examinées et approuvées par l'administrateur de la collection. 
- **Licence** - Un document juridique accordant une autorisation officielle d'utilisation de la ressource. Ce champ peut être limité à un ensemble de valeurs prédéfinies en modifiant le fichier de configuration central du portail. Pour plus de détails, consultez la [définition Darwin Core](http://rs.tdwg.org/dwc/terms/index.htm#dcterms:license) et les [licences Creative Commons](https://creativecommons.org/about/cclicenses/). - **Détenteur des droits** - L'organisation ou la personne qui gère ou détient les droits relatifs à la ressource. Pour plus de détails, consultez la [définition Darwin Core](http://rs.tdwg.org/dwc/terms/index.htm#dcterms:rightsHolder). 
- **Droits d'accès** - Informations ou lien URL vers une page détaillant les conditions d'utilisation des données. Consultez la [définition Darwin Core](http://rs.tdwg.org/dwc/terms/index.htm#dcterms:accessRights). 
- **Type de jeu de données** - « Spécimens conservés » désigne un type de collection contenant des échantillons physiques pouvant être examinés par des chercheurs et des experts en taxonomie. Utilisez « Observations » lorsque l'enregistrement ne repose pas sur un spécimen physique. « Gestion des observations personnelles » correspond à un jeu de données dans lequel les utilisateurs inscrits peuvent gérer de manière autonome leur propre sous-ensemble d'enregistrements. Les enregistrements saisis dans ce jeu de données sont explicitement liés au profil de l'utilisateur et ne peuvent être modifiés que par ce dernier. Ce type de collection est généralement utilisé par les chercheurs de terrain pour gérer les données de leurs collections et imprimer des étiquettes avant de déposer le matériel physique dans une collection. Bien que les collections personnelles soient représentées par un échantillon physique, elles sont classées comme des « observations » tant que le matériel physique n'est pas rendu accessible au public au sein d'une collection.e physical material is publicly available within a collection.
- **Type de gestion** - Utilisez « Snapshot » (instantané) lorsqu'il existe une base de données interne distincte pour la collection et que le jeu de données au sein du portail Symbiota n'est qu'une copie (instantané) de la base de données centrale, mise à jour périodiquement. Un jeu de données « Live » (en direct) correspond au cas où les données sont gérées directement dans le portail et où la base de données centrale est constituée des données du portail. 
- **Source de l'identifiant unique global (GUID)** - L'identifiant d'occurrence (*Occurrence Id*) est généralement utilisé pour les jeux de données de type « Snapshot » lorsqu'un champ GUID est fourni par la base de données source (par ex. la base de données Specify) et que ce GUID est associé au champ *occurrenceId*. L'utilisation de l'identifiant d'occurrence comme GUID n'est pas recommandée pour les jeux de données « Live ». Le numéro de catalogue (*Catalog Number*) peut être utilisé lorsque la valeur contenue dans ce champ est unique à l'échelle mondiale. L'option « Symbiota Generated GUID (UUID) » amène le portail Symbiota à générer automatiquement des GUID de type UUID pour chaque enregistrement. Cette option est recommandée pour de nombreux jeux de données « Live », mais n'est pas autorisée pour les collections de type « Snapshot » gérées dans un système de gestion local. Le guide d'iDigBio sur les GUID est disponible [ici](https://www.figma.com/proto/ogNJfQqQkXkFo1ZA87gtsc/GUID-Explorable?node-id=2%3A3&scaling=contain&page-id=0%3A1&starting-point-node-id=2%3A3). 
- **Publication vers le GBIF** - Active les outils de publication vers le GBIF disponibles dans l'option de menu « Darwin Core Archive Publishing ». 
- **URL de l'icône** - Téléversez un fichier image d'icône ou saisissez l'URL d'une icône représentant la collection. Si vous saisissez l'URL d'une image déjà hébergée sur un serveur, cliquez sur « Enter URL ». Le chemin de l'URL peut être absolu ou relatif. L'utilisation d'icônes est facultative. 
- **Ordre de tri** - Laissez ce champ vide si vous souhaitez que les collections soient triées par ordre alphabétique (par défaut).
- **ID de la collection** - Identifiant unique global pour cette collection (voir dwc:collectionID) : si votre collection possède déjà un GUID attribué précédemment, cet identifiant doit être indiqué ici. Pour les spécimens physiques, la meilleure pratique recommandée consiste à utiliser un identifiant provenant d'un registre de collections tel que le [Global Registry of Biodiversity Repositories](http://grbio.org).

## Contacts de la collection

1. Accédez à votre panneau de contrôle d'administration (_cliquez sur « Mon profil », puis sur le nom de la collection dans le bloc « Gestion de la collection »_).
2. Dans le panneau de contrôle d'administration, cliquez sur **Contacts et ressources**. Dans cet onglet, vous pouvez :
3. Dans l'onglet « Contacts et ressources », vous pouvez ajouter des liens vers d'autres ressources (par ex. pages d'accueil ou pages de laboratoire), ajouter ou modifier des coordonnées, ou ajouter ou modifier l'adresse postale de votre institution. Cliquez sur l'icône en forme de crayon pour modifier ou sur l'icône « X » pour supprimer des liens ou ressources existants. **Il est fortement recommandé d'indiquer au moins deux contacts** et, si possible, de faire figurer parmi eux une adresse e-mail générique du département (par ex. yourherbarium@youruniversity.edu).

| ![Contacts de la collection](/img/contactsexample2026.png)                   |
| :---------------------------------------------------------------------------------: |
| Les coordonnées sont affichées publiquement en haut de la page de profil de votre collection. |
