---
title: "Suppression d'enregistrements"
date: 2021-12-08
lastmod: 2025-07-15
draft: false
sidebar_position: 80
authors: ["Katie Pearson"]
editors: ["Lindsay Walker", "Katie Pearson"]
keywords: ["delete", "remove"]
---

:::info

Cette page explique comment supprimer des enregistrements de votre collection.

:::

:::note

Seul(s) le(s) gestionnaire(s) du portail ou une personne disposant d'un accès au système d'arrière-plan (backend) peut/peuvent supprimer plusieurs enregistrements de spécimens à la fois. Cette mesure vise à préserver l'intégrité des données, notamment les GUID et les liens vers d'autres tables de la base de données.

:::

La suppression d'un enregistrement de spécimen ne doit être effectuée que si le spécimen n'existe plus ou si l'enregistrement a été ajouté par erreur (par exemple, s'il s'agissait d'un doublon exact d'un enregistrement existant). Vous ne devez pas supprimer un enregistrement dans le but de le mettre à jour ou d'en ajouter une nouvelle version.

Pour supprimer un enregistrement :

1. Accédez à l'enregistrement du spécimen que vous souhaitez supprimer et ouvrez le formulaire d'édition d'occurrence (Occurrence Editor) correspondant. (Consultez [cette page](/Editor_Guide/Editing_Searching_Records) pour savoir comment accéder à des enregistrements spécifiques.)
2. Ouvrez l'onglet « Admin ».
3. Cliquez sur le bouton « Evaluate record for deletion » (Évaluer l'enregistrement pour suppression) afin de déterminer si l'enregistrement peut être supprimé sans risque. Si une ressource multimédia (par exemple, une image) est associée à l'enregistrement, vous devrez dissocier cette ressource de l'enregistrement du spécimen avant de pouvoir le supprimer (consultez la page sur la [suppression/le transfert d'images](/Editor_Guide/Images_Media/deleting_transfering_images)). De même, un avertissement s'affichera si l'enregistrement du spécimen est lié à une liste de contrôle (checklist) ; ce problème devra être résolu avant que l'enregistrement du spécimen puisse être supprimé. Si aucun avertissement n'apparaît à ce stade, cliquez sur le bouton « Delete Occurrence » (Supprimer l'occurrence) pour retirer l'enregistrement de votre jeu de données.

![Onglet Admin de l'éditeur d'occurrence](/img/admintab_delete2026.png)

Pour supprimer des enregistrements par lots, veuillez contacter le gestionnaire de votre portail.