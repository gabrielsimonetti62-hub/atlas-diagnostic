import { ArticleShell, ConversionBanner, GoldSep } from "../../components";

export const metadata = {
  title: "Diagnostic d'entreprise : combien ça coûte ? | ATLAS",
  description: "Comparaison des tarifs de diagnostic stratégique : cabinets, consultants indépendants, dispositifs publics et solutions accessibles.",
};

export default function Article3() {
  return (
    <ArticleShell label="Pratique" title="Diagnostic d&apos;entreprise : combien &ccedil;a co&ucirc;te ?" image="/images/texture-doree.jpg" imageAlt="Texture dor&eacute;e et argent&eacute;e">
      <p>La question du co&ucirc;t est souvent la premi&egrave;re &mdash; et celle qui dissuade. Les tarifs des cabinets sont rarement affich&eacute;s, et les montants peuvent &ecirc;tre dissuasifs. Voici un panorama clair.</p>
      <GoldSep />
      <h2>Les grands cabinets de conseil</h2>
      <p>McKinsey, BCG, Deloitte, PwC facturent entre 800 et 3 000 &euro; par jour. Une mission de diagnostic mobilise deux &agrave; quatre consultants pendant deux &agrave; six semaines. Co&ucirc;t : 30 000 &agrave; 150 000 &euro;. Justifi&eacute; pour les ETI en transformation, hors de port&eacute;e pour une TPE &agrave; 300 000 &euro; de CA.</p>
      <h2>Les cabinets de taille interm&eacute;diaire</h2>
      <p>Le taux journalier moyen d&apos;un consultant confirm&eacute; en France se situe autour de 762 &euro; HT. Une mission de deux semaines co&ucirc;te entre 8 000 et 15 000 &euro;. Qualit&eacute; souvent au rendez-vous, mais budget significatif pour une petite structure.</p>
      <h2>Les consultants ind&eacute;pendants</h2>
      <p>Tarifs 30 &agrave; 50 % inf&eacute;rieurs aux cabinets. Un diagnostic compact sur cinq &agrave; dix jours co&ucirc;te entre 3 000 et 8 000 &euro;. Qualit&eacute; variable selon l&apos;exp&eacute;rience. <a href="https://www.malt.fr" target="_blank" rel="noopener">Malt</a> permet de trouver des consultants qualifi&eacute;s.</p>
      <GoldSep />
      <h2>Les dispositifs publics</h2>
      <p><a href="https://www.bpifrance.fr" target="_blank" rel="noopener">Bpifrance</a> subventionne des missions de conseil mais cible les PME &agrave; partir de 5M&euro; de CA. Les <a href="https://www.cci.fr" target="_blank" rel="noopener">CCI</a> et <a href="https://www.cma-france.fr" target="_blank" rel="noopener">CMA</a> proposent des diagnostics gratuits mais au format limit&eacute;. <a href="https://www.francenum.gouv.fr" target="_blank" rel="noopener">France Num</a> accompagne la transformation num&eacute;rique. Les <a href="https://travail-emploi.gouv.fr/ministere/missions-organisation/article/les-opco" target="_blank" rel="noopener">OPCO</a> financent du conseil en RH et organisation.</p>
      <h2>Les solutions en ligne</h2>
      <p>Des auto-diagnostics gratuits existent. Avantage : accessibilit&eacute;. Limite : sans analyse humaine, sans croisement de donn&eacute;es, sans contexte sectoriel, les recommandations restent g&eacute;n&eacute;riques.</p>
      <GoldSep />
      <h2>O&ugrave; se situe ATLAS</h2>
      <p>ATLAS occupe l&apos;espace entre les auto-diagnostics superficiels et les missions inaccessibles. 127 questions, une recherche sectorielle actualis&eacute;e, SWOT, PESTEL, Porter &mdash; les m&ecirc;mes outils que les cabinets, pour une fraction du prix. Herm&egrave;s &agrave; 199 &euro;, Iris &agrave; 599 &euro;, Ath&eacute;na &agrave; 1 199 &euro;. Le choix n&apos;est plus entre &laquo; ne rien faire &raquo; et &laquo; d&eacute;penser 5 000 &euro; &raquo;.</p>
      <ConversionBanner
        title="Un diagnostic de cabinet, au prix d&apos;un ind&eacute;pendant"
        text="Comparez par vous-m&ecirc;me."
        stat="&Agrave; partir de 199 &euro; &middot; 10 domaines analys&eacute;s &middot; R&eacute;sultats d&egrave;s 72h"
      />
    </ArticleShell>
  );
}
