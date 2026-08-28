import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  // Close menu on resize to desktop width
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 880) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Close menu on ESC key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  // Scroll listener for sticky active section & navbar appearance
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      const sectionIds = navLinks.map(l => l.href.slice(1))
      const scrollPos = window.scrollY + 140

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i])
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionIds[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = useCallback((href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <>
      <header className={styles.headerWrapper}>
        <motion.nav
          className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          aria-label="Main Navigation"
        >
          <div className={styles.inner}>
            {/* Logo */}
            <button
              className={styles.logo}
              onClick={() => handleNavClick('#home')}
              aria-label="Radha Krishna Portfolio Home"
            >
              <span className={styles.logoText}>JRK</span>
              <span className={styles.logoDot} />
            </button>

            {/* Desktop Navigation Links */}
            <ul className={styles.links} role="list">
              {navLinks.map(link => {
                const isActive = activeSection === link.href.slice(1)
                return (
                  <li key={link.href}>
                    <button
                      className={`${styles.link} ${isActive ? styles.active : ''}`}
                      onClick={() => handleNavClick(link.href)}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {link.label}
                      {isActive && (
                        <motion.span
                          className={styles.activeIndicator}
                          layoutId="nav-pill-indicator"
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        />
                      )}
                    </button>
                  </li>
                )
              })}
            </ul>

            {/* Mobile Hamburger Button */}
            <button
              className={styles.hamburger}
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={menuOpen}
            >
              <span className={`${styles.ham} ${menuOpen ? styles.hamOpenTop : ''}`} />
              <span className={`${styles.ham} ${menuOpen ? styles.hamOpenMid : ''}`} />
              <span className={`${styles.ham} ${menuOpen ? styles.hamOpenBot : ''}`} />
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Animated Glass Menu */}
      <AnimatePresence>
        {menuOpen && (
          <div className={styles.mobileOverlay} onClick={() => setMenuOpen(false)}>
            <motion.div
              className={styles.mobileMenu}
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={e => e.stopPropagation()}
            >
              <div className={styles.mobileHeader}>
                <span className={styles.mobileBrand}>Navigation</span>
                <button
                  className={styles.mobileCloseBtn}
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close Navigation Menu"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              <ul className={styles.mobileLinks} role="list">
                {navLinks.map((link, i) => {
                  const isActive = activeSection === link.href.slice(1)
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <button
                        className={`${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ''}`}
                        onClick={() => handleNavClick(link.href)}
                      >
                        <span className={styles.mobileLinkNum}>0{i + 1}</span>
                        <span className={styles.mobileLinkLabel}>{link.label}</span>
                        {isActive && <span className={styles.mobileActiveDot} />}
                      </button>
                    </motion.li>
                  )
                })}
              </ul>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
