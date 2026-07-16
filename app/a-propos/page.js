import Link from "next/link";
import { Nav, Footer } from "../components";

export const metadata = {
  title: "À propos d'ATLAS — Mission, ambition et méthodologie",
  description: "Découvrez la mission d'ATLAS : rendre le diagnostic stratégique accessible aux TPE et PME grâce à une méthodologie rigoureuse inspirée des plus grands cabinets de conseil.",
};

export default function APropos() {
  return (
    <>
      <Nav />
      <div className="container">
        <section className="page-header">
          <div className="section-label">&Agrave; propos</div>
          <h1>ATLAS</h1>
          <p className="section-intro">Laissez-nous porter votre monde sur nos &eacute;paules.</p>
        </section>
      </div>
      <div className="container"><hr className="divider" /></div>
      <div className="container">
        <section className="section article-body">
          <h2>Notre mission</h2>
          <p>ATLAS est n&eacute; d&apos;un constat simple : les TPE et PME, qui repr&eacute;sentent plus de 99 % du tissu &eacute;conomique fran&ccedil;ais, n&apos;ont pas acc&egrave;s aux m&ecirc;mes outils d&apos;analyse strat&eacute;gique que les grandes entreprises. Les cabinets de conseil traditionnels facturent leurs missions entre 3 000 et 50 000 &euro; &mdash; un investissement hors de port&eacute;e pour la grande majorit&eacute; des dirigeants de petites structures.</p>
          <p>Notre mission est de rendre cette expertise accessible. ATLAS propose un diagnostic strat&eacute;gique complet, construit sur les m&eacute;thodologies &eacute;prouv&eacute;es des plus grands cabinets, &agrave; un prix adapt&eacute; &agrave; la r&eacute;alit&eacute; &eacute;conomique des TPE et PME.</p>
          <h2>Notre ambition</h2>
          <p>ATLAS n&apos;est pas un simple outil de diagnostic. C&apos;est la premi&egrave;re &eacute;tape d&apos;un projet &agrave; ambition globale : b&acirc;tir un &eacute;cosyst&egrave;me d&apos;accompagnement et d&apos;entraide o&ugrave; chaque dirigeant peut identifier ses fragilit&eacute;s, s&apos;appuyer sur les bons experts, mesurer sa progression dans le temps et collaborer avec les autres membres pour grandir ensemble.</p>
          <h2>Notre m&eacute;thodologie</h2>
          <p>Le questionnaire ATLAS couvre 127 questions r&eacute;parties sur 10 domaines strat&eacute;giques. Il a &eacute;t&eacute; con&ccedil;u en croisant les approches des audits internes, des analyses financi&egrave;res, des &eacute;valuations op&eacute;rationnelles et des diagnostics de gouvernance utilis&eacute;s par les cabinets de r&eacute;f&eacute;rence du secteur.</p>
          <p>Chaque diagnostic est enrichi par une recherche sectorielle actualis&eacute;e, une analyse concurrentielle, et la production d&apos;outils strat&eacute;giques reconnus : matrice SWOT, analyse PESTEL, mod&egrave;le des 5 forces de Porter, matrice urgence/importance.</p>
          <p>L&apos;indice de lucidit&eacute;, propre &agrave; ATLAS, mesure l&apos;&eacute;cart entre la perception du dirigeant et la r&eacute;alit&eacute; des donn&eacute;es. C&apos;est un indicateur unique qui transforme la mani&egrave;re dont les dirigeants prennent leurs d&eacute;cisions.</p>
          <h2>Notre histoire</h2>
          <p>ATLAS a &eacute;t&eacute; fond&eacute; en 2026 avec une conviction : que la technologie peut d&eacute;mocratiser l&apos;acc&egrave;s au conseil strat&eacute;gique de qualit&eacute;. En combinant une m&eacute;thodologie rigoureuse, une adresse humaine et des outils d&apos;intelligence artificielle, ATLAS rend possible ce qui &eacute;tait r&eacute;serv&eacute; &agrave; une minorit&eacute; d&apos;entreprises.</p>
        </section>
      </div>
      <Footer />
    </>
  );
}
