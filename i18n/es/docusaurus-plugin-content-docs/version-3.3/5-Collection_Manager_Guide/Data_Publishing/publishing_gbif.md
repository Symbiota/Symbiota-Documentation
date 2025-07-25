---
title: "Publicar Datos en GBIF"
authors: ["Ed Gilbert","Katie Pearson"]
editors: ["Katie Pearson"]
translators: ["Samanta Orellana"]
date: 2021-10-07
sidebar_position: 15
keywords: ["agregador","gbif","publicación de datos"]
---

import ReactPlayer from "react-player";

:::info

Este documento describe cómo publicar los datos de sus colecciones al agregador global [GBIF](https://www.gbif.org).

:::

Las colecciones manejadas "en vivo" dentro de un portal Symbiota pueden publicar inmediatamente hacia GBIF sin complicaciones. Las colecciones que utilicen un sistema de manejo de colecciones local (e.g. Specify, Ke-Emu, etc.) y únicamente publiquen una copia (snapshot) de sus colecciones en un portal Symbiota, también pueden utilizar el portal para publicar en GBIF pero solamente si: 1) no están publicando sus datos por otros medios (e.g. instalación IPT, VertNet, etc.), y 2) si un código GUID es incluido como occurrenceID en los datos que están siendo publicados de su sistema local, al portal Symbiota. Si la colección está utilizando la herramienta de publicación a Symbiota integrada en Specify, el GUID del occurrenceID será incluído automáticamente en los datos enviados desde Specify. 

:::note

Su portal debe estar programado como una Instalación Publicadora de GBIF para publicar los datos a esta plataforma global. Esta acción puede ser realizada por el administrador de su portal.

:::

1. Genere una cuenta institucional en GBIF para que exista un acuerdo directo de publicación entre su institución y GBIF. Ya que su cuenta institucional será utlizada para publicar múltiples sets de datos de colecciones asociadas con esa institución (https://www.gbif.org/publisher/4c0e9f60-c489-11d8-bf60-b8a03c50a862), deberá coordinar esta acción con las otras colecciones en su institución, de aplicar. Notar que los conjuntos de datos institucionales pueden ser publicados a GBIF utilizando diferentes recursos de publicación. Por ejemplo, las colecciones zoológicas podrían importar sus datos desde el IPT de VertNet (http://ipt.vertnet.org) o su IPT institucional, los herbarios de plantas vasculares podrían utilizar el portal Symbiota [SEINet](https://swbiodiversity.org), y los herbarios de líquenes podrían publicar desde CNALH (https://lichenportal.org). Utilice el formulario en la página de Solicitud de Aprobación de GBIF (https://www.gbif.org/become-a-publisher) para registrar su institución. Utilice el buscador de organizaciones en esa página, para asegurarse que institución se encuentre ya registrada.
   * Si está seguro que su institución no está registrada, complete el formulario de registro y siga las instrucciones listadas por GBIF. 
   * Si su institución ya se encuentra registrada, revise los metadatos en GBIF de su institución y los conjuntos de datos existentes, y contacte a GBIF para realizar cualquier cambio necesario. Asegúrese que ninguno de los conjuntos de datos existentes contiene los mismos datos que está tratando de publicar. Si sus datos ya están publicados, debe realizar los arreglos apropiados con GBIF para que el conjunto de datos antiguo pueda ser archivado ANTES de re publicarlos en el nuevo conjunto de datos.
2. Ingrese en su portal Symbiota, diríjase al Panel de Control de Administración (Mi Perfil => Manejo de Ocurrencias => nombre de la colección), y haga click en "Editar Metadatos e Información de Contactos" en el Panel de Control de Administración. Verifique el nombre de su colección y la descripción (estos serán utilizados en su perfil de GBIF), marque la casilla de GBIF a la derecha de la opción "Publicar a Agregadores", y haga click en el botón de "Guardar Ediciones" button. Si no ve una casilla de publicación en GBIF, contacte al administrador de su portal y solicite la configuración del portal para publicación en GBIF.
3. Regrese al Panel de Control de Administración y haga click en el enlace "Publicación de Archivo Darwin Core". Haga click en el botón "Crear/Refrescar Archivo Darwin Core" para almacenar sus datos en forma de Archivo Darwin Core.
4. Introduzca la clave para su institución provista por GBIF y haga click en el botón "Validar Llave". Si su llave es validada, más instrucciones serán desplegadas junto con el botón de Enviar Datos. La Llave de Publicador de GBIF debe tener el siguiente formato: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx (e.g. 4c0e9f60-c489-11d8-bf60-b8a03c50a872). También puede ingresar la URL completa a su página de publicación de GBIF, y la llave será extraída automáticamente. 
5. Antes de enviar los datos, necesitará contactar al escritorio de ayuda de GBIF (helpdesk@gbif.org) para solicitar que usuario de GBIF en el portal Symbiota obtenga los permisos necesarios para crear y publicar sets de datos hacia el perfil de su institución en GBIF. El usuario de GBIF asociado con la instalación del portal Symbiota es desplegado en el párrafo sobre el botón de Enviar Datos. Hacer click en la dirección de correo electrónico de GBIF para generar automáticamente un mensaje en su bandeja de correo.
6. Una vez obtenga la respuesta de GBIF afirmando la autorización de enviar conjuntos de datos al perfil de su institución desde el portal Symbiota, haga click en el botón de Enviar Datos. Un enlace a su conjunto de datos en GBIF será desplegado inmediatamente, aunque puede tomar alrededor de una hora para que sus datos sean publicados e indexados, y estén disponibles.

<ReactPlayer
  playing={false}
  controls
  url="https://www.youtube.com/watch?v=aDbw9RF4w08"
/>
