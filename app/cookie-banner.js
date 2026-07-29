"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("atlas_cookie_consent");
      if (!consent) setShow(true);
    } catch (e) {
      setShow(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem("atlas_cookie_consent", "accepted");
    } catch (e) {}
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Consentement cookies">
      <div className="cookie-text">
        ATLAS utilise des cookies strictement n&eacute;cessaires au fonctionnement du site. Aucun cookie de suivi n&apos;est d&eacute;pos&eacute; sans votre accord. En savoir plus dans notre <Link href="/confidentialite">politique de confidentialit&eacute;</Link>.
      </div>
      <button className="cookie-btn" onClick={accept}>J&apos;ai compris</button>
    </div>
  );
}
