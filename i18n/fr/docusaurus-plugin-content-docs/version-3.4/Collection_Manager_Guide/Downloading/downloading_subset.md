---
title: "Téléchargement d'un sous-ensemble de vos données"
date: 2025-07-22
lastmod: 2026-03-30
authors: ["Katie Pearson"]
editors: 
keywords: ["exporter","téléchargement personnalisé"]
---

:::info

Cette page explique comment télécharger un sous-ensemble de vos données à l'aide de l'un des deux outils suivants : le formulaire de recherche d'enregistrements (Record Search Form) ou l'outil d'exportation (Exporter Tool).

:::

## Formulaire de recherche d'enregistrements

Vous pouvez télécharger un sous-ensemble spécifique de vos données directement depuis le [formulaire de recherche d'enregistrements](/Editor_Guide/Editing_Searching_Records/). Effectuez votre recherche, puis cliquez sur le bouton portant l'icône de téléchargement (![Icône de téléchargement](/img/dl.png)) pour télécharger les résultats.

Pour plus d'informations sur les options de téléchargement, consultez [cette page](/User_Guide/Downloading/download_data#download-options).

![Téléchargement depuis la recherche d'enregistrements](/img/recordsearchdownload.png)

## Outil d'exportation

1. Accédez à votre panneau de contrôle d'administration (cliquez sur « Mon profil », puis sur le nom de la collection dans le bloc « Gestion des collections »).
2. Cliquez sur « Outils de traitement » (Processing Tools).
3. Cliquez sur l'onglet « Exportateur » (Exporter).
4. Utilisez le statut de traitement et les filtres supplémentaires pour définir le jeu de données que vous souhaitez télécharger depuis votre collection. Vous pouvez également choisir de télécharger une archive strictement conforme au standard Darwin Core (Darwin Core) ou une archive contenant tous les champs Symbiota (Symbiota Native) ; d'inclure ou non l'historique des déterminations (identifications), les données multimédias (c.-à-d. les liens vers les images) et/ou les attributs d'occurrence (si activés) ; d'obtenir les résultats dans un fichier ZIP ; ainsi que de choisir le format de fichier et le jeu de caractères ([ISO-8859-1](https://en.wikipedia.org/wiki/ISO/IEC_8859-1) ou [UTF-8](https://en.wikipedia.org/wiki/UTF-8)) pour votre téléchargement.
5. Cliquez sur le bouton « Télécharger les enregistrements » (Download Records).

![Outil d'exportation](/img/exportertool2026.png)

#### Téléchargement de spécimens sans géoréférencement

L'outil d'exportation offre également la possibilité de télécharger tous les enregistrements dépourvus de données de géoréférencement. Pour ce faire, sélectionnez « Georeference Export » dans le menu déroulant du bloc « Type d'exportation » (Export Type), situé en haut à droite de l'outil. Choisissez les critères de recherche ou les filtres à appliquer à votre téléchargement, puis cliquez sur « Télécharger les enregistrements ».

#### Téléchargement d'enregistrements géoréférencés par lots

Pour les collections de type « Snapshot » (c.-à-d. les collections dont les données ne sont pas gérées en temps réel sur le portail), il est également possible de télécharger les données de géoréférencement des spécimens ayant fait l'objet d'un géoréférencement par lots sur le portail. Pour ce faire, sélectionnez « Georeference Export » dans le menu déroulant de la zone « Export Type » (Type d'exportation), située en haut à droite de l'outil d'exportation. Choisissez les critères de recherche ou les filtres à appliquer à votre téléchargement, puis cliquez sur « Download Records » (Télécharger les enregistrements). Le fichier généré contiendra les champs suivants :

- institutionCode
- collectionCode
- catalogNumber
- occurrenceId
- decimalLatitude
- decimalLongitude
- geodeticDatum
- coordinateUncertaintyInMeters
- verbatimCoordinates
- georeferencedBy
- georeferenceProtocol
- georeferenceSources
- georeferenceVerificationStatus
- georeferenceRemarks
- minimumElevationInMeters
- maximumElevationInMeters
- verbatimElevation
- localitySecurity
- localitySecurityReason
- modified
- processingStatus
- collId
- sourcePrimaryKey
- occid
- recordID.
