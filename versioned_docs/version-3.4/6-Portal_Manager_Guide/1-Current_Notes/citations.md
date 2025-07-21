---
title: "August 2022 - Citation formats and CITEME.txt"
date: 2022-09-01
lastmod: 2022-09-01
authors: ["Laura Rocha Prado"]
draft: false
weight: 10
keywords: ["citing","citations","downloads"]
---

## August 2022-current: Citation formats and introduction to CITEME.txt

Citation formats and the creation of a `CITEME.txt` file have been introduced recently in Symbiota ([Pull Request #261](https://github.com/Symbiota/Symbiota/pull/261)).

### Default formats
Symbiota portals have now a standardized way for users to cite them and their data. These default, dynamic, citation formats have been introduced (and can be customized as necessary) and can be found in the [`[root]/includes` directory](https://github.com/Symbiota/Symbiota/tree/master/includes):
- General portal: found in the [`citationportal_template.php`](https://github.com/Symbiota/Symbiota/blob/master/includes/citationportal_template.php);
- Collection (for collections not published in GBIF): [`citationcollection_template.php`](https://github.com/Symbiota/Symbiota/blob/master/includes/citationcollection_template.php);
- Collection published in GBIF: [`citationgbif_template.php`](https://github.com/Symbiota/Symbiota/blob/master/includes/citationgbif_template.php);
- Dataset: [`citationdataset_template.php`](https://github.com/Symbiota/Symbiota/blob/master/includes/citationdataset_template.php);

Additionally, the template for the Usage Policy page ([`[root]/includes/usagepolicy_template.php`](https://github.com/Symbiota/Symbiota/blob/master/includes/usagepolicy_template.php)) has been updated to include the dynamic formats as well. This means that portal managers that would like to customize citation formats should only do it by modifying the formats themselves.

### Where in Symbiota are formats used?
The citation formats are inserted in certain context-specific pages and in downloads.

The general portal format will be seen by default in the [Usage Policy page](https://github.com/Symbiota/Symbiota/blob/master/includes/usagepolicy_template.php).

The collection formats will be inserted in each [Collection Profile page](https://github.com/Symbiota/Symbiota/blob/master/collections/misc/collprofiles.php), depending on whether each collection is published to GBIF or not.

![neon-biorepo-coll-citation.jpg](/img/neon-biorepo-coll-citation.jpg)
*Example of collection profile page that has not been published to GBIF in the [NEON Biorepository Data Portal](https://biorepo.neonscience.org/portal/collections/misc/collprofiles.php?collid=50).*

![neon-biorepo-coll-gbif-citation.jpg](/img/neon-biorepo-coll-gbif-citation.jpg)
*Example of collection profile page that has been published to GBIF in the [NEON Biorepository Data Portal](https://biorepo.neonscience.org/portal/collections/misc/collprofiles.php?collid=39).*

The dataset format will be inserted in each [Dataset page](https://github.com/Symbiota/Symbiota/blob/master/collections/datasets/public.php).

All of the formats might be included, one at a time, in the [`CITEME.txt`](https://github.com/Symbiota/Symbiota/blob/master/classes/DwcArchiverCore.php) file included with the downloaded package from a Symbiota portal, depending on the context in which a package was requested. For instance, downloading the results of a search will include a `CITEME.txt` file that will contain a `citationportal.php` format. On the other hand, downloading a DwCA from a collection page (which is published to GBIF), will include the  `citationgbif.php` format. This behavior was designed to better inform users where their occurrence data is coming from and when.

![neon-biorepo-citeme.jpg](/img/neon-biorepo-citeme.jpg)
*Example of a `CITEME.txt` file packaged within a DwCA download from the [NEON Biorepository Data Portal](https://biorepo.neonscience.org/).*


### Activating format usage
To make sure your portal uses the citation formats, all you have to do is make a copy of each citation format template, and remove the `_template` string from their file name.

### Customizing formats
:::note

Please note that the citation formats should only include plain text and/or PHP. No HTML should be included in the formats, because they are used in different contexts.

:::

To customize each format, open the copies of the templates and make the desired changes. Save them. As the copies of the templates (without the `_template` string in the file name) won't be tracked by Git, they won't be overwritten by future releases.

### GBIF widget
The Collection Profile page (`[root]/collections/misc/collprofiles.php`) has been updated to include each appropriate citation format (if not published to GBIF, it will include by default the `citationcollection.php` format; if published to GBIF, it will include the `citationgbif.php` format). 

If a collection has been published to GBIF, the page will fetch the [GBIF citations widget](https://www.gbif.org/article/1E6v02SFQyhupvB7JqDXPN/citation-widget#:~:text=GBIF%20maintains%20an%20ongoing%20literature,citation%20feed%20into%20external%20websites.) using the collection-specific GBIF Dataset Key.

![neon-biorepo-coll-gbif-widget.jpg](/img/neon-biorepo-coll-gbif-widget.jpg)
*Example of a GBIF widget added to a [NEON Biorepository Data Portal collection profile](https://biorepo.neonscience.org/portal/collections/misc/collprofiles.php?collid=39).*


### Dependencies
For collections that publish to GBIF, data referring to the GBIF-specific citation format will be fetched from the [uses GBIF's API v1](https://www.gbif.org/developer/summary) to fetch collections information (like `gbiftitle` and `DOI`).]
