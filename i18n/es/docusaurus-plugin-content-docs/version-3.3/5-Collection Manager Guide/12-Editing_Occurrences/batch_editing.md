---
title: "Ediciones por Lote"
date: 2021-10-28
lastmod: 2021-11-30
draft: false
authors: ["Cynthia Skema", "Ann Barber"]
editors: ["Katie Pearson"]
keywords: ["batch", "edit", "change", "record search form"]
translators: ["Samanta Orellana"]
---

:::info

Esta página describe cómo editar registros por lote.

:::

- Para ver instruciones acerca de georreferenciación por lote, visite [esta página](https://biokic.github.io/symbiota-docs/es/editor/georeference/batch/).
- Los nombres científicos únicamente pueden ser cambiados por lote utilizando las [herramientas de Anotaciones por Lote](https://biokic.github.io/symbiota-docs/es/editor/edit/annotations/) o las [herramientas de Limpieza Taxonómica](/docs/Collection%20Manager%20Guide/Data%20Cleaning/taxonomic_cleaning).

:::note

Tenga precaución cuando utilice esta herramienta. También recomendamos descargar una copia de su base de datos previo a realizar ediciones por lote

:::

1. Existen dos opciones para editar registros de especímenes por lote: puede cambiar el valor del conjunto entero de registros en su colección o puede cambiar un valor por un grupo de registros seleccionados. Para cambiar todos los registros, haga click en “Desplegar Tabla" (_Display Table_) en el formulario de Búsqueda de Registros, luego haga click en el ícono de edición ![Edit Icon](/img/editplus.png) arriba de la tabla resultante con todos los registros de su colección. Continúe hacia el paso 3.
2. Para cambiar el valor para un grupo seleccionado de registros, primero busque los registros de interés utilizando el [formulario de búsqueda](https://biokic.github.io/symbiota-docs/es/editor/edit/). Una vez tenga el grupo de datos con los que desea hacer una edición por lote, haga click en el Ícono de Edición ![Edit Icon](/img/editplus.png) en la parte superior de su tabla de registros seleccionada.
3. En el menú desplegable junto al "Nombre del Campo" en la Actualización por Lote, seleccione el campo que desea editar.
4. En “Valor Actual:” introduzca el texto que está presente en el campo que desea editar.
5. En “Valor Nuevo:” introduzca el texto que desea agregar en el campo editado.
6. Elija si desea hacer que la edición coincida todo el campo o sólo con una parte.
7. Haga click en “Actualzar Campo por Lote” para realizar la edición por lote. Aparecerá una pantalla que le indicará el número de registros que serán actualizados, le advertirá que la operación no puede ser deshecha, y le solicitará que de OK a la edición. Proceda con precaución y vea los siguientes ejemplos.

:::note

⚠️ Es fácil cambiar texto que no se quería cambiar, de una manera inadvertida. Generalmente, mientras más específico sea su texto en “Valor Actual:”, menos probable es que vaya a enfrentar consecuencias inesperadas. De ser posible, obtenga un estimado de cuántos registros en su tabla deberían verse afectados por las ediciones, y compare con el número de registros citados en la advertencia. Si los números no coinciden, vuelva a revisar su estrategia de selección.<br>
No es posible revisar el conteo de registros cuando se filtra por el campo “Modificado Por” primero. Hacerlo, regresa un conteo del número de campos editados por el usuario dentro de todos los registros afectados, en lugar del total de registros que son editados.

:::

#### Ejemplos

✅ **Ejemplo de un buen uso de la edición por lote:** Estandarizar nombres de colectores de plantas. Si está estandarizando toda la colección de Wherry a “Edgar T. Wherry,” entonces podría introducir “E. T. Wherry” in Valor Actual y “Edgar T. Wherry” en Valor Nuevo, usando el campo del nombre del colector para la edición por lote. Repetir para formas alternativas de este nombre (p.e., “E T Wherry,” Edgar T Wherry”).

❌ **Ejemplo de un mal uso de la edición por lote:** Cambiar direcciones cardinales. Por ejemplo, si introdujo “n.” en Valor Actual y “N” en Valor Nuevo para editar por lote una localidad, en un intento de cambiar la n minúscula por mayúscula en "Norte", podría lograrlo, pero también podría cambiar cualquier otro caracter de n minúscula dentro del campo, por ejemplo, al final de una oración. Esto resultaría en una sustitución en lote de “N” donde debería ir “n.”. Por ejemplo, “Al lado de la estación. Lado Este" podría ser transformado en: "Al lado de la estacióN. Lado Este".
