/* What's New release-note translations.
   Shape: I18N_WN[lang][version] = [ bulletHTML, ... ]
   Index maps to the position among the entry's direct <ul> children, so nested
   <ol> items stay inside their parent bullet. Any missing/short array simply
   leaves the English markup in place. */
const I18N_WN = window.I18N_WN || {};

I18N_WN.es = {
  'v52.1': [
    'Nuevo: la p&aacute;gina &laquo;Novedades&raquo; ya est&aacute; completamente traducida a los 20 idiomas: todas las notas de versiones anteriores se muestran en tu idioma.'
  ],
  'v52': [
    'Correci&oacute;n: la v51 pod&iacute;a romper la aplicaci&oacute;n al cargarse; una traducci&oacute;n danesa ten&iacute;a un ap&oacute;strofo sin escapar que invalidaba todo el archivo de idioma. El archivo ahora se analiza correctamente y los 20 idiomas vuelven a cargarse.'
  ],
  'v51': [
    'Traducciones completadas para los 20 idiomas: los ajustes, las salas en directo, la sincronizaci&oacute;n sin conexi&oacute;n y la ayuda de sincronizaci&oacute;n ya est&aacute;n totalmente traducidos (antes, parte del texto nuevo solo aparec&iacute;a en ingl&eacute;s).',
    'Nuevo: si Anthkeys te parece lento, un banner te ofrece activar el modo Rendimiento con un solo toque. Puedes descartarlo y no volver&aacute; a pregunt&aacute;rtelo.'
  ],
  'v50.7': ['El modo Rendimiento pas&oacute; a la pestana General de los ajustes.'],
  'v50.6': ['Los iconos de la barra superior vuelven a ser los emojis de color, como en la v50: libro, impresora, rayo, luna/sol, actualizar y engranaje.'],
  'v50.5': ['Los iconos de la barra superior vuelven a usar el color de acento (por defecto), en lugar de mostrarse en blanco/gris.'],
  'v50.4': ['Se elimin&oacute; la opci&oacute;n de icono con color de acento: el favicon, el icono de la pantalla de inicio y el icono de la PWA instalada vuelven a usar el predeterminado (cambiar el icono con el color de acento solo tiene sentido en apps nativas).'],
  'v50.3': [
    'Se reconstruyeron los iconos de la barra superior para que se muestren de forma fiable en todos los dispositivos (Tour, Print, Quiz, tema, Refresh y Settings ya usan iconos reales).',
    'El icono del conmutador de tema vuelve a ser un icono real y coincide con su estado claro/oscuro.'
  ],
  'v50.2': ['Se corrigi&oacute; un error de la v50.1 que imped&iacute;a que los iconos de la barra superior y los Settings funcionaran al cargar.'],
  'v50.1': [
    'Nuevo modo Rendimiento en Personalizaci&oacute;n: desactiva los efectos de desenfoque y las animaciones que pueden hacer que la app vaya lenta en Windows.',
    'La barra superior ahora usa iconos reales, y un nuevo ajuste de iconos los colorea con tu color de acento.',
    'La pestana Apps funciona como la de Linux: haz clic en cualquier punto para elegir una app (VS Code, Figma, Gmail y m&aacute;s), y la pestana mostrar&aacute; tu elecci&oacute;n, por ejemplo &laquo;Apps - Gmail&raquo;.',
    'Se elimin&oacute; el campo de texto hexadecimal debajo del bot&oacute;n Personalizar: elige los colores solo con los deslizadores.',
    'Se duplicaron las opciones de acento degradado con ocho nuevas combinaciones de dos colores.'
  ],
  'v50': [
    'Haz clic en cualquier punto de la pestana Linux para abrir el men&uacute; de distribuciones, y la pestana ahora muestra tu elecci&oacute;n, como &laquo;Linux - Ubuntu (GNOME)&raquo;.',
    'El selector de color personalizado se ha reconstruido: la muestra circular abre deslizadores de Tono, Saturaci&oacute;n y Luminosidad (con el valor mostrado justo encima de cada uno), empezando por tu color actual en lugar de 0/0/0.',
    'Nueva secci&oacute;n de acentos degradados: ocho degradados de dos colores listos para aplicar como acento.',
    'Los preajustes de acento se ajustaron a una paleta m&aacute;s limpia y distinta.'
  ],
  'v40.9': ['El men&uacute; de distribuciones vive ahora justo en la propia pestana Linux: haz clic en la flechita de la pestana para elegir tu distro.'],
  'v40.8': ['La pestana Linux tiene ahora un men&uacute; de distribuciones (Ubuntu, Debian, Fedora, Arch, Mint, KDE y m&aacute;s) que adapta los atajos del sistema a los valores de cada distro y recuerda tu elecci&oacute;n.'],
  'v40.7': ['Los ajustes de acento muestran ahora una barra de vista previa en vivo con el hexadecimal exacto del color aplicado, para que veas cada elecci&oacute;n al instante.'],
  'v40.6': [
    'Se elimin&oacute; el conta gotas &laquo;Elegir de la pantalla&raquo;.',
    'Los preajustes de acento se potenciaron al m&aacute;ximo estilo Material 3 Expressive: colores profundos, vivos y Truly Neon (los grises siguen atenuados).'
  ],
  'v40.5': ['La paleta de acento se ajust&oacute; hacia el estilo Material 3 Expressive: colores tonales m&aacute;s vibrantes.'],
  'v40.4': ['La coincidencia de acento del dispositivo ahora lee el color real del sistema (incluida la salida oklch/color() de Chrome) y tambi&eacute;n consulta el color de selecci&oacute;n de texto del sistema operativo, de modo que se aplica tu acento din&aacute;mico real.'],
  'v40.3': [
    'Todos los colores de acento se ajustaron al estilo tonal de Material You (tonos medios apagados con tonos de contenedor suaves).',
    '&laquo;Coincidir con mi dispositivo&raquo; tambi&eacute;n lee ahora el color de selecci&oacute;n del sistema como alternativa, para que funcione en m&aacute;s navegadores y perfiles.'
  ],
  'v40.2': ['Ajustes del color de acento: el nuevo bot&oacute;n &laquo;Coincidir con mi dispositivo&raquo; lee el color de acento del sistema (Chrome 150+, app instalada) y lo aplica, con una notificaci&oacute;n de confirmaci&oacute;n.'],
  'v40.1': ['Se elimin&oacute; la galer&iacute;a de fondos de pantalla (los fondos guardados en la galer&iacute;a se descartan; tu propio fondo subido sigue funcionando).'],
  'v40.0': ['Selector de color de acento: el color personalizado ahora tiene un campo hexadecimal (escribe cualquier color, de 3 o 6 d&iacute;gitos) y un bot&oacute;n Copiar: el mismo dise&ntilde;o exacto en escritorio y m&oacute;vil.'],
  'v39.9': ['Chat en la sala: las notas de la sala ahora aparecen en un panel de Chat con historial (se guardan 60 mensajes por sala y se restauran al volver a entrar). Las notas p&uacute;blicas se publican en el registro; las privadas siguen copi&aacute;ndose directamente al portapapeles. Toca cualquier mensaje para volver a copiarlo.'],
  'v39.8': [
    'Salas recientes: las &uacute;ltimas seis salas a las que te uniste aparecen como botones de un toque en la pantalla de uni&oacute;n (con sus colores de sala), adem&aacute;s de un bot&oacute;n para borrarlos.',
    'Enviar mi perfil: env&iacute;a tus ajustes y atajos personalizados a toda la sala como una instant&aacute;nea de un solo sentido; los dem&aacute;s dispositivos la aplican al instante.',
    'Galer&iacute;a de fondos: seis degradados integrados con variantes autom&aacute;ticas claras/oscuras, un bot&oacute;n Aleatorio y una mezcla diaria opcional.',
    'B&uacute;squeda: los atajos que copiasse se recuerdan como &laquo;Copiados recientemente&raquo; en el men&uacute; de b&uacute;squeda, junto a tu historial de b&uacute;squedas.'
  ],
  'v39.7': ['Las animaciones en m&oacute;vil provienen ahora del mismo CSS base que el escritorio: la regla para dispositivos t&aacute;ctiles ya no desactiva globalmente las transiciones. El foco del recorrido y las tarjetas se deslizan entre pasos, y los cambios de tema/fondo se funden, tambi&eacute;n en el m&oacute;vil.'],
  'v39.6': ['Igualdad en m&oacute;vil: los cambios de tema y de fondo ahora se transicionan sin problemas (igual que en escritorio), y el recorrido del sitio se anima entre pasos tambi&eacute;n en dispositivos t&aacute;ctiles.'],
  'v39.5': ['AirDrop y Quick Share: un bot&oacute;n &laquo;Compartir&raquo; junto al c&oacute;digo de la sala abre el men&uacute; de compartir de tu tel&eacute;fono (AirDrop en Apple) con un enlace de uni&oacute;n de un toque: el otro dispositivo solo tiene que tocarlo y entra en la sala.'],
  'v39.4': ['El brillo y el destello de la c&aacute;psula de versi&oacute;n ahora se animan en escritorio incluso cuando &laquo;reducir movimiento&raquo; est&aacute; activo en el sistema o las animaciones est&aacute;n desactivadas en los ajustes: se trata como una se&ntilde;al de actualizaci&oacute;n, no como decoraci&oacute;n.'],
  'v39.3': ['El brillo de la c&aacute;psula de versi&oacute;n y la insignia de los ajustes ahora aparecen de forma fiable en escritorio: la versi&oacute;n en ejecuci&oacute;n siempre recibe una ventana de resaltado de unos d&iacute;as al cargarla, aunque se haya omitido el aviso de actualizaci&oacute;n.'],
  'v39.2': ['El brillo y el destello de nueva versi&oacute;n en la c&aacute;psula ya no desaparecen para siempre despu&eacute;s de un solo vistazo: el resaltado dura unos d&iacute;as y vuelve en cada visita.'],
  'v39.1': ['Por fin se ven los puntos de color: las muestras (color de sala y muestras de tema/acento) ahora se dibujan como c&iacute;rculos visibles en lugar de spans vac&iacute;os invisibles.'],
  'v39': [
    'Ring ahora te permite adjuntar un mensaje r&aacute;pido al ping: el dispositivo que suena lo oye y lo copia al portapapeles.',
    'Alertas de bater&iacute;a: recibes una notificaci&oacute;n &laquo;recuperada&raquo; cuando un dispositivo vuelve a superar el 25 %, y puedes activar o desactivar la alarma de bater&iacute;a.',
    'Las notas se pueden dirigir a un solo dispositivo mediante un selector &laquo;Para:&raquo; junto al campo de nota.',
    'Cada sala puede tener una etiqueta de color para que distingas las salas de un vistazo.',
    'Los c&oacute;digos de sincronizaci&oacute;n sin conexi&oacute;n ahora muestran una vista previa (dispositivo, hora, n&uacute;mero de ajustes y atajos) y piden confirmaci&oacute;n antes de importar.'
  ],
  'v38.1': ['En m&oacute;vil, tocar la pestana About ya no abre las secciones autom&aacute;ticamente: toca la cabecera de una secci&oacute;n para desplegarla.'],
  'v38': ['En m&oacute;vil, abrir la pestana About ya no despliega autom&aacute;ticamente las instrucciones de sincronizaci&oacute;n: toca la secci&oacute;n &laquo;Live rooms &amp; offline sync&raquo; para abrirla.'],
  'v37': ['La ayuda ahora incluye instrucciones completas de <strong>Live rooms</strong> y <strong>Offline sync codes</strong>, y esta ayuda tambi&eacute;n est&aacute; disponible en m&oacute;vil.'],
  'v36': ['El bot&oacute;n de la zona de uni&oacute;n ahora se llama <strong>Scan</strong> (abre la c&aacute;mara o el selector de archivos para leer un c&oacute;digo QR), as&iacute; ya no se confunde con el bot&oacute;n <strong>QR</strong> que muestra tu c&oacute;digo de sala.'],
  'v35': ['Corregido: los c&oacute;digos QR de sala y de c&oacute;digo sin conexi&oacute;n ahora se muestran bien en lugar de un recuadro en blanco.'],
  'v34': [
    '<strong>Llamar a un dispositivo</strong> &mdash; cada otro dispositivo tiene un bot&oacute;n Ring que lo suena y lo hace vibrar, para que puedas encontrar tu m&oacute;vil.',
    '<strong>Enviar una nota</strong> &mdash; comparte texto con todos los dispositivos vinculados; aparece al instante y se copia a su portapapeles.',
    '<strong>Vigilar la bater&iacute;a</strong> &mdash; se te avisa cuando un dispositivo vinculado baja del 20 % de bater&iacute;a.',
    '<strong>Renombrar dispositivos</strong> &mdash; toca el nombre de un dispositivo para darle un nombre personalizado.',
    '<strong>Unirse escaneando</strong> &mdash; el anfitri&oacute;n puede mostrar un QR del c&oacute;digo de sala; esc&aacute;nealo con la c&aacute;mara (o escanea un c&oacute;digo de sincronizaci&oacute;n sin conexi&oacute;n).',
    '<strong>Salas protegidas</strong> &mdash; marca &laquo;Proteger esta sala&raquo; y define una frase de paso; todos los datos de la sala se cifran para que solo los miembros con la frase puedan leerlos.',
    '<strong>&Uacute;ltima vez visto</strong> &mdash; cada dispositivo muestra ahora cu&aacute;nto tiempo lleva sin conectarse.'
  ],
  'v33': ['Los dispositivos vinculados tambi&eacute;n comparten ahora su <strong>nivel de bater&iacute;a</strong> (incluso mientras cargan), actualizado en vivo en la sala.'],
  'v32': ['Las salas en directo muestran ahora el nombre real de cada dispositivo (como &laquo;Mi 9T Pro&raquo;) en lugar de uno aleatorio, elegido autom&aacute;ticamente desde el propio dispositivo.'],
  'v31': ['Las salas en directo muestran ahora todos los dispositivos vinculados por su nombre, con un punto verde en este dispositivo y el total.'],
  'v30': [
    '<strong>Salas en directo</strong> &mdash; primero, para sincronizar ajustes y atajos personalizados en tiempo real:<ol><li>En el dispositivo que tiene tus ajustes, abre <strong>Settings &rarr; Live rooms</strong> y toca <strong>Start a room</strong>. Aparece un c&oacute;digo de sala como AK-XXX-YYY.</li><li>Env&iacute;a ese c&oacute;digo a tus dem&aacute;s dispositivos (c&oacute;pialo o comp&aacute;rtelo como quieras).</li><li>En cada dispositivo receptor, abre <strong>Settings &rarr; Live rooms</strong>, escribe el mismo c&oacute;digo y toca <strong>Join room</strong>.</li></ol>',
    '<strong>C&oacute;digos de sincronizaci&oacute;n sin conexi&oacute;n</strong> &mdash; despu&eacute;s, para una transferencia &uacute;nica cuando no hay internet:<ol><li>Abre <strong>Settings &rarr; Offline sync code</strong> y toca <strong>Create a code</strong>. Copia el c&oacute;digo o escanea el QR que aparece.</li><li>En el otro dispositivo, abre <strong>Settings &rarr; Offline sync code</strong>, pega el c&oacute;digo y toca <strong>Apply a code</strong>.</li></ol>'
  ],
  'v29': ['Corregido: en <strong>m&oacute;vil</strong>, tocar la insignia de versi&oacute;n ahora reproduce la animaci&oacute;n aleatoria de rebote/giro/aplastamiento en lugar de estar bloqueada por el reinicio de animaciones de los dispositivos t&aacute;ctiles.'],
  'v28': ['M&oacute;vil: la pestana de ajustes que est&aacute; junto a Customize ahora es solo <strong>About</strong> (Help solo existe en escritorio) y abre autom&aacute;ticamente la secci&oacute;n About al tocarla.'],
  'v27': ['Corregido: abrir la p&aacute;gina justo despu&eacute;s de una <strong>nueva versi&oacute;n</strong> ya no la reinicia con una recarga sorpresa unos segundos despu&eacute;s; la actualizaci&oacute;n se aplica ahora en segundo plano. El bot&oacute;n Refresh y la opci&oacute;n &laquo;Preguntar antes de actualizar&raquo; siguen recargando bajo petici&oacute;n.'],
  'v26.9': ['Juguet&oacute;n: tocar la <strong>insignia de versi&oacute;n</strong> reproduce ahora una animaci&oacute;n aleatoria de rebote/giro/aplastamiento cada vez, obtiene un <strong>destello</strong> mientras se resalta una versi&oacute;n nueva, y la secci&oacute;n About se traslad&oacute; a su propia <strong>pestana About</strong> en Settings para llegar antes.'],
  'v26.8': ['Mejora: la <strong>insignia de versi&oacute;n</strong> de la secci&oacute;n About ahora se actualiza autom&aacute;ticamente y abre Novedades.'],
  'v26.7': ['Mejora: los <strong>atajos de apps</strong> del consejo diario ahora muestran primero a qu&eacute; app pertenecen, por ejemplo <em>Figma &mdash; Move Tool &mdash; V</em>.'],
  'v26.6': ['Mejora: el <strong>consejo diario</strong> ahora se actualiza al cambiar de pestana de plataforma: al seleccionar Windows, macOS, Linux, ChromeOS o Apps muestra un atajo de esa secci&oacute;n.'],
  'v26.5': ['Corregido: el <strong>consejo diario</strong> ya no se queda atascado en un solo atajo; ahora muestra un atajo aleatorio nuevo (de la pestana de plataforma que est&aacute;s viendo) en cada carga de la p&aacute;gina en lugar de reutilizar el mismo todo el d&iacute;a.'],
  'v26.4': ['Corregido: el <strong>consejo diario</strong> ahora muestra solo atajos de la pestana de plataforma que est&aacute;s viendo (antes mezclaba atajos de todas las plataformas). La insignia de versi&oacute;n de la secci&oacute;n Ayuda tambi&eacute;n se actualiza autom&aacute;ticamente.'],
  'v26.3': ['El bot&oacute;n del <strong>recorrido</strong> muestra ahora un icono de <strong>libro abierto</strong>.'],
  'v26.2': ['El bot&oacute;n del <strong>recorrido</strong> muestra ahora un icono de br&uacute;jula, y el recorrido gan&oacute; un paso que explica qu&eacute; hace el <strong>bot&oacute;n de actualizar</strong>.'],
  'v26.1': ['Corregido: cambiar entre <strong>oscuro &harr; claro</strong> (con el conmutador superior o en Ajustes) ya no elimina los colores de un <strong>tema de fondo de pantalla</strong>: el acento, los botones de la barra y las teclas de atajo conservan sus colores tem&aacute;ticos mientras el fondo se mantiene.'],
  'v26': ['Nuevo <strong>recorrido del sitio</strong>: toca el bot&oacute;n <strong>?</strong> de arriba para hacer un recorrido guiado por la barra de b&uacute;squeda, los filtros, las pestañas, la lista de atajos, el cuestionario, los ajustes, la impresi&oacute;n y el conmutador de tema. Navega con los botones, las flechas o los puntos.'],
  'v25': ['Se elimin&oacute; el enlace <strong>Ver en GitHub</strong> de la secci&oacute;n About.'],
  'v24.8': ['Corregido: la notificaci&oacute;n <strong>&laquo;Actualizado&raquo;</strong> en m&oacute;vil ahora se mantiene dentro de la pantalla (antes se sal&iacute;a por el borde derecho en dispositivos peque&ntilde;os).'],
  'v24.7.4': ['El radio de borde ahora est&aacute; limitado a <strong>16&thinsp;px</strong> en todos los temas: las c&aacute;psulas, las pestañas, las barras de b&uacute;squeda y las notificaciones ya no son completamente redondas (antes usaban hasta un radio de 100&thinsp;px). Las esquinas siguen viéndose suaves, solo que m&aacute;s discretas.'],
  'v24.7.3': ['Corregido: <strong>Abrir ajustes de Wi-Fi</strong> en <strong>Android</strong> no hac&iacute;a nada; el Chrome moderno no permite que los sitios web abran los ajustes del sistema de Android. El bot&oacute;n ahora muestra un breve aviso para que abras los ajustes de Wi-Fi desde la app Ajustes de tu dispositivo (sigue abriendo directamente en iOS y macOS).'],
  'v24.7.2': ['Corregido: en una app de Android instalada (PWA), tocar <strong>Abrir ajustes de Wi-Fi</strong> no hac&iacute;a nada; Android bloquea que las apps abran los ajustes del sistema directamente. Ahora lo explica y te indica que abras el sitio en una pestaña de Chrome, donde el bot&oacute;n funciona.'],
  'v24.7.1': ['Corregido: <strong>Abrir ajustes de Wi-Fi</strong> en <strong>Android</strong> usaba un clic de ancla disparado por JS, que Chrome bloquea para enlaces <code>intent:</code>; se cambi&oacute; por una navegaci&oacute;n desde un gesto del usuario.'],
  'v24.7': [
    'El <strong>estado de conexi&oacute;n</strong> ahora est&aacute; en la parte superior de <strong>Settings &rarr; General</strong> (sacado de About).',
    'El bot&oacute;n <strong>Abrir ajustes de Wi-Fi</strong> ahora abre los ajustes reales de Wi-Fi en <strong>iOS</strong> (app Ajustes) y <strong>macOS</strong> (Ajustes del Sistema). En Android, Windows y Linux, donde los navegadores no pueden enlazar directamente a los ajustes del sistema, muestra instrucciones r&aacute;pidas.'
  ],
  'v24.6': [
    'La c&aacute;psula <strong>Offline</strong> ahora dura <strong>10 segundos</strong> y luego desaparece (no te molestar&aacute; mientras la conexi&oacute;n siga ca&iacute;da).',
    'Settings &rarr; About ahora muestra tu <strong>estado de conexi&oacute;n</strong> (Online/Offline) en todo momento, con un bot&oacute;n para abrir tus <strong>ajustes de Wi-Fi</strong>: en iOS abre directamente la app Ajustes; en otros dispositivos muestra instrucciones r&aacute;pidas.'
  ],
  'v24.5.2': ['Corregido: en ordenadores donde Windows pierde la conexi&oacute;n sin lanzar el evento <em>offline</em> del navegador (o donde las peticiones se quedan colgadas en lugar de fallar), la c&aacute;psula <strong>Offline</strong> tambi&eacute;n aparece cuando la sonda de conectividad agota el tiempo de espera, no solo cuando la solicitud falla directamente.'],
  'v24.5.1': ['Corregido: la c&aacute;psula <strong>Offline</strong> ahora tambi&eacute;n aparece cuando la conexi&oacute;n se cae sin lanzar un evento del navegador (p. ej., &laquo;Offline&raquo; en DevTools, algunos navegadores m&oacute;viles): la app ahora sondea la conectividad activamente cada pocos segundos en lugar de depender solo de las se&ntilde;ales del navegador. Sigue oculta mientras est&eacute;s en l&iacute;nea.'],
  'v24.5': [
    'Al buscar, las palabras que coinciden con tu consulta ahora se <strong>resaltan</strong> en los resultados: es m&aacute;s f&aacute;cil ver por qu&eacute; coincide cada fila.',
    'El cuadro de b&uacute;squeda tiene ahora un <strong>bot&oacute;n para borrar (x)</strong> que aparece cuando escribes algo.',
    'Aparece una pequeña c&aacute;psula <strong>Offline</strong> cuando se cae tu conexi&oacute;n: t&oacute;cala para confirmar que Anthkeys sigue funcionando desde la cach&eacute;.'
  ],
  'v24.4.1': ['Corregido en m&oacute;vil: la cabecera <strong>Acci&oacute;n &mdash; Atajo</strong> ya no se desplaza; en pantallas estrechas la tabla de atajos se hab&iacute;a convertido en un contenedor de desplazamiento horizontal, lo que romp&iacute;a la cabecera fija. Ahora vuelve a fijarse, igual que en escritorio.'],
  'v24.4': ['Se elimin&oacute; el <strong>widget de racha del cuestionario en la pantalla de inicio</strong>: depend&iacute;a de un est&aacute;ndar web que los navegadores a&uacute;n no implementan, as&iacute; que nunca apareci&oacute; en ning&uacute;n sitio. Tu racha y tus estad&iacute;sticas del cuestionario siguen en la app como de costumbre.'],
  'v24.3': [
    'El <strong>cuestionario de atajos ahora registra tus estad&iacute;sticas</strong>: una racha diaria (🔥 d&iacute;as seguidos completando un cuestionario), mejor puntuaci&oacute;n, precisi&oacute;n y partidas jugadas. Se guardan localmente y nunca se suben.',
    'Nuevo <strong>widget de racha del cuestionario en la pantalla de inicio</strong> para Android (Web App Widgets: experimental, despleg&aacute;ndose en Chrome y Firefox; no disponible en iOS). Muestra tu racha y tus estad&iacute;sticas; t&oacute;calo para abrir el cuestionario.'
  ],
  'v24.2.1': ['Corregido en m&oacute;vil: tocar la barra de b&uacute;squeda pod&iacute;a abrir la p&aacute;gina About; la notificaci&oacute;n oculta &laquo;Novedades&raquo; junto al bot&oacute;n de ajustes segu&iacute;a siendo clicable y se solapaba con el cuadro de b&uacute;squeda. Ahora solo reacciona mientras est&aacute; visible.'],
  'v24.2': [
    'Nuevo <strong>filtro de modificadores</strong>: en el men&uacute; Filtros, elige una tecla (Ctrl, Shift, Alt, Win, Cmd, &hellip;) para mostrar solo los atajos que la usan. Las opciones se actualizan por plataforma.',
    'Un <strong>bot&oacute;n de volver arriba</strong> flota sobre la lista de atajos al desplazarte: t&oacute;calo para volver directamente al inicio.'
  ],
  'v24.1': ['La barra <strong>Acci&oacute;n &mdash; Atajo</strong> ahora permanece fija en la parte superior de la lista al desplazarte; en m&oacute;vil y Safari sol&iacute;a salirse de la vista.'],
  'v23.9': ['Se elimin&oacute; el popup Ayuda y consejos en m&oacute;vil: solo listaba atajos de escritorio. La Ayuda sigue en Ajustes en escritorio, donde <kbd>?</kbd> salta directamente a ella.'],
  'v23.8': ['En m&oacute;vil, Ayuda ya no est&aacute; dentro de Ajustes: permanece oculta all&iacute; para no recargar la p&aacute;gina. Pulsa <kbd>?</kbd> para abrirla como popup.'],
  'v23.7': ['Ayuda y consejos se movieron a <strong>Ajustes</strong> (secci&oacute;n General) en escritorio: pulsa <kbd>?</kbd> para saltar directamente.'],
  'v23.6': [
    'Los 20 idiomas ya est&aacute;n completamente traducidos: se acab&oacute; el recurso al ingl&eacute;s en funciones nuevas como el cuestionario, la sincronizaci&oacute;n en la nube y la Ayuda.',
    'En m&oacute;vil, mant&eacute;n pulsado un atajo para copiarlo en lugar de tocarlo: sin copias accidentales al desplazarte.',
    'Las pastillas de filtro ahora usan tu color de acento tambi&eacute;n en m&oacute;vil, igual que en escritorio; cuando Favoritos est&aacute; seleccionado, es el &uacute;nico que destaca.',
    'Se elimin&oacute; el borde de los cinco botones de la barra superior en m&oacute;vil: ahora se integrates en la p&aacute;gina.',
    'El bot&oacute;n del cuestionario tiene un nuevo icono de rayo, y las respuestas muestran nombres legibles en lugar de teclas sin procesar.',
    'Corregido: el JavaScript de la app pod&iacute;a fallar al cargarse tras una actualizaci&oacute;n, dejando el sitio sin responder.'
  ],
  'v23.5': [
    'Los controles de filtrar, favorito, comparar y plegar viven ahora en un &uacute;nico men&uacute; compacto de <strong>Filtros</strong>: m&aacute;s espacio para la lista de atajos en m&oacute;vil.',
    'La p&aacute;gina Novedades, la insignia de versi&oacute;n y los ajustes de actualizaci&oacute;n se trasladaron a una nueva secci&oacute;n <strong>About</strong> en Ajustes.',
    'Las notificaciones de actualizaci&oacute;n ahora aparecen desde el bot&oacute;n <strong>Ajustes</strong>: el icono de engranaje muestra una insignia hasta que hayas visto las novedades.'
  ],
  'v23.4': ['Se elimin&oacute; el bot&oacute;n de ayuda <kbd>?</kbd> de la barra superior: pulsa <kbd>?</kbd> para abrir igualmente la Ayuda.'],
  'v23.3': [
    'La insignia de versi&oacute;n se enciende tras una actualizaci&oacute;n autom&aacute;tica, para que notes la nueva versi&oacute;n en el siguiente inicio.',
    'Cambiar entre fondos preestablecidos mantiene el modo oscuro: el nuevo fondo tambi&eacute;n se aten&uacute;a.',
    'En m&oacute;vil, la barra de plataformas (Windows, macOS, Linux, ChromeOS) tiene ahora el mismo aspecto que en escritorio.'
  ],
  'v23.2': [
    'Se elimin&oacute; el conmutador Avanzado/B&aacute;sico: todos los atajos se muestran juntos.',
    'En m&oacute;vil, los botones de la barra superior se colocan ahora en unaCuadr&iacute;cula 2&times;3 limpia.',
    'Los fondos preestablecidos se mantienen aplicados y se aten&uacute;an correctamente al cambiar al modo oscuro.',
    'Las superposiciones (ajustes, ayuda, cuestionario) ahora cubren las pestañas fijas en m&oacute;vil.'
  ],
  'v23.1': ['Los fondos de pantalla ahora est&aacute;n optimizados para el modo oscuro: al cambiar a oscuro, tanto las im&aacute;genes personalizadas como los fondos preestablecidos (Oc&eacute;ano, Bosque, Atardecer, &hellip;) se oscurecen y desaturan para que los paneles sigan siendo legibles.'],
  'v23': [
    'Nuevo modo &laquo;Comparar&raquo;: elige una segunda plataforma para ver solo los atajos que difieren.',
    'Tema autom&aacute;tico que sigue la hora del d&iacute;a (de 19:00 a 7:00 en oscuro).',
    'Pulsa <kbd>?</kbd> o toca el bot&oacute;n <kbd>?</kbd> para obtener ayuda y consejos r&aacute;pidos.',
    'Se a&ntilde;adieron las fechas de lanzamiento a cada entrada de esta p&aacute;gina.'
  ],
  'v22': [
    'Corregido: la tabla de la leyenda de teclas se cortaba en m&oacute;viles estrechos; ahora se desplaza horizontalmente para que todas las columnas sean accesibles.',
    'La barra de b&uacute;squeda y las pastillas de categor&iacute;a est&aacute;n ocultas en la p&aacute;gina &laquo;Novedades&raquo; porque no aplican all&iacute;.'
  ],
  'v21': [
    'La leyenda de teclas ahora tiene un bot&oacute;n de cerrar, para que puedas plegarla desde el propio panel: c&oacute;modo en m&oacute;vil, donde el conmutador puede salirse de alcance.',
    'Manejo de toques m&aacute;s adaptable para el bot&oacute;n Leyenda de teclas en dispositivos t&aacute;ctiles.'
  ],
  'v20.1': [
    'Los n&uacute;meros de versi&oacute;n ahora admiten versiones de parche: la insignia del pie muestra, por ejemplo, v20.1, y la detecci&oacute;n de actualizaciones las maneja correctamente.',
    'Se a&ntilde;adi&oacute; la entrada v20 que faltaba en esta p&aacute;gina.'
  ],
  'v20': ['Nueva p&aacute;gina &laquo;Novedades&raquo; dentro de Anthkeys: el enlace de la notificaci&oacute;n de actualizaci&oacute;n y la insignia de versi&oacute;n del pie ahora la abren aqu&iacute; en lugar de en GitHub.'],
  'v19': ['El banner de actualizaci&oacute;n ahora tambi&eacute;n aparece si actualizas desde una versi&oacute;n anterior al control de versiones (tu versi&oacute;n previa se detecta desde la cach&eacute; sin conexi&oacute;n).'],
  'v18': [
    'Aparece una notificaci&oacute;n &laquo;Actualizado a vX &mdash; Novedades&raquo; cuando llega una versi&oacute;n nueva (en modo de actualizaci&oacute;n autom&aacute;tica).',
    'El banner de actualizaci&oacute;n ahora se activa con actualizaciones de contenido, no solo con cambios del service worker.',
    'La insignia de versi&oacute;n del pie es clicable: t&oacute;cala para ver las novedades.',
    'Cach&eacute; sin conexi&oacute;n m&aacute;s ligera (sin archivos sin versi&oacute;n desperdiciados).'
  ],
  'v16': ['Se a&ntilde;adi&oacute; una insignia de versi&oacute;n al pie con el n&uacute;mero de compilaci&oacute;n actual.'],
  'v15': ['Bot&oacute;n de actualizar y preferencia de actualizaci&oacute;n (autom&aacute;tica o preguntar primero), impulsados por el service worker.'],
  'v14': ['Plegar o desplegar una categor&iacute;a ahora respeta la consulta de b&uacute;squeda activa.'],
  'v13': ['Cach&eacute; de p&aacute;ginas con prioridad de red para que las actualizaciones aparezcan de inmediato; desplazamiento m&aacute;s fluido en escritorio.'],
  'v12': ['La b&uacute;squeda y los filtros ahora se limitan a la pestaña activa.'],
  'v11': ['Compatibilidad de instalaci&oacute;n PWA, etiquetas de accesibilidad, soporte de movimiento reducido, atajos de Gmail y YouTube, mejoras de SEO.'],
  'v10': [
    'Corregido: el filtro de categor&iacute;as pod&iacute;a ocultar todos los atajos cuando coincid&iacute;a con una fila de cabecera de categor&iacute;a; ahora solo oculta las filas que has filtrado.',
    'El fondo ahora ocupa toda la pantalla en m&oacute;vil.'
  ],
  'v9': ['Windows es ahora la pestaña de plataforma predeterminada, y las pestañas est&aacute;n en un orden m&aacute;s claro.'],
  'v8': [
    'Niveles de dificultad del cuestionario y un consejo diario.',
    'Desplazamiento mucho m&aacute;s fluido en m&oacute;vil, adem&aacute;s de cach&eacute; sin conexi&oacute;n.',
    'La b&uacute;squeda y los filtros funcionan en todas las plataformas a la vez, con etiquetas de SO en negrita.'
  ],
  'v7': ['Se eliminaron los estilos de dise&ntilde;o: Material 3 es ahora el &uacute;nico aspecto.'],
  'v6': [
    'Estilos de dise&ntilde;o reducidos a Material 3, m&aacute;s un bot&oacute;n &laquo;Quitar fondo de pantalla&raquo; para restablecer el tema predeterminado.',
    'Cabeceras de control de cach&eacute; para que las actualizaciones te lleguen antes.'
  ],
  'v5': ['T&iacute;tulos de p&aacute;gina simplificados a solo &laquo;Atajos&raquo; en los 14 idiomas.'],
  'v4': [
    'Modo de cuestionario de atajos: practica adivinando el atajo o la acci&oacute;n, adem&aacute;s de sincronizaci&oacute;n en la nube con GitHub Gist.',
    'Una gran tanda de correcciones que abarca las muestras de acento, el cambio de tema y los fondos en m&oacute;vil.'
  ],
  'v3': ['Preajustes de color de acento que puedes guardar y reutilizar, adem&aacute;s de invalidaci&oacute;n de cach&eacute; para que las actualizaciones aparezcan de forma fiable.'],
  'v2': ['Temas claro y oscuro con colores de acento, adem&aacute;s de traducciones de la referencia de atajos.'],
  'v1': ['La primera versi&oacute;n de Anthkeys: los atajos de teclado diarios de Windows, macOS, Linux y ChromeOS en una sola p&aacute;gina.']
};

I18N_WN.fr = {
  'v52.1': [
    'Nouveau : la page &laquo;Nouveaut&eacute;s&raquo; est d&eacute;sormais enti&egrave;rement traduite dans les 20 langues &mdash; toutes les notes de versions pass&eacute;es s&rsquo;affichent dans votre langue.'
  ],
  'v52': [
    'Correction : la v51 pouvait faire planter l&rsquo;application au chargement ; une traduction danoise comportait un apostrophe non &eacute;chapp&eacute;e qui invalidait tout le fichier de langue. Le fichier est d&eacute;sormais correctement analys&eacute; et les 20 langues se rechargent.'
  ],
  'v51': [
    'Traductions achev&eacute;es pour les 20 langues : les param&egrave;tres, les salons en direct, la synchronisation hors ligne et l&rsquo;aide de synchronisation sont d&eacute;sormais enti&egrave;rement traduits (les textes r&eacute;cents n&rsquo;&eacute;taient affich&eacute;s qu&rsquo;en anglais).',
    'Nouveau : si Anthkeys vous semble lent, une b&acirc;ne propose d&rsquo;activer le mode Performance en un seul geste. Vous pouvez la fermer et elle ne vous le redemandera plus.'
  ],
  'v50.7': ['Le mode Performance a &eacute;t&eacute; d&eacute;plac&eacute; dans l&rsquo;onglet G&eacute;n&eacute;ral des param&egrave;tres.'],
  'v50.6': ['Les ic&ocirc;nes de la barre sup&eacute;rieure sont de nouveau les emojis color&eacute;s, comme en v50 : livre, imprimante, &eacute;clair, lune/soleil, actualiser et engrenage.'],
  'v50.5': ['Les ic&ocirc;nes de la barre sup&eacute;rieure reprennent la couleur d&rsquo;accentuation (par d&eacute;faut), au lieu de s&rsquo;afficher en blanc/gris.'],
  'v50.4': ['Suppression de la fonction d&rsquo;icône accentu&eacute;e : le favicon, l&rsquo;ic&ocirc;ne d&rsquo;&eacute;cran d&rsquo;accueil et l&rsquo;ic&ocirc;ne de la PWA install&eacute;e utilisent de nouveau l&rsquo;ic&ocirc;ne par d&eacute;faut (changer l&rsquo;ic&ocirc;ne avec l&rsquo;accent n&rsquo;a de sens que pour les applications natives).'],
  'v50.3': [
    'Les ic&ocirc;nes de la barre sup&eacute;rieure ont &eacute;t&eacute; reconstruits pour s&rsquo;afficher de mani&egrave;re fiable sur tous les appareils (Visite, Imprimer, Quiz, th&egrave;me, Actualiser et Param&egrave;tres utilisent maintenant de vraies ic&ocirc;nes).',
    'L&rsquo;ic&ocirc;ne du commutateur de th&egrave;me est de nouveau une vraie ic&ocirc;ne et correspond &agrave; son &eacute;tat clair/sombre.'
  ],
  'v50.2': ['Correction d&rsquo;un bug de la v50.1 qui emp&ecirc;chait les ic&ocirc;nes de la barre sup&eacute;rieure et les Param&egrave;tres de fonctionner au chargement.'],
  'v50.1': [
    'Nouveau mode Performance dans Personnalisation : il d&eacute;sactive les effets de flou et les animations qui peuvent rendre l&rsquo;application lente sous Windows.',
    'La barre sup&eacute;rieure utilise maintenant de vraies ic&ocirc;nes, et un nouveau r&eacute;glage Ic&ocirc;nes les colore avec votre couleur d&rsquo;accentuation.',
    'L&rsquo;onglet Apps fonctionne comme l&rsquo;onglet Linux : cliquez n&rsquo;importe o&ugrave; pour choisir une application (VS Code, Figma, Gmail et plus), et l&rsquo;onglet affiche votre choix, par exemple &laquo;Apps - Gmail&raquo;.',
    'Suppression du champ de texte hexad&eacute;cimal sous le bouton Personnaliser : choisissez les couleurs uniquement avec les curseurs.',
    'Doublement des options d&rsquo;accent en d&eacute;grad&eacute; avec huit nouvelles combinaisons de deux couleurs.'
  ],
  'v50': [
    'Cliquez n&rsquo;importe o&ugrave; sur l&rsquo;onglet Linux pour ouvrir le menu des distributions, et l&rsquo;onglet affiche maintenant votre choix, par exemple &laquo;Linux - Ubuntu (GNOME)&raquo;.',
    'Le s&eacute;lecteur de couleur personnalis&eacute;e a &eacute;t&eacute; reconstruit : le cercle ouvre des curseurs de Teinte, Saturation et Luminosit&eacute; (avec la valeur affich&eacute;e juste au-dessus de chacun), en partant de votre couleur actuelle au lieu de 0/0/0.',
    'Nouvelle section Accents en d&eacute;grad&eacute; : huit d&eacute;grad&eacute;s &agrave; deux couleurs pr&ecirc;ts &agrave; appliquer comme accent.',
    'Les pr&eacute;r&eacute;glages d&rsquo;accent ont &eacute;t&eacute; ajust&eacute;s vers une palette plus sobre et plus distincte.'
  ],
  'v40.9': ['Le menu des distributions se trouve d&eacute;sormais directement sur l&rsquo;onglet Linux : cliquez sur la petite fl&egrave;che de l&rsquo;onglet pour choisir votre distribution.'],
  'v40.8': ['L&rsquo;onglet Linux dispose maintenant d&rsquo;un menu de distributions (Ubuntu, Debian, Fedora, Arch, Mint, KDE et plus) qui adapte les raccourcis syst&egrave;me aux valeurs par d&eacute;faut de chaque distribution et m&eacute;morise votre choix.'],
  'v40.7': ['Les r&eacute;glages d&rsquo;accent affichent maintenant une barre d&rsquo;aper&ccedil;u en direct avec le code hexad&eacute;cimal exact de la couleur appliqu&eacute;e, pour que vous voyiez chaque choix changer imm&eacute;diatement.'],
  'v40.6': [
    'Suppression de la pipette &laquo;Choisir &agrave; l&rsquo;&eacute;cran&raquo;.',
    'Pr&eacute;r&eacute;glages d&rsquo;accent pouss&eacute;s &agrave; la pleine intensit&eacute; Material 3 Expressive : des couleurs profondes, vives et Truly Neon (les gris restent att&eacute;n&eacute;s).'
  ],
  'v40.5': ['La palette d&rsquo;accent a &eacute;t&eacute; r&eacute;ajust&eacute;e vers le style Material 3 Expressive : des couleurs tonales plus vibrantes.'],
  'v40.4': ['La correspondance d&rsquo;accent avec l&rsquo;appareil lit maintenant la vraie couleur du syst&egrave;me (y compris la sortie oklch/color() de Chrome) et sonde aussi la couleur de s&eacute;lection du texte du syst&egrave;me d&rsquo;exploitation : c&rsquo;est donc votre accent dynamique r&eacute;el qui est appliqu&eacute;.'],
  'v40.3': [
    'Toutes les couleurs d&rsquo;accent ont &eacute;t&eacute; r&eacute;ajust&eacute;es au style tonal Material You (tons moyens att&eacute;n&eacute;s avec des tons de conteneur doux).',
    '&laquo;Correspondre &agrave; mon appareil&raquo; lit aussi la couleur de s&eacute;lection du syst&egrave;me en secours, afin de fonctionner sur davantage de navigateurs et de profils.'
  ],
  'v40.2': ['R&eacute;glages de la couleur d&rsquo;accent : le nouveau bouton &laquo;Correspondre &agrave; mon appareil&raquo; lit la couleur d&rsquo;accentuation du syst&egrave;me (Chrome 150+, application install&eacute;e) et l&rsquo;applique, avec une notification de confirmation.'],
  'v40.1': ['Suppression de la galerie de fonds d&rsquo;&eacute;cran (les fonds enregistr&eacute;s dans la galerie sont supprim&eacute;s ; votre propre fond t&eacute;l&eacute;charg&eacute; continue de fonctionner).'],
  'v40.0': ['S&eacute;lecteur de couleur d&rsquo;accent : la couleur personnalis&eacute;e dispose maintenant d&rsquo;un champ hexad&eacute;cimal (saisissez n&rsquo;importe quelle couleur, 3 ou 6 chiffres) et d&rsquo;un bouton Copier &mdash; la m&ecirc;me mise en page exacte sur ordinateur et mobile.'],
  'v39.9': ['Discussion dans le salon : les notes du salon apparaissent maintenant dans un panneau Chat avec historique (60 messages conserv&eacute;s par salon, restaur&eacute;s &agrave; la reconnexion). Les notes publiques sont publi&eacute;es dans le journal ; les notes priv&eacute;es sont toujours copi&eacute;es directement dans votre presse-papiers. Touchez un message pour le recopier.'],
  'v39.8': [
    'Salons r&eacute;cents : les six derniers salons rejoints apparaissent sous forme de puces &agrave; un seul geste sur l&rsquo;&eacute;cran de connexion (avec leurs couleurs), plus un bouton pour les effacer.',
    'Envoyer mon profil : envoie vos param&egrave;tres et raccourcis personnalis&eacute;s &agrave; tout le salon sous forme d&rsquo;instantan&eacute; &agrave; sens unique ; les autres appareils l&rsquo;appliquent imm&eacute;diatement.',
    'Galerie de fonds : six d&eacute;grad&eacute;s int&eacute;gr&eacute;s avec des variantes automatiques clair/sombre, un bouton Al&eacute;atoire et un m&eacute;lange quotidien optionnel.',
    'Recherche : les raccourcis que vous copiez sont m&eacute;morisis comme &laquo;R&eacute;cemment copi&eacute;s&raquo; dans le menu de recherche, avec votre historique de recherches.'
  ],
  'v39.7': ['Les animations sur mobile proviennent d&eacute;sormais du m&ecirc;me CSS de base que sur ordinateur : la r&egrave;gle pour appareils tactiles ne d&eacute;sactive plus globalement les transitions. Le projecteur de la visite et les cartes glissent entre les &eacute;tapes, et les changements de th&egrave;me/fond se fondent, y compris sur les t&eacute;l&eacute;phones.'],
  'v39.6': ['Parit&eacute; mobile : les changements de th&egrave;me et de fond se transforment maintenant en douceur (comme sur ordinateur), et la visite du site s&rsquo;anime entre les &eacute;tapes sur les appareils tactiles aussi.'],
  'v39.5': ['AirDrop et Quick Share : un bouton &laquo;Partager&raquo; &agrave; c&ocirc;t&eacute; du code du salon ouvre le menu de partage de votre t&eacute;l&eacute;phone (AirDrop sur Apple) avec un lien de connexion en un geste &mdash; l&rsquo;autre appareil n&rsquo;a qu&rsquo;&agrave; le toucher pour rejoindre le salon.'],
  'v39.4': ['La lueur et le scintillement de la pastille de version s&rsquo;animent maintenant sur ordinateur, m&ecirc;me si &laquo;r&eacute;duire les animations&raquo; est activ&eacute; dans le syst&egrave;me ou si les animations sont d&eacute;sactiv&eacute;es dans les param&egrave;tres : c&rsquo;est trait&eacute; comme un signal de mise &agrave; jour, pas comme une d&eacute;coration.'],
  'v39.3': ['La lueur de la pastille de version et le badge des param&egrave;tres apparaissent maintenant de mani&egrave;re fiable sur ordinateur : la version en cours d&rsquo;ex&eacute;cution b&eacute;n&eacute;ficie toujours d&rsquo;une nouvelle fen&ecirc;tre de mise en avant de quelques jours au chargement, m&ecirc;me si l&rsquo;avis de mise &agrave; jour a &eacute;t&eacute; ignor&eacute;.'],
  'v39.2': ['La lueur et le scintillement de nouvelle version sur la pastille ne dispara&ucirc;sent plus d&eacute;finitivement apr&egrave;s un seul coup d&rsquo;&oelig;il : la mise en avant dure quelques jours et revient &agrave; chaque visite.'],
  'v39.1': ['Les pastilles de couleur s&rsquo;affichent enfin : les &eacute;chantillons (couleur de salon et &eacute;chantillons de th&egrave;me/accent) sont maintenant des cercles visibles au lieu de spans vides invisibles.'],
  'v39': [
    'Ring permet maintenant d&rsquo;attacher un message rapide au ping : l&rsquo;appareil qui sonne l&rsquo;entend et le copie dans le presse-papiers.',
    'Alertes de batterie : vous recevez une notification &laquo;r&eacute;tabli&raquo; lorsqu&rsquo;un appareil remonte au-dessus de 25 %, et vous pouvez activer ou d&eacute;sactiver l&rsquo;alarme de batterie.',
    'Les notes peuvent &ecirc;tre adress&eacute;es &agrave; un seul appareil gr&acirc;ce &agrave; un s&eacute;lecteur &laquo;&Agrave;&nbsp;:&raquo; &agrave; c&ocirc;t&eacute; du champ de note.',
    'Chaque salon peut avoir une &eacute;tiquette de couleur pour distinguer les salons d&rsquo;un coup d&rsquo;&oelig;il.',
    'Les codes de synchronisation hors ligne affichent maintenant un aper&ccedil;u (appareil, heure, nombre de param&egrave;tres et de raccourcis) et demandent confirmation avant l&rsquo;importation.'
  ],
  'v38.1': ['Sur mobile, toucher l&rsquo;onglet &Agrave; propos n&rsquo;ouvre plus les sections automatiquement : touchez l&rsquo;en-t&ecirc;te d&rsquo;une section pour la d&eacute;plier.'],
  'v38': ['Sur mobile, ouvrir l&rsquo;onglet &Agrave; propos ne d&eacute;plie plus automatiquement les instructions de synchronisation : touchez la section &laquo;Live rooms &amp; offline sync&raquo; pour l&rsquo;ouvrir.'],
  'v37': ['L&rsquo;aide contient maintenant les instructions compl&egrave;tes pour <strong>Live rooms</strong> et <strong>Offline sync codes</strong>, et cette aide est aussi disponible sur mobile.'],
  'v36': ['Le bouton de la zone de connexion porte maintenant le nom <strong>Scan</strong> (il ouvre l&rsquo;appareil photo ou le s&eacute;lecteur de fichiers pour lire un QR), il n&rsquo;est donc plus confondu avec le bouton <strong>QR</strong> qui affiche votre code de salon.'],
  'v35': ['Correction : les codes QR de salon et de code hors ligne s&rsquo;affichent maintenant correctement au lieu d&rsquo;une case vide.'],
  'v34': [
    '<strong>Faire sonner un appareil</strong> &mdash; chaque autre appareil dispose d&rsquo;un bouton Ring qui le fait sonner et vibrer, pour retrouver votre t&eacute;l&eacute;phone.',
    '<strong>Envoyer une note</strong> &mdash; partagez du texte avec chaque appareil li&eacute; ; il appara&icirc;t imm&eacute;diatement et est copi&eacute; dans leur presse-papiers.',
    '<strong>Surveillance de la batterie</strong> &mdash; vous &ecirc;tes averti lorsqu&rsquo;un appareil li&eacute; passe sous 20 % de batterie.',
    '<strong>Renommer les appareils</strong> &mdash; touchez le nom d&rsquo;un appareil pour lui donner un nom personnalis&eacute;.',
    '<strong>Rejoindre en scannant</strong> &mdash; l&rsquo;h&ocirc;te peut afficher un QR du code de salon ; scannez-le avec l&rsquo;appareil photo (ou scannez un code de synchronisation hors ligne).',
    '<strong>Salons prot&eacute;g&eacute;s</strong> &mdash; cochez &laquo;Prot&eacute;ger ce salon&raquo; et d&eacute;finissez une phrase secr&egrave;te ; toutes les donn&eacute;es du salon sont alors chiffr&eacute;es afin que seuls les membres connaissant la phrase puissent les lire.',
    '<strong>Vu la derni&egrave;re fois</strong> &mdash; chaque appareil affiche maintenant depuis combien de temps il est en ligne.'
  ],
  'v33': ['Les appareils li&eacute;s partagent maintenant aussi leur <strong>niveau de batterie</strong> (y compris pendant la charge), mis &agrave; jour en direct dans le salon.'],
  'v32': ['Les salons en direct affichent maintenant le vrai nom de chaque appareil (comme &laquo;Mi 9T Pro&raquo;) au lieu d&rsquo;un nom al&eacute;atoire, choisi automatiquement depuis l&rsquo;appareil lui-m&ecirc;me.'],
  'v31': ['Les salons en direct affichent maintenant chaque appareil li&eacute; par son nom, avec un point vert sur cet appareil et le total.'],
  'v30': [
    '<strong>Salons en direct</strong> &mdash; d&rsquo;abord, pour synchroniser param&egrave;tres et raccourcis personnalis&eacute;s en temps r&eacute;el :<ol><li>Sur l&rsquo;appareil qui contient vos param&egrave;tres, ouvrez <strong>Settings &rarr; Live rooms</strong> et touchez <strong>Start a room</strong>. Un code de salon comme AK-XXX-YYY appara&icirc;t.</li><li>Envoyez ce code &agrave; vos autres appareils (copiez-le ou partagez-le comme vous voulez).</li><li>Sur chaque appareil destinataire, ouvrez <strong>Settings &rarr; Live rooms</strong>, saisissez le m&ecirc;me code et touchez <strong>Join room</strong>.</li></ol>',
    '<strong>Codes de synchronisation hors ligne</strong> &mdash; ensuite, pour un transfert unique quand il n&rsquo;y a pas internet :<ol><li>Ouvrez <strong>Settings &rarr; Offline sync code</strong> et touchez <strong>Create a code</strong>. Copiez le code ou scannez le QR qui appara&icirc;t.</li><li>Sur l&rsquo;autre appareil, ouvrez <strong>Settings &rarr; Offline sync code</strong>, collez le code et touchez <strong>Apply a code</strong>.</li></ol>'
  ],
  'v29': ['Correction : sur <strong>mobile</strong>, toucher le badge de version d&eacute;clenche maintenant l&rsquo;animation al&eacute;atoire de rebond/rotation/&eacute;crasement au lieu d&rsquo;&ecirc;tre bloqu&eacute; par la r&eacute;initialisation des animations des appareils tactiles.'],
  'v28': ['Mobile : l&rsquo;onglet des param&egrave;tres situ&eacute; &agrave; c&ocirc;t&eacute; de Personnaliser est maintenant simplement <strong>&Agrave; propos</strong> (l&rsquo;Aide n&rsquo;existe que sur ordinateur) et ouvre automatiquement la section &Agrave; propos lorsqu&rsquo;on le touche.'],
  'v27': ['Correction : ouvrir la page juste apr&egrave;s une <strong>nouvelle version</strong> ne la r&eacute;initialise plus avec un rechargement surprise quelques secondes plus tard &mdash; la mise &agrave; jour s&rsquo;applique maintenant en arri&egrave;re-plan. Le bouton Actualiser et l&rsquo;option &laquo;Demander avant de mettre &agrave; jour&raquo; rechargent toujours &agrave; la demande.'],
  'v26.9': ['Ludique : toucher le <strong>badge de version</strong> d&eacute;clenche maintenant une animation al&eacute;atoire de rebond/rotation/&eacute;crasement &agrave; chaque fois, affiche un <strong>scintillement</strong> lorsqu&rsquo;une nouvelle version est mise en avant, et la section &Agrave; propos a d&eacute;m&eacute;rag&eacute; vers son propre <strong>onglet &Agrave; propos</strong> dans Param&egrave;tres pour y acc&eacute;der plus vite.'],
  'v26.8': ['Am&eacute;lioration : le <strong>badge de version</strong> de la section &Agrave; propos se met maintenant &agrave; jour automatiquement et ouvre Nouveaut&eacute;s.'],
  'v26.7': ['Am&eacute;lioration : les <strong>raccourcis d&rsquo;applications</strong> du conseil quotidien affichent maintenant d&rsquo;abord &agrave; quelle application ils appartiennent, par exemple <em>Figma &mdash; Move Tool &mdash; V</em>.'],
  'v26.6': ['Am&eacute;lioration : le <strong>conseil quotidien</strong> se met maintenant &agrave; jour lorsque vous changez d&rsquo;onglet de plateforme : s&eacute;lectionner Windows, macOS, Linux, ChromeOS ou Apps affiche un raccourci de cette section.'],
  'v26.5': ['Correction : le <strong>conseil quotidien</strong> ne reste plus bloqu&eacute; sur un seul raccourci : il affiche maintenant un nouveau raccourci al&eacute;atoire (depuis l&rsquo;onglet de plateforme que vous consultez) &agrave; chaque chargement de page, au lieu de r&eacute;utiliser le m&ecirc;me toute la journ&eacute;e.'],
  'v26.4': ['Correction : le <strong>conseil quotidien</strong> n&rsquo;affiche maintenant que les raccourcis de l&rsquo;onglet de plateforme que vous consultez (il m&eacute;langeait auparavant ceux de toutes les plateformes). Le badge de version de la section Aide se met aussi &agrave; jour automatiquement.'],
  'v26.3': ['Le bouton de <strong>visite</strong> affiche maintenant une ic&ocirc;ne de <strong>livre ouvert</strong>.'],
  'v26.2': ['Le bouton de <strong>visite</strong> affiche maintenant une ic&ocirc;ne de boussole, et la visite a gagn&eacute; une &eacute;tape expliquant ce que fait le <strong>bouton d&rsquo;actualisation</strong>.'],
  'v26.1': ['Correction : passer du <strong>sombre &harr; clair</strong> (via le commutateur en haut ou les Param&egrave;tres) ne d&eacute;colorise plus un <strong>th&egrave;me de fond d&rsquo;&eacute;cran</strong> &mdash; l&rsquo;accent, les boutons de la barre et les touches de raccourcis conservent leurs couleurs de th&egrave;me pendant que le fond reste en place.'],
  'v26': ['Nouvelle <strong>visite du site</strong> &mdash; touchez le bouton <strong>?</strong> en haut pour un parcours guid&eacute; de la barre de recherche, des filtres, des onglets, de la liste des raccourcis, du quiz, des param&egrave;tres, de l&rsquo;impression et du commutateur de th&egrave;me. Naviguez avec les boutons, les fl&egrave;ches ou les points.'],
  'v25': ['Suppression du lien <strong>Voir sur GitHub</strong> dans la section &Agrave; propos.'],
  'v24.8': ['Correction : la notification <strong>&laquo;&Agrave; jour&raquo;</strong> sur mobile reste maintenant dans l&rsquo;&eacute;cran (elle d&eacute;bordait de l&rsquo;&eacute;cran sur les petits appareils).'],
  'v24.7.4': ['Le rayon des coins est maintenant limit&eacute; &agrave; <strong>16&thinsp;px</strong> dans tous les th&egrave;mes : les pastilles, les onglets, les barres de recherche et les notifications ne sont plus totalement arrondis (ils utilisaient auparavant jusqu&rsquo;&agrave; un rayon de 100&thinsp;px). Les coins restent doux, juste plus sobres.'],
  'v24.7.3': ['Correction : <strong>Ouvrir les param&egrave;tres Wi-Fi</strong> sur <strong>Android</strong> ne faisait rien &mdash; les versions r&eacute;centes de Chrome ne permettent pas aux sites web d&rsquo;ouvrir les param&egrave;tres syst&egrave;me d&rsquo;Android. Le bouton affiche maintenant un court message vous demandant d&rsquo;ouvrir les param&egrave;tres Wi-Fi depuis l&rsquo;application Param&egrave;tres de votre appareil (il les ouvre toujours directement sur iOS et macOS).'],
  'v24.7.2': ['Correction : dans une application Android install&eacute;e (PWA), toucher <strong>Ouvrir les param&egrave;tres Wi-Fi</strong> ne faisait rien &mdash; Android emp&ecirc;che les applications d&rsquo;ouvrir directement les param&egrave;tres syst&egrave;me. L&rsquo;application explique maintenant cela et vous invite &agrave; ouvrir le site dans un onglet Chrome, o&ugrave; le bouton fonctionne.'],
  'v24.7.1': ['Correction : <strong>Ouvrir les param&egrave;tres Wi-Fi</strong> sur <strong>Android</strong> utilisait un clic d&rsquo;ancre d&eacute;clench&eacute; par JS, que Chrome bloque pour les liens <code>intent:</code> &mdash; nous sommes pass&eacute;s &agrave; une navigation initi&eacute;e par un geste de l&rsquo;utilisateur.'],
  'v24.7': [
    'Le <strong>&eacute;tat de la connexion</strong> se trouve maintenant en haut de <strong>Settings &rarr; General</strong> (d&eacute;plac&eacute; hors de &Agrave; propos).',
    'Le bouton <strong>Ouvrir les param&egrave;tres Wi-Fi</strong> ouvre maintenant les vrais param&egrave;tres Wi-Fi sur <strong>iOS</strong> (application R&eacute;glages) et <strong>macOS</strong> (R&eacute;glages Syst&egrave;me). Sur Android, Windows et Linux, o&ugrave; les navigateurs ne peuvent pas acc&eacute;der directement aux param&egrave;tres syst&egrave;me, il affiche &agrave; la place des instructions rapides.'
  ],
  'v24.6': [
    'La pastille <strong>Offline</strong> reste maintenant <strong>10 secondes</strong> puis dispara&icirc;t (elle ne vous har&ccedil;lerait pas tant que la connexion est toujours coup&eacute;e).',
    'Settings &rarr; &Agrave; propos affiche maintenant votre <strong>&eacute;tat de connexion</strong> (En ligne / Hors ligne) en permanence, avec un bouton pour ouvrir vos <strong>param&egrave;tres Wi-Fi</strong> &mdash; sur iOS il ouvre directement l&rsquo;application R&eacute;glages ; sur les autres appareils il affiche des instructions rapides.'
  ],
  'v24.5.2': ['Correction : sur les ordinateurs o&ugrave; Windows coupe la connexion sans d&eacute;clencher l&rsquo;&eacute;v&eacute;nement <em>offline</em> du navigateur (ou o&ugrave; les requ&ecirc;tes bloquent au lieu d&rsquo;&eacute;chouer), la pastille <strong>Offline</strong> appara&icirc;t aussi lorsque le test de connectivit&eacute; d&eacute;passe le d&eacute;lai &mdash; pas seulement lorsque la requ&ecirc;te &eacute;choue.'],
  'v24.5.1': ['Correction : la pastille <strong>Offline</strong> appara&icirc;t maintenant aussi lorsque la connexion tombe sans &eacute;v&eacute;nement du navigateur (par ex. &laquo;Offline&raquo; dans DevTools, certains navigateurs mobiles) &mdash; l&rsquo;application teste maintenant activement la connectivit&eacute; toutes les quelques secondes au lieu de s&rsquo;appuyer uniquement sur les signaux du navigateur. Elle reste masqu&eacute;e tant que vous &ecirc;tes en ligne.'],
  'v24.5': [
    'Pendant la recherche, les mots correspondant &agrave; votre requ&ecirc;te sont maintenant <strong>mis en évidence</strong> dans les r&eacute;sultats &mdash; il est plus facile de voir pourquoi chaque ligne correspond.',
    'Le champ de recherche dispose maintenant d&rsquo;un <strong>bouton d&rsquo;effacement (&times;)</strong> qui appara&icirc;t lorsque vous avez saisi quelque chose.',
    'Une petite pastille <strong>Offline</strong> appara&icirc;t lorsque votre connexion tombe &mdash; touchez-la pour confirmer qu&rsquo;Anthkeys continue de fonctionner depuis son cache.'
  ],
  'v24.4.1': ['Correction sur mobile : l&rsquo;en-t&ecirc;te <strong>Action &mdash; Raccourci</strong> ne d&eacute;file plus &mdash; sur les &eacute;crans &eacute;troits, le tableau des raccourcis &eacute;tait devenu son propre conteneur de d&eacute;filement horizontal, ce qui cassait l&rsquo;en-t&ecirc;te fixe. Il est de nouveau ancr&eacute;, exactement comme sur ordinateur.'],
  'v24.4': ['Suppression du <strong>widget de s&eacute;rie du quiz sur l&rsquo;&eacute;cran d&rsquo;accueil</strong> &mdash; il reposait sur une norme web que les navigateurs n&rsquo;ont pas encore impl&eacute;ment&eacute;e, il n&rsquo;apparaissait donc nulle part. Votre s&eacute;rie et vos statistiques de quiz restent dans l&rsquo;application comme d&rsquo;habitude.'],
  'v24.3': [
    'Le <strong>quiz des raccourcis suit maintenant vos statistiques</strong> &mdash; une s&eacute;rie quotidienne (🔥 jours d&rsquo;affil&eacute;e o&ugrave; vous terminez un quiz), votre meilleur score, votre pr&eacute;cision et le nombre de parties. Stock&eacute;es localement, jamais t&eacute;l&eacute;charg&eacute;es.',
    'Nouveau <strong>widget de s&eacute;rie du quiz sur l&rsquo;&eacute;cran d&rsquo;accueil</strong> pour Android (Web App Widgets &mdash; exp&eacute;rimental, d&eacute;ploiement progressif sur Chrome et Firefox ; indisponible sur iOS). Il affiche votre s&eacute;rie et vos statistiques ; touchez-le pour ouvrir le quiz.'
  ],
  'v24.2.1': ['Correction sur mobile : toucher la barre de recherche pouvait ouvrir la page &Agrave; propos &mdash; la notification cach&eacute;e &laquo;Nouveaut&eacute;s&raquo; pr&egrave;s du bouton des param&egrave;tres restait cliquable et recouvrait le champ de recherche. Elle ne r&eacute;agit plus que lorsqu&rsquo;elle est visible.'],
  'v24.2': [
    'Nouveau <strong>filtre de modificateurs</strong> &mdash; dans le menu Filtres, choisissez une touche (Ctrl, Maj, Alt, Win, Cmd, &hellip;) pour n&rsquo;afficher que les raccourcis qui l&rsquo;utilisent. Les options s&rsquo;adaptent &agrave; chaque plateforme.',
    'Un <strong>bouton de retour en haut</strong> flotte au-dessus de la liste des raccourcis d&egrave;s que vous faites d&eacute;filer &mdash; touchez-le pour remonter directement.'
  ],
  'v24.1': ['La barre <strong>Action &mdash; Raccourci</strong> reste maintenant ancr&eacute;e en haut de la liste pendant le d&eacute;filement &mdash; sur mobile et Safari, elle sortait de l&rsquo;&eacute;cran.'],
  'v23.9': ['Suppression du pop-up Aide &amp; conseils sur mobile &mdash; il ne listait que les raccourcis d&rsquo;ordinateur. L&rsquo;Aide reste dans les Param&egrave;tres sur ordinateur, o&ugrave; <kbd>?</kbd> y acc&egrave;de directement.'],
  'v23.8': ['Sur mobile, l&rsquo;Aide ne se trouve plus dans les Param&egrave;tres &mdash; elle y reste masqu&eacute;e pour ne pas surcharger la page. Appuyez sur <kbd>?</kbd> pour l&rsquo;ouvrir en pop-up.'],
  'v23.7': ['Aide &amp; conseils d&eacute;plac&eacute;e dans <strong>Param&egrave;tres</strong> (section G&eacute;n&eacute;ral) sur ordinateur &mdash; appuyez sur <kbd>?</kbd> pour y acc&eacute;der directement.'],
  'v23.6': [
    'Les 20 langues sont maintenant enti&egrave;rement traduites &mdash; plus de repli sur l&rsquo;anglais pour les fonctions r&eacute;centes comme le quiz, la synchronisation cloud et l&rsquo;Aide.',
    'Sur mobile, maintenez l&rsquo;appui (appui long) sur un raccourci pour le copier au lieu de le toucher &mdash; plus de copies accidentelles lors du d&eacute;filement.',
    'Les pastilles de filtre utilisent maintenant votre couleur d&rsquo;accentuation sur mobile aussi, comme sur ordinateur ; lorsque Favoris est s&eacute;lectionn&eacute;, c&rsquo;est le seul qui ressort.',
    'Suppression de la bordure autour des cinq boutons de la barre sup&eacute;rieure sur mobile &mdash; ils se fondent maintenant dans la page.',
    'Le bouton du quiz a un nouvel ic&ocirc;ne d&rsquo;&eacute;clair, et les r&eacute;ponses du quiz affichent des noms lisibles au lieu de touches brutes.',
    'Correction : le JavaScript de l&rsquo;application pouvait &eacute;chouer au chargement apr&egrave;s une mise &agrave; jour, laissant le site sans r&eacute;ponse.'
  ],
  'v23.5': [
    'Les contr&ocirc;les de filtrage, favori, comparaison et repli r&eacute;unissent d&eacute;sormais dans un seul menu compact <strong>Filtres</strong> &mdash; plus de place pour la liste des raccourcis sur mobile.',
    'La page Nouveaut&eacute;s, le badge de version et les param&egrave;tres de mise &agrave; jour ont d&eacute;m&eacute;rag&eacute; vers une nouvelle section <strong>&Agrave; propos</strong> des Param&egrave;tres.',
    'Les notifications de mise &agrave; jour apparaissent d&eacute;sormais depuis le bouton <strong>Param&egrave;tres</strong> &mdash; l&rsquo;ic&ocirc;ne d&rsquo;engrenage porte un badge tant que vous n&rsquo;avez pas vu les novidades.'
  ],
  'v23.4': ['Suppression du bouton d&rsquo;aide <kbd>?</kbd> de la barre sup&eacute;rieure &mdash; appuyez sur <kbd>?</kbd> pour tout de m&ecirc;me ouvrir l&rsquo;Aide.'],
  'v23.3': [
    'Le badge de version s&rsquo;allume apr&egrave;s une mise &agrave; jour automatique, afin que vous remarquiez la nouvelle version au lancement suivant.',
    'Changer de fond pr&eacute;d&eacute;fini conserve votre mode sombre &mdash; le nouveau fond est lui aussi att&eacute;nu&eacute;.',
    'Sur mobile, la barre de plateformes (Windows, macOS, Linux, ChromeOS) a maintenant la m&ecirc;me apparence que sur ordinateur.'
  ],
  'v23.2': [
    'Suppression du commutateur Avanc&eacute;/Basique &mdash; tous les raccourcis sont affich&eacute;s ensemble.',
    'Sur mobile, les boutons de la barre sup&eacute;rieure sont maintenant dispos&eacute;s dans une grille 2&times;3 nette.',
    'Les fonds pr&eacute;d&eacute;finis restent appliqu&eacute;s et s&rsquo;att&eacute;nuent correctement lorsque vous passez en mode sombre.',
    'Les surcouches (param&egrave;tres, aide, quiz) recouvrent maintenant les onglets fixes sur mobile.'
  ],
  'v23.1': ['Les fonds d&rsquo;&eacute;cran sont maintenant optimisés pour le mode sombre : lorsque vous passez en sombre, les images personnalis&eacute;es comme les fonds pr&eacute;d&eacute;finis (Oc&eacute;an, For&ecirc;t, Coucher de soleil, &hellip;) sont assombris et d&eacute;satur&eacute;s afin que les panneaux restent lisibles.'],
  'v23': [
    'Nouveau mode &laquo;Comparer&raquo; &mdash; choisissez une deuxi&egrave;me plateforme pour ne voir que les raccourcis qui diff&egrave;rent.',
    'Th&egrave;me automatique qui suit l&rsquo;heure de la journ&eacute;e (sombre de 19h &agrave; 7h).',
    'Appuyez sur <kbd>?</kbd> ou touchez le bouton <kbd>?</kbd> pour une aide et des conseils rapides.',
    'Dates de sortie ajout&eacute;es &agrave; chaque entr&eacute;e de cette page.'
  ],
  'v22': [
    'Correction : le tableau de la l&eacute;gende des touches &eacute;tait tronqu&eacute; sur les t&eacute;l&eacute;phones &eacute;troits ; il d&eacute;file maintenant horizontalement pour que toutes les colonnes soient accessibles.',
    'La barre de recherche et les pastilles de cat&eacute;gorie sont masqu&eacute;es sur la page &laquo;Nouveaut&eacute;s&raquo;, car elles ne s&rsquo;y appliquent pas.'
  ],
  'v21': [
    'La l&eacute;gende des touches dispose maintenant d&rsquo;un bouton de fermeture, pour pouvoir la replier depuis le panneau &mdash; pratique sur mobile o&ugrave; le commutateur peut sortir de port&eacute;e.',
    'Gestion des taps plus adaptative pour le bouton L&eacute;gende des touches sur les appareils tactiles.'
  ],
  'v20.1': [
    'Les num&eacute;ros de version g&egrave;rent maintenant les versions de correction &mdash; le badge du pied de page affiche par exemple v20.1, et la d&eacute;tection des mises &agrave; jour les g&egrave;re correctement.',
    'Ajout de l&rsquo;entr&eacute;e v20 manquante sur cette page.'
  ],
  'v20': ['Nouvelle page &laquo;Nouveaut&eacute;s&raquo; directement dans Anthkeys &mdash; le lien de la notification de mise &agrave; jour et le badge de version du pied de page l&rsquo;ouvrent ici plut&ocirc;t que sur GitHub.'],
  'v19': ['La b&acirc;ne de mise &agrave; jour appara&icirc;t maintenant aussi si vous mettez &agrave; jour depuis une version ant&eacute;rieure au suivi des versions (votre version pr&eacute;c&eacute;dente est d&eacute;tect&eacute;e depuis le cache hors ligne).'],
  'v18': [
    'Une notification &laquo;Mis &agrave; jour vers vX &mdash; Nouveaut&eacute;s&raquo; appara&icirc;t &agrave; l&rsquo;arriv&eacute;e d&rsquo;une nouvelle version (en mode de mise &agrave; jour automatique).',
    'La b&acirc;ne de mise &agrave; jour se d&eacute;clenche d&eacute;sormais sur les mises &agrave; jour de contenu, pas seulement sur les changements du service worker.',
    'Le badge de version du pied de page est cliquable &mdash; touchez-le pour voir les nouveaut&eacute;s.',
    'Cache hors ligne plus l&eacute;ger (plus de fichiers sans version inutiles).'
  ],
  'v16': ['Ajout d&rsquo;un badge de version au pied de page affichant le num&eacute;ro de build actuel.'],
  'v15': ['Bouton d&rsquo;actualisation et pr&eacute;f&eacute;rence de mise &agrave; jour (automatique ou demander d&rsquo;abord), propuls&eacute;s par le service worker.'],
  'v14': ['Replier ou d&eacute;plier une cat&eacute;gorie respecte maintenant la recherche active.'],
  'v13': ['Cache des pages avec priorit&eacute; au r&eacute;seau afin que les mises &agrave; jour apparaissent imm&eacute;diatement ; d&eacute;filement plus fluide sur ordinateur.'],
  'v12': ['La recherche et les filtres sont maintenant limit&eacute;s &agrave; l&rsquo;onglet actif.'],
  'v11': ['Prise en charge de l&rsquo;installation en PWA, &eacute;tiquettes d&rsquo;accessibilit&eacute;, prise en charge du mouvement r&eacute;duit, raccourcis Gmail et YouTube, am&eacute;liorations du SEO.'],
  'v10': [
    'Correction : le filtre de cat&eacute;gorie pouvait masquer tous les raccourcis lorsqu&rsquo;il correspondait &agrave; une ligne d&rsquo;en-t&ecirc;te de cat&eacute;gorie ; il ne masque plus que les lignes que vous avez filtr&eacute;es.',
    'L&rsquo;arri&egrave;re-plan occupe maintenant tout l&rsquo;&eacute;cran sur mobile.'
  ],
  'v9': ['Windows est maintenant l&rsquo;onglet de plateforme par d&eacute;faut, et les onglets sont dans un ordre plus clair.'],
  'v8': [
    'Niveaux de difficult&eacute; du quiz et conseil quotidien.',
    'D&eacute;filement bien plus fluide sur mobile, ainsi qu&rsquo;un cache hors ligne.',
    'La recherche et les filtres fonctionnent sur toutes les plateformes &agrave; la fois, avec des libell&eacute;s d&rsquo;OS en gras.'
  ],
  'v7': ['Les styles d&rsquo;apparence ont &eacute;t&eacute; supprim&eacute;s &mdash; Material 3 est maintenant le seul look.'],
  'v6': [
    'Styles d&rsquo;apparence r&eacute;duits &agrave; Material 3, plus un bouton &laquo;Retirer le fond d&rsquo;&eacute;cran&raquo; pour revenir au th&egrave;me par d&eacute;faut.',
    'En-t&ecirc;tes de contr&ocirc;le du cache pour que les mises &agrave; jour vous parviennent plus vite.'
  ],
  'v5': ['Titres de page simplifi&eacute;s &agrave; simplement &laquo;Raccourcis&raquo; dans les 14 langues.'],
  'v4': [
    'Mode quiz de raccourcis &mdash; entra&icirc;nez-vous en devinant le raccourci ou l&rsquo;action &mdash; ainsi que la synchronisation cloud via GitHub Gist.',
    'Une importante s&eacute;rie de corrections couvrant les &eacute;chantillons d&rsquo;accent, le changement de th&egrave;me et les fonds d&rsquo;&eacute;cran mobiles.'
  ],
  'v3': ['Pr&eacute;r&eacute;glages de couleur d&rsquo;accent que vous pouvez enregistrer et r&eacute;utiliser, ainsi qu&rsquo;une invalidation du cache pour que les mises &agrave; jour apparaissent de mani&egrave;re fiable.'],
  'v2': ['Th&egrave;mes clair et sombre avec couleurs d&rsquo;accentuation, ainsi que des traductions de la r&eacute;f&eacute;rence des raccourcis.'],
  'v1': ['La premi&egrave;re version d&rsquo;Anthkeys : les raccourcis clavier quotidiens de Windows, macOS, Linux et ChromeOS sur une seule page.']
};

I18N_WN.de = {
  'v52.1': [
    'Neu: Die Seite &laquo;Neuerungen&raquo; ist jetzt in allen 20 Sprachen vollst&auml;ndig &uuml;bersetzt &mdash; jede fr&uuml;here Versionsnotiz wird in Ihrer Sprache angezeigt.'
  ],
  'v52': [
    'Behoben: Die v51 konnte die App beim Laden abst&uuml;rzen lassen; eine d&auml;nische &Uuml;bersetzung enthielt ein nicht maskiertes Apostroph, das die gesamte Sprachdatei ung&uuml;ltig machte. Die Datei wird jetzt korrekt geparst und alle 20 Sprachen laden wieder.'
  ],
  'v51': [
    '&Uuml;bersetzungen f&uuml;r alle 20 Sprachen abgeschlossen &mdash; Einstellungen, Live-R&auml;ume, Offline-Sync und die Sync-Hilfe sind jetzt vollst&auml;ndig &uuml;bersetzt (neuere Texte wurden zuvor nur auf Englisch angezeigt).',
    'Neu: Wenn sich Anthkeys langsam anf&uuml;hlt, bietet ein Banner an, den Leistungsmodus mit einem Tippen zu aktivieren. Sie k&ouml;nnen es ausblenden, und es fragt nicht mehr nach.'
  ],
  'v50.7': ['Der Leistungsmodus wurde in den Tab Allgemein der Einstellungen verschoben.'],
  'v50.6': ['Die Symbole in der oberen Leiste sind wieder die farbigen Emojis, genau wie in v50: Buch, Drucker, Blitz, Mond/Sonne, Aktualisieren und Zahnrad.'],
  'v50.5': ['Die Symbole in der oberen Leiste verwenden wieder die Akzentfarbe (standardm&auml;&szlig;ig), statt wei&szlig;/grau angezeigt zu werden.'],
  'v50.4': ['Die Funktion f&uuml;r ein akzentfarbenes App-Symbol wurde entfernt &mdash; Favicon, Startbildschirm-Symbol und installiertes PWA-Symbol verwenden wieder das Standardbild (ein Symbol passend zur Akzentfarbe zu &auml;ndern ergibt nur bei nativen Apps Sinn).'],
  'v50.3': [
    'Die Symbole der oberen Leiste wurden neu gebaut, damit sie auf allen Ger&auml;ten zuverl&auml;ssig dargestellt werden (Tour, Drucken, Quiz, Design, Aktualisieren und Einstellungen verwenden jetzt echte Symbole).',
    'Das Symbol f&uuml;r den Design-Umschalter ist wieder ein echtes Symbol und passt zu seinem Hell-/Dunkelzustand.'
  ],
  'v50.2': ['Behoben: Ein Fehler in v50.1 verhinderte, dass die Symbole der oberen Leiste und die Einstellungen beim Laden funktionierten.'],
  'v50.1': [
    'Neuer Leistungsmodus in der Anpassung &mdash; er schaltet Weichzeichnungs-Effekte und Animationen ab, die die App unter Windows langsam machen k&ouml;nnen.',
    'Die obere Leiste verwendet jetzt echte Symbole, und eine neue Symbole-Einstellung f&auml;rbt sie mit Ihrer Akzentfarbe.',
    'Der Tab Apps funktioniert wie der Linux-Tab: Klicken Sie anywhere darauf, um eine App auszuw&auml;hlen (VS Code, Figma, Gmail und mehr), und der Tab zeigt Ihre Auswahl &mdash; &laquo;Apps - Gmail&raquo;.',
    'Das Hexadezimal-Eingabefeld unter der Schaltfl&auml;che Anpassen wurde entfernt &mdash; w&auml;hlen Sie Farben nur &uuml;ber die Regler.',
    'Die Verlaufsakzent-Optionen wurden mit acht neuen Zweifarb-Kombinationen verdoppelt.'
  ],
  'v50': [
    'Klicken Sie anywhere auf den Linux-Tab, um die Distributionsauswahl zu &ouml;ffnen, und der Tab zeigt jetzt Ihre Auswahl, etwa &laquo;Linux - Ubuntu (GNOME)&raquo;.',
    'Der benutzerdefinierte Farbw&auml;hler wurde neu gebaut: Der runde Regler &ouml;ffnet Schieberegler f&uuml;r Farbton, S&auml;ttigung und Helligkeit (mit dem Wert direkt dar&uuml;ber), ausgehend von Ihrer aktuellen Farbe statt von 0/0/0.',
    'Neuer Abschnitt Verlaufsakzente &mdash; acht Zweifarb-Verl&auml;ufe, die direkt als Akzent angewendet werden k&ouml;nnen.',
    'Die Akzent-Voreinstellungen wurden auf eine klarere, deutlichere Palette abgestimmt.'
  ],
  'v40.9': ['Die Distributionsauswahl befindet sich jetzt direkt auf dem Linux-Tab &mdash; klicken Sie auf den kleinen Pfeil am Tab, um Ihre Distribution zu w&auml;hlen.'],
  'v40.8': ['Der Linux-Tab hat jetzt eine Distributionsauswahl (Ubuntu, Debian, Fedora, Arch, Mint, KDE und mehr), die Systemshortcuts an die Standardwerte jeder Distribution anpasst und Ihre Auswahl speichert.'],
  'v40.7': ['Die Akzenteinstellungen zeigen jetzt eine Live-Vorschauleiste mit dem exakten Hexadezimalwert der angewendeten Farbe, sodass Sie jede Auswahl sofort sehen.'],
  'v40.6': [
    'Die Pipette &laquo;Vom Bildschirm w&auml;hlen&raquo; wurde entfernt.',
    'Akzent-Voreinstellungen auf volle Material-3-Expressive-Intensit&auml;t verst&auml;rkt &mdash; tiefe, kr&auml;ftige Neon-Farben (Graut&ouml;ne bleiben ged&auml;mpft).'
  ],
  'v40.5': ['Die Akzentpalette wurde auf den Material-3-Expressive-Stil abgestimmt &mdash; lebendigere Tonalfarben.'],
  'v40.4': ['Die Ger&auml;teerkennung f&uuml;r Akzente liest jetzt die echte Systemfarbe (einschlie&szlig;lich Chromes oklch/color()-Ausgabe) und fragt auch die Textauswahlfarbe des Betriebssystems ab &mdash; so wird Ihr echter dynamischer Akzent angewendet.'],
  'v40.3': [
    'Alle Akzentfarben wurden auf den Material-You-Tonalstil abgestimmt (ged&auml;mpfte Mittelt&ouml;ne mit weichen Containert&ouml;nen).',
    '&laquo;Meinem Ger&auml;t angleichen&raquo; liest jetzt zus&auml;tzlich die Systemauswahlfarbe als R&uuml;ckfalloption und funktioniert damit in mehr Browsern und Profilen.'
  ],
  'v40.2': ['Akzentfarbeinstellungen: Die neue Schaltfl&auml;che &laquo;Meinem Ger&auml;t angleichen&raquo; liest die Systemakzentfarbe des Ger&auml;ts (Chrome 150+, installierte App) und wendet sie mit einer Best&auml;tigungsbenachrichtigung an.'],
  'v40.1': ['Die Hintergrundbild-Galerie wurde entfernt (gespeicherte Galerie-Hintergr&uuml;nde werden verworfen; Ihr eigenes hochgeladenes Hintergrundbild funktioniert weiterhin).'],
  'v40.0': ['Akzentfarbw&auml;hler: Die benutzerdefinierte Farbe hat jetzt ein Hexadezimal-Eingabefeld (geben Sie eine beliebige Farbe mit 3 oder 6 Ziffern ein) sowie eine Schaltfl&auml;che Kopieren &mdash; exakt dasselbe Layout auf Desktop und Mobil.'],
  'v39.9': ['Chat im Raum: Raumnotizen erscheinen jetzt in einem Chat-Bereich mit Verlauf (60 Nachrichten pro Raum, beim erneuten Beitreten wiederhergestellt). &ouml;ffentliche Notizen werden ins Protokoll geschrieben; private Notizen werden weiterhin direkt in die Zwischenablage kopiert. Tippen Sie auf eine Nachricht, um sie erneut zu kopieren.'],
  'v39.8': [
    'Letzte R&auml;ume: Die sechs zuletzt beigetretenen R&auml;ume erscheinen auf dem Beitrittsbildschirm als Ein-Tipp-Chips (mit ihren Raumfarben), dazu eine Schaltfl&auml;che zum L&ouml;schen.',
    'Mein Profil senden: Sendet Ihre Einstellungen und benutzerdefinierten Shortcuts als Einweg-Momentaufnahme an den gesamten Raum &mdash; andere Ger&auml;te wenden sie sofort an.',
    'Hintergrundbild-Galerie: sechs integrierte Verläufe mit automatischen Hell-/Dunkelvarianten, eine Schaltfl&auml;che Zuf&auml;llig und eine optionale t&auml;gliche Mischung.',
    'Suche: Von Ihnen kopierte Shortcuts werden im Suchdialog als &laquo;Zuletzt kopiert&raquo; gespeichert, zusammen mit Ihrem Suchverlauf.'
  ],
  'v39.7': ['Mobile Animationen stammen jetzt aus derselben Basis-CSS wie auf dem Desktop &mdash; die Touch-Ger&auml;te-Regel deaktiviert &Uuml;berg&auml;nge nicht mehr global. Der Tour-Spotlight und die Karten gleiten zwischen den Schritten, und Design-/Hintergrundwechsel blenden auch auf Smartphones &uuml;ber.'],
  'v39.6': ['Mobile Parit&auml;t: Design- und Hintergrundwechsel werden jetzt reibungslos &uuml;bergangen (wie auf dem Desktop), und die Website-Tour animiert auch auf Touch-Ger&auml;ten zwischen den Schritten.'],
  'v39.5': ['AirDrop und Quick Share: Eine Schaltfl&auml;che &laquo;Teilen&raquo; neben dem Raumcode &ouml;ffnet die Teilen-Funktion Ihres Smartphones (AirDrop auf Apple) mit einem Beitrittslink zum Tippen &mdash; das andere Ger&auml;t muss ihn nur antippen und ist im Raum.'],
  'v39.4': ['Leuchten und Schimmern der Versionskapsel werden jetzt auch auf dem Desktop animiert, selbst wenn im System &laquo;Bewegung reduzieren&raquo; aktiv ist oder Animationen in den Einstellungen deaktiviert sind &mdash; es gilt als Aktualisierungssignal, nicht als Dekoration.'],
  'v39.3': ['Das Leuchten der Versionskapsel und das Abzeichen in den Einstellungen erscheinen jetzt zuverl&auml;ssig auf dem Desktop: Die laufende Version bekommt beim Laden immer ein neues Hervorhebungsfenster von einigen Tagen, auch wenn der Aktualisierungshinweis &uuml;bersprungen wurde.'],
  'v39.2': ['Leuchten und Schimmern f&uuml;r eine neue Version auf der Versionskapsel verschwinden nicht mehr f&uuml;r immer nach einem einzigen Blick &mdash; die Hervorhebung dauert einige Tage und kehrt bei jedem Besuch zur&uuml;ck.'],
  'v39.1': ['Farbpunkte werden endlich angezeigt: Die Farbfelder (Raumfarbe sowie Design-/Akzentfelder) werden jetzt als sichtbare Kreise dargestellt statt als unsichtbare leere spans.'],
  'v39': [
    'Ring erlaubt jetzt, eine Kurznachricht an den Ping anzuh&auml;ngen &mdash; das klingelnde Ger&auml;t h&ouml;rt sie und kopiert sie in die Zwischenablage.',
    'Batteriewarnungen: Sie erhalten eine &laquo;wiederhergestellt&raquo;-Benachrichtigung, wenn ein Ger&auml;t wieder &uuml;ber 25 % steigt, und Sie k&ouml;nnen den Batteriealarm ein- oder ausschalten.',
    'Notizen k&ouml;nnen &uuml;ber einen &laquo;An:&raquo;-Ausw&auml;hler neben dem Notizfeld an ein einzelnes Ger&auml;t gerichtet werden.',
    'Jeder Raum kann eine Farbmarkierung haben, sodass Sie R&auml;ume auf einen Blick unterscheiden k&ouml;nnen.',
    'Offline-Sync-Codes zeigen jetzt eine Vorschau (Ger&auml;t, Uhrzeit, Anzahl der Einstellungen und Shortcuts) und fragen vor dem Import nach.'
  ],
  'v38.1': ['Auf dem Mobilger&auml;t werden beim Tippen auf den Tab &Uuml;ber uns nicht mehr automatisch Abschnitte ge&ouml;ffnet &mdash; tippen Sie auf eine Abschnitts&uuml;berschrift, um ihn auszuklappen.'],
  'v38': ['Auf dem Mobilger&auml;t wird beim &Ouml;ffnen des Tabs &Uuml;ber uns die Sync-Anleitung nicht mehr automatisch ausgeklappt &mdash; tippen Sie auf den Abschnitt &laquo;Live rooms &amp; offline sync&raquo;, um ihn zu &ouml;ffnen.'],
  'v37': ['Die Hilfe enth&auml;lt jetzt vollst&auml;ndige Anweisungen f&uuml;r <strong>Live rooms</strong> und <strong>Offline sync codes</strong>, und diese Hilfe ist auch auf dem Mobilger&auml;t verf&uuml;gbar.'],
  'v36': ['Die Schaltfl&auml;che im Beitrittsbereich hei&szlig;t jetzt <strong>Scannen</strong> (sie &ouml;ffnet Kamera oder Dateiauswahl, um einen QR-Code zu lesen) und wird nicht mehr mit der Schaltfl&auml;che <strong>QR</strong> verwechselt, die Ihren Raumcode anzeigt.'],
  'v35': ['Behoben: Die QR-Codes f&uuml;r Raum und Offline-Code werden jetzt korrekt angezeigt statt als leeres Feld.'],
  'v34': [
    '<strong>Ger&auml;t anrufen</strong> &mdash; jedes andere Ger&auml;t hat eine Ring-Schaltfl&auml;che, die es klingeln l&auml;sst und vibrieren l&auml;sst, damit Sie Ihr Telefon finden.',
    '<strong>Notiz senden</strong> &mdash; teilen Sie Text mit jedem verkn&uuml;pften Ger&auml;t; er erscheint sofort und wird in die Zwischenablage kopiert.',
    '<strong>Akk&uuml;berwachung</strong> &mdash; Sie werden gewarnt, wenn ein verkn&uuml;pftes Ger&auml;t unter 20 % Akkustand f&auml;llt.',
    '<strong>Ger&auml;te umbenennen</strong> &mdash; tippen Sie auf einen Ger&auml;tenamen, um einen eigenen Namen zu vergeben.',
    '<strong>Per Scan beitreten</strong> &mdash; der Host kann einen QR-Code des Raumcodes anzeigen; scannen Sie ihn mit der Kamera (oder scannen Sie einen Offline-Sync-Code).',
    '<strong>Gesch&uuml;tzte R&auml;ume</strong> &mdash; haken Sie &laquo;Diesen Raum sch&uuml;tzen&raquo; an und legen Sie eine Passphrase fest; alle Raumdaten werden dann verschl&uuml;sselt, sodass nur Mitglieder mit der Passphrase sie lesen k&ouml;nnen.',
    '<strong>Zuletzt gesehen</strong> &mdash; jedes Ger&auml;t zeigt jetzt, wie lange es online war.'
  ],
  'v33': ['Verkn&uuml;pfte Ger&auml;te teilen jetzt auch ihren <strong>Akkustand</strong> (auch w&auml;hrend des Ladens), der im Raum laufend aktualisiert wird.'],
  'v32': ['Live-R&auml;ume zeigen jetzt den echten Namen jedes Ger&auml;ts (wie &laquo;Mi 9T Pro&raquo;) statt eines zuf&auml;lligen &mdash; automatisch vom Ger&auml;t selbst &uuml;bernommen.'],
  'v31': ['Live-R&auml;ume zeigen jetzt jedes verkn&uuml;pfte Ger&auml;t mit Namen, mit einem gr&uuml;nen Punkt auf diesem Ger&auml;t und der Gesamtzahl.'],
  'v30': [
    '<strong>Live-R&auml;ume</strong> &mdash; zuerst, um Einstellungen und benutzerdefinierte Shortcuts in Echtzeit zu synchronisieren:<ol><li>Auf dem Ger&auml;t mit Ihren Einstellungen &ouml;ffnen Sie <strong>Settings &rarr; Live rooms</strong> und tippen Sie auf <strong>Start a room</strong>. Ein Raumcode wie AK-XXX-YYY erscheint.</li><li>Senden Sie diesen Code an Ihre anderen Ger&auml;te (kopieren Sie ihn oder teilen Sie ihn wie gew&uuml;nscht).</li><li>Auf jedem empfangenden Ger&auml;t &ouml;ffnen Sie <strong>Settings &rarr; Live rooms</strong>, geben Sie denselben Code ein und tippen Sie auf <strong>Join room</strong>.</li></ol>',
    '<strong>Offline-Sync-Codes</strong> &mdash; dann f&uuml;r eine einmalige &Uuml;bertragung, wenn es kein Internet gibt:<ol><li>&Ouml;ffnen Sie <strong>Settings &rarr; Offline sync code</strong> und tippen Sie auf <strong>Create a code</strong>. Kopieren Sie den Code oder scannen Sie den angezeigten QR-Code.</li><li>Auf dem anderen Ger&auml;t &ouml;ffnen Sie <strong>Settings &rarr; Offline sync code</strong>, f&uuml;gen Sie den Code ein und tippen Sie auf <strong>Apply a code</strong>.</li></ol>'
  ],
  'v29': ['Behoben: Auf <strong>Mobilger&auml;ten</strong> spielt das Tippen auf das Versionsabzeichen jetzt die zuf&auml;llige Hüpf-/Dreh-/Stauch-Animation ab, statt durch die Touch-Animationszur&uuml;cksetzung blockiert zu werden.'],
  'v28': ['Mobil: Der Einstellungen-Tab neben Anpassen hei&szlig;t jetzt nur noch <strong>&Uuml;ber uns</strong> (Hilfe gibt es nur auf dem Desktop) und &ouml;ffnet beim Tippen automatisch den Abschnitt &Uuml;ber uns.'],
  'v27': ['Behoben: Das &Ouml;ffnen der Seite direkt nach einer <strong>neuen Version</strong> setzt sie nicht mehr Sekunden sp&auml;ter durch eine unerwartete Neu&shy;ladung zur&uuml;ck &mdash; die Aktualisierung wird jetzt im Hintergrund angewendet. Die Schaltfl&auml;che Aktualisieren und die Option &laquo;Vor dem Aktualisieren fragen&raquo; laden weiterhin auf Wunsch neu.'],
  'v26.9': ['Spa&szlig;: Das Tippen auf das <strong>Versionsabzeichen</strong> spielt jetzt jedes Mal eine zuf&auml;llige Hüpf-/Dreh-/Stauch-Animation ab, erh&auml;lt ein <strong>Schimmern</strong>, solange eine neue Version hervorgehoben wird, und der Abschnitt &Uuml;ber uns ist in einen eigenen <strong>Tab &Uuml;ber uns</strong> in den Einstellungen umgezogen, um ihn schneller zu erreichen.'],
  'v26.8': ['Verbessert: Das <strong>Versionsabzeichen</strong> im Abschnitt &Uuml;ber uns aktualisiert sich jetzt automatisch und &ouml;ffnet die Neuerungen.'],
  'v26.7': ['Verbessert: <strong>App-Shortcuts</strong> im Tageshinweis zeigen jetzt zuerst, zu welcher App sie geh&ouml;ren, z. B. <em>Figma &mdash; Move Tool &mdash; V</em>.'],
  'v26.6': ['Verbessert: Der <strong>Tageshinweis</strong> wird jetzt aktualisiert, wenn Sie die Plattform-Registerkarte wechseln &mdash; die Auswahl von Windows, macOS, Linux, ChromeOS oder Apps zeigt einen Shortcut aus diesem Bereich.'],
  'v26.5': ['Behoben: Der <strong>Tageshinweis</strong> bleibt nicht mehr auf einem Shortcut h&auml;ngen &mdash; er zeigt jetzt bei jedem Laden der Seite einen neuen zuf&auml;lligen Shortcut (aus der Registerkarte, die Sie ansehen) an, statt den ganzen Tag &uuml;ber denselben zu verwenden.'],
  'v26.4': ['Behoben: Der <strong>Tageshinweis</strong> zeigt jetzt nur Shortcuts der Plattform-Registerkarte, die Sie ansehen (zuvor mischte er Shortcuts aller Plattformen). Das Versionsabzeichen im Abschnitt Hilfe wird ebenfalls automatisch aktualisiert.'],
  'v26.3': ['Die Schaltfl&auml;che <strong>Tour</strong> zeigt jetzt ein <strong>offenes Buch</strong>-Symbol.'],
  'v26.2': ['Die Schaltfl&auml;che <strong>Tour</strong> zeigt jetzt ein Kompass-Symbol, und die Tour hat einen Schritt erhalten, der erkl&auml;rt, was die <strong>Aktualisierungsschaltfl&auml;che</strong> tut.'],
  'v26.1': ['Behoben: Beim Umschalten zwischen <strong>dunkel &harr; hell</strong> (&uuml;ber den oberen Umschalter oder die Einstellungen) verlieren <strong>Hintergrundbild-Themes</strong> nicht mehr ihre Farben &mdash; Akzent, Symbolleisten-Schaltfl&auml;chen und Shortcut-Tasten behalten ihre Themenfarben, w&auml;hrend das Hintergrundbild bestehen bleibt.'],
  'v26': ['Neue <strong>Website-Tour</strong> &mdash; tippen Sie oben auf die Schaltfl&auml;che <strong>?</strong> f&uuml;r einen gef&uuml;hrten Rundgang durch Suchleiste, Filter, Registerkarten, Shortcut-Liste, Quiz, Einstellungen, Drucken und Design-Umschalter. Navigieren Sie mit den Schaltfl&auml;chen, Pfeiltasten oder den Punkten.'],
  'v25': ['Der Link <strong>Auf GitHub ansehen</strong> wurde aus dem Abschnitt &Uuml;ber uns entfernt.'],
  'v24.8': ['Behoben: Die <strong>&laquo;Aktualisiert&raquo;</strong>-Benachrichtigung auf dem Mobilger&auml;t bleibt jetzt auf dem Bildschirm (zuvor ragte sie auf kleinen Ger&auml;ten &uuml;ber den rechten Rand hinaus).'],
  'v24.7.4': ['Der Eckenradius ist jetzt in allen Designs auf <strong>16&thinsp;px</strong> begrenzt &mdash; Pillen, Registerkarten, Suchleisten und Benachrichtigungen sind nicht mehr vollst&auml;ndig rund (zuvor wurden bis zu 100&thinsp;px verwendet). Ecken sehen weiterhin weich aus, nur zur&uuml;ckhaltender.'],
  'v24.7.3': ['Behoben: <strong>Wi-Fi-Einstellungen &ouml;ffnen</strong> unter <strong>Android</strong> tat nichts &mdash; aktuelles Chrome l&auml;sst Webseiten gar nicht erst die Android-Systemeinstellungen &ouml;ffnen. Die Schaltfl&auml;che zeigt jetzt eine kurze Meldung, dass Sie die Wi-Fi-Einstellungen &uuml;ber die Einstellungs-App Ihres Ger&auml;ts &ouml;ffnen sollen (auf iOS und macOS &ouml;ffnet sie weiterhin direkt).'],
  'v24.7.2': ['Behoben: In einer installierten Android-App (PWA) tat das Tippen auf <strong>Wi-Fi-Einstellungen &ouml;ffnen</strong> nichts &mdash; Android blockiert das &Ouml;ffnen von Systemeinstellungen durch Apps. Es wird jetzt erkl&auml;rt und Sie werden angewiesen, die Seite in einem Chrome-Tab zu &ouml;ffnen, wo die Schaltfl&auml;che funktioniert.'],
  'v24.7.1': ['Behoben: <strong>Wi-Fi-Einstellungen &ouml;ffnen</strong> unter <strong>Android</strong> nutzte einen per JS ausgel&ouml;sten Anker-Klick, den Chrome bei <code>intent:</code>-Links blockiert &mdash; jetzt wird eine Navigation aus einer Benutzeraktion verwendet.'],
  'v24.7': [
    'Der <strong>Verbindungsstatus</strong> befindet sich jetzt oben unter <strong>Settings &rarr; General</strong> (aus &Uuml;ber uns herausgenommen).',
    'Die Schaltfl&auml;che <strong>Wi-Fi-Einstellungen &ouml;ffnen</strong> &ouml;ffnet jetzt die tats&auml;chlichen Wi-Fi-Einstellungen unter <strong>iOS</strong> (App Einstellungen) und <strong>macOS</strong> (Systemeinstellungen). Auf Android, Windows und Linux, wo Browser nicht in Systemeinstellungen verlinken k&ouml;nnen, zeigt sie stattdessen kurze Anweisungen.'
  ],
  'v24.6': [
    'Die Pille <strong>Offline</strong> bleibt jetzt <strong>10 Sekunden</strong> und verschwindet dann (sie nervt Sie nicht, solange die Verbindung weiterhin getrennt ist).',
    'Settings &rarr; &Uuml;ber uns zeigt jetzt st&auml;ndig Ihren <strong>Verbindungsstatus</strong> (Online/Offline) sowie eine Schaltfl&auml;che zum &Ouml;ffnen Ihrer <strong>Wi-Fi-Einstellungen</strong> &mdash; unter iOS &ouml;ffnet sie direkt die Einstellungs-App; auf anderen Ger&auml;ten zeigt sie kurze Anweisungen.'
  ],
  'v24.5.2': ['Behoben: Auf Desktops, auf denen Windows die Verbindung ohne <em>offline</em>-Ereignis des Browsers trennt (oder auf denen Anfragen h&auml;ngen statt fehlschlagen), erscheint die Pille <strong>Offline</strong> jetzt auch, wenn die Konnektivit&auml;tspr&uuml;fung in einen Timeout l&auml;uft &mdash; nicht nur, wenn die Anfrage outright scheitert.'],
  'v24.5.1': ['Behoben: Die Pille <strong>Offline</strong> erscheint jetzt auch, wenn die Verbindung ohne Browserereignis abrei&szlig;t (z. B. &laquo;Offline&raquo; in DevTools, einige Mobilbrowser) &mdash; die App pr&uuml;ft die Konnektivit&auml;t jetzt aktiv alle paar Sekunden, statt sich nur auf Browsersignale zu verlassen. Sie bleibt verborgen, solange Sie online sind.'],
  'v24.5': [
    'W&auml;hrend der Suche werden W&ouml;rter, die Ihrer Suchanfrage entsprechen, jetzt <strong>hervorgehoben</strong> &mdash; so sieht man leichter, warum eine Zeile passt.',
    'Das Suchfeld hat jetzt eine <strong>L&ouml;schen-Schaltfl&auml;che (&times;)</strong>, die erscheint, sobald Sie etwas eingegeben haben.',
    'Eine kleine Pille <strong>Offline</strong> erscheint, wenn Ihre Verbindung abrei&szlig;t &mdash; tippen Sie darauf, um zu best&auml;tigen, dass Anthkeys weiterhin aus dem Cache funktioniert.'
  ],
  'v24.4.1': ['Behoben auf dem Mobilger&auml;t: Die Kopfzeile <strong>Aktion &mdash; Shortcut</strong> scrollt nicht mehr weg &mdash; auf schmalen Bildschirmen war die Shortcut-Tabelle in einen eigenen horizontalen Scroll-Container umgewandelt worden, was die fixierte Kopfzeile zerst&ouml;rte. Sie ist jetzt wieder fixiert, genau wie auf dem Desktop.'],
  'v24.4': ['Das experimentelle <strong>Quiz-Streak-Startbildschirm-Widget</strong> wurde entfernt &mdash; es beruhte auf einem Webstandard, den Browser noch nicht umgesetzt haben, und erschien daher nirgends. Ihre Quiz-Serie und Statistiken bleiben wie gewohnt in der App.'],
  'v24.3': [
    'Das <strong>Shortcut-Quiz erfasst jetzt Ihre Statistik</strong> &mdash; eine t&auml;gliche Serie (🔥 Tage in Folge, an denen Sie ein Quiz abgeschlossen haben), Ihre beste Punktzahl, Genauigkeit und gespielte Spiele. Lokal gespeichert, niemals hochgeladen.',
    'Neues <strong>Quiz-Streak-Startbildschirm-Widget</strong> f&uuml;r Android (Web App Widgets &mdash; experimentell, wird schrittweise f&uuml;r Chrome und Firefox ausgerollt; auf iOS nicht verf&uuml;gbar). Zeigt Ihre Serie und Statistiken; tippen Sie, um das Quiz zu &ouml;ffnen.'
  ],
  'v24.2.1': ['Behoben auf dem Mobilger&auml;t: Das Tippen auf die Suchleiste konnte die Seite &Uuml;ber uns &ouml;ffnen &mdash; die verborgene &laquo;Neuerungen&raquo;-Benachrichtigung nahe der Einstellungen-Schaltfl&auml;che war weiterhin anklickbar und &uuml;berlappte das Suchfeld. Sie reagiert jetzt nur noch, solange sie sichtbar ist.'],
  'v24.2': [
    'Neuer <strong>Modifikatorfilter</strong> &mdash; w&auml;hlen Sie im Men&uuml; Filter eine Taste (Strg, Umschalt, Alt, Win, Cmd, &hellip;), um nur Shortcuts anzuzeigen, die sie verwenden. Die Optionen werden je nach Plattform aktualisiert.',
    'Eine <strong>Schaltfl&auml;che Nach oben</strong> schwebt &uuml;ber der Shortcut-Liste, sobald Sie scrollen &mdash; tippen Sie darauf, um direkt nach oben zu springen.'
  ],
  'v24.1': ['Die Leiste <strong>Aktion &mdash; Shortcut</strong> bleibt jetzt beim Scrollen oben in der Liste fixiert &mdash; auf dem Mobilger&auml;t und in Safari scrollte sie zuvor aus der Sicht.'],
  'v23.9': ['Der Pop-up Hilfe &amp; Tipps auf dem Mobilger&auml;t wurde entfernt &mdash; er listete nur Desktop-Shortcuts. Hilfe bleibt auf dem Desktop in den Einstellungen, wo <kbd>?</kbd> direkt dorthin springt.'],
  'v23.8': ['Auf dem Mobilger&auml;t befindet sich Hilfe nicht mehr in den Einstellungen &mdash; sie bleibt dort ausgeblendet, damit die Seite &uuml;bersichtlich bleibt. Dr&uuml;cken Sie <kbd>?</kbd>, um sie als Pop-up zu &ouml;ffnen.'],
  'v23.7': ['Hilfe &amp; Tipps ist auf dem Desktop in <strong>Einstellungen</strong> (Abschnitt Allgemein) umgezogen &mdash; dr&uuml;cken Sie <kbd>?</kbd>, um direkt dorthin zu springen.'],
  'v23.6': [
    'Alle 20 Sprachen sind jetzt vollst&auml;ndig &uuml;bersetzt &mdash; kein Zur&uuml;ckfallen auf Englisch mehr bei neueren Funktionen wie Quiz, Cloud-Sync und Hilfe.',
    'Auf dem Mobilger&auml;t halten Sie einen Shortcut zum Kopieren gedr&uuml;ckt (Long-Press), statt ihn anzutippen &mdash; keine unbeabsichtigten Kopien beim Scrollen.',
    'Die Filterpillen verwenden jetzt auch auf dem Mobilger&auml;t Ihre Akzentfarbe, genau wie auf dem Desktop; wenn Favoriten ausgew&auml;hlt ist, hebt sich nur dieses ab.',
    'Der Rahmen um die f&uuml;nf Schaltfl&auml;chen der oberen Leiste wurde auf dem Mobilger&auml;t entfernt &mdash; sie gehen jetzt in der Seite auf.',
    'Die Quiz-Schaltfl&auml;che hat ein neues Blitz-Symbol, und Quiz-Antworten zeigen lesbare Namen statt roher Tasten.',
    'Behoben: Das JavaScript der App konnte nach einer Aktualisierung beim Laden scheitern und die Seite unbedienbar machen.'
  ],
  'v23.5': [
    'Filter-, Favoriten-, Vergleichs- und Einklapp-Steuerelemente liegen jetzt in einem kompakten <strong>Filter</strong>-Men&uuml; &mdash; mehr Platz f&uuml;r die Shortcut-Liste auf dem Mobilger&auml;t.',
    'Die Seite Neuerungen, das Versionsabzeichen und die Aktualisierungseinstellungen sind in einen neuen <strong>Tab &Uuml;ber uns</strong> in den Einstellungen umgezogen.',
    'Aktualisierungsbenachrichtigungen erscheinen jetzt aus der <strong>Einstellungen</strong>-Schaltfl&auml;che &mdash; das Zahnradsymbol zeigt ein Abzeichen, bis Sie die Neuerungen gesehen haben.'
  ],
  'v23.4': ['Die Hilfe-Schaltfl&auml;che <kbd>?</kbd> wurde aus der oberen Leiste entfernt &mdash; dr&uuml;cken Sie <kbd>?</kbd>, um die Hilfe weiterhin zu &ouml;ffnen.'],
  'v23.3': [
    'Das Versionsabzeichen leuchtet nach einer automatischen Aktualisierung auf, sodass Sie die neue Version beim n&auml;chsten Start bemerken.',
    'Beim Wechsel zwischen voreingestellten Hintergr&uuml;nden bleibt Ihr Dunkelmodus erhalten &mdash; der neue Hintergrund wird ebenfalls abgedunkelt.',
    'Auf dem Mobilger&auml;t sieht die Plattformleiste (Windows, macOS, Linux, ChromeOS) jetzt genauso aus wie auf dem Desktop.'
  ],
  'v23.2': [
    'Der Schalter Erweitert/Einfach wurde entfernt &mdash; alle Shortcuts werden zusammen angezeigt.',
    'Auf dem Mobilger&auml;t liegen die Schaltfl&auml;chen der oberen Leiste jetzt in einem ordentlichen 2&times;3-Raster.',
    'Voreingestellte Hintergr&uuml;nde bleiben angewendet und werden beim Wechsel in den Dunkelmodus korrekt abgedunkelt.',
    'Overlays (Einstellungen, Hilfe, Quiz) &uuml;berdecken jetzt auf dem Mobilger&auml;t die fixierten Registerkarten.'
  ],
  'v23.1': ['Hintergrundbilder sind jetzt f&uuml;r den Dunkelmodus optimiert &mdash; beim Wechsel ins Dunkle werden sowohl eigene Bilder als auch voreingestellte Hintergr&uuml;nde (Ozean, Wald, Sonnenuntergang, &hellip;) abgedunkelt und ents&auml;ttigt, damit Bedienfelder lesbar bleiben.'],
  'v23': [
    'Neuer Modus &laquo;Vergleichen&raquo; &mdash; w&auml;hlen Sie eine zweite Plattform, um nur die Shortcuts zu sehen, die sich unterscheiden.',
    'Automatisches Design, das der Tageszeit folgt (dunkel von 19 bis 7 Uhr).',
    'Dr&uuml;cken Sie <kbd>?</kbd> oder tippen Sie auf die Schaltfl&auml;che <kbd>?</kbd> f&uuml;r schnelle Hilfe und Tipps.',
    'Ver&ouml;ffentlichungsdaten wurden jeder Eintr&auml;g auf dieser Seite hinzugef&uuml;gt.'
  ],
  'v22': [
    'Behoben: Die Tastentabelle wurde auf schmalen Telefonen abgeschnitten &mdash; sie scrollt jetzt horizontal, sodass alle Spalten erreichbar sind.',
    'Suchleiste und Kategorie-Pills sind auf der Seite &laquo;Neuerungen&raquo; ausgeblendet, da sie dort nicht zutreffen.'
  ],
  'v21': [
    'Die Tastentabelle hat jetzt eine Schlie&szlig;-Schaltfl&auml;che, damit Sie sie innerhalb des Panels einklappen k&ouml;nnen &mdash; praktisch auf dem Mobilger&auml;t, wo der Schalter aus dem Bereich scrollen kann.',
    'Reaktionsf&auml;higere Touch-Verarbeitung f&uuml;r die Tastentabelle-Schaltfl&auml;che auf Touch-Ger&auml;ten.'
  ],
  'v20.1': [
    'Versionsnummern unterst&uuml;tzen jetzt Patch-Versionen &mdash; das Abzeichen in der Fu&szlig;zeile zeigt z. B. v20.1, und die Aktualisierungserkennung verarbeitet sie korrekt.',
    'Der fehlende Eintrag v20 wurde dieser Seite hinzugef&uuml;gt.'
  ],
  'v20': ['Neue Seite &laquo;Neuerungen&raquo; direkt in Anthkeys &mdash; der Link in der Aktualisierungsbenachrichtigung und das Versionsabzeichen in der Fu&szlig;zeile &ouml;ffnen sie jetzt hier statt auf GitHub.'],
  'v19': ['Das Aktualisierungsbanner erscheint jetzt auch, wenn Sie von einer Version aktualisieren, die vor der Versionsverfolgung erschien (Ihre vorherige Version wird aus dem Offline-Cache erkannt).'],
  'v18': [
    'Eine Benachrichtigung &laquo;Aktualisiert auf vX &mdash; Neuerungen&raquo; erscheint, wenn eine neue Version verf&uuml;gbar ist (im Auto-Update-Modus).',
    'Das Aktualisierungsbanner l&ouml;st jetzt bei Inhaltsupdates aus, nicht nur bei &Auml;nderungen am Service Worker.',
    'Das Versionsabzeichen in der Fu&szlig;zeile ist anklickbar &mdash; tippen Sie darauf, um die Neuerungen zu sehen.',
    'Schlankerer Offline-Cache (keine verschwendeten Dateien ohne Version).'
  ],
  'v16': ['Versionsabzeichen in der Fu&szlig;zeile erg&auml;zt, das die aktuelle Build-Nummer anzeigt.'],
  'v15': ['Schaltfl&auml;che Aktualisieren und Aktualisierungspr&auml;ferenz (automatisch oder zuerst fragen), angetrieben vom Service Worker.'],
  'v14': ['Das Ein- und Ausklappen einer Kategorie ber&uuml;cksichtigt jetzt die aktive Suchanfrage.'],
  'v13': ['Seitencache mit Netzwerkpriorit&auml;t, damit Aktualisierungen sofort erscheinen; geschmeidigeres Scrollen auf dem Desktop.'],
  'v12': ['Suche und Filter sind jetzt auf die aktive Registerkarte beschr&auml;nkt.'],
  'v11': ['PWA-Installationsunterst&uuml;tzung, Barrierefreiheitsbeschriftungen, Unterst&uuml;tzung f&uuml;r reduzierte Bewegung, Gmail- und YouTube-Shortcuts, SEO-Verbesserungen.'],
  'v10': [
    'Behoben: Der Kategoriefilter konnte alle Shortcuts ausblenden, wenn er auf eine Kategorie-Kopfzeile passte &mdash; jetzt blendet er nur die Zeilen aus, die Sie herausgefiltert haben.',
    'Der Hintergrund f&uuml;llt jetzt auf dem Mobilger&auml;t den gesamten Bildschirm.'
  ],
  'v9': ['Windows ist jetzt die Standard-Plattformregisterkarte, und die Registerkarten sind in einer klareren Reihenfolge.'],
  'v8': [
    'Schwierigkeitsgrade f&uuml;r das Quiz und ein Tageshinweis.',
    'Deutlich geschmeidigeres Scrollen auf dem Mobilger&auml;t, dazu Offline-Caching.',
    'Suche und Filter funktionieren &uuml;ber alle Plattformen hinweg, mit fett gedruckten OS-Bezeichnungen.'
  ],
  'v7': ['Die Designstile wurden entfernt &mdash; Material 3 ist jetzt das einzige Erscheinungsbild.'],
  'v6': [
    'Designstile auf Material 3 reduziert, dazu eine Schaltfl&auml;che &laquo;Hintergrundbild entfernen&raquo;, um zum Standarddesign zur&uuml;ckzusetzen.',
    'Cache-Control-Header, damit Aktualisierungen schneller bei Ihnen ankommen.'
  ],
  'v5': ['Seitentitel in allen 14 Sprachen auf nur &laquo;Shortcuts&raquo; vereinfacht.'],
  'v4': [
    'Shortcut-Quiz-Modus &mdash; &uuml;ben Sie, indem Sie den Shortcut oder die Aktion erraten &mdash; sowie Cloud-Sync &uuml;ber GitHub Gist.',
    'Eine gro&szlig;e Fehlerbehebungsrunde zu Akzentfeldern, Designwechsel und mobilen Hintergr&uuml;nden.'
  ],
  'v3': ['Voreinstellungen f&uuml;r Akzentfarben, die Sie speichern und wiederverwenden k&ouml;nnen, dazu Cache-Leerung, damit Aktualisierungen zuverl&auml;ssig erscheinen.'],
  'v2': ['Helle und dunkle Designs mit Akzentfarben sowie &Uuml;bersetzungen der Shortcut-Referenz.'],
  'v1': ['Die erste Version von Anthkeys &mdash; alle t&auml;glichen Tastenk&uuml;rzel f&uuml;r Windows, macOS, Linux und ChromeOS auf einer Seite.']
};

I18N_WN.it = {
  'v52.1': [
    'Novit&agrave;: la pagina &laquo;Novit&agrave;&raquo; &egrave; ora completamente tradotta in tutte e 20 le lingue &mdash; ogni nota di rilascio passata viene mostrata nella tua lingua.'
  ],
  'v52': [
    'Correzione: la v51 poteva impedire il caricamento dell&rsquo;app; una traduzione danese conteneva un apostrofo non escape che invalidava l&rsquo;intero file di lingua. Il file ora viene analizzato correttamente e tutte e 20 le lingue si caricano di nuovo.'
  ],
  'v51': [
    'Traduzioni completate per tutte e 20 le lingue &mdash; impostazioni, stanze live, sincronizzazione offline e la guida alla sincronizzazione sono ora completamente tradotte (i testi pi&ugrave; recenti comparivano solo in inglese).',
    'Novit&agrave;: se Anthkeys ti sembra lento, un banner ti propone di attivare la modalit&agrave; Prestazioni con un tocco. Puoi chiuderlo e non te lo chieder&agrave; pi&ugrave;.'
  ],
  'v50.7': ['La modalit&agrave; Prestazioni &egrave; stata spostata nella scheda Generale delle impostazioni.'],
  'v50.6': ['Le icone della barra superiore sono di nuovo le emoji colorate, proprio come in v50: libro, stampante, fulmine, luna/sole, aggiorna e ingranaggio.'],
  'v50.5': ['Le icone della barra superiore usano di nuovo il colore d&rsquo;accento (per impostazione predefinita), invece di apparire bianche/grigie.'],
  'v50.4': ['Rimossa la funzione icona colorata d&rsquo;accento: favicon, icona della schermata home e icona della PWA installata usano di nuovo quella predefinita (colorare l&rsquo;icona con l&rsquo;accento ha senso solo per le app native).'],
  'v50.3': [
    'Le icone della barra superiore sono state ricostruite per essere visualizzate in modo affidabile su tutti i dispositivi (Tour, Stampa, Quiz, tema, Aggiorna e Impostazioni ora usano icone reali).',
    'L&rsquo;icona del commutatore del tema &egrave; di nuovo un&rsquo;icona reale e corrisponde al suo stato chiaro/scuro.'
  ],
  'v50.2': ['Corretto un bug della v50.1 che impediva alle icone della barra superiore e alle Impostazioni di funzionare al caricamento.'],
  'v50.1': [
    'Nuova modalit&agrave; Prestazioni in Personalizzazione: disattiva gli effetti sfocatura e le animazioni che possono rendere l&rsquo;app lenta su Windows.',
    'La barra superiore usa ora icone reali e una nuova impostazione Icone le colora con il tuo colore d&rsquo;accento.',
    'La scheda Apps funziona come quella Linux: fai clic ovunque per scegliere un&rsquo;app (VS Code, Figma, Gmail e altre), e la scheda mostra la tua scelta, ad esempio &laquo;Apps - Gmail&raquo;.',
    'Rimosso il campo di testo esadecimale sotto il pulsante Personalizza: scegli i colori solo con i cursori.',
    'Doppiate le opzioni di accento a gradiente con otto nuove combinazioni a due colori.'
  ],
  'v50': [
    'Fai clic ovunque sulla scheda Linux per aprire l&rsquo;elenco delle distribuzioni, e la scheda mostra ora la tua scelta, ad esempio &laquo;Linux - Ubuntu (GNOME)&raquo;.',
    'Il selettore di colore personalizzato &egrave; stato ricostruito: il campione circolare apre cursori di Tonalit&agrave;, Saturazione e Luminosit&agrave; (con il valore mostrato poco sopra ciascuno), partendo dal colore attuale invece che da 0/0/0.',
    'Nuova sezione Accenti a gradiente: otto gradienti a due colori pronti da applicare come accento.',
    'I preset d&rsquo;accento sono stati perfezionati verso una palette pi&ugrave; pulita e distinta.'
  ],
  'v40.9': ['L&rsquo;elenco delle distribuzioni si trova ora direttamente sulla scheda Linux: fai clic sulla piccola freccia della scheda per scegliere la tua distribuzione.'],
  'v40.8': ['La scheda Linux ha ora un elenco di distribuzioni (Ubuntu, Debian, Fedora, Arch, Mint, KDE e altre) che adatta le scorciatoie di sistema alle impostazioni predefinite di ciascuna distribuzione e ricorda la tua scelta.'],
  'v40.7': ['Le impostazioni dell&rsquo;accento mostrano ora una barra di anteprima dal vivo con il codice esadecimale esatto del colore applicato, così vedi ogni scelta cambiare all&rsquo;istante.'],
  'v40.6': [
    'Rimosso il conta gocce &laquo;Preleva dallo schermo&raquo;.',
    'Preset d&rsquo;accento portati alla piena intensità Material 3 Expressive: colori profondi e vivaci, veramente neon (i grigi restano attenuati).'
  ],
  'v40.5': ['La palette d&rsquo;accento è stata riequilibrata verso lo stile Material 3 Expressive: colori tonali più vivaci.'],
  'v40.4': ['La corrispondenza dell&rsquo;accento con il dispositivo ora legge il vero colore di sistema (incluso l&rsquo;output oklch/color() di Chrome) e sonda anche il colore di selezione del testo del sistema operativo, così viene applicato il tuo accento dinamico reale.'],
  'v40.3': [
    'Tutti i colori d&rsquo;accento sono stati riequilibrati allo stile tonale di Material You (toni medi attenuati con toni contenitore morbidi).',
    '&laquo;Corrispondenza col mio dispositivo&raquo; legge ora anche il colore di selezione del sistema come alternativa, così funziona su più browser e profili.'
  ],
  'v40.2': ['Impostazioni del colore d&rsquo;accento: il nuovo pulsante &laquo;Corrispondenza col mio dispositivo&raquo; legge il colore d&rsquo;accento di sistema (Chrome 150+, app installata) e lo applica, con una notifica di conferma.'],
  'v40.1': ['Rimosso la galleria di sfondi (gli sfondi salvati nella galleria vengono eliminati; il tuo sfondo caricato continua a funzionare).'],
  'v40.0': ['Selettore del colore d&rsquo;accento: il colore personalizzato ora ha un campo esadecimale (digita qualsiasi colore, di 3 o 6 cifre) più un pulsante Copia: lo stesso identico layout su desktop e mobile.'],
  'v39.9': ['Chat nella stanza: le note della stanza ora compaiono in un pannello Chat con cronologia (60 messaggi conservati per stanza, ripristinati al rientro). Le note pubbliche vengono pubblicate nel registro; quelle private vengono ancora copiate direttamente negli appunti. Tocca un messaggio per ricopiarlo.'],
  'v39.8': [
    'Stanze recenti: le ultime sei stanze a cui hai partecipato compaiono come chip a un tocco nella schermata di ingresso (con i loro colori), più un pulsante per cancellarli.',
    'Invia il mio profilo: invia le tue impostazioni e scorciatoie personalizzate a tutta la stanza come istantanea monodirezionale; gli altri dispositivi la applicano all&rsquo;istante.',
    'Galleria di sfondi: sei sfumature integrate con varianti chiare/scure automatiche, un pulsante Casuale e una mescolanza giornaliera opzionale.',
    'Ricerca: le scorciatoie che copi vengono ricordate come &laquo;Copiate di recente&raquo; nel menu di ricerca, insieme alla cronologia delle ricerche.'
  ],
  'v39.7': ['Le animazioni su mobile ora provengono dallo stesso CSS di base del desktop: la regola per dispositivi touch non disattiva più globalmente le transizioni. Il riflettore del tour e le schede scorrono tra un passaggio e l&rsquo;altro, e i cambi di tema/sfondo sfumano, anche sui telefoni.'],
  'v39.6': ['Parità mobile: i cambi di tema e sfondo ora avvengono in modo fluido (come sul desktop) e il tour del sito si anima tra i passaggi anche sui dispositivi touch.'],
  'v39.5': ['AirDrop e Quick Share: un pulsante &laquo;Condividi&raquo; accanto al codice della stanza apre il foglio di condivisione del telefono (AirDrop su Apple) con un link di ingresso a un tocco: l&rsquo;altro dispositivo basta toccarlo ed entra nella stanza.'],
  'v39.4': ['La luminosità e lo scintillio della pillola della versione ora si animano sul desktop anche quando &laquo;riduci movimento&raquo; è attivo nel sistema o le animazioni sono disattivate nelle impostazioni: viene trattato come un segnale di aggiornamento, non come decorazione.'],
  'v39.3': ['La luminosità della pillola della versione e il badge nelle impostazioni ora compaiono in modo affidabile sul desktop: la versione in esecuzione ottiene sempre una nuova finestra di evidenziazione di pochi giorni al caricamento, anche se l&rsquo;avviso di aggiornamento è stato saltato.'],
  'v39.2': ['La luminosità e lo scintillio di nuova versione sulla pillola non scompaiono più per sempre dopo un&rsquo;unica occhiata: l&rsquo;evidenziazione dura pochi giorni e torna a ogni visita.'],
  'v39.1': ['I punti di colore finalmente si vedono: i campioni (colore della stanza e campioni di tema/accento) ora vengono renderizzati come cerchi visibili invece che come span vuoti invisibili.'],
  'v39': [
    'Ring ora ti permette di allegare un messaggio rapido al ping: il dispositivo che squilla lo sente e lo copia negli appunti.',
    'Avvisi batteria: ricevi una notifica &laquo;ripristinata&raquo; quando un dispositivo risale sopra il 25% e puoi attivare o disattivare l&rsquo;allarme batteria.',
    'Le note possono essere indirizzate a un singolo dispositivo tramite un selettore &laquo;A:&raquo; accanto al campo della nota.',
    'Ogni stanza può avere un&rsquo;etichetta di colore per distinguere le stanze a colpo d&rsquo;occhio.',
    'I codici di sincronizzazione offline ora mostrano un&rsquo;anteprima (dispositivo, ora, numero di impostazioni e scorciatoie) e chiedono conferma prima di importare.'
  ],
  'v38.1': ['Su mobile, toccando la scheda Informazioni le sezioni non si aprono più automaticamente: tocca l&rsquo;intestazione di una sezione per espanderla.'],
  'v38': ['Su mobile, aprire la scheda Informazioni non espande più automaticamente le istruzioni di sincronizzazione: tocca la sezione &laquo;Live rooms &amp; offline sync&raquo; per aprirla.'],
  'v37': ['La guida ora include istruzioni complete per <strong>Stanze live</strong> e <strong>Codici di sincronizzazione offline</strong>, ed è disponibile anche su mobile.'],
  'v36': ['Il pulsante nell&rsquo;area di ingresso ora si chiama <strong>Scansiona</strong> (apre la fotocamera o il selettore di file per leggere un QR), quindi non viene più confuso con il pulsante <strong>QR</strong> che mostra il codice della stanza.'],
  'v35': ['Corretto: i codici QR della stanza e del codice offline ora vengono visualizzati correttamente invece di una casella vuota.'],
  'v34': [
    '<strong>Chiama un dispositivo</strong> &mdash; ogni altro dispositivo ha un pulsante Ring che lo fa squillare e vibrare, così puoi trovare il tuo telefono.',
    '<strong>Invia una nota</strong> &mdash; condividi testo con ogni dispositivo collegato; compare all&rsquo;istante e viene copiato nei suoi appunti.',
    '<strong>Monitoraggio batteria</strong> &mdash; vieni avvisato quando un dispositivo collegato scende sotto il 20% di batteria.',
    '<strong>Rinomina dispositivi</strong> &mdash; tocca il nome di un dispositivo per assegnargli un nome personalizzato.',
    '<strong>Unisciti scansionando</strong> &mdash; l&rsquo;host può mostrare un QR del codice stanza; scansionalo con la fotocamera (o scansiona un codice di sincronizzazione offline).',
    '<strong>Stanze protette</strong> &mdash; seleziona &laquo;Proteggi questa stanza&raquo; e imposta una passphrase; tutti i dati della stanza vengono crittografati, così solo i membri con la passphrase possono leggerli.',
    '<strong>Visto l&rsquo;ultima volta</strong> &mdash; ogni dispositivo mostra ora da quanto tempo è online.'
  ],
  'v33': ['I dispositivi collegati condividono ora anche il loro <strong>livello della batteria</strong> (anche durante la ricarica), aggiornato in tempo reale nella stanza.'],
  'v32': ['Le stanze live mostrano ora il vero nome di ogni dispositivo (come &laquo;Mi 9T Pro&raquo;) invece di uno casuale, prelevato automaticamente dal dispositivo stesso.'],
  'v31': ['Le stanze live mostrano ora ogni dispositivo collegato per nome, con un punto verde su questo dispositivo e il totale.'],
  'v30': [
    '<strong>Stanze live</strong> &mdash; prima, per sincronizzare impostazioni e scorciatoie personalizzate in tempo reale:<ol><li>Sul dispositivo con le tue impostazioni, apri <strong>Impostazioni &rarr; Stanze live</strong> e tocca <strong>Avvia una stanza</strong>. Appare un codice stanza come AK-XXX-YYY.</li><li>Invia quel codice agli altri tuoi dispositivi (copialo o condividilo come preferisci).</li><li>Su ogni dispositivo ricevente, apri <strong>Impostazioni &rarr; Stanze live</strong>, digita lo stesso codice e tocca <strong>Unisciti alla stanza</strong>.</li></ol>',
    '<strong>Codici di sincronizzazione offline</strong> &mdash; poi, per un trasferimento una tantum quando non c&rsquo;è internet:<ol><li>Apri <strong>Impostazioni &rarr; Codice di sincronizzazione offline</strong> e tocca <strong>Crea un codice</strong>. Copia il codice o scansiona il QR che appare.</li><li>Sull&rsquo;altro dispositivo, apri <strong>Impostazioni &rarr; Codice di sincronizzazione offline</strong>, incolla il codice e tocca <strong>Applica un codice</strong>.</li></ol>'
  ],
  'v29': ['Corretto: su <strong>mobile</strong>, toccando il badge della versione ora parte l&rsquo;animazione casuale di rimbalzo/rotazione/compressione, invece di essere bloccato dal reset delle animazioni dei dispositivi touch.'],
  'v28': ['Mobile: la scheda impostazioni accanto a Personalizza ora si chiama solo <strong>Informazioni</strong> (la Guida esiste solo sul desktop) e apre automaticamente la sezione Informazioni quando viene toccata.'],
  'v27': ['Corretto: aprire la pagina subito dopo una <strong>nuova versione</strong> non la resetta più con un ricaricamento a sorpresa qualche secondo dopo &mdash; l&rsquo;aggiornamento viene ora applicato in background. Il pulsante Aggiorna e l&rsquo;opzione &laquo;Chiedi prima di aggiornare&raquo; ricaricano ancora su richiesta.'],
  'v26.9': ['Divertente: toccare il <strong>badge della versione</strong> ora fa partire ogni volta un&rsquo;animazione casuale di rimbalzo/rotazione/compressione, si illumina con uno <strong>sfavilla&shy;mento</strong> mentre viene evidenziata una nuova versione e la sezione Informazioni è stata spostata nella sua <strong>scheda Informazioni</strong> nelle Impostazioni per raggiungerla più in fretta.'],
  'v26.8': ['Migliorato: il <strong>badge della versione</strong> nella sezione Informazioni ora si aggiorna automaticamente e apre Novità.'],
  'v26.7': ['Migliorato: le <strong>scorciatoie delle app</strong> nel consiglio del giorno mostrano ora prima a quale app appartengono, ad esempio <em>Figma &mdash; Move Tool &mdash; V</em>.'],
  'v26.6': ['Migliorato: il <strong>consiglio del giorno</strong> ora si aggiorna quando cambi scheda di piattaforma: selezionare Windows, macOS, Linux, ChromeOS o Apps mostra una scorciatoia di quella sezione.'],
  'v26.5': ['Corretto: il <strong>consiglio del giorno</strong> non rimane più bloccato su una sola scorciatoia: ora mostra una nuova scorciatoia casuale (dalla scheda piattaforma che stai visualizzando) a ogni caricamento della pagina, invece di riutilizzare la stessa tutto il giorno.'],
  'v26.4': ['Corretto: il <strong>consiglio del giorno</strong> ora mostra solo scorciatoie della scheda piattaforma che stai visualizzando (prima mescolava quelle di tutte le piattaforme). Anche il badge della versione nella sezione Guida si aggiorna automaticamente.'],
  'v26.3': ['Il pulsante <strong>tour</strong> mostra ora un&rsquo;icona di <strong>libro aperto</strong>.'],
  'v26.2': ['Il pulsante <strong>tour</strong> mostra ora un&rsquo;icona di bussola e il tour ha acquisito un passaggio che spiega cosa fa il <strong>pulsante di aggiornamento</strong>.'],
  'v26.1': ['Corretto: passare da <strong>scuro &harr; chiaro</strong> (tramite l&rsquo;interruttore in alto o le Impostazioni) non spoglia più i colori di un <strong>tema sfondo</strong>: accento, pulsanti della barra e tasti delle scorciatoie mantengono i colori del tema mentre lo sfondo resta.'],
  'v26': ['Nuovo <strong>tour del sito</strong> &mdash; tocca il pulsante <strong>?</strong> in alto per una visita guidata di barra di ricerca, filtri, schede, elenco scorciatoie, quiz, impostazioni, stampa e commutatore del tema. Naviga con i pulsanti, le frecce o i punti.'],
  'v25': ['Rimosso il collegamento <strong>Vedi su GitHub</strong> dalla sezione Informazioni.'],
  'v24.8': ['Corretto: la notifica <strong>&laquo;Aggiornato&raquo;</strong> su mobile ora resta dello schermo (prima traboccava dal bordo destro sui dispositivi piccoli).'],
  'v24.7.4': ['Il raggio degli angoli è ora limitato a <strong>16&thinsp;px</strong> in tutti i temi: pastiglie, schede, barre di ricerca e notifiche non sono più completamente tonde (prima usavano fino a 100&thinsp;px). Gli angoli restano morbidi, solo più sobri.'],
  'v24.7.3': ['Corretto: <strong>Apri impostazioni Wi-Fi</strong> su <strong>Android</strong> non faceva nulla: Chrome recente non permette ai siti di aprire le impostazioni di sistema di Android. Il pulsante ora mostra un breve messaggio che ti chiede di aprire le impostazioni Wi-Fi dall&rsquo;app Impostazioni del dispositivo (su iOS e macOS le apre ancora direttamente).'],
  'v24.7.2': ['Corretto: in un&rsquo;app Android installata (PWA), toccare <strong>Apri impostazioni Wi-Fi</strong> non faceva nulla: Android impedisce alle app di aprire direttamente le impostazioni di sistema. Ora lo spiega e ti chiede di aprire il sito in una scheda di Chrome, dove il pulsante funziona.'],
  'v24.7.1': ['Corretto: <strong>Apri impostazioni Wi-Fi</strong> su <strong>Android</strong> usava un clic su un&rsquo;ancora attivato da JS, che Chrome blocca per i link <code>intent:</code>: ora si usa una navigazione avviata da un gesto dell&rsquo;utente.'],
  'v24.7': [
    'Lo <strong>stato della connessione</strong> si trova ora in cima a <strong>Impostazioni &rarr; Generale</strong> (spostato da Informazioni).',
    'Il pulsante <strong>Apri impostazioni Wi-Fi</strong> ora apre le vere impostazioni Wi-Fi su <strong>iOS</strong> (app Impostazioni) e <strong>macOS</strong> (Impostazioni di sistema). Su Android, Windows e Linux, dove i browser non possono collegarsi in profondità alle impostazioni di sistema, mostra brevi istruzioni.'
  ],
  'v24.6': [
    'La pillola <strong>Offline</strong> ora resta <strong>10 secondi</strong> e poi scompare (non ti infastidisce finché la connessione è ancora caduta).',
    'Impostazioni &rarr; Informazioni ora mostra sempre il tuo <strong>stato della connessione</strong> (Online/Offline), con un pulsante per aprire le tue <strong>impostazioni Wi-Fi</strong>: su iOS apre direttamente l&rsquo;app Impostazioni; su altri dispositivi mostra brevi istruzioni.'
  ],
  'v24.5.2': ['Corretto: sui desktop in cui Windows cade la connessione senza attivare l&rsquo;evento <em>offline</em> del browser (o in cui le richieste si bloccano invece di fallire), la pillola <strong>Offline</strong> compare ora anche quando il controllo di connettività scade: non solo quando la richiesta fallisce del tutto.'],
  'v24.5.1': ['Corretto: la pillola <strong>Offline</strong> compare ora anche quando la connessione cade senza attivare un evento del browser (ad es. &laquo;Offline&raquo; in DevTools, alcuni browser mobili): l&rsquo;app controlla attivamente la connettività ogni pochi secondi invece di affidarsi solo ai segnali del browser. Resta nascosta finché sei online.'],
  'v24.5': [
    'Mentre cerchi, le parole che corrispondono alla tua ricerca sono ora <strong>evidenziate</strong> nei risultati: è più facile capire perché ogni riga corrisponde.',
    'Il campo di ricerca ha ora un <strong>pulsante di cancellazione (&times;)</strong> che compare quando hai digitato qualcosa.',
    'Una piccola pillola <strong>Offline</strong> compare quando la connessione cade: toccala per confermare che Anthkeys continua a funzionare dalla cache.'
  ],
  'v24.4.1': ['Corretto su mobile: l&rsquo;intestazione <strong>Azione &mdash; Scorciatoia</strong> non scorre più via: sugli schermi stretti la tabella delle scorciatoie era stata trasformata in un proprio contenitore di scorrimento orizzontale, il che rompeva l&rsquo;intestazione fissa. Ora è di nuovo bloccata in alto, esattamente come sul desktop.'],
  'v24.4': ['Rimosso il <strong>widget della serie del quiz nella schermata home</strong>: si basava su uno standard web che i browser non hanno ancora implementato, quindi non è mai apparso da nessuna parte. La tua serie e le tue statistiche del quiz restano nell&rsquo;app come al solito.'],
  'v24.3': [
    'Il <strong>quiz delle scorciatoie ora tiene traccia delle tue statistiche</strong>: una serie quotidiana (🔥 giorni di fila in cui hai completato un quiz), il punteggio migliore, la precisione e le partite giocate. Salvate in locale, mai caricate.',
    'Nuovo <strong>widget della serie del quiz nella schermata home</strong> per Android (Web App Widgets: sperimentale, in distribuzione su Chrome e Firefox; non disponibile su iOS). Mostra la tua serie e le tue statistiche; toccalo per aprire il quiz.'
  ],
  'v24.2.1': ['Corretto su mobile: toccare la barra di ricerca poteva aprire la pagina Informazioni: la notifica nascosta &laquo;Novità&raquo; vicino al pulsante delle impostazioni era ancora cliccabile e si sovrapponeva al campo di ricerca. Ora reagisce solo mentre è visibile.'],
  'v24.2': [
    'Nuovo <strong>filtro modificatori</strong>: nel menu Filtri scegli un tasto (Ctrl, Maiusc, Alt, Win, Cmd, &hellip;) per mostrare solo le scorciatoie che lo usano. Le opzioni si aggiornano per piattaforma.',
    'Un <strong>pulsante torna su</strong> fluttua sopra l&rsquo;elenco delle scorciatoie quando scorri: toccalo per tornare subito in alto.'
  ],
  'v24.1': ['La barra <strong>Azione &mdash; Scorciatoia</strong> ora resta fissata in cima all&rsquo;elenco mentre scorri: su mobile e Safari prima usciva dalla vista.'],
  'v23.9': ['Rimosso il popup Guida e suggerimenti su mobile: elencava solo scorciatoie desktop. La Guida resta nelle Impostazioni sul desktop, dove <kbd>?</kbd> ci porta direttamente.'],
  'v23.8': ['Su mobile, la Guida non è più dentro le Impostazioni: resta nascosta lì per non appesantire la pagina. Premi <kbd>?</kbd> per aprirla come popup.'],
  'v23.7': ['Guida e suggerimenti sono passati in <strong>Impostazioni</strong> (sezione Generale) sul desktop: premi <kbd>?</kbd> per andarci direttamente.'],
  'v23.6': [
    'Tutte e 20 le lingue sono ora completamente tradotte: niente più fallback all&rsquo;inglese per funzioni più recenti come quiz, sincronizzazione cloud e Guida.',
    'Su mobile, tieni premuta una scorciatoia per copiarla invece di toccarla: niente più copie accidentali durante lo scorrimento.',
    'Le pastiglie dei filtri usano ora il tuo colore d&rsquo;accento anche su mobile, proprio come sul desktop; quando è selezionata Preferiti, è l&rsquo;unica che spicca.',
    'Rimosso il bordo attorno ai cinque pulsanti della barra superiore su mobile: ora si fondono nella pagina.',
    'Il pulsante del quiz ha una nuova icona a fulmine e le risposte mostrano nomi leggibili invece di tasti grezzi.',
    'Corretto: il JavaScript dell&rsquo;app poteva non caricarsi dopo un aggiornamento, lasciando il sito non responsive.'
  ],
  'v23.5': [
    'I controlli di filtro, preferito, confronto e compressione si trovano ora in un unico menu compatto <strong>Filtri</strong>: più spazio per l&rsquo;elenco delle scorciatoie su mobile.',
    'La pagina Novità, il badge della versione e le impostazioni di aggiornamento sono passati in una nuova sezione <strong>Informazioni</strong> nelle Impostazioni.',
    'Le notifiche di aggiornamento ora compaiono dal pulsante <strong>Impostazioni</strong>: l&rsquo;icona dell&rsquo;ingranaggio mostra un badge finché non hai visto le novità.'
  ],
  'v23.4': ['Rimosso il pulsante di aiuto <kbd>?</kbd> dalla barra superiore: premi <kbd>?</kbd> per aprire comunque la Guida.'],
  'v23.3': [
    'Il badge della versione si accende dopo un aggiornamento automatico, così noti la nuova versione al prossimo avvio.',
    'Passare da uno sfondo predefinito a un&rsquo;altro mantiene la modalità scura: anche il nuovo sfondo viene oscurato.',
    'Su mobile la barra delle piattaforme (Windows, macOS, Linux, ChromeOS) ora ha lo stesso aspetto del desktop.'
  ],
  'v23.2': [
    'Rimosso il commutatore Avanzato/Basico: tutte le scorciatoie vengono mostrate insieme.',
    'Su mobile, i pulsanti della barra superiore sono ora disposti in una pulita griglia 2&times;3.',
    'Gli sfondi predefiniti restano applicati e vengono oscurati correttamente quando passi alla modalità scura.',
    'Le sovrapposizioni (impostazioni, guida, quiz) ora coprono le schede fisse su mobile.'
  ],
  'v23.1': ['Gli sfondi sono ora ottimizzati per la modalità scura: passando allo scuro, sia le immagini personalizzate sia gli sfondi predefiniti (Oceano, Foresta, Tramonto, &hellip;) vengono oscurati e desaturati così i pannelli restano leggibili.'],
  'v23': [
    'Nuova modalità &laquo;Confronta&raquo;: scegli una seconda piattaforma per vedere solo le scorciatoie che differiscono.',
    'Tema automatico che segue l&rsquo;ora del giorno (scuro dalle 19 alle 7).',
    'Premi <kbd>?</kbd> o tocca il pulsante <kbd>?</kbd> per una guida rapida e suggerimenti.',
    'Aggiunte le date di rilascio a ogni voce di questa pagina.'
  ],
  'v22': [
    'Corretto: la tabella della legenda dei tasti era tagliata sui telefoni stretti: ora scorre orizzontalmente così tutte le colonne sono raggiungibili.',
    'La barra di ricerca e le pastiglie di categoria sono nascoste nella pagina &laquo;Novità&raquo; perché non si applicano lì.'
  ],
  'v21': [
    'La legenda dei tasti ha ora un pulsante di chiusura, così puoi comprimerla dall&rsquo;interno del pannello: comodo su mobile, dove l&rsquo;interruttore può scorrere fuori portata.',
    'Gestione dei tocchi più reattiva per il pulsante Legenda dei tasti sui dispositivi touch.'
  ],
  'v20.1': [
    'I numeri di versione supportano ora le versioni di patch: il badge nel piè di pagina mostra ad es. v20.1 e il rilevamento degli aggiornamenti li gestisce correttamente.',
    'Aggiunta a questa pagina la voce v20 mancante.'
  ],
  'v20': ['Nuova pagina &laquo;Novità&raquo; dentro Anthkeys: il collegamento nella notifica di aggiornamento e il badge della versione nel piè di pagina la aprono qui invece che su GitHub.'],
  'v19': ['Il banner di aggiornamento compare ora anche se aggiorni da una versione precedente al tracciamento delle versioni (la tua versione precedente viene rilevata dalla cache offline).'],
  'v18': [
    'Appare una notifica &laquo;Aggiornato a vX &mdash; Novità&raquo; quando arriva una nuova versione (in modalità di aggiornamento automatico).',
    'Il banner di aggiornamento viene ora attivato da aggiornamenti dei contenuti, non solo da modifiche al service worker.',
    'Il badge della versione nel piè di pagina è cliccabile: toccalo per vedere le novità.',
    'Cache offline più leggera (nessun file senza versione sprecato).'
  ],
  'v16': ['Aggiunto un badge della versione nel piè di pagina che mostra il numero di build corrente.'],
  'v15': ['Pulsante di aggiornamento e preferenza (aggiornamento automatico o chiedi prima), basati sul service worker.'],
  'v14': ['Comprimere o espandere una categoria ora rispetta la ricerca attiva.'],
  'v13': ['Cache delle pagine con priorità alla rete, così gli aggiornamenti compaiono subito; scorrimento più fluido sul desktop.'],
  'v12': ['La ricerca e i filtri sono ora limitati alla scheda attiva.'],
  'v11': ['Supporto all&rsquo;installazione PWA, etichette di accessibilità, supporto al movimento ridotto, scorciatoie Gmail e YouTube, miglioramenti SEO.'],
  'v10': [
    'Corretto: il filtro di categoria poteva nascondere tutte le scorciatoie quando corrispondeva a una riga di intestazione di categoria: ora nasconde solo le righe che hai filtrato.',
    'Lo sfondo ora riempie l&rsquo;intero schermo su mobile.'
  ],
  'v9': ['Windows è ora la scheda piattaforma predefinita e le schede sono in un ordine più chiaro.'],
  'v8': [
    'Livelli di difficoltà del quiz e un consiglio del giorno.',
    'Scorrimento molto più fluido su mobile, oltre alla cache offline.',
    'Ricerca e filtri funzionano su tutte le piattaforme contemporaneamente, con etichette SO in grassetto.'
  ],
  'v7': ['Gli stili di design sono stati rimossi: Material 3 è ora l&rsquo;unico aspetto.'],
  'v6': [
    'Stili di design ridotti a Material 3, più un pulsante &laquo;Rimuovi sfondo&raquo; per tornare al tema predefinito.',
    'Intestazioni cache-control perché gli aggiornamenti ti arrivino più in fretta.'
  ],
  'v5': ['Titoli delle pagine semplificati a solo &laquo;Scorciatoie&raquo; in tutte le 14 lingue.'],
  'v4': [
    'Modalità quiz delle scorciatoie: allenati indovinando la scorciatoia o l&rsquo;azione, più la sincronizzazione cloud con GitHub Gist.',
    'Un&rsquo;ampia serie di correzioni su campioni d&rsquo;accento, cambio tema e sfondi mobili.'
  ],
  'v3': ['Preset di colore d&rsquo;accento che puoi salvare e riutilizzare, più l&rsquo;invalidazione della cache perché gli aggiornamenti compaiano in modo affidabile.'],
  'v2': ['Temi chiaro e scuro con colori d&rsquo;accento, più traduzioni del riferimento delle scorciatoie.'],
  'v1': ['La prima versione di Anthkeys: tutte le scorciatoie da tastiera quotidiane per Windows, macOS, Linux e ChromeOS in una sola pagina.']
};

I18N_WN.pt = {
  'v52.1': [
    'Novidade: a p&aacute;gina &laquo;Novidades&raquo; agora est&aacute; totalmente traduzida em todos os 20 idiomas &mdash; cada nota de vers&atilde;o &eacute; exibida no seu idioma.'
  ],
  'v52': [
    'Corre&ccedil;&atilde;o: a v51 podia impedir o carregamento do aplicativo; uma tradu&ccedil;&atilde;o dinamarquesa continha um apóstrofo n&atilde;o escapado que invalidava o arquivo de idioma inteiro. O arquivo agora &eacute; analisado corretamente e todos os 20 idiomas voltam a carregar.'
  ],
  'v51': [
    'Tradu&ccedil;&otilde;es conclu&iacute;das para todos os 20 idiomas &mdash; configura&ccedil;&otilde;es, salas ao vivo, sincroniza&ccedil;&atilde;o offline e o guia de sincroniza&ccedil;&atilde;o agora est&atilde;o totalmente traduzidos (os itens recentes apareciam apenas em ingl&ecirc;s).',
    'Novidade: se o Anthkeys parecer lento, uma faixa oferece ativar o Modo Desempenho com um toque. Voc&ecirc; pode fech&aacute;-la e ela n&atilde;o aparece de novo.'
  ],
  'v50.7': ['O Modo Desempenho foi movido para a aba Geral nas configura&ccedil;&otilde;es.'],
  'v50.6': ['Os &iacute;cones da barra superior voltaram a ser emojis coloridos, como na v50: livro, impressora, raio, lua/sol, atualizar e engrenagem.'],
  'v50.5': ['Os &iacute;cones da barra superior voltaram a usar a cor de destaque (por padr&atilde;o), em vez de parecerem brancos/cinzas.'],
  'v50.4': ['Removido o recurso de &iacute;cone com cor de destaque: favicon, &iacute;cone da tela inicial e &iacute;cone do PWA instalado voltaram a usar o &iacute;cone pad&atilde;o (colorir o &iacute;cone com a cor de destaque s&oacute; faz sentido para aplicativos nativos).'],
  'v50.3': [
    'Os &iacute;cones da barra superior foram reconstru&iacute;dos para aparecer de forma confi&aacute;vel em todos os dispositivos (Tour, Imprimir, Quiz, tema, Atualizar e Configura&ccedil;&otilde;es agora usam &iacute;cones reais).',
    'O &iacute;cone do alternador de tema voltou a ser um &iacute;cone real e corresponde ao seu estado claro/escuro.'
  ],
  'v50.2': ['Corrigido um bug da v50.1 que impedia os &iacute;cones da barra superior e as Configura&ccedil;&otilde;es de funcionar na abertura.'],
  'v50.1': [
    'Novo Modo Desempenho em Personalizar: desliga efeitos de desfoque e anima&ccedil;&otilde;es que podem deixar o aplicativo lento no Windows.',
    'A barra superior agora usa &iacute;cones reais e uma nova configura&ccedil;&atilde;o &Iacute;cones que os pinta com a sua cor de destaque.',
    'A guia Apps funciona como a do Linux: clique em qualquer lugar para escolher um aplicativo (VS Code, Figma, Gmail e outros), e a guia mostra sua escolha, como &laquo;Apps - Gmail&raquo;.',
    'Removido o campo hexadecimal abaixo do bot&atilde;o Personalizar: escolha as cores apenas com os controles deslizantes.',
    'Duplicadas as op&ccedil;&otilde;es de destaque em gradiente com oito novas combina&ccedil;&otilde;es de duas cores.'
  ],
  'v50': [
    'Clique em qualquer lugar da guia Linux para abrir a lista de distribui&ccedil;&otilde;es, e a guia agora mostra sua escolha, como &laquo;Linux - Ubuntu (GNOME)&raquo;.',
    'O seletor de cor personalizada foi reconstru&iacute;do: a amostra circular abre controles de Matiz, Satura&ccedil;&atilde;o e Lumin&acirc;ncia (com o valor exibido logo acima de cada um), come&ccedil;ando da cor atual em vez de 0/0/0.',
    'Nova se&ccedil;&atilde;o Destaques em gradiente: oito gradientes de duas cores prontos para aplicar como cor de destaque.',
    'As predefini&ccedil;&otilde;es de destaque foram refinadas para uma paleta mais limpa e definida.'
  ],
  'v40.9': ['A lista de distribui&ccedil;&otilde;es agora fica direto na guia Linux: clique na pequena seta da guia para escolher sua distribui&ccedil;&atilde;o.'],
  'v40.8': ['A guia Linux agora tem uma lista de distribui&ccedil;&otilde;es (Ubuntu, Debian, Fedora, Arch, Mint, KDE e outras) que adapta as atalhos de sistema aos padr&otilde;es de cada uma e lembra sua escolha.'],
  'v40.7': ['As configura&ccedil;&otilde;es de destaque agora mostram uma barra de pr&eacute;via ao vivo com o c&oacute;digo hexadecimal exato da cor aplicada, para voc&ecirc; ver cada escolha mudar na hora.'],
  'v40.6': [
    'Removido o conta-gotas &laquo;Capturar da tela&raquo;.',
    'Predefini&ccedil;&otilde;es de destaque ajustadas para a intensidade total do Material 3 Expressive: cores profundas e vivas, realmente neon (os cinzas continuam suaves).'
  ],
  'v40.5': ['A paleta de destaque foi reequilibrada para o estilo Material 3 Expressive: cores tonais mais vivas.'],
  'v40.4': ['O &laquo;Combinar com meu dispositivo&raquo; agora l&ecirc; a cor real do sistema (incluindo a sa&iacute;da oklch/color() do Chrome) e tamb&eacute;m sonda a cor de sele&ccedil;&atilde;o de texto do sistema operacional, para aplicar sua cor de destaque din&acirc;mica real.'],
  'v40.3': [
    'Todas as cores de destaque foram reequilibradas para o estilo tonal do Material You (tons m&eacute;dios suaves com tons de cont&ecirc;iner suaves).',
    '&laquo;Combinar com meu dispositivo&raquo; agora tamb&eacute;m l&ecirc; a cor de sele&ccedil;&atilde;o do sistema como alternativa, para funcionar em mais navegadores e perf&iacute;s.'
  ],
  'v40.2': ['Configura&ccedil;&otilde;es de cor de destaque: o novo bot&atilde;o &laquo;Combinar com meu dispositivo&raquo; l&ecirc; a cor de destaque do sistema (Chrome 150+, aplicativo instalado) e a aplica, com uma confirma&ccedil;&atilde;o.'],
  'v40.1': ['Removida a galeria de planos de fundo (os planos salvos na galeria s&atilde;o exclu&iacute;dos; o plano carregado continua funcionando).'],
  'v40.0': ['Seletor de cor de destaque: a cor personalizada agora tem um campo hexadecimal (digite qualquer cor, de 3 ou 6 d&iacute;gitos) e um bot&atilde;o Copiar: o mesmo layout exato no desktop e no celular.'],
  'v39.9': ['Chat na sala: as notas da sala agora aparecem em um painel Chat com hist&oacute;rico (60 mensagens guardadas por sala, restauradas ao voltar). Notas p&uacute;blicas s&atilde;o publicadas no log; as privadas ainda s&atilde;o copiadas direto para os rascunhos. Toque em uma mensagem para copi&aacute;-la.'],
  'v39.8': [
    'Salas recentes: as &uacute;ltimas seis salas em que voc&ecirc; participou aparecem como chips de um toque na tela inicial (com suas cores), mais um bot&atilde;o para limp&aacute;-las.',
    'Enviar meu perfil: envia suas configura&ccedil;&otilde;es e atalhos personalizados para a sala inteira como um instant&acirc;neo de sentido &uacute;nico; os outros dispositivos aplicam na hora.',
    'Galeria de planos de fundo: seis gradientes integrados com variantes claras/escuras autom&aacute;ticas, um bot&atilde;o Aleat&oacute;rio e uma mistura di&aacute;ria opcional.',
    'Busca: os atalhos copiados s&atilde;o lembrados como &laquo;Copiados recentemente&raquo; no menu de busca, junto do hist&oacute;rico de buscas.'
  ],
  'v39.7': ['As anima&ccedil;&otilde;es no celular v&ecirc;m do mesmo CSS base do desktop: a regra para dispositivos de toque n&atilde;o desliga mais as transi&ccedil;&otilde;es globalmente. O holofote do tour e as guias deslizam entre um passo e outro, e as trocas de tema/plano de fundo desvanecem, tamb&eacute;m nos telefones.'],
  'v39.6': ['Paridade no celular: as trocas de tema e plano de fundo agora acontecem de forma suave (como no desktop) e o tour do site anima entre os passos tamb&eacute;m em dispositivos de toque.'],
  'v39.5': ['AirDrop e Quick Share: um bot&atilde;o &laquo;Compartilhar&raquo; ao lado do c&oacute;digo da sala abre a folha de compartilhamento do telefone (AirDrop no Apple) com um link de entrada de um toque: o outro dispositivo s&oacute; precisa tocar nele e entrar na sala.'],
  'v39.4': ['O brilho e o cintila&ccedil;&atilde;o da p&iacute;lula de vers&atilde;o agora animam no desktop mesmo com &laquo;reduzir movimento&raquo; ativo no sistema ou anima&ccedil;&otilde;es desativadas nas configura&ccedil;&otilde;es: &eacute; tratado como um sinal de atualiza&ccedil;&atilde;o, n&atilde;o como decora&ccedil;&atilde;o.'],
  'v39.3': ['O brilho da p&iacute;lula de vers&atilde;o e o selo nas configura&ccedil;&otilde;es agora aparecem de forma confi&aacute;vel no desktop: a vers&atilde;o em execu&ccedil;&atilde;o sempre recebe uma nova janela de destaque por alguns dias na abertura, mesmo se a notifica&ccedil;&atilde;o de atualiza&ccedil;&atilde;o foi ignorada.'],
  'v39.2': ['O brilho e o cintila&ccedil;&atilde;o de nova vers&atilde;o na p&iacute;lula n&atilde;o desaparecem mais para sempre depois de um &uacute;nico olhar: o destaque dura alguns dias e volta a cada visita.'],
  'v39.1': ['Os pontos de cor finalmente aparecem: as amostras (cor da sala e amostras de tema/destaque) agora s&atilde;o desenhadas como c&iacute;rculos vis&iacute;veis em vez de spans vazios e invis&iacute;veis.'],
  'v39': [
    'O Ring agora permite anexar uma mensagem r&aacute;pida ao toque: o dispositivo que toca ouve e copia para os rascunhos.',
    'Alertas de bateria: voc&ecirc; recebe uma notifica&ccedil;&atilde;o &laquo;recuperada&raquo; quando um dispositivo volta acima de 25% e pode ativar ou desativar o alarme de bateria.',
    'As notas podem ser enviadas para um &uacute;nico dispositivo por um seletor &laquo;Para:&raquo; ao lado do campo da nota.',
    'Cada sala pode ter um r&oacute;tulo colorido para distinguir as salas &agrave; primeira vista.',
    'Os c&oacute;digos de sincroniza&ccedil;&atilde;o offline agora mostram uma pr&eacute;via (dispositivo, hora, n&uacute;mero de configura&ccedil;&otilde;es e atalhos) e pedem confirma&ccedil;&atilde;o antes de importar.'
  ],
  'v38.1': ['No celular, tocar na guia Informa&ccedil;&otilde;es n&atilde;o abre mais as se&ccedil;&otilde;es automaticamente: toque no t&iacute;tulo de uma se&ccedil;&atilde;o para expandi-la.'],
  'v38': ['No celular, abrir a guia Informa&ccedil;&otilde;es n&atilde;o expande mais automaticamente as instru&ccedil;&otilde;es de sincroniza&ccedil;&atilde;o: toque na se&ccedil;&atilde;o &laquo;Salas ao vivo e sincroniza&ccedil;&atilde;o offline&raquo; para abri-la.'],
  'v37': ['O guia agora inclui instru&ccedil;&otilde;es completas para <strong>Salas ao vivo</strong> e <strong>C&oacute;digos de sincroniza&ccedil;&atilde;o offline</strong>, e tamb&eacute;m est&aacute; dispon&iacute;vel no celular.'],
  'v36': ['O bot&atilde;o na &aacute;rea de entrada agora se chama <strong>Escanear</strong> (abre a c&acirc;mera ou o seletor de arquivos para ler um QR), para n&atilde;o ser mais confundido com o bot&atilde;o <strong>QR</strong> que mostra o c&oacute;digo da sala.'],
  'v35': ['Corrigido: os QR codes da sala e do c&oacute;digo offline agora aparecem corretamente em vez de uma caixa vazia.'],
  'v34': [
    '<strong>Ligar para um dispositivo</strong> &mdash; cada outro dispositivo tem um bot&atilde;o Ring que o faz tocar e vibrar, para voc&ecirc; encontrar seu telefone.',
    '<strong>Enviar uma nota</strong> &mdash; compartilhe texto com cada dispositivo conectado; ela aparece na hora e &eacute; copiada para os rascunhos dele.',
    '<strong>Monitoramento de bateria</strong> &mdash; voc&ecirc; &eacute; avisado quando um dispositivo conectado cai abaixo de 20% de bateria.',
    '<strong>Renomear dispositivos</strong> &mdash; toque no nome de um dispositivo para dar a ele um nome personalizado.',
    '<strong>Entrar escaneando</strong> &mdash; o anfitri&atilde;o pode mostrar um QR do c&oacute;digo da sala; escaneie com a c&acirc;mera (ou escaneie um c&oacute;digo de sincroniza&ccedil;&atilde;o offline).',
    '<strong>Salas protegidas</strong> &mdash; marque &laquo;Proteger esta sala&raquo; e defina uma senha; todos os dados da sala s&atilde;o criptografados, para que s&oacute; os membros com a senha possam l&ecirc;-los.',
    '<strong>Visto por &uacute;ltimo</strong> &mdash; cada dispositivo agora mostra h&aacute; quanto tempo est&aacute; online.'
  ],
  'v33': ['Os dispositivos conectados tamb&eacute;m compartilham seu <strong>n&iacute;vel de bateria</strong> (inclusive durante o carregamento), atualizado em tempo real na sala.'],
  'v32': ['As salas ao vivo agora mostram o nome real de cada dispositivo (como &laquo;Mi 9T Pro&raquo;) em vez de um aleat&oacute;rio, tirado do pr&oacute;prio dispositivo.'],
  'v31': ['As salas ao vivo agora mostram cada dispositivo conectado pelo nome, com um ponto verde neste dispositivo e o total.'],
  'v30': [
    '<strong>Salas ao vivo</strong> &mdash; antes, para sincronizar configura&ccedil;&otilde;es e atalhos personalizados em tempo real:<ol><li>No dispositivo com suas configura&ccedil;&otilde;es, abra <strong>Configura&ccedil;&otilde;es &rarr; Salas ao vivo</strong> e toque em <strong>Iniciar uma sala</strong>. Aparece um c&oacute;digo como AK-XXX-YYY.</li><li>Envie esse c&oacute;digo para os outros dispositivos (copie ou compartilhe como preferir).</li><li>Em cada dispositivo receptor, abra <strong>Configura&ccedil;&otilde;es &rarr; Salas ao vivo</strong>, digite o mesmo c&oacute;digo e toque em <strong>Entrar na sala</strong>.</li></ol>',
    '<strong>C&oacute;digos de sincroniza&ccedil;&atilde;o offline</strong> &mdash; depois, para uma transfer&ecirc;ncia &uacute;nica quando n&atilde;o h&aacute; internet:<ol><li>Abra <strong>Configura&ccedil;&otilde;es &rarr; C&oacute;digo de sincroniza&ccedil;&atilde;o offline</strong> e toque em <strong>Criar um c&oacute;digo</strong>. Copie o c&oacute;digo ou escaneie o QR que aparece.</li><li>No outro dispositivo, abra <strong>Configura&ccedil;&otilde;es &rarr; C&oacute;digo de sincroniza&ccedil;&atilde;o offline</strong>, cole o c&oacute;digo e toque em <strong>Aplicar um c&oacute;digo</strong>.</li></ol>'
  ],
  'v29': ['Corrigido: no <strong>celular</strong>, tocar no selo de vers&atilde;o agora dispara a anima&ccedil;&atilde;o aleat&oacute;ria de quique/rota&ccedil;&atilde;o/compress&atilde;o, em vez de ser bloqueado pela redefini&ccedil;&atilde;o de anima&ccedil;&otilde;es de dispositivos de toque.'],
  'v28': ['Celular: a guia de configura&ccedil;&otilde;es ao lado de Personalizar agora se chama apenas <strong>Informa&ccedil;&otilde;es</strong> (o Guia existe apenas no desktop) e abre a se&ccedil;&atilde;o Informa&ccedil;&otilde;es automaticamente quando tocada.'],
  'v27': ['Corrigido: abrir a p&aacute;gina logo ap&oacute;s uma <strong>nova vers&atilde;o</strong> n&atilde;o a reinicia mais com um recarregamento surpresa alguns segundos depois &mdash; a atualiza&ccedil;&atilde;o agora &eacute; aplicada em segundo plano. O bot&atilde;o Atualizar e a op&ccedil;&atilde;o &laquo;Perguntar antes de atualizar&raquo; ainda recarregam sob demanda.'],
  'v26.9': ['Divertido: tocar no <strong>selo de vers&atilde;o</strong> agora dispara sempre uma anima&ccedil;&atilde;o aleat&oacute;ria de quique/rota&ccedil;&atilde;o/compress&atilde;o, brilha com um <strong>pisca&shy;mento</strong> quando uma nova vers&atilde;o &eacute; destacada, e a se&ccedil;&atilde;o Informa&ccedil;&otilde;es foi movida para a <strong>guia Informa&ccedil;&otilde;es</strong> nas Configura&ccedil;&otilde;es para chegar mais r&aacute;pido.'],
  'v26.8': ['Melhorado: o <strong>selo de vers&atilde;o</strong> na se&ccedil;&atilde;o Informa&ccedil;&otilde;es agora se atualiza sozinho e abre Novidades.'],
  'v26.7': ['Melhorado: os <strong>atalhos de aplicativos</strong> na dica do dia agora mostram primeiro a qual aplicativo pertencem, como <em>Figma &mdash; Move Tool &mdash; V</em>.'],
  'v26.6': ['Melhorado: a <strong>dica do dia</strong> agora se atualiza quando voc&ecirc; muda a guia de plataforma: escolher Windows, macOS, Linux, ChromeOS ou Apps mostra um atalho daquela se&ccedil;&atilde;o.'],
  'v26.5': ['Corrigido: a <strong>dica do dia</strong> n&atilde;o fica mais presa a um &uacute;nico atalho: agora mostra um atalho aleat&oacute;rio novo (da guia de plataforma que voc&ecirc; est&aacute; vendo) a cada carregamento da p&aacute;gina, em vez de reutilizar o mesmo o dia inteiro.'],
  'v26.4': ['Corrigido: a <strong>dica do dia</strong> agora mostra apenas atalhos da guia de plataforma que voc&ecirc; est&aacute; vendo (antes misturava atalhos de todas as plataformas). O selo de vers&atilde;o na se&ccedil;&atilde;o Guia tamb&eacute;m se atualiza sozinho.'],
  'v26.3': ['O bot&atilde;o <strong>tour</strong> agora mostra um &iacute;cone de <strong>livro aberto</strong>.'],
  'v26.2': ['O bot&atilde;o <strong>tour</strong> agora mostra um &iacute;cone de b&uacute;ssola, e o tour ganhou um passo que explica o que faz o <strong>bot&atilde;o atualizar</strong>.'],
  'v26.1': ['Corrigido: alternar entre <strong>escuro &harr; claro</strong> (pelo interruptor no topo ou pelas Configura&ccedil;&otilde;es) n&atilde;o deixa mais os cores de um <strong>tema de plano de fundo</strong> descascados: destaque, bot&otilde;es da barra e teclas de atalho mant&ecirc;m as cores do tema enquanto o plano de fundo permanece.'],
  'v26': ['Novo <strong>tour do site</strong> &mdash; toque no bot&atilde;o <strong>?</strong> no topo para uma visita guiada de barra de busca, filtros, guias, lista de atalhos, quiz, configura&ccedil;&otilde;es, impress&atilde;o e alternador de tema. Navegue com os bot&otilde;es, as setas ou os pontos.'],
  'v25': ['Removido o link <strong>Ver no GitHub</strong> da se&ccedil;&atilde;o Informa&ccedil;&otilde;es.'],
  'v24.8': ['Corrigido: a notifica&ccedil;&atilde;o <strong>&laquo;Atualizado&raquo;</strong> no celular agora fica dentro da tela (antes transbordava da borda direita em dispositivos pequenos).'],
  'v24.7.4': ['O raio dos cantos agora &eacute; limitado a <strong>16&thinsp;px</strong> em todos os temas: p&iacute;lulas, guias, barras de busca e notifica&ccedil;&otilde;es n&atilde;o ficam mais totalmente redondas (antes usavam at&eacute; 100&thinsp;px). Os cantos continuam suaves, apenas mais s&oacute;brios.'],
  'v24.7.3': ['Corrigido: <strong>Abrir configura&ccedil;&otilde;es de Wi-Fi</strong> no <strong>Android</strong> n&atilde;o fazia nada: o Chrome recente n&atilde;o permite que sites abram as configura&ccedil;&otilde;es de sistema do Android. O bot&atilde;o agora mostra uma mensagem breve pedindo para abrir as configura&ccedil;&otilde;es de Wi-Fi pelo app Configura&ccedil;&otilde;es do aparelho (no iOS e macOS ele ainda abre diretamente).'],
  'v24.7.2': ['Corrigido: em um app Android instalado (PWA), tocar em <strong>Abrir configura&ccedil;&otilde;es de Wi-Fi</strong> n&atilde;o fazia nada: o Android impede que apps abram diretamente as configura&ccedil;&otilde;es de sistema. Agora o app explica e pede para abrir o site em uma aba do Chrome, onde o bot&atilde;o funciona.'],
  'v24.7.1': ['Corrigido: <strong>Abrir configura&ccedil;&otilde;es de Wi-Fi</strong> no <strong>Android</strong> usava um clique em &acirc;ncora ativado por JS, que o Chrome bloqueia para links <code>intent:</code>: agora usa uma navega&ccedil;&atilde;o iniciada por gesto do usu&aacute;rio.'],
  'v24.7': [
    'O <strong>status da conex&atilde;o</strong> agora fica no topo de <strong>Configura&ccedil;&otilde;es &rarr; Geral</strong> (antes em Informa&ccedil;&otilde;es).',
    'O bot&atilde;o <strong>Abrir configura&ccedil;&otilde;es de Wi-Fi</strong> agora abre as verdadeiras configura&ccedil;&otilde;es de Wi-Fi no <strong>iOS</strong> (app Configura&ccedil;&otilde;es) e no <strong>macOS</strong> (Configura&ccedil;&otilde;es do Sistema). No Android, Windows e Linux, onde os navegadores n&atilde;o conseguem abrir as configura&ccedil;&otilde;es do sistema, mostra instru&ccedil;&otilde;es breves.'
  ],
  'v24.6': [
    'A p&iacute;lula <strong>Offline</strong> agora fica <strong>10 segundos</strong> e depois some (n&atilde;o te incomoda enquanto a conex&atilde;o ainda caiu).',
    'Configura&ccedil;&otilde;es &rarr; Informa&ccedil;&otilde;es agora sempre mostra seu <strong>status da conex&atilde;o</strong> (Online/Offline), com um bot&atilde;o para abrir suas <strong>configura&ccedil;&otilde;es de Wi-Fi</strong>: no iOS abre direto o app Configura&ccedil;&otilde;es; em outros aparelhos mostra instru&ccedil;&otilde;es breves.'
  ],
  'v24.5.2': ['Corrigido: em desktops onde o Windows perde a conex&atilde;o sem disparar o evento <em>offline</em> do navegador (ou onde as requisi&ccedil;&otilde;es travam em vez de falhar), a p&iacute;lula <strong>Offline</strong> agora tamb&eacute;m aparece quando a verifica&ccedil;&atilde;o de conectividade expira: n&atilde;o s&oacute; quando a requisi&ccedil;&atilde;o falha completamente.'],
  'v24.5.1': ['Corrigido: a p&iacute;lula <strong>Offline</strong> agora tamb&eacute;m aparece quando a conex&atilde;o cai sem disparar um evento do navegador (como &laquo;Offline&raquo; no DevTools, em alguns navegadores m&oacute;veis): o app verifica ativamente a conectividade a cada poucos segundos em vez de depender s&oacute; de sinais do navegador. Ela fica oculta enquanto voc&ecirc; estiver online.'],
  'v24.5': [
    'Enquanto voc&ecirc; busca, as palavras que correspondem &agrave; sua busca agora s&atilde;o <strong>destacadas</strong> nos resultados: fica mais f&aacute;cil entender por que cada linha corresponde.',
    'O campo de busca agora tem um <strong>bot&atilde;o de limpar (&times;)</strong> que aparece quando voc&ecirc; digitou algo.',
    'Uma pequena p&iacute;lula <strong>Offline</strong> aparece quando a conex&atilde;o cai: toque para confirmar que o Anthkeys continua funcionando do cache.'
  ],
  'v24.4.1': ['Corrigido no celular: o cabe&ccedil;alho <strong>A&ccedil;&atilde;o &mdash; Atalho</strong> n&atilde;o desliza mais para fora: em telas estreitas a tabela de atalhos tinha virado um cont&eacute;iner de rolagem horizontal pr&oacute;prio, o que quebrava o cabe&ccedil;alho fixo. Agora ele fica fixo no topo, exatamente como no desktop.'],
  'v24.4': ['Removido o <strong>widget de sequ&ecirc;ncia do quiz na tela inicial</strong>: ele dependia de um padrao web que os navegadores ainda n&atilde;o implementaram, ent&atilde;o nunca apareceu em lugar nenhum. Sua sequ&ecirc;ncia e suas estat&iacute;sticas do quiz continuam no aplicativo como sempre.'],
  'v24.3': [
    'O <strong>quiz de atalhos agora guarda suas estat&iacute;sticas</strong>: uma sequ&ecirc;ncia di&aacute;ria (🔥 dias seguidos em que voc&ecirc; completou um quiz), a melhor pontua&ccedil;&atilde;o, a precis&atilde;o e as partidas jogadas. Salvas localmente, nunca enviadas.',
    'Novo <strong>widget de sequ&ecirc;ncia do quiz na tela inicial</strong> para Android (Web App Widgets: experimental, chegando ao Chrome e ao Firefox; n&atilde;o dispon&iacute;vel no iOS). Mostra sua sequ&ecirc;ncia e estat&iacute;sticas; toque para abrir o quiz.'
  ],
  'v24.2.1': ['Corrigido no celular: tocar na barra de busca podia abrir a p&aacute;gina Informa&ccedil;&otilde;es: a notifica&ccedil;&atilde;o oculta &laquo;Novidades&raquo; perto do bot&atilde;o de configura&ccedil;&otilde;es ainda era clic&aacute;vel e ficava sobre o campo de busca. Agora ela s&oacute; reage enquanto est&aacute; vis&iacute;vel.'],
  'v24.2': [
    'Novo <strong>filtro de modificadores</strong>: no menu Filtros escolha uma tecla (Ctrl, Shift, Alt, Win, Cmd, &hellip;) para mostrar apenas os atalhos que a usam. As op&ccedil;&otilde;es se adaptam por plataforma.',
    'Um <strong>bot&atilde;o voltar ao topo</strong> flutua sobre a lista de atalhos quando voc&ecirc; rola: toque para voltar imediatamente ao in&iacute;cio.'
  ],
  'v24.1': ['A barra <strong>A&ccedil;&atilde;o &mdash; Atalho</strong> agora fica fixa no topo da lista enquanto voc&ecirc; rola: no celular e no Safari antes sa&iacute;a da tela.'],
  'v23.9': ['Removido o popup Guia e dicas no celular: ele listava apenas atalhos de desktop. O Guia continua nas Configura&ccedil;&otilde;es no desktop, onde <kbd>?</kbd> leva direto a ele.'],
  'v23.8': ['No celular, o Guia n&atilde;o fica mais dentro das Configura&ccedil;&otilde;es: ele continua oculto l&aacute; para n&atilde;o pesar na p&aacute;gina. Pressione <kbd>?</kbd> para abri-lo como popup.'],
  'v23.7': ['Guia e dicas foram movidos para <strong>Configura&ccedil;&otilde;es</strong> (se&ccedil;&atilde;o Geral) no desktop: pressione <kbd>?</kbd> para ir direto.'],
  'v23.6': [
    'Todos os 20 idiomas agora est&atilde;o totalmente traduzidos: sem mais fallback para o ingl&ecirc;s em recursos recentes como quiz, sincroniza&ccedil;&atilde;o em nuvem e Guia.',
    'No celular, segure um atalho para copi&aacute;-lo em vez de tocar: sem mais c&oacute;pias acidentais durante a rolagem.',
    'As p&iacute;lulas de filtro agora usam sua cor de destaque tamb&eacute;m no celular, como no desktop; quando Favoritos est&aacute; selecionado, ele &eacute; o &uacute;nico que se destaca.',
    'Removida a borda ao redor dos cinco bot&otilde;es da barra superior no celular: agora eles se fundem &agrave; p&aacute;gina.',
    'O bot&atilde;o do quiz ganhou um novo &iacute;cone de raio, e as respostas mostram nomes leg&iacute;veis em vez de teclas cruas.',
    'Corrigido: o JavaScript do aplicativo podia n&atilde;o carregar depois de uma atualiza&ccedil;&atilde;o, deixando o site sem resposta.'
  ],
  'v23.5': [
    'Os controles de filtro, favorito, compara&ccedil;&atilde;o e compacta&ccedil;&atilde;o agora ficam em um &uacute;nico menu compacto <strong>Filtros</strong>: mais espa&ccedil;o para a lista de atalhos no celular.',
    'A p&aacute;gina Novidades, o selo de vers&atilde;o e as configura&ccedil;&otilde;es de atualiza&ccedil;&atilde;o foram movidos para uma nova se&ccedil;&atilde;o <strong>Informa&ccedil;&otilde;es</strong> nas Configura&ccedil;&otilde;es.',
    'As notifica&ccedil;&otilde;es de atualiza&ccedil;&atilde;o agora aparecem pelo bot&atilde;o <strong>Configura&ccedil;&otilde;es</strong>: o &iacute;cone da engrenagem mostra um selo at&eacute; voc&ecirc; ver as novidades.'
  ],
  'v23.4': ['Removido o bot&atilde;o de ajuda <kbd>?</kbd> da barra superior: pressione <kbd>?</kbd> para abrir o Guia de qualquer forma.'],
  'v23.3': [
    'O selo de vers&atilde;o acende ap&oacute;s uma atualiza&ccedil;&atilde;o autom&aacute;tica, para voc&ecirc; notar a nova vers&atilde;o no pr&oacute;ximo in&iacute;cio.',
    'Mudar de um plano de fundo padr&atilde;o para outro mant&eacute;m o modo escuro: o novo plano tamb&eacute;m &eacute; escurecido.',
    'No celular, a barra de plataformas (Windows, macOS, Linux, ChromeOS) agora tem a mesma apar&ecirc;ncia do desktop.'
  ],
  'v23.2': [
    'Removido o alternador Avan&ccedil;ado/B&aacute;sico: todos os atalhos s&atilde;o mostrados juntos.',
    'No celular, os bot&otilde;es da barra superior agora ficam em uma grade limpa de 2&times;3.',
    'Os planos de fundo padr&atilde;o continuam aplicados e s&atilde;o escurecidos corretamente quando voc&ecirc; muda para o modo escuro.',
    'Sobreposi&ccedil;&otilde;es (configura&ccedil;&otilde;es, guia, quiz) agora cobrem as guias fixas no celular.'
  ],
  'v23.1': ['Os planos de fundo agora s&atilde;o otimizados para o modo escuro: ao passar para o escuro, tanto as imagens personalizadas quanto os fundos padr&atilde;o (Oceano, Floresta, P&ocirc;r-do-sol, &hellip;) s&atilde;o escurecidos e dessaturados para os pain&eacute;is continuarem leg&iacute;veis.'],
  'v23': [
    'Novo modo &laquo;Comparar&raquo;: escolha uma segunda plataforma para ver apenas os atalhos que diferem.',
    'Tema autom&aacute;tico que segue a hor&aacute;rio do dia (escuro das 19h &agrave;s 7h).',
    'Pressione <kbd>?</kbd> ou toque no bot&atilde;o <kbd>?</kbd> para um guia r&aacute;pido e dicas.',
    'Datas de lan&ccedil;amento adicionadas a cada item desta p&aacute;gina.'
  ],
  'v22': [
    'Corrigido: a tabela da legenda de teclas era cortada em celulares estreitos: agora ela rola na horizontal para todas as colunas serem alcan&ccedil;veis.',
    'A barra de busca e as p&iacute;lulas de categoria ficam ocultas na p&aacute;gina &laquo;Novidades&raquo; porque n&atilde;o se aplicam l&aacute;.'
  ],
  'v21': [
    'A legenda de teclas agora tem um bot&atilde;o de fechar, para voc&ecirc; recolh&ecirc;-la de dentro do painel: &uacute;til no celular, onde o interruptor pode rolar para fora do alcance.',
    'Tratamento de toque mais responsivo para o bot&atilde;o Legenda de teclas em dispositivos de toque.'
  ],
  'v20.1': [
    'Os n&uacute;meros de vers&atilde;o agora aceitam vers&otilde;es de corre&ccedil;&atilde;o: o selo no rodap&eacute; mostra, por exemplo, v20.1, e a detec&ccedil;&atilde;o de atualiza&ccedil;&otilde;es as trata corretamente.',
    'Adicionado a esta p&aacute;gina o item v20 que faltava.'
  ],
  'v20': ['Nova p&aacute;gina &laquo;Novidades&raquo; dentro do Anthkeys: o link na notifica&ccedil;&atilde;o de atualiza&ccedil;&atilde;o e o selo de vers&atilde;o no rodap&eacute; abrem ela aqui em vez do GitHub.'],
  'v19': ['O banner de atualiza&ccedil;&atilde;o agora tamb&eacute;m aparece se voc&ecirc; atualizar de uma vers&atilde;o anterior ao rastreamento de vers&otilde;es (sua vers&atilde;o anterior &eacute; detectada pelo cache offline).'],
  'v18': [
    'Aparece uma notifica&ccedil;&atilde;o &laquo;Atualizado para vX &mdash; Novidades&raquo; quando chega uma nova vers&atilde;o (no modo de atualiza&ccedil;&atilde;o autom&aacute;tica).',
    'O banner de atualiza&ccedil;&atilde;o agora &eacute; acionado por atualiza&ccedil;&otilde;es de conte&uacute;do, n&atilde;o apenas por mudanças no service worker.',
    'O selo de vers&atilde;o no rodap&eacute; &eacute; clic&aacute;vel: toque para ver as novidades.',
    'Cache offline mais leve (nenhum arquivo sem vers&atilde;o jogado fora).'
  ],
  'v16': ['Adicionado um selo de vers&atilde;o no rodap&eacute; mostrando o n&uacute;mero de build atual.'],
  'v15': ['Bot&atilde;o de atualizar e prefer&ecirc;ncia (atualiza&ccedil;&atilde;o autom&aacute;tica ou perguntar antes), com base no service worker.'],
  'v14': ['Recolher ou expandir uma categoria agora respeita a busca ativa.'],
  'v13': ['Cache de p&aacute;ginas com prioridade &agrave; rede, para as atualiza&ccedil;&otilde;es aparecerem na hora; rolagem muito mais suave no desktop.'],
  'v12': ['A busca e os filtros agora ficam restritos &agrave; aba ativa.'],
  'v11': ['Suporte a instala&ccedil;&atilde;o PWA, r&oacute;tulos de acessibilidade, suporte a movimento reduzido, atalhos do Gmail e YouTube, melhorias de SEO.'],
  'v10': [
    'Corrigido: o filtro de categoria podia esconder todos os atalhos quando correspondia a uma linha de cabe&ccedil;alho de categoria: agora ele s&oacute; esconde as linhas que voc&ecirc; filtrou.',
    'O plano de fundo agora preenche a tela inteira no celular.'
  ],
  'v9': ['Windows agora &eacute; a aba de plataforma padr&atilde;o e as abas est&atilde;o em uma ordem mais clara.'],
  'v8': [
    'N&iacute;veis de dificuldade do quiz e uma dica do dia.',
    'Rolagem muito mais suave no celular, al&eacute;m do cache offline.',
    'Busca e filtros funcionam em todas as plataformas ao mesmo tempo, com r&oacute;tulos de sistema em negrito.'
  ],
  'v7': ['Os estilos de design foram removidos: Material 3 agora &eacute; o &uacute;nico visual.'],
  'v6': [
    'Estilos de design reduzidos a Material 3, mais um bot&atilde;o &laquo;Remover plano de fundo&raquo; para voltar ao tema padr&atilde;o.',
    'Cabe&ccedil;alhos cache-control para as atualiza&ccedil;&otilde;es chegarem mais r&aacute;pido.'
  ],
  'v5': ['T&iacute;tulos de p&aacute;gina simplificados para apenas &laquo;Atalhos&raquo; em todos os 14 idiomas.'],
  'v4': [
    'Modo de quiz de atalhos: treine adivinhando o atalho ou a a&ccedil;&atilde;o, mais sincroniza&ccedil;&atilde;o em nuvem com GitHub Gist.',
    'Uma grande s&eacute;rie de corre&ccedil;&otilde;es em amostras de destaque, troca de tema e planos de fundo no celular.'
  ],
  'v3': ['Predefini&ccedil;&otilde;es de cor de destaque que voc&ecirc; pode salvar e reutilizar, mais invalida&ccedil;&atilde;o de cache para as atualiza&ccedil;&otilde;es aparecerem de forma confi&aacute;vel.'],
  'v2': ['Temas claro e escuro com cores de destaque, mais tradu&ccedil;&otilde;es da refer&ecirc;ncia de atalhos.'],
  'v1': ['A primeira vers&atilde;o do Anthkeys: todos os atalhos de teclado do dia a dia para Windows, macOS, Linux e ChromeOS em uma &uacute;nica p&aacute;gina.']
};

I18N_WN.nl = {
  'v52.1': [
    'Nieuw: de pagina &laquo;Nieuws&raquo; is nu volledig in alle 20 talen vertaald &mdash; elke release-notitie wordt in je eigen taal getoond.'
  ],
  'v52': [
    'Oplossing: v51 kon het laden van de app verhinderen; een Deense vertaling bevatte een niet-escapte apostrof die het hele taalbestand ongeldig maakte. Het bestand wordt nu correct verwerkt en alle 20 talen laden weer.'
  ],
  'v51': [
    'Vertalingen voltooid voor alle 20 talen &mdash; instellingen, live kamers, offline synchronisatie en de synchronisatiegids zijn nu volledig vertaald (recente items verschenen alleen in het Engels).',
    'Nieuw: als Anthkeys traag lijkt, biedt een banner aan om de Prestatiemodus met &eacute;&eacute;n tik in te schakelen. Je kunt hem sluiten en hij komt niet terug.'
  ],
  'v50.7': ['De Prestatiemodus is verplaatst naar het tabblad Algemeen in de instellingen.'],
  'v50.6': ['De pictogrammen in de bovenbalk zijn weer gekleurde emoji, net als bij v50: boek, printer, bliksem, maan/zon, vernieuwen en tandwiel.'],
  'v50.5': ['De pictogrammen in de bovenbalk gebruiken weer de accentkleur (standaard), in plaats van wit/grijs te lijken.'],
  'v50.4': ['De functie voor accentkleurpictogram is verwijderd: favicon, startschermpictogram en het pictogram van de ge&iuml;nstalleerde PWA gebruiken weer het standaardpictogram (een pictogram in de accentkleur kleuren maakt alleen zin voor native apps).'],
  'v50.3': [
    'De pictogrammen in de bovenbalk zijn opnieuw opgebouwd om betrouwbaar op alle apparaten te verschijnen (Rondleiding, Afdrukken, Quiz, thema, Vernieuwen en Instellingen gebruiken nu echte pictogrammen).',
    'Het thema-schakelpictogram is weer een echt pictogram en komt overeen met de lichte/donkerstatus.'
  ],
  'v50.2': ['Een bug in v50.1 verhinderde dat de pictogrammen in de bovenbalk en Instellingen bij het opstarten werkten; opgelost.'],
  'v50.1': [
    'Nieuwe Prestatiemodus bij Aanpassen: schakelt blur-effecten en animaties uit die de app op Windows traag kunnen maken.',
    'De bovenbalk gebruikt nu echte pictogrammen en een nieuwe instelling Pictogrammen kleurt ze met je accentkleur.',
    'Het tabblad Apps werkt nu als het Linux-tabblad: klik ergens om een app te kiezen (VS Code, Figma, Gmail en meer), en het tabblad toont je keuze, bijvoorbeeld &laquo;Apps - Gmail&raquo;.',
    'Het hexveld onder de knop Aanpassen is verwijderd: kies kleuren alleen via de schuifregelaars.',
    'De accentopties met kleurverloop zijn verdubbeld met acht nieuwe combinaties van twee kleuren.'
  ],
  'v50': [
    'Klik ergens op het Linux-tabblad om de distributielijst te openen, en het tabblad toont nu je keuze, bijvoorbeeld &laquo;Linux - Ubuntu (GNOME)&raquo;.',
    'De aangepaste kleurkiezer is opnieuw opgebouwd: het ronde monster opent schuifregelaars voor Tint, Verzadiging en Lichtheid (met de waarde erboven elk ervan), uitgaand van de huidige kleur in plaats van 0/0/0.',
    'Nieuwe sectie Verloopaccenten: acht tweekleurige verlopen die klaarstaan om als accentkleur te worden toegepast.',
    'De accentvoorinstellingen zijn verfijnd naar een zuiverder en duidelijker palet.'
  ],
  'v40.9': ['De distributielijst staat nu direct op het Linux-tabblad: klik op het kleine pijltje van het tabblad om je distributie te kiezen.'],
  'v40.8': ['Het Linux-tabblad heeft nu een distributielijst (Ubuntu, Debian, Fedora, Arch, Mint, KDE en meer) die systeemsneltoetsen aanpast aan de standaardinstellingen van elke distributie en je keuze onthoudt.'],
  'v40.7': ['De accentinstellingen tonen nu een live voorbeeldbalk met de exacte hexcode van de toegepaste kleur, zodat je elke keuze direct ziet veranderen.'],
  'v40.6': [
    'De &laquo;Van scherm opnemen&raquo;-pipet is verwijderd.',
    'De accentvoorinstellingen zijn bijgesteld op de volle intensiteit van Material 3 Expressive: diepe, levendige kleuren, echt neon (grijs blijft gedempt).'
  ],
  'v40.5': ['Het accentpalet is opnieuw uitgebalanceerd in de stijl van Material 3 Expressive: levendigere tonale kleuren.'],
  'v40.4': ['&laquo;Overeenkomen met mijn apparaat&raquo; leest nu de echte systeemkleur (inclusief de oklch/color()-uitvoer van Chrome) en peilt ook de tekstselectiekleur van het besturingssysteem, zodat je je werkelijke dynamische accentkleur krijgt toegepast.'],
  'v40.3': [
    'Alle accentkleuren zijn opnieuw uitgebalanceerd naar de Material You-tonaliteit (zachte middentonen met zachte containertonen).',
    '&laquo;Overeenkomen met mijn apparaat&raquo; leest nu ook de selectiekleur van het systeem als alternatief, zodat het op meer browsers en profielen werkt.'
  ],
  'v40.2': ['Instellingen voor accentkleur: de nieuwe knop &laquo;Overeenkomen met mijn apparaat&raquo; leest de systeemaccentkleur (Chrome 150+, ge&iuml;nstalleerde app) en past die toe, met een bevestigingsmelding.'],
  'v40.1': ['De achtergrondgalerij is verwijderd (achtergronden die in de galerij zijn opgeslagen worden gewist; je geladen achtergrond blijft werken).'],
  'v40.0': ['Accentkleurkiezer: de aangepaste kleur heeft nu een hexveld (typ willekeurige kleur, 3 of 6 tekens) plus een knop Kopi&euml;ren: exact dezelfde indeling op desktop en mobiel.'],
  'v39.9': ['Chat in de kamer: kamernotities verschijnen nu in een chatpaneel met geschiedenis (60 berichten per kamer bewaard, hersteld bij terugkeren). Openbare notities worden in het log geplaatst; priv&eacute;notities worden nog steeds direct naar klemborden gekopieerd. Tik op een bericht om het te kopi&euml;ren.'],
  'v39.8': [
    'Recente kamers: de laatste zes kamers waaraan je deelnam staan als &eacute;&eacute;n-tik-chips op het startscherm (met hun kleuren), plus een knop om ze te wissen.',
    'Mijn profiel sturen: stuur je instellingen en aangepaste sneltoetsen naar de hele kamer als een eenmalige momentopname; andere apparaten passen die direct toe.',
    'Achtergrondgalerij: zes ingebouwde verlopen met automatische lichte/donker varianten, een knop Willekeurig en een optionele dagelijkse mix.',
    'Zoeken: gekopieerde sneltoetsen worden onthouden als &laquo;Recent gekopieerd&raquo; in het zoekmenu, samen met de zoekgeschiedenis.'
  ],
  'v39.7': ['Animaties op mobiel komen nu uit dezelfde basis-CSS als op desktop: de regel voor touchapparaten schakelt overgangen niet langer globaal uit. De tourzaklamp en de tabbladen bewegen tussen de stappen, en thema- en achtergrondwissels vervagen, ook op telefoons.'],
  'v39.6': ['Mobiel gelijkgetrokken: thema- en achtergrondwissels verlopen nu vloeiend (zoals op desktop) en de site-tour animeert tussen de stappen ook op touchapparaten.'],
  'v39.5': ['AirDrop en Quick Share: een knop &laquo;Delen&raquo; naast de kamercode opent het deelblad van de telefoon (AirDrop op Apple) met een eenmalige inschrijflink: het andere apparaat hoeft er alleen op te tikken en doet mee aan de kamer.'],
  'v39.4': ['De helderheid en flikkering van de versiepil flikkeren nu ook op desktop wanneer &laquo; beweging beperken&raquo; aanstaat in het systeem of animaties in de instellingen uit staan: het wordt behandeld als een updatesignaal, niet als decoratie.'],
  'v39.3': ['De helderheid van de versiepil en de badge in de instellingen verschijnen nu betrouwbaar op desktop: de actieve versie krijgt bij het opstarten altijd een nieuw highlight-venster van enkele dagen, ook als de updatemelding is overgeslagen.'],
  'v39.2': ['De helderheid en flikkering van een nieuwe versie op de pil verdwijnen niet meer voorgoed na &eacute;&eacute;n blik: de markering duurt enkele dagen en komt bij elk bezoek terug.'],
  'v39.1': ['De kleurpunten zijn eindelijk zichtbaar: de monsters (kamerkleur en thema/accentmonsters) worden nu als zichtbare cirkels getekend in plaats van lege, onzichtbare spans.'],
  'v39': [
    'Ring kan nu een kort bericht aan de bel voegen: het beltijdende apparaat hoort het en kopieert het naar klemborden.',
    'Batterijwaarschuwingen: je krijgt een &laquo;hersteld&raquo;-melding wanneer een apparaat weer boven 25% komt en je kunt het batterijalarm aan- of uitzetten.',
    'Notities kunnen naar &eacute;&eacute;n apparaat worden gestuurd via een &laquo;Aan:&raquo;-kiezer naast het notitieveld.',
    'Elke kamer kan een kleurlabel krijgen om kamers in één oogopslag te onderscheiden.',
    'Offline synchronisatiecodes tonen nu een voorbeeld (apparaat, tijd, aantal instellingen en sneltoetsen) en vragen om bevestiging voor het importeren.'
  ],
  'v38.1': ['Op mobiel worden de secties niet meer automatisch geopend wanneer je het tabblad Info aanraakt: tik op de kop van een sectie om die uit te klappen.'],
  'v38': ['Op mobiel worden de synchronisatie-instructies niet meer automatisch uitgeklapt wanneer je het tabblad Info opent: tik op de sectie &laquo;Live kamers en offline synchronisatie&raquo; om die te openen.'],
  'v37': ['De gids bevat nu volledige instructies voor <strong>Live kamers</strong> en <strong>Offline synchronisatiecodes</strong>, en is ook beschikbaar op mobiel.'],
  'v36': ['De knop in het aanmeldgebied heet nu <strong>Scannen</strong> (opent de camera of bestandskiezer om een QR-code te lezen), zodat hij niet meer verward wordt met de <strong>QR</strong>-knop die de kamercode toont.'],
  'v35': ['Opgelost: QR-codes voor de kamer en de offline code worden nu correct getoond in plaats van een leeg vak.'],
  'v34': [
    '<strong>Een apparaat bellen</strong> &mdash; elk ander apparaat heeft een Ring-knop die het laat overgaan en trillen, zodat je je telefoon kunt vinden.',
    '<strong>Een notitie sturen</strong> &mdash; deel tekst met elk verbonden apparaat; die verschijnt direct en wordt naar zijn klemborden gekopieerd.',
    '<strong>Batterijbewaking</strong> &mdash; je wordt gewaarschuwd wanneer een verbonden apparaat onder 20% batterij zakt.',
    '<strong>Apparaten hernoemen</strong> &mdash; tik op de naam van een apparaat om het een eigen naam te geven.',
    '<strong>Deelnemen door te scannen</strong> &mdash; de host kan een QR-code van de kamercode tonen; scan die met de camera (of scan een offline synchronisatiecode).',
    '<strong>Beveiligde kamers</strong> &mdash; vink &laquo;Deze kamer beveiligen&raquo; aan en stel een wachtwoord in: alle kamergegevens worden versleuteld, zodat alleen leden met het wachtwoord ze kunnen lezen.',
    '<strong>Laatst gezien</strong> &mdash; elk apparaat laat nu zien hoe lang het online is.'
  ],
  'v33': ['Verbonden apparaten delen nu ook hun <strong>batterijniveau</strong> (ook tijdens het opladen), in de kamer realtime bijgewerkt.'],
  'v32': ['Live kamers tonen nu de echte naam van elk apparaat (zoals &laquo;Mi 9T Pro&raquo;) in plaats van een willekeurige naam die het apparaat zelf heeft bedacht.'],
  'v31': ['Live kamers tonen nu elk verbonden apparaat op naam, met een groene stip op dit apparaat en het totaal.'],
  'v30': [
    '<strong>Live kamers</strong> &mdash; om eerst instellingen en aangepaste sneltoetsen realtime te synchroniseren:<ol><li>Open op het apparaat met je instellingen <strong>Instellingen &rarr; Live kamers</strong> en tik op <strong>Kamer starten</strong>. Er verschijnt een kamercode zoals AK-XXX-YYY.</li><li>Stuur die code naar je andere apparaten (kopieer of deel hem zoals je wilt).</li><li>Open op elk ontvangend apparaat <strong>Instellingen &rarr; Live kamers</strong>, typ dezelfde code en tik op <strong>Deelnemen aan kamer</strong>.</li></ol>',
    '<strong>Offline synchronisatiecodes</strong> &mdash; daarna, voor een eenmalige overdracht als er geen internet is:<ol><li>Open <strong>Instellingen &rarr; Offline synchronisatiecode</strong> en tik op <strong>Code aanmaken</strong>. Kopieer de code of scan de QR-code die verschijnt.</li><li>Open op het andere apparaat <strong>Instellingen &rarr; Offline synchronisatiecode</strong>, plak de code en tik op <strong>Code toepassen</strong>.</li></ol>'
  ],
  'v29': ['Opgelost: op <strong>mobiel</strong> start het aanraken van de versiebadge nu de willekeurige stuiter-/draai-/krimpanimatie, in plaats van geblokkeerd te worden door de animatiereset voor touchapparaten.'],
  'v28': ['Mobiel: het instellingen-tabblad naast Aanpassen heet nu alleen <strong>Info</strong> (de gids bestaat alleen op desktop) en opent automatisch de Info-sectie wanneer je erop tikt.'],
  'v27': ['Opgelost: de pagina kort na een <strong>nieuwe versie</strong> openen reset zich niet meer met een verrassingsherlaadbeeld enkele seconden later &mdash; de update wordt nu op de achtergrond toegepast. De Vernieuwen-knop en de optie &laquo;Vragen voor het bijwerken&raquo; herladen nog op aanvraag.'],
  'v26.9': ['Leuk: het aanraken van de <strong>versiebadge</strong> start nu elke keer een willekeurige stuiter-/draai-/krimpanimatie, hij gloeit met een <strong>schittering</strong> wanneer een nieuwe versie wordt gemarkeerd, en de Info-sectie is verplaatst naar het tabblad <strong>Info</strong> in de instellingen om hem sneller te bereiken.'],
  'v26.8': ['Verbeterd: de <strong>versiebadge</strong> in de Info-sectie werkt nu automatisch bij en opent Nieuws.'],
  'v26.7': ['Verbeterd: <strong>appsneltoetsen</strong> in de dagtip tonen nu eerst van welke app ze zijn, zoals <em>Figma &mdash; Move Tool &mdash; V</em>.'],
  'v26.6': ['Verbeterd: de <strong>dagtip</strong> werkt nu bij wanneer je van platformtabblad wisselt: Windows, macOS, Linux, ChromeOS of Apps kiezen toont een sneltoets uit die sectie.'],
  'v26.5': ['Opgelost: de <strong>dagtip</strong> blijft niet meer op één sneltoets hangen: hij toont nu bij elke paginalading een nieuwe willekeurige sneltoets (uit het platformtabblad dat je bekijkt), in plaats van dezelfde de hele dag te hergebruiken.'],
  'v26.4': ['Opgelost: de <strong>dagtip</strong> toont nu alleen sneltoetsen van het platformtabblad dat je bekijkt (eerder werden sneltoetsen van alle platforms gemengd). Ook de versiebadge in de gids werkt nu automatisch bij.'],
  'v26.3': ['De <strong>tour</strong>-knop toont nu een <strong>open boek</strong>-pictogram.'],
  'v26.2': ['De <strong>tour</strong>-knop toont nu een kompass-pictogram, en de tour heeft een stap gekregen die uitlegt wat de <strong>vernieuwknop</strong> doet.'],
  'v26.1': ['Opgelost: wisselen tussen <strong>donker &harr; licht</strong> (via de schakelaar bovenaan of de instellingen) trekt de kleuren van een <strong>achtergrondthema</strong> niet meer weg: accent, balkknoppen en sneltoetstoetsen houden de themakleuren terwijl de achtergrond blijft staan.'],
  'v26': ['Nieuwe <strong>sitetour</strong> &mdash; tik op de <strong>?</strong>-knop bovenaan voor een rondleiding door zoekbalk, filters, tabbladen, sneltoetslijst, quiz, instellingen, afdrukken en de themaschakelaar. Navigeer met de knoppen, de pijltjes of de stippen.'],
  'v25': ['De link <strong>Bekijk op GitHub</strong> is verwijderd uit de Info-sectie.'],
  'v24.8': ['Opgelost: de melding <strong>&laquo;Bijgewerkt&raquo;</strong> blijft op mobiel nu binnen het scherm (eerder liep die op kleine apparaten over de rechterrand).'],
  'v24.7.4': ['De hoekstraal is nu overal beperkt tot <strong>16&thinsp;px</strong>: pillen, tabbladen, zoekbalken en meldingen zijn niet meer volledig rond (eerder tot 100&thinsp;px). Hoeken blijven zacht, alleen ingetogen.'],
  'v24.7.3': ['Opgelost: <strong>Wifi-instellingen openen</strong> deed op <strong>Android</strong> niets: recente Chrome staat websites niet toe de systeeminstellingen van Android te openen. De knop toont nu een korte melding die vraagt de wifi-instellingen via de Instellingen-app van je apparaat te openen (op iOS en macOS opent die nog steeds direct).'],
  'v24.7.2': ['Opgelost: in een ge&iuml;nstalleerde Android-app (PWA) deed tikken op <strong>Wifi-instellingen openen</strong> niets: Android staat apps niet toe direct systeeminstellingen te openen. Nu legt hij het uit en vraagt hij de site in een Chrome-tabblad te openen, waar de knop wel werkt.'],
  'v24.7.1': ['Opgelost: <strong>Wifi-instellingen openen</strong> gebruikte op <strong>Android</strong> een JS-geactiveerde anklik, die Chrome blokkeert voor <code>intent:</code>-links: nu gebruikt het een navigatie die door een gebruikersgebaar is gestart.'],
  'v24.7': [
    'De <strong>verbindingsstatus</strong> staat nu bovenaan <strong>Instellingen &rarr; Algemeen</strong> (verplaatst uit Info).',
    'De knop <strong>Wifi-instellingen openen</strong> opent nu de echte wifi-instellingen op <strong>iOS</strong> (Instellingen-app) en <strong>macOS</strong> (Systeeminstellingen). Op Android, Windows en Linux, waar browsers niet doorlinken naar systeeminstellingen, toont hij korte instructies.'
  ],
  'v24.6': [
    'De <strong>Offline</strong>-pil blijft nu <strong>10 seconden</strong> staan en verdwijnt daarna (hij zit niet de hele tijd in de weg zolang de verbinding nog weg is).',
    'Instellingen &rarr; Info toont nu altijd je <strong>verbindingsstatus</strong> (Online/Offline), met een knop om je <strong>wifi-instellingen</strong> te openen: op iOS gaat die direct naar de Instellingen-app; op andere apparaten verschijnen korte instructies.'
  ],
  'v24.5.2': ['Opgelost: op desktops waar Windows de verbinding verliest zonder de <em>offline</em>-gebeurtenis van de browser te activeren (of waar aanvragen blijven hangen in plaats van te mislukken), verschijnt de <strong>Offline</strong>-pil nu ook wanneer de connectiviteitscontrole time-out gaat: niet alleen wanneer de aanvraag volledig mislukt.'],
  'v24.5.1': ['Opgelost: de <strong>Offline</strong>-pil verschijnt nu ook wanneer de verbinding valt zonder een browserevent te activeren (zoals &laquo;Offline&raquo; in DevTools, in sommige mobiele browsers): de app controleert actief de connectiviteit om de paar seconden in plaats van alleen op browsersignalen te vertrouwen. Hij blijft verborgen zolang je online bent.'],
  'v24.5': [
    'Tijdens het zoeken worden de woorden die overeenkomen met je zoekopdracht nu <strong>gemarkeerd</strong> in de resultaten: zo is duidelijker waarom elke regel overeenkomt.',
    'Het zoekveld heeft nu een <strong>wisknop (&times;)</strong> die verschijnt zodra je iets hebt getypt.',
    'Een kleine <strong>Offline</strong>-pil verschijnt wanneer de verbinding valt: tik erop om te bevestigen dat Anthkeys uit de cache blijft werken.'
  ],
  'v24.4.1': ['Opgelost op mobiel: de kop <strong>Actie &mdash; Sneltoets</strong> scrolt niet meer weg: op smalle schermen was de sneltoetstabel omgezet in een eigen horizontale scrollcontainer, wat de vaste kop onderbrak. Die zit nu weer bovenaan vast, precies als op desktop.'],
  'v24.4': ['De <strong>quizreekswidget op het startscherm</strong> is verwijderd: die leunde op een webstandaard die browsers nog niet implementeren en is dus nooit ergens verschenen. Je quizreeks en -statistieken blijven gewoon in de app.'],
  'v24.3': [
    'De <strong>sneltoetsquiz houdt nu je statistieken bij</strong>: een dagelijkse reeks (🔥 dagen op rij dat je een quiz hebt afgerond), je beste score, je nauwkeurigheid en het aantal gespeelde rondes. Lokaal opgeslagen, nooit ge&uuml;pload.',
    'Nieuwe <strong>quizreekswidget op het startscherm</strong> voor Android (Web App Widgets: experimenteel, uitgerold in Chrome en Firefox; niet beschikbaar op iOS). Toont je reeks en statistieken; tik erop om de quiz te openen.'
  ],
  'v24.2.1': ['Opgelost op mobiel: tikken op de zoekbalk kon de Info-pagina openen: de verborgen &laquo;Nieuws&raquo;-melding naast de instellingenknop was nog klikbaar en lag over het zoekveld. Ze reageert nu alleen terwijl ze zichtbaar is.'],
  'v24.2': [
    'Nieuwe <strong>modifierfilter</strong>: kies in het Filters-menu een toets (Ctrl, Shift, Alt, Win, Cmd, &hellip;) om alleen sneltoetsen te tonen die die gebruiken. De opties passen zich per platform aan.',
    'Een <strong>terug-naar-bovenknop</strong> zweeft boven de sneltoetslijst als je scrolt: tik erop om direct naar boven te gaan.'
  ],
  'v24.1': ['De balk <strong>Actie &mdash; Sneltoets</strong> blijft nu boven aan de lijst plakken terwijl je scrolt: op mobiel en Safari verdween die eerder uit beeld.'],
  'v23.9': ['De mobiele Guide- en tips-popup is verwijderd: die noemde alleen desktopsneltoetsen. De gids blijft in de instellingen op desktop, waar <kbd>?</kbd> er direct naartoe gaat.'],
  'v23.8': ['Op mobiel staat de gids niet meer in de instellingen: hij blijft daar verborgen om de pagina niet zwaarder te maken. Druk op <kbd>?</kbd> om hem als popup te openen.'],
  'v23.7': ['Gids en tips zijn verplaatst naar <strong>Instellingen</strong> (sectie Algemeen) op desktop: druk op <kbd>?</kbd> om er direct heen te gaan.'],
  'v23.6': [
    'Alle 20 talen zijn nu volledig vertaald: geen Engelse terugval meer voor nieuwere functies zoals quiz, cloudsynchronisatie en gids.',
    'Houd op mobiel een sneltoets ingedrukt om die te kopi&euml;ren in plaats van aan te tikken: geen onbedoelde kopie&euml;n meer tijdens het scrollen.',
    'Filterpills gebruiken nu ook op mobiel je accentkleur, net als op desktop; bij Favorieten is dat de enige die opvalt.',
    'De rand rond de vijf knoppen in de bovenbalk is op mobiel verwijderd: ze lopen nu in de pagina over.',
    'De quizknop heeft een nieuw bliksem-pictogram en de antwoorden tonen leesbare namen in plaats van ruwe toetsen.',
    'Opgelost: de JavaScript van de app kon na een update niet laden, waardoor de site niet reageerde.'
  ],
  'v23.5': [
    'De filters, favorieten, vergelijken en samenvouwen staan nu in &eacute;&eacute;n compact <strong>Filters</strong>-menu: meer ruimte voor de sneltoetslijst op mobiel.',
    'De Nieuws-pagina, de versiebadge en de update-instellingen zijn verplaatst naar een nieuwe sectie <strong>Info</strong> in de instellingen.',
    'Updatemeldingen verschijnen nu via de <strong>Instellingen</strong>-knop: het tandwiel-pictogram toont een badge tot je het nieuws hebt gezien.'
  ],
  'v23.4': ['De hulpknop <kbd>?</kbd> is uit de bovenbalk verwijderd: druk op <kbd>?</kbd> om de gids toch te openen.'],
  'v23.3': [
    'De versiebadge licht op na een automatische update, zodat je de nieuwe versie bij de volgende start opmerkt.',
    'Overschakelen tussen standaardachtergronden behoudt de donkere modus: ook de nieuwe achtergrond wordt donker gemaakt.',
    'Op mobiel heeft de platformbalk (Windows, macOS, Linux, ChromeOS) nu dezelfde uitstraling als op desktop.'
  ],
  'v23.2': [
    'De schakelaar Geavanceerd/Basis is verwijderd: alle sneltoetsen worden samen getoond.',
    'Op mobiel staan de knoppen in de bovenbalk nu in een net raster van 2&times;3.',
    'Standaardachtergronden blijven toegepast en worden correct donker gemaakt als je naar de donkere modus gaat.',
    'Overlays (instellingen, gids, quiz) bedekken nu ook de vaste tabbladen op mobiel.'
  ],
  'v23.1': ['Achtergronden zijn nu geoptimaliseerd voor de donkere modus: bij het overschakelen naar donker worden zowel je eigen afbeeldingen als de standaardachtergronden (Oceaan, Bos, Zonsondergang, &hellip;) donker gemaakt en ontkleurt, zodat de panelen leesbaar blijven.'],
  'v23': [
    'Nieuwe modus &laquo;Vergelijken&raquo;: kies een tweede platform om alleen de sneltoetsen te zien die verschillen.',
    'Automatisch thema dat het tijdstip van de dag volgt (donker van 19 tot 7 uur).',
    'Druk op <kbd>?</kbd> of tik op de <kbd>?</kbd>-knop voor een korte gids en tips.',
    'Releasedatums toegevoegd aan elk item op deze pagina.'
  ],
  'v22': [
    'Opgelost: de toetsenlegenda-tabel was afgekappt op smalle telefoons: die scrolt nu horizontaal zodat alle kolommen bereikbaar zijn.',
    'De zoekbalk en categoriepills zijn verborgen op de pagina &laquo;Nieuws&raquo; omdat ze daar niet gelden.'
  ],
  'v21': [
    'De toetsenlegenda heeft nu een sluitknop, zodat je die vanuit het paneel kunt samenvouwen: handig op mobiel, waar de schakelaar buiten bereik kan scrollen.',
    'Snellere aanraakreactie voor de toetsenlegenda-knop op touchapparaten.'
  ],
  'v20.1': [
    'Versienummers ondersteunen nu patchversies: de badge onderaan toont bijvoorbeeld v20.1 en de updatedetectie verwerkt ze correct.',
    'Het ontbrekende v20-item is aan deze pagina toegevoegd.'
  ],
  'v20': ['Nieuwe pagina &laquo;Nieuws&raquo; in Anthkeys: de link in de updatemelding en de versiebadge onderaan openen die hier in plaats van op GitHub.'],
  'v19': ['De updatebanner verschijnt nu ook als je bijwerkt vanaf een versie van vóór de versievolging (je vorige versie wordt uit de offlinecache gedetecteerd).'],
  'v18': [
    'Er verschijnt een melding &laquo;Bijgewerkt naar vX &mdash; Nieuws&raquo; wanneer een nieuwe versie binnenkomt (in de automatische updatemodus).',
    'De updatebanner wordt nu getriggerd door contentupdates, niet alleen door wijzigingen in de service worker.',
    'De versiebadge onderaan is klikbaar: tik erop om het nieuws te zien.',
    'Kleinere offlinecache (geen versieloze bestanden meer die worden weggegooid).'
  ],
  'v16': ['Er is een versiebadge onderaan toegevoegd die het huidige buildnummer toont.'],
  'v15': ['Vernieuwen-knop en voorkeur (automatisch bijwerken of eerst vragen), op basis van de service worker.'],
  'v14': ['Een categorie samenvouwen of uitklappen houdt nu rekening met de actieve zoekopdracht.'],
  'v13': ['Pagina-cache met netwerkprioriteit, zodat updates meteen verschijnen; veel soepeler scrollen op desktop.'],
  'v12': ['Zoeken en filters gelden nu alleen voor het actieve tabblad.'],
  'v11': ['Ondersteuning voor PWA-installatie, toegankelijkheidslabels, beperkte beweging, Gmail- en YouTube-sneltoetsen, SEO-verbeteringen.'],
  'v10': [
    'Opgelost: de categoriefilter kon alle sneltoetsen verbergen wanneer die overeenkwam met een categoriekopregel: nu verbergt hij alleen de rijen die je hebt gefilterd.',
    'De achtergrond vult nu het hele scherm op mobiel.'
  ],
  'v9': ['Windows is nu het standaard platformtabblad en de tabbladen staan in een duidelijkere volgorde.'],
  'v8': [
    'Quizniveaus en een dagtip.',
    'Veel soepeler scrollen op mobiel, naast de offlinecache.',
    'Zoeken en filters werken gelijktijdig op alle platforms, met vetgedrukte OS-labels.'
  ],
  'v7': ['De ontwerpstijlen zijn verwijderd: Material 3 is nu de enige vormgeving.'],
  'v6': [
    'Ontwerpstijlen teruggebracht op Material 3, plus een knop &laquo;Achtergrond verwijderen&raquo; om terug te keren naar het standaardthema.',
    'Cache-control-headers toegevoegd zodat updates sneller aankomen.'
  ],
  'v5': ['Paginatitels vereenvoudigd tot alleen &laquo;Sneltoetsen&raquo; in alle 14 talen.'],
  'v4': [
    'Sneltoetsquizmodus: train door de sneltoets of actie te raden, plus cloudsynchronisatie met GitHub Gist.',
    'Een brede reeks fixes voor accentmonsters, themawissels en mobiele achtergronden.'
  ],
  'v3': ['Voorinstellingen voor accentkleuren die je kunt opslaan en hergebruiken, plus cache-invalidation zodat updates betrouwbaar verschijnen.'],
  'v2': ['Lichte en donkere thema&lsquo;s met accentkleuren, plus vertalingen van de sneltoetsreferentie.'],
  'v1': ['De eerste versie van Anthkeys: alle dagelijkse toetsenbord-sneltoetsen voor Windows, macOS, Linux en ChromeOS op &eacute;&eacute;n pagina.']
};

I18N_WN.ja = {
  'v52.1': [
    '新機能:「新着情報」ページが 20 言語すべてで完全に翻訳されました。すべてのリリースノートがお使いの言語で表示されます。'
  ],
  'v52': [
    '修正: v51 ではアプリの読み込みが妨げられることがありました。デンマーク語の翻訳にエスケープされていないアポストロフィがあり、言語ファイル全体が破損していました。ファイルは正しく解析されるようになり、20 言語すべてが再び読み込めます。'
  ],
  'v51': [
    '20 言語すべての翻訳が完了しました。設定、ライブルーム、オフライン同期、同期ガイドがすべて翻訳済みです (最近の項目は英語のみでした)。',
    '新機能: Anthkeys が遅く感じる場合、上部のバナーからワンタップでパフォーマンスモードを有効にできます。閉じると再表示されません。'
  ],
  'v50.7': ['パフォーマンスモードを設定の「一般」タブに移動しました。'],
  'v50.6': ['上部バーのアイコンが v50 と同じ色付き絵文字に戻りました。本、プリンター、稲妻、月/太陽、更新、歯車。'],
  'v50.5': ['上部バーのアイコンが再びアクセントカラー (既定) を使い、白/グレーに見える問題がなくなりました。'],
  'v50.4': ['アクセントカラーでアイコンを染める機能を削除しました。favicon、ホーム画面アイコン、インストール済み PWA のアイコンは再び既定のアイコンを使います (アイコンの着色はネイティブアプリでのみ意味があります)。'],
  'v50.3': [
    '上部バーのアイコンをすべての端末で確実に表示できるように作り直しました。ツアー、印刷、クイズ、テーマ、更新、設定はすべて実際のアイコンを使います。',
    'テーマ切り替えアイコンが再び実際のアイコンになり、ライト/ダークの状態と一致します。'
  ],
  'v50.2': ['v50.1 で上部バーのアイコンと設定が起動直後に動作しない不具合を修正しました。'],
  'v50.1': [
    'カスタマイズに新しいパフォーマンスモードを追加しました。Windows でアプリを遅くする可能性があるブラー効果とアニメーションを無効にします。',
    '上部バーが実際のアイコンを使うようになり、新しい「アイコン」設定でアクセントカラーで着色できます。',
    'Apps タブが Linux タブと同じように動きます。好きな場所をクリックしてアプリ (VS Code、Figma、Gmail など) を選ぶと、タブに選択内容 (例:「Apps - Gmail」) が表示されます。',
    'カスタマイズボタンの下にあった 16 進入力欄を削除しました。色はスライダーだけで選べます。',
    '2 色グラデーションのアクセント選択肢を 2 倍にし、8 通りの新しい組み合わせを追加しました。'
  ],
  'v50': [
    'Linux タブの好きな場所をクリックするとディストリビューション一覧が開き、タブに選択内容 (例:「Linux - Ubuntu (GNOME)」) が表示されます。',
    'カスタムカラー選択子を作り直しました。丸いスウォッチを開くと色相、彩度、明度のスライダーが現れ (それぞれの 위에値を表示)、0/0/0 ではなく現在の色から始まります。',
    '新しいグラデーションアクセントのセクション: アクセントとしてすぐ使える 8 つの 2 色グラデーション。',
    'アクセントのプリセットを、よりすっきりした配色になるよう仕上げました。'
  ],
  'v40.9': ['ディストリビューション一覧は Linux タブの小さな矢印から選べるようになりました。タブの矢印をタップすると、自分のディストリビューションを選択できます。'],
  'v40.8': ['Linux タブにディストリビューション一覧 (Ubuntu、Debian、Fedora、Arch、Mint、KDE など) が追加され、各ディストリビューションの標準設定に合わせてシステムショートカットを調整し、選択内容を記憶します。'],
  'v40.7': ['アクセント設定に、適用中の色の正確な 16 進コードを表示するライブプレビューバーが追加されました。変更が即座に確認できます。'],
  'v40.6': [
    '「画面から取得」機能を削除しました。',
    'アクセントプリセットを Material 3 Expressive のフル強度に合わせました。深くて鮮やかな、本物のネオンカラーです (グレーは控えめなまま)。'
  ],
  'v40.5': ['アクセントのパレットを Material 3 Expressive のスタイルに合わせて再調整し、色味をより鲞やかにしました。'],
  'v40.4': ['「この端末に合わせる」が実際のシステムカラー (Chrome の oklch/color() 出力も含む) を読み取り、OS のテキスト選択色も調べることで、端末の実際の動的アクセントカラーが適用されるようになりました。'],
  'v40.3': [
    'すべてのアクセントカラーを Material You のトーンスタイル (控えめな中間色と柔らかいコンテナートーン) に合わせて再調整しました。',
    '「この端末に合わせる」がシステムの選択色も代替として読み取るようになり、より多くのブラウザとプロファイルで動作します。'
  ],
  'v40.2': ['アクセント色の設定に「この端末に合わせる」ボタンを追加しました (Chrome 150 以降、インストール済みアプリ)。システムアクセント色を読み取って適用し、確認通知を表示します。'],
  'v40.1': ['壁紙ギャラリーを削除しました。ギャラリーに保存した背景は削除されますが、読み込んだ背景は引き続き使えます。'],
  'v40.0': ['アクセントカラー選択子: カスタム色に 16 進入力欄 (3 桁または 6 桁で任意の色を入力) とコピーを追加しました。デスクトップとモバイルでまったく同じレイアウトです。'],
  'v39.9': ['ルームのチャット: ルームのノートが履歴付きのチャットパネルに表示されるようになりました (ルームごとに 60 件を保存し、戻ると復元されます)。公開ノートはログに記録され、プライベートノートは引き続き直接クリップボードにコピーされます。メッセージをタップするとコピーできます。'],
  'v39.8': [
    '最近のルーム: 参加していた直近 6 つのルームが、色の付いたワンタップのチップとしてホーム画面に表示されます。クリアするボタンも付いています。',
    'プロフィールを送信: 設定とカスタムショートカットを、ワンタイムのスナップショットとしてルーム全体に送ります。他の端末では即座に適用されます。',
    '壁紙ギャラリー: 明暗が自動で切り替わる 6 種類の組み込みグラデーション、ランダムボタン、任意の日替わりブレンドを用意しています。',
    '検索: コピーしたショートカットが「最近コピーした項目」として検索メニューに残り、検索履歴とあわせて表示されます。'
  ],
  'v39.7': ['モバイルのアニメーションもデスクトップと同じ基盤 CSS を使うようになりました。タッチ端末向けのルール不会再般にトランジションを無効化しません。ツアーのスポットライトとタブはステップ間を滑らかに移動し、テーマや背景の切り替えがフェードします (スマートフォンでも)。'],
  'v39.6': ['モバイルでもテーマと背景の切り替えがデスクトップ同様に滑らかになり、サイトツアーもステップ間でアニメーションします (タッチ端末でも)。'],
  'v39.5': ['AirDrop と Quick Share: ルームコードの横にある「共有」ボタンが、端末の共有シート (Apple では AirDrop) をワンタップの参加リンクとともに開きます。相手の端末はタップするだけでルームに参加できます。'],
  'v39.4': ['バージョンピルの光る演出ときらめきは、OS で「視差効果を減らす」が有効な場合や、設定でアニメーションを無効にしている場合でもデスクトップでアニメーションします。装飾ではなく更新の合図として扱われます。'],
  'v39.3': ['バージョンピルの発光と設定内のバッジがデスクトップでも確実に表示されるようになりました。実行中のバージョンは起動時に必ず数日分の新しいハイライト枠を得るため、更新通知を読み飛ばした場合でも同様です。'],
  'v39.2': ['バージョンピルの新しいバージョンの発光が、一度見ただけで二度と消えなくなりました。ハイライトは数日続き、訪れるたびに再び表示されます。'],
  'v39.1': ['色のスウォッチがようやく見えるようになりました。ルームの色やテーマ/アクセントのスウォッチが、透明な空の要素ではなく実際の円として描画されます。'],
  'v39': [
    'Ring で呼び出しに短い文面を添えられるようになりました。呼び出しが鳴った端末がそれを受信してクリップボードにコピーします。',
    'バッテリー通知: 端末の残量が 25% を超えると「復旧」の通知を受け取り、バッテリーアラームを切り替えられます。',
    'ノートの横にある「宛先:」のセレクターで、ノートを特定の 1 台にだけ送れます。',
    '各ルームに色のラベルを付けられるようになり、ルームをひと目で区別できます。',
    'オフライン同期コードはプレビュー (端末、時刻、設定とショートカットの数) を表示し、インポート前に確認を求めるようになりました。'
  ],
  'v38.1': ['モバイルでは情報タブをタップしてもセクションは自動的に開きません。セクションの見出しをタップして開いてください。'],
  'v38': ['モバイルでは情報タブを開いても同期の手順が自動的に開きません。「ライブルームとオフライン同期」セクションをタップしてください。'],
  'v37': ['ガイドに「ライブルーム」と「オフライン同期コード」の完全な手順を追加し、モバイルでも使えるようになりました。'],
  'v36': ['ログインエリアのボタンは「スキャン」に変更されました。QR を読むためにカメラまたはファイル選択を開きます。ルームコードを表示する「QRコード」ボタンと混同されないためです。'],
  'v35': ['修正: ルームとオフラインコードの QR コードが、空のボックスではなく正しく表示されるようになりました。'],
  'v34': [
    '<strong>端末を呼ぶ</strong> — 他の各端末には Ring ボタンがあり、着信音とバイブレーションで自分の端末を見つけられます。',
    '<strong>ノートを送る</strong> — 接続中の各端末にテキストを共有します。すぐに表示され、その端末のクリップボードにコピーされます。',
    '<strong>バッテリー監視</strong> — 接続中の端末の残量が 20% を切ると通知されます。',
    '<strong>端末の名前を変更</strong> — 端末名をタップすると独自の名前を付けられます。',
    '<strong>スキャンして参加</strong> — ホストがルームコードの QR を表示できます。カメラで読み取るか、オフライン同期コードをスキャンします。',
    '<strong>保護されたルーム</strong> — 「このルームを保護する」を有効にしてパスフレーズを設定すると、ルームのデータはすべて暗号化され、パスフレーズを知るメンバーだけが読み取れます。',
    '<strong>最終閲覧</strong> — 各端末がオンライン多久多久かを示すようになりました。'
  ],
  'v33': ['接続中の端末は充電中も含めて<strong>バッテリー残量</strong>を共有し、ルーム内でリアルタイムに更新されます。'],
  'v32': ['ライブルームでランダムな名前ではなく、各端末の実際の名前 (「Mi 9T Pro」など) が表示されるようになりました。'],
  'v31': ['ライブルームで接続中の各端末が名前で並び、この端末には緑のドットと合計数が付きます。'],
  'v30': [
    '<strong>ライブルーム</strong> — カスタム設定とショートカットをリアルタイムで同期するには:<ol><li>設定のある端末で<strong>設定 &rarr; ライブルーム</strong>を開き、<strong>ルームを開始</strong>をタップします。AK-XXX-YYY のようなルームコードが表示されます。</li><li>そのコードを自分の他の端末に送ります (コピーするか、都合のよい方法で共有してください)。</li><li>受け取る各端末で<strong>設定 &rarr; ライブルーム</strong>を開き、同じコードを入力して<strong>ルームに参加</strong>をタップします。</li></ol>',
    '<strong>オフライン同期コード</strong> — インターネットがないときの 1 回限りの転送で使うには:<ol><li><strong>設定 &rarr; オフライン同期コード</strong>を開き、<strong>コードを作成</strong>をタップします。コードをコピーするか、表示される QR コードをスキャンします。</li><li>もう一方の端末で<strong>設定 &rarr; オフライン同期コード</strong>を開き、コードを貼り付けて<strong>コードを適用</strong>をタップします。</li></ol>'
  ],
  'v29': ['修正: <strong>モバイル</strong>でバージョンバッジをタップすると、ランダムな跳ね上がり、回転、圧縮のアニメーションが毎回発動するようになりました。タッチ端末向けのリセットで止まらないようにしたためです。'],
  'v28': ['モバイル: カスタマイズ横の設定タブは<strong>情報</strong>のみになりました (ガイドはデスクトップにのみ存在します)。タップすると自動的に情報セクションが開きます。'],
  'v27': ['修正: <strong>新しいバージョン</strong>の直後にページを開いて、数秒後に更新が反映されるのではなく、更新がバックグラウンドで適用されるようになりました。「更新」ボタンと「更新前に確認する」オプションは従来どおり必要なときに再読み込みします。'],
  'v26.9': ['楽しい機能: <strong>バージョンバッジ</strong>をタップするたびにランダムな跳ね上がり、回転、圧縮のアニメーションが発動し、新しいバージョンが強調されると<strong>きらめき</strong>が走ります。また情報セクションはすぐ開くように設定の<strong>情報タブ</strong>へ移動しました。'],
  'v26.8': ['改善: 情報セクションの<strong>バージョンバッジ</strong>が自動的に更新されるようになり、新着情報を開くようになりました。'],
  'v26.7': ['改善: その日のヒントの<strong>アプリのショートカット</strong>は、どのアプリのショートカットかを先に示すようになりました (例: <em>Figma &mdash; Move Tool &mdash; V</em>)。'],
  'v26.6': ['改善: <strong>その日のヒント</strong>はプラットフォームタブを切り替えると更新されます。Windows、macOS、Linux、ChromeOS、Apps を選ぶと、そのセクションのショートカットが表示されます。'],
  'v26.5': ['修正: <strong>その日のヒント</strong>が 1 つのショートカットに固定されたままになりません。ページを開くたびに、表示中のプラットフォームタブから新しいランダムなショートカットを表示します。'],
  'v26.4': ['修正: <strong>その日のヒント</strong>は表示中のプラットフォームタブのショートカットだけを表示します (以前は全プラットフォームのショートカットが混在していました)。ガイド内のバージョンバッジも自動的に更新されます。'],
  'v26.3': ['<strong>ツアー</strong>ボタンのアイコンが開いた本になりました。'],
  'v26.2': ['<strong>ツアー</strong>ボタンのアイコンが方位計になり、ツアーには<strong>更新ボタン</strong>の働きを説明するステップが加わりました。'],
  'v26.1': ['修正: <strong>ダーク &harr; ライト</strong>を切り替えても (上部のスイッチまたは設定から)、<strong>背景テーマ</strong>の色が抜けることがなくなりました。アクセント、バーのボタン、ショートカットキーは背景テーマの色を保ちます。'],
  'v26': ['新しい<strong>サイトツアー</strong> — 上部の<strong>?</strong>をタップすると、検索バー、フィルター、タブ、ショートカット一覧、クイズ、設定、印刷、テーマ切り替えを順番に案内します。ボタン、矢印、ドットで進められます。'],
  'v25': ['情報セクションから<strong>GitHub で見る</strong>リンクを削除しました。'],
  'v24.8': ['修正: モバイルの<strong>「更新しました」</strong>通知が画面内に収まるようになりました (従来は小さな端末で右端からはみ出していました)。'],
  'v24.7.4': ['角の丸みをすべてのテーマで<strong>16&thinsp;px</strong>に制限しました。ピル、タブ、検索バー、通知が丸くなりすぎなくなっています (従来は最大 100&thinsp;px)。角は引き続き柔らかく、控えめになりました。'],
  'v24.7.3': ['修正: <strong>Android</strong>で<strong>Wi-Fi 設定を開く</strong>を押しても何も起きませんでした。新しい Chrome では、サイトが Android のシステム設定を開けないためです。ボタンが短い案内を表示し、端末の「設定」アプリから Wi-Fi 設定を開くように促すようになりました (iOS と macOS では引き続き直接開きます)。'],
  'v24.7.2': ['修正: インストール済みの Android アプリ (PWA) で<strong>Wi-Fi 設定を開く</strong>を押しても何も起きませんでした。Android はアプリが直接システム設定を開くことを禁じているためです。ボタンが理由を説明し、Chrome のタブでサイトを開くよう案内します。そちらならボタンが動作します。'],
  'v24.7.1': ['修正: <strong>Android</strong>の<strong>Wi-Fi 設定を開く</strong>は JavaScript で起動するリンクのクリックを使っており、Chrome は <code>intent:</code> リンクをブロックします。ユーザーのタップによる操作で遷移するようにしました。'],
  'v24.7': [
    '<strong>接続状態</strong>は<strong>設定 &rarr; 一般</strong>の最上位に移動しました (情報から移動)。',
    '<strong>Wi-Fi 設定を開く</strong>ボタンは<strong>iOS</strong> (設定アプリ) と<strong>macOS</strong> (システム設定) で実際の Wi-Fi 設定を開くようになりました。Android、Windows、Linux では、ブラウザーがシステム設定にジャンプできないため、短い案内を表示します。'
  ],
  'v24.6': [
    '<strong>オフライン</strong>ピルは約 <strong>10 秒</strong>表示してから消えるようになりました (接続が切れたままでも邪魔になりません)。',
    '設定 &rarr; 情報には<strong>接続状態</strong> (オンライン/オフライン) が常時表示され、<strong>Wi-Fi 設定</strong>を開くボタンが付きます。Android、Windows、Linux では短い案内を表示します。'
  ],
  'v24.5.2': ['修正: Windows がブラウザーの offline イベントを発生させずに接続を失う (またはリクエストが失敗せずに保留になる) デスクトップでは、接続の確認がタイムアウトしたときにも<strong>オフライン</strong>ピルが表示されるようになりました。リクエストが完全に失敗した場合だけではありません。'],
  'v24.5.1': ['修正: ブラウザーのイベントを伴わずに接続が切断された場合 (DevTools の「オフライン」など、一部のモバイルブラウザー) にも<strong>オフライン</strong>ピルが表示されるようになりました。数秒ごとに接続を能動的に確認します。オンラインの間は非表示のままです。'],
  'v24.5': [
    '検索中は、検索語と一致する単語が結果で<strong>ハイライト</strong>されるようになりました。どの行が一致したのかが分かりやすくなります。',
    '検索欄に<strong>消去ボタン (&times;)</strong>が表示されるようになりました。何か入力すると現れます。',
    '接続が切れると小さな<strong>オフライン</strong>ピルが表示されます。タップすると Anthkeys がキャッシュから動き続けることを確認できます。'
  ],
  'v24.4.1': ['モバイルの修正: <strong>操作 &mdash; ショートカット</strong>の見出しが画面外へ滑り出ていました。狭い画面ではショートカットの表が独自の横スクロール領域に変換され、固定の見出しが崩れていました。デスクトップと同じように、先頭に固定されます。'],
  'v24.4': ['ホーム画面の<strong>クイズ連続記録ウィジェット</strong>を削除しました。ブラウザーがまだ実装していない Web 標準に依存しており、どこにも表示されていなかったためです。連続記録と統計はアプリ内に残ります。'],
  'v24.3': [
    '<strong>ショートカットクイズが統計を記録</strong>するようになりました。連続日数 (🔥 クイズを完了した日)、最高スコア、正解率、プレイした回数を表示します。端末にのみ保存され、送信されません。',
    'Android 向けのホーム画面<strong>クイズ連続記録ウィジェット</strong>を追加しました (Web App Widgets: 試験的。Chrome と Firefox に順次提供、iOS では利用できません)。連続記録と統計を表示し、タップでクイズを開けます。'
  ],
  'v24.2.1': ['モバイルの修正: 検索バーをタップすると情報ページが開くことがありました。設定ボタンの近くにある非表示の「新着情報」通知がまだクリック可能で、検索欄に重なっていました。表示されている間だけ反応するようになりました。'],
  'v24.2': [
    '新しい<strong>装飾キーのフィルター</strong>: フィルターのメニューでキー (Ctrl、Shift、Alt、Win、Cmd など) を選ぶと、それを使うショートカットだけを表示します。選択肢はプラットフォームごとに変わります。',
    'スクロール中に<strong>先頭へ戻るボタン</strong>がショートカット一覧の上に浮きます。タップですぐに先頭へ戻れます。'
  ],
  'v24.1': ['<strong>操作 &mdash; ショートカット</strong>の見出しは、スクロール中も一覧の先頭に固定されます。モバイルと Safari では、これまでは画面外へ消えていました。'],
  'v23.9': ['モバイルのガイドとヒントのポップアップを削除しました。デスクトップのショートカットしか掲載されていないためです。ガイドはデスクトップの設定に残り、<kbd>?</kbd> で直接開けます。'],
  'v23.8': ['モバイルではガイドを設定から削除し、ページの表示を軽くするため隠したままにしました。<kbd>?</kbd> でポップアップとして開けます。'],
  'v23.7': ['ガイドとヒントをデスクトップの<strong>設定</strong> (一般セクション) に移動しました。<kbd>?</kbd> で直接移動できます。'],
  'v23.6': [
    '20 言語すべてが完全に翻訳されました。クイズ、クラウド同期、ガイドなど新しい機能で英語にフォールバックすることがなくなりました。',
    'モバイルではタップではなく長押しでコピーします。スクロール中の意図しないコピーがなくなりました。',
    'フィルターのピルはモバイルでもデスクトップと同様にアクセントカラーを使い、Favorites ではそれを強調して表示します。',
    'モバイルの上部バーにある 5 つのボタンの枠線を削除しました。ページに一体化されました。',
    'クイズボタンのアイコンを稲妻に変更し、解答には生のキー名ではなく読みやすい名前を表示します。',
    '修正: アップデート後にアプリの JavaScript が読み込まれず、ページが操作できなくなることがありました。'
  ],
  'v23.5': [
    'フィルター、お気に入り、比較、折りたたみの操作を 1 つのコンパクトな<strong>フィルター</strong>メニューにまとめ、モバイルでショートカット一覧に多くの場所を取れるようにしました。',
    '新着情報ページ、バージョン表示、更新設定は、設定内の新しい<strong>情報</strong>セクションに移動しました。',
    '更新通知は<strong>設定</strong>ボタンから表示されます。新着情報を見るまで歯車のアイコンにバッジが表示されます。'
  ],
  'v23.4': ['上部バーのヘルプボタン <kbd>?</kbd> を削除しました。<kbd>?</kbd> を押せばガイドを開けます。'],
  'v23.3': [
    '自動アップデート後にバージョンバッジが点灯し、次回起動時に新しいバージョンに気づけるようになりました。',
    '既定の背景を切り替えてもダークモードが維持され、新しい背景も暗く表示されます。',
    'モバイルでプラットフォームのバー (Windows、macOS、Linux、ChromeOS) がデスクトップと同じ見た目になりました。'
  ],
  'v23.2': [
    '詳細/基本の切り替えを削除しました。すべてのショートカットをまとめて表示します。',
    'モバイルで上部バーのボタンが 2&times;3 のきちんと整ったグリッドになりました。',
    '既定の背景は引き続き適用され、ダークモードに切り替えると正しく暗く表示されます。',
    'オーバーレイ (設定、ガイド、クイズ) がモバイルの固定タブを覆うようになりました。'
  ],
  'v23.1': ['背景がダークモード向けに最適化されました。ダークに切り替えると、アップロードした画像も既定の背景 (海、森林、夕焼けなど) も暗くされ、彩度を落としてパネルが読みやすくなります。'],
  'v23': [
    '新しい「比較」モード: 2 つ目のプラットフォームを選び、異なるショートカットだけを確認できます。',
    '時刻 (19 時から 7 時はダーク) に従って切り替わる自動テーマ。',
    '<kbd>?</kbd> を押すか <kbd>?</kbd> ボタンをタップして、クイックガイドとヒントを確認できます。',
    'このページの各項目にリリース日を追加しました。'
  ],
  'v22': [
    '修正: 狭いスマートフォンではキー一覧の表が切れていました。横にスクロールしてすべての列に届くようにしました。',
    '検索バーとカテゴリのピルは新着情報ページでは使わないため非表示にしています。'
  ],
  'v21': [
    'キー一覧に閉じるボタンを追加し、パネル内から折りたためるようにしました。スイッチが画面外までスクロールしてしまうモバイルで便利です。',
    'タッチ端末でキー一覧ボタンのタップ反応を改善しました。'
  ],
  'v20.1': [
    'バージョン番号がパッチリリースに対応しました。フッターのバッジは v20.1 などを表示し、更新の検出も正しく扱います。',
    'このページに v20 の項目を追加しました。'
  ],
  'v20': ['Anthkeys に新しい「新着情報」ページを追加しました。更新通知のリンクとフッターのバージョンバッジが、GitHub ではなくここを開きます。'],
  'v19': ['更新バナーは、前のバージョンがバージョン記録より前の場合にも表示されるようになりました (前のバージョンはオフラインキャッシュから検出されます)。'],
  'v18': [
    '自動更新のモードで新しいバージョンが届くと「vX に更新しました &mdash; 新着情報」という通知が表示されます。',
    '更新バナーはサービスワーカーの変更だけでなく、コンテンツの更新でも表示されるようになりました。',
    'フッターのバージョンバッジをクリックして新着情報を確認できます。',
    'オフラインキャッシュを小さくしました (古いバージョンなしのファイルを捨てる処理をやめました)。'
  ],
  'v16': ['フッターに現在のビルド番号を表示するバージョンバッジを追加しました。'],
  'v15': ['サービスワーカーに基づく更新ボタンと設定 (自動更新、更新前に確認) を追加しました。'],
  'v14': ['カテゴリの折りたたみと展開が、現在の検索条件を反映するようにしました。'],
  'v13': ['ネットワーク優先のページキャッシュにしたため、更新が即座に反映されるようになり、デスクトップでのスクロールが滑らかになりました。'],
  'v12': ['検索とフィルターは現在開いているタブに限定されます。'],
  'v11': ['PWA のインストール支援、アクセシビリティ用のラベル、視差効果を減らす設定、Gmail と YouTube のショートカット、SEO の改善。'],
  'v10': [
    '修正: カテゴリのフィルターがカテゴリの見出し行に一致すると、すべてのショートカットを非表示にすることがありました。選んだ行だけを非表示にするようになりました。',
    'モバイルで背景が画面全体に広がります。'
  ],
  'v9': ['Windows が既定のプラットフォームタブになり、タブの並びも分かりやすくなりました。'],
  'v8': [
    'クイズの難易度と、その日のヒントを追加しました。',
    'オフラインキャッシュに加えて、モバイルのスクロールが大幅に滑らかになりました。',
    '検索とフィルターが全プラットフォームで同時に使えるようになり、OS 名を太字で表示します。'
  ],
  'v7': ['デザインスタイルを廃止し、Material 3 のみに統一しました。'],
  'v6': [
    'デザインスタイルを Material 3 に整理し、既定のテーマに戻す「背景を削除」ボタンも追加しました。',
    '更新を早く反映するため、cache-control ヘッダーを追加しました。'
  ],
  'v5': ['ページタイトルを 14 言語すべてで「ショートカット」のみに簡略化しました。'],
  'v4': [
    'ショートカットクイズモード: ショートカットや操作を当てて練習し、GitHub Gist によるクラウド同期にも対応します。',
    'アクセントのスウォッチ、テーマ切り替え、モバイルの背景について多数の修正を行いました。'
  ],
  'v3': ['保存して再利用できるアクセントのプリセットと、更新が確実に反映されるためのキャッシュの無効化を追加しました。'],
  'v2': ['ライトとダークのテーマ、アセントカラー、ショートカット一覧の翻訳を追加しました。'],
  'v1': ['Anthkeys の最初のバージョンです。Windows、macOS、Linux、ChromeOS の日常的なキーボードショートカットを 1 ページにまとめました。']
};

I18N_WN.ru = {
  'v52.1': [
    'Новое: страница «Что нового» теперь полностью переведена на все 20 языков — каждая запись о выпуске показывается на вашем языке.'
  ],
  'v52': [
    'Исправление: v51 могла мешать загрузке приложения; в датском переводе была неэкранированная апостроф, из-за чего весь файл языка становился недействительным. Теперь файл разбирается корректно, и все 20 языков снова загружаются.'
  ],
  'v51': [
    'Переводы завершены для всех 20 языков — настройки, живые комнаты, офлайн-синхронизация и руководство по синхронизации теперь полностью переведены (недавние пункты были только на английском).',
    'Новое: если Anthkeys кажется медленным, баннер предлагает включить режим производительности одним нажатием. Закройте его, и он больше не появится.'
  ],
  'v50.7': ['Режим производительности перенесён на вкладку «Общие» в настройках.'],
  'v50.6': ['Значки в верхней панели снова стали цветными эмодзи, как в v50: книга, принтер, молния, луна/солнце, обновление и шестерёнка.'],
  'v50.5': ['Значки в верхней панели снова используют акцентный цвет (по умолчанию), а не выглядят белыми или серыми.'],
  'v50.4': ['Функция окрашивания значка в акцентный цвет удалена: фавикон, значок домашнего экрана и значок установленного PWA снова используют значок по умолчанию (окрашивать значок в акцентный цвет имеет смысл только для нативных приложений).'],
  'v50.3': [
    'Значки в верхней панели переработаны так, чтобы надёжно отображаться на всех устройствах (обзор, печать, викторина, тема, обновление и настройки теперь используют настоящие значки).',
    'Значок переключателя темы снова настоящий и соответствует светлому или тёмному состоянию.'
  ],
  'v50.2': ['Исправлена ошибка из v50.1: значки верхней панели и настройки не работали при запуске.'],
  'v50.1': [
    'Новый режим производительности в разделе «Настройка»: отключает размытие и анимацию, из-за которых приложение может работать медленно на Windows.',
    'Верхняя панель теперь использует настоящие значки, а новая настройка «Значки» окрашивает их в ваш акцентный цвет.',
    'Вкладка «Приложения» работает как вкладка Linux: щёлкните в любом месте, чтобы выбрать приложение (VS Code, Figma, Gmail и другие), и на вкладке будет показано ваш выбор, например «Приложения — Gmail».',
    'Поле для шестнадцатеричного кода под кнопкой «Настроить» удалено: цвета выбираются только ползунками.',
    'Варианты акцента с градиентом продублированы, добавлено восемь новых двухцветных сочетаний.'
  ],
  'v50': [
    'Щёлкните в любом месте на вкладке Linux, чтобы открыть список дистрибутивов; теперь на вкладке показан ваш выбор, например «Linux — Ubuntu (GNOME)».',
    'Пользовательский выбор цвета переработан: круглый образец открывает ползунки оттенка, насыщенности и светлоты (значение показано над каждым из них) и начинается с текущего цвета, а не с 0/0/0.',
    'Новый раздел «Градиентные акценты»: восемь двухцветных градиентов, готовых к применению как акцентный цвет.',
    'Пресеты акцента доведены до более чистой и выразительной палитры.'
  ],
  'v40.9': ['Список дистрибутивов теперь находится прямо на вкладке Linux: щёлкните маленькой стрелкой на вкладке, чтобы выбрать свой дистрибутив.'],
  'v40.8': ['На вкладке Linux теперь есть список дистрибутивов (Ubuntu, Debian, Fedora, Arch, Mint, KDE и другие): системные сочетания клавиш подстраиваются под настройки каждого дистрибутива, и ваш выбор запоминается.'],
  'v40.7': ['В настройках акцента теперь есть живая полоса предпросмотра с точным шестнадцатеричным кодом применённого цвета, чтобы видеть каждое изменение сразу.'],
  'v40.6': [
    'Удалена функция «Взять цвет с экрана».',
    'Пресеты акцента настроены на полную насыщенность в духе Material 3 Expressive: глубокие и яркие цвета, по-настоящему неоновые (серые остаются приглушёнными).'
  ],
  'v40.5': ['Палитра акцента перебалансирована в стиле Material 3 Expressive: более живые тональные цвета.'],
  'v40.4': ['«Совпадает с моим устройством» теперь читает настоящий системный цвет (включая вывод oklch/color() в Chrome) и также определяет цвет выделения текста в системе, поэтому применяется ваш реальный динамический акцентный цвет.'],
  'v40.3': [
    'Все акцентные цвета перебалансированы под тональный стиль Material You (сдержанные средние тона и мягкие контейнерные тона).',
    '«Совпадает с моим устройством» теперь также читает системный цвет выделения как запасной вариант, поэтому работает в большем числе браузеров и профилей.'
  ],
  'v40.2': ['Настройки акцентного цвета: новая кнопка «Совпадает с моим устройством» читает системный акцентный цвет (Chrome 150+, установленное приложение) и применяет его с подтверждением.'],
  'v40.1': ['Удалена галерея обоев (сохранённые в галерее фоны удаляются; загруженный вами фон продолжает работать).'],
  'v40.0': ['Выбор акцентного цвета: у пользовательского цвета теперь есть поле для шестнадцатеричного кода (введите любой цвет, 3 или 6 знаков) и кнопка «Копировать» — одинаковая разметка на компьютере и на телефоне.'],
  'v39.9': ['Чат в комнате: заметки комнаты теперь появляются в панели «Чат» с историей (для каждой комнаты хранится 60 сообщений и восстанавливается при возврате). Публичные заметки попадают в журнал, а приватные по-прежнему копируются прямо в буфер обмена. Коснитесь сообщения, чтобы скопировать его.'],
  'v39.8': [
    'Недавние комнаты: последние шесть комнат, в которых вы участвовали, показаны на главном экране цветными кнопками в одно касание, плюс кнопка очистки.',
    'Отправить мой профиль: отправляет ваши настройки и пользовательские сочетания клавиш всей комнате как одноразовый снимок; другие устройства применяют его сразу.',
    'Галерея обоев: шесть встроенных градиентов с автоматическими светлыми и тёмными вариантами, кнопка «Случайный» и необязательная ежедневная подборка.',
    'Поиск: скопированные сочетания запоминаются как «Недавно скопированные» в меню поиска вместе с историей запросов.'
  ],
  'v39.7': ['Анимация на мобильных теперь использует те же базовые стили, что и на компьютере: правило для сенсорных устройств больше не отключает переходы глобально. Прожектор обзора и вкладки плавно переключаются между шагами, а смена темы и фона проходит с затемнением, в том числе на телефонах.'],
  'v39.6': ['Мобильные версии догнали компьютерные: смена темы и фона стала плавной, и обзор сайта анимируется между шагами даже на сенсорных устройствах.'],
  'v39.5': ['AirDrop и Quick Share: кнопка «Поделиться» рядом с кодом комнаты открывает системный лист «Поделиться» на телефоне (AirDrop на устройствах Apple) с одноразовой ссылкой для входа: на втором устройстве достаточно коснуться её, чтобы войти в комнату.'],
  'v39.4': ['Свечение и мерцание таблетки версии теперь анимируются на компьютере, даже если в системе включено «уменьшение движения» или анимация выключена в настройках: это воспринимается как сигнал об обновлении, а не как украшение.'],
  'v39.3': ['Свечение таблетки версии и значок в настройках теперь надёжно отображаются на компьютере: текущая версия при запуске всегда получает новое окно подсветки на несколько дней, даже если уведомление об обновлении было пропущено.'],
  'v39.2': ['Свечение новой версии на таблетке больше не исчезает навсегда после одного взгляда: подсветка держится несколько дней и возвращается при каждом посещении.'],
  'v39.1': ['Цветные точки наконец видны: образцы (цвет комнаты, образцы темы и акцента) теперь рисуются как заметные круги, а не как пустые невидимые элементы.'],
  'v39': [
    'Ring теперь позволяет приложить к звонку короткое сообщение: звонящее устройство услышит его и скопирует в буфер обмена.',
    'Оповещения о батарее: вы получаете уведомление «восстановлено», когда устройство снова поднялось выше 25 процентов, и можете включать или выключать сигнал о батарее.',
    'Заметки можно отправлять на одно устройство с помощью списка «Кому» рядом с полем заметки.',
    'У каждой комнаты можно задать цветную метку, чтобы мгновенно различать комнаты.',
    'Коды офлайн-синхронизации теперь показывают предпросмотр (устройство, время, количество настроек и сочетаний) и запрашивают подтверждение перед импортом.'
  ],
  'v38.1': ['На мобильном при касании вкладки «Сведения» разделы больше не раскрываются автоматически: коснитесь заголовка раздела, чтобы открыть его.'],
  'v38': ['На мобильном при открытии вкладки «Сведения» инструкции по синхронизации больше не раскрываются автоматически: коснитесь раздела «Живые комнаты и офлайн-синхронизация», чтобы открыть его.'],
  'v37': ['Руководство теперь включает полные инструкции по <strong>живым комнатам</strong> и <strong>кодам офлайн-синхронизации</strong> и доступно также на мобильных устройствах.'],
  'v36': ['Кнопка в области входа теперь называется <strong>Сканировать</strong> (открывает камеру или выбор файла, чтобы прочитать QR-код), чтобы её не путали с кнопкой <strong>QR-код</strong>, которая показывает код комнаты.'],
  'v35': ['Исправлено: QR-коды комнаты и офлайн-кода теперь отображаются правильно, а не пустым квадратом.'],
  'v34': [
    '<strong>Позвонить устройству</strong> — у каждого другого устройства есть кнопка Ring, которая заставляет его звонить и вибрировать, чтобы вы нашли свой телефон.',
    '<strong>Отправить заметку</strong> — поделитесь текстом с каждым подключённым устройством: он появляется сразу и копируется в его буфер обмена.',
    '<strong>Контроль заряда</strong> — вы получите уведомление, когда заряд подключённого устройства опускается ниже 20 процентов.',
    '<strong>Переименовать устройства</strong> — коснитесь имени устройства, чтобы задать своё.',
    '<strong>Присоединиться по сканированию</strong> — ведущий может показать QR-код комнаты; отсканируйте его камерой (или отсканируйте код офлайн-синхронизации).',
    '<strong>Защищённые комнаты</strong> — включите «Защитить эту комнату» и задайте парольную фразу: все данные комнаты шифруются, поэтому читать их могут только участники с этой парольной фразой.',
    '<strong>Активность</strong> — теперь каждое устройство показывает, как давно оно в сети.'
  ],
  'v33': ['Подключённые устройства теперь также передают <strong>уровень заряда</strong> (в том числе при зарядке), и в комнате он обновляется в реальном времени.'],
  'v32': ['В живых комнатах теперь показывается настоящее имя каждого устройства (например, «Mi 9T Pro»), а не случайное, придуманное самим устройством.'],
  'v31': ['В живых комнатах теперь каждое подключённое устройство показано по имени, у этого устройства зелёная точка, а также виден общий счёт.'],
  'v30': [
    '<strong>Живые комнаты</strong> — чтобы сначала синхронизировать настройки и пользовательские сочетания клавиш в реальном времени:<ol><li>На устройстве с вашими настройками откройте <strong>Настройки → Живые комнаты</strong> и коснитесь <strong>Начать комнату</strong>. Появится код комнаты вида AK-XXX-YYY.</li><li>Отправьте этот код другим своим устройствам (скопируйте или поделитесь как удобно).</li><li>На каждом принимающем устройстве откройте <strong>Настройки → Живые комнаты</strong>, введите тот же код и коснитесь <strong>Присоединиться к комнате</strong>.</li></ol>',
    '<strong>Коды офлайн-синхронизации</strong> — затем для разовой передачи, когда нет интернета:<ol><li>Откройте <strong>Настройки → Код офлайн-синхронизации</strong> и коснитесь <strong>Создать код</strong>. Скопируйте код или отсканируйте появившийся QR-код.</li><li>На другом устройстве откройте <strong>Настройки → Код офлайн-синхронизации</strong>, вставьте код и коснитесь <strong>Применить код</strong>.</li></ol>'
  ],
  'v29': ['Исправлено: на <strong>мобильном</strong> касание значка версии теперь запускает случайную анимацию подскока, вращения и сжатия, а не блокируется сбросом анимации для сенсорных устройств.'],
  'v28': ['Мобильные: вкладка настроек рядом с «Настройка» теперь называется только <strong>Сведения</strong> (руководство есть лишь на компьютере) и при касании сразу открывает раздел «Сведения».'],
  'v27': ['Исправлено: открытие страницы вскоре после <strong>новой версии</strong> больше не сбрасывает её неожиданной перезагрузкой через несколько секунд — обновление теперь применяется в фоне. Кнопка «Обновить» и параметр «Спрашивать перед обновлением» по-прежнему перезагружают страницу по запросу.'],
  'v26.9': ['Забавно: касание <strong>значка версии</strong> теперь каждый раз запускает случайную анимацию подскока, вращения и сжатия, при выделении новой версии он вспыхивает <strong>мерцанием</strong>, а раздел «Сведения» перенесён на вкладку <strong>Сведения</strong> в настройках, чтобы открыть его быстрее.'],
  'v26.8': ['Улучшено: <strong>значок версии</strong> в разделе «Сведения» теперь обновляется сам и открывает страницу «Что нового».'],
  'v26.7': ['Улучшено: <strong>сочетания клавиш приложений</strong> в подсказке дня теперь сначала показывают, к какому приложению они относятся, например <em>Figma — Move Tool — V</em>.'],
  'v26.6': ['Улучшено: <strong>подсказка дня</strong> обновляется при смене вкладки платформы: выбор Windows, macOS, Linux, ChromeOS или «Приложения» показывает сочетание клавиш из этого раздела.'],
  'v26.5': ['Исправлено: <strong>подсказка дня</strong> больше не застревает на одном сочетании клавиш: при каждой загрузке страницы показывается новое случайное сочетание из открытой вкладки платформы, а не одно и то же весь день.'],
  'v26.4': ['Исправлено: <strong>подсказка дня</strong> теперь показывает только сочетания клавиш открытой вкладки платформы (раньше смешивались сочетания всех платформ). Значок версии в руководстве тоже обновляется сам.'],
  'v26.3': ['Кнопка <strong>обзора</strong> теперь показывает значок <strong>открытой книги</strong>.'],
  'v26.2': ['Кнопка <strong>обзора</strong> теперь показывает значок компаса, а в обзор добавился шаг, объясняющий, что делает <strong>кнопка обновления</strong>.'],
  'v26.1': ['Исправлено: переключение между <strong>тёмной и светлой темой</strong> (через переключатель сверху или в настройках) больше не лишает <strong>тему обоев</strong> её цветов: акцент, кнопки панели и клавиши сочетаний сохраняют цвета темы, а обои остаются на месте.'],
  'v26': ['Новый <strong>обзор сайта</strong> — коснитесь кнопки <strong>?</strong> сверху, чтобы пройти ознакомительный тур по строке поиска, фильтрам, вкладкам, списку сочетаний, викторине, настройкам, печати и переключателю темы. Перемещайтесь кнопками, стрелками или точками.'],
  'v25': ['Удалена ссылка «Смотреть на GitHub» из раздела «Сведения».'],
  'v24.8': ['Исправлено: уведомление <strong>«Обновлено»</strong> на мобильных теперь остаётся на экране (раньше выходило за правый край на маленьких устройствах).'],
  'v24.7.4': ['Радиус углов теперь ограничен значением <strong>16&nbsp;пикселей</strong> во всех темах: таблетки, вкладки, строки поиска и уведомления больше не полностью круглые (раньше до 100&nbsp;пикселей). Углы остаются мягкими, но сдержанными.'],
  'v24.7.3': ['Исправлено: <strong>Открыть настройки Wi-Fi</strong> на <strong>Android</strong> ничего не делал: свежий Chrome не разрешает сайтам открывать системные настройки Android. Кнопка теперь показывает краткое пояснение с просьбой открыть настройки Wi-Fi через приложение «Настройки» устройства (на iOS и macOS она по-прежнему открывает их сразу).'],
  'v24.7.2': ['Исправлено: в установленном приложении Android (PWA) касание <strong>Открыть настройки Wi-Fi</strong> ничего не делало: Android запрещает приложениям открывать системные настройки напрямую. Теперь кнопка объясняет это и предлагает открыть сайт во вкладке Chrome, где кнопка работает.'],
  'v24.7.1': ['Исправлено: <strong>Открыть настройки Wi-Fi</strong> на <strong>Android</strong> использовал щелчок по ссылке, инициированный из JavaScript, который Chrome блокирует для ссылок <code>intent:</code>: теперь переход запускается жестом пользователя.'],
  'v24.7': [
    '<strong>Состояние подключения</strong> теперь находится вверху <strong>Настроек → Общие</strong> (перемещено из «Сведений»).',
    'Кнопка <strong>Открыть настройки Wi-Fi</strong> теперь открывает настоящие настройки Wi-Fi на <strong>iOS</strong> (приложение «Настройки») и <strong>macOS</strong> (Системные настройки). На Android, Windows и Linux, где браузеры не могут переходить в системные настройки, показываются краткие инструкции.'
  ],
  'v24.6': [
    'Таблетка <strong>«Не в сети»</strong> теперь остаётся <strong>10 секунд</strong>, а затем исчезает (не мешает, пока соединение действительно потеряно).',
    'Настройки → Сведения теперь всегда показывают <strong>состояние подключения</strong> (в сети или не в сети) и кнопку для открытия <strong>настроек Wi-Fi</strong>: на iOS она сразу открывает приложение «Настройки», на других устройствах показываются краткие инструкции.'
  ],
  'v24.5.2': ['Исправлено: на компьютерах, где Windows теряет соединение, не вызывая событие <em>offline</em> в браузере (или где запросы зависают вместо ошибки), таблетка <strong>«Не в сети»</strong> появляется и при истечении проверки подключения, а не только при полном сбое запроса.'],
  'v24.5.1': ['Исправлено: таблетка <strong>«Не в сети»</strong> появляется и тогда, когда соединение пропадает без события браузера (например, «Offline» в DevTools, некоторые мобильные браузеры): приложение само проверяет подключение каждые несколько секунд, а не полагается только на сигналы браузера. Пока вы в сети, таблетка скрыта.'],
  'v24.5': [
    'При поиске слова, совпадающие с запросом, теперь <strong>выделяются</strong> в результатах: проще понять, почему подходит каждая строка.',
    'В поле поиска теперь есть <strong>кнопка очистки (&times;)</strong>, которая появляется, как только вы что-то ввели.',
    'Небольшая таблетка <strong>«Не в сети»</strong> появляется при потере соединения: коснитесь её, чтобы убедиться, что Anthkeys продолжает работать из кеша.'
  ],
  'v24.4.1': ['Исправлено на мобильных: заголовок <strong>Действие — сочетание клавиш</strong> больше не уезжает: на узких экранах таблица сочетаний превращалась в отдельную горизонтальную прокрутку, что ломало закреплённый заголовок. Теперь он, как и на компьютере, закреплён сверху.'],
  'v24.4': ['Удалён <strong>виджет серии викторины на главном экране</strong>: он опирался на веб-стандарт, который браузеры ещё не поддерживают, поэтому виджет нигде не появлялся. Ваша серия и статистика викторины остаются в приложении.'],
  'v24.3': [
    '<strong>Викторина по сочетаниям клавиш теперь запоминает статистику</strong>: ежедневную серию (🔥 дней подряд, когда вы завершали викторину), лучший результат, точность и сыгранные раунды. Всё хранится локально и никуда не отправляется.',
    'Новый <strong>виджет серии викторины на главном экране</strong> для Android (веб-виджеты: экспериментальная функция, появляется в Chrome и Firefox; недоступно на iOS). Показывает серию и статистику; коснитесь, чтобы открыть викторину.'
  ],
  'v24.2.1': ['Исправлено на мобильных: касание строки поиска могло открыть страницу «Сведения»: скрытое уведомление «Что нового» рядом с кнопкой настроек оставалось нажимаемым и перекрывало поле поиска. Теперь оно реагирует только пока видимо.'],
  'v24.2': [
    'Новый <strong>фильтр клавиш-модификаторов</strong>: в меню фильтров выберите клавишу (Ctrl, Shift, Alt, Win, Cmd и другие), чтобы показать только сочетания, которые её используют. Набор вариантов зависит от платформы.',
    'Кнопка <strong>наверх</strong> всплывает над списком сочетаний при прокрутке: коснитесь её, чтобы сразу вернуться к началу.'
  ],
  'v24.1': ['Панель <strong>Действие — сочетание клавиш</strong> теперь остаётся закреплённой вверху списка при прокрутке: на мобильных и в Safari раньше она уходила за экран.'],
  'v23.9': ['Удалено всплывающее окно руководства и подсказок на мобильных: там перечислялись только сочетания для компьютера. Руководство осталось в настройках на компьютере, где <kbd>?</kbd> открывает его сразу.'],
  'v23.8': ['На мобильных руководство больше не находится в настройках: оно спрятано там, чтобы не утяжелять страницу. Нажмите <kbd>?</kbd>, чтобы открыть его во всплывающем окне.'],
  'v23.7': ['Руководство и подсказки перенесены в <strong>Настройки</strong> (раздел «Общие») на компьютере: нажмите <kbd>?</kbd>, чтобы перейти сразу.'],
  'v23.6': [
    'Все 20 языков теперь полностью переведены: больше нет перехода на английский для новых функций, таких как викторина, облачная синхронизация и руководство.',
    'На мобильных сочетание клавиш копируется долгим нажатием, а не касанием: больше никаких случайных копий при прокрутке.',
    'Таблетки фильтров используют ваш акцентный цвет и на мобильных, как на компьютере; при выборе «Избранное» выделяется только оно.',
    'Убрана рамка вокруг пяти кнопок в верхней панели на мобильных: теперь они сливаются со страницей.',
    'У кнопки викторины новый значок молнии, а ответы показывают понятные названия вместо сырых клавиш.',
    'Исправлено: после обновления скрипт приложения иногда не загружался, из-за чего сайт переставал реагировать.'
  ],
  'v23.5': [
    'Фильтры, избранное, сравнение и свёртывание собраны в одно компактное меню <strong>Фильтры</strong>: на мобильных остаётся больше места для списка сочетаний.',
    'Страница «Что нового», значок версии и настройки обновлений перенесены в новый раздел <strong>Сведения</strong> в настройках.',
    'Уведомления об обновлениях теперь приходят через кнопку <strong>Настроек</strong>: на значке шестерёнки есть метка, пока вы не посмотрели новости.'
  ],
  'v23.4': ['Кнопка справки <kbd>?</kbd> убрана из верхней панели: нажмите <kbd>?</kbd>, чтобы всё равно открыть руководство.'],
  'v23.3': [
    'Значок версии загорается после автоматического обновления, чтобы вы заметили новую версию при следующем запуске.',
    'Переключение между стандартными обоями сохраняет тёмный режим: новые обои тоже затемняются.',
    'На мобильных панель платформ (Windows, macOS, Linux, ChromeOS) выглядит так же, как на компьютере.'
  ],
  'v23.2': [
    'Переключатель «Дополнительно и обычно» удалён: все сочетания показываются вместе.',
    'На мобильных кнопки верхней панели выстроены в аккуратную сетку 2 на 3.',
    'Стандартные обои по-прежнему применяются и корректно затемняются при переходе в тёмный режим.',
    'Наложения (настройки, руководство, викторина) теперь перекрывают закреплённые вкладки на мобильных.'
  ],
  'v23.1': ['Обои оптимизированы для тёмного режима: при переходе в тёмную тему и загруженные изображения, и стандартные фоны (океан, лес, закат и другие) затемняются и становятся менее насыщенными, чтобы панели оставались читаемыми.'],
  'v23': [
    'Новый режим «Сравнить»: выберите вторую платформу, чтобы увидеть только те сочетания, которые отличаются.',
    'Автоматическая тема по времени суток (с 19 до 7 часов тёмная).',
    'Нажмите <kbd>?</kbd> или коснитесь кнопки <kbd>?</kbd>, чтобы открыть краткое руководство и подсказки.',
    'К каждой записи на этой странице добавлены даты выпусков.'
  ],
  'v22': [
    'Исправлено: таблица подсказок по клавишам обрезалась на узких телефонах: теперь она прокручивается по горизонтали, чтобы были доступны все столбцы.',
    'Строка поиска и таблетки категорий скрыты на странице «Что нового», потому что там они не нужны.'
  ],
  'v21': [
    'У таблицы подсказок по клавишам теперь есть кнопка закрытия, чтобы свернуть её прямо из панели: удобно на мобильных, где переключатель может уйти за экран.',
    'Более отзывчивое касание у кнопки подсказок по клавишам на сенсорных устройствах.'
  ],
  'v20.1': [
    'Номера версий теперь поддерживают патчи: значок в подвале показывает, например, v20.1, и определение обновлений корректно их обрабатывает.',
    'В эту страницу добавлена отсутствовавшая запись v20.'
  ],
  'v20': ['Новая страница «Что нового» внутри Anthkeys: ссылка в уведомлении об обновлении и значок версии в подвале открывают её здесь, а не на GitHub.'],
  'v19': ['Баннер обновления теперь появляется и при переходе с версии, которая предшествует отслеживанию версий (предыдущая версия определяется из офлайн-кеша).'],
  'v18': [
    'При автоматическом обновлении появляется уведомление «Обновлено до версии X — что нового».',
    'Баннер обновления теперь вызывается обновлениями содержимого, а не только изменениями сервис-воркера.',
    'Значок версии в подвале стал нажимаемым: коснитесь его, чтобы увидеть новости.',
    'Офлайн-кеш стал компактнее (больше не выбрасываются файлы без версии).'
  ],
  'v16': ['В подвал добавлен значок версии, показывающий текущий номер сборки.'],
  'v15': ['Добавлены кнопка обновления и настройка (обновляться автоматически или спрашивать), основанные на сервис-воркере.'],
  'v14': ['Сворачивание и разворачивание категории теперь учитывает текущий поисковый запрос.'],
  'v13': ['Кеш страниц с приоритетом сети, поэтому обновления появляются сразу; прокрутка на компьютере стала намного плавнее.'],
  'v12': ['Поиск и фильтры теперь применяются только к открытой вкладке.'],
  'v11': ['Поддержка установки PWA, подписи для доступности, режим уменьшенного движения, сочетания клавиш для Gmail и YouTube, улучшения поисковой оптимизации.'],
  'v10': [
    'Исправлено: фильтр категорий мог скрыть все сочетания клавиш, если совпадал со строкой заголовка категории: теперь он скрывает только отфильтрованные строки.',
    'На мобильных обои теперь заполняют весь экран.'
  ],
  'v9': ['Windows теперь вкладка платформы по умолчанию, а порядок вкладок стал понятнее.'],
  'v8': [
    'Уровни сложности викторины и подсказка дня.',
    'Гораздо более плавная прокрутка на мобильных, а также офлайн-кеш.',
    'Поиск и фильтры работают одновременно на всех платформах, названия систем выделены жирным.'
  ],
  'v7': ['Стили оформления удалены: теперь используется только Material 3.'],
  'v6': [
    'Стили оформления сведены к Material 3, добавлена кнопка «Убрать обои», чтобы вернуться к стандартной теме.',
    'Добавлены заголовки кеширования, чтобы обновления приходили быстрее.'
  ],
  'v5': ['Заголовки страниц упрощены до одних «Сочетаний клавиш» на всех 14 языках.'],
  'v4': [
    'Режим викторины по сочетаниям клавиш: тренируйтесь, угадывая сочетание или действие, плюс облачная синхронизация через GitHub Gist.',
    'Большая серия исправлений для образцов акцента, смены темы и мобильных обоев.'
  ],
  'v3': ['Добавлены пресеты акцентного цвета, которые можно сохранять и использовать повторно, а также сброс кеша, чтобы обновления появлялись надёжно.'],
  'v2': ['Светлая и тёмная темы с акцентными цветами, а также переводы справочника сочетаний клавиш.'],
  'v1': ['Первая версия Anthkeys: все повседневные сочетания клавиш для Windows, macOS, Linux и ChromeOS на одной странице.']
};

I18N_WN.ko = {
  'v52.1': [
    '새로운 기능: &laquo;새 소식&raquo; 페이지가 20개 언어 모두에서 완전 번역되었습니다. 모든 릴리스 노트가 사용자의 언어로 표시됩니다.'
  ],
  'v52': [
    '수정: v51에서는 앱이 로드되지 않을 수 있었습니다. 덴마크어 번역에 이스케이프되지 않은 아포스트로피가 있어 언어 파일 전체가 유효하지 않았습니다. 이제 파일이 올바르게 파싱되며 20개 언어 모두 다시 로드됩니다.'
  ],
  'v51': [
    '20개 언어의 번역을 모두 마쳤습니다. 설정, 라이브 룸, 오프라인 동기화, 동기화 가이드가 이제 완전 번역됩니다 (최근 항목은 영어만 지원했습니다).',
    '새로운 기능: Anthkeys가 느리게 느껴지면 배너에서 한 번의 탭으로 성능 모드를 켤 수 있습니다. 배너를 닫으면 다시 나타나지 않습니다.'
  ],
  'v50.7': ['성능 모드를 설정의 &laquo;일반&raquo; 탭으로 옮겼습니다.'],
  'v50.6': ['상단 바 아이콘이 v50과 같이 다시 컬러 이모지가 되었습니다. 책, 프린터, 번개, 달/해, 새로고침, 톱니바퀴.'],
  'v50.5': ['상단 바 아이콘이 다시 강조색 (기본값)을 사용하여 희거나 회색으로 보이지 않습니다.'],
  'v50.4': ['강조색 아이콘 tint 기능을 제거했습니다. 파비콘, 홈 화면 아이콘, 설치된 PWA 아이콘이 다시 기본 아이콘을 사용합니다 (아이콘을 강조색으로 칠하는 것은 네이티브 앱에서만 의미가 있습니다).'],
  'v50.3': [
    '상단 바 아이콘을 모든 기기에서 안정적으로 표시되도록 다시 만들었습니다 (둘러보기, 인쇄, 퀴즈, 테마, 새로고침, 설정이 모두 실제 아이콘을 사용합니다).',
    '테마 전환 아이콘이 다시 실제 아이콘이 되어 라이트/다크 상태와 일치합니다.'
  ],
  'v50.2': ['v50.1에서 상단 바 아이콘과 설정이 시작 직후 동작하지 않던 버그를 수정했습니다.'],
  'v50.1': [
    '사용자 설정에 새로운 성능 모드가 추가되었습니다. Windows에서 앱을 느리게 만들 수 있는 블러 효과와 애니메이션을 끕니다.',
    '상단 바가 실제 아이콘을 사용하며, 새로운 아이콘 설정으로 강조색으로 칠할 수 있습니다.',
    '앱 탭이 Linux 탭처럼 동작합니다. 원하는 곳을 클릭해 앱 (VS Code, Figma, Gmail 등)을 선택하면 탭에 선택 내용이 표시됩니다 (예: &laquo;앱 - Gmail&raquo;).',
    '사용자 설정 버튼 아래의 16진수 입력란을 제거했습니다. 색상은 슬라이더로만 고릅니다.',
    '그라디언트 강조색 옵션을 두 배로 늘리고 새로운 2색 조합 8개를 추가했습니다.'
  ],
  'v50': [
    'Linux 탭의 원하는 곳을 클릭하면 배포판 목록이 열리고, 탭에 선택 내용 (예: &laquo;Linux - Ubuntu (GNOME)&raquo;)이 표시됩니다.',
    '사용자 색상 선택기를 다시 만들었습니다. 둥근 견본을 누르면 색조, 채도, 밝기 슬라이더가 열리고 각 슬라이더 위에 값이 표시되며, 0/0/0이 아니라 현재 색에서 시작합니다.',
    '새로운 그라디언트 강조색 섹션: 강조색으로 바로 적용할 수 있는 2색 그라디언트 8개.',
    '강조색 프리셋을 더 깔끔하고 선명한 팔레트로 다듬었습니다.'
  ],
  'v40.9': ['배포판 목록이 이제 Linux 탭에 바로 있습니다. 탭의 작은 화살표를 눌러 배포판을 선택하세요.'],
  'v40.8': ['Linux 탭에 배포판 목록 (Ubuntu, Debian, Fedora, Arch, Mint, KDE 등)이 생겼습니다. 각 배포판의 기본 설정에 맞춰 시스템 단축키를 조정하고 선택을 기억합니다.'],
  'v40.7': ['강조색 설정에 적용된 색의 정확한 16진수 코드를 보여 주는 실시간 미리보기 바가 생겼습니다. 선택이 바뀔 때마다 바로 확인할 수 있습니다.'],
  'v40.6': [
    '&laquo;화면에서 가져오기&raquo; 기능 제거.',
    '강조색 프리셋을 Material 3 Expressive의 최대 채도로 조정했습니다. 깊고 선명한 실제 네온 색상이며 회색은 여전히 절제되어 있습니다.'
  ],
  'v40.5': ['강조색 팔레트를 Material 3 Expressive 스타일로 다시 조정해 색상이 더 생생해졌습니다.'],
  'v40.4': ['&laquo;내 기기와 일치시키기&raquo;가 실제 시스템 색상 (Chrome의 oklch/color() 출력 포함)을 읽고 운영체제 텍스트 선택 색상도 확인하여, 기기의 실제 동적 강조색이 적용되도록 했습니다.'],
  'v40.3': [
    '모든 강조색을 Material You의 톤 스타일 (차분한 중간 톤과 부드러운 컨테이너 톤)에 맞춰 다시 조정했습니다.',
    '&laquo;내 기기와 일치시키기&raquo;가 시스템 선택 색상도 대안으로 읽어들여, 더 많은 브라우저와 프로필에서 동작합니다.'
  ],
  'v40.2': ['강조색 설정에 새 버튼 &laquo;내 기기와 일치시키기&raquo;를 추가했습니다 (Chrome 150 이상, 설치된 앱). 시스템 강조색을 읽어 적용하고 확인 알림을 보여 줍니다.'],
  'v40.1': ['배경화 갤러리를 제거했습니다 (갤러리에 저장된 배경은 삭제되며, 직접 불러온 배경은 계속 사용할 수 있습니다).'],
  'v40.0': ['강조색 선택기: 사용자 색상에 16진수 입력란 (3자리 또는 6자리로 원하는 색 입력)과 복사 버튼을 추가했습니다. 데스크톱과 모바일에서 완전히 같은 배치입니다.'],
  'v39.9': ['룸 채팅: 룸 노트가 이제 기록이 있는 채팅 패널에 표시됩니다 (룸마다 60개 메시지를 보관하며, 다시 들어오면 복원됩니다). 공개 노트는 로그에 게시되고, 비공개 노트는 계속 바로 클립보드로 복사됩니다. 메시지를 눌러 복사할 수 있습니다.'],
  'v39.8': [
    '최근 룸: 참가했던 최근 6개 룸이 색상과 함께 홈 화면에 한 번의 탭으로 보이는 칩으로 표시됩니다. 지우는 버튼도 있습니다.',
    '내 프로필 보내기: 설정과 사용자 단축키를 일회성 스냅샷으로 룸 전체에 보냅니다. 다른 기기는 즉시 적용합니다.',
    '배경화 갤러리: 자동으로 밝고 어두운 버전이 바뀌는 내장 그라디언트 6종, 무작위 버튼, 선택형 일일 혼합을 제공합니다.',
    '검색: 복사한 단축키가 검색 메뉴에 &laquo;최근 복사함&raquo;으로 남아 검색 기록과 함께 나타납니다.'
  ],
  'v39.7': ['모바일 애니메이션도 데스크톱과 같은 기본 CSS를 사용합니다. 터치 기기 규칙이 더 이상 전환을 전체적으로 끄지 않습니다. 둘러보기 손전등과 탭이 단계 사이를 부드럽게 이동하고 테마와 배경 전환이 페이드됩니다 (스마트폰에서도).'],
  'v39.6': ['모바일도 데스크톱과 같은 부드러운 테마와 배경 전환을 갖고 사이트 둘러보기 단계 사이 애니메이션이 적용됩니다 (터치 기기에서도).'],
  'v39.5': ['AirDrop과 Quick Share: 룸 코드 옆의 &laquo;공유&raquo; 버튼이 휴대폰의 공유 시트를 열며 (Apple 기기에서는 AirDrop) 한 번의 탭으로 들어가는 링크를 제공합니다. 다른 기기에서는 탭하기만 하면 룸에 참여합니다.'],
  'v39.4': ['버전 알약의 발광과 반짝임이 이제 시스템에서 &laquo;모션 줄이기&raquo;가 켜져 있거나 설정에서 애니메이션을 꺼도 데스크톱에서 재생됩니다. 장식이 아니라 업데이트 신호로 처리하기 때문입니다.'],
  'v39.3': ['버전 알약의 발광과 설정 배지가 데스크톱에서 안정적으로 표시됩니다. 실행 중인 버전은 시작할 때 항상 며칠짜리 새 강조 기간을 얻으므로 업데이트 알림을 건너뛰어도 마찬가지입니다.'],
  'v39.2': ['알약의 새 버전 발광이 한 번 본 뒤 영영 사라지지 않습니다. 강조가 며칠 동안 유지되고 방문할 때마다 다시 나타납니다.'],
  'v39.1': ['색상 견본이 이제 보입니다. 견본 (룸 색상, 테마와 강조색 견본)이 보이지 않는 빈 요소가 아니라 눈에 보이는 원으로 그려집니다.'],
  'v39': [
    'Ring 이제 벨에 짧은 메시지를 붙일 수 있습니다. 울리는 기기가 이를 듣게 되고 클립보드로 복사합니다.',
    '배터리 알림: 기기 배터리가 25퍼센트를 다시 넘으면 &laquo;복구&raquo; 알림을 받고, 배터리 알림을 켜거나 끌 수 있습니다.',
    '노트 필드 옆의 &laquo;대상:&raquo; 선택기로 노트를 특정 기기 한 대에만 보낼 수 있습니다.',
    '각 룸에 색상 라벨을 붙여 룸을 한눈에 구분할 수 있습니다.',
    '오프라인 동기화 코드는 이제 미리 보기 (기기, 시간, 설정과 단축키 개수)를 보여 주고 가져오기 전에 확인을 요청합니다.'
  ],
  'v38.1': ['모바일에서 정보 탭을 눌러도 섹션이 자동으로 펼쳐지지 않습니다. 섹션 제목을 눌러 펼치세요.'],
  'v38': ['모바일에서 정보 탭을 열어도 동기화 안내가 자동으로 펼쳐지지 않습니다. &laquo;라이브 룸과 오프라인 동기화&raquo; 섹션을 눌러 여세요.'],
  'v37': ['가이드에 <strong>라이브 룸</strong>과 <strong>오프라인 동기화 코드</strong> 전체 안내가 추가되었고 모바일에서도 이용할 수 있습니다.'],
  'v36': ['로그인 영역의 버튼 이름이 <strong>스캔</strong>으로 바뀌었습니다 (QR을 읽으려고 카메라나 파일 선택기를 엽니다). 룸 코드를 보여 주는 <strong>QR</strong> 버튼과 혼동되지 않도록 하기 위함입니다.'],
  'v35': ['수정: 룸과 오프라인 코드의 QR 코드가 빈 상자 대신 올바르게 표시됩니다.'],
  'v34': [
    '<strong>기기 부르기</strong> &mdash; 다른 각 기기에는 벨을 울리고 진동시키는 Ring 버튼이 있어 휴대폰을 찾을 수 있습니다.',
    '<strong>노트 보내기</strong> &mdash; 연결된 모든 기기에 텍스트를 공유합니다. 즉시 나타나고 해당 기기의 클립보드로 복사됩니다.',
    '<strong>배터리 감시</strong> &mdash; 연결된 기기 배터리가 20퍼센트 아래로 내려가면 알림을 받습니다.',
    '<strong>기기 이름 바꾸기</strong> &mdash; 기기 이름을 누르면 원하는 이름을 붙일 수 있습니다.',
    '<strong>스캔해서 참여</strong> &mdash; 호스트가 룸 코드의 QR을 띄울 수 있습니다. 카메라로 스캔하거나 오프라인 동기화 코드를 스캔하세요.',
    '<strong>보호된 룸</strong> &mdash; &laquo;이 룸 보호&raquo;를 켜고 암호 구절을 정하면 룸의 모든 데이터가 암호화되어 암호 구절을 아는 구성원만 읽을 수 있습니다.',
    '<strong>최근 접속</strong> &mdash; 각 기기가 이제 온라인 상태인 시간을 보여 줍니다.'
  ],
  'v33': ['연결된 기기들은 충전 중을 포함해 <strong>배터리 잔량</strong>도 공유하며 룸 안에서 실시간으로 갱신됩니다.'],
  'v32': ['라이브 룸이 무작위 이름 대신 각 기기의 실제 이름 (예: &laquo;Mi 9T Pro&raquo;)을 보여 줍니다.'],
  'v31': ['라이브 룸이 연결된 각 기기를 이름으로 보여 주며, 이 기기에는 초록 점이 전체 개수와 함께 표시됩니다.'],
  'v30': [
    '<strong>라이브 룸</strong> &mdash; 먼저 사용자 설정과 단축키를 실시간으로 동기화하려면:<ol><li>설정이 있는 기기에서 <strong>설정 &rarr; 라이브 룸</strong>을 열고 <strong>룸 시작</strong>을 누릅니다. AK-XXX-YYY 같은 룸 코드가 나타납니다.</li><li>이 코드를 다른 기기들에 보내세요 (복사하거나 원하는 방식으로 공유하면 됩니다).</li><li>받는 각 기기에서 <strong>설정 &rarr; 라이브 룸</strong>을 열고 같은 코드를 입력한 뒤 <strong>룸 참여</strong>를 누릅니다.</li></ol>',
    '<strong>오프라인 동기화 코드</strong> &mdash; 다음으로 인터넷이 없을 때 한 번만 옮길 때 사용합니다:<ol><li><strong>설정 &rarr; 오프라인 동기화 코드</strong>를 열고 <strong>코드 만들기</strong>를 누릅니다. 코드를 복사하거나 나타나는 QR 코드를 스캔합니다.</li><li>다른 기기에서 <strong>설정 &rarr; 오프라인 동기화 코드</strong>를 열고 코드를 붙여넣은 뒤 <strong>코드 적용</strong>을 누릅니다.</li></ol>'
  ],
  'v29': ['수정: <strong>모바일</strong>에서 버전 배지를 누르면 터치 기기 애니메이션 초기화로 막히지 않고 매번 무작위 바운스/회전/압축 애니메이션이 실행됩니다.'],
  'v28': ['모바일: 사용자 설정 옆의 설정 탭은 이제 <strong>정보</strong>만 남습니다 (가이드는 데스크톱에만 있음). 누르면 정보 섹션이 자동으로 열립니다.'],
  'v27': ['수정: <strong>새 버전</strong> 직후 페이지를 열어도 몇 초 뒤에 예고 없는 재로드로 초기화되지 않습니다. 이제 업데이트가 백그라운드에서 적용됩니다. 새로고침 버튼과 &laquo;업데이트 전에 묻기&raquo; 옵션은 그대로 필요할 때 새로고침합니다.'],
  'v26.9': ['재미있는 기능: <strong>버전 배지</strong>를 누를 때마다 무작위 바운스/회전/압축 애니메이션이 실행되고, 새 버전이 강조되면 <strong>반짝임</strong>이 일어나며, 정보 섹션은 더 빨리 열도록 설정의 <strong>정보 탭</strong>으로 옮겨졌습니다.'],
  'v26.8': ['개선: 정보 섹션의 <strong>버전 배지</strong>가 자동으로 갱신되며 새 소식을 엽니다.'],
  'v26.7': ['개선: 오늘의 팁에 있는 <strong>앱 단축키</strong>가 이제 어느 앱의 단축키인지 먼저 보여 줍니다 (예: <em>Figma - Move Tool - V</em>).'],
  'v26.6': ['개선: <strong>오늘의 팁</strong>이 플랫폼 탭을 바꾸면 갱신됩니다. Windows, macOS, Linux, ChromeOS, 앱을 고르면 그 섹션의 단축키를 보여 줍니다.'],
  'v26.5': ['수정: <strong>오늘의 팁</strong>이 하나의 단축키에 머물지 않습니다. 페이지를 열 때마다 보고 있는 플랫폼 탭에서 새 무작위 단축키를 보여 줍니다.'],
  'v26.4': ['수정: <strong>오늘의 팁</strong>은 이제 보고 있는 플랫폼 탭의 단축키만 보여 줍니다 (예전에는 모든 플랫폼이 섞였습니다). 가이드의 버전 배지도 자동으로 갱신됩니다.'],
  'v26.3': ['<strong>둘러보기</strong> 버튼 아이콘이 <strong>펼친 책</strong>이 되었습니다.'],
  'v26.2': ['<strong>둘러보기</strong> 버튼 아이콘이 나침반이 되었고, 둘러보기에 <strong>새로고침 버튼</strong>의 역할을 설명하는 단계가 추가되었습니다.'],
  'v26.1': ['수정: <strong>다크 &harr; 라이트</strong>를 전환해도 (상단 스위치나 설정에서) <strong>배경 테마</strong>의 색이 벗겨지지 않습니다. 강조색, 바 버튼, 단축키는 배경 테마의 색을 유지합니다.'],
  'v26': ['새로운 <strong>사이트 둘러보기</strong> &mdash; 상단의 <strong>?</strong> 버튼을 눌러 검색창, 필터, 탭, 단축키 목록, 퀴즈, 설정, 인쇄, 테마 전환을 둘러봅니다. 버튼, 화살표, 점으로 이동할 수 있습니다.'],
  'v25': ['정보 섹션에서 <strong>GitHub에서 보기</strong> 링크를 제거했습니다.'],
  'v24.8': ['수정: 모바일의 <strong>업데이트 완료</strong> 알림이 화면 안에 남습니다 (이전에는 작은 기기에서 오른쪽 가장자리로 넘쳤습니다).'],
  'v24.7.4': ['모서리 둥글림이 모든 테마에서 <strong>16&thinsp;px</strong>로 제한됩니다. 알약, 탭, 검색창, 알림이 완전히 둥글게 보이지 않습니다 (이전에는 최대 100&thinsp;px). 모서리는 여전히 부드럽지만 절제된 모양입니다.'],
  'v24.7.3': ['수정: <strong>Android</strong>에서 <strong>Wi-Fi 설정 열기</strong>를 눌러도 아무 일도 없었습니다. 최신 Chrome은 사이트가 Android 시스템 설정을 열지 못하게 합니다. 이제 버튼이 안내 문구를 보여 주고 기기 설정 앱에서 Wi-Fi 설정을 열도록 안내합니다 (iOS와 macOS에서는 여전히 바로 엽니다).'],
  'v24.7.2': ['수정: 설치된 Android 앱 (PWA)에서 <strong>Wi-Fi 설정 열기</strong>를 눌러도 아무 일도 없었습니다. Android는 앱이 시스템 설정을 직접 열지 못하게 합니다. 이제 이유를 설명하고 버튼이 동작하는 Chrome 탭에서 사이트를 열도록 안내합니다.'],
  'v24.7.1': ['수정: <strong>Android</strong>의 <strong>Wi-Fi 설정 열기</strong>는 JavaScript로 실행한 링크 클릭을 사용해 왔고 Chrome은 <code>intent:</code> 링크를 차단합니다. 이제 사용자 동작으로 시작하는 이동으로 바꿨습니다.'],
  'v24.7': [
    '<strong>연결 상태</strong>가 <strong>설정 &rarr; 일반</strong> 맨 위로 옮겨졌습니다 (정보에서 이동).',
    '<strong>Wi-Fi 설정 열기</strong> 버튼이 이제 <strong>iOS</strong> (설정 앱)와 <strong>macOS</strong> (시스템 설정)에서 실제 Wi-Fi 설정을 엽니다. Android, Windows, Linux에서는 브라우저가 시스템 설정으로 이동할 수 없어 짧은 안내를 보여 줍니다.'
  ],
  'v24.6': [
    '<strong>오프라인</strong> 알약이 <strong>10초</strong> 동안만 표시된 뒤 사라집니다 (연결이 계속 끊겨 있어도 방해하지 않습니다).',
    '설정 &rarr; 정보가 항상 <strong>연결 상태</strong> (온라인/오프라인)를 보여 주고 <strong>Wi-Fi 설정</strong>을 여는 버튼을 함께 표시합니다. Android, Windows, Linux에서는 짧은 안내가 나옵니다.'
  ],
  'v24.5.2': ['수정: Windows가 브라우저의 offline 이벤트를 발생시키지 않고 연결이 끊기거나 (또는 요청이 실패하는 대신 멈추는) 데스크톱에서도 연결 확인이 시간 초과되면 <strong>오프라인</strong> 알약이 표시됩니다. 요청이 완전히 실패한 경우만은 아닙니다.'],
  'v24.5.1': ['수정: 브라우저 이벤트가 없이 연결이 끊긴 경우에도 (예: DevTools의 오프라인, 일부 모바일 브라우저) <strong>오프라인</strong> 알약이 표시됩니다. 브라우저 신호에만 의존하지 않고 몇 초마다 연결을 직접 확인합니다. 온라인인 동안에는 숨겨져 있습니다.'],
  'v24.5': [
    '검색하는 동안 검색어와 일치하는 단어가 결과에서 <strong>강조</strong>됩니다. 어떤 줄이 왜 일치했는지 파악하기 쉽습니다.',
    '검색창에 입력하면 나타나는 <strong>지우기 버튼 (&times;)</strong>이 생겼습니다.',
    '연결이 끊기면 작은 <strong>오프라인</strong> 알약이 나타납니다. 탭하면 Anthkeys가 캐시로도 계속 동작하는지 확인할 수 있습니다.'
  ],
  'v24.4.1': ['모바일 수정: <strong>동작 &mdash; 단축키</strong> 헤더가 화면 밖으로 사라지지 않습니다. 좁은 화면에서는 단축키 표가 별도의 가로 스크롤 영역으로 바뀌어 고정 헤더가 깨졌습니다. 이제 데스크톱과 마찬가지로 맨 위에 고정됩니다.'],
  'v24.4': ['홈 화면의 <strong>퀴즈 연속 기록 위젯</strong>을 제거했습니다. 브라우저가 아직 구현하지 않은 웹 표준에 의존해 어느 기기에서도 표시되지 않았기 때문입니다. 연속 기록과 통계는 앱 안에 그대로 있습니다.'],
  'v24.3': [
    '<strong>단축키 퀴즈가 통계를 기록</strong>합니다. 연속 기록 (🔥 연속으로 퀴즈를 완료한 날), 최고 점수, 정확도, 플레이 횟수를 보여 줍니다. 기기에만 저장되며 업로드되지 않습니다.',
    'Android용 홈 화면 <strong>퀴즈 연속 기록 위젯</strong>을 추가했습니다 (웹 앱 위젯: 실험 기능, Chrome과 Firefox에 순차 제공, iOS에서는 사용할 수 없음). 연속 기록과 통계를 보여 주고 탭하면 퀴즈가 열립니다.'
  ],
  'v24.2.1': ['모바일 수정: 검색창을 누르면 정보 페이지가 열릴 수 있었습니다. 설정 버튼 옆에 숨겨진 &laquo;새 소식&raquo; 알림이 계속 누를 수 있는 상태로 검색창 위에 겹쳐 있었습니다. 이제 보이는 동안에만 반응합니다.'],
  'v24.2': [
    '새로운 <strong>수정자 필터</strong>: 필터 메뉴에서 키 (Ctrl, Shift, Alt, Win, Cmd 등)를 고르면 그 키를 쓰는 단축키만 보여 줍니다. 선택지는 플랫폼에 따라 달라집니다.',
    '스크롤할 때 단축키 목록 위에 <strong>맨 위로 가기 버튼</strong>이 떠 있습니다. 탭하면 바로 위로 이동합니다.'
  ],
  'v24.1': ['<strong>동작 &mdash; 단축키</strong> 바가 스크롤 중에도 목록 맨 위에 고정됩니다. 모바일과 Safari에서는 이전에 화면 밖으로 사라졌습니다.'],
  'v23.9': ['모바일 도움말과 팁 팝업을 제거했습니다. 데스크톱 단축키만 나열하고 있었기 때문입니다. 도움말은 데스크톱 설정에 남아 있으며 <kbd>?</kbd>로 바로 이동할 수 있습니다.'],
  'v23.8': ['모바일에서는 도움말이 설정에 없습니다. 페이지를 가볍게 유지하려고 숨겨 두었습니다. <kbd>?</kbd>를 누르면 팝업으로 열립니다.'],
  'v23.7': ['도움말과 팁을 데스크톱 <strong>설정</strong> (일반 섹션)으로 옮겼습니다. <kbd>?</kbd>를 누르면 바로 이동합니다.'],
  'v23.6': [
    '20개 언어가 모두 완전 번역되었습니다. 퀴즈, 클라우드 동기화, 가이드 같은 새 기능에서 영어로 넘어가는 일이 없습니다.',
    '모바일에서는 탭 대신 길게 눌러 단축키를 복사합니다. 스크롤 중 실수로 복사되는 일이 없어졌습니다.',
    '필터 알약이 모바일에서도 데스크톱과 같이 강조색을 사용하며, 즐겨찾기를 선택하면 그것만 강조됩니다.',
    '모바일 상단 바의 다섯 버튼을 둘러싼 테두리를 없앴습니다. 이제 페이지와 하나로 어울립니다.',
    '퀴즈 버튼에 새 번개 아이콘이 생겼고, 답변은 원시 키 이름 대신 알아보기 쉬운 이름을 보여 줍니다.',
    '수정: 업데이트 후 앱 JavaScript가 로드되지 않아 사이트가 반응하지 않을 수 있었습니다.'
  ],
  'v23.5': [
    '필터, 즐겨찾기, 비교, 접기 동작을 하나의 간결한 <strong>필터</strong> 메뉴로 모았습니다. 모바일에서 단축키 목록에 쓸 공간이 늘었습니다.',
    '새 소식 페이지, 버전 배지, 업데이트 설정이 설정의 새 <strong>정보</strong> 섹션으로 옮겨졌습니다.',
    '업데이트 알림이 이제 <strong>설정</strong> 버튼을 통해 표시됩니다. 뉴스를 보기 전까지 톱니바퀴 아이콘에 배지가 붙습니다.'
  ],
  'v23.4': ['상단 바의 도움말 버튼 <kbd>?</kbd>를 제거했습니다. <kbd>?</kbd>를 누르면 도움말이 열립니다.'],
  'v23.3': [
    '자동 업데이트 후 버전 배지가 켜져 다음 실행 때 새 버전을 알아챌 수 있습니다.',
    '기본 배경 사이를 바꿔도 다크 모드가 유지됩니다. 새 배경도 어둡게 처리됩니다.',
    '모바일에서 플랫폼 바 (Windows, macOS, Linux, ChromeOS)가 데스크톱과 같은 모습이 되었습니다.'
  ],
  'v23.2': [
    '고급/기본 전환을 제거했습니다. 모든 단축키를 함께 보여 줍니다.',
    '모바일에서 상단 바 버튼이 깔끔한 2&times;3 격자로 정렬되었습니다.',
    '기본 배경은 계속 적용되며 다크 모드로 바꾸면 올바르게 어두워집니다.',
    '오버레이 (설정, 가이드, 퀴즈)가 모바일의 고정 탭을 덮습니다.'
  ],
  'v23.1': ['배경이 다크 모드에 맞춰 최적화되었습니다. 다크 모드로 바꾸면 직접 올린 이미지와 기본 배경 (바다, 숲, 노을 등) 모두 어둡게 되고 채도를 낮춰 판이 읽기 편해집니다.'],
  'v23': [
    '새로운 &laquo;비교&raquo; 모드: 두 번째 플랫폼을 골라 서로 다른 단축키만 볼 수 있습니다.',
    '시간대 (19시부터 7시까지 다크)에 따라 바뀌는 자동 테마.',
    '<kbd>?</kbd>를 누거나 <kbd>?</kbd> 버튼을 눌러 빠른 가이드와 팁을 확인하세요.',
    '이 페이지의 모든 항목에 출시일을 추가했습니다.'
  ],
  'v22': [
    '수정: 좁은 휴대폰에서 키 안내 표가 잘렸습니다. 이제 가로로 스크롤되어 모든 열에 접근할 수 있습니다.',
    '검색창과 카테고리 알약은 &laquo;새 소식&raquo; 페이지에서 쓰이지 않으므로 숨겨 두었습니다.'
  ],
  'v21': [
    '키 안내에 닫기 버튼이 생겨 패널 안에서 접을 수 있습니다. 스위치가 화면 밖으로 스크롤될 수 있는 모바일에서 유용합니다.',
    '터치 기기에서 키 안내 버튼의 누름 반응을 개선했습니다.'
  ],
  'v20.1': [
    '버전 번호가 패치 버전을 지원합니다. 바닥의 배지가 v20.1 등을 보여 주고 업데이트 감지가 올바르게 처리합니다.',
    '이 페이지에 없던 v20 항목을 추가했습니다.'
  ],
  'v20': ['Anthkeys 안에 새로운 &laquo;새 소식&raquo; 페이지를 만들었습니다. 업데이트 알림의 링크와 바닥의 버전 배지가 GitHub 대신 여기를 엽니다.'],
  'v19': ['버전 기록 기능이 나오기 전 버전에서 업데이트해도 업데이트 배너가 나타납니다 (이전 버전은 오프라인 캐시로 감지합니다).'],
  'v18': [
    '자동 업데이트 모드에서 새 버전이 도착하면 &laquo;vX로 업데이트됨 - 새 소식&raquo; 알림이 나타납니다.',
    '업데이트 배너가 이제 서비스 워커 변경뿐 아니라 콘텐츠 업데이트에도 반응합니다.',
    '바닥의 버전 배지를 누를 수 있습니다. 눌러서 뉴스를 확인하세요.',
    '오프라인 캐시가 더 작아졌습니다 (버전 없는 파일을 버리지 않음).'
  ],
  'v16': ['바닥에 현재 빌드 번호를 보여 주는 버전 배지를 추가했습니다.'],
  'v15': ['서비스 워커를 바탕으로 한 새로고침 버튼과 설정 (자동 업데이트 / 묻고 업데이트)을 추가했습니다.'],
  'v14': ['카테고리 접기와 펼치기가 현재 검색어를 따르도록 했습니다.'],
  'v13': ['네트워크 우선 페이지 캐시를 적용해 업데이트가 바로 반영되고 데스크톱 스크롤이 훨씬 매끄러워졌습니다.'],
  'v12': ['검색과 필터가 현재 열려 있는 탭에만 적용됩니다.'],
  'v11': ['PWA 설치 지원, 접근성 라벨, 모션 줄이기 지원, Gmail과 YouTube 단축키, SEO 개선.'],
  'v10': [
    '수정: 카테고리 필터가 카테고리 제목 줄과 일치하면 모든 단축키를 숨길 수 있었습니다. 이제 필터한 줄만 숨깁니다.',
    '모바일에서 배경이 화면 전체를 채웁니다.'
  ],
  'v9': ['Windows가 기본 플랫폼 탭이 되고 탭 순서가 더 분명해졌습니다.'],
  'v8': [
    '퀴즈 난이도와 오늘의 팁.',
    '오프라인 캐시 외에 모바일 스크롤이 훨씬 매끄러워졌습니다.',
    '검색과 필터가 모든 플랫폼에서 동시에 동작하고 운영체제 이름이 굵게 표시됩니다.'
  ],
  'v7': ['디자인 스타일을 없애고 Material 3만 남겼습니다.'],
  'v6': [
    '디자인 스타일을 Material 3으로 정리하고 기본 테마로 돌아가는 &laquo;배경 제거&raquo; 버튼을 추가했습니다.',
    '업데이트를 더 빨리 받도록 캐시 제어 헤더를 추가했습니다.'
  ],
  'v5': ['14개 언어 모두 페이지 제목을 &laquo;단축키&raquo; 하나로 단순화했습니다.'],
  'v4': [
    '단축키 퀴즈 모드: 단축키나 동작을 맞혀 연습하고 GitHub Gist로 클라우드 동기화도 지원합니다.',
    '강조색 견본, 테마 전환, 모바일 배경에 대한 대규모 수정.'
  ],
  'v3': ['저장해 다시 쓸 수 있는 강조색 프리셋과 업데이트가 확실히 반영되도록 하는 캐시 무효화를 추가했습니다.'],
  'v2': ['라이트와 다크 테마, 강조색, 단축키 참고 번역을 추가했습니다.'],
  'v1': ['Anthkeys의 첫 버전입니다. Windows, macOS, Linux, ChromeOS의 일상적인 키보드 단축키를 한 페이지에 모았습니다.']
};

I18N_WN.pl = {
  'v52.1': [
    'Nowość: strona &laquo;Co nowego&raquo; jest teraz w pełni przetłumaczona we wszystkich 20 językach — każda informacja o wydaniu wyświetla się w Twoim języku.'
  ],
  'v52': [
    'Poprawka: wersja v51 mogła uniemożliwiać wczytanie aplikacji; duński przekład zawierał niesescapowany apostrof, który unieważniał cały plik językowy. Plik jest teraz poprawnie przetwarzany i wszystkie 20 języków znów się ładuje.'
  ],
  'v51': [
    'Zakończono tłumaczenia dla wszystkich 20 języków — ustawienia, pokoje na żywo, synchronizacja offline i przewodnik synchronizacji są teraz w pełni przetłumaczone (najnowsze pozycje były tylko po angielsku).',
    'Nowość: jeśli Anthkeys wydaje się wolny, baner umożliwia włączenie trybu wydajności jednym dotknięciem. Możesz go zamknąć i więcej się nie pojawi.'
  ],
  'v50.7': ['Tryb wydajności został przeniesiony do zakładki Ogólne w ustawieniach.'],
  'v50.6': ['Ikony w górnym pasku znów są kolorowymi emoji, tak jak w v50: książka, drukarka, błyskawica, księżyc/słońce, odświeżanie i koło zębate.'],
  'v50.5': ['Ikony w górnym pasku znów używają koloru akcentu (domyślnie), zamiast wyglądać na białe lub szare.'],
  'v50.4': ['Usunięto funkcję barwienia ikony kolorem akcentu: favicon, ikona ekranu głównego oraz ikona zainstalowanej aplikacji PWA znów używają ikony domyślnej (kolorowanie ikony kolorem akcentu ma sens tylko w aplikacjach natywnych).'],
  'v50.3': [
    'Ikony w górnym pasku przebudowano tak, by wyświetlały się niezawodnie na wszystkich urządzeniach (przewodnik, druk, quiz, motyw, odświeżanie i ustawienia używają teraz prawdziwych ikon).',
    'Ikona przełącznika motywu znów jest prawdziwą ikoną i odpowiada stanowi jasnemu lub ciemnemu.'
  ],
  'v50.2': ['Naprawiono błąd z v50.1, przez który ikony górnego paska i ustawienia nie działały przy starcie.'],
  'v50.1': [
    'Nowy tryb wydajności w sekcji Dostosuj: wyłącza efekty rozmycia i animacje, które mogą spowalniać aplikację w Windows.',
    'Górny pasek używa teraz prawdziwych ikon, a nowe ustawienie Ikony pozwala je pomalować kolorem akcentu.',
    'Zakładka Aplikacje działa jak zakładka Linux: kliknij w dowolnym miejscu, aby wybrać aplikację (VS Code, Figma, Gmail i inne), a zakładka pokaże Twój wybór, na przykład &laquo;Aplikacje - Gmail&raquo;.',
    'Usunięto pole szesnastkowe pod przyciskiem Dostosuj: kolory wybiera się tylko suwakami.',
    'Podwojono opcje akcentu z gradientem i dodano osiem nowych połączeń dwóch kolorów.'
  ],
  'v50': [
    'Kliknięcie w dowolnym miejscu zakładki Linux otwiera listę dystrybucji, a zakładka pokazuje teraz Twój wybór, na przykład &laquo;Linux - Ubuntu (GNOME)&raquo;.',
    'Wybór koloru niestandardowego został przebudowany: okrągła próbka otwiera suwaki odcienia, nasycenia i jasności (z wartością nad każdym z nich), zaczynając od bieżącego koloru, a nie od 0/0/0.',
    'Nowa sekcja Gradientowe akcenty: osiem gradientów dwukolorowych gotowych do zastosowania jako kolor akcentu.',
    'Ustawienia wstępne akcentu dopracowano do czystszej i wyraźniejszej palety.'
  ],
  'v40.9': ['Lista dystrybucji jest teraz na zakładce Linux: kliknij małą strzałkę na zakładce, aby wybrać swoją dystrybucję.'],
  'v40.8': ['Zakładka Linux ma teraz listę dystrybucji (Ubuntu, Debian, Fedora, Arch, Mint, KDE i inne), która dopasowuje skróty systemowe do domyślnych ustawień każdej z nich i zapamiętuje Twój wybór.'],
  'v40.7': ['Ustawienia akcentu pokazują teraz pasek podglądu na żywo z dokładnym kodem szesnastkowym zastosowanego koloru, więc od razu widzisz każdą zmianę.'],
  'v40.6': [
    'Usunięto funkcję &laquo;Pobierz z ekranu&raquo;.',
    'Ustawienia wstępne akcentu ustawiono na pełną intensywność stylu Material 3 Expressive: głębokie, żywe kolory, prawdziwy neon (szarości pozostają stonowane).'
  ],
  'v40.5': ['Paletę akcentu ponownie zrównoważono w stylu Material 3 Expressive: bardziej żywe barwy tonalne.'],
  'v40.4': ['&laquo;Dopasuj do mojego urządzenia&raquo; odczytuje teraz prawdziwy kolor systemu (także wynik oklch/color() w Chrome) i bada również kolor zaznaczenia tekstu systemu, dzięki czemu stosowany jest Twój rzeczywisty dynamiczny kolor akcentu.'],
  'v40.3': [
    'Wszystkie kolory akcentu ponownie zrównoważono do tonacji Material You (stonowane średnie tony z miękkimi tonami kontenerowymi).',
    '&laquo;Dopasuj do mojego urządzenia&raquo; odczytuje teraz także systemowy kolor zaznaczenia jako wariant zapasowy, więc działa w większej liczbie przeglądarek i profili.'
  ],
  'v40.2': ['Ustawienia koloru akcentu: nowy przycisk &laquo;Dopasuj do mojego urządzenia&raquo; odczytuje kolor akcentu systemu (Chrome 150+, zainstalowana aplikacja) i stosuje go, z potwierdzeniem.'],
  'v40.1': ['Usunięto galerię tapet (zapisywane w galerii tła są kasowane; wczytane tło nadal działa).'],
  'v40.0': ['Wybór koloru akcentu: kolor niestandardowy ma teraz pole szesnastkowe (wpisz dowolny kolor, 3 lub 6 znaków) oraz przycisk Kopiuj — identyczny układ na komputerze i telefonie.'],
  'v39.9': ['Czat w pokoju: notatki pokoju pojawiają się teraz w panelu Czat z historią (60 wiadomości na pokój, odtwarzanych po powrocie). Notatki publiczne trafiają do dziennika, a prywatne nadal są kopiowane wprost do schowka. Dotknij wiadomości, aby ją skopiować.'],
  'v39.8': [
    'Ostatnie pokoje: sześć ostatnich pokoi, w których brałeś udział, pojawia się na ekranie głównym jako jednodotkowe przyciski w kolorach każdego pokoju, plus przycisk ich czyszczenia.',
    'Wyślij mój profil: wysyła Twoje ustawienia i własne skróty do całego pokoju jako jednorazową migawkę; pozostałe urządzenia stosują ją natychmiast.',
    'Galeria tapet: sześć wbudowanych gradientów z automatycznymi wariantami jasnym i ciemnym, przycisk Losowy oraz opcjonalna codzienna mieszanka.',
    'Wyszukiwanie: skopiowane skróty są zapamiętywane jako &laquo;Ostatnio skopiowane&raquo; w menu wyszukiwania, razem z historią wyszukiwania.'
  ],
  'v39.7': ['Animacje na telefonie korzystają teraz z tej samej podstawowej karty stylów co na komputerze: reguła dla urządzeń dotykowych nie wyłącza już globalnie przejść. Reflektor przewodnika i zakładki płynnie przeskakują między krokami, a zmiana motywu i tła zanika, także na telefonach.'],
  'v39.6': ['Telefon dorównał komputerowi: zmiany motywu i tła są płynne, a przewodnik po stronie animuje się między krokami również na urządzeniach dotykowych.'],
  'v39.5': ['AirDrop i Quick Share: przycisk &laquo;Udostępnij&raquo; obok kodu pokoju otwiera arkusz udostępniania telefonu (AirDrop na Apple) z jednorazowym linkiem wejścia: drugie urządzenie wystarczy dotknąć, aby dołączyć do pokoju.'],
  'v39.4': ['Światło i migotanie tabletki wersji animują się teraz na komputerze nawet przy włączonej systemowej opcji ograniczania ruchu lub wyłączonych animacjach w ustawieniach: jest traktowane jak sygnał aktualizacji, a nie ozdoba.'],
  'v39.3': ['Światło tabletki wersji i znaczek w ustawieniach są teraz niezawodnie widoczne na komputerze: uruchomiona wersja zawsze otrzymuje przy starcie nowe okno wyróżnienia na kilka dni, nawet jeśli powiadomienie o aktualizacji zostało pominięte.'],
  'v39.2': ['Światło i migotanie nowej wersji na tabletce nie znikają już na zawsze po jednym spojrzeniu: wyróżnienie trwa kilka dni i wraca przy każdej wizycie.'],
  'v39.1': ['Kolorowe próbki są wreszcie widoczne: próbki (kolor pokoju oraz próbki motywu i akcentu) są rysowane jako widoczne koła, a nie puste, niewidoczne elementy.'],
  'v39': [
    'Ring pozwala teraz dołączyć krótką wiadomość do dzwonka: urządzenie, które dzwoni, słyszy ją i kopiuje do schowka.',
    'Alerty baterii: otrzymujesz powiadomienie &laquo;odzyskano&raquo;, gdy urządzenie znów przekroczy 25 procent, a alarm baterii możesz włączyć lub wyłączyć.',
    'Notatki można kierować do jednego urządzenia za pomocą listy &laquo;Do:&raquo; obok pola notatki.',
    'Każdy pokój może mieć kolorową etykietę, aby odróżnić pokoje na pierwszy rzut oka.',
    'Kody synchronizacji offline pokazują teraz podgląd (urządzenie, godzina, liczba ustawień i skrótów) i proszą o potwierdzenie przed importem.'
  ],
  'v38.1': ['Na telefonie dotknięcie zakładki Informacje nie rozwija już automatycznie sekcji: dotknij nagłówka sekcji, aby ją otworzyć.'],
  'v38': ['Na telefonie otwarcie zakładki Informacje nie rozwija już automatycznie instrukcji synchronizacji: dotknij sekcji &laquo;Pokoje na żywo i synchronizacja offline&raquo;, aby ją otworzyć.'],
  'v37': ['Przewodnik zawiera teraz pełne instrukcje <strong>Pokojów na żywo</strong> i <strong>Kodów synchronizacji offline</strong> i jest dostępny również na telefonie.'],
  'v36': ['Przycisk w obszarze logowania nazywa się teraz <strong>Skanuj</strong> (otwiera aparat lub wybór plików, aby odczytać kod QR), więc nie jest mylony z przyciskiem <strong>QR</strong>, który pokazuje kod pokoju.'],
  'v35': ['Poprawiono: kody QR pokoju i kodu offline są teraz wyświetlane poprawnie, zamiast pustego pola.'],
  'v34': [
    '<strong>Zadzwoń do urządzenia</strong> &mdash; każde inne urządzenie ma przycisk Ring, który włącza dzwonek i wibracje, dzięki czemu znajdziesz swój telefon.',
    '<strong>Wyślij notatkę</strong> &mdash; udostępnij tekst każdemu podłączonemu urządzeniu; pojawi się natychmiast i trafi do jego schowka.',
    '<strong>Monitorowanie baterii</strong> &mdash; dostaniesz alert, gdy podłączone urządzenie spadnie poniżej 20 procent baterii.',
    '<strong>Zmień nazwy urządzeń</strong> &mdash; dotknij nazwy urządzenia, aby nadać mu własną.',
    '<strong>Dołącz przez skanowanie</strong> &mdash; gospodarz może pokazać kod QR pokoju; zeskanuj go aparatem (albo zeskanuj kod synchronizacji offline).',
    '<strong>Chronione pokoje</strong> &mdash; włącz &laquo;Chroń ten pokój&raquo; i ustaw hasło; wszystkie dane pokoju zostaną zaszyfrowane, więc odczyta je tylko członek znający hasło.',
    '<strong>Widziano</strong> &mdash; każde urządzenie pokazuje teraz, od jak dawna jest online.'
  ],
  'v33': ['Podłączone urządzenia udostępniają też <strong>poziom baterii</strong> (także podczas ładowania), aktualizowany w pokoju w czasie rzeczywistym.'],
  'v32': ['Pokoje na żywo pokazują teraz prawdziwą nazwę każdego urządzenia (na przykład &laquo;Mi 9T Pro&raquo;), a losową nazwę wymyśloną przez samo urządzenie.'],
  'v31': ['Pokoje na żywo pokazują teraz każde podłączone urządzenie po nazwie, z zieloną kropką przy tym urządzeniu i liczbą wszystkich.'],
  'v30': [
    '<strong>Pokoje na żywo</strong> &mdash; aby najpierw zsynchronizować ustawienia i własne skróty w czasie rzeczywistym:<ol><li>Na urządzeniu z Twoimi ustawieniami otwórz <strong>Ustawienia &rarr; Pokoje na żywo</strong> i dotknij <strong>Rozpocznij pokój</strong>. Pojawi się kod pokoju, na przykład AK-XXX-YYY.</li><li>Wyślij ten kod pozostałym urządzeniom (skopiuj lub udostępnij, jak wolisz).</li><li>Na każdym odbierającym urządzeniu otwórz <strong>Ustawienia &rarr; Pokoje na żywo</strong>, wpisz ten sam kod i dotknij <strong>Dołącz do pokoju</strong>.</li></ol>',
    '<strong>Kody synchronizacji offline</strong> &mdash; następnie do jednorazowego przesyłania, gdy nie ma internetu:<ol><li>Otwórz <strong>Ustawienia &rarr; Kod synchronizacji offline</strong> i dotknij <strong>Utwórz kod</strong>. Skopiuj kod lub zeskanuj pojawiający się kod QR.</li><li>Na drugim urządzeniu otwórz <strong>Ustawienia &rarr; Kod synchronizacji offline</strong>, wklej kod i dotknij <strong>Zastosuj kod</strong>.</li></ol>'
  ],
  'v29': ['Poprawiono: na <strong>telefonie</strong> dotknięcie znaczka wersji uruchamia losową animację odbicia, obrotu i ściskania, zamiast być blokowane przez reset animacji urządzeń dotykowych.'],
  'v28': ['Telefon: zakładka ustawień obok Dostosuj nazywa się teraz tylko <strong>Informacje</strong> (przewodnik istnieje tylko na komputerze) i otwiera sekcję Informacje po dotknięciu.'],
  'v27': ['Poprawiono: otwarcie strony tuż po <strong>nowej wersji</strong> nie resetuje jej już niespodziewanym przeładowaniem kilka sekund później — aktualizacja jest teraz stosowana w tle. Przycisk Odśwież i opcja &laquo;Pytaj przed aktualizacją&raquo; nadal przeładowują na żądanie.'],
  'v26.9': ['Zabawne: dotknięcie <strong>znacznika wersji</strong> za każdym razem uruchamia losową animację odbicia, obrotu i ściskania, rozświetla się przy wyróżnieniu nowej wersji, a sekcja Informacje została przeniesiona do zakładki <strong>Informacje</strong> w ustawieniach, aby była łatwiej dostępna.'],
  'v26.8': ['Ulepszenie: <strong>znaczek wersji</strong> w sekcji Informacje aktualizuje się teraz sam i otwiera Co nowego.'],
  'v26.7': ['Ulepszenie: <strong>skróty aplikacji</strong> w poradzie dnia pokazują teraz najpierw, do której aplikacji należą, na przykład <em>Figma &mdash; Move Tool &mdash; V</em>.'],
  'v26.6': ['Ulepszenie: <strong>porada dnia</strong> odświeża się po zmianie zakładki platformy: wybór Windows, macOS, Linux, ChromeOS lub Aplikacje pokazuje skrót z tej sekcji.'],
  'v26.5': ['Poprawiono: <strong>porada dnia</strong> nie utknie już na jednym skrócie: przy każdym wczytaniu strony pokazuje nowy losowy skrót z zakładki platformy, którą oglądasz.'],
  'v26.4': ['Poprawiono: <strong>porada dnia</strong> pokazuje teraz tylko skróty z zakładki platformy, którą oglądasz (wcześniej mieszały się skróty ze wszystkich platform). Znaczek wersji w przewodniku też odświeża się sam.'],
  'v26.3': ['Przycisk <strong>przewodnika</strong> pokazuje teraz ikonę <strong>otwartej książki</strong>.'],
  'v26.2': ['Przycisk <strong>przewodnika</strong> pokazuje teraz ikonę kompasu, a przewodnik zyskał krok wyjaśniający działanie <strong>przycisku odświeżania</strong>.'],
  'v26.1': ['Poprawiono: przełączanie między <strong>ciemnym a jasnym</strong> (przełącznikiem u góry lub w ustawieniach) nie zdziera już kolorów <strong>motywu tła</strong>: akcent, przyciski paska i klawisze skrótów zachowują kolory motywu, a tło zostaje.'],
  'v26': ['Nowy <strong>przewodnik po stronie</strong> &mdash; dotknij przycisku <strong>?</strong> u góry, aby przejść po pasku wyszukiwania, filtrach, zakładkach, liście skrótów, quizie, ustawieniach, drukowaniu i przełączniku motywu. Poruszaj się przyciskami, strzałkami lub kropkami.'],
  'v25': ['Usunięto odnośnik &laquo;Zobacz na GitHubie&raquo; z sekcji Informacje.'],
  'v24.8': ['Poprawiono: powiadomienie <strong>&laquo;Zaktualizowano&raquo;</strong> na telefonie mieści się teraz na ekranie (wcześniej wychodziło za prawą krawędź na małych urządzeniach).'],
  'v24.7.4': ['Zaokrąglenie rogów jest teraz ograniczone do <strong>16&thinsp;px</strong> we wszystkich motywach: pigułki, zakładki, paski wyszukiwania i powiadomienia nie są już całkiem okrągłe (wcześniej do 100&thinsp;px). Rogi pozostają miękkie, tylko bardziej stonowane.'],
  'v24.7.3': ['Poprawiono: <strong>Otwórz ustawienia Wi-Fi</strong> na <strong>Androidzie</strong> nic nie robił: nowsze Chrome nie pozwala stronom otwierać ustawień systemowych Androida. Przycisk pokazuje teraz krótką instrukcję, aby otworzyć ustawienia Wi-Fi w aplikacji Ustawienia urządzenia (na iOS i macOS nadal otwiera je od razu).'],
  'v24.7.2': ['Poprawiono: w zainstalowanej aplikacji Androida (PWA) dotknięcie <strong>Otwórz ustawienia Wi-Fi</strong> nic nie robiło: Android zabrania aplikacjom otwierania ustawień systemowych bezpośrednio. Teraz przycisk wyjaśnia to i prosi o otwarcie strony w karcie Chrome, gdzie działa.'],
  'v24.7.1': ['Poprawiono: <strong>Otwórz ustawienia Wi-Fi</strong> na <strong>Androidzie</strong> używał kliknięcia w kotwicę wywoływanego z JavaScript, które Chrome blokuje dla odnośników <code>intent:</code>: teraz nawigację wywołuje gest użytkownika.'],
  'v24.7': [
    '<strong>Stan połączenia</strong> znajduje się teraz na górze sekcji <strong>Ustawienia &rarr; Ogólne</strong> (przeniesiony z Informacji).',
    'Przycisk <strong>Otwórz ustawienia Wi-Fi</strong> otwiera teraz prawdziwe ustawienia Wi-Fi na <strong>iOS</strong> (aplikacja Ustawienia) i <strong>macOS</strong> (Ustawienia systemowe). W systemach Android, Windows i Linux, gdzie przeglądarki nie mogą przejść do ustawień systemu, pokazuje krótkie instrukcje.'
  ],
  'v24.6': [
    'Pigułka <strong>Offline</strong> pozostaje teraz przez <strong>10 sekund</strong>, a potem znika (nie przeszkadza, dopóki połączenie jest naprawdę zerwane).',
    'Ustawienia &rarr; Informacje zawsze pokazują teraz <strong>stan połączenia</strong> (online lub offline) wraz z przyciskiem otwierającym <strong>ustawienia Wi-Fi</strong>: na iOS prowadzi od razu do aplikacji Ustawienia, a na innych urządzeniach pokazuje krótkie instrukcje.'
  ],
  'v24.5.2': ['Poprawiono: na komputerach, gdzie Windows gubi połączenie bez wywoływania zdarzenia <em>offline</em> w przeglądarce (albo żądania zawieszają się zamiast kończyć się błędem), pigułka <strong>Offline</strong> pojawia się także wtedy, gdy sprawdzenie łączności upłynie: nie tylko gdy żądanie całkowicie się nie powiedzie.'],
  'v24.5.1': ['Poprawiono: pigułka <strong>Offline</strong> pojawia się także wtedy, gdy połączenie znika bez zdarzenia przeglądarki (na przykład &laquo;Offline&raquo; w narzędziach deweloperskich, niektóre przeglądarki mobilne): aplikacja sama sprawdza łączność co kilka sekund, zamiast polegać wyłącznie na sygnałach przeglądarki. Gdy jesteś online, pozostaje ukryta.'],
  'v24.5': [
    'Podczas wyszukiwania słowa pasujące do zapytania są teraz <strong>podświetlane</strong> w wynikach: łatwiej zrozumieć, dlaczego dany wiersz pasuje.',
    'Pole wyszukiwania ma teraz <strong>przycisk czyszczenia (&times;)</strong>, który pojawia się po wpisaniu czegokolwiek.',
    'Mała pigułka <strong>Offline</strong> pojawia się przy utracie połączenia: dotknij jej, aby potwierdzić, że Anthkeys działa dalej z pamięci podręcznej.'
  ],
  'v24.4.1': ['Poprawiono na telefonie: nagłówek <strong>Akcja &mdash; Skrót</strong> nie zjeżdża już z ekranu: na wąskich ekranach tabela skrótów zamieniała się we własny obszar przewijania poziomego, co psuło przypięty nagłówek. Teraz jest przypięty u góry, dokładnie jak na komputerze.'],
  'v24.4': ['Usunięto <strong>widżet serii quizu na ekranie głównym</strong>: opierał się na standardzie sieciowym, którego przeglądarki jeszcze nie implementują, więc nigdy się nie pojawiał. Twoja seria i statystyki quizu pozostają w aplikacji.'],
  'v24.3': [
    '<strong>Quiz skrótów zapisuje teraz Twoją statystykę</strong>: serię dni (🔥 dni z rzędu, kiedy ukończyłeś quiz), najlepszy wynik, dokładność i rozegrane podejścia. Zapisywane lokalnie, nigdy nie są wysyłane.',
    'Nowy <strong>widżet serii quizu na ekranie głównym</strong> dla Androida (widżety aplikacji internetowych: eksperymentalne, wdrażane w Chrome i Firefoksie; niedostępne na iOS). Pokazuje serię i statystyki; dotknij, aby otworzyć quiz.'
  ],
  'v24.2.1': ['Poprawiono na telefonie: dotknięcie paska wyszukiwania mogło otworzyć stronę Informacje: ukryte powiadomienie &laquo;Co nowego&raquo; obok przycisku ustawień było nadal klikalne i nakładało się na pole wyszukiwania. Teraz reaguje tylko, gdy jest widoczne.'],
  'v24.2': [
    'Nowy <strong>filtr modyfikatorów</strong>: w menu Filtry wybierz klawisz (Ctrl, Shift, Alt, Win, Cmd i inne), aby pokazać tylko skróty, które go używają. Dostępne opcje zależą od platformy.',
    'Przycisk <strong>do góry</strong> unosi się nad listę skrótów podczas przewijania: dotknij go, aby natychmiast wrócić na początek.'
  ],
  'v24.1': ['Pasek <strong>Akcja &mdash; Skrót</strong> pozostaje teraz przypięty u góry listy podczas przewijania: na telefonie i w Safari wcześniej znikał z ekranu.'],
  'v23.9': ['Usunięto wyskakujące okno przewodnika i porad na telefonie: wymieniało tylko skróty komputerowe. Przewodnik pozostaje w ustawieniach na komputerze, gdzie <kbd>?</kbd> prowadzi do niego bezpośrednio.'],
  'v23.8': ['Na telefonie przewodnik nie jest już w ustawieniach: pozostaje ukryty, aby nie obciążać strony. Naciśnij <kbd>?</kbd>, aby otworzyć go jako okno.'],
  'v23.7': ['Przewodnik i porady przeniesiono do <strong>Ustawień</strong> (sekcja Ogólne) na komputerze: naciśnij <kbd>?</kbd>, aby przejść od razu.'],
  'v23.6': [
    'Wszystkie 20 języków jest teraz w pełni przetłumaczonych: nie ma już powrotu do angielskiego przy nowszych funkcjach, takich jak quiz, synchronizacja w chmurze i przewodnik.',
    'Na telefonie skrót kopiujesz, przytrzymując go, a nie dotykając: koniec z przypadkowymi kopiami podczas przewijania.',
    'Pigułki filtrów używają Twojego koloru akcentu także na telefonie, tak jak na komputerze; po wybraniu Ulubionych wyróżnia się tylko ono.',
    'Usunięto obramowanie wokół pięciu przycisków górnego paska na telefonie: teraz wtapiają się w stronę.',
    'Przycisk quizu ma nową ikonę błyskawicy, a odpowiedzi pokazują czytelne nazwy zamiast surowych klawiszy.',
    'Poprawiono: skrypt aplikacji mógł nie wczytać się po aktualizacji, przez co strona przestała reagować.'
  ],
  'v23.5': [
    'Filtry, ulubione, porównanie i zwijanie zebrano w jedno zwięzłe menu <strong>Filtry</strong>: na telefonie zostaje więcej miejsca na listę skrótów.',
    'Strona Co nowego, znaczek wersji i ustawienia aktualizacji przeniesiono do nowej sekcji <strong>Informacje</strong> w ustawieniach.',
    'Powiadomienia o aktualizacjach pojawiają się teraz przy przycisku <strong>Ustawień</strong>: ikona koła zębatego ma znaczek, dopóki nie spojrzysz na nowości.'
  ],
  'v23.4': ['Usunięto przycisk pomocy <kbd>?</kbd> z górnego paska: naciśnij <kbd>?</kbd>, aby i tak otworzyć przewodnik.'],
  'v23.3': [
    'Znaczek wersji zapala się po automatycznej aktualizacji, więc zauważysz nową wersję przy następnym uruchomieniu.',
    'Przełączanie między domyślnymi tapetami zachowuje tryb ciemny: nowa tapeta też jest przyciemniana.',
    'Na telefonie pasek platform (Windows, macOS, Linux, ChromeOS) wygląda teraz tak samo jak na komputerze.'
  ],
  'v23.2': [
    'Usunięto przełącznik Zaawansowane i Podstawowe: wszystkie skróty są pokazywane razem.',
    'Na telefonie przyciski górnego paska są teraz uporządkowane w siatkę 2&times;3.',
    'Domyślne tapety nadal są stosowane i poprawnie przyciemniane po przełączeniu w tryb ciemny.',
    'Nakładki (ustawienia, przewodnik, quiz) przykrywają przypięte zakładki na telefonie.'
  ],
  'v23.1': ['Tapety są optymalizowane pod tryb ciemny: po przełączeniu na ciemny zarówno własne obrazy, jak i domyślne tła (ocean, las, zachód słońca i inne) zostają przyciemnione i odbarwione, dzięki czemu panele pozostają czytelne.'],
  'v23': [
    'Nowy tryb &laquo;Porównaj&raquo;: wybierz drugą platformę, aby zobaczyć tylko skróty, które się różnią.',
    'Motyw automatyczny podążający za porą dnia (ciemny od 19 do 7).',
    'Naciśnij <kbd>?</kbd> lub dotknij przycisku <kbd>?</kbd>, aby zobaczyć krótki przewodnik i porady.',
    'Do każdej pozycji na tej stronie dodano daty wydania.'
  ],
  'v22': [
    'Poprawiono: tabela ściągawki z klawiszami była ucinana na wąskich telefonach: teraz przewija się w poziomie, więc wszystkie kolumny są dostępne.',
    'Pasek wyszukiwania i pigułki kategorii są ukryte na stronie &laquo;Co nowego&raquo;, bo tam nie mają zastosowania.'
  ],
  'v21': [
    'Ściągawka z klawiszami ma teraz przycisk zamknięcia, więc można ją zwinąć z wnętrza panelu: przydatne na telefonie, gdzie przełącznik może zjechać poza ekran.',
    'Szybsza reakcja na dotknięcie przycisku ściągawki na urządzeniach dotykowych.'
  ],
  'v20.1': [
    'Numery wersji obsługują teraz wersje poprawek: znaczek na dole pokazuje na przykład v20.1, a wykrywanie aktualizacji obsługuje je poprawnie.',
    'Dodano do tej strony brakującą pozycję v20.'
  ],
  'v20': ['Nowa strona &laquo;Co nowego&raquo; w Anthkeys: odnośnik w powiadomieniu o aktualizacji i znaczek wersji na dole otwierają ją tutaj, a nie na GitHubie.'],
  'v19': ['Baner aktualizacji pojawia się także wtedy, gdy aktualizujesz z wersji sprzed śledzenia wersji (poprzednia wersja jest wykrywana z pamięci offline).'],
  'v18': [
    'Pojawia się powiadomienie &laquo;Zaktualizowano do vX &mdash; Co nowego&raquo;, gdy przyjdzie nowa wersja (w trybie automatycznej aktualizacji).',
    'Baner aktualizacji jest teraz wyzwalany przez aktualizacje treści, a nie tylko zmiany w service workerze.',
    'Znaczek wersji na dole można kliknąć: dotknij go, aby zobaczyć nowości.',
    'Lżejsza pamięć offline (nie usuwamy już plików bez wersji).'
  ],
  'v16': ['Na dole dodano znaczek wersji pokazujący bieżący numer kompilacji.'],
  'v15': ['Przycisk odświeżania i preferencja (aktualizuj automatycznie lub pytaj), oparte na service workerze.'],
  'v14': ['Zwijanie i rozwijanie kategorii respektuje teraz aktywne wyszukiwanie.'],
  'v13': ['Bufor stron z pierwszeństwem sieci, więc aktualizacje pojawiają się od razu; znacznie płynniejsze przewijanie na komputerze.'],
  'v12': ['Wyszukiwanie i filtry dotyczą teraz tylko otwartej zakładki.'],
  'v11': ['Obsługa instalacji PWA, etykiety ułatwień dostępu, obsługa ograniczonego ruchu, skróty Gmail i YouTube, poprawki SEO.'],
  'v10': [
    'Poprawiono: filtr kategorii mógł ukryć wszystkie skróty, gdy pasował do wiersza nagłówka kategorii: teraz ukrywa tylko wiersze, które filtrowałeś.',
    'Na telefonie tło wypełnia cały ekran.'
  ],
  'v9': ['Windows jest teraz domyślną zakładką platformy, a zakładki maję czytelniejszą kolejność.'],
  'v8': [
    'Poziomy trudności quizu i porada dnia.',
    'Znacznie płynniejsze przewijanie na telefonie oraz pamięć offline.',
    'Wyszukiwanie i filtry działają jednocześnie na wszystkich platformach, z pogrubionymi nazwami systemów.'
  ],
  'v7': ['Usunięto style wyglądu: jedynym wyglądem jest teraz Material 3.'],
  'v6': [
    'Ograniczono style wyglądu do Material 3 oraz dodano przycisk &laquo;Usuń tło&raquo;, aby wrócić do motywu domyślnego.',
    'Dodano nagłówki sterujące pamięcią podręczną, aby aktualizacje przychodziły szybciej.'
  ],
  'v5': ['Tytuły stron uproszczono do samych &laquo;Skrótów&raquo; we wszystkich 14 językach.'],
  'v4': [
    'Tryb quizu skrótów: ćwicz, zgadując skrót lub czynność, plus synchronizacja w chmurze przez GitHub Gist.',
    'Obszerny zestaw poprawek próbek akcentu, przełączania motywu i tapet na telefonie.'
  ],
  'v3': ['Dodano ustawienia wstępne koloru akcentu, które można zapisać i użyć ponownie, oraz unieważnianie pamięci podręcznej, aby aktualizacje pojawiały się niezawodnie.'],
  'v2': ['Motywy jasny i ciemny z kolorami akcentu oraz tłumaczenia ściągawki skrótów.'],
  'v1': ['Pierwsza wersja Anthkeys: wszystkie codzienne skróty klawiszowe dla Windows, macOS, Linux i ChromeOS na jednej stronie.']
};

