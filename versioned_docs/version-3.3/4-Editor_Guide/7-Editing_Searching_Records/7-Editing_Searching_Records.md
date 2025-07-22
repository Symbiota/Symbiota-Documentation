---
title: "Editing & Searching Records"
date: 2021-10-26
lastmod: 2024-09-24
draft: false
authors: ["Katie Pearson"]
weight: 60
keywords: ["edit", "change", "record search form", "search"]
---

:::info

This page provides instructions on how to search for and edit records.

:::

- To batch edit records (only available to collection administrators), visit [this page](/Collection_Manager_Guide/Editing_Occurrences/batch_editing).
- For an overview of fields in the occurrence editor form, visit [this page](/Editor_Guide/Editing_Searching_Records/symbiota_data_fields).
- For an explanation of the record editor tabs, visit [this page](/Editor_Guide/Editing_Searching_Records/record_editor_tabs).

To edit or search for records, select "Edit Existing Occurrence Records" from the Data Editor Control Panel (accessed via My Profile > Occurrence Management > name of collection). On the resulting Record Search Form, you can enter one or multiple search terms to customize your results.

![Record Search Form](/img/recordsearchform.png)

To search according to fields not explicitly stated in the Record Search Form, select the field from the dropdown menu after Custom Field 1. You can include up to 8 Custom fields in your search. The second dropdown lists after the Custom Field names will allow you to conduct more specific searches, such as for ranges or fields that are null. The options include:

- EQUALS: the field contains **only** the provided text
- NOT EQUALS: the field does not match the provided text exactly (does not only contain the provided text)
- STARTS WITH: the field starts with the provided text
- CONTAINS: the field contains the provided text anywhere in the field
- DOESN'T CONTAIN: the field does not contain the provided text anywhere in the field
- GREATER THAN: (for numeric values or fields that contain numbers) the field contains a numeric value that is greater than the provided value
- LESS THAN: (for numeric values or fields that contain numbers) the field contains a numeric value that is less than the provided value
- IS NULL: the entire field contains a "NULL" (no) value
- IS NOT NULL: the field contains any value but is not empty (NULL)

To conduct a search, click either the Display Editor button (to view one record at a time) or Display Table button (to view the first 1000 records at a time).

:::note

When searching for the characters "\_" or "%" in your record fields, you must precede this character with the backwards slash "escape" character (\\). E.g., when searching for the value "\_1", you should enter "\\\_1".

:::

To search by specimens entered by you (the current user), click the CU button.

To sort your search results, select a field from the "Sort By" dropdown menu, then select whether you wish to sort in ascending (Z-A, or smallest to greatest) or descending (A-Z, or greatest to smallest) order.

To view a specific record from the Table Display, click the Symbiota ID number or the Open in New Window icon in the leftmost SymbiotaID column.

To re-open the record search form after you have conducted a search, click the Toggle Record Search Form button.

![New Return to Record Search Form](/img/returntorecordsearchform_new.png)

In older versions of Symbiota, toggle the search form by clicking the magnifying glass icon to the right of the name of the collection at the top of the window.

![Old Return to Record Search Form](/img/returntorecordsearchform.png)
