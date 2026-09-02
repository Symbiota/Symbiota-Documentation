---
title: "(Admin) Ajout/Modification des caractères et états de la clé d'identification"
date: 2022-10-31
lastmod: 2025-07-15
draft: false
sidebar_position: 5
authors: ["Katie Pearson"]
keywords: ["checklist","keys","identification","character","state","ID"]
---

:::info

Cette page explique comment ajouter ou modifier les caractères et les états disponibles dans les clés d'identification. Pour modifier les états de caractères appliqués à un taxon donné, consultez la page [Modification des états de clés d'identification pour les taxons](edit).

:::

:::note

Un utilisateur doit disposer des droits d'**Administrateur des clés d'identification** pour modifier les valeurs des caractères et des états au sein d'un portail, car ces modifications affectent l'ensemble du portail et non une seule liste d'espèces.

:::

### Structure des clés d'identification

Les clés d'identification sont élaborées à partir d'une liste de **caractères** possédant chacun plusieurs **états**.

Les **caractères** sont des catégories de traits communs à tous les membres d'un taxon (par exemple, « longueur moyenne de l'aile » ou « phyllotaxie des feuilles »).

Un **état** correspond au trait spécifique partagé au sein du taxon (par exemple, « 3-15 mm » ou « opposées », pour chacun des caractères mentionnés ci-dessus). Actuellement, les états ne peuvent être que de nature catégorielle (c'est-à-dire qu'il n'est pas possible de saisir une valeur numérique).

![Exemple de caractère et d'états de caractère](/img/charactervsstate.jpg)

La configuration de clés d'identification dans un portail nécessite que l'administrateur importe ou ajoute des valeurs de caractères et d'états. Ensuite, un éditeur de clés d'identification peut attribuer certaines valeurs d'état à des taxons spécifiques (voir les instructions pour l'éditeur de clés d'identification [ici](edit)).

### Ajout/Modification de caractères

:::warning

Les modifications apportées aux caractères et aux états de caractères affectent toutes les clés d'identification et toutes les listes d'espèces du portail. Veuillez coordonner ces changements avec les autres administrateurs de clés d'identification, dans la mesure du possible.

:::

Accédez à la page de gestion des caractères via le plan du site (« domaine du portail »/sitemap.php) ou en allant directement à l'adresse de la page (« domaine du portail »/ident/admin/index.php).

Les caractères peuvent être regroupés, par exemple selon des critères anatomiques ou d'autres similitudes, comme le montre l'exemple de SEINet ci-dessous.

![Exemple de clés d'identification](/img/characters.jpg)

Cliquer sur le nom d'un groupe permet de réduire ou de développer la liste des caractères qu'il contient.

Pour ajouter un nouveau caractère, cliquez sur le signe « plus » vert situé dans le coin supérieur droit de la page. Vous serez invité à saisir des informations qui apparaîtront ultérieurement dans l'onglet **Détails** de l'éditeur de caractères (voir ci-dessous).

Pour modifier un caractère, cliquez sur son nom.

Dans le premier onglet, **Détails**, vous pouvez modifier le nom du caractère, changer son type (si cette option est disponible), modifier son groupe (tel qu'il apparaissait sur la page précédente), ajouter une URL vers des ressources aidant l'utilisateur à comprendre le caractère, associer le caractère au glossaire, ajouter des notes ou modifier l'ordre de tri du caractère (c'est-à-dire sa position par rapport aux autres caractères dans la clé d'identification).

Vous pouvez également choisir d'afficher ou de masquer le caractère en sélectionnant « Masqué » dans le menu déroulant « Difficulté ».

![Page Détails de l'éditeur de caractères](/img/editcharacter1.jpg)

Dans l'onglet **États du caractère**, vous pouvez ajouter ou modifier les états associés au caractère. Rappelez-vous que les états d'un caractère correspondent aux options parmi lesquelles l'utilisateur peut choisir lorsqu'il tente d'identifier un échantillon. Ce sont ces états que l'éditeur de clé d'identification utilisera pour attribuer un état à un taxon donné. Consultez les instructions ci-dessous pour savoir comment modifier les états d'un caractère.

![Page États du caractère de l'éditeur de caractères](/img/editcharacter2.jpg)

Dans l'onglet **Liens taxonomiques**, vous pouvez appliquer le caractère au nœud phylogénétique ou taxonomique le plus élevé auquel il se rapporte. Par exemple, si un caractère s'applique à toutes les plantes, vous l'attribuerez à l'ensemble du règne *Plantae*. Il est également possible d'exclure certaines branches taxonomiques. Par exemple, si un caractère concernait toutes les familles d'un ordre sauf une, vous pourriez définir la « Pertinence pour le taxon » sur « Pertinent » pour l'ordre, puis ajouter la famille exclue en réglant la « Pertinence pour le taxon » sur « Exclure ».

![Page Liens taxonomiques de l'éditeur de caractères](/img/editcharacter3.jpg)

Le dernier onglet, **Admin**, vous permet de supprimer le caractère. Tous les états associés au caractère doivent être supprimés avant que le caractère lui-même puisse être supprimé. ## Ajout/Modification d'états de caractère

Depuis la page de gestion des caractères, cliquez sur le nom du caractère associé à l'état que vous souhaitez modifier. Accédez à l'onglet **États de caractère**. Pour modifier un état de caractère existant, cliquez sur le nom de cet état. Dans la section **Détails de l'état de caractère**, vous pouvez modifier le nom de l'état, la description, le terme du glossaire associé, les notes ainsi que l'ordre de tri du caractère. Faites défiler la page jusqu'à la section **Illustration** pour ajouter une illustration de l'état de caractère. Faites défiler jusqu'à la section **Supprimer l'état de caractère** pour envisager la suppression de l'état. Tous les enregistrements multimédias, les langues et les descriptions associés à l'état de caractère doivent être dissociés avant que celui-ci puisse être supprimé.

Pour ajouter un nouvel état de caractère, cliquez sur le signe « plus » vert situé en haut à droite de la page (entouré ci-dessous).

![Page d'édition de l'état de caractère](/img/editcharacterstate.jpg)
