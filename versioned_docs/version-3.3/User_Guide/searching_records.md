---
title: "Searching for Records"
date: 2021-10-11
lastmod: 2025-07-15
authors: ["Katie Pearson, Lindsay Walker"]
draft: false
sidebar_position: 110
keywords: ["search", "specimens", "observations"]
---

Symbiota portals serve data from specimens and observations according to regional and taxonomic themes. To search and view these data, you can use one of the tools described below.

## Basic Search

1. From the home page of the portal, click Search Collections from the top or side menu.

### Symbiota 3.1 and beyond

:::note

The following steps 2-3 apply to Symbiota portals that have codebases that are version 3.1 or higher. If you are using a version prior to Symbiota 3.1, return to to [Pre-Symbiota 3.1](#pre-symbiota-31) instructions.

:::

2. On the next page, you can enter search criteria to find records of interest. Click the Expand All Sections button if you would like to see all of the possible criteria you can search on.

![Symbiota 3.1 search interface](/img/newsamplesearch.png)

- The criteria you can use will vary depending on the portal, but generally include the following categories: 1) Taxonomic Criteria, 2) Locality Criteria, 3) Latitude and Longitude, 4) Collector Criteria, 5) Specimen Criteria, and 6) Trait Criteria (if enabled).
- Any number of criteria can be entered and search at the same time. The criteria you are searching by will show up as "chips" on the right side of the screen under "Criteria." Click the X on any of these chips to remove them from your search criteria.
- You can search for multiple values in a single field by separating the values by commas. For example, if you want to search by both Kern and Inyo counties, you should enter "Kern,Inyo" in the county field.
- **Latitude and Longitude**: To define a latitude/longitude bounding box, polygon, or point with radius in which to search, enter the values in the provided fields or click the appropriate button at the top of the Latitude & Longitude search criteria to create the box, shape, or point radius in the mapping interface.
- **Sample Properties**: Here you can search by catalog number or limit your search criteria to only include records that are types (i.e., have a value in the TypeStatus field), records that have media, records that have genetic data, records that are georeferenced, or records that have material samples (if enabled in your portal). You can also opt to include cultivated or captive records in this criterion category.
- **Trait Criteria**: Here you can limit your search to include only records with certain values of trait criteria. Note that the search will only be able to provide you with records that have been scored for those particular traits, and the absence of a certain trait value applied to a specimen does not necessarily indicate that a trait value does not apply to a record. Furthermore, the record is an "OR" search. Selecting multiple trait values will return all records with **at least one** of those traits.
- **Associations**: Here you can search for documentated relationships between organisms or resources. Learn more about assocations [here](/Editor_Guide/linking_records/). Click the "Association Type" dropdown list to view the types of relationships supported in the portal you are searching. As with all searches, _search results depend on whether a relationship has been formally established between two things_. For example, while a record may list several associated taxa on its specimen label, those might not have been entered as formal relationships in the database structure. You may still find relationships in the "associatedTaxa" field that cannot be found through this search interface. Associations may be:
      - Internal occurrence: relationships between records in the portal you are searching
      - External occurrence: relationships between a record in the portal and a record in a different database
      - Non-occurrence taxonomic: relationship that is not documented by two specimen records (e.g., a specimen is listed as having an association with another taxon on its specimen label)
      - Non-occurrence reference: relationship of a record in the portal with another resource, such as a website or publication

3. Click the Search button on the far right to conduct your search.

:::tip

To return to the Search Criteria page and refine your search, click the "back" button in your browser.

:::

:::tip

To view the results in a table, click the Table Display button. ![Table Display Button](/img/tabledisplaybutton.png) To switch back to list view, click the List Display button. ![List Display Button](/img/list.png) To sort your search results, click the Sort Records button. ![Sort Records Button](/img/sortrecords.png) In the Search Results box at the top of the page, select the field you would like to sort by, a second field you would like to sort by (if applicable), then whether you would like to sort results in ascending or descending order. Then click Sort.

:::

### Pre-Symbiota 3.1

:::note

The following steps 2-5 apply to Symbiota portals that have codebases older than version 3.1. If you are using Symbiota 3.1, skip to [Symbiota 3.1 and beyond](#symbiota-31-and-beyond)

:::

2. If prompted on the next page, select or deselect collections from the provided list depending on which collections you would like to search.
   - If you do not wish to search specific collections, leave all the collections checked.
   - There may be three tabs at the top of the page, "Specimens & Observations", "Specimens", and "Observations". Specimens are physical collections of an organism, while observations are human observations or photos of organisms that are not supported by physical specimens. Use these tabs to select between these types of occurrences, if desired.

![Specimen and Observation Collections](/img/search2.png)

:::tip

Notice that collections may be grouped together into categories. These categories may be minimized or maximized by clicking the small grey plus or minus box, respectively, to the bottom left of the name of the group.

:::

![Search Collections Options](/img/search1.png)

3. Click the Search button on the far right.
4. On the next page, you can enter search criteria to find records of interest.
   - The criteria you can use will vary depending on the portal, but generally include the following categories: 1) Taxonomic Criteria, 2) Locality Criteria, 3) Latitude and Longitude, 4) Collector Criteria, 5) Specimen Criteria, and 6) Trait Criteria (if enabled).
   - Any number of criteria can be entered and search at the same time.
   - You can search for multiple values in a single field by separating the values by commas. For example, if you want to search by both Kern and Inyo counties, you should enter "Kern,Inyo" in the county field.
   - **Latitude and Longitude**: To define a latitude/longitude bounding box, polygon, or point with radius in which to search, enter the values in the provided fields or click the Mapping Aid icon to create the box, shape, or point radius in the Leaflet mapping interface.
   - **Specimen Criteria**: If enabled for your portal, this search category may contain a dropdown list to query _materialSampleType_. Further documentation on the Material Sample module can be found [here](/Editor_Guide/Editing_Searching_Records/material_samples).
5. Click List Display to conduct the search and view results as a list, or click Table Display to conduct the search and view results in a table.

![List Display](/img/search3.png)
**List Display**

![Table Display](/img/search4.png)
**Table Display**

:::tip

To return to the Search Criteria page and refine your search, click Search Criteria from the navigation menu at the top of the page.

:::

:::tip

To view the results in a table or to sort the search results, click the Table Display button. ![Table Display Button](/img/tabledisplaybutton.png) In the Search Results box at the top of the page, select the field you would like to sort by, a second field you would like to sort by (if applicable), then whether you would like to sort results in ascending or descending order. Then click Sort.

:::

## Map Search

Depending on the portal, the Map Search function may be under the Search Collections menu item, or listed as a separate menu item on the homepage.

Click the Open Search Panel button in the top left corner. Once open, you can enter the same types of criteria into this search panel as were available in the regular search (described above). Then click the Search button.

To select specific collections from which you would like to search, select the Collections tab in the search panel, then check or uncheck boxes next to collections as desired.

Further customizations can be made in the Map Options tab of the search panel including grid size and min. cluster size. These will affect how many specimens will be clustered together on the map. You can also turn off clustering in this tab.

Once you have conducted a search, you can view a list of specimens by clicking the Open Search Panel button and viewing the Records and Taxa menu item. You can also download the specimen records, download a KML file of the specimen records, or generate a shareable link to these search results by clicking on the respective buttons on this page.

![Map Search Display](/img/search5.png)

## Cross-Portal Search

##### (not available in all portals)

Some portals include the ability to search not only in the portal database, but also in the database of another, connected Symbiota portal. This option is only available in the Map Search interface.

To use this feature, navigate to the Map Search in your portal and check the box next to "Enable Cross Portal Search". You will then see a dropdown list of the available portals to search and new "Taxa" field. Select the desired portal (there will likely only be one) and enter the name of the taxon or taxa that you would like to search in the other portal. The "Taxa" field at the very top of the form will reference your current portal's taxonomic thesaurus, while the "Taxa" field under the Cross Portal Search option will reference the taxonomic thesaurus of the other portal (the one selected in the dropdown list).

![Cross-Portal Search Checkbox](/img/crossportalsearch.png)

The resulting map will include results from both portals you have searched. The dots will be colored by taxon by default. To color the dots by portal, click the Portal List tab and click the Auto Color button.

The "Records" tab will list all the records from the portal you are in, and the "External Records" tab will list all the records from the outside portal that you are also searching.

## Quick Search

:::note

Using Quick Search forms, you can search for multiple taxa (_scientificName_ values) or, where applicable, _Catalog Number_ values by listing your search criteria in a semi-colon delimited list, e.g. "Rosa abietorum;Rosa alba" or "100;1000".

:::

### By portal

Some Symbiota portals feature a portal-wide taxon quick search form on their homepage. Use this form to search for all specimen records in the portal that are linked to the portal's central taxonomic thesaurus by typing directly into the form and then selecting the "Search" button. If you begin typing a scientific name in this box and a dropdown list does not appear (shown below), then the taxon you are searching for does not exist in the portal's taxonomic thesaurus.
![Homepage Quick Search](/img/quicksearch_homepage.png)
![Homepage Quick Search](/img/quicksearch_dropdown.png)

### By collection

Similar to the portal-wide quick search forms described above, some Symbiota portals feature quick search forms on Collection Profiles to facilitate searching for records limited to individual datasets. Currently, these forms can be used to search within a given Collection Profile by _Catalog Number_ or _Scientific Name_ (Taxon).

![Homepage Quick Search](/img/quicksearch_collprofile.png)
