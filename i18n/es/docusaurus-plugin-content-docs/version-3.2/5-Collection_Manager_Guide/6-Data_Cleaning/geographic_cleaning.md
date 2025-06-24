---
title: "Herramientas de Limpieza Geográfica"
date: 2021-10-12
weight: 3
draft: false
authors: ["Katie Pearson"]
translators: ["Samanta Orellana"]
keywords: ["geografía", "limpieza de datos"]
---

:::info

Esta página describe cómo usar las dos herramientas de limpieza geográfica integradas en los portales Symbiota, para limpiar información geográfica por lotes en las ocurrencias.

:::

Las dos herramientas de limpieza geográfica son el visualizador de Distribución Geográfica y la Herramienta de Limpieza Geográfica.

### Visualizador de Distribución Geográfica

Navegar hacia esta herramienta a través del Panel de Control de Administración (Mi Perfil > Manejo de Ocurrencias > nombre de la colección). Hacer click en Herramientas de Limpieza de Datos, luego Distribuciones Geográficas.

El visualizador de Distribución Geográfica puede ser utilizado para examinar los países, estados y condados que existen en su base de datos. Cualquier error de escritura, entradas no estandarizadas (e.g., “USA” en lugar de “United States”), o errores sospechosos (e.g., “United Arab Emirates” en lugar de “United States”) pueden ser detectados utilizando esta herramienta. Para ver los valores de estado/provincia para cada país, haga click en el nombre del país. Luego, para ver los valores de condado para cada estado/provincia, haga click en el nombre del estado/provincia.

Un usuario con permisos de administrador puede corregir errores en país, estado/provincia y/o condado individualmente haciendo click en el número junto al nombre del lugar (marcado en la siguiente imagen), o puede buscar esos registros utilizando el formulario de búsqueda de registros y editarlos por lote.

![Visualizador de Distribución Geográfica](/img/geographicdistribution.jpg)

### Herramienta de Limpieza Geográfica

Encuentre esta herramienta a través del Panel de Control de Administración (Mi Perfil > Manejo de Ocurrencias > nombre de la colección). Haga click en Herramientas de Limpieza de Datos, luego en Herramientas de Limpieza Geográfica.

La Herramienta de Limpieza Geográfica buscará en sus bases de datos términos geográficos no estandarizados (países, estados/provincias y condados) utilizados en su colección. Estos términos serán listados como “cuestionables”. Para ver y potencialmente editar estos registros, puede hacer click en el enlace “Listar [términos]...” (un ejemplo señalado abajo).

![Herramienta de Limpieza Geográfica](/img/geocleaningtool.jpg)

Esta herramienta también verificará si existen registros que carecen de datos en los campos de país, estado/provincia, condado, aunque tengan datos geográficos en otros campos. Por ejemplo, la línea “País nulo con estados/provincias no nulos” despliega todos los registros que no tienen un valor de país en el registro del espécimen, aunque exista un estado o provincia listada en el campo respectivo. Puede hacer click en “Listar registros...” y asignar un valor geográfico superior a esos registros (ver ejemplo abajo).

![Ejemplo de Herramienta de Limpieza Geográfica](/img/geocleaningexample.PNG)

Listados similares son provistos para registros con campos vacíos de estado/provincia pero con información en el campo de condado, y para registros con campos vacíos de condado, pero información en el campo de localidad.
