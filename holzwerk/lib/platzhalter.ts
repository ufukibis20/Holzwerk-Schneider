// Alle offenen Angaben zentral. Vor Livegang ersetzen. Der Produktions-Build bricht bei "[[" ab.
export const P = {
  telefon: "[[TELEFON]]",
  email: "[[E-MAIL]]",
  adresse: "[[STRASSE, PLZ TÜBINGEN]]",
  oeffnungszeiten: "[[ÖFFNUNGSZEITEN]]",
};
export const telHref = "tel:" + P.telefon.replace(/[^+\d]/g, "");
