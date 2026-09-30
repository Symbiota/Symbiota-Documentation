---
title: "Ajout d'enregistrements squelettiques"
date: 2021-10-22
lastmod:  2026-03-30
draft: false
authors: ["Ed Gilbert", "Katie Pearson"]
keywords: ["add", "create"]
---

import ReactPlayer from "react-player";

:::info

Cette page explique comment utiliser l'outil de saisie de données minimales (« Skeletal Data Entry ») pour ajouter rapidement des informations de base au portail, notamment lors de la phase d'imagerie. Il peut également servir à réaliser un inventaire rapide d'une collection.

:::

Une vidéo de présentation de l'outil est disponible ci-dessous :

<ReactPlayer
playing={false}
controls
url="http://www.youtube.com/watch?v=NKSWbL8twzk"
/>

Cet outil permet de recueillir des informations de base sur la collection, par exemple lors du processus d'imagerie. L'équipe chargée de l'imagerie peut saisir les informations communes au lot de spécimens traité ; ainsi, à chaque lecture d'un code-barres dans le champ « Numéro de catalogue », une fiche contenant ces données minimales est ajoutée au système. Il est possible de saisir l'intégralité des données en cliquant sur le numéro de catalogue, mais la procédure recommandée consiste à traiter les informations complètes de l'étiquette ultérieurement, directement à partir de l'image de celle-ci.

1. Pour ajouter une fiche de données minimales, accédez à l'outil « Add Skeletal Records » (Ajouter des fiches minimales) via le panneau de contrôle de l'éditeur de données (_cliquez sur « Mon profil », puis sur le nom de la collection dans la section « Gestion des collections »_). Une page semblable à celle ci-dessous s'affichera.

![Skeletal Uploader](/img/addskeletal.jpg)

2. Pour choisir les champs à afficher sur le formulaire de saisie, cliquez sur l'icône des options d'affichage (un petit tableau gris) située au-dessus du champ « Scientific Name » (Nom scientifique), entouré dans l'image ci-dessus.
3. Dans le menu déroulant, cochez ou décochez les cases correspondant aux champs que vous souhaitez afficher. Les champs suivants sont généralement recommandés pour la saisie de données minimales : Nom scientifique, Famille, État/Province et Comté/Paroisse.
4. Sélectionnez l'action que le module de saisie devra effectuer lorsqu'une fiche existe déjà pour un numéro de catalogue (code-barres) scanné.

:::note

Même si vous choisissez l'option « Append values ​​to existing records » (Ajouter des valeurs aux fiches existantes), les données minimales ne remplaceront pas les valeurs déjà présentes dans les champs.

:::

5. Si vous utilisez les champs recommandés ci-dessus, saisissez le nom scientifique en commençant par taper le nom figurant sur l'étiquette du spécimen, puis sélectionnez le nom approprié dans la liste déroulante.
6. Si vous le souhaitez et/ou si cela est possible (selon les informations figurant sur la fiche du spécimen), saisissez l'État/la province et le comté/la paroisse correspondant au lieu de collecte, si le spécimen provient des États-Unis ou du Canada. L'auteur et la famille associés au nom du taxon s'afficheront automatiquement si ce dernier figure dans la table des taxons du portail.
7. Saisissez le numéro du code-barres dans le champ « Numéro de catalogue » : cliquez dans ce champ, puis scannez le code-barres du spécimen.
8. Une fois tous les champs remplis, cliquez sur « Ajouter l'enregistrement » .

:::warning

Après avoir cliqué sur « Add Record », les données saisies dans les champs de la section « Données de base » ne seront PAS effacées ; seul le champ « Catalog Number » sera vidé. Ce fonctionnement vise à faciliter la saisie rapide de données de base pour des lots de spécimens similaires (par exemple, des spécimens appartenant à la même espèce). Il convient d'être particulièrement vigilant lors du passage d'une espèce ou d'un lieu de collecte à un autre, car il est facile d'oublier de modifier les informations contenues dans ces champs.

:::

![Enregistrements sommaires ajoutés](/img/skeletaladded.png)

:::tip

Si un utilisateur doit modifier un enregistrement sommaire (*skeletal record*) précédemment saisi, il peut cliquer sur le numéro de catalogue de l'enregistrement tel qu'il apparaît dans la liste située sous la zone « Skeletal Data » (Données sommaires). Veuillez noter que cette liste disparaît si la page est actualisée. Depuis cette page, vous pouvez également ajouter une image ou une autre ressource multimédia à l'enregistrement en cliquant sur l'icône située à droite du numéro de catalogue.

:::

Vous trouverez des précisions supplémentaires sur l'outil de saisie des données sommaires ici : [Guide de saisie des données sommaires SERNEC](https://herbarium.appstate.edu/sites/herbarium.appstate.edu/files/sernec-tcn.skeletaldataentryv3.pdf)
