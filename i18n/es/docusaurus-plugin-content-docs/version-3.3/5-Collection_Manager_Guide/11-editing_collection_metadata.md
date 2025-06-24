---
title: "Editando los Metadados e Información de Contacto de la Colección"
date: 2021-11-16
lastmod: 2021-11-16
weight: 60
draft: false
authors: ["Katie Pearson"]
translators: ["Samanta Orellana"]
keywords: ["nombre de la colección", "metadatos", "información de contacto"]
---

:::info

Esta página describe cómo cambiar o añadir información de contactos o información acerca de su colección (e.g., página de inicio, título de la colección, acrónimo, descripción).

:::

1. Navegar al Panel de Control de Administración (Mi Perfil > Manejo de Ocurrencias > nombre de la colección).
2. En el Panel de Control de Administración, haga click en Editar Metadatos. En la primera pestaña, puede cambiar:
   - **Código de la Institución** - El nombre (o acrónimo) en uso por la institución que tiene la custodia de los registros de ocurrencia. Este campo es requerido. Para más detalles, vea la definición Darwin Core.
   - **Código de la Colección** - El nombre, acrónimo, o código que identifica a la colección o conjunto de datos del cual el registro se ha derivado. Este campo es opcional. Para más detalles, vea la definición Darwin Core.
   - **Nombre de la Colección**
   - **Descripción**
   - **Latitud/Longitud**
   - **Categoría** (si aplica) - e.g., briofitas, líquenes, peces si más de un grupo taxonómico se encuentra en un solo portal
   - **Permitir Ediciones Públicas** - Marcar esta opción permitirá que cualquier usuario conectado en el portal pueda modificar registros de especímenes y corregir errores encontrados en la colección. Sin embargo, si el usuario no tiene autorización explícita para alguna colección, las ediciones no serán aplicadas hasta que sean aprobadas y revisadas por el administrador de dicha colección.
   - **Licencia** - Un documento legal dando permiso oficial de realizar algo con el recurso. Este campo puede estar limitado a valores preestablecidos, modificando los perfiles centrales de configuración del portal. Para más detalles, ver la [definición Darwin Core](http://rs.tdwg.org/dwc/terms/index.htm#dcterms:license).
   - **Propietarios de los Derechos** - La organización o persona que maneja o es dueña de los derechos del recurso. Para más detalles, vea la [definición Darwin Core](http://rs.tdwg.org/dwc/terms/index.htm#dcterms:rightsHolder).
   - **Derechos de Acceso** - Información o enlace URL a la página con detalles explicando como pueden utilizarse los datos. Ver la [definición Darwin Core](http://rs.tdwg.org/dwc/terms/index.htm#dcterms:accessRights).
   - **Tipo de Conjunto de Datos** - Especímenes Preservados significa que es un tipo de colección que contiene ejemplares físicos disponibles para ser inspeccionados por investigadores y expertos taxonómicos. Use Observaciones cuando el registro no está basado en un espécimen físico. Manejo de Observaciones Personales es un conjunto de datos donde los usuarios registrados pueden manejar independientemente su propio subconjunto de datos. Los registros ingresados en este conjunto de datos están vinculados explícitamente al perfil del usuario y pueden ser editados únicamente por ellos. Este tipo de colección es típicamente utilizada por investigadores de campo para manejar los datos de sus colecciones e imprimir etiquetas previo a depositar el material físico en una colección. Aunque las colecciones personales estén representadas por muestras físicas, están clasificadas como "observaciones" hasta que el material físico esté disponible públicamente en una colección.
   - **Tipo de Manejo** - Use Snapshot cuando exista una base de datos local separada, mantenida en la colección, y el conjunto de datos en el portal Symbiota sea únicamente una copia de la base de datos central, que se actualiza periódicamente. Un conjunto de datos En Vivo es cuando los datos son manejados directamente en el portal y la base de datos central la constituyen los datos en el portal.
   - **Fuente de Identificador Único Global (GUID)** - ID de Ocurrencia es el código utilizado generalmente para conjuntos de datos Snapshot, cuando el campo de Identificador Único Global (GUID) es proporcionado por la base de datos original (e.g. base de datos en Specify) y el GUID es, en cambio, mapeado al campo occurrenceIdfield. El uso de Occurrence Id como GUID no es recomendado para conjuntos de datos en vivo. Catalog Number puede ser utilizado el valor dentro del campo de número de catálogo es único de manera global. La opción de GUID generado por Symbiota (UUID) hará que el portal de datos Symbiota genere automáticamente UUID GUIDs para cada registro. Esta opción es recomendada por muchos para conjuntos de datos En Vivo, pero no es permitida para colecciones Snapshot que son manejadas en sistemas de manejo local.
   - **Puclicando en GBIF** - Activa las herramientas de publicación en GBIF disponibles dentro de la opción Publicar Archivo Darwin Core.
   - **URL del Ícono** - Cargue un archivo con la imagen del ícono o ingrese un enlace URL a la imagen que representa la colección. Para ingresar la URL de la imagen ya localizada en un servidor, haga click en "Ingresar URL". La ruta URL puede ser absoluta o relativa. El uso de íconos es opcional.
   - **Orden de Secuencia** - Deje este campo vacío si desea que las colecciones sean organizadas de forma alfabética (preestablecido)
   - **ID de Colección** - El Identificador Único Global para esta colección (ver dwc:collectionID): Si su colección ya cuenta con un GUID asignado previamente, ese identificador debería ser agregado aquí. Para especímenes físicos, las buenas prácticas recomendadas son utilizar el identificador de un registro oficial de colecciones como el [Global Registry of Biodiversity Repositories](http://grbio.org).
3. En la pestaña de Contactos y Recursos, puede añadir enlaces a otros recursos (e.g., páginas web de colecciones o laboratorios), añadir o editar información de contacto, o añadir o editar direcciones postales para su institución. Haga click en el ícono de lápiz para editar o en el ícono de X para borrar enlaces/recursos existentes.

![Edit Metadata Example](/img/metadata_editor.png)
