---
title: "Champs de données Symbiota"
date: 2014-07-21
lastmod: 2026-06-05
draft: false
authors: ["Ed Gilbert", "Katie Pearson", "Lindsay Walker"]
editors: ["Laura Rocha Prado"]
sidebar_position: 0
keywords:
  [
    "edit",
    "fields",
    "data fields",
    "terms",
    "dwc terms",
    "paleontology fields",
    "material sample fields",
  ]
---

# Champs de données Symbiota

:::info
Cette page fournit des définitions de champs de données visant à favoriser l'interopérabilité des données au sein des portails Symbiota.
:::

* Les champs listés ici diffèrent de ceux qui apparaissent dans les outils de téléversement de données. Pour obtenir des informations spécifiques aux champs utilisés lors du téléversement, veuillez consulter la documentation sur les [**champs d'importation de données**](/Collection_Manager_Guide/Importing_Uploading/data_import_fields).
* Si vous souhaitez savoir **comment importer des données** dans votre portail, vous trouverez ces informations [ici](/Collection_Manager_Guide/Importing_Uploading/). (Ces [**conseils de téléversement**](/Collection_Manager_Guide/Importing_Uploading/#uploading-tips) pourraient vous être particulièrement utiles si vous débutez dans l'importation de données vers les portails Symbiota !)
* Le schéma de données Symbiota est étroitement aligné sur la norme de données <a href="https://www.tdwg.org/standards/dwc/" target="_blank" rel="noopener noreferrer">Darwin Core (DwC)</a>. Pour plus de détails, des liens vers les définitions Darwin Core sont fournis pour chaque terme. Apprenez-en davantage sur les termes Darwin Core en consultant les pages suivantes du TDWG : [TDWG - Guide de référence rapide Darwin Core](https://dwc.tdwg.org/terms/), [TDWG - Liste des termes Darwin Core](https://dwc.tdwg.org/list)

# Champs standard

:::warning
Comme les portails ont la possibilité de personnaliser les noms des champs figurant sur leurs formulaires de saisie, ces noms peuvent différer de la définition du champ de base ou de la manière dont il est mappé vers les outils d'exportation Darwin Core.
:::

import Button from '@site/src/components/Button';
import ButtonLink from '@site/src/components/ButtonLink';

<ButtonLink
link="/documents/SymbiotaDataFields202634.csv"
label="Télécharger le contenu complet au format CSV"
download={true}
style={{marginBottom: '2vh'}}
/>

## Informations sur le collecteur

| ![Informations sur le collecteur](/img/occeditor_collectorinfo.png)  |
| :-------------------------------------: |
| Section « Informations sur le collecteur » du formulaire d'édition des occurrences |

### Numéro de catalogue

L'identifiant unique (clé primaire) de la fiche du spécimen. Ce champ doit être utilisé pour stocker le code-barres ou le numéro d'acquisition (herbiers uniquement). L'unicité de ce champ est imposée au sein de chaque collection.<br></br>
**Exemples :** `WIS-L-0123456` `ASUCOB0012345`<br></br>
Voir le terme [catalogNumber](https://dwc.tdwg.org/terms/#dwc:catalogNumber) du Darwin Core.

### Valeurs d'identifiants supplémentaires

Tout autre identifiant associé à la fiche d'un spécimen, autre que le numéro de catalogue principal. Ce champ est généralement utilisé pour stocker les anciens numéros de catalogue, les numéros d'acquisition, les identifiants de parcs nationaux, etc. Une étiquette peut être attribuée à ces identifiants pour les distinguer les uns des autres (par ex. ancien n° d'acquisition, n° NPS, etc.). Ces identifiants correspondent le mieux à la définition du terme dwc:otherCatalogNumbers et sont donc inclus dans les exports sous ce champ. De plus amples informations sur ce système sont disponibles sur la [page de documentation relative aux numéros de catalogue](/Editor_Guide/Editing_Searching_Records/catalog_numbers).<br></br>
**Exemples :** `TUZI 3082` `NPS Acc #: GUIS-M-00126`<br></br>
Voir le terme [otherCatalogNumbers](https://dwc.tdwg.org/terms/#dwc:otherCatalogNumbers) du Darwin Core ainsi que l'[extension pour les identifiants alternatifs](https://rs.gbif.org/extension/gbif/1.0/identifier.xml).

### Collecteur

Le nom de la personne ayant collecté le spécimen ou effectué l'observation.<br></br>
**Exemples :** `C.G. Pringle` `Goodding, L.N.` `John Wesley Powell` `M. Andrew Johnston (ORCID 0000-0002-0166-6985)<br></br>
Voir le terme [recordedBy](https://dwc.tdwg.org/terms/#dwc:recordedBy) du Darwin Core

### Collecteurs associés

Autres collecteurs présents au moment de la collecte.<br></br>
**Exemples :** `John R. Reeder, Alan Nelson`<br></br>
Ce champ n'est pas défini par la norme Darwin Core, qui regroupe les collecteurs principaux et secondaires dans le champ *recordedBy*.

### Numéro

Numéro de collecte attribué au spécimen par le collecteur.<br></br>
**Exemples :** `1294` `12490b` `94-132`<br></br>
Voir le terme [recordNumber](https://dwc.tdwg.org/terms/#dwc:recordNumber) du Darwin Core

### Date (début)

La date de collecte du spécimen ou, si une plage de dates est indiquée, le premier jour de cette plage. Bien que les dates puissent être saisies dans le format de votre choix, la valeur sera convertie et stockée au format numérique ISO-8601 (AAAA-MM-JJ). Notez que les mois et les jours inconnus peuvent être saisis sous la forme « 00 ». Par exemple, une collecte datée de « mars 1956 » peut être saisie comme « 1956-03-00 ».<br></br>
**Exemples :** `1983-09-15` `1983-07-00` `1934-00-00`<br></br>
Voir le terme [eventDate](https://dwc.tdwg.org/terms/#dwc:eventDate) du Darwin Core.

### Date de fin

La dernière date de collecte, dans le cas d'une plage de dates de collecte. Bien que les dates puissent être saisies dans le format de votre choix, la valeur sera convertie et stockée au format numérique ISO-8601 (AAAA-MM-JJ). Notez que les mois et les jours inconnus peuvent être saisis sous la forme « 00 ». Par exemple, une collecte datée de « mars 1956 » peut être saisie comme « 1956-03-00 ».<br></br>
**Exemples :** `1983-09-15` `1983-07-00` `1934-00-00`<br></br>
Voir le terme [eventDate](https://dwc.tdwg.org/terms/#dwc:eventDate) du Darwin Core.

### Date (telle qu'indiquée)

La date de collecte ou d'observation telle qu'elle figure exactement sur une étiquette ou dans les notes de terrain. Particulièrement utile pour les formats de date non standard ou les plages de dates.<br></br>
**Exemples :** `Spring 1901` `March-April 1952` `late Sept. 1909`<br></br>
Voir le terme [verbatimEventDate](https://dwc.tdwg.org/terms/#dwc:verbatimEventDate) du Darwin Core

### Heure de l'événement

L'heure de la collecte ou de l'observation associée à un enregistrement. Ce champ est actuellement un champ de texte ne nécessitant aucun formatage spécifique. Toutefois, il est recommandé d'utiliser une norme telle que l'ISO pour représenter l'heure.<br></br>
**Exemples :** `18:00:00.000` `2:46 PM`<br></br>
Voir le terme [eventTime](https://dwc.tdwg.org/terms/#dwc:eventTime) du Darwin Core

## Dernière identification

| ![Infos sur le collecteur](/img/occeditor_latestidentification.png)  |
| :-------------------------------------: |
| Section « Dernière identification » du formulaire de l'éditeur d'occurrence |

### Nom scientifique

Le nom latin du spécimen, sans l'auteur. Il peut s'agir de n'importe quel rang taxonomique, du règne jusqu'à la sous-espèce ou la variété, selon le niveau de l'identification.<br></br>
**Exemples :** `Pinaceae` `Pinus` `Pinus edulis` `Pinus edulis var. fallax`<br></br>
Voir le terme [scientificName](https://dwc.tdwg.org/terms/#dwc:scientificName) du Darwin Core

:::tip

Lors de la saisie directe du _Nom scientifique_ dans l'éditeur d'occurrence, un menu déroulant peut apparaître pour faciliter la saisie, en s'appuyant sur le thésaurus taxonomique interne de votre portail. Les taxons ne figurant pas dans la liste déroulante peuvent tout de même être saisis et enregistrés.

:::

### Auteur

Le nom de la personne ayant nommé le taxon pour la première fois. Ce champ se remplit automatiquement après la saisie du nom scientifique. Si le nom saisi dans le champ « Nom scientifique » figure dans le thésaurus taxonomique, ce champ sera automatiquement renseigné à partir de celui-ci. Les conventions de formatage peuvent varier selon la discipline (par ex. botanique ou zoologie).<br></br>
**Exemples :** `L.` `A. Gray` `(Anderson, 1938)`<br></br>
Voir le terme [scientificNameAuthorship](https://dwc.tdwg.org/terms/#dwc:scientificNameAuthorship)

### Qualificatif d'identification

L'expression de l'incertitude de l'identificateur concernant son identification. Cette mention figurera sur l'étiquette aux côtés du nom scientifique.<br></br>
**Exemples :** `cf.` `aff.` `?`<br></br>
Voir le terme [identificationQualifier](https://dwc.tdwg.org/terms/#dwc:identificationQualifier)

### Famille

La famille à laquelle appartient le taxon indiqué dans le champ « Nom scientifique ». Si le nom saisi dans le champ « Nom scientifique » figure dans le thésaurus taxonomique, ce champ sera automatiquement renseigné à partir de ce dernier.<br></br>
**Exemples :** `Pinaceae` `Mephitidae`<br></br>
Voir le terme [family](https://dwc.tdwg.org/terms/#dwc:family) du Darwin Core

### Identifié par

Le nom de la personne ayant identifié le spécimen. Également appelé « déterminateur ».<br></br>
**Exemples :** `Leslie R. Landrum`<br></br>
Voir le terme [identifiedBy](https://dwc.tdwg.org/terms/#dwc:identifiedBy) du Darwin Core

### Date d'identification

La date à laquelle l'identification a été effectuée. La date peut être saisie sous forme de texte libre et ne nécessite pas de format standard.<br></br>
**Exemples :** `1992` `May 1992` `2 May 1992`<br></br>
Voir le terme [dateIdentified](https://dwc.tdwg.org/terms/#dwc:dateIdentified) du Darwin Core

### Références d'identification

La source de référence utilisée pour effectuer l'identification.<br></br>
**Exemples :** `Nesom, Guy L. 2006. Flora of North America - Asteraceae. vol. 20`<br></br>
Voir le terme [identificationReferences](https://dwc.tdwg.org/terms/#dwc:identificationReferences) du Darwin Core

### Remarques sur l'identification

Toute note supplémentaire concernant l'identification du spécimen.<br></br>
**Exemples :** `pétales roses mais longueur du calice plus caractéristique de S. angustifolium` `détermination basée sur la taille et la forme des testicules`<br></br>
Voir le terme [identificationRemarks](https://dwc.tdwg.org/terms/#dwc:identificationRemarks) du Darwin Core

### Remarques sur le taxon

Toute note supplémentaire concernant le nom taxonomique attribué au spécimen lors de son identification. Dans les collections biologiques, ce champ est souvent utilisé pour enregistrer les noms vernaculaires.<br></br>
**Exemples :** `Taxon probablement plus valide` `Smalley's wooly aster`<br></br>
Voir le terme [taxonRemarks](https://dwc.tdwg.org/terms/#dwc:taxonRemarks) du Darwin Core

## Localité

| ![Infos sur le collecteur](/img/occeditor_locality.png)  |
| :-------------------------------------: |
| Section « Localité » du formulaire de l'éditeur d'occurrences |

### Continent

Le nom du continent où le spécimen a été collecté.<br></br>
**Exemples :** `Amérique du Sud` `Australie`<br></br>
Voir le terme [continent](https://dwc.tdwg.org/terms/#dwc:continent) du Darwin Core

### Étendue d'eau

Le nom de l'étendue d'eau où le spécimen a été collecté.<br></br>
**Exemples :** `Océan Pacifique` `Mer Noire`<br></br>
Voir le terme [waterBody](https://dwc.tdwg.org/terms/#dwc:waterBody) du Darwin Core

### Groupe d'îles

Le nom du groupe d'îles où le spécimen a été collecté.<br></br>
**Exemples :** `Îles Hawaï` `Archipel Alexandre`<br></br>
Voir le terme [islandGroup](https://dwc.tdwg.org/terms/#dwc:islandGroup) du Darwin Core

### Île

Le nom de l'île où le spécimen a été collecté.<br></br>
**Exemples :** `Cayo Coco` `Maui`<br></br>
Voir le terme [island](https://dwc.tdwg.org/terms/#dwc:island) du Darwin Core

### Pays

Le nom du pays où le spécimen a été collecté. Pour faciliter la saisie des données, un menu déroulant s'affiche lors de la frappe, bien qu'il soit toujours possible de saisir des noms ne figurant pas dans la liste.<br></br>
**Exemples :** `États-Unis` `Brésil` `Togo`<br></br>
Voir le terme [country](https://dwc.tdwg.org/terms/#dwc:country) du Darwin Core

### État/Province

Le nom de l'État ou de la province où le spécimen a été collecté. Pour faciliter la saisie des données, un menu déroulant s'affiche à mesure que vous tapez ; toutefois, il reste possible de saisir des noms ne figurant pas dans la liste.<br></br>
**Exemples :** `New York` `Hidalgo`<br></br>
Voir le terme [stateProvince](https://dwc.tdwg.org/terms/#dwc:stateProvince) du Darwin Core.

### Comté

Le nom du comté où le spécimen a été collecté. Pour faciliter la saisie des données, un menu déroulant s'affiche à mesure que vous tapez ; toutefois, il reste possible de saisir des noms ne figurant pas dans la liste. Pour les enregistrements hors États-Unis, indiquez la division géographique située immédiatement en dessous du niveau État/Province.<br></br>
**Exemples :** `Maricopa` `Washington`<br></br>
Voir le terme [county](https://dwc.tdwg.org/terms/#dwc:county) du Darwin Core.

:::tip

Lors de la saisie directe des données dans les champs _Pays_, _État/Province_ et _Comté_ via l'éditeur d'occurrences, un menu déroulant peut apparaître pour faciliter la saisie, en s'appuyant sur le thésaurus géographique interne de votre portail. Il est tout de même possible de saisir et d'enregistrer des valeurs ne figurant pas dans la liste déroulante.

:::

### Municipalité

Le nom de la municipalité où le spécimen a été collecté. Pour les spécimens collectés en dehors des États-Unis, indiquez la désignation géographique de quatrième niveau.<br></br>
**Exemples :** `Paradise Valley`<br></br>
Voir le terme [municipality](https://dwc.tdwg.org/terms/#dwc:municipality) du Darwin Core

### Localité

L'emplacement détaillé où le spécimen a été collecté.<br></br>
**Exemples :** `9,5 miles au nord-ouest de Sedona, le long de Boynton Pass Rd.`<br></br>
Voir le terme [locality](https://dwc.tdwg.org/terms/#dwc:locality) du Darwin Core

### Identifiant de l'emplacement (Location ID)

Un identifiant pour l'ensemble des informations de localisation (données associées à dcterms:Location). Il peut s'agir d'un identifiant unique global ou d'un identifiant spécifique au jeu de données.<br></br>
**Exemples :** `https://opencontext.org/subjects/768A875F-E205-4D0B-DE55-BAB7598D0FD1` `USNM loc. 2126`<br></br>
Voir le terme [locationID](https://dwc.tdwg.org/terms/#dwc:locationID) du Darwin Core

### Remarques sur l'emplacement (Location Remarks)

Commentaires ou notes concernant la localité.<br></br>
**Exemples :** `Anciennement connu sous le nom de Mt. Evans` `Localité inaccessible`<br></br>
Voir le terme [locationRemarks](https://dwc.tdwg.org/terms/#dwc:locationRemarks) du Darwin Core

### Sécurité

La sélection de l'option « Locality Security applied » (Sécurité de la localité appliquée) dans le menu déroulant masquera les détails de la localité (à un niveau plus précis que celui du comté) aux utilisateurs non autorisés. Cette mesure est généralement prise lorsque l'espèce est rare ou menacée, ou lorsque le lieu de collecte est une propriété privée. Les images et autres médias sont également masqués afin de protéger les détails de la localité qui pourraient être visibles sur l'étiquette. Les utilisateurs connectés au système disposant des autorisations nécessaires pour voir les détails de la localité (par exemple, les gestionnaires de collections) continueront d'avoir accès à toutes les données. La sécurité de la localité sera automatiquement appliquée si le nom de l'espèce figure sur la liste des espèces protégées du portail (accessible via le plan du site). Choisir l'option « Sécurité totale appliquée » (*Full Security applied*) masquera entièrement l'enregistrement aux utilisateurs publics ne disposant pas d'autorisations d'éditeur ou d'administrateur pour votre collection. **À moins que des protections juridiques ne s'appliquent, ce niveau de sécurité n'est généralement PAS recommandé pour la plupart des enregistrements, car il réduit la visibilité de vos collections et soustrait des données précieuses à la recherche et à l'usage public.** Laisser le champ de sécurité sur « Sécurité non appliquée » (*Security not applied*) permet d'appliquer les paramètres par défaut définis par les administrateurs chargés des espèces sensibles ; c'est l'option recommandée pour la plupart des enregistrements. **Consultez le guide du gestionnaire de collection (*Collection Manager Guide*) pour en savoir plus sur le fonctionnement du masquage des données (*data redaction*) dans les portails Symbiota.**<br></br>
Ce champ n'est pas défini par la norme Darwin Core.

### Latitude et longitude

La latitude et la longitude géographiques en degrés décimaux. Les latitudes de l'hémisphère sud et les longitudes de l'hémisphère ouest (par ex. États-Unis) doivent être saisies sous forme de valeurs négatives. Cliquez sur le bouton « Outils » (*Tools*) pour saisir les coordonnées aux formats degrés, minutes, secondes (DMS) ou UTM. Les degrés décimaux constituent la norme de coordonnées privilégiée, telle que définie par Darwin Core.<br></br>
**Exemples :** `34.874022` `-111.75774`<br></br>
Voir les termes Darwin Core [decimalLatitude](https://dwc.tdwg.org/terms/#dwc:decimalLatitude) et [decimalLongitude](https://dwc.tdwg.org/terms/#dwc:decimalLongitude)

### Incertitude

La précision des coordonnées de géoréférencement exprimée en mètres (valeur numérique uniquement). Elle correspond au rayon d'un cercle à l'intérieur duquel se trouverait le point réel, s'il était connu. Si les coordonnées sont relevées à l'aide d'un GPS, la précision correspond à la marge d'erreur de l'appareil (généralement autour de 10 m). Pour les spécimens anciens dont les coordonnées ont été notées par le collecteur sans indication de la source (GPS, carte, etc.), on peut généralement supposer une précision de l'ordre de 100 à 200 mètres. Si les informations de localisation sont vagues (par exemple, simplement « Grand Canyon »), les coordonnées doivent correspondre au centroïde de la zone d'incertitude englobant la région plus large où le spécimen a pu être collecté. Si la localité est « Boynton Canyon, Sedona », l'incertitude sera d'environ 1 500 m. Ce champ se remplit automatiquement lors de l'utilisation de GeoLocate pour le géoréférencement.<br></br>
**Exemples :** `42000` `100`<br></br>
Voir le terme [coordinateUncertaintyInMeters](https://dwc.tdwg.org/terms/#dwc:coordinateUncertaintyInMeters) du Darwin Core.

### Système géodésique (Datum)

Le système géographique utilisé pour déterminer les coordonnées. Ce champ se remplit automatiquement lors de l'utilisation de [GeoLocate](http://www.museum.tulane.edu/geolocate/) ou de l'outil de cartographie pour le géoréférencement.<br></br>
**Exemples :** `NAD27` `NAD83` `WGS84`<br></br>
Voir le terme [geodeticDatum](https://dwc.tdwg.org/terms/#dwc:geodeticDatum) du Darwin Core.

### Coordonnées verbatim

Valeurs des coordonnées telles qu'elles figurent sur l'étiquette du spécimen, dans le registre des localités ou dans les notes de terrain, si elles n'ont pas été enregistrées initialement en degrés décimaux. Si vos coordonnées sont exprimées en degrés-minutes-secondes (DMS), en coordonnées UTM (Universal Transverse Mercator) ou selon le système TRS (Township-Range-Section), cliquez sur le bouton « F » pour afficher les outils de formatage. Saisissez les coordonnées figurant sur votre étiquette dans le champ approprié et cliquez sur le bouton « Insérer les valeurs » correspondant. Les valeurs valides aux formats DMS ou UTM seront automatiquement converties en degrés décimaux. Si une valeur a déjà été saisie dans le champ « Verbatim Coordinates » (Coordonnées brutes), vous pouvez cliquer sur les doubles flèches situées à gauche de ce champ pour tenter une conversion automatique au format degrés décimaux. Les coordonnées TRS ne peuvent pas être converties automatiquement dans le formulaire de saisie, mais elles peuvent être transformées en une géoréférence appropriée à l'aide de l'outil GEOLocate. Pour plus d'informations à ce sujet et sur l'utilisation des outils de coordonnées, [consultez cette vidéo tutorielle](https://www.youtube.com/watch?v=XyYPYJ1guMY&t=70s).<br></br>
**Exemples :** `34° 13.940' N 112° 2.370' W` `12 420944E 4064025N` `TRS: T40N R32E S29`<br></br>
Voir le terme [verbatimCoordinates](https://dwc.tdwg.org/terms/#dwc:verbatimCoordinates) du Darwin Core.

### Élévation en mètres

L'élévation en mètres à laquelle le spécimen a été récolté. Également appelée altitude. Utilisez uniquement le champ de gauche (en laissant le champ de droite vide) lorsqu'il n'y a qu'une seule valeur d'élévation. Utilisez le champ de gauche pour indiquer l'élévation minimale en mètres et le champ de droite pour indiquer l'élévation maximale en mètres.<br></br>
**Exemples :** `1400` `2000`<br></br>
Voir les termes [minimumElevationInMeters](https://dwc.tdwg.org/terms/#dwc:minimumElevationInMeters) et [maximumElevationInMeters](https://dwc.tdwg.org/terms/#dwc:maximumElevationInMeters) du Darwin Core.

### Élévation brute (Verbatim Elevation)

L'élévation brute (telle qu'indiquée à l'origine) à laquelle le spécimen a été récolté. Ce champ est généralement utilisé pour consigner une mesure d'élévation enregistrée en pieds ou une indication d'incertitude. Lorsque le champ « Élévation en mètres » est laissé vide, la valeur sera automatiquement convertie en mètres. Sélectionnez la double flèche pour remplacer les valeurs en mètres saisies précédemment.<br></br>
**Exemples :** `4500ft` `4500 feet` `ca 4500'` `ca 2000m` `4500' +-300'`<br></br>
Voir le terme [verbatimElevation](https://dwc.tdwg.org/terms/#dwc:verbatimElevation) du Darwin Core.

### Profondeur en mètres

La plage de profondeur sous la surface locale, en mètres. Utilisez le champ de gauche pour indiquer la profondeur minimale en mètres et le champ de droite pour indiquer la profondeur maximale en mètres.<br></br>
**Exemples :** `100` `1042`<br></br>
Voir les termes [minimumDepthInMeters](https://dwc.tdwg.org/terms/#dwc:minimumDepthInMeters) et [maximumDepthInMeters](https://dwc.tdwg.org/terms/#dwc:maximumDepthInMeters) du Darwin Core.

### Profondeur (telle qu'indiquée)

La description originale (telle qu'indiquée) de la profondeur sous la surface locale à laquelle le spécimen a été récolté.<br></br>
**Exemples :** `100ft` `100 feet` `ca 100'` `ca 30m` `100' +-10'` `7 fathoms`<br></br>
Voir le terme [verbatimDepth](https://dwc.tdwg.org/terms/#dwc:verbatimDepth) du Darwin Core

### Géoréférencé par

Le nom (ou nom d'utilisateur) de la personne ayant géoréférencé la fiche du spécimen. Ce champ se remplit automatiquement lors de l'utilisation de GeoLocate pour le géoréférencement.<br></br>
**Exemples :** `Amanda Gonzales` `emakings` `acbarber`<br></br>
Voir le terme [georeferencedBy](https://dwc.tdwg.org/terms/#dwc:georeferencedBy) du Darwin Core

### Sources de géoréférencement

L'outil ou les outils utilisés pour le géoréférencement, ainsi que toute référence consultée pour géoréférencer la fiche.<br></br>
**Exemples :** `GeoLocate` `Google Earth` `USGS 1:24000 Florence Montana Quad 1967`<br></br>
Voir le terme [georeferenceSources](https://dwc.tdwg.org/terms/#dwc:georeferenceSources) du Darwin Core

### Remarques sur le géoréférencement

Notes concernant le géoréférencement du spécimen.<br></br>
**Exemples :** `point placé au centroïde de la ville, rayon d'erreur correspondant à l'étendue des limites de la ville telles qu'observées sur Google Satellite`<br></br>
Voir le terme [georeferenceRemarks](https://dwc.tdwg.org/terms/#dwc:georeferenceRemarks) du Darwin Core

### Protocole de géoréférencement

La source des normes utilisées pour le géoréférencement.<br></br>
**Exemples :** `Georeferencing Quick Guide. Zermoglio et al. 2020` `Engelbrecht, I. 2021. https://doi.org/10.3897/biss.5.73572`<br></br>
Voir le terme [georeferenceProtocol](https://dwc.tdwg.org/terms/#dwc:georeferenceProtocol) du Darwin Core

### Statut de vérification de la géoréférence

Un statut indiquant si la géoréférence a été examinée ou vérifiée.<br></br>
**Exemples :** `reviewed` (examiné) `not reviewed` (non examiné) `needs verification` (nécessite une vérification) `verified by collector` (vérifié par le collecteur)<br></br>
Voir le terme [georeferenceVerificationStatus](https://dwc.tdwg.org/terms/#dwc:georeferenceVerificationStatus)

## Divers

| ![Infos sur le collecteur](/img/occeditor_misc.png)  |
| :-------------------------------------: |
| Section « Divers » du formulaire de l'éditeur d'occurrences |

### Habitat

Description de l'habitat dans lequel le spécimen a été récolté.<br></br>
**Exemple :** `Zones humides le long d'un petit ruisseau dans du chaparral` `forêt de feuillus ; exposition du versant : 154 ; inclinaison de la pente : 2,29 ; ordre du type de sol : Inceptisols`<br></br>
Voir le terme [habitat](https://dwc.tdwg.org/terms/#dwc:habitat) du Darwin Core.

### Substrat

Substrat sur lequel le spécimen a été récolté (principalement utilisé pour les lichens, les bryophytes et les spécimens zoologiques).<br></br>
**Exemples :** `sur basalte` `tronc de chêne`<br></br>
Le Darwin Core regroupe actuellement cette information dans [dwc:habitat](#habitat).

### Taxons associés

Liste des noms d'autres espèces présentes aux côtés du spécimen récolté.<br></br>
**Exemples :** `Quercus, Arctostaphylos, Ceanothus, Rhus, Eriogonum, Salvia`<br></br>
Voir le terme [associatedTaxa](https://dwc.tdwg.org/terms/#dwc:associatedTaxa) du Darwin Core.

### Description

Description physique du spécimen au moment de la récolte. Elle inclut souvent des informations susceptibles d'être perdues ou difficiles à observer après les processus de récolte et de conservation. **Pour les collections de fossiles :** Description contextualisant ce que le matériel fossile catalogué représente physiquement.<br></br>
**Exemples (botanique) :** `Arbuste de 3 m de haut` `corolle jaune`<br></br>
**Exemples (fossiles) :** `Les os sont inclus dans le montage composite USNM V 10304` `1 moulage en plâtre avec 5 fragments du spécimen original`<br></br>

Ce champ n'est pas pris en charge par le Darwin Core et est concaténé dans [occurrenceRemarks](#notes) lors du téléchargement sous forme d'archive Darwin Core.

### Notes

Toute note supplémentaire concernant la présence du spécimen à un endroit et à un moment donnés. Évitez d'utiliser ce champ à moins qu'il n'existe pas de champ de données plus approprié.<br></br>
**Exemples :** `commun dans cette région` `ce spécimen a été collecté dans le cadre d'un projet de mémoire de master`<br></br>
Voir le terme [occurrenceRemarks](https://dwc.tdwg.org/terms/#dwc:occurrenceRemarks) du Darwin Core

### Propriétés dynamiques (Dynamic Properties)

Une liste de mesures, faits, caractéristiques ou affirmations supplémentaires concernant le spécimen, présentée dans un format permettant une analyse automatisée (par programme) des données, par exemple sous forme de paires clé:valeur séparées par un délimiteur.<br></br>
**Exemples :** `awnLengthInMeters=0.014, heightInMeters=1.5, relativeHumidity=28, airTemperatureInC=22` `totalLength: NA | weight: 25 g`<br></br>
Voir le terme [dynamicProperties](https://dwc.tdwg.org/terms/#dwc:dynamicProperties) du Darwin Core

### Stade de vie (Life Stage)

L'âge ou le stade de développement de l'organisme au moment de la collecte ou de l'observation (généralement utilisé pour les collections zoologiques).<br></br>
**Exemples :** `larve` `juvénile` `adulte`<br></br>
Voir le terme [lifeStage](https://dwc.tdwg.org/terms/#dwc:lifeStage) du Darwin Core

### Sexe

Le sexe biologique de l'occurrence.<br></br>
**Exemples :** `femelle` `mâle` `gynandromorphe`<br></br>
Voir le terme [sex](https://dwc.tdwg.org/terms/#dwc:sex) de Darwin Core

### Nombre d'individus

Le nombre d'individus représentés par l'occurrence. **Pour les collections de fossiles :** inclure un descripteur de quantité.<br></br>
**Exemples :** `2` `15`<br></br>
**Exemples (fossiles uniquement) :** `2 élément(s)` `estimation de 200`

Voir le terme [individualCount](https://dwc.tdwg.org/terms/#dwc:individualCount) de Darwin Core

### Protocole d'échantillonnage

Les noms et références des méthodes utilisées pour collecter ou échantillonner une occurrence.<br></br>
**Exemples :** `piège lumineux UV` `filet japonais` `Takats et al. 2001. Guidelines for Nocturnal Owl Monitoring in North America. Beaverhill Bird Observatory and Bird Studies Canada, Edmonton, Alberta. 32 pp., http://www.bsc-eoc.org/download/Owl.pdf`<br></br>
Voir le terme [samplingProtocol](https://dwc.tdwg.org/terms/#dwc:samplingProtocol) de Darwin Core

### Préparations

Méthode de préparation ou de conservation d'un spécimen. Bien qu'il n'existe actuellement aucun vocabulaire contrôlé universel pour ce champ, un exemple pratique pour les collections biologiques est disponible [ici](https://github.com/tdwg/cd/issues/64#issuecomment-781653290).<br></br>
**Exemples :** `in ethanol` `study skin` `pressed and dried` `part-counterpart`<br></br>
Voir le terme [preparations](https://dwc.tdwg.org/terms/#dwc:preparations) du Darwin Core.

### Phénologie (État reproducteur)

Le stade de reproduction dans lequel se trouve le spécimen.<br></br>
**Exemples :** `flower` `fruit` `sterile`<br></br>
Voir le terme [reproductiveCondition](https://dwc.tdwg.org/terms/#dwc:reproductiveCondition) du Darwin Core.

### Comportement

Le comportement manifesté par l'organisme ou l'occurrence au moment de la collecte ou de l'observation.<br></br>
**Exemples :** `flying` `sitting on eggs`<br></br>
Voir le terme [behavior](https://dwc.tdwg.org/terms/#dwc:behavior) du Darwin Core.

### Vitalité

Indication précisant si l'organisme était vivant ou mort au moment de la collecte ou de l'observation.<br></br>
**Exemples :** `live` (vivant), `dead` (mort)<br></br>
Voir le terme [vitality](https://dwc.tdwg.org/terms/#dwc:vitality) du Darwin Core

### Mode d'établissement

État ou nature de l'établissement de l'individu au moment de la collecte.<br></br>
**Exemples :** `cultivated` (cultivé), `invasive` (envahissant), `native` (indigène)<br></br>
Voir le terme [establishmentMeans](https://dwc.tdwg.org/terms/#dwc:establishmentMeans) du Darwin Core

### Case à cocher « Cultivé »

Cochez cette case si l'organisme a été établi avec l'aide de l'homme au moment de la collecte. Ce champ booléen (vrai/faux) permet de filtrer les espèces non indigènes ou naturalisées.<br></br>
Ce champ n'est pas actuellement pris en charge par le Darwin Core et n'est donc pas inclus dans les exportations au format Darwin Core.

## Curation

| ![Informations sur le collecteur](/img/occeditor_curation2026.png)  |
| :-------------------------------------: |
| Section « Curation » du formulaire de l'éditeur d'occurrences |

### Statut du type

Désignation du type d'un spécimen, qu'il s'agisse d'un spécimen porte-nom ou d'un élément d'une série type.<br></br>
**Exemples :** `holotype`, `isotype`, `paratype`<br></br>
Voir le terme [typeStatus](https://dwc.tdwg.org/terms/#dwc:typeStatus) du Darwin Core

### Disposition

Emplacement ou statut du spécimen physique par rapport à une collection.<br></br>
**Exemples :** `missing` (manquant), `on loan` (en prêt), `in collection` (en collection), `stored under genus "Mimulus"` (stocké sous le genre « Mimulus »)<br></br>
Voir le terme [disposition](https://dwc.tdwg.org/terms/#dwc:disposition) du Darwin Core

### Identifiant d'occurrence (remplacement)

Identifiant unique mondial (GUID) du spécimen. Cette valeur doit être stable et identifier le spécimen de manière unique par rapport à tous les autres spécimens dans le monde. Si votre collection est configurée pour que les occurrenceID/GUID soient générés par le portail (il s'agit du paramètre recommandé pour toutes les collections gérées en temps réel), le champ occurrenceID apparaîtra en gris et ne sera pas modifiable. Pour afficher la valeur complète de l'occurrenceID associée à votre spécimen, vous pouvez cliquer sur le lien « Public Display » (Affichage public) situé en haut de la page.<br></br>
**Exemples :** `000866d2-c177-4648-a200-ead4007051b9` `urn:catalog:UWBM:Bird:89776`<br></br>
Voir le terme [occurrenceid](https://dwc.tdwg.org/terms/#dwc:occurrenceid) du Darwin Core.

### Numéro de terrain

Un identifiant attribué à l'événement de collecte sur le terrain. Ce numéro sert souvent de lien entre l'événement indiqué dans les notes de terrain et la fiche du spécimen.<br></br>
**Exemples :** `2024-04-05-00045` `JOSHUATREE_35` `2025AH0718-01`<br></br>
Voir le terme [fieldnumber](https://dwc.tdwg.org/terms/#dwc:fieldnumber) du Darwin Core

### Langue

La langue des informations figurant sur l'étiquette ou dans la fiche.<br></br>
**Exemples :** `en` `es` `pt` `fr`<br></br>
Voir le terme [language](https://dwc.tdwg.org/terms/#dc:language) du Darwin Core

### Projet d'étiquette

Une valeur utilisée pour regrouper des fiches provenant d'un projet ou d'une catégorie spécifique à des fins internes. Une fois une valeur saisie dans ce champ, toutes les fiches partageant cette même valeur peuvent être imprimées simultanément à l'aide des [outils d'impression d'étiquettes par lots](/Editor_Guide/Label_Customization)<br></br>
**Exemples :** `Plants of Sedona 2012` `PCC TCN 2018`<br></br>
Ce champ ne correspond pas à un terme du Darwin Core et est exclu des exportations d'archives Darwin Core.

### Nombre de doubles

Le nombre de spécimens botaniques en double créés. Cette valeur détermine le nombre d'étiquettes à imprimer pour le spécimen.<br></br>
**Exemples :** `10` `2`<br></br>
Voir le terme [duplicatequantity](https://dwc.tdwg.org/terms/#dwc:duplicatequantity) du Darwin Core

### Code de l'institution (substitution)

L'acronyme de l'institution responsable de cette occurrence. Ne saisissez une valeur que si elle diffère de celle indiquée dans les métadonnées de la collection sur le portail.<br></br>
**Exemples :** `NMNH` `FLMNH`<br></br>
Voir le terme [institutionCode](https://dwc.tdwg.org/terms/#dwc:institutionCode) du Darwin Core

### Code de la collection (substitution)

L'acronyme de la collection responsable de cette occurrence. Ne saisissez une valeur que si elle diffère de celle indiquée dans les métadonnées de la collection sur le portail.<br></br>
**Exemples :** `Herps` `F`<br></br>
Voir le terme [collectionCode](https://dwc.tdwg.org/terms/#dwc:collectionCode) du Darwin Core.

### Code du propriétaire (prioritaire)

Le nom (ou l'acronyme) utilisé par l'institution propriétaire de l'objet ou des informations faisant l'objet de la notice. Ne saisissez une valeur que si elle diffère de celle indiquée dans les métadonnées de la collection sur le portail.<br></br>
**Exemples :** `NPS` `BLM` `NMNH`<br></br>
Voir le terme [ownerInstitutionCode](https://dwc.tdwg.org/terms/#dwc:ownerInstitutionCode) du Darwin Core.

### Emplacement de stockage

L'emplacement physique permanent de stockage du matériel catalogué au sein de l'espace de la collection.<br></br>
**Exemples :** `Freezer 3` `Oversize Storage` `Cab011 | Dwr002` `Cabinet: 1 | Tray 4` `Miocene Cabinet`

### Nature de la notice (Basis of Record)

Le type de notice attribué au spécimen. Pour les collections de spécimens conservés physiquement, la valeur par défaut de ce champ est `PreservedSpecimen` ou `FossilSpecimen`, selon la configuration de votre collection ; pour les projets d'observation, la valeur par défaut est `HumanObservation`.<br></br>
**Exemples :** `PreservedSpecimen` `LivingSpecimen` `HumanObservation` `MaterialCitation` `FossilSpecimen`<br></br>
Voir le terme [basisOfRecord](https://dwc.tdwg.org/terms/#dwc:basisOfRecord) du Darwin Core.

### Statut de traitement

Le statut de la notice numérique. Ce champ vise à faciliter la gestion et la révision internes des données propres à la collection. Les valeurs utilisées dépendent du flux de travail spécifique à chaque institution.<br></br>
**Exemples :** `Reviewed` `Pending Review` `Stage 1`<br></br>
Ce champ ne correspond à aucun terme du Darwin Core et est exclu des exportations au format Darwin Core Archive.

### Généralisations des données

Notes internes associées à la notice d'occurrence. Les données saisies dans ce champ ne sont pas visibles sur le formulaire de recherche public, mais elles peuvent être consultées dans un fichier Darwin Core Archive téléchargé.<br></br>
**Exemples :** `données vérifiées le 2025-05-12` `problèmes potentiels de géoréférencement, à vérifier par le conservateur`<br></br>
Voir le terme [dataGeneralizations](https://dwc.tdwg.org/terms/#dwc:dataGeneralizations) du Darwin Core.

## Champs spécifiques aux modules

:::info

Les champs de données suivants correspondent à des modules qui peuvent ne pas être disponibles sur tous les portails Symbiota. L'activation de certains modules peut nécessiter une concertation au sein de la communauté. Contactez le gestionnaire de votre portail pour plus d'informations.

:::

## Échantillon de matériel

| ![Module Échantillon de matériel](/img/materialsampleblank.png) |
| :-----------------------------------------------------: |
| Onglet « Échantillon de matériel » dans le formulaire d'édition d'occurrence |

:::note

Les vocabulaires contrôlés pour les champs de données « Échantillon de matériel » sont gérés au niveau de chaque portail ; les exemples suggérés ci-dessous sont issus des vocabulaires utilisés pour la [biothèque NEON](https://biorepo.neonscience.org/portal/). Ces vocabulaires varient d'un portail à l'autre et toute modification peut nécessiter l'avis de la communauté. Contactez l'administrateur de votre portail pour plus d'informations.

:::

### Type d'échantillon

Le type d'échantillon, souvent de nature anatomique. Un vocabulaire contrôlé est imposé selon le portail.<br></br>
**Exemples :** `crâne` `foie` `tractus gastro-intestinal` `organes génitaux` `ADN`<br></br>
Voir le terme [materialSampleType](http://data.ggbn.org/schemas/ggbn/terms/materialSampleType) de l'extension GGBN pour les échantillons de matériel.

### Numéro de catalogue / Code-barres

Un identifiant unique pour l'échantillon de matériel, analogue au champ _catalogNumber_ pour les occurrences de spécimens.<br></br>
**Exemples :** `D00000044967` <br></br>
Voir le terme [catalogNumber](https://dwc.tdwg.org/terms/#dwc:catalogNumber) du Darwin Core.

### Identifiant de l'échantillon de matériel (GUID)

Un identifiant unique à l'échelle mondiale pour l'échantillon de matériel. En l'absence d'un identifiant unique mondial persistant, il convient d'en construire un en combinant des identifiants présents dans l'enregistrement afin de garantir son unicité mondiale.<br></br>
**Exemple :** `06809dc5-f143-459a-be1a-6f03e63fc083`

### État de l'échantillon

L'état physique de l'échantillon. L'utilisation d'un vocabulaire contrôlé est recommandée mais non obligatoire.<br></br>
**Exemples :** `très mauvais` `mauvais` `médiocre` `bon` `inconnu`<br></br>
Voir le terme [quality](http://data.ggbn.org/schemas/ggbn/terms/quality) de l'extension GGBN pour les échantillons de matériel.

### Disposition

L'état actuel d'un échantillon par rapport à la collection dont il fait partie. Vocabulaire contrôlé imposé.<br></br>
**Exemples :** `en collection` `en cours de traitement` `consommé` `en prêt` `retiré de la collection` `manquant`

### Type de conservation

La méthode physique de stockage ou de conservation d'un échantillon. Vocabulaire contrôlé obligatoire.<br></br>
**Exemples :** `dry` `ethanol` `liquid nitrogen` `pinned/pointed`

### Date de préparation

Date de la préparation physique d'un échantillon. Les dates dans ce champ respectent visuellement le format MM/JJ/AAAA. La saisie manuelle des données dans ce champ est validée à l'aide d'un calendrier.<br></br>
**Exemples :** `08/01/2022` `05/14/2025`

### Préparé par

Nom de la personne ayant préparé l'échantillon, sélectionné dans la liste déroulante. La personne doit disposer d'un compte utilisateur sur le portail pour pouvoir être enregistrée dans ce champ.<br></br>
**Exemples :** `Liao, Rosie` `Johnston, Andrew`

### Détails de préparation

Notes fournissant davantage de contexte sur la préparation physique et l'état de l'échantillon.<br></br>
**Exemples :** `tractus gastro-intestinal supérieur et inférieur` `rein, gauche, entier` `préparé au borax`

### Nombre d'éléments

Le nombre d'objets pouvant faire l'objet d'un prêt associés à l'échantillon, c'est-à-dire toutes les pièces de l'échantillon affectées au même identifiant unique `materialSampleID` (voir ci-dessus).<br></br>
**Exemples :** `0` `1` `100`

### Taille de l'échantillon

Quantification de l'échantillon au-delà du simple décompte des objets (par ex. poids sec).<br></br>
**Exemples :** `200 µL` `20 g`<br></br>
Voir le champ [samp_size](http://gensc.org/ns/mixs/samp_size) de l'extension GGBN pour les échantillons de matériel (*Material Sample Extension*).

### Lieu de stockage

L'emplacement physique de stockage d'un échantillon au sein de la collection.<br></br>
**Exemples :** `Congélateur 3` `Stockage grand format` `Cab011 | Tiroir002`

### Remarques

Notes, commentaires et informations contextuelles supplémentaires propres à un échantillon, qui ne peuvent être saisis dans les autres champs de données existants.<br></br>
**Exemples :** `échantillonnage de génotype` `mâchoire gauche consommée pour la recherche` `avec squelette post-crânien`

## Paléontologie

| ![Module Paléontologie](/img/occeditor_paleo2025.png)  |
| :-------------------------------------: |
| Champs relatifs à la paléontologie et au contexte géologique dans le formulaire de l'éditeur d'occurrences |

### Intervalle initial et Intervalle final
Les intervalles de temps géologique les plus anciens (géologiquement les plus vieux, c.-à-d. « Intervalle initial ») et les plus récents (géologiquement les plus jeunes, c.-à-d. « Intervalle final ») attribuables à l'horizon stratigraphique dont provient le matériel fossile catalogué. Chaque valeur saisie pour l'« Intervalle initial » doit correspondre à une valeur pour l'« Intervalle final » ; de même, ces valeurs doivent être cohérentes, c'est-à-dire que la valeur de l'« Intervalle initial » doit être identique ou géologiquement plus ancienne que celle de l'« Intervalle final ». Utilisez les valeurs de l'échelle de temps de l'ICS (Commission internationale de stratigraphie) pour optimiser l'interopérabilité des données, sauf indication contraire de votre gestionnaire de portail. Les valeurs correctement saisies alimenteront automatiquement la série hiérarchique des termes Darwin Core correspondants (voir exemples ci-dessous).<br></br>
**Exemple 1 :** _Early Interval_ = `Eocene` et _Late Interval_ = `Oligocene`<br></br>
**Exemple 2 :** _Early Interval_ = `Eocene` et _Late Interval_ = `Eocene`<br></br>
**Incorrect (valeur manquante)** : _Early Interval_ = `Eocene` et _Late Interval_ = null/vide <br></br>
**Incorrect (ordre illogique)** : _Early Interval_ = `Oligocene` et _Late Interval_ = `Eocene`

Pour _**Early Interval**_ (Intervalle précoce), voir aussi les termes Darwin Core suivants : [earliestEonOrLowestEonothem](https://dwc.tdwg.org/terms/#dwc:earliestEonOrLowestEonothem), [earliestEraOrLowestErathem](https://dwc.tdwg.org/terms/#dwc:earliestEraOrLowestErathem), [earliestPeriodOrLowestSystem](https://dwc.tdwg.org/terms/#dwc:earliestPeriodOrLowestSystem), [earliestEpochOrLowestSeries](https://dwc.tdwg.org/terms/#dwc:earliestEpochOrLowestSeries) et [earliestAgeOrLowestStage](https://dwc.tdwg.org/terms/#dwc:earliestAgeOrLowestStage).

Pour _**Late Interval**_ (Intervalle tardif), voir aussi les termes Darwin Core suivants : [latestEonOrHighestEonothem](https://dwc.tdwg.org/terms/#dwc:latestEonOrHighestEonothem), [latestEraOrHighestErathem](https://dwc.tdwg.org/terms/#dwc:latestEraOrHighestErathem), [latestPeriodOrHighestSystem](https://dwc.tdwg.org/terms/#dwc:latestPeriodOrHighestSystem), [latestEpochOrHighestSeries](https://dwc.tdwg.org/terms/#dwc:latestEpochOrHighestSeries) et [latestAgeOrHighestStage](https://dwc.tdwg.org/terms/#dwc:latestAgeOrHighestStage). 

<ButtonLink
link="/documents/GeologicTimeValues_2026-06-05.csv"
label="Télécharger le vocabulaire des temps géologiques"
download={true}
style={{marginBottom: '2vh'}}
/>

### Late Interval

Voir ci-dessus pour [_Early Interval_ et _Late Interval_](#early-interval-and-late-interval). ### Âge absolu

L'âge chiffré (en années) du matériel fossile catalogué, déterminé à l'aide de techniques de datation absolue telles que la datation au radiocarbone (carbone 14), K-Ar, U-Pb, Ar-Ar, etc.<br></br>
**Exemples :** `20 Ma` `75 ka` `10,5 – 12,7 +/- 0,5 Ma`

### Étage local
Nom d'un intervalle de temps géologique utilisé à l'échelle locale ou régionale, mais pas nécessairement reconnu au niveau international (par exemple, un âge basé sur les mammifères terrestres nord-américains).<br></br>
**Exemples :** `Barstovien` `Povolzhien` `Ulatsien` `Helvétien`

### Biote

Nom attribué à divers ensembles de fossiles datant du même intervalle de temps géologique que le matériel fossile catalogué, provenant généralement d'une ou plusieurs localités situées dans une zone géographique spécifique.<br></br>
**Exemples :** `Chalk Bluffs` `Stewart Valley` `Bridge Creek` `Mazon Creek`

### Biostratigraphie

Le nom de l'unité biostratigraphique dont provient le matériel fossile catalogué.<br></br>
**Exemples :** `Wa0` `Zone à Uvigerinella sparsicostata` `Ogygiocaris`<br></br>
Voir les termes Darwin Core [lowestBiostratigraphicZone](https://dwc.tdwg.org/terms/#dwc:lowestBiostratigraphicZone) et [highestBiostratigraphicZone](https://dwc.tdwg.org/terms/#dwc:highestBiostratigraphicZone)

### Environnement du taxon

L'environnement de dépôt de l'unité rocheuse dont provient le matériel fossile catalogué. Un vocabulaire contrôlé est imposé.<br></br>
**Exemples :** `marin` `non marin` `marin et non marin`

### Groupe

Le nom du groupe lithostratigraphique dont provient le matériel fossile catalogué. Les fournisseurs de données peuvent consulter l'outil de recherche Geolex de la [National Geologic Map Database](https://ngmdb.usgs.gov/Geolex/search) pour normaliser les valeurs selon les noms lithostratigraphiques reconnus par l'US Geological Survey.<br></br>
**Exemples :** `Bathurst` `Lower Wealden` `Monte Cristo` `Contra Costa` `Panoche`<br></br>
Voir le terme Darwin Core [group](https://dwc.tdwg.org/terms/#dwc:group)

### Formation

Le nom de la formation lithostratigraphique dont provient le matériel fossile catalogué. Les fournisseurs de données peuvent consulter l'outil de recherche Geolex de la [National Geologic Map Database](https://ngmdb.usgs.gov/Geolex/search) pour normaliser les valeurs selon les noms lithostratigraphiques reconnus par l'US Geological Survey.<br></br>
**Exemples :** `Notch Peak` `House Limestone` `Fillmore` `Chinle`<br></br>
Voir le terme Darwin Core [formation](https://dwc.tdwg.org/terms/#dwc:formation)

### Membre

Le nom du membre lithostratigraphique dont provient le matériel fossile catalogué. Les fournisseurs de données peuvent consulter l'outil de recherche Geolex de la [National Geologic Map Database](https://ngmdb.usgs.gov/Geolex/search) pour normaliser les valeurs selon les noms lithostratigraphiques reconnus par l'US Geological Survey.<br></br>
**Exemples :** `Lava Dam` `Hellnmaria` `Brown Mountain Sandstone`<br></br>
Voir le terme [member](https://dwc.tdwg.org/terms/#dwc:member) du Darwin Core

### Bed (Couche)

Le nom de la couche lithostratigraphique dont provient le matériel fossile catalogué. Les fournisseurs de données peuvent consulter l'outil de recherche Geolex de la [National Geologic Map Database](https://ngmdb.usgs.gov/Geolex/search) pour normaliser les valeurs selon les noms lithostratigraphiques reconnus par l'US Geological Survey.<br></br>
**Exemple :** `Harlem coal`<br></br>
Voir le terme [bed](https://dwc.tdwg.org/terms/#dwc:bed) du Darwin Core

### Lithology (Lithologie)

Les types de roches ou de sédiments dont provient le matériel fossile catalogué.<br></br>
**Exemples :** `sandstone` `mudstone` `siltstone` `shale`<br></br>

### Remarques stratigraphiques

Détails supplémentaires concernant le contexte géologique et/ou stratigraphique du matériel fossile catalogué qui ne peuvent être saisis dans d'autres champs, tels que des informations plus précises sur le lieu de collecte du spécimen par rapport à une coupe stratigraphique mesurée, le contexte d'un échantillonnage palynologique, des données de carottage, etc.<br></br>
**Exemples :** `Fossile récolté à environ 1,5 m de la base de la coupe stratigraphique décrite initialement par Alderson (1981).` `Spécimen récolté à 150 pieds sous le sommet de l'unité.`<br></br>

### Élément

Élément(s) anatomique(s) représenté(s) par le matériel fossile catalogué. Il est recommandé d'utiliser un vocabulaire contrôlé spécifique à la discipline et de séparer les valeurs distinctes par une barre verticale (|). Les descriptions anatomiques plus détaillées doivent être saisies dans [_Description_](#description).<br></br>
**Exemples (invertébrés) :** `pygidium/pygidia` `thorax`<br></br>
**Exemples (vertébrés) :** `crâne : dentaire` `crâne : maxillaire` `vertèbre : corps vertébral`<br></br>
**Exemples (paléobotanique) :** `tige` `strobile` `racine` `pinnule(s)`<br></br>
**Exemples (ichnofossiles) :** `piste de vertébré`<br></br>

### Propriétés de la lame

Informations sur les lames préparées à partir du matériel fossile catalogué, précisant des détails tels que le type de préparation et le milieu de montage. Les coordonnées « England Finder » peuvent être consignées dans ce champ, par exemple pour les lames de palynomorphes.<br></br>
**Exemples :** `répartition aléatoire (strewn)` `lame mince pétrographique` `pellicule montée (peel)`

### ID du contexte géologique

Identifiant de l'ensemble des informations associées au contexte géologique (*GeologicalContext*) du matériel fossile catalogué, par ex. *Groupe*, *Formation*, *Membre*, *Couche*, *Intervalle (Inférieur/Supérieur)*. Idéalement, il doit s'agir d'un identifiant unique à l'échelle mondiale ou d'un identifiant spécifique au jeu de données.<br></br>
**Exemple :** `https://opencontext.org/subjects/e54377f7-4452-4315-b676-40679b10c4d9` `https://macrostrat.org/sift/#/strat_name_concept/8320`<br></br>
Voir le terme [geologicalContextID](https://dwc.tdwg.org/terms/#dwc:geologicalContextID) du Darwin Core.
