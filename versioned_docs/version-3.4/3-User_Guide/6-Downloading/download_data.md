---
title: "Downloading Data"
date: 2021-11-12
lastmod: 2025-07-22
draft: false
weight: 40
authors: ["Katie Pearson"]
keywords: ["download"]
---

:::info

This page describes where and how you can download data from a Symbiota portal from the user interface and provides details on available download options.

:::

## How to Download

Downloading data from Symbiota portals can easily be done from a public search.

After [conducting a search](/docs/User_Guide/searching_records), click the download icon button ![Download Icon](/img/dl2.png)

This is usually displayed at the top right corner of the page, as shown below:

![Search Results Example](/img/search3.png)

## Download Options

Once you click the download button, a pop-up window will appear to provide your download options.

:::tip

Make sure your pop-up blocker is disabled for this site to prevent issues with downloads.

:::

You will see the following options:

![Download Pop-up](/img/downloadpopupwindow.png)

**Structure** - here you can select whether you want to download the data in the Symbiota format or in strict Darwin Core. Symbiota Native format includes several non-Darwin Core fields, such as substrate, associated collectors, and verbatim description. A complete list of Symbiota fields can be found on [this page](/docs/Editor_Guide/Editing_Searching_Records/symbiota_data_fields). [Darwin Core](https://dwc.tdwg.org/terms/) is a more standardized, interoperable format that you may be better able to merge with downloads from other data sources.

**Data Extensions** - here you can select which [Darwin Core extensions](https://rs.gbif.org/extensions.html) you would like to include in your download as described below. Extensions include data that may have a one-to-many relationship with records in the primary occurrences, i.e., there may be several rows in the extension files that correspond to a single row in the *occurrences* file.
    * **Determination History** (file name: *identifications*) - this file will include the history of taxonomic identifications of records in the main *occurrences* file. See the [Darwin Core Identification History Extension](https://rs.gbif.org/extension/identification_history_2024-02-19.xml) for information about fields available in this file.
    * **Media Records** (file name: *multimedia*) - this file will include links to any media records associated with records in the main *occurrences* file. **Note: this option will *not* download the actual media files associated with the records.** See [this article about Downloading Images](/docs/User_Guide/Downloading/download_images) for more information. See the [Simple Multimedia Extension](https://rs.gbif.org/extension/gbif/1.0/multimedia.xml) for information about fields available in this file.
    * **Occurrence Trait Attributes** (file name: *measurementOrFact*) - this file will include [trait data](/docs/User_Guide/traits) associated with records in the main *occurrences* file. Hierarchical traits will often include multiple rows. For example, a record with "flowers present" will inherit the trait "reproductive", and thus this record will include at least two rows of trait data for the single occurrence record. See the [Extended Measurement Or Facts Extension](https://rs.gbif.org/extension/obis/extended_measurement_or_fact_2023-08-28.xml) for information about fields available in this file.
    * **Material Samples** (file name: *materialSample*) - this file will include material sample data associated with records in the main *occurrences* file. See the [GGBN Material Sample Extension](https://rs.gbif.org/extension/ggbn/materialsample.xml) for information about fields available in this file.
    * **Alternative Identifiers** (file name: *identifiers*) - this file will include alternative identifiers (e.g., other catalog numbers) associated with records in the main *occurrences* file. These originate from the [Additional Identifier table](/docs/Editor_Guide/Editing_Searching_Records/catalog_numbers#tag-name--additional-identifier-values--other-catalog-numbers) in the occurrence editor. See the [Alternative Identifiers Extension](https://rs.gbif.org/extension/gbif/1.0/identifier.xml) for information about fields available in this file.

**File Format** - here you can select whether you could like the files in your download to be comma-delimited (CSV) or tab-delimited (TSV)

**Character Set** - here you can select whether you could like the files in your download to follow ISO-8859-1 (western) encoding or UTF-8 (unicode) encoding. UTF-8 is recommended for best interoperability with most systems and non-English languages.

**Compression** - check this box if you would like your downloaded file to be compressed into a ZIP file. This will decrease the size of the file and therefore lead to quicker downloads. To view the files, simply extract them (search a browser for "How to Extract a Zip File").