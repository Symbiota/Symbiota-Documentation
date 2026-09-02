---
title: "Recherche d'enregistrements"
date: 2021-10-11
lastmod: 2026-01-15
authors: ["Katie Pearson, Lindsay Walker"]
sidebar_position: 110
keywords: ["search", "specimens", "observations"]
---

Les portails Symbiota diffusent des données relatives à des spécimens et à des observations, organisées selon des thématiques régionales et taxonomiques. Pour rechercher et consulter ces données, vous pouvez utiliser l'un des outils décrits ci-dessous.

## Recherche simple

1. Depuis la page d'accueil du portail, cliquez sur « Rechercher dans les collections » (Search Collections) dans le menu supérieur ou latéral.

2. Sur la page suivante, vous pouvez saisir des critères de recherche pour trouver les enregistrements qui vous intéressent. Cliquez sur le bouton « Développer toutes les sections » (Expand All Sections) si vous souhaitez afficher tous les critères de recherche disponibles.

3. Une fois vos critères sélectionnés, indiquez si vous souhaitez afficher les résultats sous forme de liste (100 par page) ou de tableau (1000 par page) à l'aide du bouton radio situé au-dessus du bouton « Rechercher » (Search).
4. Cliquez sur le bouton « Rechercher » (Search) situé tout à droite pour lancer la recherche.


| ![Interface de recherche Symbiota](/img/newsamplesearch2025.png)  |
| :-------------------------------------: |
| Formulaire de recherche accessible au public sur les portails Symbiota. Des critères supplémentaires peuvent être présents selon la configuration de votre portail (voir les sections « Contexte géologique » et « Critères de caractères taxonomiques » ci-dessous). |

### Critères de recherche
- Les critères disponibles varient selon le portail, mais incluent généralement les catégories suivantes : 1) Critères taxonomiques, 2) Critères de localisation, 3) Latitude et longitude, 4) Critères liés à l'événement de collecte, 5) Propriétés du spécimen/de l'observation, 6) Critères de traits (si activés), 7) Associations (si présentes sur votre portail), 8) Contexte géologique (si activé) et 8) Critères de caractères taxonomiques (si activés).
- Vous pouvez saisir et utiliser simultanément autant de critères que vous le souhaitez. Les critères sélectionnés apparaîtront sous forme d'étiquettes (« chips ») sur le côté droit de l'écran, dans la section « Critères » (Criteria). Cliquez sur le « X » de l'une de ces étiquettes pour la retirer de vos critères de recherche.
- Vous pouvez rechercher plusieurs valeurs dans un même champ en les séparant par des virgules. Par exemple, si vous souhaitez effectuer une recherche pour les comtés de Kern et d'Inyo, saisissez « Kern,Inyo » dans le champ correspondant au comté. :::tip

Pour revenir à la page des critères de recherche et affiner votre recherche, cliquez sur le bouton « Retour » de votre navigateur.

:::

#### Critères taxonomiques
Vous pouvez effectuer une recherche ici à l'aide du nom scientifique ou du ou des noms communs des spécimens qui vous intéressent. Dès que vous commencez à saisir un nom, une liste déroulante (basée sur le [thésaurus taxonomique](/User_Guide/taxonomic_thesaurus) du portail) s'affiche ; vous pouvez y sélectionner le taxon souhaité. Vous pouvez également saisir une valeur qui ne figure pas dans la liste déroulante. Pour effectuer une recherche par nom vernaculaire, sélectionnez « Common Name » (Nom vernaculaire) dans la liste déroulante **Taxon Type** (Type de taxon). Tous les portails Symbiota ne disposent pas de listes exhaustives de noms vernaculaires. Dans ce cas, la recherche par nom vernaculaire peut être limitée.

#### Critères de localité
Ce module permet d'effectuer des recherches par pays, État/province, comté, localité et altitude. Dès que vous commencez à saisir un nom, une liste déroulante (basée sur le [thésaurus géographique](/Portal_Manager_Guide/Geographic_Thesaurus/) du portail) s'affiche ; vous pouvez y sélectionner l'unité géographique souhaitée, le cas échéant. Vous pouvez également saisir une valeur qui ne figure pas dans la liste déroulante. Les recherches basées sur ces critères sont des recherches textuelles visant à faire correspondre la valeur saisie dans les champs de recherche aux valeurs présentes dans les champs correspondants des enregistrements. **Veuillez noter que le thésaurus taxonomique ne permet pas actuellement d'effectuer automatiquement des recherches incluant les synonymes géographiques.** Cela signifie qu'une recherche sur les enregistrements collectés dans le « NV » ne renverra pas tous les résultats correspondant aux enregistrements collectés dans le « Nevada », etc.

Sur certains portails, cette section offre également la possibilité d'effectuer des recherches à l'aide de polygones préchargés. Il s'agit de [polygones](https://support.esri.com/en-us/gis-dictionary/polygon) spatiaux revêtant une importance particulière pour la communauté du portail, tels que les limites de parcs, les zones de transfert de semences ou d'autres lieux d'intérêt. Si vous sélectionnez un polygone dans cette liste, votre recherche ne renverra que les enregistrements dont les coordonnées se situent à l'intérieur de ce polygone. Contactez l'administrateur de votre portail pour plus d'informations sur les polygones disponibles.

#### Latitude et longitude
Pour définir une zone de recherche (délimitée par une boîte englobante, un polygone ou un point avec rayon) basée sur la latitude et la longitude, saisissez les valeurs dans les champs prévus à cet effet ou cliquez sur le bouton approprié situé en haut de la section des critères de recherche « Latitude & Longitude » afin de créer la boîte, la forme ou le point avec rayon sur l'interface cartographique.

#### Critères relatifs à l'événement de collecte
Utilisez ce module pour rechercher des enregistrements en fonction du collecteur, du numéro de collecteur (courant pour les spécimens végétaux) et la date de collecte ou d'observation.

#### Propriétés du spécimen/de l'observation
Ici, vous pouvez effectuer une recherche par numéro de catalogue ou limiter vos critères aux enregistrements correspondant à des types (c.-à-d. ceux possédant une valeur dans le champ *TypeStatus*), aux enregistrements comportant des médias, des données génétiques, des coordonnées géographiques ou des échantillons de matériel (si cette option est activée sur votre portail). Vous pouvez également choisir d'inclure dans cette catégorie de critères les enregistrements concernant des spécimens cultivés ou en captivité.

#### Critères de traits
Pour plus d'informations sur les traits, [consultez cette page](/User_Guide/traits). Vous pouvez limiter votre recherche aux enregistrements présentant certaines valeurs pour des critères de traits. Dans les portails Symbiota, les « traits » désignent des caractéristiques propres à des spécimens donnés, telles que des mesures ou des informations spécifiques (ex. : phénologie, couleur, etc.). Notez que la recherche ne renverra que les enregistrements pour lesquels ces traits spécifiques ont été renseignés ; l'absence d'une valeur de trait pour un spécimen ne signifie pas nécessairement que ce trait ne s'applique pas à l'enregistrement. Par ailleurs, ce module fonctionne selon une logique « OU » : la sélection de plusieurs valeurs de traits renverra tous les enregistrements possédant **au moins l'un** de ces traits.

#### Associations
Pour des instructions détaillées sur l'utilisation de la recherche par associations, [consultez cette page](/User_Guide/associations). Ce module permet de rechercher des associations documentées entre des enregistrements et d'autres éléments, tels que d'autres spécimens ou observations, des références bibliographiques ou d'autres informations relatives au concept de « spécimen étendu » (*extended specimen*). La recherche renverra les enregistrements présentant un lien formel avec le taxon saisi dans le module Associations. L'absence d'une association spécifique dans le portail ne signifie pas nécessairement que cette association n'existe pas, par exemple dans le champ *associatedTaxon*.

#### Contexte géologique
Cette section du formulaire de recherche est disponible si un portail complet est configuré pour la gestion et le partage de données sur des spécimens de fossiles. Elle permet aux utilisateurs de rechercher des enregistrements d'occurrences associés à des informations lithostratigraphiques (*Groupe*, *Formation*, *Membre*, *Couche*) et chronostratigraphiques (*Intervalle de début*, *Intervalle de fin*).

Voici quelques conseils pour utiliser cette section du formulaire de recherche :
- Pour interroger correctement les champs *Intervalle de début* et *Intervalle de fin*, l'utilisateur doit spécifier des valeurs dans les deux champs, même si ces valeurs sont identiques. Par exemple, les requêtes *Intervalle de début* = « Jurassique » et *Intervalle de fin* = « Crétacé » **ou** *Intervalle de début* = « Jurassique » et *Intervalle de fin* = « Jurassique » sont toutes deux valides, alors que laisser l'un des champs vide ou nul entraînera une erreur.
- Les résultats de recherche basés sur l' *Intervalle de début* et l' *Intervalle de fin* incluront tous les enregistrements associés aux intervalles de temps spécifiés. Par exemple, une recherche avec *Intervalle de début* = « Crétacé » et *Intervalle de fin* = « Crétacé » renverra tous les enregistrements dont la valeur *Intervalle de fin* **ou** *Intervalle de début* chevauche la période du Crétacé (échelle des temps géologiques) ; cela inclut les enregistrements catalogués de « Crétacé » à « Crétacé », mais aussi ceux catalogués de « Jurassique » à « Crétacé », de « Campanien » à « Maastrichtien », de « Crétacé supérieur » à « Paléocène », parmi de nombreuses autres combinaisons possibles.
- Sauf indication contraire sur un portail Symbiota donné, les valeurs par défaut pour *Intervalle de début* et *Intervalle de fin* sont basées sur l' [Échelle chronostratigraphique internationale de la Commission internationale de stratigraphie](https://stratigraphy.org/chart).
- Les mêmes contraintes s'appliquent aux recherches effectuées via l'interface de [Recherche sur carte](#map-search).


#### Critères de caractères taxonomiques
Cette section permet de rechercher des enregistrements appartenant à des taxons présentant certaines caractéristiques. Dans les portails Symbiota, les « caractères » sont définis comme des caractéristiques propres au taxon ; il peut s'agir, par exemple, du « port de la plante » pour une espèce ou de la « présence d'élytres » pour certaines espèces d'insectes. Veuillez noter que la recherche ne renverra que les enregistrements correspondant à des taxons pour lesquels ces caractères spécifiques ont été renseignés ; l'absence d'une valeur de caractère donnée pour un taxon ne signifie pas nécessairement que cette valeur ne s'y applique pas. Ce module effectue une recherche de type « ET » (intersection) : la sélection de plusieurs valeurs de caractère affichera uniquement les enregistrements présentant l'ensemble de ces états de caractère. Pour plus d'informations sur les caractères et les états de caractère, consultez les pages relatives aux [clés d'identification](/User_Guide/Identification_Keys/).

:::tip

Pour afficher les résultats sous forme de tableau ou pour les trier, cliquez sur le bouton d'affichage en tableau. ![Bouton d'affichage en tableau](/img/table.png) Dans la zone « Résultats de la recherche » située en haut de la page, sélectionnez le champ principal de tri, un champ de tri secondaire (le cas échéant), puis choisissez l'ordre de tri (croissant ou décroissant). Cliquez ensuite sur « Trier ». Pour revenir à l'affichage en liste, cliquez sur le bouton d'affichage en liste. ![Bouton d'affichage en liste](/img/list.png)

:::

## Recherche sur carte
| ![Affichage de la recherche sur carte](/img/search5.png) |
| :-------------------------------------: |
| Interface de recherche sur carte accessible au public sur les portails Symbiota |

Selon le portail, la fonction de recherche sur carte peut se trouver sous l'option de menu « Rechercher dans les collections » ou apparaître comme une option de menu distincte sur la page d'accueil.

Cliquez sur le bouton « Ouvrir le panneau de recherche » dans le coin supérieur gauche. Une fois le panneau ouvert, vous pouvez y saisir les mêmes types de critères que ceux disponibles dans la recherche standard (décrite ci-dessus). Cliquez ensuite sur le bouton « Rechercher ».

Pour sélectionner des collections spécifiques dans lesquelles effectuer votre recherche, choisissez l'onglet « Collections » du panneau de recherche, puis cochez ou décochez les cases correspondant aux collections souhaitées.

D'autres personnalisations sont possibles dans l'onglet « Options de carte » du panneau de recherche, notamment la taille de la grille et la taille minimale des regroupements (clusters). Ces paramètres influencent le nombre de spécimens regroupés sur la carte. Vous pouvez également désactiver le regroupement dans cet onglet.

Les portails configurés pour la gestion et le partage de données sur des spécimens fossiles peuvent afficher des champs supplémentaires dans le panneau des critères de recherche sur carte (_Groupe_, _Formation_, _Membre_, _Couche_, _Intervalle (début)_, _Intervalle (fin)_). Les instructions relatives à la section [Contexte géologique](#geological-context) du formulaire de recherche publique principal s'appliquent également aux champs de contexte géologique de l'interface de recherche sur carte.

Une fois la recherche effectuée, vous pouvez consulter la liste des spécimens en cliquant sur le bouton « Ouvrir le panneau de recherche » et en accédant à l'option de menu « Enregistrements et taxons ». Vous pouvez également télécharger les fiches des spécimens, télécharger un fichier KML de ces données ou générer un lien partageable vers les résultats de la recherche en cliquant sur les boutons correspondants sur cette page.

:::tip

Lors de l'utilisation de la recherche sur carte, survolez l'icône des couches (☰) dans le coin supérieur droit de la carte pour activer ou désactiver des couches cartographiques supplémentaires.
![Affichage de la recherche sur carte](/img/search_layers.png)

:::

## Recherche inter-portails

:::note

Cette fonctionnalité n'est pas disponible sur tous les portails.

:::

Certains portails offrent la possibilité d'effectuer des recherches non seulement dans leur propre base de données, mais aussi dans celle d'un autre portail Symbiota connecté. Cette option est disponible uniquement dans l'interface de recherche sur carte. Pour utiliser cette fonctionnalité, accédez à la fonction de recherche cartographique (« Map Search ») de votre portail et cochez la case « Enable Cross Portal Search » (Activer la recherche inter-portails). Une liste déroulante des portails disponibles pour la recherche ainsi qu'un nouveau champ « Taxa » (Taxons) apparaîtront alors. Sélectionnez le portail souhaité (il n'y en aura probablement qu'un seul) et saisissez le nom du ou des taxons que vous souhaitez rechercher dans l'autre portail. Le champ « Taxa » situé tout en haut du formulaire s'appuie sur le référentiel taxonomique de votre portail actuel, tandis que le champ « Taxa » situé sous l'option de recherche inter-portails utilise le référentiel taxonomique de l'autre portail (celui sélectionné dans la liste déroulante).

![Case à cocher de recherche inter-portails](/img/crossportalsearch.png)

La carte générée affichera les résultats provenant des deux portails interrogés. Par défaut, les points sont colorés en fonction du taxon. Pour colorer les points selon le portail, cliquez sur l'onglet « Portal List » (Liste des portails), puis sur le bouton « Auto Color » (Coloration automatique).

L'onglet « Records » (Enregistrements) listera toutes les données du portail que vous consultez actuellement, tandis que l'onglet « External Records » (Enregistrements externes) listera toutes les données provenant du portail externe également interrogé.

## Recherche rapide

:::note

Grâce aux formulaires de recherche rapide, vous pouvez rechercher plusieurs taxons (valeurs _scientificName_) ou, le cas échéant, des numéros de catalogue (valeurs _Catalog Number_) en saisissant vos critères sous forme de liste séparée par des points-virgules (par ex. « Rosa abietorum;Rosa alba » ou « 100;1000 »).

:::

### Par portail

Certains portails Symbiota proposent, sur leur page d'accueil, un formulaire de recherche rapide de taxons couvrant l'ensemble du portail. Utilisez ce formulaire pour rechercher tous les enregistrements de spécimens du portail liés au référentiel taxonomique central ; pour ce faire, saisissez votre recherche directement dans le champ prévu à cet effet et cliquez sur le bouton « Search » (Rechercher). Si vous commencez à saisir un nom scientifique dans ce champ sans qu'une liste déroulante n'apparaisse (voir ci-dessous), cela signifie que le taxon recherché n'existe pas dans le référentiel taxonomique du portail.
![Recherche rapide sur la page d'accueil](/img/quicksearch_homepage.png)
![Recherche rapide sur la page d'accueil](/img/quicksearch_dropdown.png)

### Par collection

Tout comme les formulaires de recherche rapide à l'échelle du portail décrits ci-dessus, certains portails Symbiota intègrent des formulaires de recherche rapide dans les profils de collection afin de faciliter la recherche d'enregistrements au sein de jeux de données spécifiques. Actuellement, ces formulaires permettent d'effectuer des recherches dans un profil de collection donné en utilisant le numéro de catalogue (_Catalog Number_) ou le nom scientifique (_Scientific Name_ / Taxon).

![Recherche rapide sur la page d'accueil](/img/quicksearch_collprofile.png)
