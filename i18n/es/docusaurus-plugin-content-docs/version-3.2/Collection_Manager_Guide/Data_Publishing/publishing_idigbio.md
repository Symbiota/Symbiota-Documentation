---
title: "Publicando Datos en iDigBio"
Date: 2021-10-08
authors: ["Ed Gilbert","Katie Pearson"]
editors: ["Katie Pearson"]
translators: ["Samanta Orellana"]
sidebar_position: 15
keywords: ["publicación de datos","idigbio"]
---

:::info

Esta página describe cómo publicar datos de su colección al agregador nacional de Estados Unidos [iDigBio](https://www.idigbio.org/).

:::

1. Contacte a iDigBio ([data@idigbio.org](mailto:data@idigbio.org)) solicitando que su colección sea añadida a la lista de espera de ingestión de datos de iDigBio. Incluya un enclace con el perfil de su colección (e.g. [http://swbiodiversity.org/seinet/collections/misc/collprofiles.php?collid=1](http://swbiodiversity.org/seinet/collections/misc/collprofiles.php?collid=1)) para que puedan obtener la información necesaria de su colección y para acceder a sus datos.  Para más información, vea la [Guía para la Integración de Datos en iDigBio](https://www.idigbio.org/wiki/index.php/Data_Ingestion_Guidance).
2. Ingrese en el Panel de Control de Administración en su portal Symbiota (Mi Perfil > Manejo de Ocurrencias > nombre de su colección).
3. Haga click en Editar Metadatos y revise la información y contactos asociados a su colección. Además de los códigos de su institución/colección y a la información de contacto, asegúrese de revisar las licencias de uso de datos y la fuente de GUID (ver abajow). Contacte al administrador de su portal si tiene alguna duda acerca de los campos disponibles.
  * Licencias de Uso de Datos: Este campo determina las indicaciones de copyright que los usuarios deben seguir cuando utilizan sus datos. Muchos portales tienen opciones predefinidas que siguen las licencias de Creative Commons, aunque pueden variar de portal a portal. Ver el [sitio web de Creative Commons](https://creativecommons.org/) para más información acerca de las licencias.
  * Fuente de GUID: Esta opción designa el campo que será utilizado como identificador global único persistente (GUID) para los registros de especímenes publicados en el portal. (Más información acerca de la importancia de los GUIDs puede ser encontrada [en este artículo](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5851565/). Verá las siguientes opciones en su portal:
    1. **ID de Occurrencia**: Esta opción es para colecciones que crean sus propios GUID usando otros protocolos o que manejan sus datos en un sistema externo, y mapea los GUID ya existentes al campo de occurrenceID en el momento de la importación. Si usted maneja su base de datos central en una base de datos actualizada de Specify, debería utilizar esta opción porque la importación de datos ya debería contener UUID generados automáticamente por Specify. Ver la definición Darwin Core: [http://rs.tdwg.org/dwc/terms/index.htm#occurrenceID](http://rs.tdwg.org/dwc/terms/index.htm#occurrenceID).
    2. **Número de Catálogo**: Puede utilizar esta opción si su número de catálogo está configurado como un identificador global único. Ver la definición Darwin Core de occurrenceID arriba.
    3. **UUID generado por Symbiota**: Si está manejando sus datos en vivo dentro del portal Symbiota (e.g. the portal is your central database), esta es la opción más fácil y confiable para asignar GUIDs robustos a sus registros de especímenes. Aunque sus números de catálogo estén asignados como identificadores globales únicos (e.g. institutionCode:collectionCode:catalogNumber format type), esta es una opción más robusta cuando se manejan datos dentro del portal. No seleccione esta opción si usa el portal Symbiota para publicar una snapshot de sus datos que es manejada en otro sistema de base de datos (e.g. Specify).
4. Regrese a su Panel de Control de Administración y haga click en “Publicación de Archivos Darwin Core”.
5. Haga click en el botón Crear Archivo Darwin Core para generar un nuevo archivo. iDigBio monitoreará periódicamente el feed RSS que está asociado con la librería de Archivos-DwC dentro del portal. Debería refrescar regularmente este archivo para asegurar que los datos en iDigBio se mantengan actualizados. Contacte al administrador de su portal para solicitar actualizaciones automáticas de su archivo en fechas regulares. 
