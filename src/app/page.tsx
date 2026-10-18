// Import components
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero"
import Projects from "@/components/sections/Projects";
import OtherProjects from "@/components/sections/OtherProjects";
import Homelab from "@/components/sections/Homelab";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <Projects />

        <OtherProjects />

        <section id="skills" className="min-h-screen">
          <h2>Skills</h2>
        </section>

        <Homelab />

        <Contact />
      </main>

      <Footer />
    </>
  );
}