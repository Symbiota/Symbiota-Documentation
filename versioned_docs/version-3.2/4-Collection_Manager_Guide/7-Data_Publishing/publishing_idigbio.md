---
title: "Publishing Data to iDigBio"
Date: 2021-10-08
lastmod: 2024-05-08
authors: ["Ed Gilbert","Katie Pearson"]
editors: ["Katie Pearson"]
weight: 60
keywords: ["data publishing","idigbio"]
---

:::info

This page describes how to publish the data from your collection to the U.S. national aggregator [iDigBio](https://www.idigbio.org/).

:::

1. Contact iDigBio's Biodiversity Informatics Coordinator ([cchapman@floridamuseum.ufl.edu](mailto:cchapman@floridamuseum.ufl.edu)) requesting that your collection gets added to the iDigBio ingestion queue. Include a link to your collection profile page (e.g. [http://swbiodiversity.org/seinet/collections/misc/collprofiles.php?collid=1](http://swbiodiversity.org/seinet/collections/misc/collprofiles.php?collid=1)) so that they have the necessary information for your collection and access to your data.  For more information, see the [iDigBio Data Ingestion Guide](https://www.idigbio.org/wiki/index.php/Data_Ingestion_Guidance).
2. Log in to your Administrator Control Panel in your Symbiota portal (My Profile > Occurrence Management > name of your collection).
3. Click Edit Metadata and review the information and contacts associated with your collection. In addition to your institution/collection codes and contact information, make sure to review data usage license and GUID (see below). Contact your portal manager if you are unclear about any of the available fields.
  * Data Usage License: This field determines the copyright guidelines that users must follow when using your data. Many portals have predefined options that follow the Creative Commons licenses, though that can vary by portal instance. See the [Creative Commons website](https://creativecommons.org/) for more information about licenses.
  * GUID source: This designates the field that will serve as the persistent globally unique identifier (GUID) for specimen records published from the portal. (More information about the importance of GUIDs can be found [in this article](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5851565/). You will see the following options in your portal:
    1. **Occurrence ID**: This option is for collections that create their own GUID using another protocol or manage their data in an external system and map the incoming GUID to the occurrenceID field at time of import. If you manage your central data within an update-to-date Specify database, you should use this option because the import data should automatically contain a Specify-generated UUID. Darwin Core definition: [http://rs.tdwg.org/dwc/terms/index.htm#occurrenceID](http://rs.tdwg.org/dwc/terms/index.htm#occurrenceID).
    2. **Catalog Number**: You can use this option if your catalog number is configured as a globally unique identifier. See the Darwin Core occurrenceID definition above.
    3. **Symbiota-generated UUID**: If you are managing your data live within the Symbiota instance (e.g. the portal is your central database), this option is the easiest and most reliable method for assigning robust GUIDs to your specimen records. Even if your catalog number is configured as a unique identifier (e.g. institutionCode:collectionCode:catalogNumber format type), this is a more robust option when managing data within the portal. Do not select this option if you use the Symbiota portal to publish a snapshot of your data that is managed in another database system (e.g. Specify).
4. Return to your Administrator Control Panel and click “Darwin Core Archive Publishing”.
5. Click the Create Darwin Core Archive button to build a new archive. iDigBio will periodically monitor the RSS feed that is associated with the DwC-Archive library within the portal. You should regularly refresh this archive to ensure the data within iDigBio remains current. Contact your portal manager to request automatic updates of your archive on a regular schedule. 
