import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-6">
      <About />
      <Projects />
      <Contact />
    </main>
  );
}