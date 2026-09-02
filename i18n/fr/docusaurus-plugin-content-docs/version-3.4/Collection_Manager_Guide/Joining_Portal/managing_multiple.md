---
title: "Managing Multiple Portals"
date: 2022-02-18
lastmod: 2022-02-21
sidebar_position: 10
draft: false
authors: ["Katie Pearson"]
editors: [""]
keywords: ["multiple collections"]
---

#### What do I do if I have multiple collections? Should I keep them all in one portal?

If you have multiple collections (e.g., vascular plants, fungi, and bryophytes) that you would like to manage live in Symbiota-based platforms, it is recommnded to manage these separately in their respective data portals. This is because the taxonomic thesauri of the portals are well-curated to their focal taxonomic group, and you are more likely to be able to take advantage of digitization efficiencies (e.g., duplicate matching) in that portal. For example, the Chico State University Herbarium manages their vascular plant data in the Consortium of California Herbaria (CCH2) portal (the focus of which is vascular plants from herbaria in California), their bryophyte data in the Bryophyte Portal, and their Lichen data in the Lichen Portal. However, a copy of their bryophyte and lichen data can be found in the CCH2 portal as well, since it is a resouce for the California community.

#### What if I want to have the same collection in more than one portal?

No problem! In some cases, multiple portals may benefit from including some or all of your collection's data. If your collection(s) fit(s) within the scope of multiple portals, you can load a **snapshot** of your data (or a subset of your data) into various portals, even if you do not manage your data in that portal. This can be done easily by creating a "Darwin Core Archive Provider" upload profile that maps a Darwin Core Archive from another Symbiota portal. To pass only a subset of your data to the other portal, you can use **Custom Occurrence Record Import Filters**, available for Darwin Core Archive and IPT imports, or you can work with your portal administrator to set up a Stored Procedure that will filter your dataset to include only specific records.

#### What if my collection is currently in one portal, but I want to split it into multiple portals?

As described above, you can pass only a subset of your data into another portal using **Custom Occurrence Record Import Filters**, available for Darwin Core Archive and IPT imports, or you can work with your portal administrator to set up a Stored Procedure that will filter your dataset to include only specific records. Once this is complete, your portal administrator(s) can remove the specimen records from the originating portal, if desired.
