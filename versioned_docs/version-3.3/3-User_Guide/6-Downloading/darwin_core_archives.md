---
title: "Darwin Core Archives"
date: 2025-01-30
lastmod: 2025-12-23
draft: false
weight: 30
authors: ["Katie Pearson"]
keywords: ["Download", "Darwin Core", "DwC-A", "Archive", "Extensions"]
---

:::info

This page describes how Darwin Core Archives represent data from Symbiota portals.

:::

A [Darwin Core Archive](https://ipt.gbif.org/manual/en/ipt/latest/dwca-guide) is a package of biodiversity data that aligns with the Darwin Core international data standard. The Symbiota data schema was designed to largely align with this schema for data imports and exports.

A Darwin Core Archive (DwC-A) downloaded from a Symbiota portal consists of a core [**occurrences**](https://rs.gbif.org/core/dwc_occurrence_2024-02-23.xml) file, containing the core biodiversity data relating to records of a taxon at a place and time (an "occurrence"), a metafile (meta.xml) that describes the structure of the Darwin Core Archive, a metadata file (eml.xml) describing the dataset, and multiple "extension" files with additional data regarding the occurrences. The "id" column in the occurrences file is the central link between the _occurrences_ file and its extensions.

![Darwin Core Star Schema](/img/dwca.jpg)

The following extensions are currently supported by Symbiota downloads:

* [**identifications**](https://rs.gbif.org/extension/identification_history_2024-02-19.xml): contains data regarding one or many taxonomic identifications of an occurrence. This file contains the history of taxonomic identification or annotation  of the specimen. For example, if the occurrences file contains one record that was identified three times, the _identifications_ file will contain three rows, one for each taxonomic identification. In Symbiota portals, every identification must have a scientific name, a "dateIdentified", and an "identifiedBy" value.

* [**multimedia**](https://rs.gbif.org/extension/ac/audiovisual_2024_11_07.xml): contains data about any media resources (e.g., images, sound recordings) linked to the occurrence. For example, if the occurrences file contains one record with one image and one audio file, the _multimedia_ extension will contain two rows, one for each media resources.

:::tip

**A DwC-A download does not contain the actual image files** linked to the occurrence data. The multimedia file consists of _links to_ where those images can be viewed/downloaded. For guidance on downloading images, [see this article](/User_Guide/Downloading/download_images).

:::

* [**measurementOrFact**](https://rs.gbif.org/extension/obis/extended_measurement_or_fact_2023-08-28.xml): contains data about any measurements or traits regarding the occurrence. This file is where data from the [Traits Module](/Editor_Guide/Traits/) are stored. This file consists of one line for every measurement value applied to an occurrence. In cases of hierarchical traits, multiple measurements may correspond to a single "trait". For example, if the trait "Flowers Present" is nested under "Reproductive", a single occurrence may have multiple rows in the measurementOrFact extension, one corresponding to "Flowers Present" and one corresponding to "Reproductive." Symbiota portals export the "Extended Measurement or Fact Extension" do support unique identifiers applied to trait values, such as links to relevant ontologies or scoring protocols.

* [**materialSample**](https://rs.gbif.org/extension/ggbn/materialsample.xml): contains data about [material samples](/Editor_Guide/Editing_Searching_Records/material_samples/) related to occurrences. As with all extensions, there is often a one-to-many relationship between occurrences and material samples, with one occurrence related to many material samples.

* [**identifiers**](https://rs.gbif.org/extension/gbif/1.0/identifier.xml): contains any alternative identifier values belonging to the occurrences, as stored in the "Tag Name / Alternative Identifier Values" table ([see this article](/Editor_Guide/Editing_Searching_Records/catalog_numbers)). Other catalog numbers, accession numbers, or anything else recorded in the 'Additional Identifier' fields is exported into this extension.
