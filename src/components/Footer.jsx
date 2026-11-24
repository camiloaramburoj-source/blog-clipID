const LOGO_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCPxPu8OmmOBGuL9-6mkyVsPebZGe6rVjsQDulj0HxtXyHQyGKEzIwGtsUOgJFjNWD_pZ2GJBQ0U5jCOEH2atpdEvHfF6RmEQ6iM58utWmtPVwt8nOrfj06fC54va-gLwX4uUYx8fW687wIrkHrGxUe-HsSRev-YXb_xiNuyxiuZZ0RRjGNa9HKlyry5arK2MQ5IvYZO-dYuJ0p8IWfgyjaLgdize5_65Le-UQLVjQRQzsD0WPJjH4qaA'

export default function Footer({ onCategoryChange }) {
  return (
    <footer className="bg-white border-t border-stone-200 py-6 px-4 sm:px-8 mt-6 sm:mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
        {/* Brand */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <img src={LOGO_URL} alt="Clip ID Logotipo" className="h-8 sm:h-10 w-auto object-contain" />
          <div>
            <span className="font-title text-lg sm:text-xl font-bold text-black">Clip ID</span>
            <p className="text-xs text-stone-500 font-body">Historias, cultura, humor y contenido audiovisual con identidad.</p>
          </div>
        </div>

        {/* Nav Links & Social */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 font-sub text-xs font-bold text-stone-600">
            <button onClick={() => onCategoryChange('texto')} className="hover:text-brandTeal transition-colors">
              Cuentos & Textos
            </button>
            <button onClick={() => onCategoryChange('novedades')} className="hover:text-brandOrange transition-colors">
              Novedades
            </button>
            <button onClick={() => onCategoryChange('videos')} className="hover:text-brandTeal transition-colors">
              Carnupio & Bilongo
            </button>
            <button onClick={() => onCategoryChange('galeria')} className="hover:text-brandTeal transition-colors">
              Fotos & Recuerdos
            </button>
          </div>
          <div className="flex items-center gap-3 text-xs text-stone-500 font-sub flex-wrap justify-center">
            <a href="mailto:clipid.oficial@gmail.com" className="hover:text-brandTeal transition-colors">
              clipid.oficial@gmail.com
            </a>
            <span>•</span>
            <a
              href="https://www.youtube.com/@Clip-ID-Colombia"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-600 transition-colors font-bold"
            >
              YouTube
            </a>
            <span>•</span>
            <a
              href="https://www.instagram.com/clipid.oficial/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brandOrange transition-colors"
            >
              Instagram
            </a>
            <span>•</span>
            <a
              href="https://www.facebook.com/profile.php?id=61585897929618&sk=about"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brandTeal transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-xs text-stone-400 font-body text-center md:text-right">
          Clip ID 2025
        </div>
      </div>
    </footer>
  )
}
