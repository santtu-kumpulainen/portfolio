// Import components
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero"
import Projects from "@/components/sections/Projects";
import OtherProjects from "@/components/sections/OtherProjects";
import Skills from "@/components/sections/Skills";
import Homelab from "@/components/sections/Homelab";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main id="main-content" tabIndex={-1} className="outline-none">
        <Hero />

        <Projects />

        <OtherProjects />

        <Skills />

        <Homelab />

        <Contact />
      </main>

      <Footer />
    </>
  );
}