---
title: "Taxonomic Cleaning Tools"
date: 2021-10-08
sidebar_position: 20
authors: ["Katie Pearson"]
keywords: ["taxonomy", "data cleaning"]
---

import ReactPlayer from "react-player";

:::info

This page describes how to use the two taxonomic cleaning tools in Symbiota portals. For more information about the taxonomic thesaurus, visit the [Taxonomy](/User_Guide/taxonomic_thesaurus) page.

:::

Navigate to these tools through the **_,Administration Control Panel (My Profile > Occurrence Management > name of collection)_**. Click **_Data Cleaning Tools_**, then view the box below the **_Taxonomy_** header.

The taxonomic cleaning tools are great resources for cleaning up misspellings and other taxonomic name entries that do not link to names in the central taxonomic thesaurus. They are meant to aid in locating and fixing taxonomic errors and inconsistencies.

### Analyze Taxonomic Names

<ReactPlayer
  playing={false}
  controls
  url="https://www.youtube.com/watch?v=e4Ag8Ggx0hU"
/>

This function analyzes the values that exist in the Scientific Name field in your database and flags the values that are not linked to the taxonomic thesaurus (i.e., are not linked to a recognized name). Note that this tool does NOT evaluate whether that name is accepted according to current taxonomy. The number of unrecognized scientific names is listed at the top of the Action Menu box.

![Taxonomy Cleaning Action Menu](/img/taxonomycleaning.png)

You can evaluate the unrecognized scientific names and link them to the names of the correct taxa by clicking the name of the Taxonomic Resource to which you want to compare the names, selecting the target kingdom, and clicking the Analyze Taxonomic Names button. If you wish to begin at a certain name (e.g., you have already checked names up to Mentzelia), you can enter this name in the Start Index field. You can also alter the number of names you would like the portal to analyze per run in the Names Processed per Run field.
There are multiple types of results from running this tool. In general, the tool will list the name that it is attempting to index (i.e., match to an existing taxonomic name), search your defined taxonomic resource for that name, and, if that name is not found in the taxonomic resource, check the taxonomic thesaurus for similar names to the unrecognized name. You then have several options for resolving the unrecognized name, depending on the type of result. To view the specimen(s) associated with any unrecognized name, click the pencil icon to the right of the name and number of specimens, in brackets. The types of results are explained in more detail below.

#### Example 1: Misspelling, incomplete name, or orthographic variant

![Taxonomy Cleaning Example 1](/img/taxclean1.png)
This is the most common type of result. In this case, you discover that the unrecognized name was misspelled or spelled differently than the recognized name. You can click “remap to this taxon” to change the name of the specimen(s) to this recognized name.

#### Example 2: Unpublished or unrecognized taxon name

![Taxonomy Cleaning Example 2](/img/taxclean1.png)
In this case, you find that the name listed on the specimen was not published or is not currently listed in the taxonomic thesaurus. You must then use taxonomic expertise to decide whether this specimen should be remapped to a different taxonomic name (if you are confident that they are synonymous) and/or annotated, or if the taxonomic name should be left as is and it should be included in the taxonomic thesaurus. If you believe that a name should be found in the taxonomic thesaurus and you do not find it with a manual search, contact the portal manager.

#### Example 3: Name exists but is not found in taxonomic thesaurus

![Taxonomy Cleaning Example 3](/img/taxclean3.png)
When the portal does not find a name in the taxonomic thesaurus, but it does find the name in the taxonomic resource, it will import the taxonomic name into the taxonomic thesaurus. This will automatically map the specimen’s taxonomic name to this newly added entry in the taxonomic thesaurus as well.

If you have not analyzed all the taxonomic names in one pass, you can click the Continue Analyzing Names button to have Symbiota check the next 20 (or whatever number is defined by the user) names.

### Taxonomic Distributions

Much like the Geographic Distribution viewer, the Taxonomic Distribution viewer can be used to examine the families, genera, species, and infraspecific taxa that exist in your database. Misspellings, non-standardized entries, or suspected mistakes can be detected using this tool. To view the genera for each family, click the name of the family. Then, to view the species for each genus, click the name of the genus, and so on.
A user with administrator permissions can correct errors in taxonomic names individually by clicking the number next to the taxonomic name (circled below), or the user can search for those records using the record search form and batch edit them.

![Taxonomic Distribution Viewer](/img/taxonomycleanviewer.jpg)
