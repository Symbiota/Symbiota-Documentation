---
title: "Linked Resources / Associations"
date: 2023-10-30
lastmod: 2024-10-28
draft: false
weight: 40
authors: ["Katie Pearson"]
editors: ["Lindsay Walker"]
keywords:
  [
    "associated occurrences",
    "extended specimen",
    "linked resources",
    "batch upload",
    "relationships",
  ]
---

import ButtonLink from '@site/src/components/ButtonLink';
import ReactPlayer from "react-player";

:::info

This page describes how to batch upload associated occurrences or other linked resources to your records. For general information about linked resources or to upload individual linked resources, see [this page](/docs/Editor_Guide/linking_records).

:::

This tool uses terms **subject** and **object** to refer to two different types of occurrences. The **subject** record is the occurrence that you are adding associations to. The **object** record is the association or other occurrence that is being added or linked to the subject record.

### Uploading Linked Resources / Associations

1. Navigate to your Administration Control Panel (My Profile > Occurrence Management > name of your collection).
2. Click Import/Update Specimen Records, then select "Extended Data Import".
3. Click the "Choose File" button to upload a properly formatted associations file into the uploader (see sections below for formatting requirements).
4. Select "Associations" from the Import Type dropdown menu.
5. Select the desired Association Type from the next dropdown menu: [Non-occurrence Resource Link](/docs/Collection_Manager_Guide/Importing_Uploading/linked_resources#1-non-occurrence-resource-link-uploads), [Occurrence - Internal (this portal)](/docs/Collection_Manager_Guide/Importing_Uploading/linked_resources#2-occurrence---internal-this-portal-uploads), [Occurrence - External Link](/docs/Collection_Manager_Guide/Importing_Uploading/linked_resources#3-occurrence---external-link-uploads), or [Taxon Observation](/docs/Collection_Manager_Guide/Importing_Uploading/linked_resources#4-taxon-observation-uploads). Only one Association Type may be uploaded per import file.
6. Click the "Initialize Import" button.
7. Select the desired Relationship Type from the dropdown menu.

:::note

The available **Relationship Type** values are defined per portal and ideally correspond to a community-created controlled vocabulary, such as terms from the [Relation Ontology](http://purl.obolibrary.org/obo/ro). The term you select refers to the occurrence as the "subject" and the linked resource as the "object". For example, if you select the relationship "siblingOf", the inferred relationship is "My occurrence is the sibling of this other resource/link/occurrence."

:::

8. (Optional) Select the desired Relationship Subtype from the dropdown menu. The options in this list are also defined per portal as with Relationship Type.
9. Map the fields in your input file (on the left of the resulting page) to appropriate target fields (see [Table 1. Linked Resources Upload Fields](/docs/Collection_Manager_Guide/Importing_Uploading/linked_resources#table-1-linked-resources-upload-fields)). **The fields available in the dropdown list will depend on the Association Type you are uploading.**
10. If you would like to overwrite previously-uploaded associations with identical values of the "identifier" field, check the box labeled "Update records with matching identifiers."
11. Click the Import Data button.

#### Association Types

##### 1. "Non-occurrence Resource Link" Uploads

**Non-occurrence Resource:** a URL to an external resource that provides information or extended data relating to the occurrence, but is itself not an [occurrence](https://dwc.tdwg.org/terms/#occurrence). Examples include field notes, a compiled dataset, etc.

<ButtonLink
link="/documents/GeneralResourceUploadTemplate.xlsx"
label="Download Example Template"
download={true}
style={{marginBottom: '2vh'}}
/>

The **required fields** for this upload type are (1) a subject identifier for the occurrence you are linking to (catalog number, other catalog number, or occurrenceID), and (2) resourceUrl. The resourceUrl should be a link to the external resource that you would like to be associated with your records.

Optional fields ([defined below](/docs/Collection_Manager_Guide/Importing_Uploading/linked_resources#table-1-linked-resources-upload-fields)) include accordingTo, basisOfRecord, establishedDate, notes, object identifier (catalog number, occurrenceID, or occid), and relationshipID.

##### 2. "Occurrence - Internal (this portal)" Uploads

**Occurrence - Internal (this portal):** a link to an occurrence (specimen/observation) that exists in the same portal as the occurrence you are linking to; when creating associations within a portal, the portal will automatically update the corresponding occurrence with the reciprocal relationship

<ButtonLink
link="/documents/OccurrenceInternalUploadTemplate.xlsx"
label="Download Example Template"
download={true}
style={{marginBottom: '2vh'}}
/>

The **required fields** for this upload type are (1) a subject identifier for the occurrence you are linking to (catalog number, other catalog number, and/or occurrenceID), and (2) an object identifier for the occurrence object you are linking to the subject occurrence (catalog number, occurrenceID, or occid/Symbiota number). The object identifier will be used to link to an existing record within the portal.

Optional fields ([defined below](/docs/Collection_Manager_Guide/Importing_Uploading/linked_resources#table-1-linked-resources-upload-fields)) include accordingTo, basisOfRecord, establishedDate, notes, and relationshipID.

##### 3. "Occurrence - External Link" Uploads

|                                                    ![Example General Resource](/img/linkedresources_relatedoccurrences.png)                                                    |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Linkages to occurrences and similar resources that are managed outside of your Symbiota portal can be bulk imported using the "Occurrence - Externally Managed" upload option. |

**Occurrence - External Link:** a link to an occurrence (specimen/observation) that is available in another Symbiota-based portal.

<ButtonLink
link="/documents/OccurrenceExternalUploadTemplate.xlsx"
label="Download Example Template"
download={true}
style={{marginBottom: '2vh'}}
/>

The **required fields** for this upload type are (1) a subject identifier for the occurrence you are linking to (catalog number, other catalog number, or occurrenceID), and (2) resourceUrl. It is also strongly recommended to include a value for verbatimSciname (scientific name) so that the relationship can be searchable.

Optional fields ([defined below](/docs/Collection_Manager_Guide/Importing_Uploading/linked_resources#table-1-linked-resources-upload-fields)) include accordingTo, basisOfRecord, establishedDate, notes, objectID, relationshipID, resourceUrl, and verbatimSciname.

##### 4. "Taxon Observation" Uploads

|                             ![Example Taxon Observation Linkage](/img/linkedresources_assoctaxa.png)                              |
| :-------------------------------------------------------------------------------------------------------------------------------: |
| Observations that are not associated with digitized occurrences can be bulk imported using the "Taxon Observation" upload option. |

**Taxon Observation:** the assertion of a taxon being associated with the occurrence you are linking to. This may be, for example, the host taxon of the occurrence, a parasite, a taxon sharing the same habitat, etc.

:::note

Associated taxa added in the Linked Resource tab (either individually or in batch) will be placed in the associatedTaxa field when you download the data (e.g., as a Darwin Core Archive). In the download, any information stored in the associatedTaxa field will NOT be included in deference to the provided Linked Resources. Therefore, if you translate any associatedTaxa into Linked Resources, make sure to translate _all_ the associated taxa!

:::

<ButtonLink
link="/documents/TaxonObservationUploadTemplate.xlsx"
label="Download Example Template"
download={true}
style={{marginBottom: '2vh'}}
/>

The **required fields** for this upload type are (1) an identifier for the occurrence (subject) you are linking to (catalog number, other catalog number, or occurrenceID) and (2) scientific name (of the object association being added).

Optional fields ([defined below](/docs/Collection_Manager_Guide/Importing_Uploading/linked_resources#table-1-linked-resources-upload-fields)) include accordingTo, basisOfRecord, establishedDate, notes, objectID, and relationshipID.

### Table 1. Linked Resources Upload Fields

:::note

The **Data Type** column defines what type of data (e.g., text or numeric) can be included in this field, as well as the maximum number of characters that are allowed in the field. If the number of characters in your input file exceeds this maximum, the upload process will fail.

:::

| Field Name                                                                                         | Data Type (Length in characters) | Description                                                                                                                                                                                                                 |
| -------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| subject identifier: [**catalogNumber**](https://dwc.tdwg.org/terms/#dwc:catalogNumber)             | Text (32)                        | The primary human-readable identifier for the subject record you are linking to.                                                                                                                                            |
| subject identifier: [**otherCatalogNumbers**](https://dwc.tdwg.org/terms/#dwc:otherCatalogNumbers) | Text (45)                        | An alternative catalog number stored as an "Additional Identifier" in the portal for the subject record you are linking to. See [this page](/docs/Editor_Guide/Editing_Searching_Records/catalog_numbers) for more context. |
| subject identifier: [**occurrenceID**](https://dwc.tdwg.org/terms/#dwc:occurrenceID)               | Text (255)                       | The global unique identifier (GUID) of the subject record you are linking to.                                                                                                                                               |
| [**accordingTo**](https://dwc.tdwg.org/terms/#dwc:relationshipAccordingTo)                         | Text (45)                        | The source asserting the relationship between the subject and object.                                                                                                                                                       |
| [**basisOfRecord**](https://dwc.tdwg.org/terms/#dwc:basisOfRecord)                                 | Text (45)                        | The nature of the record, from the Darwin Core controlled vocabulary. The most commonly used are _PreservedSpecimen_, _FossilSpecimen_, and _HumanObservation_.                                                             |
| [**establishedDate**](https://dwc.tdwg.org/terms/#dwc:relationshipEstablishedDate)                 | Datetime                         | The date when the relationship between the subject and the object was asserted.                                                                                                                                             |
| [**notes**](https://dwc.tdwg.org/terms/#dwc:relationshipRemarks)                                   | Text (250)                       | Comments about the relationship between the subject and the object.                                                                                                                                                         |
| [**objectID**](https://dwc.tdwg.org/terms/#dwc:relatedResourceID)                                  | Text (250)                       | An identifier for a related resource (the object, rather than the subject of the relationship).                                                                                                                             |
| object identifier: [**catalogNumber**](https://dwc.tdwg.org/terms/#dwc:catalogNumber)              | Text (32)                        | The primary human-readable identifier for the object record you are linking to the subject.                                                                                                                                 |
| object identifier:occid                                                                            | Integer (10)                     | The occid (internal Symbiota reference number) for the object record you are linking to the subject. The occid is not the same as the occurrenceID (see below).                                                             |
| object identifier: [**occurrenceID**](https://dwc.tdwg.org/terms/#dwc:occurrenceID)                | Text (255)                       | The global unique identifier (GUID) of the object record you are linking to the subject.                                                                                                                                    |
| [**relationshipID**](https://dwc.tdwg.org/terms/#dwc:relationshipOfResourceID)                     | Text (45)                        | An identifier for the relationship type that connects the subject to its object.                                                                                                                                            |
| resourceUrl                                                                                        | Text (250)                       | A URL/link to the object in the association/relationship.                                                                                                                                                                   |
| verbatimSciname                                                                                    | Text (250)                       | The taxonomic name of the object of the association/relationship.                                                                                                                                                           |

### Recorded Tutorial

<ReactPlayer
  playing={false}
  controls
  url="https://www.youtube.com/watch?v=Hay3hpGeHNs"
/>
