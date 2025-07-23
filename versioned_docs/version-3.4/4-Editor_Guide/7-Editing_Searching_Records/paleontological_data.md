---
title: "Fossil Specimen Data"
date: 2025-07-22
lastmod: 2025-07-23
authors: ["Lindsay Walker"]
editors: ["Katie Pearson"]
draft: "false"
weight: 30
keywords: ["paleontology", "fossil", “geological context”]
---

:::info
This page describes how to add and edit data associated with fossil specimen occurrences. The features described on this page will only be visible if features related to paleontological collections have been configured in your portal.
:::

:::warning
**Fossil specimens have distinct data requirements from recent biological (“[neontological](https://www.merriam-webster.com/dictionary/neontology)”) collections.** For discipline-specific advice regarding the digitization and general management of paleontological collections data, please refer to the [Paleo Data Knowledge Hub](https://paleo-data.github.io/knowledge-hub/), which also contains [Symbiota-specific guidance](https://paleo-data.github.io/knowledge-hub/topics?topic=symbiota).
:::

## Orientation

![Paleo Module](/img/occeditor_paleo.png)
Information specific to fossil specimens, such as geological age and rock units, can be recorded in the "Paleontology" section of the Occurrence Editor form, which is informally referred to as the "Paleo Module". When entering data associated with fossil specimens, it is **imperative** that Data Editors refer to the [associated data field definitions](/Editor_Guide/Editing_Searching_Records/symbiota_data_fields#paleontology). [Additional guidance](https://paleo-data.github.io/knowledge-hub/how-to-guides/manage-data-about-specimens-using-symbiota) on direct data entry (for this module, as well as the entirety of the Occurrence Editor) is maintained by the [Paleo Data Working Group](https://paleo-data.github.io/knowledge-hub/community/about-pdwg).

## Entering chronostratigraphic data
Data related to geological time (i.e., chronostratigraphic data) can be captured using several fields, including: _[Early Interval](/Editor_Guide/Editing_Searching_Records/symbiota_data_fields#early-interval-and-late-interval)_, _[Late Interval](/Editor_Guide/Editing_Searching_Records/symbiota_data_fields#early-interval-and-late-interval)_, _[Absolute Age](/Editor_Guide/Editing_Searching_Records/symbiota_data_fields#absolute-age)_, and _[Local Stage](/Editor_Guide/Editing_Searching_Records/symbiota_data_fields#local-stage)_.

In order to promote data interoperability, _Early Interval_ and _Late Interval_ rely on a controlled vocabulary standardized within a given Symbiota portal. Unless your Portal Manager has indicated differently, the default values for this table are based on the [International Commission on Stratigraphy's (ICS) Chronostratigraphic Chart](https://stratigraphy.org/chart).

There are several important things to know before using this feature:
- Every _Early Interval_ value entered should have a corresponding _Late Interval_ value, even if the values are the same.
- Values entered into _Early Interval_ and _Late Interval_ should be logical, i.e. the _Early Interval_ value should be either the same as or geologically older than the _Late Interval value_.
- Once entered correctly, a table will appear to display the higher-ranking values that have been backfilled by your portal (e.g., eon, era, etc.). If a value that does not comply with the portal’s underlying geological time vocabulary, the table will not display and an error message may appear.
Again, refer to the [ICS time scale](https://stratigraphy.org/chart) when entering these values unless directed differently by your Portal Manager. An exception to this rule may exist, whereby `Late` is used in place of `Upper` and `Early` is used in place of `Lower` (e.g. `Late Cretaceous`). 

For example:
| _Early Interval_ | _Late Interval_ | note |
| - | - | - |
| `Eocene` | `Oligocene` | ✅ correct data entry |
| `Eocene` | `Eocene` | ✅ correct data entry |
| `Oligocene` | `Eocene` | ❌ illogical order |
| `Eocene` | (null/blank) | ❌ null values not allowed |
| (null/blank) | `Oligocene` | ❌ null values not allowed |

:::tip
A warning will appear if the values for _Early Interval_ and _Later Interval_ are entered incorrectly.
:::

### What if I have a geological-time related value that doesn’t appear in the list?
Many fossil specimens are accompanied by labels, field notes, and other primary data sources containing values will not appear in the controlled vocabularies specified for _Early Interval_ and _Late Interval_. For example, this includes values that are regionally restricted (e.g. `Wolfcampian`), no longer accepted (e.g. `Tertiary`, `Late Permian`), informally used (e.g. `Precambrian`), and/or indicate uncertainty (e.g., `Cretaceous?`), among other possible scenarios. This information is important and should be recorded; however, it should **not** be captured using Symbiota’s _Early_- and _Late Interval_ fields, as described above. **Refer to the instructions below for guidance on how to deal with values that do not appear in the _Early_- or _Late Interval_ lists.**

#### Regionally accepted values
Values from regionally accepted time scales (such as those in [these lists](https://paleobiodb.org/classic/displayTimescale?type=list)) should be recorded using _[Local Stage](/Editor_Guide/Editing_Searching_Records/symbiota_data_fields#local-stage)_.

For example:
| _Early Interval_ | _Late Interval_ | **_Local Stage_** |  note |
| - | - | - | - |
| `Asselian` | `Asselian` | `Nealian` | `Nealian` is specific to the Permian of North America |
| `Tremadocian` | `Tremadocian` | `Tremadoc` | `Tremadoc` is specific to the Ordovician of Great Britain |
| `Ypresian` | `Lutetian` | `Wasatchian-Bridgerian` | `Watsatchian` and `Bridgerian` are land mammal ages specific to North America |

#### Uncertainty, unaccepted values, and similar scenarios
In the absence of an appropriate, standard-based term to record these data, verbatim values that record uncertainty and antiquated information should be captured in _Stratigraphic Remarks_ as a key:value pair (demonstrated below) to enable future parsing.

For example:
| _Early Interval_ | _Late Interval_ | **_Stratigraphic Remarks_** |
| - | - | - |
| `Late Miocene` | `Late Miocene` | `[VERBATIM CHRONOSTRATIGRAPHY: Upper Mio?]` |
| `Permian` | `Permian` | `[VERBATIM CHRONOSTRATIGRAPHY: Late Permian?]` |
| `Paleogene` | `Neogene` | `[VERBATIM CHRONOSTRATIGRAPHY: Tertiary]` |








