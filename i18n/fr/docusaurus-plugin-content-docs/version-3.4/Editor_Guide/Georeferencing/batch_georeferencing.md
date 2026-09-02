---
title: "Géoréférencement par lots"
date: 2021-11-16
lastmod: 2026-03-30
draft: false
authors: ["Katie Pearson"]
keywords: ["georeferencing", "batch edits"]
---

:::info

Cette page décrit les fonctionnalités de l'outil de géoréférencement par lots. Les protocoles spécifiques de géoréférencement varient selon les institutions, mais peuvent faire appel à l'un ou l'autre des outils décrits ici.

:::

1. Connectez-vous à votre compte sur le portail, cliquez sur « Mon profil », puis sur le nom de l'institution pour laquelle vous allez effectuer le géoréférencement.
2. Dans le panneau de contrôle de l'éditeur de données, cliquez sur « Batch Georeference Specimens » (Géoréférencer des spécimens par lots).
3. Saisissez les termes de recherche souhaités dans le formulaire prévu à cet effet. Vous pouvez effectuer une recherche par pays, État, comté, municipalité, statut de traitement et/ou termes liés à la localité. Cliquez ensuite sur « Generate List » (Générer la liste).

![Outil de géoréférencement par lots](/img/batchgeoreference.png)

4. Sélectionnez l'entrée sur laquelle vous souhaitez travailler et cliquez sur l'icône de géolocalisation ![Outil de géoréférencement par lots](/img/geolocate.png) située en haut à droite des résultats de recherche. Cela ouvrira une nouvelle fenêtre GeoLocate (voir la capture d'écran suivante) affichant une carte et, dans certains cas, la ou les localisations possibles du spécimen déduites par GeoLocate à partir du texte. 
- Le point vert représente la meilleure estimation de GeoLocate concernant la localité du spécimen. Vous pouvez également voir des points rouges, qui correspondent à d'autres estimations possibles. 
- Pour voir les raisons pour lesquelles GeoLocate a sélectionné ces points, cliquez sur l'onglet « # possible locations found » (nombre de localisations possibles trouvées) situé à droite de l'onglet « Workbench » (Espace de travail). Les mots en majuscules sont ceux que GeoLocate a utilisés pour déduire une localisation.

![Options GEOLocate](/img/georeferenceguesses.jpg)

5. Cliquez sur le bouton « Options » en bas à gauche de la fenêtre GeoLocate et assurez-vous que la case « Do Uncertainty » (Calculer l'incertitude) est cochée. Fermez la fenêtre des options de géoréférencement.
6. Assurez-vous que toutes les cases (latitude, longitude, incertitude et polygone d'erreur) situées près du coin inférieur droit de la fenêtre sont cochées. 7. Si la carte présente des points, vérifiez si l'un d'eux pourrait constituer un bon point de départ pour votre géoréférencement en comparant leur emplacement sur la carte avec le texte de la chaîne de localisation (« Locality String » ; voir l'encadré en pointillés dans la capture d'écran ci-dessus). Il est possible qu'aucun de ces points ne corresponde à la localité exacte. Le cas échéant, vous pouvez ignorer ces points ou les supprimer en cliquant sur l'onglet « # possible locations found » (nombre d'emplacements possibles trouvés), puis sur le « x » entouré situé à gauche de chaque entrée rejetée (voir ci-dessous). 
- Avant de décider d'utiliser l'un des points GeoLocate, assurez-vous que l'État et le comté où le point est placé correspondent bien à ceux indiqués dans la notice.

![Options GEOLocate](/img/geolocateoptions.png)

8. En partant soit d'un point GeoLocate (si approprié), soit de zéro, utilisez la chaîne de caractères indiquant la localité (« Locality String ») pour déterminer un emplacement approximatif pour le spécimen. Cela nécessitera probablement de consulter d'autres sources (par ex. Google Maps) pour trouver les noms de lieux et de caractéristiques géographiques. 
- Vous pouvez modifier la couche de base (c.-à-d. le type de carte affiché dans la fenêtre GeoLocate) en cliquant sur le symbole « plus » situé dans le coin supérieur droit de la fenêtre (voir la capture d'écran suivante). 
- Pour mesurer une distance sur la carte, cliquez sur le bouton situé à côté de « Measure » (Mesurer), puis cliquez sur un point de départ sur la carte. Vous pouvez ensuite déplacer votre curseur n'importe où sur la carte ; une ligne sera alors mesurée entre ces deux points. La longueur de la ligne s'affichera en vert à côté de celle-ci. Pour effectuer une mesure impliquant plus de deux points, cliquez à nouveau pour fixer un point supplémentaire. Pour arrêter la mesure, double-cliquez sur le point final. 
- Si la chaîne de caractères de la localité ne contient pas suffisamment d'informations pour attribuer un point approximatif, consultez la fiche du spécimen en revenant à la page des résultats de recherche (voir la capture d'écran ci-dessous) et en cliquant sur l'icône en forme de crayon située en haut à droite de la zone des résultats. La fiche du spécimen s'affichera alors ; vous pourrez y vérifier si des informations supplémentaires sur la localité figurent dans un autre champ de données (par ex. l'habitat) ou sur l'image du spécimen (si elle est disponible). 
- Si vous ne parvenez toujours pas à attribuer un point approximatif à partir de ces informations, faites défiler la fiche du spécimen vers le bas jusqu'au champ « Processing Status » (Statut de traitement). Sélectionnez « Expert Required » (Expert requis) dans le menu déroulant de ce champ. Dans le champ « Notes (Occurrence Remarks) » situé au-dessus et à gauche, saisissez une brève note entre crochets, telle que « [Not enough data to georeference] » (Données insuffisantes pour la géoréférenciation). Cliquez sur le bouton « Save Edits » (Enregistrer les modifications), fermez la fiche et sélectionnez une nouvelle fiche à géoréférencer.

![Options GEOLocate](/img/geolocateoptions2.jpg)

9. Une fois que vous avez trouvé un emplacement approximatif pour la fiche du spécimen, cliquez sur le bouton situé à côté de « Place Marker » (Placer un marqueur), puis cliquez sur la carte à l'endroit où vous souhaitez placer le point GeoLocate. Nous vous recommandons de consulter le [Guide rapide de géoréférencement](https://docs.gbif.org/georeferencing-quick-reference-guide/1.0/en/) pour déterminer où placer le point.

10. Définissez le rayon d'erreur et/ou créez un polygone d'erreur pour indiquer l'incertitude liée à la localité du spécimen. Nous vous recommandons de consulter le [Guide rapide de géoréférencement](https://docs.gbif.org/georeferencing-quick-reference-guide/1.0/en/) pour déterminer la taille du rayon d'erreur à utiliser pour un point donné et savoir s'il convient d'utiliser un polygone d'erreur. 
- Pour modifier la taille du rayon d'erreur, cliquez sur le point vert affiché sur la carte et sélectionnez « Edit Uncertainty » (Modifier l'incertitude) dans la fenêtre contextuelle. Cliquez sur la flèche grise qui apparaît sur le bord extérieur du cercle d'erreur et faites-la glisser pour redimensionner le rayon. 
- Pour créer un polygone d'erreur, cliquez sur le bouton situé à côté de « Create polygon » (Créer un polygone), puis cliquez sur la carte à l'endroit où vous souhaitez commencer à le dessiner. Un sommet du polygone est créé à chaque clic sur la carte. Pour terminer le polygone, effectuez un double-clic. Une fois le polygone terminé, cliquez à nouveau sur le point vert et sélectionnez « Resize uncertainty to polygon » (Ajuster l'incertitude au polygone). 
- Pour recommencer le tracé d'un polygone, cliquez sur le bouton « Clear Polygon » (Effacer le polygone) situé à droite du bouton « Options ». 
- Veillez à noter toute incertitude rencontrée lors de la définition du rayon d'erreur. Par exemple, si vous géoréférenciez un lieu nommé dont les limites ne sont pas clairement définies, expliquez comment vous avez déterminé un rayon d'erreur approprié en ajoutant une note dans le champ « Remarks » (Remarques) de la page de résultats de recherche où vous avez initialement sélectionné la fiche du spécimen.

![Formulaire de géoréférencement par lots](/img/batchgeoreferencemod.png)

11. Une fois que vous êtes satisfait du point de géolocalisation et du rayon d'erreur définis, cliquez sur le bouton « Save To Your Application » (Enregistrer dans votre application) situé au bas de la fenêtre de géolocalisation. Vous serez redirigé vers la page des résultats de recherche où vous aviez initialement sélectionné la fiche du spécimen (voir la première capture d'écran). 
- Les coordonnées et l'erreur s'afficheront désormais sous les résultats de recherche, dans les champs appropriés (Latitude, Longitude et Error/Erreur). Si vous avez créé un polygone d'erreur, ses coordonnées seront indiquées dans le champ « Footprint WKT ».
12. Cliquez sur le bouton « Update Coordinates » (Mettre à jour les coordonnées) au bas de la page.
13. Sélectionnez une nouvelle fiche ou un nouvel ensemble de fiches à géoréférencer dans la liste des résultats de recherche et répétez l'opération.

### Exemples de protocoles de géoréférencement par lots

- [Guides de géoréférencement du California Phenology Network](https://www.capturingcaliforniasflowers.org/georeferencing-protocols-and-guides.html)
- [Aperçu du flux de travail de géoréférencement du Florida Museum of Natural History](https://www.floridamuseum.ufl.edu/mossesinflas/georeferencing/)
- [Instructions de géoréférencement par lots du Microfungi TCN](https://www.microfungi.org/files/1014/7915/7996/Georeferencing.pdf)
- [Guide de géoréférencement de l'herbier de la MSU](https://herbarium.appstate.edu/sites/herbarium.appstate.edu/files/missa_how_to_geolocate_in_symbiota_0.pdf)
