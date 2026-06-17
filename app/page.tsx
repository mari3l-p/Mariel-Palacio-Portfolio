import CertificationsSection from "./components/CertificationsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";


export default function Home() {
  return (
    <div>
      <HeroSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <CertificationsSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}
