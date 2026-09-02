---
title: "Fractionnement de listes de contrôle"
date: 2023-01-04
lastmod: 2024-12-11
authors: ["Katie Pearson"]
draft: false
sidebar_position: 35
keywords:
  ["parent checklist", "child checklist", "parent", "child", "taxonomic list"]
---

:::info

Cette page explique comment diviser une liste de contrôle unique en plusieurs listes basées sur des groupes taxonomiques. Par exemple, vous pouvez créer une liste de contrôle principale regroupant tous les taxons d'une région donnée, puis générer des listes de contrôle « enfants » contenant différents groupes taxonomiques issus de cette liste (par exemple, une liste « Oiseaux du comté de Nevada » peut être dérivée de la liste parente « Vertébrés du comté de Nevada »).

:::

Pour diviser une liste de contrôle unique en plusieurs listes, ou simplement créer des listes enfants reproduisant les informations de la liste parente, utilisez l'outil « Batch Parse Species List » (Traitement par lots de listes d'espèces).

Depuis votre liste de contrôle parente (c'est-à-dire la liste que vous souhaitez diviser ou traiter), cliquez sur le bouton « Checklist Administration » (situé dans le coin supérieur droit, représenté par une icône de crayon et la lettre A), puis cliquez sur l'onglet « Related Checklists ». Faites défiler la page vers le bas pour accéder à l'outil « Batch Parse Species List ».

![Outil Batch Parse Species List](/img/batchparsespecieslist.png)

Dans la première case du champ **nœud taxonomique**, commencez à saisir le nom du nœud parent correspondant à tous les taxons que vous souhaitez inclure dans votre liste enfant, puis sélectionnez le nom correspondant dans la liste déroulante. _Vous pouvez ajouter plusieurs nœuds à la liste de contrôle en utilisant cet outil à plusieurs reprises et en les ajoutant à la même liste enfant à chaque fois._ Vous pouvez également saisir le numéro d'identifiant (ID) du taxon provenant du portail dans le second champ. Ce champ sera automatiquement rempli si vous sélectionnez un nom de taxon dans la liste déroulante.

Dans le champ **iste de contrôle cible** , sélectionnez le nom de la liste vers laquelle vous souhaitez ajouter ou transférer les taxons, ou choisissez « Create New Checklist » pour ajouter ces taxons à une toute nouvelle liste.

Sélectionnez **transférer les taxons** si vous souhaitez retirer les taxons de votre liste parente et les ajouter à la nouvelle liste sélectionnée dans le champ **liste de contrôle cible**. Sélectionnez **copier les taxons** si vous souhaitez copier les taxons de la liste parente sans les supprimer de celle-ci.

Sélectionnez une liste de contrôle dans le champ **Lien vers la liste parente** si vous souhaitez associer les taxons de la liste nouvellement définie à une liste parente _différente de celle que vous êtes en train de traiter_. Si vous souhaitez également ajouter la liste de contrôle nouvellement définie à un projet spécifique pour lequel vous disposez d'un accès administrateur, sélectionnez ce projet dans la liste déroulante **Ajouter au projet**.

Cochez la case **Copier les autorisations et les attributs généraux** si vous souhaitez transférer les autorisations des utilisateurs ainsi que d'autres attributs (tels que le caractère public ou privé) à la liste de contrôle nouvellement définie.

Cliquez sur le bouton **Analyser la liste de contrôle** pour finaliser l'opération de scission ou de copie.

Si vous souhaitez ajouter un groupe polyphylétique ou plusieurs groupes à une même liste de contrôle à partir d'une liste parente, vous pouvez exécuter cet outil d'analyse plusieurs fois sur la liste parente en sélectionnant, à chaque fois, un nœud taxonomique différent. Par exemple, à partir d'une liste de contrôle intitulée « Flore de la forêt nationale de Sequoia », vous pourriez créer une liste « Graminoïdes de la forêt nationale de Sequoia » en exécutant l'outil trois fois : une fois pour les Poacées (graminées), une fois pour les joncs (Juncacées) et une fois pour les carex (Cypéracées), le tout en ciblant la même (nouvelle) liste de contrôle enfant.
