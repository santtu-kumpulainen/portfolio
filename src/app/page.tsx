// Import components
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero"
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <main>
        <Projects />

        <section id="skills" className="min-h-screen">
          <h2>Skills</h2>
        </section>

        <section id="homelab" className="min-h-screen">
          <h2>Homelab</h2>
        </section>

        <section id="contact" className="min-h-screen">
          <h2>Contact</h2>
        </section>
      </main>
    </>
  );
}