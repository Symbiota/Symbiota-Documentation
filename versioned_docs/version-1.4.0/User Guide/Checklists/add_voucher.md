---
title: "Adding Vouchers to Checklist"
date: 2021-10-14
authors: ["Katie Pearson","Neil Cobb","Ed Gilbert"]
editors: ["Katie Pearson"]
lastmod: 2024-12-11
draft: false
weight: 15
keywords: ["checklist","inventory","flora","voucher"]
---

|**OVERVIEW**|
| --- | 
|This page describes how to add voucher specimens (physical evidence of the existence of a taxon in a checklist) to a checklist in a Symbiota portal.|

There are two main ways to add voucher specimens to a research checklist. You can add specific, individual specimens from your own collection to the checklist through the occurrence editor (the page of the specimen record) or add specimens from any collection through the Manage Linked Voucher tool on the checklist page.

### Adding Specimens from Any Collection (Manage Linked Voucher Tool)

youtube NRW2kh6xln0

1. Navigate to the homepage of your checklist.
2. Click the pencil icon that has a V next to it (the center icon in the top right corner of the page, highlighted below).

![Manage Linked Vouchers](/img/checklistexample.png)

3. If this is the first time you have used this tool, you will be asked to first define the search statement (i.e., search parameters) that will be used to find the specimens that might pertain to your checklist. You can use a variety of fields to define your search, as described below.

NOTE:  You will be able to change the search statement in the future, so you are not necessarily defining the bounds forever.

![Checklist Search Statement](/img/checklistsearchstatement.png)

   * You can enter search terms for a number of fields on the left side of the form.
   * You can use the polygon footprint that you defined when creating the checklist (see 29:1 Creating a checklist, step 3c) to search for specimen records by checking the “Search based on polygon defining checklist research boundaries” box. If you did not define a polygon previously, you can also do so from here by clicking the pencil icon to the right of this option and following the steps outlined in 29:1 Creating a checklist, step 3c.
   * You can define a specific bounding box by entering the latitude and longitude values that delimit the box, or by defining the lat/long values on a map. To do the latter:
     1. Click the globe icon to the right of the Lat North field
     2. In the pop-up window, pan and zoom to the location where you want to place the bounding box.
     3. Click on the approximate center where you want the bounding box to be located.
     4. Adjust the location and size of the bounding box as desired by clicking and dragging inside the box (to move the box) or clicking and dragging one of the circles on the sides or corners of the box (to resize the box).
     5. To save the bounding box, click Save and Close.

![Bounding Box Assignment](/img/checklistboundingbox.PNG)

   * There are a number of important checkboxes below the Lat/Long fields that you can use to refine your search. For example, you can allow the search to return specimens with the desired search terms OR within certain latitude and longitude coordinates.
   * You can use any combination of the above options to search for voucher specimens.
4. Once you have entered the desired search terms, click the Save Search Terms button.
5. There are a number of ways to add voucher specimens from this point.

![Checklist Voucher Tools](/img/checklistvouchertab.png)

   * If you have already defined a taxon list for your checklist, you can add voucher specimens from the New Vouchers tab. From this tab, you can:
       1. View taxa that do not currently have voucher specimens in your checklist (select Non-vouchered taxa list from the Display Mode dropdown list).
       2. View specimen records that match your search criteria and are one of the taxa defined in your taxon list that is NOT currently vouchered (select Occurrences for non-vouchered taxa from the Display Mode dropdown list).
           * To add voucher specimens from this list, click the box to the left of the specimen record(s) that you wish to add and click the Add Vouchers button.
       3. View specimen records that match your search criteria and are one of the taxa defined in your taxon list, regardless of whether that taxon has been vouchered previously (select New occurrences for all taxa from the Display Mode dropdown list).
   * To add voucher specimens from this list, click the box to the left of the specimen record(s) that you wish to add and click the Add Vouchers button.
   * Regardless of whether you have previously defined a taxon list for your checklist, you can add voucher specimens through the Missing Taxa tab. From this tab, you can:
      1. View the taxa that are not found in the checklist currently but are represented by one or more specimens that align with your search criteria (select Species List from the Display Mode dropdown list).
          * You can then view a list of the specimens associated with each taxon by clicking the link icon ![Link Icon](/img/link.png) From there, you can link the desired specimens individually by clicking the add voucher icon ![Add Voucher Icon](/img/voucheradd.png) to the right of the specimen record in the list.
       2. View the specimens that are not yet added as voucher specimens for your checklist but do align with your search criteria (select Batch Linking from the Display Mode dropdown menu).
          * To add voucher specimens from this list, click the box to the left of the specimen record(s) that you wish to add and click the Add Vouchers button.
       3. View specimen records that align with your search criteria, but have scientific names that are not linked to a particular name in the taxonomic thesaurus (select Problem Taxa from the Display Mode dropdown menu).
          * To add voucher specimens from this list, enter the name of the taxon to which this specimen belongs into the text box to the right of the specimen’s scientific name. Note that the name you enter in this box must already be found in the list of taxa in your checklist. Click the Link Voucher button.

### Adding Individual Specimens from Your Own Collection

NOTE: You must be an editor of a collection to assign specimens in this way.

1. Look up a specific specimen in your own collection (e.g., by clicking Edit Existing Occurrence Records in your Data Editor Control Panel and searching by a specific catalog number or by using other search terms).
2. On the resulting page, click the Linked Resources tab.
3. In the Checklist Voucher Linkages box (see below), select the desired Checklist from the dropdown menu and click Link to Checklist as Voucher. A new window will likely pop up as a result, but you can ignore this window and close the editor. The specimen has been successfully linked as a voucher to the desired checklist.

![Checklist Voucher Linkages](/img/checklistvoucherlinkage.png)

