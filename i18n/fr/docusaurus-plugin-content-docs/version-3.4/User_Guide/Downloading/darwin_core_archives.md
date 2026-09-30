---
title: "Archives Darwin Core"
date: 2025-01-30
lastmod: 2025-12-23
draft: false
weight: 30
authors: ["Katie Pearson"]
keywords: ["Download", "Darwin Core", "DwC-A", "Archive", "Extensions"]
---

:::info

Cette page décrit la manière dont les archives Darwin Core représentent les données provenant des portails Symbiota.

:::

Une [archive Darwin Core](https://ipt.gbif.org/manual/en/ipt/latest/dwca-guide) est un ensemble de données sur la biodiversité conforme à la norme internationale Darwin Core. Le schéma de données de Symbiota a été conçu pour s'aligner largement sur cette norme pour les opérations d'importation et d'exportation de données.

Une archive Darwin Core (DwC-A) téléchargée depuis un portail Symbiota se compose d'un fichier principal d'**occurrences** ([*occurrences*](https://rs.gbif.org/core/dwc_occurrence_2024-02-23.xml)) — contenant les données fondamentales sur la biodiversité relatives aux signalements d'un taxon à un endroit et à un moment donnés (une « occurrence ») — d'un fichier de description de structure (*meta.xml*), d'un fichier de métadonnées (*eml.xml*) décrivant le jeu de données, ainsi que de plusieurs fichiers d'« extension » contenant des informations supplémentaires sur les occurrences. La colonne « id » du fichier des occurrences constitue le lien central entre ce fichier et ses extensions.

![Schéma en étoile Darwin Core](/img/dwca.jpg)

Les extensions suivantes sont actuellement prises en charge lors des téléchargements depuis Symbiota :

* [**identifications**](https://rs.gbif.org/extension/identification_history_2024-02-19.xml) : contient des données relatives à une ou plusieurs identifications taxonomiques d'une occurrence. Ce fichier consigne l'historique de l'identification taxonomique ou de l'annotation du spécimen. Par exemple, si le fichier des occurrences contient un enregistrement ayant fait l'objet de trois identifications, le fichier *identifications* comportera trois lignes, une pour chaque identification taxonomique. Dans les portails Symbiota, chaque identification doit comporter un nom scientifique ainsi que des valeurs pour « dateIdentified » (date de l'identification) et « identifiedBy » (auteur de l'identification).

* [**multimedia**](https://rs.gbif.org/extension/ac/audiovisual_2024_11_07.xml) : contient des données sur les ressources multimédias (par ex. images, enregistrements sonores) associées à l'occurrence. Par exemple, si le fichier des occurrences contient un enregistrement associé à une image et à un fichier audio, l'extension _multimedia_ comportera deux lignes, une pour chaque ressource multimédia.

:::tip

**Un téléchargement DwC-A ne contient pas les fichiers d'image eux-mêmes** liés aux données d'occurrence. Le fichier multimédia se compose de _liens_ indiquant où ces images peuvent être visualisées ou téléchargées. Pour savoir comment télécharger des images, [consultez cet article](/User_Guide/Downloading/download_images).

:::

* [**measurementOrFact**](https://rs.gbif.org/extension/obis/extended_measurement_or_fact_2023-08-28.xml) : contient des données relatives aux mesures ou aux traits concernant l'occurrence. C'est dans ce fichier que sont stockées les données issues du [module Traits](/Editor_Guide/Traits/). Ce fichier comporte une ligne pour chaque valeur de mesure appliquée à une occurrence. Dans le cas de traits hiérarchiques, plusieurs mesures peuvent correspondre à un seul « trait ». Par exemple, si le trait « Présence de fleurs » est imbriqué sous « Stade reproductif », une même occurrence peut donner lieu à plusieurs lignes dans l'extension measurementOrFact : l'une correspondant à « Présence de fleurs » et l'autre à « Stade reproductif ». Les portails Symbiota qui exportent l'extension « Mesure ou fait détaillé » prennent en charge les identifiants uniques appliqués aux valeurs de traits, tels que des liens vers des ontologies ou des protocoles de notation pertinents.

* [**materialSample**](https://rs.gbif.org/extension/ggbn/materialsample.xml) : contient des données sur les [échantillons de matériel](/Editor_Guide/Editing_Searching_Records/material_samples/) liés aux occurrences. Comme pour toutes les extensions, il existe souvent une relation de type « un-à-plusieurs » entre les occurrences et les échantillons de matériel, une occurrence étant liée à plusieurs échantillons.

* [**identifiers**](https://rs.gbif.org/extension/gbif/1.0/identifier.xml) : contient toutes les valeurs d'identifiants alternatifs associés aux occurrences, telles qu'elles sont stockées dans le tableau « Nom de balise / Valeurs d'identifiant alternatif ​​» ([voir cet article](/Editor_Guide/Editing_Searching_Records/catalog_numbers)). Les autres numéros de catalogue, numéros d'acquisition ou toute autre information enregistrée dans les champs « Identifiant supplémentaire » sont exportés dans cette extension.