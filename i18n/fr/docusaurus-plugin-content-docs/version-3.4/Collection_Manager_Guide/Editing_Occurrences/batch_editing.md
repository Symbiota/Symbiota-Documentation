---
title: "Modification par lots"
date: 2021-10-28
lastmod: 2026-01-29
draft: false
sidebar_position: 5
authors: ["Lindsay Walker", "Katie Pearson", "Cynthia Skema", "Ann Barber"]
keywords: ["traitement par lots", "modification", "changement", "formulaire de recherche d'enregistrements"]
---

:::info

Cette page explique comment modifier des enregistrements par lots.

:::

- Pour obtenir des instructions sur la géoréférencement par lots, consultez [cette page](/Editor_Guide/Georeferencing/batch_georeferencing).
- Les noms scientifiques ne peuvent être modifiés par lots qu'à l'aide des [outils d'annotation par lots](/Editor_Guide/Editing_Searching_Records/annotations) ou des [outils de nettoyage taxonomique](/Collection_Manager_Guide/Data_Cleaning/taxonomic_cleaning).

:::warning

Soyez prudent lors de l'utilisation de cet outil. Nous recommandons vivement de [télécharger une copie de votre base de données](/Collection_Manager_Guide/Downloading/downloading_copy) avant d'effectuer des modifications par lots. C'est pourquoi seuls les utilisateurs disposant de droits d'administrateur peuvent accéder aux outils de modification par lots.

:::

Il existe deux options pour modifier par lots les enregistrements de spécimens : vous pouvez modifier une valeur pour 1) l'**ensemble** des enregistrements de votre collection ou 2) un **sous-ensemble** d'enregistrements.

1. Accédez au formulaire de recherche d'enregistrements (_Panneau de configuration de l'éditeur de données > Modifier les enregistrements d'occurrence existants_).
2. **Option A :** **Pour appliquer des modifications par lots à tous les enregistrements**, cliquez sur « Afficher le tableau » dans le formulaire de recherche d'enregistrements, puis cliquez sur le bouton « Modification par lots » situé au-dessus du tableau résultant regroupant tous les enregistrements de votre collection. Passez à l'étape 3. ![Bouton de modification par lots](/img/batcheditbutton.png)

**Option B :** **Pour appliquer des modifications par lots à un sous-ensemble d'enregistrements**, commencez par rechercher les enregistrements concernés à l'aide du [formulaire de recherche](/Editor_Guide/Editing_Searching_Records). Une fois que vous disposez de l'ensemble d'enregistrements à modifier, cliquez sur le bouton « Modification par lots » en haut du tableau d'enregistrements sélectionné.

3. Dans le menu déroulant situé à côté de « Nom du champ » (Field Name) dans l'outil de mise à jour par lots, sélectionnez le champ que vous souhaitez modifier. 
![Outil de modification par lots](/img/batchedittool.png)
4. Dans le champ « Valeur actuelle » (Current Value), saisissez le texte qui figure actuellement dans le champ à modifier.
5. Dans le champ « Nouvelle valeur » (New Value), saisissez le texte que vous souhaitez voir apparaître dans le champ modifié.
6. Choisissez si vous souhaitez faire correspondre le champ entier **ou** seulement une partie de celui-ci.
7. Cliquez sur « Mettre à jour le champ par lots » (Batch Update Field) pour effectuer la modification. Une fenêtre contextuelle indiquera le nombre d'enregistrements à mettre à jour, vous avertira que l'opération de remplacement est irréversible et vous demandera de confirmer la mise à jour.

:::note

⚠️ **Il est facile de modifier par inadvertance du texte que vous ne vouliez pas changer.** En général, plus le texte saisi dans « Valeur actuelle » est précis, moins vous risquez de rencontrer des conséquences imprévues. Si possible, estimez le nombre d'enregistrements concernés à partir de votre tableau et comparez ce chiffre à celui indiqué dans l'avertissement. Si les nombres ne correspondent pas, revoyez votre stratégie.<br></br>
Il n'est pas possible de vérifier le nombre d'enregistrements si vous effectuez d'abord un tri par « Modifié par » (Modified By). Cette opération renvoie le nombre de champs modifiés par l'utilisateur indiqué dans « Modifié par » pour l'ensemble des enregistrements concernés, et non le nombre d'enregistrements eux-mêmes.

:::

#### Exemples

✅ **Exemple de bonne utilisation de la modification par lots :** Normalisation des noms de collecteurs de plantes. Si vous souhaitez uniformiser toutes les mentions des récoltes de Wherry sous la forme « Edgar T. Wherry », vous pouvez saisir « E. T. Wherry » dans le champ « Valeur actuelle » et « Edgar T. Wherry » dans le champ « Nouvelle valeur » de l'outil de modification par lots pour le champ du nom du collecteur, puis valider la mise à jour. Répétez l'opération pour les autres variantes de ce nom (par ex. « E T Wherry », « Edgar T Wherry »).

❌ **Exemple de mauvaise utilisation de la modification par lots :** Modification d'une seule lettre ou d'une courte expression. Par exemple, si vous saisissiez « n. » dans « Valeur actuelle » et « N » dans « Nouvelle valeur » pour le champ de la localité afin de remplacer les abréviations en minuscules du point cardinal « nord », vous y parviendriez, mais vous modifieriez également toute autre chaîne de caractères contenant « n. », comme une phrase se terminant par la lettre « n ». Cela entraînerait le remplacement erroné par « N » d'occurrences où « n. » était approprié. Par exemple, « Next to the station. East side » serait transformé en « Next to the statioN East side ».
