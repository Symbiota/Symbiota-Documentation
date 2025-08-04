---
title: "Data Quality Toolkit"
date: 2024-03-20
lastmod: 2024-07-19
draft: false
authors: ["Katie Pearson"]
keywords: ["QA", "QC", "quality control", "error checking"]
sidebar_postion: 50
---

import ReactPlayer from "react-player";

:::info

This page includes several common data quality errors that you can find and fix in your dataset using some creative searching and/or existing data quality tools. Data quality issues are grouped into data categories.

:::

For more help with data quality, see the following resources:

- [Bob Mesibov's Data Cleaner's Cookbook](https://www.datafix.com.au/cookbook/)
- [GBIF's data quality flags](https://data-blog.gbif.org/post/issues-and-flags/)
- [iDigBio's data quality flags](https://github.com/iDigBio/idigbio-search-api/wiki/Data-Quality-Flags)

### Table of Contents

- [Catalog Numbers and Other Identifiers](/Editor_Guide/data_quality_toolkit#catalog-numbers-and-other-identifiers)
  - [Duplicate Catalog Numbers](/Editor_Guide/data_quality_toolkit#duplicate-catalog-numbers)
- [Dates](/Editor_Guide/data_quality_toolkit#dates)
  - [Date Hasn't Happened Yet](/Editor_Guide/data_quality_toolkit#date-hasnt-happened-yet)
  - [Date is Suspiciously Old](/Editor_Guide/data_quality_toolkit#date-is-suspiciously-old)
  - [Identified Date Earlier than Collected Date](/Editor_Guide/data_quality_toolkit#identified-date-earlier-than-collected-date)
  - [Year, Month, and Day Values Do Not Match Date](/Editor_Guide/data_quality_toolkit#year-month-and-day-values-do-not-match-date)
- [Geography](/Editor_Guide/data_quality_toolkit#geography)
  - [Coordinates are Zero](/Editor_Guide/data_quality_toolkit#coordinates-are-zero)
  - [Coordinates Do Not Fall Within Named Geographic Unit](/Editor_Guide/data_quality_toolkit#coordinates-do-not-fall-within-named-geographic-unit)
  - [Georeference Metadata with no Associated Georeference](/Editor_Guide/data_quality_toolkit#georeference-metadata-with-no-associated-georeference)
  - [Elevation is Unlikely](/Editor_Guide/data_quality_toolkit#elevation-is-unlikely)
  - [Improperly Negated Latitudes/Longitudes](/Editor_Guide/data_quality_toolkit#improperly-negated-latitudeslongitudes)
  - [Invalid Coordinates](/Editor_Guide/data_quality_toolkit#invalid-coordinates)
  - [Lower Geography Values are Provided, but No Higher Geography](/Editor_Guide/data_quality_toolkit#lower-geography-values-are-provided-but-no-higher-geography)
  - [Minimum and Maximum Elevation Values Mismatched](/Editor_Guide/data_quality_toolkit#minimum-and-maximum-elevation-values-mismatched)
  - [Mismatched Country and CountryCode Values](/Editor_Guide/data_quality_toolkit#mismatched-country-and-countrycode-values)
  - [Mismatched Geographic Terms](/Editor_Guide/data_quality_toolkit#mismatched-geographic-terms)
  - [Missing Geodetic Datum](/Editor_Guide/data_quality_toolkit#missing-geodetic-datum)
  - [Missing Latitudes/Longitudes](/Editor_Guide/data_quality_toolkit#missing-latitudeslongitudes)
  - [Misspelled Geographic Unit Names](/Editor_Guide/data_quality_toolkit#misspelled-geographic-unit-names)
- [Taxonomy](/Editor_Guide/data_quality_toolkit#taxonomy)
  - [Misspelled or Invalid Taxonomic Names](/Editor_Guide/data_quality_toolkit#misspelled-or-invalid-taxonomic-names)
  - [Unknown Higher Taxonomy](/Editor_Guide/data_quality_toolkit#unknown-higher-taxonomy)
- [Other Issues](/Editor_Guide/data_quality_toolkit#other-issues)
  - [Incorrect Character Encodings](/Editor_Guide/data_quality_toolkit#incorrect-character-encodings)
  - [Incorrect Line Endings](/Editor_Guide/data_quality_toolkit#incorrect-line-endings)
  - [Invalid Individual Count](/Editor_Guide/data_quality_toolkit#invalid-individual-count)
  - [Non-standardized BasisOfRecord Values](/Editor_Guide/data_quality_toolkit#non-standardized-basisofrecord-values)
- [Recordings](/Editor_Guide/data_quality_toolkit#recordings)

### Catalog Numbers and Other Identifiers

#### Duplicate Catalog Numbers

**Problem:** The same catalog number is used multiple times within your dataset. (This problem may or may not be intentional, depending on your collection's policies. It is generally best to not duplicate catalog numbers, when possible).

**Solution:** Use the [duplicate catalog number tool](/Collection_Manager_Guide/Data_Cleaning/duplicate_catalog_numbers) to view, edit, and/or merge duplicates. Note that only users with administrator permissions can use this tool.

### Dates

#### Date Hasn't Happened Yet

**Problem:** The date the specimen was collected (often designated using the [eventDate](https://dwc.tdwg.org/terms/#dwc:eventDate) field) is in the future.

**Solution:** There are two ways you can find records with this problem:

_Method 1:_

1. Navigate to the [Record Search Form](/Editor_Guide/Editing_Searching_Records) for your collection.
2. In the Sort By field, select Date. Then select "descending" in the second dropdown list.

![Screenshot of Sorting by Date](/img/SortByDateDescending.png)

3. Click Display Table. After the page loads, the highest dates will be listed at the top of the resulting table. Edit these records by clicking the link in the Symbiota ID column (far left).

:::tip

Click the box and arrow icon to the right of the Symbiota ID number to open the record in a new window. That way, you will not need to re-conduct your search after editing every record.

:::

_Method 2:_

1. Navigate to the public search page of your portal. This is most commonly done from the home page by selecting "Search" or "Search Collections" from the header menu.
2. If you are taken to a list of collections, check the "Select/Deselect all collections" box to deselect all the collections, then check the box next to your collection. Click the Search button. If you are not taken to a list of collections, proceed to step 3.
3. In the Collector Criteria (or Collecting Event) section, enter today's date in the first Collection Date field (or the Collection Start Date field) and 9999-12-31 in the second field (or the Collection End Date field).
4. If you see a "Collections" section of the search page, check the "Select/Deselect all collections" box to deselect all the collections, then check the box next to your collection. If there is no "Collections" section on the search page, you should have already selected your collection in step 2.
5. Click the List Display button (or the Search button, if provided).
6. The search results will show you all specimens supposedly collected after today's date. You can view and edit these records by clicking the "Full Record Details" link underneath the specimen's summary, then clicking the Occurrence Editor link on the resulting pop-up window.

![Screenshot of Occurrence Editor Link from Public Display](/img/OccurrenceEditorLinkFromPublicDisplay.png)

#### Date is Suspiciously Old

**Problem:** The date the specimen was collected (often designated using the [eventDate](https://dwc.tdwg.org/terms/#dwc:eventDate[) field) is outside the expected historical date range. The expected date range depends on the institution, but it is unlikely that most collections have specimens with dates prior to 1600.

**Solution:** See the methods described in the [Date Hasn't Happened Yet](/Editor_Guide/data_quality_toolkit#date-hasnt-happened-yet) section, but do the following modifications:

_Method 1:_

In step 2, select "ascending" in the second dropdown list in the Sort By field. You will also likely want to filter out records without dates by selecting Date from Custom Field 1 and selecting IS NOT NULL from the second dropdown list. This will remove any blank dates from your search results, which would normally show up at the beginning of your ascending list.

_Method 2:_

In step 3, enter 0001-01-01 in the first Collection Date field (or the Collection Start Date field) and the earliest date you think would be possible in your collection (e.g., 1700-01-01) in the second field (or the Collection End Date field).

#### Identified Date Earlier than Collected Date

**Problem:** The date the specimen was identified (dateIdentified field) is earlier than the date the specimen was collected (eventDate).

**Solution:** This problem cannot be identified using Symbiota portal tools. To locate records with this issue, download your data from the [public search page](/User_Guide/Downloading/download_data), as a [backup file](/Collection_Manager_Guide/Downloading/downloading_copy), or using the [exporter tool](/Collection_Manager_Guide/Downloading/downloading_subset). You can then use a spreadsheet program to compare the dateIdentified to the eventDate field (see Excel instructions [here](https://www.idigbio.org/wiki/index.php/Excel_Data_Quality_Toolkit#Identified_Date_Earlier_than_Collected_Date)).

#### Year, Month, and Day Values Do Not Match Date

**Problem:** The event [year](https://dwc.tdwg.org/terms/#dwc:year), [month](https://dwc.tdwg.org/terms/#dwc:month), and [day](https://dwc.tdwg.org/terms/#dwc:day) values do not match the provided [event date](https://dwc.tdwg.org/terms/#dwc:eventDate). The event date is often the date of collection for preserved specimens.

**Solution:** This problem cannot be identified using Symbiota portal tools. To locate records with this issue, download your data from the [public search page](/User_Guide/Downloading/download_data), as a [backup file](/Collection_Manager_Guide/Downloading/downloading_copy), or using the [exporter tool](/Collection_Manager_Guide/Downloading/downloading_subset). You can then use a spreadsheet program to compare the dateIdentified to the eventDate field (see Excel instructions [here](https://www.idigbio.org/wiki/index.php/Excel_Data_Quality_Toolkit#Year,_Month,_and_Day_Values_Do_Not_Match_Date)).

### Geography

#### Coordinates are Zero

**Problem:** The provided latitude and/or longitude values are 0.

**Solution:**

1. Navigate to the [Record Search Form](/Editor_Guide/Editing_Searching_Records) for your collection.
2. In Custom Field 1, select Decimal Latitude from the first dropdown menu, select EQUALS from the second dropdown menu, and enter 0 into the blank field.
3. Either individually edit erroneous records by clicking the link in the Symbiota ID column (far left), or batch edit all entries using the [Batch Editing Tool](/Collection_Manager_Guide/Editing_Occurrences/batch_editing).
4. Repeat steps 2 and 3 for the Decimal Longitude field. Alternatively, you can search for records with 0 for both latitude and longitude by adding another custom search term. To do so, click the pencil icon to the right of Custom Field 1 and adjust the fields of Custom Field 2 accordingly.

#### Coordinates Do Not Fall Within Named Geographic Unit

**Problem:** The provided coordinates do not fall within the geographic boundaries of the named country, state, and/or county.

**Solution:** The problem cannot currently be identified using Symbiota portal tools. We recommend using the [GBIF Reverse Geocoding API](https://github.com/gbif/geocode) to verify coordinate-country matching, or by simply [publishing your data to GBIF](/Collection_Manager_Guide/Data_Publishing/publishing_gbif) and viewing the data quality flags of your dataset.

#### Georeference Metadata with no Associated Georeference

**Problem:** Metadata fields regarding coordinates, such as [coordinateUncertaintyInMeters](https://dwc.tdwg.org/terms/#dwc:coordinateUncertaintyInMeters), [georeferenceProtocol](https://dwc.tdwg.org/terms/#dwc:georeferenceProtocol), [georeferenceSources](https://dwc.tdwg.org/terms/#dwc:georeferenceSources), [georeferencedBy](https://dwc.tdwg.org/terms/#dwc:georeferencedBy), [georeferenceRemarks](https://dwc.tdwg.org/terms/#dwc:georeferenceRemarks), and [geodeticDatum](https://dwc.tdwg.org/terms/#dwc:geodeticDatum) are provided, but no coordinates are present. This is sometimes intentional, particularly when georeferencedBy and georeferencedRemarks are used to indicate whether a record was purposefully not georeferenced. However, it is rare that the other metadata fields can be used without associated coordinates (i.e., [decimalLatitude](https://dwc.tdwg.org/terms/#dwc:decimalLatitude), [decimalLongitude](https://dwc.tdwg.org/terms/#dwc:decimalLongitude), or [verbatimCoordinates](https://dwc.tdwg.org/terms/#dwc:verbatimCoordinates)).

**Problem:**

1. Navigate to the [Record Search Form](/Editor_Guide/Editing_Searching_Records) for your collection.
2. In Custom Field 1, select Decimal Latitude from the first dropdown menu and select IS NULL from the second dropdown menu.
3. Click the pencil icon to the right of Custom Field 1 to add another custom field.
4. In Custom Field 2, select the georeference metadata field you would like to compare (see list of suggestions above) and select IS NOT NULL from the second dropdown menu.
5. Click Display Table. Edit erroneous records by clicking the link in the Symbiota ID column (far left).

:::tip

Click the box and arrow icon to the right of the Symbiota ID number to open the record in a new window. That way, you will not need to re-conduct your search after editing every record.

:::

#### Elevation is Unlikely

**Problem:** Elevation values are either too high (>17000 m) or too low (-11000 m) to occur on Earth.

**Solution:**

1. Navigate to the [Record Search Form](/Editor_Guide/Editing_Searching_Records) for your collection.
2. Do one of the following:
   - _Minimum Elevation_: In Custom Field 1, select Elevation Minimum from the first dropdown menu, select LESS THAN from the second dropdown menu, and enter -11000 into the blank field.
   - _Maximum Elevation_: In Custom Field 1, select Elevation Maximum from the first dropdown menu, select GREATER THAN from the second dropdown menu, and enter 17000 into the blank field.
3. Click Display Table. Edit erroneous records by clicking the link in the Symbiota ID column (far left).

#### Improperly Negated Latitudes/Longitudes

**Problem:** The sign of the latitude ([decimalLatitude](https://dwc.tdwg.org/terms/#dwc:decimalLatitude)) or longitude ([decimalLongitude](https://dwc.tdwg.org/terms/#dwc:decimalLongitude)) does not match the sign/hemisphere of the given country. For example, all longitudes in the U.S. should be negative.

**Solution:** The problem cannot currently be identified using Symbiota portal tools. We recommend using the [GBIF Reverse Geocoding API](https://github.com/gbif/geocode) to verify coordinate-country matching, or by simply [publishing your data to GBIF](/Collection_Manager_Guide/Data_Publishing/publishing_gbif) and viewing the data quality flags of your dataset.

#### Invalid Coordinates

**Problem:** Coordinates deviate from accepted ranges or formats, like decimalLatitude and decimalLongitude exceeding -90 to 90 and -180 to 180, respectively. verbatimCoordinates have to be valid values for coordinates in decimal degrees, degrees decimal minutes, degrees minutes second.

**Solution:** Some types of invalid coordinates can be identified using the Record Search Form.

1. Navigate to the [Record Search Form](/Editor_Guide/Editing_Searching_Records) for your collection.
2. Do one of the following:
   - In Custom Field 1, select Decimal Latitude from the first dropdown menu, select LESS THAN from the second dropdown menu, and enter -90 in the blank field.
   - In Custom Field 1, select Decimal Latitude from the first dropdown menu, select GREATER THAN from the second dropdown menu, and enter 90 into the blank field.
   - In Custom Field 1, select Decimal Longitude from the first dropdown menu, select LESS THAN from the second dropdown menu, and enter -180 into the blank field.
   - In Custom Field 1, select Decimal Longitude from the first dropdown menu, select GREATER THAN from the second dropdown menu, and enter 180 into the blank field.
3. Click Display Table. Edit erroneous records by clicking the link in the Symbiota ID column (far left).

#### Lower Geography Values are Provided, but No Higher Geography

**Problem:** Lower geography (e.g., county, state/province) values exist, but no higher geography values (e.g., country) are provided.

**Solution:** This issue can be quickly identified and fixed using the [geography cleaning tools](/Collection_Manager_Guide/Data_Cleaning/geographic_cleaning). Note that you must have administrator permissions to use these tools.

#### Minimum and Maximum Elevation Values Mismatched

**Problem:** The minimum elevation ([minimumElevationInMeters](https://dwc.tdwg.org/terms/#dwc:minimumElevationInMeters)) has a greater value than the maximum elevation ([maximumElevationInMeters](https://dwc.tdwg.org/terms/#dwc:maximumElevationInMeters)).

**Solution:** This problem cannot be identified using Symbiota portal tools. To locate records with this issue, download your data from the [public search page](/User_Guide/Downloading/download_data), as a [backup file](/Collection_Manager_Guide/Downloading/downloading_copy), or using the [exporter tool](/Collection_Manager_Guide/Downloading/downloading_subset). You can then use a spreadsheet program to compare the minimumElevationInMeters to the maximumElevationInMeters field.

#### Mismatched Country and CountryCode Values

**Problem:** The provided value for country and countryCode do not match.

**Solution:** This problem cannot be identified using Symbiota portal tools. To locate records with this issue, download your data from the [public search page](/User_Guide/Downloading/download_data), as a [backup file](/Collection_Manager_Guide/Downloading/downloading_copy), or using the [exporter tool](/Collection_Manager_Guide/Downloading/downloading_subset). You can then use a spreadsheet program to compare the unique combinations of country and countryCode to look for deviations (see Excel instructions [here](https://www.idigbio.org/wiki/index.php/Excel_Data_Quality_Toolkit#Mismatched_Country_and_CountryCode_Values)).

#### Missing Geodetic Datum

**Problem:** Geodetic datum is a key piece of a properly georeferenced specimen, but is usually left blank. Although it is commonly assumed to be in 'WGS84', this should be added and noted as such.

**Solution:**

1. Navigate to the [Record Search Form](/Editor_Guide/Editing_Searching_Records) for your collection.
2. In Custom Field 1, select Geodetic Datum from the first dropdown list and IS NULL from the second dropdown.
3. Click the pencil icon to the right of Custom Field 1 to add another Custom field.
4. In Custom Field 2, select Decimal Latitude from the first dropdown list and IS NOT NULL from the second dropdown.
5. Either individually edit erroneous records by clicking the link in the Symbiota ID column (far left), or batch edit all entries using the [Batch Editing Tool](/Collection_Manager_Guide/Editing_Occurrences/batch_editing).

#### Mismatched Geographic Terms

**Problem:** A record has lower geographic terms (e.g., state/province, county) that do not exist under the provided higher geographic term(s). For example, country = Canada and stateProvince = Sussex. There is no Sussex province in Canada.

**Solution:** This issue can be quickly identified and fixed using the [geography cleaning tools](/Collection_Manager_Guide/Data_Cleaning/geographic_cleaning). Note that you must have administrator permissions to use these tools.

#### Missing Latitudes/Longitudes

**Problem:** A record has a latitude value, but not a longitude value, or vice versa.

**Solution:**

1. Navigate to the [Record Search Form](/Editor_Guide/Editing_Searching_Records) for your collection.
2. In Custom Field 1, select Decimal Latitude (or Decimal Longitude) from the first dropdown list and IS NOT NULL from the second dropdown.
3. Click the pencil icon to the right of Custom Field 1 to add another Custom field.
4. In Custom Field 2, select Decimal Longitude (or Decimal Latitude, whichever is not the same as what you entered in Custom Field 1) from the first dropdown list and IS NULL from the second dropdown.
5. Edit erroneous records by clicking the link in the Symbiota ID column (far left).

#### Misspelled Geographic Unit Names

**Problem:** The geographic units (e.g., [country](https://dwc.tdwg.org/terms/#dwc:country), [state/province](https://dwc.tdwg.org/terms/#dwc:stateProvince), [county](https://dwc.tdwg.org/terms/#dwc:county)) are misspelled, resulting in poor matching of geographic unit names to existing geographic lists.

**Solution:** This issue can be quickly identified and fixed using the [geography cleaning tools](/Collection_Manager_Guide/Data_Cleaning/geographic_cleaning). Note that you must have administrator permissions to use these tools.

### Taxonomy

#### Misspelled or Invalid Taxonomic Names

**Problem:** Scientific names are misspelled, resulting in poor matching of taxonomic names to taxonomic databases.

**Solution:** This issue can be quickly identified and fixed using the [taxonomic cleaning tools](/Collection_Manager_Guide/Data_Cleaning/taxonomic_cleaning). Note that you must have administrator permissions to use these tools.

#### Unknown Higher Taxonomy

**Problem:** Species may be missing higher taxonomic information.

**Solution:** This is only a problem in Symbiota portals if you have scientific names that are not included in the [taxonomic thesaurus](/User_Guide/taxonomic_thesaurus). You can use the [taxonomic cleaning tools](/Collection_Manager_Guide/Data_Cleaning/taxonomic_cleaning) to automatically import names from Catalog of Life or other resources into the thesaurus (your ability to do this depends on the portal), or contact your portal administrator about adding missing names to the thesaurus.

### Other Issues

#### Incorrect Character Encodings

**Problem:** Data inconsistencies arise when incorrect character encodings are used during data manipulation or transfer. This issue occurs when datasets are opened, downloaded, or imported across different software platforms, leading to misinterpretation and garbled text. For instance, special characters like accents or symbols may be rendered incorrectly, affecting the readability and accuracy of the data. (e.g., Carl LinnÃ©).

**Solution:** There is no cross-field searching tools that would enable you to find mis-rendered symbols across all fields, but you can search certain fields. For example:

1. Navigate to the [Record Search Form](/Editor_Guide/Editing_Searching_Records) for your collection.
2. In Custom Field 1, select a field to search from the first dropdown list, select CONTAINS from the second dropdown, and enter a mis-converted character (e.g., Ã©) into the blank field. [This page](https://www.i18nqa.com/debug/utf8-debug.html) provides a helpful table with common problems with character encodings. You can conduct searches for the values in the "Actual" column and replace them with the values in the "Expected" column. For example, if you suspect there are "ë" values in a certain field, you'll want to search on "Ã«".
3. Either individually edit erroneous records by clicking the link in the Symbiota ID column (far left), or batch edit all entries using the [Batch Editing Tool](/Collection_Manager_Guide/Editing_Occurrences/batch_editing).

#### Incorrect Line Endings

**Problem:** When transferring text files between Unix/Linux and DOS/Windows systems, line endings can become inconsistent. Unix/Linux systems typically use line feed (LF) characters, while DOS/Windows systems use carriage return (CR) and line feed (LF) combinations. This mismatch can result in extra characters appearing in the data, causing visual artifacts and processing errors.

**Solution:** This is unlikely to be a problem for data that has already been imported into a Symbiota portal. It is possible that erroneous (¶) symbols will be retained. In this case:

1. Navigate to the [Record Search Form](/Editor_Guide/Editing_Searching_Records/) for your collection.
2. In Custom Field 1, select a field to search from the first dropdown list (such as Locality), select CONTAINS from the second dropdown, and enter ¶ into the blank field.
3. Either individually edit erroneous records by clicking the link in the Symbiota ID column (far left), or batch edit all entries with this symbol using the [Batch Editing Tool](/Collection_Manager_Guide/Editing_Occurrences/batch_editing).

#### Invalid Individual Count

**Problem:** [individualCount](https://dwc.tdwg.org/terms/#dwc:individualCount) values may not make sense as a positive integer.

**Solution:**

1. Navigate to the [Record Search Form](/Editor_Guide/Editing_Searching_Records) for your collection.
2. In Custom Field 1, select Individual Count from the first dropdown list, select LESS THAN from the second dropdown list, and enter 1 in the blank field.
3. Edit erroneous records by clicking the link in the Symbiota ID column (far left).

Alternatively, you can just scan through the table where Individual Count IS NOT NULL and look for discrepancies by eye.

#### Non-standardized BasisOfRecord Values

**Problem:** Values in the BasisOfRecord field do not match the recommended controlled vocabulary. While using standardized terms in this field is not strictly necessary, doing so does improve the discoverability and interoperability of your data.

The currently accepted values for BasisOfRecord include: MaterialEntity, PreservedSpecimen, FossilSpecimen, LivingSpecimen, MaterialSample, Event, HumanObservation, MachineObservation, Taxon, Occurrence, MaterialCitation.

Note that even punctuation and capitalization differences in these values (e.g., Preserved Specimen) are discouraged.

**Solution:**

1. Navigate to the [Record Search Form](/Editor_Guide/Editing_Searching_Records) for your collection.
2. In Custom Field 1, select Basis of Record from the first dropdown list, select NOT EQUALS from the second dropdown list, and enter "PreservedSpecimen" in the blank field.
3. Click the pencil icon to the right of Custom Field 1 to add another Custom field.
4. In Custom Field 2, select Basis of Record from the first dropdown list, select NOT EQUALS from the second dropdown list, and enter "FossilSpecimen" in the blank field.
5. Repeat steps 3-4 for as many other valid BasisOfRecord values you think might exist in your collection.
6. Either individually edit erroneous records by clicking the link in the Symbiota ID column (far left), or batch edit all entries using the [Batch Editing Tool](/Collection_Manager_Guide/Editing_Occurrences/batch_editing).

### Recordings

#### Workshop: Data Cleaning for Maximum Impact

<ReactPlayer
  playing={false}
  controls
  url="http://www.youtube.com/watch?v=j3cxGe_bcC4"
/>

<ReactPlayer
  playing={false}
  controls
  url="http://www.youtube.com/watch?v=DCpS-Gkq3a8"
/>
