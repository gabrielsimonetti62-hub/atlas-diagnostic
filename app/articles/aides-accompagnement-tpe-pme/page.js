import { ArticleShell, ConversionBanner, GoldSep } from "../../components";

export const metadata = {
  title: "Aides et accompagnement pour les TPE et PME | ATLAS",
  description: "Panorama des aides publiques, dispositifs d'accompagnement et ressources pour les dirigeants de TPE et PME en France.",
};

export default function Article4() {
  return (
    <ArticleShell label="Ressources" title="Aides et accompagnement pour les TPE et PME" image="/images/reunion-cafe.jpg" imageAlt="R&eacute;union d&apos;accompagnement entre entrepreneurs">
      <p>Le paysage des aides aux entreprises en France est riche mais complexe. Un dirigeant peut facilement passer &agrave; c&ocirc;t&eacute; d&apos;opportunit&eacute;s qui lui sont destin&eacute;es.</p>
      <GoldSep />
      <h2>Financement et tr&eacute;sorerie</h2>
      <p><a href="https://www.bpifrance.fr" target="_blank" rel="noopener">Bpifrance</a> propose pr&ecirc;ts &agrave; taux pr&eacute;f&eacute;rentiel, garanties de pr&ecirc;t bancaire et aides &agrave; l&apos;innovation. Le Pr&ecirc;t TPE vise sp&eacute;cifiquement les moins de 50 salari&eacute;s. <a href="https://www.france-active.org" target="_blank" rel="noopener">France Active</a> accompagne via des garanties d&apos;emprunt et pr&ecirc;ts solidaires. L&apos;<a href="https://www.adie.org" target="_blank" rel="noopener">Adie</a> propose des micropr&ecirc;ts jusqu&apos;&agrave; 12 000 &euro;.</p>
      <h2>Conseil et accompagnement</h2>
      <p>Les <a href="https://www.cci.fr" target="_blank" rel="noopener">CCI</a> et <a href="https://www.cma-france.fr" target="_blank" rel="noopener">CMA</a> proposent rendez-vous individuels, ateliers et programmes d&apos;accompagnement. <a href="https://www.reseau-entreprendre.org" target="_blank" rel="noopener">R&eacute;seau Entreprendre</a>, <a href="https://www.initiative-france.fr" target="_blank" rel="noopener">Initiative France</a> et <a href="https://www.bge.asso.fr" target="_blank" rel="noopener">BGE</a> offrent mentorat et pr&ecirc;ts d&apos;honneur.</p>
      <GoldSep />
      <h2>Formation</h2>
      <p>Les <a href="https://travail-emploi.gouv.fr/ministere/missions-organisation/article/les-opco" target="_blank" rel="noopener">OPCO</a> financent la formation. Chaque secteur a le sien : <a href="https://www.constructys.fr" target="_blank" rel="noopener">Constructys</a> pour le b&acirc;timent, <a href="https://www.lopcommerce.com" target="_blank" rel="noopener">L&apos;Opcommerce</a> pour le commerce, <a href="https://www.akto.fr" target="_blank" rel="noopener">AKTO</a> pour les services. <a href="https://www.francetravail.fr" target="_blank" rel="noopener">France Travail</a> propose des aides au recrutement et &agrave; la formation.</p>
      <h2>Transformation num&eacute;rique</h2>
      <p><a href="https://www.francenum.gouv.fr" target="_blank" rel="noopener">France Num</a> propose diagnostics num&eacute;riques gratuits et annuaire d&apos;accompagnateurs. Certaines r&eacute;gions compl&egrave;tent par des ch&egrave;ques num&eacute;riques de 500 &agrave; 5 000 &euro;.</p>
      <GoldSep />
      <h2>Aides sectorielles</h2>
      <p>B&acirc;timent : <a href="https://www.capeb.fr" target="_blank" rel="noopener">CAPEB</a> et <a href="https://www.ffbatiment.fr" target="_blank" rel="noopener">FFB</a>. R&eacute;novation &eacute;nerg&eacute;tique : <a href="https://france-renov.gouv.fr" target="_blank" rel="noopener">France R&eacute;nov&apos;</a> et <a href="https://www.anah.gouv.fr" target="_blank" rel="noopener">ANAH</a>. Cr&eacute;ation : <a href="https://www.urssaf.fr/accueil/outils-documentation/acre.html" target="_blank" rel="noopener">ACRE</a> pour l&apos;exon&eacute;ration de cotisations. Le site <a href="https://les-aides.fr" target="_blank" rel="noopener">les-aides.fr</a> permet de rechercher les aides par projet et r&eacute;gion.</p>
      <ConversionBanner
        title="Identifiez les aides qui vous concernent"
        text="Le diagnostic ATLAS int&egrave;gre une identification des dispositifs pertinents dans son plan d&apos;action personnalis&eacute;."
        stat="&Agrave; partir de 199 &euro; &middot; Plan d&apos;action avec ressources concr&egrave;tes"
      />
    </ArticleShell>
  );
}
