import Link from "next/link";
import { Nav, Footer, OfferPlateauBottom } from "../../components";

export const metadata = {
  title: "Offre Athéna — Accompagnement stratégique sur 7 mois | ATLAS",
  description: "L'accompagnement complet : diagnostic, orientation, suivi structuré sur 7 mois. 1 199 €.",
};

export default function Athena() {
  return (
    <>
      <Nav />
      <div className="container">
        <section className="page-header">
          <div className="section-label">Offre Ath&eacute;na &mdash; Premium</div>
          <h1>L&apos;accompagnement qui transforme durablement votre entreprise</h1>
          <p className="section-intro">Sept mois de suivi structur&eacute; pour passer du diagnostic &agrave; la transformation.</p>
        </section>
      </div>
      <div className="container"><hr className="divider" /></div>
      <div className="container">
        <section className="section article-body">
          <h2>Ce que vous recevez</h2>
          <p>Ath&eacute;na int&egrave;gre l&apos;ensemble du diagnostic Iris et l&apos;&eacute;tend sur sept mois avec quatre points de suivi. Votre dossier est trait&eacute; en priorit&eacute;.</p>
          <p>Au premier mois, un point de suivi ajuste les recommandations. Au troisi&egrave;me mois, un bilan d&apos;&eacute;volution complet compare vos scores. Au cinqui&egrave;me mois, un nouveau point actualise la trajectoire. Au septi&egrave;me mois, un bilan de fin de parcours dresse le portrait complet de votre transformation.</p>
          <h2>&Agrave; qui s&apos;adresse Ath&eacute;na</h2>
          <p>Aux dirigeants qui veulent un partenaire strat&eacute;gique dans la dur&eacute;e.</p>
          <div className="offer-cta-block">
            <div className="offer-cta-price">1 199 &euro; <span>TTC</span></div>
            <button className="btn-cta">Souscrire &agrave; Ath&eacute;na &rarr;</button>
          </div>
          <OfferPlateauBottom />
        </section>
      </div>
      <Footer />
    </>
  );
}
