---
title: "Image/Media URL Upload"
date: 2023-10-31
lastmod: 2025-01-31
weight: 10
authors: ["Katie Pearson"]
editors: ["Lindsay Walker"]
keywords: ["images","media","audio"]
---

:::info

This page describes how to associate externally hosted media resources (e.g., images) with records in your portal using a CSV of links/URLs. 

:::

### Adding Media Resources via URLs
  1. Navigate to your Administration Control Panel (My Profile > Occurrence Management > name of your collection).
  2. Click Import/Update Specimen Records, then select "Extended Data Import".
  3. Click the "Choose File" button to upload a properly formatted associations file into the uploader (see sections below for formatting requirements).
  4. Select "Media Field Map" from the Import Type dropdown menu.
  5. Click the "Initialize Import" button.
  6. Select the [**format**](https://ac.tdwg.org/format/) for your media item from the dropdown list. Note that only one type of format may be uploaded at a time.
  7. Map the fields in your input file (shown on the left) to appropriate target fields (see table below).
  8. If you would like to create a new record for each identifier that does not match an existing identifier in the system, check the box labeled "Link media to new blank record if catalog number does not exist."
  9. Click the Import Data button.

:::tip

When providing media resources via URLs, the URLs should begin with "**https://**" (not "http://") in order for them to display correctly in various browsers. This is especially important for thumbnail images. If you provide media links using URLs containing "https" and they do not display correctly in your Symbiota portal, check that the server that hosts your media resources maintains an SSL certificate that supports the use of "https".

:::

### Setting Up a Media Import File
A template for this upload type can be found [here](/documents/GeneralResourceUploadTemplate.xlsx).

The required fields for this upload type are (1) a subject identifier for the occurrence you are linking to (occurrenceID, catalog number, and/or other catalog number), and (2) originalUrl. The originalUrl should include **a direct link to the desired media resource** (i.e., ideally ending in .jpg or .tif or some other media file extension). Note that uploading a link to a webpage where that media resource may be found (e.g., YouTube) rather than directly to the media resource may result in media not displaying as expected.

Optional fields are included in the table below.

### Media Url Mapping Fields

| Field Name                           | Data Type (Length in characters)                                     | Description                                                                                                                                                                                                                                                                                                                                                                   |
|--------------------------------|------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| subject identifier: [**catalogNumber**](https://dwc.tdwg.org/terms/#dwc:catalogNumber)                           | Text (32)                               | The primary human-readable identifier for the record you are linking the media resource to. |
| subject identifier: [**otherCatalogNumbers**](https://dwc.tdwg.org/terms/#dwc:otherCatalogNumbers)                           | Text (45)                               | An alternative catalog number stored as an "Additional Identifier" in the portal for the record you are linking the media resource to. See [this page](https://biokic.github.io/symbiota-docs/editor/edit/fields/catno/) for more context. |
| subject identifier: [**occurrenceID**](https://dwc.tdwg.org/terms/#dwc:occurrenceID)                           | Text (255)                               | The global unique identifier (GUID) of the record you are linking the media resource to. |
| [**accessRights**](https://dwc.tdwg.org/terms/#dcterms:accessRights)                           | Text (255)                               | A url to the page describing who can access the resource or an indication of its security status.|
| anatomy                           | Text (100)                               | Textual description of the anatomical features visible in the media resource. |
| archiveurl                           | Text (255)                               | A stable link to a publicly available archival media resource (generally a large TIF or RAW file). Not commonly used. |
| caption                           | Text (100)                               | A textual description of the media resource. The caption will be publicly viewable and should ideally be kept brief.|
| copyright                           | Text (255)                               | The organization to which a copyright or license belongs. |
| hashFunction                          | Text (45)                               | Name of the function that was used to generate a hash (fixed-size value representation of the item) for the media item. See [this article](https://en.wikipedia.org/wiki/Hash_function) for more information about hashing.|
| hashValue                          | Text (45)                               | A fixed-size value representation of the media item generated using a given hashing algorithm. See [this article](https://en.wikipedia.org/wiki/Hash_function) for more information about hashing.|
| mediaMD5                          | Text (45)                               | Hash for the media resource created using the MD5 algorithm. See [this article](https://en.wikipedia.org/wiki/Hash_function) for more information about hashing.|
| notes                          | Text (350)                               | Comments or other notes regarding the media resource.|
| originalUrl                          | Text (255)                               | The large or highest-quality version of the media resource. This url will be used to create thumbnail and web-ready versions of images using the thumbnail maintenance tool, if used. |
| [**owner**](http://ns.adobe.com/xap/1.0/rights/Owner)                          | Text (250)                               | The legal owner of the media resource. |
| photographer                          | Text (100)                               | The creator of the media resource. |
| photographerUid                          | Integer (10)                               | The unique number assigned to the Symbiota portal user who created the media resource. Note that this can only be populated in cases when the photographer has a user account in the portal. |
| referenceUrl                          | Text (255)                               | A link to a URL or page that features the media resource in the original software. |
| [**rights**](http://dublincore.org/usage/terms/history/#rightsT-001)                          | Text (255)                               | The rights applied to the media resource dictating appropriate reuse of the item. For example, a [Creative Commons license](https://creativecommons.org/share-your-work/cclicenses/) may be applied here.|
| sortOccurrence                          | Integer (11)                               | The sort order of the media resource as it will appear on the page related to the occurrence record. Lower numbers will be displayed before higher numbers.|
| sourceIdentifier                          | Text (150)                               | A unique identifier belonging to the media resource provided by the source of the media item. |
| thumbnailUrl                          | Text (255)                               | A thumbnail-sized version (e.g., ~300 pixels in the widest dimension) of the media resource (if an image) to be shown quickly in search results.|
| url                          | Text (255)                               | A web-ready version of the media item (if an image), such as a JPG no larger than 2 MB. This is the version that is displayed as "medium resolution" in the occurrence editor.|
