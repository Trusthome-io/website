/* eslint-disable react/no-unescaped-entities */
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Politique de confidentialité — Trusthome",
  description: "Comment Trusthome collecte, utilise et protège vos données personnelles.",
};

export default function PolitiqueConfidentialitePage() {
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
          <h1 style={{ marginBottom: 48 }}>Politique de confidentialité</h1>

          <LegalSection title="Responsable du traitement">
            <p>
              Trusthome SAS, dont le siège social est situé à Clichy (92), est responsable du traitement de vos données personnelles collectées via le site trusthome.io.
            </p>
            <p>
              Contact : <a href="mailto:ajithanmoorthy@outlook.fr">ajithanmoorthy@outlook.fr</a>
            </p>
          </LegalSection>

          <LegalSection title="Données collectées">
            <p>Nous collectons les données suivantes lorsque vous utilisez notre site ou remplissez nos formulaires :</p>
            <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Adresse du bien immobilier</li>
              <li>Informations sur votre bien (type, surface, etc.)</li>
              <li>Données de navigation (via cookies techniques)</li>
            </ul>
          </LegalSection>

          <LegalSection title="Finalités du traitement">
            <p>Vos données sont utilisées pour :</p>
            <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>Répondre à vos demandes dd'informationapos;information et de contact</li>
              <li>Établir une proposition de loyer garanti personnalisée</li>
              <li>Assurer le suivi de votre dossier propriétaire</li>
              <li>Améliorer notre service et notre site web</li>
              <li>Respecter nos obligations légales et réglementaires</li>
            </ul>
          </LegalSection>

          <LegalSection title="Base légale">
            <p>
              Le traitement de vos données repose sur votre consentement (formulaires de contact) et sur ll'exécutionapos;exécution de mesures précontractuelles à votre demande (proposition de loyer garanti).
            </p>
          </LegalSection>

          <LegalSection title="Durée de conservation">
            <p>
              Vos données sont conservées pendant 3 ans à compter de votre dernière interaction avec Trusthome, sauf obligation légale de conservation plus longue.
            </p>
          </LegalSection>

          <LegalSection title="Partage des données">
            <p>
              Vos données ne sont jamais vendues à des tiers. Elles peuvent être transmises à nos prestataires techniques (hébergement, CRM) dans le cadre strict de ll'exécutionapos;exécution de leurs missions, et uniquement dans le respect du RGPD.
            </p>
          </LegalSection>

          <LegalSection title="Vos droits">
            <p>Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :</p>
            <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6 }}>
              <li><strong>Droit dd'accèsapos;accès</strong> : obtenir une copie de vos données</li>
              <li><strong>Droit de rectification</strong> : corriger des données inexactes</li>
              <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données</li>
              <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
              <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à : <a href="mailto:ajithanmoorthy@outlook.fr">ajithanmoorthy@outlook.fr</a>
            </p>
            <p>
              Vous pouvez également introduire une réclamation auprès de la <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">CNIL</a>.
            </p>
          </LegalSection>

          <LegalSection title="Cookies">
            <p>
              Le site utilise uniquement des cookies techniques strictement nécessaires au fonctionnement du site. Aucun cookie publicitaire ou de tracking tiers n'est utilisé sans votre consentement explicite.
            </p>
          </LegalSection>

          <LegalSection title="Sécurité">
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte ou divulgation.
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
