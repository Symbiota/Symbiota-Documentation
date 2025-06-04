---
title: "Descargando una Copia de su Base de Datos"
date: 2021-11-29
draft: false
weight: 55
authors: ["Katie Pearson"]
translators: ["Samanta Orellana"]
keywords: ["descargar"]
---

:::info

Esta página describe cómo descargar una copia de su base de datos, incluyendo registros de ocurrencia, determinaciones, imágenes (únicamente los enlaces), y cualquier otra extensión habilitada en su portal (e.g., atribuciones de datos).

:::

Se recomienda que los curadores o encargados de colecciones descarguen y archiven regularmente una copia de su base de datos en caso de cualquier emergencia. Hacer esto es fácil y rápido.
Diríjase al Panel de Control de Administración (Mi Perfil > Manejo de Ocurrencias > nombre de la colección) y selecciones Descargar Archivo de Respaldo de Datos (bajo Tareas Generales de Mantenimiento).

Una nueva ventana aparecerá solicitando que seleccione el conjunto de caracteres (ISO-8859-1 o UTF-8) que serán utilizados para descargar el conjunto de datos. Haga click en el botón Realizar Descarga (Perform Backup). El archivo resultante será un Archivo Darwin Core comprimido. En esta carpeta, los datos de sus especímenes se encontrarán en un archivo separado por comas (CSV) llamado “occurrences,” las identificaciones de los especímenes se encontrarán en un archivo CSV llamado “identifications”, cualquier característica asociada de los datos se encontrará en un archivo llamado “measurementOrFact”, y enlaces a imágenes o multimedia relacionada estarán en un archivo llamado “images.” La carpeta también contiene metadata acerca de su colección y acerca de los campos contenidos en cada uno de los archivos CSV. Para más información acerca del formato y uso de los Archivos Darwin Core, diríjase a los siguientes recursos:
[https://github.com/gbif/ipt/wiki/DwCAHowToGuide](https://github.com/gbif/ipt/wiki/DwCAHowToGuide)
[https://en.wikipedia.org/wiki/Darwin_Core_Archive](https://github.com/gbif/ipt/wiki/DwCAHowToGuide)
