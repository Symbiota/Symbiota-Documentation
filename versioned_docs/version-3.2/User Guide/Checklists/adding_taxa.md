---
title: "Adding Taxa to Checklist"
date: 2021-10-14
lastmod: 2024-12-11
authors: ["Neil Cobb", "Katie Pearson"]
draft: false
weight: 10
keywords: ["checklist", "inventory", "flora"]
---

import ReactPlayer from "react-player";

| **OVERVIEW**                                                                       |
| ---------------------------------------------------------------------------------- |
| This page describes how to add taxa (species) to a checklist in a Symbiota portal. |

There are three ways to add taxa to a checklist, by querying the portal for taxa that meet your search criteria, by adding taxa individually, or by batch uploading a list of taxa and notes.

### Batch Adding Taxa by Searching the Portal

This method should be used if you do not already have a list of taxa prepared, and you want to build a checklist based on occurrences in the portal. You can define certain search criteria (e.g., a location or polygon in the map interface), view the results of this search, and add the taxa (and/or vouchers) that meet your search criteria.

1. On the checklist page, click the center pencil icon with a v ("Manage Linked Vouchers") at the top right of the page. This will take you to the voucher administration tools.
2. If this is your first time defining search criteria, you will be prompted with a "Edit Search Statement" box. Use the fields available here to define the search criteria for the occurrences you would like to see. For example, you can list a state or county, taxon, a bounding box, or any combination of these (or additional) fields.
   - If you have previously created a search statement, you can edit your search statement by clicking the magnifying glass icon at the top of the page.

**_NOTE:_** _Take care to make your search statement general enough that you will get the maximum number of specimens; fewer criteria is better. For example, rather than including both "United States" in **country** and "Arizona" in **state**, try just using "Arizona" in **state** so that even records with "USA" or "United States of America" are included in your search results. You will likely need to conduct several different searches to ensure a complete result (e.g., do a search for "AZ" as well as one for "Arizona")._
![Checklist Search Statement](/img/checklistsearchstatement.png)

**_NOTE:_** \*If you restrict your search based on coordinates, **_your results will be limited to specimens that have coordinate data_**. Depending on the portal, this may represent only 30-50% of available records.\*

3. After you have defined your search criteria, click the Missing Taxa tab.
4. In the Display Mode dropdown list, select Batch Linking.

![Display Mode of Missing Taxa Tab](/img/checklistdisplaymode.JPG)

From here you will see a table consiting of the first 1000 records that match your search criteria and that represent taxa that are not already in your checklist. To add taxa to the checklist from this page, check the boxes next to the vouchers with taxonomic names that you wish to add to your checklist (check the box in the top left corner of the table to check all the records in the table).

5. To add **_only_** the taxonomic names represented by these specimens to your checklist, check the "Add names without linking vouchers" box, then click the Submit Vouchers button. To add the taxonomic names **_and_** link vouchers to your checklist, leave this box unchecked and click the Submit Vouchers button.

![Options to Add Taxa and/or Vouchers to a Checklist](/img/checklistsubmitvouchers.JPG)

6. After linking the desired taxa, refresh the list and link the next batch as necessary until all desired taxonomic names have been added.

### Adding Individual Taxa

<ReactPlayer
  playing
  controls
  url="https://www.youtube.com/watch?v=jm2_mn2nClo"
/>

1. On the checklist page, click the rightmost pencil icon (labeled spp.) at the top right of the page. This will bring up a panel on the lower right side of the screen.
2. Add the name of a taxon you wish to add. Do NOT include the authorship of the taxon. You can start typing, and a dropdown list will allow you to select the taxon from available options.
   - You cannot add a name that is not present in the taxonomic thesaurus (it will tell you if this is the case). If you find that the taxon you wish to add is not present:
     1. Check that your spelling is correct. Use a vetted taxonomic resources, such as [Tropicos](http://tropicos.org) or [IPNI](http://www.ipni.org/) to check.
     2. If your spelling is correct, contact your portal manager with the name, authorship, and a reference or link to that name in another taxonomic database, and it will be added for you.
3. Fill in the other fields if desired. All of these fields can be left blank:
   - **Family Override**: If you enter the family name here, you will override the family provided by the taxonomic thesaurus. It is advised not to enter anything in this field.
   - **Habitat**: If the taxon is usually found in a particular habitat in the area circumscribed by the checklist, you can include this information here.
   - **Abundance**: Here you can note how frequently/abundantly this taxon is found in the area circumscribed by the checklist. For example, you can use terms like “common,” “frequent,” or “rare.”
   - **Notes**: Any other comments about this taxon pertaining to your checklist area can be put here, for example: “Cultivated ornamental” or “favored by honeybees”
   - **Internal notes**: This field, unlike the others, will be visible only to people authorized to edit the checklist. You might make a note “need to check the species” or “no picture available” for example.
   - **Source**: This field is more likely to be used for research and teaching checklists. For such checklists, it is useful to know whether the information came from a flora, some other publication, or a report by some
4. Click the “Add species to List” button.

### Batch Uploading Taxa from a File

**_NOTE:_** _It is recommended to add a few taxa individually before attempting a batch upload so that you can get familiar with the data types and formats._

[![Video Demo of Batch Uploading Taxa](http://img.youtube.com/vi/Hnk09MYlMVg/0.jpg)](http://www.youtube.com/watch?v=Hnk09MYlMVg "Video Demo of Batch Uploading Taxa")

If you have several taxa to add at one time, you can upload them in a CSV (comma separated value) file. The easiest way to create the desired listing is to use Microsoft Excel or OpenOffice Calc and then save the file as a CSV file.
In your CSV file, one column in the file should be labeled sciname. This should contain the scientific name of the taxon WITHOUT the authorship included. In this CSV file, you must be very careful to spell the scientific names correctly. If you have an error in your spelling, you will not be able to load that name into your checklist.
You can also include “family”, “habitat”, “abundance”, and “notes” columns (see above for descriptions of these fields) in this file. An example is shown below.

| Sciname             | Habitat             | Abundance | Notes                           |
| ------------------- | ------------------- | --------- | ------------------------------- |
| Asystasia gangetica | Middle of the field | Rare      | Demonstration; correct spelling |
| Asystasia gangetca  | field               | unknown   | Demonstration; wrong spelling   |

Below is a screenshot of uploading the previous example “file”. Note that only one name, the one that was correctly spelled, was uploaded.

![Sample Checklist](/img/samplechecklist.jpg)

To return to the Checklist, click “Return to Checklist” at the top left of the page (underlined below).

![Return to Checklist](/img/returntochecklist.jpg)

You can then view the taxa that were added to the checklist.

![View Checklist Taxa](/img/viewchecklisttaxa.jpg)
