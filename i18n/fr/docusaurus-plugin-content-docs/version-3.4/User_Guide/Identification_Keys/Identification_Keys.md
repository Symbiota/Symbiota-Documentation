---
title: "Clés d'identification"
date: 2022-10-31
lastmod: 2022-10-31
draft: false
sidebar_position: 50
authors: ["Katie Pearson"]
keywords: ["checklist","keys","identification","character","state","ID"]
---

import ReactPlayer from "react-player";

:::info

Cette page explique comment utiliser les clés d'identification intégrées aux listes d'espèces (checklists) des portails Symbiota. Consultez notre documentation sur les [listes d'espèces](../Checklists), la [gestion des caractères et de leurs états](admin) et l'**attribution d'états de caractères aux taxons** [ici](edit).

:::

### Structure des clés d'identification

Les clés d'identification sont élaborées à partir d'une liste de **caractères** possédant chacun plusieurs **états**.

Les **caractères** sont des catégories de traits communs à tous les membres d'un taxon (par exemple, « longueur moyenne de l'aile » ou « phyllotaxie »).

Un **état** correspond au trait spécifique observé au sein du taxon (par exemple, « 3-15 mm » ou « opposée », pour les caractères cités ci-dessus). Actuellement, les états ne peuvent être que de nature qualitative ou catégorielle (c'est-à-dire qu'il n'est pas possible de saisir une valeur numérique).

![Exemple de caractère et d'états de caractère](/img/charactervsstate.jpg)

La mise en place de clés d'identification sur un portail nécessite que l'administrateur importe ou ajoute les valeurs des caractères et de leurs états (voir les instructions pour les administrateurs [ici](admin)). Ensuite, un éditeur de clés d'identification peut attribuer certaines valeurs d'état à des taxons spécifiques (voir les instructions pour les éditeurs [ici](edit)).

### Utilisation des clés d'identification

:::note

*Les clés d'identification ne sont pas activées ni configurées sur tous les portails ; leur utilisation pour un grand nombre de taxons nécessite une configuration approfondie. Pour accéder à cette fonctionnalité, veuillez contacter l'administrateur de votre portail.

:::

Les clés d'identification peuvent être utilisées au sein des listes d'espèces pour identifier un taxon possédant des états de caractères spécifiques. L'utilisateur peut sélectionner les états correspondant à ceux de son échantillon ou spécimen ; les taxons présentant ces mêmes états s'afficheront alors dans la liste.

![Exemple de clé d'identification](/img/idkeys1_v2.jpg)

Notez que les taxons affichés à gauche incluront **uniquement** ceux présents dans la liste d'espèces initiale.

### Ressources associées

<ReactPlayer
  playing={false}
  controls
  url="http://www.youtube.com/watch?v=GMk2WkE3Hno"
/>