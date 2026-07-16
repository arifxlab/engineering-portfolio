import { HeroSection } from "../components/sections/Hero";
import About from "../components/sections/About";
import EngineeringJourney from "../components/sections/EngineeringJourney";
import { ProjectsSection } from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import TechStack from "../components/sections/TechStack";
import Experience from "../components/sections/Experience";
import { CertificatesSection } from "../components/sections/Certifications";
import Contact from "../components/sections/Contact";
import { Footer } from "../components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <About />

      <EngineeringJourney />

      <ProjectsSection />

      <Skills />

      <TechStack />

      <Experience />

      <CertificatesSection />

      <Contact />

      <Footer />
    </>
  );
}
