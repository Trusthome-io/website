import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/landing/hero-section";
import { ProcessSection } from "@/components/landing/process-section";
import { AiToolTeaserSection } from "@/components/landing/ai-tool-teaser";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { FaqSection } from "@/components/landing/faq-section";
import { LeadCaptureForm } from "@/components/landing/lead-capture-form";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProcessSection />
        <AiToolTeaserSection />
        <TestimonialsSection />
        <FaqSection />
        <LeadCaptureForm />
      </main>
      <Footer />
    </div>
  );
}
