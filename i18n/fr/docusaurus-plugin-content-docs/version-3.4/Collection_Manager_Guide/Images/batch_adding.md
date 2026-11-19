---
title: "Ajout en masse d’images/médias"
date: 2021-10-06
modified: 2026-02-05
sidebar_position: 5
authors: ["Ed Gilbert","Katie Pearson"]
editors: ["Katie Pearson", "Lindsay Walker"]
keywords: ["images"]
---

:::info

Cette page décrit les procédures générales permettant d'ajouter simultanément plusieurs ressources multimédias (par exemple, des images) à un portail. Les ressources multimédias ne sont pas stockées au sein d'une base de données Symbiota ; ce sont leurs URL qui sont associées aux fiches de spécimens. Veuillez contacter le gestionnaire du portail pour connaître les procédures prises en charge par celui-ci.

:::

Les ressources multimédias (par exemple, des images) associées à des fiches dans un portail Symbiota peuvent être **hébergées en externe** ou **hébergées en interne**.

* Les ressources multimédias **hébergées en externe** sont stockées sur des serveurs indépendants du portail Symbiota (par exemple, des serveurs appartenant à une autre institution). Ces serveurs externes fournissent des liens vers les ressources, qui peuvent ensuite être intégrés dans la base de données Symbiota.

* Les ressources multimédias **hébergées en interne** sont stockées sur des serveurs accessibles en écriture depuis le serveur du portail Symbiota. Par exemple, si vous coordonnez avec le centre de support Symbiota (*Symbiota Support Hub*) le téléversement en masse d'images vers l'un des portails qu'ils hébergent (comme SEINet ou le *Bryophyte Portal*), vos images sont alors considérées comme hébergées en interne.

:::tip

Les images téléversées ou associées à des spécimens dans un portail Symbiota doivent être au format JPG ou dans un autre format adapté au Web. Il est recommandé que chaque fichier ne dépasse pas 8 Mo, afin de permettre aux utilisateurs disposant d'une connexion plus lente de les consulter dans un délai raisonnable.

:::

#### Ajout en masse de ressources multimédias hébergées en externe

Les ressources multimédias hébergées en externe peuvent être ajoutées aux enregistrements Symbiota selon l'une des trois méthodes principales : (1) en utilisant l'outil de correspondance d'URL (URL mapping tool) et un [tableau contenant les numéros de catalogue associés aux URL des ressources multimédias](/Collection_Manager_Guide/Images/media_upload_url) ; (2) en associant une colonne contenant des liens vers des ressources multimédias au champ `associatedMedia` lors d'un import de fichier texte complet (« Full Text File Upload ») ou d'un import de fichier simplifié (« Skeletal File Upload »). Pour plus d'informations sur l'importation de fichiers texte, consultez [cette page](/Collection_Manager_Guide/Importing_Uploading/). (Si vos données sont déjà présentes dans le portail et que vous souhaitez uniquement ajouter des liens vers des ressources multimédias, n'utilisez PAS la fonction « Full Text File Upload ») ; ou (3) en important une archive Darwin Core (« Darwin Core Archive ») contenant vos données, incluant une [extension multimédia](https://rs.gbif.org/extension/gbif/1.0/multimedia.xml) dûment renseignée.

#### Ajout en masse de ressources multimédias hébergées en interne

Il existe plusieurs procédures pour importer ou lier en masse des ressources multimédias (spécimens) hébergées en interne. Le traitement par lots se décompose généralement en deux étapes distinctes : (1) le transfert des ressources multimédias sur un serveur web, et (2) l'association des URL des images aux enregistrements d'occurrences dans Symbiota. Cette seconde étape est réalisable si les fichiers multimédias sont nommés en fonction du numéro de catalogue (ou de tout autre identifiant de catalogue) associé à l'enregistrement dans le portail.

Le stockage d'un grand nombre d'images ou d'autres ressources multimédias sur des serveurs associés à un portail Symbiota peut nécessiter un accord d'hébergement et/ou entraîner des frais. Renseignez-vous auprès de l'administrateur du portail pour connaître les modalités et les procédures relatives à l'hébergement d'images sur votre portail. Pour les portails hébergés via SSH, veuillez contacter le centre d'assistance Symbiota (Symbiota Support Hub) à l'adresse help@symbiota.org.
