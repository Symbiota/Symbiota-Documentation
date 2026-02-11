---
title: "Material Samples"
date: 2023-09-29
lastmod: 2025-06-23
draft: false
authors: ["Lindsay Walker"]
editors: ["Katie Pearson"]
keywords: ["Material Sample"]
---

:::info

This page describes how to add and edit material sample records associated with specimen occurrences. A material sample is generally considered a subsample of an occurrence.

:::

:::note

The Material Sample tab will only be visible if it has been activated for your collection. Contact your Portal Manager to determine whether this tab has been configured for your Symbiota portal.

:::

| ![Material Sample Module](/img/materialsampleblank.png) |
| :-----------------------------------------------------: |
|    Material Sample tab within the Occurrence Editor     |

## Material Sample Data Fields

Definitions for data fields displayed on the Material Sample tab are defined in the [Symbiota Data Fields](/Editor_Guide/Editing_Searching_Records/symbiota_data_fields#material-sample-fields) documentation.

## Adding/Editing Material Sample Records

:::note

One specimen occurrence in a Symbiota portal can be associated with one or more material samples.

:::

### Adding Individual Material Samples

|                                                                                                        ![Material Sample Example](/img/materialsampleeditor.png)                                                                                                         |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Specimen occurrence with multiple associated material sample records as viewed from within the Occurrence Editor. [This example](https://biorepo.neonscience.org/portal/collections/individual/index.php?occid=277316) is from the NEON Biorepository's Symbiota portal. |

**To add a new material sample to an existing catalog record:**

1. Navigate to the Occurrence Editor: _My Profile > Occurrence Records > name of collection > Edit Existing Records_
2. [Search](/Editor_Guide/Editing_Searching_Records) for the record that the sample will be associated with. Open the record so that the Occurence Editor form appears.
3. At the top of the form, select the Material Sample tab.
4. Select the plus sign icon to begin adding a new material sample.
5. As you fill out the form, consult the [Symbiota definitions for Material Sample data fields](/Editor_Guide/Editing_Searching_Records/symbiota_data_fields#material-sample-fields) if you are unfamiliar with these terms.
6. Select the "Add Record" button to save the new material sample record.
7. Repeat, starting at step 4, to add additional material sample records.

:::tip

To **edit** existing material sample records, navigate to the Material Sample tab and select the pencil icon to reopen the editable form.

:::

### Batch Adding Material Samples

Material sample records can be batch uploaded using the Extended Data Import tools in the Administrator Control Panel. See [this page](/Collection_Manager_Guide/Importing_Uploading/material_samples) for instructions.

### Downloading Material Samples

Data entered into the Material Sample tab can be [downloaded](/Editor_Guide/Downloading_Data/downloading_darwin_core_archive) from Symbiota as Darwin Core Archive or Symbiota data backup file. The output file will be named _materialSample.csv_.
