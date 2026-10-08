import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Leistungen", description: "Maßmöbel, Einbauschränke, Regalsysteme und Innenausbau von Holzwerk Schneider in Tübingen." };
const items = [
  ["Maßgefertigte Möbel", "Wir fertigen Möbel nach Ihrem Wunsch, passend zu Raum und Maßen."],
  ["Einbauschränke", "Eingepasst in Ihren Raum, nach Ihren Vorstellungen geplant."],
  ["Regalsysteme", "Individuell geplante Regale für Wohn- und Geschäftsräume."],
  ["Innenausbau", "Holzlösungen, die Ihre Räume ergänzen."],
];
export default function Leistungen() {
  return (<section><div className="wrap">
    <h1>Leistungen</h1>
    <p>Wir arbeiten im Raum Tübingen, Reutlingen, Rottenburg am Neckar und Umgebung.</p>
    <div className="grid feat">{items.map(([t, d]) => <div key={t}><h3>{t}</h3><p>{d}</p></div>)}</div>
    <p style={{marginTop:"2.5rem"}}><Link href="/kontakt" className="btn">Kostenloses Erstgespräch anfragen</Link></p>
  </div></section>);
}
