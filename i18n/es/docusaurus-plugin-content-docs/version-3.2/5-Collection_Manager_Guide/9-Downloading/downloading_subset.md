---
title: "Descargar un Subset de Datos (Exportador)"
date: 2021-12-07
draft: false
authors: ["Katie Pearson"]
tranlators: ["Samanta Orellana"]
keywords: ["descargar", "exportador"]
---

:::info

Esta página describe cómo encontrar y usar la herramienta de Exportación de datos, que permite descargar un subset de sus datos como un Archivo Darwin Core.

:::

1. Navegue a su Panel de Control de Administración (Mi Perfil > Manejo de Ocurrencias > nombre de la colección).
2. Haga click en Herramientas de Procesamiento.
3. Haga click en la pestaña del Exportador.
4. Use el Estado de Procesamiento y filtros adicionales para definir el conjunto de datos que desea descargar de su colección. También puede seleccionar si desea descargar un Archivo Darwin Core estricto (Darwin Core) o un archivo conteniendo todos los campos de Symbiota (Symbiota Native); si le gustaría descargar la historia de determinación (identificaciones), imágenes, y/o atributos de las ocurrencias (si está habilitado); si le gustaría obtener los resultados en un archivo comprimido ZIP; y el formato del archivo y tipo de caracteres ([ISO-8859-1](https://en.wikipedia.org/wiki/ISO/IEC_8859-1) o [UTF-8](https://en.wikipedia.org/wiki/UTF-8)) para su descarga.
5. Haga click en el botón de Descargar Registros.

![Exporter Tool](/img/exportertool.PNG)

#### Descargando Especímenes sin Georreferencias

La herramienta Exportador también tiene la opción de descargar todos los registros sin datos de georreferencias. Para hacer esto, seleccione Exportar Georreferencia del menú desplegable en la ventana Tipo de Exportación en la parte superior derecha del Exportador. Seleccione los términos/filtros para aplicar en su descarga y haga click en Descargar Registros.

#### Descargar Registros que han sido Georreferenciados por Lote

Para colecciones Snapshot (i.e., colecciones que no manejan sus datos en vivo en del portal), también existe una opción para descargar datos de georreferencias para especímenes que han sido georreferenciados por lote en el portal. Para hacer esto, seleccione Exportar Georreferencias desde el menú desplegable en el menú de Tipo de Exportación en la parte superior derecha de la herramienta del Exportador. Seleccione la búsqueda de términos/filtros que desea aplicar en su descarga y haga click en Descargar Registros. El archivo resultante incluirá los siguientes campos:

- institutionCode
- collectionCode
- catalogNumber
- occurrenceId
- decimalLatitude
- decimalLongitude
- geodeticDatum
- coordinateUncertaintyInMeters
- verbatimCoordinates
- georeferencedBy
- georeferenceProtocol
- georeferenceSources
- georeferenceVerificationStatus
- georeferenceRemarks
- minimumElevationInMeters
- maximumElevationInMeters
- verbatimElevation
- localitySecurity
- localitySecurityReason
- modified
- processingStatus
- collId
- sourcePrimaryKey
- occid
- recordID.
