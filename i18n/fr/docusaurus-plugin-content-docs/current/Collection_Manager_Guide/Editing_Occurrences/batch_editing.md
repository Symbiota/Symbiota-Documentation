---
title: "Batch Editing"
date: 2021-10-28
lastmod: 2026-01-29
draft: false
sidebar_position: 5
authors: ["Lindsay Walker", "Katie Pearson", "Cynthia Skema", "Ann Barber"]
keywords: ["batch", "edit", "change", "record search form"]
---

:::info

This page describes how to batch edit records.

:::

- For batch georeferencing instructions, visit [this page](/Editor_Guide/Georeferencing/batch_georeferencing).
- Scientific names can only be batch changed through the [Batch Annotation tools](/Editor_Guide/Editing_Searching_Records/annotations) or the [Taxonomic Cleaning tools](/Collection_Manager_Guide/Data_Cleaning/taxonomic_cleaning).

:::warning

Exercise caution when using this tool. We strongly recommend [downloading a copy of your database](/Collection_Manager_Guide/Downloading/downloading_copy) prior to making batch edits. For this reason, only users with Administrator permissions can access the batch editing tools.

:::

There are two options for batch editing specimen records: you can change a value for 1) the **entire** set of records in your collection or 2) change a value for a **subset** of records.

1. Navigate to the Record Search Form (_Data Editor Control Panel > Edit Existing Occurrence Records_).
2. **Option A:** **To apply batch changes to all records**, click on “Display Table” in the Record Search Form, then click the Batch Edit button above the resulting table of all records from your collection. Continue to step 3. ![Batch Edit Button](/img/batcheditbutton.png)

   **Option B:** **To apply batch changes to a subset of records**, first search for the records of interest using the [search form](/Editor_Guide/Editing_Searching_Records). Once you have the set of records to which you would like to make a batch edit, click the Batch Edit Button at the top of your selected table of records.

3. From the dropdown menu next to "Field Name" in Batch Update, select the field you want to edit.
   ![Batch Edit Tool](/img/batchedittool.png)
4. In "Current Value:" enter the text that is presently in the field you want to edit.
5. In "New Value" enter the text that you want to be in the edited field.
6. Choose if you want to match the whole field **or** just match any part.
7. Click “Batch Update Field” to enact your batch edit. A pop-up screen will tell you the number of records to be updated, warn you that the replace operation cannot be undone, and prompt you to OK the update.

:::note

⚠️ **It is easy to inadvertently change text you did not intend to change.** Generally, the more specific your "Current Value:" text, the less likely you are to run into unintended consequences. If possible, get an estimate from your record table of how many records should be affected, and check that against the number of records cited in the warning. If the numbers do not match, rethink your strategy.<br></br>
It is not possible to check the record count when sorting by "Modified By" first. Doing so returns a count of the number of fields edited by the "Modified By" user for all records to be affected, rather than the number of records to be affected.

:::

#### Examples

✅ **Example of a good use of batch edit:** Standardizing plant collector names. If you are standardizing all Wherry’s collections to “Edgar T. Wherry,” then you could enter “E. T. Wherry” in Current Value and “Edgar T. Wherry” in New Value in batch edit for the collector field name, and update. Repeat for alternate forms of this name (e.g., “E T Wherry,” Edgar T Wherry”).

❌ **Example of a bad use of batch edit:** Changing a single letter or short phrase. For example, if you entered “n.” in Current Value and “N” in New Value in batch edit for the locality in an attempt to change lower case abbreviated instances of the cardinal direction north, you would accomplish that, but you would also change any other character string with “n.” such as a sentence ending in the letter n. This would result in batch misplacements of “N” where “n.” should be. For example, “Next to the station. East side” would be transformed into “Next to the statioN East side.”
