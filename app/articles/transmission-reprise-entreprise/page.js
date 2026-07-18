import { ArticleShell, ConversionBanner, GoldSep } from "../../components";

export const metadata = {
  title: "Reprendre ou transmettre une entreprise : les questions à se poser avant | ATLAS",
  description: "Des centaines de milliers de TPE et PME vont changer de mains dans les prochaines années. La plupart ne sont pas prêtes — côté cédant comme côté repreneur.",
};

export default function ArticleTransmission() {
  return (
    <ArticleShell label="Guide" title="Reprendre ou transmettre une entreprise : les questions &agrave; se poser avant" image="/images/epicerie-duo.jpg" imageAlt="Deux g&eacute;n&eacute;rations de commer&ccedil;ants dans leur &eacute;picerie">
      <p>La France fait face &agrave; une vague de transmissions sans pr&eacute;c&eacute;dent : avec le d&eacute;part &agrave; la retraite des dirigeants issus du baby-boom, des centaines de milliers de TPE et PME vont chercher un repreneur dans les ann&eacute;es qui viennent. Commerces, ateliers, cabinets, entreprises du b&acirc;timent : un pan entier de l&apos;&eacute;conomie va changer de mains. Et une part consid&eacute;rable de ces transmissions va &eacute;chouer &mdash; ou se faire &agrave; un prix qui l&egrave;se l&apos;une des deux parties.</p>
      <GoldSep />
      <h2>C&ocirc;t&eacute; c&eacute;dant : ce que vous croyez vendre n&apos;est pas ce que l&apos;acheteur voit</h2>
      <p>Un dirigeant qui transmet vend des ann&eacute;es de travail, une client&egrave;le, une r&eacute;putation. Un repreneur, lui, ach&egrave;te des chiffres, des risques et un potentiel. Entre les deux, l&apos;&eacute;cart est souvent brutal. L&apos;entreprise repose-t-elle sur des processus transmissibles, ou sur la personne du dirigeant ? La client&egrave;le restera-t-elle apr&egrave;s le d&eacute;part du fondateur ? Les marges sont-elles solides ou artificiellement soutenues ? Chaque zone d&apos;ombre se paie en d&eacute;cote au moment de la n&eacute;gociation &mdash; quand elle ne fait pas fuir l&apos;acheteur.</p>
      <p>Pr&eacute;parer une transmission ne commence pas six mois avant la vente. Les entreprises qui se vendent bien sont celles qui ont &eacute;t&eacute; rendues lisibles, structur&eacute;es et autonomes des ann&eacute;es en amont. Les autres se braderont.</p>
      <GoldSep />
      <h2>C&ocirc;t&eacute; repreneur : le coup de c&oelig;ur est le pire des conseillers</h2>
      <p>Reprendre une entreprise existante est souvent plus s&ucirc;r que cr&eacute;er &mdash; &agrave; condition de savoir ce que l&apos;on ach&egrave;te. Or beaucoup de reprises se d&eacute;cident sur des &eacute;l&eacute;ments visibles : l&apos;emplacement, le mat&eacute;riel, le chiffre d&apos;affaires affich&eacute;. Les vraies questions sont ailleurs. Pourquoi le c&eacute;dant vend-il vraiment ? Le march&eacute; local est-il en croissance ou en d&eacute;clin ? Quelle part de la client&egrave;le est attach&eacute;e &agrave; la personne du dirigeant sortant ? Quels investissements cach&eacute;s attendent le repreneur dans les trois ans ?</p>
      <p>Des dispositifs accompagnent les repreneurs : les <a href="https://www.cci.fr" target="_blank" rel="noopener">CCI</a> et <a href="https://www.cma-france.fr" target="_blank" rel="noopener">CMA</a> tiennent des bourses d&apos;opportunit&eacute;s, <a href="https://www.reseau-entreprendre.org" target="_blank" rel="noopener">R&eacute;seau Entreprendre</a> et <a href="https://www.initiative-france.fr" target="_blank" rel="noopener">Initiative France</a> proposent pr&ecirc;ts d&apos;honneur et mentorat, et <a href="https://www.bpifrance.fr" target="_blank" rel="noopener">Bpifrance</a> facilite le financement de la reprise. Mais le financement n&apos;est pas le probl&egrave;me principal : le probl&egrave;me, c&apos;est de savoir si l&apos;entreprise vaut ce qu&apos;on s&apos;appr&ecirc;te &agrave; payer &mdash; et ce qu&apos;il faudra corriger d&egrave;s la premi&egrave;re ann&eacute;e.</p>
      <GoldSep />
      <h2>Dans les deux cas, tout commence par un &eacute;tat des lieux lucide</h2>
      <p>Transmettre sans diagnostic, c&apos;est vendre &agrave; l&apos;aveugle. Reprendre sans diagnostic, c&apos;est acheter &agrave; l&apos;aveugle. Dans les deux cas, la m&ecirc;me question se pose : quelle est la r&eacute;alit&eacute; de cette entreprise, au-del&agrave; de la perception de celui qui la dirige ? C&apos;est exactement l&apos;&eacute;cart que mesure un diagnostic strat&eacute;gique complet &mdash; et c&apos;est cet &eacute;cart qui fait la diff&eacute;rence entre une transmission r&eacute;ussie et un &eacute;chec co&ucirc;teux.</p>
      <ConversionBanner
        title="Transmission ou reprise : sachez ce que vaut vraiment l&apos;entreprise"
        text="Le diagnostic ATLAS dresse un &eacute;tat des lieux complet sur 10 domaines : forces, fragilit&eacute;s, risques et potentiel r&eacute;el."
        stat="&Agrave; partir de 199 &euro; &middot; Un regard ext&eacute;rieur avant de signer"
      />
    </ArticleShell>
  );
}
