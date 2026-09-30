---
title: "Ajout de taxons à la liste de contrôle"
date: 2021-10-14
lastmod: 2024-12-11
authors: ["Neil Cobb", "Katie Pearson"]
draft: false
sidebar_position: 5
keywords: ["checklist", "inventory", "flora"]
---

import ReactPlayer from "react-player";

:::info

Cette page explique comment ajouter des taxons (espèces) à une liste de contrôle (checklist) dans un portail Symbiota.

:::

Il existe trois façons d'ajouter des taxons à une liste de contrôle : en interrogeant le portail pour trouver des taxons répondant à vos critères de recherche, en ajoutant des taxons individuellement, ou en téléversant par lots une liste de taxons et de notes.

### Ajout par lots de taxons via une recherche sur le portail

Cette méthode est recommandée si vous n'avez pas encore préparé de liste de taxons et que vous souhaitez constituer une liste de contrôle à partir des occurrences présentes dans le portail. Vous pouvez définir certains critères de recherche (par exemple, un lieu ou un polygone dans l'interface cartographique), visualiser les résultats de cette recherche et ajouter les taxons (et/ou les spécimens de référence/« vouchers ») qui correspondent à vos critères.

1. Sur la page de la liste de contrôle, cliquez sur l'icône en forme de crayon avec un « v » (au centre, intitulée « Manage Linked Vouchers » / « Gérer les spécimens de référence associés ») située en haut à droite de la page. Vous accéderez ainsi aux outils de gestion des spécimens de référence.
2. Si c'est la première fois que vous définissez des critères de recherche, une boîte intitulée « Edit Search Statement » (Modifier la requête de recherche) apparaîtra. Utilisez les champs disponibles pour définir les critères de recherche des occurrences que vous souhaitez afficher. Par exemple, vous pouvez indiquer un État ou un comté, un taxon, une zone géographique (bounding box) ou toute combinaison de ces champs (ou d'autres champs supplémentaires). 
- Si vous avez déjà créé une requête de recherche, vous pouvez la modifier en cliquant sur l'icône en forme de loupe située en haut de la page.

:::tip

Veillez à ce que votre requête de recherche soit suffisamment large pour obtenir le nombre maximal de spécimens ; moins il y a de critères, mieux c'est. Par exemple, plutôt que d'indiquer à la fois « United States » dans le champ **country** (pays) et « Arizona » dans le champ **state** (État), essayez d'utiliser uniquement « Arizona » dans le champ **state** ; ainsi, même les enregistrements indiquant « USA » ou « United States of America » seront inclus dans vos résultats. Il vous faudra probablement effectuer plusieurs recherches pour garantir un résultat complet (par exemple, effectuez une recherche pour « AZ » ainsi qu'une autre pour « Arizona »).

:::

![Requête de recherche pour la liste de contrôle](/img/checklistsearchstatement.png)

:::warning

Si vous restreignez votre recherche en fonction des coordonnées géographiques, **_vos résultats se limiteront aux spécimens disposant de données de coordonnées_**. Selon le portail, cela peut ne représenter que 30 à 50 % des enregistrements disponibles.

:::

3. Une fois vos critères de recherche définis, cliquez sur l'onglet « Taxons manquants » (Missing Taxa).
4. Dans la liste déroulante « Mode d'affichage » (Display Mode), sélectionnez « Association par lots » (Batch Linking).

![Mode d'affichage de l'onglet Taxons manquants](/img/checklistdisplaymode.jpg)

Vous verrez alors un tableau contenant les 1000 premiers enregistrements correspondant à vos critères de recherche et représentant des taxons qui ne figurent pas encore dans votre liste de contrôle. Pour ajouter des taxons à la liste de contrôle depuis cette page, cochez les cases situées à côté des spécimens de référence (vouchers) dont vous souhaitez ajouter les noms taxonomiques à votre liste (cochez la case dans le coin supérieur gauche du tableau pour sélectionner tous les enregistrements du tableau).

5. Pour ajouter **_uniquement_** les noms taxonomiques représentés par ces spécimens à votre liste de contrôle, cochez la case « Ajouter les noms sans associer les spécimens » (Add names without linking vouchers), puis cliquez sur le bouton « Soumettre les spécimens » (Submit Vouchers). Pour ajouter les noms taxonomiques **_et_** associer les spécimens à votre liste de contrôle, laissez cette case décochée et cliquez sur le bouton « Soumettre les spécimens ».

![Options pour ajouter des taxons et/ou des spécimens à une liste de contrôle](/img/checklistsubmitvouchers.jpg)

6. Après avoir associé les taxons souhaités, actualisez la liste et associez le lot suivant si nécessaire, jusqu'à ce que tous les noms taxonomiques voulus aient été ajoutés.

### Ajout de taxons individuels

<ReactPlayer
playing={false}
controls
url="https://www.youtube.com/watch?v=jm2_mn2nClo"
/>

1. Sur la page de la liste de contrôle, cliquez sur l'icône en forme de crayon située le plus à droite (libellée « spp. »), en haut à droite de la page. Un panneau s'ouvrira alors dans la partie inférieure droite de l'écran.
2. Saisissez le nom du taxon que vous souhaitez ajouter. N'incluez PAS l'auteur du taxon. Vous pouvez commencer à taper le nom ; une liste déroulante vous permettra de sélectionner le taxon parmi les options disponibles. 
- Vous ne pouvez pas ajouter un nom qui ne figure pas dans le référentiel taxonomique (le système vous signalera si c'est le cas). Si le taxon que vous souhaitez ajouter est absent :
1. Vérifiez l'orthographe. Consultez des ressources taxonomiques de référence, telles que [Tropicos](http://tropicos.org) ou [IPNI](http://www.ipni.org/), pour effectuer cette vérification. 
2. Si l'orthographe est correcte, contactez le gestionnaire de votre portail en lui communiquant le nom, l'auteur ainsi qu'une référence ou un lien vers ce nom dans une autre base de données taxonomique ; il se chargera de l'ajouter pour vous.
3. Remplissez les autres champs si vous le souhaitez. Tous ces champs peuvent rester vides :
- **Substitution de famille (Family Override)** : Si vous saisissez un nom de famille ici, celui-ci remplacera la famille indiquée par le référentiel taxonomique. Il est recommandé de laisser ce champ vide. 
- **Habitat** : Si le taxon se rencontre généralement dans un habitat spécifique au sein de la zone couverte par la liste de contrôle, vous pouvez l'indiquer ici. 
- **Abondance** : Vous pouvez préciser ici la fréquence ou l'abondance de ce taxon dans la zone couverte par la liste de contrôle. Par exemple, vous pouvez utiliser des termes tels que « commun », « fréquent » ou « rare ». 
- **Notes** : Vous pouvez inscrire ici tout autre commentaire concernant ce taxon dans le contexte de votre zone d'étude (par exemple : « Plante ornementale cultivée » ou « appréciée des abeilles mellifères »).
- **Notes internes** : Contrairement aux autres, ce champ ne sera visible que par les personnes autorisées à modifier la liste de contrôle. Vous pouvez par exemple ajouter une note telle que « vérifier l'espèce » ou « aucune photo disponible ». 
- **Source** : Ce champ est principalement destiné aux listes de contrôle utilisées pour la recherche et l'enseignement. Pour ce type de liste, il est utile de savoir si l'information provient d'une flore, d'une autre publication ou d'un rapport.
4. Cliquez sur le bouton « Ajouter l'espèce à la liste ».

### Importation par lots de taxons à partir d'un fichier

:::tip

Il est recommandé d'ajouter quelques taxons individuellement avant de tenter une importation par lots, afin de se familiariser avec les types de données et les formats.

:::

<ReactPlayer
playing={false}
controls
url="http://www.youtube.com/watch?v=Hnk09MYlMVg"
/>

Si vous devez ajouter plusieurs taxons simultanément, vous pouvez les importer via un fichier CSV (valeurs séparées par des virgules). La méthode la plus simple pour créer la liste souhaitée consiste à utiliser Microsoft Excel ou OpenOffice Calc, puis à enregistrer le document au format CSV.
Dans votre fichier CSV, une colonne doit être intitulée « sciname ». Elle doit contenir le nom scientifique du taxon, SANS l'indication de l'auteur. Veillez scrupuleusement à l'orthographe des noms scientifiques dans ce fichier CSV ; toute erreur orthographique empêchera le chargement du nom dans votre liste de contrôle.
Vous pouvez également inclure des colonnes pour la famille (« family »), l'habitat (« habitat »), l'abondance (« abundance ») et les notes (« notes ») (voir les descriptions de ces champs ci-dessus). Un exemple est présenté ci-dessous.

| Sciname             | Habitat             | Abundance | Notes                           |
| ------------------- | ------------------- | --------- | ------------------------------- |
| Asystasia gangetica | Milieu du champ     | Rare      | Démonstration ; orthographe correcte |
| Asystasia gangetca  | Champ               | Inconnu   | Démonstration ; orthographe incorrecte |

Vous trouverez ci-dessous une capture d'écran illustrant l'importation du fichier d'exemple précédent. Notez que seul le nom correctement orthographié a été importé.

![Exemple de liste de contrôle](/img/samplechecklist.jpg)

Pour revenir à la liste de contrôle, cliquez sur « Return to Checklist » (Retour à la liste de contrôle) en haut à gauche de la page (zone soulignée ci-dessous). ![Retour à la liste de contrôle](/img/returntochecklist.jpg)

Vous pouvez ensuite consulter les taxons ajoutés à la liste de contrôle.

![Voir les taxons de la liste de contrôle](/img/viewchecklisttaxa.jpg)
