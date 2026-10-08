"use client";
import { useState } from "react";

export default function Formular() {
  const [state, setState] = useState<"idle"|"sending"|"ok"|"error">("idle");
  const [msg, setMsg] = useState("");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    try {
      const res = await fetch("/api/anfrage", { method: "POST", body: new FormData(e.currentTarget) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.fehler);
      setState("ok");
    } catch (err) {
      setMsg(err instanceof Error ? err.message : "Das Senden hat nicht geklappt. Bitte rufen Sie uns an.");
      setState("error");
    }
  }
  if (state === "ok") return <p role="status"><strong>Danke für Ihre Anfrage.</strong> Wir melden uns bei Ihnen.</p>;
  return (
    <form onSubmit={submit}>
      <label>Name<input name="name" required autoComplete="name" /></label>
      <label>E-Mail<input name="email" type="email" required autoComplete="email" /></label>
      <label>Telefonnummer<input name="telefon" type="tel" required autoComplete="tel" /></label>
      <label>Gewünschte Leistung
        <select name="leistung" required defaultValue="">
          <option value="" disabled>Bitte wählen</option>
          <option>Maßgefertigte Möbel</option><option>Einbauschränke</option>
          <option>Regalsysteme</option><option>Innenausbau</option><option>Noch unklar</option>
        </select></label>
      <label>Ihr Projekt in Kürze<textarea name="projekt" rows={5} required /></label>
      <input name="firma" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{position:"absolute",left:"-9999px"}} />
      <label className="check"><input type="checkbox" name="datenschutz" required />
        <span>Ich habe die <a href="/datenschutz">Datenschutzerklärung</a> gelesen und bin mit der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage einverstanden.</span></label>
      <button className="btn" disabled={state === "sending"}>{state === "sending" ? "Wird gesendet …" : "Anfrage senden"}</button>
      {state === "error" && <p role="alert">{msg}</p>}
    </form>
  );
}
