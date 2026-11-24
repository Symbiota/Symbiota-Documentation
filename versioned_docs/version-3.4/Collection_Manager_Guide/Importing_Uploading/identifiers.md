---
title: "Additional Identifiers"
date: 2026-11-24
lastmod: 2026-11-24
sidebar_position: 6
authors: ["Katie Pearson"]
editors: ["Lindsay Walker"]
keywords:
  [
    "identifiers",
    "catalog numbers",
    "accession numbers"
  ]
---

Symbiota portals support multiple identifiers associated with records. Historically called "other catalog numbers", these identifiers may be, for example, historic accession numbers, National Park accession numbers, sample numbers, or others.

Additional identifiers may be uploaded in batch using the Extended Data importer as follows:

  1. Navigate to your Administration Control Panel (_click My Profile, then the name of the collection in the Collection Management box_).
  2. Click Import/Update Specimen Records, then select "Extended Data Import".
  3. Click the "Choose File" button to upload a properly formatted associations file into the uploader (see sections below for formatting requirements).
  4. Select "Identifiers" from the Import Type dropdown menu.
  5. Click Initialize Upload.
  6. On the resulting page, you will be able to map the fields in your uploaded file (on the left) with the available identifier fields (on the right). Besides the "subject identifier" fields, you can map the following:
      * **IdentifierName**: this is a prefix that will appear in front of the associated identifierValue. It can be used to label the type of identifier that is being presented, for example, "NPS Accession #" or "Old Accession Number".
      * **IdentifierValue**: this is the actual value of the identifier (e.g., "12345" or "ROCH0381-12").
    
      Together, upon import, the identifier name and value are displayed as, e.g., "NPS Accesion #: 12345" or "Old Accession Number: ROCH0381-12".

  :::tip

  Make sure that at least one of the "subject identifier" fields is mapped (see image below). I.e., you have included a value for the catalog number, additional identifier/otherCatalogNumbers, occurrence ID, or Symbiota ID (occid) **of the specimens to which your identifiers should link**. Individual values of subject identifier may be duplicated, for example, if multiple identifiers are being added to a single specimen.

  :::

  7. Once your fields have been satisfactorily mapped, click Import Data. The result of the import will be displayed, record-by-record, on the next screen.

  ![Batch Identifier Upload](/img/identifierupload.PNG)