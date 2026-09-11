---
title: "Télécharger une copie de vos données"
date: 2021-11-29
lastmod: 2026-03-30
sidebar_position: 5
authors: ["Katie Pearson"]
editors: ["Lindsay Walker"]
keywords: ["download", "backup"]
---

:::info

Cette page explique comment télécharger une copie de vos données, y compris les enregistrements d'occurrence, les déterminations, les ressources multimédias (sous forme de liens uniquement) et toute autre extension activée sur votre portail (par exemple, les données d'attributs).

:::

:::tip

Il est vivement recommandé aux conservateurs ou aux gestionnaires de collections de télécharger et d'archiver en interne une copie de sauvegarde des données, par mesure de précaution. **Cette opération est simple et rapide**. Consultez la déclaration du centre d'assistance Symbiota (Symbiota Support Hub) sur la cybersécurité [ici](https://symbiota.org/cybersecurity/).

:::

Pour télécharger une copie des données de vos spécimens depuis un portail Symbiota :

1. Accédez au **Panneau de contrôle d'administration** (_cliquez sur « Mon profil », puis sur le nom de la collection dans le bloc « Gestion des collections »_) > **Télécharger le fichier de sauvegarde des données** (sous la rubrique « Tâches de maintenance générale »).
2. Une nouvelle fenêtre s'ouvrira pour vous demander de choisir le jeu de caractères (ISO-8859-1 ou UTF-8) à utiliser pour le jeu de données téléchargé. Cliquez sur le bouton « Effectuer la sauvegarde ». Le fichier généré sera une archive Darwin Core compressée (au format ZIP).

![Outil d'exportation](/img/admincontrolpanel_backup2026.png)

Pour accéder à vos données de sauvegarde, décompressez ou ouvrez le dossier de l'archive Darwin Core. Ce dossier contiendra plusieurs fichiers, tels que décrits [sur cette page](/User_Guide/Downloading/download_data#download-options).

L'archive contient également des métadonnées concernant votre collection ainsi que les champs présents dans chacun des fichiers CSV. Pour plus d'informations sur le format et l'utilisation des archives Darwin Core, consultez les ressources suivantes :

- [https://github.com/gbif/ipt/wiki/DwCAHowToGuide](https://github.com/gbif/ipt/wiki/DwCAHowToGuide)
- [https://en.wikipedia.org/wiki/Darwin_Core_Archive](https://en.wikipedia.org/wiki/Darwin_Core_Archive)
