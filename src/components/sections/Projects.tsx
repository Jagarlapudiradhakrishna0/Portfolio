import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects, Project } from '../../data/portfolio'
import styles from './Projects.module.css'

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: Project
  index: number
  inView: boolean
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const imgRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = imgRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
    setMousePos({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 })
  }

  const isEven = index % 2 === 0

  return (
    <motion.div
      className={`${styles.project} ${isEven ? styles.projectEven : styles.projectOdd}`}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Text side */}
      <div className={styles.textSide}>
        <div className={styles.projectHeaderRow}>
          <span className={styles.projectNum}>{project.number}</span>
          {project.status === 'FEATURED' && (
            <span className={styles.badgeFeatured}>FEATURED</span>
          )}
          {project.status === 'IN DEVELOPMENT' && (
            <span className={styles.badgeDev}>
              <span className={styles.devDot} />
              IN DEVELOPMENT
            </span>
          )}
        </div>

        <div className={styles.projectMeta}>
          <span className="section-label">{project.subtitle}</span>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <p className={styles.projectDesc}>{project.description}</p>
        </div>

        <div className={styles.techList}>
          {project.tech.map(t => (
            <span key={t} className={styles.techPill}>
              {t}
            </span>
          ))}
        </div>

        <div className={styles.projectLinks}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.projectBtn} ${styles.projectBtnOutline}`}
              id={`project-github-${project.id}`}
              aria-label={`View ${project.title} GitHub Repository`}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.projectBtn} ${styles.projectBtnPrimary}`}
              id={`project-demo-${project.id}`}
              aria-label={`Open ${project.title} Live Demo`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15,3 21,3 21,9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Live Demo
            </a>
          )}
          {project.status === 'IN DEVELOPMENT' && !project.demo && (
            <span className={styles.devTagButton}>
              <span className={styles.devDot} />
              In Development
            </span>
          )}
        </div>
      </div>

      {/* Image side */}
      <div
        ref={imgRef}
        className={styles.imageSide}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateY(${mousePos.x * 4}deg) rotateX(${-mousePos.y * 3}deg)`,
          transition: mousePos.x === 0 ? 'transform 0.5s ease' : 'transform 0.1s ease',
        }}
      >
        <div className={styles.imageWrap}>
          <img
            src={project.image}
            alt={project.title}
            className={styles.projectImage}
            loading="lazy"
          />
          <div className={styles.imageOverlay} />
          <div className={styles.imageGlow} />
        </div>

        {/* Corner accents */}
        <div className={`${styles.corner} ${styles.tl}`} />
        <div className={`${styles.corner} ${styles.tr}`} />
        <div className={`${styles.corner} ${styles.bl}`} />
        <div className={`${styles.corner} ${styles.br}`} />
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="projects" className={`section ${styles.projects}`} ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Selected Engineering Work</div>
          <h2 className={`display-md ${styles.title}`}>
            Featured <span className="blue-text">Projects</span>
          </h2>
          <p className={`body-md ${styles.subtitle}`}>
            Real-world systems, scalable platforms, and active software developments.
          </p>
        </motion.div>

        {/* Projects */}
        <div className={styles.projectList}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
