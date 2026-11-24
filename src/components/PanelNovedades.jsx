const NEWS = [
  {
    tag: 'Estreno',
    tagColor: 'bg-brandYellow text-brandDark',
    date: 'Nuevo',
    title: 'Carnupio & Bilongo: En el Mundial',
    desc: 'Lanzamiento del nuevo sketch cómico con las mejores parodias sobre las reglas del fútbol.',
    footerLabel: 'Ver en YouTube',
    footerLabelColor: 'text-brandOrange',
    footerNote: 'Sketch Oficial',
  },
  {
    tag: 'Relatos',
    tagColor: 'bg-brandTeal text-white',
    date: 'Reciente',
    title: 'Nueva Colección de Cuentos & Textos',
    desc: 'Historias populares, crónicas urbanas y relatos cotidianos narrados con la voz de Clip ID.',
    footerLabel: 'Leer historias',
    footerLabelColor: 'text-brandTeal',
    footerNote: 'Lectura libre',
  },
  {
    tag: 'Comunidad',
    tagColor: 'bg-brandOrange text-white',
    date: 'Activo',
    title: 'Canal Oficial y Redes Sociales',
    desc: 'Conéctate con nosotros en Instagram (@clipid.oficial) y Facebook para enterarte de los próximos rodajes.',
    footerLabel: 'Seguir canal',
    footerLabelColor: 'text-brandOrange',
    footerNote: 'Instagram & Facebook',
  },
]

export default function PanelNovedades() {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Panel Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3 sm:pb-4">
        <div>
          <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 bg-brandOrange text-white font-sub text-[11px] sm:text-xs font-bold rounded-full mb-1">
            Sección 2: Novedades
          </span>
          <h3 className="text-xl sm:text-4xl font-title font-bold text-brandDark">
            Novedades y Anuncios Recientes • Clip ID
          </h3>
        </div>
        <span className="text-xs sm:text-sm font-sub font-semibold text-stone-500">Actualizado</span>
      </div>

      {/* News Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-2">
        {NEWS.map((n) => (
          <div
            key={n.title}
            className="bg-stone-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-stone-200 flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <span className={`px-2 py-0.5 text-[11px] sm:text-xs font-bold rounded font-sub ${n.tagColor}`}>
                  {n.tag}
                </span>
                <span className="text-[11px] sm:text-xs text-stone-400">{n.date}</span>
              </div>
              <h4 className="font-title text-base sm:text-xl font-bold text-brandDark">{n.title}</h4>
              <p className="text-stone-600 text-xs sm:text-sm font-body mt-1 sm:mt-2">{n.desc}</p>
            </div>
            <div className="mt-3 pt-2 border-t border-stone-200 flex items-center justify-between">
              <span className={`text-xs font-bold font-sub ${n.footerLabelColor}`}>{n.footerLabel}</span>
              <span className="text-[11px] text-stone-400">{n.footerNote}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
