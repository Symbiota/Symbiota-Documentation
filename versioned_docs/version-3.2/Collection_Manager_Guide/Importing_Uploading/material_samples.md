---
title: "Material Samples"
date: 2025-06-23
lastmod: 2025-06-23
sidebar_position: 20
authors: ["Katie Pearson"]
keywords: ["sequences","tissue samples"]
---

:::info

This page describes how to batch upload [material sample](/Editor_Guide/Editing_Searching_Records/material_samples/) data to your collection. A material sample is generally considered a subsample of an occurrence.

:::

:::note

The Material Sample tab will only be visible if it has been activated for your collection. Contact your Portal Manager to determine whether this tab has been configured for your Symbiota portal.

:::

  1. Navigate to your Administration Control Panel (My Profile > Occurrence Management > name of your collection).
  2. Click Import/Update Specimen Records, then select "Extended Data Import".
  3. Click the "Choose File" button to upload a properly formatted associations file into the uploader (see sections below for formatting requirements).
  4. Select "Material Sample" from the Import Type dropdown menu.
  5. Click Initialize Upload.
  6. On the resulting page, you will be able to map the fields in your uploaded file (on the left) with the available material sample fields (on the right). See the listing of [material sample fields](/Editor_Guide/Editing_Searching_Records/symbiota_data_fields#material-sample-fields) for definitions of the available fields.

  :::tip

  Make sure that at least one of the "subject identifier" fields is mapped (see image below). I.e., you have included a value for the catalog number, additional identifier/otherCatalogNumbers, occurrence ID, or Symbiota ID (occid) **of the specimens to which your material samples should link**. Individual values of subject identifier may be duplicated, for example, if multiple material samples are being added to a single specimen.

  :::

  7. Once your fields have been satisfactorily mapped, click Import Data. The result of the import will be displayed, record-by-record, on the next screen.

![Material Sample Module](/img/matsampleupload.jpg)