import { useState, useRef } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import QuadrantGrid from './components/QuadrantGrid'
import PanelTexto from './components/PanelTexto'
import PanelNovedades from './components/PanelNovedades'
import PanelVideos from './components/PanelVideos'
import PanelGaleria from './components/PanelGaleria'
import Footer from './components/Footer'

export default function App() {
  const [activeCategory, setActiveCategory] = useState('texto')
  const detailRef = useRef(null)

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat)
    // Smooth scroll to detail container on mobile
    if (window.innerWidth < 768 && detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="bg-stone-100 text-brandDark min-h-screen flex flex-col antialiased">
      <Header onCategoryChange={handleCategoryChange} />

      <main className="flex-grow max-w-7xl mx-auto w-full px-3 sm:px-6 lg:px-8 py-3 sm:py-8 md:py-12 flex flex-col gap-4 sm:gap-10 relative z-10">
        {/* Hero */}
        <HeroSection />

        {/* Quadrant Selector Grid */}
        <QuadrantGrid
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        {/* Dynamic Detail Panel */}
        <section
          ref={detailRef}
          className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-10 border border-stone-200 sm:border-2 shadow-lg relative min-h-[360px] sm:min-h-[460px] transition-all duration-300"
        >
          {activeCategory === 'texto' && (
            <PanelTexto onCategoryChange={handleCategoryChange} />
          )}
          {activeCategory === 'novedades' && <PanelNovedades />}
          {activeCategory === 'videos' && <PanelVideos />}
          {activeCategory === 'galeria' && <PanelGaleria />}
        </section>
      </main>

      <Footer onCategoryChange={handleCategoryChange} />
    </div>
  )
}
