import "./globals.css";

export const metadata = {
  title: "ATLAS : diagnostic strat&eacute;gique pour TPE et PME",
  description: "ATLAS applique aux TPE et PME les m&eacute;thodologies du conseil strat&eacute;gique de haut niveau. Diagnostic complet sur dix domaines, livr&eacute; &agrave; partir de 72 heures.",
  keywords: "diagnostic entreprise, diagnostic strat&eacute;gique, TPE, PME, micro-entreprise, audit entreprise, conseil strat&eacute;gie, accompagnement dirigeant, analyse entreprise",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
