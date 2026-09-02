---
title: "Numéros de catalogue"
date: 2022-02-28
lastmod: 2026-01-30
sidebar_position: 30
authors: ["Katie Pearson, Ed Gilbert"]
keywords:
  [
    "edit",
    "fields",
    "data fields",
    "terms",
    "dwc terms",
    "catalog number",
    "tag names",
  ]
---

:::info

Cette page décrit l'utilisation des champs « Catalog Number » (Numéro de catalogue) et « Other Catalog Numbers » (Autres numéros de catalogue) dans les portails Symbiota.

:::

### Numéros de catalogue (Catalog Numbers)

Il est important d'attribuer un numéro de catalogue à chaque enregistrement, car il sert d'identifiant unique. Ce champ doit être utilisé pour enregistrer le code-barres ou le numéro d'acquisition (pour les herbiers uniquement). Ce numéro doit être unique au sein de chaque collection ; pour ce faire, on peut par exemple inclure l'acronyme de la collection (ex. : ASU00012345, WIS-L-001456). L'utilisation de zéros non significatifs (zéros de remplissage) est recommandée pour permettre un tri correct dans l'interface Symbiota.

### Nom de l'étiquette / Valeur de l'identifiant supplémentaire (= Autres numéros de catalogue)

Comme les spécimens peuvent être associés à plusieurs numéros de catalogue ou identifiants, les portails Symbiota disposent d'un outil permettant de saisir plusieurs valeurs pour le champ « Other Catalog Number » (Autre numéro de catalogue). Dans l'éditeur d'occurrence (Occurrence Editor), cet outil se trouve à droite du champ « Catalog Number » et comprend des cases pour le « Tag Name » (Nom de l'étiquette) et la « Additional Identifier Value » (Valeur de l'identifiant supplémentaire).

![Autres numéros de catalogue](/img/othercatalognumbertag2026.png)

Le champ **Tag Name** (Nom de l'étiquette) est un champ _facultatif_ permettant d'indiquer le type d'identifiant attribué au spécimen. Les noms d'étiquettes sont généralement propres à chaque collection (il n'existe pas de valeurs recommandées). Parmi les étiquettes courantes, on peut citer : Previous Catalog Number (Ancien numéro de catalogue), Old Catalog #, Accession Number (Numéro d'acquisition), NPS #, NPS Accession #, Secondary OccurrenceID, etc. Vous pouvez laisser le champ **Tag Name** vide si vous ne souhaitez pas préciser le type d'identifiant ou d'autre numéro de catalogue.

Le champ **Additional Identifier Value** (Valeur de l'identifiant supplémentaire) permet de saisir la valeur alphanumérique de l'autre numéro de catalogue ou de l'identifiant supplémentaire. Par exemple, si vous disposez d'un ancien numéro d'acquisition « 45678 », vous pouvez saisir « Accession # » dans le champ **Tag Name** et « 45678 » dans le champ **Additional Identifier Value**. Vous pouvez également laisser le champ **Tag Name** vide et saisir uniquement une valeur dans le champ **Additional Identifier Value**.

:::note

Ces outils ont été lancés en mars 2022 et sont en cours de développement actif. Par conséquent, certaines fonctionnalités sont encore en phase de déploiement. En particulier, une recherche fondée sur les « autres numéros de catalogue » peut donner des résultats incomplets tant que toutes les valeurs de ce champ n'auront pas été transférées vers le nouveau système combinant « nom de balise » et « valeur d'identifiant supplémentaire ».

:::

#### Comment rechercher des « Autres numéros de catalogue » ?

Les valeurs saisies dans le système **Nom de l'étiquette** (Tag Name) + **Valeur de l'identifiant supplémentaire** (Additional Identifier Value) s'affichent dans le champ **Autre numéro de catalogue** (Other Catalog Number) lors de l'affichage sous forme de tableau d'une recherche standard. Comme les champs **Nom de l'étiquette** et **Valeur de l'identifiant supplémentaire** sont distincts, vous pouvez rechercher des valeurs d'« Autre numéro de catalogue » sans avoir à inclure le nom de l'étiquette de l'identifiant. Par exemple, si vous recherchez l'« Autre numéro de catalogue » « 12345 », les résultats incluront des éléments tels que « Accession #: 12345 » et « NPS #: 12345 ». _La recherche s'effectuera sur la base du numéro ou de la valeur, plutôt que sur le nom de l'étiquette_.

#### Quelle est la différence entre le champ **Autre numéro de catalogue** et le système **Nom de l'étiquette** + **Valeur de l'identifiant supplémentaire** ?

Sur le plan technique, le champ « Autre numéro de catalogue » était un champ de texte unique, tandis que le nouveau système « Nom de l'étiquette + Valeur de l'identifiant supplémentaire » correspond à une nouvelle table dans le schéma Symbiota (c'est-à-dire la structure de la base de données). Toutefois, pour l'utilisateur, la fonction de ces deux systèmes est essentiellement la même. Le système **Nom de l'étiquette** + **Valeur de l'identifiant supplémentaire** a été créé pour permettre une recherche plus intelligente des valeurs d'« Autre numéro de catalogue ». Les valeurs saisies dans ce système s'affichent dans le champ **Autre numéro de catalogue** lors de l'affichage sous forme de tableau d'une recherche standard. Le nom de l'étiquette (s'il existe) apparaît en premier, suivi d'un deux-points, puis de la valeur de l'identifiant supplémentaire (par ex. : « NPS Accession #: 98765 »). En présence de plusieurs identifiants, ceux-ci sont concaténés dans le champ « Autre numéro de catalogue » et séparés par des points-virgules (par ex. : « NPS Accession #: 98765 ; Voucher Number: 12345 »). #### Comment les **noms d'étiquette** (Tag Names) et les **valeurs d'identifiant supplémentaire** s'affichent-ils lors d'une recherche ?

Les valeurs saisies dans le système **Nom d'étiquette** + **Valeur d'identifiant supplémentaire** apparaissent dans le champ **Autre numéro de catalogue** (Other Catalog Number) lors de l'affichage des résultats d'une recherche standard sous forme de tableau. Le nom d'étiquette (s'il existe) est indiqué en premier, suivi d'un deux-points, puis de la valeur d'identifiant supplémentaire (par ex. « NPS Accession #: 98765 »). En présence de plusieurs identifiants, ceux-ci sont regroupés dans le champ « Autre numéro de catalogue » et séparés par des points-virgules (par ex. « NPS Accession #: 98765; Voucher Number: 12345 »).

#### Comment les **noms d'étiquette** et les **valeurs d'identifiant supplémentaire** s'affichent-ils lors du téléchargement des données ?

Tout comme lors d'une recherche portant sur le champ « Autre numéro de catalogue », les valeurs saisies dans le système **Nom d'étiquette** + **Valeur d'identifiant supplémentaire** apparaissent dans le champ **Autre numéro de catalogue**. Le nom d'étiquette (s'il existe) est indiqué en premier, suivi d'un deux-points, puis de la valeur d'identifiant supplémentaire (par ex. « NPS Accession #: 98765 »). En présence de plusieurs identifiants, ceux-ci sont regroupés dans le champ « Autre numéro de catalogue » et séparés par des points-virgules (par ex. « NPS Accession #: 98765; Voucher Number: 12345 »). C'est également ainsi que les données sont présentées dans une archive Darwin Core.

### Doublons de numéros de catalogue et d'autres numéros de catalogue

Les administrateurs de collection peuvent identifier et résoudre les doublons de numéros de catalogue ou d'autres numéros de catalogue à l'aide des [outils de nettoyage des données](/Collection_Manager_Guide/Data_Cleaning/compare_duplicate_ids).
