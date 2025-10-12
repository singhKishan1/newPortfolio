import styles from "./Projects.module.css";
// import { projects } from "../data/projects";
import React, { useState, useEffect } from "react";
import axios from "axios";
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
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "/api/projects/all"
        );
        console.log(response.data);
        setData(response.data);
        console.log("projects data:" + projects);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures this runs only once on mount

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
      {data != null && data.map((p) => (
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

          <div className={styles.liveLink}>
            <a
              href={p.githubLink}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              <FaGithub style={{ marginRight: "6px" }} />
              View Code
            </a>

            {p.liveLink && (
              <a
                href={p.liveLink}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                <FaExternalLinkAlt style={{ marginRight: "6px" }} />
                Live Demo
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
