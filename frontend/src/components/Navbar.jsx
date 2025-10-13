import styles from "./Navbar.module.css";
import React, { useState, useEffect } from "react";
import { FaHome, FaLaptopCode, FaBriefcase, FaUserTie, FaBars, FaTimes } from "react-icons/fa";
import { SiSkillshare } from "react-icons/si";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Kishan Singh</div>

      {/* Desktop Menu */}
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

      {/* Hamburger Icon (visible on mobile) */}
      <div className={styles.hamburger} onClick={toggleSidebar}>
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Sidebar (mobile only) */}
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.show : ""}`}>
        <a href="#hero" onClick={closeSidebar} className={activeSection === "hero" ? styles.active : ""}>
          <FaHome className={styles.icon} /> Home
        </a>
        <a href="#skills" onClick={closeSidebar} className={activeSection === "skills" ? styles.active : ""}>
          <SiSkillshare className={styles.icon} /> Skills
        </a>
        <a href="#projects" onClick={closeSidebar} className={activeSection === "projects" ? styles.active : ""}>
          <FaLaptopCode className={styles.icon} /> Projects
        </a>
        <a href="#experience" onClick={closeSidebar} className={activeSection === "experience" ? styles.active : ""}>
          <FaBriefcase className={styles.icon} /> Experience
        </a>
        <a href="#contact" onClick={closeSidebar} className={activeSection === "contact" ? styles.active : ""}>
          <FaUserTie className={styles.icon} /> Contact
        </a>
      </div>

      {/* Overlay behind sidebar */}
      {isSidebarOpen && <div className={styles.overlay} onClick={closeSidebar}></div>}
    </nav>
  );
}
