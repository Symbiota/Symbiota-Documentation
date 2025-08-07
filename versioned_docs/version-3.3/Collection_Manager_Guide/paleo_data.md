---
title: "Paleo Data"
date: 2022-11-23
lastmod: 2024-01-17
authors: ["Lindsay Walker"]
editors: ["Lindsay Walker"]
draft: "false"
sidebar_position: 160
keywords: ["paleo", "fossil"]
---

:::info

The use of Symbiota portals for managing and sharing paleontological collections data is relatively new. Anyone with interest in advancing the functionality of Symbiota portals to manage, publish, or use fossil data is encouraged to contact the Symbiota Support Hub. Community discussions related the functionality of Symbiota portals for managing and publishing fossil collections data can be found [here](https://github.com/BioKIC/symbiota-docs/discussions?discussions_q=label%3Apaleo).

:::

The "Paleo Module" is a non-standard module available for collections in Symbiota portals that contain records of fossil specimen occurrences. This module is activated on a **per-collection** basis (i.e. not per portal) and appears as an additional form within the Occurrence Editor. Contact your portal administrator to have this module activated for your collection.

![Paleo Module for Symbiota Portals](/img/paleo_module.png)

## Geochronologic/Chronostratigraphic Data

### Controlled Vocabularies

The values for the [geochonologic/chronostratigraphic terms](https://pubs.usgs.gov/fs/2018/3054/fs20183054.pdf) in the paleo module rely on a suggested controlled vocabulary, which is in place to facilitate consistent data entry when records are manually created in your portal.

If your portal community has not yet selected a standard upon which to base this controlled vocabulary, recommended options include:

- The [International Commission on Stratigraphy's Chronostratigraphic Chart](https://stratigraphy.org/chart)
- The [Geological Society of America's Geologic Time Scale](https://www.geosociety.org/GSA/Education_Careers/Geologic_Time_Scale/GSA/timescale/home.aspx?hkey=8668fe3f-c0a8-4dd8-aaca-13603b24c9e0)
- The [US Geological Survey's Divisions of Geological Time](https://pubs.er.usgs.gov/publication/fs20183054)

### Bulk Importing & Manipulating Age-Related Values

If the paleo module has been activated for your collection's profile in a Symbiota portal, data can be imported, downloaded, and batch updated using the same methods for non-paleo collections. Refer to the documentation on [Importing and Uploading Data](/Collection_Manager_Guide/Importing_Uploading) for more information.

When bulk ingesting data that includes values destined for the _Eon, Era, Period, Epoch_ and/or _Stage_ fields, be aware of the idiosyncrasies illustrated below:

|                                                                                                                                                                                                                                                         ![Paleo Module for Symbiota Portals](/img/paleo_ageerror1.png)                                                                                                                                                                                                                                                          |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| **Only one hierarchy for age-related data can be specified within the Occurrence Editor.** In other words, if a specimen's possible age may span multiple divisions of geologic time--e.g. _Early Interval_="Campanian" and _Late Interval_="Danian"--at present, you can only specify one hierarchy using the Paleo Module form. In the example above, the hierachy for "Danian" is selected. However, full hierarchies for both _Late Interval_ and _Early Interval_ can be [bulk uploaded](/Collection_Manager_Guide/Importing_Uploading) after cataloging, if desired. |

|                                                                                                                                                         ![Paleo Module for Symbiota Portals](/img/paleo_ageerror2.png)                                                                                                                                                          |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| ⚠️ **While a controlled vocabulary exists, it is only _suggested_; therefore, illogical age values can be keystroked and saved the Occurrence Editor**. In the example above, because “Lower Cretaceous” exists as value for _Epoch_, the form accepted this value, even though it's an [illogical choice](https://stratigraphy.org/timescale/) for _Stage_ = “Maastrichtian”). |

|                                                                                                                                                                                                                      ![Paleo Module for Symbiota Portals](/img/paleo_ageerror3.png)                                                                                                                                                                                                                       |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| ❗**A "mismatched term" error will appear if an entered value does not perfectly align with your portal's suggested controlled vocabulary in the _Eon, Era, Period, Epoch_ and _Stage_ fields**. In this example, the suggested vocabulary prefers "Upper Cretaceous" to "Late Cretaceous"; therefore, when "Late Cretaceous" is entered, an error appears. This error is only visible on the Occurence Editor interface and will _not_ affect how your data are stored, exported, or displayed publicly. |

## Entering _BasisOfRecord_

At present, the default value for [_basisOfRecord_](https://dwc.tdwg.org/terms/#dwc:basisOfRecord) in Symbiota portals is "PreservedSpecimen"; however, the correct value for paleontological occurrences is "FossilSpecimen". This value can be manually selected in the Occurrence Editor form during cataloging, or by [batch editing](/Collection_Manager_Guide/Editing_Occurrences/batch_editing) to replace "PreservedSpecimen" with "FossilSpecimen" after cataloging is complete.

![Paleo Module for Symbiota Portals](/img/paleo_basisofrecord.png)

## Fossil Localities/Sites

At present, locality (site) data are entered at the specimen occurence level--i.e., on a record-by-record basis--in Symbiota portals. Locality data are also **publicly visible by default**. Refer to the documentation on [locality redaction](/Collection_Manager_Guide/Data_Publishing/redacting_obscuring_data) for instructions on how to obscure this information for sensitive localities.

## Extinct Taxa

Extinct taxa are supported in Symbiota. Refer to the [Taxonomy Tree Viewer](https://www.pteridoportal.org/portal/taxa/taxonomy/taxonomydisplay.php) in Pteridoportal for [examples](https://www.pteridoportal.org/portal/taxa/index.php?taxon=66863).

## Data Publishing Considerations

At present, while Symbiota supports paleontological data, including the Darwin Core Class [GeologicalContext](https://dwc.tdwg.org/terms/#geologicalcontext), values in these fields do not export within Darwin Core archives when [published to GBIF](/Collection_Manager_Guide/Data_Publishing/) via Symbiota portals. However, this information can be exported as part of a [backup file](/Collection_Manager_Guide/Downloading/downloading_copy).

## Printing Labels

Similar to data publishing, values in the Darwin Core Class [GeologicalContext](https://dwc.tdwg.org/terms/#geologicalcontext) are not currently available within the label editor's visual interface. [Contact](https://symbiota.org/contact-the-support-hub/) the Symbiota Support Hub if you need assistance with [creating customized labels](/Editor_Guide/Label_Customization) that include paleo-related data fields.

# Best Practices

Symbiota is compliant with the [Darwin Core](https://dwc.tdwg.org/terms/) data standard, and this includes its application to paleontological data. However, because some of these terms are still in the process of becoming well-defined for use with fossil data, the Symbiota Support Hub recommendations following best practices recommended by the [Paleo Data Working Group](https://paleo-data.github.io/).

📃 A complete list of fields used in Symbiota portals and their Darwin Core equivalents can be found [here](/documents/SymbiotaDataFields_202111.csv).

# Need help?

The Symbiota Support Hub encourages you to [contact them](https://symbiota.org/contact-the-support-hub/) for guidance if using Symbiota to manage paleontological data.
