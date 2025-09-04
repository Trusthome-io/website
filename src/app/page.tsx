import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/landing/hero-section';
import { StorytellingSection } from '@/components/landing/storytelling-section';
import { ProcessSection } from '@/components/landing/process-section';
import { VisionSection } from '@/components/landing/vision-section';
import { SignupSection } from '@/components/landing/signup-section';
import { FaqSection } from '@/components/landing/faq-section';
import { LeadCaptureForm } from '@/components/landing/lead-capture-form';
import { ComparisonSection } from '@/components/landing/comparison-section';

export default function HomePage() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <main className='flex-grow'>
        <section id='hero'>
          <HeroSection />
        </section>
        <section id='storytelling'>
          <StorytellingSection />
        </section>
        <section id='process'>
          <ProcessSection />
        </section>
        <section id='comparison'>
          <ComparisonSection />
        </section>
        <section id='faq'>
          <FaqSection />
        </section>
        <section id='contact'>
          <LeadCaptureForm />
        </section>
        <section id='vision'>
          <VisionSection />
        </section>
        <section id='signup'>
          <SignupSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
