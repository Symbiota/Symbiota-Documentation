---
title: "Symbiota Data Fields"
date: 2014-07-21
lastmod: 2025-07-16
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

# Symbiota Data Fields

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
link="documents/SymbiotaDataFields_202533.csv"
label="Download full content as a CSV"
download={true}
style={{marginBottom: '2vh'}}
/>

# Standard Fields

## Collector Info

| ![Collector Info](/img/occeditor_collectorinfo.png)  |
| :-------------------------------------: |
| Collector Info section of the Occurrence Editor form |

### Catalog Number

The unique identifier (primary key) for the specimen record. This field should be used to store the barcode or the accession number (herbaria only). This field is enforced to be unique per collection.<br></br>
**Examples:** `WIS-L-0123456`, `ASUCOB0012345`<br></br>
See Darwin Core's [catalogNumber](https://dwc.tdwg.org/terms/#dwc:catalogNumber)

### Additional Identifier Values

Any other identifier for a specimen record that is not the central catalog number. This field is typically used to store the old catalog numbers, accession numbers, National Park identifiers, etc. Identifiers can be assigned a tag name to distinguish it from other identifiers (e.g. old accession #, NPS#, etc). These identifiers map best to dwc:otherCatalogNumbers definition, and thus included in the exports under this field. More information about this system can be found on the [Catalog Numbers documentation page](/docs/Editor_Guide/Editing_Searching_Records/catalog_numbers).<br></br>
**Examples:** `TUZI 3082` `NPS Acc #: GUIS-M-00126`<br></br>
See Darwin Core's [otherCatalogNumbers](https://dwc.tdwg.org/terms/#dwc:otherCatalogNumbers) and the [Alternative Identifiers extension](https://rs.gbif.org/extension/gbif/1.0/identifier.xml).

### Collector

The name of the person who collected the specimen or made the observation.<br></br>
**Examples:** `C.G. Pringle` `Goodding, L.N.` `John Wesley Powell`<br></br>
See Darwin Core's [recordedBy](https://dwc.tdwg.org/terms/#dwc:recordedBy)

### Associated Collectors

Other collectors that were present at the time of collection.<br></br>
**Examples:** `John R. Reeder, Alan Nelson`<br></br>
This field is not defined by the Darwin Core standard, which places primary and secondary collectors concatenated the recordedBy field.

### Number

The collection number assigned to the specimen by the collector.<br></br>
**Examples:** `1294` `12490b` `94-132`<br></br>
See Darwin Core's [recordNumber](https://dwc.tdwg.org/terms/#dwc:recordNumber)

### Date (start)

The date the specimen was collected or, if a range of dates is indicated, the first day in the range of collecting dates. While dates can be entered using your preferred format, the value will be converted and stored as an ISO-8601 numeric format (YYYY-MM-DD). Note that unknown month and days can be entered as "00". For example, a collection with a date of "March 1956" can be entered as "1956-03-00".<br></br>
**Examples:** `1983-09-15` `1983-07-00` `1934-00-00`<br></br>
See Darwin Core's [eventDate](https://dwc.tdwg.org/terms/#dwc:eventDate)

### End Date

The last date of collection, in the case of a range of collecting dates. While dates can be entered using your preferred format, the value will be converted and stored as an ISO-8601 numeric format (YYYY-MM-DD). Note that unknown month and days can be entered as `00`. For example, a collection with a date of "March 1956" can be entered as `1956-03-00`.<br></br>
**Examples:** `1983-09-15` `1983-07-00` `1934-00-00`<br></br>
See Darwin Core's [eventDate](https://dwc.tdwg.org/terms/#dwc:eventDate)

### Verbatim Date

The date of collection/observation exactly as provided on a label or in field notes. Particularly useful for non-standard date formats or date ranges.<br></br>
**Examples:** `Spring 1901` `March-April 1952` `late Sept. 1909`<br></br>
See Darwin Core's [verbatimEventDate](https://dwc.tdwg.org/terms/#dwc:verbatimEventDate)

## Latest Identification

| ![Collector Info](/img/occeditor_latestidentification.png)  |
| :-------------------------------------: |
| Latest Identification section of the Occurrence Editor form |

### Scientific Name

The Latin name of the specimen without the author. Could be anything from kingdom down to subspecies or variety, depending on the level of the identification.<br></br>
**Examples:** `Pinaceae` `Pinus` `Pinus edulis` `Pinus edulis var. fallax`<br></br>
See Darwin Core's [scientificName](https://dwc.tdwg.org/terms/#dwc:scientificName)

:::tip

When directly entering data into _Scientific Name_ using the Occurrence Editor, a dropdown menu may appear based on your portal's internal Taxonomic Thesaurus to aid data entry. Taxa not included in the dropdown list can still be entered and saved.

:::

### Author

The name of the person who first named the taxa. This field autofills after entering the scientific name. If the name entered in the Scientific Name field is present in the taxonomic thesaurus, this field will be automatically populated from the taxonomic thesaurus. Formatting convention may vary by discipline, e.g. botany vs. zoology.<br></br>
**Examples:** `L.` `A. Gray` `(Anderson, 1938)`<br></br>
See Darwin Core's [scientificNameAuthorship](https://dwc.tdwg.org/terms/#dwc:scientificNameAuthorship)

### Identification Qualifier

The determiner's expression of uncertainty in their identification. This will be listed on the label along with the scientific name.<br></br>
**Examples:** `cf.` `aff.` `?`<br></br>
See Darwin Core's [identificationQualifier](https://dwc.tdwg.org/terms/#dwc:identificationQualifier)

### Family

The family to which the taxon in Scientific Name belongs. If the name entered in the Scientific Name field is present in the taxonomic thesaurus, this field will be automatically populated from the taxonomic thesaurus.<br></br>
**Examples:** `Pinaceae` `Mephitidae`<br></br>
See Darwin Core's [family](https://dwc.tdwg.org/terms/#dwc:family)

### Identified By

The name of the person who identified the specimen. Also called a determiner.<br></br>
**Examples:** `Leslie R. Landrum`<br></br>
See Darwin Core's [identifiedBy](https://dwc.tdwg.org/terms/#dwc:identifiedBy)

### Date Identified

The date the identification was made. Date can be entered as free form text and do not need to be in a standard date format.<br></br>
**Examples:** `1992` `May 1992` `2 May 1992`<br></br>
See Darwin Core's [dateIdentified](https://dwc.tdwg.org/terms/#dwc:dateIdentified)

### Identification References

The reference source used to make the identification.<br></br>
**Examples:** `Nesom, Guy L. 2006. Flora of North America - Asteraceae. vol. 20`<br></br>
See Darwin Core's [identificationReferences](https://dwc.tdwg.org/terms/#dwc:identificationReferences)

### Identification Remarks

Any additional notes regarding the identification of the specimen.<br></br>
**Examples:** `petals pink but calyx length more characteristic of S. angustifolium` `determination based on size and shape of testes`<br></br>
See Darwin Core's [identificationRemarks](https://dwc.tdwg.org/terms/#dwc:identificationRemarks)

### Taxon Remarks

Any additional notes regarding the taxonomic name to which the specimen was identified. In biological collections, this field is often where vernacular names are stored.<br></br>
**Examples:** `Taxon likely no longer valid` `Smalley's wooly aster`<br></br>
See Darwin Core's [taxonRemarks](https://dwc.tdwg.org/terms/#dwc:taxonRemarks)

## Locality

| ![Collector Info](/img/occeditor_locality.png)  |
| :-------------------------------------: |
| Locality section of the Occurrence Editor form |

### Continent

The name of the continent in which the specimen was collected.<br></br>
**Examples:** `South America` `Australia`<br></br>
See Darwin Core's [continent](https://dwc.tdwg.org/terms/#dwc:continent)

### Water Body

The name of the water body in which the specimen was collected.<br></br>
**Examples:** `Pacific Ocean` `Black Sea`<br></br>
See Darwin Core's [waterBody](https://dwc.tdwg.org/terms/#dwc:waterBody)

### Island Group

The name of the island group in which the specimen was collected.<br></br>
**Examples:** `Hawaiian Islands` `Alexander Archipelago`<br></br>
See Darwin Core's [islandGroup](https://dwc.tdwg.org/terms/#dwc:islandGroup)

### Island

The name of the island on which the specimen was collected.<br></br>
**Examples:** `Cayo Coco` `Maui`<br></br>
See Darwin Core's [island](https://dwc.tdwg.org/terms/#dwc:island)

### Country

The name of the country in which the specimen was collected. To aid data entry, a dropdown menu will appear as one types, though names outside of the list can still be entered.<br></br>
**Examples:** `United States` `Brazil` `Togo`<br></br>
See Darwin Core's [country](https://dwc.tdwg.org/terms/#dwc:country)

### State/Province

The name of the state or province in which the specimen was collected. To aid data entry, a dropdown menu will appear as one types, though names outside of the list can still be entered.<br></br>
**Examples:** `New York` `Hidalgo`<br></br>
See Darwin Core's [stateProvince](https://dwc.tdwg.org/terms/#dwc:stateProvince)

### County

The name of the county in which the specimen was collected. To aid data entry, a dropdown menu will appear as one types, though names outside of the list can still be entered. For non-U.S. records, enter the next geographic region below state/province.<br></br>
**Examples:** `Maricopa` `Washington`<br></br>
See Darwin Core's [county](https://dwc.tdwg.org/terms/#dwc:county)

:::tip

When directly entering data into _Country_, _State/Province_, and _County_ using the Occurrence Editor, a dropdown menu may appear based on your portal's internal Geographic Thesaurus to aid data entry. Values not included in the dropdown list can still be entered and saved.

:::

### Municipality

The name of the municipality in which the specimen was collected. For specimens collected outside of the United States, enter the 4th level geographic designation.<br></br>
**Examples:** `Paradise Valley`<br></br>
See Darwin Core's [municipality](https://dwc.tdwg.org/terms/#dwc:municipality)

### Locality

The detailed location in which the specimen was collected.<br></br>
**Examples:** `9.5 miles NW of Sedona along Boynton Pass Rd.`<br></br>
See Darwin Core's [locality](https://dwc.tdwg.org/terms/#dwc:locality)

### Location ID

An identifier for the set of location information (data associated with dcterms:Location). May be a global unique identifier or an identifier specific to the dataset.<br></br>
**Examples:** `https://opencontext.org/subjects/768A875F-E205-4D0B-DE55-BAB7598D0FD1` `USNM loc. 2126`<br></br>
See Darwin Core's [locationID](https://dwc.tdwg.org/terms/#dwc:locationID)

### Location Remarks

Comments or notes about the locality.<br></br>
**Examples:** `Previously known as Mt. Evans` `Locality no longer accessible`<br></br>
See Darwin Core's [locationRemarks](https://dwc.tdwg.org/terms/#dwc:locationRemarks)

### Security

Selecting `Locality Security applied` from the dropdown meny will hide locality details below the level of county from unauthorized users. This is typically done because the species is rare or threatened, or because the collection location is private. Images or other media are also hidden to protect locality details that might be viewable from the label. Users that are logged into the system and have the necessary permission to view locality details (e.g. collection managers) will continue to have access to all data. Locality Security will automatically be applied if the species name is on a portal's Protected Species list (accessible via Sitemap). Selecting `Fully Security applied` will completely hide the record from all public users who do not have editor or administrator permissions for your collection. **Unless legal protections apply, this level of security is generally NOT recommended for most records, as it reduces the discoverability of your collections and obscures valuable data from research and public use.** Leaving the Security field at `Security not applied` will allow default settings to be applied as determined by the sensitive species administrators, which is the recommendation for most records. **Refer to the Collection Manager Guide for more information on how [data redaction works](/docs/Collection_Manager_Guide/Data_Publishing/redacting_obscuring_data) in Symbiota portals.**<br></br>
This field is not defined by the Darwin Core standard.

### Latitude and Longitude

The geographic latitude and longitude in decimal degrees. Latitudes from the southern hemisphere and longitudes in the western hemisphere (e.g. USA) should be entered as negative values. Click on the "Tools" button to enter the coordinates in the degree, minute, seconds (DMS) or the UTM formats. Decimal degrees are the preferred coordinate standard as defined by Darwin Core.<br></br>
**Examples:** `34.874022` `-111.75774`<br></br>
See Darwin Core's [decimalLatitude](https://dwc.tdwg.org/terms/#dwc:decimalLatitude) and [decimalLongitude](https://dwc.tdwg.org/terms/#dwc:decimalLongitude)

### Uncertainty

The accuracy of the georeference coordinates in meters (numeric value only). This is measured as the radius of a circle where the true point would be found if known. If coordinates are collected using a GPS, than the accuracy would be the error found within the GPS unit (usually around 10m). While previously collected specimens that have coordinates on the label recorded by the collector typically do not state the source of the coordinates (GPS, map, etc), it is typically a good assumption that the coordinates are accurate within one to two hundred meters. If the locality details are vague such as just "`Grand Canyon`, then the coordinates should be the centroid within the uncertainty encompassing the greater area where the specimen may have been collected. If the locality is `Boynton Canyon, Sedona`, the uncertainty would be about 1500 m. This field autofills when using GeoLocate for georeferencing.<br></br>
**Examples:** `42000` `100`<br></br>
See Darwin Core's [coordinateUncertaintyInMeters](https://dwc.tdwg.org/terms/#dwc:coordinateUncertaintyInMeters)

### Datum

The geographic system that was used when determining the coordinates. This field autofills when using [GeoLocate](http://www.museum.tulane.edu/geolocate/) or the Mapping tool for georeferencing.<br></br>
**Examples:** `NAD27` `NAD83` `WGS84`<br></br>
See Darwin Core's [geodeticDatum](https://dwc.tdwg.org/terms/#dwc:geodeticDatum)

### Verbatim Coordinates

Coordinate values as transcribed from a specimen label, locality leger, or field notes if they were not originally recorded decimal degrees. If your coordinates are in Degrees-Minutes-Seconds (DMS), Universal Transverse Mercator (UTM), or the Township-Range-Section" (TRS) format, click the "F" button to view the formatting tools. Fill in the appropriate box with the coordinates on your label and select the appropriate "Insert Values" button. Valid values in DMS or UTM formats will automatically convert into decimal degree values. If a value has previously been entered into the Verbatim Coordinates field, you can try to click the double arrows (&lt;&lt;) to the left of this field to try to auto-convert them into decimal degrees format. TRS coordinates cannot be automatically converted in the data entry form, but they may be converted into an appropriate georeference using the GEOLocate tool. For more information about this and about using the coordinate tools, [see this tutorial video](https://www.youtube.com/watch?v=XyYPYJ1guMY&t=70s).<br></br>
**Examples:** `34° 13.940' N 112° 2.370' W` `12 420944E 4064025N` `TRS: T40N R32E S29`<br></br>
See Darwin Core's [verbatimCoordinates](https://dwc.tdwg.org/terms/#dwc:verbatimCoordinates)

### Elevation in Meters

The elevation in meters at which the specimen was collected. Also called altitude. Use only the left field with the right field blank when a single elevation exists. Use the left field to indicate the minimum elevation in meters and the right field to indicate the maximum elevation in meters.<br></br>
**Examples:** `1400` `2000`<br></br>
See Darwin Core's [minimumElevationInMeters](https://dwc.tdwg.org/terms/#dwc:minimumElevationInMeters) and [maximumElevationInMeters](https://dwc.tdwg.org/terms/#dwc:maximumElevationInMeters)

### Verbatim Elevation

The verbatim elevation at which the specimen was collected. This is typically used to record an elevation measurement that was recorded in feet or an uncertainty designation. When the elevation in meters field is left blank, the value will automatically be converted to meters. Select the double arrows (&lt;&lt;) to replace the previously entered meters values.<br></br>
**Examples:** `4500ft` `4500 feet` `ca 4500'` `ca 2000m` `4500' +-300'`<br></br>
See Darwin Core's [verbatimElevation](https://dwc.tdwg.org/terms/#dwc:verbatimElevation)

### Depth in Meters

The range of depth below the local surface, in meters. Use the left field to indicate the minimum depth in meters and the right field to indicate the maximum depth in meters.<br></br>
**Examples:** `100` `1042`<br></br>
See Darwin Core's [minimumDepthInMeters](https://dwc.tdwg.org/terms/#dwc:minimumDepthInMeters) and [maximumDepthInMeters](https://dwc.tdwg.org/terms/#dwc:maximumDepthInMeters)

### Verbatim Depth

The original verbatim description of the depth below the local surface at which the specimen was collected.<br></br>
**Examples:** `100ft` `100 feet` `ca 100'` `ca 30m` `100' +-10'` `7 fathoms`<br></br>
See Darwin Core's [verbatimDepth](https://dwc.tdwg.org/terms/#dwc:verbatimDepth)

### Georeferenced By

The name (or username) of the person who georeferenced the specimen record. This field autofills when using GeoLocate for georeferencing.<br></br>
**Examples:** `Amanda Gonzales` `emakings` `acbarber`<br></br>
See Darwin Core's [georeferencedBy](https://dwc.tdwg.org/terms/#dwc:georeferencedBy)

### Georeference Sources

The tool or tools used to georeference and any references consulted to georeference the record.<br></br>
**Examples:** `GeoLocate` `Google Earth` `USGS 1:24000 Florence Montana Quad 1967`<br></br>
See Darwin Core's [georeferenceSources](https://dwc.tdwg.org/terms/#dwc:georeferenceSources)

### Georeference Remarks

Notes regarding the georeferencing of the specimen.<br></br>
**Examples:** `placed point at centroid of city, error radius to the extend of city boundaries as viewed on Google Satellite`<br></br>
See Darwin Core's [georeferenceRemarks](https://dwc.tdwg.org/terms/#dwc:georeferenceRemarks)

### Georeference Protocol

The source of the standards used to georeference.<br></br>
**Examples:** `Georeferencing Quick Guide. Zermoglio et al. 2020` `Engelbrecht, I. 2021. https://doi.org/10.3897/biss.5.73572`<br></br>
See Darwin Core's [georeferenceProtocol](https://dwc.tdwg.org/terms/#dwc:georeferenceProtocol)

### Georef Verification Status

A status used to indicate whether or not the geoference has been reviewed or verified.<br></br>
**Examples:** `reviewed` `not reviewed` `needs verification` `verified by collector`<br></br>
See Darwin Core's [georeferenceVerificationStatus](https://dwc.tdwg.org/terms/#dwc:georeferenceVerificationStatus)

## Misc

| ![Collector Info](/img/occeditor_misc.png)  |
| :-------------------------------------: |
| Misc section of the Occurrence Editor form |

### Habitat

The description of the habitat in which the specimen was collected.<br></br>
**Example:** `Wet areas along a small stream in chaparral` `deciduousForest; slope aspect: 154; slope gradient: 2.29; soil type order: Inceptisols`<br></br>
See Darwin Core's [habitat](https://dwc.tdwg.org/terms/#dwc:habitat)

### Substrate

The substrate on which the specimen was collected (mostly used for lichens, bryophytes, and zoological specimens).<br></br>
**Examples:** `on basalt` `trunk of oak`<br></br>
Darwin Core currently lumps this information into [dwc:habitat](#habitat).

### Associated Taxa

A list of the names of other species occurring with the collected specimen.<br></br>
**Examples:** `Quercus, Arctostaphylos, Ceanothus, Rhus, Eriogonum, Salvia`<br></br>
See Darwin Core's [associatedTaxa](https://dwc.tdwg.org/terms/#dwc:associatedTaxa)

### Description

A physical description of the specimen at the time of collection. This often includes information that can be lost or difficult to observe after the collection and preservation process. **For fossil collections:** A description that contextualizes what the cataloged fossil material physically represents.<br></br>
**Examples (botany):** `Shrub 3 m tall` `corolla yellow`<br></br>
**Examples (fossils):** `Bones are included in the composite mount of USNM V 10304` `1 plastercast with 5 remnants of the original specimen`<br></br>

This field is not supported by Darwin Core and is concatenated into [occurrenceRemarks](#notes) when downloaded as a Darwin Core Archive.

### Notes

Any additional notes regarding the specimen occurrence at a place in time. Avoid using this field unless a more appropriate data field does not exist.<br></br>
**Examples:** `common in this region` `this specimen collected as part of master's thesis project`<br></br>
See Darwin Core's [occurrenceRemarks](https://dwc.tdwg.org/terms/#dwc:occurrenceRemarks)

### Dynamic Properties

A list of additional measurements, facts, characteristics, or assertions about the specimen in a format that allows programmatic parsing of the data, e.g. in separator-delimited key:value pairs.<br></br>
**Examples:** `awnLengthInMeters=0.014, heightInMeters=1.5, relativeHumidity=28, airTemperatureInC=22` `totalLength: NA | weight: 25 g`<br></br>
See Darwin Core's [dynamicProperties](https://dwc.tdwg.org/terms/#dwc:dynamicProperties)

### Life Stage

The age or stage of the organism at the time of collection/observation (typically used for zoological collections).<br></br>
**Examples:** `larva` `juvenile` `adult`<br></br>
See Darwin Core's [lifeStage](https://dwc.tdwg.org/terms/#dwc:lifeStage)

### Sex

The biological sex of the occurrence.<br></br>
**Examples:** `female` `male` `gynandromorph`<br></br>
See Darwin Core's [sex](https://dwc.tdwg.org/terms/#dwc:sex)

### Individual Count

The number of individuals represented by the occurrence. **For fossil collections:** include a quantity descriptor.<br></br>
**Examples:** `2` `15`<br></br>
**Examples (fossils only):** `2 item(s)` `200 estimate`

See Darwin Core's [individualCount](https://dwc.tdwg.org/terms/#dwc:individualCount)

### Sampling Protocol

The names and references to methods used to collect or sample an occurrence.<br></br>
**Examples:** `UV light trap` `mist net` `Takats et al. 2001. Guidelines for Nocturnal Owl Monitoring in North America. Beaverhill Bird Observatory and Bird Studies Canada, Edmonton, Alberta. 32 pp., http://www.bsc-eoc.org/download/Owl.pdf`<br></br>
See Darwin Core's [samplingProtocol](https://dwc.tdwg.org/terms/#dwc:samplingProtocol)

### Preparations

Preparation or preservation method for a specimen. While no universal controlled vocabulary currently exists for this field, a practical example for biological collections can be found [here](https://github.com/tdwg/cd/issues/64#issuecomment-781653290).<br></br>
**Examples:** `in ethanol` `study skin` `pressed and dried` `part-counterpart`<br></br>
See Darwin Core's [preparations](https://dwc.tdwg.org/terms/#dwc:preparations)

### Phenology (Reproduction Condition)

The reproductive stage the specimen is in.<br></br>
**Examples:** `flower` `fruit` `sterile`<br></br>
See Darwin Core's [reproductiveCondition](https://dwc.tdwg.org/terms/#dwc:reproductiveCondition)

### Behavior

The behavior exhibited by the organism/occurrence at the time of collection/observation.<br></br>
**Examples:** `flying` `sitting on eggs`<br></br>
See Darwin Core's [behavior](https://dwc.tdwg.org/terms/#dwc:behavior)

### Vitality

An indication of whether the organism was alive or dead at the time of collection or observation.<br></br>
**Examples:** `live` `dead`<br></br>
See Darwin Core's [vitality](https://dwc.tdwg.org/terms/#dwc:vitality)

### Establishment Means

The state or quality of establishment of the individual at the time of collection.<br></br>
**Examples:** `cultivated` `invasive` `native`<br></br>
See Darwin Core's [establishmentMeans](https://dwc.tdwg.org/terms/#dwc:establishmentMeans)

### Cultivated Checkbox

Check this box when the organism was established with the aid of humans at the time of collection. This true/false field enables the ability to filter non-native or naturalized species.<br></br>
This field is not currently supported by Darwin Core and is therefore not included in Darwin Core exports.

## Curation

| ![Collector Info](/img/occeditor_curation.png)  |
| :-------------------------------------: |
| Curation section of the Occurrence Editor form |

### Type Status

The type designation of a specimen, whether it is a name-bearing specimen or part of a type series.<br></br>
**Examples:** `holotype` `isotype` `paratype`<br></br>
See Darwin Core's [typeStatus](https://dwc.tdwg.org/terms/#dwc:typeStatus)

### Disposition

The location or status of the physical specimen with respect to a collection.<br></br>
**Examples:** `missing` `on loan` `in collection` `stored under genus "Mimulus"`<br></br>
See Darwin Core's [disposition](https://dwc.tdwg.org/terms/#dwc:disposition)

### Occurrence ID (override)

The Globally Unique Identifier (GUID) for the specimen. This value should be stable and uniquely identify the specimen relative to all other specimens within the world. If your collection is set to have occurrenceIDs/GUIDs generated by the portal (this is the suggested setting for all live-managed collections), this field will appear blank in the Occurrence Editor form. To view the occurrenceID value associated with your specimen, click the Public Display link at the top of the page.<br></br>
**Examples:** `000866d2-c177-4648-a200-ead4007051b9` `urn:catalog:UWBM:Bird:89776`<br></br>
See Darwin Core's [occurrenceid](https://dwc.tdwg.org/terms/#dwc:occurrenceid)

### Field Number

An identifier given to the collecting event in the field. This number often serves as a link between the event indicated in the field notes and the specimen record.<br></br>
**Examples:** `2024-04-05-00045` `JOSHUATREE_35` `2025AH0718-01`<br></br>
See Darwin Core's [fieldnumber](https://dwc.tdwg.org/terms/#dwc:fieldnumber)

### Language

The language of the label information or record.<br></br>
**Examples:** `en` `es` `pt` `fr`<br></br>
See Darwin Core's [language](https://dwc.tdwg.org/terms/#dc:language)

### Label Project

A value used to group records from a specific project or category for internal use. Once a value is entered in this field, all records with that same value can be printed at one time using the [batch label printing tools](/docs/Editor_Guide/Label_Customization)<br></br>
**Examples:** `Plants of Sedona 2012` `PCC TCN 2018`<br></br>
This field does not map the Darwin Core and is excluded from Darwin Core Archive exports.

### Dupe Count

The number of duplicate botanical specimens created. This will dictate the number of labels printed for specimen.<br></br>
**Examples:** `10` `2`<br></br>
See Darwin Core's [duplicatequantity](https://dwc.tdwg.org/terms/#dwc:duplicatequantity)

### Institution Code (override)

The acronym of the institution that stewards this occurrence. Only enter a value if it differs from what is entered in the collection's metadata in the portal.<br></br>
**Examples:** `NMNH` `FLMNH`<br></br>
See Darwin Core's [institutionCode](https://dwc.tdwg.org/terms/#dwc:institutionCode)

### Collection Code (override)

The acronym of the collection that stewards this occurrence. Only enter a value if it differs from what is entered in the collection's metadata in the portal.<br></br>
**Examples:** `Herps` `F`<br></br>
See Darwin Core's [collectionCode](https://dwc.tdwg.org/terms/#dwc:collectionCode)

### Owner Code (override)

The name (or acronym) in use by the institution having ownership of the object(s) or information referred to in the record. Only enter a value if it differs from what is entered in the collection's metadata in the portal.<br></br>
**Examples:** `NPS` `BLM` `NMNH`<br></br>
See Darwin Core's [ownerInstitutionCode](https://dwc.tdwg.org/terms/#dwc:ownerInstitutionCode)

### Basis of Record

The type of record the specimen is classified as. For collections of physically preserved specimens, this field defaults to `PreservedSpecimen` or `FossilSpecimen` depending on how your collection is configured; for observation projects, the default is `HumanObservation`.<br></br>
**Examples:** `PreservedSpecimen` `LivingSpecimen` `HumanObservation` `MaterialCitation` `FossilSpecimen`<br></br>
See Darwin Core's [basisOfRecord](https://dwc.tdwg.org/terms/#dwc:basisOfRecord)

### Processing Status

The status of the digital record. This field is intended to facilitate collection-specific internal data management and review. The values used are dictated by the specific workflow of each institution.<br></br>
**Examples:** `Reviewed` `Pending Review` `Stage 1`<br></br>
This field does not map the Darwin Core and is excluded from Darwin Core Archive exports.

### Data Generalizations

Internal notes associated with the occurrence record. Data entered in this field is not visible on the public search form, but it can be viewed in a Darwin Core Archive download.<br></br>
**Examples:** `data reviewed on 2025-05-12` `potential issues with georeferencing, to be reviewed by curator`<br></br>
See Darwin Core's [dataGeneralizations](https://dwc.tdwg.org/terms/#dwc:dataGeneralizations)

## Special Module-specific Fields

:::info

The following data fields correspond to modules that may not be available in all Symbiota portals. Some modules may require community discussion to activate. Contact your Portal Manager for more information.

:::

## Material Sample

| ![Material Sample Module](/img/materialsampleblank.png) |
| :-----------------------------------------------------: |
|  Material Sample tab on the Occurrence Editor form      |

:::note

Controlled vocabularies for Material Sample data fields are managed per portal, and the suggested examples provided below are derived from vocabularies used for the [NEON Biorepository](https://biorepo.neonscience.org/portal/). These vocabularies vary by portal, and modifications may require community input. Contact your Portal Administrator for more information.

:::

### Sample Type

The sample type, which is often anatomical in nature. Controlled vocabulary enforced on a per-portal basis.<br></br>
**Examples:** `skull` `liver` `gastrointestinal tract` `genetalia` `DNA`<br></br>
See the GGBN Material Sample Extension's [materialSampleType](http://data.ggbn.org/schemas/ggbn/terms/materialSampleType)

### Catalog Number / Barcode

A unique identifier for the material sample, analagous to _catalogNumber_ for specimen occurrences.<br></br>
**Examples:** `D00000044967` <br></br>
See Darwin Core's [catalogNumber](https://dwc.tdwg.org/terms/#dwc:catalogNumber)

### Material Sample ID (GUID)

A globally unique identifier for the material sample. In the absence of a persistent global unique identifier, construct one from a combination of identifiers in the record that will make this identifier globally unique.<br></br>
**Example:** `06809dc5-f143-459a-be1a-6f03e63fc083`

### Sample Condition

The physical condition of the sample. Use of a controlled vocabulary is recommended but not required.<br></br>
**Examples:** `very poor` `poor` `fair` `good` `unknown`<br></br>
See the GGBN Material Sample Extension's [quality](http://data.ggbn.org/schemas/ggbn/terms/quality)

### Disposition

The current state of a sample with respect to its collection. Controlled vocabulary enforced.<br></br>
**Examples:** `in collection` `being processed` `consumed` `on loan` `deaccessioned` `missing`

### Preservation Type

The physical storage/preservation method of a sample. Controlled vocabulary enforced.<br></br>
**Examples:** `dry` `ethanol` `liquid nitrogen` `pinned/pointed`

### Preparation Date

The date of a sample's physical preparation. Dates in this field visually conform to MM/DD/YYYY formatting. Manual data entry into this field is validated using a calendar form.<br></br>
**Examples:** `08/01/2022` `05/14/2025`

### Prepared By

Name of the individual who prepared a sample, selected from the dropdown list. The individual must have an user account in the portal to be recorded in this field.<br></br>
**Examples:** `Liao, Rosie` `Johnston, Andrew`

### Preparation Details

Notes providing more context about the physical preparation and condition of the sample.<br></br>
**Examples:** `upper and lower GI tract` `kidney, left, whole` `prepared with borax`

### Individual Count

The number of loanable objects associated with the sample, i.e. all pieces of the sample assigned to the same unique materialSampleID (see above).<br></br>
**Examples:** `0` `1` `100`

### Sample Size

Quantification of the sample beyond counted number of objects, e.g. dry weight.<br></br>
**Examples:** `200 uL` `20 g`<br></br>
See GGBN Material Sample Extension's [samp_size](http://gensc.org/ns/mixs/samp_size).

### Storage Location

A sample's physical storage location with respect to its collection.<br></br>
**Examples:** `Freezer 3` `Oversize Storage` `Cab011 | Dwr002`

### Remarks

Additional notes, comments, and context unique to a sample that cannot be captured by other existing data fields.<br></br>
**Examples:** `genotype sampling` `left jaw consumed in research` `with post-cranial skeleton`

## Paleontology

| ![Paleo Module](/img/paleo_module.png)  |
| :-------------------------------------: |
| Paleontology/Geological Context fields on the Occurrence Editor form |

### Early Interval and Late Interval
The earliest (geologically oldest, i.e. "Early Interval") and latest (geologically youngest, i.e. "Late Interval") possible intervals of geological time attributable to the stratigraphic horizon from which the cataloged fossil material was collected. Every _Early Interval_ value entered should have a corresponding _Late Interval_ value; likewise, these values should be logical, i.e. the _Early Interval_ value should be either the same as or geologically older than the _Late Interval_ value. Use values from the [ICS time scale](https://stratigraphy.org/chart) to maximize data interoperability unless directed differently by your Portal Manager. Correctly entered values will automatically populate the hierarchical series of corresponding Darwin Core terms (see examples below).<br></br>
**Example 1:** _Early Interval_ = `Eocene` and _Late Interval_ = `Oligocene`<br></br>
**Example 2:** _Early Interval_ = `Eocene` and _Late Interval_ = `Eocene`<br></br>
**Incorrect (missing value)**: _Early Interval_ = `Eocene` and _Late Interval_ = null/blank <br></br>
**Incorrect (illogical order)**: _Early Interval_ = `Oligocene` and _Late Interval_ = `Eocene`

For _**Early Interval**_, see also Darwin Core’s [earliestEonOrLowestEonothem](https://dwc.tdwg.org/terms/#dwc:earliestEonOrLowestEonothem), [earliestEraOrLowestErathem](https://dwc.tdwg.org/terms/#dwc:earliestEraOrLowestErathem), [earliestPeriodOrLowestSystem](https://dwc.tdwg.org/terms/#dwc:earliestPeriodOrLowestSystem), [earliestEpochOrLowestSeries](https://dwc.tdwg.org/terms/#dwc:earliestEpochOrLowestSeries), and [earliestAgeOrLowestStage](https://dwc.tdwg.org/terms/#dwc:earliestAgeOrLowestStage).

For _**Late Interval**_, see also Darwin Core’s [latestEonOrHighestEonothem](https://dwc.tdwg.org/terms/#dwc:latestEonOrHighestEonothem), [latestEraOrHighestErathem](https://dwc.tdwg.org/terms/#dwc:latestEraOrHighestErathem), [latestPeriodOrHighestSystem](https://dwc.tdwg.org/terms/#dwc:latestPeriodOrHighestSystem), [latestEpochOrHighestSeries](https://dwc.tdwg.org/terms/#dwc:latestEpochOrHighestSeries), and [latestAgeOrHighestStage](https://dwc.tdwg.org/terms/#dwc:latestAgeOrHighestStage).

### Late Interval

See above for [_Early Interval_ and _Late Interval_](#early-interval-and-late-interval).

### Absolute Age

The numerically resolved age of the cataloged fossil material in years determined using absolute dating techniques, such as radiocarbon/carbon-14 dating, K-Ar, U-Pb, and Ar-Ar dating, etc.<br></br>
**Examples:** `20 Ma` `75 ka` `10.5 – 12.7 +/- 0.5 Ma`

### Storage Age

Physical storage location of the cataloged fossil material within the collection space.<br></br>
**Examples:** `Cabinet: 1 | Tray 4` `Miocene Cabinet` `Bridgerian`

### Local Stage
The name of an interval in geological time that is used locally or regionally but isn’t necessarily internationally accepted, such as a North American Land Mammal Age.<br></br>
**Examples:** `Barstovian` `Povolzhian` `Ulatsian` `Helvetian`

### Biota

The name given to various collections of fossils of the same geological time interval as the cataloged fossil material, typically from one or more localities within a specific geographic area.<br></br>
**Examples:** `Chalk Bluffs` `Stewart Valley` `Bridge Creek` `Mazon Creek`

### Biostratigraphy

The name of the [biostratigraphic unit](https://stratigraphy.org/guide/bio) from which the cataloged fossil material was collected.<br></br>
**Examples:** `Wa0` `Uvigerinella sparsicostata Zone` `Ogygiocaris`<br></br>
See Darwin Core's [lowestBiostratigraphicZone](https://dwc.tdwg.org/terms/#dwc:lowestBiostratigraphicZone) and [highestBiostratigraphicZone](https://dwc.tdwg.org/terms/#dwc:highestBiostratigraphicZone)

### Taxon Environment

The depositional environment of the rock unit from which the cataloged fossil material was collected. A controlled vocabulary is enforced.<br></br>
**Examples:** `marine` `non-marine` `marine and non-marine`

### Group

The name of the lithostratigraphic group from which the cataloged fossil material was collected. Data providers may wish to refer to the [National Geologic Map Database Geolex Search](https://ngmdb.usgs.gov/Geolex/search) to standardize values according to lithostratigraphic names accepted by the US Geological Survey.<br></br>
**Examples:** `Bathurst` `Lower Wealden` `Monte Cristo` `Contra Costa` `Panoche`<br></br>
See Darwin Core's [group](https://dwc.tdwg.org/terms/#dwc:group)

### Formation

The name of the lithostratigraphic formation from which the cataloged fossil material was collected. Data providers may wish to refer to the [National Geologic Map Database Geolex Search](https://ngmdb.usgs.gov/Geolex/search) to standardize values according to lithostratigraphic names accepted by the US Geological Survey.<br></br>
**Examples:** `Notch Peak` `House Limestone` `Fillmore` `Chinle`<br></br>
See Darwin Core's [formation](https://dwc.tdwg.org/terms/#dwc:formation)

### Member

The name of the lithostratigraphic member from which the cataloged fossil material was collected. Data providers may wish to refer to the [National Geologic Map Database Geolex Search](https://ngmdb.usgs.gov/Geolex/search) to standardize values according to lithostratigraphic names accepted by the US Geological Survey.<br></br>
**Examples:** `Lava Dam` `Hellnmaria` `Brown Mountain Sandstone`<br></br>
See Darwin Core's [member](https://dwc.tdwg.org/terms/#dwc:member)

### Bed

The name of the lithostratigraphic bed from which the cataloged fossil material was collected. Data providers may wish to refer to the [National Geologic Map Database Geolex Search](https://ngmdb.usgs.gov/Geolex/search) to standardize values according to lithostratigraphic names accepted by the US Geological Survey.<br></br>
**Example:** `Harlem coal`<br></br>
See Darwin Core's [bed](https://dwc.tdwg.org/terms/#dwc:bed)

### Lithology

The rock/sediment types from which the cataloged fossil material was collected.<br></br>
**Examples:** `sandstone` `mudstone` `siltstone` `shale`<br></br>

### Stratigraphic Remarks

Additional details about the cataloged fossil material’s geological and/or stratigraphic context that cannot be captured using other fields, such as more detailed information about where a specimen was collected in relation to a measured stratigraphic section or context for palynological sampling, core data, etc.<br></br>
**Examples:** `Fossil collected ~1.5m from the base of the stratigraphic section originally described by Alderson, 1981.` `Specimen collected 150 feet below top of unit.`<br></br>

### Element

The anatomical element(s) represented by the cataloged fossil material. Recommendation is to use a [discipline-specific controlled vocabulary](https://drive.google.com/drive/folders/1aNHpsLJLuVOubVmbohOZk2VbfDv3BlLH?usp=drive_link) and to pipe-separate distinct values. Record more verbose anatomical descriptions in [_Description_](#description).<br></br>
**Examples (invertebrates):** `pygidium/pygidia` `thorax`<br></br>
**Examples (vertebrates):** `skull: dentary` `skull: maxilla` `vertebra: centrum`<br></br>
**Examples (paleobotany):** `stem` `strobilus` `root` `pinnule(s)`<br></br>
**Examples (ichnofossils):** `vertebrate trackway`<br></br>

### Slide Properties

 Information about prepared slides derived from the cataloged fossil material, noting details like the type of preparation and mounting medium. England Finder coordinates may be recorded in this field, e.g. for palynomorph slides.<br></br>
**Examples:** `strewn` `petrographic thin-section` `mounted peel`

### Geological Context ID

An identifier for the set of information associated with the cataloged fossil material’s GeologicalContext, e.g. _Group_, _Formation_, _Member_, _Bed_, _Early/Late Interval_. Ideally, this should be a global unique identifier or an identifier specific to the data set.<br></br>
**Example:** `https://opencontext.org/subjects/e54377f7-4452-4315-b676-40679b10c4d9` `https://macrostrat.org/sift/#/strat_name_concept/8320`<br></br>
See Darwin Core's [geologicalContextID](https://dwc.tdwg.org/terms/#dwc:geologicalContextID)
