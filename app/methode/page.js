import Link from "next/link";
import { Nav, Footer, GoldSep, OffersPlateau } from "../components";

export const metadata = {
  title: "Notre méthode : comment ATLAS analyse votre entreprise",
  description: "La rigueur d'un cabinet de conseil, la clarté d'un regard de terrain. Découvrez les principes qui guident chaque diagnostic ATLAS.",
};

export default function Methode() {
  return (
    <>
      <Nav />

      <div className="container">
        <section className="page-header">
          <div className="section-label">Notre méthode</div>
          <h1>Notre méthode</h1>
          <p className="section-intro">Le sérieux d'un cabinet, la clarté d'un conseil de terrain.</p>
        </section>
      </div>

      {/* INTRO */}
      <div className="container-narrow">
        <section style={{ padding: "0 0 40px", textAlign: "center" }}>
          <p style={{ fontSize: "17px", color: "var(--color-lilas)", lineHeight: "1.85", marginBottom: "16px" }}>
            Chaque diagnostic ATLAS repose sur une méthodologie structurée, construite à partir des approches éprouvées par les cabinets de conseil de référence et adaptée aux réalités des TPE et PME françaises.
          </p>
          <p style={{ fontSize: "17px", color: "var(--color-lilas)", lineHeight: "1.85" }}>
            Nous refusons les raccourcis, les grilles génériques et les modèles recyclés. Chaque entreprise reçoit une analyse pensée pour elle, adossée à une lecture actualisée de son secteur et de son environnement concurrentiel.
          </p>
        </section>
      </div>

      <div className="container"><GoldSep /></div>

      {/* LES 4 ETAPES */}
      <div className="container">
        <section className="section">
          <div className="section-label" style={{ textAlign: "center" }}>Le déroulement</div>
          <h2 style={{ textAlign: "center" }}>Quatre étapes vers la clarté</h2>
          <div className="steps-list">
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-content">
                <h3>Choisir votre formule</h3>
                <p>ATLAS propose trois niveaux d'accompagnement adaptés à chaque situation. <Link href="/offres/hermes" className="text-link">Hermès</Link> pour un diagnostic complet immédiat. <Link href="/offres/iris" className="text-link">Iris</Link> pour aller plus loin avec une orientation vers des experts et un suivi à trois mois. <Link href="/offres/athena" className="text-link">Athéna</Link> pour un accompagnement structuré sur sept mois avec des bilans d'évolution réguliers. Quelle que soit la formule choisie, une évolution vers un niveau supérieur reste possible à tout moment.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-content">
                <h3>Remplir le questionnaire</h3>
                <p>Le questionnaire ATLAS a été conçu pour être complété de manière autonome, en une session ou sur plusieurs jours. Il combine des questions de perception et des questions factuelles, dans un ordre pensé pour révéler les écarts entre la lecture que vous avez de votre entreprise et la réalité de ses données.</p>
                <div className="doc-paper">
                  <div className="doc-paper-label">Extrait réel · Questionnaire ATLAS</div>
                  <div className="doc-paper-title">Partie B, Domaine 3 : Finances et solvabilité</div>
                  <div className="doc-q">
                    <div className="doc-q-num">Question 38</div>
                    <p>Comment percevez-vous la solidité financière de votre entreprise aujourd'hui ?</p>
                    <div className="doc-options">
                      <span className="doc-opt">Très solide</span>
                      <span className="doc-opt selected">Plutôt solide</span>
                      <span className="doc-opt">Fragile</span>
                      <span className="doc-opt">Très fragile</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-content">
                <h3>Recevoir votre diagnostic</h3>
                <p>À partir de 72 heures après la validation de vos réponses, vous recevez un rapport complet de 24 à 40 pages. Chaque domaine de votre entreprise est noté individuellement, un score global sur 100 est calculé, et un indice de lucidité propre à la méthodologie ATLAS mesure l'écart entre votre perception et les données.</p>
                <div className="doc-paper">
                  <div className="doc-paper-label">Extrait réel · Rapport ATLAS</div>
                  <div className="doc-paper-title">Chapitre 2 : Synthèse exécutive</div>
                  <div className="doc-global">
                    <div className="doc-global-label">Score global</div>
                    <div className="doc-global-score">61 <span>/ 100</span></div>
                  </div>
                  <div className="blur-overlay">
                    <div className="blur-inner">
                      <div className="doc-score-row">
                        <div className="doc-score-name">D1 · Marché et demande réelle</div>
                        <div className="doc-score-bar"><div className="doc-score-fill fill-green" style={{ width: "70%" }}></div></div>
                        <div className="doc-score-val">7/10</div>
                      </div>
                      <div className="doc-score-row">
                        <div className="doc-score-name">D3 · Finances et solvabilité</div>
                        <div className="doc-score-bar"><div className="doc-score-fill fill-amber" style={{ width: "50%" }}></div></div>
                        <div className="doc-score-val">5/10</div>
                      </div>
                    </div>
                    <div className="blur-text">Rapport complet livré après souscription</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="step">
              <div className="step-num">4</div>
              <div className="step-content">
                <h3>Passer à l'action</h3>
                <p>Avec l'offre Hermès, un plan d'action priorisé est directement exploitable. Avec Iris, une orientation vers l'écosystème d'experts ATLAS et un bilan de suivi à trois mois complètent l'accompagnement. Avec Athéna, un parcours structuré sur sept mois avec quatre points de suivi permet de transformer durablement l'entreprise.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container"><GoldSep /></div>

      {/* NOS GARANTIES METHODOLOGIQUES */}
      <div className="container">
        <section className="section">
          <div className="section-label" style={{ textAlign: "center" }}>Nos garanties</div>
          <h2 style={{ textAlign: "center" }}>Les principes qui guident chaque diagnostic</h2>
          <p style={{ textAlign: "center", maxWidth: "620px", margin: "0 auto 8px" }}>Ces principes ne sont pas une liste de bonnes intentions. Ce sont les engagements méthodologiques auxquels chaque rapport ATLAS est tenu.</p>

          <div className="methode-principes">
            <div className="principe-item">
              <h4>Croisement systématique avec la réalité sectorielle</h4>
              <p>Chaque analyse est enrichie par une recherche sectorielle actualisée à la date du rapport. Aucune conclusion n'est tirée sans confrontation avec les ordres de grandeur observés sur votre marché.</p>
            </div>
            <div className="principe-item">
              <h4>Justification chiffrée de chaque score</h4>
              <p>Chaque note attribuée à un domaine stratégique s'appuie sur vos réponses et sur les données externes qui les qualifient. Aucun score n'est fondé sur une impression.</p>
            </div>
            <div className="principe-item">
              <h4>Recommandations chiffrées et calendarisées</h4>
              <p>Chaque action recommandée est accompagnée d'une fourchette budgétaire, d'un délai indicatif et d'un ordre de priorité. Le rapport ne se contente jamais d'identifier un problème : il en propose la résolution opérationnelle.</p>
            </div>
            <div className="principe-item">
              <h4>Distinction entre perception et réalité</h4>
              <p>L'indice de lucidité, propre à la méthodologie ATLAS, mesure l'écart entre la façon dont vous percevez votre entreprise et la réalité que révèlent ses données. Cet indicateur transforme la manière dont vous prendrez vos décisions.</p>
            </div>
            <div className="principe-item">
              <h4>Actualisation continue de la lecture externe</h4>
              <p>Les analyses concurrentielles, sectorielles et réglementaires sont produites à la date du rapport, jamais recyclées depuis des travaux antérieurs. Chaque diagnostic reçoit sa lecture propre.</p>
            </div>
            <div className="principe-item">
              <h4>Indépendance et absence de conflit d'intérêts</h4>
              <p>ATLAS ne perçoit aucune commission des experts, prestataires ou fournisseurs qu'il peut être amené à mentionner. Les recommandations sont formulées dans le seul intérêt de l'entreprise cliente.</p>
            </div>
          </div>
        </section>
      </div>

      <div className="container"><GoldSep /></div>

      {/* CE QUE CONTIENT LE RAPPORT */}
      <div className="container">
        <section className="section">
          <div className="section-label" style={{ textAlign: "center" }}>La structure du rapport</div>
          <h2 style={{ textAlign: "center" }}>Ce que vous recevez</h2>
          <p style={{ textAlign: "center", maxWidth: "620px", margin: "0 auto 8px" }}>Un rapport ATLAS s'organise en huit chapitres denses, conçus pour donner une lecture complète de votre entreprise et de son environnement.</p>

          <div className="methode-sommaire">
            <div className="sommaire-item">
              <div className="sommaire-num">1</div>
              <div className="sommaire-content">
                <h4>Guide de lecture</h4>
                <p>Clés d'interprétation du rapport, code couleur, méthodologie, indice de lucidité et disclaimer sur les données externes.</p>
              </div>
            </div>
            <div className="sommaire-item">
              <div className="sommaire-num">2</div>
              <div className="sommaire-content">
                <h4>Synthèse exécutive</h4>
                <p>Score global, tableau de scores par domaine, indice de lucidité, signaux critiques et diagnostic flash.</p>
              </div>
            </div>
            <div className="sommaire-item">
              <div className="sommaire-num">3</div>
              <div className="sommaire-content">
                <h4>Diagnostic interne</h4>
                <p>Analyse détaillée des dix domaines stratégiques de votre entreprise, avec benchmark sectoriel et écart entre perception et réalité.</p>
              </div>
            </div>
            <div className="sommaire-item">
              <div className="sommaire-num">4</div>
              <div className="sommaire-content">
                <h4>Diagnostic externe</h4>
                <p>Lecture actualisée de votre marché, analyse concurrentielle, cadre PESTEL et modèle des cinq forces.</p>
              </div>
            </div>
            <div className="sommaire-item">
              <div className="sommaire-num">5</div>
              <div className="sommaire-content">
                <h4>SWOT et croisements stratégiques</h4>
                <p>Forces, faiblesses, opportunités, menaces, avec les croisements offensifs, défensifs, de rattrapage et de survie.</p>
              </div>
            </div>
            <div className="sommaire-item">
              <div className="sommaire-num">6</div>
              <div className="sommaire-content">
                <h4>Analyse des risques</h4>
                <p>Cartographie des risques par probabilité et impact, avec identification des priorités de traitement.</p>
              </div>
            </div>
            <div className="sommaire-item">
              <div className="sommaire-num">7</div>
              <div className="sommaire-content">
                <h4>Plan d'action priorisé</h4>
                <p>La pièce centrale du rapport : matrice urgence-importance, quick wins court terme, chantiers structurels moyen terme, récapitulatif budgétaire et retour sur investissement estimé.</p>
              </div>
            </div>
            <div className="sommaire-item">
              <div className="sommaire-num">8</div>
              <div className="sommaire-content">
                <h4>Conclusion et perspectives</h4>
                <p>Bilan de synthèse, trois actions immédiates à engager, et perspectives d'évolution de l'accompagnement.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container"><GoldSep /></div>

      {/* PLATEAU OFFRES RESSERRE */}
      <div className="container">
        <div className="plateau-wrapper">
          <OffersPlateau label="Souscrire" title="Choisir votre formule" />
        </div>
      </div>

      <div className="container"><GoldSep /></div>

      {/* CLOSING */}
      <div className="container">
        <section className="closing">
          <div className="closing-logo">ATLAS</div>
          <p>Une méthode rigoureuse, une lecture indépendante, un accompagnement pensé pour la réalité des TPE et PME.</p>
          <div className="closing-devise"><strong>ATLAS</strong> : laissez-nous porter votre monde sur nos épaules.</div>
        </section>
      </div>

      <Footer />
    </>
  );
}
