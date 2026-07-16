import Link from "next/link";
import { Nav, Footer } from "../../components";

export const metadata = {
  title: "Offre Iris — Diagnostic + orientation + suivi à 3 mois | ATLAS",
  description: "Le diagnostic stratégique complet, une orientation vers des experts adaptés, et un bilan de suivi à 3 mois pour mesurer vos progrès. 599 €.",
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
          <p>L&apos;offre Iris part du m&ecirc;me diagnostic complet que Herm&egrave;s &mdash; dix domaines analys&eacute;s, score global, analyse externe, SWOT, plan d&apos;action &mdash; et y ajoute deux dimensions essentielles.</p>
          <p>La premi&egrave;re is l&apos;orientation vers l&apos;&eacute;cosyst&egrave;me ATLAS. Lorsque le diagnostic identifie un besoin sp&eacute;cifique &mdash; un expert-comptable plus adapt&eacute;, un sp&eacute;cialiste du digital, un consultant en recrutement, un organisme de formation &mdash; nous vous mettons en relation avec des professionnels de confiance. Vous n&apos;&ecirc;tes plus seul face aux recommandations : nous vous aidons &agrave; trouver les bonnes personnes pour les mettre en &oelig;uvre.</p>
          <p>La seconde est le suivi. Trois mois apr&egrave;s la r&eacute;ception de votre diagnostic initial, un nouveau questionnaire vous est envoy&eacute;. Il nous permet de mesurer l&apos;&eacute;volution de chaque domaine, de comparer vos scores, d&apos;identifier ce qui a progress&eacute; et ce qui reste &agrave; travailler. Vous recevez un bilan de suivi avec des recommandations actualis&eacute;es.</p>
          <p>Ce bilan &agrave; 3 mois a une double vertu : pour vous, il mat&eacute;rialise vos progr&egrave;s et maintient la dynamique. Pour ATLAS, il permet d&apos;affiner les recommandations en fonction de ce qui a fonctionn&eacute; ou non dans votre contexte r&eacute;el.</p>
          <h2>&Agrave; qui s&apos;adresse Iris</h2>
          <p>Aux dirigeants qui savent qu&apos;un diagnostic seul ne suffit pas &mdash; qui veulent &ecirc;tre orient&eacute;s vers les bonnes ressources et mesurer concr&egrave;tement l&apos;impact de leurs actions. Iris est l&apos;offre que nous recommandons pour un premier accompagnement structur&eacute;.</p>
          <div className="offer-cta-block">
            <div className="offer-cta-price">599 &euro; <span>TTC</span></div>
            <button className="btn-cta">Souscrire &agrave; Iris &rarr;</button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
