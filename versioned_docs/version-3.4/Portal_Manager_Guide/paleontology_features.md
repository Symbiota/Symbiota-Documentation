---
title: "Paleontology Features"
date: 2025-07-22
lastmod: 2025-07-22
authors: ["Lindsay Walker"]
sidebar_position: 60
keywords: ["paleontology", "fossil", "geological context", "configuration"]
---

:::info  
Symbiota includes features to facilitate the management and mobilization of fossil specimen data. Some of these features can be activated on a per-collection basis, whereas others must be activated on a per-portal basis. This page describes these features and steps that a Portal Manager can take to activate them for a given Symbiota portal community.  
:::

:::note 
**Fossil specimens have distinct data requirements from recent biological ("[neontological](https://www.merriam-webster.com/dictionary/neontology)") collections.** Prior to activating features for paleontological data mobilization and management in a Symbiota portal, Portal Managers are strongly encouraged to refer to the [Paleo Data Knowledge Hub](https://paleo-data.github.io/knowledge-hub/) for discipline-specific guidance, as well as [additional documentation](https://paleo-data.github.io/knowledge-hub/topics?topic=symbiota) for Symbiota. Likewise, Portal Managers are encouraged to refer portal users to these resources. Engagement with the [Paleo Data Working Group](https://paleo-data.github.io/knowledge-hub/community/about-pdwg) (aka "PDWG") is also advised.   
:::

## Introduction
A suite of features has been developed to facilitate the management and mobilization of fossil specimen data using Symbiota portals. If [configured](#feature-activation) on a per-portal basis, the full suite of features outlined below will become available throughout the portal.

## Data management

### Paleo Module  
The "Paleo Module" contains [Darwin Core-compliant](https://dwc.tdwg.org/terms/#geologicalcontext) and [Symbiota-specific](/Editor_Guide/Editing_Searching_Records/symbiota_data_fields/#paleontology) data fields. The mechanics of entering geologic time-related data into this module is described in the Editor guide.

![Paleo Module](/img/portalmanager_paleomodule2025.png)

### Data Upload Module
All [paleontology-related fields](/Editor_Guide/Editing_Searching_Records/symbiota_data_fields/#paleontology) can be bulk ingested using the [Data Upload Module](/Collection_Manager_Guide/Importing_Uploading/), e.g. from a spreadsheet or an IPT. Refer to the [data import field](/Collection_Manager_Guide/Importing_Uploading/data_import_fields) documentation for more information about data formatting requirements and specific data types (text, integer, etc.) that can be ingested into each one. Data loaded into the Upload Module destined for the Paleo Module can be previewed in the user interface as well as in the `uploadspectemp` table.

### Basis of Record
**All occurrence records that represent fossil specimens must be cataloged such that _[Basis of Record](https://dwc.tdwg.org/terms/#dwc:basisOfRecord)_ = `Fossil Specimen`**. Thus, for portals where the full suite of paleontology data management features are activated, `FossilSpecimen` will become the default setting for _Dataset Type_ when a new Collections Profile is created. In turn, all new occurrence records that are cataloged into a Collection Profile where _Dataset Type_ = `Fossil Specimens`, all records will contain _Basis of Record_ = `FossilSpecimen`. A Portal Manager can manually change this value to `PreservedSpecimen` on a per-collection basis through the Metadata Editor if necessary/appropriate.

:::warning  
Portal Managers should take care to ensure that _Dataset Type_ is appropriately configured when creating new Collection Profiles. Further, a given Collection Profile should **only** be used for cataloging extant OR extinct (fossil) specimen occurrences; **in other words, do not commingle catalog records with variable _Basis of Record_ values in the same Collection Profile**.
:::

### Data Editor search form
All [paleontology-related fields](/Editor_Guide/Editing_Searching_Records/symbiota_data_fields/#paleontology) can be queried using the Data Editor search form (accessible from the _Data Editor Control Panel > Edit Existing Occurrence Records_). Paleontology fields that are visible in the Data Editor search form’s table view can also be edited using the associated [Batch Update tool](/Collection_Manager_Guide/Editing_Occurrences/batch_editing).


## Data discoverability
### Public search forms
Some fields associated with the Darwin Core class [GeologicalContext](https://dwc.tdwg.org/terms/#geologicalcontext) can be queried using the public search form and map search interfaces, as shown below. 

![Public Search Form](/img/portalmanager_paleosearchpublicform.png)
![Public Search Form](/img/portalmanager_paleosearchpublicmap.png)

### Public query results and record display
Public query results can be viewed and sorted in List or Table view, and several paleontology-related data will be visible in record previews.

![Public Query Results](/img/portalmanager_paleosearchlistview.png)

[Paleontology-related fields](/Editor_Guide/Editing_Searching_Records/symbiota_data_fields/#paleontology) will be visible through the Public Display for individual records under the heading, "GEOLOGICAL CONTEXT", and values entered for _[Element](/Editor_Guide/Editing_Searching_Records/symbiota_data_fields#element)_ will display directly above this section. For example:

![Public Record View](/img/portalmanager_paleopublicrecordview.png)

## Data export and publishing
Data from all [paleontology-related fields](/Editor_Guide/Editing_Searching_Records/symbiota_data_fields/#paleontology) can be exported to [backup data files](/Collection_Manager_Guide/Downloading/downloading_copy) by Collection Administrators, but only [Darwin Core-compliant fields](https://dwc.tdwg.org/terms/#geologicalcontext) will be exported and published to Darwin Core Archives. 

## Geologic map layer
All mapping interfaces will display a geologic map layer made available using the [Macrostrat API](https://macrostrat.org/#api).

![Public Record View](/img/portalmanager_paleosearchmacrostratlayer.png)

## Vocabulary configuration
### Chronostratigraphic data
A controlled vocabulary of chronostratographic terms is maintained in the `omoccurpaleogts` table. By default, this table is populated with values from the [GBIF GeoTime Vocabulary](https://registry.gbif.org/vocabulary/GeoTime), which is based on the [International Commission on Stratigraphy's (ICS) Chronostratigraphic Chart](https://stratigraphy.org/chart). These values are recommended for use to maximize the interoperability of data within your portal, as well as with data in external aggregators.

Similar to how a portal’s Taxonomic Thesaurus helps standardize higher taxonomy, this table exists to standardize data associated with geologic time. Specifically, it is used to backfill hierarchical values associated with the fields, _Early Interval_ and _Late Interval_. For example, if a user enters _Early Interval_ = "Tithonian", the `omoccurpaleogts` table will associate this value with the appropriate _[Eon](https://dwc.tdwg.org/terms/#dwc:earliestEonOrLowestEonothem)_, _[Era](https://dwc.tdwg.org/terms/#dwc:earliestEraOrLowestErathem)_, _[Period](https://dwc.tdwg.org/terms/#dwc:earliestPeriodOrLowestSystem)_, and _[Epoch](https://dwc.tdwg.org/terms/#dwc:earliestEpochOrLowestSeries)_ values as specified in `omoccurpaleogts`. The mechanics of entering geologic time-related data is described in the Editor guide. 

![Public Record View](/img/portalmanager_paleomodule2025earlylate.png)

### Taxon environment
An additional controlled vocabulary exists for the field, _[Taxon Environment](/Editor_Guide/Editing_Searching_Records/symbiota_data_fields#taxon-environment)_. Values for this vocabulary are currently hard-coded into Symbiota and cannot be modified using the table, `ctcontrolvocabterm`.

## Feature activation
### Whole portal configuration
All Symbiota features associated with the management of fossil specimen data can be activated on a per-portal basis (i.e., made active for an entire portal) through configuration of the portal’s symbini.php file. Further consideration should be given to the associated [controlled vocabularies](#vocabulary-configuration) prior to feature deployment across a given portal. 

:::danger 
For portals that are primarily used to maintain recent biological specimen data, activation of Symbiota’s various features for managing and publishing fossil specimen data is **not recommended unless** the community has agreed to commingle these data (including the taxonomy of extinct and extant organisms) within their portal.
:::

### Paleo Module activation per collection
The [Paleo Module](#paleo-module) can be activated on a per-collection basis (i.e., without activating all other paleo features in the portal) by a Portal Manager with backend database access as follows: `omcollections`: _dynamicProperties_ = `{"editorProps":{"modules-panel":[{"paleo":{"status":1}}]}}`. If this module is activated on a per-collection basis, **functionality will be limited** to the visibility of this module on the Occurrence Editor form, and only for Collections Profiles where it has been activated; however, data entered into this module can only be accessed (queried, downloaded, etc.) by downloading a [backup data file](/Collection_Manager_Guide/Downloading/downloading_copy) (a function only available to users with Administrator permissions). Activation of this module on a per-collection basis will enable data publishing.

# Acknowledgments 
Tools for aggregating fossil specimen data using Symbiota were initially developed as part of NSF Award [#1802504](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1802504). These features were subsequently enhanced and expanded to include support for active (live) management and publishing of fossil specimen data as collaboration between the Symbiota Support Hub, the US National Museum of Natural History, and University of Colorado at Boulder (NSF Awards [#2324688](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2324688), [#2324689](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2324689), and [#2324690](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2324690)/[2525603](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2525603)).