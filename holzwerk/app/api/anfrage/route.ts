import { NextResponse } from "next/server";

// Versanddienst (z. B. Resend) ist noch nicht gewählt. Bis dahin: ehrliche Fehlermeldung statt Schein-Erfolg.
export async function POST(req: Request) {
  const f = await req.formData();
  if (f.get("firma")) return NextResponse.json({ ok: true }); // Honeypot
  for (const k of ["name", "email", "telefon", "leistung", "projekt", "datenschutz"])
    if (!String(f.get(k) ?? "").trim())
      return NextResponse.json({ fehler: "Bitte füllen Sie alle Pflichtfelder aus." }, { status: 400 });
  return NextResponse.json({ fehler: "Das Senden ist noch nicht eingerichtet. Bitte rufen Sie uns an." }, { status: 501 });
}
