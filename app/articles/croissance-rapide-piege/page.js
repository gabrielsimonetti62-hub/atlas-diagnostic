import { ArticleShell, ConversionBanner, GoldSep } from "../../components";

export const metadata = {
  title: "Croissance rapide : le piège qui tue autant d'entreprises que la crise | ATLAS",
  description: "Carnet de commandes plein, embauches, nouveaux marchés : pourquoi la croissance mal maîtrisée est l'une des premières causes de défaillance des TPE et PME.",
};

export default function ArticleCroissance() {
  return (
    <ArticleShell label="Analyse" title="Croissance rapide : le pi&egrave;ge qui tue autant d&apos;entreprises que la crise" image="/images/chantier-ouvriers.jpg" imageAlt="Ouvriers mobilis&eacute;s sur un chantier en pleine activit&eacute;">
      <p>Dans l&apos;imaginaire collectif, une entreprise meurt parce que les affaires vont mal. La r&eacute;alit&eacute; est plus d&eacute;routante : chaque ann&eacute;e, des entreprises en pleine croissance d&eacute;posent le bilan. Une entreprise du b&acirc;timent qui d&eacute;croche un chantier deux fois plus gros que d&apos;habitude. Un traiteur qui signe avec une grande enseigne. Un fabricant dont un produit d&eacute;colle. Six mois plus tard, l&apos;euphorie a laiss&eacute; place &agrave; la crise. Ce ph&eacute;nom&egrave;ne a un nom chez les analystes : la croissance non ma&icirc;tris&eacute;e &mdash; et elle figure parmi les premi&egrave;res causes de d&eacute;faillance des TPE et PME.</p>
      <GoldSep />
      <h2>Grandir co&ucirc;te de l&apos;argent avant d&apos;en rapporter</h2>
      <p>C&apos;est la m&eacute;canique que d&eacute;couvrent trop tard les dirigeants pi&eacute;g&eacute;s : chaque commande suppl&eacute;mentaire exige d&apos;avancer des achats, de la main-d&apos;&oelig;uvre, du stock, parfois du mat&eacute;riel &mdash; des semaines ou des mois avant d&apos;encaisser. Plus la croissance est rapide, plus le d&eacute;calage se creuse. L&apos;entreprise vend plus que jamais et n&apos;a jamais eu aussi peu de tr&eacute;sorerie. Un retard de paiement client, un impr&eacute;vu sur un chantier, et l&apos;&eacute;difice vacille.</p>
      <p>Le paradoxe est cruel : c&apos;est pr&eacute;cis&eacute;ment parce que tout va bien commercialement que personne ne voit venir le danger. Les voyants que regarde le dirigeant &mdash; commandes, chiffre d&apos;affaires, notori&eacute;t&eacute; &mdash; sont tous au vert. Ceux qui clignotent au rouge &mdash; besoin en fonds de roulement, marges r&eacute;elles, capacit&eacute; de production &mdash; sont ceux qu&apos;il n&apos;a pas le temps de suivre.</p>
      <GoldSep />
      <h2>La croissance casse ce qui faisait tenir l&apos;entreprise</h2>
      <p>Au-del&agrave; des chiffres, grandir vite met l&apos;organisation sous tension. Les processus informels qui suffisaient &agrave; cinq personnes s&apos;effondrent &agrave; douze. La qualit&eacute;, qui reposait sur l&apos;&oelig;il du dirigeant, se d&eacute;grade d&egrave;s qu&apos;il ne peut plus tout voir. Les recrutements faits dans l&apos;urgence fragilisent l&apos;&eacute;quipe historique. Les premiers clients, moins choy&eacute;s, commencent &agrave; regarder ailleurs. L&apos;entreprise grossit &mdash; mais ses fondations, elles, n&apos;ont pas &eacute;t&eacute; renforc&eacute;es pour porter le poids suppl&eacute;mentaire.</p>
      <p>Des soutiens existent pour financer la croissance : <a href="https://www.bpifrance.fr" target="_blank" rel="noopener">Bpifrance</a> propose des solutions d&eacute;di&eacute;es au financement du cycle d&apos;exploitation, et les <a href="https://www.cci.fr" target="_blank" rel="noopener">CCI</a> accompagnent les entreprises en d&eacute;veloppement. Mais financer une croissance dont on ne conna&icirc;t pas les points de rupture, c&apos;est appuyer sur l&apos;acc&eacute;l&eacute;rateur d&apos;un v&eacute;hicule dont on n&apos;a pas v&eacute;rifi&eacute; les freins.</p>
      <GoldSep />
      <h2>La question &agrave; se poser avant d&apos;acc&eacute;l&eacute;rer</h2>
      <p>Vos fondations tiendront-elles le double de votre activit&eacute; actuelle ? Votre tr&eacute;sorerie, vos processus, votre &eacute;quipe, votre organisation : chacun de ces piliers a un point de rupture, et vous ne le conna&icirc;trez qu&apos;en le mesurant &mdash; ou en le percutant. Les dirigeants qui r&eacute;ussissent leur croissance ne sont pas ceux qui vont le plus vite. Ce sont ceux qui savent exactement o&ugrave; leur entreprise est solide, o&ugrave; elle est fragile, et dans quel ordre renforcer avant d&apos;acc&eacute;l&eacute;rer.</p>
      <ConversionBanner
        title="Vos fondations tiendront-elles votre croissance ?"
        text="Le diagnostic ATLAS &eacute;value la solidit&eacute; de vos 10 domaines strat&eacute;giques et identifie vos points de rupture avant qu&apos;ils ne c&egrave;dent."
        stat="&Agrave; partir de 199 &euro; &middot; Scalabilit&eacute; et op&eacute;rations analys&eacute;es"
      />
    </ArticleShell>
  );
}
