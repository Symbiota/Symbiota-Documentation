---
title: "Téléchargement par URL d’image/média"
date: 2023-10-31
lastmod: 2026-03-30
sidebar_position: 10
authors: ["Katie Pearson"]
editors: ["Lindsay Walker"]
keywords: ["images","media","audio"]
---

:::info

Cette page explique comment associer des ressources multimédias hébergées en externe (par exemple, des images) à des enregistrements dans votre portail, en utilisant un fichier CSV contenant des liens ou des URL.

:::

### Ajout de ressources multimédias via des URL
1. Accédez à votre panneau de contrôle d'administration (_cliquez sur « Mon profil », puis sur le nom de la collection dans la section « Gestion des collections »_). 
2. Cliquez sur « Importer/Mettre à jour des enregistrements de spécimens », puis sélectionnez « Importation de données étendues » (Extended Data Import). 
3. Cliquez sur le bouton « Choisir un fichier » pour importer dans l'outil un fichier d'associations correctement formaté (consultez les sections ci-dessous pour connaître les exigences de formatage). 
4. Sélectionnez « Correspondance des champs multimédias » (Media Field Map) dans le menu déroulant « Type d'importation ». 
5. Cliquez sur le bouton « Initialiser l'importation ». 
6. Sélectionnez le [**format**](https://ac.tdwg.org/format/) de votre ressource multimédia dans la liste déroulante. Notez qu'un seul type de format peut être importé à la fois. 
7. Faites correspondre les champs de votre fichier source (affichés à gauche) aux champs cibles appropriés (voir le tableau ci-dessous). 
8. Si vous souhaitez créer un nouvel enregistrement pour chaque identifiant qui ne correspond pas à un identifiant déjà présent dans le système, cochez la case intitulée « Lier le média à un nouvel enregistrement vide si le numéro de catalogue n'existe pas ». 
9. Cliquez sur le bouton « Importer les données ».

:::tip

Lorsque vous fournissez des ressources multimédias via des URL, celles-ci doivent commencer par « **https://** » (et non « http:// ») afin de s'afficher correctement dans les différents navigateurs. Cela est particulièrement important pour les miniatures (images en format réduit). Si vous fournissez des liens multimédias utilisant des URL en « https » mais qu'ils ne s'affichent pas correctement dans votre portail Symbiota, vérifiez que le serveur hébergeant vos ressources multimédias dispose d'un certificat SSL prenant en charge l'utilisation du protocole « https ».

:::

### Préparation d'un fichier d'importation de fichiers multimédias
Un modèle pour ce type d'importation est disponible [ici](/documents/GeneralResourceUploadTemplate.xlsx).

Les champs obligatoires pour ce type d'importation sont : (1) un identifiant de sujet pour l'occurrence à laquelle vous souhaitez associer le fichier (occurrenceID, numéro de catalogue et/ou autre numéro de catalogue), et (2) `originalUrl`. Le champ `originalUrl` doit contenir **un lien direct vers la ressource multimédia souhaitée** (idéalement se terminant par une extension de fichier telle que .jpg, .tif, etc.). Veuillez noter que si vous fournissez un lien vers une page web contenant la ressource (par exemple, une page YouTube) plutôt qu'un lien direct vers le fichier lui-même, il est possible que le contenu multimédia ne s'affiche pas comme prévu.

Les champs facultatifs sont présentés dans le tableau ci-dessous.

### Champs pour l'importation d'URL de fichiers multimédias

| Nom du champ | Type de données (Longueur en caractères) | Description |
| :--- | :--- | :--- |
| Identifiant de sujet : [**catalogNumber**](https://dwc.tdwg.org/terms/#dwc:catalogNumber) | Texte (32) | L'identifiant principal, lisible par l'utilisateur, de l'enregistrement auquel vous associez la ressource multimédia. |
| Identifiant de sujet : [**otherCatalogNumbers**](https://dwc.tdwg.org/terms/#dwc:otherCatalogNumbers) | Texte (45) | Un numéro de catalogue alternatif, enregistré en tant qu'« identifiant supplémentaire » (*Additional Identifier*) dans le portail pour l'enregistrement auquel vous associez la ressource multimédia. Consultez [cette page](/Editor_Guide/Editing_Searching_Records/catalog_numbers) pour plus de détails. |
| Identifiant de sujet : [**occurrenceID**](https://dwc.tdwg.org/terms/#dwc:occurrenceID) | Texte (255) | L'identifiant unique global (GUID) de l'enregistrement auquel vous associez la ressource multimédia. |
| [**accessRights**](https://dwc.tdwg.org/terms/#dcterms:accessRights) | | | Texte (255) | URL vers la page précisant qui peut accéder à la ressource, ou indication de son statut de sécurité. |
| anatomy | Texte (100) | Description textuelle des caractéristiques anatomiques visibles dans la ressource multimédia. |
| archiveurl | Texte (255) | Lien stable vers une ressource multimédia archivée et accessible au public (généralement un fichier TIF ou RAW de grande taille). Peu utilisé. |
| caption | Texte (100) | Description textuelle de la ressource multimédia. Cette légende sera visible par le public et devrait, idéalement, rester concise. |
| copyright | Texte (255) | Organisation détentrice des droits d'auteur ou de la licence. |
| hashFunction | Texte (45) | Nom de la fonction utilisée pour générer une empreinte numérique (valeur de taille fixe représentant l'élément) pour la ressource multimédia. Consultez [cet article](https://en.wikipedia.org/wiki/Hash_function) pour plus d'informations sur le hachage. |
| hashValue | Texte (45) | Valeur de taille fixe représentant la ressource multimédia, générée à l'aide d'un algorithme de hachage donné. Consultez [cet article](https://en.wikipedia.org/wiki/Hash_function) pour plus d'informations sur le hachage. |
| mediaMD5 | Texte (45) | Empreinte numérique (hash) de la ressource multimédia, générée à l'aide de l'algorithme MD5. Consultez [cet article](https://en.wikipedia.org/wiki/Hash_function) pour plus d'informations sur le hachage. |
| notes                          | Texte (350)                               | Commentaires ou autres remarques concernant la ressource multimédia. |
| originalUrl                          | Texte (255)                               | La version de la ressource multimédia en haute résolution ou de la meilleure qualité disponible. Cette URL sera utilisée pour générer des miniatures et des versions adaptées au Web, via l'outil de gestion des miniatures (si celui-ci est employé). |
| [**owner**](http://ns.adobe.com/xap/1.0/rights/Owner)                          | Texte (250)                               | Le propriétaire légal de la ressource multimédia. |
| photographer                          | Texte (100)                               | Le créateur de la ressource multimédia. |
| photographerUid                          | Entier (10)                               | L'identifiant unique attribué à l'utilisateur du portail Symbiota ayant créé la ressource multimédia. Notez que cette donnée ne peut être renseignée que si le photographe possède un compte utilisateur sur le portail. |
| referenceUrl                          | Texte (255)                               | Un lien vers une URL ou une page où la ressource multimédia est présentée dans son contexte d'origine. |
| [**rights**](http://dublincore.org/usage/terms/history/#rightsT-001)                          | Texte (255)                               | Les droits associés à la ressource multimédia, qui définissent les conditions de sa réutilisation. Par exemple, une [licence Creative Commons](https://creativecommons.org/share-your-work/cclicenses/) peut être indiquée ici. |
| sortOccurrence                          | Entier (11)                               | L'ordre de tri de la ressource multimédia tel qu'il apparaîtra sur la page associée à l'enregistrement de l'occurrence. Les valeurs les plus faibles s'affichent avant les valeurs plus élevées. |
| sourceIdentifier                          | Texte (150)                               | Un identifiant unique propre à la ressource multimédia, fourni par la source de cet élément. |
| thumbnailUrl                          | Texte (255)                               | Une version miniature (par ex. ~300 pixels sur sa plus grande dimension) de la ressource multimédia (s'il s'agit d'une image), destinée à un affichage rapide dans les résultats de recherche. |
| url                          | Texte (255)                               | Une version du fichier multimédia adaptée au Web (s’il s’agit d’une image), par exemple un fichier JPG ne dépassant pas 2 Mo. Il s’agit de la version qui s’affiche en « résolution moyenne » dans l’éditeur d’occurrences.
