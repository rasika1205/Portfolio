import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative bg-background text-foreground overflow-x-hidden noise-overlay">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
