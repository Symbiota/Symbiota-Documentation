---
title: "Importing Determinations"
date: 2023-10-31
lastmod: 2025-07-15
authors: ["Lindsay Walker"]
editors: ["Katie Pearson"]
weight: 40
keywords: ["data upload", "data import", "determinations", "annotations"]
---

:::info

This page provides instructions for bulk uploading specimen determinations/annotations and associating them with their respective specimen records. For instructions for adding individual determinations or the batch annotation tool, see [this page](/Editor_Guide/Editing_Searching_Records/annotations/). This tool can only be accessed by a superadministrator.

:::

:::tip

**If you are new to using this tool**, try importing only a few new determinations to familiarize yourself with how the tool behaves before ingesting a large batch. For instance, **this tool cannot be used to overwrite existing determinations**; it can only be used to add new determinations to one or more occurrence records.

:::

|                                                     ![Single Determination History Form](/img/determinationhistoryform.png)                                                     |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Data associated with specimen identifications (aka taxonomic determinations or annotations) can be added to specimen records in bulk using the **Extended Data Importer** tool. |

### Initiating the Upload

1. Navigate to your Administration Control Panel (_My Profile > Occurrence Management > name of your collection_).
2. Within the Administration Control Panel, navigate to _Import/Update Specimen Records > Extended Data Import_.
3. Select the file containing your determinations to be imported. See below for tips regarding the contents and formatting of this file.
4. Choose _Import Type_ = "Determinations".
5. Select the desired Upload Type from the dropdown menu.
6. If your upload was successful, the message "Done process input file" will appear in the Action Panel.

#### Example Data Import File

Files containing determinations to be bulk imported must be in CSV format and include the following: 1) an identifier for the associated specimen occurrence (_catalogNumber_, _otherCatalogNumber_, or _occurrenceID_), 2) _dateIdentified_, 3) _identifiedBy_, and 4) _sciname_.

For example:

| catalogNumber | identifiedBy   | dateIdentified | sciname                      |
| ------------- | -------------- | -------------- | ---------------------------- |
| OBI000001     | Don Cole       | 1950           | Rosa woodsii var. gratissima |
| OBI000001     | unknown        | s.d.           | Rosa                         |
| OBI000002     | Edward Gilbert | 2023-10-01     | Rosa woodsii                 |

### Data Import Fields

:::tip

Refer to the [Symbiota Data Fields](/Editor_Guide/Editing_Searching_Records/symbiota_data_fields) and [Data Import Fields](/Collection_Manager_Guide/Importing_Uploading/data_import_fields) guides for more information about some of the fields listed below.

:::

:::tip

Not all fields available through the Extended Data Importer for bulk determination ingestion are visible through the Occurrence Editor interface. However, once imported, these values can be exported, for example, through a [data backup](/Collection_Manager_Guide/Downloading/downloading_copy).

:::

| Target Field (🔸 = required)                                                                          | Data Type (Length) | Notes                                                                                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| subject identifier 🔸                                                                                 |                    | catalogNumber, otherCatalogNumber, or occurrenceID                                                                                                                                                                                                                                                        |
| [**dateIdentified**](https://dwc.tdwg.org/terms/#dwc:dateIdentified) 🔸                               | Text (45)          | The date the identification was made. If the date is unknown, use "s.d." in this field.                                                                                                                                                                                                                   |
| family (Override)                                                                                     | Text (255)         | The family to which the taxon belongs. If the scientific name provided is matched to one in the taxonomic thesaurus, this will be auto-filled according to the thesaurus entry.                                                                                                                           |
| [**higherClassification**](http://rs.tdwg.org/dwc/terms/higherClassification) (Override)              | Text (150)         | A list (concatenated and separated) of taxa names terminating at the rank immediately superior to the referenced dwc:Taxon. If the scientific name provided is matched to one in the taxonomic thesaurus, this will be auto-filled according to the thesaurus entry for the current identification.       |
| [**identificationQualifier**](https://dwc.tdwg.org/terms/#dwc:identificationQualifier)                | Text (255)         | The determiner's expression of uncertainty in their identification. This will be listed on the label along with the scientific name. (e.g., cf., aff.)                                                                                                                                                    |
| [**identificationReferences**](https://dwc.tdwg.org/terms/#dwc:identificationReferences)              | Text (2000)        | The reference source used to make the identification.                                                                                                                                                                                                                                                     |
| [**identificationRemarks**](https://dwc.tdwg.org/terms/#dwc:identificationRemarks)                    | Text (2000)        | Any additional notes regarding the identification of the specimen.                                                                                                                                                                                                                                        |
| identificationUncertain                                                                               | Integer (2)        | Use the value "1" to indicate an uncertain identification or "0" for certain identifications.                                                                                                                                                                                                             |
| [**identificationVerificationStatus**](http://rs.tdwg.org/dwc/terms/identificationVerificationStatus) | Text (45)          | A categorical indicator of the extent to which the taxonomic identification has been verified to be correct.                                                                                                                                                                                              |
| [**identifiedBy**](https://dwc.tdwg.org/terms/#dwc:identifiedBy)🔸                                    | Text (255)         | The name of the person who identified the specimen. Also called a determiner. If the determiner is unknown, use "unknown" in this field.                                                                                                                                                                  |
| isCurrent                                                                                             | Integer (2)        | Use the value "Y" to flag a determination as the most current. However, doing so will not override existing determinations that have already been flagged as the most current.                                                                                                                            |
| printQueue                                                                                            | Integer (2)        | Use the value "1" to add a determination to the annotation print queue.                                                                                                                                                                                                                                   |
| [**scientificNameAuthorship**](https://dwc.tdwg.org/terms/#dwc:scientificNameAuthorship)              | Text (255)         | The name of the person who first named the taxon. If the scientific name provided is matched to one in the taxonomic thesaurus, this will be auto-filled according to the thesaurus entry.                                                                                                                |
| sciname 🔸                                                                                            |                    | Taxonomic identification without authorship string. See [Data Import Fields](/Collection_Manager_Guide/Importing_Uploading/data_import_fields).                                                                                                                                                      |
| securityStatus                                                                                        | Integer (11)       | Use the value "1" to [redact images/media and locality data](/Collection_Manager_Guide/Data_Publishing/redacting_obscuring_data) for the associated occurrence record; use "0" to keep all details visible. See [Symbiota Data Fields](/Editor_Guide/Editing_Searching_Records/symbiota_data_fields). |
| securityStatusReason                                                                                  | Text (100)         | Explanation for data redaction. See [Symbiota Data Fields](/Editor_Guide/Editing_Searching_Records/symbiota_data_fields).                                                                                                                                                                            |
| sortSequence                                                                                          | Integer (10)       | Specifies the sequential sort order of multiple determinations on the determination history tab and in the public display. Low numbers will sort higher than high numbers.                                                                                                                                |
| [**sourceIdentifier**](https://dwc.tdwg.org/terms/#dwc:identificationID)                              | Text (45)          | An identifier for the Identification (the body of information associated with the assignment of a scientific name). May be a global unique identifier or an identifier specific to the data set.                                                                                                          |
| [**taxonConceptID**](https://dwc.tdwg.org/terms/#dwc:taxonConceptID)                                  | Text (45)          | An identifier for the taxonomic concept to which the determination refers.                                                                                                                                                                                                                                |
| [**taxonRemarks**](https://dwc.tdwg.org/terms/#dwc:taxonRemarks)                                      | Text (2000)        | Any additional notes regarding the taxonomic name to which the specimen was identified.                                                                                                                                                                                                                   |
| [**verbatimIdentification**](https://dwc.tdwg.org/terms/#dwc:verbatimIdentification)                  | Text (250)         | A string representing the taxonomic identification as it appeared in the original record.                                                                                                                                                                                                                 |
