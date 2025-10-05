import styles from "./Navbar.module.css";
import React, { useState, useEffect } from "react";
import { FaHome, FaLaptopCode, FaBriefcase, FaUserTie } from "react-icons/fa";
import { SiSkillshare } from "react-icons/si";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const handleScroll = () => {
      let current = "";
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Kishan Singh</div>
      <div className={styles.links}>
        <a
          href="#hero"
          className={activeSection === "hero" ? styles.active : ""}
        >
          <FaHome className={styles.icon} /> Home
        </a>
        <a
          href="#skills"
          className={activeSection === "skills" ? styles.active : ""}
        >
          <SiSkillshare className={styles.icon} /> Skills
        </a>
        <a
          href="#projects"
          className={activeSection === "projects" ? styles.active : ""}
        >
          <FaLaptopCode className={styles.icon} /> Projects
        </a>
        <a
          href="#experience"
          className={activeSection === "experience" ? styles.active : ""}
        >
          <FaBriefcase className={styles.icon} /> Experience
        </a>
        <a
          href="#contact"
          className={activeSection === "contact" ? styles.active : ""}
        >
          <FaUserTie className={styles.icon} /> Contact
        </a>
      </div>
    </nav>
  );
}
