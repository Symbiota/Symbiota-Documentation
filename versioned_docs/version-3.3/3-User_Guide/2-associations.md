---
title: "Associations"
date: 2025-05-14
lastmod: 2025-05-14
authors: ["Katie Pearson"]
draft: false
weight: 20
keywords: ["linked resources", "extended specimen", "host", "relationship"]
---

:::info

This page defines "associations" in Symbiota portals and describes how they can be searched.

:::

:::warning

Assocations data must exist before it can be searched! Because associations data is relatively new in Symbiota portals, most portals do not yet have much association-based data. A lack of data on associations should not be interpreted as a lack of real biological associations. Much association-type data is still stored in the "associated taxa" field, which is not searchable via the Associations search.

:::

In Symbiota portals, **associations** are defined as relationships between a record in the portal and a resource, occurrence record (i.e., specimen or observation), or taxon. The record is linked to the other resource using a relationship term ("Association Type") such as _hasHost_ or _references_. These association types are defined per-portal and thus may differ between Symbiota portals. Ideally these association types are defined by an ontology (i.e., relational vocabulary) or other controlled vocabulary.

Because some associations are with external resources, not all associations are relationships between two taxa. Associations may link records to publications, external websites, or other non-occurrence resources.

Associations can be searched in the [public search form](/User_Guide/searching_records) of a portal under the "Associations" box.

![Associations Search](/img/associationssearch.png)

You can search for specific types of associations using the Association Type dropdown list, or you can search for associations between specific taxa using the Taxon search box.

:::tip

Using the Taxon box in the Associations search will search for records that have an association with that taxon. For example, if you are looking for records that are documented hosts of _Phoradendron californicum_ (a mistletoe), you would search: Assocation Type = _hostOf_, Taxon = _Phoradendron californicum_. You would leave the main Taxon field (under the Taxonomy box at the top of the search page) blank.

:::

:::tip

To search for records with _any_ documented association, you can select an Association Type from the dropdown list and leave the Taxon box in the Associations search blank.

:::
