---
title: "Eliminando Registros"
date: 2021-12-08
draft: false
weight: 60
authors: ["Katie Pearson"]
translators: ["Samanta Orellana"]
keywords: ["eliminar","remover"]
---

:::info

Esta página describe cómo eliminar registros de su colección.

:::

:::note

Únicamente el(los) administrador(res) del portal o alguien con acceso al backend puede eliminar más de un espécimen a la vez. Esto está diseñado para proteger la integridad de los datos, como los GUIDs (Identificadores Únicos Globales) y los enlaces a otras tablas en la base de datos.

:::

Elimnar un registro de espécimen es apropiado únicamente cuando el espécimen ya no existe o el registro fue añadido de manera errónea (e.g., era un duplicado exacto de un registro existente). Usted no debería eliminar un registro con el propósito de actualizarlo a añadir una nueva versión del registro.

Para eliminar un registro, navegue hacia la página de editor de ocurrencias de ese registro (vea [esta página](https://biokic.github.io/symbiota-docs/es/editor/edit/) para ayuda sobre cómo navegar a registros específicos) y haga click en la pestaña de Admin. Haga click en el botón “Evaluar registro para ser eliminado” para determinar si el registro puede ser borrado de manera segura. Si existe una imagen para el registro, necesitará desasociarla del espécimen (vea la [página borrar/remapear imágenes](https://biokic.github.io/symbiota-docs/es/editor/images/delete/)) previo a eliminar el registro. Si no existen advertencias en este punto, haga click en el botón Eliminar Ocurrencia.

Para eliminar registros por lote, contacte al administrador de su portal.
