// Import components
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero"
import Projects from "@/components/sections/Projects";
import OtherProjects from "@/components/sections/OtherProjects";
import Homelab from "@/components/sections/Homelab";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <main>
        <Projects />

        <OtherProjects />

        <section id="skills" className="min-h-screen">
          <h2>Skills</h2>
        </section>

        <Homelab />

        <section id="contact" className="min-h-screen">
          <h2>Contact</h2>
        </section>
      </main>
    </>
  );
}