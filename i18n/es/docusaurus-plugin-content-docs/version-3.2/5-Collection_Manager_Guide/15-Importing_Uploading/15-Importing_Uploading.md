---
title: "Importando y Subiendo Datos"
date: 2021-10-07
authors: ["Ed Gilbert"]
editors: ["Katie Pearson"]
translators: ["Samanta Orellana"]
weight: 150
keywords: ["subir datos", "importar datos", "subir archivos", "IPT"]
---

:::info

Esta página provee instrucciones para subir datos en una colección existente dentro de un portal Symbiota. Contacte al administrador de su portal si aún no cuenta con una colección en el portal Symbiota deseado.

:::

## Iniciar la Carga de Datos

1. Navegue al Panel de Control de Administración (Mi Perfil > Manejo de Ocurrencias > nombre de su colección).
2. Haga click en Importar/Actualizar Registros de Especímenes, luego seleccione "Crear un nuevo Perfil de Importación".
3. Crear un título para su perfil de carga en el campo Título.
4. Seleccione el Tipo de Carga deseado en el menú desplegable.

   - **Carga Manual de Archivo Darwin Core:** Use este tipo de carga si los datos que desea subir están en el formato de un [Archivo Darwin Core](http://en.wikipedia.org/wiki/Darwin_Core_Archive). Un Archivo Darwin Core (DwC-A) es un estándar de datos usado comúnmente para almacenar datos de ocurrencias de especies en un sólo conjunto de datos autónomo. Un DwC-A incluye metadatos, un archivo de ocurrencia de datos y, a menudo, archivos con determinaciones de especies (identificaciones) e imágenes.
   - **Recurso IPT / Proveedor de Archivo Darwin Core:** Use este tipo de carga si va a proveer una URL de un Archivo Darwin Core existente y ya publicado en la web, como los que son provistos por medio de una IPT.
   - **Carga de Archivos:** Use este tipo de carga si va a proveer un archivo separado por comas (CSV) o un archivo separado por tabulaciones (TSV) que contiene TODOS los campos de sus datos de ocurrencia. Puede convertir un documento de Excel en un archivo CSV haciendo click en Guardar Como, y luego seleccionando texto delimitado por comas (CSV) en los tipos de archivo. Notar que, si los datos existen en el portal para cualquiera de las ocurrencias que está cargando, esos datos serán sobreescritos por los datos que está subiendo. Para subir registros parciales, use una Carga de Archivos Esqueléticos.
   - **Carga de Archivos Esqueléticos:** Use este tipo de carga si va a proveer un archivo CSV o TSV conteniendo datos de sólo unos campos (e.g., georreferencias o algunos otros datos auxiliares). Notar que cualquier dato provisto en un archivo esquelético NO va a sobreescribir datos existentes en la base de datos, así que cualquier dato preexistente en los campos deseados deberá ser eliminado si desea reemplazarlos con los datos del archivo esquelético.
   - **Carga de Archivo de NfN:** Use este tipo de carga si va a proveer un archivo CSV producido a partir de Notes from Nature.
   - **Mapeo Directo de Base de Datos:**
   - **Procedimiento Almacenado:** Use esta opción si está transfiriendo desde una fuente de esquema a una base de datos Symbiota localizada en el mismo servidor de la base de datos MySQL.
   - **Carga de Script:** Use esta opción si está transfiriendo información desde una fuente MySQL a una base de datos Symbiota que está localizada en un servidor distinto.

5. Siga las siguientes indicaciones de acuerdo con el tipo de carga seleccionado.

### Carga Manual de Archivo Darwin Core

[¡Contribuya con esta sección!](/docs/about)

### Recurso IPT / Proveedor de Archivo Darwin Core

[¡Contribuya con esta sección!](/docs/about)

### Carga de Archivos o Carga de Archivos Esqueléticos

1. Si usted o el administrador de su portal ha creado un Procedimiento Almacenado con limpieza de datos u otras revisiones, introduzca el nombre del procedimiento almacenado en el campo provisto. De otra manera, ignore este paso.
2. Haga click en el botón Crear Perfil.
3. En la siguiente página, verá una lissta de los perfiles de carga existentes. Seleccione el perfil que desee usar (el que creó) y haga click en Iniciar Carga.
   - Para editar su perfil de carga en el futuro, puede hacer click en el ícono de lápiz en esta página.
4. Haga click en el botón de Elegir Archivo y navegue al archivo que desea subir en su Administrador de Archivos o ventana de Búsqueda. Seleccione el campo y haga click en Abrir.
5. Haga click en el botón Analizar Archivo.
6. Si la colección a la que está subiendo los datos es de manejo en vivo (el portal es su sistema de manejo de datos), proceda al paso 7. Si la colección a la que desea subir datos es un “snapshot” o una base de datos de especímenes manejada en la institución base, seleccione la llave primaria para la fuente del registro del espécime del menú desplegable. La llave primaria es un campo requerido para conjuntos de datos que servirán como el identificador primario del registro (el enlace permanente entre la base de datos original y el registro en el portal). Este campo debe estar completo para cada registro, con valores únicos. Estos valores también deben ser estables y no deben cambiar en la base de datos central con el tiempo. Las colecciones snapshot típicamente utilizarán el número de catálogo (número de acceso), código de barras, o la llave primaria de la base de datos original para este campo.
7. Ahora verá un apágina que se verá similar a la mostrada abajo. La longitud y contenido de los campos Campos de Origen/Campos Objetivo de la tabla dependeràn de qué columnas fueron incluidas en el archivo CSV original.

![Ejemplo del Módulo de Carga de Datos](/img/DataUploadModule.PNG)

8. Seleccione cuáles campos en su archivo CSV (**Campos Originarios** o _Source Fields_) corresponden con cuáles campos en el portal Symbiota portal (**Campos Destino** o _Target Fields_). Revise la [Guía de Campos de Datos de Symbiota](/docs/Collection_Manager_Guide/Importing_Uploading/data_import_fields) para definiciones de cada campo de datos. También vea la sección **Tips para la Carga de Datos** abajo.
9. Una vez que esté satisfecho con su mapeo de campo a campo (ver las siguientes Notas), haga click en el botón "Guardar Mapeo".
10. Seleccione si le gustaría que el script haga coincider los datos de su archivo con datos existentes en el portal basado en el Número de Catálogo o en Otros Números de Catálogo. Solamente necesita hacer esto si está añadiendo tados a registros que ya existan en el portal. De otra forma, déjelo sin marcar.
11. Seleccione el Estado de Procesamiento que le gustaría aplicar a todos los registros cargados (si lo desea) seleccionando la opción del menú desplegable.
12. Haga click en el botón de Iniciar Carga. Esto cargará sus datos en una tabla _temporal_ para que usted pueda revisarla antes de realizar la carga final.
13. Verifique que el número correcto de registros están siendo actualizados y/o añadidos, viendo el Reporte de Datos Pendientes de Transferir en la página siguiente.

![Captura de pantalla del Reporte de Datos Pendientes de Transferir](/img/PendingDataTransport.PNG)

14. Vea los datos que han sido almacenados en la tabla temporal para asegurarse que mapeó y configuró los campos que desea subir, de manera adecuada. Puede ya sea:
    - Hacer click en el ícono pequeño de caja a la derecha de "Registros para ser actualizados" o "Nuevos registros" para ver los registros en una tabla en su navegador.
    - Haga click en el ícono de archivos múltiples, a la derecha del ícono de caja, para descargar el archivo CSV de los registros que van a ser cargados o de los nuevos registros.
15. Si algo es incorrecto, corrija su archivo CSV y vuelva a subirlo siguiendo los pasos de arriba, o regrese a la ventana de mapeo y corrija los campos que fueron mapeados. Si todo se ve bien, haga click en el botón Transferir Registros a la Tabla Central de Especímenes. **¡Note que este paso es final y no es posible deshacerlo!**

### Procedimiento Almacenado

1. Escriba un procedimiento almacenado utilizado para transferir registros (los scripts de limpieza de la colección pueden ser agregados en un proceso almacenado central para mantenerlos separados).
2. Configure el script para correrlo como un cronjob regular.

### Carga de Script

1. Escriba un procedimiento almacenado utilizado para transferir registros. Un script de ejemplo en Linux está ubicado aquí: [SampleSystemUpload.sh](https://symbiota.org/wp-content/uploads/SampleSystemUpload.sh). Los scripts de limpieza pueden ser colocados en un procedimiento almacenado central o mantenerse separados.
2. Configure el script para correrlo como un cronjob regular.

## Consejos para Subir Datos

:::tip

Una lista de campos que pueden ser importados a un portal de datos Symbiota puede ser [encontrado aquí](/docs/Collection_Manager_Guide/Importing_Uploading/data_import_fields).

:::

- Si los nombres científicos en su archivo CSV incluyen autoridades taxonómicas (e.g., _Acer circinatum_ Pursh), mapee este campo al Campo Destino “scientificname.” Si el nombre científico en su CSV NO incluye autoridades taxonómicas, mapee este campo a “sciname.”
- Las fechas de colecta mapeadas a eventDate serán evaluadas y validadas. Fechas incompatibles serán transferidas al campo verbatimEventDate. La mayoría de los formatos estándar de fecha son aceptados, incluyendo fechar gregorianas y el formato de fecha de Excel (únicamente para Estados Unidos). eventDate será generado de valores separados en los campos year,month, y day. Si los campos de mes o día son dejados en blanco, los valores ’00’ serán usados (ex: 1954-03-00, 1965-00-00). Los valores del campo de mes pueden ser numéricos o de texto (inglés o español).
- Los scripts intentan extraer valores válidos de fechas a partir del campo verbatimEventDate cuando el campo eventDate es nulo. Los valores de ’00’ son usados para días o meses faltantes (ex: 1954-03-00, 1965-00-00)
- Si los valores del campo de elevación no están consistentemente en metros, serán mapeados al campo verbatimElevation. Las elevaciones en pies serán convertidas a metros mientras las unidades estén especificadas en el campo.
- Valores de coordenadas:
  - Al cargar datos, los scripts de fondo intentarán extraer los valores lat/long de las coordenadas a partir del campo verbatimCoordinates. El campo es evaluado por formatos DMS y UTM, los cuales son convertidos a latitude y longitude decimal.
  - Si tiene lat/long en un sólo campo, puede mapear este campo a verbatimCoordinates, y los valores de latitud y longitud decimal serán analizados automáticamente.
  - Si tiene coordenadas UTM en múltiples campos, mapee los campos (norte, este, zona) a sus campos correspondientes en UTM (utmnorthing, utmeasting, utmzone). Esto va a propiciar la conversión de coordenadas a latitud y longitud decimal. Los valores serán almacenados adicionalmente en el campo verbatimCoordinates.
  - Si tiene coordenadas UTM en un solo campo, mapee este campo a utmnorthing y deje otros campos UTM como nulos para dirigir a los scripts para analizar usando únicamente el analizador de UTM.
  - Las coordenadas TRS (Public Lands Survey System) pueden ser ingresadas como un sólo campo en verbatimCoordinates, o en campos separados (trstownship, trsrange, trssection, trssectiondetails); sin embargo, estas coordenadas no serán convertidas automáticamente en grados decimales debido a las potenciales diferencias de interpretación. Ver la sección de georreferencias en esta guía (muy pronto) para más información acerca de convertir coordenadas TRS en grados decimales.
