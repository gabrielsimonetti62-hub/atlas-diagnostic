import Link from "next/link";
import { Nav, Footer } from "../components";

export const metadata = {
  title: "Articles — Ressources pour dirigeants de TPE et PME | ATLAS",
  description: "Guides pratiques, analyses et ressources pour les dirigeants de TPE et PME. Diagnostic stratégique, signaux d'alerte, aides disponibles et bonnes pratiques.",
};

export default function Articles() {
  return (
    <>
      <Nav />
      <div className="container">
        <section className="page-header">
          <div className="section-label">Articles</div>
          <h1>&Eacute;clairer les dirigeants, c&apos;est notre mission</h1>
          <p className="section-intro">ATLAS met &agrave; disposition des dirigeants de TPE et PME des ressources concr&egrave;tes, fond&eacute;es sur l&apos;exp&eacute;rience du terrain et les meilleures pratiques du conseil strat&eacute;gique. Parce qu&apos;un dirigeant inform&eacute; prend de meilleures d&eacute;cisions.</p>
        </section>
      </div>
      <div className="container"><hr className="divider" /></div>
      <div className="container">
        <section className="section">
          <div className="articles-grid">
            <Link href="/articles/diagnostic-strategique-pourquoi-comment" className="article-card">
              <div className="article-card-label">Guide</div>
              <h3>Diagnostic strat&eacute;gique d&apos;entreprise : pourquoi et comment</h3>
              <p>Ce qu&apos;est un diagnostic strat&eacute;gique, &agrave; quoi il sert concr&egrave;tement, et comment il se d&eacute;roule pour une TPE ou une PME.</p>
            </Link>
            <Link href="/articles/10-signaux-diagnostic" className="article-card">
              <div className="article-card-label">Analyse</div>
              <h3>Les 10 signaux qui montrent que votre entreprise a besoin d&apos;un diagnostic</h3>
              <p>Les indicateurs concrets &mdash; financiers, organisationnels, commerciaux &mdash; qui doivent alerter un dirigeant.</p>
            </Link>
            <Link href="/articles/diagnostic-entreprise-combien-ca-coute" className="article-card">
              <div className="article-card-label">Pratique</div>
              <h3>Diagnostic d&apos;entreprise : combien &ccedil;a co&ucirc;te ?</h3>
              <p>Comparaison des tarifs entre cabinets de conseil, consultants ind&eacute;pendants et solutions accessibles comme ATLAS.</p>
            </Link>
            <Link href="/articles/aides-accompagnement-tpe-pme" className="article-card">
              <div className="article-card-label">Ressources</div>
              <h3>Aides et accompagnement pour les TPE et PME</h3>
              <p>Panorama des dispositifs publics, priv&eacute;s et sectoriels pour accompagner les dirigeants dans leur d&eacute;veloppement.</p>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
