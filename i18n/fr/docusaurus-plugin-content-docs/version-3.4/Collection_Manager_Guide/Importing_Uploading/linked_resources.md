---
title: "Ressources / Associations associées"
date: 2023-10-30
lastmod: 2026-03-30
draft: false
sidebar_position: 15
authors: ["Katie Pearson"]
editors: ["Lindsay Walker"]
keywords:
  [
    "associated occurrences",
    "extended specimen",
    "linked resources",
    "batch upload",
    "relationships",
  ]
---

import ButtonLink from '@site/src/components/ButtonLink';
import ReactPlayer from "react-player";

:::info

Cette page décrit la procédure d'importation en masse d'occurrences associées ou d'autres ressources liées à vos enregistrements. Pour des informations générales sur les ressources liées, ou pour importer des ressources liées individuellement, veuillez consulter [cette page](/Editor_Guide/linking_records).

:::

Cet outil utilise les termes **sujet** (*subject*) et **objet** (*object*) pour désigner deux types d'occurrences distincts. L'enregistrement **sujet** correspond à l'occurrence à laquelle vous ajoutez des associations. L'enregistrement **objet** correspond à l'élément (qu'il s'agisse d'une autre occurrence ou d'une ressource différente) que vous ajoutez ou liez à l'enregistrement sujet.

### Importation de ressources liées / associations

1. Accédez à votre panneau de contrôle d'administration (*cliquez sur « Mon profil » [My Profile], puis sur le nom de la collection dans la section « Gestion des collections » [Collection Management]*).
2. Cliquez sur « Importer/Mettre à jour des enregistrements de spécimens » (*Import/Update Specimen Records*), puis sélectionnez « Importation de données étendues » (*Extended Data Import*).
3. Cliquez sur le bouton « Choisir un fichier » (*Choose File*) pour importer un fichier d'associations correctement formaté (consultez les sections ci-dessous pour connaître les exigences de formatage).
4. Sélectionnez « Associations » dans le menu déroulant « Type d'importation » (*Import Type*).
5. Sélectionnez le type d'association souhaité dans le menu déroulant suivant : [Lien vers une ressource hors occurrence](/Collection_Manager_Guide/Importing_Uploading/linked_resources#1-non-occurrence-resource-link-uploads), [Occurrence - Interne (ce portail)](/Collection_Manager_Guide/Importing_Uploading/linked_resources#2-occurrence---internal-this-portal-uploads), [Occurrence - Lien externe](/Collection_Manager_Guide/Importing_Uploading/linked_resources#3-occurrence---external-link-uploads) ou [Observation de taxon](/Collection_Manager_Guide/Importing_Uploading/linked_resources#4-taxon-observation-uploads). Un seul type d'association peut être traité par fichier d'importation.
6. Cliquez sur le bouton « Initialiser l'importation » (*Initialize Import*).
7. Sélectionnez le type de relation (*Relationship Type*) souhaité dans le menu déroulant.

:::note

Les valeurs disponibles pour le **type de relation** (*Relationship Type*) sont définies au niveau de chaque portail. Idéalement, elles correspondent à un vocabulaire contrôlé établi par la communauté, tel que les termes issus de la [Relation Ontology](http://purl.obolibrary.org/obo/ro).
::: Le terme que vous sélectionnez définit l'occurrence comme « sujet » et la ressource liée comme « objet ». Par exemple, si vous choisissez la relation « siblingOf » (frère/sœur de), la relation déduite est : « Mon occurrence est le frère ou la sœur de cette autre ressource/lien/occurrence. »

:::

8. (Facultatif) Sélectionnez le sous-type de relation souhaité dans le menu déroulant. Tout comme pour le type de relation, les options de cette liste sont définies par portail.
9. Associez les champs de votre fichier source (à gauche sur la page qui s'affiche) aux champs cibles correspondants (voir [Tableau 1. Champs pour le téléversement de ressources liées](/Collection_Manager_Guide/Importing_Uploading/linked_resources#table-1-linked-resources-upload-fields)). **Les champs disponibles dans le menu déroulant dépendent du type d'association que vous téléversez.**
10. Si vous souhaitez remplacer des associations précédemment téléversées qui présentent des valeurs identiques dans le champ « identifiant » (identifier), cochez la case intitulée « Mettre à jour les enregistrements ayant des identifiants correspondants ».
11. Cliquez sur le bouton « Importer les données » (Import Data).

#### Types d'associations

##### 1. Importations de « ressources liées à une occurrence »

**Ressource liée à une occurrence :** une URL pointant vers une ressource externe qui fournit des informations ou des données complémentaires relatives à l'occurrence, sans constituer elle-même une [occurrence](https://dwc.tdwg.org/terms/#occurrence). Il peut s'agir, par exemple, de notes de terrain, d'un jeu de données compilé, etc.

<ButtonLink
link="/documents/GeneralResourceUploadTemplate.xlsx"
label="Télécharger un modèle d'exemple"
download={true}
style={{marginBottom: '2vh'}}
/>

Les **champs obligatoires** pour ce type d'importation sont : (1) un identifiant pour l'occurrence « sujet » (celle à laquelle vous créez un lien) — il peut s'agir d'un numéro de catalogue, d'un autre numéro de catalogue ou d'un `occurrenceID` — et (2) une `resourceUrl`. La `resourceUrl` doit être un lien vers la ressource externe que vous souhaitez associer à vos enregistrements.

Les champs facultatifs ([définis ci-dessous](/Collection_Manager_Guide/Importing_Uploading/linked_resources#table-1-linked-resources-upload-fields)) incluent : `accordingTo`, `basisOfRecord`, `establishedDate`, `notes`, un identifiant pour l'occurrence « objet » (numéro de catalogue, `occurrenceID` ou `occid`) et `relationshipID`.

##### 2. Importations de type « Occurrence - Interne (au sein de ce portail) »

**Occurrence - Interne (au sein de ce portail) :** un lien vers une occurrence (spécimen/observation) qui existe déjà dans le même portail que l'occurrence à laquelle vous créez un lien. Lors de la création d'associations au sein d'un portail, celui-ci mettra automatiquement à jour l'occurrence correspondante en y ajoutant la relation réciproque.

<ButtonLink
link="/documents/OccurrenceInternalUploadTemplate.xlsx"
label="Télécharger un modèle d'exemple"
download={true}
style={{marginBottom: '2vh'}}
/>

Les **champs obligatoires** pour ce type d'importation sont : (1) un identifiant pour l'occurrence « sujet » (celle à laquelle vous créez un lien) — il peut s'agir d'un numéro de catalogue, d'un autre numéro de catalogue et/ou d'un `occurrenceID` — et (2) un identifiant pour l'occurrence « objet » (celle que vous liez à l'occurrence « sujet ») — il peut s'agir d'un numéro de catalogue, d'un `occurrenceID` ou d'un `occid` (numéro Symbiota). Cet identifiant sera utilisé pour établir le lien avec un enregistrement existant dans le portail. Les champs facultatifs ([définis ci-dessous](/Collection_Manager_Guide/Importing_Uploading/linked_resources#table-1-linked-resources-upload-fields)) incluent `accordingTo`, `basisOfRecord`, `establishedDate`, `notes` et `relationshipID`.

##### 3. Importations de type « Occurrence – Lien externe »

| ![Exemple de ressource générale](/img/linkedresources_relatedoccurrences2026.png)                                                    |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Les liens vers des occurrences et des ressources similaires gérées en dehors de votre portail Symbiota peuvent être importés en masse via l'option « Occurrence – Gérée en externe ». |

**Occurrence – Lien externe :** un lien vers une occurrence (spécimen/observation) disponible dans un autre portail basé sur Symbiota.

<ButtonLink
link="/documents/OccurrenceExternalUploadTemplate.xlsx"
label="Télécharger un modèle d’exemple"
download={true}
style={{marginBottom: '2vh'}}
/>

Les **champs obligatoires** pour ce type de téléversement sont : (1) un identifiant de spécimen ou d'observation pour l'occurrence à laquelle vous créez un lien (numéro de catalogue, autre numéro de catalogue ou `occurrenceID`), et (2) `resourceUrl`. Il est également fortement recommandé de fournir une valeur pour `verbatimSciname` (nom scientifique), afin que la relation puisse être retrouvée lors de recherches.

Les champs facultatifs ([définis ci-dessous](/Collection_Manager_Guide/Importing_Uploading/linked_resources#table-1-linked-resources-upload-fields)) incluent `accordingTo`, `basisOfRecord`, `establishedDate`, `notes`, `objectID`, `relationshipID`, `resourceUrl` et `verbatimSciname`.

##### 4. Téléversements de type « Observation de taxon » (Taxon Observation)

| ![Exemple de lien vers une observation de taxon](/img/linkedresources_assoctaxa2026.png)                              |
| :-------------------------------------------------------------------------------------------------------------------------------: |
| Les observations qui ne sont pas associées à des occurrences numérisées peuvent être importées en masse via l'option de téléversement « Observation de taxon » (Taxon Observation). |

**Observation de taxon (Taxon Observation) :** l'affirmation qu'un taxon est associé à l'occurrence vers laquelle vous créez un lien. Il peut s'agir, par exemple, du taxon hôte de l'occurrence, d'un parasite, d'un taxon partageant le même habitat, etc.

:::note

Les taxons associés ajoutés dans l'onglet « Ressources liées » (Linked Resource) — que ce soit individuellement ou par lot — seront intégrés au champ `associatedTaxa` lors du téléchargement des données (par exemple, sous forme d'archive Darwin Core). Dans le fichier téléchargé, toute information stockée dans le champ `associatedTaxa` sera exclue au profit des « Ressources liées » fournies. Par conséquent, si vous convertissez des taxons associés en « Ressources liées », veillez à convertir _tous_ les taxons associés !

:::

<ButtonLink
link="/documents/TaxonObservationUploadTemplate.xlsx"
label="Télécharger un modèle d’exemple"
download={true}
style={{marginBottom: '2vh'}}
/>

Les **champs obligatoires** pour ce type de téléversement sont : (1) un identifiant pour l’occurrence (sujet) à laquelle vous effectuez un lien (numéro de catalogue, autre numéro de catalogue ou `occurrenceID`) et (2) le nom scientifique (de l’objet associé que vous ajoutez).

Les champs facultatifs ([définis ci-dessous](/Collection_Manager_Guide/Importing_Uploading/linked_resources#table-1-linked-resources-upload-fields)) incluent `accordingTo`, `basisOfRecord`, `establishedDate`, `notes`, `objectID` et `relationshipID`.

### Tableau 1. Champs pour le téléversement de ressources liées

:::note

La colonne **Type de données** définit la nature des données (par exemple, texte ou numérique) pouvant être saisies dans ce champ, ainsi que le nombre maximal de caractères autorisé. Si le nombre de caractères dans votre fichier source dépasse ce maximum, le processus de téléversement échouera.

:::

| Nom du champ                                                                                       | Type de données (longueur en caractères) | Description                                                                                                                                                                                                                 |
| -------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identifiant du sujet : [**catalogNumber**](https://dwc.tdwg.org/terms/#dwc:catalogNumber)             | Texte (32)                        | L'identifiant principal, lisible par l'humain, de l'enregistrement « sujet » auquel vous créez un lien. |
| Identifiant du sujet : [**otherCatalogNumbers**](https://dwc.tdwg.org/terms/#dwc:otherCatalogNumbers) | Texte (45)                        | Un numéro de catalogue alternatif, enregistré en tant qu'« identifiant supplémentaire » (*Additional Identifier*) dans le portail pour l'enregistrement « sujet » auquel vous créez un lien. Consultez [cette page](/Editor_Guide/Editing_Searching_Records/catalog_numbers) pour plus de contexte. |
| Identifiant du sujet : [**occurrenceID**](https://dwc.tdwg.org/terms/#dwc:occurrenceID)               | Texte (255)                       | L'identifiant unique global (GUID) de l'enregistrement « sujet » auquel vous créez un lien. |
| [**accordingTo**](https://dwc.tdwg.org/terms/#dwc:relationshipAccordingTo)                         | Texte (45)                        | La source qui établit ou atteste la relation entre le sujet et l'objet. |
| [**basisOfRecord**](https://dwc.tdwg.org/terms/#dwc:basisOfRecord)                                 | Texte (45)                        | La nature de l'enregistrement, issue du vocabulaire contrôlé Darwin Core. Les valeurs les plus couramment utilisées sont _PreservedSpecimen_ (spécimen préservé), _FossilSpecimen_ (spécimen fossile) et _HumanObservation_ (observation humaine). |
| [**establishedDate**](https://dwc.tdwg.org/terms/#dwc:relationshipEstablishedDate)                 | Date/Heure                       | La date à laquelle la relation entre le sujet et l'objet a été établie ou attestée. |
| [**notes**](https://dwc.tdwg.org/terms/#dwc:relationshipRemarks)                                   | Texte (250)                       | Commentaires concernant la relation entre le sujet et l'objet. |
| [**objectID**](https://dwc.tdwg.org/terms/#dwc:relatedResourceID)                                  | Texte (250)                       | Identifiant d'une ressource associée (l'objet, par opposition au sujet de la relation). |
| Identifiant de l'objet : [**catalogNumber**](https://dwc.tdwg.org/terms/#dwc:catalogNumber)              | Texte (32)                        | Identifiant principal, lisible par l'humain, de la fiche de l'objet que vous liez au sujet. |
| identifiant de l'objet : occid                                                                     | Entier (10)                      | L'occid (numéro de référence interne dans Symbiota) correspondant à l'enregistrement de l'objet que vous liez au sujet. L'occid est différent de l'occurrenceID (voir ci-dessous). |
| identifiant de l'objet : [**occurrenceID**](https://dwc.tdwg.org/terms/#dwc:occurrenceID)          | Texte (255)                      | L'identifiant unique global (GUID) de l'enregistrement de l'objet que vous liez au sujet. |
| [**relationshipID**](https://dwc.tdwg.org/terms/#dwc:relationshipOfResourceID)                     | Texte (45)                       | Un identifiant pour le type de relation qui relie le sujet à son objet. |
| resourceUrl                                                                                        | Texte (250)                      | Une URL/un lien vers l'objet impliqué dans l'association/la relation. |
| verbatimSciname                                                                                    | Texte (250)                      | Le nom taxonomique de l'objet impliqué dans l'association/la relation. |

### Tutoriel enregistré (en anglais)

<ReactPlayer
  playing={false}
  controls
  url="https://www.youtube.com/watch?v=Hay3hpGeHNs"
/>
