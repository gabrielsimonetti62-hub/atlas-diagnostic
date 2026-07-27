import { Nav, Footer, GoldSep } from "../components";

export const metadata = {
  title: "Politique de confidentialité — ATLAS",
  description: "Politique de confidentialité d'ATLAS : quelles données sont collectées, pourquoi, combien de temps, et quels sont vos droits au titre du RGPD.",
};

function Para({ children }) {
  return (
    <div className="apropos-para">
      <p>{children}</p>
    </div>
  );
}

export default function Confidentialite() {
  return (
    <>
      <Nav />
      <div className="container">
        <section className="page-header">
          <div className="section-label">Donn&eacute;es personnelles</div>
          <h1>Politique de confidentialit&eacute;</h1>
          <p className="section-intro">ATLAS s&apos;engage &agrave; prot&eacute;ger vos donn&eacute;es et &agrave; traiter vos informations avec la plus grande rigueur.</p>
        </section>
      </div>
      <div className="container"><GoldSep /></div>
      <div className="container">
        <section className="section apropos-body" style={{ paddingTop: "40px" }}>

          <h2>Responsable du traitement</h2>
          <Para>Le responsable du traitement des donn&eacute;es personnelles collect&eacute;es sur le site est M. Gabriel Simonetti, entrepreneur individuel exer&ccedil;ant sous le nom commercial &laquo;&nbsp;ATLAS&nbsp;&raquo;, 23 rue d&apos;Orl&eacute;ans, 92200 Neuilly-sur-Seine. Pour toute question relative &agrave; vos donn&eacute;es&nbsp;: contact@atlas-diagnostic.fr.</Para>

          <h2>Donn&eacute;es collect&eacute;es</h2>
          <Para>Dans le cadre de l&apos;utilisation du site et des prestations, ATLAS est amen&eacute; &agrave; collecter&nbsp;: des donn&eacute;es d&apos;identification (nom, pr&eacute;nom, adresse e-mail, nom de l&apos;entreprise), les donn&eacute;es de compte n&eacute;cessaires &agrave; votre authentification, les r&eacute;ponses que vous fournissez au questionnaire de diagnostic, ainsi que les donn&eacute;es techniques li&eacute;es &agrave; la souscription. Les donn&eacute;es de paiement (coordonn&eacute;es bancaires) sont trait&eacute;es directement par notre prestataire Stripe et ne sont ni collect&eacute;es ni conserv&eacute;es par ATLAS.</Para>

          <h2>Finalit&eacute;s et bases l&eacute;gales</h2>
          <Para>Vos donn&eacute;es sont trait&eacute;es pour les finalit&eacute;s suivantes&nbsp;: la cr&eacute;ation et la gestion de votre compte ainsi que l&apos;ex&eacute;cution de la prestation souscrite (base l&eacute;gale&nbsp;: ex&eacute;cution du contrat)&nbsp;; la gestion de la facturation et le respect de nos obligations comptables (base l&eacute;gale&nbsp;: obligation l&eacute;gale)&nbsp;; l&apos;envoi d&apos;informations relatives &agrave; votre commande et, le cas &eacute;ch&eacute;ant, de communications commerciales (base l&eacute;gale&nbsp;: int&eacute;r&ecirc;t l&eacute;gitime ou consentement)&nbsp;; l&apos;am&eacute;lioration de nos services et la mesure d&apos;audience.</Para>

          <h2>Destinataires et sous-traitants</h2>
          <Para>Vos donn&eacute;es sont destin&eacute;es au seul responsable du traitement et ne sont jamais vendues &agrave; des tiers. Pour fonctionner, ATLAS s&apos;appuie sur des prestataires techniques (sous-traitants au sens du RGPD)&nbsp;: <strong>Supabase</strong> (h&eacute;bergement de la base de donn&eacute;es et des r&eacute;ponses au questionnaire), <strong>Brevo</strong> (envoi des e-mails et gestion de la relation client), <strong>Stripe</strong> (traitement s&eacute;curis&eacute; des paiements) et <strong>Vercel</strong> (h&eacute;bergement du site). Chacun de ces prestataires pr&eacute;sente des garanties de conformit&eacute; au RGPD.</Para>

          <h2>Transferts hors Union europ&eacute;enne</h2>
          <Para>Certains de nos sous-traitants sont susceptibles d&apos;h&eacute;berger ou de traiter des donn&eacute;es en dehors de l&apos;Union europ&eacute;enne, notamment aux &Eacute;tats-Unis. Dans ce cas, ces transferts sont encadr&eacute;s par des garanties appropri&eacute;es conformes au RGPD, telles que les clauses contractuelles types de la Commission europ&eacute;enne ou l&apos;adh&eacute;sion &agrave; un cadre de protection reconnu.</Para>

          <h2>Dur&eacute;e de conservation</h2>
          <Para>Vos donn&eacute;es de compte et de prestation sont conserv&eacute;es pendant la dur&eacute;e de la relation contractuelle, puis archiv&eacute;es le temps n&eacute;cessaire au respect de nos obligations l&eacute;gales. Les documents comptables et de facturation sont conserv&eacute;s dix ans, conform&eacute;ment aux obligations l&eacute;gales. Les donn&eacute;es utilis&eacute;es &agrave; des fins de prospection commerciale sont conserv&eacute;es trois ans &agrave; compter du dernier contact.</Para>

          <h2>Vos droits</h2>
          <Para>Conform&eacute;ment au RGPD, vous disposez d&apos;un droit d&apos;acc&egrave;s, de rectification, d&apos;effacement, de limitation, d&apos;opposition et de portabilit&eacute; de vos donn&eacute;es, ainsi que du droit de d&eacute;finir des directives relatives &agrave; leur sort apr&egrave;s votre d&eacute;c&egrave;s. Vous pouvez exercer ces droits &agrave; tout moment en &eacute;crivant &agrave; contact@atlas-diagnostic.fr, en justifiant de votre identit&eacute; si n&eacute;cessaire.</Para>
          <Para>Si vous estimez que le traitement de vos donn&eacute;es n&apos;est pas conforme &agrave; la r&eacute;glementation, vous disposez du droit d&apos;introduire une r&eacute;clamation aupr&egrave;s de la Commission nationale de l&apos;informatique et des libert&eacute;s (CNIL), 3 place de Fontenoy, 75007 Paris &mdash; www.cnil.fr.</Para>

          <h2>Cookies</h2>
          <Para>Le site utilise des cookies n&eacute;cessaires &agrave; son bon fonctionnement, notamment pour la gestion de votre session et de votre authentification. Il peut &eacute;galement recourir, avec votre consentement, &agrave; des cookies de mesure d&apos;audience. Vous pouvez &agrave; tout moment configurer votre navigateur pour accepter ou refuser les cookies&nbsp;; le refus de certains cookies peut toutefois affecter le fonctionnement du site.</Para>

          <h2>S&eacute;curit&eacute;</h2>
          <Para>ATLAS met en &oelig;uvre des mesures techniques et organisationnelles appropri&eacute;es afin de prot&eacute;ger vos donn&eacute;es contre tout acc&egrave;s, alt&eacute;ration, divulgation ou destruction non autoris&eacute;s. L&apos;acc&egrave;s aux donn&eacute;es est strictement limit&eacute; aux personnes habilit&eacute;es &agrave; les traiter.</Para>

          <h2>Modification de la politique</h2>
          <Para>La pr&eacute;sente politique de confidentialit&eacute; peut &ecirc;tre mise &agrave; jour &agrave; tout moment afin de refl&eacute;ter les &eacute;volutions l&eacute;gales, r&eacute;glementaires ou techniques. La version applicable est celle publi&eacute;e sur le site &agrave; la date de votre consultation.</Para>

        </section>
      </div>
      <Footer />
    </>
  );
}
