import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import AudienceSection from "@/components/landing/AudienceSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import CTASection from "@/components/landing/CTASection";
import SecuritySection from "@/components/landing/SecuritySection";
import FAQSection from "@/components/landing/FAQSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <AudienceSection />
        <HowItWorksSection />
        <CTASection />
        <SecuritySection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
