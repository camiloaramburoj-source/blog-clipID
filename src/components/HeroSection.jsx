const LOGO_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCPxPu8OmmOBGuL9-6mkyVsPebZGe6rVjsQDulj0HxtXyHQyGKEzIwGtsUOgJFjNWD_pZ2GJBQ0U5jCOEH2atpdEvHfF6RmEQ6iM58utWmtPVwt8nOrfj06fC54va-gLwX4uUYx8fW687wIrkHrGxUe-HsSRev-YXb_xiNuyxiuZZ0RRjGNa9HKlyry5arK2MQ5IvYZO-dYuJ0p8IWfgyjaLgdize5_65Le-UQLVjQRQzsD0WPJjH4qaA'

export default function HeroSection() {
  return (
    <section
      className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-6 md:p-10 border border-stone-200 sm:border-2 shadow-sm relative overflow-hidden"
      data-purpose="hero-wireframe-area"
    >
      <div className="flex items-center gap-3 sm:gap-8">
        {/* Logo Badge */}
        <div className="flex-shrink-0 flex items-center justify-center p-1.5 sm:p-6 bg-stone-50 rounded-xl sm:rounded-2xl border border-stone-200">
          <div className="relative w-14 h-14 sm:w-36 sm:h-36 md:w-44 md:h-44 p-1 sm:p-3 bg-white rounded-full shadow-sm sm:shadow-md flex items-center justify-center border-2 sm:border-4 border-brandTeal/20 hover:scale-105 transition-transform duration-300">
            <img
              src={LOGO_URL}
              alt="Logotipo de Clip ID"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Headline */}
        <div className="flex flex-col justify-center min-w-0 flex-1">
          <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl text-brandDark font-title font-bold leading-tight">
            ¿Quiénes somos? <span className="text-black">Clip ID</span>
          </h1>
          <p className="hidden sm:block text-base sm:text-lg text-stone-600 font-body leading-relaxed max-w-2xl mt-1">
            Conectando historias, cultura y humor a través de relatos, sketches y experiencias audiovisuales con identidad.
          </p>
          {/* Colour Bars */}
          <div
            aria-label="Indicadores del boceto original"
            className="pt-1 flex items-center space-x-1.5 sm:space-x-3"
          >
            <div className="w-6 sm:w-12 h-1 sm:h-1.5 bg-brandTeal rounded-full" />
            <div className="w-4 sm:w-8 h-1 sm:h-1.5 bg-brandOrange rounded-full" />
            <div className="w-3 sm:w-6 h-1 sm:h-1.5 bg-brandYellow rounded-full" />
            <div className="w-2 sm:w-4 h-1 sm:h-1.5 bg-stone-300 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
