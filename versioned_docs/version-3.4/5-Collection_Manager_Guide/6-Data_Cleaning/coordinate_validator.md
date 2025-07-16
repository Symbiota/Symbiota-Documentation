---
title: "Coordinate Validator"
date: 2025-07-16
weight: 4
draft: false
authors: ["Katie Pearson"]
keywords: ["geography", "geographic thesaurus", "georeferences"]
---

:::info

This page describes how to use the coordinate validator tool, located under the Data Cleaning toolbox.

:::

Navigate to these tools through the **_Administration Control Panel (My Profile > Occurrence Management > name of collection)_**. Click **_Data Cleaning Tools_**, then view the box below the **_Specimen Coordinates_** header.

The Coordinate Validator tool can be used to determine whether the coordinates associated with your records actually fall within the political boundaries of the provided Country, State/Province, and County.

:::note

This tool will only work as expected if your portal's geographic thesaurus includes geographic polygons, which can be added automatically by a superadministrator using the [Geographic Harvester](/docs/Portal_Manager_Guide/Geographic_Thesaurus/geographic_harvester). Contact your superadministrator if the tool does not seem to be functioning.

:::

The Statistics and Action Panel provides information about how many of your specimens are georeferenced, as well as how many records with or without coordinates have data in the "verbatim coordinates" field. Non-georeferenced records with values in the "verbatim coordinates" field are a good place to start when you begin georeferencing, as they may have coordinates that can simply be converted into decimal latitude/longitude values.

![Coordinates Statistics Panel](/img/coordinatevalidatoractionpanel.png)

To use the Coordinate Validator Tool, click the **Verify coordinates against political boundaries** link.

:::tip

It is recommended to use the [Geography Cleaning Tools](/docs/Collection_Manager_Guide/Data_Cleaning/geographic_cleaning) before validating coordinates. This will ensure that your political units match those in the geographic thesaurus.

:::

If your collection has coordinates, you will see one of two things on the next page:
- If you have never validated your coordinates, you will see a table of "Unverified records listed by county." Click the table icon to view specimens belonging to the listed country values.
- If you have previously validated your coordinates, you will see a "Ranking Statistics" table consisting of all the potentially problematic records from the previous validataion attempt.

To validate (or re-validate) your coordinates, check the boxes next to your preferred options. You can have the tool populate values for country, state/province, and/or county based on the coordinates for records that do not currently have values in those fields. Click the "(Re-)Validate All Coordinates" button to run the tool.

![Ranking Statistics Table](/img/coordinatevalidator.png)

:::warning

This tool may take several minutes to run!

:::

The resulting Ranking Statistics table will show totals of potentially problematic records based on the types of issues discovered, described below. To view records with the named potential issues, click the number in the Questionable Records column.

#### Failed to validate coordinate based on geographic thesaurus

Records with this issue may:
- Have coordinates that didn't match within any county or state boundaries
- Have country/state/county values that do not match values in the geographic thesaurus
- Have country/state/county values that do not have a corresponding polygon in the geographic thesaurus.

Because polygons in the thesaurus are sometimes imprecise, you are likely to always have records in this category.

**Important Note:** The tool can only fully validate coordinates for countries that have state and county polygons in the taxonomic thesaurus. Contact your portal administrator for help with countries that do not yet have sub-country polygons.

#### Failed to validate coordinate despite known search polygon

Records with this issue were unable to validate despite the country/state/county values matching values with polygons in the geographic thesaurus. This is usually due to imprecisions in the polygons in the geographic thesaurus. For example, coastlines may not perfectly match the polygons. It is a good idea to check these records for obvious issues, then ignore the remaining flagged records.

#### State/Province does not match coordinates

Records with this issue have coordinates that were found in the correct country, but the location of the coordinates does not match the given state/province value. Check these records for misplaced coordinates or mis-typed state/province values.

#### County does not match coordinates

Records with this issue have coordinates that were found in the correct country and state/province, but the location of the coordinates does not match the given county value. Check these records for misplaced coordinates or mis-typed county values.

:::tip

Once you have fixed records that could not be validated (in the occurrence editor), you must re-run the validator to update your validation statistics.

:::