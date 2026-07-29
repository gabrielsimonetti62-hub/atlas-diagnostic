import Link from "next/link";
import { Nav, Footer, GoldSep, OffersPlateau } from "../components";

export const metadata = {
  title: "Notre m&eacute;thode : comment ATLAS analyse votre entreprise",
  description: "La rigueur d&apos;un cabinet de conseil, la clart&eacute; d&apos;un regard de terrain. D&eacute;couvrez les principes qui guident chaque diagnostic ATLAS.",
};

export default function Methode() {
  return (
    <>
      <Nav />

      <div className="container">
        <section className="page-header">
          <div className="section-label">Notre m&eacute;thode</div>
          <h1>Notre m&eacute;thode</h1>
          <p className="section-intro">Le s&eacute;rieux d&apos;un cabinet, la clart&eacute; d&apos;un conseil de terrain.</p>
        </section>
      </div>

      {/* INTRO */}
      <div className="container-narrow">
        <section style={{ padding: "0 0 40px", textAlign: "center" }}>
          <p style={{ fontSize: "17px", color: "var(--color-lilas)", lineHeight: "1.85", marginBottom: "16px" }}>
            Chaque diagnostic ATLAS repose sur une m&eacute;thodologie structur&eacute;e, construite &agrave; partir des approches &eacute;prouv&eacute;es par les cabinets de conseil de r&eacute;f&eacute;rence et adapt&eacute;e aux r&eacute;alit&eacute;s des TPE et PME fran&ccedil;aises.
          </p>
          <p style={{ fontSize: "17px", color: "var(--color-lilas)", lineHeight: "1.85" }}>
            Nous refusons les raccourcis, les grilles g&eacute;n&eacute;riques et les mod&egrave;les recycl&eacute;s. Chaque entreprise re&ccedil;oit une analyse pens&eacute;e pour elle, adoss&eacute;e &agrave; une lecture actualis&eacute;e de son secteur et de son environnement concurrentiel.
          </p>
        </section>
      </div>

      <div className="container"><GoldSep /></div>

      {/* LES 4 ETAPES */}
      <div className="container">
        <section className="section">
          <div className="section-label" style={{ textAlign: "center" }}>Le d&eacute;roulement</div>
          <h2 style={{ textAlign: "center" }}>Quatre &eacute;tapes vers la clart&eacute;</h2>
          <div className="steps-list">
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-content">
                <h3>Choisir votre formule</h3>
                <p>ATLAS propose trois niveaux d&apos;accompagnement adapt&eacute;s &agrave; chaque situation. <Link href="/offres/hermes" className="text-link">Herm&egrave;s</Link> pour un diagnostic complet imm&eacute;diat. <Link href="/offres/iris" className="text-link">Iris</Link> pour aller plus loin avec une orientation vers des experts et un suivi &agrave; trois mois. <Link href="/offres/athena" className="text-link">Ath&eacute;na</Link> pour un accompagnement structur&eacute; sur sept mois avec des bilans d&apos;&eacute;volution r&eacute;guliers. Quelle que soit la formule choisie, une &eacute;volution vers un niveau sup&eacute;rieur reste possible &agrave; tout moment.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-content">
                <h3>Remplir le questionnaire</h3>
                <p>Le questionnaire ATLAS a &eacute;t&eacute; con&ccedil;u pour &ecirc;tre compl&eacute;t&eacute; de mani&egrave;re autonome, en une session ou sur plusieurs jours. Il combine des questions de perception et des questions factuelles, dans un ordre pens&eacute; pour r&eacute;v&eacute;ler les &eacute;carts entre la lecture que vous avez de votre entreprise et la r&eacute;alit&eacute; de ses donn&eacute;es.</p>
                <div className="doc-paper">
                  <div className="doc-paper-label">Extrait r&eacute;el &middot; Questionnaire ATLAS</div>
                  <div className="doc-paper-title">Partie B, Domaine 3 : Finances et solvabilit&eacute;</div>
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
                </div>
              </div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-content">
                <h3>Recevoir votre diagnostic</h3>
                <p>&Agrave; partir de 72 heures apr&egrave;s la validation de vos r&eacute;ponses, vous recevez un rapport complet de 24 &agrave; 40 pages. Chaque domaine de votre entreprise est not&eacute; individuellement, un score global sur 100 est calcul&eacute;, et un indice de lucidit&eacute; propre &agrave; la m&eacute;thodologie ATLAS mesure l&apos;&eacute;cart entre votre perception et les donn&eacute;es.</p>
                <div className="doc-paper">
                  <div className="doc-paper-label">Extrait r&eacute;el &middot; Rapport ATLAS</div>
                  <div className="doc-paper-title">Chapitre 2 : Synth&egrave;se ex&eacute;cutive</div>
                  <div className="doc-global">
                    <div className="doc-global-label">Score global</div>
                    <div className="doc-global-score">61 <span>/ 100</span></div>
                  </div>
                  <div className="blur-overlay">
                    <div className="blur-inner">
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
                    </div>
                    <div className="blur-text">Rapport complet livr&eacute; apr&egrave;s souscription</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="step">
              <div className="step-num">4</div>
              <div className="step-content">
                <h3>Passer &agrave; l&apos;action</h3>
                <p>Avec l&apos;offre Herm&egrave;s, un plan d&apos;action prioris&eacute; est directement exploitable. Avec Iris, une orientation vers l&apos;&eacute;cosyst&egrave;me d&apos;experts ATLAS et un bilan de suivi &agrave; trois mois compl&egrave;tent l&apos;accompagnement. Avec Ath&eacute;na, un parcours structur&eacute; sur sept mois avec quatre points de suivi permet de transformer durablement l&apos;entreprise.</p>
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
          <p style={{ textAlign: "center", maxWidth: "620px", margin: "0 auto 8px" }}>Ces principes ne sont pas une liste de bonnes intentions. Ce sont les engagements m&eacute;thodologiques auxquels chaque rapport ATLAS est tenu.</p>

          <div className="methode-principes">
            <div className="principe-item">
              <h4>Croisement syst&eacute;matique avec la r&eacute;alit&eacute; sectorielle</h4>
              <p>Chaque analyse est enrichie par une recherche sectorielle actualis&eacute;e &agrave; la date du rapport. Aucune conclusion n&apos;est tir&eacute;e sans confrontation avec les ordres de grandeur observ&eacute;s sur votre march&eacute;.</p>
            </div>
            <div className="principe-item">
              <h4>Justification chiffr&eacute;e de chaque score</h4>
              <p>Chaque note attribu&eacute;e &agrave; un domaine strat&eacute;gique s&apos;appuie sur vos r&eacute;ponses et sur les donn&eacute;es externes qui les qualifient. Aucun score n&apos;est fond&eacute; sur une impression.</p>
            </div>
            <div className="principe-item">
              <h4>Recommandations chiffr&eacute;es et calendaris&eacute;es</h4>
              <p>Chaque action recommand&eacute;e est accompagn&eacute;e d&apos;une fourchette budg&eacute;taire, d&apos;un d&eacute;lai indicatif et d&apos;un ordre de priorit&eacute;. Le rapport ne se contente jamais d&apos;identifier un probl&egrave;me : il en propose la r&eacute;solution op&eacute;rationnelle.</p>
            </div>
            <div className="principe-item">
              <h4>Distinction entre perception et r&eacute;alit&eacute;</h4>
              <p>L&apos;indice de lucidit&eacute;, propre &agrave; la m&eacute;thodologie ATLAS, mesure l&apos;&eacute;cart entre la fa&ccedil;on dont vous per&ccedil;evez votre entreprise et la r&eacute;alit&eacute; que r&eacute;v&egrave;lent ses donn&eacute;es. Cet indicateur transforme la mani&egrave;re dont vous prendrez vos d&eacute;cisions.</p>
            </div>
            <div className="principe-item">
              <h4>Actualisation continue de la lecture externe</h4>
              <p>Les analyses concurrentielle, sectorielle et r&eacute;glementaire sont produites &agrave; la date du rapport, jamais recycl&eacute;es depuis des travaux ant&eacute;rieurs. Chaque diagnostic re&ccedil;oit sa lecture propre.</p>
            </div>
            <div className="principe-item">
              <h4>Ind&eacute;pendance et absence de conflit d&apos;int&eacute;r&ecirc;ts</h4>
              <p>ATLAS ne per&ccedil;oit aucune commission des experts, prestataires ou fournisseurs qu&apos;il peut &ecirc;tre amen&eacute; &agrave; mentionner. Les recommandations sont formul&eacute;es dans le seul int&eacute;r&ecirc;t de l&apos;entreprise cliente.</p>
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
          <p style={{ textAlign: "center", maxWidth: "620px", margin: "0 auto 8px" }}>Un rapport ATLAS s&apos;organise en huit chapitres denses, con&ccedil;us pour donner une lecture compl&egrave;te de votre entreprise et de son environnement.</p>

          <div className="methode-sommaire">
            <div className="sommaire-item">
              <div className="sommaire-num">1</div>
              <div className="sommaire-content">
                <h4>Guide de lecture</h4>
                <p>Cl&eacute;s d&apos;interpr&eacute;tation du rapport, code couleur, m&eacute;thodologie, indice de lucidit&eacute; et disclaimer sur les donn&eacute;es externes.</p>
              </div>
            </div>
            <div className="sommaire-item">
              <div className="sommaire-num">2</div>
              <div className="sommaire-content">
                <h4>Synth&egrave;se ex&eacute;cutive</h4>
                <p>Score global, tableau de scores par domaine, indice de lucidit&eacute;, signaux critiques et diagnostic flash.</p>
              </div>
            </div>
            <div className="sommaire-item">
              <div className="sommaire-num">3</div>
              <div className="sommaire-content">
                <h4>Diagnostic interne</h4>
                <p>Analyse d&eacute;taill&eacute;e des dix domaines strat&eacute;giques de votre entreprise, avec benchmark sectoriel et &eacute;cart entre perception et r&eacute;alit&eacute;.</p>
              </div>
            </div>
            <div className="sommaire-item">
              <div className="sommaire-num">4</div>
              <div className="sommaire-content">
                <h4>Diagnostic externe</h4>
                <p>Lecture actualis&eacute;e de votre march&eacute;, analyse concurrentielle, cadre PESTEL et mod&egrave;le des cinq forces.</p>
              </div>
            </div>
            <div className="sommaire-item">
              <div className="sommaire-num">5</div>
              <div className="sommaire-content">
                <h4>SWOT et croisements strat&eacute;giques</h4>
                <p>Forces, faiblesses, opportunit&eacute;s, menaces, avec les croisements offensifs, d&eacute;fensifs, de rattrapage et de survie.</p>
              </div>
            </div>
            <div className="sommaire-item">
              <div className="sommaire-num">6</div>
              <div className="sommaire-content">
                <h4>Analyse des risques</h4>
                <p>Cartographie des risques par probabilit&eacute; et impact, avec identification des priorit&eacute;s de traitement.</p>
              </div>
            </div>
            <div className="sommaire-item">
              <div className="sommaire-num">7</div>
              <div className="sommaire-content">
                <h4>Plan d&apos;action prioris&eacute;</h4>
                <p>La pi&egrave;ce centrale du rapport : matrice urgence-importance, quick wins court terme, chantiers structurels moyen terme, r&eacute;capitulatif budg&eacute;taire et retour sur investissement estim&eacute;.</p>
              </div>
            </div>
            <div className="sommaire-item">
              <div className="sommaire-num">8</div>
              <div className="sommaire-content">
                <h4>Conclusion et perspectives</h4>
                <p>Bilan de synth&egrave;se, trois actions imm&eacute;diates &agrave; engager, et perspectives d&apos;&eacute;volution de l&apos;accompagnement.</p>
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
          <p>Une m&eacute;thode rigoureuse, une lecture ind&eacute;pendante, un accompagnement pens&eacute; pour la r&eacute;alit&eacute; des TPE et PME.</p>
          <div className="closing-devise"><strong>ATLAS</strong> : laissez-nous porter votre monde sur nos &eacute;paules.</div>
        </section>
      </div>

      <Footer />
    </>
  );
}
