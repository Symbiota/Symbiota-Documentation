---
title: "Gestion de plusieurs portails"
date: 2022-02-18
lastmod: 2022-02-21
sidebar_position: 10
draft: false
authors: ["Katie Pearson"]
editors: [""]
keywords: ["multiple collections"]
---

#### Que faire si je possède plusieurs collections ? Dois-je toutes les regrouper dans un seul portail ?

Si vous gérez plusieurs collections (par exemple, des plantes vasculaires, des champignons et des bryophytes) au sein de plateformes basées sur Symbiota, il est recommandé de les gérer séparément dans leurs portails de données respectifs. En effet, les référentiels taxonomiques de chaque portail sont spécifiquement adaptés au groupe taxonomique qu'ils ciblent ; de plus, vous bénéficierez davantage des outils optimisant la numérisation (comme la détection des doublons) au sein du portail dédié. À titre d'exemple, l'herbier de la Chico State University gère ses données sur les plantes vasculaires via le portail du *Consortium of California Herbaria* (CCH2) — dédié aux plantes vasculaires des herbiers de Californie —, ses données sur les bryophytes via le *Bryophyte Portal*, et ses données sur les lichens via le *Lichen Portal*. Par ailleurs, une copie de ses données sur les bryophytes et les lichens est également disponible sur le portail CCH2, celui-ci constituant une ressource de référence pour la communauté scientifique en Californie.

#### Est-il possible d'intégrer une même collection dans plusieurs portails ?

Absolument ! Dans certains cas, il peut être pertinent d'inclure tout ou partie des données de votre collection dans plusieurs portails. Si votre collection (ou vos collections) correspond(ent) au périmètre de plusieurs portails, vous pouvez y charger un **instantané** (*snapshot*) de vos données — ou une partie de celles-ci —, même si la gestion courante de ces données s'effectue ailleurs. Cette opération est facilitée par la création d'un profil de chargement de type « Darwin Core Archive Provider », qui permet d'importer une archive Darwin Core (*Darwin Core Archive*) provenant d'un autre portail Symbiota. Si vous ne souhaitez transférer qu'une partie de vos données vers un autre portail, vous pouvez utiliser des **filtres d'importation personnalisés** (*Custom Occurrence Record Import Filters*), disponibles pour les importations via Darwin Core Archive ou IPT. Vous pouvez également solliciter l'administrateur de votre portail pour mettre en place une procédure stockée (*Stored Procedure*) permettant de filtrer votre jeu de données afin de n'inclure que des enregistrements spécifiques.

#### Que faire si ma collection est actuellement hébergée dans un seul portail, mais que je souhaite la répartir entre plusieurs portails ?

Comme indiqué précédemment, vous pouvez ne transmettre qu’une partie de vos données vers un autre portail en utilisant des **filtres d’importation personnalisés pour les enregistrements d’occurrences** (« Custom Occurrence Record Import Filters ») — disponibles pour les importations au format Darwin Core Archive ou via l’IPT — ou bien collaborer avec l’administrateur de votre portail pour mettre en place une procédure stockée (« Stored Procedure ») qui filtrera votre jeu de données afin de ne conserver que certains enregistrements spécifiques. Une fois cette opération effectuée, l’administrateur (ou les administrateurs) de votre portail pourra, s’il le souhaite, supprimer les enregistrements de spécimens du portail d’origine.
