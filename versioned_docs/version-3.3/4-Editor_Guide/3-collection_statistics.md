---
title: "Collection Statistics"
date: 2021-11-30
lastmod: 2025-03-32
authors: ["Katie Pearson"]
editors: ["Lindsay Walker"]
weight: 4
keywords: ["statistics", "number of specimens", "reports"]
---

:::info
This page describes how you can find information about how many occurrences and images you have in your collection.
:::

### Viewing Collection Statistics

:::tip
Collection statistics are generated on command and are not created "on the fly". A collection administrator should periodically refresh collection statistics. Collection statistics are also automatically refreshed when a new [Darwin Core Archive is published/created](/docs/Collection_Manager_Guide/Data_Publishing/creating_dwca).
:::

Statistics relating to the number of specimens, images, georeferences, and taxa within a collection can be found on that collection's Collection Profile page. An example collection profile is shown in the screenshot below and can be found [here](https://cch2.org/portal/collections/misc/collprofiles.php?collid=12). The collection statistics are found at the bottom of the page and include:

- Number of total records
- Number of records that are georeferenced
- Number of records that have associated images
- Total number of images in the collection
- Number of specimens that are identified at least to the level of species
- Number of families, genera, species, and total taxa that represented in the collection (NOTE: these numbers are calculated using only taxonomic names that have been indexed to the taxonomic thesaurus)

![Collection Profile Page](/img/collprofile.png)

<figcaption align = "center">_Collection Profile for [OBI in CCH2](https://www.cch2.org/portal/collections/misc/collprofiles.php?collid=12)._</figcaption>

:::tip
Collection profiles can be accessed by visiting the Collection Search Page in a given portal (click "Search Collections") at the following URL: `[BASE URL]/collections/index.php`. For example, for the CCH2 portal, the full URL is https://cch2.org/portal/collections/index.php.
:::

If you are an editor or administrator for a collection, you can also access your statistics by clicking _My Profile > Occurrence Management >_ name of collection.

### Refreshing Collection Statistics

Collection statistics are generated on command and are not created "on the fly". To refresh your collection statistics, navigate to your Administration Control Panel (_My Profile > Occurrence Management > name of collection_) and click Update Statistics (bottom link in the Administration Control Panel).

### Processing Status Statistics in the Reports Tab

To view statistics regarding the processing statuses in your collection, navigate to your Administration Control Panel (_My Profile > Occurrence Management > name of collection_), then click "Processing Toolbox" and then the "Reports" tab. A table will be displayed that shows you the number of specimens in each processing status. To view occurrences one by one, click the edit (pencil) icon in the **Count** column. To view occurrences as a list, click the table icon in the **Count** column.

This page will also show you how many of your occurrences do not have linked images and how many lack skeletal data (i.e., a value in the Scientific Name field).

![Reports Tab in Processing Toolbox](/img/reportstab.png)

<figcaption align = "center">_Administration Control Panel > Processing Toolbox > Reports tab_</figcaption>
