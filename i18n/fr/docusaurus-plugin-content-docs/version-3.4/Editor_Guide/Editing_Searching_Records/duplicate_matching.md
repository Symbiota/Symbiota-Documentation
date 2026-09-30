---
title: "Correspondance des doublons"
date: 2022-11-30
lastmod: 2026-01-30
authors: ["Katie Pearson"]
sidebar_position: 50
keywords: ["duplicate", "copy", "transfer"]
---

:::info

Cette page explique comment utiliser l'outil de recherche de doublons dans l'éditeur d'occurrences pour accélérer la saisie des données.

:::

L'outil de recherche de doublons permet à l'utilisateur d'interroger l'ensemble de la base de données (c'est-à-dire toutes les collections du portail Symbiota) pour trouver des enregistrements partageant le même nom de collecteur, le même numéro de récolte et la même date, puis de les associer à l'enregistrement en cours de saisie ou de modification.

### Recherche de doublons

1. [Recherchez et ouvrez un enregistrement](/Editor_Guide/Editing_Searching_Records) que vous souhaitez modifier, ou [ajoutez un nouvel enregistrement](/Editor_Guide/Adding_Records/adding_full_records).
2. Saisissez le nom du collecteur/observateur dans le champ « Collector/Observer », le numéro de récolte unique du collecteur (le cas échéant) dans le champ « Number » et la date de récolte dans le champ « Date » (au format AAAA-MM-JJ).
3. Cliquez sur le bouton « Duplicates ».

:::tip

Vous pouvez activer ou désactiver la recherche automatique de doublons à l'aide de la case à cocher « Auto search ». Une recherche de doublons sera alors effectuée automatiquement après la saisie du nom du collecteur, du numéro et de la date.

:::

Trois résultats sont possibles lors d'une recherche de doublons avec cet outil.

##### Doublons EXACTS possibles

![Résultats de doublons EXACTS possibles](/img/exactdupe.png)

Ce résultat apparaît lorsqu'un enregistrement correspondant au nom de famille du collecteur, au numéro de récolte et à la date est trouvé dans une collection autre que celle sur laquelle vous travaillez actuellement. Il peut s'agir d'un véritable spécimen en double.

##### Doublons EXACTS possibles avec AVERTISSEMENT

![Résultats de doublons EXACTS possibles au sein de la collection](/img/exactdupeincol.png)

Ce résultat apparaît lorsqu'un enregistrement correspondant au nom de famille du collecteur, au numéro de récolte et à la date est trouvé au sein de la collection sur laquelle vous travaillez actuellement. Il peut s'agir d'un véritable spécimen en double (si vous en possédez dans votre collection) ou d'une saisie en double involontaire (c'est-à-dire une erreur).

##### ÉVÉNEMENTS de récolte correspondants possibles (doublons potentiels)

![Résultats d'ÉVÉNEMENTS de récolte correspondants possibles](/img/dupematchevent.png)

Ce résultat apparaît lorsqu'un enregistrement correspondant au nom de famille du collecteur et à la date a été trouvé, mais que le numéro de récolte exact n'a pas été trouvé. Dans ce cas, les résultats présentés incluront des numéros de collecteur légèrement supérieurs et légèrement inférieurs à celui que vous avez saisi. Ces enregistrements peuvent tout de même s'avérer utiles, car ils pourraient partager, par exemple, des données de localité avec l'enregistrement que vous êtes en train de saisir ou de modifier.

### Gestion des résultats de recherche de doublons

Vous disposerez de plusieurs options pour utiliser les résultats de la recherche de doublons. Celles-ci seront affichées au bas du résultat identifié comme doublon (voir l'exemple ci-dessous). Vous pouvez :

#### Transférer tous les champs

Transférer les données de tous les champs du spécimen ou de l'événement identifié comme doublon vers la page de saisie sur laquelle vous travaillez actuellement. Cela remplacera toutes les données que vous avez déjà saisies (par exemple, si vous avez saisi « Luis Gonzalez » dans le champ du nom du collecteur/observateur et que le doublon indiquait « Gonzalez, Luis » pour ce champ, « Gonzalez, Luis » écrasera votre saisie précédente). Cliquer sur cette option transférera les données et fermera la fenêtre de recherche de doublons.

#### Transférer uniquement vers les champs vides

Transférer les données de tous les champs du spécimen ou de l'événement identifié comme doublon vers la page de saisie sur laquelle vous travaillez actuellement, **_sauf si le champ contient déjà des données_**. Seuls les champs vides seront remplis. Vos saisies précédentes resteront inchangées. Cliquer sur cette option transférera les données et fermera la fenêtre de recherche de doublons.

#### Lier en tant que doublon

Cocher cette case puis cliquer sur l'une des options supplémentaires créera un lien de doublon entre l'enregistrement que vous modifiez et l'enregistrement identifié comme doublon. Pour plus d'informations sur les liens de doublons, consultez la documentation sur le [Regroupement de doublons (Duplicate Clustering)](/Collection_Manager_Guide/duplicate_clustering).

#### Aller à l'enregistrement

Cette option n'est disponible que si le doublon identifié appartient à la même collection que celle que vous modifiez actuellement. Cliquer sur cette option vous dirigera vers la page d'édition de l'enregistrement doublon afin que vous puissiez le consulter (par exemple, pour vérifier les données ou voir l'image). Une fois l'image consultée, si vous souhaitez transférer des données vers l'enregistrement sur lequel vous travaillez, vous devrez cliquer à nouveau sur le bouton « Doublons » de l'enregistrement que vous modifiez.

#### Fusionner les enregistrements

Cette option n'est disponible que si le doublon identifié appartient à la même collection que celle que vous modifiez actuellement. Si vous cliquez sur cette option, les deux enregistrements seront fusionnés. **L'enregistrement figurant dans la fenêtre contextuelle sera prioritaire sur les données de votre éditeur d'occurrence.** Par exemple, si l'enregistrement de la fenêtre contextuelle indique « USA » dans le champ « Pays » et que celui de l'éditeur d'occurrence indique « United States », l'enregistrement fusionné affichera « USA » dans ce champ. Les champs vides dans l'un des deux enregistrements seront complétés par les données provenant de l'enregistrement qui contient une information pour ce champ. Toutes les ressources multimédias (par ex. images) et les ressources liées seront incluses dans l'enregistrement fusionné. Toutes les déterminations uniques seront conservées, à l'exception de la « détermination actuelle » associée à l'enregistrement de l'éditeur d'occurrence, qui sera supprimée. Ainsi, vous disposerez d'une détermination actuelle (celle de l'enregistrement de la fenêtre contextuelle) ainsi que de toutes les déterminations antérieures associées à l'enregistrement. Il est donc recommandé de vérifier l'onglet « Déterminations » de l'enregistrement fusionné avant de poursuivre.

![Résultats possibles de doublons EXACTS au sein de la collection](/img/exactdupeincolfull.png)
