---
title: "Duplicate Matching"
date: 2022-11-30
lastmod: 2026-01-30
authors: ["Katie Pearson"]
sidebar_position: 50
keywords: ["duplicate", "copy", "transfer"]
---

:::info

This page describes how to use the Duplicate Matching tool in the occurrence editor to accelerate data entry.

:::

The Duplicate Matching tool allows the user to search the entire database (i.e., all collections in the Symbiota portal) for records that share the same collector name, collector number, and date and link them to the record they are entering/editing.

### Searching for duplicates

1. [Search for and open a record](/Editor_Guide/Editing_Searching_Records) that you wish to edit, or [add a new record](/Editor_Guide/Adding_Records/adding_full_records).
2. Enter the name of the collector/observer into the Collector/Observer field, the collector's unique collector number (if applicable) into the Number field, and the date of collection into the Date field (in YYYY-MM-DD format).
3. Click the "Duplicates" button.

:::tip

You can turn an automatic duplicate search on or off using the "Auto search" checkbox. This will conduct a search for duplicates automatically after you enter the collector name, number, and date.

:::

There are three possible results of a duplicate search using this tool.

##### Possible EXACT Duplicates

![Possible EXACT Duplicate results](/img/exactdupe.png)

This result occurs when a record with a matching collector last name, collector number, and date is found in a collection other than the one you are currently working in. This may represent a true duplicate specimen.

##### Possible EXACT Duplicates with NOTICE

![Possible EXACT Duplicate results within collection](/img/exactdupeincol.png)

This result occurs when a record with a matching collector last name, collector number, and date is found within the collection you are currently working in. This may represent a true duplicate specimen, if you have them in your collection, or it could represent unintentional duplicate data entry (i.e., an error).

##### Possible Matching Duplicate EVENTS

![Possible Duplicate EVENT results](/img/dupematchevent.png)

This result occurs when a record with a matching collector last name and date was found, but the exact collector number was not found. In this case, the results presented will include collector numbers slightly above and slightly below the number that you entered. These records may still be useful because they may share, e.g., locality data with the record that you are currently entering/editing.

### Handling duplicate match results

You will have several options for using the results of the duplicate matching search. These will be listed at the bottom of the duplicate result that has been identified (see example below). You may:

#### Transfer All Fields

Transfer the data from all the fields in the identified duplicate specimen or event into the data entry page that you are currently working on. This will replace any data that you have already entered (e.g., if you entered "Luis Gonzalez" in the collector/observer name, and the duplicate had was "Gonzalez, Luis" in this field, "Gonzalez, Luis" would overwrite your previous entry). Clicking this option will transfer the data and close the duplicate matching window.

#### Transfer to Empty Fields Only

Transfer the data from all fields in the identified duplicate specimen or event into the data entry page that you are currently working on, **_unless that field already has data in it_**. Only empty fields will be populated. Your previous entries will remain the same. Clicking this option will transfer the data and close the duplicate matching window.

#### Link as Duplicate

Checking this box and then clicking one of the additional options will create a duplicate linkage between the record you are editing and the duplicate record. For more information about duplicate linkages, visit the [Duplicate Clustering](/Collection_Manager_Guide/duplicate_clustering) documentation.

#### Go to Record

This option is only available if the identified duplicate belongs to the same collection that you are currently editing. Clicking this option will take you to the occurrence editor page for the duplicate record so you can view it (e.g., if you want to verify the data or view the image). Once you have looked at the image, if you want to transfer any of the data into the record you are working on, you will need to click the "Duplicates" button on the record that you were editing again.

#### Merge Records

This option is only available if the identified duplicate belongs to the same collection that you are currently editing. If you click this option, the two records will be merged together. **The record in the pop-up window will be prioritized over data in your occurrence editor.** For example, if the record listed in the pop-up window has "USA" in the country field, and the record in the occurrence editor has "United States" in the country field, the merged record will have "USA" in the country field. Fields that are empty in one of the two records will be filled in with the data from the record that has data in that field. All media resources (e.g., images) and linked resources will be included in the merged record. All unique determinations will be included in the merged record with the exception of any "current determination" belonging to the record in the occurrence editor, which will be discarded. As a result, you will have one current determination (belonging to the record in the pop-up window) and all other previous determinations associated with the record. For this reason, it is a good idea to check the Determinations tab of the merged record before moving on.

![Possible EXACT Duplicate results within collection](/img/exactdupeincolfull.png)
