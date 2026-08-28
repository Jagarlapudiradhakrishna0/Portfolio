import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experience } from '../../data/portfolio'
import styles from './Experience.module.css'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className={`section ${styles.experience}`} ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label">Career</div>
          <h2 className={`display-md ${styles.title}`}>
            Experience &<br /><span className="blue-text">Internships</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className={styles.timeline}>
          <div className={styles.timelineLine} />

          {experience.map((item, i) => (
            <motion.div
              key={item.id}
              className={styles.item}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Node */}
              <div className={styles.node}>
                <div className={styles.nodeDot} />
                <div className={styles.nodeRing} />
              </div>

              {/* Card */}
              <div className={styles.card}>
                <div className={styles.cardInner}>
                  <div className={styles.cardHeader}>
                    <div>
                      <span className={styles.period}>{item.period}</span>
                      <h3 className={styles.role}>{item.role}</h3>
                      <span className={styles.org}>{item.organization}</span>
                    </div>
                    <div className={styles.badge}>
                      <span>Internship</span>
                    </div>
                  </div>

                  <p className={styles.desc}>{item.description}</p>

                  <a
                    href={item.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.certLink}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    View Certificate
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Timeline end */}
          <div className={styles.timelineEnd}>
            <div className={styles.endDot} />
          </div>
        </div>
      </div>
    </section>
  )
}
