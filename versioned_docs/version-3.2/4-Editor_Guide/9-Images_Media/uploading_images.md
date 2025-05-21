---
title: "Uploading Images/Media"
date: 2021-10-06
lastmod: 2025-05-12
weight: 10
draft: false
authors: ["Ed Gilbert","Ben Brandt","Katie Pearson"]
keywords: ["images"]
---

import ReactPlayer from "react-player";

:::info

This page describes how to upload individual *field* and *specimen*-related media resources (e.g., images) using the Symbiota portal interface. Technically, media resources are **not** stored _within_ a Symbiota database. Instead, the URLs of the media resources are stored. Thus, it is also possible to link media resources that are stored in external servers. For information about the latter option, visit the [Batch Adding/Linking Images](/docs/Editor_Guide/Images_Media/batch_uploading_images) page.

:::

Media resources associated with records in a Symbiota portal may be **Externally Hosted** or **Internally Hosted**.

* **Externally Hosted** media resources are those stored on servers that are unrelated to the Symbiota portal (e.g., are housed at another institution). These external servers provide media links, which can then be loaded into the Symbiota database.

* **Internally Hosted** media resources are those stored on servers that are write-accessible to the Symbiota portal server. For example, if you coordinate with the Symbiota Support Hub to batch upload images to one of their hosted portals (e.g., SEINet, Bryophyte Portal), your images are Internally Hosted.

There are three catefories of media resources that can be linked to a Symbiota portal. Instructions for uploading individual media resources of each of these types are provided below. **The below instructions assume that your portal is configured with an media directory that allows upload of media resources directly through the interface.** This is the case with most portals, but if you run into issues, you may need to contact a portal administrator.

### Individual specimen media resources

1. Log in to your account in the portal.
2. Navigate to the Occurrence Editor page of the specimen to which you would like to add an image (My Profile > Occurrence Management > name of collection > Edit Existing Occurrence Records > conduct search for specimen)
3. Click the Media tab.

![Media Tab](/img/mediatab.jpg)

4. If an media resource has already been added to the specimen, and you wish to add another click the add (plus sign) icon at the top right of the window. Otherwise, the media resource uploading interface will be highlighted in yellow on this tab.
5. Click the Choose File button and navigate to the file you wish to upload. If you instead have a URL to the media resource, you can click the Enter URL link and paste the URL into the resulting field instead.
6. Enter any additional information, if desired, in the other fields.

:::tip

You can enter a number into the Sort field if you wish to define the order in which mutliple media resources will appear on the occurrence page. If you enter a number greater than 500 in the Sort field, that media resource will be displayed on the Occurrence Details page but not on the Taxon Profile page for that taxon. This is ideal for poor-quality or sensitive images (e.g. road kills). 

:::

7. Click the Submit New Resource button.

### Field media resource without location information

Images without specific locality information (e.g. lat/long coordinates) are linked only to the scientific name of the organism. These images can be viewed on the Taxon Profile Page, which has general information such as descriptions, distribution maps, synonyms, and common names. To upload an image:

1. Log in to your account in the portal.

:::note

You must have Taxon Profile Editor permissions to do the following

:::

2. Navigate to the page of the taxon you wish to edit. To do so, you may be able to:
    *  Click Sitemap, then Taxonomic Tree Viewer or Taxonomy Explorer. Search for the taxon of interest and click its name.
    *  Perform a quick search on the home page for the taxon of interest.
3. Click the pencil icon at the top right corner of the taxon page.
4. Click the Add Media tab.
5. Select the media file you would like to upload from Choose File, then enter any additional information in the provided fields.
    * The **Sort Sequence** field allows you to determine the order of the media resources that will show up on the taxon profile. The higher the number, the further down the priority list the media resource will be.
7. Click the Upload Media Resource button.
8. Field media resources (e.g., field images) are uploaded and managed through the Taxon Profile Editing interface. Users with Taxon Profile editing permissions can submit a media resource by clicking on the editing symbol located in the upper right of any Taxon Profile page, or through the image submission links available on the sitemap page. Field media with specific locality details (e.g. coordinates) can be loaded as Image Vouchers (see below). 

### Media vouchers (field images with location information)

Field-based media with specific locality information can serve as vouchers for field observations of many birds, mammals, and easy-to-identify plants. There are, however, some taxonomic groups that typically require microscopic or chemical analysis for accurate identification (e.g. lichens, bryophytes, fungi). For such organisms, field-based media such as images will have limited value. For this reason, some data portals might not allow the submission of observations without a physical specimen.

It is particularly important that media resources intended as vouchers for an observation be of high quality and clearly demonstrate diagnostic morphology of the organism. Data fields required for an image to qualify as a voucher include: observer name, observation date, country, state, locality description, latitude, longitude, and at least one image.

As is the case with images of physical specimen, Media Vouchers are displayed on both the Occurrence Details and the Taxon Profile pages. Media-supported observations can be uploaded in a General Research Observation profile. The following video describes how to gain access to and submit observations to such a collection:

<ReactPlayer
  playing={false}
  controls
  url="http://www.youtube.com/watch?v=4uj15JCzHg4"
/>
