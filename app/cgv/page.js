import { Nav, Footer, GoldSep } from "../components";

export const metadata = {
  title: "Conditions générales de vente — ATLAS",
  description: "Conditions générales de vente des prestations de diagnostic stratégique ATLAS, destinées aux professionnels.",
};

function Para({ children }) {
  return (
    <div className="apropos-para">
      <p>{children}</p>
    </div>
  );
}

export default function CGV() {
  return (
    <>
      <Nav />
      <div className="container">
        <section className="page-header">
          <div className="section-label">Conditions g&eacute;n&eacute;rales</div>
          <h1>Conditions g&eacute;n&eacute;rales de vente</h1>
          <p className="section-intro">Les pr&eacute;sentes conditions encadrent la fourniture des prestations de diagnostic strat&eacute;gique ATLAS.</p>
        </section>
      </div>
      <div className="container"><GoldSep /></div>
      <div className="container">
        <section className="section apropos-body" style={{ paddingTop: "40px" }}>

          <h2>Article 1 &mdash; Objet et champ d&apos;application</h2>
          <Para>Les pr&eacute;sentes conditions g&eacute;n&eacute;rales de vente (ci-apr&egrave;s &laquo;&nbsp;CGV&nbsp;&raquo;) r&eacute;gissent les relations contractuelles entre Gabriel Simonetti, entrepreneur individuel exer&ccedil;ant sous le nom commercial &laquo;&nbsp;ATLAS&nbsp;&raquo; (ci-apr&egrave;s &laquo;&nbsp;le Prestataire&nbsp;&raquo;), et tout professionnel souscrivant &agrave; l&apos;une de ses prestations (ci-apr&egrave;s &laquo;&nbsp;le Client&nbsp;&raquo;).</Para>
          <Para>Les prestations ATLAS sont exclusivement destin&eacute;es &agrave; des professionnels &mdash; dirigeants d&apos;entreprise, ind&eacute;pendants et personnes morales &mdash; agissant pour les besoins de leur activit&eacute; professionnelle. Elles ne s&apos;adressent pas aux consommateurs au sens du Code de la consommation. En souscrivant, le Client reconna&icirc;t agir &agrave; titre professionnel.</Para>
          <Para>Toute souscription implique l&apos;acceptation pleine et enti&egrave;re des pr&eacute;sentes CGV, qui pr&eacute;valent sur toutes conditions d&apos;achat du Client, sauf accord &eacute;crit contraire du Prestataire.</Para>

          <h2>Article 2 &mdash; Prestations propos&eacute;es</h2>
          <Para>Le Prestataire propose des prestations de diagnostic strat&eacute;gique &agrave; destination des TPE, PME et ind&eacute;pendants, d&eacute;clin&eacute;es en plusieurs formules&nbsp;: <strong>Herm&egrave;s</strong>, <strong>Iris</strong> et <strong>Ath&eacute;na</strong>. Le contenu d&eacute;taill&eacute; de chaque formule est pr&eacute;sent&eacute; sur les pages d&eacute;di&eacute;es du site.</Para>
          <Para>Chaque prestation repose sur l&apos;analyse des r&eacute;ponses fournies par le Client &agrave; un questionnaire, enrichie d&apos;une recherche sectorielle et d&apos;un regard humain, et donne lieu &agrave; la remise d&apos;un rapport de diagnostic. Le Prestataire peut faire &eacute;voluer le contenu ou les caract&eacute;ristiques de ses prestations &agrave; tout moment&nbsp;; les conditions applicables sont celles en vigueur au jour de la souscription.</Para>
          <Para>&Agrave; titre accessoire, le Prestataire peut proposer des prestations de cr&eacute;ation de site internet, dont les modalit&eacute;s sont d&eacute;finies au cas par cas.</Para>

          <h2>Article 3 &mdash; Prix</h2>
          <Para>Les prix des prestations sont indiqu&eacute;s en euros sur le site&nbsp;: Herm&egrave;s &agrave; 249&nbsp;&euro;, Iris &agrave; 599&nbsp;&euro; et Ath&eacute;na &agrave; 1&nbsp;299&nbsp;&euro;. Le Prestataire b&eacute;n&eacute;ficiant de la franchise en base de TVA, ces montants ne sont pas major&eacute;s de TVA&nbsp;: la mention &laquo;&nbsp;TVA non applicable, article 293 B du Code g&eacute;n&eacute;ral des imp&ocirc;ts&nbsp;&raquo; s&apos;applique. Le prix affich&eacute; correspond ainsi au montant total d&ucirc; par le Client.</Para>
          <Para>Le Prestataire se r&eacute;serve le droit de modifier ses prix &agrave; tout moment. Les prestations sont factur&eacute;es sur la base du tarif en vigueur au moment de la souscription.</Para>

          <h2>Article 4 &mdash; Souscription et paiement</h2>
          <Para>La souscription s&apos;effectue en ligne sur le site. Le Client cr&eacute;e un compte, s&eacute;lectionne la prestation souhait&eacute;e et proc&egrave;de au paiement. Le contrat est form&eacute; &agrave; la validation du paiement.</Para>
          <Para>Le paiement s&apos;effectue par les moyens propos&eacute;s sur le site via notre prestataire de paiement s&eacute;curis&eacute; <strong>Stripe</strong> (carte bancaire, Apple Pay, Google Pay). Aucune coordonn&eacute;e bancaire ne transite ni n&apos;est conserv&eacute;e par le Prestataire. Le paiement est exigible en int&eacute;gralit&eacute; &agrave; la souscription.</Para>
          <Para>Conform&eacute;ment &agrave; l&apos;article L.441-10 du Code de commerce, tout retard de paiement entra&icirc;ne de plein droit des p&eacute;nalit&eacute;s calcul&eacute;es au taux d&apos;int&eacute;r&ecirc;t l&eacute;gal major&eacute;, ainsi qu&apos;une indemnit&eacute; forfaitaire pour frais de recouvrement de 40&nbsp;&euro;.</Para>

          <h2>Article 5 &mdash; Ex&eacute;cution de la prestation</h2>
          <Para>Apr&egrave;s validation du paiement, le Client re&ccedil;oit par e-mail un acc&egrave;s au questionnaire, qu&apos;il remplit &agrave; son rythme. Le d&eacute;lai de r&eacute;alisation du diagnostic court &agrave; compter de la r&eacute;ception des r&eacute;ponses compl&egrave;tes du Client.</Para>
          <Para>La qualit&eacute; et la pertinence du diagnostic d&eacute;pendent directement de l&apos;exactitude, de la sinc&eacute;rit&eacute; et de la compl&eacute;tude des informations transmises par le Client. Le Prestataire ne saurait &ecirc;tre tenu responsable des cons&eacute;quences d&apos;informations erron&eacute;es, incompl&egrave;tes ou trompeuses fournies par le Client.</Para>
          <Para>Le rapport de diagnostic est remis au Client par voie &eacute;lectronique une fois l&apos;analyse finalis&eacute;e.</Para>

          <h2>Article 6 &mdash; Nature du conseil et absence de garantie de r&eacute;sultat</h2>
          <Para>Les prestations ATLAS constituent des prestations de conseil et d&apos;analyse strat&eacute;gique. Elles rel&egrave;vent d&apos;une obligation de moyens et non de r&eacute;sultat. Le rapport remis a une vocation d&apos;aide &agrave; la d&eacute;cision&nbsp;: il &eacute;claire le Client sur sa situation et lui propose des recommandations, sans se substituer &agrave; ses propres d&eacute;cisions de gestion.</Para>
          <Para>Le Prestataire ne garantit aucun r&eacute;sultat commercial, financier ou op&eacute;rationnel d&eacute;coulant de la mise en &oelig;uvre des recommandations. Les analyses externes s&apos;appuient sur des donn&eacute;es publiques et des ordres de grandeur repr&eacute;sentatifs, actualis&eacute;s &agrave; la date du rapport. Les prestations ATLAS ne constituent pas un conseil juridique, comptable ou fiscal r&eacute;glement&eacute;.</Para>

          <h2>Article 7 &mdash; Droit de r&eacute;tractation</h2>
          <Para>Le Client agissant &agrave; titre professionnel pour les besoins de son activit&eacute;, les dispositions du Code de la consommation relatives au droit de r&eacute;tractation ne s&apos;appliquent pas. Aucune prestation ne fait l&apos;objet d&apos;un droit de r&eacute;tractation de quatorze jours.</Para>

          <h2>Article 8 &mdash; Propri&eacute;t&eacute; intellectuelle</h2>
          <Para>Le rapport de diagnostic est fourni au Client pour son usage interne propre. Le Client en dispose librement pour les besoins de son entreprise. En revanche, la m&eacute;thodologie ATLAS, la structure des questionnaires, les mod&egrave;les d&apos;analyse et l&apos;ensemble des &eacute;l&eacute;ments propri&eacute;taires demeurent la propri&eacute;t&eacute; exclusive du Prestataire. Toute reproduction, diffusion ou revente du rapport &agrave; des tiers, ou toute exploitation commerciale de la m&eacute;thodologie, est interdite sans autorisation &eacute;crite pr&eacute;alable.</Para>

          <h2>Article 9 &mdash; Confidentialit&eacute;</h2>
          <Para>Le Prestataire s&apos;engage &agrave; traiter comme strictement confidentielles l&apos;ensemble des informations transmises par le Client dans le cadre de la prestation, et &agrave; ne les utiliser que pour la r&eacute;alisation du diagnostic. Le traitement des donn&eacute;es personnelles est d&eacute;taill&eacute; dans la <a href="/confidentialite">politique de confidentialit&eacute;</a>.</Para>

          <h2>Article 10 &mdash; Responsabilit&eacute;</h2>
          <Para>La responsabilit&eacute; du Prestataire, si elle &eacute;tait &eacute;tablie, serait limit&eacute;e au montant effectivement pay&eacute; par le Client au titre de la prestation concern&eacute;e. Le Prestataire ne saurait &ecirc;tre tenu responsable des dommages indirects, tels que perte d&apos;exploitation, perte de chiffre d&apos;affaires ou perte de client&egrave;le, r&eacute;sultant de l&apos;utilisation du rapport.</Para>

          <h2>Article 11 &mdash; Droit applicable et litiges</h2>
          <Para>Les pr&eacute;sentes CGV sont soumises au droit fran&ccedil;ais. En cas de litige, les parties s&apos;efforceront de rechercher une solution amiable pr&eacute;alable. &Agrave; d&eacute;faut d&apos;accord, le litige rel&egrave;vera de la comp&eacute;tence exclusive des tribunaux du ressort du si&egrave;ge du Prestataire, y compris en cas de pluralit&eacute; de d&eacute;fendeurs ou d&apos;appel en garantie.</Para>

        </section>
      </div>
      <Footer />
    </>
  );
}
