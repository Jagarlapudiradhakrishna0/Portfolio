import styles from './Footer.module.css'
import { personal } from '../../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          {/* Brand */}
          <div className={styles.brand}>
            <span className={styles.brandName}>JRK</span>
            <span className={styles.brandDot} />
            <span className={styles.brandFull}>{personal.name}</span>
          </div>

          {/* Center */}
          <div className={styles.center}>
            <div className={styles.line} />
            <span className={styles.copy}>© {year} All Rights Reserved</span>
            <div className={styles.line} />
          </div>

          {/* Social links */}
          <div className={styles.socials}>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              GH
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              LI
            </a>
            <a
              href={`mailto:${personal.email}`}
              className={styles.socialLink}
              aria-label="Email"
            >
              @
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
