---
title: "Adding Taxa to the Taxonomic Thesaurus"
date: 2023-02-09
lastmod: 2025-05-14
authors: ["Katie Pearson"]
editors: [""]
draft: false
weight: 5
keywords: ["taxonomy", "taxonomic thesaurus"]
---

:::note

A user must have Super Administrator or Taxonomic Editor permissions to add to or edit the thesaurus.

:::

There are three main ways that a user can add taxonomic names to the taxonomic thesaurus:

1. Individually via the Taxonomy Explorer interface
2. Automatically via the [Taxonomic Cleaning Tools](/docs/Collection_Manager_Guide/Data_Cleaning/taxonomic_cleaning)
3. Batch via the [Taxonomic File Upload Tool](/docs/Portal_Manager_Guide/Taxonomic_Thesaurus/batch_loading)

Additional information about options 1 and 2 are provided below (see the link above for instructions for option 3).

### Adding taxa individually

:::note

Both the parent taxon (e.g., genus of the species you would like to add) and the accepted name of the taxon (if not the name you are adding) must already be in the taxonomic thesaurus for you to add it. If either one of these is missing, you will get an error when you try to complete the form as below.

:::

1. Navigate to the taxonomic thesaurus (Sitemap > scroll down to Taxonomy > Taxonomic Tree Viewer), or just add "taxa/taxonomy/taxonomydisplay.php" to your base path.
2. Click the plus sign icon at the top right corner of the screen.
3. Enter information about the taxon in the provided form.
   ![Taxon Data Entry Form](/img/addnewtaxon.png)

:::tip

If you're copying and pasting the name from another source, you can paste it into the Quick Parser box, then click the Parse button (or press tab on your keyboard). The portal will then attempt to determine the taxon rank and parse the name into its component parts. It's not always perfect, so make sure to check it for accuracy.

:::

- Select the appropriate taxon rank from the dropdown **Taxon Rank** field. This will determine what fields are available for you to enter information into.
- Enter the authorship into the **Author** field. This should be the authorship of the lowest ranked taxa you are adding (i.e., the authorship of the subspecies, if you're adding a subspecific name)
- For hybrid taxa, select the multiplication symbol from the dropdown list in front of the Specific Epithet field
- For infraspecific taxa, use the small Infraspecific Epiethet field for the infraspecific epithet type (e.g., var., subsp., f.), if applicable, and the longer field for the infraspecific epithet.
- **IMPORTANT:** Add a link or citation for the source of the scientific name you are adding, for example, a Plants of the World Online entry, a literature citation with DOI, etc.
- If the taxonomic name you are adding is the currently accepted name, leave the _Accepted_ radio button checked. If the taxonomic name is not accepted, select the _Not Accepted_ radio button and enter the accepted name in the provided field. _If the name of the accepted species is not found in the taxonomic thesaurus (i.e., does not appear in the dropdown menu), you must add that name to the thesaurus first._
- If the taxonomic name you are entering is a protected species and locality data should be redacted for **ALL** records of this taxon in the portal, select Hide Locality Details from the **Locality Security** dropdown menu.

### Batch adding taxa using the Taxonomic Cleaning Tool

The Taxonomic Cleaning Tool is useful not only for cleaning misspellings and errors, but also for adding taxaonomic names to the taxonomic thesaurus. If a taxonomic authority has been enabled in the symbini file, you will be able to cross-reference the un-indexed name in a collection with that taxonomic authority. Running the taxonomic cleaning tool will then auto-import any names that are not indexed in the collection that can be found in that taxonomic thesaurus. See the instructions for using the [Taxonomic Cleaning Tools](/docs/Collection_Manager_Guide/Data_Cleaning/taxonomic_cleaning).
