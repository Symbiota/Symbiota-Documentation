---
title: "Modification et recherche d'enregistrements"
date: 2021-10-26
lastmod: 2026-03-30
draft: false
authors: ["Katie Pearson"]
keywords: ["edit", "change", "record search form", "search"]
sidebar_position: 70
---

:::info

Cette page explique comment rechercher et modifier des enregistrements.

:::

- Pour modifier des enregistrements par lots (fonctionnalité réservée aux administrateurs de collection), consultez [cette page](/Collection_Manager_Guide/Editing_Occurrences/batch_editing).
- Pour une présentation des champs du formulaire d'édition des occurrences, consultez [cette page](/Editor_Guide/Editing_Searching_Records/symbiota_data_fields).
- Pour une explication des onglets de l'éditeur d'enregistrements, consultez [cette page](/Editor_Guide/Editing_Searching_Records/record_editor_tabs).

Pour modifier ou rechercher des enregistrements, sélectionnez « Edit Existing Occurrence Records » (Modifier les enregistrements d'occurrence existants) dans le panneau de contrôle de l'éditeur de données (_cliquez sur « My Profile », puis sur le nom de la collection dans l'encadré « Collection Management »_). Dans le formulaire de recherche qui s'affiche, vous pouvez saisir un ou plusieurs termes pour affiner vos résultats.

| ![Formulaire de recherche d'enregistrement](/img/new_recordsearchform.png) |
| :-----------------------------------------------------: |
|**Capture d'écran d'un formulaire de recherche d'enregistrement.** Notez que votre formulaire peut ne pas inclure le filtre « Occurrence Trait » (caractéristiques de l'occurrence) si aucune caractéristique ([traits](/Editor_Guide/Traits/)) n'a été configurée sur votre portail. Le bouton de l'outil de mise à jour par lots ([Batch Update Tool](/Collection_Manager_Guide/Editing_Occurrences/batch_editing)) ne s'affichera au-dessus du formulaire que si vous êtes administrateur de la collection.|

Pour effectuer une recherche basée sur des champs ne figurant pas explicitement dans le formulaire, sélectionnez le champ souhaité dans le menu déroulant situé après « Custom Field 1 » (Champ personnalisé 1). Vous pouvez inclure jusqu'à 8 champs personnalisés dans votre recherche. Les menus déroulants situés à côté des noms de champs personnalisés vous permettront d'effectuer des recherches plus précises, par exemple en ciblant des plages de valeurs ou des champs vides (null). Les options incluent :

- ÉGAL À : le champ contient **uniquement** le texte fourni
- DIFFÉRENT DE : le champ ne correspond pas exactement au texte fourni (ne contient pas uniquement le texte fourni)
- COMMENCE PAR : le champ commence par le texte fourni
- CONTIENT : le champ contient le texte fourni (à n'importe quel endroit du champ)
- NE CONTIENT PAS : le champ ne contient pas le texte fourni (à aucun endroit du champ)
- SUPÉRIEUR À : (pour les valeurs numériques ou les champs contenant des nombres) le champ contient une valeur numérique supérieure à la valeur fournie
- INFÉRIEUR À : (pour les valeurs numériques ou les champs contenant des nombres) le champ contient une valeur numérique inférieure à la valeur fournie
- EST NULL : le champ entier contient une valeur « NULL » (absence de valeur)
- N'EST PAS NULL : le champ contient une valeur quelconque et n'est pas vide (NULL)

Pour effectuer une recherche, cliquez soit sur le bouton « Afficher l'éditeur » (pour voir un enregistrement à la fois), soit sur le bouton « Afficher le tableau » (pour voir les 1000 premiers enregistrements à la fois).

:::astuce

Lorsque vous recherchez les caractères « \_ » ou « % » dans les champs de vos enregistrements, vous devez faire précéder ce caractère de la barre oblique inverse servant de caractère d'échappement (\\). Par exemple, pour rechercher la valeur « \_1 », vous devez saisir « \\\ \_1 ».

:::

* Pour rechercher des spécimens que vous avez saisis (en tant qu'utilisateur actuel), cliquez sur le bouton « CU ».

* Pour trier les résultats de votre recherche, sélectionnez un champ dans le menu déroulant « Trier par », puis choisissez si vous souhaitez effectuer un tri par ordre croissant (Z-A, ou du plus petit au plus grand) ou décroissant (A-Z, ou du plus grand au plus petit).

* Pour afficher un enregistrement spécifique depuis l'affichage en tableau, cliquez sur le numéro d'identifiant Symbiota ou sur l'icône « Ouvrir dans une nouvelle fenêtre » située dans la colonne « SymbiotaID » (la plus à gauche).

* Pour rechercher des enregistrements présentant des traits ou des attributs de traits spécifiques, cliquez sur le nom du trait OU de l'attribut dans la liste correspondante. Pour sélectionner plusieurs traits ou attributs, maintenez la touche Contrôle (ou Commande, pour les utilisateurs Mac) enfoncée tout en cliquant sur plusieurs éléments de la liste.

* Pour télécharger les résultats de votre recherche, cliquez sur le bouton portant l'icône de téléchargement (![Icône du bouton de téléchargement](/img/dl.png)) situé en haut du formulaire.

* Pour copier un lien vers votre recherche afin de pouvoir la consulter ultérieurement (ou pour la partager avec d'autres éditeurs de votre collection), cliquez sur le bouton portant l'icône de lien ( ![Icône du bouton de lien](/img/link.png) ) situé dans le coin supérieur droit du formulaire.

* Pour rouvrir le formulaire de recherche d'enregistrements après avoir effectué une recherche, cliquez sur le bouton « Basculer vers le formulaire de recherche d'enregistrements ».

![Retour au formulaire de recherche d'enregistrements](/img/returntorecordsearchform_v3.png)

* Les champs déroulants situés au début et à la fin de chaque champ personnalisé vous permettent d'effectuer des recherches encore plus précises. Ils contiennent une ou plusieurs parenthèses, vous permettant ainsi d'isoler des sous-ensembles de votre requête de recherche. Par exemple, la requête ci-dessous renverrait des enregistrements qui, soit ont le Canada comme pays, soit ont à la fois l'Alberta comme État/province ET un nom de collecteur ne contenant pas « DuPont ». Les parenthèses regroupent le « Champ personnalisé 2 » et le « Champ personnalisé 3 » de sorte que les deux conditions doivent être remplies simultanément.

![Exemple de recherche avancée](/img/advancedsearchexample.png)