import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills, skillCategories } from '../../data/portfolio'
import TechLogo from '../ui/TechLogos'
import styles from './Skills.module.css'

interface SkillItem {
  name: string
  category: string
}

// Row 1: Programming & Web
const row1Skills: SkillItem[] = [
  { name: 'Python', category: 'Programming' },
  { name: 'TypeScript', category: 'Programming' },
  { name: 'React', category: 'Web' },
  { name: 'JavaScript', category: 'Programming' },
  { name: 'Java', category: 'Programming' },
  { name: 'HTML5', category: 'Web' },
  { name: 'CSS3', category: 'Web' },
]

// Row 2: Backend, Database, Cloud & Tools
const row2Skills: SkillItem[] = [
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express.js', category: 'Backend' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'AWS Cloud', category: 'Cloud & Tools' },
  { name: 'Git', category: 'Cloud & Tools' },
  { name: 'GitHub', category: 'Cloud & Tools' },
  { name: 'Linux/Unix', category: 'Cloud & Tools' },
  { name: 'GitHub Copilot', category: 'Cloud & Tools' },
]

// Row 3: AI / ML & Intelligent Systems
const row3Skills: SkillItem[] = [
  { name: 'Machine Learning', category: 'AI / ML' },
  { name: 'Deep Learning', category: 'AI / ML' },
  { name: 'Computer Vision', category: 'AI / ML' },
  { name: 'NLP', category: 'AI / ML' },
  { name: 'Robotics Process Automation', category: 'AI / ML' },
]

const categoryIcons: Record<string, string> = {
  'Programming': '< / >',
  'Web': '⚛',
  'Backend': '⚡',
  'Database': '◉',
  'Cloud & Tools': '☁',
  'AI / ML': '◈',
}

interface MarqueeRowProps {
  items: SkillItem[]
  direction?: 'left' | 'right'
  duration?: number
  isDimmed?: (item: SkillItem) => boolean
  onSelectSkill?: (item: SkillItem) => void
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({
  items,
  direction = 'left',
  duration = 35,
  isDimmed,
}) => {
  // Duplicate 4 times to ensure seamless infinite looping on all screen sizes
  const repeated = [...items, ...items, ...items, ...items]

  const animClass = direction === 'left' ? styles.trackScrollLeft : styles.trackScrollRight

  return (
    <div className={styles.marqueeRow} style={{ '--duration': `${duration}s` } as React.CSSProperties}>
      <div className={`${styles.marqueeTrack} ${animClass}`}>
        {repeated.map((skill, index) => {
          const dimmed = isDimmed ? isDimmed(skill) : false
          return (
            <div
              key={`${skill.name}-${index}`}
              className={`${styles.skillCard} ${dimmed ? styles.skillCardDimmed : ''}`}
            >
              <div className={styles.logoAmbient} />
              <div className={styles.logoWrapper}>
                <TechLogo name={skill.name} size={50} className={styles.logoSvg} />
              </div>
              <div className={styles.cardInfo}>
                <span className={styles.techName}>{skill.name}</span>
                <span className={styles.categoryBadge}>{skill.category}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const isSkillDimmed = (skill: SkillItem) => {
    if (!activeCategory) return false
    return skill.category !== activeCategory
  }

  // Filter categories
  const filterList = ['ALL', ...skillCategories]

  return (
    <section id="skills" className={`section ${styles.skillsSection}`} ref={ref}>
      {/* Background ambient accents */}
      <div className={styles.bgGlowTop} />
      <div className={styles.bgGlowBottom} />

      <div className="container">
        {/* Section Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 35 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="section-label">MY EXPERTISE</div>
          <h2 className={`display-md ${styles.title}`}>
            Skills &amp; <span className="blue-text">Technologies</span>
          </h2>
          <p className={`body-lg ${styles.subtitle}`}>
            Technologies I work with, organized by domain.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className={styles.filtersWrapper}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          role="tablist"
        >
          {filterList.map(cat => {
            const isAll = cat === 'ALL'
            const isActive = isAll ? activeCategory === null : activeCategory === cat
            return (
              <button
                key={cat}
                className={`${styles.filterBtn} ${isActive ? styles.filterBtnActive : ''}`}
                onClick={() => setActiveCategory(isAll ? null : cat)}
                role="tab"
                aria-selected={isActive}
              >
                {!isAll && categoryIcons[cat] && (
                  <span className={styles.filterIcon}>{categoryIcons[cat]}</span>
                )}
                <span>{cat}</span>
                {isActive && (
                  <motion.div
                    className={styles.filterIndicator}
                    layoutId="skills-filter-indicator"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}
              </button>
            )
          })}
        </motion.div>
      </div>

      {/* Continuously Scrolling Technology Marquee Rows */}
      <motion.div
        className={styles.marqueeContainer}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Edge Fade Gradients for Seamless Holographic Look */}
        <div className={styles.fadeLeft} />
        <div className={styles.fadeRight} />

        {/* Row 1: Programming & Web (Right -> Left) */}
        <MarqueeRow
          items={row1Skills}
          direction="left"
          duration={34}
          isDimmed={isSkillDimmed}
        />

        {/* Row 2: Backend, Database, Cloud & Tools (Left -> Right) */}
        <MarqueeRow
          items={row2Skills}
          direction="right"
          duration={40}
          isDimmed={isSkillDimmed}
        />

        {/* Row 3: AI / ML & Intelligent Systems (Right -> Left) */}
        <MarqueeRow
          items={row3Skills}
          direction="left"
          duration={36}
          isDimmed={isSkillDimmed}
        />
      </motion.div>

      {/* Compact Domain Summary Grid */}
      <div className="container">
        <motion.div
          className={styles.summarySection}
          initial={{ opacity: 0, y: 35 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <div className={styles.summaryGrid}>
            {skillCategories.map(cat => {
              const catSkills = skills.filter(s => s.category === cat)
              const isHighlighted = activeCategory === null || activeCategory === cat
              return (
                <div
                  key={cat}
                  className={`${styles.summaryCard} ${isHighlighted ? styles.summaryCardActive : styles.summaryCardDimmed}`}
                  onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                >
                  <div className={styles.summaryCardHeader}>
                    <span className={styles.summaryCardIcon}>{categoryIcons[cat]}</span>
                    <span className={styles.summaryCardTitle}>{cat}</span>
                    <span className={styles.summaryCount}>{catSkills.length}</span>
                  </div>
                  <p className={styles.summarySkillList}>
                    {catSkills.map(s => s.name).join(' • ')}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Bottom Continuous Learning Badge */}
          <div className={styles.learningBadgeWrap}>
            <div className={styles.learningBadge}>
              <span className={styles.pulseDot} />
              <span className={styles.learningText}>
                I’m always learning and exploring new technologies.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
