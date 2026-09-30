---
title: "Types de management"
date: 2021-12-16
lastmod: 2026-02-24
draft: false
authors: ["Katie Pearson"]
editors: ["Katie Pearson", "Lindsay Walker"]
keywords: ["management", "live", "snapshot"]
---

Il existe deux manières principales pour les collections de présenter leurs données sur les portails Symbiota : en mode **direct** (ou « live ») ou sous forme d'**instantané** (ou « snapshot »). La méthode de gestion des données utilisée par chaque collection dans Symbiota est indiquée sur son profil respectif. Par exemple :

![Exemple de type de gestion](/img/managementtype-example.png)

<figcaption align = "center">_Profil de la collection [RSA-Wood dans CCH2](https://www.cch2.org/portal/collections/misc/collprofiles.php?collid=105) indiquant que le type de gestion est « Live Data » (données en temps réel)._</figcaption>

Une collection fonctionnant en mode **direct** gère ses données directement dans le portail Symbiota. La saisie, la modification et la numérisation des données s'effectuent via un navigateur web au sein du portail. Ces collections peuvent débuter avec le volume de données de leur choix ; si la collection dispose déjà d'un tableur, d'une base de données ou d'une archive Darwin Core contenant ses données, elle peut [importer](/Collection_Manager_Guide/Importing_Uploading/) ces informations dans le portail Symbiota et les y gérer par la suite. Une collection peut également entamer le processus de numérisation dans le portail sans données initiales. Parmi les avantages de la gestion directe dans un portail Symbiota, on peut citer :

- La gestion des données via un navigateur web, permettant à plusieurs utilisateurs (disposant des autorisations appropriées) de gérer les données à distance
- L'accès à des outils de numérisation efficaces, tels que la géoréférencement par lots et la récupération de données de doublons
- L'accès à des outils de nettoyage des données (taxonomie, géographie, etc.)

Une collection fonctionnant par **instantané** gère activement les données de ses spécimens dans un système de gestion de contenu distinct (par ex. Microsoft Access, Specify, FileMaker Pro, EMu, CSpace, etc.) et importe une copie statique de ses enregistrements dans un portail Symbiota afin de les rendre accessibles à un plus grand nombre d'utilisateurs et/ou de les publier sur des agrégateurs mondiaux. Ces collections peuvent importer leurs données dans un portail Symbiota via un tableur, une archive Darwin Core, ou encore un système IPT (Integrated Publishing Toolkit) ou tout autre système basé sur le web. Une collection peut configurer et enregistrer un profil d'importation permettant des mises à jour ultérieures des données, à condition que l'identifiant unique provenant de la source (appelé « dbpk » dans un portail Symbiota) reste inchangé d'une importation à l'autre.

**Dans les deux cas, les collections présentes sur les portails Symbiota peuvent bénéficier de :**

- La participation à un réseau disposant d'une expertise régionale et/ou taxonomique spécifique
- Une assistance pour les requêtes système (backend) et la résolution de problèmes quotidiens via le centre de support Symbiota (Symbiota Support Hub)
- La publication rapide et facile de vos données vers des agrégateurs mondiaux (par ex. le GBIF), si vous le souhaitez

:: info
Certains outils de gestion de données sont désactivés pour les collections de type « snapshot » afin d'éviter toute modification accidentelle des données et, par conséquent, tout conflit entre les données du portail et votre base de données de référence principale.
::
