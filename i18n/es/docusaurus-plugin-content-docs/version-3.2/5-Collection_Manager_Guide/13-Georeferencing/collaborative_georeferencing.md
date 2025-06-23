---
title: "CoGe de GEOLocate"
date: 2021-12-02
draft: false
authors: ["Katie Pearson"]
translators: ["Samanta Orellana"]
weight: 15
keywords: ["georreferenciando", "georreferenciación colaborativa", "GEOLocate"]
---

La Herramienta Colaborativa de Georreferenciación de GEOLocate (CoGe) puede ser activada e integrada en un portal Symbiota para incluir a múltiples usuarios en una plataforma de georreferenciación central fuera del portal. Más información acerca de esta plataforma puede ser encontrada aquí: [GeoLocate CoGe page](https://coge.geo-locate.org/).

Un [webinar introductorio a CoGe puede ser encontrado aquí](https://youtu.be/1IZhUMqCGvs).

Los pasos generales de un flujo de trabajo con CoGe son los siguientes:

1. Crear un perfil en el sitio web de CoGe
2. Crear una comunidad en el sitio web de CoGe
3. Añadir miembros a su comunidad en CoGe
4. Añadir datos a la comunidad CoGe desde su portal Symbiota
5. Solicitar que los miembros georreferencien en el sitio web de [CoGe](https://www.geo-locate.org/web/WebComGeoref.aspx).

:::note

Puede ya sea enviar datos a CoGe directamente desde su portal Symbiota, o puede descargar los registros como archivos CSV, subirlos a CoGe, descargarlos una vez termine el proceso, y luego volver a subirlos a Symbiota. Sin embargo, si envía datos directamente de CoGe, todas las gerorreferencias realizadas en CoGe serán aplicadas automáticamente a sus registros en el portal Symbiota. Las actualizaciones se realizarán "en vivo" en el portal.

:::

Un manual para encargados de colecciones/administradores que usan la herramienta de Georreferenciación Colectiva (CoGe) puede ser encontrado aquí: [https://epicc.berkeley.edu/wp-content/uploads/2015/11/UsingGeoLocateforCollaborativeGeoreferencing_2016.pdf](https://epicc.berkeley.edu/wp-content/uploads/2015/11/UsingGeoLocateforCollaborativeGeoreferencing_2016.pdf). Este manual cubre los pasos 1-3 mencionados anteriormente, pero no cubre cómo añadir ocurrencias a to CoGe desde un portal Symbiota. Video tutoriales pueden ser encontrados aquí: [https://www.geo-locate.org/community/default.html](https://www.geo-locate.org/community/default.html).

Instrucciones para el paso 4 son incluidas abajo.

Instrucciones y ejemplos para el paso 5 pueden ser encontradas aquí ([GEOLocate CoGe Training Course](https://www.capturingcaliforniasflowers.org/georeferencingcourse-coge.html)), and a written protocol can be found here ([GEOLocate CoGe Protocol](https://www.capturingcaliforniasflowers.org/uploads/1/6/3/7/16372936/georeferencingincoge.docx)).

### Enviando especímenes de un Portal Symbiota a CoGe de GEOLocate

#### (paso 4 listado arriba)

1. Navegar a su Panel de Control de Administración (Mi Perfil > Editor de Ocurrencias > nombre de la colección).
2. Hacer click en la Caja de Herramientas de Procesamiento.
3. Si CoGe ha sido habilitado para su portal, una pestaña nombrada GeoLocate CoGe será visible. Hacer click en esta pestaña. Si CoGe no está habilitado, contacte al administrador de su portal para solicitar esta función.

![GeoLocate CoGe tab](/img/geolocatecoge.png)

5. Hacer click en la casilla **CoGe Status** en la página resultante, y conéctese a CoGe usando su usuario e información de cuenta CoGe en la ventana o pestaña emergente.
6. Regrese a su página en el portal Symbiota.

:::tip

Si se ha conectado previamente a CoGe, haga click en el botón Check Status en lugar de volver a conectarse. Si no se muestra el aviso "Connected" en verde luego de hacer click en este botón, trate de conectarse y desconectarse, y luego volver a conectarse en CoGe. Si aún no funciona, consultar con el administrador de su portal para asegurarse que su portal está habilitado para interactuar con CoGe.

:::

6. Las comunidades CoGe que maneje estarán ahora listadas bajo la casilla **Available Communities** (comunidades disponibles). Si no hay comunidades visibles, [aseguúrese de haber creado una comunidad en el sitio web de CoGe](https://epicc.berkeley.edu/wp-content/uploads/2015/11/UsingGeoLocateforCollaborativeGeoreferencing_2016.pdf).
7. En la parte superior de la página, utilice el filtro Processing Status y/o filtros adicionales para buscar los registros que le gustaría enviar a CoGe (i.e., que le gustaría georreferencia en el sitio de CoGe). Una vez haya entrado los parámetros/filtros de búsqueda, haga click fuera de este campo, y verá cuántos registros pueden ser encontrados en la casilla **CoGe Status** bajo **Match Count**.
8. En la casilla de **Available Communities**, haga click en el botón redondo junto a la comunidad CoGe a la cual le gustaría asignar los registros.
9. Introduzca un nombre breve para el conjunto de datos en la casilla "Data source identifier (primary name):" y una descripción, si es desado.
10. Si le gustaría que las georrefrencias de CoGe sean aplicadas automáticamente a sus registros en el portal Symbiota, haga click en el botón "Push Data to GeoLocate CoGe" (enviar datos). Si planifica usar el flujo de trabajo de descarga (Symbiota -> CSV), carga (CSV -> CoGe), descarga (CoGe -> CSV), carga (CSV -> Symbiota), haga click en el botón "Download Records Locally" (descargar registros localmente).

:::tip

También puede utilizar el botón "Download Records Locally" para revisar rápidamente si los especímenes que está publicando a CoGe son los esperados.

:::

10. Regrese al [sitio CoGe](https://coge.geo-locate.org/), navegue a su tableero, haga click en el nombre de la comunidad a la que envió los registros, y haga click en el botón GO TO COMMUNITY.
11. Haga click en el nombre del conjunto de datos que envió a CoGe.

![Tablero CoGe](/img/cogedashboard.png)

13. Haga click en el botón Update Cache.
14. Una vez el cache ha sido completamente actualizado, los datos estarán disponibles en el [sitio web de CoGe](https://www.geo-locate.org/web/WebComGeoref.aspx).

### Revisando Georreferencias Creadas en CoGe de GEOLocate

1. Para ver las georreferencias que han sido creadas en CoGe, navegue al Panel de Control de Administración (Mi Perfil > Editor de Ocurrencias > nombre de colección).
2. Haga click en Revisar/Verificar Ediciones de Ocurrencia.
3. En la casilla de Filtro en la parte superior derecha, seleccione la opción External (externo) del menú desplegable en el campo Editing Source (editar fuente). Luego haga click en Submit Filter (enviar filtro).
4. Las ediciones que fueron aplicadas en CoGe ahora serán visibles en la tabla de revisor.

![Ediciones de Coge](/img/viewcogeedits.png)
