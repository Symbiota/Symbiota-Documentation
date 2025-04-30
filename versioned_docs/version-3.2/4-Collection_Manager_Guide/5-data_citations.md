---
title: "Data Citations"
date: 2022-10-26
lastmod: 2025-01-31
authors: ["Lindsay Walker"]
editors: ["Katie Pearson"]
draft: "false"
weight: 24
keywords: ["citations","gbif","data publishing"]
---

import ReactPlayer from "react-player";

:::info

Some citation features will require initial configuration by your portal manager or the Symbiota Support Hub prior to full implementation. [Refer to the relevant portal manager documentation for more information](/symbiota-docs/portal_manager/current_notes/citations/).

:::
 
 As collections become available online, properly citing them has become increasingly necessary to enable full digital connectivity between your specimens, their [extended data](https://academic.oup.com/bioscience/article/72/10/978/6648186), and the published literature. Symbiota offers a suite of options to enable proper attribution of data shared through our portals. **Collections Managers are strongly encouraged to instruct users of their data to include all elements of these citations to fully benefit from their functionality.**
 
 <ReactPlayer
  playing={false}
  controls
  url="https://www.youtube.com/watch?v=ZE3SUgNR3qg"
/>
 
## Collection Citations

### Collections published to GBIF
Collections that publish their data to GBIF automatically have access to robust data usage tracking through the generation of a DOI that uniquely identifies your collection online. When this DOI is included in citations of your data, automated citation tracking becomes possible. GBIF's documentation on this topic can be found [here](https://www.gbif.org/citation-guidelines).

![How to cite your data in GBIF](/img/citation_gbif1.png)

#### Where is my collection's properly formatted citation?

In order for citations to link to your collections in GBIF and Symbiota, data users must cite your data properly. If enabled in your portal, suggested citations will be automatically generated on your collections profile page (see image directly below). While these citations may be reformatted to conform to citation styles required by publishers, each element of the citation must be included, **the most important element being the DOI expressed _as a URL_**.

> [Example citation](https://biorepo.neonscience.org/portal/collections/misc/collprofiles.php?collid=39):
> NEON Biorepository Data Portal (2022). NEON Biorepository Carabid Collection (Pinned Vouchers). Occurrence dataset https://doi.org/10.15468/zyx3fn accessed via the NEON Biorepository Data Portal, https://biorepo.neonscience.org/ on 2022-10-25.

It is wise to preemptively encourage researchers to properly cite your data according to these guidelines, which can be found on your collections profile:

![Sample Profile Citation](/img/citation_analog.png)

#### What happens once my data are cited?
If your data are cited properly in digitally available published literature, GBIF will track these citations once they are indexed by Google Scholar. In turn, these citations will tally in the "citation widget" that appears at the top of your collections profile. Clicking on the widget will direct you to a bibliography of works that have used your digitized collections data:

![Sample GBIF Citation Widget](/img/citation_widget.png)

:::note

Read more about GBIF's citation guidelines [here](https://www.gbif.org/citation-guidelines).

:::

### Collections _not_ published to GBIF
If your collection is not publishing to GBIF, you can still encourage researchers to cite your collections data using the citation that automatically generates in your profile above "Collection Statistics". This citation can be adapted to meet various citation style requirements; however, each element of the citation should be included, and **especially the dataset ID and URLs, which are unique to your collection**.

> [Example citation](https://biorepo.neonscience.org/portal/collections/misc/collprofiles.php?collid=30):
> Soil Collection (Distributed Periodic). Occurrence dataset (ID: cfb05bfe-b267-471a-b538-e5b644e3afa7) https://biorepo.neonscience.org/portal/content/dwca/NEON-SOIC-DP_DwC-A.zip accessed via the NEON Biorepository Data Portal, https://biorepo.neonscience.org/, 2022-10-25).

:::tip

Learn how to publish your data to GBIF [here](/symbiota-docs/coll_manager/data_publishing/gbif/).

:::

## Data Downloads
When your data are downloaded from a Symbiota portal, a "CITEME.txt" file will be included in the data package. This file will include a suggested citation as well as the URL to your portal's data usage policy, if one is maintained.

Example CITEME.txt content:

>This data package was downloaded from the Ecdysis Portal on 2022-10-25 17:03:40. <br></br>
> Please use the following format to cite this dataset:<br></br>
> Biodiversity occurrence data published by: Ecdysis Portal (accessed through the Ecdysis Portal Portal, https://serv.biokic.asu.edu/ecdysis, 2022-10-25). <br></br>
> For more information on citation formats, please see the following page: https://serv.biokic.asu.edu/ecdysis/includes/usagepolicy.php

## Data Usage Policy & Portal Citations
Some portal communities maintain their own portal-wide data usage policies for media and specimen records, which includes a recommended citation format for the portal. This information can typically be found on the **_Sitemap_ > _Media Library_ > _Usage Policy and Copyright Information_**. To request modifications to your portal's data usage policy, or to have one added to your portal, contact your portal manager. 



| ![Sample Portal Data Use Policy](/img/citation_portal.png) |
|:--:|
| Citation guidelines provided in the [CCH2 portal's data usage policy](https://www.cch2.org/portal/includes/usagepolicy.php) |
