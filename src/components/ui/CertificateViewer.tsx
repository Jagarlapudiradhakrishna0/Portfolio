import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Certificate } from '../../data/portfolio'
import styles from './CertificateViewer.module.css'

interface Props {
  certificates: Certificate[]
  initialIndex: number
  onClose: () => void
}

export default function CertificateViewer({ certificates, initialIndex, onClose }: Props) {
  const [index, setIndex] = useState(initialIndex)
  const [direction, setDirection] = useState(0)
  const touchStartX = useRef<number | null>(null)

  const current = certificates[index]

  const goNext = () => {
    if (index < certificates.length - 1) {
      setDirection(1)
      setIndex(i => i + 1)
    }
  }

  const goPrev = () => {
    if (index > 0) {
      setDirection(-1)
      setIndex(i => i - 1)
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [index])

  // Touch swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (diff > 50) goNext()
    else if (diff < -50) goPrev()
    touchStartX.current = null
  }

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  }

  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Certificate viewer"
    >
      <motion.div
        className={styles.modal}
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={e => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Header */}
        <div className={styles.modalHeader}>
          <div className={styles.certInfo}>
            <span className={styles.counter}>
              {String(index + 1).padStart(2, '0')} / {String(certificates.length).padStart(2, '0')}
            </span>
            <span className={styles.certTitle}>{current.shortTitle}</span>
            <span className={styles.certIssuer}>{current.issuer}</span>
          </div>
          <div className={styles.headerActions}>
            <a
              href={current.file}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.downloadBtn}
              aria-label="Open certificate"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                <polyline points="15,3 21,3 21,9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
            <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Certificate display */}
        <div className={styles.certFrame}>
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current.id}
              className={styles.certContent}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <iframe
                src={`${current.file}#toolbar=0&navpanes=0&scrollbar=0`}
                title={current.title}
                className={styles.certIframe}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className={styles.nav}>
          <button
            className={`${styles.navBtn} ${index === 0 ? styles.navBtnDisabled : ''}`}
            onClick={goPrev}
            disabled={index === 0}
            aria-label="Previous certificate"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15,18 9,12 15,6"/>
            </svg>
            Previous
          </button>

          {/* Dots */}
          <div className={styles.dots}>
            {certificates.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
                onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i) }}
                aria-label={`Go to certificate ${i + 1}`}
              />
            ))}
          </div>

          <button
            className={`${styles.navBtn} ${index === certificates.length - 1 ? styles.navBtnDisabled : ''}`}
            onClick={goNext}
            disabled={index === certificates.length - 1}
            aria-label="Next certificate"
          >
            Next
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9,18 15,12 9,6"/>
            </svg>
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}
