---
title: "Geographic Thesaurus"
date: 2024-02-08
lastmod: 2024-02-08
authors: ["Katie Pearson"]
editors: [""]
draft: false
keywords: ["geography","geographic thesaurus","country","continent","state","province","county","municipality"]
sidebar_position: 20
---

For instructions on how to add geographic units to the geographic thesaurus, [click here](/Portal_Manager_Guide/Geographic_Thesaurus/adding_geographic_units).

For instructions on how to edit existing geographic units, [click here](/Portal_Manager_Guide/Geographic_Thesaurus/editing_geographic_thesaurus).

The geographic thesaurus is a database structure that allows portal superadministrators to manage geographic units and their relationships (hierarchical and synonymous) in a Symbiota portal. All terms entered in the geographic thesaurus are given a numeric rank that corresponds to the level of the unit (e.g., country = 50) and a **parent unit** (unless the geographic unit is a "root" term). Each unit can have one to many children units and one to many synonyms.

![Diagram of Geographic Thesaurus](/img/GeothesaurusModel.jpg)

Managing geographic units in this way enables users to be able to perform more comprehensive searches. For example, rather than having to conduct separate searches for records in "United States" and "USA", the user can search one term, and all the records relating to the synonym term will also be returned.

:::note

Only superadministrators have access to viewing, editing, and adding to the geographic thesaurus.

:::