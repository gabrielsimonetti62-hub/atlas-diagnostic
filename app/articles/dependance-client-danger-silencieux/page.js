import { ArticleShell, ConversionBanner, GoldSep, ArticleRelated } from "../../components";

export const metadata = {
  title: "Dépendre d'un seul client : le danger silencieux qui menace les TPE et PME | ATLAS",
  description: "Sous-traitants, prestataires, indépendants : pourquoi la concentration client est la fragilité la plus sous-estimée des petites entreprises françaises.",
};

export default function ArticleDependanceClient() {
  return (
    <ArticleShell label="Analyse" title="Dépendre d'un seul client : le danger silencieux qui menace les TPE et PME" image="/images/imprimeur.jpg" imageAlt="Imprimeur contrôlant une production dans son atelier">
      <p>C'est une histoire que connaissent tous les experts-comptables. Un imprimeur qui travaille depuis quinze ans pour le même donneur d'ordre. Un sous-traitant du bâtiment dont un promoteur représente les deux tiers de l'activité. Une consultante dont un grand compte remplit l'agenda depuis trois ans. Tout va bien, jusqu'au courriel qui annonce un changement de prestataire, une réorganisation, une baisse de budget. En quelques semaines, une entreprise saine se retrouve en péril.</p>
      <GoldSep />
      <h2>Pourquoi ce risque est invisible au quotidien</h2>
      <p>La dépendance client ne fait pas mal tant qu'elle dure. Au contraire : elle rassure. Un gros client fidèle, c'est du chiffre d'affaires récurrent, une relation de confiance, moins de prospection. Beaucoup de dirigeants de TPE et PME la vivent comme une force. C'est précisément ce qui la rend dangereuse : elle s'installe avec le succès, se renforce avec le temps, et ne révèle sa vraie nature que le jour o&ugrave; il est trop tard pour réagir sereinement.</p>
      <p>À partir de quel seuil faut-il s'inquiéter ? Quand un client dépasse 20 % du chiffre d'affaires, la vigilance s'impose. Au-delà de 40 %, l'entreprise n'est plus vraiment indépendante : elle est devenue, de fait, un service externalisé de son client, sans la sécurité du salariat ni la liberté de l'entrepreneur.</p>
      <GoldSep />
      <h2>Les effets en cascade que personne n'anticipe</h2>
      <p>La perte du client principal n'est que la partie visible. La dépendance produit des dégâts bien avant : elle affaiblit votre pouvoir de négociation, ce qui érode vos marges année après année ; elle capte vos meilleures ressources, ce qui étouffe la prospection ; elle façonne votre organisation autour des exigences d'un seul acteur, ce qui rend votre offre difficile à vendre ailleurs. Le jour du choc, l'entreprise découvre qu'elle a non seulement perdu son client, mais aussi sa capacité à en conquérir d'autres.</p>
      <p>Les dispositifs comme la <a href="https://www.mediateur-des-entreprises.fr" target="_blank" rel="noopener">Médiation des entreprises</a> peuvent aider en cas de litige avec un donneur d'ordre, et la <a href="https://www.bpifrance.fr" target="_blank" rel="noopener">Bpifrance</a> propose des solutions de trésorerie pour amortir un choc. Mais aucun dispositif ne remplace ce qui manque vraiment : avoir vu le risque avant, l'avoir mesuré, et avoir engagé la diversification quand il était encore temps.</p>
      <GoldSep />
      <h2>La question que vous devez vous poser aujourd'hui</h2>
      <p>Si votre plus gros client partait demain matin, combien de mois votre entreprise tiendrait-elle ? Si vous ne connaissez pas la réponse précise, en mois, en euros, en actions à engager, vous ne gérez pas ce risque : vous le subissez. Et vous n'êtes pas seul : c'est le cas de la grande majorité des dirigeants de petites entreprises. La différence se fait entre ceux qui mesurent leur exposition à temps et ceux qui la découvrent dans l'urgence.</p>
      <ConversionBanner
        title="Mesurer votre dépendance avant qu'elle ne vous mesure"
        text="Un diagnostic ATLAS quantifie votre concentration client et vous donne le plan pour la réduire méthodiquement."
        stat="Trois offres, un même engagement : voir clair."
      />
      <ArticleRelated items={[
        { label: "Analyse", title: "Charges, trésorerie, impayés : pourquoi des entreprises rentables finissent par fermer", href: "/articles/tresorerie-entreprises-rentables" },
        { label: "Analyse", title: "Croissance rapide : le piège qui tue autant d'entreprises que la crise", href: "/articles/croissance-rapide-piege" },
      ]} />
    </ArticleShell>
  );
}
