"use client";

import { useState } from "react";

// Offizielle Höchstbeträge der Besuchsgebühr für Krippenplätze (Stadt München).
const stufen = [
  { label: "1–2 Std.", max: 41 },
  { label: "2–3 Std.", max: 67 },
  { label: "3–4 Std.", max: 96 },
  { label: "4–5 Std.", max: 121 },
  { label: "5–6 Std.", max: 146 },
  { label: "6–7 Std.", max: 172 },
  { label: "7–8 Std.", max: 198 },
  { label: "8–9 Std.", max: 224 },
  { label: "über 9 Std.", max: 250 },
];

export default function KrippenGebuehren() {
  const [i, setI] = useState(5); // Standard: 6–7 Std. (volle Buchungszeit bei uns)
  const s = stufen[i];
  const pct = (i / (stufen.length - 1)) * 100;

  return (
    <div className="fee-slider">
      <div className="fee-slider-head">
        <div>
          <div className="mono">Buchungszeit</div>
          <div className="fee-slider-time">{s.label}</div>
        </div>
        <div className="fee-slider-amount">
          <span className="fee-slider-big">bis zu {s.max} €</span>
          <span className="mono">pro Monat</span>
        </div>
      </div>

      <input
        className="fee-range"
        type="range"
        min={0}
        max={stufen.length - 1}
        step={1}
        value={i}
        onChange={(e) => setI(Number(e.target.value))}
        aria-label="Buchungszeit wählen"
        style={{ "--pct": `${pct}%` }}
      />
      <div className="fee-slider-scale">
        <span>1–2 Std.</span>
        <span>über 9 Std.</span>
      </div>

      <p className="fee-slider-note">
        Die Besuchsgebühr ist von der Stadt München festgelegt und{" "}
        <strong>einkommensabhängig gestaffelt</strong>: Familien zahlen zwischen
        <strong> 0 €</strong> und dem angezeigten Höchstbetrag. Bis zu einem
        jährlichen Haushaltseinkommen von 50.000 € entfällt die Gebühr; die
        Einstufung nimmt die Stadt München vor. Hinzu kommt die monatliche
        Essenspauschale. Bei uns sind Buchungszeiten von 4–7 Std. möglich.
      </p>
    </div>
  );
}
