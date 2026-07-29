import { ArticleShell, ConversionBanner, GoldSep, ArticleRelated } from "../../components";

export const metadata = {
  title: "Diagnostic stratégique d'entreprise : pourquoi et comment | ATLAS",
  description: "Comprendre ce qu'est un diagnostic stratégique, pourquoi il est essentiel pour les TPE et PME, et comment il se déroule concrètement.",
};

export default function Article1() {
  return (
    <ArticleShell label="Guide" title="Diagnostic stratégique d'entreprise : pourquoi et comment" image="/images/conseil-cafe.jpg" imageAlt="Deux dirigeantes en conseil stratégique">
      <p>La majorité des dirigeants de TPE et PME n'ont jamais fait réaliser de diagnostic stratégique de leur entreprise. Non pas par négligence, mais parce que cet exercice est traditionnellement associé aux grandes structures. C'est une erreur de perception, et probablement l'une des plus coûteuses.</p>
      <GoldSep />
      <h2>Ce qu'est réellement un diagnostic stratégique</h2>
      <p>Un diagnostic stratégique n'est ni un audit comptable ni un contrôle de gestion. C'est un exercice global qui évalue l'ensemble des dimensions d'une entreprise, sa santé financière, son organisation, sa capacité commerciale, sa gouvernance, son positionnement marché, pour identifier les forces sur lesquelles capitaliser et les faiblesses à corriger avant qu'elles ne deviennent des menaces.</p>
      <p>Les cabinets de conseil comme McKinsey, BCG ou Bain utilisent depuis des décennies des méthodologies structurées pour ces analyses : matrice SWOT, modèle PESTEL, 5 forces de Porter. Ces outils ne sont pas réservés aux entreprises du CAC 40. Ils sont tout aussi pertinents, et souvent plus urgents, pour une entreprise de 5 ou 15 personnes.</p>
      <GoldSep />
      <h2>Pourquoi les TPE et PME en ont particulièrement besoin</h2>
      <p>Une étude de la <a href="https://www.banque-france.fr" target="_blank" rel="noopener">Banque de France</a> sur les défaillances révèle que 80 % des cessations auraient pu être évitées avec une détection précoce des problèmes. Les causes les plus fréquentes ne sont pas spectaculaires : concentration client, suivi financier insuffisant, absence de formalisation des processus, dirigeant qui porte seul l'entreprise.</p>
      <p>Dans une grande entreprise, ces signaux sont détectés par le contrôle de gestion ou les auditeurs. Dans une TPE, le dirigeant est souvent le seul à pouvoir les voir, et il est trop pris par le quotidien pour prendre le recul nécessaire.</p>
      <p>Les <a href="https://www.cci.fr" target="_blank" rel="noopener">CCI</a> et les <a href="https://www.cma-france.fr" target="_blank" rel="noopener">CMA</a> proposent des accompagnements, mais leurs ressources sont limitées. <a href="https://www.bpifrance.fr" target="_blank" rel="noopener">Bpifrance</a> offre des missions subventionnées, mais elles ciblent principalement les PME à partir de 5 millions d'euros de CA.</p>
      <GoldSep />
      <h2>Comment se déroule un diagnostic stratégique</h2>
      <p>Un diagnostic sérieux se déroule en phases. La collecte d'informations d'abord : données financières, organisation, processus commerciaux, positionnement marché, gouvernance. Puis l'analyse : les données sont croisées, confrontées aux moyennes sectorielles, passées au crible des outils stratégiques. Enfin la restitution : un rapport structuré avec constats, analyse externe, synthèse SWOT et plan d'action priorisé.</p>
      <GoldSep />
      <h2>Les erreurs les plus courantes</h2>
      <p>Attendre d'être en difficulté pour faire un diagnostic. Confondre diagnostic et solution, le diagnostic identifie, c'est le plan d'action qui résout. Et ne pas être sincère dans ses réponses, un diagnostic est aussi précis que les informations qui l'alimentent.</p>
      <ConversionBanner
        title="Passer du principe à l'action"
        text="Vous savez maintenant ce qu'un diagnostic doit contenir. La prochaine étape ? Réaliser le vôtre."
        stat="Diagnostic ATLAS : à partir de 249 €."
      />
      <ArticleRelated items={[
        { label: "Analyse", title: "Les 10 signaux qui montrent que votre entreprise a besoin d'un diagnostic", href: "/articles/10-signaux-diagnostic" },
        { label: "Pratique", title: "Diagnostic d'entreprise : combien ça coûte ?", href: "/articles/diagnostic-entreprise-combien-ca-coute" },
      ]} />
    </ArticleShell>
  );
}
