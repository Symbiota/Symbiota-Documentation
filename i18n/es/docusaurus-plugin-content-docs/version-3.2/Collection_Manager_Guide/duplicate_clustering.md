---
title: "Agrupamiento de Duplicados"
date: 2021-12-13
sidebar_position: 15
authors: ["Katie Pearson"]
translators: ["Samanta Orellana"]
keywords: ["duplicados", "especímenes duplicados"]
---

import ReactPlayer from "react-player";

:::info

Esta página describe cómo ver y enlazar por lote especímenes duplicados (especímenes del mismo taxón colectados el mismo día, por la misma persona, en el mismo lugar) usando la herramienta de Agrupamiento de Duplicados.

:::

Las ocurrencias pueden ser enlazadas como duplicados individualmente durante o después del ingreso de datos utilizando herramientas en el editor de ocurrencias. Vea [esta página](https://biokic.github.io/symbiota-docs/es/editor/links/) para más información de cómo enlazar duplicados de forma individual y [esta página](https://biokic.github.io/symbiota-docs/editor/edit/duplicates/) para más información sobre el uso de la herramienta de coincidencia de duplicados durante la entrada de datos.

Las ocurrencias también pueden ser enlazadas automáticamente por lote por la herramienta de Agrupamiento de Duplicados. Esta herramienta crea un índice temporal de las fechas de colecta, números de colector y apellidos de colectores de sus ocurrencias, y después enlaza cualquier ocurrencia que comparte estas tres características.

Para ver o enlazar duplicados, navegue al Panel de Control de Administración (Mi Perfil > Manejo de Ocurrencias > nombre de la colección) y haga click en Agrupamiento de Duplicados.

- Para ver duplicados existentes, haga click en _Grupos de especímenes duplicados_
- Para ver duplicados con identificaciones taxonómicas que no encajan, haga click en _Grupos de especímenes duplicados con identificaciones conflictivas_. Un ejemplo de los resultados de esta herramienta es mostrado abajo.
- Para enlazar duplicados por lote, haga click en _Enlazar especímenes duplicados por lote_. Esto ejecutará automáticamente un script para enlazar registros, que creará los grupos de duplicados.

:::tip

Cuando está revisando los grupos de duplicados, puede ver el registro para cualquier ocurrencia haciendo click en el número de catálogo en letras azules.

:::

![Ejemplo de Conflictos Duplicados](/img/exampleduplicateconflicts.png)

Aquí puede encontrar un tutorial en video sobre cómo se pueden usar las herramientas de agrupación en clústeres duplicadas para resolver identificaciones conflictivas:

<ReactPlayer
  playing={false}
  controls
  url="https://www.youtube.com/watch?v=kMUzwoHmXw4"
/>
