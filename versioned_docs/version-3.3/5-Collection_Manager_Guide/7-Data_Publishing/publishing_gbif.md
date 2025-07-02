---
title: "Publishing Data to GBIF"
authors: ["Ed Gilbert","Katie Pearson"]
editors: ["Katie Pearson", "Lindsay Walker"]
date: 2021-10-07
lastmod: 2025-07-01
weight: 50
keywords: ["aggregator","gbif","data publishing"]
---

import ReactPlayer from "react-player";

:::info

This page describes how to publish the data from your collection to global aggregator [GBIF](https://www.gbif.org).

:::

Collections managed as "live datasets" within a Symbiota portal can immediately publish to GBIF without issues. Collections that make use of an in-house management system (e.g. Specify, Axiell Emu, Filemaker Pro, etc.) and only publish a snapshot of their data to a Symbiota instance can also use the portal to publish their data to GBIF, but only if: 1) they are not publishing their data through another means (e.g. IPT installation, VertNet, etc.), and 2) an _occurrenceID) (typically a "GUID") is included in the data being pushed from their in-house database to the Symbiota dataset (see [additional instructions below](/docs/Collection_Manager_Guide/Data_Publishing/publishing_gbif/#special-instructions-for-snapshots)). If the collection is using the Symbiota publishing tool built into Specify, _occurrenceID_ will be automatically included in the data upload from Specify. 

:::note

Your portal must be set up as a GBIF Publishing Installation to publishing your data to GBIF. This can be done by your portal manager.

:::

# General workflow for first-time data publishers

1. [Use these instructions](/docs/Collection_Manager_Guide/Data_Publishing/requesting_endorsement) to set up an institutional account with GBIF so that there is a direct publishing agreement established between GBIF and the institution. Since the institutional account may be used to list multiple collection datasets associated with that institution (e.g. https://www.gbif.org/publisher/4c0e9f60-c489-11d8-bf60-b8a03c50a862 ), you should coordinate with other collections within your institution, if applicable. Note that the institutional datasets can be published to GBIF using different publishing resources. For instance, the zoological collections could import their data from VertNet IPT (http://ipt.vertnet.org) or their institutional IPT, vascular plant data from the [SEINet](https://swbiodiversity.org), and lichens from [CLH](https://lichenportal.org).
   * If you are sure your institution is not yet registered, complete the registration form linked above and follow the instructions provided by GBIF. 
   * If your institution is already registered, review the GBIF metadata for your organization and existing datasets and contact GBIF to make any necessary changes. Be sure that none of the existing datasets contain the same data you are trying to publish. If they do, make the appropriate arrangements with GBIF so that the old dataset can be archived BEFORE re-publishing the new dataset.
2. Log in to your Symbiota portal, go to your _Administrator Control Panel_ (via _My Profile_ > _Occurrence Management tab_ > select your collection's name > select _Edit Metadata_.
   * Verify that your collection's name and description are accurate (both will be visible on the corresponding GBIF dataset page).
   * Select (check) the "Publish to Aggregators" box (for GBIF). If you do not see a GBIF publishing checkbox, contact your Portal Manager and ask them to configure the portal for GBIF publishing.  
   * Select the "Save Edits" button. 
3. Return to the _Administration Contol Panel_ and navigate to the _Darwin Core Archive Publishing_ link. Click "Create/Refresh Darwin Core Archive" button.
4. Enter your institution's GBIF publisher key and select the "Validate Key" button. (The GBIF key should have the following format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx, e.g. "4c0e9f60-c489-11d8-bf60-b8a03c50a872"). If your key validates, more instructions will be displayed along with a "Submit Data" button. Alternatively, you can enter the full URL to your GBIF Publisher Page ([example](https://www.gbif.org/publisher/d16f32bb-204f-4c07-95eb-6673e90225e9)), and the key will be automatically extracted. 
5. Before you submit data to GBIF for the first time, you will need to contact GBIF's Help Desk (helpdesk@gbif.org). **Look for the recommended draft email message to send to GBIF by following the instructions under the "Validate Key" button.** 
6. Once GBIF affirms that the portal has permission to submit data to your GBIF Publisher Page, click the "Submit Data" button. A link to your GBIF dataset will be immediately displayed, though it may take an hour or so for your data to be loaded, indexed, and available.

# To refresh your data after first-time publication
1. Return to the _Administration Contol Panel_ and navigate to the _Darwin Core Archive Publishing_ link. Click "Create/Refresh Darwin Core Archive" button.

<ReactPlayer
  playing={false}
  controls
  url="https://www.youtube.com/watch?v=aDbw9RF4w08"
/>

# Special instructions for snapshots
### Suggested workflows for populating _occurrenceid_:

#### Option 1: Generate GUIDs outside of Symbiota and then bring them into the portal
* In your spreadsheet to be imported, include a column/field called "occurrenceid".
* Populate this column using GUIDs generated using a tool like this one (copy-paste into your spreadsheet): [guidgenerator.com](https://www.guidgenerator.com).
* When you [upload](/docs/Collection_Manager_Guide/Importing_Uploading/) data from a spreadsheet into the portal, map your new _occurrenceid_ values to the corresponding data import field.
  * **Important:** If you already have data in the portal, select the option to match on your existing _catalogNumber_ or _occurrenceid_ values so that duplicate records are not generated upon import.
* Once your records are uploaded, the new GUIDs will appear in the "occurrenceid" field/box on the Occurrence Editor form.

#### Option 2: Use Symbiota-generated GUIDs
* Every time you want to send data to GBIF, email help@symbiota.org to request that the SSH populate the _occurrenceid_ field for you. 
* **Important:** Once we populate this field, you will have to remember to download a copy of your data from the portal and add the Symbiota-generated GUIDs to wherever you manage your records outside of Symbiota.

:::warning

Regardless of the method you choose to populate _occurrenceid_, the **most important** thing is to do is make sure that your _occurrenceid_ values (typically GUIDs) are retained with your canonical specimen records wherever you manage them outside of Symbiota (in a spreadsheet, MS Access, FileMaker Pro, etc.). Keeping this in mind, we suggest choosing whichever method will be the most sustainable for your colleciton's internal data management practices. Please contact the SSH's Help Desk if you would like to publish snapshot data from a Symbiota portal and need further guidance.

:::


