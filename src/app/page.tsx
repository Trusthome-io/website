import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/landing/hero-section";
import { ValuesSection } from "@/components/landing/values-section";
import { StorytellingSection } from "@/components/landing/storytelling-section";
import { ProcessSection } from "@/components/landing/process-section";
import { ComparisonSection } from "@/components/landing/comparison-section";
import { EstimatorSection } from "@/components/landing/estimator-section";
import { AiConfidenceSection } from "@/components/landing/ai-confidence-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { TrustLogosSection } from "@/components/landing/trust-logos-section";
import { ContactSection } from "@/components/landing/contact-section";
import { FaqSection } from "@/components/landing/faq-section";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ValuesSection />
        <StorytellingSection />
        <ProcessSection />
        <ComparisonSection />
        <EstimatorSection />
        <AiConfidenceSection />
        <TestimonialsSection />
        <TrustLogosSection />
        <ContactSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
