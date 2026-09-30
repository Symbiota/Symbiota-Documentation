---
title: "Citations de données"
date: 2022-10-26
lastmod: 2025-05-14
authors: ["Lindsay Walker"]
editors: ["Katie Pearson"]
draft: "false"
sidebar_position: 50
keywords: ["citations", "gbif", "data publishing"]
---

import ReactPlayer from "react-player";

:::info

Certaines fonctionnalités de citation nécessitent une configuration initiale par le gestionnaire de votre portail ou par le centre d'assistance Symbiota (Symbiota Support Hub) avant leur mise en œuvre complète. [Veuillez consulter la documentation destinée aux gestionnaires de portail pour plus d'informations](/Portal_Manager_Guide/Current_Notes/citations/).

:::

À mesure que les collections sont mises en ligne, il devient de plus en plus nécessaire de les citer correctement afin d'assurer une connectivité numérique totale entre vos spécimens, leurs [données étendues](https://academic.oup.com/bioscience/article/72/10/978/6648186) et la littérature scientifique publiée. Symbiota propose diverses options permettant d'attribuer correctement les données partagées via nos portails. **Il est vivement conseillé aux gestionnaires de collections d'inviter les utilisateurs de leurs données à inclure tous les éléments de ces citations afin de tirer pleinement parti de leurs fonctionnalités.**

<ReactPlayer
  playing={false}
  controls
  url="https://www.youtube.com/watch?v=ZE3SUgNR3qg"
/>

## Citations des collections

### Collections publiées sur le GBIF

Les collections qui publient leurs données sur le GBIF bénéficient automatiquement d'un suivi robuste de l'utilisation des données grâce à la génération d'un DOI identifiant votre collection de manière unique en ligne. Lorsque ce DOI est inclus dans les citations de vos données, un suivi automatisé des citations devient possible. La documentation du GBIF à ce sujet est disponible [ici](https://www.gbif.org/citation-guidelines).

![Comment citer vos données sur le GBIF](/img/citation_gbif1.png)

#### Où trouver la citation correctement formatée de ma collection ?

Pour que les citations renvoient vers vos collections sur le GBIF et Symbiota, les utilisateurs doivent citer vos données correctement. Si cette fonctionnalité est activée sur votre portail, des suggestions de citation seront générées automatiquement sur la page de profil de votre collection (voir l'image ci-dessous). Bien que ces citations puissent être reformatées pour se conformer aux normes exigées par les éditeurs, chaque élément de la citation doit être inclus, **l'élément le plus important étant le DOI exprimé _sous forme d'URL_**.

> [Exemple de citation](https://biorepo.neonscience.org/portal/collections/misc/collprofiles.php?collid=39) :
> NEON Biorepository Data Portal (2022). NEON Biorepository Carabid Collection (Pinned Vouchers). Jeu de données d'occurrences https://doi.org/10.15468/zyx3fn consulté via le portail de données NEON Biorepository (https://biorepo.neonscience.org/) le 25/10/2022.

Il est judicieux d'encourager les chercheurs, en amont, à citer correctement vos données conformément à ces directives, disponibles sur le profil de votre collection :

![Exemple de citation sur le profil](/img/citation_analog.png)

#### Que se passe-t-il une fois que mes données sont citées ?

Si vos données sont correctement citées dans des publications disponibles en ligne, le GBIF recensera ces citations une fois qu'elles auront été indexées par Google Scholar. Ces citations seront alors comptabilisées dans le « widget de citation » qui s'affiche en haut du profil de votre collection. En cliquant sur ce widget, vous accéderez à la bibliographie des travaux ayant utilisé les données numérisées de votre collection :

![Exemple de widget de citation GBIF](/img/citation_widget.png)

:::note

Pour en savoir plus sur les directives de citation du GBIF, consultez cette page : [https://www.gbif.org/citation-guidelines](https://www.gbif.org/citation-guidelines).

:::

### Collections _non_ publiées sur le GBIF

Si votre collection n'est pas publiée sur le GBIF, vous pouvez tout de même encourager les chercheurs à citer les données de votre collection en utilisant la citation générée automatiquement dans votre profil, au-dessus de la section « Statistiques de la collection ». Cette citation peut être adaptée pour répondre aux exigences de différents styles de citation ; toutefois, tous les éléments doivent y figurer, **en particulier l'identifiant du jeu de données et les URL, qui sont propres à votre collection**.

> [Exemple de citation](https://biorepo.neonscience.org/portal/collections/misc/collprofiles.php?collid=30) :
> Soil Collection (Distributed Periodic). Jeu de données d'occurrences (ID : cfb05bfe-b267-471a-b538-e5b644e3afa7) https://biorepo.neonscience.org/portal/content/dwca/NEON-SOIC-DP_DwC-A.zip consulté via le portail de données NEON Biorepository (https://biorepo.neonscience.org/), le 25/10/2022.

:::tip

Découvrez comment publier vos données sur le GBIF [ici](/Collection_Manager_Guide/Data_Publishing/publishing_gbif).

:::

## Téléchargement de données

Lorsque vous téléchargez des données depuis un portail Symbiota, un fichier « CITEME.txt » est inclus dans le lot de données. Ce fichier contient une suggestion de citation ainsi que l'URL de la politique d'utilisation des données du portail, le cas échéant.

Exemple de contenu du fichier CITEME.txt :

> Ce lot de données a été téléchargé depuis le portail Ecdysis le 25/10/2022 à 17:03:40. <br></br>
> Veuillez utiliser le format suivant pour citer ce jeu de données :<br></br>
> Données d'occurrence de biodiversité publiées par : Portail Ecdysis (consulté via le portail Ecdysis, https://ecdysis.org, 25/10/2022). <br></br>
> Pour plus d'informations sur les formats de citation, veuillez consulter la page suivante : https://ecdysis.org/includes/usagepolicy.php

## Politique d'utilisation des données et citations du portail

Certaines communautés de portails définissent leur propre politique d'utilisation des données (couvrant les médias et les notices de spécimens) à l'échelle du portail, incluant un format de citation recommandé. Ces informations sont généralement accessibles via le chemin suivant : **_Plan du site_ > _Médiathèque_ > _Politique d'utilisation et informations sur les droits d'auteur_**. Pour demander des modifications à la politique d'utilisation des données de votre portail ou pour en ajouter une, veuillez contacter le gestionnaire de votre portail.

| ![Exemple de politique d'utilisation des données d'un portail](/img/citation_portal2026.png)                                  |
| :-------------------------------------------------------------------------------------------------------------------------: |
| Directives de citation fournies dans la [politique d'utilisation des données du portail CCH2](https://www.cch2.org/portal/includes/usagepolicy.php) |
