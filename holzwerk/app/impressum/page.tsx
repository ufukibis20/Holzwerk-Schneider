import type { Metadata } from "next";
export const metadata: Metadata = { title: "Impressum", robots: { index: false } };
export default function Page() {
  return (<section><div className="wrap"><h1>Impressum</h1>
    <p>[[RECHTSTEXT: Impressum vom Kunden bzw. Rechtsberatung, nicht von Claude verfasst]]</p></div></section>);
}
