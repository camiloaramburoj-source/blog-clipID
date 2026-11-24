const CARDS = [
  {
    key: 'texto',
    position: 'Sección 1 • Textos',
    title: 'Cuentos & Textos',
    desc: 'Crónicas de viaje, ficción y relatos con identidad.',
    footer: 'Explorar textos',
    iconColor: 'bg-brandTeal/10 text-brandTeal',
    icon: (
      <path
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    ),
  },
  {
    key: 'novedades',
    position: 'Sección 2 • Novedades',
    title: 'Novedades',
    desc: 'Últimos lanzamientos, estrenos de sketches y noticias del canal.',
    footer: 'Ver anuncios',
    iconColor: 'bg-brandOrange/10 text-brandOrange',
    icon: (
      <path
        d="M13 10V3L4 14h7v7l9-11h-7z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    ),
  },
  {
    key: 'videos',
    position: 'Sección 3 • Humor & Parodias',
    title: 'Carnupio & Bilongo',
    desc: 'Sketches de comedia, parodias y las ocurrencias de los personajes.',
    footer: 'Ver episodios',
    iconColor: 'bg-brandYellow/20 text-brandDark',
    icon: (
      <>
        <path
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="text-brandTeal"
        />
        <path
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="text-brandTeal"
        />
      </>
    ),
  },
  {
    key: 'galeria',
    position: 'Sección 4 • Archivo Visual',
    title: 'Fotos & Recuerdos',
    desc: 'Momentos memorables, detrás de cámaras y archivo de la comunidad.',
    footer: 'Ver galería',
    iconColor: 'bg-brandTeal/10 text-brandTeal',
    icon: (
      <path
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    ),
  },
]

export default function QuadrantGrid({ activeCategory, onCategoryChange }) {
  return (
    <section className="space-y-2 sm:space-y-6" id="interactive-showcase">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b border-stone-200 pb-1.5 sm:pb-3">
        <div>
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brandOrange font-sub">
            Cuadrantes Interactivos
          </span>
          <h2 className="text-base sm:text-3xl font-title font-bold text-brandDark leading-tight">
            4 Espacios en Pantalla
          </h2>
        </div>
        <p className="text-[11px] sm:text-sm text-stone-500 font-body text-right">
          Toca un cuadrante para ver
        </p>
      </div>

      {/* 2×2 Grid */}
      <div className="grid grid-cols-2 gap-2.5 sm:gap-6">
        {CARDS.map((card) => {
          const isActive = activeCategory === card.key
          return (
            <article
              key={card.key}
              role="button"
              tabIndex={0}
              onClick={() => onCategoryChange(card.key)}
              onKeyDown={(e) => e.key === 'Enter' && onCategoryChange(card.key)}
              style={isActive ? { borderColor: '#FF8552' } : {}}
              className={`wireframe-card cursor-pointer bg-white rounded-xl sm:rounded-3xl p-3 sm:p-7 border-2 shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[145px] sm:min-h-[210px] transition-all ${
                isActive ? 'active-card' : 'border-stone-200'
              }`}
            >
              {/* Top Row: Icon + Active Pill */}
              <div className="flex items-center justify-between">
                <div className={`p-1.5 sm:p-2.5 rounded-lg sm:rounded-2xl ${card.iconColor}`}>
                  <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {card.icon}
                  </svg>
                </div>
                <span
                  className={`items-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold font-sub bg-brandOrange text-white shadow-sm ${
                    isActive ? 'inline-flex' : 'hidden'
                  }`}
                >
                  Activo
                </span>
              </div>

              {/* Middle: Labels */}
              <div className="my-auto py-1.5">
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-stone-400 font-semibold font-sub block truncate">
                  {card.position}
                </span>
                <h3 className="text-base sm:text-2xl font-title font-bold text-brandDark leading-tight truncate">
                  {card.title}
                </h3>
                <p className="hidden sm:block text-stone-600 text-sm font-body line-clamp-2 mt-1 leading-snug">
                  {card.desc}
                </p>
              </div>

              {/* Bottom Row */}
              <div className="pt-2 sm:pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] sm:text-xs text-brandTeal font-bold font-sub">
                <span className="truncate">{card.footer}</span>
                <span className="text-xs sm:text-sm">→</span>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
