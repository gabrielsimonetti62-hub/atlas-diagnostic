import Link from "next/link";
import { Nav, Footer, GoldSep, OfferPageBottom } from "../../components";

export const metadata = {
  title: "Offre Hermès — Diagnostic stratégique complet | ATLAS",
  description: "Un diagnostic complet de votre entreprise sur 10 domaines stratégiques. Rapport détaillé de 24 à 40 pages avec recommandations priorisées et plan d'action. 199 €.",
};

export default function Hermes() {
  return (
    <>
      <Nav />
      <div className="container">
        <section className="page-header">
          <div className="section-label">Offre Herm&egrave;s</div>
          <h1>Herm&egrave;s</h1>
          <p className="section-intro">Le diagnostic qui r&eacute;v&egrave;le ce que vous ne voyez pas.</p>
        </section>
        <div className="offer-figure">
          <img src="/images/statue-hermes.jpg" alt="Statue d&apos;Herm&egrave;s tenant le caduc&eacute;e" />
        </div>
        <div className="myth-block">
          <p>Dans la mythologie grecque, Herm&egrave;s est le messager des dieux. Il est aussi le protecteur des voyageurs et le dieu au caduc&eacute;e, devenu l&apos;embl&egrave;me des m&eacute;decins. Rapide et pr&eacute;cis, il porte les messages essentiels sans d&eacute;tour ni d&eacute;lai, et veille sur ceux qui se mettent en route.</p>
          <p>C&apos;est l&apos;esprit de cette offre : un diagnostic complet de votre entreprise, livr&eacute; rapidement, qui vous dit ce que vous devez savoir sans superflu. Comme un m&eacute;decin, ATLAS examine, mesure et r&eacute;v&egrave;le ce que vous ne voyiez plus. Choisir Herm&egrave;s, c&apos;est refuser l&apos;immobilisme. C&apos;est d&eacute;cider de se mettre en route, avec enfin une vision claire de l&agrave; o&ugrave; vous &ecirc;tes et de l&agrave; o&ugrave; vous pouvez aller.</p>
        </div>
      </div>
      <div className="container" style={{ margin: "44px auto", maxWidth: "560px" }}><GoldSep /></div>
      <div className="container">
        <section className="offer-body">
          <h2>Ce que vous recevez</h2>
          <p>L&apos;offre Herm&egrave;s est le socle de l&apos;accompagnement ATLAS. Elle a &eacute;t&eacute; con&ccedil;ue pour offrir aux dirigeants de TPE et PME un niveau d&apos;analyse qui, jusqu&apos;&agrave; pr&eacute;sent, n&apos;&eacute;tait accessible qu&apos;&agrave; travers des missions de conseil factur&eacute;es plusieurs milliers d&apos;euros.</p>
          <p>Votre diagnostic couvre dix domaines strat&eacute;giques. Chaque domaine est &eacute;valu&eacute;, not&eacute; et analys&eacute; individuellement. Un score global sur 100 vous donne une photographie imm&eacute;diate de la sant&eacute; de votre entreprise.</p>
          <p>Le rapport, de 24 &agrave; 40 pages, int&egrave;gre une analyse de votre environnement externe et croise ces &eacute;l&eacute;ments avec votre situation interne pour produire une matrice SWOT compl&egrave;te et un plan d&apos;action prioris&eacute;. Chaque recommandation est accompagn&eacute;e d&apos;une estimation budg&eacute;taire, d&apos;un calendrier sugg&eacute;r&eacute; et de conseils concrets pour la mettre en &oelig;uvre.</p>
          <p>Un indice de lucidit&eacute;, propre &agrave; la m&eacute;thodologie ATLAS, mesure l&apos;&eacute;cart entre votre perception et la r&eacute;alit&eacute; des donn&eacute;es. C&apos;est un indicateur unique qui change la mani&egrave;re dont vous prendrez vos d&eacute;cisions.</p>
          <h2>&Agrave; qui s&apos;adresse Herm&egrave;s</h2>
          <p>Aux dirigeants qui veulent un &eacute;tat des lieux clair, sans engagement de suivi. Vous recevez votre diagnostic, vous appliquez les recommandations &agrave; votre rythme. Vous pourrez &eacute;voluer vers Iris ou Ath&eacute;na &agrave; tout moment.</p>
          <div className="offer-cta-block">
            <div className="offer-cta-price">199 &euro; <span>TTC</span></div>
            <Link href="/souscription#hermes" className="btn-cta">Souscrire &agrave; Herm&egrave;s &rarr;</Link>
          </div>
          <OfferPageBottom current="hermes" />
        </section>
      </div>
      <Footer />
    </>
  );
}
