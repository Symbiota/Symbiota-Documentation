---
title: "Splitting Checklists"
date: 2023-01-04
lastmod: 2024-12-11
authors: ["Katie Pearson"]
draft: false
weight: 50
keywords:
  ["parent checklist", "child checklist", "parent", "child", "taxonomic list"]
---

:::info

This page describes how to split a single checklist into multiple checklists based on taxonomic groups. For example, you can make a master checklist of all taxa in a certain region, and then you can make child checklists that contain different taxonomic groups from that checklist (e.g., "Birds of Nevada County" can come from the parent checklist "Vertebrates of Nevada County").

:::

To split a single checklist into multiple checklists, or just create child checklists that duplicate the information in the parent checklist, use the Batch Parse Species List Tool.

From your parent checklist (i.e., the checklist that you would like to split/parse), click the Checklist Administration button (top right corner with a pencil and A symbol), then click the Related Checklists tab. Scroll down, and you will see the Batch Parse Species List tool.

![Batch Parse Species List Tool](/img/batchparsespecieslist.PNG)

In the first box of the **taxonomic node** field, begin to type the name of the parent node for all the taxa you would like to include in your child checklist, then select the matching name from the dropdown list. _You can add multiple nodes to the checklist by running this tool several times and adding to the same child checklist each time._ You can alternatively add the taxon ID number from the portal into the second field. This will automatically be populated if you select a taxon name from the dropdown list.

In the **target checklist** field, select the name of the checklist that you would like to add or transfer the taxa to, or select Create New Checklist to add these taxa to a brand new checklist.

Select **transfer taxa** if you would like to remove the taxa from your parent list and add them to the new list that you selected in the **target checklist** field. Select **copy taxa** if you would like to copy the taxa from the parent list, but not delete them from the parent list.

Select a checklist from the **Link to parent checklist** field if you would like to link the newly defined checklist taxa to a parent checklist _other than the parent checklist that you are parsing_.

If you would also like to add the newly defined checklist to a specific project to which you have administrator access, select the project from the **Add to project** dropdown list.

Check the **copy over permission and general attributes** box if you would like to transfer user permissions and other attributes (such as whether it is public or private) to the newly defined checklist.

Click the **Parse Checklist** button to complete the split/copy action.

If you would like to add a polyphyletic group or multiple groups to a single checklist from a parent checklist, you can run this parsing tool multiple times on the parent checklist, each time selecting a different taxonomic node. For example, from a "Flora of Sequoia National Forest" checklist, you could create a "Graminoids of Sequoia National Forest" list by running the tool three times: once for Poaceae (grasses), once for rushes (Juncaceae), and once for sedges (Cyperaceae), all pointing to the same (new) child checklist.
