import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/content";

export const metadata: Metadata = {
  title: "Mentions légales",
  alternates: { canonical: "/mentions-legales/" },
};

export default function MentionsLegales() {
  return (
    <LegalPage title="Mentions légales">
      <h2>Éditeur du site</h2>
      <p>
        {site.legalName}, société par actions simplifiée, SIREN {site.siren}.
        <br />
        Siège : {site.address}.
        <br />
        Directeur de la publication : le président de la société.
        <br />
        Contact : <a href={`mailto:${site.email}`}>{site.email}</a>, {site.phone}.
      </p>

      <h2>Hébergement</h2>
      <p>Netlify, Inc., 512 2nd Street, Suite 200, San Francisco, CA 94107, États-Unis. Site : netlify.com.</p>

      <h2>Propriété intellectuelle</h2>
      <p>
        Les textes, photographies et le logo de ce site appartiennent à TrustHome. Toute reproduction sans autorisation
        est interdite.
      </p>
    </LegalPage>
  );
}
