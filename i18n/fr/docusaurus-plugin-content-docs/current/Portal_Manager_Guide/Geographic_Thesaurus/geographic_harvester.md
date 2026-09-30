---
title: "Geographic Harvester"
date: 2024-02-08
lastmod: 2024-02-29
authors: ["Katie Pearson"]
draft: false
keywords:
  [
    "geography",
    "geographic thesaurus",
    "country",
    "continent",
    "state",
    "province",
    "county",
    "municipality",
  ]
---

The Geographic Harvester tool can be used to automatically add geographic units and/or the polygons delineating the borders of geographic units, provided a corresponding geographic unit can be located in the [geoBoundaries API](https://www.geoboundaries.org/) (Runfola et al. 2020). This API includes polygons for many geographic unit ranks.

To use this tool, use the Sitemap to navigate to the Geographic Thesaurus under "Administrative Functions (Super Admins only)" and click "Go to Geographic Harvester" at the top of the page.

The resulting page will show you a list of all countries in the geoBoundaries API and their associated metadata.

- The **In Database** field indicates whether that country exists in the geographic thesaurus.
- The **Has Polygon** field indicates whether that country has a polygon loaded into your geographic thesaurus.
- To view the polygon associated with the country, you can click the **IMG** link in the Preview Image column.

![Geographic Harvester](/img/GeoHarvester.png)

To import polygons associated with the countries and their lower geographic units, click on the name of the country. The resulting page will show you a list of geographic ranks associated with that country and their associated metadata. For example, the ADM0 rank corresponds to the country, and the ADM1 rank corresponds to the state/province in the U.S.

- The **Database Count** field indicates how many geographic units at that rank are currently in your geographic thesaurus.
- The **Geoboundaries County** field indicates how many geographic untis at that rank are found in the incoming geoBoundaries file.
- To view the raw data associated with the geoBoundaries API call, click the link in the **Full Link** field.
- To view the polygons associated with that geographic rank, click the **IMG** link in the Preview Image field.

![Geographic Harvester Page 2](/img/GeoHarvesterRanks.png)

Check the box next to the geographic ranks for which you would like to import polygons. Check the "Add geographical units if missing" box if you would like to import the geographic units themselves into your geographic thesaurus as well. Click the Add Boundaries button to import the selected polygon(s) and/or geographic units.

The Symbiota Support Hub gratefully acknowledges the work of the geoBoundaries project, which is essential to the functioning of this tool:

**Runfola, D. et al.** (2020) geoBoundaries: A global database of political administrative boundaries. PLoS ONE 15(4): e0231866. [https://doi.org/10.1371/journal.pone.0231866](https://doi.org/10.1371/journal.pone.0231866).
