import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import EngineeringJourney from "../components/sections/EngineeringJourney";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import TechStack from "../components/sections/TechStack";
import Experience from "../components/sections/Experience";
import Certifications from "../components/sections/Certifications";
import Contact from "../components/sections/Contact";
import { Footer } from "../components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />

      <About />

      <EngineeringJourney />

      <Projects />

      <Skills />

      <TechStack />

      <Experience />

      <Certifications />

      <Contact />

      <Footer />
    </>
  );
}
