import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { personal } from '../../data/portfolio'
import styles from './About.module.css'

const stats = [
  { num: '5+', label: 'Projects & Platforms' },
  { num: '4', label: 'Virtual Internships' },
  { num: '18+', label: 'Certifications' },
  { num: '5+', label: 'Domains' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className={`section ${styles.about}`} ref={ref}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left — huge typography */}
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className={styles.bigText}>
              <span className={styles.bigAbout}>ABOUT</span>
              <span className={styles.bigMe}>ME</span>
            </div>
            <div className={styles.leftAccent} />
          </motion.div>

          {/* Right — content */}
          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="section-label">Who I Am</div>

            <h2 className={styles.heading}>
              Building digital experiences<br />
              <span className="blue-text">with purpose & precision.</span>
            </h2>

            <p className={`body-lg ${styles.bio}`}>
              {personal.bio}
            </p>

            <p className={`body-lg ${styles.bio}`}>
              I've completed multiple virtual internships in AI/ML, Android Development, and Python Full Stack — giving me real-world exposure across the full technology stack. I'm passionate about creating solutions that are not only functional, but genuinely impactful.
            </p>

            {/* Info grid */}
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Location</span>
                <span className={styles.infoValue}>India</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Focus</span>
                <span className={styles.infoValue}>Full Stack + AI/ML</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Email</span>
                <a href={`mailto:${personal.email}`} className={`${styles.infoValue} ${styles.infoLink}`}>
                  {personal.email}
                </a>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Status</span>
                <span className={`${styles.infoValue} ${styles.statusAvail}`}>
                  <span className={styles.statusDot} />
                  Available
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className={styles.stats}>
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className={styles.statItem}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                >
                  <span className={styles.statNum}>{stat.num}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
