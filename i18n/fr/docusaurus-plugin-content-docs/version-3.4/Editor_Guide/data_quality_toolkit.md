---
title: "Boîte à outils pour la qualité des données"
date: 2024-03-20
lastmod: 2024-07-19
draft: false
authors: ["Katie Pearson"]
keywords: ["QA", "QC", "quality control", "error checking"]
sidebar_position: 50
---

import ReactPlayer from "react-player";

:::info

Cette page présente plusieurs erreurs courantes de qualité des données que vous pouvez repérer et corriger dans votre jeu de données grâce à des techniques de recherche créatives et/ou aux outils de qualité des données existants. Les problèmes de qualité des données sont regroupés par catégorie.

:::

Pour obtenir plus d'aide sur la qualité des données, consultez les ressources suivantes :

- [Data Cleaner's Cookbook de Bob Mesibov](https://www.datafix.com.au/cookbook/)
- [Indicateurs de qualité des données du GBIF](https://data-blog.gbif.org/post/issues-and-flags/)
- [Indicateurs de qualité des données d'iDigBio](https://github.com/iDigBio/idigbio-search-api/wiki/Data-Quality-Flags)

### Sommaire

- [Numéros de catalogue et autres identifiants](/Editor_Guide/data_quality_toolkit#catalog-numbers-and-other-identifiers)
- [Numéros de catalogue en double](/Editor_Guide/data_quality_toolkit#duplicate-catalog-numbers)
- [Dates](/Editor_Guide/data_quality_toolkit#dates)
- [Date future (non encore survenue)](/Editor_Guide/data_quality_toolkit#date-hasnt-happened-yet)
- [Date anormalement ancienne](/Editor_Guide/data_quality_toolkit#date-is-suspiciously-old)
- [Date d'identification antérieure à la date de collecte](/Editor_Guide/data_quality_toolkit#identified-date-earlier-than-collected-date)
- [Les valeurs d'année, de mois et de jour ne correspondent pas à la date](/Editor_Guide/data_quality_toolkit#year-month-and-day-values-do-not-match-date)
- [Géographie](/Editor_Guide/data_quality_toolkit#geography)
- [Coordonnées nulles (zéros)](/Editor_Guide/data_quality_toolkit#coordinates-are-zero)
- [Coordonnées situées hors de l'unité géographique nommée](/Editor_Guide/data_quality_toolkit#coordinates-do-not-fall-within-named-geographic-unit)
- [Métadonnées de géoréférencement sans géoréférencement associé](/Editor_Guide/data_quality_toolkit#georeference-metadata-with-no-associated-georeference)
- [Altitude invraisemblable](/Editor_Guide/data_quality_toolkit#elevation-is-unlikely)
- [Latitudes/Longitudes avec signe incorrect](/Editor_Guide/data_quality_toolkit#improperly-negated-latitudeslongitudes)
- [Coordonnées invalides](/Editor_Guide/data_quality_toolkit#invalid-coordinates)
- [Valeurs géographiques de niveau inférieur fournies sans niveau supérieur correspondant](/Editor_Guide/data_quality_toolkit#lower-geography-values-are-provided-but-no-higher-geography)
- [Incohérence entre les valeurs d'altitude minimale et maximale](/Editor_Guide/data_quality_toolkit#minimum-and-maximum-elevation-values-mismatched)
- [Incohérence entre le pays et le code pays](/Editor_Guide/data_quality_toolkit#mismatched-country-and-countrycode-values)
- [Incohérence des termes géographiques](/Editor_Guide/data_quality_toolkit#mismatched-geographic-terms)
- [Système géodésique de référence (datum) manquant](/Editor_Guide/data_quality_toolkit#missing-geodetic-datum)
- [Latitudes/Longitudes manquantes](/Editor_Guide/data_quality_toolkit#missing-latitudeslongitudes)
- [Noms d'unités géographiques mal orthographiés](/Editor_Guide/data_quality_toolkit#misspelled-geographic-unit-names)
- [Taxonomie](/Editor_Guide/data_quality_toolkit#taxonomy)
- [Noms taxonomiques mal orthographiés ou invalides](/Editor_Guide/data_quality_toolkit#misspelled-or-invalid-taxonomic-names)
- [Taxonomie de rang supérieur inconnue](/Editor_Guide/data_quality_toolkit#unknown-higher-taxonomy)
- [Autres problèmes](/Editor_Guide/data_quality_toolkit#other-issues)
- [Encodage des caractères incorrect](/Editor_Guide/data_quality_toolkit#incorrect-character-encodings)
- [Fin de ligne incorrecte](/Editor_Guide/data_quality_toolkit#incorrect-line-endings)
- [Nombre d'individus invalide](/Editor_Guide/data_quality_toolkit#invalid-individual-count)
- [BasisOfRecord non normalisé Valeurs](/Editor_Guide/data_quality_toolkit#non-standardized-basisofrecord-values)
- [Enregistrements](/Editor_Guide/data_quality_toolkit#recordings)

### Numéros de catalogue et autres identifiants

#### Numéros de catalogue en double

**Problème :** Le même numéro de catalogue est utilisé plusieurs fois dans votre jeu de données. (Ce problème peut être intentionnel ou non, selon les politiques de votre collection. Il est généralement préférable de ne pas dupliquer les numéros de catalogue lorsque cela est possible).

**Solution :** Utilisez l'outil de gestion des [numéros de catalogue en double](/Collection_Manager_Guide/Data_Cleaning/duplicate_catalog_numbers) pour afficher, modifier et/ou fusionner les doublons. Notez que seuls les utilisateurs disposant de droits d'administrateur peuvent utiliser cet outil.

### Dates

#### Date future (non encore survenue)

**Problème :** La date de collecte du spécimen (souvent indiquée dans le champ [eventDate](https://dwc.tdwg.org/terms/#dwc:eventDate)) est une date future.

**Solution :** Il existe deux façons de repérer les enregistrements présentant ce problème :

_Méthode 1 :_

1. Accédez au [formulaire de recherche d'enregistrements](/Editor_Guide/Editing_Searching_Records) de votre collection.
2. Dans le champ de tri (« Sort By »), sélectionnez « Date ». Ensuite, choisissez l'ordre décroissant (« descending ») dans la deuxième liste déroulante.

![Capture d'écran du tri par date décroissante](/img/SortByDateDescending.png)

3. Cliquez sur « Display Table » (Afficher le tableau). Une fois la page chargée, les dates les plus récentes apparaîtront en haut du tableau. Modifiez ces enregistrements en cliquant sur le lien dans la colonne « Symbiota ID » (tout à gauche).

:::tip

Cliquez sur l'icône (case et flèche) située à droite du numéro Symbiota ID pour ouvrir l'enregistrement dans une nouvelle fenêtre. Ainsi, vous n'aurez pas besoin de relancer votre recherche après avoir modifié chaque enregistrement.

:::

_Méthode 2 :_

1. Accédez à la page de recherche publique de votre portail. On y accède généralement depuis la page d'accueil en sélectionnant « Search » (Rechercher) ou « Search Collections » (Rechercher des collections) dans le menu d'en-tête.
2. Si vous arrivez sur une liste de collections, cochez la case « Select/Deselect all collections » (Sélectionner/Désélectionner toutes les collections) pour tout désélectionner, puis cochez la case correspondant à votre collection. Cliquez sur le bouton « Search » (Rechercher). Si vous n'êtes pas redirigé vers une liste de collections, passez à l'étape 3.
3. Dans la section « Critères de collecte » (ou « Événement de collecte »), saisissez la date du jour dans le premier champ « Date de collecte » (ou « Date de début de collecte ») et « 9999-12-31 » dans le second champ (ou « Date de fin de collecte »).
4. Si une section « Collections » apparaît sur la page de recherche, cochez la case « Sélectionner/Désélectionner toutes les collections » pour désélectionner toutes les collections, puis cochez la case correspondant à votre collection. Si la page de recherche ne comporte pas de section « Collections », c'est que vous avez normalement déjà sélectionné votre collection à l'étape 2.
5. Cliquez sur le bouton « Affichage en liste » (ou sur le bouton « Rechercher », s'il est présent).
6. Les résultats de la recherche afficheront tous les spécimens dont la date de collecte est postérieure à la date du jour. Vous pouvez consulter et modifier ces notices en cliquant sur le lien « Détails complets de la notice » situé sous le résumé du spécimen, puis en cliquant sur le lien « Éditeur d'occurrence » dans la fenêtre contextuelle qui s'ouvre.

![Capture d'écran du lien vers l'éditeur d'occurrence depuis l'affichage public](/img/OccurrenceEditorLinkFromPublicDisplay.png)

#### Date anormalement ancienne

**Problème :** La date de collecte du spécimen (souvent indiquée dans le champ [eventDate](https://dwc.tdwg.org/terms/#dwc:eventDate)) se situe en dehors de la plage de dates historiques attendue. Cette plage dépend de l'institution, mais il est peu probable que la plupart des collections contiennent des spécimens datant d'avant 1600.

**Solution :** Consultez les méthodes décrites dans la section [Date future (non encore atteinte)](/Editor_Guide/data_quality_toolkit#date-hasnt-happened-yet), mais apportez les modifications suivantes :

_Méthode 1 :_

À l'étape 2, sélectionnez « croissant » (ascending) dans la deuxième liste déroulante du champ de tri (Sort By). Vous souhaiterez probablement aussi exclure les enregistrements sans date en sélectionnant « Date » dans le champ personnalisé 1 (Custom Field 1) et « IS NOT NULL » (n'est pas vide) dans la deuxième liste déroulante. Cela supprimera de vos résultats de recherche les dates vides qui, autrement, apparaîtraient au début de votre liste triée par ordre croissant.

_Méthode 2 :_

À l'étape 3, saisissez « 0001-01-01 » dans le premier champ de date de collecte (ou champ de date de début de collecte) et la date la plus ancienne jugée possible pour votre collection (par ex. « 1700-01-01 ») dans le second champ (ou champ de date de fin de collecte).

#### Date d'identification antérieure à la date de collecte

**Problème :** La date d'identification du spécimen (champ dateIdentified) est antérieure à sa date de collecte (champ eventDate).

**Solution :** Ce problème ne peut pas être détecté à l'aide des outils du portail Symbiota. Pour repérer les enregistrements concernés, téléchargez vos données depuis la [page de recherche publique](/User_Guide/Downloading/download_data), sous forme de [fichier de sauvegarde](/Collection_Manager_Guide/Downloading/downloading_copy), ou via une [exportation depuis le formulaire de recherche d'enregistrements](/Collection_Manager_Guide/Downloading/downloading_subset). Vous pouvez ensuite utiliser un tableur pour comparer le champ `dateIdentified` au champ `eventDate` (voir les instructions pour Excel [ici](https://www.idigbio.org/wiki/index.php/Excel_Data_Quality_Toolkit#Identified_Date_Earlier_than_Collected_Date)).

#### Les valeurs d'année, de mois et de jour ne correspondent pas à la date

**Problème :** Les valeurs d'**année** ([year](https://dwc.tdwg.org/terms/#dwc:year)), de **mois** ([month](https://dwc.tdwg.org/terms/#dwc:month)) et de **jour** ([day](https://dwc.tdwg.org/terms/#dwc:day)) de l'événement ne correspondent pas à la **date de l'événement** ([eventDate](https://dwc.tdwg.org/terms/#dwc:eventDate)) fournie. Pour les spécimens conservés, la date de l'événement correspond souvent à la date de collecte.

**Solution :** Ce problème ne peut pas être détecté à l'aide des outils du portail Symbiota. Pour repérer les enregistrements concernés, téléchargez vos données depuis la [page de recherche publique](/User_Guide/Downloading/download_data), sous forme de [fichier de sauvegarde](/Collection_Manager_Guide/Downloading/downloading_copy), ou effectuez une [exportation depuis le formulaire de recherche d'enregistrements](/Collection_Manager_Guide/Downloading/downloading_subset). Vous pouvez ensuite utiliser un tableur pour comparer le champ `dateIdentified` au champ `eventDate` (voir les instructions pour Excel [ici](https://www.idigbio.org/wiki/index.php/Excel_Data_Quality_Toolkit#Year,_Month,_and_Day_Values_Do_Not_Match_Date)).

### Géographie

#### Les coordonnées sont égales à zéro

**Problème :** Les valeurs de latitude et/ou de longitude fournies sont égales à 0.

**Solution :**

1. Accédez au [formulaire de recherche d'enregistrements](/Editor_Guide/Editing_Searching_Records) de votre collection.
2. Dans le champ personnalisé 1 (Custom Field 1), sélectionnez « Decimal Latitude » (Latitude décimale) dans le premier menu déroulant, sélectionnez « EQUALS » (Égal à) dans le second menu déroulant, puis saisissez 0 dans le champ vide. 3. Modifiez individuellement les enregistrements erronés en cliquant sur le lien dans la colonne « Symbiota ID » (tout à gauche), ou modifiez toutes les entrées par lots à l'aide de l'outil de modification par lots ([Batch Editing Tool](/Collection_Manager_Guide/Editing_Occurrences/batch_editing)).
4. Répétez les étapes 2 et 3 pour le champ « Decimal Longitude » (Longitude décimale). Vous pouvez également rechercher les enregistrements affichant une valeur de 0 pour la latitude et la longitude en ajoutant un critère de recherche personnalisé supplémentaire. Pour ce faire, cliquez sur l'icône en forme de crayon à droite de « Custom Field 1 » (Champ personnalisé 1) et configurez les paramètres de « Custom Field 2 » (Champ personnalisé 2) en conséquence.

#### Les coordonnées ne correspondent pas à l'unité géographique indiquée

**Problème :** Les coordonnées fournies ne se situent pas dans les limites géographiques du pays, de l'État et/ou du comté indiqués.

**Solution :** Ce problème ne peut pas être identifié actuellement à l'aide des outils du portail Symbiota. Nous recommandons d'utiliser l'[API de géocodage inverse du GBIF](https://github.com/gbif/geocode) pour vérifier la cohérence entre les coordonnées et le pays, ou simplement de [publier vos données sur le GBIF](/Collection_Manager_Guide/Data_Publishing/publishing_gbif) et de consulter les indicateurs de qualité des données de votre jeu de données.

#### Métadonnées de géoréférencement sans géoréférencement associé

**Problème :** Des champs de métadonnées relatifs aux coordonnées — tels que [coordinateUncertaintyInMeters](https://dwc.tdwg.org/terms/#dwc:coordinateUncertaintyInMeters), [georeferenceProtocol](https://dwc.tdwg.org/terms/#dwc:georeferenceProtocol), [georeferenceSources](https://dwc.tdwg.org/terms/#dwc:georeferenceSources), [georeferencedBy](https://dwc.tdwg.org/terms/#dwc:georeferencedBy), [georeferenceRemarks](https://dwc.tdwg.org/terms/#dwc:georeferenceRemarks) et [geodeticDatum](https://dwc.tdwg.org/terms/#dwc:geodeticDatum) — sont renseignés, mais aucune coordonnée n'est présente. Cette situation est parfois intentionnelle, notamment lorsque les champs *georeferencedBy* et *georeferenceRemarks* servent à indiquer qu'une notice n'a pas été géoréférencée volontairement. Toutefois, il est rare que les autres champs de métadonnées puissent être utilisés sans coordonnées associées (c.-à-d. [decimalLatitude](https://dwc.tdwg.org/terms/#dwc:decimalLatitude), [decimalLongitude](https://dwc.tdwg.org/terms/#dwc:decimalLongitude) ou [verbatimCoordinates](https://dwc.tdwg.org/terms/#dwc:verbatimCoordinates)).

**Problème :**

1. Accédez au [formulaire de recherche de notices](/Editor_Guide/Editing_Searching_Records) pour votre collection. 2. Dans le champ personnalisé 1, sélectionnez « Decimal Latitude » (Latitude décimale) dans le premier menu déroulant et « IS NULL » (Est nul) dans le second.
3. Cliquez sur l'icône en forme de crayon à droite du champ personnalisé 1 pour ajouter un autre champ personnalisé.
4. Dans le champ personnalisé 2, sélectionnez le champ de métadonnées de géoréférencement que vous souhaitez comparer (voir la liste des suggestions ci-dessus) et sélectionnez « IS NOT NULL » (N'est pas nul) dans le second menu déroulant.
5. Cliquez sur « Display Table » (Afficher le tableau). Modifiez les enregistrements erronés en cliquant sur le lien dans la colonne « Symbiota ID » (tout à gauche).

:::tip

Cliquez sur l'icône représentant une case et une flèche à droite du numéro « Symbiota ID » pour ouvrir l'enregistrement dans une nouvelle fenêtre. Ainsi, vous n'aurez pas besoin de relancer votre recherche après avoir modifié chaque enregistrement.

:::

#### Altitude improbable

**Problème :** Les valeurs d'altitude sont soit trop élevées (> 17 000 m), soit trop basses (-11 000 m) pour être possibles sur Terre.

**Solution :**

1. Accédez au [formulaire de recherche d'enregistrements](/Editor_Guide/Editing_Searching_Records) pour votre collection.
2. Effectuez l'une des actions suivantes :
- _Altitude minimale_ : Dans le champ personnalisé 1, sélectionnez « Elevation Minimum » (Altitude minimale) dans le premier menu déroulant, sélectionnez « LESS THAN » (Inférieur à) dans le second menu déroulant, et saisissez -11000 dans le champ vide. 
- _Altitude maximale_ : Dans le champ personnalisé 1, sélectionnez « Elevation Maximum » (Altitude maximale) dans le premier menu déroulant, sélectionnez « GREATER THAN » (Supérieur à) dans le second menu déroulant, et saisissez 17000 dans le champ vide.
3. Cliquez sur « Display Table » (Afficher le tableau). Modifiez les enregistrements erronés en cliquant sur le lien dans la colonne « Symbiota ID » (tout à gauche).

#### Latitudes/Longitudes avec un signe incorrect

**Problème :** Le signe de la latitude ([decimalLatitude](https://dwc.tdwg.org/terms/#dwc:decimalLatitude)) ou de la longitude ([decimalLongitude](https://dwc.tdwg.org/terms/#dwc:decimalLongitude)) ne correspond pas au signe ou à l'hémisphère du pays indiqué. Par exemple, toutes les longitudes aux États-Unis devraient être négatives.

**Solution :** Ce problème ne peut pas être identifié actuellement à l'aide des outils du portail Symbiota. Nous recommandons d'utiliser l'API de géocodage inverse du GBIF ([GBIF Reverse Geocoding API](https://github.com/gbif/geocode)) pour vérifier la cohérence entre les coordonnées et le pays, ou simplement de [publier vos données sur le GBIF](/Collection_Manager_Guide/Data_Publishing/publishing_gbif) et de consulter les indicateurs de qualité des données de votre jeu de données.

#### Coordonnées invalides

**Problème :** Les coordonnées sortent des plages ou des formats acceptés ; par exemple, `decimalLatitude` et `decimalLongitude` dépassent respectivement les intervalles [-90, 90] et [-180, 180]. Le champ `verbatimCoordinates` doit contenir des valeurs valides exprimées en degrés décimaux, en degrés et minutes décimales, ou en degrés, minutes et secondes.

**Solution :** Certains types de coordonnées invalides peuvent être identifiés à l'aide du formulaire de recherche d'enregistrements.

1. Accédez au [formulaire de recherche d'enregistrements](/Editor_Guide/Editing_Searching_Records) pour votre collection.
2. Effectuez l'une des actions suivantes :
- Dans le champ personnalisé 1 (« Custom Field 1 »), sélectionnez « Decimal Latitude » dans le premier menu déroulant, « LESS THAN » (inférieur à) dans le second, et saisissez -90 dans le champ vide. 
- Dans le champ personnalisé 1, sélectionnez « Decimal Latitude » dans le premier menu déroulant, « GREATER THAN » (supérieur à) dans le second, et saisissez 90 dans le champ vide. 
- Dans le champ personnalisé 1, sélectionnez « Decimal Longitude » dans le premier menu déroulant, « LESS THAN » (inférieur à) dans le second, et saisissez -180 dans le champ vide. 
- Dans le champ personnalisé 1, sélectionnez « Decimal Longitude » dans le premier menu déroulant, « GREATER THAN » (supérieur à) dans le second, et saisissez 180 dans le champ vide.
3. Cliquez sur « Display Table » (Afficher le tableau). Modifiez les enregistrements erronés en cliquant sur le lien dans la colonne « Symbiota ID » (tout à gauche).

#### Valeurs géographiques de niveau inférieur fournies, mais absence de niveau supérieur

**Problème :** Des valeurs géographiques de niveau inférieur (par ex. comté, État/province) sont présentes, mais aucune valeur de niveau supérieur (par ex. pays) n'est fournie.

**Solution :** Ce problème peut être rapidement identifié et corrigé à l'aide des [outils de nettoyage géographique](/Collection_Manager_Guide/Data_Cleaning/geographic_cleaning). Notez que vous devez disposer des droits d'administrateur pour utiliser ces outils.

#### Incohérence entre les valeurs d'altitude minimale et maximale

**Problème :** La valeur de l'altitude minimale ([minimumElevationInMeters](https://dwc.tdwg.org/terms/#dwc:minimumElevationInMeters)) est supérieure à celle de l'altitude maximale ([maximumElevationInMeters](https://dwc.tdwg.org/terms/#dwc:maximumElevationInMeters)). **Solution :** Ce problème ne peut pas être identifié à l'aide des outils du portail Symbiota. Pour localiser les enregistrements présentant ce problème, téléchargez vos données depuis la [page de recherche publique](/User_Guide/Downloading/download_data), sous forme de [fichier de sauvegarde](/Collection_Manager_Guide/Downloading/downloading_copy), ou effectuez une [exportation depuis le formulaire de recherche d'enregistrements](/Collection_Manager_Guide/Downloading/downloading_subset). Vous pouvez ensuite utiliser un tableur pour comparer les champs `minimumElevationInMeters` et `maximumElevationInMeters`.

#### Incohérence entre les valeurs de pays (country) et de code pays (countryCode)

**Problème :** Les valeurs fournies pour le pays (*country*) et le code pays (*countryCode*) ne correspondent pas.

**Solution :** Ce problème ne peut pas être identifié à l'aide des outils du portail Symbiota. Pour localiser les enregistrements présentant ce problème, téléchargez vos données depuis la [page de recherche publique](/User_Guide/Downloading/download_data), sous forme de [fichier de sauvegarde](/Collection_Manager_Guide/Downloading/downloading_copy), ou effectuez une [exportation depuis le formulaire de recherche d'enregistrements](/Collection_Manager_Guide/Downloading/downloading_subset). Vous pouvez ensuite utiliser un tableur pour comparer les combinaisons uniques de pays et de code pays afin de repérer les incohérences (voir les instructions pour Excel [ici](https://www.idigbio.org/wiki/index.php/Excel_Data_Quality_Toolkit#Mismatched_Country_and_CountryCode_Values)).

#### Système géodésique de référence (Datum) manquant

**Problème :** Le système géodésique de référence (datum) est un élément clé d'un spécimen correctement géoréférencé, mais cette information est souvent laissée en blanc. Bien que l'on suppose généralement qu'il s'agit du système « WGS84 », cette information doit être ajoutée et explicitement indiquée.

**Solution :**

1. Accédez au [formulaire de recherche d'enregistrements](/Editor_Guide/Editing_Searching_Records) de votre collection.
2. Dans le champ personnalisé 1, sélectionnez « Geodetic Datum » (Système géodésique) dans la première liste déroulante et « IS NULL » (est vide) dans la seconde.
3. Cliquez sur l'icône en forme de crayon à droite du champ personnalisé 1 pour ajouter un autre champ personnalisé.
4. Dans le champ personnalisé 2, sélectionnez « Decimal Latitude » (Latitude décimale) dans la première liste déroulante et « IS NOT NULL » (n'est pas vide) dans la seconde.
5. Modifiez individuellement les enregistrements erronés en cliquant sur le lien dans la colonne « Symbiota ID » (tout à gauche), ou modifiez toutes les entrées par lots à l'aide de l'**outil de modification par lots** ([Batch Editing Tool](/Collection_Manager_Guide/Editing_Occurrences/batch_editing)).

#### Incohérence des termes géographiques

**Problème :** Un enregistrement contient des termes géographiques de niveau inférieur (par ex. : État/Province, comté) qui n'existent pas au sein du ou des termes géographiques de niveau supérieur fournis. Par exemple : pays = Canada et État/Province = Sussex. Il n'existe pas de province nommée Sussex au Canada.

**Solution :** Ce problème peut être rapidement identifié et corrigé à l'aide des **outils de nettoyage géographique** ([geography cleaning tools](/Collection_Manager_Guide/Data_Cleaning/geographic_cleaning)). Notez que vous devez disposer des droits d'administrateur pour utiliser ces outils.

#### Latitude ou longitude manquante

**Problème :** Un enregistrement contient une valeur de latitude mais pas de valeur de longitude, ou inversement.

**Solution :**

1. Accédez au [formulaire de recherche d'enregistrements](/Editor_Guide/Editing_Searching_Records) de votre collection.
2. Dans le champ personnalisé 1, sélectionnez « Decimal Latitude » (Latitude décimale) ou « Decimal Longitude » (Longitude décimale) dans la première liste déroulante et « IS NOT NULL » (n'est pas vide) dans la seconde.
3. Cliquez sur l'icône en forme de crayon à droite du champ personnalisé 1 pour ajouter un autre champ personnalisé. 4. Dans le champ personnalisé 2, sélectionnez « Decimal Longitude » (ou « Decimal Latitude », selon celui qui diffère de ce que vous avez saisi dans le champ personnalisé 1) dans la première liste déroulante, et « IS NULL » dans la seconde.
5. Modifiez les enregistrements erronés en cliquant sur le lien dans la colonne « Symbiota ID » (tout à gauche).

#### Noms d'unités géographiques mal orthographiés

**Problème :** Les noms d'unités géographiques (par ex. [pays](https://dwc.tdwg.org/terms/#dwc:country), [État/province](https://dwc.tdwg.org/terms/#dwc:stateProvince), [comté](https://dwc.tdwg.org/terms/#dwc:county)) sont mal orthographiés, ce qui empêche une correspondance correcte avec les listes géographiques existantes.

**Solution :** Ce problème peut être rapidement identifié et corrigé à l'aide des [outils de nettoyage géographique](/Collection_Manager_Guide/Data_Cleaning/geographic_cleaning). Notez que vous devez disposer de droits d'administrateur pour utiliser ces outils.

### Taxonomie

#### Noms taxonomiques mal orthographiés ou invalides

**Problème :** Les noms scientifiques sont mal orthographiés, ce qui empêche une correspondance correcte avec les bases de données taxonomiques.

**Solution :** Ce problème peut être rapidement identifié et corrigé à l'aide des [outils de nettoyage taxonomique](/Collection_Manager_Guide/Data_Cleaning/taxonomic_cleaning). Notez que vous devez disposer de droits d'administrateur pour utiliser ces outils.

#### Hiérarchie taxonomique supérieure inconnue

**Problème :** Il peut manquer des informations sur la hiérarchie taxonomique supérieure pour certaines espèces.

**Solution :** Ce problème ne survient dans les portails Symbiota que si vous avez des noms scientifiques qui ne figurent pas dans le [thésaurus taxonomique](/User_Guide/taxonomic_thesaurus). Vous pouvez utiliser les [outils de nettoyage taxonomique](/Collection_Manager_Guide/Data_Cleaning/taxonomic_cleaning) pour importer automatiquement des noms depuis le *Catalog of Life* ou d'autres ressources dans le thésaurus (cette possibilité dépend du portail), ou contacter l'administrateur de votre portail pour ajouter les noms manquants au thésaurus.

### Autres problèmes

#### Encodages de caractères incorrects

**Problème :** Des incohérences de données surviennent lorsque des encodages de caractères incorrects sont utilisés lors de la manipulation ou du transfert des données. Ce problème se produit lorsque des jeux de données sont ouverts, téléchargés ou importés entre différentes plateformes logicielles, entraînant des erreurs d'interprétation et des textes illisibles. Par exemple, des caractères spéciaux tels que des accents ou des symboles peuvent être mal affichés, ce qui nuit à la lisibilité et à l'exactitude des données (par ex. Carl LinnÃ©).

**Solution :** Il n'existe pas d'outils de recherche transversale permettant de repérer les symboles mal affichés dans tous les champs, mais vous pouvez effectuer des recherches dans certains champs spécifiques. Par exemple :

1. Accédez au [formulaire de recherche d'enregistrements](/Editor_Guide/Editing_Searching_Records) de votre collection.
2. Dans le champ personnalisé 1 (« Custom Field 1 »), sélectionnez le champ à rechercher dans la première liste déroulante, choisissez « CONTAINS » (contient) dans la seconde, puis saisissez le caractère mal converti (par ex. : Ã©) dans le champ de saisie. [Cette page](https://www.i18nqa.com/debug/utf8-debug.html) propose un tableau utile répertoriant les problèmes courants d'encodage des caractères. Vous pouvez effectuer des recherches en utilisant les valeurs de la colonne « Actual » (réelles) et les remplacer par celles de la colonne « Expected » (attendues). Par exemple, si vous pensez que le caractère « ë » est présent dans un champ donné, vous devrez effectuer une recherche sur « Ã« ».
3. Modifiez les enregistrements erronés un par un en cliquant sur le lien dans la colonne « Symbiota ID » (tout à gauche), ou modifiez toutes les entrées par lot à l'aide de l'[outil de modification par lot](/Collection_Manager_Guide/Editing_Occurrences/batch_editing).

#### Fins de ligne incorrectes

**Problème :** Lors du transfert de fichiers texte entre des systèmes Unix/Linux et DOS/Windows, les fins de ligne peuvent devenir incohérentes. Les systèmes Unix/Linux utilisent généralement des caractères de saut de ligne (LF), tandis que les systèmes DOS/Windows utilisent des combinaisons de retour chariot (CR) et de saut de ligne (LF). Cette incompatibilité peut entraîner l'apparition de caractères supplémentaires dans les données, provoquant des anomalies visuelles et des erreurs de traitement.

**Solution :** Il est peu probable que cela pose problème pour les données déjà importées dans un portail Symbiota. Il est toutefois possible que des symboles erronés (¶) subsistent. Dans ce cas :

1. Accédez au [formulaire de recherche d'enregistrements](/Editor_Guide/Editing_Searching_Records/) de votre collection.
2. Dans le champ personnalisé 1 (Custom Field 1), sélectionnez un champ de recherche dans la première liste déroulante (par exemple, *Locality*), choisissez « CONTAINS » (contient) dans la seconde liste, et saisissez ¶ dans le champ vide.
3. Modifiez individuellement les enregistrements erronés en cliquant sur le lien dans la colonne « Symbiota ID » (tout à gauche), ou modifiez par lots toutes les entrées contenant ce symbole à l'aide de l'**outil de modification par lots** ([Batch Editing Tool](/Collection_Manager_Guide/Editing_Occurrences/batch_editing)).

#### Nombre d'individus (*individualCount*) invalide

**Problème :** La valeur du champ [individualCount](https://dwc.tdwg.org/terms/#dwc:individualCount) peut ne pas correspondre à un nombre entier positif cohérent.

**Solution :**

1. Accédez au [formulaire de recherche d'enregistrements](/Editor_Guide/Editing_Searching_Records) de votre collection.
2. Dans le champ personnalisé 1 (Custom Field 1), sélectionnez « Individual Count » dans la première liste déroulante, choisissez « LESS THAN » (inférieur à) dans la seconde liste, et saisissez 1 dans le champ vide.
3. Modifiez les enregistrements erronés en cliquant sur le lien dans la colonne « Symbiota ID » (tout à gauche).

Une autre méthode consiste simplement à parcourir le tableau pour les entrées où « Individual Count » n'est pas nul (IS NOT NULL) et à repérer visuellement les incohérences.

#### Valeurs *BasisOfRecord* non normalisées

**Problème :** Les valeurs du champ *BasisOfRecord* ne correspondent pas au vocabulaire contrôlé recommandé. Bien que l'utilisation de termes normalisés dans ce champ ne soit pas strictement obligatoire, elle améliore la découvrabilité et l'interopérabilité de vos données. Les valeurs actuellement acceptées pour le champ *BasisOfRecord* (nature de l'enregistrement) incluent : *MaterialEntity*, *PreservedSpecimen*, *FossilSpecimen*, *LivingSpecimen*, *MaterialSample*, *Event*, *HumanObservation*, *MachineObservation*, *Taxon*, *Occurrence*, *MaterialCitation*.

Notez que l'utilisation de variantes dans la ponctuation ou les majuscules pour ces valeurs (par exemple, « Preserved Specimen » au lieu de « PreservedSpecimen ») est déconseillée.

**Solution :**

1. Accédez au formulaire de recherche d'enregistrements ([Record Search Form](/Editor_Guide/Editing_Searching_Records)) pour votre collection.
2. Dans le champ personnalisé 1 (*Custom Field 1*), sélectionnez « Basis of Record » dans la première liste déroulante, sélectionnez « NOT EQUALS » (différent de) dans la seconde, et saisissez « PreservedSpecimen » dans le champ vide.
3. Cliquez sur l'icône en forme de crayon située à droite du champ personnalisé 1 pour ajouter un autre champ personnalisé.
4. Dans le champ personnalisé 2 (*Custom Field 2*), sélectionnez « Basis of Record » dans la première liste déroulante, sélectionnez « NOT EQUALS » dans la seconde, et saisissez « FossilSpecimen » dans le champ vide.
5. Répétez les étapes 3 et 4 pour toutes les autres valeurs valides de *BasisOfRecord* susceptibles d'être présentes dans votre collection.
6. Modifiez les enregistrements erronés individuellement en cliquant sur le lien dans la colonne « Symbiota ID » (tout à gauche), ou modifiez toutes les entrées par lot à l'aide de l'outil de modification par lot ([Batch Editing Tool](/Collection_Manager_Guide/Editing_Occurrences/batch_editing)).

### Enregistrements

#### Atelier : Nettoyage des données pour un impact maximal

<ReactPlayer
  playing={false}
  controls
  url="http://www.youtube.com/watch?v=j3cxGe_bcC4"
/>

<ReactPlayer
  playing={false}
  controls
  url="http://www.youtube.com/watch?v=DCpS-Gkq3a8"
/>
