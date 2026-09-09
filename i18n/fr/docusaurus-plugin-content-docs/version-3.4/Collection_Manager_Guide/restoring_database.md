---
title: "Restauration de votre base de données"
date: 2021-12-15
lastmod: 2026-03-30
draft: false
sidebar_position: 170
authors: ["Katie Pearson"]
editors: ["Lindsay Walker"]
keywords: ["restore","replace","upload"]
---

En cas d'erreur critique dans la base de données (par exemple, une modification par lots erronée impossible à annuler facilement), vous pouvez remplacer l'intégralité de votre base de données en téléversant une archive Darwin Core (DwC-A). Notez que vous devez avoir préalablement [téléchargé une copie de votre base de données](/Collection_Manager_Guide/Downloading/downloading_copy/) pour pouvoir remplacer la version actuelle.
Pour remplacer votre base de données, accédez au panneau de contrôle d'administration (cliquez sur « My Profile », puis sur le nom de la collection dans le bloc « Collection Management ») et cliquez sur « Restore Backup File » (Restaurer un fichier de sauvegarde) dans la section « General Maintenance Tasks » (Tâches de maintenance générale). Cliquez ensuite sur « Choose File » (Choisir un fichier) et sélectionnez le fichier DwC-A devant servir à remplacer votre jeu de données. 
* Si votre DwC-A contient un fichier « identifications », assurez-vous que la case « Restore Determination History » (Restaurer l'historique des déterminations) est cochée. 
* Si votre DwC-A contient un fichier « multimedia », assurez-vous que la case « Restore Media Links » (Restaurer les liens multimédias) est cochée. Cliquez sur « Analyze File » (Analyser le fichier).

Le chargement et le traitement du fichier prendront un certain temps. Une fois l'opération terminée, un rapport intitulé « Final transfer » (Transfert final) s'affichera en bas de l'écran. Ce rapport indiquera le nombre d'enregistrements mis à jour, le nombre de nouveaux enregistrements, le nombre d'identifications/déterminations ajoutées et le nombre d'enregistrements comportant des liens multimédias (par exemple, des images). **_Vérifiez que ces chiffres correspondent à vos attentes._** Vous pouvez prévisualiser ces enregistrements en cliquant sur l'icône en forme de tableau située juste à droite du jeu de données concerné (entourée sur la capture d'écran suivante), ou les télécharger au format CSV en cliquant sur l'icône représentant deux carrés située tout à droite du jeu de données (encadrée sur la capture d'écran suivante). Une fois que vous avez vérifié que les enregistrements seront correctement téléversés, cliquez sur le bouton « Transfer Records to Central Specimen Table » (Transférer les enregistrements vers la table centrale des spécimens). **Notez que cette modification est _irréversible_ !**

![Écran de transfert final](/img/restoredatafinaltransfer2026.png)
