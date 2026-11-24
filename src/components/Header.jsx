import { useState } from 'react'

const LOGO_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCPxPu8OmmOBGuL9-6mkyVsPebZGe6rVjsQDulj0HxtXyHQyGKEzIwGtsUOgJFjNWD_pZ2GJBQ0U5jCOEH2atpdEvHfF6RmEQ6iM58utWmtPVwt8nOrfj06fC54va-gLwX4uUYx8fW687wIrkHrGxUe-HsSRev-YXb_xiNuyxiuZZ0RRjGNa9HKlyry5arK2MQ5IvYZO-dYuJ0p8IWfgyjaLgdize5_65Le-UQLVjQRQzsD0WPJjH4qaA'

export default function Header({ onCategoryChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  const navSelect = (cat) => {
    setIsMenuOpen(false)
    onCategoryChange(cat)
  }

  return (
    <>
      {/* ── Header Navigation Bar ── */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 py-2 px-3 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Hamburger + Label */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              aria-label="Abrir Menú de Navegación"
              onClick={toggleMenu}
              className="p-1.5 sm:p-2.5 rounded-xl border border-stone-300 text-brandDark hover:bg-brandTeal hover:text-white hover:border-brandTeal transition-colors focus:outline-none focus:ring-2 focus:ring-brandOrange"
            >
              <svg className="w-5 h-5 stroke-current stroke-2" fill="none" viewBox="0 0 24 24">
                <line strokeLinecap="round" x1="4" x2="20" y1="6" y2="6" />
                <line strokeLinecap="round" x1="4" x2="20" y1="12" y2="12" />
                <line strokeLinecap="round" x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
            <span className="text-xs uppercase tracking-widest text-brandTeal font-bold font-sub hidden sm:inline-block">
              Plataforma Oficial
            </span>
          </div>

          {/* Centre: Logo + Brand */}
          <div className="flex items-center space-x-2">
            <img
              src={LOGO_URL}
              alt="Clip ID Logo"
              className="h-7 sm:h-10 w-auto object-contain cursor-pointer transition-transform hover:scale-105"
              onClick={() => onCategoryChange('texto')}
            />
            <span className="font-title text-xl sm:text-2xl font-bold tracking-tight text-black">
              Clip ID
            </span>
          </div>

          {/* Right: CTA + Language */}
          <div className="flex items-center space-x-2">
            <a
              href="#interactive-showcase"
              className="hidden md:inline-flex items-center px-4 py-2 rounded-full text-xs uppercase tracking-wider font-bold bg-brandYellow text-brandDark hover:bg-brandOrange hover:text-white transition-colors duration-200 font-sub"
            >
              Explorar Secciones
            </a>
          </div>
        </div>
      </header>

      {/* ── Slide-out Drawer Navigation ── */}
      <aside
        aria-hidden={!isMenuOpen}
        className={`fixed inset-0 z-50 pointer-events-none transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
          onClick={toggleMenu}
        />

        {/* Panel */}
        <div
          className={`relative z-10 w-80 max-w-[85vw] h-full bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Drawer Header */}
          <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
            <div className="flex items-center space-x-3">
              <img src={LOGO_URL} alt="Logo Clip ID" className="h-8 w-auto object-contain" />
              <span className="font-title text-xl font-bold text-black">Clip ID</span>
            </div>
            <button
              aria-label="Cerrar Menú"
              onClick={toggleMenu}
              className="p-2 rounded-full text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 overflow-y-auto p-5 space-y-1.5 font-sub">
            <button
              onClick={() => navSelect('texto')}
              className="w-full text-left px-3.5 py-2.5 rounded-xl font-bold text-stone-800 hover:bg-brandTeal/10 hover:text-brandTeal transition-colors flex items-center justify-between text-sm"
            >
              <span>Inicio</span>
              <span className="text-xs text-stone-400">✦</span>
            </button>
            <button
              onClick={() => navSelect('texto')}
              className="w-full text-left px-3.5 py-2.5 rounded-xl font-bold text-stone-700 hover:bg-brandTeal/10 hover:text-brandTeal transition-colors flex items-center justify-between text-sm"
            >
              <span>Cuentos & Textos</span>
              <span className="text-[10px] bg-brandTeal text-white px-2 py-0.5 rounded-full font-bold">Relatos</span>
            </button>
            <button
              onClick={() => navSelect('novedades')}
              className="w-full text-left px-3.5 py-2.5 rounded-xl font-bold text-stone-700 hover:bg-brandOrange/10 hover:text-brandOrange transition-colors flex items-center justify-between text-sm"
            >
              <span>Novedades</span>
              <span className="text-[10px] bg-brandOrange text-white px-2 py-0.5 rounded-full font-bold">Nuevo</span>
            </button>
            <button
              onClick={() => navSelect('videos')}
              className="w-full text-left px-3.5 py-2.5 rounded-xl font-bold text-stone-700 hover:bg-brandTeal/10 hover:text-brandTeal transition-colors flex items-center justify-between text-sm"
            >
              <span>Carnupio & Bilongo</span>
              <span className="text-[10px] bg-stone-200 text-stone-600 px-2 py-0.5 rounded-full font-bold">Vídeos</span>
            </button>
            <button
              onClick={() => navSelect('galeria')}
              className="w-full text-left px-3.5 py-2.5 rounded-xl font-bold text-stone-700 hover:bg-brandTeal/10 hover:text-brandTeal transition-colors flex items-center justify-between text-sm"
            >
              <span>Fotos & Recuerdos</span>
              <span className="text-[10px] bg-brandYellow text-stone-800 px-2 py-0.5 rounded-full font-bold">Galería</span>
            </button>

            {/* Contact & Social */}
            <div className="pt-4 mt-3 border-t border-stone-200 text-xs space-y-2 text-stone-600">
              <p className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">Contacto y Redes</p>
              <a href="mailto:clipid.oficial@gmail.com" className="block text-xs text-brandTeal font-semibold hover:underline">
                clipid.oficial@gmail.com
              </a>
              <div className="flex items-center space-x-2 pt-1 flex-wrap gap-y-1.5">
                <a
                  href="https://www.youtube.com/@Clip-ID-Colombia"
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 bg-red-50 hover:bg-red-100 text-red-700 rounded-md text-[11px] font-bold transition-colors"
                >
                  YouTube
                </a>
                <a
                  href="https://www.instagram.com/clipid.oficial/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 rounded-md text-[11px] font-bold text-stone-700 transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61585897929618&sk=about"
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 rounded-md text-[11px] font-bold text-stone-700 transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>
          </nav>

          {/* Drawer Footer */}
          <div className="p-4 border-t border-stone-200 bg-stone-50 text-[11px] text-stone-500 text-center font-body">
            © 2025 <span className="text-black font-semibold">Clip ID</span>. Todos los derechos reservados.
          </div>
        </div>
      </aside>
    </>
  )
}
