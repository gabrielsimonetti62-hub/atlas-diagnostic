import Link from "next/link";
import { Nav, Footer, OfferPlateauBottom } from "../../components";

export const metadata = {
  title: "Offre Hermès — Diagnostic stratégique complet | ATLAS",
  description: "Un diagnostic complet de votre entreprise sur 10 domaines stratégiques. Rapport détaillé avec recommandations priorisées et plan d'action. 199 €.",
};

export default function Hermes() {
  return (
    <>
      <Nav />
      <div className="container">
        <section className="page-header">
          <div className="section-label">Offre Herm&egrave;s</div>
          <h1>Le diagnostic qui r&eacute;v&egrave;le ce que vous ne voyez pas</h1>
          <p className="section-intro">Un &eacute;tat des lieux strat&eacute;gique complet de votre entreprise, livr&eacute; sous 72 heures.</p>
        </section>
      </div>
      <div className="container"><hr className="divider" /></div>
      <div className="container">
        <section className="section article-body">
          <h2>Ce que vous recevez</h2>
          <p>L&apos;offre Herm&egrave;s est le socle de l&apos;accompagnement ATLAS. Elle a &eacute;t&eacute; con&ccedil;ue pour offrir aux dirigeants de TPE et PME un niveau d&apos;analyse qui, jusqu&apos;&agrave; pr&eacute;sent, n&apos;&eacute;tait accessible qu&apos;&agrave; travers des missions de conseil factur&eacute;es plusieurs milliers d&apos;euros.</p>
          <p>Votre diagnostic couvre dix domaines strat&eacute;giques. Chaque domaine est &eacute;valu&eacute;, not&eacute; et analys&eacute; individuellement. Un score global sur 100 vous donne une photographie imm&eacute;diate de la sant&eacute; de votre entreprise.</p>
          <p>Le rapport int&egrave;gre une analyse de votre environnement externe et croise ces &eacute;l&eacute;ments avec votre situation interne pour produire une matrice SWOT compl&egrave;te et un plan d&apos;action prioris&eacute;.</p>
          <p>Chaque recommandation est accompagn&eacute;e d&apos;une estimation budg&eacute;taire, d&apos;un calendrier sugg&eacute;r&eacute; et de conseils concrets pour la mettre en &oelig;uvre. Vous n&apos;avez pas besoin d&apos;un consultant suppl&eacute;mentaire pour passer &agrave; l&apos;action.</p>
          <p>Un indice de lucidit&eacute;, propre &agrave; la m&eacute;thodologie ATLAS, mesure l&apos;&eacute;cart entre votre perception et la r&eacute;alit&eacute; des donn&eacute;es. C&apos;est un indicateur unique qui change la mani&egrave;re dont vous prendrez vos d&eacute;cisions.</p>
          <h2>&Agrave; qui s&apos;adresse Herm&egrave;s</h2>
          <p>Aux dirigeants qui veulent un &eacute;tat des lieux clair, sans engagement de suivi. Vous recevez votre diagnostic, vous appliquez les recommandations &agrave; votre rythme. Vous pourrez &eacute;voluer vers Iris ou Ath&eacute;na &agrave; tout moment.</p>
          <div className="offer-cta-block">
            <div className="offer-cta-price">199 &euro; <span>TTC</span></div>
            <button className="btn-cta">Souscrire &agrave; Herm&egrave;s &rarr;</button>
          </div>
          <OfferPlateauBottom />
        </section>
      </div>
      <Footer />
    </>
  );
}
