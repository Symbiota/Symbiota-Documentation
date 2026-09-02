---
title: "Rotation d'images"
date: 2023-09-21
authors: ["Ed Gilbert"]
editors: ["Katie Pearson, Lindsay Walker"]
keywords: ["images","image orientation","image rotating"]
---

:::info

Cette page décrit un problème courant de rotation d'image et explique comment s'assurer que vos images s'affichent dans la bonne orientation sur un portail Symbiota.

:::

Les photos de spécimens sont souvent prises avec l'appareil orienté à 90°, ce qui donne une image du spécimen tournée sur le côté. Pour garantir que les images s'affichent correctement sur un portail Symbiota, vous devez vous assurer qu'elles ont été pivotées à l'aide d'un logiciel qui modifie réellement les données de l'image, plutôt que de simplement ajouter une balise d'orientation dans les métadonnées EXIF ​​(méthode utilisée par la plupart des appareils photo et des explorateurs de fichiers pour faire pivoter les images).

Modifier les paramètres de l'appareil photo pour définir l'orientation correcte ou faire pivoter les images par lots via l'explorateur de fichiers d'un PC ne sont pas des solutions idéales, car ces méthodes modifient uniquement la balise d'orientation EXIF ​​sans faire pivoter réellement le fichier image (les données de pixels). Bien que de nombreux logiciels (par ex. Chrome, Firefox, l'Explorateur Windows, etc.) effectuent une rotation automatique correcte en se basant sur la balise d'orientation et affichent l'image correctement, ce n'est pas le cas de tous les programmes (par ex. Internet Explorer, certaines extensions de navigateur, etc.). De plus, lors du téléchargement d'images sur le Web, les balises d'orientation ne sont souvent pas conservées dans les versions dérivées générées par le programme de téléchargement (par ex. vignettes, aperçus Web, etc.). Par exemple, les images liées ci-dessous s'afficheront toutes avec une mauvaise orientation dans Internet Explorer (version PC), et seule l'image en taille réelle (originale) s'orientera correctement dans Chrome ou Firefox. [Vignette](https://s.idigbio.org/idigbio-images-prod-thumbnail/d7ce7fda69335db5966a2265e8771e1e.jpg)

[Vue Web](https://s.idigbio.org/idigbio-images-prod-webview/d7ce7fda69335db5966a2265e8771e1e.jpg)

[Taille réelle](https://s.idigbio.org/idigbio-images-prod-fullsize/d7ce7fda69335db5966a2265e8771e1e.jpg)

**La solution la plus sûre consiste à faire pivoter les données réelles de l'image (la définition des pixels) plutôt que de simplement modifier la balise d'orientation.** Cette opération peut être effectuée par traitement par lots à l'aide de logiciels de retouche d'image tels qu'Adobe Lightroom ou Photoshop. Le lien ci-dessous propose une liste d'options gratuites pour effectuer une rotation des images sans perte de qualité. Par exemple, vous pouvez télécharger « JPEG Lossless Rotator » ; ce logiciel est facile à utiliser, affiche l'orientation réelle des images contenues dans un dossier et offre des outils de rotation sans perte.

[Liste d'applications pour la rotation sans perte](http://jpegclub.org/losslessapps.html)

[Application Lossless Rotator d'Anny Studio](http://annystudio.com/software/jpeglosslessrotator/)

### Dépannage
Certaines métadonnées peuvent influer sur l'affichage des images dans votre navigateur web. Si une image apparaît mal orientée sur votre portail, essayez de changer de navigateur pour voir si cela corrige son orientation.
