---
title: "Évaluation de traits à partir de textes"
date: 2021-12-09
lastmod: 2026-03-30
authors: ["Katie Pearson"]
keywords: ["trait scoring", "attribute scoring", "phenology", "traits"]
---

:::info

Cette page explique comment attribuer en lot des valeurs de caractères (traits) aux occurrences de votre collection à partir de textes (par ex. descriptions, notes) présents dans la fiche d'occurrence. L'exemple fourni montre comment coder des caractères phénologiques pour des spécimens de plantes vasculaires, bien que d'autres caractères puissent être codés selon la configuration de votre portail Symbiota.

:::

:::note

Les outils de codage des caractères ne sont pas activés sur tous les portails. Contactez l'administrateur de votre portail pour plus d'informations.

:::

Accédez au panneau de contrôle de l'éditeur de données (_cliquez sur « My Profile » [Mon profil], puis sur le nom de la collection dans le bloc « Collection Management » [Gestion des collections]_), cliquez sur « Occurrence Trait Coding Tools » [Outils de codage des caractères des occurrences] et sélectionnez « Trait Mining from Verbatim Text » [Extraction de caractères à partir du texte brut]. Dans le bloc « Harvesting Filter » [Filtre de collecte], sélectionnez le caractère de l'occurrence que vous souhaitez coder.

![Codage de caractères à partir de texte](/img/traitscorefromtextfilter2026.png)

Pour le champ « Verbatim text source » [Source du texte brut], sélectionnez le champ de la base de données que vous souhaitez voir affiché par l'outil. Les options incluent : Habitat, Substrat, Remarques sur l'occurrence (Notes), Propriétés dynamiques, Attributs bruts (Description), Comportement, État reproductif (Phénologie), Stade de développement et Sexe. Dans le champ « Filter by text (optional) » [Filtrer par texte (facultatif)], vous pouvez saisir n'importe quelle chaîne de caractères pour filtrer les résultats. Par exemple, si vous saisissez « fw », l'outil affichera toutes les valeurs de ce champ contenant « fw ». Ce champ est facultatif, mais l'ajout d'une chaîne de recherche restreindra considérablement les résultats. Lors du choix des chaînes à saisir, pensez à rechercher également les versions mal orthographiées ou abrégées des valeurs attendues. Par exemple, si vous recherchez des spécimens pouvant être codés comme étant en floraison (« flowering »), vous pourriez rechercher « fowering » ou « fwrr » en plus de « flowering » et « fwr ». Dans le champ « Filter by taxon (optional) » [Filtrer par taxon (facultatif)], vous pouvez saisir le nom d'un taxon pour filtrer les résultats. Ce champ est également facultatif.

Une fois les champs souhaités renseignés, cliquez sur le bouton « Get Field Values ​​» [Obtenir les valeurs des champs]. Le résultat ressemblera à la capture d'écran présentée sur la page suivante. La zone de filtre de récolte (« Harvesting Filter ») reste visible ; la zone située en dessous listera toutes les chaînes de caractères (valeurs) uniques trouvées dans le champ de base de données spécifié qui correspondent à vos critères de recherche. Les chiffres entre parenthèses, à droite de chaque valeur, indiquent le nombre de fiches de spécimens présentant exactement cette valeur dans le champ de base de données spécifié.

![Filtres de notation des traits](/img/traitscorefromtext2026.png)

Sélectionnez dans la liste la ou les valeurs que vous souhaitez noter. Pour sélectionner plusieurs valeurs auxquelles vous voulez attribuer la même note phénologique, maintenez la touche Ctrl enfoncée tout en cliquant sur chaque valeur de la liste. Sélectionnez la note appropriée dans le barème de notation du trait situé au bas de la zone inférieure. Selon le barème disponible pour le trait que vous évaluez, vous pourrez peut-être afficher davantage d'options de notation en cliquant sur le triangle noir situé à côté du barème. Dans cette liste, sélectionnez les traits que vous souhaitez appliquer à ce spécimen. Vous pouvez laisser vides les traits que vous ne souhaitez pas noter. Une fois satisfait de vos notations, cliquez sur le bouton « Attribuer l'état par lot ». En cas d'erreur, cliquez sur « Réinitialiser le formulaire » ; attention : cette action désélectionnera également tous les champs de texte sélectionnés ; soyez donc vigilant lors de la sélection des traits !