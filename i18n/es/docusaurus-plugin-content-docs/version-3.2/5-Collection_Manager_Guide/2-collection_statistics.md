---
title: "Estadísticas de las Colecciones"
date: 2021-11-30
authors: ["Katie Pearson"]
weight: 4
keywords: ["estadísticas", "número de especímenes", "reportes"]
translators: ["Samanta Orellana"]
---

:::info

Esta página describe cómo puede encontrar información acerca de cuántas ocurrencias e imágenes posee en su colección.

:::

### Revisando las Estadísticas de las Colecciones

:::note

Las estadísticas de las colecciones son generadas en la línea de comando y no son creadas en el momento. El administrador de la colección debe refrescar periódicamente las estadísticas del perfil a su cargo. Las estadísticas de las colecciones también son refrescadas automáticamente cuando un nuevo [Archivo Darwin Core es publicado/creado](/Collection_Manager_Guide/Data_Publishing/creating_dwca).

:::

Estadísticas relacionadas con el número de especímenes, imágenes, georreferencias y taxa dentro de una colección, pueden ser encontrados en la página del Perfil de la Colección. Un ejemplo de perfil de colección es mostrado en la impresión de pantalla de abajo, y puede ser encontrado [aquí](https://cch2.org/portal/collections/misc/collprofiles.php?collid=12). Las estadísticas de la colección se encuentran en el fondo de la página e incluyen:

- Número total de registros
- Número de registros que están georreferenciados
- Número de registros que tienen imágenes asociadas
- Número total de imágenes en la colección
- Número de especímenes que están identificados al menos a nivel de especie
- Número de familias, géneros, especies, y total de taxa que están representados en la colección (NOTA: estos números son calculados únicamente los nombres taxonómicos que han sido indexados en el tesauro taxonómico)

![Página del Perfil de la Colección](/img/collprofile.png)

Los perfiles de las colecciones pueden ser accesados visitando la página de Búsqueda en Colecciones (hacer click en Búsqueda en Colecciones) en el siguiente URL: [BASE URL]/collections/index.php. Por ejemplo, para el portal CCH2, el URL completo es https://cch2.org/portal/collections/index.php.

Si es un editor o administrador de una colección, también puede acceder a sus estadísticas haciendo click en Mi Perfil > Manejo de Occurrencias > nombre de la colección.

### Refrescando las Estadísticas de las Colecciones

Las estadísticas de las colecciones son generadas en la línea de comando y no son creadas en el momento. Para refrescar las estadísticas de la colección, navegue hacia el Panel de Administración (Mi Perfil > Manejo de Ocurrencias > nombre de la colección) y haga click en Actualizar Estadísticas (enlace en la parte inferior del Panel de Administración).

### Estadísticas de Estado de Procesamiento en la Tabla de Reportes

Para ver estadísticas acerca del estado de procesamiento de su colección, navegue hacia el Panel de Administración (Mi Perfil > Manejo de Ocurrencias > nombre de la colección), luego haga click en la Caja de Herramientas de Procesamiento. Haga click en la tabla de Reportes. Una tabla será desplegada que le mostrará el número de especímenes en cada estado de procesamiento. Para ver las ocurrencias una a una, haga click en el ícono de editar (lápiz) en la columna **Count**. Para ver las ocurrencias como una lista, haga click en el ícono de tabla en la columna **Count**.

Esta página también le mostrará cuántas de sus ocurrencias no tienen imágenes vinculadas y a cuántas les hacen falta datos esqueléticos (p.e., un valor en el campo de Nombre Científico).

![Tabla de Reportes en la Caja de Herramientas de Procesamiento](/img/reportstab.png)
