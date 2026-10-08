import type { Metadata } from "next";
export const metadata: Metadata = { title: "Datenschutzerklärung", robots: { index: false } };
export default function Page() {
  return (<section><div className="wrap"><h1>Datenschutzerklärung</h1>
    <p>[[RECHTSTEXT: Datenschutzerklärung vom Kunden bzw. Rechtsberatung, nicht von Claude verfasst]]</p></div></section>);
}
