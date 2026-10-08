import type { Metadata } from "next";
import Formular from "./Formular";
import { P, telHref } from "@/lib/platzhalter";
export const metadata: Metadata = { title: "Kontakt", description: "Kostenloses Erstgespräch bei Holzwerk Schneider in Tübingen anfragen." };
export default function Kontakt() {
  return (<section><div className="wrap">
    <h1>Kostenloses Erstgespräch anfragen</h1>
    <p>Beschreiben Sie kurz Ihr Vorhaben. Das Erstgespräch zu Ihrem Projekt ist kostenlos.</p>
    <Formular />
    <h2 style={{marginTop:"3rem"}}>Lieber anrufen?</h2>
    <p><a href={telHref}>{P.telefon}</a><br />{P.oeffnungszeiten}<br />{P.adresse}</p>
  </div></section>);
}
