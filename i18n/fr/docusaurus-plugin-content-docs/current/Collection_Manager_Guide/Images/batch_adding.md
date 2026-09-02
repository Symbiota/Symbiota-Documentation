---
title: "Batch Adding Images/Media"
date: 2021-10-06
modified: 2026-02-05
sidebar_position: 5
authors: ["Ed Gilbert","Katie Pearson"]
editors: ["Katie Pearson", "Lindsay Walker"]
keywords: ["images"]
---

:::info

This page describes general workflows for adding multiple media resources (e.g., images) to a portal at one time. Media resources are not stored within a Symbiota database. Instead, the URLs of the media resources are mapped to specimen records. Contact the portal manager to inquire about the workflows supported by a given portal.

:::

Media resources (e.g., images) associated with records in a Symbiota portal may be **Externally Hosted** or **Internally Hosted**.

* **Externally Hosted** media resources are those stored on servers that are unrelated to the Symbiota portal (e.g., are housed at another institution). These external servers provide media links, which can then be loaded into the Symbiota database.

* **Internally Hosted** media resources are those stored on servers that are write-accessible to the Symbiota portal server. For example, if you coordinate with the Symbiota Support Hub to batch upload images to one of their hosted portals (e.g., SEINet, Bryophyte Portal), your images are Internally Hosted.

:::tip

Images uploaded or linked to specimens in a Symbiota portal should be JPGs or in another web-friendly format. It is recommended that individual files are no larger than 8 MB to allow users with slower connectivity to view them within a reasonable timeframe.

:::

#### Batch Adding Externally Hosted Media Resources

Externally Hosted media resources can be added to Symbiota records using one of three primary methods: (1) using the URL mapping tool and a [spreadsheet of catalog numbers with media URLs](/Collection_Manager_Guide/Images/media_upload_url); (2) mapping a column of media links to the associatedMedia field when conducting a Full Text File Upload or Skeletal File Upload. For more information about uploading text files, see [this page](/Collection_Manager_Guide/Importing_Uploading/). (If you already have data in the portal, and you just want to add media links, do NOT use Full Text File Upload); or (3) importing a Darwin Core Archive of your data with a fully-populated [multimedia extension](https://rs.gbif.org/extension/gbif/1.0/multimedia.xml).

#### Batch Adding Internally Hosted Media Resources

There are several workflows used to batch upload/link internally hosted specimen media resources. Batch processing typically consists of two separate steps: (1) Loading media resources onto a web server, and (2) Mapping image URLs to Symbiota occurrence records. Step (2) is possible when media resources are named according to the catalog number or other catalog number associated with the record in the portal.

Storage of a large number of images or other media resources on servers associated with a Symbiota portal may require an image-hosting agreement and/or incur image-hosting costs. Check with the portal administrator for more information about your portal's image hosting allowances and workflows. For SSH-hosted portals, please contact the Symbiota Support Hub (help@symbiota.org).
