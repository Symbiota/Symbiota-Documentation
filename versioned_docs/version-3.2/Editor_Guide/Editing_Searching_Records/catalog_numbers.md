---
title: "Catalog Numbers"
date: 2022-02-28
lastmod: 2022-04-14
draft: false
authors: ["Katie Pearson, Ed Gilbert"]
keywords:
  [
    "edit",
    "fields",
    "data fields",
    "terms",
    "dwc terms",
    "catalog number",
    "tag names",
  ]
---

:::info

This page describes the usage of Catalog Numbers and Other Catalog Numbers in Symbiota portals.

:::

### Catalog Numbers

Catalog numbers are important to assign to each record because they act as unique identifiers for each record. This field should be used to store the barcode or the accession number (herbaria only). This field should be unique for each collection, for example, by including the collection acronym (e.g., ASU00012345, WIS-L-001456). Use of leading zeros is recommended to enable correct sorting in the Symbiota interface.

### Tag Name / Additional Identifier Values (= Other Catalog Numbers)

Because specimens may be associated with multiple catalog numbers / identifiers, Symbiota portals have a tool that allows multiple values for Other Catalog Number. In the Occurrence Editor, this tool is located to the right of the Catalog Number field, and it includes boxes for "Tag Names" and "Additional Identifier Values".

![Other Catalog Numbers](/img/othercatalognumbertag.png)

The **Tag Name** field is an _optional_ field that can be used to label the type of identifier being applied to the specimen. Tag Names are generally collection-specific (i.e., there are no recommended values). Common tags may include: Previous Catalog Number, Old Catalog #, Accession Number, NPS #, NPS Accession #, Secondary OccurrenceID, etc. The **Tag Name** field can be left blank if you do not wish to label the type of Other Catalog Number / Identifier.

The **Additional Identifier Value** field is where you can enter the alphanumeric value of the Other Catalog Number / Additional Identifier. For example, if you have an old accession number of 45678, you can enter "Accession #" in the **Tag Name** field, and 45678 into the **Additional Identifier Value** field. Alternatively, you can leave **Tag Name** blank and only enter a value into the **Additional Identifier Value** field.

:::note

These tools were released in March 2022 and are under active development. For this reason, some functionalities are still coming online. In particular, searching based on Other Catalog Numbers may produce incomplete results until all values of Other Catalog Number are transferred into the new Tag Name + Additional Identifier Value system.

:::

#### How do I search for Other Catalog Numbers?

Values entered in the **Tag Name** + **Additional Identifier Value** system are displayed in the **Other Catalog Number** field in the table display of a regular search. Because the **Tag Name** and **Additional Identifier Value** fields are separated, you can search for values of Other Catalog Number without having to include the tag name of the identifier. For example, if you search for Other Catalog Number "12345", the results would include things like "Accession #: 12345" and "NPS #: 12345". _The search will be conducted based off of the number/value rather than the tag name_.

#### What is the difference between the **Other Catalog Number** field and the **Tag Name** + **Additional Identifier Value** system?

On the technical side, the Other Catalog Number field was a single text field, and the new Tag Name + Additional Identifier Value is a new table in the Symbiota schema (i.e., database structure). However, to a user, the function of these two systems are essentially the same. The **Tag Name** + **Additional Identifier Value** system was created to facilitate smarter searching for values of Other Catalog Number. Values entered in the **Tag Name** + **Additional Identifier Value** system are displayed in the **Other Catalog Number** field in the table display of a regular search. The Tag Name (if it exists) is listed first, followed by a colon, then the Additional Identifier Value (e.g., "NPS Accession #: 98765). If there are multiple identifiers, they are concatenated into the Other Catalog Number field and separated by semicolons (e.g., "NPS Accession #: 98765; Voucher Number: 12345).

#### How are **Tag Names** and **Additional Identifier Values displayed** in a search?"

Values entered in the **Tag Name** + **Additional Identifier Value** system are displayed in the **Other Catalog Number** field in the table display of a regular search. The Tag Name (if it exists) is listed first, followed by a colon, then the Additional Identifier Value (e.g., "NPS Accession #: 98765). If there are multiple identifiers, they are concatenated into the Other Catalog Number field and separated by semicolons (e.g., "NPS Accession #: 98765; Voucher Number: 12345).

#### How are **Tag Names** and **Additional Identifier Values displayed** in a data download?"

Just like when you conduct a search on the Other Catalog Numbers field, values entered in the **Tag Name** + **Additional Identifier Value** system are displayed in the **Other Catalog Number** field. The Tag Name (if it exists) is listed first, followed by a colon, then the Additional Identifier Value (e.g., "NPS Accession #: 98765). If there are multiple identifiers, they are concatenated into the Other Catalog Numbers field and separated by semicolons (e.g., "NPS Accession #: 98765; Voucher Number: 12345). This is also how the data are presented in a Darwin Core Archive.

### Duplicate Catalog and Other Catalog Numbers

Collection administrators can identify and resolve duplicate catalog numbers or other catalog numbers using the [Data Cleaning Tools](/Collection_Manager_Guide/Data_Cleaning/compare_duplicate_ids).
