import { ArticleShell, ConversionBanner, GoldSep } from "../../components";

export const metadata = {
  title: "Diagnostic stratégique d'entreprise : pourquoi et comment | ATLAS",
  description: "Comprendre ce qu'est un diagnostic stratégique, pourquoi il est essentiel pour les TPE et PME, et comment il se déroule concrètement.",
};

export default function Article1() {
  return (
    <ArticleShell label="Guide" title="Diagnostic strat&eacute;gique d&apos;entreprise : pourquoi et comment" image="/images/conseil-cafe.jpg" imageAlt="Deux dirigeantes en conseil strat&eacute;gique">
      <p>La majorit&eacute; des dirigeants de TPE et PME n&apos;ont jamais fait r&eacute;aliser de diagnostic strat&eacute;gique de leur entreprise. Non pas par n&eacute;gligence, mais parce que cet exercice est traditionnellement associ&eacute; aux grandes structures. C&apos;est une erreur de perception &mdash; et probablement l&apos;une des plus co&ucirc;teuses.</p>
      <GoldSep />
      <h2>Ce qu&apos;est r&eacute;ellement un diagnostic strat&eacute;gique</h2>
      <p>Un diagnostic strat&eacute;gique n&apos;est ni un audit comptable ni un contr&ocirc;le de gestion. C&apos;est un exercice global qui &eacute;value l&apos;ensemble des dimensions d&apos;une entreprise &mdash; sa sant&eacute; financi&egrave;re, son organisation, sa capacit&eacute; commerciale, sa gouvernance, son positionnement march&eacute; &mdash; pour identifier les forces sur lesquelles capitaliser et les faiblesses &agrave; corriger avant qu&apos;elles ne deviennent des menaces.</p>
      <p>Les cabinets de conseil comme McKinsey, BCG ou Bain utilisent depuis des d&eacute;cennies des m&eacute;thodologies structur&eacute;es pour ces analyses : matrice SWOT, mod&egrave;le PESTEL, 5 forces de Porter. Ces outils ne sont pas r&eacute;serv&eacute;s aux entreprises du CAC 40. Ils sont tout aussi pertinents &mdash; et souvent plus urgents &mdash; pour une entreprise de 5 ou 15 personnes.</p>
      <GoldSep />
      <h2>Pourquoi les TPE et PME en ont particuli&egrave;rement besoin</h2>
      <p>Une &eacute;tude de la <a href="https://www.banque-france.fr" target="_blank" rel="noopener">Banque de France</a> sur les d&eacute;faillances r&eacute;v&egrave;le que 80 % des cessations auraient pu &ecirc;tre &eacute;vit&eacute;es avec une d&eacute;tection pr&eacute;coce des probl&egrave;mes. Les causes les plus fr&eacute;quentes ne sont pas spectaculaires : concentration client, suivi financier insuffisant, absence de formalisation des processus, dirigeant qui porte seul l&apos;entreprise.</p>
      <p>Dans une grande entreprise, ces signaux sont d&eacute;tect&eacute;s par le contr&ocirc;le de gestion ou les auditeurs. Dans une TPE, le dirigeant est souvent le seul &agrave; pouvoir les voir &mdash; et il est trop pris par le quotidien pour prendre le recul n&eacute;cessaire.</p>
      <p>Les <a href="https://www.cci.fr" target="_blank" rel="noopener">CCI</a> et les <a href="https://www.cma-france.fr" target="_blank" rel="noopener">CMA</a> proposent des accompagnements, mais leurs ressources sont limit&eacute;es. <a href="https://www.bpifrance.fr" target="_blank" rel="noopener">Bpifrance</a> offre des missions subventionn&eacute;es, mais elles ciblent principalement les PME &agrave; partir de 5 millions d&apos;euros de CA.</p>
      <GoldSep />
      <h2>Comment se d&eacute;roule un diagnostic strat&eacute;gique</h2>
      <p>Un diagnostic s&eacute;rieux se d&eacute;roule en phases. La collecte d&apos;informations d&apos;abord : donn&eacute;es financi&egrave;res, organisation, processus commerciaux, positionnement march&eacute;, gouvernance. Puis l&apos;analyse : les donn&eacute;es sont crois&eacute;es, confront&eacute;es aux moyennes sectorielles, pass&eacute;es au crible des outils strat&eacute;giques. Enfin la restitution : un rapport structur&eacute; avec constats, analyse externe, synth&egrave;se SWOT et plan d&apos;action prioris&eacute;.</p>
      <GoldSep />
      <h2>Les erreurs les plus courantes</h2>
      <p>Attendre d&apos;&ecirc;tre en difficult&eacute; pour faire un diagnostic. Confondre diagnostic et solution &mdash; le diagnostic identifie, c&apos;est le plan d&apos;action qui r&eacute;sout. Et ne pas &ecirc;tre sinc&egrave;re dans ses r&eacute;ponses &mdash; un diagnostic est aussi pr&eacute;cis que les informations qui l&apos;alimentent.</p>
      <ConversionBanner
        title="Pr&ecirc;t &agrave; y voir plus clair ?"
        text="Le diagnostic ATLAS couvre 10 domaines strat&eacute;giques avec un rapport complet et un plan d&apos;action directement exploitable."
        stat="&Agrave; partir de 199 &euro; &middot; R&eacute;sultats d&egrave;s 72h"
      />
    </ArticleShell>
  );
}
