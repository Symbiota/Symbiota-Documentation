---
title: "Téléchargement d'images/de médias"
date: 2021-10-06
lastmod: 2026-03-30
weight: 10
draft: false
authors: ["Ed Gilbert","Ben Brandt","Katie Pearson"]
keywords: ["images"]
---

import ReactPlayer from "react-player";

:::info

Cette page explique comment téléverser des ressources multimédias individuelles (par ex. des images) liées à des données de *terrain* ou à des *spécimens* via l'interface du portail Symbiota. Techniquement, les ressources multimédias ne sont **pas** stockées *au sein* d'une base de données Symbiota ; ce sont leurs URL qui y sont enregistrées. Il est donc également possible de lier des ressources multimédias hébergées sur des serveurs externes. Pour en savoir plus sur cette option, consultez la page [Ajout/Liaison d'images par lots](/Editor_Guide/Images_Media/batch_uploading_images).

:::

Les ressources multimédias associées aux enregistrements d'un portail Symbiota peuvent être **hébergées en externe** ou **hébergées en interne**.

*   Les ressources multimédias **hébergées en externe** sont celles qui sont stockées sur des serveurs indépendants du portail Symbiota (par ex. hébergés par une autre institution). Ces serveurs externes fournissent des liens vers les médias, lesquels peuvent ensuite être intégrés à la base de données Symbiota.

*   Les ressources multimédias **hébergées en interne** sont celles qui sont stockées sur des serveurs accessibles en écriture depuis le serveur du portail Symbiota. Par exemple, si vous coordonnez avec le centre de support Symbiota (Symbiota Support Hub) le téléversement par lots d'images vers l'un des portails qu'ils hébergent (par ex. SEINet, Bryophyte Portal), vos images sont considérées comme hébergées en interne.

Il existe trois catégories de ressources multimédias pouvant être liées à un portail Symbiota. Les instructions pour téléverser individuellement des ressources de chacun de ces types sont fournies ci-dessous. **Les instructions ci-dessous supposent que votre portail est configuré avec un répertoire multimédia permettant le téléversement direct de ressources via l'interface.** C'est le cas pour la plupart des portails, mais si vous rencontrez des problèmes, vous devrez peut-être contacter un administrateur du portail.

### Ressources multimédias pour un spécimen individuel

1. Connectez-vous à votre compte sur le portail.
2. Accédez à la page d'édition de l'occurrence du spécimen auquel vous souhaitez ajouter une image (cliquez sur **Mon profil** > nom de la collection dans le bloc **Gestion des collections** > **Modifier les enregistrements d'occurrence existants** > recherchez le spécimen).
3. Cliquez sur l'onglet **Multimédia**.

![Onglet Multimédia](/img/mediatab.jpg)

4. Si une ressource multimédia a déjà été ajoutée au spécimen et que vous souhaitez en ajouter une autre, cliquez sur l'icône d'ajout (signe « plus ») en haut à droite de la fenêtre. Sinon, l'interface de téléchargement de ressources multimédias apparaîtra surlignée en jaune dans cet onglet.
5. Cliquez sur le bouton **Choisir un fichier** et sélectionnez le fichier que vous souhaitez télécharger. Si vous disposez plutôt d'une URL vers la ressource multimédia, vous pouvez cliquer sur le lien **Saisir une URL** et coller l'adresse dans le champ correspondant.
6. Saisissez toute information supplémentaire souhaitée dans les autres champs.

:::tip

Vous pouvez saisir un nombre dans le champ **Tri** si vous souhaitez définir l'ordre d'affichage de plusieurs ressources multimédias sur la page de l'occurrence. Si vous saisissez un nombre supérieur à 500 dans le champ **Tri**, la ressource multimédia sera affichée sur la page des détails de l'occurrence, mais pas sur la page de profil du taxon concerné. Cette option est idéale pour les images de mauvaise qualité ou sensibles (par ex. animaux tués sur la route).

:::

7. Cliquez sur le bouton « Soumettre une nouvelle ressource ».

### Ressource multimédia de terrain sans informations de localisation

Les images dépourvues d'informations de localisation précises (par ex. coordonnées de latitude/longitude) sont associées uniquement au nom scientifique de l'organisme. Ces images peuvent être consultées sur la page de profil du taxon, qui contient des informations générales telles que des descriptions, des cartes de répartition, des synonymes et des noms vernaculaires. Pour téléverser une image :

1. Connectez-vous à votre compte sur le portail.

:::note

Vous devez disposer des droits d'édition de profil de taxon pour effectuer les opérations suivantes.

:::

2. Accédez à la page du taxon que vous souhaitez modifier. Pour ce faire, vous pouvez :
*   Cliquer sur « Plan du site », puis sur « Visualiseur de l'arbre taxonomique » ou « Explorateur taxonomique ». Recherchez le taxon concerné et cliquez sur son nom. 
*   Effectuer une recherche rapide du taxon concerné depuis la page d'accueil.
3. Cliquez sur l'icône en forme de crayon située dans le coin supérieur droit de la page du taxon.
4. Cliquez sur l'onglet « Ajouter un média ».
5. Sélectionnez le fichier multimédia à téléverser via l'option « Choisir un fichier », puis saisissez les informations complémentaires dans les champs prévus à cet effet. 
*   Le champ **Ordre de tri** permet de définir la position de la ressource multimédia sur le profil du taxon. Plus le nombre est élevé, plus la ressource apparaîtra bas dans la liste de priorité.
7. Cliquez sur le bouton « Téléverser la ressource multimédia ».
8. Les ressources multimédias de terrain (par ex. images prises sur le terrain) sont téléversées et gérées via l'interface d'édition du profil de taxon. Les utilisateurs disposant des droits d'édition peuvent soumettre une ressource multimédia en cliquant sur l'icône d'édition située en haut à droite de toute page de profil de taxon, ou via les liens de soumission d'images disponibles sur la page du plan du site. Les médias de terrain comportant des détails de localisation précis (par ex. coordonnées) peuvent être téléversés en tant qu'images de référence (voir ci-dessous).

### Documents multimédias faisant office de pièces justificatives (images de terrain avec données de localisation)

Les documents multimédias réalisés sur le terrain et assortis d'informations précises sur la localisation peuvent servir de pièces justificatives pour les observations de terrain concernant de nombreux oiseaux, mammifères et plantes faciles à identifier. Toutefois, certains groupes taxonomiques nécessitent généralement une analyse microscopique ou chimique pour une identification fiable (par exemple, les lichens, les bryophytes et les champignons). Pour ces organismes, les documents multimédias tels que les images présentent un intérêt limité. C'est pourquoi certains portails de données peuvent ne pas autoriser la soumission d'observations en l'absence de spécimen physique.

Il est primordial que les documents multimédias destinés à servir de pièces justificatives pour une observation soient de haute qualité et montrent clairement les caractères morphologiques diagnostiques de l'organisme. Les champs de données requis pour qu'une image soit considérée comme une pièce justificative comprennent : le nom de l'observateur, la date de l'observation, le pays, l'État ou la province, la description de la localité, la latitude, la longitude et au moins une image.

Tout comme les images de spécimens physiques, les documents multimédias faisant office de pièces justificatives sont affichés à la fois sur la page des détails de l'occurrence et sur la page du profil du taxon. Les observations étayées par des documents multimédias peuvent être téléversées dans un profil d'observation de recherche générale. La vidéo suivante explique comment accéder à une telle collection et y soumettre des observations :

<ReactPlayer
  playing={false}
  controls
  url="http://www.youtube.com/watch?v=4uj15JCzHg4"
/>
