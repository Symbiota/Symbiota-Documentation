---
title: "Annotations / Déterminations"
date: 2021-10-26
lastmod: 2026-03-30
sidebar_position: 10
authors: ["Katie Pearson"]
keywords: ["edit", "annotation", "identification", "determination"]
---

:::info

Cette page explique comment ajouter des annotations, soit individuellement, soit par lot.

:::

Les **annotations** (également appelées **déterminations**) dans les portails Symbiota sont des identifications taxonomiques fournies pour une occurrence.

### Ajout de déterminations/annotations individuelles

Pour annoter une fiche individuelle ou ajouter des déterminations antérieures, accédez au spécimen dans l'éditeur d'occurrences (_cliquez sur « Mon profil », puis sur le nom de la collection dans le bloc « Gestion des collections » > « Modifier les fiches existantes »_) et cliquez sur l'onglet « Historique des déterminations ». Si aucune annotation antérieure n'existe, un message indiquant « Il n'y a pas d'historique d'annotations pour ce spécimen » s'affichera, accompagné d'un bloc intitulé « Ajouter une nouvelle détermination ». Si une annotation existe déjà pour le spécimen, elle sera visible. Cliquez sur l'icône « plus » pour ajouter une nouvelle annotation.

![Exemple d'historique des déterminations](/img/dethistoryexample.png)

Dans le bloc « Ajouter une nouvelle détermination », saisissez au minimum le nom scientifique, le déterminateur (la personne ayant identifié le spécimen, si elle est connue ; saisissez « inconnu » dans le cas contraire) et la date (ou « n.d. » si elle est inconnue). Vous pouvez également ajouter un [qualificatif d'identification](https://dwc.tdwg.org/terms/#dwc:identificationQualifier) ​​(par ex. « cf. » ou « aff. »), une référence et des notes, ainsi que sélectionner un niveau de confiance pour la détermination, si vous le souhaitez. Par défaut, si la date de détermination est plus récente que la précédente, la case « Définir comme détermination actuelle » sera cochée automatiquement une fois que vous aurez déplacé le curseur hors du champ de la date. Si vous souhaitez que cette détermination soit l'identification la plus récente pour le spécimen, laissez cette case cochée (ou cochez-la si elle ne l'a pas été automatiquement).

:::tip

Après avoir saisi une date, veillez à appuyer sur la touche « Tabulation » de votre clavier ou à cliquer sur le champ suivant. Cela déclenchera le cochage de la case « Définir comme détermination actuelle », le cas échéant.

:::

Si vous souhaitez imprimer cette étiquette d'annotation maintenant ou ultérieurement, cochez également la case « Ajouter à la file d'attente d'impression des annotations ». Cliquez sur « Soumettre la détermination ». ![Formulaire d'ajout d'une nouvelle détermination](/img/addnewdetermination2025.png)

:::note

Si le spécimen disposait déjà d'une identification et que vous avez coché la case « Définir comme détermination actuelle », une annotation historique sera automatiquement ajoutée à la fiche, comme le montre la capture d'écran suivante. Par conséquent, il n'est pas nécessaire d'ajouter manuellement une détermination historique avant d'en ajouter une nouvelle.

:::

### Ajout en lot d'annotations/déterminations

Vous pouvez ajouter plusieurs annotations simultanément à l'aide de l'outil « Ajouter des déterminations/ajustements nomenclaturaux en lot » (Add Batch Determinations/Nomenclatural Adjustments). Accédez à cet outil via le panneau de configuration de l'éditeur de données (_cliquez sur « Mon profil » [My Profile], puis sur le nom de la collection dans la zone « Gestion des collections » [Collection Management]_), puis cliquez sur « Ajouter des déterminations/ajustements nomenclaturaux en lot ». Pour sélectionner les spécimens auxquels les données de détermination seront ajoutées (section « Définir l'ensemble de spécimens » ou *Define Specimen Recordset*), saisissez soit une liste de numéros de catalogue (séparés par des virgules) dans le champ « Numéro de catalogue » (*Catalog Number*), soit un taxon à évaluer en saisissant son nom dans le champ « Taxon ». Cliquez sur le bouton « Ajouter le(s) enregistrement(s) à la liste » (*Add Record(s) to List*).

![Formulaire de recherche pour l'annotation en lot](/img/addbatchannotations2025.png)

Un tableau des spécimens correspondant au taxon indiqué apparaîtra sous la zone « Définir l'ensemble de spécimens » (voir la capture d'écran ci-dessous). Vous pouvez ensuite sélectionner tous les spécimens que vous souhaitez annoter en cochant ou décochant les cases situées dans la colonne la plus à gauche du tableau. Utilisez la case « Sélectionner/Désélectionner tous les spécimens » (*Select/Deselect all Specimens*) pour décocher ou cocher toutes les cases si vous préférez sélectionner les spécimens un par un.

![Formulaire de saisie pour l'annotation en lot](/img/batchannotationform2025.png)

Ajoutez des informations concernant le changement de nom dans la zone « Détails de la nouvelle détermination » (*New Determination Details*).

- Indiquez si le changement est dû à une nouvelle identification (« Ajustement/Vérification de l'identification » ou *Identification Adjustment/Verification*) ou à un changement nomenclatural (« Ajustement nomenclatural » ou *Nomenclatural Adjustment*).
- (Facultatif) Ajoutez un qualificatif d'identification (par ex. « aff. » ou « cf. »). Voir le terme [identificationQualifier](https://dwc.tdwg.org/terms/#dwc:identificationQualifier) ​​du standard Darwin Core.
- Saisissez le nouveau nom scientifique dans le champ « Nom scientifique » (*Scientific Name*). Le champ « Auteur » (*Author*) se remplira automatiquement si le taxon figure déjà dans la table des taxons. Si le taxon ne s'y trouve pas, vous devrez saisir manuellement l'auteur du nom scientifique. - Ajoutez le nom du déterminateur (la personne ayant identifié l'enregistrement) dans le champ « Déterminateur » (voir le terme Darwin Core [identifiedBy](https://dwc.tdwg.org/terms/#dwc:identifiedBy)).
- Saisissez la date complète de la détermination dans le champ « Date » (voir le terme Darwin Core [dateIdentified](https://dwc.tdwg.org/terms/#dwc:dateIdentified)). Il est recommandé d'utiliser le format AAAA-MM-JJ si possible. Si seule l'année est connue, saisissez-la. Si l'année et le mois sont connus, saisissez-les au format AAAA-MM.
- (Facultatif) Indiquez le niveau de confiance de la détermination (Faible, Moyen ou Élevé) dans le champ « Confiance de la détermination ». Ce champ est destiné à un usage interne de conservation et n'est pas inclus dans les exportations d'archives Darwin Core.
- (Facultatif) Indiquez les références utilisées pour la détermination dans le champ « Référence ». (Voir le terme Darwin Core [identificationReferences](https://dwc.tdwg.org/terms/#dwc:identificationReferences))
- (Facultatif) Ajoutez toute autre remarque dans le champ « Notes ». (Voir le terme Darwin Core [identificationRemarks](https://dwc.tdwg.org/terms/#dwc:identificationRemarks))

Si vous cochez la case « Définir comme détermination actuelle », le nom scientifique sera mis à jour pour les enregistrements sélectionnés. Dans le cas contraire, la détermination sera ajoutée aux fiches des spécimens, mais le nom d'identification courant restera inchangé.

Si vous souhaitez imprimer ultérieurement des étiquettes d'annotation, cochez la case « Ajouter à la file d'attente d'impression des annotations ».
