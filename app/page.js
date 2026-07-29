import Link from "next/link";
import { Nav, Footer, GoldSep, OffersPlateau, Portes, AngleMort } from "./components";

export default function Home() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <div className="container">
        <section className="hero">
          <div className="hero-eyebrow animate-in">Diagnostic strat&eacute;gique pour TPE et PME</div>
          <h1 className="animate-in delay-1">Le diagnostic strat&eacute;gique appliqu&eacute; &agrave; votre entreprise.</h1>
          <p className="animate-in delay-2">ATLAS applique aux TPE et PME les m&eacute;thodologies &eacute;prouv&eacute;es par les cabinets de conseil. Un diagnostic complet sur dix domaines strat&eacute;giques, livr&eacute; &agrave; partir de 72 heures.</p>
          <a href="#offres" className="btn-cta animate-in delay-3">Diagnostiquer mon entreprise &rarr;</a>
          <div className="hero-sub animate-in delay-3">&Agrave; partir de 249 &euro;</div>
          <div className="trust-bar animate-in delay-4">
            <div className="trust-item"><div className="trust-num">127</div><div className="trust-label">questions d&apos;analyse</div></div>
            <div className="trust-item"><div className="trust-num">10</div><div className="trust-label">domaines strat&eacute;giques</div></div>
            <div className="trust-item"><div className="trust-num">24&ndash;40</div><div className="trust-label">pages de rapport</div></div>
            <div className="trust-item"><div className="trust-num">72h</div><div className="trust-label">premiers r&eacute;sultats</div></div>
          </div>
        </section>
      </div>

      {/* BLOC B+C QUI MONTE SUR LE HERO */}
      <div className="deloitte-lift">
        <div className="deloitte-inner">
          <div className="deloitte-eyebrow">Notre positionnement</div>
          <h2 className="deloitte-title">Le conseil r&eacute;serv&eacute; aux grands, d&eacute;sormais accessible aux TPE et PME</h2>
          <div className="deloitte-body">
            <p>Plus de 99 % du tissu &eacute;conomique fran&ccedil;ais est compos&eacute; de TPE et de PME. Aucune de ces entreprises ne b&eacute;n&eacute;ficie du niveau d&apos;analyse strat&eacute;gique offert aux grands groupes par les cabinets de conseil.</p>
            <p>ATLAS a &eacute;t&eacute; con&ccedil;u &agrave; partir d&apos;un constat simple : la qualit&eacute; du diagnostic strat&eacute;gique ne devrait pas d&eacute;pendre de la taille de l&apos;entreprise qui le commande. Nos m&eacute;thodes, nos outils et notre grille d&apos;analyse sont ceux des cabinets qui accompagnent les grandes structures. Notre lecture, elle, est celle du terrain.</p>
          </div>
          <Portes />
        </div>
      </div>

      {/* ANGLES MORTS */}
      <div className="container">
        <section className="angles-section">
          <div className="angles-intro">
            <div className="section-label">Les angles morts</div>
            <h2>Ce que la plupart des dirigeants ne mesurent pas</h2>
            <p>Cinq configurations reviennent syst&eacute;matiquement dans les entreprises que nous analysons. Prises isol&eacute;ment, elles n&apos;emp&ecirc;chent pas d&apos;avancer. Ensemble, elles expliquent la majorit&eacute; des difficult&eacute;s auxquelles les dirigeants finissent par se heurter.</p>
          </div>

          <AngleMort num="1" image="/images/cheffe-cuisine.jpg" imageAlt="Cheffe en cuisine professionnelle" title="Les finances tenues au quotidien, sans pilotage r&eacute;el">
            La plupart des dirigeants de TPE et PME savent lire leur solde bancaire au jour le jour. Peu disposent d&apos;une lecture claire de leurs marges r&eacute;elles par produit ou par client, du niveau de leur besoin en fonds de roulement, ou de la dur&eacute;e pendant laquelle l&apos;entreprise r&eacute;sisterait &agrave; un choc majeur. Cette absence de visibilit&eacute; structurelle n&apos;emp&ecirc;che pas d&apos;avancer. Elle emp&ecirc;che simplement de piloter avec la s&eacute;r&eacute;nit&eacute; que permettrait une lecture plus compl&egrave;te des donn&eacute;es.
          </AngleMort>

          <AngleMort num="2" image="/images/imprimeur.jpg" imageAlt="Imprimeur dans son atelier" title="Une concentration client rarement mesur&eacute;e">
            Dans une entreprise de taille moyenne, il est fr&eacute;quent qu&apos;un petit nombre de clients repr&eacute;sente une part majoritaire du chiffre d&apos;affaires. Cette configuration s&apos;installe naturellement avec le temps et reste, dans la plupart des cas, insuffisamment quantifi&eacute;e. Elle engage pourtant la r&eacute;silience de l&apos;entreprise dans son ensemble, sa capacit&eacute; de n&eacute;gociation, ses marges et sa trajectoire &agrave; moyen terme.
          </AngleMort>

          <div className="cta-milieu">
            <h3>Vous vous reconnaissez ?</h3>
            <p>Le diagnostic ATLAS identifie ces signaux, les mesure, vous dit dans quel ordre les traiter et bien plus encore.</p>
            <Link href="#offres" className="btn-cta">D&eacute;marrer mon diagnostic &rarr;</Link>
          </div>

          <AngleMort num="3" image="/images/bureau-epure.jpg" imageAlt="Bureau d&apos;un dirigeant" title="Une entreprise &eacute;troitement li&eacute;e &agrave; la personne du dirigeant">
            De nombreuses entreprises reposent, dans les faits, sur la pr&eacute;sence quotidienne et l&apos;implication personnelle de leur dirigeant. Cette configuration produit de la r&eacute;activit&eacute; et de la coh&eacute;rence, mais elle limite la capacit&eacute; de l&apos;organisation &agrave; fonctionner de mani&egrave;re autonome. Elle expose &eacute;galement l&apos;entreprise &agrave; un risque significatif en cas d&apos;impr&eacute;vu affectant le dirigeant, sans que ce risque soit toujours identifi&eacute; comme tel.
          </AngleMort>

          <AngleMort num="4" image="/images/chantier-ouvriers.jpg" imageAlt="Ouvriers sur un chantier" title="Des fondations rest&eacute;es &agrave; l&apos;&eacute;chelle du d&eacute;marrage">
            Le d&eacute;veloppement d&apos;une entreprise s&apos;accompagne rarement d&apos;une remise &agrave; plat de ses processus. Les modes de fonctionnement, les circuits de d&eacute;cision et les outils qui suffisaient dans les premi&egrave;res ann&eacute;es continuent souvent d&apos;&ecirc;tre utilis&eacute;s bien au-del&agrave;. Ce d&eacute;calage entre la structure et la taille atteinte est l&apos;une des causes structurelles les plus fr&eacute;quentes de perte d&apos;efficacit&eacute;, de d&eacute;gradation de la qualit&eacute; et de tensions internes.
          </AngleMort>

          <AngleMort num="5" image="/images/primeur-devanture.jpg" imageAlt="Devanture d&apos;un commerce" title="Un positionnement de march&eacute; rarement r&eacute;&eacute;valu&eacute;">
            Le positionnement d&apos;une entreprise sur son march&eacute; est g&eacute;n&eacute;ralement d&eacute;fini lors de son lancement puis peu r&eacute;ajust&eacute; par la suite. Les mouvements de la concurrence, l&apos;&eacute;volution des attentes des clients et l&apos;arriv&eacute;e de nouveaux entrants transforment pourtant le contexte de mani&egrave;re continue. En l&apos;absence d&apos;une veille structur&eacute;e, l&apos;&eacute;cart entre la perception qu&apos;a l&apos;entreprise de son march&eacute; et la r&eacute;alit&eacute; de ce march&eacute; tend &agrave; se creuser d&apos;ann&eacute;e en ann&eacute;e.
          </AngleMort>
        </section>
      </div>

      <div className="container"><GoldSep /></div>

      {/* CTA CONCLUSION */}
      <div className="container">
        <section className="cta-section">
          <h2>Votre entreprise m&eacute;rite un regard strat&eacute;gique</h2>
          <p>Ne laissez pas les angles morts d&eacute;cider de votre avenir. Commencez par un diagnostic.</p>
          <a href="#offres" className="btn-cta">Lancer mon diagnostic &rarr;</a>
        </section>
      </div>

      <div className="container"><GoldSep /></div>

      {/* PLATEAU OFFRES */}
      <div className="container">
        <div className="plateau-wrapper" id="offres">
          <OffersPlateau label="Les offres" title="Choisissez votre niveau de diagnostic" />
        </div>
      </div>

      <div className="container"><GoldSep /></div>

      {/* CLOSING */}
      <div className="container">
        <section className="closing">
          <div className="closing-logo">ATLAS</div>
          <p>ATLAS est n&eacute; d&apos;une conviction : les TPE et PME m&eacute;ritent le m&ecirc;me niveau d&apos;analyse strat&eacute;gique que les grandes entreprises, sans en payer le prix.</p>
          <p>Notre mission est de b&acirc;tir un &eacute;cosyst&egrave;me d&apos;accompagnement et d&apos;entraide o&ugrave; chaque dirigeant peut identifier ses fragilit&eacute;s, s&apos;appuyer sur les bons experts, mesurer sa progression dans le temps et collaborer avec les autres membres de cet &eacute;cosyst&egrave;me pour grandir ensemble.</p>
          <p>Ce diagnostic est la premi&egrave;re &eacute;tape d&apos;un projet &agrave; ambition globale : une analyse rigoureuse, construite sur les m&eacute;thodologies des plus grands cabinets de conseil, rendue accessible &agrave; ceux qui en ont le plus besoin.</p>
          <div className="closing-devise"><strong>ATLAS</strong> : laissez-nous porter votre monde sur nos &eacute;paules.</div>
        </section>
      </div>

      <Footer />
    </>
  );
}
