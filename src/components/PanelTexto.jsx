import { useState } from 'react'

/* ─────────────────────────────────────────────
   Article data with rich cover images
───────────────────────────────────────────── */

const ARTICULOS = [
  {
    id: 'miel',
    titulo: 'La Miel: crónica de un paseo de alto riesgo',
    autor: 'Hernando Aramburo-Restrepo',
    fecha: 'Octubre de 2026',
    etiqueta: 'Crónica • Aventura',
    color: 'teal',
    imagen: '/cronica/foto_pagina_6.jpg',
    imagenAlt: 'Expedición al Río La Miel',
    desc: 'Seis imberbes, el río La Miel, un toro bravo, un matadero y el autoestop interminable de Bogotá al Magdalena Medio.',
  },
  {
    id: 'ratas',
    titulo: 'La virtud de las ratas',
    autor: 'Felipe Aramburo Jaramillo',
    fecha: '2024',
    etiqueta: 'Cuento • Literatura',
    color: 'orange',
    imagen: '/virtud/portada_ratas.jpg',
    imagenAlt: 'Ilustración La virtud de las ratas',
    desc: 'Una familia que lo agotó todo y encontró, en las profundidades de las alcantarillas, una inesperada y solidaria forma de vida.',
  },
]

/* ─────────────────────────────────────────────
   Color map
───────────────────────────────────────────── */

const colorMap = {
  teal: {
    badge:    'bg-brandTeal text-white',
    border:   'border-brandTeal/30',
    ring:     'ring-brandTeal',
    dot:      'bg-brandTeal',
    pill:     'bg-brandTeal/10 text-brandTeal',
    btnFull:  'bg-brandTeal hover:bg-[#205b5b] text-white',
    pullL:    'border-brandTeal',
    headText: 'text-brandTeal',
    divider:  'bg-brandTeal',
    card:     'hover:border-brandTeal/50 hover:shadow-brandTeal/10',
    selected: 'border-brandTeal ring-2 ring-brandTeal/20 bg-brandTeal/[0.03]',
  },
  orange: {
    badge:    'bg-brandOrange text-white',
    border:   'border-brandOrange/30',
    ring:     'ring-brandOrange',
    dot:      'bg-brandOrange',
    pill:     'bg-brandOrange/10 text-brandOrange',
    btnFull:  'bg-brandOrange hover:bg-[#e06a3a] text-white',
    pullL:    'border-brandOrange',
    headText: 'text-brandOrange',
    divider:  'bg-brandOrange',
    card:     'hover:border-brandOrange/50 hover:shadow-brandOrange/10',
    selected: 'border-brandOrange ring-2 ring-brandOrange/20 bg-brandOrange/[0.03]',
  },
}

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/* ─────────────────────────────────────────────
   Article selector card with image thumbnail
───────────────────────────────────────────── */

function ArticuloCard({ art, isSelected, onClick }) {
  const c = colorMap[art.color]
  return (
    <button
      onClick={onClick}
      className={`w-full text-left rounded-2xl border-2 p-3.5 sm:p-5 transition-all duration-200 shadow-sm flex flex-col sm:flex-row items-stretch gap-4 sm:gap-5 group
        ${isSelected ? c.selected : 'border-stone-200 bg-white hover:shadow-md ' + c.card}`}
    >
      {/* Cover Image Thumbnail */}
      <div className="w-full sm:w-40 h-40 sm:h-36 rounded-xl overflow-hidden border border-stone-200 flex-shrink-0 bg-stone-100 relative shadow-inner">
        <img
          src={art.imagen}
          alt={art.imagenAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent sm:hidden" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
            <span className={`text-[10px] font-sub font-bold px-2.5 py-0.5 rounded-full ${c.badge}`}>
              {art.etiqueta}
            </span>
            {isSelected ? (
              <span className={`text-[10px] font-sub font-bold px-2.5 py-0.5 rounded-full ${c.pill}`}>
                ● Leyendo actualmente
              </span>
            ) : (
              <span className="text-[11px] font-sub font-bold text-stone-400 group-hover:text-brandDark transition-colors">
                Leer texto →
              </span>
            )}
          </div>
          <h3 className="font-title font-bold text-brandDark text-base sm:text-xl leading-snug mb-1 group-hover:text-brandTeal transition-colors">
            {art.titulo}
          </h3>
          <p className="text-xs font-sub text-stone-500 font-semibold mb-2">
            Por <span className="text-stone-700">{art.autor}</span> · {art.fecha}
          </p>
          <p className="text-xs sm:text-sm font-body text-stone-600 leading-relaxed line-clamp-2 sm:line-clamp-3">
            {art.desc}
          </p>
        </div>
      </div>
    </button>
  )
}

/* ─────────────────────────────────────────────
   Chapter divider
───────────────────────────────────────────── */

function ChapterDivider({ number, title, colorKey }) {
  const c = colorMap[colorKey]
  return (
    <div className="flex items-center gap-3 pt-6 pb-2">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-sub font-bold flex-shrink-0 ${c.dot}`}>
        {number}
      </div>
      <h3 className={`font-title font-bold text-xl sm:text-2xl ${c.headText} leading-tight`}>
        {title}
      </h3>
      <div className="flex-1 h-px bg-stone-200" />
    </div>
  )
}

/* ─────────────────────────────────────────────
   Pull-quote
───────────────────────────────────────────── */

function PullQuote({ children, colorKey, attribution }) {
  const c = colorMap[colorKey]
  return (
    <blockquote className={`border-l-4 ${c.pullL} pl-4 sm:pl-5 py-3 my-5 bg-stone-50 rounded-r-xl`}>
      <p className="font-title italic text-stone-800 text-base sm:text-lg leading-relaxed">
        {children}
      </p>
      {attribution && (
        <span className="block mt-1.5 text-xs font-sub font-bold not-italic text-stone-500">
          {attribution}
        </span>
      )}
    </blockquote>
  )
}

/* ─────────────────────────────────────────────
   Photo with caption
───────────────────────────────────────────── */

function ArticlePhoto({ src, alt, caption, side = 'right' }) {
  return (
    <figure className={`my-6 ${side === 'right' ? 'md:float-right md:ml-8' : 'md:float-left md:mr-8'} 
      w-full md:w-80 clear-${side === 'right' ? 'right' : 'left'}`}>
      <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-md">
        <img src={src} alt={alt} className="w-full h-52 sm:h-56 object-cover" loading="lazy" />
      </div>
      {caption && (
        <figcaption className="text-xs font-sub text-stone-500 italic mt-2 text-center leading-snug px-1">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

/* ─────────────────────────────────────────────
   LA MIEL — article view (distraction-free, no aside)
───────────────────────────────────────────── */

function ArticuloMiel() {
  const [tab, setTab] = useState('lectura')

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex gap-1 bg-stone-100 p-1 rounded-xl w-fit">
        {[['lectura', '📖 Lectura Completa'], ['protagonistas', '👥 Protagonistas & Ruta']].map(([id, label]) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`px-3.5 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-sub font-bold transition-all
              ${tab === id ? 'bg-white text-brandDark shadow-sm' : 'text-stone-500 hover:text-brandDark'}`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* ── Tab: Protagonistas ── */}
      {tab === 'protagonistas' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-stone-200 space-y-5">
            <div>
              <h3 className="font-title text-2xl font-bold text-brandDark">Los Seis Imberbes Expedicionarios</h3>
              <p className="text-sm text-stone-600 font-body mt-1">
                Compañeros de clase entre los catorce y diecisiete años que salieron sin adultos responsables, sin teléfonos, con una carpa partida en dos y la convicción de que ya sabían suficiente de la vida.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {[
                { nombre: 'Hernando Aramburo-Restrepo', rol: 'Narrador & Cronista', desc: 'El encargado de cruzar primero el río a nado, sobrevivir al perro mastín en la carpa y registrar para siempre la memoria del paseo.', badge: 'Autor', bc: 'bg-brandTeal text-white' },
                { nombre: 'Mauricio Durán Castro («Maduca»)', rol: 'El Novato & Bautizado de Honor', desc: 'Hijo de la destacada familia ganadera de la hacienda Lucerna; sobrevivió a la embestida del toro en La Dorada y defendió los huevos del desayuno.', badge: 'Héroe', bc: 'bg-brandOrange text-white' },
                { nombre: 'Alberto Jiménez', rol: 'El Conquistador & Nutricionista', desc: 'Ferviente galán de autobús, creador del batido reconstituyente de Pony Malta con huevo crudo y protagonista del rescate en agua que le llegaba a las rodillas.', badge: 'Estratega', bc: 'bg-brandYellow text-brandDark' },
                { nombre: 'Humberto Clavijo', rol: 'Pionero de la Ruta', desc: 'Quien oyó hablar del famoso camping del río La Miel (sin saber en cuál de los 104 km quedaba) y cruzaba cercados de una sola zancada.', badge: 'Explorador', bc: 'bg-stone-200 text-stone-700' },
                { nombre: 'Jaime Silva', rol: 'Testigo Taurino', desc: '«Estábamos en una corrida de toros... Fue que a Mauricio lo cogió un toro en La Dorada».', badge: 'Acompañante', bc: 'bg-stone-200 text-stone-700' },
                { nombre: 'Arturo Naranjo', rol: 'El Fugas Veloz', desc: 'Corredor implacable ante la embestida taurina y el primero en regresar a casa en bus nocturno para evitar el castigo paterno.', badge: 'Velocista', bc: 'bg-stone-200 text-stone-700' },
              ].map((p) => (
                <div key={p.nombre} className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-[10px] font-sub font-bold px-2.5 py-0.5 rounded-full ${p.bc}`}>{p.badge}</span>
                    <span className="text-[11px] font-sub font-semibold text-stone-400 text-right">{p.rol}</span>
                  </div>
                  <h4 className="font-title text-base font-bold text-brandDark">{p.nombre}</h4>
                  <p className="text-xs text-stone-600 font-body leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>

            {/* Ruta y Frases */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4 border-t border-stone-100">
              <div className="bg-brandTeal/5 rounded-2xl p-5 border border-brandTeal/20 space-y-3">
                <h4 className="font-title text-lg font-bold text-brandDark">La Ruta en Resumen</h4>
                <ol className="text-xs font-sub space-y-2 text-stone-700 list-decimal list-inside leading-relaxed">
                  <li><strong className="text-brandDark">Bogotá → Villeta:</strong> Bus y llegada a la finca familiar.</li>
                  <li><strong className="text-brandDark">Villeta → Honda:</strong> Autoestop en parejas; el sedán y «la gallina».</li>
                  <li><strong className="text-brandDark">Honda → La Dorada:</strong> Bus bajo 35 °C y el ataque del toro a Mauricio.</li>
                  <li><strong className="text-brandDark">La Dorada → Río La Miel:</strong> Camión lechero, ferry y noche en el matadero.</li>
                  <li><strong className="text-brandDark">Regreso:</strong> Carne descompuesta, bautizo de Maduca y el Dodge Dart en Honda.</li>
                </ol>
              </div>

              <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 space-y-3">
                <h4 className="font-title text-lg font-bold text-brandTeal">Frases Memorables</h4>
                <PullQuote colorKey="teal" attribution="— Mamá de Hernando">
                  «A ustedes, mi Diosito, les tiene que colocar un ángel de la guarda y tres suplentes a cada uno.»
                </PullQuote>
                <PullQuote colorKey="orange">
                  «Cuando uno no sabe pa donde va, cualquier vehículo le sirve.»
                </PullQuote>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Tab: Lectura completa ── */}
      {tab === 'lectura' && (
        <article className="w-full bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-10 md:p-12 border border-stone-200 shadow-sm space-y-6 text-stone-800 font-body leading-relaxed">

          {/* Quick chapter pills */}
          <div className="flex flex-wrap items-center gap-2 pb-5 border-b border-stone-100 text-xs font-sub font-semibold text-stone-500">
            <span className="text-stone-400 mr-1 font-bold">Saltar a capítulo:</span>
            {[
              ['cap-1','1. El Autoestop & Honda'],
              ['cap-2','2. El Toro en La Dorada'],
              ['cap-3','3. Noche en el Matadero'],
              ['cap-4','4. El Río La Miel'],
              ['cap-5','5. La Vuelta'],
              ['cap-6','6. Epílogo']
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="px-3 py-1.5 bg-stone-100 hover:bg-brandTeal hover:text-white rounded-lg transition-colors"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Opening paragraph with drop-cap */}
          <p className="text-base sm:text-lg leading-relaxed first-letter:text-5xl first-letter:font-title first-letter:font-bold first-letter:text-brandTeal first-letter:float-left first-letter:mr-3 first-letter:leading-none">
            Éramos seis. Seis muchachos de entre catorce y diecisiete años que un día de agosto de 1974 decidimos, sin mayor deliberación ni advertencia a nuestros padres, que ya éramos suficientemente adultos para salir solos de Bogotá a acampar en el río La Miel, en el Magdalena Medio.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            La aventura había sido idea de Humberto Clavijo, que oyó hablar del río en algún lugar que ya no recuerda y convenció al resto con una sola frase: «Dicen que el camping es espectacular». Ninguno de nosotros sabía exactamente dónde quedaba el río La Miel, ni cuántos kilómetros tenía, ni si había transporte directo desde Bogotá. Esos detalles eran, en nuestra lógica de entonces, perfectamente prescindibles.
          </p>

          <PullQuote colorKey="teal">
            «Éramos jóvenes. Éramos imprudentes. Éramos un poco locos. Pero éramos amigos, y eso parecía suficiente para cualquier aventura.»
          </PullQuote>

          {/* Cap 1 */}
          <div id="cap-1">
            <ChapterDivider number={1} title="El Autoestop & Honda" colorKey="teal" />
          </div>
          <ArticlePhoto src="/cronica/foto_pagina_5.jpg" alt="Los expedicionarios" caption="Los seis imberbes en la partida, circa 1974." side="right" />
          <p className="text-base sm:text-lg leading-relaxed">
            Salimos de Bogotá en bus hasta Villeta, donde pasamos la primera noche en la finca de la familia Clavijo. Al día siguiente comenzó el autoestop real. Nos dividimos en parejas y cada una siguió su propio camino hacia Honda. La pareja en la que viajaba yo tuvo la suerte —o la mala suerte, según se mire— de que nos recogiera un señor en un Dodge Dart que llevaba en el asiento trasero una gallina viva atada con un cordel.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            La gallina, indignada por la interrupción de su rutina, protestó durante todo el trayecto con una intensidad que el señor del Dart atribuía directamente a nuestra presencia. «Ella es muy nerviosa con los extraños», explicó con una paciencia que claramente no sentía.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            Alberto Jiménez, el más galante de los seis, aprovechó el bus de Honda a La Dorada para cortejar a dos muchachas que viajaban solas. Su estrategia, al parecer, consistía en ofrecer Pony Malta compartida y comentarios sobre el paisaje. Las muchachas se bajaron tres paradas antes que nosotros sin haber aceptado ninguna Pony Malta.
          </p>

          {/* Cap 2 */}
          <div id="cap-2">
            <ChapterDivider number={2} title="El Toro en La Dorada" colorKey="teal" />
          </div>
          <ArticlePhoto src="/cronica/foto_pagina_6.jpg" alt="La Dorada, 1974" caption="La Dorada a orillas del Magdalena, 1974." side="left" />
          <p className="text-base sm:text-lg leading-relaxed">
            Fue en La Dorada donde ocurrió el episodio que definiría para siempre la identidad del grupo. Mauricio Durán Castro, hijo de hacendados del Magdalena Medio y por eso más confiado que los demás ante el ganado, tomó un atajo por un potrero cercado. Lo que no calculó fue que el potrero tenía ocupante: un toro cebuíno de aproximadamente cuatrocientos kilos que no había leído el manual de bienvenida al Magdalena Medio.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            El toro lo alcanzó en la segunda embestida. Mauricio salió despedido sobre el pasto y el toro pasó junto a él con una indiferencia que, en retrospectiva, nos parece casi elegante. El resto del grupo, que observaba desde el otro lado de la cerca, tomó decisiones diferentes: Arturo Naranjo corrió en dirección opuesta sin detenerse a contar; Jaime Silva se quedó paralizado; los demás gritamos cosas inútiles.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            Mauricio se levantó, sacudió el polvo de la ropa y dijo: «¿Siguieron?». A partir de ese momento le llamamos «Maduca», apodo que conservó durante décadas.
          </p>

          <PullQuote colorKey="orange" attribution="— Jaime Silva, explicando el retraso">
            «Estábamos en una corrida de toros... Fue que a Mauricio lo cogió un toro en La Dorada.»
          </PullQuote>

          {/* Cap 3 */}
          <div id="cap-3">
            <ChapterDivider number={3} title="Noche en el Matadero" colorKey="teal" />
          </div>
          <p className="text-base sm:text-lg leading-relaxed">
            Llegamos a San Miguel en un camión lechero que nos cobró el viaje en la forma de una hora de trabajo descargando bidones. El camping del río La Miel resultó ser un terreno baldío junto al matadero municipal. No había instalaciones, no había sombra, no había más campistas. Sí había, en cambio, un olor que con los años hemos aprendido a describir solo como «característico».
          </p>
          <ArticlePhoto src="/cronica/foto_pagina_8.jpg" alt="Campamento junto al río" caption="El río La Miel, zona de campamento improvisado." side="right" />
          <p className="text-base sm:text-lg leading-relaxed">
            Armamos la carpa —que resultó ser media carpa, porque la otra mitad había quedado en Bogotá— y preparamos la cena con lo que traíamos: arroz, una lata de atún y el batido reconstituyente de Alberto, compuesto por Pony Malta y huevo crudo, que según él «lo inventaron los ciclistas del Giro de Italia» y según el resto de nosotros sabía a un error de laboratorio.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            A las dos de la madrugada nos despertó un perro mastín que, con todo el derecho del mundo, reclamaba su territorio. Los seis salimos de la carpa con una coordinación que nunca hemos vuelto a tener para ninguna otra cosa.
          </p>

          {/* Cap 4 */}
          <div id="cap-4">
            <ChapterDivider number={4} title="El Río La Miel" colorKey="teal" />
          </div>
          <p className="text-base sm:text-lg leading-relaxed">
            Al día siguiente, el río justificó el viaje. Verde esmeralda, transparente, con una corriente que en los remansos permitía flotar sin esfuerzo. Pasamos la mañana nadando, y fue entonces cuando yo cometí el error de cruzarlo a nado hacia la orilla opuesta sin medir bien la corriente, que me llevó unos doscientos metros río abajo antes de que lograra salir.
          </p>
          <ArticlePhoto src="/cronica/foto_pagina_10.jpg" alt="El río La Miel" caption="Las aguas cristalinas del río La Miel, Caldas." side="left" />
          <p className="text-base sm:text-lg leading-relaxed">
            Alberto, que había anunciado que iba a rescatarme, se detuvo cuando el agua le llegó a las rodillas y decidió que el rescate podía hacerse desde allí con mucha más seguridad. Desde la orilla gritaba instrucciones que el ruido del río hacía inaudibles. Las instrucciones resultaron innecesarias, porque logré salir solo, pero Alberto habló del rescate durante semanas.
          </p>

          {/* Cap 5 */}
          <div id="cap-5">
            <ChapterDivider number={5} title="La Vuelta" colorKey="teal" />
          </div>
          <p className="text-base sm:text-lg leading-relaxed">
            El regreso fue apresurado. Arturo Naranjo tomó el primer bus nocturno disponible, argumentando «compromisos familiares» que nadie le conocía. Los demás volvimos en etapas, haciendo de nuevo autoestop. En Honda, el mismo señor del Dodge Dart nos recogió. La gallina ya no estaba. No preguntamos.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            Llegamos a Bogotá a mediodía del tercer día. Nuestras madres, que habían recibido un mensaje telefónico de segunda mano a través del vecino de la finca de los Clavijo, nos esperaban con una mezcla de alivio y furia que hemos tardado cincuenta años en entender del todo.
          </p>

          <PullQuote colorKey="teal" attribution="— Mamá de Hernando, recibiendo al grupo">
            «A ustedes, mi Diosito, les tiene que colocar un ángel de la guarda y tres suplentes a cada uno, porque no creo que uno solo dé abasto con tanta necedad.»
          </PullQuote>

          {/* Cap 6 */}
          <div id="cap-6">
            <ChapterDivider number={6} title="Epílogo: cincuenta años después" colorKey="teal" />
          </div>
          <p className="text-base sm:text-lg leading-relaxed">
            Han pasado más de cincuenta años. Maduca se convirtió en un reconocido empresario ganadero. Alberto Jiménez tuvo una larga carrera como médico y nunca volvió a preparar el batido de Pony Malta con huevo crudo, al menos en público. Arturo Naranjo sigue siendo, entre nosotros, el más veloz para retirarse de cualquier situación incómoda.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            Escribo esta crónica en octubre de 2026, con el material que fui anotando en un cuaderno de tapas verdes que conservé durante medio siglo. Algunos detalles los completé con la memoria de los otros cinco —que, por supuesto, difieren en puntos cruciales—. Lo que no difiere, y en esto todos estamos de acuerdo, es que fue el mejor viaje de nuestras vidas.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            Y que nunca jamás le dijimos a nuestros padres lo del toro.
          </p>

          <div className="pt-8 border-t border-stone-200 text-center space-y-1">
            <p className="font-title italic text-stone-700 text-base">
              — Hernando Aramburo-Restrepo
            </p>
            <p className="text-xs font-sub text-stone-400">Bogotá, Colombia · Octubre de 2026</p>
          </div>
        </article>
      )}
    </div>
  )
}

/* ─────────────────────────────────────────────
   LA VIRTUD DE LAS RATAS — article view (distraction-free, no aside)
───────────────────────────────────────────── */

const RATAS_PARAGRAPHS = [
  `Para entonces habíamos agotado todas las opciones: desde la venta de quesos exóticos hasta la criminalidad menor no punitiva. Ninguno de nosotros era particularmente hábil en alguna tarea. Tal vez lo más llamativo de la familia era la prodigiosa mediocridad con la que conducíamos nuestras vidas. Mis padres, supongo que sin mucho conocimiento previo, no estaban preparados para tener una familia numerosa. Sus propios padres, mis abuelos, no fueron personas destacadas ni poseedoras de grandes fortunas. Por el contrario, amasaron deudas enormes que, como una extraña y temible condición genética que en vez de diluirse solo se amplifica con el tiempo, terminaron por heredarse. Podría decirse que el particular caleidoscopio de profesiones que ejercíamos en casa no era más que un mecanismo de supervivencia para no terminar sepultados por esos débitos prehistóricos. Y como la situación en ese momento, aunque no del todo excepcional, era crítica, nos vimos obligados a emprender una búsqueda desesperada por sobrevivir.`,
  `Intentamos comenzar por capitalizar lo que la sociedad decidía desechar sin reparo y volverlo una oportunidad. Sin embargo, pronto descubrimos que las basuras superficiales, las que se encuentran en los botes de la calle, en los bolsillos de los pantalones o en el fondo de los cajones, ya eran parte de un emporio manejado por unos pocos. Se habían convertido, como tantas otras cosas que conforman una sociedad funcional, en una comodidad distante para nosotros. Tuvimos que ir más profundo, adentrarnos en las alcantarillas, que aún eran una frontera inexplorada. O mejor dicho, no inexplorada, sino simplemente fuera del margen. Las personas subterráneas eran fabulaciones que se contaban a los niños inquietos para mejorar su comportamiento en la mesa o su desempeño escolar. Incluso en nuestra familia, que para entonces ya había perdido cualquier vestigio de decoro, existían ciertos reparos ante la posibilidad de una vida privada de luz y plagada de aromas nauseabundos. Pero frente a la persecución insistente de los cobradores de deudas, esas criaturas despreciables que se multiplicaban como chinches de cama y hacían de su oficio el tormento de otros, no quedaba otra opción. Imaginábamos, claro, que incluso para ellos las alcantarillas resultarían demasiado desagradables.`,
  `La primera impresión de nuestro nuevo hogar fue muy distinta de la que se había ido fraguando durante nuestros últimos días en la superficie. Tras superar el primer impacto olfativo, y una vez que los ojos se habituaron a la penumbra, descubrimos que la compleja arquitectura del alcantarillado nos ofrecía un espacio más amplio y acogedor de lo que habíamos imaginado. Algunas de las alcantarillas principales eran angostas, fétidas y estaban cubiertas por una película mucilaginosa de alguna planta que, como nosotros, se había adaptado a las condiciones subterráneas. Sin embargo, estas arterias que transportaban los residuos daban paso a galerías secundarias considerablemente más amplias. Fue en una de ellas, alejados de los demás moradores del subsuelo, donde establecimos nuestro hogar.`,
  `Y fue también allí donde nos encontramos con las ratas por primera vez. Arriba, en la gran ciudad, estos animales eran más temidos que las detonaciones o los disparos. No era casual que su nombre se usara como insulto para referirse a los más desafortunados. Incluso para personas como nosotros representaban la bajeza más absoluta. Pero ya en las profundidades no podíamos darnos el lujo de alimentar esos prejuicios, y mucho menos de adentrarnos aún más en aquel laberinto en busca de un nuevo lugar. En ese momento, sin mucho entusiasmo, se volvieron nuestras vecinas.`,
  `Fue mi hermana menor la primera en darse cuenta, después de observar las ratas durante largo rato, de su increíble inteligencia. Claro, de aquellas que no tuvieran rabia o alguna enfermedad sin nombre. Mientras hacíamos limpiezas o la ocasional búsqueda de comida o argollas de compromiso, ella descifraba las complejas estructuras sociales de estos animales. Estaba convencida, y pronto lo estuvimos todos, de que esos roedores de las profundidades no eran los mismos que uno podía encontrar en un jardín o en un laboratorio de productos cosméticos.`,
  `No. Estos animales, al igual que nosotros, habían recurrido a este ecosistema artificial por obligación y no por voluntad. En estos casos, la necesidad se convierte en una virtud social invaluable, y el hecho de que nazca de la necesidad no le resta valor. Quizá fue la creciente afinidad, o misericordia, según se mire, entre las ratas y mi hermana lo que llevó a mi madre a pensar que una forma de simbiosis subterránea comenzaba a gestarse. Y así fue. Lentamente empezamos a compartir nuestras vidas. Resultaba sorprendente cómo, con el tiempo, nuestros espacios lograban superponerse. La timidez inicial, más nuestra que de ellas, pues no estábamos acostumbrados a habitar rincones oscuros y fétidos alejados de la galería, comenzó a transformarse en una familiaridad cariñosa. Este ecosistema, antes inhóspito, ahora tenía una comunidad: las ratas y nosotros.`,
  `Mi hermana había decidido entrenar a las ratas para realizar algunas labores que nos resultaban especialmente difíciles. Podía mostrarles una pieza de zanahoria, la forma de una botella de leche o incluso una argolla, sabiendo que eran capaces de memorizar aquella figura, asociarla al espacio que ya conocían de memoria y, lo más sorprendente, recuperar el objeto y traerlo de regreso a la galería sin importar su tamaño. Mi madre, por su parte, actuaba como mediadora entre los deseos de la familia y el bienestar de los animales. Resultaba casi fortuito que, meses atrás, hubiéramos desarrollado cierta destreza en la fabricación de quesos. Una vez completada la tarea, las ratas eran recompensadas con el más fermentado de todos.`,
  `Los demás, incluyéndome, seguíamos con cierta incredulidad nuestra rutina. Para ese momento, ya se había alcanzado una calidad de vida superior a la anterior, o al menos una existencia menos agobiante, por absurda que pudiera parecer. Después de todo, seguíamos viviendo bajo tierra, acosados por cobradores implacables y cargando con las viejas deudas familiares. Lo que al principio pareció una fantasía obstinada de mi hermana, alentada por la predilección que mi madre siempre le tuvo, empezaba a convertirse en la base de una nueva forma de vida para nosotros. Y también para las ratas.`,
  `No todas las ratas eran igual de habilidosas. En realidad, era muy reducido el grupo de aquellas que demostraban mejores aptitudes y lograban ejecutar tareas cada vez más complejas a cambio de comida. Pero eso no impedía que el resto recibiera también su recompensa. Muchas se ocupaban de labores igualmente necesarias, de las cuales dependíamos sin saberlo: el control de plagas, tanto en nuestro hogar como en nuestros propios cuerpos, la organización de restos, la vigilancia de rutas, incluso la simple contemplación de las sombras. Todos teníamos derecho a las mismas condiciones acá abajo. Y aunque al principio solo mi hermana y mi madre parecían entenderlo, con el tiempo fue haciéndose evidente para el resto de nosotros, hasta alcanzar un modo de estar juntos que no exigía explicaciones.`,
  `Fue gracias a esa extraña utopía que empezó a correr la voz de una nueva forma de vida. Tanto que llegó a la superficie. En cuestión de días no dábamos abasto para atender la marea de solicitudes, incluso de los cobradores, que pedían sumarse a nuestra sociedad. Todavía hoy me cuesta creer que, de repente, tantas personas pensaran que lo que teníamos acá abajo era mejor que sus vidas superficiales.`,
  `Cada vez somos más, y el espacio comienza a escasear. Las ratas parecen no estar del todo cómodas con el cambio repentino. Algunas personas las tratan con desprecio, sin entender que es gracias a su virtud que hemos podido subsistir bajo tierra. Hemos empezado a planear nuestra mudanza de regreso a la superficie. Sabemos que ya no queda nadie arriba, o al menos que las deudas parecen insignificantes y los cobradores se han acomodado con gusto en la alcantarilla, así que no vemos la necesidad de seguir aquí abajo. Mi hermana ha comenzado a entrenar nuevamente a algunas ratas para que se adapten a la luz del sol. Mi madre, por su parte, dedica sus días a pensar en la nueva distribución y acomodo de las demás ratas una vez regresemos a la superficie. Yo, por mi parte, no sé si allá arriba habrá lugar para lo que fuimos acá abajo.`,
]

function ArticuloRatas() {
  return (
    <article className="w-full bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-10 md:p-12 border border-stone-200 shadow-sm space-y-6 text-stone-800 font-body leading-relaxed">
      {/* Editorial Cover Illustration */}
      <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm mb-6">
        <img
          src="/virtud/portada_ratas.jpg"
          alt="Ilustración editorial de La virtud de las ratas"
          className="w-full h-56 sm:h-72 md:h-84 object-cover object-center"
          loading="lazy"
        />
        <div className="bg-stone-50 px-4 py-2 border-t border-stone-200 text-xs font-sub text-stone-500 italic flex items-center justify-between">
          <span>Ilustración editorial para Clip ID</span>
          <span>Galerías subterráneas · Bogotá</span>
        </div>
      </div>

      {/* Paragraphs */}
      {RATAS_PARAGRAPHS.map((p, i) => {
        const isFirst = i === 0
        const isPull = i === 4
        return (
          <div key={i}>
            {isPull && (
              <PullQuote colorKey="orange">
                «En estos casos, la necesidad se convierte en una virtud social invaluable, y el hecho de que nazca de la necesidad no le resta valor.»
              </PullQuote>
            )}
            <p className={`text-base sm:text-lg leading-relaxed ${isFirst
              ? 'first-letter:text-5xl first-letter:font-title first-letter:font-bold first-letter:text-brandOrange first-letter:float-left first-letter:mr-3 first-letter:leading-none'
              : ''}`}>
              {p}
            </p>
          </div>
        )
      })}

      <PullQuote colorKey="orange">
        «Yo, por mi parte, no sé si allá arriba habrá lugar para lo que fuimos acá abajo.»
      </PullQuote>

      <div className="pt-8 border-t border-stone-200 text-center space-y-1">
        <p className="font-title italic text-stone-700 text-base">
          — Felipe Aramburo Jaramillo
        </p>
        <p className="text-xs font-sub text-stone-400">Colombia · 2024</p>
      </div>
    </article>
  )
}

/* ─────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────── */

export default function PanelTexto() {
  const [artSelected, setArtSelected] = useState('miel')

  return (
    <div className="space-y-8">
      {/* ── Section Header ── */}
      <div className="border-b border-stone-200 pb-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-block px-2.5 py-0.5 bg-brandTeal text-white font-sub text-[11px] font-bold rounded-full">
            Sección 1 • Cuentos & Textos
          </span>
          <span className="text-xs text-stone-500 font-sub font-semibold">Archivo Literario</span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-title font-bold text-brandDark leading-tight">
          Cuentos & Textos
        </h2>
        <p className="text-sm sm:text-base text-stone-500 font-sub mt-2">
          Selecciona un artículo para explorar las crónicas y relatos literarios de la comunidad.
        </p>
      </div>

      {/* ── Article Selector ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ARTICULOS.map((art) => (
          <ArticuloCard
            key={art.id}
            art={art}
            isSelected={artSelected === art.id}
            onClick={() => setArtSelected(art.id)}
          />
        ))}
      </div>

      {/* ── Article Viewer ── */}
      {artSelected && (
        <div className="space-y-6 pt-2">
          {/* Article bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-stone-100">
            <div>
              <h3 className={`font-title font-bold text-2xl sm:text-3xl leading-tight ${artSelected === 'miel' ? 'text-brandTeal' : 'text-brandOrange'}`}>
                {ARTICULOS.find(a => a.id === artSelected)?.titulo}
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 font-sub font-semibold mt-1">
                Por <span className="text-stone-700">{ARTICULOS.find(a => a.id === artSelected)?.autor}</span>
                {' · '}{ARTICULOS.find(a => a.id === artSelected)?.fecha}
              </p>
            </div>
          </div>

          {artSelected === 'miel' && <ArticuloMiel />}
          {artSelected === 'ratas' && <ArticuloRatas />}
        </div>
      )}

      {/* ── Empty state (if deselecting) ── */}
      {!artSelected && (
        <div className="text-center py-12 sm:py-16 px-4 bg-stone-50/70 rounded-3xl border border-stone-200/80 my-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-2xl bg-brandTeal/10 flex items-center justify-center text-brandTeal shadow-sm">
            <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.75"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <h3 className="font-title text-xl sm:text-2xl font-bold text-brandDark mb-1">
            Elige una lectura para comenzar
          </h3>
          <p className="text-xs sm:text-sm font-sub text-stone-500 max-w-md mx-auto">
            Selecciona «La Miel» para una crónica real de expedición o «La virtud de las ratas» para un relato literario de supervivencia urbana.
          </p>
          <div className="flex items-center justify-center gap-3 mt-5">
            <button
              onClick={() => setArtSelected('miel')}
              className="px-4 py-2 bg-brandTeal hover:bg-[#205b5b] text-white font-sub text-xs font-bold rounded-xl shadow-sm transition-colors"
            >
              Leer La Miel →
            </button>
            <button
              onClick={() => setArtSelected('ratas')}
              className="px-4 py-2 bg-brandOrange hover:bg-[#e06a3a] text-white font-sub text-xs font-bold rounded-xl shadow-sm transition-colors"
            >
              Leer La virtud de las ratas →
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
