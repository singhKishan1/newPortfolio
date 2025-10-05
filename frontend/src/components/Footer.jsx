import styles from './Footer.module.css'
import SocialLinks from "./SocialLinks";

export default function Footer(){
  return (
    <footer className={styles.footer}>
      <SocialLinks />
      <div className="container">
        <p>© {new Date().getFullYear()} Kishan Singh — Built with React & Vite</p>
      </div>
    </footer>
  )
}