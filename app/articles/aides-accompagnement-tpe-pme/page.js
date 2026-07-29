import { ArticleShell, ConversionBanner, GoldSep, ArticleRelated } from "../../components";

export const metadata = {
  title: "Aides et accompagnement pour les TPE et PME | ATLAS",
  description: "Panorama des aides publiques, dispositifs d'accompagnement et ressources pour les dirigeants de TPE et PME en France.",
};

export default function Article4() {
  return (
    <ArticleShell label="Ressources" title="Aides et accompagnement pour les TPE et PME" image="/images/reunion-cafe.jpg" imageAlt="Réunion d'accompagnement entre entrepreneurs">
      <p>Le paysage des aides aux entreprises en France est riche mais complexe. Un dirigeant peut facilement passer à côté d'opportunités qui lui sont destinées.</p>
      <GoldSep />
      <h2>Financement et trésorerie</h2>
      <p><a href="https://www.bpifrance.fr" target="_blank" rel="noopener">Bpifrance</a> propose prêts à taux préférentiel, garanties de prêt bancaire et aides à l'innovation. Le Prêt TPE vise spécifiquement les moins de 50 salariés. <a href="https://www.france-active.org" target="_blank" rel="noopener">France Active</a> accompagne via des garanties d'emprunt et prêts solidaires. L'<a href="https://www.adie.org" target="_blank" rel="noopener">Adie</a> propose des microprêts jusqu'à 12 000 €.</p>
      <h2>Conseil et accompagnement</h2>
      <p>Les <a href="https://www.cci.fr" target="_blank" rel="noopener">CCI</a> et <a href="https://www.cma-france.fr" target="_blank" rel="noopener">CMA</a> proposent rendez-vous individuels, ateliers et programmes d'accompagnement. <a href="https://www.reseau-entreprendre.org" target="_blank" rel="noopener">Réseau Entreprendre</a>, <a href="https://www.initiative-france.fr" target="_blank" rel="noopener">Initiative France</a> et <a href="https://www.bge.asso.fr" target="_blank" rel="noopener">BGE</a> offrent mentorat et prêts d'honneur.</p>
      <GoldSep />
      <h2>Formation</h2>
      <p>Les <a href="https://travail-emploi.gouv.fr/ministere/missions-organisation/article/les-opco" target="_blank" rel="noopener">OPCO</a> financent la formation. Chaque secteur a le sien : <a href="https://www.constructys.fr" target="_blank" rel="noopener">Constructys</a> pour le bâtiment, <a href="https://www.lopcommerce.com" target="_blank" rel="noopener">L'Opcommerce</a> pour le commerce, <a href="https://www.akto.fr" target="_blank" rel="noopener">AKTO</a> pour les services. <a href="https://www.francetravail.fr" target="_blank" rel="noopener">France Travail</a> propose des aides au recrutement et à la formation.</p>
      <h2>Transformation numérique</h2>
      <p><a href="https://www.francenum.gouv.fr" target="_blank" rel="noopener">France Num</a> propose diagnostics numériques gratuits et annuaire d'accompagnateurs. Certaines régions complètent par des chèques numériques de 500 à 5 000 €.</p>
      <GoldSep />
      <h2>Aides sectorielles</h2>
      <p>Bâtiment : <a href="https://www.capeb.fr" target="_blank" rel="noopener">CAPEB</a> et <a href="https://www.ffbatiment.fr" target="_blank" rel="noopener">FFB</a>. Rénovation énergétique : <a href="https://france-renov.gouv.fr" target="_blank" rel="noopener">France Rénov'</a> et <a href="https://www.anah.gouv.fr" target="_blank" rel="noopener">ANAH</a>. Création : <a href="https://www.urssaf.fr/accueil/outils-documentation/acre.html" target="_blank" rel="noopener">ACRE</a> pour l'exonération de cotisations. Le site <a href="https://les-aides.fr" target="_blank" rel="noopener">les-aides.fr</a> permet de rechercher les aides par projet et région.</p>
      <ConversionBanner
        title="Avant d'aller chercher des aides, savoir ce qui vous manque"
        text="Un diagnostic vous dit dans quel ordre traiter vos priorités, et à qui vous adresser pour chaque chantier."
        stat="Iris (599 €) inclut l'orientation vers l'écosystème d'experts."
      />
      <ArticleRelated items={[
        { label: "Pratique", title: "Diagnostic d'entreprise : combien ça coûte ?", href: "/articles/diagnostic-entreprise-combien-ca-coute" },
        { label: "Guide", title: "Micro-entreprise : à quel moment passer de la survie à la stratégie ?", href: "/articles/micro-entreprise-passer-un-cap" },
      ]} />
    </ArticleShell>
  );
}
