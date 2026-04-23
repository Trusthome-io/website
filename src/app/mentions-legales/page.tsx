/* eslint-disable react/no-unescaped-entities */
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Mentions légales — Trusthome",
  description: "Mentions légales de Trusthome SAS",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main
        style={{
          background: "var(--cream-50)",
          minHeight: "100vh",
          paddingTop: 80,
        }}
      >
        <div
          style={{
            maxWidth: 760,
            margin: "0 auto",
            padding: "80px 40px 120px",
          }}
        >
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            — Légal
          </div>
          <h1 style={{ marginBottom: 48 }}>Mentions légales</h1>

          <LegalSection title="Éditeur du site">
            <p><strong>Raison sociale :</strong> Trusthome SAS</p>
            <p><strong>Siège social :</strong> Clichy, Hauts-de-Seine (92)</p>
            <p><strong>Email :</strong> ajithanmoorthy@outlook.fr</p>
            <p><strong>Téléphone :</strong> 07 81 68 55 56</p>
            <p><strong>Forme juridique :</strong> Société par Actions Simplifiée (SAS)</p>
            <p><strong>Capital social :</strong> En cours d'immatriculation</p>
            <p><strong>SIREN / SIRET :</strong> En cours d'immatriculation</p>
            <p><strong>Directeur de la publication :</strong> Le représentant légal de Trusthome SAS</p>
          </LegalSection>

          <LegalSection title="Hébergement">
            <p><strong>Hébergeur :</strong> Netlify, Inc.</p>
            <p><strong>Adresse :</strong> 512 2nd Street, Suite 200, San Francisco, CA 94107, États-Unis</p>
            <p><strong>Site :</strong> <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">www.netlify.com</a></p>
          </LegalSection>

          <LegalSection title="Propriété intellectuelle">
            <p>
              L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, sons, logiciels…) est la propriété exclusive de Trusthome SAS, à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Trusthome SAS.
            </p>
          </LegalSection>

          <LegalSection title="Limitation de responsabilité">
            <p>
              Trusthome SAS s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Cependant, Trusthome SAS ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.
            </p>
            <p>
              Trusthome SAS décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site.
            </p>
          </LegalSection>

          <LegalSection title="Liens hypertextes">
            <p>
              Le site peut contenir des liens vers d'autres sites internet. Trusthome SAS n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
            </p>
          </LegalSection>

          <LegalSection title="Droit applicable">
            <p>
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </LegalSection>

          <p
            style={{
              marginTop: 48,
              fontSize: 13,
              color: "var(--ink-300)",
              fontFamily: "var(--font-jetbrains-mono)",
            }}
          >
            Dernière mise à jour : avril 2026
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginBottom: 48 }}>
      <h2
        style={{
          fontSize: 20,
          marginBottom: 16,
          paddingBottom: 12,
          borderBottom: "1px solid var(--line)",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          fontSize: 15,
          lineHeight: 1.65,
          color: "var(--ink-700)",
        }}
      >
        {children}
      </div>
    </section>
  );
}
