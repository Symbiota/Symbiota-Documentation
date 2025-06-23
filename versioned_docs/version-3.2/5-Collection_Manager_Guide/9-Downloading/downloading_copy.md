---
title: "Downloading a Copy of your Data"
date: 2021-11-29
lastmod: 2025-01-31
draft: false
weight: 55
authors: ["Katie Pearson"]
editors: ["Lindsay Walker"]
keywords: ["download", "backup"]
---

:::info

This page describes how to download a copy of your data, including occurrence records, determinations, media resources (as links only), and any other extensions enabled in your portal (e.g., attribute data).

:::

:::tip

It is strongly recommended that curators or collection managers regularly download and internally archive a backup data file in case of emergency. **Doing so is quick and easy**. Review the Symbiota Support Hub's Statement on Cybersecurity [here](https://symbiota.org/cybersecurity/).

:::

To download a copy of your specimen data from a Symbiota portal:

1. Navigate to the **_Administration Control Panel_** (_My Profile > Occurrence Management > name of collection_) > **_Download Data Backup File_** (under General Maintenance Tasks)
2. A new window will appear asking you to select the character set (ISO-8859-1 or UTF-8) that will be used in your downloaded dataset. Click the Perform Backup button. The resulting file will be a zipped Darwin Core Archive.

![Exporter Tool](/img/admincontrolpanel_backup.PNG)

To access your backup data, unzip/open the Darwin Core Archive folder. This folder will contain several files, including the following CSV (Comma Separated) files that can be opened as a spreadsheet in MS Excel, Google Sheets, etc:

- occurrences.csv = your specimen records
- identifications.csv = the specimen identifications associated with each specimen record
- measurementOrFact.csv = trait data associated with each specimen record
- multimedia.csv = links to media/images associated with each specimen record

The archive also contains metadata about your collection and about the fields contained in each of the CSV files. For more information about the format and use of Darwin Core Archives, see the following resources:

- [https://github.com/gbif/ipt/wiki/DwCAHowToGuide](https://github.com/gbif/ipt/wiki/DwCAHowToGuide)
- [https://en.wikipedia.org/wiki/Darwin_Core_Archive](https://en.wikipedia.org/wiki/Darwin_Core_Archive)
