---
title: "Images et autres médias"
date: 2021-10-06
lastmod: 2026-01-29
sidebar_position: 41
draft: false
authors: ["Ed Gilbert","Katie Pearson"]
editors: ["Katie Pearson", "Lindsay Walker"]
keywords: ["images","media"]
---

import ReactPlayer from "react-player";

:::info

Cette page décrit les types de contenus multimédias pris en charge par les portails Symbiota.

:::

:::note

Depuis la version 3.2, les portails Symbiota prennent en charge les fichiers audio ! C'est pourquoi la plupart des outils sont désormais désignés comme des outils « médias » ou « multimédias », plutôt que comme des « outils d'imagerie » (comme c'était le cas dans les versions précédentes). Le terme « média » englobe tout contenu audiovisuel, tel que les images ou les fichiers audio ; toutefois, les fichiers vidéo ne sont pas pris en charge pour le moment.

:::

Des ressources multimédias peuvent être associées aux enregistrements dans les portails Symbiota par le biais de liens stockés dans les tables de la base de données. Si un portail Symbiota est configuré pour accepter des ressources multimédias (c'est-à-dire si le stockage de ces fichiers est autorisé au sein de l'institution qui héberge le portail), ces liens peuvent être générés directement par le portail. Le stockage d'un grand volume de ressources multimédias sur les serveurs associés à un portail Symbiota (par exemple, ceux de l'Arizona State University) peut nécessiter un accord d'hébergement et/ou entraîner des frais. Renseignez-vous auprès de l'administrateur de votre portail pour connaître les conditions et limites relatives à l'hébergement de contenus multimédias. Par ailleurs, il existe des outils permettant d'associer des URL externes à des occurrences en utilisant les numéros de catalogue comme critères de correspondance.

:::note

Si votre portail est hébergé par le [Symbiota Support Hub](https://symbiota.org/symbiota-portals/), vous pourriez bénéficier d'un certain volume d'hébergement multimédia gratuit. Contactez [help@symbiota.org](mailto:help@symbiota.org) pour plus d'informations.

:::

Il existe trois catégories de contenus multimédias pouvant être associés à un portail Symbiota :

### Médias associés à une occurrence (spécimen)

Les médias (par exemple, des images) se rapportant à des spécimens physiques doivent être liés aux fiches correspondant à ces spécimens. Les médias liés à un spécimen sont accessibles depuis la page « Détails de l'occurrence » ainsi que depuis la « Fiche taxon » correspondant à l'identification la plus récente. Si l'identification du spécimen fait l'objet d'une annotation (mise à jour), l'identification taxonomique associée au média est automatiquement mise à jour pour refléter ce nouveau taxon. Les médias liés à un spécimen peuvent être ajoutés via l'interface de saisie des occurrences (« Éditeur d'occurrences ») ou par le biais de procédures de traitement par lots.

Consultez la section [Téléversement d'images et autres médias](/Editor_Guide/Images_Media/batch_uploading_images) pour plus de détails.

### Médias de terrain sans localisation

Les médias dépourvus d'informations précises sur la localisation (par exemple, des coordonnées de latitude/longitude) sont uniquement liés au nom scientifique de l'organisme. Ces ressources multimédias peuvent être consultées via les « Fiches taxon », qui contiennent des informations générales telles que des descriptions, des cartes de répartition, des synonymes et des noms vernaculaires. Les médias de terrain sont téléversés et gérés depuis les « Fiches taxon » par des utilisateurs disposant des autorisations de modification correspondantes. Les médias de terrain assortis de précisions sur la localisation (par exemple, des coordonnées) peuvent être intégrés en tant que « médias faisant office de preuves » (voir l'onglet « Médias de terrain avec localisation »). Consultez la section [Téléversement d'images et autres médias](/Editor_Guide/Images_Media/batch_uploading_images) pour plus de détails.

### Médias de terrain avec localisation

Les médias de terrain comportant des informations précises sur la localisation peuvent servir de preuves (« vouchers ») pour des observations réalisées sur le terrain, notamment pour de nombreux oiseaux, mammifères et plantes faciles à identifier. Dans certains cas, ils peuvent même être préférables, par exemple si l'organisme est rare ou si l'observateur ne dispose pas du permis de collecte approprié. Ces ressources multimédias s'apparentent à des fiches d'occurrence géoréférencées : elles peuvent faire l'objet de recherches et permettent d'afficher un point sur les cartes de répartition des espèces. Toutefois, certains groupes taxonomiques nécessitent généralement une analyse microscopique ou chimique pour une identification fiable (par exemple, les lichens, les bryophytes ou les champignons). Pour de tels organismes, les images prises sur le terrain ont une valeur limitée. C'est pourquoi certains portails de données peuvent ne pas autoriser la soumission d'observations en l'absence de spécimen physique. Les images servant de pièces justificatives (« vouchers ») sont affichées à la fois sur les pages de détails d’une occurrence et sur les pages de profil d’un taxon. Les observations accompagnées d’images peuvent être téléversées via la page de soumission d’observations. Il est possible de soumettre jusqu’à trois images pour une même observation. Les champs de données requis pour qu’une image soit considérée comme une pièce justificative comprennent : le nom de l’observateur, la date de l’observation, le pays, l’État (ou la province/région), la description de la localité, la latitude, la longitude, ainsi qu’au moins une image. Veuillez contacter l’administrateur de votre portail de données pour savoir si les observations sont autorisées et connaître les protocoles à suivre pour en soumettre une. Certains portails exigent le visionnage d’un tutoriel avant d’autoriser la soumission d’observations.

Consultez la section [Téléversement d’images et autres contenus multimédias](/Editor_Guide/Images_Media/batch_uploading_images) pour plus de détails.

# Tutoriels vidéo associés (en anglais)

<ReactPlayer
  playing={false}
  controls
  url="https://youtu.be/m1HHN4g4NGg"
/>
<br></br>

<ReactPlayer
  playing={false}
  controls
  url="https://youtu.be/v2bcx4oKDVI"
/>
<br></br>

<ReactPlayer
  playing={false}
  controls
  url="https://youtu.be/MGd_A3r2oNw"
/>