import { useState, Suspense, lazy } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './components/layout/LoadingScreen'
import CustomCursor from './components/layout/CustomCursor'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Certificates from './components/sections/Certificates'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

// Lazy load the heavy 3D background
const BackgroundScene = lazy(() => import('./components/3d/BackgroundScene'))

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {/* Custom Cursor — desktop only */}
      <CustomCursor />

      {/* Loading screen */}
      <AnimatePresence>
        {!loaded && (
          <LoadingScreen onComplete={() => setLoaded(true)} />
        )}
      </AnimatePresence>

      {/* Main content */}
      {loaded && (
        <>
          {/* 3D Background */}
          <Suspense fallback={null}>
            <BackgroundScene />
          </Suspense>

          {/* Navigation */}
          <Navbar />

          {/* Page sections */}
          <main id="main-content">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Certificates />
            <Contact />
          </main>

          <Footer />
        </>
      )}
    </>
  )
}
