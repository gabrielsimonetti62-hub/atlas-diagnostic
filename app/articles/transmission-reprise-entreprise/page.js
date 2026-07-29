import { ArticleShell, ConversionBanner, GoldSep, ArticleRelated } from "../../components";

export const metadata = {
  title: "Reprendre ou transmettre une entreprise : les questions à se poser avant | ATLAS",
  description: "Des centaines de milliers de TPE et PME vont changer de mains dans les prochaines années. La plupart ne sont pas prêtes, côté cédant comme côté repreneur.",
};

export default function ArticleTransmission() {
  return (
    <ArticleShell label="Guide" title="Reprendre ou transmettre une entreprise : les questions à se poser avant" image="/images/epicerie-duo.jpg" imageAlt="Deux générations de commerçants dans leur épicerie">
      <p>La France fait face à une vague de transmissions sans précédent : avec le départ à la retraite des dirigeants issus du baby-boom, des centaines de milliers de TPE et PME vont chercher un repreneur dans les années qui viennent. Commerces, ateliers, cabinets, entreprises du bâtiment : un pan entier de l'économie va changer de mains. Et une part considérable de ces transmissions va échouer, ou se faire à un prix qui lèse l'une des deux parties.</p>
      <GoldSep />
      <h2>Côté cédant : ce que vous croyez vendre n'est pas ce que l'acheteur voit</h2>
      <p>Un dirigeant qui transmet vend des années de travail, une clientèle, une réputation. Un repreneur, lui, achète des chiffres, des risques et un potentiel. Entre les deux, l'écart est souvent brutal. L'entreprise repose-t-elle sur des processus transmissibles, ou sur la personne du dirigeant ? La clientèle restera-t-elle après le départ du fondateur ? Les marges sont-elles solides ou artificiellement soutenues ? Chaque zone d'ombre se paie en décote au moment de la négociation, quand elle ne fait pas fuir l'acheteur.</p>
      <p>Préparer une transmission ne commence pas six mois avant la vente. Les entreprises qui se vendent bien sont celles qui ont été rendues lisibles, structurées et autonomes des années en amont. Les autres se braderont.</p>
      <GoldSep />
      <h2>Côté repreneur : le coup de cœur est le pire des conseillers</h2>
      <p>Reprendre une entreprise existante est souvent plus sûr que créer, à condition de savoir ce que l'on achète. Or beaucoup de reprises se décident sur des éléments visibles : l'emplacement, le matériel, le chiffre d'affaires affiché. Les vraies questions sont ailleurs. Pourquoi le cédant vend-il vraiment ? Le marché local est-il en croissance ou en déclin ? Quelle part de la clientèle est attachée à la personne du dirigeant sortant ? Quels investissements cachés attendent le repreneur dans les trois ans ?</p>
      <p>Des dispositifs accompagnent les repreneurs : les <a href="https://www.cci.fr" target="_blank" rel="noopener">CCI</a> et <a href="https://www.cma-france.fr" target="_blank" rel="noopener">CMA</a> tiennent des bourses d'opportunités, <a href="https://www.reseau-entreprendre.org" target="_blank" rel="noopener">Réseau Entreprendre</a> et <a href="https://www.initiative-france.fr" target="_blank" rel="noopener">Initiative France</a> proposent prêts d'honneur et mentorat, et <a href="https://www.bpifrance.fr" target="_blank" rel="noopener">Bpifrance</a> facilite le financement de la reprise. Mais le financement n'est pas le problème principal : le problème, c'est de savoir si l'entreprise vaut ce qu'on s'apprête à payer, et ce qu'il faudra corriger dès la première année.</p>
      <GoldSep />
      <h2>Dans les deux cas, tout commence par un état des lieux lucide</h2>
      <p>Transmettre sans diagnostic, c'est vendre à l'aveugle. Reprendre sans diagnostic, c'est acheter à l'aveugle. Dans les deux cas, la même question se pose : quelle est la réalité de cette entreprise, au-delà de la perception de celui qui la dirige ? C'est exactement l'écart que mesure un diagnostic stratégique complet, et c'est cet écart qui fait la différence entre une transmission réussie et un échec coûteux.</p>
      <ConversionBanner
        title="Vendre ou reprendre en connaissance de cause"
        text="Que vous soyez cédant ou repreneur, un diagnostic ATLAS révèle ce qu'aucun bilan comptable ne montre."
        stat="24 à 40 pages qui donnent une vraie valeur à votre entreprise."
      />
      <ArticleRelated items={[
        { label: "Analyse", title: "Artisans, commerçants, restaurateurs : le conseil stratégique n'est pas réservé aux grands groupes", href: "/articles/conseil-strategique-artisans-commercants" },
        { label: "Guide", title: "Micro-entreprise : à quel moment passer de la survie à la stratégie ?", href: "/articles/micro-entreprise-passer-un-cap" },
      ]} />
    </ArticleShell>
  );
}
