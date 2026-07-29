import Link from "next/link";
import { CookieBanner } from "./cookie-banner";

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
                <Link href="/offres/hermes" className="nav-drop-item">Herm&egrave;s <span>Le diagnostic complet &middot; 249 &euro;</span></Link>
                <Link href="/offres/iris" className="nav-drop-item">Iris <span>Diagnostic et suivi &agrave; 3 mois &middot; 599 &euro;</span></Link>
                <Link href="/offres/athena" className="nav-drop-item">Ath&eacute;na <span>Accompagnement 7 mois &middot; 1 299 &euro;</span></Link>
              </div>
            </div>
            <div className="nav-drop">
              <Link href="/a-propos" className="nav-link">&Agrave; propos</Link>
              <div className="nav-drop-menu">
                <Link href="/methode" className="nav-drop-item">Notre m&eacute;thode <span>Comment ATLAS analyse votre entreprise</span></Link>
                <Link href="/a-propos" className="nav-drop-item">Qui sommes-nous <span>Mission, ambition et &eacute;quipe</span></Link>
              </div>
            </div>
            <Link href="/articles" className="nav-link">Articles</Link>
            <Link href="/#offres" className="nav-cta">Diagnostiquer mon entreprise</Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <>
      <div className="container">
        <footer className="footer">
          <div className="footer-col">
            <h4>ATLAS</h4>
            <p className="footer-mission">ATLAS applique aux TPE et PME les m&eacute;thodologies du conseil strat&eacute;gique de haut niveau.</p>
            <div className="footer-legal">
              <p>Micro-entreprise, article 293 B du CGI.</p>
              <p>SIREN : 107 508 905 &middot; APE 7022Z.</p>
              <p>TVA non applicable, article 293 B du CGI.</p>
            </div>
          </div>
          <div className="footer-col footer-links-col">
            <h4>Navigation</h4>
            <Link href="/offres">Nos offres</Link>
            <Link href="/methode">Notre m&eacute;thode</Link>
            <Link href="/a-propos">Qui sommes-nous</Link>
            <Link href="/articles">Articles</Link>
          </div>
          <div className="footer-col footer-contact-col">
            <h4>Contact et l&eacute;gal</h4>
            <a href="mailto:contact@atlas-diagnostic.fr">contact@atlas-diagnostic.fr</a>
            <Link href="/mentions-legales">Mentions l&eacute;gales</Link>
            <Link href="/cgv">Conditions g&eacute;n&eacute;rales</Link>
            <Link href="/confidentialite">Confidentialit&eacute;</Link>
          </div>
          <div className="footer-copy">
            &copy; 2026 ATLAS. Tous droits r&eacute;serv&eacute;s.
          </div>
        </footer>
      </div>
      <CookieBanner />
    </>
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

/* Boutons Decouvrir : hauts de cartes. exclude masque une offre. */
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

/* Carte offre. Bouton Souscrire vers la souscription. */
export function OfferCard({ offre }) {
  if (offre === "hermes") {
    return (
      <div className="offer-card">
        <div className="offer-top offer-top-silver">
          <div className="offer-name">Herm&egrave;s</div>
          <div className="offer-price">249 &euro; <span>TTC</span></div>
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
        <div className="offer-price">1 299 &euro; <span>TTC</span></div>
      </div>
      <div className="offer-bottom">
        <div className="offer-desc">L&apos;accompagnement complet sur 7 mois.</div>
        <ul className="offer-features">
          <OfferCheck color="purple">Dossier prioritaire</OfferCheck>
          <OfferCheck color="purple">Diagnostic de votre entreprise</OfferCheck>
          <OfferCheck color="purple">Rapport d&eacute;taill&eacute;</OfferCheck>
          <OfferCheck color="purple">Recommandations prioris&eacute;es</OfferCheck>
          <OfferCheck color="purple">Orientation &eacute;cosyst&egrave;me ATLAS</OfferCheck>
          <OfferCheck color="purple">Suivi &agrave; 1 mois et recommandations</OfferCheck>
          <OfferCheck color="purple">Suivi &agrave; 3 mois et bilan d&apos;&eacute;volution</OfferCheck>
          <OfferCheck color="purple">Suivi &agrave; 5 mois et recommandations</OfferCheck>
          <OfferCheck color="purple">Suivi &agrave; 7 mois et bilan de fin de parcours</OfferCheck>
        </ul>
        <Link href="/souscription#athena" className="offer-btn">Souscrire &agrave; Ath&eacute;na</Link>
      </div>
    </div>
  );
}

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

/* Liens croises entre articles */
export function ArticleRelated({ items }) {
  return (
    <div className="article-related">
      <div className="article-related-label">&Agrave; lire &eacute;galement</div>
      <div className="article-related-grid">
        {items.map((it, i) => (
          <Link key={i} href={it.href} className="article-related-item">
            <div className="rel-label">{it.label}</div>
            <div className="rel-title">{it.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* Gabarit article */
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

/* Bande marbre pour pages offres */
export function MarbleBand({ offre }) {
  return <div className={`marble-band marble-band-${offre}`} aria-hidden="true"></div>;
}

/* Angle mort en cercle alterne */
export function AngleMort({ num, image, imageAlt, title, children }) {
  return (
    <div className="angle-mort">
      <div className="angle-img">
        <img src={image} alt={imageAlt} />
      </div>
      <div className="angle-text">
        <div className="angle-num">0{num}</div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
}

/* Trois portes d'entree */
export function Portes() {
  return (
    <div className="portes">
      <Link href="/methode" className="porte">
        <div className="porte-num">01</div>
        <div className="porte-title">Notre m&eacute;thode</div>
        <div className="porte-desc">La rigueur d&apos;une analyse construite sur les m&eacute;thodologies &eacute;prouv&eacute;es des cabinets de r&eacute;f&eacute;rence.</div>
        <span className="porte-arrow">D&eacute;couvrir &rarr;</span>
      </Link>
      <Link href="/offres" className="porte">
        <div className="porte-num">02</div>
        <div className="porte-title">Nos offres</div>
        <div className="porte-desc">Trois niveaux d&apos;accompagnement adapt&eacute;s &agrave; chaque situation, du diagnostic au suivi &eacute;chelonn&eacute; sur sept mois.</div>
        <span className="porte-arrow">Consulter &rarr;</span>
      </Link>
      <Link href="/a-propos" className="porte">
        <div className="porte-num">03</div>
        <div className="porte-title">Qui sommes-nous</div>
        <div className="porte-desc">La mission, l&apos;ambition et l&apos;&eacute;quipe derri&egrave;re ATLAS.</div>
        <span className="porte-arrow">En savoir plus &rarr;</span>
      </Link>
    </div>
  );
}
