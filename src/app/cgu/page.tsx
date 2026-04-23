/* eslint-disable react/no-unescaped-entities */
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Conditions Générales d'Utilisation — Trusthome",
  description: "CGU du site trusthome.io — Conditions dd'utilisationapos;utilisation des services Trusthome.",
};

export default function CguPage() {
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
          <h1 style={{ marginBottom: 48 }}>
            Conditions Générales d&apos;Utilisation
          </h1>

          <LegalSection title="1. Objet">
            <p>
              Les présentes Conditions Générales d'Utilisation (CGU) régissent ll'accèsapos;accès et l'utilisation du site trusthome.io, édité par Trusthome SAS. En accédant au site, vous acceptez sans réserve les présentes CGU.
            </p>
          </LegalSection>

          <LegalSection title="2. Description du service">
            <p>
              Trusthome est une plateforme destinée aux propriétaires immobiliers en Île-de-France souhaitant confier leur bien à un opérateur professionnel. Trusthome propose une solution de gestion locative avec loyer garanti, où Trusthome SAS devient locataire principal du bien.
            </p>
            <p>
              Le site permet notamment de :
            </p>
            <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>Obtenir une estimation de loyer garanti</li>
              <li>Soumettre un dossier de bien immobilier</li>
              <li>Contacter l'équipe Trusthome</li>
              <li>S'informer sur les services proposés</li>
            </ul>
          </LegalSection>

          <LegalSection title="3. Accès au site">
            <p>
              L'accès au site est gratuit et ouvert à tout utilisateur disposant dd'unapos;un accès à internet. Trusthome SAS ne saurait être tenue responsable des interruptions de service liées à des opérations de maintenance, à des pannes techniques ou à des forces majeures.
            </p>
          </LegalSection>

          <LegalSection title="4. Utilisation du site">
            <p>L'utilisateur s'engage à utiliser le site de manière licite et en conformité avec les présentes CGU. Il est notamment interdit de :</p>
            <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>Soumettre des informations fausses ou trompeuses via les formulaires</li>
              <li>Tenter d'accéder de manière non autorisée aux systèmes informatiques</li>
              <li>Perturber le fonctionnement normal du site</li>
              <li>Reproduire ou exploiter le contenu du site sans autorisation</li>
            </ul>
          </LegalSection>

          <LegalSection title="5. Propriété intellectuelle">
            <p>
              Tous les éléments du site (textes, visuels, logo, structure) sont la propriété exclusive de Trusthome SAS et sont protégés par le droit de la propriété intellectuelle. Toute reproduction sans autorisation préalable est interdite.
            </p>
          </LegalSection>

          <LegalSection title="6. Données personnelles">
            <p>
              Les données collectées via le site sont traitées conformément à notre{" "}
              <a href="/politique-de-confidentialite">Politique de confidentialité</a>, en conformité avec le Règlement Général sur la Protection des Données (RGPD).
            </p>
          </LegalSection>

          <LegalSection title="7. Responsabilité">
            <p>
              Les informations et estimations fournies sur le site (notamment l'estimateur de loyer) ont une valeur indicative et ne constituent pas une offre contractuelle. Elles sont susceptibles de varier en fonction de ll'étatapos;état réel du bien et des conditions du marché.
            </p>
            <p>
              Trusthome SAS ne saurait être tenue responsable de toute décision prise sur la base des informations publiées sur le site.
            </p>
          </LegalSection>

          <LegalSection title="8. Modification des CGU">
            <p>
              Trusthome SAS se réserve le droit de modifier les présentes CGU à tout moment. Les modifications prennent effet dès leur publication sur le site. Il est conseillé de les consulter régulièrement.
            </p>
          </LegalSection>

          <LegalSection title="9. Droit applicable et juridiction">
            <p>
              Les présentes CGU sont soumises au droit français. En cas de litige relatif à ll'interprétationapos;interprétation ou à ll'exécutionapos;exécution des présentes, les tribunaux compétents du ressort de Clichy (92) auront juridiction exclusive.
            </p>
          </LegalSection>

          <LegalSection title="10. Contact">
            <p>
              Pour toute question relative aux présentes CGU :{" "}
              <a href="mailto:ajithanmoorthy@outlook.fr">ajithanmoorthy@outlook.fr</a>
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
