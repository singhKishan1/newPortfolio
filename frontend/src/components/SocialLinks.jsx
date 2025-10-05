import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import styles from "./SocialLinks.module.css";

export default function SocialLinks() {
  return (
    <div className={styles.social}>
      <h3>Connect with me</h3>
      <div className={styles.icons}>
        <a
          href="https://www.linkedin.com/in/kishan-singh-770b671b9/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="linkedin-icon"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="github-icon"
        >
          <FaGithub />
        </a>
        <a href="mailto:kishansingh@gmail.com" aria-label="Email"
          className="gmail-icon"
        >
          <SiGmail />
        </a>
      </div>
    </div>
  );
}
