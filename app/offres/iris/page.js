import Link from "next/link";
import { Nav, Footer, GoldSep, OfferPageBottom } from "../../components";

export const metadata = {
  title: "Offre Iris — Diagnostic et suivi à 3 mois | ATLAS",
  description: "Le diagnostic stratégique complet, prolongé par une orientation vers les bons experts et un suivi à 3 mois pour mesurer vos progrès. 599 €.",
};

export default function Iris() {
  return (
    <>
      <Nav />
      <div className="container">
        <section className="page-header">
          <div className="section-label">Offre Iris</div>
          <h1>Iris</h1>
          <p className="section-intro">Le diagnostic qui laisse une trace.</p>
        </section>
        <div className="offer-figure">
          <img src="/images/texture-violette.jpg" alt="Traîn&eacute;e de couleurs, embl&egrave;me d&apos;Iris" />
        </div>
        <div className="myth-block">
          <p>Dans la mythologie grecque, Iris est la messag&egrave;re des dieux et la d&eacute;esse de l&apos;arc-en-ciel. Lorsqu&apos;elle traverse le ciel afin de porter un message, elle laisse derri&egrave;re elle une tra&icirc;n&eacute;e de couleurs qui relie le ciel &agrave; la terre. Son passage ne s&apos;efface pas : il illumine et trace un chemin visible &agrave; tous.</p>
          <p>C&apos;est l&apos;esprit de cette offre : un diagnostic complet, porteur des messages dont vous avez besoin pour ouvrir les yeux, prolong&eacute; par un suivi &agrave; trois mois. Le moment venu, vous mesurerez ce que vous aurez accompli et contemplerez, depuis les nuages, le chemin parcouru. IRIS ne se contente pas de passer : elle laisse une trace durable dans votre entreprise, un pont entre votre situation d&apos;aujourd&apos;hui et celle que vous visez.</p>
        </div>
      </div>
      <div className="container" style={{ margin: "44px auto", maxWidth: "560px" }}><GoldSep /></div>
      <div className="container">
        <section className="offer-body">
          <h2>Ce que vous recevez</h2>
          <p>Iris comprend l&apos;int&eacute;gralit&eacute; du diagnostic ATLAS : 127 questions, 10 domaines strat&eacute;giques analys&eacute;s et not&eacute;s, un rapport de 24 &agrave; 40 pages avec analyse de march&eacute;, SWOT, &eacute;valuation des risques, indice de lucidit&eacute; et plan d&apos;action prioris&eacute; avec budgets et calendrier.</p>
          <p>&Agrave; ce socle s&apos;ajoute l&apos;orientation vers l&apos;&eacute;cosyst&egrave;me ATLAS : pour chaque chantier identifi&eacute;, nous vous indiquons vers quels types d&apos;experts, de dispositifs ou de ressources vous tourner pour avancer concr&egrave;tement.</p>
          <p>Puis vient le suivi &agrave; trois mois : un nouveau point de mesure, un bilan de ce qui a progress&eacute;, de ce qui r&eacute;siste, et des recommandations actualis&eacute;es. C&apos;est ce second regard qui transforme un diagnostic en trajectoire.</p>
          <h2>&Agrave; qui s&apos;adresse Iris</h2>
          <p>Aux dirigeants qui veulent voir clair et v&eacute;rifier, preuve &agrave; l&apos;appui, que leurs efforts produisent des r&eacute;sultats. C&apos;est la formule recommand&eacute;e par ATLAS : celle o&ugrave; le diagnostic devient un chemin.</p>
          <div className="offer-cta-block">
            <div className="offer-cta-price">599 &euro; <span>TTC</span></div>
            <Link href="/souscription#iris" className="btn-cta">Souscrire &agrave; Iris &rarr;</Link>
          </div>
          <OfferPageBottom current="iris" />
        </section>
      </div>
      <Footer />
    </>
  );
}
