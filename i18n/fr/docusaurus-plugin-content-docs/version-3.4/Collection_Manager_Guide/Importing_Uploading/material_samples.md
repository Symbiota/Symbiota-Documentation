---
title: "Échantillons de matériaux"
date: 2025-06-23
lastmod: 2026-03-30
draft: false
sidebar_position: 12
authors: ["Katie Pearson"]
keywords: ["sequences","tissue samples"]
---

:::info

Cette page décrit comment importer par lot des données relatives aux « échantillons de matériel » (*material samples*) dans votre collection. Un échantillon de matériel est généralement considéré comme un sous-échantillon d'une occurrence.

:::

:::note

L'onglet « Échantillon de matériel » (*Material Sample*) n'est visible que s'il a été activé pour votre collection. Contactez le gestionnaire de votre portail pour savoir si cet onglet a été configuré pour votre portail Symbiota.

:::

1. Accédez à votre panneau de contrôle d'administration (*cliquez sur « Mon profil », puis sur le nom de la collection dans la section « Gestion des collections »*). 
2. Cliquez sur « Importer/Mettre à jour les enregistrements de spécimens » (*Import/Update Specimen Records*), puis sélectionnez « Importation de données étendues » (*Extended Data Import*). 
3. Cliquez sur le bouton « Choisir un fichier » (*Choose File*) pour importer un fichier correctement formaté (voir les sections ci-dessous pour les exigences de formatage). 
4. Sélectionnez « Échantillon de matériel » (*Material Sample*) dans le menu déroulant « Type d'importation » (*Import Type*). 
5. Cliquez sur « Initialiser l'importation » (*Initialize Upload*). 
6. Sur la page qui s'affiche, vous pourrez faire correspondre les champs de votre fichier (à gauche) avec les champs disponibles pour les échantillons de matériel (à droite). Consultez la liste des [champs pour les échantillons de matériel](/Editor_Guide/Editing_Searching_Records/symbiota_data_fields#material-sample-fields) pour obtenir des définitions des champs disponibles. 

:::conseil

Assurez-vous qu'au moins l'un des champs d'« identifiant du sujet » (*subject identifier*) est associé (voir l'image ci-dessous). Cela signifie que vous devez avoir inclus une valeur pour le numéro de catalogue, un identifiant supplémentaire (*otherCatalogNumbers*), l'identifiant de l'occurrence (*occurrence ID*) ou l'identifiant Symbiota (*occid*) **des spécimens auxquels vos échantillons de matériel doivent être liés**. Les valeurs individuelles des identifiants de sujet peuvent être dupliquées, par exemple si plusieurs échantillons de matériel sont ajoutés à un même spécimen. 

:::

7. Une fois que vos champs ont été correctement associés, cliquez sur « Importer les données » (*Import Data*). Le résultat de l'importation s'affichera, enregistrement par enregistrement, sur l'écran suivant.

![Module « Échantillon de matériel »](/img/matsampleupload.jpg)