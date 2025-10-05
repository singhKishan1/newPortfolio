import styles from "./TechStack.module.css";
import { FaJava, FaJs, FaReact, FaGitAlt, FaCuttlefish } from "react-icons/fa";
import { SiSpringboot, SiHibernate, SiMysql, SiSelenium } from "react-icons/si";
import { BsFiletypeJson } from "react-icons/bs";

// const tech = [
//   'Java', 'Spring Boot', 'Hibernate', 'MySQL', 'Git', 'REST APIs', 'JavaScript', 'React', 'Selenium'
// ]

const tech = [
  { name: "Java", icon: <FaJava /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "Hibernate", icon: <SiHibernate /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "REST APIs", icon: <BsFiletypeJson /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Selenium", icon: <SiSelenium /> },
  { name: "C++", icon: <FaCuttlefish /> },
];

export default function TechStack() {
  return (
    <div className={styles.grid}>
      {tech.map((t) => (
        <div key={t} className={styles.card}>
          <div className={styles.icon}> {t.icon}</div>
          {t.name}
        </div>
      ))}
    </div>
  );
}
