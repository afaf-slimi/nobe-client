import Hero from "../components/ui/Hero";
import ServicesSection from "../components/ui/ServicesSection";
import PerksSection from "../components/ui/PerksSection";
import AccessibilitySection from "../components/ui/AccessibilitySection";
import PricingSection from "../components/ui/PricingSection";
import CTASection from "../components/ui/CTASection";
import Footer from "../components/ui/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />

      {/* 👇 هنا تبدأ الصفحة “الحيّة” */}
      <PerksSection />
      <AccessibilitySection />
      <PricingSection />
      <CTASection />
      <Footer />
    </>
  );
}




