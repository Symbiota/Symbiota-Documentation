---
title: "(Editor) Editing ID Key States for Taxa"
date: 2022-10-31
lastmod: 2024-12-11
draft: false
weight: 40
authors: ["Katie Pearson"]
keywords: ["checklist","keys","identification","character","state","ID"]
---

:::info

This page describes how to edit the charater states that are applied to given taxa for identification keys.

:::

:::note

A user must have **Identification Keys Editor** access to edit character and state values in a portal, since these edits affect the entire portal, not just a single checklist.

:::

### Structure of Identification Keys

Identification keys are built from a list of **characters** that each have multiple **states**.

**Characters** are categories of traits that are shared across all members of a taxon (e.g., "average wing length" or "leaf phyllotaxy").

A **state** is the specific trait that is shared within the taxon (e.g., "3-15 mm" or "opposite", for each of the characters above). At this time, states can only be categorical (i.e., you cannot enter a number value).

![Character and Character States Example](/img/charactervsstate.jpg)

Setting up identification keys in a portal requires the administrator to import or add character and state values (see ID Keys Administrator instructions [here](admin). Then, an identification keys editor can assign certain state values to certain taxa.

### Editing Character States Assigned to Taxa
The character states applied to taxa can be edited from the checklist editor. If you would like to edit the character states for taxa, but don't have a specific checklist in which to do so, you can [create a temporary checklist](../Checklists/creating_checklist) in which to do this and then delete the checklist once you are done.

Ensure that you are logged in, then navigate to the checklist containing the taxa you would like to edit. Click the small pencil icon with "Edit Character Matrix" next to it in the top right corner of the page.

![Character Matrix Editor link](/img/editcharactermatrix.JPG)

Click the name of the character for which you would like to edit the character states per taxon. On the resulting page, you will see the character state matrix. The name of the character is shown in the top left corner of the matrix, and the possible character states are listed as columns across the top row.

![Character Matrix Editor](/img/charactermatrix.JPG)

To assign a character state to a taxon, check the box in the taxon row and corresponding character state column. Character states assigned to a parent taxon (e.g., a family or genus) will be automatically applied to all of that taxon's children taxa. You can, however, uncheck individual taxa if desired. You can also select multiple character states for a single taxon if both apply to that taxon.

Alternatively, to edit all of the character states relating to a single taxon (rather than all of the taxa related to one character), click the pencil icon to the right of any taxonomic name.

![Character States for a Single Taxon](/img/pertaxoncharacters.JPG)

Here, you can check "Add" boxes to apply that character state to a taxon, or you can check "Remove" boxes to remove that character state from that taxon. Character states that are already applied to that taxon are shown in bold. Click any "Submit Changes" button to apply the character state changes to the taxon.

To view the character matrix associated with the parent taxon of the taxon you are currently viewing, click the "parent" link to the right of any character.
