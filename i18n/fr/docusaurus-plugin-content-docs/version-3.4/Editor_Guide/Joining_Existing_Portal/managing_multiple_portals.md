---
title: "Gestion de plusieurs portails"
date: 2022-02-18
lastmod: 2025-03-31
draft: false
authors: ["Katie Pearson"]
editors: ["Lindsay Walker"]
keywords: ["multiple collections"]
---

### Que faire si je possède plusieurs collections ? Dois-je les regrouper sur un seul portail ?
Si vous gérez plusieurs collections (par exemple, plantes vasculaires, champignons et bryophytes) et souhaitez les gérer en temps réel sur des plateformes basées sur Symbiota, il est recommandé de les gérer séparément sur leurs portails de données respectifs. En effet, les référentiels taxonomiques de ces portails sont optimisés pour le groupe taxonomique qu'ils ciblent ; vous aurez ainsi plus de chances de tirer parti des outils d'efficacité liés à la numérisation (comme la détection de doublons) propres à chaque portail.

Par exemple, l'herbier de l'université d'État de Chico (Chico State University) gère ses [données sur les plantes vasculaires](https://www.cch2.org/portal/collections/misc/collprofiles.php?collid=44) via le portail du Consortium of California Herbaria (CCH2) — qui se concentre sur les plantes vasculaires des herbiers de Californie —, ses [données sur les bryophytes](https://bryophyteportal.org/portal/collections/misc/collprofiles.php?collid=85) sur le portail dédié aux bryophytes (Bryophyte Portal) et ses données sur les lichens sur le portail dédié aux lichens (Lichen Portal). Toutefois, des copies « instantanées » (ou *snapshots*) de leurs [données sur les bryophytes](https://www.cch2.org/portal/collections/misc/collprofiles.php?collid=65) et [sur les lichens](https://www.cch2.org/portal/collections/misc/collprofiles.php?collid=63) sont également disponibles sur le portail CCH2, celui-ci constituant une ressource pour la communauté californienne.

### Que faire si je souhaite inclure la même collection dans plusieurs portails ?
C'est tout à fait possible ! Dans certains cas, plusieurs portails peuvent tirer profit de l'intégration de tout ou partie des données de votre collection. Si votre ou vos collections entrent dans le champ d'application de plusieurs portails, vous pouvez charger une **copie instantanée** de vos données (ou d'un sous-ensemble de celles-ci) sur différents portails, même si vous ne gérez pas vos données directement sur ces derniers. Cette opération s'effectue aisément en créant un profil de chargement de type « Darwin Core Archive Provider », qui permet d'importer une archive Darwin Core provenant d'un autre portail Symbiota. Pour ne transmettre qu'une partie de vos données à l'autre portail, vous pouvez utiliser des **filtres d'importation personnalisés pour les enregistrements d'occurrence** (disponibles pour les importations au format Darwin Core Archive et via IPT) ou collaborer avec l'administrateur de votre portail pour mettre en place une procédure stockée qui filtrera votre jeu de données afin de ne conserver que des enregistrements spécifiques.

### Que faire si ma collection se trouve actuellement sur un portail, mais que je souhaite la répartir entre plusieurs portails ?
Comme indiqué précédemment, vous pouvez ne transmettre qu'une partie de vos données à un autre portail en utilisant des **filtres d'importation personnalisés pour les enregistrements d'occurrence** (disponibles pour les importations au format Darwin Core Archive et via IPT) ou en collaborant avec l'administrateur de votre portail pour mettre en place une procédure stockée qui filtrera votre jeu de données afin de ne conserver que des enregistrements spécifiques. Une fois cette opération effectuée, le ou les administrateurs de votre portail pourront, s'ils le souhaitent, supprimer les enregistrements de spécimens du portail d'origine.