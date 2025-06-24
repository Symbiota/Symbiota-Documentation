---
title: "Redactar / Oscurecer Datos"
Date: 2021-11-01
authors: ["Katie Pearson"]
translators: ["Samanta Orellana"]
weight: 80
keywords: ["especies raras", "protección de datos", "redacción"]
---

import ReactPlayer from "react-player";

:::info

Esta página explica cómo funciona la redacción de datos en un portal Symbiota.

:::

Los encargados de colecciones pueden necesitar redactar u oscurecer datos de localidad para ciertas ocurrencias, por ejemplo, de especies raras o en peligro, o para localidades en propiedad privada. Los datos de localidad en portales Symbiota pueden ser redactados de dos formas: (a) individualmente (por ocurrencia) o (b) globablmente (por taxón).

Ocultar datos de localidad en los portales Symbiota es binario en la actualidad: una ocurrencia puede tener la localidad redactada (Seguridad de Localidad = 1, marcado) o no (Seguridad de Localidad = 0, sin marcar). Cuando la casilla de Seguridad de Localidad está marcada (o la Seguridad de Localidad se sube con valor de 1) para una ocurrencia dada, un usuario que no tiene permisos de lectura para especies raras, o permisos de editor, no será capaz de ver enn esas ocurrencias:

- Localidad más abajo de nivel de condado
- Coordenadas (de estar incluidas)
- Imágenes

### Ocultar datos de localidad individualmente para ciertos especímenes

Los datos de localidad pueden ser redactados para ocurrencias individuales de especímenes marcando la casilla de Seguridad de Localidad en el Editor de Ocurrencias.

Si desea redactar datos por lote, puede descargar un archivo CSV de todos los registros de especímenes que desea ocultar, usando la herramienta de Exportación, y puede añadir una columna llamada LocalitySecurity. Introduzca un 1 en esta columna para todos los especímenes de los que quiera ocultar los datos. Use la herramienta para Cargar Archivos Esqueléticos para subir esta hoja de cálculo al portl, mapeando la nueva columna a localitySecurity.

### Ocultar datos de localidad globalmente para ciertos taxa

Además, los datos de localidad e imágenes pueden ser redactados a nivel de especie por alguien con permisos de superadministrador o con permisos de edición. Para hacer esto, encuentre las especies en el Visualizador del Árbol Taxonómico y abra el editor (ya sea haciendo click en el nombre del taxón o haciendo click en el lápiz junto al nombre). Cambiar el campo de Seguridad de Localidad a "ocultar datos de localidad".

![Ejemplo de Editor de Taxonomía](/img/taxoneditorexample.png)

Esto ocultará los datos de localidad para todas las ocurrencias de ese taxón en todo el portal. Las colecciones pueden optar por desactivar esta opción, quitando la marca en la casilla de Seguridad de Localidad individualmente en los registros, o contactando al administrador del portal para realizar cambios por lote.

<ReactPlayer
  playing={false}
  controls
  url="https://vimeo.com/584160186"
/>
