---
title: "Adding Geographic Units"
date: 2024-02-08
lastmod: 2024-02-08
authors: ["Katie Pearson"]
editors: [""]
draft: false
weight: 1
keywords: ["geography","geographic thesaurus","country","continent","state","province","county","municipality"]
---

1. Use the Sitemap to navigate to the Geographic Thesaurus under "Administrative Functions (Super Admins only)".
2. Click the plus icon to the right of the Root Terms title.
3. Fill out the Add Geographic Unit box following the guidelines described below. Names in italics are required:

      **_GeoUnit Name_**: the name of the geographic unit
      
      **Abbreviation**: abbreviated version of the geographic unit name
      
      **ISO2 Code**: the alpha-2 ISO code as described in the ISO international standard, if applicable
      
      **ISO3 Code**: the alpha-3 ISO code as described in the ISO international standard, if applicable

      **Numeric Code**: the three-digit country code defined in ISO 3166-1

      **_Geography Rank_**: the type of geographic unit (select from dropdown menu)
      
      **Notes**: any notes relating to the geographic unit

      **Parent Term**: the term directly above the new geographic unit in a geographic hierarchy; for example, the parent term of the country "Canada" would be the continent "North America". If a parent term is not specified, the geographic unit will be designated as a root term (i.e., highest term in a hierarchy).
      
      **Preferred Term**: if the term is a synonym of another term, select a geographic unit from this list that is the preferred name for this country, according to the portal. For example, "Deutschland" is a synonym of "Germany", but in a primarily English portal, "Germany" may be the preferred country name.

      **Polygon**: a geographic polygon delineating the outline of this geographic unit, in GeoJSON format. This field can be auto-populated using the [Geographic Harvester Tool](/docs/Portal_Manager_Guide/Geographic_Thesaurus/geographic_harvester).

4. Click the Add Unit button.
5. To add children to the geographic unit, click the plus icon at the top of the "children" list and fill out the Add Geographic Unit box as above for that child taxon, selecting the desired parent term from the Parent Term dropdown list.
