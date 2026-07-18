import { Nav, Footer, OffersPlateau } from "../components";

export const metadata = {
  title: "Souscription — Lancez votre diagnostic | ATLAS",
  description: "Souscrivez à l'offre ATLAS de votre choix : Hermès, Iris ou Athéna. Diagnostic stratégique complet pour TPE et PME.",
};

export default function Souscription() {
  return (
    <>
      <Nav />
      <div className="container">
        <section className="page-header">
          <div className="section-label">Souscription</div>
          <h1>Lancez votre diagnostic</h1>
          <p className="section-intro">Choisissez votre formule ci-dessous. Votre acc&egrave;s au questionnaire vous sera transmis d&egrave;s validation.</p>
        </section>
      </div>
      <div className="container">
        <div className="subscribe-notice">
          <p>Le paiement en ligne ouvre tr&egrave;s prochainement. En attendant, vous pouvez d&eacute;j&agrave; nous &eacute;crire &agrave; <a href="mailto:contact@atlas-diagnostic.fr" className="text-link">contact@atlas-diagnostic.fr</a> en pr&eacute;cisant la formule choisie : nous vous enverrons directement votre acc&egrave;s.</p>
        </div>
        <div className="plateau-wrapper" style={{ paddingTop: 0 }}>
          <OffersPlateau />
        </div>
      </div>
      <Footer />
    </>
  );
}
