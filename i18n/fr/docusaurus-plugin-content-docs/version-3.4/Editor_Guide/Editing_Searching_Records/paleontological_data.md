---
title: "Données sur le spécimen fossile"
date: 2025-07-22
lastmod: 2025-10-13
authors: ["Lindsay Walker"]
editors: ["Lindsay Walker, Katie Pearson"]
sidebar_position: 60
keywords: ["paleontology", "paleo", "fossil", “geological context”]
---

:::info

Cette page explique comment ajouter et modifier des données associées aux occurrences de spécimens fossiles. Les fonctionnalités décrites ici ne seront visibles que si les options relatives aux collections paléontologiques ont été configurées sur votre portail.

:::

:::info

⚠️ **Les spécimens fossiles nécessitent des données différentes de celles des collections biologiques récentes (ou « [néontologiques](https://www.merriam-webster.com/dictionary/neontology) »).** Pour obtenir des conseils spécifiques à la discipline concernant la numérisation et la gestion générale des données de collections paléontologiques, veuillez consulter le [Paleo Data Knowledge Hub](https://paleo-data.github.io).

:::

## Présentation

![Module Paléo](/img/occeditor_paleo2025.png)
Les informations spécifiques aux spécimens fossiles, telles que l'âge géologique et les unités lithostratigraphiques, peuvent être saisies dans la section « Paléontologie » du formulaire de l'Éditeur d'occurrences (souvent appelé familièrement « module Paléo »). Avant de saisir des données relatives aux spécimens fossiles, les éditeurs de données sont invités à consulter les [définitions des champs de données associés](/Editor_Guide/Editing_Searching_Records/symbiota_data_fields#paleontology). Des instructions supplémentaires sur la saisie directe de données spécifiques aux fossiles (pour ce module comme pour l'ensemble de l'Éditeur d'occurrences) sont disponibles sur le [Paleo Data Knowledge Hub](https://paleo-data.github.io/how-to-guides/manage-data-about-specimens-using-symbiota).

## Saisie de données chronostratigraphiques
Les données relatives au temps géologique (par ex. données chronostratigraphiques ou chronométriques) peuvent être saisies dans plusieurs champs, notamment : _[Early Interval](/Editor_Guide/Editing_Searching_Records/symbiota_data_fields#early-interval-and-late-interval)_ (Intervalle de début), _[Late Interval](/Editor_Guide/Editing_Searching_Records/symbiota_data_fields#early-interval-and-late-interval)_ (Intervalle de fin), _[Absolute Age](/Editor_Guide/Editing_Searching_Records/symbiota_data_fields#absolute-age)_ (Âge absolu) et _[Local Stage](/Editor_Guide/Editing_Searching_Records/symbiota_data_fields#local-stage)_ (Étage local).

![Vue des données publiques](/img/occeditor_paleogeotime2025.png)

Afin de favoriser l'interopérabilité des données, les champs *Early Interval* (intervalle de début) et *Late Interval* (intervalle de fin) reposent sur un vocabulaire contrôlé et normalisé au sein d'un portail Symbiota donné. Sauf indication contraire de la part de l'administrateur de votre portail, les valeurs par défaut pour ce tableau sont basées sur l'**Échelle chronostratigraphique internationale** de la Commission internationale de stratigraphie (ICS) ([stratigraphy.org/chart](https://stratigraphy.org/chart)).

Voici quelques points importants à connaître avant de saisir des données relatives au temps géologique :
- Chaque valeur saisie dans *Early Interval* doit avoir une valeur correspondante dans *Late Interval*, même si les deux valeurs sont identiques.
- Les valeurs saisies dans *Early Interval* et *Late Interval* doivent être logiques ; autrement dit, la valeur *Early Interval* doit être identique à la valeur *Late Interval* ou géologiquement plus ancienne qu'elle.
- Une fois la saisie effectuée correctement, un tableau s'affichera pour présenter les valeurs de rang supérieur automatiquement renseignées par le portail (par ex. : éon, ère, etc.). Si une valeur saisie n'est pas conforme au vocabulaire des temps géologiques utilisé par le portail, le tableau ne s'affichera pas et un message d'erreur pourrait apparaître.
Encore une fois, veuillez vous référer à l'échelle des temps géologiques de l'ICS ([stratigraphy.org/chart](https://stratigraphy.org/chart)) lors de la saisie de ces valeurs, sauf instruction contraire de l'administrateur de votre portail. Notez que les termes « Late » (récent/supérieur) et « Early » (ancien/inférieur) sont privilégiés par rapport à « Upper » et « Lower » (par ex. : « Late Cretaceous » est préférable à « Upper Cretaceous »).

Exemple :
| *Early Interval* | *Late Interval* | Remarque |
| - | - | - |
| `Eocene` | `Oligocene` | ✅ Saisie correcte |
| `Eocene` | `Eocene` | ✅ Saisie correcte |
| `Oligocene` | `Eocene` | ❌ Ordre illogique |
| `Eocene` | (vide/null) | ❌ Valeurs nulles non autorisées |
| (vide/null) | `Oligocene` | ❌ Valeurs nulles non autorisées |

:::tip

Un avertissement s'affichera si les valeurs saisies pour *Early Interval* et *Late Interval* sont incorrectes.

:::

### Que faire si je dispose d'une valeur liée au temps géologique qui ne figure pas dans la liste ?
De nombreux spécimens de fossiles sont accompagnés d'étiquettes, de notes de terrain et d'autres sources de données primaires contenant des valeurs qui n'apparaissent pas dans les vocabulaires contrôlés définis pour les champs *Early Interval* (Intervalle de début) et *Late Interval* (Intervalle de fin). Il peut s'agir, par exemple, de valeurs à portée régionale (ex. : `Wolfcampian`), de termes obsolètes (ex. : `Tertiary`, `Late Permian`), d'usages informels (ex. : `Precambrian`) ou de mentions indiquant une incertitude (ex. : `Cretaceous?`), entre autres cas de figure. Ces informations sont importantes et doivent être consignées ; toutefois, elles ne doivent **pas** être saisies dans les champs *Early Interval* et *Late Interval* de Symbiota, comme expliqué précédemment. **Veuillez consulter les instructions ci-dessous pour savoir comment traiter les valeurs qui ne figurent pas dans les listes *Early Interval* ou *Late Interval*.**

#### Valeurs acceptées au niveau régional
Les valeurs issues d'échelles de temps acceptées régionalement (comme celles figurant dans [ces listes](https://paleobiodb.org/classic/displayTimescale?type=list)) doivent être saisies dans le champ *[Local Stage](/Editor_Guide/Editing_Searching_Records/symbiota_data_fields#local-stage)* (Étage local). Outre l'utilisation de *Local Stage* pour enregistrer ces termes régionaux, indiquer les valeurs chronologiquement équivalentes dans les champs *Early Interval* et *Late Interval* permettra une meilleure visibilité de vos enregistrements (au sein de Symbiota comme à l'extérieur).

Exemples :
| *Early Interval* | *Late Interval* | **_Local Stage_** | Explication |
| - | - | - | - |
| `Asselian` | `Asselian` | `Nealian` | `Nealian` est spécifique au Permien d'Amérique du Nord |
| `Tremadocian` | `Tremadocian` | `Tremadoc` | `Tremadoc` est spécifique à l'Ordovicien de Grande-Bretagne |
| `Ypresian` | `Lutetian` | `Wasatchian-Bridgerian` | `Wasatchian` et `Bridgerian` sont des âges basés sur les mammifères terrestres, spécifiques à l'Amérique du Nord | #### Incertitude, valeurs non normalisées et cas similaires
En l'absence de terme normalisé approprié pour consigner ces données, les valeurs textuelles brutes (telles qu'elles apparaissent à la source) indiquant une incertitude ou une terminologie obsolète doivent être saisies dans le champ _Stratigraphic Remarks_ sous la forme d'un couple clé-valeur (illustré ci-dessous) afin de permettre un traitement informatique ultérieur.

Par exemple :
| _Early Interval_ | _Late Interval_ | **_Stratigraphic Remarks_** |
| - | - | - |
| `Late Miocene` | `Late Miocene` | `[VERBATIM CHRONOSTRATIGRAPHY: Upper Mio?]` |
| `Permian` | `Permian` | `[VERBATIM CHRONOSTRATIGRAPHY: Late Permian?]` |
| `Paleogene` | `Neogene` | `[VERBATIM CHRONOSTRATIGRAPHY: Tertiary]` |

## Interroger les données sur les spécimens de fossiles
Lorsqu'un portail est configuré pour la gestion et le partage de données sur des spécimens de fossiles, il est possible d'interroger les données de contexte géologique associées aux collections de fossiles :
1) En utilisant le formulaire de recherche publique et l'interface de recherche cartographique de votre portail ([instructions](/User_Guide/searching_records#geological-context))
2) En utilisant le formulaire de recherche de l'éditeur de données ([instructions](/Editor_Guide/Editing_Searching_Records/))

:::tip

La principale différence entre l'utilisation des formulaires de recherche publics et celle du formulaire de recherche de l'éditeur de données pour récupérer des notices de spécimens fossiles réside dans la manière dont ils traitent les données liées au temps géologique (c.-à-d. *Early Interval* et *Late Interval*). Plus précisément, les formulaires de recherche publics produisent des résultats **incluant les subdivisions temporelles**, tandis que le formulaire de recherche de l'éditeur de données produit des résultats **littéraux** (correspondance exacte).

Par exemple :
- Si vous souhaitez trouver toutes les notices où « Paléocène » est la valeur littérale/réelle saisie pour *Early Interval* ou *Late Interval*, utilisez le formulaire de recherche de l'éditeur de données.
- Si vous souhaitez trouver toutes les notices associées à l'époque du Paléocène, utilisez le formulaire de recherche publique ; celui-ci renverra non seulement les notices où « Paléocène » a été saisi pour *Early Interval* (ou *Late Interval*), mais aussi celles saisies comme « Danien » ou tout autre intervalle de temps géologique [inclus dans le Paléocène](https://stratigraphy.org/chart/?target=ischart:Paleocene).

:::
