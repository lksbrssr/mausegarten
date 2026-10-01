"use client";

import { useState } from "react";

export default function AnmeldeFormular() {
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    // Noch nicht angebunden – das Formular ist aktuell nur ein Platzhalter.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="callout sage" role="status">
        <strong>Danke!</strong> Dieses Formular ist in der Testversion noch nicht
        mit einem Postfach verbunden – es wurde nichts verschickt. Bitte nutzt
        vorerst das PDF-Anmeldeformular oder schreibt uns an{" "}
        <a href="mailto:kontakt@mausegarten.de">kontakt@mausegarten.de</a>.
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <fieldset>
        <legend>Kind</legend>
        <div className="form-row">
          <label>
            Name des Kindes
            <input type="text" name="kind_name" autoComplete="off" />
          </label>
          <label>
            Geburtsdatum
            <input type="date" name="kind_geb" />
          </label>
        </div>
        <div className="form-row">
          <label>
            Geschwisterkind/er
            <input type="text" name="geschwister" />
          </label>
          <label>
            Geburtsdatum Geschwister
            <input type="text" name="geschwister_geb" placeholder="TT.MM.JJJJ" />
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Eltern</legend>
        <div className="form-row">
          <label>
            Name Elternteil 1
            <input type="text" name="eltern1" />
          </label>
          <label>
            Name Elternteil 2
            <input type="text" name="eltern2" />
          </label>
        </div>
        <label>
          Straße / Hausnummer / PLZ
          <input type="text" name="adresse" />
        </label>
        <div className="form-row">
          <label>
            Telefon (privat / geschäftlich / mobil)
            <input type="tel" name="telefon" />
          </label>
          <label>
            E-Mail
            <input type="email" name="email" />
          </label>
        </div>
        <div className="form-row">
          <label>
            Elternteil 1 berufstätig als
            <input type="text" name="eltern1_beruf" placeholder="Beruf (oder leer lassen)" />
          </label>
          <label>
            Elternteil 2 berufstätig als
            <input type="text" name="eltern2_beruf" placeholder="Beruf (oder leer lassen)" />
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Sonstiges</legend>
        <label>
          Gewünschtes Eintrittsdatum
          <input type="text" name="eintritt" placeholder="z.B. September 2027" />
        </label>
        <label>
          Sonstige Anmerkungen
          <textarea name="anmerkungen" rows={3} placeholder="z.B. Freund:in von …" />
        </label>
        <label className="form-check">
          <input type="checkbox" name="datenschutz" />
          <span>
            Ich habe die <a href="/datenschutz">Datenschutzerklärung</a> zur
            Kenntnis genommen.
          </span>
        </label>
      </fieldset>

      <button type="submit" className="btn">Bewerbung absenden →</button>
    </form>
  );
}
