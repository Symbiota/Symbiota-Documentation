---
title: "Champs d’importation de données"
date: 2021-10-22
lastmod: 2026-06-02
authors: ["Ed Gilbert","Katie Pearson"]
sidebar_position: 5
editors: ["Katie Pearson, Lindsay Walker"]
keywords: ["data upload","data import","file upload","IPT"]
---

import ButtonLink from '@site/src/components/ButtonLink';

:::info
Cette page répertorie les champs relatifs aux spécimens pouvant être importés dans un portail de données Symbiota.
:::

## Documentation associée

:::tip
Si vous souhaitez savoir **comment importer des données** dans votre portail, vous trouverez ces informations [ici](/Collection_Manager_Guide/Importing_Uploading/). (Ces [**conseils pour l'importation**](/Collection_Manager_Guide/Importing_Uploading/#uploading-tips) peuvent s'avérer particulièrement utiles si vous débutez dans l'importation de données vers les portails Symbiota !)
:::

:::tip
Si vous recherchez les **définitions des champs de données** dans Symbiota, vous trouverez ces informations sur [cette page](/Editor_Guide/Editing_Searching_Records/symbiota_data_fields).
:::

## Explication du tableau

| Nom | Type | Remarques |
|-|-|-|
| Nom du champ de données tel qu'il figure dans la base de données sous-jacente de votre portail Symbiota | [Type de donnée](https://www.w3schools.com/sql/sql_datatypes.asp) — par exemple, une chaîne de caractères d'une longueur donnée ou une date formatée — pouvant être importée avec succès dans le champ concerné. Le nombre de caractères autorisés est indiqué entre parenthèses, le cas échéant ; par exemple : « Texte (255) ». | Conseils techniques pour l'importation de données, en complément des [définitions des champs de données Symbiota](/Editor_Guide/Editing_Searching_Records/symbiota_data_fields). |

- Explication du formatage des **noms** :
- *Italique* = Le champ de données correspond au standard de données [Darwin Core (DwC)](https://dwc.tdwg.org/terms/). Pour les champs DwC, cliquez sur le lien dans la colonne « Nom » afin de consulter la définition officielle du champ DwC. 
- **Gras** = L'utilisation de ce champ de données est fortement recommandée lorsque les données sont disponibles.
- `*` = Indique que le champ est utilisé uniquement pour faciliter le processus d'importation ; les valeurs saisies dans ce champ seront fusionnées avec un autre champ après l'importation.

## Champs standard
:::tip
Les définitions des champs standard de Symbiota sont disponibles [ici](/Editor_Guide/Editing_Searching_Records/symbiota_data_fields#collector-info).
:::
| Nom | Type | Remarques |
|-|-|-|
| associatedCollectors | Texte (255) | Tous les collecteurs, à l'exception du collecteur principal, séparés par des virgules ou des points-virgules. |
| [_associatedMedia_](https://dwc.tdwg.org/terms/#dwc:associatedMedia) | Texte (255) | URL vers des ressources multimédias, séparées par des virgules ou des points-virgules. Pour plus d'informations sur l'ajout de liens vers des ressources multimédias (par ex. des images), consultez [cette page](/Collection_Manager_Guide/Images/media_upload_url). |
| [_associatedSequences_](https://dwc.tdwg.org/terms/#dwc:associatedSequences) | Texte (65 535) | **Remarque :** Ce champ n'est pas encore accessible dans l'éditeur d'occurrences. |
| [_associatedTaxa_](https://dwc.tdwg.org/terms/#dwc:associatedTaxa) | Texte (65 535) | Taxons associés, séparés par des virgules ou des points-virgules. |
| authorInfraspecific | Texte | L'auteur (ou les auteurs) de l'épithète infraspécifique, s'il est différent de celui de l'épithète spécifique. Si vous ne renseignez pas les auteurs, ceux-ci seront attribués automatiquement en fonction du thésaurus taxonomique (si le nom y figure). Voir aussi : specify:subspecies_author, specify:variety_author et specify:forma_author. |
| authorSpecies | Texte | L'auteur (ou les auteurs) de l'épithète spécifique de l'espèce. Si vous ne renseignez pas les auteurs, ceux-ci seront attribués automatiquement en fonction du thésaurus taxonomique (si le nom y figure). |
| [**_basisOfRecord_**](https://dwc.tdwg.org/terms/#dwc:basisOfRecord) | Texte (32) | |
| [_behavior_](https://dwc.tdwg.org/terms/#dwc:behavior) | Texte (500) | |
| [**_catalogNumber_**](https://dwc.tdwg.org/terms/#dwc:catalogNumber) | Texte (32) | Code-barres ou numéro d'inventaire |
| [_collectionCode_](https://dwc.tdwg.org/terms/#dwc:collectionCode) | Texte (32) | À renseigner uniquement s'il diffère de la collection source (c.-à-d. celle associée à votre collection, incluant sa gestion et ses métadonnées) |
| collectorFamilyName | Texte (255) | Le nom de famille du collecteur (s'il figure dans un champ distinct). Si les noms des collecteurs ne sont pas décomposés en initiales et nom de famille, utilisez le champ `recordedBy`. Consultez les champs `specify:collector` si le nom du collecteur est réparti entre prénom, deuxième prénom et nom de famille. |
| collectorInitials | Texte (255) | Les initiales du collecteur (à l'exclusion du nom de famille). Si les noms des collecteurs ne sont pas décomposés en nom de famille et initiales, utilisez le champ `recordedBy`. Consultez les champs `specify:collector` si le nom du collecteur est réparti entre prénom, deuxième prénom et nom de famille. |
| [_continent_](https://dwc.tdwg.org/terms/#dwc:continent) | Texte (45) | **Remarque :** Ce champ n'est pas encore accessible dans l'éditeur d'occurrences. |
| [**_coordinateUncertaintyInMeters_**](https://dwc.tdwg.org/terms/#dwc:coordinateUncertaintyInMeters) | Entier | |
| coordinateUncertaintyRadius | Entier | La valeur du rayon d'incertitude de la géoréférence (utilisée conjointement avec `coordinateUncertaintyUnits`), qui est convertie en `coordinateUncertaintyInMeters` lors du téléversement. Si toutes vos valeurs d'incertitude des coordonnées sont exprimées en mètres, utilisez plutôt le champ `coordinateUncertaintyInMeters`. |
| coordinateUncertaintyUnits | Texte | Unités du rayon d'incertitude de la géoréférence (utilisé conjointement avec coordinateUncertaintyRadius). |
| [**_country_**](https://dwc.tdwg.org/terms/#dwc:country) | Texte (64) | |
| [_countryCode_](https://dwc.tdwg.org/terms/#dwc:countryCode) | Texte (5) | |
| [**_county_**](https://dwc.tdwg.org/terms/#dwc:county) | Texte (255) | |
| cultivationStatus | Entier | 0 = sauvage, 1 = cultivé |
| [_dataGeneralizations_](https://dwc.tdwg.org/terms/#dwc:dataGeneralizations) | Texte (250) | Notes ou remarques concernant l'enregistrement. Ce champ n'est pas accessible au public ; il est donc approprié pour y inscrire des notes de gestion des collections ou des commentaires temporaires. |
| dateEntered | Date/Heure | Date à laquelle l'enregistrement a été ajouté pour la première fois à la base de données source. |
| [_dateIdentified_](https://dwc.tdwg.org/terms/#dwc:dateIdentified) | Texte (45) | |
| [_day_](https://dwc.tdwg.org/terms/#dwc:day) | Entier (4) | Si eventDate est nul, les valeurs année-mois-jour seront utilisées pour constituer la date de l'événement (eventDate). |
| **dbpk** | Texte (45) | Identifiant unique de l'enregistrement du spécimen (clé primaire) dans la base de données source. Un code-barres, un `occurrenceID` (GUID) ou une clé primaire de base de données constituent des choix idéaux. Il peut également s'agir d'un `catalogNumber`, à condition que ce champ soit renseigné pour chaque enregistrement et qu'il soit défini comme unique. Requis si la collection est un « instantané » (snapshot) d'une base de données centrale. Non nécessaire si la collection est gérée directement au sein du portail. |
| [**_decimalLatitude_**](https://dwc.tdwg.org/terms/#dwc:decimalLatitude) | Nombre décimal (8) | Pour les enregistrements provenant des États-Unis, la valeur est positive. |
| [**_decimalLongitude_**](https://dwc.tdwg.org/terms/#dwc:decimalLongitude) | Nombre décimal (8) | Pour les enregistrements provenant des États-Unis, la valeur est négative. |
| [_disposition_](https://dwc.tdwg.org/terms/#dwc:disposition) | Texte (32) | |
| duplicateQuantity | | Utilisé pour l'impression d'étiquettes. Ce champ n'est pas accessible au public. |
| [_dynamicProperties_](https://dwc.tdwg.org/terms/#dwc:dynamicProperties) | Texte (65 535) | Ce champ devrait idéalement être formaté en JSON. Pour des descriptions non formatées, utilisez le champ `verbatimAttributes`. |
| \*elevationNumber | Entier | Utilisez ce champ pour les valeurs d'altitude (c.-à-d. les nombres) lorsque les valeurs et les unités d'altitude sont saisies dans des champs distincts. Ces données seront concaténées dans le champ `verbatimElevation`. |
| \*elevationUnits | Texte (45) | Utilisez ce champ pour les unités d'altitude lorsque les valeurs et les unités d'altitude sont saisies dans des champs distincts. Ces données seront concaténées dans le champ `verbatimElevation`. |
| endDayOfYear | Entier | La valeur numérique (1-365) correspondant à la date de fin d'une plage définie dans `eventDate`. Utilisé conjointement avec `startDayOfYear`. |
| [_establishmentMeans_](https://dwc.tdwg.org/terms/#dwc:establishmentMeans) | Texte (45) | L'utilisation d'un vocabulaire contrôlé est privilégiée (voir le lien vers Darwin Core). |
| [**_eventDate_**](https://dwc.tdwg.org/terms/#dwc:eventDate) | Date/Heure | Date de collecte, ou date de début de collecte si une plage est indiquée, au format AAAA-MM-JJ. Si un autre format est utilisé, ou si des plages de dates sont incluses, veuillez utiliser le champ « verbatimEventDate ». |
| eventDate2 | Date/Heure | Date de fin de collecte, lorsqu'une plage est indiquée. Cette valeur sera concaténée avec « eventDate » en cas d'exportation vers une archive Darwin Core. |
| [_eventID_](https://dwc.tdwg.org/terms/#dwc:eventID) | Texte (45) | Identifiant unique d'un événement de collecte, s'il est fourni par la base de données source. **Remarque :** Ce champ n'est pas encore accessible dans l'éditeur d'occurrences. |
| [_eventTime_](https://dwc.tdwg.org/terms/#dwc:eventTime) | Texte (45) | Darwin Core recommande d'utiliser une heure conforme à la norme ISO 8601-1:2019. |
| exsiccatiIdentifier | Entier (11) | Identifiant issu de la table d'indexation des exsiccata. |
| exsiccatiNotes | Texte (250) | (Documentation à venir !) |
| exsiccatiNumber | Texte (45) | (Documentation à venir !) |
| [_family_](https://dwc.tdwg.org/terms/#dwc:family) | Texte (255) | À renseigner uniquement si le nom scientifique ne figure pas dans le thésaurus taxonomique, ou si vous souhaitez remplacer la famille attribuée automatiquement par ce thésaurus. |
| [_fieldNumber_](https://dwc.tdwg.org/terms/#dwc:fieldNumber) | Texte (45) | |
| [_footprintWKT_](https://dwc.tdwg.org/terms/#dwc:footprintWKT) | Texte (65 535) | |
| [_genus_](https://dwc.tdwg.org/terms/#dwc:genus) | Texte (255) | |
| [_geodeticDatum_](https://dwc.tdwg.org/terms/#dwc:geodeticDatum) | Texte (255) | WGS84, NAD83, NAD27, etc. |
| [_georeferencedBy_](https://dwc.tdwg.org/terms/#dwc:georeferencedBy) | Texte (255) | |
| [_georeferencedDate_](https://dwc.tdwg.org/terms/#dwc:georeferencedDate) | Date/Heure | **Remarque :** Ce champ n'est pas encore accessible dans l'éditeur d'occurrences. |
| [_georeferenceProtocol_](https://dwc.tdwg.org/terms/#dwc:georeferenceProtocol) | Texte (255) | |
| [_georeferenceRemarks_](https://dwc.tdwg.org/terms/#dwc:georeferenceRemarks) | Texte (255) | |
| [_georeferenceSources_](https://dwc.tdwg.org/terms/#dwc:georeferenceSources) | Texte (255) | |
| [_georeferenceVerificationStatus_](https://dwc.tdwg.org/terms/#dwc:georeferenceVerificationStatus) | Texte (32) | |
| [_habitat_](https://dwc.tdwg.org/terms/#dwc:habitat) | Texte (65 535) | Informations sur les conditions environnementales dans lesquelles le spécimen a été collecté. |
| host | | Actuellement concaténé dans *associatedTaxa* |
| [_identificationQualifier_](https://dwc.tdwg.org/terms/#dwc:identificationQualifier) ​​| Texte (255) | cf., aff., etc. |
| [_identificationReferences_](https://dwc.tdwg.org/terms/#dwc:identificationReferences) | Texte (2000) | |
| [_identificationRemarks_](https://dwc.tdwg.org/terms/#dwc:identificationRemarks) | Texte (2000) | |
| [_identifiedBy_](https://dwc.tdwg.org/terms/#dwc:identifiedBy) | Texte (255) | |
| [_individualCount_](https://dwc.tdwg.org/terms/#dwc:individualCount) | Texte (45) | |
| [_informationWithheld_](https://dwc.tdwg.org/terms/#dwc:informationWithheld) | Texte (250) | Par ex. : « coordonnées non fournies en raison de la rareté de l'espèce ». Si les données de localité d'un enregistrement sont masquées via _localitySecurity_, la version publique de ce champ sera automatiquement renseignée avec la liste des noms de champs contenant des données masquées. Plus d'informations [ici](/Collection_Manager_Guide/Data_Publishing/redacting_obscuring_data). |
| [_infraspecificEpithet_](https://dwc.tdwg.org/terms/#dwc:infraspecificEpithet) | Texte (255) | |
| [_institutionCode_](https://dwc.tdwg.org/terms/#dwc:institutionCode) | Texte (32) | À renseigner uniquement s'il diffère de celui de la collection source (c.-à-d. la collection associée à vos métadonnées). |
| [_island_](https://dwc.tdwg.org/terms/#dwc:island) | Texte (75) | **Remarque :** Ce champ n'est pas encore accessible dans l'éditeur d'occurrences. |
| [_islandGroup_](https://dwc.tdwg.org/terms/#dwc:islandGroup) | Texte (75) | **Remarque :** Ce champ n'est pas encore accessible dans l'éditeur d'occurrences. |
| labelProject | Texte (45) | Utilisé pour l'impression d'étiquettes. Ce champ n'est pas accessible au public. |
| language | Texte (20) | Langue de l'enregistrement original. |
| \*latDeg | Entier (11) | Degrés de latitude |
| \*latMin | Nombre décimal | Minutes de latitude |
| \*latNS | Texte (3) | Hémisphère nord/sud. Doit être « N » ou « S ». |
| \*latSec | Nombre décimal | Secondes de latitude |
| [_lifeStage_](https://dwc.tdwg.org/terms/#dwc:lifeStage) | Texte (45) | |
| \*lngDeg | Entier (11) | Degrés de longitude |
| \*lngEW | Texte (3) | Hémisphère est/ouest. Doit être « E » ou « W ». |
| \*lngMin | Nombre décimal | Minutes de longitude |
| \*lngSec | Nombre décimal | Secondes de longitude |
| [**_locality_**](https://dwc.tdwg.org/terms/#dwc:locality) | Texte (65 535) | |
| localitySecurity | Entier | 0 = ne pas masquer les détails de la localité au grand public ; 1 = masquer la localité, les coordonnées et les images. Pour plus d'informations sur la manière de masquer des données relatives à une localité, consultez [cette page](/Collection_Manager_Guide/Data_Publishing/redacting_obscuring_data). |
| localitySecurityReason | Texte (100) | Justification du masquage de la localité vis-à-vis du public. |
| [_locationID_](https://dwc.tdwg.org/terms/#dwc:locationID) | Texte (150) | |
| [_locationRemarks_](https://dwc.tdwg.org/terms/#dwc:locationRemarks) | Texte (65 535) |
| materialSampleJSON | Texte (65 535) | Documentation à venir ! |
| [_maximumDepthInMeters_](https://dwc.tdwg.org/terms/#dwc:maximumDepthInMeters) | Entier (11) | |
| [_maximumElevationInMeters_](https://dwc.tdwg.org/terms/#dwc:minimumElevationInMeters) | Entier (6) | |
| [_minimumDepthInMeters_](https://dwc.tdwg.org/terms/#dwc:minimumDepthInMeters) | Entier (11) | |
| [**_minimumElevationInMeters_**](https://dwc.tdwg.org/terms/#dwc:minimumElevationInMeters) | Entier (6) | Si l'altitude est exprimée par une valeur unique en mètres, utilisez uniquement ce champ |
| [_modified_](https://dwc.tdwg.org/terms/#dcterms:modified) | Date/Heure | Date de la dernière modification dans la base de données source. Les modifications ultérieures effectuées au sein du portail Symbiota seront enregistrées dans une table distincte. |
| [_month_](https://dwc.tdwg.org/terms/#dwc:month) | Entier (4) | Si `eventDate` est nul, les champs année, mois et jour seront utilisés pour constituer la date de l'événement (`eventDate`). |
| [_municipality_](https://dwc.tdwg.org/terms/#dwc:municipality) | Texte (255) | |
| observerUID | | Identifiant unique attribué à la personne mentionnée dans le champ « recordedBy ». |
| [**_occurrenceId_**](https://dwc.tdwg.org/terms/#dwc:occurrenceID) | Texte (255) | Identifiant unique global (GUID) de l'occurrence. |
| [_occurrenceRemarks_](https://dwc.tdwg.org/terms/#dwc:occurrenceRemarks) | Texte (65 535) | Notes ou remarques générales concernant l'occurrence ou le spécimen. |
| [_organismID_](https://dwc.tdwg.org/terms/#dwc:organismID) | | |
| [_otherCatalogNumbers_](https://dwc.tdwg.org/terms/#dwc:otherCatalogNumbers) | Texte (255) | Pour utiliser le système « Nom d'étiquette + Identifiant » (qui permet d'associer un titre spécifique à un identifiant ou à un autre numéro de catalogue), saisissez le nom de l'étiquette suivi d'un deux-points, puis de la valeur de l'identifiant ; par exemple : « Ancien numéro d'acquisition : 12345 ». Pour plusieurs identifiants, séparez les couples « nom d'étiquette + identifiant » par des points-virgules ; par exemple : « NP # : 4321 ; Numéro d'acquisition : 9876 ». |
| [_ownerInstitutionCode_](https://dwc.tdwg.org/terms/#dwc:ownerInstitutionCode) | Texte (32) | |
| paleoJSON | Texte (65 535) | Un champ au format JSON contenant les données à inclure dans le [module paléontologique](/Collection_Manager_Guide/paleo_data) de Symbiota. Documentation à venir ! |
| [_parentLocationID_](https://dwc.tdwg.org/terms/#dwc:parentLocationID) | | **Remarque :** Ce champ n'est pas encore accessible dans l'éditeur d'occurrences. |
| [_preparations_](https://dwc.tdwg.org/terms/#dwc:preparations) | Texte (100) | |
| processingStatus | | État de traitement des tâches de numérisation. Ce champ n'est pas accessible au public. |
| [**_recordedBy_**](https://dwc.tdwg.org/terms/#dwc:recordedBy) | Texte (255) | Nom du collecteur/observateur principal. Tous les autres collecteurs doivent être indiqués dans le champ « associatedCollectors ». Si le nom du collecteur/observateur principal est décomposé en plusieurs champs, veuillez vous référer aux champs « collectorFamilyName », « collectorInitials » et « specify:collector ». Si vous saisissez cette valeur accompagnée d'un identifiant ORCID (par ex. « Prénom Nom (ORCID ####-####-####-####) »), la valeur s'affichera avec un lien ORCID dans votre portail. |
| recordEnteredBy | Texte (250) | Personne ayant effectué la saisie des données |
| [**_recordNumber_**](https://dwc.tdwg.org/terms/#dwc:recordNumber) | Texte (45) | Numéro de récolte |
| \*recordNumberPrefix | Texte (45) | Intégré dans recordNumber |
| \*recordNumberSuffix | Texte (45) | Intégré dans recordNumber |
| [_reproductiveCondition_](https://dwc.tdwg.org/terms/#dwc:reproductiveCondition) | Texte (255) | Par ex. stérile, en fleur, en fruit, asques, etc. L'utilisation d'un vocabulaire contrôlé est recommandée. |
| [_samplingEffort_](https://dwc.tdwg.org/terms/#dwc:samplingEffort) | Texte (200) | |
| [_samplingProtocol_](https://dwc.tdwg.org/terms/#dwc:samplingProtocol) | Texte (100) | |
| **scientificName (sans l'auteur)** | Texte (255) | Nom scientifique sans l'auteur. Ne pas inclure d'abréviations telles que « sp. » ou « indet. ». |
| [_scientificName (avec l'auteur)_](https://dwc.tdwg.org/terms/#dwc:scientificName) | Texte (255) | Nom scientifique avec l'auteur complet. L'auteur sera extrait du nom. |
| [_scientificNameAuthorship_](https://dwc.tdwg.org/terms/#dwc:scientificNameAuthorship) | Texte (255) | Auteur du nom scientifique. Si le nom scientifique figure déjà dans le référentiel taxonomique interne de votre portail, ce champ sera automatiquement renseigné lors de l'importation des données. |
| [_sex_](https://dwc.tdwg.org/terms/#dwc:sex) | Texte (45) | |
| [_specificEpithet_](https://dwc.tdwg.org/terms/#dwc:specificEpithet) | Texte (255) | |
| startDayOfYear | Entier | La valeur numérique (1-365) correspondant à la date de début d'une plage temporelle (`eventDate`). Utilisé conjointement avec `endDayOfYear`. |
| [**_stateProvince_**](https://dwc.tdwg.org/terms/#dwc:stateProvince) | Texte (255) | |
| [_substrate_](https://dwc.tdwg.org/terms/#dwc:substrate) | Texte (500) | Le sol ou tout autre substrat (par ex. écorce, roche) sur lequel un organisme sessile a été trouvé. |
| storageLocation | varchar(100) | |
| [_taxonRank_](https://dwc.tdwg.org/terms/#dwc:taxonRank) | Texte (32) | Nom du rang taxonomique ; les abréviations infraspécifiques (par ex. « var. », « subsp. ») sont autorisées. |
| [_taxonRemarks_](https://dwc.tdwg.org/terms/#dwc:taxonRemarks) | Texte (2000) | |
| tempfield | | Les champs temporaires (« tempfields ») servent d'espaces de stockage provisoires pour des données devant être concaténées ou transformées par une procédure stockée avant d'être transférées vers leur champ définitif dans la base de données. |
| \*trsRange | Texte (45) | Valeur du « range » (avec indication de la direction) pour le système de coordonnées américain « township-range-section » (TRS, ou système d'arpentage des terres publiques). (Par ex. « 23E » pour les coordonnées TRS : T6S R23E, section 34). |
| \*trsSection | Texte (45) | Section pour le système de coordonnées américain « township-range-section » (TRS, ou système d'arpentage des terres publiques). (Par ex. « 34 » pour les coordonnées TRS : T6S R23E, section 34). |
| \*trsSectionDetails | Texte (45) | Détails supplémentaires, tels que les quarts ou seizièmes de section, pour le système de coordonnées américain « township-range-section » (TRS, ou système d'arpentage des terres publiques). |
| \*trsTownship | Texte (45) | Valeur du « township » (avec indication de la direction) pour le système de coordonnées américain « township-range-section » (TRS, ou système d'arpentage des terres publiques). (Par ex. « 6S » pour les coordonnées TRS : T6S R23E, section 34). |
| [_typeStatus_](https://dwc.tdwg.org/terms/#dwc:typeStatus) | Texte (255) | |
| \*UtmEasting | Texte (45) | La valeur d'abscisse (easting) pour les coordonnées UTM (par ex. « 334543 » pour les coordonnées UTM 12N 334543 5463754) |
| \*UtmNorthing | Texte (45) | La valeur d'ordonnée (northing) pour les coordonnées UTM (par ex. « 5463754 » pour les coordonnées UTM 12N 334543 5463754) |
| \*UtmZoning | Texte (45) | La valeur de zone pour les coordonnées UTM (par ex. « 12N » pour les coordonnées UTM 12N 334543 5463754) |
| verbatimAttributes | Texte (65 535) | Description textuelle (telle quelle) de l'organisme (par ex. 1,5 m de hauteur, fleurs blanches à extrémités violettes, etc.). Dans l'éditeur d'occurrences, ce champ est généralement intitulé « Description ». |
| \*verbatimLatitude | Texte (255) | Utilisé pour générer la latitude en degrés décimaux. Ce champ sera fusionné dans `verbatimCoordinates`. |
| [_verbatimCoordinates_](https://dwc.tdwg.org/terms/#dwc:verbatimCoordinates) | Texte (255) | Par ex. UTM : 12N 334543 5463754 ; 34° 25’ N 113° 43’ O |
| [_verbatimDepth_](https://dwc.tdwg.org/terms/#dwc:verbatimDepth) | Texte (50) | |
| [_verbatimElevation_](https://dwc.tdwg.org/terms/#dwc:verbatimElevation) | Texte (255) | Utilisez ce champ lorsque les valeurs et les unités d'altitude figurent dans le même champ (par ex. « 1200 ft ») et lorsque les altitudes ne sont pas exprimées systématiquement en mètres. |
| [_verbatimEventDate_](https://dwc.tdwg.org/terms/#dwc:verbatimEventDate) | Texte (255) | Utilisez ce champ pour la date de collecte ou d'observation lorsqu'elle n'est pas normalisée au format AAAA-MM-JJ, lorsqu'elle est incomplète ou lorsqu'il s'agit d'une plage de dates. |
| \*verbatimLongitude | Texte (255) | Utilisé pour générer la longitude en degrés décimaux. Ce champ sera fusionné dans `verbatimCoordinates`. |
| [_waterBody_](https://dwc.tdwg.org/terms/#dwc:waterBody) | Texte (150) | **Remarque :** Ce champ n'est pas encore accessible dans l'éditeur d'occurrences. |
| [_year_](https://dwc.tdwg.org/terms/#dwc:year) | Entier (4) | Si `eventDate` est vide, les informations « année-mois-jour » seront utilisées pour constituer la valeur de `eventDate`. |

## Champs de paléontologie

:::tip
Les définitions des champs de paléontologie de Symbiota sont disponibles [ici](/Editor_Guide/Editing_Searching_Records/symbiota_data_fields#paleontology).
:::

| Nom | Type | Remarques |
|-|-|-|
| paleo-absoluteAge | varchar(65) | |
| [_paleo-bed_](https://dwc.tdwg.org/terms/#dwc:bed) | varchar(65) | |
| paleo-biostratigraphy | varchar(100) | Les données importées via ce champ remplaceront les valeurs saisies dans `paleo-highestbiostratigraphiczone` ou `paleo-lowestbiostratigraphiczone`. Par conséquent, utilisez ce champ en remplacement de `paleo-highestbiostratigraphiczone` et `paleo-lowestbiostratigraphiczone`, et non en complément de ceux-ci. |
| paleo-biota | varchar(100) | |
| paleo-earlyinterval | varchar(65) | Consultez les définitions des champs de données Symbiota pour « Early Interval » (intervalle inférieur/précoce) et « Late Interval » (intervalle supérieur/tardif) [ici](/Editor_Guide/Editing_Searching_Records/symbiota_data_fields#early-interval-and-late-interval). |
| paleo-element | varchar(250) | |
| [_paleo-formation_](https://dwc.tdwg.org/terms/#dwc:formation)  | varchar(65) | |
| [_paleo-geologicalcontextid_](https://dwc.tdwg.org/terms/#dwc:geologicalContextID) | varchar(100) | |
| [*_paleo-highestbiostratigraphiczone_](https://dwc.tdwg.org/terms/#dwc:highestBiostratigraphicZone) | varchar(100) | Les valeurs importées via ce champ seront concaténées avec celles de `lowestBiostratigraphicZone` ; par exemple : | « Zone A - Zone B », où « Zone A » correspond à la valeur saisie pour `highestBiostratigraphicZone` et « Zone B » à la valeur saisie pour `lowestBiostratigraphicZone`. Le résultat s'affichera sous la forme « Zone A - Zone B » dans le formulaire de saisie de données de l'éditeur d'occurrences (*Occurrence Editor*). Pour que l'importation s'effectue correctement, les champs `highestBiostratigraphicZone` et `lowestBiostratigraphicZone` doivent tous deux contenir des valeurs ; dans le cas contraire, utilisez `paleo-biostratigraphy`. |
| paleo-latelnterval | varchar(65) | Consultez les définitions des champs de données Symbiota pour [Early Interval et Late Interval](/Editor_Guide/Editing_Searching_Records/symbiota_data_fields#early-interval-and-late-interval). |
| [_paleo-lithogroup_](https://dwc.tdwg.org/terms/#dwc:group) | varchar(65) | |
| paleo-lithology | varchar(700) | |
| paleo-localStage | varchar(65) | |
| [*_paleo-lowestbiostratigraphiczone_](https://dwc.tdwg.org/terms/#dwc:lowestBiostratigraphicZone) | varchar(40) | Une valeur importée via ce champ sera combinée avec celle de `highestBiostratigraphicZone` dans l'éditeur d'occurrences, par exemple : « Zone A - Zone B », où « Zone A » correspond à la valeur saisie pour `highestBiostratigraphicZone` et « Zone B » à la valeur saisie pour `lowestBiostratigraphicZone`. Pour que l'importation s'effectue correctement, les champs `highestBiostratigraphicZone` et `lowestBiostratigraphicZone` doivent tous deux contenir des valeurs ; dans le cas contraire, utilisez `paleo-biostratigraphy`. |
| [_paleo-member_](https://dwc.tdwg.org/terms/#dwc:member) | varchar(65) | |
| paleo-slideProperties | varchar(1000) | |
| paleo-stratRemarks | varchar(1000) | |
| paleo-taxonEnvironment | varchar(65) | Vocabulaire contrôlé ; voir la définition du champ de données Symbiota pour [Environnement du taxon](/Editor_Guide/Editing_Searching_Records/symbiota_data_fields#taxon-environment) |

## Champs « Specify »
| Nom | Type | Remarques |
|-|-|-|
| specify:subspecies | Texte | L'épithète infraspécifique d'une sous-espèce uniquement (sans le préfixe « subsp. »). |
| specify:subspecies_author | Texte | L'auteur (ou les auteurs) de l'épithète infraspécifique. |
| specify:variety | Texte | L'épithète infraspécifique d'une variété uniquement (sans le préfixe « var. »). |
| specify:variety_author | Texte | L'auteur (ou les auteurs) de l'épithète variétale. |
| specify:forma | Texte | L'épithète infraspécifique d'une forme uniquement (sans le préfixe « f. »). |
| specify:forma_author | Texte | L'auteur (ou les auteurs) de la forme. |
| specify:collector_first_name | Texte | Le prénom du collecteur principal. Sera concaténé dans le champ « recordedBy » avec les champs « middle_initial » et « last_name ». |
| specify:collector_middle_initial | Texte | L'initiale du deuxième prénom du collecteur principal. Sera concaténée dans le champ « recordedBy » avec les champs « first_name » et « last_name ». |
| specify:collector_last_name | Texte | Le nom de famille du collecteur principal. Sera concaténé dans le champ « recordedBy » avec les champs « first_name » et « middle_initial ». |
| specify:determiner_first_name | Texte | Le prénom de la personne ayant réalisé l'identification taxonomique de l'enregistrement. Sera concaténé dans le champ « identifiedBy » avec les champs « middle_initial » et « last_name ». |
| specify:determiner_middle_initial | Texte | L'initiale du deuxième prénom de la personne ayant réalisé l'identification taxonomique de l'enregistrement. Sera concaténée dans le champ « identifiedBy » avec les champs « first_name » et « last_name ». |
| specify:determiner_last_name | Texte | Le nom de famille de la personne ayant réalisé l'identification taxonomique de l'enregistrement. Sera concaténé dans le champ « identifiedBy » avec les champs « first_name » et « middle_initial ». |
| specify:qualifier_position | Texte | Lorsqu'un qualificateur d'identification est fourni, ce champ est combiné avec ledit qualificateur pour indiquer à quelle partie du nom scientifique celui-ci s'applique. Par exemple, si l'enregistrement que vous ajoutez indique « Amaranthus cf. albus », saisissez « Amaranthus albus » dans le champ `scientificName` (sans l'auteur), « cf. » dans le champ `identificationQualifier`, et « albus » dans le champ `qualifier_position`. |
| specify:latitude1 | Nombre décimal | La latitude la plus à l'ouest au sein d'une plage de latitudes fournie comme géoréférence pour l'enregistrement. Sera combinée avec `latitude2` pour former les `verbatimCoordinates`. |
| specify:latitude2 | Nombre décimal | La latitude la plus à l'est au sein d'une plage de latitudes fournie comme géoréférence pour l'enregistrement. Sera combinée avec `latitude1` pour former les `verbatimCoordinates`. |
| specify:longitude1 | Nombre décimal | La longitude la plus au nord au sein d'une plage de longitudes fournie comme géoréférence pour l'enregistrement. Sera combinée avec `longitude2` pour former les `verbatimCoordinates`. |
| specify:longitude2 | Nombre décimal | La longitude la plus au sud dans une plage de longitudes fournie en tant que géoréférence pour l'enregistrement. Sera concaténée avec longitude1 dans le champ « verbatimCoordinates ». |
| specify:land_ownership | Texte | Sera concaténé dans le champ « locality », séparé par un point-virgule. |
| specify:topo_quad | Texte | Sera concaténé dans le champ « locality », séparé par un point-virgule. |
| specify:georeferenced_by_first_name | Texte | Le prénom de la personne principale ayant effectué le géoréférencement de l'enregistrement. Sera concaténé dans le champ « georeferencedBy » avec les champs « middle_initial » et « last_name ». |
| specify:georeferenced_by_middle_initial | Texte | L'initiale du deuxième prénom de la personne principale ayant effectué le géoréférencement de l'enregistrement. Sera concaténée dans le champ « georeferencedBy » avec les champs « first_name » et « last_name ». |
| specify:georeferenced_by_last_name | Texte | Le nom de famille de la personne principale ayant effectué le géoréférencement de l'enregistrement. Sera concaténé dans le champ « georeferencedBy » avec les champs « first_name » et « middle_initial ». |
| specify:locality_continued | Texte | Sera concaténé dans le champ « locality » sans délimiteur. |
| specify:georeferenced_date | Date/Heure | Sera concaténé dans le champ « georeferencedBy » selon le format suivant : « georef date: georeferenced_date ». |
| specify:elevation_(ft.) | Entier | La valeur de l'altitude, exprimée en pieds. |
| specify:preparer_first_name | Texte | Le prénom de la personne ayant préparé le spécimen. Sera concaténé dans le champ « preparations » avec les champs « middle_initial » et « last_name » comme suit : « preparer: first_name middle_initial last_name ». |
| specify:preparer_middle_initial | Texte | Initiale du deuxième prénom de la personne ayant préparé le spécimen. Sera concaténée dans le champ « preparations », avec les champs « first_name » (prénom) et « last_name » (nom de famille), comme suit : « preparer: first_name middle_initial last_name ».|
| specify:preparer_last_name | Texte | Nom de famille de la personne ayant préparé le spécimen. Sera concaténé dans le champ « preparations », avec les champs « first_name » (prénom) et « middle_initial » (initiale du deuxième prénom), comme suit : « preparer: first_name middle_initial last_name ».|
| specify:prepared_by_date | Date/Heure | Date à laquelle le spécimen a été préparé. Sera concaténée dans le champ « preparations ». |
| specify:cataloger_first_name | Texte | Prénom de la personne ayant catalogué l'enregistrement pour la première fois. Sera concaténé dans le champ « recordEnteredBy », avec les champs « middle_initial » (initiale du deuxième prénom) et « last_name » (nom de famille). |
| specify:cataloger_middle_initial | Texte | Initiale du deuxième prénom de la personne ayant catalogué l'enregistrement pour la première fois. Sera concaténée dans le champ « recordEnteredBy », avec les champs « first_name » (prénom) et « last_name » (nom de famille).|
| specify:cataloger_last_name | Texte | Nom de famille de la personne ayant catalogué l'enregistrement pour la première fois. Sera concaténé dans le champ « recordEnteredBy », avec les champs « first_name » (prénom) et « middle_initial » (initiale du deuxième prénom). |
| specify:cataloged_date | Texte | Sera concaténé dans le champ « recordEnteredBy » selon le format suivant : « cataloged date: cataloged_date ». |
