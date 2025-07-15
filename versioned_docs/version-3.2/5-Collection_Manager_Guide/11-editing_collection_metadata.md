---
title: "Editing Collection Metadata and Contact Info"
date: 2021-11-16
lastmod: 2023-08-30
weight: 60
draft: false
authors: ["Katie Pearson", "Lindsay Walker"]
keywords: ["collection name", "metadata", "contact info"]
---

:::info

This page describes how to change or add contact information or information about your collection (e.g., homepage, collection title, acronym, description). New collections will be asked to complete [this form](https://forms.gle/JcSB35c9wyPxiFPi7) to facilitate the intial setup of your of collection profile; this information can be modified once the profile is established using the instructions below. If you opt to [publish data to GBIF](/Collection_Manager_Guide/Data_Publishing/publishing_gbif), the same metadata provided about your collection will also be shared to GBIF.

:::

![Edit Metadata Example](/img/metadata_editor.png)

## Collections Metadata

1. Navigate to your Administration Control Panel (_My Profile > Occurrence Management > name of collection_).
2. In the Administration Control Panel, click Edit Metadata. In the first tab you can change:
   - **Institution Code** - The name (or acronym) in use by the institution having custody of the occurrence records. This field is required. For more details, see Darwin Core definition. Herbaria should also register this code with [IndexHerbariorum](https://sweetgum.nybg.org/science/ih/).
   - **Collection Code** - The name, acronym, or code identifying the collection or data set from which the record was derived. This field is optional. For more details, see Darwin Core definition.
   - **Collection Name** - Title of your collection, e.g. "Arizona State University Vascular Plant Herbarium".
   - **Description** - A brief description of your collection and what it contains (2000 character maximum). Details can include information such as the collection's taxonomic and geographic scope and strengths, as well as other major highlights (i.e. notable collectors, time intervals, and/or field expeditions).
   - **Latitude/Longitude** - Submit coordinates using the globe icon.
   - **Category** (if applicable) - e.g., bryophytes, lichens, fishes if more than one taxonomic group in a single portal
   - **Allow Public Edits** - Checking ["Allow Public Edits"](/Collection_Manager_Guide/Comments_Feedback/public_edits) will allow any user logged into the system to modify specimen records and resolve errors found within the collection. However, if the user does not have explicit authorization for the given collection, edits will not be applied until they are reviewed and approved by collection administrator.
   - **License** - A legal document giving official permission to do something with the resource. This field can be limited to a set of values by modifying the portal's central configuration file. For more details, see [Darwin Core definition](http://rs.tdwg.org/dwc/terms/index.htm#dcterms:license) and the [Creative Commons Licenses](https://creativecommons.org//cclicenses/).
   - **Rights Holder** - The organization or person managing or owning the rights of the resource. For more details, see [Darwin Core definition](http://rs.tdwg.org/dwc/terms/index.htm#dcterms:rightsHolder).
   - **Access Rights** - Information or a URL link to page with details explaining how one can use the data. See [Darwin Core definition](http://rs.tdwg.org/dwc/terms/index.htm#dcterms:accessRights).
   - **Dataset Type** - Preserved Specimens signify a collection type that contains physical samples that are available for inspection by researchers and taxonomic experts. Use Observations when the record is not based on a physical specimen. Personal Observation Management is a dataset where registered users can independently manage their own subset of records. Records entered into this dataset are explicitly linked to the user's profile and can only be edited by them. This type of collection is typically used by field researchers to manage their collection data and print labels prior to depositing the physical material within a collection. Even though personal collections are represented by a physical sample, they are classified as "observations" until the physical material is publicly available within a collection.
   - **Management Type** - Use "Snapshot" when there is a separate in-house database maintained in the collection and the dataset within the Symbiota portal is only a periodically updated snapshot of the central database. A "Live" dataset is when the data is managed directly within the portal and the central database is the portal data.
   - **Global Unique Identifier (GUID) Source** - Occurrence Id is generally used for Snapshot datasets when a Global Unique Identifier (GUID) field is supplied by the source database (e.g. Specify database) and the GUID is mapped to the occurrenceIdfield. The use of the Occurrence Id as the GUID is not recommended for live datasets. Catalog Number can be used when the value within the catalog number field is globally unique. The Symbiota Generated GUID (UUID) option will trigger the Symbiota data portal to automatically generate UUID GUIDs for each record. This option is recommended for many for Live Datasets but not allowed for Snapshot collections that are managed in local management system. iDigBio's GUID Guide can be found [here](https://www.figma.com/proto/ogNJfQqQkXkFo1ZA87gtsc/GUID-Explorable?node-id=2%3A3&scaling=contain&page-id=0%3A1&starting-point-node-id=2%3A3).
   - **Publishing to GBIF** - Activates GBIF publishing tools available within Darwin Core Archive Publishing menu option.
   - **Icon URL** - Upload an icon image file or enter the URL of an image icon that represents the collection. If entering the URL of an image already located on a server, click on "Enter URL". The URL path can be absolute or relative. The use of icons are optional.
   - **Sort Sequence** - Leave this field empty if you want the collections to sort alphabetically (default)
   - **Collection ID** - Global Unique Identifier for this collection (see dwc:collectionID): If your collection already has a previously assigned GUID, that identifier should be represented here. For physical specimens, the recommended best practice is to use an identifier from a collections registry such as the [Global Registry of Biodiversity Repositories](http://grbio.org).

## Collection Contacts

1. Navigate to your Administration Control Panel (_My Profile > Occurrence Management > name of collection_).
2. In the Administration Control Panel, click **Contacts & Resources**. In this tab you can change:
3. In the Contacts & Resource tab, you can add links to other resources (e.g., homepages or lab pages), add or edit contact information, or add or edit the mailing address for your institution. Click a pencil icon to edit or an X icon to delete existing links/resources. **Listing at least two contacts is strongly recommended**, and that, when available, one of these contacts includes a generic departmental email (e.g. yourherbarium@youruniversity.edu).

|                  ![Collection Contacts](/img/contactsexample.png)                   |
| :---------------------------------------------------------------------------------: |
| Contact information publicly displays at the top of your collection's profile page. |
