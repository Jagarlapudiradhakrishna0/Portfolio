import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { personal } from '../../data/portfolio'
import styles from './Hero.module.css'

const ROLES = ['Problem Solver', 'Full Stack Developer', 'AI/ML Engineer', 'Systems Builder']

function TypewriterRole() {
  const [idx, setIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [text, setText] = useState('')

  useEffect(() => {
    const current = ROLES[idx]
    const speed = deleting ? 40 : 80
    const timer = setTimeout(() => {
      if (!deleting && charIdx < current.length) {
        setText(current.slice(0, charIdx + 1))
        setCharIdx(c => c + 1)
      } else if (!deleting && charIdx === current.length) {
        setTimeout(() => setDeleting(true), 2200)
      } else if (deleting && charIdx > 0) {
        setText(current.slice(0, charIdx - 1))
        setCharIdx(c => c - 1)
      } else if (deleting && charIdx === 0) {
        setDeleting(false)
        setIdx(i => (i + 1) % ROLES.length)
      }
    }, speed)
    return () => clearTimeout(timer)
  }, [idx, charIdx, deleting])

  return (
    <span className={styles.typewriter}>
      {text}
      <span className={styles.cursor}>|</span>
    </span>
  )
}

function ProfileComposition() {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
    card.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 4}deg) translateZ(10px)`
  }

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)'
    }
  }

  return (
    <div className={styles.profileOuter}>
      {/* Ambient glow */}
      <div className={styles.glow} />

      {/* Corner accents */}
      <div className={`${styles.corner} ${styles.cornerTL}`} />
      <div className={`${styles.corner} ${styles.cornerTR}`} />
      <div className={`${styles.corner} ${styles.cornerBL}`} />
      <div className={`${styles.corner} ${styles.cornerBR}`} />

      {/* Profile card */}
      <div
        ref={cardRef}
        className={styles.profileCard}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transition: 'transform 0.5s ease-out' }}
      >
        <div className={styles.profileImageWrap}>
          <img
            src={personal.photo}
            alt="Jagarlapudi Radha Krishna"
            className={styles.profileImage}
            loading="eager"
          />
          <div className={styles.imageOverlay} />
        </div>

        {/* Availability badge */}
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          <span className={styles.badgeText}>Available for Opportunities</span>
        </div>
      </div>

      {/* Floating stats — outside card */}
      <div className={styles.stat1}>
        <span className={styles.statNum}>4+</span>
        <span className={styles.statLabel}>Projects</span>
      </div>
      <div className={styles.stat2}>
        <span className={styles.statNum}>4</span>
        <span className={styles.statLabel}>Internships</span>
      </div>

      {/* Orbit ring */}
      <div className={styles.orbitRing}>
        <div className={styles.orbitDot} />
      </div>
    </div>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 + 0.3, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  })
}

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        {/* Left: Text content */}
        <div className={styles.textSide}>
          {/* Top label */}
          <motion.div
            className="section-label"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Computer Science × AI/ML
          </motion.div>

          {/* Name block — refined size */}
          <motion.div
            className={styles.nameBlock}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <span className={styles.nameFirst}>JAGARLAPUDI</span>
            <span className={styles.nameLast}>RADHA KRISHNA</span>
          </motion.div>

          {/* Role typewriter */}
          <motion.div
            className={styles.roleRow}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <span className={styles.roleLabel}>I build as a&nbsp;</span>
            <TypewriterRole />
          </motion.div>

          {/* Bio */}
          <motion.p
            className={styles.bio}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            Passionate developer focused on building real-world, problem-driven solutions. Engineering modern web applications and scalable platforms — from a comprehensive{' '}
            <span className={styles.bioHighlight}>Lost &amp; Found platform</span> to{' '}
            <span className={styles.bioHighlight}>RYDO</span>, a ride coordination platform currently under development.
          </motion.p>

          {/* Key Project Highlights */}
          <motion.div
            className={styles.projectPills}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3.5}
          >
            <a
              href="#projects"
              className={styles.projectPill}
              onClick={e => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <span className={styles.pillTag}>FEATURED</span>
              <span className={styles.pillTitle}>Lost &amp; Found</span>
            </a>

            <a
              href="#projects"
              className={`${styles.projectPill} ${styles.projectPillDev}`}
              onClick={e => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <span className={styles.pulseDot} />
              <span className={styles.pillTagDev}>BUILDING</span>
              <span className={styles.pillTitle}>RYDO</span>
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className={styles.actions}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            <a
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.btnPrimary}`}
              id="hero-resume-btn"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                <polyline points="7,10 12,15 17,10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Resume
            </a>
            <a
              href="#projects"
              className={`${styles.btn} ${styles.btnOutline}`}
              id="hero-projects-btn"
              onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className={`${styles.btn} ${styles.btnGhost}`}
              id="hero-contact-btn"
              onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            className={styles.socials}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
          >
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href={`mailto:${personal.email}`} className={styles.socialLink} aria-label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m2 7 10 7 10-7"/>
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Right: Profile */}
        <motion.div
          className={styles.profileSide}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <ProfileComposition />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <div className={styles.scrollLine} />
        <span className={styles.scrollText}>Scroll</span>
      </motion.div>
    </section>
  )
}
