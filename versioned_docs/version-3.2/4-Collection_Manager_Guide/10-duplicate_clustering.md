---
title: "Duplicate Clustering"
date: 2021-12-13
lastmod: 2023-03-24
draft: false
weight: 58
authors: ["Katie Pearson"]
keywords: ["duplicates","duplicate specimens"]
---

import ReactPlayer from "react-player";

:::info

This page describes how to view and batch link duplicate specimens (specimens of the same taxon collected on the same day by the same person in the same place) using the Duplicate Clustering tool.

:::

Occurrences can be linked as duplicates individually during or after data entry using tools in the occurrence editor. See [this page](/docs/Editor_Guide/linking_records) for more information about linking duplicates on an individual basis and [this page](/docs/Editor_Guide/Editing_Searching_Records/duplicate_matching) for information about using the duplicate matching tool during data entry.

Occurrences can also be batch-linked automatically by the Duplicate Clustering tool. This tool creates a temporary index of your occurrences' collection dates, collector numbers, and collector last names, then links any occurrences that share all three of these characteristics.

:::note

Because creating duplicate specimens is not universal among collection types, tools that facilitate batch duplicate matching are not available in all portals. Contact your portal administrator to activate this function, if necessary.

:::

To view or link duplicates, navigate to your Administration Control Panel (My Profile > Occurrence Management > name of collection) and click Duplicate Clustering.
* To view existing duplicates, click *Specimen duplicate clusters*
* To view duplicates with taxonomic identifications that do not match, click *Specimen duplicate clusters with conflicted identifications*. An example output of this tool is shown in the screenshot below.
* To batch link duplicates, click *Batch link specimen duplicates*. This will automatically run the batch linking script to create duplicate clusters.

:::tip

When viewing clustered duplicates, you can view the record for any occurrence by clicking the catalog number in blue font.

:::

![Example Duplicate Conflicts](/img/exampleduplicateconflicts.PNG)

A video walkthrough of how duplicate clustering tools can be used to resolve conflicting identifications can be found here:

<ReactPlayer
  playing={false}
  controls
  url="https://www.youtube.com/watch?v=kMUzwoHmXw4"
/>