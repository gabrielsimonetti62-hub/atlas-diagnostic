import Link from "next/link";
import { Nav, Footer } from "./components";

function PainCard({ icon, title, desc }) {
  return (
    <div className="pain-card">
      <div className="pain-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function OfferCheck({ color, children }) {
  return (
    <li>
      <span className={`offer-check check-${color}`}>&#10003;</span>
      {children}
    </li>
  );
}

export default function Home() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <div className="container">
        <section className="hero">
          <div className="hero-eyebrow">Diagnostic strat&eacute;gique pour TPE et PME</div>
          <h1>Votre entreprise a des failles. Vous ne les voyez pas encore.</h1>
          <p>ATLAS d&eacute;tecte en 10 domaines ce qui freine votre croissance, menace votre tr&eacute;sorerie ou fragilise votre organisation. Le diagnostic d&apos;un cabinet, au prix d&apos;un ind&eacute;pendant.</p>
          <a href="#offres" className="btn-cta">Lancer mon diagnostic &rarr;</a>
          <div className="hero-sub">&Agrave; partir de 199 &euro; &middot; R&eacute;sultats sous 72h</div>
        </section>
      </div>

      <div className="container"><hr className="divider" /></div>

      {/* LE CONSTAT */}
      <div className="container">
        <section className="section">
          <div className="section-label">Le constat</div>
          <h2>Les angles morts qui fragilisent les TPE et PME</h2>
          <p className="section-intro">80 % des d&eacute;faillances d&apos;entreprise auraient pu &ecirc;tre anticip&eacute;es. Mais sans regard ext&eacute;rieur, les signaux faibles passent inaper&ccedil;us jusqu&apos;&agrave; devenir des urgences.</p>
          <div className="pain-grid">
            <PainCard icon="&#9660;" title="Tr&eacute;sorerie sous tension" desc="Vous g&eacute;rez au jour le jour sans voir les causes structurelles" />
            <PainCard icon="&#9888;" title="D&eacute;pendance client" desc="Un d&eacute;part client et votre chiffre d&apos;affaires s&apos;effondre" />
            <PainCard icon="&#8599;" title="Croissance sans rep&egrave;res" desc="Vous grandissez sans savoir si vos fondations tiennent" />
            <PainCard icon="&#9673;" title="Solitude du dirigeant" desc="Aucun regard ext&eacute;rieur sur vos d&eacute;cisions strat&eacute;giques" />
            <PainCard icon="&#8644;" title="Processus flous" desc="L&apos;organisation repose sur des habitudes, pas sur des syst&egrave;mes" />
            <PainCard icon="&#9678;" title="Acquisition incertaine" desc="Pas de strat&eacute;gie claire pour trouver et fid&eacute;liser vos clients" />
            <PainCard icon="&#8856;" title="D&eacute;l&eacute;gation difficile" desc="Tout repose sur vous, impossible de l&acirc;cher le volant" />
            <PainCard icon="&#9201;" title="Vision court-termiste" desc="L&apos;urgence quotidienne &eacute;crase la r&eacute;flexion strat&eacute;gique" />
          </div>
        </section>
      </div>

      <div className="container"><hr className="divider" /></div>

      {/* CTA MID */}
      <div className="container">
        <section className="cta-section">
          <h2>Votre entreprise m&eacute;rite un regard strat&eacute;gique</h2>
          <p>Ne laissez pas les angles morts d&eacute;cider de votre avenir. Commencez par un diagnostic.</p>
          <a href="#offres" className="btn-cta">Lancer mon diagnostic &rarr;</a>
        </section>
      </div>

      <div className="container"><hr className="divider" /></div>

      {/* 4 ETAPES */}
      <div className="container">
        <section className="section">
          <div className="section-label">Comment &ccedil;a marche</div>
          <h2>4 &eacute;tapes vers la clart&eacute;</h2>
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
                <p>Notre questionnaire couvre 127 questions r&eacute;parties sur 10 domaines strat&eacute;giques. Il a &eacute;t&eacute; con&ccedil;u &agrave; partir des m&eacute;thodologies utilis&eacute;es par les plus grands cabinets de conseil &mdash; audit interne, analyse financi&egrave;re, &eacute;valuation op&eacute;rationnelle, diagnostic de gouvernance &mdash; et adapt&eacute; pour &ecirc;tre compl&eacute;t&eacute; de mani&egrave;re autonome. Prenez votre temps : vous pouvez le remplir en une session ou y revenir sur plusieurs jours. Plus vos r&eacute;ponses seront d&eacute;taill&eacute;es, plus le diagnostic sera pr&eacute;cis.</p>
                <div className="preview-box">
                  <div className="preview-label">Aper&ccedil;u du questionnaire</div>
                  <div className="preview-question">
                    <p>Quelle part de votre CA votre plus gros client repr&eacute;sente-t-il ?</p>
                    <div className="preview-options">
                      <span className="preview-opt">Moins de 10 %</span>
                      <span className="preview-opt selected">Entre 10 % et 20 %</span>
                      <span className="preview-opt">Entre 20 % et 40 %</span>
                      <span className="preview-opt">Plus de 40 %</span>
                    </div>
                  </div>
                  <div className="preview-question">
                    <p>Comment d&eacute;cririez-vous votre niveau de tr&eacute;sorerie actuel ?</p>
                    <div className="preview-options">
                      <span className="preview-opt">Confortable</span>
                      <span className="preview-opt">Suffisant</span>
                      <span className="preview-opt selected">Tendu</span>
                      <span className="preview-opt">Critique</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-content">
                <h3>Recevez votre diagnostic</h3>
                <p>Sous 72 heures, vous recevez un rapport complet d&apos;une vingtaine de pages. Chaque domaine de votre entreprise est &eacute;valu&eacute; et not&eacute;, avec un score global sur 100. Le rapport inclut une analyse de votre march&eacute; et de votre concurrence, une matrice SWOT, une &eacute;valuation des risques, et un plan d&apos;action prioris&eacute; avec des recommandations concr&egrave;tes, des fourchettes budg&eacute;taires et les outils pour les mettre en &oelig;uvre. Un indice de lucidit&eacute; unique mesure l&apos;&eacute;cart entre votre perception de votre entreprise et la r&eacute;alit&eacute; des donn&eacute;es.</p>
                <div className="preview-box">
                  <div className="preview-label">Aper&ccedil;u du rapport</div>
                  <div className="preview-diag-header">
                    <div className="preview-diag-title">Diagnostic ATLAS</div>
                    <span style={{ fontSize: "11px", color: "var(--color-lilas-muted)" }}>Entreprise fictive</span>
                  </div>
                  <div className="preview-signal">
                    <div className="signal-dot red"></div>
                    <div className="signal-name">Concentration client</div>
                    <div className="signal-level">Signal critique</div>
                  </div>
                  <div className="preview-signal">
                    <div className="signal-dot amber"></div>
                    <div className="signal-name">Tr&eacute;sorerie et runway</div>
                    <div className="signal-level">Signal d&apos;alerte</div>
                  </div>
                  <div className="preview-signal">
                    <div className="signal-dot green"></div>
                    <div className="signal-name">Acquisition commerciale</div>
                    <div className="signal-level">Signal sain</div>
                  </div>
                  <div className="blur-overlay">
                    <div className="blur-inner">
                      <div className="preview-signal">
                        <div className="signal-dot amber"></div>
                        <div className="signal-name">D&eacute;l&eacute;gation et processus</div>
                        <div className="signal-level">Signal d&apos;alerte</div>
                      </div>
                      <div className="preview-signal">
                        <div className="signal-dot green"></div>
                        <div className="signal-name">Strat&eacute;gie et gouvernance</div>
                        <div className="signal-level">Signal sain</div>
                      </div>
                    </div>
                    <div className="blur-text">Lancez votre diagnostic pour voir le rapport complet</div>
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

      <div className="container"><hr className="divider" /></div>

      {/* PLATEAU OFFRES */}
      <div className="container">
        <div className="plateau-wrapper" id="offres">
          <div className="plateau">
            <div className="plateau-label">Les offres</div>
            <div className="plateau-title">Choisissez votre niveau de diagnostic</div>
            <div className="offers-grid">
              <div className="offer-card">
                <div className="offer-top offer-top-silver">
                  <div className="offer-name">Herm&egrave;s</div>
                  <div className="offer-price">199 &euro; <span>TTC</span></div>
                </div>
                <div className="offer-bottom">
                  <div className="offer-desc">Un bilan complet et imm&eacute;diat de votre entreprise.</div>
                  <ul className="offer-features">
                    <OfferCheck color="silver">Diagnostic de votre entreprise</OfferCheck>
                    <OfferCheck color="silver">Rapport d&eacute;taill&eacute;</OfferCheck>
                    <OfferCheck color="silver">Recommandations prioris&eacute;es</OfferCheck>
                  </ul>
                  <Link href="/offres/hermes" className="offer-btn">D&eacute;couvrir Herm&egrave;s</Link>
                </div>
              </div>
              <div className="offer-card featured">
                <div className="offer-badge badge-gold">Recommand&eacute;</div>
                <div className="offer-top offer-top-gold">
                  <div className="offer-name">Iris</div>
                  <div className="offer-price">599 &euro; <span>TTC</span></div>
                </div>
                <div className="offer-bottom">
                  <div className="offer-desc">Le diagnostic complet avec orientation et suivi &agrave; 3 mois.</div>
                  <ul className="offer-features">
                    <OfferCheck color="gold">Diagnostic de votre entreprise</OfferCheck>
                    <OfferCheck color="gold">Rapport d&eacute;taill&eacute;</OfferCheck>
                    <OfferCheck color="gold">Recommandations prioris&eacute;es</OfferCheck>
                    <OfferCheck color="gold">Orientation &eacute;cosyst&egrave;me ATLAS</OfferCheck>
                    <OfferCheck color="gold">Diagnostic de suivi &agrave; 3 mois</OfferCheck>
                    <OfferCheck color="gold">Recommandations prioris&eacute;es &agrave; 3 mois</OfferCheck>
                  </ul>
                  <Link href="/offres/iris" className="offer-btn">D&eacute;couvrir Iris</Link>
                </div>
              </div>
              <div className="offer-card premium">
                <div className="offer-badge badge-premium"><span style={{ fontSize: "12px" }}>&#128081;</span> Premium</div>
                <div className="offer-top offer-top-purple">
                  <div className="offer-name">Ath&eacute;na</div>
                  <div className="offer-price">1 199 &euro; <span>TTC</span></div>
                </div>
                <div className="offer-bottom">
                  <div className="offer-desc">L&apos;accompagnement complet sur 7 mois.</div>
                  <ul className="offer-features">
                    <OfferCheck color="purple">Dossier prioritaire</OfferCheck>
                    <OfferCheck color="purple">Diagnostic de votre entreprise</OfferCheck>
                    <OfferCheck color="purple">Rapport d&eacute;taill&eacute;</OfferCheck>
                    <OfferCheck color="purple">Recommandations prioris&eacute;es</OfferCheck>
                    <OfferCheck color="purple">Orientation &eacute;cosyst&egrave;me ATLAS</OfferCheck>
                    <OfferCheck color="purple">Suivi &agrave; 1 mois + recommandations</OfferCheck>
                    <OfferCheck color="purple">Suivi &agrave; 3 mois + bilan d&apos;&eacute;volution</OfferCheck>
                    <OfferCheck color="purple">Suivi &agrave; 5 mois + recommandations</OfferCheck>
                    <OfferCheck color="purple">Suivi &agrave; 7 mois + bilan de fin de parcours</OfferCheck>
                  </ul>
                  <Link href="/offres/athena" className="offer-btn">D&eacute;couvrir Ath&eacute;na</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container"><hr className="divider" /></div>

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
