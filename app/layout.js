import "./globals.css";

export const metadata = {
  title: "ATLAS — Diagnostic stratégique pour TPE et PME",
  description: "ATLAS détecte en 9 domaines ce qui freine votre croissance, menace votre trésorerie ou fragilise votre organisation. Le diagnostic d'un cabinet, au prix d'un indépendant.",
  keywords: "diagnostic entreprise, diagnostic stratégique, TPE, PME, audit entreprise, conseil stratégie, analyse entreprise",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
