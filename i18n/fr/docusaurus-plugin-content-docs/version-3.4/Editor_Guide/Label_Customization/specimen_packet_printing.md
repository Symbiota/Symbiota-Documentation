---
title: "Impression de lots d'échantillons"
date: 2021-09-29
lastmod: 2026-03-30
authors: ["Katie Pearson", "Laura Rocha Prado"]
keywords: ["labels", "printing", "packet"]
---

import ReactPlayer from "react-player";

:::info

Ce guide décrit l'utilisation de l'outil d'impression d'étiquettes de Symbiota pour imprimer des pochettes destinées aux lichens et aux bryophytes : il s'agit de feuilles de papier entières comportant une étiquette de 3 x 5 pouces imprimée sur le tiers inférieur. Pour savoir comment plier ces pochettes, consultez [ce guide](https://core.ac.uk/download/pdf/151510978.pdf).

:::

<ReactPlayer
playing={false}
controls
url="http://www.youtube.com/watch?v=_1_QN4e_N9A"
/>

### Utilisation du profil d'impression de pochettes par défaut

L'étiquette de pochette par défaut se présente comme suit :

![Étiquette de pochette par défaut](/img/printdefaultpacket.png)

1. Pour imprimer une pochette, accédez au panneau de configuration de l'éditeur de données (*cliquez sur « My Profile » [Mon profil], puis sur le nom de la collection dans la zone « Collection Management » [Gestion des collections]*).
2. Cliquez sur « Print Specimen Labels » (Imprimer les étiquettes de spécimens) depuis le panneau de configuration de l'éditeur de données.
3. Saisissez des critères de recherche dans le formulaire « Define Specimen Recordset » (Définir le jeu d'enregistrements de spécimens) pour trouver les spécimens pour lesquels vous souhaitez imprimer des pochettes. Cliquez ensuite sur le bouton « Filter Specimen Records » (Filtrer les enregistrements de spécimens).
4. Cochez les cases correspondant aux spécimens pour lesquels vous souhaitez imprimer des pochettes, ou cliquez sur la case située en haut de la colonne de sélection pour sélectionner tous les enregistrements.

![Liste pour l'impression d'étiquettes](/img/printpacketlist2026.png)

5. Faites défiler la page jusqu'au formulaire d'impression d'étiquettes situé en bas.
6. Dans le menu déroulant « Label Profiles » (Profils d'étiquettes), sélectionnez « Generic Lichen Packet » (Sachet de lichen générique).
7. À partir de là, vous pouvez personnaliser votre sachet de quelques manières limitées :
8. Pour modifier le préfixe de l'en-tête : modifiez le texte dans le champ « Heading Prefix » (Préfixe de l'en-tête).
9. Pour modifier la partie centrale de l'en-tête (générée automatiquement) : sélectionnez un bouton parmi les options « Heading Mid-Section » (Partie centrale de l'en-tête).
10. Pour modifier la fin de l'en-tête : modifiez le texte dans le champ « Heading Suffix » (Suffixe de l'en-tête).
11. Pour modifier le nom de la collection qui apparaîtra au-dessus du code-barres : modifiez le texte dans le champ « Label Footer » (Pied de page de l'étiquette).
- REMARQUE : Il n'y a pas de véritable « pied de page » sur les sachets de lichens et de bryophytes. Au lieu de cela, le pied de page de l'étiquette s'affiche au-dessus du code-barres imprimé. Laissez ce champ vide si vous ne souhaitez pas de texte au-dessus du code-barres OU si vous n'incluez pas de code-barres sur votre sachet.
12. Pour afficher l'auteur de l'espèce avant l'épithète infraspécifique (si vous imprimez des taxons comportant des épithètes infraspécifiques) : cochez la case « Print species authors for infraspecific taxa » (Imprimer les auteurs de l'espèce pour les taxons infraspécifiques).
13. Il n'est PAS nécessaire de cocher la case « Print Catalog Numbers » (Imprimer les numéros de catalogue). Le numéro de catalogue s'affichera sous le code-barres si l'option « Include barcode of Catalog Number » (Inclure le code-barres du numéro de catalogue) est cochée.
14. Cliquer sur « Print only Barcode » (Imprimer uniquement le code-barres) permet d'imprimer uniquement le code-barres, sans le sachet ni aucune autre donnée.
15. Notez que les autres numéros de catalogue (« Other Catalog Numbers ») ne figurent pas par défaut sur les sachets. Pour ajouter ce champ, créez un profil de sachet personnalisé comme décrit dans la section suivante et incluez « Other Catalog Numbers » dans votre liste de champs à imprimer.
16. Lors de l'impression du sachet, veillez à utiliser une échelle de 100 %. Utilisez l'aperçu avant impression et ajustez les marges si nécessaire pour que le sachet soit centré et aux bonnes dimensions. Si vous imprimez depuis Google Chrome, cliquez sur l'option « Plus de paramètres » (More Settings) et décochez la case « En-têtes et pieds de page » (Headers and footers).

![Aperçu avant impression d'un sachet](/img/printpreviewpacket.png)

### Personnalisation de votre propre profil d'impression de sachets

1. Suivez les étapes 1 à 7 décrites ci-dessus.
2. Cliquez sur l'icône en forme de crayon à côté de « Label Profiles » (Profils d'étiquettes).

![Print](/img/printprofile2026.png)

3. Recherchez le profil intitulé « Generic Lichen Packet ».
4. Pour personnaliser le profil d'impression de sachets pour votre usage personnel, cliquez sur l'option « Select Target » sous « Generic Lichen Packet » et choisissez « User Profile ». Pour personnaliser le profil d'impression de sachets pour l'ensemble de votre collection (c'est-à-dire pour permettre à d'autres personnes de l'utiliser), sélectionnez « Collection Profile » dans le menu déroulant.
5. Cliquez sur le bouton « Clone Profile » sous « Generic Lichen Packet ». Une fois la page rechargée, un nouveau profil apparaîtra dans la section des profils de collection ou des profils utilisateur (selon l'option choisie à l'étape 5 ci-dessus).
6. Cliquez sur l'icône en forme de crayon à côté du titre du nouveau profil cloné pour le modifier. Ne modifiez PAS les champs « Default CSS », « Custom CSS » et « Custom JS », mais vous pouvez modifier le titre, le préfixe, etc., comme indiqué précédemment. 
- Pour retirer le code-barres du sachet, décochez la case à côté de **Display barcode** (Afficher le code-barres). Si vous le faites, veillez à supprimer « Custom Collection Name » du champ **Footer text** (Texte de pied de page).
7. Pour modifier les champs figurant sur le sachet et/ou leur orientation, faites défiler la page jusqu'au champ JSON et cliquez sur « visual interface » (interface visuelle).

![Print Visual Interface](/img/printvisualinterface.png)

- Au bas de l'écran, au centre, vous verrez un aperçu de l'étiquette que vous êtes en train de personnaliser.
- La colonne de gauche, « Fields Available » (Champs disponibles), contient une liste de champs que vous pouvez utiliser et inclure sur votre étiquette.
- La zone grise centrale, « Label Content Area » (Zone de contenu de l'étiquette), est l'endroit où vous pouvez placer et déplacer les champs sélectionnés dans la colonne « Fields Available ».
- Les options de champ (« Field Options »), situées en haut à droite, permettent de modifier le préfixe, le suffixe, la taille de la police, la position et la famille de police d'un champ, après avoir sélectionné ce dernier dans la zone de contenu de l'étiquette. - Les options de ligne situées en bas à droite permettent de choisir un séparateur entre les champs d'une même ligne, ainsi que de modifier l'alignement du texte et l'espacement, après avoir sélectionné une ligne dans la zone de contenu de l'étiquette.
- Pour ajouter une nouvelle ligne, faites défiler la zone de contenu de l'étiquette jusqu'en bas et cliquez sur le bouton « Ajouter une ligne ». Attention toutefois à ne pas ajouter trop de lignes : si le contenu est trop volumineux, il risque de ne pas tenir sur l'étiquette du paquet.

![Personnalisation de l'impression](/img/printcustomize.png)

8. Personnalisez votre étiquette en ajoutant des champs (faites glisser les champs de la colonne « Champs disponibles » vers la zone de contenu de l'étiquette), en supprimant des champs (cliquez sur l'icône « x » à côté du champ dans la zone de contenu de l'étiquette), en modifiant les champs (via les options de champ) et en modifiant les lignes (via les options de ligne) selon vos besoins.
9. Cliquez sur le bouton « Enregistrer le format et fermer ».
10. Suivez les étapes 1 à 7 de la section « Utilisation du profil d'impression de lots par défaut ».
11. Dans le champ « Profils d'étiquettes », sélectionnez votre nouveau format d'impression d'étiquettes dans la liste déroulante.
12. Cliquez sur le bouton « Imprimer dans le navigateur ».
13. Si le nouveau profil d'étiquette ne répond pas à vos attentes, retournez à l'éditeur de profil d'étiquette (étapes 7 à 9 ci-dessus) et modifiez le profil selon vos besoins.
14. Pour des modifications mineures spécifiques aux données du spécimen que vous traitez (par exemple, problèmes de caractères spéciaux ou d'espacement), vous pouvez également modifier l'étiquette dans l'aperçu avant impression. Après avoir cliqué sur « Imprimer dans le navigateur » comme indiqué ci-dessus, cliquez sur le bouton « Modifier le contenu des étiquettes » dans le coin supérieur gauche de votre écran. Vous pouvez alors effectuer de légers ajustements sur la ou les étiquettes que vous prévoyez d'imprimer. Notez que ces modifications n'affectent pas le profil d'étiquette que vous avez créé.
