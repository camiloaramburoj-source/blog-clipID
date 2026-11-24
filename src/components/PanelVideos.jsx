import { useState } from 'react'

const YOUTUBE_VIDEOS = [
  {
    id: 'q89sinQty-U',
    num: '01',
    title: 'Carnupio & Bilongo En el Mundial ⚽️',
    subtitle: 'Comedia • Las reglas del fútbol',
    category: 'Sketch Principal',
    description: 'Parodia de Carnupio y Bilongo explicando de forma hilarante las reglas del fútbol durante la fiebre del mundial.',
    duration: '04:12',
  },
  {
    id: 'pPCwGYlwdMs',
    num: '02',
    title: '¿La PEREZA es una ENFERMEDAD Profesional? 😴🤣',
    subtitle: 'De Locha Libre Ep. 04',
    category: 'De Locha Libre',
    description: 'Divertido debate y parodia sobre la pereza, la rutina laboral y las excusas más creativas del día a día.',
    duration: '05:30',
  },
  {
    id: 'gy-VwtwCtWg',
    num: '03',
    title: 'Cuando llueven críticas…',
    subtitle: 'De Locha Libre Ep. 02',
    category: 'De Locha Libre',
    description: 'Capítulo cómico que aborda con sátira cómo enfrentar los comentarios y las críticas ajenas.',
    duration: '04:45',
  },
  {
    id: 'cdMFIwcOkx8',
    num: '04',
    title: 'De Locha Libre Ep. 01',
    subtitle: 'Capítulo estreno • Humor y sátira',
    category: 'De Locha Libre',
    description: 'El inicio de la serie De Locha Libre de Clip ID, explorando el humor y la idiosincrasia popular.',
    duration: '06:10',
  },
  {
    id: 'j-rwBaHoyVw',
    num: '05',
    title: 'La Envidia',
    subtitle: 'Reflexión y comedia cotidiana',
    category: 'Sketch & Reflexión',
    description: 'Sketch con el sello de Clip ID que retrata con picardía las dinámicas de la envidia entre vecinos y amigos.',
    duration: '04:18',
  },
  {
    id: 'QK2txDEr-Us',
    num: '06',
    title: 'El Costado Más Abrasador Del Infierno',
    subtitle: 'Memorias y Realidades de Colombia',
    category: 'Crónica & Memoria',
    description: 'Pieza audiovisual profunda de Clip ID sobre las memorias, contrastes y relatos sentidos de Colombia.',
    duration: '07:25',
  },
]

export default function PanelVideos() {
  const [currentVideo, setCurrentVideo] = useState(YOUTUBE_VIDEOS[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [copied, setCopied] = useState(false)

  const selectVideo = (video) => {
    setCurrentVideo(video)
    setIsPlaying(true)
  }

  const handleShare = () => {
    const url = `https://www.youtube.com/watch?v=${currentVideo.id}`
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Panel Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 sm:pb-4">
        <div>
          <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 bg-brandTeal text-white font-sub text-[11px] sm:text-xs font-bold rounded-full mb-1">
            Sección 3: Carnupio & Bilongo
          </span>
          <h3 className="text-xl sm:text-4xl font-title font-bold text-brandDark">
            Vídeos Oficiales • Clip ID Colombia
          </h3>
        </div>
        <a
          href="https://www.youtube.com/@Clip-ID-Colombia"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-sub font-bold bg-red-600 hover:bg-red-700 text-white shadow-sm transition-all hover:scale-105"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          <span>Canal @Clip-ID-Colombia</span>
          <span>↗</span>
        </a>
      </div>

      {/* Player + Playlist Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-start">
        {/* Main Showcase Player */}
        <div className="lg:col-span-8 bg-stone-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-stone-800 text-white">
          {/* Video Container */}
          <div className="relative aspect-video bg-black overflow-hidden group">
            {isPlaying ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${currentVideo.id}?autoplay=1&rel=0&modestbranding=1`}
                title={currentVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div
                onClick={() => setIsPlaying(true)}
                className="relative w-full h-full cursor-pointer group"
              >
                {/* Thumbnail */}
                <img
                  src={`https://img.youtube.com/vi/${currentVideo.id}/hqdefault.jpg`}
                  alt={currentVideo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40 group-hover:from-black/70 transition-colors" />

                {/* Big Play Button Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10">
                  <button
                    aria-label={`Reproducir ${currentVideo.title}`}
                    className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl group-hover:bg-red-500 group-hover:scale-110 transition-all duration-300"
                  >
                    <svg className="w-6 h-6 sm:w-9 sm:h-9 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                  <span className="mt-3 text-[10px] sm:text-xs font-sub uppercase tracking-widest text-brandYellow font-bold drop-shadow">
                    Reproducir en la página
                  </span>
                  <h4 className="text-sm sm:text-xl font-title font-bold mt-1 text-white max-w-lg line-clamp-2 drop-shadow">
                    {currentVideo.title}
                  </h4>
                </div>

                {/* Duration Badge */}
                <span className="absolute bottom-3 right-3 bg-black/80 text-[10px] sm:text-xs px-2 py-0.5 sm:px-2.5 sm:py-1 rounded font-mono text-stone-200">
                  {currentVideo.duration} • YouTube
                </span>
                <span className="absolute top-3 left-3 bg-red-600/90 text-[10px] sm:text-xs px-2 py-0.5 rounded font-sub font-bold text-white uppercase tracking-wider">
                  {currentVideo.category}
                </span>
              </div>
            )}
          </div>

          {/* Player Footer & Actions */}
          <div className="p-3 sm:p-5 bg-stone-900 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="min-w-0 flex-1">
              <span className="text-[10px] sm:text-xs text-stone-400 font-sub block truncate">
                Canal Oficial: @Clip-ID-Colombia
              </span>
              <h4 className="text-sm sm:text-base font-sub font-bold text-stone-100 truncate">
                {currentVideo.title}
              </h4>
              <p className="text-xs text-stone-400 font-body line-clamp-1 mt-0.5">
                {currentVideo.description}
              </p>
            </div>
            <div className="flex items-center space-x-2 flex-shrink-0">
              <button
                onClick={handleShare}
                className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-xs text-stone-300 font-sub transition-colors flex items-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                <span>{copied ? '¡Copiado!' : 'Compartir'}</span>
              </button>
              <a
                href={`https://www.youtube.com/watch?v=${currentVideo.id}`}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-sub font-bold transition-colors inline-flex items-center gap-1.5"
              >
                <span>Ver en YouTube</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Video Playlist Selector */}
        <div className="lg:col-span-4 space-y-2 sm:space-y-2.5">
          <div className="flex items-center justify-between pb-1">
            <h4 className="font-sub font-bold text-xs sm:text-sm uppercase tracking-wider text-stone-500">
              Vídeos del Canal ({YOUTUBE_VIDEOS.length})
            </h4>
            <span className="text-[11px] font-sub text-stone-400">@Clip-ID-Colombia</span>
          </div>

          <div className="space-y-2 max-h-[480px] overflow-y-auto pr-1">
            {YOUTUBE_VIDEOS.map((video) => {
              const isActive = currentVideo.id === video.id
              return (
                <div
                  key={video.id}
                  onClick={() => selectVideo(video)}
                  className={`p-2.5 rounded-xl border cursor-pointer flex items-center space-x-3 transition-all ${
                    isActive
                      ? 'border-brandTeal bg-brandTeal/5 ring-1 ring-brandTeal/40 shadow-sm'
                      : 'border-stone-200 hover:border-brandTeal hover:bg-stone-50'
                  }`}
                >
                  {/* Thumbnail Thumbnail */}
                  <div className="relative w-16 h-10 sm:w-20 sm:h-12 flex-shrink-0 rounded-lg overflow-hidden bg-stone-900 border border-stone-200">
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    {isActive && (
                      <div className="absolute inset-0 bg-brandTeal/30 flex items-center justify-center">
                        <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-sub font-bold text-brandDark truncate">
                      {video.title}
                    </p>
                    <p className="text-[11px] text-stone-500 font-body truncate">
                      {video.subtitle}
                    </p>
                  </div>

                  {/* Status / Duration */}
                  <div className="text-right flex-shrink-0">
                    <span
                      className={`text-[10px] font-bold font-sub block ${
                        isActive ? 'text-brandOrange' : 'text-stone-400'
                      }`}
                    >
                      {isActive ? 'En pantalla' : video.duration}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Subscribe Banner */}
          <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 flex items-center justify-between gap-2 mt-3">
            <div className="min-w-0">
              <p className="text-xs font-sub font-bold text-brandDark">¿Te gusta este contenido?</p>
              <p className="text-[11px] text-stone-500 font-body truncate">Suscríbete para ver nuevos episodios</p>
            </div>
            <a
              href="https://www.youtube.com/@Clip-ID-Colombia?sub_confirmation=1"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-sub text-[11px] font-bold flex-shrink-0 transition-colors"
            >
              Suscribirse
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
