import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  HeroSection,
  ServicesSection,
  AboutSection,
  PortfolioSection,
  ContactSection,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Landing Page Content divided into modular sections */}
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
