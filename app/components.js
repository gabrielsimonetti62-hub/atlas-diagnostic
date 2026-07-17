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
            <Link href="/offres" className="nav-link">Offres</Link>
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

export function OfferCheck({ color, children }) {
  return (
    <li>
      <span className={`offer-check check-${color}`}>&#10003;</span>
      {children}
    </li>
  );
}

export function OfferPlateauBottom() {
  return (
    <div className="offer-bottom-section">
      <div className="offer-bottom-label">D&eacute;couvrez &eacute;galement</div>
      <div className="offer-bottom-title">Nos autres formules</div>
      <div className="plateau" style={{ maxWidth: "100%" }}>
        <div className="offers-grid">
          <div className="offer-card">
            <div className="offer-top offer-top-silver">
              <div className="offer-name">Herm&egrave;s</div>
              <div className="offer-price">199 &euro; <span>TTC</span></div>
            </div>
            <div className="offer-bottom">
              <div className="offer-desc">Un bilan complet et imm&eacute;diat.</div>
              <ul className="offer-features">
                <OfferCheck color="silver">Diagnostic de votre entreprise</OfferCheck>
                <OfferCheck color="silver">Rapport d&eacute;taill&eacute;</OfferCheck>
                <OfferCheck color="silver">Recommandations prioris&eacute;es</OfferCheck>
              </ul>
              <button className="offer-btn">Souscrire &agrave; Herm&egrave;s</button>
            </div>
          </div>
          <div className="offer-card featured">
            <div className="offer-badge badge-gold">Recommand&eacute;</div>
            <div className="offer-top offer-top-gold">
              <div className="offer-name">Iris</div>
              <div className="offer-price">599 &euro; <span>TTC</span></div>
            </div>
            <div className="offer-bottom">
              <div className="offer-desc">Diagnostic + orientation + suivi &agrave; 3 mois.</div>
              <ul className="offer-features">
                <OfferCheck color="gold">Diagnostic de votre entreprise</OfferCheck>
                <OfferCheck color="gold">Rapport d&eacute;taill&eacute;</OfferCheck>
                <OfferCheck color="gold">Recommandations prioris&eacute;es</OfferCheck>
                <OfferCheck color="gold">Orientation &eacute;cosyst&egrave;me ATLAS</OfferCheck>
                <OfferCheck color="gold">Suivi &agrave; 3 mois + recommandations</OfferCheck>
              </ul>
              <button className="offer-btn">Souscrire &agrave; Iris</button>
            </div>
          </div>
          <div className="offer-card premium">
            <div className="offer-badge badge-premium"><span style={{ fontSize: "12px" }}>&#128081;</span> Premium</div>
            <div className="offer-top offer-top-purple">
              <div className="offer-name">Ath&eacute;na</div>
              <div className="offer-price">1 199 &euro; <span>TTC</span></div>
            </div>
            <div className="offer-bottom">
              <div className="offer-desc">Accompagnement complet sur 7 mois.</div>
              <ul className="offer-features">
                <OfferCheck color="purple">Dossier prioritaire</OfferCheck>
                <OfferCheck color="purple">Diagnostic de votre entreprise</OfferCheck>
                <OfferCheck color="purple">Rapport d&eacute;taill&eacute;</OfferCheck>
                <OfferCheck color="purple">Recommandations prioris&eacute;es</OfferCheck>
                <OfferCheck color="purple">Orientation &eacute;cosyst&egrave;me ATLAS</OfferCheck>
                <OfferCheck color="purple">Suivi &agrave; 1, 3, 5, 7 mois</OfferCheck>
              </ul>
              <button className="offer-btn">Souscrire &agrave; Ath&eacute;na</button>
            </div>
          </div>
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
