import Link from "next/link";

const leistungen = [
  ["Maßgefertigte Möbel", "Tische, Schränke und Sideboards nach Ihren Maßen und Ihrem Geschmack."],
  ["Einbauschränke", "Passgenau in Ihren Raum eingeplant."],
  ["Regalsysteme", "Regale, die zu Ihrem Raum und Ihren Dingen passen."],
  ["Innenausbau", "Holzlösungen für Wohn- und Geschäftsräume."],
];

export default function Home() {
  return (<>
    <section className="hero"><div className="wrap">
      <div className="hero-in">
        <h1>Möbel, die für Ihren Raum gebaut werden.</h1>
        <p>Holzwerk Schneider ist eine Tischlerei in Tübingen. Wir planen und fertigen individuelle Möbel und Holzlösungen in der eigenen Werkstatt.</p>
        <p><Link href="/kontakt" className="btn">Kostenloses Erstgespräch anfragen</Link></p>
      </div>
      <div className="media" role="img" aria-label="Platzhalter Hero-Foto">[[FOTO: Detailaufnahme Holz / Möbel]]</div>
    </div></section>

    <section><div className="wrap">
      <h2>Was wir für Sie bauen</h2>
      <div className="grid feat">
        {leistungen.map(([t, d]) => <div key={t}><h3>{t}</h3><p>{d}</p></div>)}
      </div>
      <p style={{marginTop:"2rem"}}><Link href="/leistungen">Alle Leistungen ansehen</Link></p>
    </div></section>

    <section style={{background:"#ece5d4"}}><div className="wrap grid">
      <div className="media light" role="img" aria-label="Platzhalter Werkstattvideo">[[VIDEO: Werkstatt, ca. 45 Sek., kein Autoplay]]</div>
      <div>
        <h2>Aus der eigenen Werkstatt</h2>
        <p>Seit 2018 fertigen wir in Tübingen. Sie werden persönlich beraten, von der ersten Idee bis zum fertigen Möbelstück.</p>
        <p><Link href="/ueber-uns">Das Team kennenlernen</Link></p>
      </div>
    </div></section>

    <section className="cta-band"><div className="wrap">
      <h2>Sie haben ein Projekt im Kopf?</h2>
      <p>Das Erstgespräch ist kostenlos. Erzählen Sie uns, was Sie vorhaben.</p>
      <Link href="/kontakt" className="btn">Kostenloses Erstgespräch anfragen</Link>
    </div></section>
  </>);
}
