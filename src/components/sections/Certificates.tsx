import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { certificates } from '../../data/portfolio'
import CertificateViewer from '../ui/CertificateViewer'
import styles from './Certificates.module.css'

type Tab = 'internship' | 'course'

export default function Certificates() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [activeTab, setActiveTab] = useState<Tab>('internship')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [viewerOpen, setViewerOpen] = useState(false)
  const [viewerIndex, setViewerIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)

  const activeCertificates = certificates.filter(c => c.category === activeTab)
  const currentCert = activeCertificates[currentIndex] || activeCertificates[0]
  const total = activeCertificates.length

  // Switch tabs cleanly and reset index
  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab)
    setCurrentIndex(0)
    setDirection(0)
  }

  const goNext = useCallback(() => {
    setDirection(1)
    setCurrentIndex(prev => (prev + 1) % total)
  }, [total])

  const goPrev = useCallback(() => {
    setDirection(-1)
    setCurrentIndex(prev => (prev - 1 + total) % total)
  }, [total])

  // Keyboard controls for carousel when section is in view
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewerOpen) return // Let modal handle its own keys
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goNext, goPrev, viewerOpen])

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (diff > 45) {
      goNext()
    } else if (diff < -45) {
      goPrev()
    }
    touchStartX.current = null
  }

  const openModal = (idx: number) => {
    setViewerIndex(idx)
    setViewerOpen(true)
  }

  // Animation variants for smooth sliding
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
      scale: 0.96,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 },
      },
    }),
  }

  const tabs: { id: Tab; label: string }[] = [
    { id: 'internship', label: 'Internships' },
    { id: 'course', label: 'Courses' },
  ]

  return (
    <section id="certificates" className={`section ${styles.certs}`} ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Verified Credentials</div>
          <h2 className={`display-md ${styles.title}`}>
            Certificates &amp; <span className="blue-text">Trainings</span>
          </h2>
          <p className={`body-md ${styles.subtitle}`}>
            Official credentials verified across specialized engineering domains.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className={styles.tabs}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          role="tablist"
        >
          {tabs.map(tab => {
            const count = certificates.filter(c => c.category === tab.id).length
            return (
              <button
                key={tab.id}
                className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ''}`}
                onClick={() => handleTabChange(tab.id)}
                role="tab"
                aria-selected={activeTab === tab.id}
                id={`tab-${tab.id}`}
              >
                <span>{tab.label}</span>
                <span className={styles.tabCount}>{count}</span>
                {activeTab === tab.id && (
                  <motion.div
                    className={styles.tabIndicator}
                    layoutId="cert-tab-indicator"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
              </button>
            )
          })}
        </motion.div>

        {/* Sliding Window Carousel */}
        <motion.div
          className={styles.carouselContainer}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Stage */}
          <div className={styles.stage}>
            {/* Left Nav Arrow */}
            <button
              className={`${styles.navArrow} ${styles.navLeft}`}
              onClick={goPrev}
              aria-label="Previous Certificate"
              id="cert-prev-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <polyline points="15,18 9,12 15,6" />
              </svg>
            </button>

            {/* Active Card Window */}
            <div className={styles.cardWindow}>
              <AnimatePresence custom={direction} mode="wait">
                {currentCert && (
                  <motion.div
                    key={`${activeTab}-${currentCert.id}`}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className={styles.activeCard}
                  >
                    {/* Left side: Certificate Preview Window */}
                    <div className={styles.previewBox}>
                      <iframe
                        src={`${currentCert.file}#toolbar=0&navpanes=0&scrollbar=0&page=1`}
                        title={currentCert.title}
                        className={styles.previewIframe}
                        tabIndex={-1}
                        aria-hidden="true"
                      />
                      <div className={styles.previewOverlay} />
                      <div className={styles.previewBadge}>
                        <span>{activeTab === 'internship' ? 'Internship' : 'Course'}</span>
                      </div>
                    </div>

                    {/* Right side: Certificate Metadata & Actions */}
                    <div className={styles.metaBox}>
                      <div className={styles.metaHeader}>
                        <div className={styles.counterBadge}>
                          {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                        </div>
                        <span className={styles.issuerTag}>{currentCert.issuer}</span>
                      </div>

                      <h3 className={styles.certHeading}>{currentCert.shortTitle}</h3>
                      <p className={styles.fullTitleText}>{currentCert.title}</p>

                      <div className={styles.actionRow}>
                        <button
                          className={`btn ${styles.viewButton}`}
                          onClick={() => openModal(currentIndex)}
                          id={`view-cert-${currentCert.id}`}
                          aria-label={`View ${currentCert.shortTitle}`}
                        >
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                          View Certificate
                        </button>

                        <a
                          href={currentCert.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.externalLink}
                          aria-label="Open PDF directly"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                            <polyline points="15,3 21,3 21,9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right Nav Arrow */}
            <button
              className={`${styles.navArrow} ${styles.navRight}`}
              onClick={goNext}
              aria-label="Next Certificate"
              id="cert-next-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <polyline points="9,18 15,12 9,6" />
              </svg>
            </button>
          </div>

          {/* Carousel Footer: Dots & Counter */}
          <div className={styles.carouselFooter}>
            <div className={styles.dotsTrack}>
              {activeCertificates.map((cert, i) => (
                <button
                  key={cert.id}
                  className={`${styles.dot} ${i === currentIndex ? styles.dotActive : ''}`}
                  onClick={() => {
                    setDirection(i > currentIndex ? 1 : -1)
                    setCurrentIndex(i)
                  }}
                  aria-label={`Jump to certificate ${i + 1}`}
                />
              ))}
            </div>
            <span className={styles.footerHint}>Use arrows or swipe to navigate</span>
          </div>
        </motion.div>
      </div>

      {/* Sliding Modal Viewer */}
      <AnimatePresence>
        {viewerOpen && (
          <CertificateViewer
            certificates={activeCertificates}
            initialIndex={viewerIndex}
            onClose={() => setViewerOpen(false)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
