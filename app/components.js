import Link from "next/link";

export function Nav() {
  return (
    <div className="container">
      <nav className="nav">
        <div>
          <Link href="/" className="nav-logo">ATLAS</Link>
          <div className="nav-tagline">Laissez-nous porter votre monde sur nos épaules</div>
        </div>
        <div className="nav-links">
        <Link href="/offres" className="nav-link">Offres</Link>
          <Link href="/articles" className="nav-link">Articles</Link>
          <Link href="/a-propos" className="nav-link">À propos</Link>
          <Link href="#offres" className="nav-cta">Diagnostiquer mon entreprise</Link>
        </div>
      </nav>
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
          <Link href="/a-propos">À propos</Link>
        </div>
      </footer>
    </div>
  );
}

export function OfferCheck({ color, children }) {
  return (
    <li>
      <span className={`offer-check check-${color}`}>&hearts;</span>
      {children}
    </li>
  );
}

export function PageHeader({ label, title, intro }) {
  return (
    <div className="container">
      <section className="page-header">
        {label && <div className="section-label">{label}</div>}
        <h1>{title}</h1>
        {intro && <p className="section-intro">{intro}</p>}
      </section>
    </div>
  );
}

