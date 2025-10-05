import styles from './Hero.module.css'
import { FaExternalLinkAlt , FaFileDownload} from 'react-icons/fa'

export default function Hero(){
  return (
    <div className={`${styles.hero} fadeIn`}>
      <div>
        <h1>Hi, I’m <span className={styles.gradientText}>Kishan Singh</span></h1>
        {/* <p className={styles.pre}>Hi, my name is</p>
        <h1 className={styles.title}>Kishan Singh</h1> */}
        <h2 className={styles.subtitle}>Java FullStack Developer</h2>
        <p className={styles.desc}>I build reliable backend systems using Spring Boot, Hibernate, and modern Java practices.</p>
        <div className={styles.cta}>
          <a href="#projects" className={styles.btn}>
            <FaExternalLinkAlt style={{marginRight: "6px"}} />
            View Projects</a>
          <a href="/resume.pdf" className={styles.outline}>
            <FaFileDownload style={{marginRight: "6px"}} />
          Download Resume</a>
        </div>
      </div>
      <div className={styles.art} aria-hidden>
        {/* simple placeholder for an illustration */}
        <div className={styles.avatar}>JS</div>
      </div>
    </div>
  )
}