---
title: "OCR por Lote"
date: 2021-12-03
lastmod: 2021-12-03
sidebar_position: 10
authors: ["Katie Pearson"]
translators: ["Samanta Orellana"]
keywords:
  [
    "por lote",
    "OCR",
    "reconocimiento de caracteres ópticos",
    "transcripción automática",
  ]
---

import ReactPlayer from "react-player";

El Reconocimiento de Caracteres Ópticos (OCR) es el uso de algoritmos computacionales para detectar información de texto en imágenes. Si las herramientas OCR están activadas en su portal Symbiota, puede utilizar OCR para tratar de analizar información textual en imágenes, e.g., etiquetas de especímenes, e ingresar datos en los campos apropiados a partir de esa información. Las instrucciones para utilizar procesos OCR por lote, son descritos a continuación. Para instrucciones de cómo usar OCR en el editor de Occurrencias, vea la [página de OCR en la Guía para Editores](https://biokic.github.io/symbiota-docs/es/editor/edit/ocr/).

### Generar OCR por Lote para Registros en un Portal

Para ejecutar un análisis OCR en muchas imágenes de especímenes a la vez

1. Navegue al Panel de Control de Administración (Mi Perfil > Manejo de Occurrencias > nombre de la colección).
2. Hacer click en la Caja de Herramientas de Procesamiento.
3. Si el OCR está disponible en su portal, haga click en la pestaña de OCR.
4. Desde aquí, puede ver cuántos especímenes tienen guardado algún resultado OCR, y puede ejecutar un análisis OCR en un número designado de especímenes utilizando la casilla **Analizar Imágenes por lote con OCR, usando el Motor Tesseract OCR**. Indicar el estado de procesamiento de los registros para los cuales desea ejecutar el análisis OCR en el campo "estado de procesamiento", e indique cuántos de estos registros le gustaría analizar a la vez, utilizando el campo "Número de registros a procesar".

![Batch OCR Tool](/img/batchocr1.png)

Un video tutorial de este proceso puede ser encontrado aquí:

<ReactPlayer
  playing={false}
  controls
  url="https://www.youtube.com/watch?v=VUMVb3-R8mw"
/>

### Cargar OCR Pre-Generados

Algunos portales también incluyen una interfaz en la cual puede cargar archivos de texto OCR generados fuera del ambiente del portal. Por ejemplo, ABBYY FineReader tiene la habilidad de analizar especímenes por lote con OCR y presentar resultados como archivos de texto separados (.txt) nombrados como la imagen de origen. Los archivos de texto OCR están vinculados a los registros de especímenes por medio de los números de catálogo extraídos del nombre del archivo y comparándolo con el nombre de los archivos OCR y de la imagen.

Esta herramienta también puede ser encontrada en la pestaña OCR de la Caja de Herramientas de Procesamiento.

Para cargar un archivo, asegúrese que su colección y archivos cumplen con los siguientes requisitos:

- Los archivos OCR deben estar en formato de texto con una extensión .txt. Cuando use ABBYY, utilice la configuración: "Create a separate document for each file", "Save as Text (\*.txt)", and "Name as source file"
- Comprima múltiples archivos OCR en una sola carpeta zip para cargarlos en el portal
- Los archivos deben ser nombrados utilizando el Número de Catálogo. Las expresiones regulares de abajo deben ser utilizadas para extraer los números de catálogo del nombre del archivo.
- Ya que el texto OCR necesita ser vinculado a la imagen de origen, las imágenes deben haber sido cargadas previamente en el portal
- Si existe más de una imagen vinculada al espécimen, el nombre completo del archivo será usado para determinar cuál imagen será vinculada al OCR

![Batch OCR Upload](/img/batchocr2.png)
