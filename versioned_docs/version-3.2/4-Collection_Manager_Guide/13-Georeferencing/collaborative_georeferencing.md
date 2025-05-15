---
title: "GEOLocate CoGe"
date: 2021-12-02
draft: false
authors: ["Katie Pearson"]
weight: 15
keywords: ["georeferencing","collaborative georeferencing","GEOLocate"]
---

The GEOLocate Collaborative Georeference Tool (CoGe) can be activated and integrated in a Symbiota portal to engage multiple users in a central georeferencing platform outside of the portal. More information about this platform can be found here: [GeoLocate CoGe page](https://coge.geo-locate.org/).

A [webinar introduction to CoGe can be found here](https://youtu.be/1IZhUMqCGvs).

The general steps for a CoGe workflow are as follows:

1. Create a profile in the CoGe website
2. Create a community on the CoGe website
3. Add members to your community in CoGe
4. Add data to the CoGe community from your Symbiota portal
5. Have members georeference in the [CoGe web client](https://www.geo-locate.org/web/WebComGeoref.aspx).

:::note

You can either have data pushed to CoGe directly from your Symbiota portal, or you can download records as a CSV file, upload them to CoGe, download them once they are done, and then re-upload them to Symbiota. However, if you push data to CoGe directly, all georeferences made in CoGe will be automatically applied to your records in the Symbiota portal. Updates will be "live" in the portal.

:::

A manual for collections managers/administrators using the Collaborative Georeferencing (CoGe) tool can be found here: [https://epicc.berkeley.edu/wp-content/uploads/2015/11/UsingGeoLocateforCollaborativeGeoreferencing_2016.pdf](https://epicc.berkeley.edu/wp-content/uploads/2015/11/UsingGeoLocateforCollaborativeGeoreferencing_2016.pdf). This manual covers steps 1-3 in the above workflow, but does not cover how to add occurrences to CoGe from a Symbiota portal. Video tutorials can be found here: [https://www.geo-locate.org/community/default.html](https://www.geo-locate.org/community/default.html). 

Instructions for step 4 are provided below.

Example instructions for step 5 can be found here ([GEOLocate CoGe Training Course](https://www.capturingcaliforniasflowers.org/georeferencingcourse-coge.html)), and a written protocol can be found here ([GEOLocate CoGe Protocol](https://www.capturingcaliforniasflowers.org/uploads/1/6/3/7/16372936/georeferencingincoge.docx)). 

### Pushing Specimens from a Symbiota Portal to GEOLocate CoGe
#### (step 4 from above workflow)

1. Navigate to your Administration Control Panel (My Profile > Occurrence Editor > name of collection).
2. Click Processing Toolbox.
3. If CoGe has been enabled for your portal, a tab labeled GeoLocate CoGe will be visible. Click this tab. If CoGe is not enabled, contact your portal manager to request this feature.

![GeoLocate CoGe tab](/img/geolocatecoge.png)

5. Click Login to CoGe in the **CoGe Status** box on the resulting page and log in to CoGe using your CoGe user account information in the pop-up window/tab.
6. Return to your Symbiota portal page.

:::tip

If you have previously logged in to CoGe, click the Check Status button instead of logging in. If "Connected" does not show up in green after clicking this button, try logging out and then logging back in to CoGe. If this still does not work, check with your portal manager to ensure that your portal is set up to interact with CoGe.

:::

6. The CoGe communities that you manage will now be listed in the **Available Communities** box. If no communities are visible, [make sure that you have created a community on the CoGe website](https://epicc.berkeley.edu/wp-content/uploads/2015/11/UsingGeoLocateforCollaborativeGeoreferencing_2016.pdf).
7. At the top of the page, use the Processing Status and/or additional filters to search for the records you would like to push to CoGe (i.e., that you would like to be georeferenced in the CoGe client). Once you have entered the search parameters/filters, click out of this field, and you will see how many records were found in the **CoGe Status** box under **Match Count**.
8. In the **Available Communities** box, click the radio button next to the CoGe community to which you would like to assign the records.
9. Enter a brief name for the data set in the "Data source identifier (primary name):" box and a description, if desired.
10. If you would like the georeferences from CoGe to be automatically applied to their records in the Symbiota portal, click the "Push Data to GeoLocate CoGe" button. If you plan to use the download (Symbiota -> CSV), upload (CSV -> CoGe), download (CoGe -> CSV), upload (CSV -> Symbiota) workflow, click the "Download Records Locally" button.

:::tip

You can also use the "Download Records Locally" button to quickly check whether the specimens that you are pushing to CoGe are as expected.

:::

10. Return to the [CoGe site](https://coge.geo-locate.org/), navigate to your Dashboard, click the name of the community to which you just pushed records, and click the GO TO COMMUNITY button.
11. Click the name of the dataset that you just pushed to CoGe.

![CoGe Dashboard](/img/cogedashboard.png)

13. Click the Update Cache button.
14. Once the cache has been fully updated, they will be available via the [CoGe web client](https://www.geo-locate.org/web/WebComGeoref.aspx).

### Reviewing Georeferences Created in GEOLocate CoGe

1. To view georeferences that have been created in CoGe, navigate to your Administration Control Panel (My Profile > Occurrence Editor > name of collection).
2. Click Review/Verify Occurrence Edits.
3. In the Filter box at the top right, select External from the dropdown menu of the Editing Source field. Then click Submit Filter.
4. The edits that were applied in CoGe will now be visible in the reviewer table.

![Edits from Coge](/img/viewcogeedits.png)
