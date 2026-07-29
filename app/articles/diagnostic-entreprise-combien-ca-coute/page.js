import { ArticleShell, ConversionBanner, GoldSep, ArticleRelated } from "../../components";

export const metadata = {
  title: "Diagnostic d'entreprise : combien ça coûte ? | ATLAS",
  description: "Comparaison des tarifs de diagnostic stratégique : cabinets, consultants indépendants, dispositifs publics et solutions accessibles.",
};

export default function Article3() {
  return (
    <ArticleShell label="Pratique" title="Diagnostic d'entreprise : combien ça coûte ?" image="/images/texture-doree.jpg" imageAlt="Texture dorée et argentée">
      <p>La question du coût est souvent la première, et celle qui dissuade. Les tarifs des cabinets sont rarement affichés, et les montants peuvent être dissuasifs. Voici un panorama clair.</p>
      <GoldSep />
      <h2>Les grands cabinets de conseil</h2>
      <p>McKinsey, BCG, Deloitte, PwC facturent entre 800 et 3 000 € par jour. Une mission de diagnostic mobilise deux à quatre consultants pendant deux à six semaines. Coût : 30 000 à 150 000 €. Justifié pour les ETI en transformation, hors de portée pour une TPE à 300 000 € de CA.</p>
      <h2>Les cabinets de taille intermédiaire</h2>
      <p>Le taux journalier moyen d'un consultant confirmé en France se situe autour de 762 € HT. Une mission de deux semaines coûte entre 8 000 et 15 000 €. Qualité souvent au rendez-vous, mais budget significatif pour une petite structure.</p>
      <h2>Les consultants indépendants</h2>
      <p>Tarifs 30 à 50 % inférieurs aux cabinets. Un diagnostic compact sur cinq à dix jours coûte entre 3 000 et 8 000 €. Qualité variable selon l'expérience. <a href="https://www.malt.fr" target="_blank" rel="noopener">Malt</a> permet de trouver des consultants qualifiés.</p>
      <GoldSep />
      <h2>Les dispositifs publics</h2>
      <p><a href="https://www.bpifrance.fr" target="_blank" rel="noopener">Bpifrance</a> subventionne des missions de conseil mais cible les PME à partir de 5M€ de CA. Les <a href="https://www.cci.fr" target="_blank" rel="noopener">CCI</a> et <a href="https://www.cma-france.fr" target="_blank" rel="noopener">CMA</a> proposent des diagnostics gratuits mais au format limité. <a href="https://www.francenum.gouv.fr" target="_blank" rel="noopener">France Num</a> accompagne la transformation numérique. Les <a href="https://travail-emploi.gouv.fr/ministere/missions-organisation/article/les-opco" target="_blank" rel="noopener">OPCO</a> financent du conseil en RH et organisation.</p>
      <h2>Les solutions en ligne</h2>
      <p>Des auto-diagnostics gratuits existent. Avantage : accessibilité. Limite : sans analyse humaine, sans croisement de données, sans contexte sectoriel, les recommandations restent génériques.</p>
      <GoldSep />
      <h2>O&ugrave; se situe ATLAS</h2>
      <p>ATLAS occupe l'espace entre les auto-diagnostics superficiels et les missions inaccessibles. 127 questions, une recherche sectorielle actualisée, SWOT, PESTEL, Porter, les mêmes outils que les cabinets, pour une fraction du prix. Hermès à 199 €, Iris à 599 €, Athéna à 1 199 €. Le choix n'est plus entre « ne rien faire » et « dépenser 5 000 € ».</p>
      <ConversionBanner
        title="Un diagnostic sérieux, sans le tarif d'un cabinet"
        text="ATLAS applique aux TPE et PME les méthodologies des grands cabinets, à un prix qui reste accessible."
        stat="Hermès 249 € · Iris 599 € · Athéna 1 299 €."
      />
      <ArticleRelated items={[
        { label: "Ressources", title: "Aides et accompagnement pour les TPE et PME", href: "/articles/aides-accompagnement-tpe-pme" },
        { label: "Guide", title: "Diagnostic stratégique d'entreprise : pourquoi et comment", href: "/articles/diagnostic-strategique-pourquoi-comment" },
      ]} />
    </ArticleShell>
  );
}
