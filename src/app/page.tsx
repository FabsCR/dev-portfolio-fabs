import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import WhatsappButton from "../components/WhatsappButton";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-6">
      <About />
      <Projects />
      <Contact />
      <WhatsappButton />
    </main>
  );
}