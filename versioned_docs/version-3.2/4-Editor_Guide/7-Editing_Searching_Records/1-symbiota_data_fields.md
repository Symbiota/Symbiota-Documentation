---
title: "Symbiota Data Fields"
date: 2014-07-21
lastmod: 2025-05-12
draft: false
authors: ["Ed Gilbert", "Katie Pearson", "Lindsay Walker"]
editors: ["Laura Rocha Prado"]
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

import Button from '@site/src/components/Button';
import ButtonLink from '@site/src/components/ButtonLink';

The Symbiota data schema is strongly aligned to the <a href="https://www.tdwg.org/standards/dwc/" target="_blank" rel="noopener noreferrer">Darwin Core</a> data exchange standard. For more details, links to the Darwin Core definitions are supplied for each term. Learn more about Darwin Core terms in the following TDWG pages:

- [TDWG - Darwin Core quick reference guide](https://dwc.tdwg.org/terms/)
- [TDWG - List of Darwin Core terms](https://dwc.tdwg.org/list)

:::note

Fields listed here differ from the fields visible in the data uploading tools. For field information specific to the data upload tools, see the [Data Import fields page](/docs/Collection_Manager_Guide/Importing_Uploading/data_import_fields).

:::

:::warning
Since portals have the ability to customize the field names found on their data entry form, field names may differ from the core field definition and how it is mapped to Darwin Core export tools.
:::

<ButtonLink
link="documents/SymbiotaDataFields_202111.csv"
label="Download full content as a CSV"
download={true}
style={{marginBottom: '2vh'}}
/>

## Standard Fields

### Catalog Number

The unique identifier (primary key) for the specimen record. This field should be used to store the barcode or the accession number (herbaria only). This field is enforced to be unique per collection"<br></br>
**Examples:** WIS-L-0123456, ASU0012345, 12345<br></br>
See Darwin Core's [catalogNumber](https://dwc.tdwg.org/terms/#dwc:catalogNumber)

### Additional Identifier Values

Any other identifier for a specimen record that is not the central catalog number. This field is typically used to store the old catalog numbers, accession numbers, National Park identifiers, etc. Identifiers can be assigned a tag name to distinguish it from other identifiers (e.g. old accession #, NPS#, etc). These identifiers map best to dwc:otherCatalogNumbers definition, and thus included in the exports under this field. More information about this system can be found on the [Catalog Numbers documentation page](/docs/Editor_Guide/Editing_Searching_Records/catalog_numbers).<br></br>
**Examples:** 12345, TUZI 3082, NPS Acc #: GUIS-M-00126.<br></br>
See Darwin Core's [otherCatalogNumbers](https://dwc.tdwg.org/terms/#dwc:otherCatalogNumbers) and the [Alternative Identifiers extension](https://rs.gbif.org/extension/gbif/1.0/identifier.xml).

### Collector

The name of the person who collected the specimen or made the observation.<br></br>
**Examples:** C.G. Pringle, Goodding, L.N.<br></br>
See Darwin Core's [recordedBy](https://dwc.tdwg.org/terms/#dwc:recordedBy)

### Associated Collectors

Other collectors that were present at the time of collection.<br></br>
**Examples:** John R. Reeder, A. Nelson<br></br>
This field is not defined by the Darwin Core standard, which places primary and secondary collectors concatenated the recordedBy field.

### Number

The collection number assigned to the specimen by the collector.<br></br>
**Examples:** 1294, 12490b, 94-132<br></br>
See Darwin Core's [recordNumber](https://dwc.tdwg.org/terms/#dwc:recordNumber)

### Date (start)

The date the specimen was collected or, if a range of dates is indicated, the first day in the range of collecting dates. While dates can be entered using your preferred format, the value will be converted and stored as an ISO-8601 numeric format (YYYY-MM-DD). Note that unknown month and days can be entered as "00". For example, a collection with a date of "March 1956" can be entered as "1956-03-00".<br></br>
**Examples:** 1983-09-15, 1983-07-00, 1934-00-00<br></br>
See Darwin Core's [eventDate](https://dwc.tdwg.org/terms/#dwc:eventDate)

### End Date

The last date of collection, in the case of a range of collecting dates. While dates can be entered using your preferred format, the value will be converted and stored as an ISO-8601 numeric format (YYYY-MM-DD). Note that unknown month and days can be entered as "00". For example, a collection with a date of "March 1956" can be entered as "1956-03-00".<br></br>
**Examples:** 1983-09-15, 1983-07-00, 1934-00-00<br></br>
See Darwin Core's [eventDate](https://dwc.tdwg.org/terms/#dwc:eventDate)

### Verbatim Date

The date of collection/observation exactly as provided on a label or in field notes. Particularly useful for non-standard date formats or date ranges.<br></br>
**Examples:** Spring 1901, March-April 1952, late Sept. 1909<br></br>
See Darwin Core's [verbatimEventDate](https://dwc.tdwg.org/terms/#dwc:verbatimEventDate)

### Scientific Name

The Latin name of the specimen without the author. Could be anything from kingdom down to subspecies or variety, depending on the level of the identification.<br></br>
**Examples:** Pinaceae, Pinus, Pinus edulis, Pinus edulis var. fallax<br></br>
See Darwin Core's [scientificName](https://dwc.tdwg.org/terms/#dwc:scientificName)

### Author

The name of the person who first named the taxa. This field autofills after entering the scientific name. If the name entered in the Scientific Name field is present in the taxonomic thesaurus, this field will be automatically populated from the taxonomic thesaurus.<br></br>
**Examples:** L., A. Gray<br></br>
See Darwin Core's [scientificNameAuthorship](https://dwc.tdwg.org/terms/#dwc:scientificNameAuthorship)

### Identification Qualifier

The determiner's expression of uncertainty in their identification. This will be listed on the label along with the scientific name.<br></br>
**Examples:** cf., aff.<br></br>
See Darwin Core's [identificationQualifier](https://dwc.tdwg.org/terms/#dwc:identificationQualifier)

### Family

The family to which the taxon in Scientific Name belongs. If the name entered in the Scientific Name field is present in the taxonomic thesaurus, this field will be automatically populated from the taxonomic thesaurus.<br></br>
**Examples:** Pinaceae, Mephitidae<br></br>
See Darwin Core's [family](https://dwc.tdwg.org/terms/#dwc:family)

### Identified By

The name of the person who identified the specimen. Also called a determiner.<br></br>
**Examples:** L. R. Landrum<br></br>
See Darwin Core's [identifiedBy](https://dwc.tdwg.org/terms/#dwc:identifiedBy)

### Date Identified

The date the identification was made. Date can be entered as free form text and do not need to be in a standard date format.<br></br>
**Examples:** 1992, May 1992, 2 May 1992<br></br>
See Darwin Core's [dateIdentified](https://dwc.tdwg.org/terms/#dwc:dateIdentified)

### Identification References

The reference source used to make the identification.<br></br>
**Examples:** Nesom, Guy L. 2006. Flora of North America - Asteraceae. vol. 20<br></br>
See Darwin Core's [identificationReferences](https://dwc.tdwg.org/terms/#dwc:identificationReferences)

### Identification Remarks

Any additional notes regarding the identification of the specimen.<br></br>
**Examples:** "petals pink but calyx length more characteristic of S. angustifolium", "determination based on size and shape of testes"<br></br>
See Darwin Core's [identificationRemarks](https://dwc.tdwg.org/terms/#dwc:identificationRemarks)

### Taxon Remarks

Any additional notes regarding the taxonomic name to which the specimen was identified. This field is often where vernacular names are stored.<br></br>
**Examples:** "Smalley's wooly aster"<br></br>
See Darwin Core's [taxonRemarks](https://dwc.tdwg.org/terms/#dwc:taxonRemarks)

### Continent

The name of the continent in which the specimen was collected.<br></br>
**Examples:** South America, Australia<br></br>
See Darwin Core's [continent](https://dwc.tdwg.org/terms/#dwc:continent)

### Water Body

The name of the water body in which the specimen was collected.<br></br>
**Examples:** Pacific Ocean, Black Sea<br></br>
See Darwin Core's [waterBody](https://dwc.tdwg.org/terms/#dwc:waterBody)

### Island Group

The name of the island group in which the specimen was collected.<br></br>
**Examples:** Hawaiian Islands, Alexander Archipelago<br></br>
See Darwin Core's [islandGroup](https://dwc.tdwg.org/terms/#dwc:islandGroup)

### Island

The name of the island on which the specimen was collected.<br></br>
**Examples:** Cayo Coco, Maui<br></br>
See Darwin Core's [island](https://dwc.tdwg.org/terms/#dwc:island)

### Country

The name of the country in which the specimen was collected. To aid data entry, a dropdown menu will appear as one types, though names outside of the list can still be entered.<br></br>
**Examples:** United States, Brazil, Togo<br></br>
See Darwin Core's [country](https://dwc.tdwg.org/terms/#dwc:country)

### State/Province

The name of the state or province in which the specimen was collected. To aid data entry, a dropdown menu will appear as one types, though names outside of the list can still be entered.<br></br>
**Examples:** New York, Hidalgo<br></br>
See Darwin Core's [stateProvince](https://dwc.tdwg.org/terms/#dwc:stateProvince)

### County

The name of the county in which the specimen was collected. To aid data entry, a dropdown menu will appear as one types, though names outside of the list can still be entered. For non-U.S. records, enter the next geographic region below state/province.<br></br>
**Examples:** Maricopa, Washington<br></br>
See Darwin Core's [county](https://dwc.tdwg.org/terms/#dwc:county)

### Municipality

The name of the municipality in which the specimen was collected. For specimens collected outside of the United States, enter the 4th level geographic designation.<br></br>
**Examples:** Paradise Valley<br></br>
See Darwin Core's [municipality](https://dwc.tdwg.org/terms/#dwc:municipality)

### Locality

The name of the municipality in which the specimen was collected. For specimens collected outside of the United States, enter the 4th level geographic designation.<br></br>
**Examples:** 9.5 miles NW of Sedona along Boynton Pass Rd.<br></br>
See Darwin Core's [locality](https://dwc.tdwg.org/terms/#dwc:locality)

### Location ID

An identifier for the set of location information (data associated with dcterms:Location). May be a global unique identifier or an identifier specific to the dataset.<br></br>
**Examples:** https://opencontext.org/subjects/768A875F-E205-4D0B-DE55-BAB7598D0FD1<br></br>
See Darwin Core's [locationID](https://dwc.tdwg.org/terms/#dwc:locationID)

### Locality Security

Checking the Locality Security checkbox will hide locality details below the level of county from unauthorized users. This is typically done because the species is rare or threatened. Images are also hidden to protect locality details that might be viewable from the label. Users that are logged into the system and have the necessary permission to view locality details (e.g. collection managers) will continue to have access to all data. This box will automatically be checked if the species name is on any of the rare species lists &nbsp;(see sitemap). If one wishes to lock protection (on or off), click the Lock Security checkbox and/or enter a reason for security override in the text field. Leaving the locality security unlocked will allow default settings to be applied as determined by the sensitive species administrators, which is the recommendation for most records. For more information on sensitive species protection, see the page on [Sensitive Species Protection](/docs/User_Guide/redacted_protected_data).<br></br>
This field is not defined by the Darwin Core standard.

### Location Remarks

Comments or notes about the locality.<br></br>
**Examples:** "Previously known as Mt. Evans"<br></br>
See Darwin Core's [locationRemarks](https://dwc.tdwg.org/terms/#dwc:locationRemarks)

### Latitude and Longitude

The geographic latitude and longitude in decimal degrees. Latitudes from the southern hemisphere and longitudes in the western hemisphere (e.g. USA) should be entered as negative values. Click on the "Tools" button to enter the coordinates in the degree, minute, seconds (DMS) or the UTM formats. Decimal degrees are the preferred coordinate standard as defined by Darwin Core.<br></br>
**Examples:** 34.874022, -111.75774<br></br>
See Darwin Core's [decimalLatitude](https://dwc.tdwg.org/terms/#dwc:decimalLatitude) and [decimalLongitude](https://dwc.tdwg.org/terms/#dwc:decimalLongitude)

### Uncertainty

The accuracy of the georeference coordinates in meters (numeric value only). This is measured as the radius of a circle where the true point would be found if known. If coordinates are collected using a GPS, than the accuracy would be the error found within the GPS unit (usually around 10m). While previously collected specimens that have coordinates on the label recorded by the collector typically do not state the source of the coordinates (GPS, map, etc), it is typically a good assumption that the coordinates are accurate within one to two hundred meters. If the locality details are vague such as just "Grand Canyon", then the coordinates should be the centroid within the uncertainty encompassing the greater area where the specimen may have been collected. If the locality is "Boynton Canyon, Sedona", the uncertainty would be about 1500 m. This field autofills when using GeoLocate for georeferencing.<br></br>
**Examples:** 42000, 100<br></br>
See Darwin Core's [coordinateUncertaintyInMeters](https://dwc.tdwg.org/terms/#dwc:coordinateUncertaintyInMeters)

### Datum

The geographic system that was used to get the coordinates. This field autofills when using [GeoLocate](http://www.museum.tulane.edu/geolocate/) or the Mapping tool for georeferencing.<br></br>
**Examples:** NAD27, NAD83, WGS84<br></br>
See Darwin Core's [geodeticDatum](https://dwc.tdwg.org/terms/#dwc:geodeticDatum)

### Verbatim Coordinates

Enter coordinate vlaues here from the specimen label if they are in a format other than decimal degrees. If your coordinates are in "degrees, minutes, seconds", "UTM", or "township-range-section" (TRS) format, click the "F" button to view the formatting tools. Fill in the appropriate box with the coordinates on your label and click the Insert Values button. Valid values in "degrees-minutes-seconds" or "UTM" formats will be automatically converted into decimal latitude and longitude values. If a value has previously been entered into the Verbatim Coordinates field, you can try to click the double arrows ("&lt;&lt;") to the left of this field to try to auto-convert them into decimal latitude and longitude. Township-range-section coordinates cannot be automatically converted in the data entry form, but they may be converted into an appropriate georeference using the GEOLocate tool. For more information about this and about using the coordinate tools, [see this tutorial video](https://www.youtube.com/watch?v=XyYPYJ1guMY&t=70s).<br></br>
**Examples:** 34° 13.940' N 112° 2.370' W, 12 420944E 4064025N, TRS: T40N R32E S29<br></br>
See Darwin Core's [verbatimCoordinates](https://dwc.tdwg.org/terms/#dwc:verbatimCoordinates)

### Elevation in Meters

The elevation in meters at which the specimen was collected. Also called altitude. Use only the left field with the right field blank when a single elevation exists. Use the left field to indicate the minimum elevation in meters and the right field to indicate the maximum elevation in meters.<br></br>
**Examples:** 1400, 2000<br></br>
See Darwin Core's [minimumElevationInMeters](https://dwc.tdwg.org/terms/#dwc:minimumElevationInMeters) and [maximumElevationInMeters](https://dwc.tdwg.org/terms/#dwc:maximumElevationInMeters)

### Verbatim Elevation

The verbatim elevation at which the specimen was collected. This is typically used to record an elevation measurement that was recorded in feet or an uncertainty designation. When the elevation in meters field is left blank, the value will automatically be converted to meters. Click the "&lt;&lt;" symbol to replace the previously entered meters values.<br></br>
**Examples:** 4500ft, 4500 feet, ca 4500', ca 2000m, 4500' +-300'<br></br>
See Darwin Core's [verbatimElevation](https://dwc.tdwg.org/terms/#dwc:verbatimElevation)

### Depth in Meters

The range of depth below the local surface, in meters. Use the left field to indicate the minimum depth in meters and the right field to indicate the maximum depth in meters.<br></br>
**Examples:** 100, 1042<br></br>
See Darwin Core's [minimumDepthInMeters](https://dwc.tdwg.org/terms/#dwc:minimumDepthInMeters) and [maximumDepthInMeters](https://dwc.tdwg.org/terms/#dwc:maximumDepthInMeters)

### Verbatim Depth

The original verbatim description of the depth below the local surface at which the specimen was collected.<br></br>
**Examples:** 100ft, 100 feet, ca 100', ca 30m, 100' +-10', 7 fathoms<br></br>
See Darwin Core's [verbatimDepth](https://dwc.tdwg.org/terms/#dwc:verbatimDepth)

### Georeferenced By

The name (or username) of the person who georeferenced the specimen record. This field autofills when using GeoLocate for georeferencing.<br></br>
**Examples:** A. Gonzales, emakings, acbarber<br></br>
See Darwin Core's [georeferencedBy](https://dwc.tdwg.org/terms/#dwc:georeferencedBy)

### Georeference Protocol

The source of the standards used to georeference.<br></br>
**Examples:** "Georeferencing Quick Guide. Zermoglio et al. 2020","Engelbrecht, I. 2021. https://doi.org/10.3897/biss.5.73572"<br></br>
See Darwin Core's [georeferenceProtocol](https://dwc.tdwg.org/terms/#dwc:georeferenceProtocol)

### Georeference Sources

The tool or tools used to georeference and any references consulted to georeference the record<br></br>
**Examples:** GeoLocate, Google Earth, USGS map<br></br>
See Darwin Core's [georeferenceSources](https://dwc.tdwg.org/terms/#dwc:georeferenceSources)

### Georef Verification Status

This field is used to indicate whether or not the geoference has been reviewed or verified.<br></br>
**Examples:** reviewed, not reviewed<br></br>
See Darwin Core's [georeferenceVerificationStatus](https://dwc.tdwg.org/terms/#dwc:georeferenceVerificationStatus)

### Georeference Remarks

Notes regarding the georeferencing of the specimen.<br></br>
**Examples:** "placed point at centroid of city, error radius to the extend of city boundaries as viewed on Google Satellite"<br></br>
See Darwin Core's [georeferenceRemarks](https://dwc.tdwg.org/terms/#dwc:georeferenceRemarks)

### Habitat

The description of the habitat in which the specimen was collected.<br></br>
**Example:** Wet areas along a small stream in chaparral.<br></br>
See Darwin Core's [habitat](https://dwc.tdwg.org/terms/#dwc:habitat)

### Substrate

The substrate on which the specimen was collected. Mostly used for lichen and bryophyte specimens.<br></br>
**Examples:** on basalt, trunk of oak<br></br>
Darwin Core currently lumps this information into dwc:habitat.

### Associated Taxa

A list of the names of other species occurring with the collected specimen.<br></br>
**Examples:** Quercus, Arctostaphylos, Ceanothus, Rhus, Eriogonum, Salvia<br></br>
See Darwin Core's [associatedTaxa](https://dwc.tdwg.org/terms/#dwc:associatedTaxa)

### Description

A physical description of the specimen at the time of collection. This often includes information that can be lost or difficult to observe after the collection and preservation process.<br></br>
**Examples:** Shrub 3 m tall, corolla yellow<br></br>
This field is not supported by Darwin Core and is concatenated into occurrenceRemarks when downloaded as a Darwin Core Archive.

### Notes

Any additional notes regarding the specimen.<br></br>
**Examples:** "common in this region", "this specimen collected as part of master's thesis project"<br></br>
See Darwin Core's [occurrenceRemarks](https://dwc.tdwg.org/terms/#dwc:occurrenceRemarks)

### Dynamic Properties

A list of additional measurements, facts, characteristics, or assertions about the specimen in a format that allows programmatic parsing of the data.<br></br>
**Examples:** "awnLengthInMeters=0.014, heightInMeters=1.5, relativeHumidity=28, airTemperatureInC=22"<br></br>
See Darwin Core's [dynamicProperties](https://dwc.tdwg.org/terms/#dwc:dynamicProperties)

### Life Stage

The age or stage of the organism at the time of collection/observation. Typically used for zoological collections.<br></br>
**Examples:** larva, juvenile<br></br>
See Darwin Core's [lifeStage](https://dwc.tdwg.org/terms/#dwc:lifeStage)

### Sex

The biological sex of the occurrence.<br></br>
**Examples:** female, male, gynandromorph<br></br>
See Darwin Core's [sex](https://dwc.tdwg.org/terms/#dwc:sex)

### Individual Count

The number of individuals represented by the occurrence<br></br>
**Examples:** 2, 15<br></br>
See Darwin Core's [individualCount](https://dwc.tdwg.org/terms/#dwc:individualCount)

### Sampling Protocol

The names and references to methods used to collect or sample an occurrence<br></br>
**Examples:** UV light trap, mist net, Takats et al. 2001. Guidelines for Nocturnal Owl Monitoring in North America. Beaverhill Bird Observatory and Bird Studies Canada, Edmonton, Alberta. 32 pp., http://www.bsc-eoc.org/download/Owl.pdf<br></br>
See Darwin Core's [samplingProtocol](https://dwc.tdwg.org/terms/#dwc:samplingProtocol)

### Preparations

Preparation or preservation method for a specimen. While no universal controlled vocabulary currently exists for this field, a practical example can be found [here](https://github.com/tdwg/cd/issues/64#issuecomment-781653290).<br></br>
**Examples:** in ethanol, skeleton, pressed and dried<br></br>
See Darwin Core's [preparations](https://dwc.tdwg.org/terms/#dwc:preparations)

### Phenology (Reproduction Condition)

The reproductive stage the specimen is in. Typically used for plant and fungal collections.<br></br>
**Examples:** flower, fruit, sterile<br></br>
See Darwin Core's [reproductiveCondition](https://dwc.tdwg.org/terms/#dwc:reproductiveCondition)

### Behavior

The behavior exhibited by the organism/occurrence at the time of collection/observation.<br></br>
**Examples:** flying, sitting on eggs<br></br>
See Darwin Core's [behavior](https://dwc.tdwg.org/terms/#dwc:behavior)

### Vitality

An indication of whether the organism was alive or dead at the time of collection or observation.<br></br>
**Examples:** live, dead<br></br>
See Darwin Core's [vitality](https://dwc.tdwg.org/terms/#dwc:vitality)

### Establishment Means

The state or quality of establishment of the individual at the time of collection<br></br>
**Examples:** cultivated, invasive, native<br></br>
See Darwin Core's [establishmentMeans](https://dwc.tdwg.org/terms/#dwc:establishmentMeans)

### Cultivated Checkbox

Check this box when the organism was established with the aid of humans at the time of collection. This true/false field enables the ability to filter non-native or naturalized species.<br></br>
This field is not currently supported by Darwin Core and is therefore not included in Darwin Core exports.

### Type Status

The type designation of a specimen, if it is a type specimen<br></br>
**Examples:** holotype, isotype, paratype<br></br>
See Darwin Core's [typeStatus](https://dwc.tdwg.org/terms/#dwc:typeStatus)

### Disposition

The location or status of the physical specimen<br></br>
**Examples:** missing, on loan, in collection, stored under genus "Mimulus"<br></br>
See Darwin Core's [disposition](https://dwc.tdwg.org/terms/#dwc:disposition)

### Occurrence ID (override)

This is the Global Unique Identification (GUID) for the specimen. This value should be stable and uniquely identify the specimen relative to all other specimens within the world. If your collection is set to have occurrenceIDs/GUIDs generated by the portal (this is the suggested setting for all live-managed collections), this field will appear blank in the occurrence editor form. To view the occurrenceID value associated with your specimen, click the Public Display link at the top of the page.<br></br>
**Examples:** 000866d2-c177-4648-a200-ead4007051b9, urn:catalog:UWBM:Bird:89776<br></br>
See Darwin Core's [occurrenceid](https://dwc.tdwg.org/terms/#dwc:occurrenceid)

### Disposition

The location or status of the physical specimen<br></br>
**Examples:** missing, on loan, in collection, stored under genus "Mimulus"<br></br>
See Darwin Core's [disposition](https://dwc.tdwg.org/terms/#dwc:disposition)

### Field Number

An identifier given to the collecting event in the field. This number often serves as a link between the event indicated in the field notes and the specimen record<br></br>
**Examples:** 2024-04-05-00045, JOSHUATREE_35<br></br>
See Darwin Core's [fieldnumber](https://dwc.tdwg.org/terms/#dwc:fieldnumber)

### Language

The language of the label information or record<br></br>
**Examples:** en, es, pt, fr<br></br>
See Darwin Core's [language](https://dwc.tdwg.org/terms/#dwc:language)

### Label Project

This field is used to group records from a specific project or category. Once a value is entered in this field, all records with that same value can be printed at one time using the [batch label printing tools](/docs/Editor_Guide/Label_Customization)<br></br>
**Examples:** Plants of Sedona 2012<br></br>
This field does not map the Darwin Core and is excluded from Darwin Core Archive exports.

### Dupe Count

The number of duplicate specimens created. This will dictate the number of labels printed for specimen.<br></br>
**Examples:** 10, 2<br></br>
See Darwin Core's [duplicatequantity](https://dwc.tdwg.org/terms/#dwc:duplicatequantity)

### Institution Code (override)

The acronym of the institution that stewards this occurrence. Only enter a value if the institution is different than what was entered when the metadata for the institution was added to the portal.<br></br>
**Examples:** NMNH, FLMNH<br></br>
See Darwin Core's [institutionCode](https://dwc.tdwg.org/terms/#dwc:institutionCode)

### Collection Code (override)

The acronym of the collection that stewards this occurrence. Only enter a value if the collection is different than what was entered when the metadata for the collection was added to the portal.<br></br>
**Examples:** Herps, F<br></br>
See Darwin Core's [collectionCode](https://dwc.tdwg.org/terms/#dwc:collectionCode)

### Owner Code (override)

The name (or acronym) in use by the institution having ownership of the object(s) or information referred to in the record. Only enter a value if the collection is different than what was entered when the metadata for the collection was added to the portal.<br></br>
**Examples:** NPS, NMNH<br></br>
See Darwin Core's [ownerInstitutionCode](https://dwc.tdwg.org/terms/#dwc:ownerInstitutionCode)

### Basis of Record

The type of record the specimen is classified as. For physical collections, this field defaults to "PreservedSpecimen" (aka physical specimen), and for observation projects, the default is "HumanObservation"<br></br>
**Examples:** PreservedSpecimen, LivingSpecimen, Observation<br></br>
See Darwin Core's [basisOfRecord](https://dwc.tdwg.org/terms/#dwc:basisOfRecord)

### Processing Status

The status of the digital record. This field is used for internal data management and review. The values used are dictated by the specific workflow of each institution.<br></br>
**Examples:** Reviewed, Pending Review, Stage 1<br></br>
This field does not map the Darwin Core and is excluded from Darwin Core Archive exports.

### Data Generalizations

Internal notes associated with the occurrence record. Data entered in this field is not visible on the public search form, but it can be viewed in a Darwin Core Archive download.<br></br>
**Examples:** "data reviewed on 2025-05-12", "potential issues with georeferencing, to be reviewed by curator"<br></br>
See Darwin Core's [dataGeneralizations](https://dwc.tdwg.org/terms/#dwc:dataGeneralizations)

## Material Sample Fields

| ![Material Sample Module](/img/materialsampleblank.png) |
| :-----------------------------------------------------: |
|                   Material Sample tab                   |

:::note

Controlled vocabularies for Material Sample data fields are managed per portal, and the suggested examples provided below are derived from vocabularies used for the [NEON Biorepository](https://biorepo.neonscience.org/portal/). These vocabularies vary by portal, and modifications may require community input. Contact your Portal Administrator for more information.

:::

### Sample Type

Controlled vocabulary defining the sample type, which is often anatomical in nature.<br></br>
**Examples:** skull, liver, gastrointestinal tract, ectoparasite<br></br>
See the GGBN Material Sample Extension's [materialSampleType](http://data.ggbn.org/schemas/ggbn/terms/materialSampleType)

### Catalog Number / Barcode

A unique identifier for the material sample, analagous to _catalogNumber_ for specimen occurrences.<br></br>
**Examples:** WIS-L-0123456, ASU0012345<br></br>
See Darwin Core's [catalogNumber](https://dwc.tdwg.org/terms/#dwc:catalogNumber)

### Material Sample ID (GUID)

A globally unique identifier for the material sample. In the absence of a persistent global unique identifier, construct one from a combination of identifiers in the record that will make this identifier globally unique.<br></br>
**Example:** 06809dc5-f143-459a-be1a-6f03e63fc083

### Sample Condition

Free text field to describe the physical condition of the sample. Use of a controlled vocabulary is recommended but not required.<br></br>
**Examples:** very poor, poor, fair, good, unknown<br></br>
See the GGBN Material Sample Extension's [quality](http://data.ggbn.org/schemas/ggbn/terms/quality)

### Disposition

Value from a controlled vocabulary describing the current state of a sample with respect to its collection. Values for this field are controlled by a vocabulary table in the database.<br></br>
**Examples:** in collection, being processed, consumed, on loan

### Preservation Type

Value from a controlled vocabulary defining the physical storage/preservation method of a sample. Values for this field are controlled by a vocabulary table in the database.<br></br>
**Examples:** dry, ethanol, frozen, pinned

### Preservation Date

The date of a sample's physical preparation. Dates in this field visually conform to MM/DD/YYYY formatting. Manual data entry into this field is validated using a calendar form.<br></br>
**Examples:** 08/01/2022, 05/14/2025

### Prepared By

Name of the individual who prepared a sample, selected from the dropdown list. The individual must have an user account in the portal to be recorded in this field.<br></br>
**Examples:** Liao, Rosie; Johnston, Andrew

### Preparation Details

Free text field to record notes providing more context about the physical preparation and condition of the sample.<br></br>
**Examples:** upper and lower GI tract; kidney, left, whole; prepared with borax

### Individual Count

The number of loanable objects associated with the sample, i.e. all pieces of the sample assigned to the same unique materialSampleID (see above).<br></br>
**Examples:** 0, 1, 100

### Sample Size

Free text field to quantify the sample beyond counted number of objects, e.g. dry weight.<br></br>
**Examples:** 200 uL, 20 g<br></br>
See GGBN Material Sample Extension's [samp_size](http://gensc.org/ns/mixs/samp_size).

### Storage Location

Free text field to describe a sample's permanent physical storage location.<br></br>
**Examples:** Freezer 3; Oversize Storage; Cab011, Dwr002

### Storage Location

Free text field to provide additional notes, comments, and context unique to a sample that cannot be captured by other existing data fields. Limited to 250 characters.<br></br>
**Examples:** genotype sampling; left jaw consumed in research; with post-cranial skeleton

## Paleontology Fields

| ![Paleo Module](/img/paleo_module.png)  |
| :-------------------------------------: |
| Paleo Module on the Occurrence Data tab |

:::note

Controlled vocabularies for the following data fields are managed per portal. Modifications to these values may require community discussion. Contact your Portal Administrator for more information.

:::

### Eon

The longest geologic time intervals<br></br>
**Examples:** Archean, Proterozoic, Phanerozoic<br></br>
See Darwin Core's [earliestEonOrLowestEonothem](https://dwc.tdwg.org/terms/#dwc:earliestEonOrLowestEonothem) and [latestEonOrHighestEonothem](https://dwc.tdwg.org/terms/#dwc:latestEonOrHighestEonothem)

### Era

A subdivision of an eon that is a shorter interval of geologic time<br></br>
**Examples:** Archean, Proterozoic, Phanerozoic<br></br>
See Darwin Core's [earliestEraOrLowestErathem](https://dwc.tdwg.org/terms/#dwc:earliestEraOrLowestErathem) and [latestEraOrHighestErathem](https://dwc.tdwg.org/terms/#dwc:latestEraOrHighestErathem)

### Period

A subdivision of an era that is a shorter interval of geologic time<br></br>
**Examples:** Ordovician, Silurian, Devonian, Carboniferous, Mississippian, Pennsylvanian, Permian, Triassic, Jurassic, Cretaceous, Paleogene, Neogene, Quaternary<br></br>
See Darwin Core's [earliestPeriodOrLowestSystem](https://dwc.tdwg.org/terms/#dwc:earliestPeriodOrLowestSystem) and [latestPeriodOrHighestSystem](https://dwc.tdwg.org/terms/#dwc:latestPeriodOrHighestSystem)

### Epoch

A subdivision of a period that is a shorter interval of geologic time<br></br>
**Examples:** Lower, Middle, Upper Ordovician; Wenlock; Pridoli; Lower, Middle, Upper Devonian; Lower, Middle, Upper Mississippian; Lower, Middle, Upper Pennsylvanian; Cisuralian; Lower, Middle, Upper Jurassic; Lower, Upper Cretaceous; Paleocene; Eocene; Oligocene; Miocene; Pliocene; Pleistocene; Holocene<br></br>
See Darwin Core's [earliestEpochOrLowestSeries](https://dwc.tdwg.org/terms/#dwc:earliestEpochOrLowestSeries) and [latestEpochOrHighestSeries](https://dwc.tdwg.org/terms/#dwc:latestEpochOrHighestSeries)

### Stage

The chronostratigraphic term given to the succession of rock strata laid down in a single geochronologic age<br></br>
**Examples:** Lochkovian, Emsian, Eifelian, Givetian, Frasnian, Tournaisian, Serpukhovian, Moscovian, Changhsingian, Norian, Oxfordian, Hauterivian, Albian, Maastrichtian, Thanetian, Messinian, etc.<br></br>
See Darwin Core's [earliestAgeOrLowestStage](https://dwc.tdwg.org/terms/#dwc:earliestAgeOrLowestStage) and [latestAgeOrHighestStage](https://dwc.tdwg.org/terms/#dwc:latestAgeOrHighestStage)

### Local Stage

A local name for a stage that was applied to this specimen<br></br>
**Examples:** Ulatsian, Helvetian

### Early Interval

Name of the earliest possible geochronologic eon, era, period, epoch or age, or the lowest chronostratigraphic eonothem, erathem, system, series, or stage attributable to the stratigraphic horizon from which the cataloged specimen was collected<br></br>
**Examples:** Aalenian, Aeronian, Albian, Anisian, Aptian, Aquitanian, Archean, Artinskian, Asselian, Bajocian, Barremian, Bartonian

### Late Interval

Name of the latest possible geochronologic eon, era, period, epoch or age, or the highest chronostratigraphic eonothem, erathem, system, series or stage attributable to the stratigraphic horizon from which the cataloged specimen was collected<br></br>
**Examples:** Aalenian, Aeronian, Albian, Anisian, Aptian, Aquitanian, Archean, Artinskian, Asselian, Bajocian, Barremian, Bartonian

### Absolute Age

Field to record the age of specimen/rock in years determined using radioactive decay of isotopes (Carbon-14, argon-argon, potassium-argon, uranium-lead, etc.) and other quantitative dating methods<br></br>
**Examples:** 20 Ma, 75 ka, 10.5 – 12.7 +/- 0.5 Ma

### Storage Age

Field for institutions that arrange collections by geologic time or biostratigraphy. The physical location of a specimen within the collection space<br></br>
**Examples:** Miocene, Wasatchian, Paleocene, Bridgerian

### Biota (Flora/Fauna)

Name given to collections of fossils of the same age from a single locality or multiple localities within a specific geographic area<br></br>
**Examples:** Chalk Bluffs, Stewart Valley, Bridge Creek, Mazon Creek

### Biostratigraphy (Biozone)

The name of the lowest possible geological biostratigraphic zone of the stratigraphic horizon from which the cataloged item was collected<br></br>
**Examples:** Wa0, Uvigerinella sparsicostata Zone, Ogygiocaris<br></br>
See Darwin Core's [lowestBiostratigraphicZone](https://dwc.tdwg.org/terms/#dwc:lowestBiostratigraphicZone) and [highestBiostratigraphicZone](https://dwc.tdwg.org/terms/#dwc:highestBiostratigraphicZone)

### Group

The name of the lithostratigraphic group from which the cataloged specimen was collected. The [National Geologic Map Database Geolex Search](https://ngmdb.usgs.gov/Geolex/search) is a great resource for the named lithostratigraphic units accepted by the USGS.<br></br>
**Examples:** Bathurst, Lower Wealden, Monte Cristo, Contra Costa, Panoche<br></br>
See Darwin Core's [group](https://dwc.tdwg.org/terms/#dwc:group)

### Formation

The name of the lithostratigraphic formation from which the cataloged specimen was collected. The [National Geologic Map Database Geolex Search](https://ngmdb.usgs.gov/Geolex/search) is a great resource for the named lithostratigraphic units accepted by the USGS.<br></br>
**Examples:** Notch Peak, House Limestone, Fillmore, Chinle<br></br>
See Darwin Core's [formation](https://dwc.tdwg.org/terms/#dwc:formation)

### Member

The name of the lithostratigraphic member from which the cataloged item was collected. The [National Geologic Map Database Geolex Search](https://ngmdb.usgs.gov/Geolex/search) is a great resource for the named lithostratigraphic units accepted by the USGS.<br></br>
**Examples:** Lava Dam, Hellnmaria, Brown Mountain Sandstone<br></br>
See Darwin Core's [member](https://dwc.tdwg.org/terms/#dwc:member)

### Bed

The name of the lithostratigraphic bed from which the cataloged item was collected. The [National Geologic Map Database Geolex Search](https://ngmdb.usgs.gov/Geolex/search) is a great resource for the named lithostratigraphic units accepted by the USGS.<br></br>
**Example:** Harlem coal<br></br>
See Darwin Core's [bed](https://dwc.tdwg.org/terms/#dwc:bed)

### Taxon Environment

The depositional environment of the rock unit from which cataloged specimen was collected<br></br>
**Examples:** marine, lacustrine, non-marine, marine-non-marine

### Lithology

Field for terms to describe the types of rock/sediment from which the cataloged specimen was collected<br></br>
**Examples:** sandstone, mudstone, siltstone, shale<br></br>
See Darwin Core's [lithostratigraphicTerms](https://dwc.tdwg.org/terms/#dwc:lithostratigraphicTerms)

### Strat Remarks

Field to record additional details about the geology, stratigraphy, more detailed lithology description, palynological sampling info, core data, etc.

### Element

"Field to record type of plant organ cataloged specimen represents<br></br>
**Examples:** stem, strobilus, sterile leaf, fertile leaf, pinnule(s), rooting organ, rootlet, megasporangium, sporangium, spore, sterile axis, fertile axis, root

### Slide Properties

Field to record types of prepared slides of specimens, noting the type of preparation and mounting medium, and to provide England Finder coordinates for palynomorph slides<br></br>
**Examples:** strewn, petrographic thin-section, mounted peel

### Geological Context ID

An identifier for the set of information associated with a GeologicalContext (the location within a geological context, such as stratigraphy). May be a global unique identifier or an identifier specific to the data set<br></br>
**Example:** https://opencontext.org/subjects/e54377f7-4452-4315-b676-40679b10c4d9<br></br>
See Darwin Core's [geologicalContextID](https://dwc.tdwg.org/terms/#dwc:geologicalContextID)
