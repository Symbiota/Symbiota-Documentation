---
title: "État du traitement"
date: 2024-06-10
lastmod: 2024-09-27
draft: false
authors: ["Lindsay Walker", "Katie Pearson"]
keywords: ["crowdsourcing", "transcription", "editing"]
---

:::info

Cette page explique le champ *Processing Status* (Statut de traitement) et la manière dont il est géré dans les portails Symbiota.

:::

Le champ *Processing Status* est spécifique à Symbiota ; il permet de suivre l'état de numérisation (ou toute autre étape du flux de travail) des enregistrements. Il n'est ni visible publiquement ni inclus dans les exportations au format Darwin Core Archive. Les valeurs par défaut disponibles pour ce champ sont :

- Unprocessed (Non traité)
- Unprocessed/NLP (Non traité/NLP)
- Stage 1 (Étape 1)
- Stage 2 (Étape 2)
- Stage 3 (Étape 3)
- Pending Review-nfn (En attente de révision - nfn)
- Pending Review (En attente de révision)
- Expert Required (Expert requis)
- Reviewed (Révisé)
- Closed (Clôturé)

Il n'existe pas de définitions normalisées pour ces valeurs de statut. Les projets de numérisation collaboratifs définissent souvent ces statuts de manière à faciliter la gestion de leurs flux de travail et de leurs rapports (voir, par exemple, l'annexe 2 de [ce document](https://www.capturingcaliforniasflowers.org/uploads/1/6/3/7/16372936/6_labeltranscriptionguide_jan2020.docx) du California Phenology Network).

Le champ *Processing Status* interagit avec les outils suivants dans les portails Symbiota :

- [Module de crowdsourcing](/Editor_Guide/Crowdsourcing) : lorsque le statut est « Unprocessed » (Non traité) **et** qu'un enregistrement possède au moins une image associée, il peut être ajouté à la [file d'attente de crowdsourcing](/Collection_Manager_Guide/Crowdsourcing/adding_crowdsourcing).
- [Rapports](/Collection_Manager_Guide/collection_statistics) : un administrateur de collection peut consulter rapidement le nombre d'enregistrements par statut de traitement via l'onglet « Reports » (Rapports) de la boîte à outils de traitement (*Processing Toolbox*).

Il est également possible de modifier en masse le statut de traitement et d'effectuer des recherches à ce sujet via le formulaire de recherche de l'éditeur de données (*Data Editor Control Panel* > *Edit Existing Occurrence Records*) :

![Onglets de l'éditeur d'occurrences](/img/processingstatusquery.png)

### Modification du statut de traitement

Les options _Statut de traitement_ (Processing Status) et _Définition automatique du statut_ (Status Auto-Set) se trouvent dans la section « Curatelle » (Curation) du formulaire de l'éditeur d'occurrences :
![Onglets de l'éditeur d'occurrences](/img/processingstatus.png)

#### Manuellement

Le _Statut de traitement_ peut être mis à jour manuellement depuis le bloc « Curatelle » de l'éditeur d'occurrences. Cette méthode est particulièrement utile pour des modifications ponctuelles d'enregistrements ne nécessitant pas un suivi de flux de travail complexe.

#### Automatiquement

Le menu _Définition automatique du statut_ permet de modifier le _Statut de traitement_ lorsque plusieurs enregistrements doivent être traités. Si un utilisateur doit modifier de nombreux enregistrements sans avoir à penser à mettre à jour manuellement le _Statut de traitement_ à chaque étape, la _Définition automatique du statut_ peut être utilisée pour mettre à jour ce champ automatiquement, par exemple lors de la transcription d'images. Une fois cette option configurée, tous les enregistrements modifiés par la suite par l'utilisateur se verront attribuer cette nouvelle valeur de _Statut de traitement_.

:::warning

N'utilisez pas le champ **Définition automatique du statut** si vous souhaitez modifier le statut de traitement d'un seul enregistrement ! Assurez-vous d'utiliser le champ _Statut de traitement_ situé dans le bloc « Curatelle ».

:::

:::note

La _Définition automatique du statut_ est propre à chaque utilisateur et repose sur les cookies du navigateur pour fonctionner.

:::
