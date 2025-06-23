---
title: "Trait Scoring from Text"
date: 2021-12-09
draft: false
weight: 10
authors: ["Katie Pearson"]
keywords: ["trait scoring", "attribute scoring", "phenology", "traits"]
---

:::info

This page describes how to batch score traits for occurrences in your collection from text (e.g., description, notes) in the occurrence record. The example provided displays how to score phenological traits for vascular plant specimens, though other traits may be score-able depending on your Symbiota portal.

:::

:::note

Trait scoring tools are not activated in all portals. Contact your portal manager for more information.

:::

Navigate to your Data Editor Control Panel (My Profile > Occurrence Management > name of collection), click Occurrence Trait Coding Tools, and select “Trait Mining from Verbatim Text”. In the Harvesting Filter box, select the Occurrence trait that you would like to score.

![Trait Scoring from Text](/img/traitscorefromtextfilter.PNG)

For the “Verbatim text source” field, select the database field that you want the tool to display. The options include: Habitat, Substrate, Occurrence Remarks (Notes), Dynamic Properties, Verbatim Attributes (Description), Behavior, Reproductive Condition (Phenology), Life Stage, and Sex. In the “Filter by text (optional)” field, you can enter any text string by which you wish to filter the results. For example, if you enter “fw”, the tool will provide all values for that field that contain “fw”. This field is optional, but including a search string will significantly narrow your search results. When choosing strings to enter in this field, consider searching for misspelled and abbreviated versions of the values you expect. For example, if you are searching for specimens that you can score as flowering, you could search for “fowering” or “fwrr” as well as “flowering” and “fwr”. In the “Filter by taxon (optional)” field, you can enter the name of a taxon by which you wish to filter the results. This field is also optional.

Once you have filled out the desired fields, click the Get Field Values button. The result will look similar to the screenshot on the next page. The Harvesting Filter box is still visible, and the box below will list all the unique strings (values) found in the specified database field that align with your search criteria. The numbers in brackets to the right of each string value indicates how many specimen records have that exact value in the specified database field.

![Trait Scoring Filters](/img/traitscorefromtext.PNG)

Select the value or values from the list that you wish to score. To select several values from the list that you wish to give the same phenological score, hold Ctrl and click on each value in the list. Select the appropriate score from the trait scoring schema at the bottom of the lower box. Depending on the scoring schema available for the trait you are scoring, you may be able to view more scoring options by clicking the black triangle next to the schema. From this list, select the traits that you wish to apply to this specimen. Traits that you do not wish to score can be left blank. When you are satisfied with your scoring(s), click the Batch Assign State(s) button. If you make a mistake, click Reset Form (Caution: this will un-select all of your selected text fields as well, so be careful when selecting traits!).
