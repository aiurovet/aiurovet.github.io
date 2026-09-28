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
