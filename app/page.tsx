import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Studio } from "@/components/sections/Studio";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Projects />
      <Studio />
      <Services />
      <Process />
      <Contact />
    </main>
  );
}
