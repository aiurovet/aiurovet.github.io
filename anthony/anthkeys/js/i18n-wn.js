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
  'v24.2': [
    'Nuevo <strong>filtro de modificadores</strong>: en el men&uacute; Filtros, elige una tecla (Ctrl, Shift, Alt, Win, Cmd, …) para mostrar solo los atajos que la usan. Las opciones se actualizan por plataforma.',
    'Un <strong>bot&oacute;n de volver arriba</strong> flota sobre la lista de atajos al desplazarte: t&oacute;calo para volver directamente al inicio.'
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
