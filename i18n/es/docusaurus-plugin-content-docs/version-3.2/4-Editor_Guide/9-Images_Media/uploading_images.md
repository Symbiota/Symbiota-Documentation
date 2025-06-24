---
title: "Cargando Imágenes"
date: 2021-10-06
weight: 10
draft: false
authors: ["Ed Gilbert", "Ben Brandt", "Katie Pearson"]
translators: ["Samanta Orellana"]
keywords: ["imágenes"]
---

import ReactPlayer from "react-player";

:::info
Esta página describe cómo cargar imágenes individuales de _campo_ y de _especímenes_ directamente a un portal Symbiota. También es posible vincular imágenes que están almacenadas en servidores externos. Para más información de la última opción, visite la página [Añadiendo/Vinculando Imágenes por Lote](https://biokic.github.io/symbiota-docs/es/coll_manager/images/batch/).
:::

Existen tres categorías de imágenes que pueden ser vinculadas en un portal Symbiota. Instrucciones para cargar cada uno de estos tipos son descritas a continuación.

### Imágenes individuales de especímenes

1. Ingrese en su cuenta del portal.
2. Navegue a la página de Editor de Ocurrencias del registro de espécimen en el que desea añadir la imagen (Mi Perfil > Manejo de Ocurrencias > nombre de la colección > Editar Registros de Ocurrencia Existentes > realice la búsqueda del espécimen)
3. Haga click en la pestaña de imágenes.

![Pestaña de Imágenes](/img/imagestab.PNG)

4. Si una imagen ya ha sido añadida al espécimen, y desea añadir otra, haga click en el signo más verde, en la parte superior derecha de la ventana. De otra forma, la interfaz de carga de imagen será marcada en amarillo en esta página.
5. Haga click en el Botón Elegir archivo y navegue al archivo de la imagen que desea subir. Si, en cambio, tiene una URL hacia la imagen, puede hacer click en Ingresar URL y pegar la URL en el campo resultante.
6. Introduzca cualquier información adicional, si desea, en los otros campos de la carga de imagen.

:::tip
Puede agregar un número en el campo Ordenar si desea definir el orden en el cual múltiples imágenes van a aparecer en la página de ocurrencia. Si ingresa un número mayor que 500 en el campo de Ordenar, esa imagen será desplegada en los detalles de la ocurrencia, pero no en la página de Perfil Taxonómico de ese taxón. Esto es ideal para imágenes de poca calidad o imágenes sensibles (e.g. especímenes atropellados).
:::

7. Haga click en el botón Enviar Nueva Imagen.

### Imagen de campo sin información de localidad

Imágenes sin localidad específica de localidad (e.g. coordenadas lat/long) son vinculadas únicamente al nombre científico del organismo. Estas imágenes pueden ser vistas en la página de Perfiles Taxonómicos, que tiene información general como descripciones, mapas de distribución, sinónimos, y nombres comunes. Para cargar imágenes:

1. Ingrese en su cuenta del portal.
   :::note
   Debe tener permisos de Editor de Perfiles Taxonómicos para poder realizar los siguientes pasos.
   :::
2. Navegar a la página del taxón que desea editar. Para hacerlo, puede realizar lo siguiente:
   - Hacer click en el Mapa del Sitio, luego Visualizador de Árbol Taxonómico o Explorador Taxonómico. Busque el taxón de interés y haga click en su nombre.
   - Hacer una búsqueda rápida en la página de Inicio con el taxón de interés.
3. Haga click en el ícono de lápiz en la esquina superior derecha de la página del taxón.
4. Haga click en la pestaña Añadir Imagen.
5. Seleccione el archivo de la imagen que desea subir en Elegir Archivo, luego ingrese cualquier información adicional en los campos provistos.
   - El campo **Secuencia de Orden** permite que determine el orden en el que las imágenes serán desplegadas en el perfil del taxón. Mientras más alto el número, más abajo de la lista de prioridad estará la imagen.
6. Haga click en el botón Cargar Imagen.
7. Las imágenes de campo son subidas y manejadas a través de la interface del Editor del Perfil Taxonómico. Los usuarios con permisos de editor de Perfiles Taxonómicos pueden enviar imágenes haciendo click en el símbolo de edición ubicado en la parte superior derecha de cualquier página de Perfiles Taxonómicos, o por medio de los enlaces de carga disponibles en la página de mapa del sitio. Las imágenes de campo con detalles específicos de localidad (e.g. coordenadas) pueden ser cargadas como Imágenes Voucher (ver abajo).

### Imagen voucher (imágenes de campo con información de localidad)

Las imágenes de campo con información específica de localidad pueden servir como vouchers de una observación de campo para muchas aves, mamíferos y plantas fáciles de identificar. Sin embargo, existen algunos grupos taxonómicos que requieren análisis microscópicos o químicos para identificación adecuada (e.g. líquenes, briofitas, fungi). Para tales organismos, las imágenes de campo pueden tener un valor limitado. Por esta razón, algunos portales pueden rechazar el envío de este tipo de imágenes sin el espécimen físico.

Es particularmente importante que las imágnes que pretendan usarse como vouchers para observaciones sean de alta calidad y desplieguen características diagnósticas morfológicas del organismo con claridad. Los campos de datos requeridos para que una imagen califique como voucher, incluyen: nombre del observador, fecha de observación, país, estado, descripción de localidad, latitud, longitud, y al menos una imagen.

Como es en el caso de especímenes físicos, las Imágenes Voucher se despliegan tanto en las páginas de Detalles de la Ocurrencia y en la página de Perfiles Taxonómicos. Las observaciones respaldadas con imágenes pueden ser cargadas en un perfil General de Observaciones de Investigación. El siguiente video describe como ganar acceso y enviar observaciones a dicha colección:

<ReactPlayer
  playing={false}
  controls
  url="http://www.youtube.com/watch?v=4uj15JCzHg4"
/>
