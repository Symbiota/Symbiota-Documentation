---
title: "Validateur de coordonnées"
date: 2026-04-14
sidebar_position: 7
authors: ["Katie Pearson"]
keywords: ["géographie", "thésaurus géographique", "géoréférences"]
---

import ReactPlayer from "react-player";

:::info

Cette page explique comment utiliser l'outil de validation des coordonnées, situé dans la boîte à outils de nettoyage des données.

:::

## À savoir avant d'utiliser cet outil

:::note

Cet outil ne fonctionnera comme prévu que si le thésaurus géographique de votre portail inclut des polygones géographiques ; ceux-ci peuvent être ajoutés automatiquement par un super-administrateur à l'aide de l'outil [Geographic Harvester](/Portal_Manager_Guide/Geographic_Thesaurus/geographic_harvester). Contactez le gestionnaire de votre portail si l'outil ne semble pas fonctionner.

:::

:::tip

Il est recommandé d'utiliser les [outils de nettoyage géographique](/Collection_Manager_Guide/Data_Cleaning/geographic_cleaning) avant de valider les coordonnées. Cela garantira que vos unités administratives correspondent à celles du thésaurus géographique.

:::

## Accéder à l'outil de validation des coordonnées

Accédez à ces outils via le **Panneau de contrôle d'administration** (*cliquez sur « Mon profil », puis sur le nom de la collection dans le bloc « Gestion des collections »*). Cliquez sur **Outils de nettoyage des données**, puis consultez le bloc situé sous l'en-tête **Coordonnées des spécimens**.

L'outil de validation des coordonnées permet de vérifier si les coordonnées associées à vos enregistrements se situent bien à l'intérieur des limites administratives (pays, État/province et comté) indiquées.

Le panneau de statistiques et d'actions fournit des informations sur le nombre de spécimens géoréférencés, ainsi que sur le nombre d'enregistrements (avec ou sans coordonnées) contenant des données dans le champ « coordonnées verbatim » (telles qu'elles apparaissent sur l'étiquette). Les enregistrements non géoréférencés comportant des valeurs dans le champ « coordonnées verbatim » constituent un bon point de départ pour le géoréférencement, car ils peuvent contenir des coordonnées facilement convertibles en valeurs décimales de latitude et de longitude.

![Panneau de statistiques des coordonnées](/img/coordinatevalidatoractionpanel.png)

## Utiliser l'outil de validation des coordonnées

Pour utiliser l'outil de validation des coordonnées, cliquez sur le lien **Vérifier les coordonnées par rapport aux limites administratives**.

Si votre collection contient des coordonnées, l'une des deux situations suivantes se présentera sur la page suivante :
- Si vous n'avez jamais validé vos coordonnées, vous verrez un tableau intitulé « Enregistrements non vérifiés par comté ». Cliquez sur l'icône du tableau pour afficher les spécimens correspondant aux valeurs de comté indiquées.
- Si vous avez déjà validé vos coordonnées, vous verrez un tableau de « Statistiques de classement » regroupant tous les enregistrements potentiellement problématiques identifiés lors de la précédente tentative de validation.

Pour valider (ou revalider) vos coordonnées, cochez les cases correspondant aux options de votre choix. Vous pouvez demander à l'outil de renseigner les champs « pays », « État/province » et/ou « comté » en se basant sur les coordonnées des enregistrements qui ne possèdent pas encore de valeurs pour ces champs. Cliquez sur le bouton **(Re)valider toutes les coordonnées** pour lancer l'outil.

![Tableau des statistiques de classement](/img/coordinatevalidator.png)

:::warning

L'exécution de cet outil peut prendre plusieurs minutes ! Ne quittez pas cette fenêtre pendant que l'outil est en cours d'exécution.

:::

Le tableau des statistiques de classement qui en résulte affichera les totaux des enregistrements potentiellement problématiques, classés selon les types de problèmes détectés (décrits ci-dessous). Pour consulter les enregistrements présentant ces problèmes potentiels, cliquez sur le nombre indiqué dans la colonne « Enregistrements douteux ».

### Explication des problèmes potentiels détectés

#### Échec de la validation des coordonnées par rapport au thésaurus géographique

Les enregistrements présentant ce problème peuvent :
- Avoir des coordonnées qui ne correspondent à aucune limite de comté ou d'État ;
- Avoir des valeurs de pays, d'État ou de comté qui ne correspondent pas aux valeurs du thésaurus géographique ;
- Avoir des valeurs de pays, d'État ou de comté pour lesquelles il n'existe aucun polygone correspondant dans le thésaurus géographique.

Comme les polygones du thésaurus manquent parfois de précision, il est probable que vous ayez toujours des enregistrements dans cette catégorie.

:::warning

L'outil ne peut valider entièrement les coordonnées que pour les pays disposant de polygones d'États et de comtés dans le thésaurus géographique. Contactez l'administrateur de votre portail pour obtenir de l'aide concernant les pays ne disposant pas encore de polygones infranationaux.

:::

#### Échec de la validation des coordonnées malgré un polygone de recherche connu

La validation a échoué pour les enregistrements présentant ce problème, bien que les valeurs de pays, d'État/province et de comté correspondent à celles associées aux polygones du référentiel géographique. Cela est généralement dû à des imprécisions dans les polygones du référentiel géographique ; par exemple, le tracé des côtes peut ne pas correspondre parfaitement aux polygones. Il est recommandé d'examiner ces enregistrements pour détecter d'éventuelles erreurs manifestes, puis d'ignorer les enregistrements signalés restants.

#### L'État/la province ne correspond pas aux coordonnées

Pour les enregistrements présentant ce problème, les coordonnées se situent bien dans le pays indiqué, mais leur emplacement ne correspond pas à la valeur d'État ou de province renseignée. Vérifiez ces enregistrements pour déceler des coordonnées mal placées ou des erreurs de saisie concernant l'État ou la province.

#### Le comté ne correspond pas aux coordonnées

Pour les enregistrements présentant ce problème, les coordonnées se situent bien dans le pays et l'État/province indiqués, mais leur emplacement ne correspond pas à la valeur de comté renseignée. Vérifiez ces enregistrements pour déceler des coordonnées mal placées ou des erreurs de saisie concernant le comté.

:::tip

Une fois que vous avez corrigé les enregistrements n'ayant pas pu être validés (dans l'éditeur d'occurrences), vous devez relancer l'outil de validation pour mettre à jour vos statistiques de validation.

:::

<ReactPlayer
  playing={false}
  controls
  url="https://youtu.be/ndyFW1mZuXs?si=jt1WLOjs4HWdpOhM&t=1722"
/>
