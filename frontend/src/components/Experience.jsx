import styles from './Experience.module.css'

export default function Experience(){
  return (
    <div className={styles.timeline}>
      <div className={styles.item}>
        <div className={styles.year}>2023 - Present</div>
        <div className={styles.body}>
          <h4>Software Engineer — Nucleus Software Export</h4>
          <ul>
            <li>Applied Content Security Policy in backend modules.</li>
            <li>Implemented runtime code injection features for internal tooling.</li>
            <li>Optimized data processing and improved test stability.</li>
            <li>Implemented Static Code Analysis using SonarQube and SonarLint, and developed custom, standards-compliant
Sonar rules tailored to product and business requirements for Java, XML, and JSP. Reduced code issues by 70%
and deployed these rules to production, significantly improving code quality and maintainability</li>
          </ul>
        </div>
      </div>
    </div>
  )
}