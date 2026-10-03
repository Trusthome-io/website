import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/content";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  alternates: { canonical: "/confidentialite/" },
};

export default function Confidentialite() {
  return (
    <LegalPage title="Politique de confidentialité">
      <h2>Responsable du traitement</h2>
      <p>
        {site.legalName}, SIREN {site.siren}, {site.address}.
      </p>

      <h2>Ce que ce site collecte</h2>
      <p>
        Ce site ne contient aucun formulaire. Le bouton « Présenter mon logement » mène à notre formulaire de demande,
        qui a sa propre{" "}
        <a href="https://trusthome-proprietaires.vercel.app/confidentialite" rel="noopener">
          politique de confidentialité
        </a>
        .
      </p>
      <p>
        Si vous nous contactez par téléphone, WhatsApp ou e-mail, nous utilisons vos coordonnées et vos messages
        uniquement pour vous répondre et étudier votre logement. Base légale : les mesures précontractuelles prises à
        votre demande. Les données sont conservées au plus 3 ans après notre dernier échange et ne sont jamais
        revendues.
      </p>

      <h2>Cookies et mesure publicitaire</h2>
      <p>
        Avec votre accord uniquement, ce site peut utiliser le pixel Meta pour mesurer l&apos;efficacité de nos
        publicités. Sans accord, aucun traceur publicitaire n&apos;est chargé. Votre choix, accord ou refus, est
        conservé 6 mois dans votre navigateur. Vous pouvez le modifier à tout moment avec le lien « Gérer les cookies »
        en bas de page.
      </p>

      <h2>Vos droits</h2>
      <p>
        Accès, rectification, effacement, opposition : écrivez à <a href={`mailto:${site.email}`}>{site.email}</a>. Vous
        pouvez aussi saisir la CNIL (<a href="https://www.cnil.fr">cnil.fr</a>).
      </p>
    </LegalPage>
  );
}
