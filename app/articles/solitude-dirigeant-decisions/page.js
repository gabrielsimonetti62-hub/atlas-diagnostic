import { ArticleShell, ConversionBanner, GoldSep } from "../../components";

export const metadata = {
  title: "Seul à la tête de votre entreprise : comment prendre les bonnes décisions ? | ATLAS",
  description: "L'isolement du dirigeant de TPE et PME est un risque stratégique à part entière. Pourquoi il s'installe, pourquoi il s'aggrave, et ce qu'il coûte vraiment.",
};

export default function ArticleSolitude() {
  return (
    <ArticleShell label="Analyse" title="Seul &agrave; la t&ecirc;te de votre entreprise : comment prendre les bonnes d&eacute;cisions ?" image="/images/bureau-epure.jpg" imageAlt="Bureau &eacute;pur&eacute; d&apos;un dirigeant travaillant seul">
      <p>Un dirigeant de grande entreprise ne d&eacute;cide jamais seul. Il a un comit&eacute; de direction, un conseil d&apos;administration, des directeurs financiers, des consultants. Un dirigeant de TPE ou de PME, lui, d&eacute;cide de tout, tout seul : les prix, les embauches, les investissements, les priorit&eacute;s. Les d&eacute;cisions les plus lourdes de sa vie professionnelle se prennent le soir, apr&egrave;s les journ&eacute;es les plus charg&eacute;es, sans personne pour les challenger.</p>
      <GoldSep />
      <h2>Pourquoi l&apos;isolement s&apos;installe sans qu&apos;on le choisisse</h2>
      <p>&Agrave; qui parler, concr&egrave;tement ? Pas aux salari&eacute;s : on ne partage pas ses doutes avec ceux dont on porte l&apos;emploi. Pas &agrave; la famille : elle porte d&eacute;j&agrave; assez du projet, et elle n&apos;a pas les cl&eacute;s techniques. Pas aux confr&egrave;res : ce sont des concurrents. L&apos;expert-comptable regarde le pass&eacute;, pas la strat&eacute;gie. Le banquier n&apos;est pas neutre. R&eacute;sultat : le dirigeant de petite entreprise est statistiquement la personne la plus entour&eacute;e de sa structure &mdash; et la plus seule face &agrave; ses choix.</p>
      <p>Cette solitude n&apos;est pas qu&apos;un inconfort. C&apos;est un risque d&apos;entreprise. Elle d&eacute;grade la qualit&eacute; des d&eacute;cisions, retarde les remises en question, et transforme des probl&egrave;mes corrigeables en crises install&eacute;es.</p>
      <GoldSep />
      <h2>Ce que la solitude fait &agrave; vos d&eacute;cisions</h2>
      <p>Sans regard ext&eacute;rieur, trois m&eacute;canismes s&apos;installent. Le premier est la confirmation : on finit par ne voir que ce qui valide ses intuitions, et les signaux contraires sont minimis&eacute;s. Le deuxi&egrave;me est l&apos;habitude : des dysfonctionnements install&eacute;s depuis des ann&eacute;es deviennent invisibles, simplement parce qu&apos;on vit avec. Le troisi&egrave;me est le report : les d&eacute;cisions inconfortables &mdash; augmenter ses prix, se s&eacute;parer d&apos;un client toxique, restructurer &mdash; sont repouss&eacute;es ind&eacute;finiment, faute de quelqu&apos;un pour confirmer qu&apos;il faut y aller.</p>
      <p>Aucune de ces d&eacute;rives ne se remarque de l&apos;int&eacute;rieur. C&apos;est leur d&eacute;finition m&ecirc;me : elles sont les angles morts du dirigeant isol&eacute;.</p>
      <GoldSep />
      <h2>Rompre l&apos;isolement est une d&eacute;cision strat&eacute;gique</h2>
      <p>Des r&eacute;seaux de pairs existent et font un vrai travail : les clubs d&apos;entrepreneurs des <a href="https://www.cci.fr" target="_blank" rel="noopener">CCI</a>, les associations comme <a href="https://www.reseau-entreprendre.org" target="_blank" rel="noopener">R&eacute;seau Entreprendre</a> ou <a href="https://www.bge.asso.fr" target="_blank" rel="noopener">BGE</a>, les groupements professionnels sectoriels. &Eacute;changer avec d&apos;autres dirigeants soulage et inspire. Mais un &eacute;change entre pairs ne remplace pas un regard structur&eacute; sur votre entreprise pr&eacute;cise : vos chiffres, votre march&eacute;, vos fragilit&eacute;s, vos priorit&eacute;s. C&apos;est ce regard-l&agrave; &mdash; ext&eacute;rieur, m&eacute;thodique, sans complaisance &mdash; qui manque le plus aux dirigeants seuls. Et c&apos;est celui qui change le plus la qualit&eacute; de leurs d&eacute;cisions.</p>
      <ConversionBanner
        title="Ne prenez plus vos d&eacute;cisions strat&eacute;giques seul"
        text="Le diagnostic ATLAS vous apporte ce qui manque au dirigeant isol&eacute; : un regard ext&eacute;rieur complet, chiffr&eacute; et sans complaisance sur votre entreprise."
        stat="&Agrave; partir de 199 &euro; &middot; 10 domaines pass&eacute;s au crible"
      />
    </ArticleShell>
  );
}
