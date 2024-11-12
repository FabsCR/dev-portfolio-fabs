import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import WhatsappButton from "../components/WhatsappButton";
import { Certifications } from "../components/Certifications";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-6">
      <About />
      <Projects />
      <Certifications />
      <Contact />
      <WhatsappButton />
    </main>
  );
}