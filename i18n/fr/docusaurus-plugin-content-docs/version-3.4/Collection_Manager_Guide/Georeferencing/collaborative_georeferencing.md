---
title: "GEOLocate CoGe"
date: 2021-12-02
lastmod: 2026-03-30
draft: false
authors: ["Katie Pearson"]
sidebar_position: 5
keywords: ["géoréférencement", "géoréférencement collaboratif", "GEOLocate"]
---

L'outil de géoréférencement collaboratif GEOLocate (CoGe) peut être activé et intégré à un portail Symbiota afin de permettre à plusieurs utilisateurs de travailler sur une plateforme de géoréférencement centralisée, située en dehors du portail. Vous trouverez plus d'informations sur cette plateforme ici : [page GeoLocate CoGe](https://coge.geo-locate.org/).

Un [webinaire d'introduction à CoGe est disponible ici](https://youtu.be/1IZhUMqCGvs).

Les étapes générales du flux de travail CoGe sont les suivantes :

1. Créer un profil sur le site web de CoGe
2. Créer une communauté sur le site web de CoGe
3. Ajouter des membres à votre communauté dans CoGe
4. Ajouter des données à la communauté CoGe depuis votre portail Symbiota
5. Faire réaliser le géoréférencement par les membres via l'interface web de CoGe ([CoGe web client](https://www.geo-locate.org/web/WebComGeoref.aspx)).

:::note

Vous pouvez soit transférer directement les données vers CoGe depuis votre portail Symbiota, soit télécharger les enregistrements sous forme de fichier CSV, les importer dans CoGe, les récupérer une fois le travail terminé, puis les réimporter dans Symbiota. Toutefois, si vous transférez directement les données vers CoGe, toutes les opérations de géoréférencement effectuées dans CoGe seront automatiquement appliquées à vos enregistrements sur le portail Symbiota. Les mises à jour seront prises en compte en temps réel sur le portail.

:::

Un manuel destiné aux gestionnaires ou administrateurs de collections utilisant l'outil de géoréférencement collaboratif (CoGe) est disponible ici : [https://epicc.berkeley.edu/wp-content/uploads/2015/11/UsingGeoLocateforCollaborativeGeoreferencing_2016.pdf](https://epicc.berkeley.edu/wp-content/uploads/2015/11/UsingGeoLocateforCollaborativeGeoreferencing_2016.pdf). Ce manuel couvre les étapes 1 à 3 du flux de travail susmentionné, mais n'aborde pas l'ajout d'occurrences à CoGe depuis un portail Symbiota. Des tutoriels vidéo sont disponibles ici : [https://www.geo-locate.org/community/default.html](https://www.geo-locate.org/community/default.html).

Les instructions pour l'étape 4 sont fournies ci-dessous.

Des exemples d'instructions pour l'étape 5 sont disponibles ici ([Formation GEOLocate CoGe](https://www.capturingcaliforniasflowers.org/georeferencingcourse-coge.html)), et un protocole écrit est disponible ici ([Protocole GEOLocate CoGe](https://www.capturingcaliforniasflowers.org/uploads/1/6/3/7/16372936/georeferencingincoge.docx)).

### Transférer des spécimens d'un portail Symbiota vers GEOLocate CoGe

#### (étape 4 du flux de travail ci-dessus)

1. Accédez à votre panneau de contrôle d'administration (cliquez sur « My Profile » [Mon profil], puis sur le nom de la collection dans le bloc « Collection Management » [Gestion des collections]).
2. Cliquez sur « Processing Toolbox » [Boîte à outils de traitement].
3. Si CoGe a été activé pour votre portail, un onglet intitulé « GeoLocate CoGe » sera visible. Cliquez sur cet onglet. Si CoGe n'est pas activé, contactez l'administrateur de votre portail pour demander cette fonctionnalité.

![Onglet GeoLocate CoGe](/img/geolocatecoge2026.png)

5. Cliquez sur « Login to CoGe » [Connexion à CoGe] dans le bloc **CoGe Status** [État CoGe] de la page qui s'affiche, puis connectez-vous à CoGe en utilisant les identifiants de votre compte utilisateur CoGe dans la fenêtre contextuelle ou l'onglet qui s'ouvre.
6. Revenez à la page de votre portail Symbiota.

:::tip

Si vous vous êtes déjà connecté à CoGe, cliquez sur le bouton « Check Status » [Vérifier l'état] au lieu de vous connecter à nouveau. Si la mention « Connected » [Connecté] ne s'affiche pas en vert après avoir cliqué sur ce bouton, essayez de vous déconnecter puis de vous reconnecter à CoGe. Si cela ne fonctionne toujours pas, vérifiez auprès de l'administrateur de votre portail que celui-ci est bien configuré pour interagir avec CoGe.

:::

6. Les communautés CoGe que vous gérez apparaîtront désormais dans la zone **Available Communities** (Communautés disponibles). Si aucune communauté n'est visible, [assurez-vous d'avoir créé une communauté sur le site web de CoGe](https://epicc.berkeley.edu/wp-content/uploads/2015/11/UsingGeoLocateforCollaborativeGeoreferencing_2016.pdf).
7. En haut de la page, utilisez le statut de traitement (Processing Status) et/ou des filtres supplémentaires pour rechercher les enregistrements que vous souhaitez transférer vers CoGe (c.-à-d. ceux que vous voulez géoréférencer dans l'interface CoGe). Une fois les paramètres de recherche ou les filtres saisis, cliquez en dehors du champ ; le nombre d'enregistrements trouvés s'affichera dans la zone **CoGe Status**, sous la rubrique **Match Count** (Nombre de correspondances).
8. Dans la zone **Available Communities**, cochez la case d'option (bouton radio) correspondant à la communauté CoGe à laquelle vous souhaitez affecter les enregistrements.
9. Saisissez un nom court pour le jeu de données dans le champ « Data source identifier (primary name): » (Identifiant de la source de données / nom principal) ainsi qu'une description, si vous le souhaitez.
10. Si vous souhaitez que les géoréférences provenant de CoGe soient automatiquement appliquées aux enregistrements correspondants dans le portail Symbiota, cliquez sur le bouton « Push Data to GeoLocate CoGe ». Si vous prévoyez d'utiliser le flux de travail suivant : téléchargement (Symbiota -> CSV), téléversement (CSV -> CoGe), téléchargement (CoGe -> CSV), téléversement (CSV -> Symbiota), cliquez sur le bouton « Download Records Locally ».

:::astuce

Vous pouvez également utiliser le bouton « Download Records Locally » pour vérifier rapidement si les spécimens transférés vers CoGe correspondent à vos attentes.

:::

10. Retournez sur le [site CoGe](https://coge.geo-locate.org/), accédez à votre tableau de bord (Dashboard), cliquez sur le nom de la communauté vers laquelle vous venez de transférer des enregistrements, puis cliquez sur le bouton « GO TO COMMUNITY ».
11. Cliquez sur le nom du jeu de données que vous venez de transférer vers CoGe.

![Tableau de bord CoGe](/img/cogedashboard.png)

13. Cliquez sur le bouton « Update Cache » (Mettre à jour le cache).
14. Une fois le cache entièrement mis à jour, les données seront accessibles via le [client web CoGe](https://www.geo-locate.org/web/WebComGeoref.aspx).

### Examen des géoréférencements créés dans GEOLocate CoGe

1. Pour consulter les géoréférencements créés dans CoGe, accédez à votre panneau de contrôle d'administration (cliquez sur « My Profile », puis sur le nom de la collection dans la section « Collection Management »).
2. Cliquez sur « Review/Verify Occurrence Edits » (Examiner/Vérifier les modifications d'occurrences).
3. Dans la zone de filtrage située en haut à droite, sélectionnez « External » dans le menu déroulant du champ « Editing Source ». Cliquez ensuite sur « Submit Filter ».
4. Les modifications effectuées dans CoGe apparaîtront désormais dans le tableau de révision.

![Modifications issues de CoGe](/img/viewcogeedits2026.png)
