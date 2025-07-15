---
title: "Processing Status"
date: 2024-06-10
lastmod: 2024-09-27
draft: false
authors: ["Lindsay Walker", "Katie Pearson"]
keywords: ["crowdsourcing", "transcription", "editing"]
---

:::info

This page explains the _Processing Status_ field and how it is handled in Symbiota portals.

:::

_Processing Status_ is a Symbiota-specific field that can be used to track the digitization status (or any other workflow status) of records. It is not publicly visible nor is it included in Darwin Core Archive exports. The default values available for this field are:

- Unprocessed
- Unprocessed/NLP
- Stage 1
- Stage 2
- Stage 3
- Pending Review-nfn
- Pending Review
- Expert Required
- Reviewed
- Closed

There are no standard definitions for these status values. Collaborative digitization projects will often define processing status values in a way that helps them manage their workflows and reporting (e.g., see Appendix 2 in [this document](https://www.capturingcaliforniasflowers.org/uploads/1/6/3/7/16372936/6_labeltranscriptionguide_jan2020.docx) from the California Phenology Network).

Processing Status integrates with the following tools in Symbiota portals:

- [Crowdsourcing module](/docs/Editor_Guide/Crowdsourcing): when _Processing Status_="Unprocessed" **and** a record has at least one associated image, it is available to be added to the [Crowdsourcing queue](/docs/Collection_Manager_Guide/Crowdsourcing/adding_crowdsourcing).
- [Reports](/docs/Collection_Manager_Guide/collection_statistics): the numbers of records per processing status can be quickly viewed by a collection administrator through the Reports tab of the Processing Toolbox.

The Processing Status can also be batch edited and searched using Data Editor Search Form (_Data Editor Control Panel > Edit Existing Occurrence Records_):

![Occurrence Editor Tabs](/img/processingstatusquery.png)

### Editing Processing Status

_Processing Status_ and _Status Auto-Set_ are located under the Curation section of the Occurrence Editor form:
![Occurrence Editor Tabs](/img/processingstatus.png)

#### Manually

_Processing Status_ can be manually updated from within the Curation box on the Occurrence Editor. This method is most useful when making on-off edits to records that do not require extensive workflow tracking.

#### Automatically

The _Status Auto-Set_ menu is used for making changes to _Processing Status_ when multiple records are to be edited. If a user needs to edit numerous records, but they do not want to remember to manually update the _Processing Status_ as they work, _Status Auto-Set_ can be used to automatically update this field, for example, during image transcription. Once _Status Auto-Set_ is set, any records a user subsequently edits will receive that new _Processing Status_ value.

:::warning

Do not use the **Status Auto-Set** field if you want to change the processing status for a single record! Make sure you are using the Processing Status field inside the Curation box.

:::

:::note

_Status Auto-Set_ is user-specific and relies on browser cookies to function.

:::
