---
title: "Geography Cleaning Tools"
date: 2021-10-12
sidebar_position: 15
draft: false
authors: ["Katie Pearson"]
keywords: ["geography", "data cleaning"]
---

:::info

This page describes how to use the two geographic cleaning tools in Symbiota portals to batch clean geographic data for occurrences.

:::

The two geographic cleaning tools are the Geographic Distribution viewer and the Geography Cleaning Tool.

### Geography Distribution Viewer

Navigate to this tool through the **_Administration Control Panel (My Profile > Occurrence Management > name of collection)_**. Click **_Data Cleaning Tools_**, then **_Geographic Distributions_**.

The Geography Distribution viewer can be used to examine the countries, states, and counties that exist in your database. Any misspellings, non-standardized entries (e.g., “USA” rather than “United States”), or suspected mistakes (e.g., “United Arab Emirates” rather than “United States”) can be detected using this tool. To view the state/province values for each country, click the name of the country. Then, to view the county values for each state/province, click the name of the state/province.

A user with administrator permissions can correct errors in country, state/province, and/or county individually by clicking the number next to the place name (circled on next screenshot), or you can search for those records using the record search form and batch edit them.

![Geographic Distribution Viewer](/img/geographicdistribution.jpg)

### Geography Cleaning Tool

Navigate to this tool through the **_Administration Control Panel (My Profile > Occurrence Management > name of collection)_**. Click **_Data Cleaning Tools_**, then **_Geography Cleaning Tools_**.

The Geography Cleaning Tool will search your database for non-standardized geographical terms (countries, states/provinces, and counties) used in your collection. These will be listed as “questionable.” To view and potentially edit these records, you can click the “List [terms]...” link (one example circled below).

![Geography Cleaning Tool](/img/geocleaningtool.jpg)

This tool will also check whether there are records that lack data in the country, state/province, or county fields, yet have geographic data in other fields. For example, the line “Null country with non-Null state/province” lists all records that do not have a country value in the specimen record even though there is a state or province listed in the state/province field of that record. You can click “List records...” and assign a higher geographic value to those records (see example below).

![Geography Cleaning Tool Example](/img/geocleaningexample.png)

Similar lists are provided for records with empty state/province fields but filled county fields and for records with empty county fields but filled locality fields.
