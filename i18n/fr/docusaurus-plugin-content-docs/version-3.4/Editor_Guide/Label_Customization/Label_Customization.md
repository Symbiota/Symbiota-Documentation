---
title: "Personnalisation et impression d'étiquettes"
date: 2021-11-22
lastmod: 2026-03-30
authors: ["Katie Pearson"]
keywords: ["labels", "printing"]
sidebar_position: 100
---

import ReactPlayer from "react-player";

:::info

Cette page explique comment accéder aux fonctions d'impression d'étiquettes et les utiliser au sein d'un portail Symbiota.

:::

:::tip

Pour obtenir des instructions sur l'impression de pochettes pour spécimens, consultez [cette page](/Editor_Guide/Label_Customization/specimen_packet_printing).

:::

<ReactPlayer
playing={false}
controls
url="http://www.youtube.com/watch?v=ult9QAWax9I"
/>

### Impression d'étiquettes de spécimens

Pour imprimer des étiquettes de spécimens, accédez au panneau de configuration de l'éditeur de données (*cliquez sur « Mon profil », puis sur le nom de la collection dans la zone « Gestion des collections »*) et cliquez sur « Imprimer étiquettes/annotations ». Recherchez les spécimens souhaités en saisissant des termes de recherche dans un ou plusieurs champs disponibles de la zone « Définir le jeu d'enregistrements de spécimens » et en cliquant sur « Filtrer les enregistrements de spécimens ». Sélectionnez tous les spécimens pour lesquels vous souhaitez imprimer des étiquettes en cochant ou décochant les cases situées dans la colonne la plus à gauche du tableau. Utilisez la case « Sélectionner/Désélectionner tous les spécimens » pour cocher ou décocher toutes les cases selon vos besoins.

![File d'attente d'impression d'étiquettes](/img/printlabel1_2026.png)

Dans la zone « Impression d'étiquettes », sélectionnez le nom du « Profil d'étiquette » que vous souhaitez appliquer aux étiquettes imprimées. Le profil d'étiquette détermine quels champs sont imprimés ainsi que l'aspect visuel de l'étiquette. Les profils par défaut (simples) se trouvent dans la liste « Profils définis par le portail », et vous pouvez sélectionner votre propre profil enregistré dans la liste « Profils définis par l'utilisateur ». Les instructions pour définir un profil d'étiquette sont décrites dans la section suivante. Une fois le profil sélectionné, vous pouvez saisir un en-tête (par ex. « Robert F. Hoover Herbarium (OBI) »), une section médiane d'en-tête (par ex. État ou famille), un suffixe d'en-tête (tout texte supplémentaire) et un pied de page (par ex. le nom du projet dans le cadre duquel le spécimen a été collecté) pour toutes les étiquettes à imprimer. Vous pouvez également choisir parmi plusieurs autres options dans la zone « Impression d'étiquettes », notamment l'impression ou non du code-barres du spécimen.

![Options d'impression d'étiquettes](/img/printlabel2_2026.png)

Une fois les options souhaitées sélectionnées, vous pouvez imprimer les étiquettes directement depuis votre navigateur, exporter les données des spécimens vers un fichier CSV (format similaire à Excel, utilisable pour le publipostage) ou exporter les étiquettes vers un document Word (fichier DOCX) en cliquant sur le bouton correspondant. Notez qu'actuellement, l'exportation vers Word (DOCX) ne génère que l'ancien format d'étiquette statique (les paramètres du « profil d'étiquette » ne seront pas appliqués). Si vous choisissez « Imprimer dans le navigateur », vous pouvez modifier manuellement le contenu des étiquettes en cliquant sur le bouton « Modifier le contenu des étiquettes » situé dans le coin supérieur droit.

### Personnaliser le format de l'étiquette

Pour créer un nouveau profil d'étiquette appliquant une mise en forme personnalisée à vos étiquettes imprimées, cliquez sur l'icône en forme de crayon située à droite de « Profils d'étiquettes » (mis en évidence ci-dessous).

![Profil d'impression d'étiquette](/img/printprofile2026.png)

Cliquez ensuite sur le signe « plus » vert dans la zone « Profils utilisateur ». Saisissez le titre du profil utilisateur ainsi que les informations souhaitées pour l'en-tête et le pied de page. Sélectionnez les options voulues dans la zone « Options ».

Pour personnaliser davantage l'étiquette, cliquez sur « interface visuelle » à droite de l'en-tête « JSON ». La page qui s'affiche vous permettra d'ajuster finement la mise en forme de votre étiquette (voir la capture d'écran suivante).

![Interface de personnalisation de l'étiquette](/img/printcustomize.png)

Le format de votre étiquette est représenté dans la zone grise intitulée « Zone de contenu de l'étiquette ». C'est ici que vous élaborerez la mise en forme de l'étiquette. Pour ajouter des champs, faites glisser les noms des champs depuis la liste de boutons située à gauche vers la « Zone de contenu de l'étiquette ». Au fur et à mesure, un aperçu du format de l'étiquette s'affichera dans la zone « Aperçu de l'étiquette ». Notez que vous pouvez ajouter autant de lignes que vous le souhaitez dans la « Zone de contenu de l'étiquette » en cliquant sur le bouton « Ajouter une ligne ». En cliquant sur l'un des champs ajoutés à la « Zone de contenu de l'étiquette », vous pouvez également ajouter un préfixe ou un suffixe, modifier la police, sa taille et son style, ainsi que déplacer le champ en ajustant les paramètres de la section « Options du champ » (mise en évidence dans la capture d'écran ci-dessous). Vous pouvez aussi modifier les options d'une ligne entière en cliquant sur celle-ci dans la « Zone de contenu de l'étiquette » (elle passera au vert), puis en ajustant les paramètres dans la section « Options de la ligne ». 

![Options de champ pour la personnalisation des étiquettes](/img/printfieldoptions.png)
