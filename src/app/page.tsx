
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/landing/hero-section";
import { StorytellingSection } from "@/components/landing/storytelling-section";
import { ProcessSection } from "@/components/landing/process-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { FaqSection } from "@/components/landing/faq-section";
import { LeadCaptureForm } from "@/components/landing/lead-capture-form";
import { ComparisonSection } from "@/components/landing/comparison-section";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section id="hero">
          <HeroSection />
        </section>
        <section id="storytelling">
          <StorytellingSection />
        </section>
        <section id="process">
          <ProcessSection />
        </section>
        <section id="comparison">
          <ComparisonSection />
        </section>
        <section id="faq">
          <FaqSection />
        </section>
        <section id="contact">
          <LeadCaptureForm />
        </section>
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
