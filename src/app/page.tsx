import Hero from "../components/sections/Hero";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Certifications from "../components/sections/Certifications";
import Contact from "../components/sections/Contact";
import WhatsappButton from "../components/sections/WhatsappButton";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12 sm:gap-24">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <WhatsappButton />
    </div>
  );
}