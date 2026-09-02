---
title: "Associer de nouvelles images à d'anciens enregistrements"
date: 2021-10-07
lastmod: 2026-03-30
authors: ["Ed Gilbert","Katie Pearson"]
keywords: ["images"]
---

import ReactPlayer from "react-player";

:::info

Cette page traite d'un défi courant dans les flux de travail de numérisation : comment associer des images de spécimens (portant de nouveaux numéros de code-barres) à des notices de spécimens déjà présentes dans le portail, alors que le numéro de code-barres n'est pas encore lié aux données existantes ? Nous présentons ici deux options pour résoudre ce problème.

:::

:::note

Les instructions suivantes supposent que le numéro de code-barres est enregistré dans le champ « Catalog Number » (Numéro de catalogue) et que le numéro d'acquisition (généralement un numéro estampillé) est enregistré dans le champ « Additional Identifier Value » (Valeur d'identifiant supplémentaire / Autres numéros de catalogue).

:::

### Option 1 : Ajouter les numéros de catalogue (code-barres) aux notices d'occurrence lors de la numérisation

:::info

Ce protocole décrit comment ajouter un numéro de code-barres à chaque spécimen lors du processus de numérisation.

:::

_(Exemple d'instructions pour une collection d'herbier)_
1. Prendre un spécimen.
3. Se connecter à son compte et accéder au panneau de contrôle de l'éditeur de données (cliquer sur « My Profile », puis sur le nom de la collection dans le bloc « Collection Management »).
4. Cliquer sur « Edit Existing Occurrence Records » (Modifier les notices d'occurrence existantes).
5. Apposer un code-barres sur le spécimen.
6. Rechercher un numéro estampillé (« numéro d'acquisition ») sur le spécimen. 
* Si aucun numéro estampillé n'est présent, passer à l'étape 8.
7. Dans le formulaire de recherche de notices (« Record Search Form »), saisir le numéro estampillé dans le champ « Additional Identifier Value ». Ne pas inclure les zéros non significatifs en début de nombre (par exemple, si le tampon indique 01499, saisir 1499). Cliquer sur « Display Editor » (Afficher l'éditeur).
*	Si aucune notice n'est trouvée, vérifier que le numéro d'acquisition a été correctement saisi dans le champ « Additional Identifier Value » et qu'il n'y a pas d'espaces superflus avant ou après les chiffres saisis. Si le numéro est correct, contacter un superviseur. 
*	Si une notice est trouvée, vérifier que les données de la notice correspondent à celles figurant sur l'étiquette du spécimen que vous manipulez, en particulier le collecteur, le numéro de récolte et la date. 
i. Si les données correspondent, placer le curseur dans le champ « Catalog Number » (en haut à gauche) et scanner le code-barres du spécimen. Le numéro du code-barres apparaîtra alors dans ce champ. Appuyer sur la touche Tabulation (Tab) du clavier, puis sur Entrée (Enter). Procédez à l'imagerie de l'échantillon et revenez à l'étape 1.
ii. Si ces données ne correspondent pas, contactez un superviseur.

:::tip

Pour rouvrir le formulaire de recherche d'enregistrement après avoir effectué une recherche, cliquez sur l'icône en forme de loupe située en haut à droite de la fiche du spécimen.

:::

8.	Dans le formulaire de recherche d'enregistrement, saisissez le nom de famille du collecteur précédé d'un signe de pourcentage (%), le numéro du collecteur et la date (au format AAAA-MM-JJ) dans les trois champs supérieurs (voir l'exemple ci-dessous), puis cliquez sur « Display Editor » (Afficher l'éditeur). 
* Si aucun enregistrement n'est trouvé, vérifiez que vous avez saisi les données correctement dans les champs appropriés. Si tout semble correct, contactez un superviseur. 
* Si un enregistrement est trouvé, vérifiez que les données figurant sur la fiche du spécimen correspondent à celles de l'étiquette du spécimen que vous avez sous les yeux, en particulier le nom du collecteur, le numéro du collecteur et la date. 
i. Si ces données correspondent, placez votre curseur dans le champ « Catalog Number » (Numéro de catalogue, en haut à droite) et scannez le code-barres du spécimen. Le numéro du code-barres apparaîtra alors dans ce champ. Appuyez sur la touche Tabulation (Tab) de votre clavier, puis sur Entrée. Procédez à la numérisation (prise de vue) du spécimen et revenez à l'étape 1.
ii. Si ces données ne correspondent PAS, contactez un superviseur.

### Option 2 : Visualiser les nouvelles images dans le portail et effectuer la liaison en saisissant manuellement le numéro d'acquisition

:::info

Ce protocole décrit comment remplacer votre ancien numéro d'acquisition par le nouveau numéro de code-barres du spécimen. Vous ne pouvez effectuer cette opération qu'après avoir téléchargé les images des spécimens dans votre portail via un traitement par lots ayant créé de nouveaux enregistrements « non traités » (unprocessed), composés uniquement d'un numéro de code-barres et d'une image.

:::

_(Exemple d'instructions pour une collection d'herbier)_
1. Connectez-vous à votre compte et accédez au panneau de configuration de l'éditeur de données (_cliquez sur « My Profile » [Mon profil], puis sur le nom de la collection dans l'encadré « Collection Management » [Gestion des collections]_).
2. Cliquez sur « Edit Existing Occurrence Records » (Modifier les enregistrements d'occurrence existants).
3. Dans le formulaire de recherche d'enregistrements, cliquez sur le champ « Processing Status » (Statut de traitement) et sélectionnez « Unprocessed » (Non traité) dans le menu déroulant.
4. Dans le champ « Custom Field 1 » (Champ personnalisé 1), sélectionnez « Other Catalog Number » (Autre numéro de catalogue) dans le premier menu déroulant et « IS NULL » (Est nul/vide) dans le second.
5. Cliquez sur le bouton « Display Editor » (Afficher l'éditeur).
6. Repérez le numéro d'acquisition (le numéro tamponné, et non le numéro du code-barres ou le numéro du collecteur) sur le spécimen figurant dans l'image située à droite du formulaire d'édition de l'occurrence. 
* Vous pouvez effectuer un zoom avant en maintenant la touche Command (Mac) ou Control (Windows) enfoncée tout en cliquant sur la zone de l'image que vous souhaitez agrandir. Sinon, vous pouvez maintenir la touche Maj (Shift) enfoncée, cliquer sur la zone à agrandir et déplacer la souris vers le haut (pour zoomer) ou vers le bas (pour dézoomer).
7.	Saisissez le numéro d'acquisition, sans les zéros non significatifs (par ex., si le numéro indiqué est « 0145 », saisissez « 145 »), dans le champ « Additional Identifier Value » (Valeur de l'identifiant supplémentaire) entouré en rouge sur la capture d'écran ci-dessous.
![Capture d'écran de l'éditeur d'occurrence](/img/Inkedoccedit_LI.jpg)
8. Cliquez en dehors du champ « Additional Identifier Value » (ou appuyez sur la touche Tabulation). Un message devrait s'afficher sous le bouton « Dupes? » (Doublons ?). Assurez-vous que le bloqueur de fenêtres contextuelles (pop-ups) de votre navigateur est désactivé pour pouvoir voir ces messages. 
* Si le message indique « No Dupes Found » (Aucun doublon trouvé) :
1. Vérifiez que la planche d'herbier ne porte pas le tampon « Databased » (Saisi en base de données) ou toute autre indication signifiant qu'elle *devrait* faire l'objet d'un enregistrement dans la base de données. Si c'est le cas, essayez d'ajouter un zéro non significatif au numéro d'inventaire et répétez l'étape 9.
2. Cliquez sur le bouton « Enregistrer les modifications » (ou appuyez sur les touches Tabulation et Entrée de votre clavier).
3. Passez à l'étape 9.
* Si une fenêtre contextuelle s'affiche avec le message « Un ou plusieurs enregistrements utilisant le même identifiant existent déjà. Souhaitez-vous consulter cet enregistrement ? » :
1. Cliquez sur OK.
2. Vérifiez si le doublon identifié possède déjà une image associée (si c'est le cas, le numéro de code-barres apparaîtra en gras sur cet enregistrement). Si le doublon possède déjà une image, fermez la fenêtre, faites défiler l'écran jusqu'au champ « Statut de traitement » (Processing status) dans la section « Curatelle » (Curation), sélectionnez « Expert requis » (Expert Required) dans le menu déroulant, puis cliquez sur le bouton « Enregistrer les modifications ». Sinon, passez à l'étape c. 
3. Vérifiez que les données du doublon identifié correspondent aux données figurant sur l'étiquette de l'image du spécimen que vous consultiez. Il n'est pas nécessaire de vérifier tous les champs ; deux ou trois champs importants suffisent, tels que le nom scientifique, le collecteur et la localité. 
4. Si les données correspondent, cliquez sur « Fusionner les enregistrements » (Merge Records) et quittez la fenêtre du doublon. Si les données ne correspondent pas, fermez la fenêtre, faites défiler l'écran jusqu'au champ « Statut de traitement » dans la section « Curatelle », sélectionnez « Expert requis » dans le menu déroulant, puis cliquez sur le bouton « Enregistrer les modifications ».
9. Cliquez sur l'icône en forme de double flèche située dans le coin supérieur droit de l'éditeur d'occurrences.
10.	Répétez les étapes 6 à 9.

Ce protocole est illustré dans la vidéo suivante :

<ReactPlayer
  playing={false}
  controls
  url="http://www.youtube.com/watch?v=s-2FuOpLhnI"
/>