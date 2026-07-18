import { Nav, Footer, GoldSep, DiscoverRow, OffersPlateau } from "../components";

export const metadata = {
  title: "Nos offres — Diagnostic stratégique pour TPE et PME | ATLAS",
  description: "Trois niveaux d'accompagnement adaptés à chaque entreprise : Hermès (199€), Iris (599€) et Athéna (1199€). Du diagnostic complet à l'accompagnement dans la durée.",
};

export default function Offres() {
  return (
    <>
      <Nav />
      <div className="container">
        <section className="page-header">
          <div className="section-label">Les offres</div>
          <h1>Nos offres</h1>
        </section>
      </div>
      <div className="container">
        <div className="myth-block">
          <p>Chaque entreprise a son histoire, son rythme et ses d&eacute;fis. Un commer&ccedil;ant qui s&apos;interroge sur sa rentabilit&eacute;, un artisan d&eacute;bord&eacute; qui veut structurer sa croissance, une micro-entrepreneuse qui se demande comment franchir le cap, un dirigeant de PME qui pr&eacute;pare la transmission de ce qu&apos;il a construit : aucun ne se trouve au m&ecirc;me point du chemin, et aucun n&apos;a besoin du m&ecirc;me accompagnement.</p>
          <p>C&apos;est pourquoi ATLAS ne propose pas une formule unique, mais trois niveaux d&apos;accompagnement, con&ccedil;us pour s&apos;adapter &agrave; vos besoins, &agrave; vos moyens et &agrave; vos ambitions. Herm&egrave;s pour ceux qui veulent voir clair, vite. Iris pour ceux qui veulent voir clair et mesurer le chemin parcouru. Ath&eacute;na pour ceux qui veulent &ecirc;tre accompagn&eacute;s dans la dur&eacute;e et ressortir grandis du parcours.</p>
          <p>Quel que soit votre choix, l&apos;engagement reste le m&ecirc;me : un regard ext&eacute;rieur exigeant, une analyse rigoureuse de votre entreprise et de son march&eacute;, et des actions concr&egrave;tes, chiffr&eacute;es, r&eacute;alistes. Pas de jargon, pas de rapport qui prend la poussi&egrave;re : une vision claire pour avancer.</p>
        </div>
        <DiscoverRow />
      </div>
      <div className="container" style={{ marginTop: "64px" }}><GoldSep /></div>
      <div className="container">
        <div className="plateau-wrapper">
          <OffersPlateau label="Souscrire" title="Passez &agrave; l&apos;action" />
        </div>
      </div>
      <Footer />
    </>
  );
}
