---
title: "Annotations / Determinations"
date: 2021-10-26
lastmod: 2027-09-27
draft: false
authors: ["Katie Pearson"]
weight: 10
keywords: ["edit", "annotation", "identification", "determination"]
---

:::info

This page describes how to add annotations individually or in batch.

:::

**Annotations** (also called **Determinations**) in Symbiota portals are taxonomic identifications provided for an occurrence.

### Adding Individual Determinations/Annotations

To annotate an individual record or add previous determinations, navigate to the specimen in the Occurrence Editor (My Profile > Occurrence Records > name of collection > Edit Existing Records) and click the Determination History tab. If no previous annotations exist, you will see a message that says "There are no historic annotations for this specimen" and a box labeled Add a New Determination. If an annotation already exists on the specimen, you will see that annotation. Click the plus sign icon to add a new annotation.

![Determination History Example](/img/dethistoryexample.png)

In the Add a New Determination Box, enter, at minimum, the scientific name, determiner (person who identified the specimen, if known. Enter "unknown" if not known), and the date (or "n.d." if not known). You can also add an [identification qualifier](https://dwc.tdwg.org/terms/#dwc:identificationQualifier) (e.g., "cf." or "aff."), a reference, and notes, and you can select a confidence of determination, if desired. By default, if the date of determination is newer than that previous date of determination, the _Make this the current determination_ box will be checked once you move your cursor out of the Date box. If you want this determination to be the most up-to-date identification for the specimen, keep this box checked (or check it, if it was not auto-checked).

:::tip

After you add a date, make sure you hit "Tab" on your keyboard or click on the next field. This will trigger the _Make this the current determination_ to be checked, if need be.

:::

If you wish to print this annotation label now or in the future, also check the _Add to Annotation Print Queue_ box. Click Submit Determination.

![Add New Determination Form](/img/addnewdetermination.png)

:::note

If the specimen previously had an identification and you have checked the box next to "Make this the current determination," a historic annotation will be added to the record automatically as shown in the next screenshot. For this reason, you do not need to manually add a historic determination before you add a new determination.

:::

### Batch Adding Annotations/Determinations

You can add many annotations at once using the Add Batch Determinations/Nomenclatural Adjustments tool. Navigate to this tool by accessing the Data Editor Control Panel (My Profile > Occurrence Records > name of collection) and clicking "Add Batch Determinations/Nomenclatural Adjustments." To select the specimens to which determination data will be added ("Define Specimen Recordset"), either enter a list of catalog numbers (separated by commas) in the "Catalog Number:" field or select a taxon to evaluate by entering its name in the "Taxon:" field. Click the Add Record(s) to List button.

![Batch Annotation Search Form](/img/addbatchannotations.png)

A table of specimens of the indicated taxon will appear below the "Define Specimen Recordset" box (see screenshot below). You can then select all the specimens that you wish to annotate by checking or unchecking the boxes in the leftmost column of the table. Use the "Select/Deselect all Specimens" box to uncheck or check all the boxes if you would prefer to select specimens one by one.

![Batch Annotation Entry Form](/img/batchannotationform.png)

Add information about the name change in the "New Determination Details" box.

- Indicate whether the change is due to a new identification ("Identification Adjustment/Verification") or a nomenclatural change ("Nomenclatural Adjustment").
- (Optional) Add an identification qualifier (e.g., "aff." or "cf."). See Darwin Core's [identificationQualifier](https://dwc.tdwg.org/terms/#dwc:identificationQualifier)
- Enter the new scientific name in the "Scientific Name" field. The "Author" field will automatically populate if the taxon is already in the taxon table. If the taxon is not in the taxon table, you will have to manually enter the author of the scientific name.
- Add the name of the determiner (person who identified the record) in the "Determiner" field (see Darwin Core's [identifiedBy](https://dwc.tdwg.org/terms/#dwc:identifiedBy))
- Enter the full date of determination in the "Date" field (see Darwin Core's [dateIdentified](https://dwc.tdwg.org/terms/#dwc:dateIdentified)). It is recommended to use the format YYYY-MM-DD if possible. If only a year is provided, enter the year. If only a year and month are provided, enter it in YYYY-MM format.
- (Optional) Indicate the confidence in the determination (Low, Medium, or High) in the "Confidence of Determination" field. This field is for internal curatorial use and is not included in a Darwin Core Archive export.
- (Optional) List your determination references in the "Reference" field. (See Darwin Core's [identificationReferences](https://dwc.tdwg.org/terms/#dwc:identificationReferences))
- (Optional) Include any other notes in the "Notes" field. (See Darwin Core's [identificationRemarks](https://dwc.tdwg.org/terms/#dwc:identificationRemarks))

If you check the _Make this the current determination_ box, the scientific name will be updated for the selected records. Otherwise, the determination will be added to the specimens' records, but the most current ID name will not be changed.

If you wish to print the annotation labels in the future, check the _Add to Annotation Print Queue_ box.
