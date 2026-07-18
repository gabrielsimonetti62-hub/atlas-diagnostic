import Link from "next/link";

export function Nav() {
  return (
    <div className="nav-wrapper">
      <div className="container">
        <nav className="nav">
          <div>
            <Link href="/" className="nav-logo">ATLAS</Link>
            <div className="nav-tagline">Laissez-nous porter votre monde sur nos &eacute;paules</div>
          </div>
          <div className="nav-links">
            <div className="nav-drop">
              <Link href="/offres" className="nav-link">Offres</Link>
              <div className="nav-drop-menu">
                <Link href="/offres/hermes" className="nav-drop-item">Herm&egrave;s <span>Le diagnostic complet &middot; 199 &euro;</span></Link>
                <Link href="/offres/iris" className="nav-drop-item">Iris <span>Diagnostic + suivi 3 mois &middot; 599 &euro;</span></Link>
                <Link href="/offres/athena" className="nav-drop-item">Ath&eacute;na <span>Accompagnement 7 mois &middot; 1 199 &euro;</span></Link>
              </div>
            </div>
            <Link href="/articles" className="nav-link">Articles</Link>
            <Link href="/a-propos" className="nav-link">&Agrave; propos</Link>
            <Link href="/#offres" className="nav-cta">Diagnostiquer mon entreprise</Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <div className="container">
      <footer className="footer">
        <div className="footer-left">ATLAS &middot; Conseil en strat&eacute;gie et diagnostic d&apos;entreprise</div>
        <div className="footer-links">
          <Link href="/mentions-legales">Mentions l&eacute;gales</Link>
          <Link href="/cgv">CGV</Link>
          <Link href="/confidentialite">Confidentialit&eacute;</Link>
          <Link href="/articles">Articles</Link>
          <Link href="/a-propos">&Agrave; propos</Link>
        </div>
      </footer>
    </div>
  );
}

export function GoldSep() {
  return (
    <div className="gold-sep" role="separator">
      <span className="losange"></span>
    </div>
  );
}

export function OfferCheck({ color, children }) {
  return (
    <li>
      <span className={`offer-check check-${color}`}>&#10003;</span>
      {children}
    </li>
  );
}

/* Boutons "Decouvrir" â hauts de cartes colores.
   exclude: "hermes" | "iris" | "athena" pour masquer une offre. */
export function DiscoverRow({ exclude }) {
  return (
    <div className="discover-row">
      {exclude !== "hermes" && (
        <Link href="/offres/hermes" className="btn-discover btn-discover-silver">
          <span className="d-label">D&eacute;couvrir</span>
          <span className="d-name">Herm&egrave;s</span>
        </Link>
      )}
      {exclude !== "iris" && (
        <Link href="/offres/iris" className="btn-discover btn-discover-gold">
          <span className="d-label">D&eacute;couvrir</span>
          <span className="d-name">Iris</span>
        </Link>
      )}
      {exclude !== "athena" && (
        <Link href="/offres/athena" className="btn-discover btn-discover-purple">
          <span className="d-label">D&eacute;couvrir</span>
          <span className="d-name">Ath&eacute;na</span>
        </Link>
      )}
    </div>
  );
}

/* Carte offre complete. Le bouton "Souscrire" renvoie vers la souscription. */
export function OfferCard({ offre }) {
  if (offre === "hermes") {
    return (
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
          <Link href="/souscription#hermes" className="offer-btn">Souscrire &agrave; Herm&egrave;s</Link>
        </div>
      </div>
    );
  }
  if (offre === "iris") {
    return (
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
          <Link href="/souscription#iris" className="offer-btn">Souscrire &agrave; Iris</Link>
        </div>
      </div>
    );
  }
  return (
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
        <Link href="/souscription#athena" className="offer-btn">Souscrire &agrave; Ath&eacute;na</Link>
      </div>
    </div>
  );
}

/* Les trois cartes sur leur plateau parchemin */
export function OffersPlateau({ label, title }) {
  return (
    <div className="plateau">
      {label && <div className="plateau-label">{label}</div>}
      {title && <div className="plateau-title">{title}</div>}
      <div className="offers-grid">
        <OfferCard offre="hermes" />
        <OfferCard offre="iris" />
        <OfferCard offre="athena" />
      </div>
    </div>
  );
}

/* Bas de page offre : boutons Decouvrir des 2 autres offres + carte de l'offre courante */
export function OfferPageBottom({ current }) {
  return (
    <div className="offer-bottom-section">
      <GoldSep />
      <div className="offer-bottom-label">Explorer aussi</div>
      <div className="offer-bottom-title">Les autres formules ATLAS</div>
      <DiscoverRow exclude={current} />
      <div className="offer-bottom-label" style={{ marginTop: "56px" }}>Votre formule</div>
      <div className="plateau" style={{ maxWidth: "420px", margin: "0 auto", padding: "32px 24px 28px" }}>
        <div className="offers-grid" style={{ gridTemplateColumns: "1fr" }}>
          <OfferCard offre={current} />
        </div>
      </div>
    </div>
  );
}

export function ConversionBanner({ title, text, stat }) {
  return (
    <div className="conversion-banner">
      <h3>{title}</h3>
      <p>{text}</p>
      <Link href="/#offres" className="btn-cta">Diagnostiquer mon entreprise &rarr;</Link>
      {stat && <div className="conversion-stat">{stat}</div>}
    </div>
  );
}

/* Gabarit d'article : en-tete violet centre, image, corps creme */
export function ArticleShell({ label, title, image, imageAlt, children }) {
  return (
    <>
      <Nav />
      <div className="container">
        <section className="article-header">
          <div className="section-label">{label}</div>
          <h1>{title}</h1>
        </section>
      </div>
      <div className="container">
        {image && (
          <div className="article-hero-img">
            <img src={image} alt={imageAlt || title} />
          </div>
        )}
        <div className="article-body-cream on-cream">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}
