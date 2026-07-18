import Link from "next/link";
import { Nav, Footer, GoldSep, OffersPlateau } from "./components";

function PainCard({ icon, title, desc }) {
  return (
    <div className="pain-card">
      <div className="pain-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

/* Icones au trait fin */
const I = {
  treso: <svg viewBox="0 0 24 24"><path d="M3 7l6 6 4-4 8 8" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 13v4h-4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  client: <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-3.5 3-5.5 7-5.5s7 2 7 5.5" strokeLinecap="round"/><path d="M17.5 3.5l3 3M20.5 3.5l-3 3" strokeLinecap="round"/></svg>,
  croissance: <svg viewBox="0 0 24 24"><path d="M4 20L20 4" strokeLinecap="round"/><path d="M12 4h8v8" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 20h4M4 20v-4" strokeLinecap="round"/></svg>,
  solitude: <svg viewBox="0 0 24 24"><circle cx="12" cy="7" r="3.5"/><path d="M6 20c0-3 2.5-5 6-5s6 2 6 5" strokeLinecap="round"/></svg>,
  processus: <svg viewBox="0 0 24 24"><path d="M4 7h10M4 12h16M4 17h7" strokeLinecap="round"/><circle cx="18" cy="7" r="2"/><circle cx="15" cy="17" r="2"/></svg>,
  acquisition: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="0.5"/></svg>,
  delegation: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M12 4v4M12 16v4M4 12h4M16 12h4" strokeLinecap="round"/></svg>,
  vision: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3.5 2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
};

export default function Home() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <div className="container">
        <section className="hero">
          <div className="hero-eyebrow animate-in">Diagnostic strat&eacute;gique pour TPE et PME</div>
          <h1 className="animate-in delay-1">Votre entreprise a des failles. Vous ne les voyez pas encore.</h1>
          <p className="animate-in delay-2">ATLAS d&eacute;tecte en 10 domaines ce qui freine votre croissance, menace votre tr&eacute;sorerie ou fragilise votre organisation. Le diagnostic d&apos;un cabinet, au prix d&apos;un ind&eacute;pendant.</p>
          <a href="#offres" className="btn-cta animate-in delay-3">Lancer mon diagnostic &rarr;</a>
          <div className="hero-sub animate-in delay-3">&Agrave; partir de 199 &euro; &middot; R&eacute;sultats d&egrave;s 72h</div>
          <div className="trust-bar animate-in delay-4">
            <div className="trust-item"><div className="trust-num">127</div><div className="trust-label">questions d&apos;analyse</div></div>
            <div className="trust-item"><div className="trust-num">10</div><div className="trust-label">domaines strat&eacute;giques</div></div>
            <div className="trust-item"><div className="trust-num">24&ndash;40</div><div className="trust-label">pages de rapport</div></div>
            <div className="trust-item"><div className="trust-num">72h</div><div className="trust-label">premiers r&eacute;sultats</div></div>
          </div>
        </section>
      </div>

      <div className="container"><GoldSep /></div>

      {/* LE CONSTAT */}
      <div className="container">
        <section className="section section-centered">
          <div className="section-label">Le constat</div>
          <h2>Les angles morts qui fragilisent les TPE et PME</h2>
          <p className="section-intro">80 % des d&eacute;faillances d&apos;entreprise auraient pu &ecirc;tre anticip&eacute;es. Mais sans regard ext&eacute;rieur, les signaux faibles passent inaper&ccedil;us jusqu&apos;&agrave; devenir des urgences.</p>
          <div className="pain-grid">
            <PainCard icon={I.treso} title="Tr&eacute;sorerie sous tension" desc="Vous g&eacute;rez au jour le jour sans voir les causes structurelles" />
            <PainCard icon={I.client} title="D&eacute;pendance client" desc="Un d&eacute;part client et votre chiffre d&apos;affaires s&apos;effondre" />
            <PainCard icon={I.croissance} title="Croissance sans rep&egrave;res" desc="Vous grandissez sans savoir si vos fondations tiennent" />
            <PainCard icon={I.solitude} title="Solitude du dirigeant" desc="Aucun regard ext&eacute;rieur sur vos d&eacute;cisions strat&eacute;giques" />
            <PainCard icon={I.processus} title="Processus flous" desc="L&apos;organisation repose sur des habitudes, pas sur des syst&egrave;mes" />
            <PainCard icon={I.acquisition} title="Acquisition incertaine" desc="Pas de strat&eacute;gie claire pour trouver et fid&eacute;liser vos clients" />
            <PainCard icon={I.delegation} title="D&eacute;l&eacute;gation difficile" desc="Tout repose sur vous, impossible de l&acirc;cher le volant" />
            <PainCard icon={I.vision} title="Vision court-termiste" desc="L&apos;urgence quotidienne &eacute;crase la r&eacute;flexion strat&eacute;gique" />
          </div>
        </section>
      </div>

      {/* BANDE PHOTOS */}
      <div className="container">
        <section className="section section-centered" style={{ paddingTop: 0 }}>
          <div className="section-label">Pour qui</div>
          <h2>Con&ccedil;u pour ceux qui font tourner l&apos;&eacute;conomie r&eacute;elle</h2>
          <p className="section-intro">Artisans, commer&ccedil;ants, ind&eacute;pendants, dirigeants de TPE et PME : ATLAS parle votre langue, pas celle des salles de r&eacute;union.</p>
          <div className="photo-band">
            <img src="/images/artisan-tracage.jpg" alt="Artisan menuisier au travail dans son atelier" />
            <img src="/images/epicerie-duo.jpg" alt="Commer&ccedil;ants dans leur &eacute;picerie fine" />
            <img src="/images/bureau-epure.jpg" alt="Bureau d&apos;ind&eacute;pendant travaillant de chez lui" />
          </div>
        </section>
      </div>

      <div className="container"><GoldSep /></div>

      {/* CTA MID */}
      <div className="container">
        <section className="cta-section">
          <h2>Votre entreprise m&eacute;rite un regard strat&eacute;gique</h2>
          <p>Ne laissez pas les angles morts d&eacute;cider de votre avenir. Commencez par un diagnostic.</p>
          <a href="#offres" className="btn-cta">Lancer mon diagnostic &rarr;</a>
        </section>
      </div>

      <div className="container"><GoldSep /></div>

      {/* 4 ETAPES */}
      <div className="container">
        <section className="section">
          <div className="section-label" style={{ textAlign: "center" }}>Comment &ccedil;a marche</div>
          <h2 style={{ textAlign: "center" }}>4 &eacute;tapes vers la clart&eacute;</h2>
          <div className="steps-list">
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-content">
                <h3>Choisissez votre formule</h3>
                <p>ATLAS propose trois niveaux d&apos;accompagnement adapt&eacute;s &agrave; chaque besoin. <Link href="/offres/hermes" className="text-link">Herm&egrave;s</Link> pour un diagnostic complet imm&eacute;diat. <Link href="/offres/iris" className="text-link">Iris</Link> pour aller plus loin avec une orientation vers des experts et un suivi &agrave; 3 mois. <Link href="/offres/athena" className="text-link">Ath&eacute;na</Link> pour un accompagnement structur&eacute; sur 7 mois avec des bilans d&apos;&eacute;volution r&eacute;guliers. Quelle que soit la formule choisie, vous pourrez &eacute;voluer vers un niveau sup&eacute;rieur &agrave; tout moment.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-content">
                <h3>Remplissez le questionnaire</h3>
                <p>Notre questionnaire couvre 127 questions r&eacute;parties sur 10 domaines strat&eacute;giques. Il a &eacute;t&eacute; con&ccedil;u &agrave; partir des m&eacute;thodologies utilis&eacute;es par les plus grands cabinets de conseil et adapt&eacute; pour &ecirc;tre compl&eacute;t&eacute; de mani&egrave;re autonome. Prenez votre temps : vous pouvez le remplir en une session ou y revenir sur plusieurs jours. Plus vos r&eacute;ponses seront d&eacute;taill&eacute;es, plus le diagnostic sera pr&eacute;cis.</p>
                <div className="doc-paper">
                  <div className="doc-paper-label">Extrait r&eacute;el &middot; Questionnaire ATLAS</div>
                  <div className="doc-paper-title">Partie B &mdash; Domaine 3 : Finances et solvabilit&eacute;</div>
                  <div className="doc-q">
                    <div className="doc-q-num">Question 38</div>
                    <p>Comment percevez-vous la solidit&eacute; financi&egrave;re de votre entreprise aujourd&apos;hui ?</p>
                    <div className="doc-options">
                      <span className="doc-opt">Tr&egrave;s solide</span>
                      <span className="doc-opt selected">Plut&ocirc;t solide</span>
                      <span className="doc-opt">Fragile</span>
                      <span className="doc-opt">Tr&egrave;s fragile</span>
                    </div>
                  </div>
                  <div className="doc-q">
                    <div className="doc-q-num">Question 41</div>
                    <p>Si votre chiffre d&apos;affaires s&apos;arr&ecirc;tait demain, combien de mois votre tr&eacute;sorerie actuelle vous permettrait-elle de tenir ?</p>
                    <div className="doc-options">
                      <span className="doc-opt">Moins d&apos;1 mois</span>
                      <span className="doc-opt selected">1 &agrave; 3 mois</span>
                      <span className="doc-opt">3 &agrave; 6 mois</span>
                      <span className="doc-opt">Plus de 6 mois</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-content">
                <h3>Recevez votre diagnostic</h3>
                <p>D&egrave;s 72 heures, vous recevez un rapport complet de 24 &agrave; 40 pages. Chaque domaine de votre entreprise est &eacute;valu&eacute; et not&eacute;, avec un score global sur 100. Le rapport inclut une analyse de votre march&eacute; et de votre concurrence, une matrice SWOT, une &eacute;valuation des risques, et un plan d&apos;action prioris&eacute; avec des recommandations concr&egrave;tes, des fourchettes budg&eacute;taires et les outils pour les mettre en &oelig;uvre.</p>
                <div className="doc-paper">
                  <div className="doc-paper-label">Extrait r&eacute;el &middot; Rapport ATLAS</div>
                  <div className="doc-paper-title">Chapitre 2 &mdash; Synth&egrave;se ex&eacute;cutive</div>
                  <div className="doc-global">
                    <div className="doc-global-label">Score global</div>
                    <div className="doc-global-score">61 <span>/ 100</span></div>
                  </div>
                  <div className="doc-score-row">
                    <div className="doc-score-name">D1 &middot; March&eacute; et demande r&eacute;elle</div>
                    <div className="doc-score-bar"><div className="doc-score-fill fill-green" style={{ width: "70%" }}></div></div>
                    <div className="doc-score-val">7/10</div>
                  </div>
                  <div className="doc-score-row">
                    <div className="doc-score-name">D3 &middot; Finances et solvabilit&eacute;</div>
                    <div className="doc-score-bar"><div className="doc-score-fill fill-amber" style={{ width: "50%" }}></div></div>
                    <div className="doc-score-val">5/10</div>
                  </div>
                  <div className="doc-score-row">
                    <div className="doc-score-name">D6 &middot; Capital humain et leadership</div>
                    <div className="doc-score-bar"><div className="doc-score-fill fill-red" style={{ width: "30%" }}></div></div>
                    <div className="doc-score-val">3/10</div>
                  </div>
                  <div className="blur-overlay">
                    <div className="blur-inner">
                      <div className="doc-score-row">
                        <div className="doc-score-name">D7 &middot; Strat&eacute;gie et gouvernance</div>
                        <div className="doc-score-bar"><div className="doc-score-fill fill-gold" style={{ width: "60%" }}></div></div>
                        <div className="doc-score-val">6/10</div>
                      </div>
                      <div className="doc-score-row">
                        <div className="doc-score-name">D9 &middot; Veille concurrentielle</div>
                        <div className="doc-score-bar"><div className="doc-score-fill fill-amber" style={{ width: "40%" }}></div></div>
                        <div className="doc-score-val">4/10</div>
                      </div>
                    </div>
                    <div className="blur-text">Lancez votre diagnostic pour d&eacute;couvrir le rapport complet</div>
                  </div>
                  <div className="doc-lucidite">
                    <div className="doc-lucidite-label">Indice de lucidit&eacute;</div>
                    <p><strong>&Eacute;cart mod&eacute;r&eacute;</strong> &mdash; votre perception surestime la solidit&eacute; financi&egrave;re de l&apos;entreprise par rapport &agrave; la r&eacute;alit&eacute; des donn&eacute;es. D&eacute;tail en Chapitre 3.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="step">
              <div className="step-num">4</div>
              <div className="step-content">
                <h3>Passez &agrave; l&apos;action</h3>
                <p>Avec l&apos;offre Herm&egrave;s, vous disposez d&apos;un plan d&apos;action imm&eacute;diatement exploitable. Avec Iris, vous b&eacute;n&eacute;ficiez en plus d&apos;une orientation vers les experts de l&apos;&eacute;cosyst&egrave;me ATLAS et d&apos;un bilan de suivi &agrave; 3 mois pour mesurer vos progr&egrave;s. Avec Ath&eacute;na, un accompagnement structur&eacute; sur 7 mois avec des points r&eacute;guliers et des bilans d&apos;&eacute;volution vous permet de transformer durablement votre entreprise. &Agrave; chaque &eacute;tape, vous pouvez &eacute;voluer vers la formule sup&eacute;rieure.</p>
              </div>
            </div>
          </div>
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
          <p>Ce diagnostic est la premi&egrave;re &eacute;tape d&apos;un projet &agrave; ambition globale &mdash; une analyse rigoureuse, construite sur les m&eacute;thodologies des plus grands cabinets de conseil, rendue accessible &agrave; ceux qui en ont le plus besoin.</p>
          <div className="closing-devise"><strong>ATLAS</strong> &mdash; Laissez-nous porter votre monde sur nos &eacute;paules.</div>
        </section>
      </div>

      <Footer />
    </>
  );
}
