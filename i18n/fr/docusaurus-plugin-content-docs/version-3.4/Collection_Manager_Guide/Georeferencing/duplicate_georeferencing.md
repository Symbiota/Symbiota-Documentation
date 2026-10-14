---
title: "Moissonneur de géoréférencements en double"
date: 2025-09-23
lastmod: 2026-04-14
draft: false
authors: ["Katie Pearson"]
editors: ["Lindsay Walker"]
sidebar_position: 3
keywords: ["géoréférencement", "coordonnées"]
---

import ReactPlayer from "react-player";

:::info

Cette page explique comment utiliser l'outil de récupération des géoréférencements de doublons (*Duplicate Georeference Harvester*). Il vous permet de copier des données de géoréférencement (ainsi que leurs métadonnées) à partir d'enregistrements issus d'autres collections, dès lors que ces derniers sont liés à des enregistrements de votre propre collection.

L'outil vous permet de rechercher des enregistrements dans votre collection et de comparer côte à côte leurs données de géoréférencement avec celles d'enregistrements liés (identifiés comme doublons, c'est-à-dire partageant le même collecteur, le même numéro de collecteur et la même date). Vous pouvez ensuite sélectionner l'enregistrement source parmi les autres collections. Une fois que vous cliquez sur le bouton « Copier les données du doublon », les données de géoréférencement de l'autre collection (champs : `decimalLatitude`, `decimalLongitude`, `geodeticDatum`, `footprintWKT`, `coordinateUncertaintyInMeters`, `georeferencedBy`, `georeferenceRemarks`, `georeferenceSources`, `georeferenceProtocol` et `georeferenceVerificationStatus`) seront copiées dans votre enregistrement.

:::

:::tip

Pour que cet outil puisse trouver des géoréférencements de doublons, vos spécimens doivent déjà être liés en tant que doublons à d'autres spécimens présents dans le portail. Il est recommandé d'exécuter la procédure de liaison par lots des doublons de spécimens (*Batch link specimen duplicates*) disponible dans les outils de regroupement de doublons (*Duplicate Clustering Tools*) avant d'utiliser l'outil de récupération des géoréférencements.

:::

Pour accéder à cet outil, rendez-vous dans votre panneau de contrôle d'administration (cliquez sur « Mon profil », puis sur le nom de la collection dans le bloc « Gestion de la collection »), sélectionnez « Regroupement de doublons » (*Duplicate Clustering*), puis « Copie par lots des données de géoréférencement de doublons » (*Batch copy duplicate georeference data*).

## Effectuer une recherche

Sur l'écran qui s'affiche, plusieurs options vous sont proposées pour affiner votre recherche de doublons d'enregistrements.

![Options de recherche de Duplicate Data Harvester](/img/duplicatedataharvester.png)

Les **Champs personnalisés** (Custom Fields) vous permettent de définir des critères pour les doublons issus d'autres collections que vous souhaitez visualiser. Par exemple, si vous voulez uniquement voir les enregistrements comportant des valeurs de latitude et de longitude, sélectionnez « decimalLatitude » dans le deuxième menu déroulant, puis « IS NOT NULL » dans le menu déroulant suivant, et cliquez sur le signe « plus » (pour ajouter un autre champ personnalisé). Dans ce nouveau champ personnalisé, sélectionnez « decimalLongitude » dans le menu déroulant des champs et « IS NOT NULL » dans le menu déroulant suivant. Voici d'autres critères utiles que vous pourriez envisager :
* georeferenceRemarks IS NOT NULL
* georeferenceBy IS NOT NULL
* coordinateUncertaintyInMeters LESS THAN 10000 (ou toute autre valeur seuil que vous jugez appropriée)

Vous pouvez également filtrer les collections dont vous souhaitez voir les doublons en cliquant sur le bouton « Filter Collections » (Filtrer les collections).

:::tip

Vous pouvez ajouter plusieurs champs personnalisés en cliquant sur l'icône « plus » située à droite du dernier champ personnalisé utilisé.

:::

Par défaut, l'outil ne renvoie que les résultats correspondant aux enregistrements de votre collection dépourvus de valeurs de latitude et de longitude. Cette option peut être désactivée en cochant la case « **Afficher uniquement les spécimens de ma collection sans latitude ni longitude** » .

Parmi les autres options disponibles, citons :

* **Afficher uniquement les doublons dont les géoréférences diffèrent de celles du spécimen cible** : cocher cette case permet d'exclure les doublons dont les géoréférences correspondent exactement à celles de vos enregistrements. Tous les champs de géoréférence (y compris les champs de métadonnées tels que « georeferenceRemarks ») doivent correspondre exactement pour que les doublons soient exclus.

* **Sélection automatique des doublons avec une option unique :** cocher cette case permet de sélectionner automatiquement les options provenant d'autres collections lorsqu'un seul enregistrement correspond à vos critères de recherche. Vous pouvez ainsi sélectionner rapidement les enregistrements répondant à vos critères de base (et copier ensuite les données de géoréférencement associées) sans avoir à prendre de décision supplémentaire.

Cliquez sur le bouton « Rechercher » pour lancer la recherche.

![Bouton Rechercher](/img/searchbutton.png)

## Sélection des géoréférencements en double à copier

Après avoir effectué une recherche, un tableau présentant les enregistrements correspondant à vos critères s'affiche :

|![Exemple de tableau des géoréférencements en double](/img/exampleduplicategeoreferences.png)|
|:--:|
| Les spécimens ou enregistrements « cibles » — c'est-à-dire ceux qui recevront les données en cas de copie — sont mis en évidence par la nuance de gris la plus foncée. |

:::tip

Pour modifier les champs affichés dans ce tableau de résultats, cliquez sur le bouton « Masquer les champs » et cochez les cases correspondant aux champs que vous ne souhaitez pas voir apparaître.

:::

Cochez les cases correspondant aux enregistrements dont vous souhaitez copier les données de géoréférencement.

Pour les enregistrements de votre collection présentant plusieurs doublons correspondants, vous devez cocher la case située à côté d'un seul enregistrement (c'est-à-dire celui qui, selon vos critères institutionnels, possède la « meilleure » géoréférence). Si vous sélectionnez plusieurs enregistrements, c'est le dernier de la liste qui servira de géoréférence « finale ».

Cliquez sur le bouton « Copy Duplicate Data » (Copier les données du doublon) une fois que vous avez sélectionné tous les enregistrements dont vous souhaitez copier les données de géoréférence vers vos fiches de spécimens.

:::warning

Le fait de cliquer sur le bouton « Copy Duplicate Data » **remplacera** les données de géoréférence de l'enregistrement cible (en gris foncé) par celles de l'enregistrement doublon coché. Cela concerne tous les champs suivants : decimalLatitude, decimalLongitude, geodeticDatum, footprintWKT, coordinateUncertaintyInMeters, georeferencedBy, georeferenceRemarks, georeferenceSources, georeferenceProtocol et georeferenceVerificationStatus. **Ne cliquez pas sur ce bouton à moins d'être certain de vouloir inclure les données de tous ces champs dans votre enregistrement final.**

:::

L'outil traitera ensuite les doublons et affichera la liste de tous les enregistrements mis à jour. Cliquez sur le lien du numéro d'identifiant Symbiota pour consulter l'un de ces enregistrements.

![Liste des enregistrements mis à jour par l'outil de géoréférence des doublons](/img/duplicateupdatedrecord.png)

:::info

Les modifications apportées aux enregistrements via cet outil ne seront **pas** consignées dans l'onglet « Edit History » (Historique des modifications) ni dans le tableau « Review/Verify Edits » (Révision/Vérification des modifications). Toutefois, lorsqu'une géoréférence de doublon est copiée d'un enregistrement à un autre, des métadonnées sont automatiquement ajoutées au champ « Georeference Remarks » (Remarques sur la géoréférence) de l'enregistrement cible (exemple : « Copied from duplicate UCSB UCSB_SCIRH00972 »).

:::

<ReactPlayer
  playing={false}
  controls
  url="https://youtu.be/ndyFW1mZuXs?si=W2iO-ZP-cotKCLnA&t=327"
/>
