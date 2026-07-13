export default function Home() {
  return (
    <>
      {/* NAV */}
      <div className="container">
        <nav className="nav">
          <div>
            <div className="nav-logo">ATLAS</div>
            <div className="nav-tagline">Laissez-nous porter votre monde sur nos épaules</div>
          </div>
          <a href="#offres" className="nav-cta">Diagnostiquer mon entreprise</a>
        </nav>
      </div>

      {/* HERO */}
      <div className="container">
        <section className="hero">
          <div className="hero-eyebrow">Diagnostic stratégique pour TPE et PME</div>
          <h1>Votre entreprise a des failles. Vous ne les voyez pas encore.</h1>
          <p>ATLAS détecte en 9 domaines ce qui freine votre croissance, menace votre trésorerie ou fragilise votre organisation. Le diagnostic d&apos;un cabinet, au prix d&apos;un indépendant.</p>
          <a href="#offres" className="btn-cta">Lancer mon diagnostic →</a>
          <div className="hero-sub">À partir de 199 € · Résultats sous 72h</div>
        </section>
      </div>

      <div className="container"><hr className="divider" /></div>

      {/* LE CONSTAT */}
      <div className="container">
        <section className="section">
          <div className="section-label">Le constat</div>
          <h2>Les angles morts qui fragilisent les TPE et PME</h2>
          <p className="section-intro">80 % des défaillances d&apos;entreprise auraient pu être anticipées. Mais sans regard extérieur, les signaux faibles passent inaperçus jusqu&apos;à devenir des urgences.</p>
          <div className="pain-grid">
            <PainCard icon="⬇" title="Trésorerie sous tension" desc="Vous gérez au jour le jour sans voir les causes structurelles" />
            <PainCard icon="⚠" title="Dépendance client" desc="Un départ client et votre chiffre d'affaires s'effondre" />
            <PainCard icon="↗" title="Croissance sans repères" desc="Vous grandissez sans savoir si vos fondations tiennent" />
            <PainCard icon="◉" title="Solitude du dirigeant" desc="Aucun regard extérieur sur vos décisions stratégiques" />
            <PainCard icon="⇄" title="Processus flous" desc="L'organisation repose sur des habitudes, pas sur des systèmes" />
            <PainCard icon="◎" title="Acquisition incertaine" desc="Pas de stratégie claire pour trouver et fidéliser vos clients" />
            <PainCard icon="⊘" title="Délégation difficile" desc="Tout repose sur vous, impossible de lâcher le volant" />
            <PainCard icon="⏱" title="Vision court-termiste" desc="L'urgence quotidienne écrase la réflexion stratégique" />
          </div>
        </section>
      </div>

      <div className="container"><hr className="divider" /></div>

      {/* COMMENT CA MARCHE */}
      <div className="container">
        <section className="section">
          <div className="section-label">Comment ça marche</div>
          <h2>4 étapes vers la clarté</h2>
          <div className="steps-list">
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-content">
                <h3>Choisissez votre formule</h3>
                <p>Sélectionnez l&apos;offre adaptée à votre besoin et réglez en ligne. Vous pourrez évoluer vers une formule supérieure à tout moment si vous souhaitez un accompagnement plus complet.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-content">
                <h3>Remplissez le questionnaire</h3>
                <p>Un questionnaire structuré couvrant 9 domaines clés de votre entreprise. 30 à 45 minutes.</p>
                <div className="preview-box">
                  <div className="preview-label">Aperçu du questionnaire</div>
                  <div className="preview-question">
                    <p>Quelle part de votre CA votre plus gros client représente-t-il ?</p>
                    <div className="preview-options">
                      <span className="preview-opt">Moins de 10 %</span>
                      <span className="preview-opt selected">Entre 10 % et 20 %</span>
                      <span className="preview-opt">Entre 20 % et 40 %</span>
                      <span className="preview-opt">Plus de 40 %</span>
                    </div>
                  </div>
                  <div className="preview-question">
                    <p>Comment décririez-vous votre niveau de trésorerie actuel ?</p>
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
                <p>Votre rapport détaillé avec les signaux détectés et les recommandations priorisées, sous 72h.</p>
                <div className="preview-box">
                  <div className="preview-label">Aperçu du rapport</div>
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
                    <div className="signal-name">Trésorerie et runway</div>
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
                        <div className="signal-name">Délégation et processus</div>
                        <div className="signal-level">Signal d&apos;alerte</div>
                      </div>
                      <div className="preview-signal">
                        <div className="signal-dot green"></div>
                        <div className="signal-name">Stratégie et gouvernance</div>
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
                <h3>Passez à l&apos;action</h3>
                <p>Appliquez les recommandations. Avec Iris et Athéna, on mesure vos progrès dans le temps.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container"><hr className="divider" /></div>

      {/* CTA MID */}
      <div className="container">
        <section className="cta-section">
          <h2>Votre entreprise mérite un regard stratégique</h2>
          <p>Ne laissez pas les angles morts décider de votre avenir. Commencez par un diagnostic.</p>
          <a href="#offres" className="btn-cta">Lancer mon diagnostic →</a>
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
              {/* HERMES */}
              <div className="offer-card">
                <div className="offer-top offer-top-silver">
                  <div className="offer-name">Hermès</div>
                  <div className="offer-price">199 € <span>TTC</span></div>
                </div>
                <div className="offer-bottom">
                  <div className="offer-desc">Un bilan complet et immédiat de votre entreprise.</div>
                  <ul className="offer-features">
                    <OfferCheck color="silver">Diagnostic de votre entreprise</OfferCheck>
                    <OfferCheck color="silver">Rapport détaillé</OfferCheck>
                    <OfferCheck color="silver">Recommandations priorisées</OfferCheck>
                  </ul>
                  <button className="offer-btn">Choisir Hermès</button>
                </div>
              </div>

              {/* IRIS */}
              <div className="offer-card featured">
                <div className="offer-badge badge-gold">Recommandé</div>
                <div className="offer-top offer-top-gold">
                  <div className="offer-name">Iris</div>
                  <div className="offer-price">599 € <span>TTC</span></div>
                </div>
                <div className="offer-bottom">
                  <div className="offer-desc">Le diagnostic complet avec orientation et suivi à 3 mois.</div>
                  <ul className="offer-features">
                    <OfferCheck color="gold">Diagnostic de votre entreprise</OfferCheck>
                    <OfferCheck color="gold">Rapport détaillé</OfferCheck>
                    <OfferCheck color="gold">Recommandations priorisées</OfferCheck>
                    <OfferCheck color="gold">Orientation écosystème ATLAS</OfferCheck>
                    <OfferCheck color="gold">Diagnostic de suivi à 3 mois</OfferCheck>
                    <OfferCheck color="gold">Recommandations priorisées à 3 mois</OfferCheck>
                  </ul>
                  <button className="offer-btn">Choisir Iris</button>
                </div>
              </div>

              {/* ATHENA */}
              <div className="offer-card premium">
                <div className="offer-badge badge-premium"><span style={{ fontSize: "12px" }}>👑</span> Premium</div>
                <div className="offer-top offer-top-purple">
                  <div className="offer-name">Athéna</div>
                  <div className="offer-price">1 199 € <span>TTC</span></div>
                </div>
                <div className="offer-bottom">
                  <div className="offer-desc">L&apos;accompagnement complet sur 7 mois.</div>
                  <ul className="offer-features">
                    <OfferCheck color="purple">Dossier prioritaire</OfferCheck>
                    <OfferCheck color="purple">Diagnostic de votre entreprise</OfferCheck>
                    <OfferCheck color="purple">Rapport détaillé</OfferCheck>
                    <OfferCheck color="purple">Recommandations priorisées</OfferCheck>
                    <OfferCheck color="purple">Orientation écosystème ATLAS</OfferCheck>
                    <OfferCheck color="purple">Suivi à 1 mois + recommandations</OfferCheck>
                    <OfferCheck color="purple">Suivi à 3 mois + bilan d&apos;évolution</OfferCheck>
                    <OfferCheck color="purple">Suivi à 5 mois + recommandations</OfferCheck>
                    <OfferCheck color="purple">Suivi à 7 mois + bilan de fin de parcours</OfferCheck>
                  </ul>
                  <button className="offer-btn">Choisir Athéna</button>
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
          <p>ATLAS est né d&apos;une conviction : les TPE et PME méritent le même niveau d&apos;analyse stratégique que les grandes entreprises, sans en payer le prix.</p>
          <p>Notre mission est de bâtir un écosystème d&apos;accompagnement et d&apos;entraide où chaque dirigeant peut identifier ses fragilités, s&apos;appuyer sur les bons experts, mesurer sa progression dans le temps et collaborer avec les autres membres de cet écosystème pour grandir ensemble.</p>
          <p>Ce diagnostic est la première étape d&apos;un projet à ambition globale — une analyse rigoureuse, construite sur les méthodologies des plus grands cabinets de conseil, rendue accessible à ceux qui en ont le plus besoin.</p>
          <div className="closing-devise"><strong>ATLAS</strong> — Laissez-nous porter votre monde sur nos épaules.</div>
        </section>
      </div>

      {/* FOOTER */}
      <div className="container">
        <footer className="footer">
          <div className="footer-left">ATLAS · Conseil en stratégie et diagnostic d&apos;entreprise · SIRET en cours</div>
          <div className="footer-links">
            <a href="#">Mentions légales</a>
            <a href="#">CGV</a>
            <a href="#">Contact</a>
          </div>
        </footer>
      </div>
    </>
  );
}

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
      <span className={`offer-check check-${color}`}>✓</span>
      {children}
    </li>
  );
}

