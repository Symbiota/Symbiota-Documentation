---
title: "Outils de nettoyage pour la géographie"
date: 2026-03-30
sidebar_position: 15
draft: false
authors: ["Katie Pearson"]
keywords: ["géographie", "nettoyage des données"]
---

:::info

Cette page explique comment utiliser les deux outils de nettoyage géographique disponibles dans les portails Symbiota pour nettoyer par lots les données géographiques des occurrences.

:::

Les deux outils de nettoyage géographique sont la visionneuse de distribution géographique (*Geographic Distribution viewer*) et l'outil de nettoyage géographique (*Geography Cleaning Tool*).

### Visionneuse de distribution géographique

Accédez à cet outil via le **Panneau de contrôle d'administration** (*cliquez sur « Mon profil », puis sur le nom de la collection dans le bloc « Gestion des collections »*). Cliquez sur **Outils de nettoyage des données**, puis sur **Distributions géographiques**.

La visionneuse de distribution géographique permet d'examiner les pays, les États/provinces et les comtés présents dans votre base de données. Cet outil permet de détecter les fautes d'orthographe, les entrées non normalisées (par exemple, « USA » au lieu de « United States ») ou les erreurs suspectes (par exemple, « United Arab Emirates » au lieu de « United States »). Pour afficher les valeurs d'État/province pour chaque pays, cliquez sur le nom du pays. Ensuite, pour afficher les valeurs de comté pour chaque État/province, cliquez sur le nom de l'État/province.

Un utilisateur disposant de droits d'administrateur peut corriger individuellement les erreurs concernant les pays, les États/provinces et/ou les comtés en cliquant sur le nombre situé à côté du nom du lieu (entouré sur la capture d'écran suivante), ou rechercher ces enregistrements à l'aide du formulaire de recherche pour les modifier par lots.

![Visionneuse de distribution géographique](/img/geographicdistribution2026.png)

### Outil de nettoyage des données géographiques

Accédez à cet outil via le **Panneau de contrôle d'administration** (*cliquez sur « Mon profil », puis sur le nom de la collection dans le bloc « Gestion des collections »*). Cliquez sur **Outils de nettoyage des données**, puis sur **Outils de nettoyage des données géographiques**.

L'outil de nettoyage des données géographiques recherchera dans votre base de données les termes géographiques non normalisés (pays, États/provinces et comtés) utilisés dans votre collection. Ces derniers seront répertoriés comme « douteux ». Pour consulter et éventuellement modifier ces enregistrements, vous pouvez cliquer sur le lien « [nombre] enregistrements » (un exemple est entouré ci-dessous).

![Outil de nettoyage des données géographiques](/img/geocleaningtool2026.png)

Cet outil vérifie également s'il existe des enregistrements dépourvus de données dans les champs « pays », « État/province » ou « comté », alors qu'ils contiennent des informations géographiques dans d'autres champs. Par exemple, la ligne « Pays nul avec État non nul » répertorie tous les enregistrements ne comportant pas de valeur pour le pays, alors qu'un État ou une province est indiqué dans le champ correspondant de l'enregistrement. Vous pouvez cliquer sur « [nombre] enregistrements » et attribuer une valeur géographique plus précise à ces enregistrements (voir l'exemple ci-dessous).

![Exemple de l'outil de nettoyage des données géographiques](/img/geocleaningexample2026.png)

Des listes similaires sont fournies pour les enregistrements dont le champ « État/province » est vide mais le champ « comté » renseigné, ainsi que pour ceux dont le champ « comté » est vide mais le champ « localité » renseigné.
