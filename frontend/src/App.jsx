import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// import styles from './components/Hero.module.css';

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
// import './App.css'

function App() {
  return (
    <>
      <div>
        <Navbar />
        <main className="main">
          <section className="section fadeIn fadeUp" id="hero">
            <div className="container">
              <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Hero />
              </motion.section>
            </div>
          </section>

          <section className="section fadeIn fadeUp" id="skills">
            <div className="container">
              <h2 className="sectionTitle">Tech Stack</h2>
              <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <TechStack />
              </motion.section>
            </div>
          </section>

          <section className="section fadeIn fadeUp" id="projects">
            <div className="container">
              <h2 className="sectionTitle">Projects</h2>
              <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Projects />
              </motion.section>
            </div>
          </section>

          <section className="section fadeIn fadeUp" id="experience">
            <div className="container">
              <h2 className="sectionTitle">Experience</h2>
              <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Experience />
              </motion.section>
            </div>
          </section>

          <section className="section fadeIn fadeUp" id="contact">
            <div className="container">
              <h2 className="sectionTitle">Contact</h2>
              <Contact />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
