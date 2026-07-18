import Link from "next/link";
import { Nav, Footer } from "../components";

export const metadata = {
  title: "Articles — Ressources pour dirigeants de TPE et PME | ATLAS",
  description: "Guides, analyses et ressources pour les dirigeants de TPE, PME et micro-entreprises. Diagnostic stratégique, signaux d'alerte, aides et accompagnement.",
};

function Card({ href, img, alt, label, title, desc }) {
  return (
    <Link href={href} className="article-card">
      <img src={img} alt={alt} />
      <div className="article-card-inner">
        <div className="article-card-label">{label}</div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </Link>
  );
}

export default function Articles() {
  return (
    <>
      <Nav />
      <div className="container">
        <section className="page-header">
          <div className="section-label">Articles</div>
          <h1>Articles</h1>
          <p className="section-intro">ATLAS met &agrave; disposition des dirigeants de TPE et PME des ressources concr&egrave;tes, fond&eacute;es sur l&apos;exp&eacute;rience du terrain et les meilleures pratiques du conseil strat&eacute;gique. Parce qu&apos;un dirigeant inform&eacute; prend de meilleures d&eacute;cisions.</p>
        </section>
      </div>
      <div className="container">
        <section className="section" style={{ paddingTop: "20px" }}>
          <div className="articles-grid">
            <Card href="/articles/diagnostic-strategique-pourquoi-comment" img="/images/conseil-cafe.jpg" alt="Conseil strat&eacute;gique entre dirigeants" label="Guide" title="Diagnostic strat&eacute;gique d&apos;entreprise : pourquoi et comment" desc="Ce qu&apos;est un diagnostic strat&eacute;gique, &agrave; quoi il sert concr&egrave;tement, et comment il se d&eacute;roule pour une TPE ou une PME." />
            <Card href="/articles/10-signaux-diagnostic" img="/images/gestion-dossiers.jpg" alt="Dirigeante submerg&eacute;e par les dossiers" label="Analyse" title="Les 10 signaux qui montrent que votre entreprise a besoin d&apos;un diagnostic" desc="Les indicateurs concrets &mdash; financiers, organisationnels, commerciaux &mdash; qui doivent alerter un dirigeant." />
            <Card href="/articles/diagnostic-entreprise-combien-ca-coute" img="/images/texture-doree.jpg" alt="Texture dor&eacute;e" label="Pratique" title="Diagnostic d&apos;entreprise : combien &ccedil;a co&ucirc;te ?" desc="Comparaison des tarifs entre cabinets de conseil, consultants ind&eacute;pendants et solutions accessibles comme ATLAS." />
            <Card href="/articles/aides-accompagnement-tpe-pme" img="/images/reunion-cafe.jpg" alt="R&eacute;union d&apos;accompagnement" label="Ressources" title="Aides et accompagnement pour les TPE et PME" desc="Panorama des dispositifs publics, priv&eacute;s et sectoriels pour accompagner les dirigeants dans leur d&eacute;veloppement." />
            <Card href="/articles/conseil-strategique-artisans-commercants" img="/images/menuisier-rabot.jpg" alt="Artisan menuisier au rabot" label="Analyse" title="Artisans, commer&ccedil;ants, restaurateurs : le conseil strat&eacute;gique n&apos;est pas r&eacute;serv&eacute; aux grands groupes" desc="Pourquoi les entreprises de terrain sont celles qui ont le plus &agrave; gagner d&apos;un regard strat&eacute;gique ext&eacute;rieur." />
            <Card href="/articles/micro-entreprise-passer-un-cap" img="/images/visio-domicile.jpg" alt="Micro-entrepreneur travaillant de chez lui" label="Guide" title="Micro-entreprise : &agrave; quel moment passer de la survie &agrave; la strat&eacute;gie ?" desc="Les signes qui montrent que votre micro-entreprise a d&eacute;pass&eacute; le stade du lancement &mdash; et ce qui se passe si vous les ignorez." />
            <Card href="/articles/dependance-client-danger-silencieux" img="/images/imprimeur.jpg" alt="Imprimeur dans son atelier" label="Analyse" title="D&eacute;pendre d&apos;un seul client : le danger silencieux qui menace les TPE et PME" desc="Sous-traitants, prestataires, ind&eacute;pendants : pourquoi la concentration client est la fragilit&eacute; la plus sous-estim&eacute;e." />
            <Card href="/articles/transmission-reprise-entreprise" img="/images/epicerie-duo.jpg" alt="Transmission d&apos;un commerce" label="Guide" title="Reprendre ou transmettre une entreprise : les questions &agrave; se poser avant" desc="Des centaines de milliers d&apos;entreprises vont changer de mains. La plupart ne sont pas pr&ecirc;tes." />
            <Card href="/articles/tresorerie-entreprises-rentables" img="/images/cheffe-cuisine.jpg" alt="Cheffe dans sa cuisine professionnelle" label="Analyse" title="Charges, tr&eacute;sorerie, impay&eacute;s : pourquoi des entreprises rentables finissent par fermer" desc="Le paradoxe qui frappe commerces, restaurants et artisans du b&acirc;timent &mdash; et les signaux qui l&apos;annoncent." />
            <Card href="/articles/solitude-dirigeant-decisions" img="/images/bureau-epure.jpg" alt="Bureau d&apos;un dirigeant seul" label="Analyse" title="Seul &agrave; la t&ecirc;te de votre entreprise : comment prendre les bonnes d&eacute;cisions ?" desc="L&apos;isolement du dirigeant est un risque strat&eacute;gique &agrave; part enti&egrave;re. Voici pourquoi &mdash; et pourquoi il s&apos;aggrave en silence." />
            <Card href="/articles/commerce-proximite-digital" img="/images/primeur-devanture.jpg" alt="Devanture d&apos;un commerce de proximit&eacute;" label="Analyse" title="Concurrence en ligne, avis Google : le commerce de proximit&eacute; peut-il encore gagner ?" desc="Le num&eacute;rique n&apos;a pas condamn&eacute; le commerce local. Mais il a chang&eacute; les r&egrave;gles &mdash; et beaucoup jouent encore avec les anciennes." />
            <Card href="/articles/croissance-rapide-piege" img="/images/chantier-ouvriers.jpg" alt="Ouvriers sur un chantier en pleine activit&eacute;" label="Analyse" title="Croissance rapide : le pi&egrave;ge qui tue autant d&apos;entreprises que la crise" desc="Carnet de commandes plein, embauches, nouveaux clients&hellip; et pourtant, c&apos;est souvent l&agrave; que tout bascule." />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
