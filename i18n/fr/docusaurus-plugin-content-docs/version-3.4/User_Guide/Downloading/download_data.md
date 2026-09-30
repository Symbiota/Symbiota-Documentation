---
title: "Téléchargement des données"
date: 2021-11-12
lastmod: 2025-12-23
sidebar_position: 10
authors: ["Katie Pearson"]
keywords: ["download"]
---

:::info

Cette page explique où et comment télécharger des données depuis un portail Symbiota via l'interface utilisateur et détaille les options de téléchargement disponibles.

:::

## Comment télécharger

Le téléchargement de données depuis les portails Symbiota s'effectue facilement à partir d'une recherche publique.

:::note

La plupart des portails exigent que vous soyez connecté pour télécharger des données. Si vous n'avez pas encore de compte, cliquez sur le bouton « Se connecter » (Sign In) et suivez le lien « Créer un compte » (Create an Account). Si vous ne savez pas si vous possédez un compte ou si vous avez perdu vos identifiants, contactez help@symbiota.org pour obtenir de l'aide.

:::

Après avoir [effectué une recherche](/User_Guide/searching_records), cliquez sur l'icône de téléchargement ![Icône de téléchargement](/img/dl2.png)

Elle se trouve généralement dans le coin supérieur droit de la page, comme illustré ci-dessous :

![Exemple de résultats de recherche](/img/search3.png)

## Options de téléchargement

Une fois que vous avez cliqué sur le bouton de téléchargement, une fenêtre contextuelle (pop-up) s'affiche pour vous proposer les options de téléchargement.

:::tip

Assurez-vous que votre bloqueur de fenêtres contextuelles est désactivé pour ce site afin d'éviter tout problème lors du téléchargement.

:::

Vous pourriez voir les options suivantes (selon les fonctionnalités disponibles sur votre portail) :

![Fenêtre contextuelle de téléchargement](/img/downloadpopupwindow2025.png)

**Structure** - ici, vous pouvez choisir de télécharger les données au format Symbiota ou au format Darwin Core strict. Le format natif Symbiota inclut plusieurs champs autres que ceux du Darwin Core, tels que le substrat, les collecteurs associés et la description textuelle originale (*verbatim description*). Une liste complète des champs Symbiota est disponible sur [cette page](/Editor_Guide/Editing_Searching_Records/symbiota_data_fields). Le [Darwin Core](https://dwc.tdwg.org/terms/) est un format plus standardisé et interopérable, que vous pourrez plus facilement combiner avec des données provenant d'autres sources.

**Résolution taxonomique** - ici, vous pouvez choisir d'inclure les champs optionnels « [acceptedNameUsage](https://dwc.tdwg.org/terms/#dwc:acceptedNameUsage) », « acceptedNameUsageAuthorship » et « [acceptedNameUsageID](https://dwc.tdwg.org/terms/#dwc:acceptedNameUsageID) ». Ces champs fourniront des informations sur le nom scientifique « accepté » du spécimen, selon le référentiel taxonomique du portail. Le nom figurant dans la fiche originale sera toujours présent dans le champ « scientificName » du fichier d'occurrences téléchargé. Notez que la précision du nom accepté dépend de la qualité de la maintenance du référentiel taxonomique du portail. Consultez [cet article](/User_Guide/taxonomic_thesaurus) pour plus d'informations sur le référentiel taxonomique.

**Extensions de données** - ici, vous pouvez sélectionner les [extensions Darwin Core](https://rs.gbif.org/extensions.html) que vous souhaitez inclure dans votre téléchargement, comme décrit ci-dessous. Les extensions contiennent des données pouvant entretenir une relation de type « un-à-plusieurs » avec les enregistrements du fichier principal d'occurrences ; autrement dit, plusieurs lignes dans les fichiers d'extension peuvent correspondre à une seule ligne du fichier d'occurrences.
    * **Historique des déterminations** (nom du fichier : *identifications*) – ce fichier contiendra l'historique des identifications taxonomiques des enregistrements figurant dans le fichier principal des *occurrences*. Consultez l'extension [Historique d'identification Darwin Core](https://rs.gbif.org/extension/identification_history_2024-02-19.xml) pour plus d'informations sur les champs disponibles dans ce fichier. 
    * **Enregistrements multimédias** (nom du fichier : *multimedia*) – ce fichier contiendra des liens vers tous les enregistrements multimédias associés aux données du fichier principal des *occurrences*. **Remarque : cette option ne téléchargera pas les fichiers multimédias eux-mêmes.** Consultez [cet article sur le téléchargement d'images](/User_Guide/Downloading/download_images) pour plus d'informations. Consultez l'extension [Simple Multimedia](https://rs.gbif.org/extension/gbif/1.0/multimedia.xml) pour plus d'informations sur les champs disponibles dans ce fichier. 
    * **Attributs de traits des occurrences** (nom du fichier : *measurementOrFact*) – ce fichier contiendra les [données sur les traits](/User_Guide/traits) associées aux enregistrements du fichier principal des *occurrences*. Les traits hiérarchiques occuperont souvent plusieurs lignes. Par exemple, un enregistrement indiquant « fleurs présentes » héritera du trait « reproducteur » ; il comportera donc au moins deux lignes de données de traits pour cette occurrence unique. Consultez l'extension [Mesures ou faits détaillés](https://rs.gbif.org/extension/obis/extended_measurement_or_fact_2023-08-28.xml) pour plus d'informations sur les champs disponibles dans ce fichier. 
    * **Échantillons de matériel** (nom du fichier : *materialSample*) – ce fichier contiendra les données relatives aux échantillons de matériel associées aux enregistrements du fichier principal des *occurrences*. Consultez l'extension [Échantillon de matériel GGBN](https://rs.gbif.org/extension/ggbn/materialsample.xml) pour plus d'informations sur les champs disponibles dans ce fichier. 
    * **Identifiants alternatifs** (nom du fichier : *identifiers*) – ce fichier contiendra des identifiants alternatifs (par ex. d'autres numéros de catalogue) associés aux enregistrements du fichier principal des *occurrences*. Ces données proviennent du [tableau des identifiants supplémentaires](/Editor_Guide/Editing_Searching_Records/catalog_numbers#tag-name--additional-identifier-values--other-catalog-numbers) dans l'éditeur d'occurrences. Consultez l'extension [Identifiants alternatifs](https://rs.gbif.org/extension/gbif/1.0/identifier.xml) pour plus d'informations sur les champs disponibles dans ce fichier. 
    * **Relations entre ressources** (nom du fichier : *resourceRelationship*) – ce fichier inclut les associations et les ressources liées aux enregistrements du fichier principal *occurrences*. Ces données proviennent de l'onglet « [Ressources liées](/Editor_Guide/linking_records) » de l'éditeur d'occurrences et peuvent avoir été ajoutées individuellement ou par lots. Consultez la classe [Relation de ressource Darwin Core](https://dwc.tdwg.org/terms/#resourcerelationship) pour plus d'informations sur les champs disponibles dans ce fichier.

**Format de fichier** – ici, vous pouvez choisir si vous souhaitez que les fichiers téléchargés soient délimités par des virgules (CSV) ou par des tabulations (TSV).

**Jeu de caractères** – ici, vous pouvez choisir si vous souhaitez que les fichiers téléchargés utilisent l'encodage ISO-8859-1 (occidental) ou UTF-8 (Unicode). L'encodage UTF-8 est recommandé pour garantir une meilleure interopérabilité avec la plupart des systèmes et des langues autres que l'anglais.

**Compression** – cochez cette case si vous souhaitez que le fichier téléchargé soit compressé au format ZIP. Cela réduira la taille du fichier et accélérera ainsi le téléchargement. Pour consulter les fichiers, il suffit de les extraire (recherchez « Comment extraire un fichier Zip » dans un moteur de recherche).
