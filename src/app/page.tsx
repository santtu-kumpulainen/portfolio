// Import components
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="min-h-screen">
          <h1>heee</h1>
        </section>

        <section id="projects" className="min-h-screen">
          <h2>Projects</h2>
        </section>

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