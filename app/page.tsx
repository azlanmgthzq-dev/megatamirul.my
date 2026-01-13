import Image from "next/image";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import ContactSection from "@/components/contact/ContactSection";
import WelcomeScreen from "@/components/welcome/WelcomeScreen";
import AnimatedBackground from "@/components/background/AnimatedBackground";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <WelcomeScreen />
      <HeroSection />
      <AboutSection />
      <ExperienceSection/>
      <ContactSection />
    </>
    
  );
}
