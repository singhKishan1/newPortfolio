import styles from "./Projects.module.css";
import { projects } from "../data/projects";
import {
  FaJava,
  FaDatabase,
  FaGitAlt,
  FaNetworkWired,
  FaReact,
  FaCss3,
  FaJs,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiSpringboot, SiHibernate } from "react-icons/si";

export default function Projects() {
  const iconMap = {
    FaJava: <FaJava />,
    SiSpringboot: <SiSpringboot />,
    SiHibernate: <SiHibernate />,
    FaDatabase: <FaDatabase />,
    FaGitAlt: <FaGitAlt />,
    TCPNetwork: <FaNetworkWired />,
    FaReact: <FaReact />,
    FaCss3: <FaCss3 />,
    FaJs: <FaJs />,
  };

  return (
    <div className={styles.grid}>
      {projects.map((p) => (
        <article key={p.id} className={styles.card}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>

          <div className={styles.techIcons}>
            {(p.tech || []).map((techName, index) => (
              <span key={index} className={styles.icon} data-tech={techName}>
                {iconMap[techName]}
              </span>
            ))}
          </div>

          <a href={p.githubLink} target="_blank" rel="noreferrer" className="btn">
            <FaGithub style={{ marginRight: "6px" }} />
            View Code
          </a>
        </article>
      ))}
    </div>
  );
}
