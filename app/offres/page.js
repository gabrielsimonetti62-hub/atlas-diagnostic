import Link from "next/link";
import { Nav, Footer } from "../components";

export const metadata = {
  title: "Nos offres — Diagnostic stratégique pour TPE et PME | ATLAS",
  description: "Trois niveaux d'accompagnement : Hermès (199€), Iris (599€) et Athéna (1199€).",
};

function OfferCheck({ color, children }) {
  return (
    <li>
      <span className={`offer-check check-${color}`}>&#10003;</span>
      {children}
    </li>
  );
}

export default function Offres() {
  return (
    <>
      <Nav />
      <div className="container">
        <section className="page-header">
          <div className="section-label">Les offres</div>
          <h1>Choisissez votre niveau de diagnostic</h1>
          <p className="section-intro">Trois formules adapt&eacute;es &agrave; chaque besoin. &Eacute;voluez vers un niveau sup&eacute;rieur &agrave; tout moment.</p>
        </section>
      </div>
      <div className="container">
        <div className="plateau-wrapper">
          <div className="plateau">
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
                  <div className="offer-desc">Diagnostic + orientation + suivi &agrave; 3 mois.</div>
                  <ul className="offer-features">
                    <OfferCheck color="gold">Diagnostic de votre entreprise</OfferCheck>
                    <OfferCheck color="gold">Rapport d&eacute;taill&eacute;</OfferCheck>
                    <OfferCheck color="gold">Recommandations prioris&eacute;es</OfferCheck>
                    <OfferCheck color="gold">Orientation &eacute;cosyst&egrave;me ATLAS</OfferCheck>
                    <OfferCheck color="gold">Suivi &agrave; 3 mois</OfferCheck>
                    <OfferCheck color="gold">Recommandations &agrave; 3 mois</OfferCheck>
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
                  <div className="offer-desc">Accompagnement complet sur 7 mois.</div>
                  <ul className="offer-features">
                    <OfferCheck color="purple">Dossier prioritaire</OfferCheck>
                    <OfferCheck color="purple">Diagnostic de votre entreprise</OfferCheck>
                    <OfferCheck color="purple">Rapport d&eacute;taill&eacute;</OfferCheck>
                    <OfferCheck color="purple">Recommandations prioris&eacute;es</OfferCheck>
                    <OfferCheck color="purple">Orientation &eacute;cosyst&egrave;me ATLAS</OfferCheck>
                    <OfferCheck color="purple">Suivi 1, 3, 5, 7 mois</OfferCheck>
                  </ul>
                  <Link href="/offres/athena" className="offer-btn">D&eacute;couvrir Ath&eacute;na</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
