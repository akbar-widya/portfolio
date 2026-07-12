import { Header } from "@/components/Header";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { ContactSection } from "@/sections/ContactSection";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}

export default App;
