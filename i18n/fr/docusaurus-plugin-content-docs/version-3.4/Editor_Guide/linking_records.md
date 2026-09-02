---
title: "Lier des notices/ressources"
date: 2021-12-08
lastmod: 2026-03-03
sidebar_position: 110
authors: ["Katie Pearson"]
editors: ["Lindsay Walker"]
keywords:
  [
    "genetic resources",
    "DNA sequences",
    "sequences",
    "checklist",
    "voucher",
    "duplicate",
    "associated occurrences",
  ]
---

import ReactPlayer from "react-player";

:::info

Cette page explique comment associer des occurrences, des listes de contrôle, des doublons ou des ressources génétiques à des fiches d'occurrence. Pour ajouter des ressources liées par lots, consultez [cette page](/Collection_Manager_Guide/Importing_Uploading). Notez que vous devez être administrateur de la collection pour utiliser l'outil de chargement par lots.

:::

Pour associer une occurrence à une ressource ou une fiche externe (ou interne), accédez à la page d'édition de l'occurrence concernée (voir [cette page](/Editor_Guide/Editing_Searching_Records) pour les instructions) et cliquez sur l'onglet **Ressources liées** (Linked Resources).

![Onglet Ressources liées](/img/linkedresourcestab2026.png)

## Association d'éléments (Ressources ou occurrences externes/internes)

Dans la section **Occurrences associées** de l'onglet Ressources liées, vous pouvez associer une occurrence à : (1) une ressource externe (autre qu'un spécimen ou une observation) ou un site web (« Lien vers une ressource externe autre qu'une occurrence » / *Non-Occurrence Resource Link*), (2) une occurrence interne (« Occurrence - Interne (ce portail) » / *Occurrence - Internal (this portal)*), (3) une occurrence située dans un autre portail ou une autre base de données (« Occurrence - Lien externe » / *Occurrence - External Link*), et/ou (4) une occurrence d'observation (sans spécimen témoin) d'un taxon spécifique (« Observation de taxon » / *Taxon Observation*).

### Association à une ressource externe (autre qu'une occurrence)

**Ressource autre qu'une occurrence :** une URL pointant vers une ressource externe fournissant des informations ou des données complémentaires relatives à l'occurrence, mais qui ne constitue pas elle-même une [occurrence](https://dwc.tdwg.org/terms/#occurrence). Exemples : notes de terrain, jeu de données compilé, etc.

1. Cliquez sur l'icône « plus » (+) dans la section **Occurrences associées** pour ajouter un nouveau lien.
2. Dans le champ **Type d'association** (Association Type), sélectionnez « Lien vers une ressource externe autre qu'une occurrence » (Non-Occurrence Resource Link) dans le menu déroulant. 3. Dans le champ **Relation**, sélectionnez le terme définissant la relation entre votre occurrence et le lien que vous y ajoutez. Le terme sélectionné considère l'occurrence comme le « sujet » et la ressource liée comme l'« objet ». Par exemple, si vous choisissez la relation « siblingOf », la relation induite est : « Mon occurrence est le frère ou la sœur de ce lien externe. »
4. (Facultatif) Dans le champ **Sous-type de relation**, sélectionnez le sous-type de relation entre votre occurrence et le lien que vous ajoutez.
5. Dans le champ **URL de la ressource**, saisissez l'URL ou le lien vers la ressource externe que vous souhaitez associer à votre occurrence.
6. (Facultatif) Dans le champ **Identifiant supplémentaire de l'objet**, saisissez tout identifiant unique associé au lien que vous ajoutez à votre occurrence.
7. Cliquez sur le bouton Créer l'association.

:::tip

**Comment créer des liens entre mes fiches de spécimens et la littérature scientifique ?**

Vous pouvez utiliser l'option « Non-occurrence Resource » (Ressource de type « non-occurrence ») pour créer des liens entre vos fiches de spécimens et des publications disponibles en ligne. Cela peut se faire via l'onglet « Linked Resources » (Ressources liées) ou par importation en masse de références à l'aide de l'outil [Extended Data Import Tool](/Collection_Manager_Guide/Importing_Uploading/linked_resources/). Cette dernière option inclut des [champs supplémentaires](/img/linkedresources_literatureimport.png) qui ne sont pas disponibles dans le formulaire de saisie des ressources liées. 

Si vous choisissez de créer directement un lien vers une publication via l'onglet « Linked Resources », vous pouvez établir cette association en définissant **Association Type** = « Non-occurrence Resource » et **Relationship** = « isReferencedBy », tout en indiquant une **Resource URL** stable (permalien ou DOI) pointant directement vers la ressource externe, comme illustré ci-dessous ([exemple](https://library.big-bee.net/portal/collections/individual/index.php?occid=4003313)). 
![Onglet Ressources liées](/img/linkedresources_literaturedirectentry2026.png)

:::

### Création d'un lien vers une fiche au sein du même portail

**Occurrence - Internal (this portal) :** un lien vers une occurrence (spécimen/observation) présente dans le même portail que l'occurrence à laquelle vous créez le lien ; lors de la création d'associations au sein d'un portail, celui-ci mettra automatiquement à jour l'occurrence correspondante avec la relation réciproque.

1. Cliquez sur l'icône « plus » dans la section « Associated Occurrences » (Occurrences associées) pour ajouter un nouveau lien.
2. Dans le champ **Association Type**, sélectionnez « Occurrence - Internal (this portal) » dans le menu déroulant.
3. Dans le champ **Relationship**, sélectionnez le terme définissant la relation entre votre occurrence et le lien que vous y ajoutez. Le terme choisi considère votre occurrence comme le « sujet » et la ressource liée comme l'« objet ». Par exemple, si vous sélectionnez la relation « siblingOf », la relation déduite est : « Mon occurrence est le frère/la sœur (sibling) de ce lien externe. »
4. (Facultatif) Dans le champ **Relationship Subtype**, sélectionnez le sous-type de relation entre votre occurrence et le lien que vous ajoutez. 5. (Facultatif) Dans le champ **Basis of Record** (Base de l'enregistrement), sélectionnez le fondement de la preuve établissant une relation entre votre occurrence et le lien que vous ajoutez.
6. (Facultatif) Dans le champ **Location on host** (Emplacement sur l'hôte), saisissez l'emplacement de l'occurrence sur l'occurrence hôte (par ex. « mid-gut » ou « intestin moyen »).
7. (Facultatif) Dans le champ **Notes**, saisissez toute remarque relative à la relation.
8. Dans le champ **Identifier** (Identifiant), saisissez le numéro de catalogue ou le numéro Symbiota (« occid ») de l'occurrence existant dans ce même portail que vous souhaitez lier à l'occurrence actuelle, puis sélectionnez « Catalog Numbers » ou « Occurrence PK (occid) » dans le menu déroulant **Search Target** (Cible de la recherche), selon l'information saisie.
9. Dans le menu déroulant **Search Collections** (Rechercher dans les collections), sélectionnez la collection dans laquelle vous souhaitez rechercher l'occurrence à lier, ou conservez l'option « All Collections » (Toutes les collections) pour effectuer une recherche dans l'ensemble des collections du portail. Cliquez sur le bouton **Search** (Rechercher).
10. Dans la zone **Occurrence Matches Available to Link** (Occurrences correspondantes disponibles pour la liaison), cliquez sur le bouton radio situé à gauche de l'occurrence à laquelle vous souhaitez lier votre occurrence actuelle. Si un nom scientifique est associé à cette occurrence, il remplira automatiquement le champ **Verbatim Scientific Name** (Nom scientifique tel qu'indiqué).
11. Cliquez sur le bouton **Create Association** (Créer l'association).

:::tip

Vous pouvez cliquer sur la partie soulignée des résultats de recherche d'occurrences pour voir l'occurrence avant de l'associer.

:::

![Exemple de création d'une nouvelle association interne](/img/createinternalassociation2026.png)

### Association à une fiche dans un autre portail ou une autre base de données

**Occurrence - Lien externe :** un lien vers une occurrence (spécimen/observation) disponible dans un autre portail de données ou une autre base de données (par ex. un autre portail Symbiota, le GBIF, Arctos, etc.).

1. Suivez les étapes 1 à 7 de la section « [Occurrence - Interne](/Editor_Guide/linking_records#linking-to-a-record-within-the-same-portal) », selon le cas, mais sélectionnez « Occurrence - Lien externe » dans le menu déroulant **Type d'association**.
2. Dans le champ **URL de la ressource**, saisissez l'URL ou le lien vers la ressource externe que vous souhaitez associer à votre occurrence. Par exemple, voici une URL correspondant à une fiche du portail Bryophyte Portal qui pourrait être saisie : [https://bryophyteportal.org/portal/collections/individual/index.php?occid=4595185](https://bryophyteportal.org/portal/collections/individual/index.php?occid=4595185).
3. (Facultatif) Dans le champ **Identifiant supplémentaire de l'objet**, saisissez tout identifiant unique propre à l'objet (occurrence) que vous associez à votre occurrence principale.
4. (Facultatif) Dans le champ **Nom scientifique verbatim**, saisissez le nom du taxon représenté par votre ressource externe que vous souhaitez associer à votre occurrence.
5. Cliquez sur le bouton « Créer l'association ».

:::tip

**Comment créer des liens entre mes fiches de spécimens et [iNaturalist](https://www.inaturalist.org/) ?**

Si votre collection contient un spécimen conservé qui correspond directement à une observation sur iNaturalist, vous pouvez utiliser l'option « Occurrence - Lien externe » pour créer un lien entre ces fiches. Cette opération peut être effectuée via l'onglet « Ressources liées » ou par importation en masse de références à l'aide de l'**Outil d'importation de données étendues** ([Extended Data Import Tool](/Collection_Manager_Guide/Importing_Uploading/linked_resources/)). (Remarque : si l'image iNaturalist ne représente pas précisément un spécimen conservé mais contient tout de même des informations pertinentes, nous suggérons d'utiliser l'option de lien vers une ressource autre qu'une occurrence (« Non-occurrence Resource Link Option »), décrite ci-dessus.)

Vous pouvez créer cette association en utilisant **Type d'association** = « Occurrence - External Link », **Relation** = « derivedFromSameIndividual » et **Base de l'enregistrement** = « HumanObservation », tout en incluant l'URL directe de l'enregistrement iNaturalist dans le champ **URL de la ressource**, comme illustré ci-dessous.
![Onglet Ressources liées](/img/linkedresources_iNaturalist2026.png)

:::

### Lier à une observation sans enregistrement associé (« Taxon Observation »)

**Taxon Observation (Observation de taxon) :** l'affirmation qu'un taxon est associé à l'occurrence que vous liez. Il peut s'agir, par exemple, du taxon hôte de l'occurrence, d'un parasite, d'un taxon partageant le même habitat, etc.

1. Suivez les étapes 1 à 7 décrites dans la section « [Occurrence - Interne](/Editor_Guide/linking_records#linking-to-a-record-within-the-same-portal) », selon le cas, mais sélectionnez « Taxon Observation » dans le menu déroulant **Association Type** (Type d'association).
2. Dans le champ **Verbatim Scientific Name** (Nom scientifique tel qu'indiqué), saisissez le nom du taxon que vous souhaitez lier à votre occurrence.
3. Cliquez sur le bouton **Create Association** (Créer l'association).

## Lier à une liste de référence (Checklist)

- Dans la zone **Checklist Voucher Linkages** (Liens vers des spécimens de référence pour les listes) de l'onglet **Linked Resources** (Ressources liées), sélectionnez dans le menu déroulant la liste de référence à laquelle vous souhaitez lier votre occurrence. Notez que seules les listes pour lesquelles vous disposez de droits d'éditeur ou d'administrateur s'afficheront.

:::tip

Pour lier en masse des spécimens de référence à une liste, consultez la page [Ajout de spécimens de référence à une liste](/User_Guide/Checklists/adding_vouchers).

:::

## Lier à un spécimen en double (Duplicate)

Il existe plusieurs façons de lier une occurrence à des spécimens en double. Vous pouvez :

- Dans l'onglet **Linked Resources** de l'éditeur d'occurrence, cliquer sur le bouton **Search for Records to Link** (Rechercher des enregistrements à lier) dans la zone **Specimen Duplicates** (Spécimens en double). Cela ouvrira une fenêtre de recherche vous permettant d'identifier et de lier des spécimens en double. Cet outil permet d'effectuer une recherche selon le nom du collecteur, le numéro du collecteur, la date, le numéro de catalogue ou l'identifiant d'occurrence (SymbiotaID).
- Dans l'onglet principal **Occurrence Data** (Données d'occurrence) de l'éditeur d'occurrence, cliquer sur le bouton **Duplicates** (Doublons). Le système recherchera alors dans le portail les occurrences présentant le même nom de famille du collecteur, le même numéro et la même date. Si un doublon identique potentiel est identifié, vous pouvez cocher la case **Link as Duplicate** (Lier comme doublon), puis cliquer sur **Transfer All Fields** (Transférer tous les champs) ou **Transfer to Empty Fields Only** (Transférer uniquement vers les champs vides) pour établir le lien. Cette opération transférera également les données de ce doublon vers votre enregistrement de spécimen. Les données nouvellement transférées seront surlignées en bleu. - Associez par lots les enregistrements à leurs doublons à l'aide de l'outil [Regroupement de doublons](/Collection_Manager_Guide/duplicate_clustering).

## Association avec des ressources génétiques et des séquences

Dans la section **Ressources génétiques** de l'onglet « Ressources associées », saisissez les informations concernant la séquence génétique liée à votre occurrence dans les champs prévus à cet effet. Veillez à indiquer l'URL de la séquence. Voici un exemple d'URL valide provenant de GenBank : [`https://www.ncbi.nlm.nih.gov/nuccore/BV165924.1`](https://www.ncbi.nlm.nih.gov/nuccore/BV165924.1). Outre l'ajout individuel de ces liens via l'onglet « Ressources associées », il est également possible d'associer par lots des données génétiques aux enregistrements de spécimens en faisant correspondre ces URL au champ _associatedSequences_ lors d'un [chargement massif de données](/Collection_Manager_Guide/Importing_Uploading).

![Ressources génétiques](/img/linkedresources_genetic.png)

<ReactPlayer
  playing={false}
  controls
  url="http://www.youtube.com/watch?v=H76eeKxECEs"
/>
