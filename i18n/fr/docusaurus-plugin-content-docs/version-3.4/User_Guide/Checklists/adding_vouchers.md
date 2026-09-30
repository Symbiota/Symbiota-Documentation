---
title: "Ajout de bons à la liste de contrôle"
date: 2021-10-14
lastmod: 2026-03-30
authors: ["Katie Pearson", "Neil Cobb", "Ed Gilbert"]
editors: ["Katie Pearson"]
draft: false
sidebar_position: 10
keywords: ["checklist", "inventory", "flora", "voucher"]
---

import ReactPlayer from "react-player";

:::info

Cette page explique comment ajouter des spécimens témoins (preuves physiques de l'existence d'un taxon dans une liste de contrôle) à une liste de contrôle sur un portail Symbiota.

:::

Il existe deux méthodes principales pour ajouter des spécimens témoins à une liste de contrôle de recherche. Vous pouvez ajouter des spécimens individuels spécifiques issus de votre propre collection via l'éditeur d'occurrences (la page de la fiche du spécimen) ou ajouter des spécimens provenant de n'importe quelle collection grâce à l'outil « Gérer les témoins associés » (Manage Linked Voucher) situé sur la page de la liste de contrôle.

### Ajout de spécimens provenant de n'importe quelle collection (Outil « Gérer les témoins associés »)

<ReactPlayer
playing={false}
controls
url="http://www.youtube.com/watch?v=NRW2kh6xln0"
/>

1. Accédez à la page d'accueil de votre liste de contrôle.
2. Cliquez sur l'icône en forme de crayon accompagnée d'un « V » (l'icône centrale située dans le coin supérieur droit de la page, mise en évidence ci-dessous).

![Gérer les témoins associés](/img/checklistexample.png)

3. Si vous utilisez cet outil pour la première fois, l'option permettant de définir les critères de recherche (c.-à-d. les paramètres utilisés pour trouver les spécimens susceptibles de correspondre à votre liste de contrôle) s'affichera immédiatement. Vous pouvez utiliser divers champs pour affiner votre recherche, comme décrit ci-dessous.

REMARQUE : Vous pourrez modifier ces critères de recherche ultérieurement ; vous ne définissez donc pas nécessairement des limites définitives.

![Critères de recherche de la liste de contrôle](/img/checklistsearchstatement.png)

- Vous pouvez saisir des termes de recherche dans plusieurs champs situés sur la partie gauche du formulaire.
- Vous pouvez utiliser l'emprise polygonale définie lors de la création de la liste de contrôle (voir section 29:1 Création d'une liste de contrôle, étape 3c) pour rechercher des fiches de spécimens en cochant la case « Rechercher en fonction du polygone définissant les limites de recherche de la liste de contrôle ». Si vous n'avez pas défini de polygone au préalable, vous pouvez le faire depuis cette interface en cliquant sur l'icône en forme de crayon située à droite de cette option et en suivant les étapes décrites dans la section 29:1 Création d'une liste de contrôle, étape 3c.
- Vous pouvez définir une zone de délimitation (bounding box) spécifique en saisissant les coordonnées de latitude et de longitude qui la délimitent, ou en définissant ces valeurs directement sur une carte. Pour effectuer cette dernière opération :
1.  Cliquez sur l'icône en forme de globe située à droite du champ « Lat North » (Latitude Nord).
2.  Dans la fenêtre contextuelle, déplacez la carte et zoomez sur l'emplacement où vous souhaitez placer la zone de délimitation (bounding box). 
3.  Cliquez sur le point correspondant approximativement au centre de la zone de délimitation souhaitée. 
4.  Ajustez l'emplacement et la taille de la zone de délimitation selon vos besoins : cliquez et faites glisser le curseur à l'intérieur de la zone pour la déplacer, ou cliquez et faites glisser l'un des cercles situés sur les côtés ou aux coins de la zone pour en modifier les dimensions. 
5.  Pour enregistrer la zone de délimitation, cliquez sur « Save and Close » (Enregistrer et fermer).

![Définition de la zone de délimitation](/img/checklistboundingbox.png)

- Sous les champs de latitude et de longitude, plusieurs cases à cocher importantes vous permettent d'affiner votre recherche. Par exemple, vous pouvez configurer la recherche pour qu'elle renvoie des spécimens correspondant aux termes de recherche indiqués OU situés dans une plage de coordonnées de latitude et de longitude donnée.
- Vous pouvez combiner les options ci-dessus de différentes manières pour rechercher des spécimens témoins (vouchers).

4. Une fois les termes de recherche saisis, cliquez sur le bouton « Save Search Terms » (Enregistrer les termes de recherche).
5. À ce stade, plusieurs méthodes permettent d'ajouter des spécimens témoins.

![Outils pour les spécimens témoins](/img/checklistvouchertab.png)

- Si vous avez déjà défini une liste de taxons pour votre liste de référence (checklist), vous pouvez ajouter des spécimens témoins via l'onglet « Nouveaux témoins » (New Vouchers). Depuis cet onglet, vous pouvez :
1.  Afficher les taxons qui ne disposent pas actuellement de spécimens témoins dans votre liste de référence (sélectionnez « Liste des taxons sans témoin » / *Non-vouchered taxa list* dans la liste déroulante « Mode d'affichage »). 
2.  Afficher les notices de spécimens correspondant à vos critères de recherche et appartenant à l'un des taxons définis dans votre liste qui ne dispose pas encore de témoin (sélectionnez « Occurrences pour les taxons sans témoin » / *Occurrences for non-vouchered taxa* dans la liste déroulante « Mode d'affichage »). 
- Pour ajouter des spécimens témoins à partir de cette liste, cochez la case située à gauche de la ou des notices de spécimens que vous souhaitez ajouter, puis cliquez sur le bouton « Ajouter des témoins » (Add Vouchers). 
3.  Afficher les notices de spécimens correspondant à vos critères de recherche et appartenant à l'un des taxons définis dans votre liste, que ce taxon ait déjà fait l'objet d'un témoin ou non (sélectionnez « Nouvelles occurrences pour tous les taxons » / *New occurrences for all taxa* dans la liste déroulante « Mode d'affichage »).
- Pour ajouter des spécimens témoins à partir de cette liste, cochez la case située à gauche de la ou des notices de spécimens que vous souhaitez ajouter, puis cliquez sur le bouton « Ajouter des témoins » (Add Vouchers).
- Que vous ayez ou non défini au préalable une liste de taxons pour votre liste de référence, vous pouvez ajouter des spécimens témoins via l'onglet « Taxons manquants » (Missing Taxa). Depuis cet onglet, vous pouvez :
1. Afficher les taxons qui ne figurent pas actuellement dans la liste de référence mais qui sont représentés par un ou plusieurs spécimens correspondant à vos critères de recherche (sélectionnez « Liste des espèces » / *Species List* dans la liste déroulante « Mode d'affichage »). 
- Vous pouvez ensuite consulter la liste des spécimens associés à chaque taxon en cliquant sur l'icône de lien ![Icône de lien](/img/link.png). À partir de là, vous pouvez associer individuellement les spécimens souhaités en cliquant sur l'icône d'ajout de témoin ![Icône d'ajout de témoin](/img/voucheradd.png) située à droite de la notice du spécimen dans la liste. 
2. Afficher les spécimens qui n'ont pas encore été ajoutés comme témoins pour votre liste de référence mais qui correspondent à vos critères de recherche (sélectionnez « Association par lot » / *Batch Linking* dans la liste déroulante « Mode d'affichage »). 
- Pour ajouter des spécimens témoins à partir de cette liste, cochez la case située à gauche de la ou des notices de spécimens que vous souhaitez ajouter, puis cliquez sur le bouton « Ajouter des témoins » (Add Vouchers). 3. Affichez les notices de spécimens correspondant à vos critères de recherche, mais dont les noms scientifiques ne sont pas reliés à un nom spécifique dans le thésaurus taxonomique (sélectionnez « Problem Taxa » dans le menu déroulant « Display Mode »). 
- Pour ajouter des spécimens témoins (*vouchers*) à partir de cette liste, saisissez le nom du taxon auquel appartient le spécimen dans le champ de texte situé à droite du nom scientifique du spécimen. Notez que le nom saisi doit déjà figurer dans la liste des taxons de votre inventaire (*checklist*). Cliquez sur le bouton « Link Voucher ».

### Ajout de spécimens individuels issus de votre propre collection

:::note

Vous devez disposer des droits d'édition sur une collection pour pouvoir y associer des spécimens de cette manière.

:::

1. Recherchez un spécimen spécifique dans votre propre collection (par exemple, en cliquant sur « Edit Existing Occurrence Records » dans le panneau de contrôle de l'éditeur de données, puis en effectuant une recherche par numéro de catalogue ou à l'aide d'autres critères).
2. Sur la page qui s'affiche, cliquez sur l'onglet « Linked Resources ».
3. Dans la zone « Checklist Voucher Linkages » (voir ci-dessous), sélectionnez l'inventaire souhaité dans le menu déroulant et cliquez sur « Link to Checklist as Voucher ». Une nouvelle fenêtre risque de s'ouvrir ; vous pouvez l'ignorer et fermer l'éditeur. Le spécimen a bien été associé en tant que témoin (*voucher*) à l'inventaire choisi.

![Checklist Voucher Linkages](/img/checklistvoucherlinkage.png)
