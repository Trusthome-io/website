import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/landing/hero';
import { Commitments } from '@/components/landing/commitments';
import { Comparison } from '@/components/landing/comparison';
import { Process } from '@/components/landing/process';
import { Testimonials } from '@/components/landing/testimonials';
import { Gallery } from '@/components/landing/gallery';
import { Faq, faqItems } from '@/components/landing/faq';
import { FinalCta } from '@/components/landing/final-cta';
import { MobileCtaBar } from '@/components/landing/mobile-cta-bar';
import { COMPANY, CONTACT, SITE_URL } from '@/lib/site';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: COMPANY.name,
      legalName: COMPANY.legalName,
      url: SITE_URL,
      logo: `${SITE_URL}/brand/logo-mark.svg`,
      telephone: CONTACT.phoneIntl,
      email: CONTACT.email,
      taxID: COMPANY.siren.replace(/\s/g, ''),
      address: {
        '@type': 'PostalAddress',
        streetAddress: '60 rue François Ier',
        postalCode: '75008',
        addressLocality: 'Paris',
        addressCountry: 'FR',
      },
      areaServed: { '@type': 'AdministrativeArea', name: 'Île-de-France' },
      description:
        'Société locataire de logements en Île-de-France : TrustHome loue le logement, verse le loyer convenu chaque mois et paie le ménage et l’entretien courant.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />
      <Header />
      <main>
        <Hero />
        <Commitments />
        <Comparison />
        <Process />
        <Testimonials />
        <Gallery />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
