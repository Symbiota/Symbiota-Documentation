---
title: "Associations"
date: 2025-05-14
lastmod: 2025-05-14
authors: ["Katie Pearson"]
draft: false
sidebar_position: 20
keywords: ["linked resources", "extended specimen", "host", "relationship"]
---

:::info

Cette page définit les « associations » dans les portails Symbiota et décrit comment effectuer des recherches à leur sujet.

:::

:::warning

Les données d'association doivent exister pour pouvoir faire l'objet d'une recherche ! Comme les données d'association sont relativement récentes dans les portails Symbiota, la plupart d'entre eux n'en contiennent pas encore beaucoup. L'absence de données sur les associations ne doit pas être interprétée comme une absence d'associations biologiques réelles. Une grande partie des données de type association est encore stockée dans le champ « taxons associés » (*associated taxa*), qui n'est pas pris en compte par la fonction de recherche « Associations ».

:::

Dans les portails Symbiota, les **associations** sont définies comme des relations entre une fiche du portail et une ressource, une fiche d'occurrence (c.-à-d. un spécimen ou une observation) ou un taxon. La fiche est liée à l'autre ressource par un terme de relation (« Type d'association »), tel que *hasHost* (a pour hôte) ou *references* (fait référence à). Ces types d'association sont définis pour chaque portail et peuvent donc varier d'un portail Symbiota à l'autre. Idéalement, ces types d'association sont définis par une ontologie (c.-à-d. un vocabulaire relationnel) ou un autre vocabulaire contrôlé.

Certaines associations impliquant des ressources externes, toutes les associations ne sont pas nécessairement des relations entre deux taxons. Les associations peuvent lier des fiches à des publications, à des sites web externes ou à d'autres ressources autres que des occurrences.

Il est possible de rechercher des associations via le [formulaire de recherche publique](/User_Guide/searching_records) d'un portail, dans la section « Associations ».

![Recherche d'associations](/img/associationssearch.png)

Vous pouvez rechercher des types d'association spécifiques à l'aide de la liste déroulante « Type d'association », ou rechercher des associations entre des taxons précis grâce au champ de recherche « Taxon ».

:::tip

L'utilisation du champ « Taxon » dans la section de recherche « Associations » permet de trouver les fiches ayant une association avec ce taxon. Par exemple, si vous recherchez des fiches documentant des hôtes de *Phoradendron californicum* (un gui), vous effectuerez la recherche suivante : Type d'association = *hostOf*, Taxon = *Phoradendron californicum*. Vous laisserez vide le champ « Taxon » principal (situé sous la section « Taxonomie », en haut de la page de recherche).

:::

:::tip

Pour rechercher des fiches présentant *n'importe quelle* association documentée, vous pouvez sélectionner un type d'association dans la liste déroulante et laisser vide le champ « Taxon » de la section « Associations ».

:::
