---
title: "Deleting Records"
date: 2021-12-08
lastmod: 2025-01-31
draft: false
sidebar_position: 80
authors: ["Katie Pearson"]
editors: ["Lindsay Walker", "Katie Pearson"]
keywords: ["delete", "remove"]
---

:::info

This page describes how to delete records from your collection.

:::

:::note

Only the portal manager(s) or someone with backend access can delete more than one specimen record at a time. This is designed to protect data integrity, such as GUIDs and links to other tables in the database.

:::

Deleting a specimen record is only appropriate when that specimen no longer exists or the record was added erroneously (e.g., it was an exact duplicate of an existing record). You should not delete a record for the purpose of updating it or adding a new version of the record.

To delete a record:

1. Navigate to the specimen record that you would like to delete and open the Occurrence Editor form for that record. (See [this page](/Editor_Guide/Editing_Searching_Records) for help navigating to specific records.)
2. Open the Admin tab.
3. Select the “Evaluate record for deletion” button to determine whether the record can be safely deleted. If an media resource (e.g., image) is associated with the record, you will need to disassociate the resource from the specimen record before it can be deleted (see the [deleting/remapping images page](/Editor_Guide/Images_Media/deleting_transfering_images)). Likewise, a warning will appear if the specimen record is linked to a checklist, which must be resolved before the specimen record can be deleted. If there are no warnings at this point, click the "Delete Occurrence" button to remove the record from your dataset.

![Admin tab of the Occurrence Editor](/img/admintab_delete.png)

To batch delete records, contact your portal manager.
