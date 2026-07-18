import { ArticleShell, ConversionBanner, GoldSep } from "../../components";

export const metadata = {
  title: "Charges, trésorerie, impayés : pourquoi des entreprises rentables finissent par fermer | ATLAS",
  description: "Le paradoxe qui frappe restaurants, commerces et artisans du bâtiment : un carnet plein, un compte de résultat positif — et une trésorerie qui étrangle.",
};

export default function ArticleTresorerie() {
  return (
    <ArticleShell label="Analyse" title="Charges, tr&eacute;sorerie, impay&eacute;s : pourquoi des entreprises rentables finissent par fermer" image="/images/cheffe-cuisine.jpg" imageAlt="Cheffe concentr&eacute;e dans sa cuisine professionnelle">
      <p>C&apos;est l&apos;un des paradoxes les plus m&eacute;connus de l&apos;entrepreneuriat : on ne ferme pas parce qu&apos;on perd de l&apos;argent, on ferme parce qu&apos;on n&apos;en a plus. Chaque ann&eacute;e, des restaurants qui affichent complet, des artisans dont le carnet de commandes d&eacute;borde et des commerces rentables sur le papier d&eacute;posent le bilan. Leur compte de r&eacute;sultat &eacute;tait positif. Leur compte en banque, lui, &eacute;tait vide au mauvais moment.</p>
      <GoldSep />
      <h2>La rentabilit&eacute; est une opinion, la tr&eacute;sorerie est un fait</h2>
      <p>Un restaurant encaisse chaque soir mais paie ses fournisseurs, son loyer, ses salaires et ses cotisations &agrave; dates fixes &mdash; que la salle soit pleine ou vide. Un artisan du b&acirc;timent avance les mat&eacute;riaux et la main-d&apos;&oelig;uvre des semaines avant d&apos;&ecirc;tre pay&eacute;, quand il l&apos;est dans les d&eacute;lais. Un commer&ccedil;ant immobilise sa tr&eacute;sorerie dans son stock des mois avant de le vendre. Dans les trois cas, l&apos;entreprise peut &ecirc;tre rentable sur l&apos;ann&eacute;e et asphyxi&eacute;e un mardi de novembre.</p>
      <p>Les retards de paiement aggravent tout : en France, ils restent l&apos;une des premi&egrave;res causes de d&eacute;faillance des PME. Chaque facture r&eacute;gl&eacute;e en retard par un client, c&apos;est votre entreprise qui fait cr&eacute;dit &mdash; souvent &agrave; plus gros qu&apos;elle.</p>
      <GoldSep />
      <h2>Les signaux qui annoncent l&apos;&eacute;tranglement</h2>
      <p>Ils sont toujours les m&ecirc;mes, et toujours minimis&eacute;s. Vous surveillez votre solde bancaire plusieurs fois par semaine. Vous d&eacute;calez le paiement d&apos;un fournisseur pour honorer une &eacute;ch&eacute;ance <a href="https://www.urssaf.fr" target="_blank" rel="noopener">URSSAF</a>. Vous h&eacute;sitez &agrave; prendre une commande faute de pouvoir avancer les co&ucirc;ts. Vous comptez sur un r&egrave;glement client &laquo; qui ne devrait plus tarder &raquo; pour passer le mois. Chacun de ces r&eacute;flexes semble anodin. Ensemble, ils signifient que votre entreprise navigue sans r&eacute;serve &mdash; et qu&apos;un seul impr&eacute;vu suffit &agrave; tout faire basculer.</p>
      <p>Le plus dangereux ? La plupart des dirigeants concern&eacute;s se pensent simplement &laquo; un peu justes en ce moment &raquo;. L&apos;&eacute;cart entre la perception de la situation et sa r&eacute;alit&eacute; chiffr&eacute;e est rarement aussi grand que sur les questions de tr&eacute;sorerie.</p>
      <GoldSep />
      <h2>Des amortisseurs existent, mais ils ne soignent pas la cause</h2>
      <p>En cas de tension aigu&euml;, des recours existent : la <a href="https://www.mediateur-des-entreprises.fr" target="_blank" rel="noopener">M&eacute;diation des entreprises</a> pour les litiges de paiement, les d&eacute;lais n&eacute;goci&eacute;s avec l&apos;<a href="https://www.urssaf.fr" target="_blank" rel="noopener">URSSAF</a>, les solutions de financement court terme de <a href="https://www.bpifrance.fr" target="_blank" rel="noopener">Bpifrance</a>. Ces dispositifs font gagner du temps. Ils ne r&eacute;pondent pas &agrave; la vraie question : pourquoi votre entreprise, rentable, se retrouve-t-elle r&eacute;guli&egrave;rement &agrave; court de liquidit&eacute;s ? Structure de co&ucirc;ts, conditions de r&egrave;glement, saisonnalit&eacute; mal anticip&eacute;e, prix mal calibr&eacute;s, croissance mal financ&eacute;e : les causes possibles sont nombreuses, souvent combin&eacute;es &mdash; et invisibles sans analyse compl&egrave;te.</p>
      <ConversionBanner
        title="Ne d&eacute;couvrez pas votre fragilit&eacute; financi&egrave;re le jour o&ugrave; elle frappe"
        text="Le diagnostic ATLAS analyse vos finances, votre solvabilit&eacute; et vos risques, et mesure l&apos;&eacute;cart entre votre perception et la r&eacute;alit&eacute; de vos chiffres."
        stat="&Agrave; partir de 199 &euro; &middot; Domaine Finances et solvabilit&eacute; not&eacute; sur 10"
      />
    </ArticleShell>
  );
}
