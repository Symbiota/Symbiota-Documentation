---
title: "Data Import Fields"
date: 2021-10-22
lastmod: 2023-12-21
authors: ["Ed Gilbert","Katie Pearson"]
weight: 10
editors: ["Katie Pearson"]
keywords: ["data upload","data import","file upload","IPT"]
---

import Button from '@site/src/components/Button';

:::info

This page lists the possible specimen fields that can be imported into a Symbiota data portal. The type of field (text, number, etc.) is listed in the **Type** field. The number of characters allowed in that field is displayed in parentheses, when applicable.

:::

You can select any number of fields in the table below to include in your file upload, but some fields are more commonly used than others. At the button below, you will find a template based on plant collections in Excel format. The second row provides field explanataions and the third row provides an example. Delete these rows and save the file as a CSV (UTF-8) before attempting to upload.

<Button link="/documents/UploadTemplateForCollectors.xlsx" label="Download Example Template" />

If the data portal is being used to displaying a “snapshot” of your data stored in your local central database, the upload file MUST have a field that serves as the unique identifier for each incoming specimen record (dbpk). This field serves a link between the source record and the snapshot record within the portal. If the import is a CSV file, the first row must contain field names. Note that field names do not have to match the name used below, but there cannot be any characters ($#@&%) in the column names. If you have issues saving your import profile, your field names may be too long! Try shortening the field names in the CSV file.

For more information about data fields, also see our [Symbiota Data Fields](/docs/Editor_Guide/Editing_Searching_Records/symbiota_data_fields) page.

*Italic* = Darwin Core fields<br/>
**Bold** = strongly encouraged fields, though none of the fields are technically required<br/>
\* = for import only, merged into another field after import

:::tip

For Darwin Core fields, click on the link in the "Name" column to see the DwC field definition.

:::

| Name | Type | Notes |
|-|-|-|
| associatedCollectors | Text (255) | All collectors except the primary collector, separated by commas or semicolons. |
| [_associatedMedia_](https://dwc.tdwg.org/terms/#dwc:associatedMedia) | Text (255) | URL to media resources, delimited by commas or semicolons. More information about uploading links to media resources (e.g., images) can be found on [this page](/docs/Collection_Manager_Guide/Images/media_upload_url). |
| [_associatedSequences_](https://dwc.tdwg.org/terms/#dwc:associatedSequences) | Text (65,535) | **Note:** This field is not yet accessible in the occurrence editor.|
| [_associatedTaxa_](https://dwc.tdwg.org/terms/#dwc:associatedTaxa) | Text (65,535) | Associated taxa delimited by commas or semicolons |
| authorInfraspecific | Text | The authorship of the infraspecific epithet, if different than the authorship of the specific epithet. If you do not provide authorships, authorships will be automatically assigned according to the taxonomic thesaurus (if the name is found in the thesaurus). See also specify:subspecies_author,  specify:variety_author, and specify:forma_author.  |
| authorSpecies | Text | The authorship of the specific epithet of the species. If you do not provide authorships, authorships will be automatically assigned according to the taxonomic thesaurus (if the name is found in the thesaurus). |
| [_basisOfRecord_](https://dwc.tdwg.org/terms/#dwc:basisOfRecord) | Text (32) | |
| [_behavior_](https://dwc.tdwg.org/terms/#dwc:behavior) | Text (500) | |
| [**_catalogNumber_**](https://dwc.tdwg.org/terms/#dwc:catalogNumber) | Text (32) | Barcode or Accession number |
| [_collectionCode_](https://dwc.tdwg.org/terms/#dwc:collectionCode) | Text (32) | Populate only if different than source collection (i.e., the manager/metadata/) associated with your collection) |
| collectorFamilyName | Text (255) | The family name or last name of the collector (if in its own field). If your collector names are not parsed into initials and family name, use the recordedBy field. See the specify:collector fields if your collector's name is split between first, middle, and last names. |
| collectorInitials | Text (255) | The initials (excluding family name) of the collector. If your collector names are not parsed into family name and initials, use the recordedBy field. See the specify:collector fields if your collector's name is split between first, middle, and last names. |
| [_continent_](https://dwc.tdwg.org/terms/#dwc:continent) | Text (45) | **Note:** This field is not yet accessible in the occurrence editor. |
| [**_coordinateUncertaintyInMeters_**](https://dwc.tdwg.org/terms/#dwc:coordinateUncertaintyInMeters) | Integer | |
| coordinateUncertaintyRadius | Integer | The value of the uncertainty radius of the georeference (used in concert with coordinateUncertaintyUnits), which is converted into coordinateUncertaintyInMeters upon upload. If all your coordinate uncertainty values are in meters, use the coordinateUncertaintyInMeters field instead. |
| coordinateUncertaintyUnits | Text | The units of the uncertainty radius of the georeference (used in concert with coordinateUncertaintyRadius). |
| [**_country_**](https://dwc.tdwg.org/terms/#dwc:country) | Text (64) | |
| [_countryCode_](https://dwc.tdwg.org/terms/#dwc:countryCode) | Text (5) | |
| [**_county_**](https://dwc.tdwg.org/terms/#dwc:county) | Text (255) | |
| cultivationStatus | Integer | 0 = wild, 1 = cultivated |
| [_dataGeneralizations_](https://dwc.tdwg.org/terms/#dwc:dataGeneralizations) | Text (250) | Notes or remarks about the record. This field is not publicly accessible, so it is a good place to put curatorial notes or temporary comments. |
| dateEntered | Date/Time | The date when the record was first added to the source database. |
| [_dateIdentified_](https://dwc.tdwg.org/terms/#dwc:dateIdentified) | Text (45) | |
| [_day_](https://dwc.tdwg.org/terms/#dwc:day) | Integer (4) | If eventDate is null, year-month-day will be used to build the eventDate. |
| **dbpk** | Text (45) | Specimen record unique identifier (primary key) of source database (record id). Barcode, occurrenceID (GUID), or a database Primary Key is ideal. Can also be catalogNumber, given that it is populated for each record and enforced as unique. Required if collection is “snapshot” of a central database. Not needed if collection is managed directly within portal. |
| [**_decimalLatitude_**](https://dwc.tdwg.org/terms/#dwc:decimalLatitude) | Decimal number (8) | |
| [**_decimalLongitude_**](https://dwc.tdwg.org/terms/#dwc:decimalLongitude) | Decimal number (8) | For USA records, value is negative |
| [_disposition_](https://dwc.tdwg.org/terms/#dwc:disposition) | Text (32) | Can be used to put storage location information, if needed. |
| duplicateQuantity |  | Used for printing labels. This field is not publicly accessible. |
| [_dynamicProperties_](https://dwc.tdwg.org/terms/#dwc:dynamicProperties) | Text (65,535) | This field should ideally be formatted in JSON. For non-formatted descriptions, use the verbatimAttributes field. |
| \*elevationNumber | Integer | Use this field for the elevation values (i.e., numbers) when your elevation values and units fields are separated. These will be concatenated into verbatimElevation. |
| \*elevationUnits | Text (45) | Use this field for the elevation units when your elevation values and units fields are separated. These will be concatenated into verbatimElevation. |
| endDayOfYear | Integer | The numeric value (1-365) of the ending date of an eventDate range. Used in concert with startDayOfYear. |
| [_establishmentMeans_](https://dwc.tdwg.org/terms/#dwc:establishmentMeans) | Text (45) | Use of a controlled vocabulary is preferred (see Darwin Core link). |
| [**_eventDate_**](https://dwc.tdwg.org/terms/#dwc:eventDate) | Date/Time | Date collected, or earliest date of collection, if a range is provided, formatted as YYYY-MM-DD. If other formatting is used, or if date ranges are included, map to the "verbatimEventDate" field instead. |
| eventDate2 | Date/Time | Latest date collected, when a range is provided. **Note:** This field is not yet accessible in the occurrence editor. |
| [_eventID_](https://dwc.tdwg.org/terms/#dwc:eventID) | Text (45) | The unique identifier for a collection event, if provided by the source database. **Note:** This field is not yet accessible in the occurrence editor. |
| [_eventTime_](https://dwc.tdwg.org/terms/#dwc:eventTime) | Text (45) | **Note:** This field is not yet accessible in the occurrence editor. |
| exsiccatiIdentifier | Integer (11) | Identifier from exsiccati indexing table |
| exsiccatiNotes | Text (250) | (Documentation coming soon!) |
| exsiccatiNumber | Text (45) | (Documentation coming soon!) |
| [_family_](https://dwc.tdwg.org/terms/#dwc:family) | Text (255) | This need only be provided when the scientific name is not in the taxonomic thesaurus, or you would like to override the automatically-assigned family that would come from the taxonomic thesaurus.|
| [_fieldNumber_](https://dwc.tdwg.org/terms/#dwc:fieldNumber) | Text (45) | |
| [_footprintWKT_](https://dwc.tdwg.org/terms/#dwc:footprintWKT) | Text (65,535) | |
| [_genus_](https://dwc.tdwg.org/terms/#dwc:genus) | Text (255)  | |
| [_geodeticDatum_](https://dwc.tdwg.org/terms/#dwc:geodeticDatum) | Text (255) | WGS84, NAD83, NAD27, etc |
| [_georeferencedBy_](https://dwc.tdwg.org/terms/#dwc:georeferencedBy) | Text (255) | |
| [_georeferencedDate_](https://dwc.tdwg.org/terms/#dwc:georeferencedDate) | Date/Time | **Note:** This field is not yet accessible in the occurrence editor. |
| [_georeferenceProtocol_](https://dwc.tdwg.org/terms/#dwc:georeferenceProtocol) | Text (255) | |
| [_georeferenceRemarks_](https://dwc.tdwg.org/terms/#dwc:georeferenceRemarks) | Text (255) | |
| [_georeferenceSources_](https://dwc.tdwg.org/terms/#dwc:georeferenceSources) | Text (255) | |
| [_georeferenceVerificationStatus_](https://dwc.tdwg.org/terms/#dwc:georeferenceVerificationStatus) | Text (32) | |
| [_habitat_](https://dwc.tdwg.org/terms/#dwc:habitat) | Text (65,535) | Information about the environmental conditions in which the specimen was collected. |
| host | | Currently concatenated into associatedTaxa |
| [_identificationQualifier_](https://dwc.tdwg.org/terms/#dwc:identificationQualifier) | Text (255) | cf, aff. etc |
| [_identificationReferences_](https://dwc.tdwg.org/terms/#dwc:identificationReferences) | Text (2000) | |
| [_identificationRemarks_](https://dwc.tdwg.org/terms/#dwc:identificationRemarks) | Text (2000) | |
| [_identifiedBy_](https://dwc.tdwg.org/terms/#dwc:identifiedBy) | Text (255) | |
| [_individualCount_](https://dwc.tdwg.org/terms/#dwc:individualCount) | Text (45) | |
| [_informationWithheld_](https://dwc.tdwg.org/terms/#dwc:informationWithheld) | Text (250) | E.g., "coordinates not provided due to rare species". If a record's locality data are redacted using _localitySecurity_, the public version of this field will autopopulate a list field names that contain redacted data. More information [here](/docs/Collection_Manager_Guide/Data_Publishing/redacting_obscuring_data). |
| [_infraspecificEpithet_](https://dwc.tdwg.org/terms/#dwc:infraspecificEpithet) | Text (255) | |
| [_institutionCode_](https://dwc.tdwg.org/terms/#dwc:institutionCode) | Text (32) | Populate only if different than source collection (i.e., the manager/metadata/) associated with your collection) |
| [_island_](https://dwc.tdwg.org/terms/#dwc:island) | Text (75) | **Note:** This field is not yet accessible in the occurrence editor. |
| [_islandGroup_](https://dwc.tdwg.org/terms/#dwc:islandGroup) | Text (75) | **Note:** This field is not yet accessible in the occurrence editor. |
| labelProject | Text (45) | Used for printing labels. This field is not publicly accessible. |
| language | Text (20) | The language of the original record. |
| \*latDeg | Integer (11) | Latitude degrees |
| \*latMin | Decimal number | Latitude minutes |
| \*latNS | Text (3) | North/south hemisphere. Should be either N or S. |
| \*latSec | Decimal number | Latitude seconds |
| [_lifeStage_](https://dwc.tdwg.org/terms/#dwc:lifeStage) | Text (45) | |
| \*lngDeg | Integer (11) | Longitude degrees |
| \*lngEW | Text (3) | East/west hemisphere. Should be either E or W. |
| \*lngMin | Decimal number  | Longitude minutes |
| \*lngSec | Decimal number | Longitude seconds |
| [**_locality_**](https://dwc.tdwg.org/terms/#dwc:locality) | Text (65,535) | |
| localitySecurity | Integer | 0=don’t hide locality details from general public, 1=hide locality, coordinates, and images . For more information about redacting locality information, see [this page](/docs/Collection_Manager_Guide/Data_Publishing/redacting_obscuring_data). |
| localitySecurityReason | Text (100) | Description of why a locality is hidden from public view. |
| [_locationID_](https://dwc.tdwg.org/terms/#dwc:locationID) | Text (150) | |
| [_locationRemarks_](https://dwc.tdwg.org/terms/#dwc:locationRemarks) | Text (65,535) |
| materialSampleJSON | Text (65,535) | Documentation coming soon! |
| [_maximumDepthInMeters_](https://dwc.tdwg.org/terms/#dwc:maximumDepthInMeters) | Integer (11) | |
| [_maximumElevationInMeters_](https://dwc.tdwg.org/terms/#dwc:minimumElevationInMeters) | Integer (6) | |
| [_minimumDepthInMeters_](https://dwc.tdwg.org/terms/#dwc:minimumDepthInMeters) | Integer (11) | |
| [**_minimumElevationInMeters_**](https://dwc.tdwg.org/terms/#dwc:minimumElevationInMeters) | Integer (6) | If the elevation is a single value in meters, only use this field |
| [_modified_](https://dwc.tdwg.org/terms/#dcterms:modified) | Date/Time | Date last modified in the source database. Further edits within the Symbiota portal will be stored in a separate table. |
| [_month_](https://dwc.tdwg.org/terms/#dwc:month) | Integer (4) | If eventDate is null, year-month-day will be used to build the eventDate. |
| [_municipality_](https://dwc.tdwg.org/terms/#dwc:municipality) | Text (255) | |
| observerUID | | A unique identifier applied to the person referred to in "recordedBy". |
| [**_occurrenceId_**](https://dwc.tdwg.org/terms/#dwc:occurrenceID) | Text (255) | Occurrence Global Unique Identifier (GUID) |
| [_occurrenceRemarks_](https://dwc.tdwg.org/terms/#dwc:occurrenceRemarks) | Text (65,535) | General notes or remarks about the occurrence/specimen. |
| [_organismID_](https://dwc.tdwg.org/terms/#dwc:organismID) | | |
| [_otherCatalogNumbers_](https://dwc.tdwg.org/terms/#dwc:otherCatalogNumbers) | Text (255) | To take advantage of the [Tag Name + Identifier system](/docs/Editor_Guide/Editing_Searching_Records/catalog_numbers) (in which you can tag an identifier/other catalog number with a specific title), enter the tag name followed by a colon and then the identifier value, e.g., "Old Accession Number: 12345". For multiple identifiers, separate the tag name + identifiers by semicolons, e.g., "NP #: 4321; Accession #: 9876" |
| [_ownerInstitutionCode_](https://dwc.tdwg.org/terms/#dwc:ownerInstitutionCode) | Text (32) | |
| paleoJSON | Text (65,535) | A JSON-formatted field containing the data to be included in the Symbiota [paleo module](/docs/Collection_Manager_Guide/paleo_data).  Documentation coming soon! |
| [_parentLocationID_](https://dwc.tdwg.org/terms/#dwc:parentLocationID) | | **Note:** This field is not yet accessible in the occurrence editor. |
| [_preparations_](https://dwc.tdwg.org/terms/#dwc:preparations) | Text (100) | |
| processingStatus | | Processing status for digitization tasks. This field is not publicly accessible. |
| [**_recordedBy_**](https://dwc.tdwg.org/terms/#dwc:recordedBy) | Text (255) | Primary collector/observer name. All other collectors should be placed in the "associatedCollectors" field. If the primary collector/observer name is parsed into multiple fields, see the collectorFamilyName, collectorInitials, and specify:collector fields. |
| recordEnteredBy | Text (250) | Data entry personnel |
| [**_recordNumber_**](https://dwc.tdwg.org/terms/#dwc:recordNumber) | Text (45) | Collector number |
| \*recordNumberPrefix | Text (45)  | Merged into recordNumber |
| \*recordNumberSuffix | Text (45)  | Merged into recordNumber |
| [_reproductiveCondition_](https://dwc.tdwg.org/terms/#dwc:reproductiveCondition) | Text (255) | e.g. sterile, flw, frt, asci, etc. Use of controlled vocabulary is preferred. |
| [_samplingEffort_](https://dwc.tdwg.org/terms/#dwc:samplingEffort) | Text (200) | |
| [_samplingProtocol_](https://dwc.tdwg.org/terms/#dwc:samplingProtocol) | Text (100) | |
| [_scientificname_](https://dwc.tdwg.org/terms/#dwc:scientificName) | Text (255) | Scientific name w/ authorship. The authorship will be parsed from the name. |
| [_scientificNameAuthorship_](https://dwc.tdwg.org/terms/#dwc:scientificNameAuthorship) | Text (255) | Author of scientific name |
| [**_sciname_**](https://dwc.tdwg.org/terms/#dwc:genericName) | Text (255) | Scientific name without author |
| [_sex_](https://dwc.tdwg.org/terms/#dwc:sex) | Text (45) | |
| [_specificEpithet_](https://dwc.tdwg.org/terms/#dwc:specificEpithet) | Text (255) | |
| startDayOfYear | Integer | The numeric value (1-365) of the starting date of an eventDate range. Used in concert with endDayOfYear. |
| [**_stateProvince_**](https://dwc.tdwg.org/terms/#dwc:stateProvince) | Text (255) | |
| substrate | Text (500) | The soil or other substrate (e.g., bark, rock) on which a sessile organism was found. In Darwin Core Archive exports, this field is concatenated into "habitat".| 
| [_taxonRank_](https://dwc.tdwg.org/terms/#dwc:taxonRank) | Text (32) | Rank name of infraspecific abbreviation (e.g., var., subsp.) allowed |
| [_taxonRemarks_](https://dwc.tdwg.org/terms/#dwc:taxonRemarks) | Text (2000) | |
| tempfield | | The tempfields are provided as temporary holding locations for data that needs to be concatenated or otherwise transformed by a Stored Procedure before it can be moved into its final database field. |
| \*trsRange | Text (45) | The range value (with direction) for U.S. township-range-section (TRS, or public land survey system) coordinates. (e.g., "23E" for the TRS coordinates T6S R23E section 34)|
| \*trsSection | Text (45) | The section for U.S. township-range-section (TRS, or public land survey system) coordinates. (e.g., "34" for the TRS coordinates T6S R23E section 34)|
| \*trsSectionDetails | Text (45) | Any additional details, such as quarter or sixteenth sections, for U.S. township-range-section (TRS, or public land survey system) coordinates. |
| \*trsTownship | Text (45) | The township value (with direction) for U.S. township-range-section (TRS, or public land survey system) coordinates. (e.g., "6S" for the TRS coordinates T6S R23E section 34)|
| [_typeStatus_](https://dwc.tdwg.org/terms/#dwc:typeStatus) | Text (255) | |
| \*UtmEasting | Text (45) | The easting value for UTM coordinates (e.g., "334543" for the UTM coordinates 12N 334543 5463754) |
| \*UtmNorthing | Text (45) | The northing value for UTM coordinates (e.g., "5463754" for the UTM coordinates 12N 334543 5463754) |
| \*UtmZoning | Text (45) | The zone value for UTM coordinates (e.g., "12N" for the UTM coordinates 12N 334543 5463754)|
| verbatimAttributes | Text (65,535) | Verbatim description of organism (e.g. 1.5 m tall, flowers white with purple tips, etc). In the occurrence editor, this field is usually labeled "Description". |
| \*verbatimLatitude | Text (255) | Used to generate decimal latitude. This field will be merged into verbatimCoordinates. |
| [_verbatimCoordinates_](https://dwc.tdwg.org/terms/#dwc:verbatimCoordinates) | Text (255) | e.g. UTM: 12N 334543 5463754; 34° 25’N 113° 43’W |
| [_verbatimDepth_](https://dwc.tdwg.org/terms/#dwc:verbatimDepth) | Text (50) | |
| [_verbatimElevation_](https://dwc.tdwg.org/terms/#dwc:verbatimElevation) | Text (255) | Use this field when your elevation values and units are in the same field (e.g., "1200 ft") and when your elevations are not consistently in meters. |
| [_verbatimEventDate_](https://dwc.tdwg.org/terms/#dwc:verbatimEventDate) | Text (255) | Map collection/observation date to this field when it is not YYYY-MM-DD standardized, when dates are incomplete, or when date ranges are present. |
| \*verbatimLongitude | Text (255) | Used to generate decimal longitude. This field will be merged into verbatimCoordinates. |
| [_waterBody_](https://dwc.tdwg.org/terms/#dwc:waterBody) | Text (150) | **Note:** This field is not yet accessible in the occurrence editor. |
| [_year_](https://dwc.tdwg.org/terms/#dwc:year) | Integer (4) | If eventDate is null, year-month-day will be used to build the eventDate. |
| specify:subspecies | Text | The infraspecific epithet of a subspecies only (without subsp. prefix). |
| specify:subspecies_author | Text | The authorship of the subspecific epithet. |
| specify:variety | Text | The infraspecific epithet of a variety only (without var. prefix).|
| specify:variety_author | Text | The authorship of the varietal epithet. |
| specify:forma | Text | The infraspecific epithet of a forma only (without f. prefix).|
| specify:forma_author | Text | The authorship of the forma. |
| specify:collector_first_name | Text | The first (given) name of the primary collector. Will be concatenated into recordedBy along with middle_initial and last_name fields. |
| specify:collector_middle_initial | Text | The middle initial name of the primary collector. Will be concatenated into recordedBy along with first_name and last_name fields. |
| specify:collector_last_name | Text | The last (family) name  of the primary collector. Will be concatenated into recordedBy along with first_name and middle_initial fields. |
| specify:determiner_first_name | Text | The first (given) name of the primary person who applied the taxonomic identification to the record. Will be concatenated into identifiedBy along with middle_initial and last_name fields. |
| specify:determiner_middle_initial | Text | The middle initial of the primary person who applied the taxonomic identification to the record. Will be concatenated into identifiedBy along with first_name and last_name fields.|
| specify:determiner_last_name | Text | The last (family) name of the primary person who applied the taxonomic identification to the record. Will be concatenated into identifiedBy along with first_name and middle_initial fields.|
| specify:qualifier_position | Text | When an identification qualifier is provided, this field will be concatenated along with the qualifier to indicate the part of the scientific name that the qualifier applies to. For example, if the record you are adding reads "Amaranthus cf. albus", enter "Amaranthus albus" in the sciname field, "cf." in the identificationQualifier field, and "albus" in the qualifier_position field. |
| specify:latitude1 | Decimal number | The westernmost latitude in a range of latitudes provided as a georeference for the record. Will be concatenated along with latitude2 into verbatimCoordinates. |
| specify:latitude2 | Decimal number | The easternmost latitude in a range of latitudes provided as a georeference for the record. Will be concatenated along with latitude1 into verbatimCoordinates. |
| specify:longitude1 | Decimal number | The northernmost longitude in a range of longitudes provided as a georeference for the record. Will be concatenated along with longitude2 into verbatimCoordinates.|
| specify:longitude2 | Decimal number | The southernmost longitude in a range of longitudes provided as a georeference for the record. Will be concatenated along with longitude1 into verbatimCoordinates.|
| specify:land_ownership | Text | Will be concatenated into the "locality" field separated by a semicolon. |
| specify:topo_quad | Text | Will be concatenated into the "locality" field separated by a semicolon. |
| specify:georeferenced_by_first_name | Text | The first (given) name of the primary person who applied the georeference to the record. Will be concatenated into georeferencedBy along with middle_initial and last_name fields. |
| specify:georeferenced_by_middle initial | Text | The middle initial of the primary person who applied the georeference to the record. Will be concatenated into georeferencedBy along with first_name and last_name fields.|
| specify:georeferenced_by_last_name | Text | The last (family) name of the primary person who applied the georeference to the record. Will be concatenated into georeferencedBy along with first_name and middle_initial fields.|
| specify:locality_continued | Text | Will be concatenated into the "locality" field with no delimiter.|
| specify:georeferenced_date | Date/Time | Will be concatenated into the "georeferencedBy" field with the following formatting: "georef date: georeferenced_date" |
| specify:elevation_(ft.) | Integer | The value of elevation in units of feet. |
| specify:preparer_first_name | Text | The first (given) name of the person who prepared the specimen. Will be concatenated into "preparations" along with middle_initial and last_name fields as follows: "preparer: first_name middle_initial last_name".|
| specify:preparer_middle_initial | Text | The middle initial of the person who prepared the specimen. Will be concatenated into "preparations" along with first_name and last_name fields as follows: "preparer: first_name middle_initial last_name".|
| specify:preparer_last_name | Text | The last (family) name of the person who prepared the specimen. Will be concatenated into "preparations" along with first_name and middle_initial fields as follows: "preparer: first_name middle_initial last_name".|
| specify:prepared_by_date | Date/Time | The date the specimen was prepared. Will be concatenated into "preparations". |
| specify:cataloger_first_name | Text | The first (given) name of the person who first cataloged the record. Will be concatenated into "recordEnteredBy" along with middle_initial and last_name fields. |
| specify:cataloger_middle_initial | Text | The middle initial of the person who first cataloged the record. Will be concatenated into "recordEnteredBy" along with first_name and last_name fields.|
| specify:cataloger_last_name | Text | The last name of the person who first cataloged the record. Will be concatenated into "recordEnteredBy" along with first_name and middle_initial fields. |
| specify:cataloged_date | Text | Will be concatenated into the "recordEnteredBy" field with the following formatting: "cataloged date: cataloged_date" |
