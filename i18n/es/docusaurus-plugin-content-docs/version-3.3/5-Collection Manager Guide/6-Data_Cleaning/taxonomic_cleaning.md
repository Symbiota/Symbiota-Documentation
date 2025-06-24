---
title: "Herramientas de Limpieza Taxonómica"
date: 2021-10-08
weight: 4
draft: false
authors: ["Katie Pearson"]
translators: ["Samanta Orellana"]
keywords: ["taxonomía", "limpieza de datos"]
---

import ReactPlayer from "react-player";

:::info

Esta página describe cómo usar las dos herramientas de limpieza taxonómica en los portales Symbiota. Para más información acerca del tesauro taxonómico, visite la página [Taxonomy](/contribute/).

:::

Las herramientas de limpieza taxonómica son excelentes recursos para limpiar nombres científicos mal escritos o que no están vinculados al tesauro taxonómico central. Están diseñadas para asistir en la ubicación y correción de errores e inconsistencias taxonómicas.

### Analizar Nombres Taxonómicos

<ReactPlayer
  playing={false}
  controls
  url="https://www.youtube.com/watch?v=e4Ag8Ggx0hU"
/>

Esta función analiza los valores que existen en el campo de Nombre Científico en su base de datos y marca los valores que no están incluídos en el tesauro taxonómico (i.e., no están vinculados a un nombre reconocido). Note que esta herramienta NO evalúa si un nombre es aceptado de acuerdo con la taxonomía actual. El número de nombres científicos no reconocidos es desplegado en la parte superior de la ventana del Menú de Acción.

![Menú de Acciones de Limpieza Taxonómica](/img/taxonomycleaning.png)

Puede evaluar los nombres científicos no reconocidos y vincularlos con nombres del taxón correcto haciendo click en el nombre del Recurso Taxonómico con el cual quiere comparar los nombres, seleccionando el reino a evaluar, y haciendo click en el botón Analizar Nombres Taxonómicos. Si quiere iniciar con cierto nombre (e.g., ya ha revisado nombres hasta _Mentzelia_), puede introducir este nombre en el campo de Índice de Inicio. También puede alterar el número de nombres que le gustaría que el portal incluya por análisis, agregando el número en el campo de Nombres Procesados por Análisis.
Existen múltiples tipos de resultados al utilizar esta herramienta. En general, la herramienta enumerará los nombres que se están intentando indexar (i.e., hacer coincidir con un nombre taxonómico existente), buscar su recurso taxonómico definido para eso nombre y, si el nombre no es encontrado en el recurso taxonómico, revisar el tesauro taxonómico por nombres similares a los nombres no reconocidos. Va a obtener varias opciones para resolver nombres no reconocidos, dependiendo del tipo de resultado. Para ver los especímenes asociados con cualquier nombre no reconocido, haga click en el ícono de lápiz a la derecha del nombre y número de especímenes, en corchetes. Los tipos de resultados son explicados con más detalles a continuación.

#### Ejemplo 1: Nombres mal escritos, nombres incompletos, o variantes ortográficas

![Taxonomy Cleaning Example 1](/img/taxclean1.png)
Este es el tipo más común de resultado. En este caso, descubrirá que el nombre sin reconocer fue mal escrito o escrito de manera distinta que el nombre reconocido. Puede hacer click en “remapear a este taxón” para cambiar el nombre de los especímenes de esos registros al nombre reconocido.

#### Ejemplo 2: Nombre de taxón sin publicar o no reconocido

![Taxonomy Cleaning Example 2](/img/taxclean1.png)
En este caso, descubrirá que el nombre desplegado en el espécimen no ha sido publicado o no está incluido actualmente en el tesauro taxonómico. En este caso, puede utilizar su experiencia taxonómica para decidir si este espécimen debería ser remapeado a un nombre taxonómico diferente (si está lo suficientemente seguro que son sinónimos) y/o anotar, si el nombre taxonómico debería ser dejado como está y debería ser incluído en el tesauro taxonómico. Si piensa que el nombre ya debería encontrarse en el tesauro taxonómico y no lo encuentra luego de una búsqueda manual, contacte al administrador del portal.

#### Ejemplo 3: El nombre existe pero no se encuentra en el tesauro taxonómico

![Taxonomy Cleaning Example 3](/img/taxclean3.png)
Cuando el portal no encuentra un nombre en el tesauro taxonómico, pero sí encuentra el nombre en el recurso taxonómico, se importará el nombre taxonómico al tesauro taxonómico. Esto también mapeará automáticamente el nombre taxonómico del espécimen a esta nueva entrada en el tesauro taxonómico.

Si no ha analizado todos los nombres taxonómicos de una vez, puede hacer click en el botón Continuar Analizando Nombres para que Symbiota revise los siguientes 20 nombres (o cualquier número elegido por el usuario).

### Distribuciones Taxonómicas

Así como el visualizador de Distribuciones Geográficas, el visualizador de Distribuciones Taxonómicas puede ser utilizado para examinar las familias, géneros, especies y taxa infraespecíficos, que existen en su base de datos. Nombres mal escritos, entradas no estandarizadas, o errores sospechosos pueden ser detectados utilizando esta herramienta. Para ver los géneros de cada familia, haga click en el nombre de la familia. Luego, para ver las especies de cada género, haga click en el nombre de cada género, y así sucesivamente.
A user with administrator permissions can correct errors in taxonomic names individually by clicking the number next to the taxonomic name (circled below), or the user can search for those records using the record search form and batch edit them.

![Taxonomic Distribution Viewer](/img/taxonomycleanviewer.jpg)
