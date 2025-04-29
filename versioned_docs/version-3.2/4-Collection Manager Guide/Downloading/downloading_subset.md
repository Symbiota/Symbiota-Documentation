---
title: "Download a Subset of Data (Exporter)"
date: 2021-12-07
lastmod: 2025-01-31
draft: false
authors: ["Katie Pearson"]
keywords: ["download","exporter"]
---

:::info

This page describes how to find and use the Exporter tool, which allows you to download a subset of your data as a Darwin Core Archive.

:::

1. Navigate to your Administration Control Panel (My Profile > Occurrence Managment > name of collection).
2. Click Processing Tools.
3. Click the Exporter tab.
4. Use the Processing Status and additional filters to define the dataset you would like to download from your collection. You can also select whether you would like to download a strict Darwin Core Archive (Darwin Core) or an archive containing all Symbiota fields (Symbiota Native); whether you would like to determination history (identifications), multimedia (i.e., links to images), and/or occurrence attributes (if enabled); whether you would like the results in a ZIP file; and the file format and character set ([ISO-8859-1](https://en.wikipedia.org/wiki/ISO/IEC_8859-1) or [UTF-8](https://en.wikipedia.org/wiki/UTF-8)) for your download.
5. Click the Download Records button.

![Exporter Tool](/img/exportertool.PNG)

#### Downloading Specimens without Georeferences

The Exporter tool also has the option to download all records without georeference data. To do this, select Georeference Export from the dropdown menu in the Export Type box at the top right of the Exporter tool. Select the search terms/filters to apply to your download and click Download Records.


#### Downloading Records that have been Batch Georeferenced

For Snapshot collections (i.e., collections that do not manage their data live in the portal), there is also an option to download georeference data for specimens that have been batch georeferenced in the portal.  To do this, select Georeference Export from the dropdown menu in the Export Type box at the top right of the Exporter tool. Select the search terms/filters to apply to your download and click Download Records. The resulting file will include the following fields: 
* institutionCode
* collectionCode
* catalogNumber
* occurrenceId
* decimalLatitude
* decimalLongitude
* geodeticDatum
* coordinateUncertaintyInMeters
* verbatimCoordinates
* georeferencedBy
* georeferenceProtocol
* georeferenceSources
* georeferenceVerificationStatus
* georeferenceRemarks
* minimumElevationInMeters
* maximumElevationInMeters
* verbatimElevation
* localitySecurity
* localitySecurityReason
* modified
* processingStatus
* collId
* sourcePrimaryKey
* occid
* recordID.
