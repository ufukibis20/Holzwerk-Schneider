import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { P, telHref } from "@/lib/platzhalter";

export const metadata: Metadata = {
  metadataBase: new URL("https://holzwerk-schneider.de"),
  title: { default: "Holzwerk Schneider – Tischlerei in Tübingen", template: "%s | Holzwerk Schneider" },
  description: "Individuelle Möbel und Holzlösungen nach Maß aus der eigenen Werkstatt in Tübingen. Jetzt kostenloses Erstgespräch anfragen.",
};

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de"><body>
      <a href="#inhalt" className="btn skip">Zum Inhalt springen</a>
      <header className="site"><div className="wrap">
        <Link href="/" className="brand">Holzwerk Schneider</Link>
        <nav aria-label="Hauptmenü">
          <Link href="/leistungen">Leistungen</Link>
          <Link href="/ueber-uns">Über uns</Link>
          <Link href="/kontakt" className="btn">Kostenloses Erstgespräch anfragen</Link>
        </nav>
      </div></header>
      <main id="inhalt">{children}</main>
      <footer className="site"><div className="wrap">
        <p><strong>Holzwerk Schneider</strong><br />{P.adresse}<br />
          <a href={telHref}>{P.telefon}</a> · <a href={`mailto:${P.email}`}>{P.email}</a></p>
        <p><Link href="/impressum">Impressum</Link> · <Link href="/datenschutz">Datenschutz</Link></p>
      </div></footer>
      <a className="mobilecall" href={telHref}>Jetzt anrufen</a>
    </body></html>
  );
}
