import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './LoadingScreen.module.css'

interface Props {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: Props) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    let p = 0
    intervalRef.current = setInterval(() => {
      p += Math.random() * 18 + 5
      if (p >= 100) {
        p = 100
        clearInterval(intervalRef.current!)
        setTimeout(() => {
          setVisible(false)
          setTimeout(onComplete, 800)
        }, 300)
      }
      setProgress(Math.min(p, 100))
    }, 80)

    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [onComplete])

  const statuses = ['Initializing', 'Loading assets', 'Building 3D scene', 'Ready']
  const statusIdx = progress < 30 ? 0 : progress < 65 ? 1 : progress < 95 ? 2 : 3

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.screen}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* 3D Geometric shape */}
          <div className={styles.geoContainer}>
            <div className={styles.geo}>
              <div className={styles.geoInner} />
            </div>
            <div className={styles.geoRing} />
            <div className={styles.geoRing2} />
          </div>

          <div className={styles.content}>
            <motion.div
              className={styles.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className={styles.nameFirst}>RADHA KRISHNA</span>
              <span className={styles.nameLast}>JAGARLAPUDI</span>
            </motion.div>

            <motion.div
              className={styles.barTrack}
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <motion.div
                className={styles.barFill}
                style={{ width: `${progress}%` }}
              />
              <div className={styles.barGlow} style={{ left: `${progress}%` }} />
            </motion.div>

            <motion.div
              className={styles.statusRow}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <span className={styles.status}>{statuses[statusIdx]}</span>
              <span className={styles.percent}>{Math.round(progress)}%</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
