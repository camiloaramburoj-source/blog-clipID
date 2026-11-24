import { useState } from 'react'

const PHOTOS = [
  {
    category: 'cronica',
    label: 'La Miel 1974',
    labelColor: 'text-brandTeal',
    image: '/cronica/foto_pagina_8.jpg',
    title: 'El Dodge Dart en Villeta',
    desc: 'Los muchachos con la cámara fotográfica junto al prestigioso abogado conductor tras el viaje desde Honda.',
    meta: 'Archivo Histórico • Hernando Aramburo',
  },
  {
    category: 'cronica',
    label: 'La Miel 1974',
    labelColor: 'text-brandOrange',
    image: '/cronica/foto_pagina_6.jpg',
    title: 'Mauricio «Maduca» Durán Castro',
    desc: 'El novato del grupo e hijo de la hacienda Lucerna, inmortalizado sonriente tras la aventura del toro.',
    meta: 'Archivo Histórico • Hernando Aramburo',
  },
  {
    category: 'cronica',
    label: 'La Miel 1974',
    labelColor: 'text-brandTeal',
    image: '/cronica/foto_pagina_5.jpg',
    title: 'Campamento en el Magdalena Medio',
    desc: 'La expedición juvenil a orillas del río tras la noche del matadero y antes de la huida de los terneros.',
    meta: 'Archivo Histórico • Hernando Aramburo',
  },
  {
    category: 'cronica',
    label: 'La Miel 1974',
    labelColor: 'text-brandDark',
    image: '/cronica/foto_pagina_10.jpg',
    title: 'Los Seis Amigos de Colegio',
    desc: '«Fuimos simplemente seis muchachos que salieron de paseo... y terminó convirtiéndose en una historia que vale la pena contar».',
    meta: 'Archivo Histórico • FIN',
  },
  {
    category: 'rodaje',
    label: 'Canal Clip ID',
    labelColor: 'text-red-600',
    image: 'https://img.youtube.com/vi/q89sinQty-U/hqdefault.jpg',
    title: 'Carnupio & Bilongo En el Mundial',
    desc: 'Rodaje del sketch de comedia y parodia de fútbol en el canal Clip ID.',
    meta: 'Producción Clip ID',
  },
  {
    category: 'rodaje',
    label: 'Canal Clip ID',
    labelColor: 'text-brandOrange',
    image: 'https://img.youtube.com/vi/pPCwGYlwdMs/hqdefault.jpg',
    title: '¿La Pereza es Enfermedad Profesional?',
    desc: 'Bloopers y mejores momentos del episodio 04 de De Locha Libre.',
    meta: 'Producción Clip ID',
  },
]

const FILTERS = [
  { key: 'todos', label: 'Todos' },
  { key: 'cronica', label: 'Paseo La Miel (1974)' },
  { key: 'rodaje', label: 'Canal Clip ID' },
]

export default function PanelGaleria() {
  const [activeFilter, setActiveFilter] = useState('todos')
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const visible = PHOTOS.filter(
    (p) => activeFilter === 'todos' || p.category === activeFilter
  )

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Panel Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3 sm:pb-4">
        <div>
          <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 bg-brandYellow text-brandDark font-sub text-[11px] sm:text-xs font-bold rounded-full mb-1">
            Sección 4: Fotos & Recuerdos
          </span>
          <h3 className="text-xl sm:text-4xl font-title font-bold text-brandDark">
            Galería de Momentos • Archivo Fotográfico
          </h3>
        </div>
        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-3 py-1.5 rounded-full text-xs font-sub font-bold transition-all ${
                activeFilter === f.key
                  ? 'bg-brandTeal text-white shadow-sm'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-2">
        {visible.map((photo) => (
          <div
            key={photo.title}
            onClick={() => setSelectedPhoto(photo)}
            className="bg-stone-50 rounded-xl sm:rounded-2xl overflow-hidden border border-stone-200 group transition-all hover:shadow-md cursor-pointer flex flex-col justify-between"
          >
            <div className="h-44 sm:h-52 bg-stone-900 relative overflow-hidden flex items-center justify-center">
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className={`absolute top-3 left-3 bg-white/95 text-[10px] font-bold px-2 py-0.5 rounded-md font-sub shadow-sm ${photo.labelColor}`}>
                {photo.label}
              </span>
            </div>
            <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
              <div>
                <h5 className="font-title text-base sm:text-lg font-bold text-brandDark leading-snug">
                  {photo.title}
                </h5>
                <p className="text-xs text-stone-600 font-body mt-1 leading-relaxed">
                  {photo.desc}
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-stone-200 flex items-center justify-between text-xs text-stone-400 font-sub">
                <span className="truncate">{photo.meta}</span>
                <span className="text-brandOrange font-semibold flex-shrink-0 ml-1">Ampliar ↗</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl space-y-3"
          >
            <div className="relative bg-black max-h-[70vh] flex items-center justify-center">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="max-h-[70vh] w-auto object-contain"
              />
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-3 right-3 bg-black/60 hover:bg-black/90 text-white rounded-full p-2 transition-colors"
                aria-label="Cerrar"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4 sm:p-6 space-y-2">
              <span className={`text-xs font-sub font-bold uppercase tracking-wider ${selectedPhoto.labelColor}`}>
                {selectedPhoto.label} • {selectedPhoto.meta}
              </span>
              <h4 className="font-title text-xl sm:text-2xl font-bold text-brandDark">
                {selectedPhoto.title}
              </h4>
              <p className="text-sm text-stone-600 font-body leading-relaxed">
                {selectedPhoto.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
