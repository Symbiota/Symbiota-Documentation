---
title: "Adding Taxa to the Taxonomic Thesaurus"
date: 2023-02-09
lastmod: 2025-07-15
authors: ["Katie Pearson"]
editors: [""]
draft: false
keywords: ["taxonomy", "taxonomic thesaurus"]
---

:::note

A user must have Super Administrator or Taxonomic Editor permissions to add to or edit the thesaurus.

:::

There are three main ways that a user can add taxonomic names to the taxonomic thesaurus:

1. Individually via the Taxonomy Explorer interface
2. Automatically via the [Taxonomic Cleaning Tools](/Collection_Manager_Guide/Data_Cleaning/taxonomic_cleaning)
3. Batch via the [Taxonomic File Upload Tool](/Portal_Manager_Guide/Taxonomic_Thesaurus/batch_loading)

Additional information about options 1 and 2 are provided below (see the link above for instructions for option 3).

### Adding taxa individually

:::note

Both the parent taxon (e.g., genus of the species you would like to add) and the accepted name of the taxon (if not the name you are adding) must already be in the taxonomic thesaurus for you to add it. If either one of these is missing, you will get an error when you try to complete the form as below.

:::

1. Navigate to the taxonomic thesaurus (Sitemap > scroll down to Taxonomy > Taxonomic Tree Viewer), or just add "taxa/taxonomy/taxonomydisplay.php" to your base path.
2. Click the "add" icon at the top right corner of the screen.
3. Enter information about the taxon in the provided form (see below for guidance).
   ![Taxon Data Entry Form](/img/addnewtaxon.png)

:::tip

If you're copying and pasting the name from another source, you can paste it into the Quick Parser box, then click the Parse button (or press tab on your keyboard). The portal will then attempt to determine the taxon rank and parse the name into its component parts. It's not always perfect, so make sure to check it for accuracy.

:::

* You can copy and paste the entire name (with authorship) into the Quick Parser at the top of the form to have the page attempt to parse out the pieces of the name. Make sure to check that the form has correctly assigned a Taxon Rank and has properly parsed the pieces of the name. If not, manually replace the values in form with the correct ones.
* Select the appropriate value from the Taxon Rank dropdown menu. The fields you will see afterward will depend on the taxon rank that you specify.
* Enter the authorship into the **Author** field.
* For hybrid taxa, select the multiplication symbol from the dropdown list in front of the appropriate field.
* For infraspecific taxa (e.g., varieties or subspecies), use the small field for the infraspecific epithet type (e.g., var., subsp., f.), if applicable, and the long field for the infraspecific epithet.
* Begin to type the name of the parent taxon (i.e., the taxon one taxonomic rank above the taxon you are adding) into the Parent Taxon field and select the correct name from the dropdown list. _If you are adding cultivar with a cultivar epithet or trade name, the parent taxon should be the corresponding genus._
* **IMPORTANT:** Add a link or citation for the source of the scientific name you are adding, for example, a Plants of the World Online entry, a literature citation with DOI, etc.
* You can copy and paste the entire name (with authorship) into the Quick Parser at the top of the form to have the page attempt to parse out the pieces of the name. Make sure to check that the form has correctly assigned a Taxon Rank and has properly parsed the pieces of the name. If not, manually replace the values in form with the correct ones.
* Select the appropriate value from the Taxon Rank dropdown menu. The fields you will see afterward will depend on the taxon rank that you specify.
* Enter the authorship into the **Author** field.
* For hybrid taxa, select the multiplication symbol from the dropdown list in front of the appropriate field.
* For infraspecific taxa (e.g., varieties or subspecies), use the small field for the infraspecific epithet type (e.g., var., subsp., f.), if applicable, and the long field for the infraspecific epithet.
* Begin to type the name of the parent taxon (i.e., the taxon one taxonomic rank above the taxon you are adding) into the Parent Taxon field and select the correct name from the dropdown list. _If you are adding cultivar with a cultivar epithet or trade name, the parent taxon should be the corresponding genus._

:::tip

If you do not find the Parent Name or the Accepted Name in the dropdown lists, you will need to add the parent name or accepted name to the taxonomic thesaurus **first**.

:::

### Batch adding taxa using the Taxonomic Cleaning Tool

The Taxonomic Cleaning Tool is useful not only for cleaning misspellings and errors, but also for adding taxaonomic names to the taxonomic thesaurus. If a taxonomic authority has been enabled in the symbini file, you will be able to cross-reference the un-indexed name in a collection with that taxonomic authority. Running the taxonomic cleaning tool will then auto-import any names that are not indexed in the collection that can be found in that taxonomic thesaurus. See the instructions for using the [Taxonomic Cleaning Tools](/Collection_Manager_Guide/Data_Cleaning/taxonomic_cleaning).
