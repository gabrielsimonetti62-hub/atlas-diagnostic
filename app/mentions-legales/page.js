import { Nav, Footer, GoldSep } from "../components";

export const metadata = {
  title: "Mentions légales — ATLAS",
  description: "Mentions légales du site ATLAS : éditeur, hébergeur, propriété intellectuelle et protection des données personnelles.",
};

function Para({ children }) {
  return (
    <div className="apropos-para">
      <p>{children}</p>
    </div>
  );
}

export default function MentionsLegales() {
  return (
    <>
      <Nav />
      <div className="container">
        <section className="page-header">
          <div className="section-label">Informations l&eacute;gales</div>
          <h1>Mentions l&eacute;gales</h1>
          <p className="section-intro">Transparence et conformit&eacute; : retrouvez ici l&apos;ensemble des informations relatives &agrave; l&apos;&eacute;diteur du site ATLAS.</p>
        </section>
      </div>
      <div className="container"><GoldSep /></div>
      <div className="container">
        <section className="section apropos-body" style={{ paddingTop: "40px" }}>

          <h2>&Eacute;diteur du site</h2>
          <Para>Le pr&eacute;sent site est &eacute;dit&eacute; par&nbsp;:</Para>
          <Para>
            <strong>Gabriel Simonetti</strong>, entrepreneur individuel exer&ccedil;ant sous le nom commercial &laquo;&nbsp;ATLAS&nbsp;&raquo;.<br />
            <strong>Adresse&nbsp;:</strong> 23 rue d&apos;Orl&eacute;ans, 92200 Neuilly-sur-Seine, France<br />
            <strong>Adresse e-mail&nbsp;:</strong> contact@atlas-diagnostic.fr<br />
            <strong>T&eacute;l&eacute;phone&nbsp;:</strong> 06 38 59 82 81<br />
            <strong>SIREN&nbsp;:</strong> 107 508 905<br />
            <strong>SIRET&nbsp;:</strong> 10750890500018<br />
            <strong>Code APE/NAF&nbsp;:</strong> 7022Z (Conseil pour les affaires et autres conseils de gestion)<br />
            <strong>Immatriculation&nbsp;:</strong> Registre National des Entreprises (RNE), tenu par l&apos;INPI<br />
            <strong>TVA&nbsp;:</strong> TVA non applicable, article 293 B du Code g&eacute;n&eacute;ral des imp&ocirc;ts (franchise en base de TVA)
          </Para>

          <h2>Directeur de la publication</h2>
          <Para>Le directeur de la publication est M. Gabriel Simonetti, en sa qualit&eacute; d&apos;&eacute;diteur du site.</Para>

          <h2>H&eacute;bergement</h2>
          <Para>Le site est h&eacute;berg&eacute; par&nbsp;:</Para>
          <Para>
            <strong>Vercel Inc.</strong><br />
            340 S Lemon Ave #4133, Walnut, CA 91789, &Eacute;tats-Unis<br />
            Site&nbsp;: vercel.com
          </Para>
          <Para>Le nom de domaine <strong>atlas-diagnostic.fr</strong> est enregistr&eacute; aupr&egrave;s d&apos;OVH SAS, 2 rue Kellermann, 59100 Roubaix, France.</Para>

          <h2>Propri&eacute;t&eacute; intellectuelle</h2>
          <Para>L&apos;ensemble des &eacute;l&eacute;ments composant le site ATLAS &mdash; textes, structure, arborescence, charte graphique, logos, m&eacute;thodologie, d&eacute;nomination &laquo;&nbsp;ATLAS&nbsp;&raquo; ainsi que les concepts propri&eacute;taires tels que l&apos;indice de lucidit&eacute; &mdash; sont prot&eacute;g&eacute;s par le droit de la propri&eacute;t&eacute; intellectuelle et demeurent la propri&eacute;t&eacute; exclusive de leur &eacute;diteur.</Para>
          <Para>Toute reproduction, repr&eacute;sentation, modification, publication ou adaptation de tout ou partie de ces &eacute;l&eacute;ments, quel que soit le proc&eacute;d&eacute; ou le support utilis&eacute;, est interdite sans l&apos;autorisation &eacute;crite pr&eacute;alable de l&apos;&eacute;diteur. Toute exploitation non autoris&eacute;e est susceptible de constituer une contrefa&ccedil;on au sens des articles L.335-2 et suivants du Code de la propri&eacute;t&eacute; intellectuelle.</Para>

          <h2>Protection des donn&eacute;es personnelles</h2>
          <Para>Le responsable du traitement des donn&eacute;es collect&eacute;es sur le site est M. Gabriel Simonetti. Conform&eacute;ment au R&egrave;glement g&eacute;n&eacute;ral sur la protection des donn&eacute;es (RGPD) et &agrave; la loi Informatique et Libert&eacute;s, vous disposez de droits d&apos;acc&egrave;s, de rectification, d&apos;effacement, de limitation, d&apos;opposition et de portabilit&eacute; de vos donn&eacute;es.</Para>
          <Para>Les modalit&eacute;s de collecte, de traitement et de conservation de vos donn&eacute;es sont d&eacute;taill&eacute;es dans notre <a href="/confidentialite">politique de confidentialit&eacute;</a>. Pour exercer vos droits, vous pouvez &eacute;crire &agrave; contact@atlas-diagnostic.fr. Vous disposez &eacute;galement du droit d&apos;introduire une r&eacute;clamation aupr&egrave;s de la CNIL (www.cnil.fr).</Para>

          <h2>Cookies</h2>
          <Para>Le site est susceptible d&apos;utiliser des cookies n&eacute;cessaires &agrave; son bon fonctionnement ainsi que, le cas &eacute;ch&eacute;ant, des cookies de mesure d&apos;audience. Les modalit&eacute;s relatives aux cookies sont pr&eacute;cis&eacute;es dans la <a href="/confidentialite">politique de confidentialit&eacute;</a>.</Para>

          <h2>Responsabilit&eacute;</h2>
          <Para>L&apos;&eacute;diteur s&apos;efforce d&apos;assurer l&apos;exactitude et la mise &agrave; jour des informations diffus&eacute;es sur le site, sans toutefois pouvoir en garantir l&apos;exhaustivit&eacute; ou l&apos;absence totale d&apos;erreur. Le site peut contenir des liens vers des sites tiers&nbsp;; l&apos;&eacute;diteur n&apos;exerce aucun contr&ocirc;le sur ces sites et d&eacute;cline toute responsabilit&eacute; quant &agrave; leur contenu.</Para>

          <h2>Droit applicable</h2>
          <Para>Les pr&eacute;sentes mentions l&eacute;gales sont soumises au droit fran&ccedil;ais. Tout litige relatif &agrave; leur interpr&eacute;tation ou &agrave; leur application rel&egrave;ve de la comp&eacute;tence des tribunaux fran&ccedil;ais.</Para>

        </section>
      </div>
      <Footer />
    </>
  );
}
