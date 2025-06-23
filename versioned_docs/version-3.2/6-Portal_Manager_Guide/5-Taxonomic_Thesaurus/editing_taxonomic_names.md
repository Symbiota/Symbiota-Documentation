---
title: "Editing Taxonomic Names / Synonymy"
date: 2023-02-09
lastmod: 2023-02-09
authors: ["Katie Pearson"]
editors: [""]
draft: false
weight: 15
keywords:
  [
    "taxonomy",
    "taxonomic thesaurus",
    "synonymy",
    "accepted names",
    "locality security",
  ]
---

:::note

A user must have Super Administrator or Taxonomic Editor permissions to add to or edit the thesaurus.

:::

The taxonomic thesaurus of a Symbiota portal requires frequent curation due to taxonomic changes. Editing taxonomic names and synonymy requires some care because of the many linkages between taxa and their children taxa and synonyms.

1. Navigate to the taxonomic thesaurus (Sitemap > scroll down to Taxonomy > Taxonomic Tree Viewer), or just add "taxa/taxonomy/taxonomydisplay.php" to your base path.
2. Search for the name of the taxon you would like to edit in the **Taxon** box.
3. Click the pencil icon to the right of the taxon you would like to edit.

### Editing basic information (name, authorship, source, locality security)

- In the Editor tab, you can edit the scientific name, rank, notes, source, and whether the taxon's locality information is globally redacted for all occurrences in the portal. Click the pencil icon in the top right corner of the page to edit these fields.

![Taxon Editing Form](/img/edittaxon.PNG)

### Changing the parent or accepted name of a taxon

- In the Taxonomic Status tab, you can change the parent taxon name or switch the taxon from being accepted to not accepted (or vice versa). Click the pencil icon to the right of the name type that you would like to change.
- Whenever possible, provide a link or citation for the change in acceptance. For example, you might add a link to the a Plants of the World Online entry, a literature citation with DOI, etc.

:::note

If you are changing a taxon to Not Accepted, you must also resolve the accepted status of all children taxa of that taxon individually before the target taxon. The children taxa are listed in the Children Taxa tab and can be accessed and modified through links in that tab.

:::

![Edit Taxonomic Placement](/img/edittaxonomicplacement.PNG)

### Deleting a taxon

- In the Delete tab, you can delete a taxon from the taxonomic thesaurus. Before doing so, you must resolve all linkages to that taxon as listed in this tab.
- To move all the linkages and resources from one taxon to another (e.g., in the case of duplicate taxonomic names entered in the thesaurus), enter the name of the taxon in the Remap Resources to Another Taxon box and click the Remap Taxon button.

![Deleting a Taxon](/img/deletetaxon.PNG)

![Deleting a Taxon](/img/deletetaxon2.PNG)
