---
title: "(Éditeur) Modification des états clés d'identification pour les taxons"
date: 2022-10-31
lastmod: 2024-12-11
draft: false
sidebar_position: 10
authors: ["Katie Pearson"]
keywords: ["checklist","keys","identification","character","state","ID"]
---

:::info

Cette page explique comment modifier les états de caractères appliqués à des taxons donnés dans le cadre des clés d'identification.

:::

:::note

L'utilisateur doit disposer des droits d'accès **Éditeur de clés d'identification** pour modifier les valeurs des caractères et de leurs états au sein d'un portail, car ces modifications affectent l'ensemble du portail et non une simple liste d'espèces.

:::

### Structure des clés d'identification

Les clés d'identification sont élaborées à partir d'une liste de **caractères** possédant chacun plusieurs **états**.

Les **caractères** correspondent à des catégories de traits communs à tous les membres d'un taxon (par exemple, « longueur moyenne de l'aile » ou « phyllotaxie »).

Un **état** représente le trait spécifique observé au sein du taxon (par exemple, « 3-15 mm » ou « opposée », pour chacun des caractères cités précédemment). Actuellement, les états ne peuvent être que de nature qualitative ou catégorielle (c'est-à-dire qu'il n'est pas possible de saisir une valeur numérique).

![Exemple de caractère et d'états de caractère](/img/charactervsstate.jpg)

La configuration de clés d'identification dans un portail nécessite que l'administrateur importe ou ajoute des caractères et des valeurs d'état (voir les instructions pour les administrateurs de clés d'identification [ici](admin)). Ensuite, un éditeur de clés d'identification peut attribuer certaines valeurs d'état à certains taxons.

### Modification des états de caractère attribués aux taxons
Les états de caractère appliqués aux taxons peuvent être modifiés depuis l'éditeur de liste de taxons. Si vous souhaitez modifier les états de caractère pour des taxons mais ne disposez pas d'une liste spécifique pour le faire, vous pouvez [créer une liste temporaire](../Checklists/creating_checklist) à cette fin, puis la supprimer une fois l'opération terminée.

Assurez-vous d'être connecté, puis accédez à la liste contenant les taxons que vous souhaitez modifier. Cliquez sur la petite icône en forme de crayon accompagnée de la mention « Edit Character Matrix » (Modifier la matrice de caractères), située dans le coin supérieur droit de la page.

![Lien vers l'éditeur de matrice de caractères](/img/editcharactermatrix.jpg)

Cliquez sur le nom du caractère pour lequel vous souhaitez modifier les états par taxon. La page qui s'affiche présente la matrice des états de caractère. Le nom du caractère figure dans le coin supérieur gauche de la matrice, et les états de caractère possibles sont listés en colonnes sur la ligne supérieure.

![Éditeur de matrice de caractères](/img/charactermatrix.jpg)

Pour attribuer un état de caractère à un taxon, cochez la case située à l'intersection de la ligne du taxon et de la colonne de l'état de caractère correspondant. Les états de caractère attribués à un taxon parent (par exemple, une famille ou un genre) seront automatiquement appliqués à tous les taxons enfants de ce taxon. Vous pouvez toutefois décocher des taxons individuels si vous le souhaitez. Il est également possible de sélectionner plusieurs états de caractère pour un même taxon si ceux-ci s'appliquent tous deux à ce taxon.

Par ailleurs, pour modifier tous les états de caractère relatifs à un seul taxon (plutôt que tous les taxons liés à un seul caractère), cliquez sur l'icône en forme de crayon située à droite du nom du taxon.

![États de caractère pour un taxon unique](/img/pertaxoncharacters.jpg)

Ici, vous pouvez cocher les cases « Add » (Ajouter) pour appliquer cet état de caractère à un taxon, ou cocher les cases « Remove » (Supprimer) pour retirer cet état de caractère de ce taxon. Les états de caractère déjà appliqués à ce taxon sont... ...indiqués en gras. Cliquez sur l'un des boutons « Soumettre les modifications » pour appliquer au taxon les changements d'état des caractères.

Pour afficher la matrice des caractères associée au taxon parent du taxon que vous consultez actuellement, cliquez sur le lien « parent » situé à droite de n'importe quel caractère.
