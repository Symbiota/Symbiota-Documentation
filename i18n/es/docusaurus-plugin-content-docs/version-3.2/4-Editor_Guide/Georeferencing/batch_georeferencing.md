---
title: "Georreferenciación por Lote"
date: 2021-11-16
lastmod: 2021-11-16
draft: false
authors: ["Katie Pearson"]
translators: ["Samanta Orellana"]
keywords: ["georreferenciando", "ediciones por lote"]
---

:::info

Esta página describe la funcionalidad de la herramienta de Georreferenciación por Lote. Los protocolos para georreferenciación varían por institución, pero puede utilizar cualquiera de las herramientas descritas a continuación.

:::

1. Acceda a su cuenta en el portal, haga click en “Mi Perfil,” navegue a la pestaña “Manejo de Ocurrencias”, y haga click en el nombre de la institución para la cual realizará la georreferenciación.
2. En el Panel de Control de Edición, haga click en “Georreferenciar Especímenes por Lote.”
3. Añada sus términos de búsqueda deseados en la casilla del Formulario de Consultas. Puede buscar por País, Estado, Condado, Municipalidad, Estado de Procesamiento y/o Términos de Localidad. Luego haga click en Generar Lista.

![Herramienta de Georreferenciación por Lote](/img/batchgeoreference.png)

4. Seleccione la entrada en la que quiere trabajar y haga click en el ícono de Geolocate ![Herramienta de Georreferenciación por Lote](/img/geolocate.png) en la parte superior derecha de los resultados de la búsqueda. Esto abrirá una nueva ventana de GeoLocate (ver la siguiente imagen) desplegando un mapa y, en algunos casos, posibles localidades para el espécimen que GeoLocate infiere a partir del texto.
   - El punto verde es la mejor aproximación de GeoLocate para la localidad del espécimen. También puede ver los puntos rojos, que representan opciones alternativas.
   - Para ver las razones por las que GeoLocate seleccionó estos puntos, haga click en la pestaña “# possible locations found” a la derecha de la pestaña Workbench. Las palabras en todas las capas, son aquellas que GeoLocate usó para inferir la localidad.

![GEOLocate Options](/img/georeferenceguesses.jpg)

5. Haga click en el botón “Options” en la parte inferior izquierda de la ventana de GeoLocate y asegúrese que la casilla “Do Uncertainty” esté marcada. Cierre la ventana de opciones de Georreferenciación.
6. Asegúrese que todas las casillas (latitud, longitud, incertidumbre y polígono de error) cerca de la parte inferior derecha de la ventana, estén marcadas.
7. Si aparecen puntos en el mapa, investigue si alguno de ellos podría ser un buen inicio para georreferenciar, comparando los puntos con las localidades en el mapa y el texto en la casilla de Localidad (ver la casilla punteada en la imagen de arribae). Es posible que ninguno de los puntos indique la localidad correcta. Si este es el caso, puede ignorar los puntos o removerlos haciendo click en la pestaña “# possible locations found” y haciendo click en la ‘x’ circular a la izquierda de cada resultado rechazado (vea abajo).
   - Cuando esté decidiendo si usar o no los puntos obtenidos en GeoLocate, asegúrese de revisar que el estado y el país en el que se encuentra el punto coincida con el estado y el país indicado en el registro.

![GEOLocate Options](/img/geolocateoptions.png)

8. Ya sea si empieza con un punto de GeoLocate, de ser apropiado, o si empieza sin puntos, use la información en la casilla de Localidad para determinar una localidad aproximada para el espécimen. Esto probablemente va a requerir revisar otras fuentes (e.g., Google maps) para revisar los nombres de localidades e indicaciones.
   - Puede cambiar la capa base (i.e., el tipo de mapa mostrado en la ventana de GeoLocate) haciendo click en el símbolo más en la esquina superior derecha de la ventana (ver la imagen siguiente).
   - Para medir la distancia en el mapa, haga click en el botón junto a “Measure” y haga click en un punto inicial en el mapa. Luego puede mover el cursor hacia cualquier otro punto en el mapa y una línea aparecerá con la medida entre los dos puntos. La distancia de la línea será mostrada en verde, junto a la línea. Para medir entre más de un punto, haga click nuevamente para marcar otro punto. Para dejar de medir, haga doble click en el punto final de su medida.
   - Si no existe suficiente información en la casilla de Localidad para asignar un punto aproximada, vea el registro del espécimen regresando a la página de resultados de la búsqueda (ver imagen de abajo) y haga click en el ícono de lápiz en la parte superior derecha de la casilla de resultados. Esto hara aparecer el registro del espécimen, donde puede ver más información de la localidad o algún otro campo de información (e.g., hábitat) o en la imagen del espécimen (de estar disponible).
     - Si aún no es posible asignar una localidad aproximada a partir de esta información, baje hasta la parte inferior del registro del espécimen hasta que vea el campo de Estado de Procesamient. Seleccione “Experto Requerido” del menú desplegable en este campo. En el campo de “Notas (Comentarios de Occurrencia)” arriba a la izquierda, ingrese una nota breve en corchetes, como “[No existe suficiente información para georreferenciar]”. Haga click en el botón “Guardar Ediciones”, cierre el registro, y seleccione un nuevo registro para georreferenciar.

![GEOLocate Options](/img/geolocateoptions2.jpg)

9. Una vez que haya encontrado una localidad aproximada para el registro del espécimen, haga click en el botón junto a “Place Marker” en la ventana de GeoLocate, y haga clic en el mapa para colocar el punto. Recomendamos usar la [Guía Rápida de Georreferenciación](https://docs.gbif.org/georeferencing-quick-reference-guide/1.0/en/) para determinar dónde colocar el punto.

10. Agregue el radio de error y/o cree un polígono de error para indicar la incertidumbre de la localidad del espécimen. Recomendamos utilizar la [Guía Rápida de Georreferenciación](https://docs.gbif.org/georeferencing-quick-reference-guide/1.0/en/) para determinar qué tan grande debe ser el radio de error para determinado punto y si debería utilizar, en cambio, un polígono de error.
    - Para editar el tamaño del radio de error, haga click en el punto verde en el mapa y seleccione “Editar Incertidumbre” en la ventana emergente. Haga click y arrastre la flecha gris que aparecerá en la parte externa del círculo para modificar el tamaño del radio de error.
    - Para crear un polígono de error, haga click en el botón junto a “Create polygon” y haga click en el mapa donde quiere iniciar a dibujar el polígono. Una esquina del polígono va a ser creada cada vez que haga click en el mapa. Para terminar el polígono, haga doble click. Una vez haya terminado el polígono, haga click en el punto verde de nuevo y seleccione “Resize uncertainty to polygon.”
      - Para volver a hacer el polígono, haga click en el botón “Clear Polygon” a la derecha del botón de “Options”.
    - Asegúrese anotar cualquier duda que haya surgido al trazar el radio de error. Por ejemplo, si está georreferenciando un sitio que no tiene límites claros, explique cómo determinó un radio de error razonable, agregando una nota en el campo de Comentarios en la página de resultados de búsqueda, donde seleccionó inicialmente el registro del espécimen.

![Batch Georeferencing Form](/img/batchgeoreferencemod.png)

11. Cuando esté seguro del punto y el radio de error en GeoLocate, haga click en el botón “Save To Your Application” en la parte inferior de la ventana de GeoLocate. Será regresado a la página de resultados de la búsqueda, donde seleccionó inicialmente el registro del espécimen (ver primera imagen).
    - The coordinates and error will now show up below the search results in the appropriate Latitude, Longitude, and Error fields. If you created an error polygon, its coordinates will be listed in the Footprint WKT field.
12. Haga click en el botón “Actualizar Coordenadas” en el fondo de la página.
13. Seleccione un nuevo registro o conjunto de registros para georreferenciar en la lista de resultados y repita.

### Ejemplos de Protocolos de Georreferenciación por Lote

- [California Phenology Network georeferencing guides](https://www.capturingcaliforniasflowers.org/georeferencing-protocols-and-guides.html)
- [Florida Museum of Natural History georeferencing workflow overview](https://www.floridamuseum.ufl.edu/mossesinflas/georeferencing/)
- [Microfungi TCN batch georeferencing instructions](https://www.microfungi.org/files/1014/7915/7996/Georeferencing.pdf)
- [MSU Herbarium Georeferencing Guide](https://herbarium.appstate.edu/sites/herbarium.appstate.edu/files/missa_how_to_geolocate_in_symbiota_0.pdf)
