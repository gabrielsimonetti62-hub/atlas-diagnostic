import Link from "next/link";
import { Nav, Footer, GoldSep, OfferPageBottom } from "../../components";

export const metadata = {
  title: "Offre Athéna — Accompagnement stratégique sur 7 mois | ATLAS",
  description: "L'accompagnement complet : diagnostic stratégique, orientation experts et suivis réguliers à 1, 3, 5 et 7 mois avec bilans d'évolution. 1 199 €.",
};

export default function Athena() {
  return (
    <>
      <Nav />
      <div className="container">
        <section className="page-header">
          <div className="section-label">Offre Ath&eacute;na</div>
          <h1>Ath&eacute;na</h1>
          <p className="section-intro">L&apos;accompagnement qui vous fait grandir.</p>
        </section>
        <div className="offer-figure">
          <img src="/images/statue-athena.jpg" alt="Statue d&apos;Ath&eacute;na au casque dor&eacute;" />
        </div>
        <div className="myth-block">
          <p>Dans la mythologie grecque, Ath&eacute;na est la d&eacute;esse de la sagesse et de la strat&eacute;gie. N&eacute;e en armes du front de Zeus, elle ne gagne pas ses batailles par la force mais par l&apos;intelligence, la pr&eacute;paration et la vision. Ceux qu&apos;elle accompagne ne sortent pas seulement victorieux : ils sortent grandis, plus lucides et plus forts qu&apos;ils ne l&apos;&eacute;taient en entrant.</p>
          <p>C&apos;est l&apos;esprit de cette offre : un accompagnement complet, sur la dur&eacute;e, o&ugrave; chaque &eacute;tape vous fait progresser. Au fil du parcours, vous aff&ucirc;terez votre regard strat&eacute;gique, enrichirez votre lecture du march&eacute; et renforcerez votre capacit&eacute; &agrave; anticiper. ATH&Eacute;NA ne se contente pas de livrer des r&eacute;ponses : elle vous transmet une sagesse qui reste, bien apr&egrave;s la fin de l&apos;accompagnement.</p>
        </div>
      </div>
      <div className="container" style={{ margin: "44px auto", maxWidth: "560px" }}><GoldSep /></div>
      <div className="container">
        <section className="offer-body">
          <h2>Ce que vous recevez</h2>
          <p>Ath&eacute;na comprend le diagnostic strat&eacute;gique complet ATLAS, trait&eacute; en dossier prioritaire : 127 questions, 10 domaines analys&eacute;s, rapport de 24 &agrave; 40 pages, indice de lucidit&eacute; et plan d&apos;action prioris&eacute; avec budgets, calendrier et outils.</p>
          <p>S&apos;y ajoutent l&apos;orientation vers l&apos;&eacute;cosyst&egrave;me ATLAS et quatre rendez-vous de suivi &eacute;chelonn&eacute;s sur sept mois : &agrave; 1 mois pour ajuster le lancement du plan d&apos;action, &agrave; 3 mois pour un bilan d&apos;&eacute;volution complet, &agrave; 5 mois pour de nouvelles recommandations, et &agrave; 7 mois pour un bilan de fin de parcours qui mesure le chemin accompli.</p>
          <p>&Agrave; chaque &eacute;tape, votre situation est r&eacute;&eacute;valu&eacute;e, vos scores actualis&eacute;s, vos priorit&eacute;s r&eacute;ordonn&eacute;es. Vous ne restez jamais seul face &agrave; votre plan d&apos;action : ATLAS avance avec vous, sur la dur&eacute;e.</p>
          <h2>&Agrave; qui s&apos;adresse Ath&eacute;na</h2>
          <p>Aux dirigeants qui veulent transformer leur entreprise en profondeur et &ecirc;tre accompagn&eacute;s dans la dur&eacute;e. Sept mois pour structurer, corriger, progresser &mdash; et ressortir du parcours avec une entreprise plus solide et un regard plus aiguis&eacute;.</p>
          <div className="offer-cta-block">
            <div className="offer-cta-price">1 199 &euro; <span>TTC</span></div>
            <Link href="/souscription#athena" className="btn-cta">Souscrire &agrave; Ath&eacute;na &rarr;</Link>
          </div>
          <OfferPageBottom current="athena" />
        </section>
      </div>
      <Footer />
    </>
  );
}
