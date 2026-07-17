import Link from "next/link";
import { Nav, Footer, OfferPlateauBottom } from "../../components";

export const metadata = {
  title: "Offre Iris — Diagnostic + orientation + suivi à 3 mois | ATLAS",
  description: "Le diagnostic stratégique complet, une orientation vers des experts adaptés, et un bilan de suivi à 3 mois. 599 €.",
};

export default function Iris() {
  return (
    <>
      <Nav />
      <div className="container">
        <section className="page-header">
          <div className="section-label">Offre Iris &mdash; Recommand&eacute;e</div>
          <h1>Le diagnostic qui vous accompagne au-del&agrave; de l&apos;analyse</h1>
          <p className="section-intro">Tout ce que comprend Herm&egrave;s, plus une orientation vers les bons experts et un suivi concret de vos progr&egrave;s.</p>
        </section>
      </div>
      <div className="container"><hr className="divider" /></div>
      <div className="container">
        <section className="section article-body">
          <h2>Ce que vous recevez</h2>
          <p>L&apos;offre Iris part du m&ecirc;me diagnostic complet que Herm&egrave;s et y ajoute deux dimensions essentielles.</p>
          <p>La premi&egrave;re est l&apos;orientation vers l&apos;&eacute;cosyst&egrave;me ATLAS. Lorsque le diagnostic identifie un besoin sp&eacute;cifique, nous vous mettons en relation avec des professionnels de confiance. Vous n&apos;&ecirc;tes plus seul face aux recommandations.</p>
          <p>La seconde est le suivi. Trois mois apr&egrave;s votre diagnostic initial, un nouveau questionnaire mesure l&apos;&eacute;volution de chaque domaine. Vous recevez un bilan avec des recommandations actualis&eacute;es.</p>
          <h2>&Agrave; qui s&apos;adresse Iris</h2>
          <p>Aux dirigeants qui veulent &ecirc;tre orient&eacute;s vers les bonnes ressources et mesurer concr&egrave;tement l&apos;impact de leurs actions. C&apos;est l&apos;offre que nous recommandons.</p>
          <div className="offer-cta-block">
            <div className="offer-cta-price">599 &euro; <span>TTC</span></div>
            <button className="btn-cta">Souscrire &agrave; Iris &rarr;</button>
          </div>
          <OfferPlateauBottom />
        </section>
      </div>
      <Footer />
    </>
  );
}
