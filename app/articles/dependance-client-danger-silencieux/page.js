import { ArticleShell, ConversionBanner, GoldSep } from "../../components";

export const metadata = {
  title: "Dépendre d'un seul client : le danger silencieux qui menace les TPE et PME | ATLAS",
  description: "Sous-traitants, prestataires, indépendants : pourquoi la concentration client est la fragilité la plus sous-estimée des petites entreprises françaises.",
};

export default function ArticleDependanceClient() {
  return (
    <ArticleShell label="Analyse" title="D&eacute;pendre d&apos;un seul client : le danger silencieux qui menace les TPE et PME" image="/images/imprimeur.jpg" imageAlt="Imprimeur contr&ocirc;lant une production dans son atelier">
      <p>C&apos;est une histoire que connaissent tous les experts-comptables. Un imprimeur qui travaille depuis quinze ans pour le m&ecirc;me donneur d&apos;ordre. Un sous-traitant du b&acirc;timent dont un promoteur repr&eacute;sente les deux tiers de l&apos;activit&eacute;. Une consultante dont un grand compte remplit l&apos;agenda depuis trois ans. Tout va bien &mdash; jusqu&apos;au courriel qui annonce un changement de prestataire, une r&eacute;organisation, une baisse de budget. En quelques semaines, une entreprise saine se retrouve en p&eacute;ril.</p>
      <GoldSep />
      <h2>Pourquoi ce risque est invisible au quotidien</h2>
      <p>La d&eacute;pendance client ne fait pas mal tant qu&apos;elle dure. Au contraire : elle rassure. Un gros client fid&egrave;le, c&apos;est du chiffre d&apos;affaires r&eacute;current, une relation de confiance, moins de prospection. Beaucoup de dirigeants de TPE et PME la vivent comme une force. C&apos;est pr&eacute;cis&eacute;ment ce qui la rend dangereuse : elle s&apos;installe avec le succ&egrave;s, se renforce avec le temps, et ne r&eacute;v&egrave;le sa vraie nature que le jour o&ugrave; il est trop tard pour r&eacute;agir sereinement.</p>
      <p>&Agrave; partir de quel seuil faut-il s&apos;inqui&eacute;ter ? Quand un client d&eacute;passe 20 % du chiffre d&apos;affaires, la vigilance s&apos;impose. Au-del&agrave; de 40 %, l&apos;entreprise n&apos;est plus vraiment ind&eacute;pendante : elle est devenue, de fait, un service externalis&eacute; de son client &mdash; sans la s&eacute;curit&eacute; du salariat ni la libert&eacute; de l&apos;entrepreneur.</p>
      <GoldSep />
      <h2>Les effets en cascade que personne n&apos;anticipe</h2>
      <p>La perte du client principal n&apos;est que la partie visible. La d&eacute;pendance produit des d&eacute;g&acirc;ts bien avant : elle affaiblit votre pouvoir de n&eacute;gociation, ce qui &eacute;rode vos marges ann&eacute;e apr&egrave;s ann&eacute;e ; elle capte vos meilleures ressources, ce qui &eacute;touffe la prospection ; elle fa&ccedil;onne votre organisation autour des exigences d&apos;un seul acteur, ce qui rend votre offre difficile &agrave; vendre ailleurs. Le jour du choc, l&apos;entreprise d&eacute;couvre qu&apos;elle a non seulement perdu son client, mais aussi sa capacit&eacute; &agrave; en conqu&eacute;rir d&apos;autres.</p>
      <p>Les dispositifs comme la <a href="https://www.mediateur-des-entreprises.fr" target="_blank" rel="noopener">M&eacute;diation des entreprises</a> peuvent aider en cas de litige avec un donneur d&apos;ordre, et la <a href="https://www.bpifrance.fr" target="_blank" rel="noopener">Bpifrance</a> propose des solutions de tr&eacute;sorerie pour amortir un choc. Mais aucun dispositif ne remplace ce qui manque vraiment : avoir vu le risque avant, l&apos;avoir mesur&eacute;, et avoir engag&eacute; la diversification quand il &eacute;tait encore temps.</p>
      <GoldSep />
      <h2>La question que vous devez vous poser aujourd&apos;hui</h2>
      <p>Si votre plus gros client partait demain matin, combien de mois votre entreprise tiendrait-elle ? Si vous ne connaissez pas la r&eacute;ponse pr&eacute;cise &mdash; en mois, en euros, en actions &agrave; engager &mdash; vous ne g&eacute;rez pas ce risque : vous le subissez. Et vous n&apos;&ecirc;tes pas seul : c&apos;est le cas de la grande majorit&eacute; des dirigeants de petites entreprises. La diff&eacute;rence se fait entre ceux qui mesurent leur exposition &agrave; temps et ceux qui la d&eacute;couvrent dans l&apos;urgence.</p>
      <ConversionBanner
        title="Mesurez votre d&eacute;pendance avant qu&apos;elle ne d&eacute;cide pour vous"
        text="Le diagnostic ATLAS quantifie votre concentration client, &eacute;value votre r&eacute;sistance &agrave; un choc et priorise les actions pour diversifier."
        stat="&Agrave; partir de 199 &euro; &middot; Signal d&eacute;pendance client analys&eacute; en profondeur"
      />
    </ArticleShell>
  );
}
