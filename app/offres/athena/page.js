import Link from "next/link";
import { Nav, Footer } from "../../components";

export const metadata = {
  title: "Offre Athéna — Accompagnement stratégique sur 7 mois | ATLAS",
  description: "L'accompagnement complet : diagnostic, orientation, suivi structuré sur 7 mois avec bilans d'évolution et recommandations actualisées. 1 199 €.",
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
          <p>Ath&eacute;na est l&apos;offre la plus compl&egrave;te d&apos;ATLAS. Elle int&egrave;gre l&apos;ensemble du diagnostic Iris &mdash; analyse compl&egrave;te, orientation &eacute;cosyst&egrave;me, suivi &agrave; 3 mois &mdash; et l&apos;&eacute;tend sur un cycle d&apos;accompagnement de sept mois avec quatre points de suivi.</p>
          <p>Votre dossier est trait&eacute; en priorit&eacute;. D&egrave;s la r&eacute;ception de vos r&eacute;ponses, l&apos;analyse est lanc&eacute;e sans d&eacute;lai.</p>
          <p>Au premier mois, un point de suivi mesure les premi&egrave;res actions mises en place et ajuste les recommandations si n&eacute;cessaire. Au troisi&egrave;me mois, un bilan d&apos;&eacute;volution complet compare vos scores avec le diagnostic initial et identifie les domaines qui progressent et ceux qui n&eacute;cessitent un effort suppl&eacute;mentaire. Au cinqui&egrave;me mois, un nouveau point actualise les recommandations. Au septi&egrave;me mois, un bilan de fin de parcours dresse le portrait complet de votre transformation : o&ugrave; vous &eacute;tiez, o&ugrave; vous &ecirc;tes, ce qui a chang&eacute; et ce qu&apos;il reste &agrave; faire.</p>
          <p>Ce format est celui qui produit les r&eacute;sultats les plus durables. Un diagnostic ponctuel donne une direction. Un accompagnement sur sept mois change une trajectoire.</p>
          <h2>&Agrave; qui s&apos;adresse Ath&eacute;na</h2>
          <p>Aux dirigeants qui veulent un partenaire strat&eacute;gique dans la dur&eacute;e. Ceux qui savent que la transformation d&apos;une entreprise ne se fait pas en un jour et qui veulent &ecirc;tre accompagn&eacute;s &agrave; chaque &eacute;tape, avec des points de rep&egrave;re concrets et mesurables.</p>
          <div className="offer-cta-block">
            <div className="offer-cta-price">1 199 &euro; <span>TTC</span></div>
            <button className="btn-cta">Souscrire &agrave; Ath&eacute;na &rarr;</button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
