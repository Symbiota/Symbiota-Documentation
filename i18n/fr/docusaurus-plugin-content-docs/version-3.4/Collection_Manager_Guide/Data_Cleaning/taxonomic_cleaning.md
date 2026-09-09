---
title: "Outils de nettoyage taxonomique"
date: 2026-03-30
sidebar_position: 20
draft: false
authors: ["Katie Pearson"]
keywords: ["taxonomie", "nettoyage des données"]
---

import ReactPlayer from "react-player";

:::info

Cette page explique comment utiliser les deux outils de nettoyage taxonomique disponibles sur les portails Symbiota. Pour en savoir plus sur le thésaurus taxonomique, consultez la page [Taxonomie](/User_Guide/taxonomic_thesaurus).

:::

Accédez à ces outils via le **Panneau de contrôle d'administration** (_cliquez sur « Mon profil », puis sur le nom de la collection dans le bloc « Gestion des collections »_). Cliquez sur **Outils de nettoyage des données**, puis consultez le bloc situé sous l'en-tête **Taxonomie**.

Les outils de nettoyage taxonomique sont des ressources précieuses pour corriger les fautes d'orthographe et autres saisies de noms taxonomiques qui ne sont pas reliées aux noms du thésaurus taxonomique central. Ils sont conçus pour aider à identifier et à corriger les erreurs et incohérences taxonomiques.

### Analyser les noms taxonomiques

<ReactPlayer
  playing={false}
  controls
  url="https://www.youtube.com/watch?v=e4Ag8Ggx0hU"
/>

Cette fonction analyse les valeurs présentes dans le champ « Nom scientifique » de votre base de données et signale celles qui ne sont pas liées au thésaurus taxonomique (c'est-à-dire qui ne correspondent pas à un nom reconnu). Notez que cet outil n'évalue PAS si le nom est accepté selon la taxonomie actuelle. Le nombre de noms scientifiques non reconnus est indiqué en haut de la zone du menu d'action.

![Menu d'action de nettoyage taxonomique](/img/taxonomycleaning2026.png)

Vous pouvez examiner les noms scientifiques non reconnus et les associer aux noms des taxons corrects en cliquant sur le nom de la ressource taxonomique de référence, en sélectionnant le règne cible et en cliquant sur le bouton « Analyser les noms taxonomiques ». Si vous souhaitez commencer l'analyse à partir d'un nom précis (par exemple, si vous avez déjà vérifié les noms jusqu'à *Mentzelia*), vous pouvez saisir ce nom dans le champ « Index de départ ». Vous pouvez également modifier le nombre de noms que le portail doit analyser par cycle dans le champ « Noms traités par cycle ».
L'exécution de cet outil peut générer plusieurs types de résultats. En général, l'outil liste le nom qu'il tente d'indexer (c'est-à-dire de faire correspondre à un nom taxonomique existant), recherche ce nom dans la ressource taxonomique définie et, s'il ne le trouve pas, consulte le thésaurus taxonomique pour identifier des noms similaires au nom non reconnu. Vous disposez ensuite de plusieurs options pour traiter le nom non reconnu, selon le type de résultat obtenu. Pour voir le ou les spécimens associés à un nom non reconnu, cliquez sur l'icône en forme de crayon située à droite du nom et du nombre de spécimens (indiqué entre parenthèses). Les différents types de résultats sont détaillés ci-dessous.

#### Exemple 1 : Faute d'orthographe, nom incomplet ou variante orthographique

![Exemple 1 de nettoyage taxonomique](/img/taxclean1_2026.png)

Il s'agit du type de résultat le plus courant. Dans ce cas, vous constatez que le nom non reconnu comportait une faute d'orthographe ou une graphie différente de celle du nom reconnu. Vous pouvez cliquer sur « réassocier à ce taxon » pour remplacer le nom associé au(x) spécimen(s) par ce nom reconnu.

#### Exemple 2 : Nom de taxon non publié ou non reconnu

![Exemple 2 de nettoyage taxonomique](/img/taxclean2_2026.png)

Dans ce cas, vous constatez que le nom indiqué sur le spécimen n'a pas été publié ou ne figure pas actuellement dans le référentiel taxonomique. Vous devez alors faire appel à votre expertise taxonomique pour décider si ce spécimen doit être réassocié à un autre nom taxonomique (si vous avez la certitude qu'il s'agit de synonymes) et/ou annoté, ou si le nom taxonomique doit être conservé tel quel et ajouté au référentiel taxonomique. Si vous estimez qu'un nom devrait figurer dans le référentiel taxonomique mais que vous ne le trouvez pas lors d'une recherche manuelle, contactez le gestionnaire du portail.

#### Exemple 3 : Le nom existe mais ne figure pas dans le référentiel taxonomique

![Exemple 3 de nettoyage taxonomique](/img/taxclean3_2026.png)

Lorsque le portail ne trouve pas un nom dans le référentiel taxonomique mais le trouve dans la ressource taxonomique, il importe ce nom taxonomique dans le référentiel. Cela associera automatiquement le nom taxonomique du spécimen à cette nouvelle entrée du référentiel.

Si vous n'avez pas analysé tous les noms taxonomiques en une seule fois, vous pouvez cliquer sur le bouton « Continuer l'analyse des noms » pour que Symbiota vérifie les 20 noms suivants (ou tout autre nombre défini par l'utilisateur).

### Répartitions taxonomiques

Tout comme l'outil de visualisation de la répartition géographique, l'outil de visualisation de la répartition taxonomique permet d'examiner les familles, genres, espèces et taxons infraspécifiques présents dans votre base de données. Cet outil permet de détecter les fautes d'orthographe, les entrées non normalisées ou les erreurs potentielles. Pour afficher les genres associés à une famille, cliquez sur le nom de cette famille ; ensuite, pour voir les espèces d'un genre donné, cliquez sur le nom de ce genre, et ainsi de suite.
Un utilisateur disposant de droits d'administrateur peut corriger individuellement les erreurs dans les noms taxonomiques en cliquant sur le nombre figurant à côté du nom (entouré ci-dessous), ou rechercher ces enregistrements via le formulaire de recherche pour les modifier en lot.

![Visualiseur de répartition taxonomique](/img/taxonomycleanviewer2026.png)
