---
title: "Regroupement de doublons"
date: 2021-12-13
lastmod: 2026-03-30
sidebar_position: 107
authors: ["Katie Pearson"]
keywords: ["duplicates", "duplicate specimens"]
---

import ReactPlayer from "react-player";

:::info

Cette page explique comment visualiser et lier par lots des spécimens en double (spécimens du même taxon collectés le même jour, au même endroit et par la même personne) à l'aide de l'outil de regroupement des doublons (*Duplicate Clustering*).

:::

Les occurrences peuvent être liées individuellement en tant que doublons, pendant ou après la saisie des données, à l'aide des outils disponibles dans l'éditeur d'occurrences. Consultez [cette page](/Editor_Guide/linking_records) pour plus d'informations sur la liaison individuelle des doublons, et [cette page](/Editor_Guide/Editing_Searching_Records/duplicate_matching) pour en savoir plus sur l'utilisation de l'outil de détection des doublons lors de la saisie.

Les occurrences peuvent également être liées automatiquement par lots grâce à l'outil de regroupement des doublons. Cet outil crée un index temporaire combinant les dates de collecte, les numéros de collecteur et les noms de famille des collecteurs, puis lie entre elles toutes les occurrences partageant ces trois caractéristiques.

:::note

La création de doubles de spécimens n'étant pas une pratique universelle pour tous les types de collections, les outils facilitant la mise en correspondance par lots de ces doubles ne sont pas disponibles sur tous les portails. Contactez l'administrateur de votre portail pour activer cette fonctionnalité si nécessaire.

:::

Pour consulter ou associer des doubles, accédez à votre panneau de contrôle d'administration (cliquez sur « Mon profil », puis sur le nom de la collection dans le bloc « Gestion des collections ») et cliquez sur « Regroupement de doubles » (Duplicate Clustering).

- Pour afficher les doubles existants, cliquez sur _Groupes de doubles de spécimens_ (Specimen duplicate clusters).
- Pour afficher les doubles dont les identifications taxonomiques ne concordent pas, cliquez sur _Groupes de doubles de spécimens avec identifications contradictoires_ (Specimen duplicate clusters with conflicted identifications). Une capture d'écran ci-dessous illustre le résultat produit par cet outil.
- Pour associer des doubles par lots, cliquez sur _Association par lots de doubles de spécimens_ (Batch link specimen duplicates). Cette action lancera automatiquement le script d'association par lots pour créer des groupes de doubles.
- Pour utiliser les doubles associés afin de copier les données de géoréférencement d'une fiche de spécimen vers d'autres, cliquez sur _Copie par lots des données de géoréférencement des doubles_ (Batch copy duplicate georeference data). Vous trouverez plus d'informations sur cet outil [**sur cette page**](/Collection_Manager_Guide/Georeferencing/duplicate_georeferencing).

:::tip

Lorsque vous consultez des doublons regroupés, vous pouvez afficher la fiche de n'importe quelle occurrence en cliquant sur le numéro de catalogue.

:::

![Exemple de conflits liés aux doublons](/img/dupewithconflictingid2026.png)

Vous trouverez ici une vidéo explicative montrant comment utiliser les outils de regroupement des doublons pour résoudre les conflits d'identification :

<ReactPlayer
  playing={false}
  controls
  url="https://www.youtube.com/watch?v=kMUzwoHmXw4"
/>
