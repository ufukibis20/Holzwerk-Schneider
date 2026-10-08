import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Über uns", description: "Holzwerk Schneider: Tischlerei in Tübingen, gegründet 2018." };
export default function Ueber() {
  return (<section><div className="wrap">
    <h1>Über uns</h1>
    <p>Holzwerk Schneider wurde 2018 in Tübingen gegründet. Wir fertigen individuelle Möbel und Holzlösungen in der eigenen Werkstatt und beraten Sie persönlich.</p>
    <div className="grid">
      {[1,2,3,4].map(n => <div key={n} className="media light" role="img" aria-label={`Platzhalter Portrait ${n}`}>[[PORTRAIT {n}: Name, Rolle]]</div>)}
    </div>
    <p style={{marginTop:"2.5rem"}}>[[TEXT: Vorstellung Daniel Schneider und Team, vom Kunden zu liefern]]</p>
    <p><Link href="/kontakt" className="btn">Kostenloses Erstgespräch anfragen</Link></p>
  </div></section>);
}
