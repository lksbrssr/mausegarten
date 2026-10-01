"use client";

import { useState } from "react";

// Offizielle Besuchsgebühren für Krippenplätze der Stadt München.
// Quelle: stadt.muenchen.de – Gebührenübersicht. Staffelung nach
// Haushalts-Jahreseinkommen und täglicher Buchungszeit.
const times = [
  "bis 4 Std.",
  "bis 5 Std.",
  "bis 6 Std.",
  "bis 7 Std.",
  "bis 8 Std.",
  "bis 9 Std.",
  "über 9 Std.",
];

const incomes = [
  { label: "bis 60.000 €", fees: [100, 100, 100, 100, 100, 100, 100] },
  { label: "bis 70.000 €", fees: [115, 130, 145, 160, 175, 190, 205] },
  { label: "bis 80.000 €", fees: [130, 147, 164, 181, 198, 215, 232] },
  { label: "über 80.000 €", fees: [145, 162, 179, 196, 213, 230, 250] },
];

const OFFERED_MAX = 3; // Mausegarten bietet max. "bis 7 Std." an

export default function KrippenGebuehren() {
  const [t, setT] = useState(3); // Standard: bis 7 Std.
  const [inc, setInc] = useState(3); // Standard: über 80.000 €
  const fee = incomes[inc].fees[t];
  const pct = (t / (times.length - 1)) * 100;
  const offeredPct = (OFFERED_MAX / (times.length - 1)) * 100;
  const trackBg = `linear-gradient(to right, var(--teal) 0%, var(--teal) ${pct}%, var(--cream-deep) ${pct}%, var(--cream-deep) ${offeredPct}%, #ded7c7 ${offeredPct}%, #ded7c7 100%)`;

  return (
    <div className="fee-slider">
      <div className="mono" style={{ marginBottom: 8 }}>Haushaltseinkommen pro Jahr</div>
      <div className="seg">
        {incomes.map((o, idx) => (
          <button
            key={o.label}
            type="button"
            className={idx === inc ? "active" : ""}
            onClick={() => setInc(idx)}
          >
            {o.label}
          </button>
        ))}
      </div>

      <div className="fee-slider-head" style={{ marginTop: 22 }}>
        <div>
          <div className="mono">Buchungszeit pro Tag</div>
          <div className="fee-slider-time">{times[t]}</div>
        </div>
        <div className="fee-slider-amount">
          <span className="fee-slider-big">{fee} €</span>
          <span className="mono">Beitrag pro Monat</span>
        </div>
      </div>

      <input
        className="fee-range"
        type="range"
        min={0}
        max={times.length - 1}
        step={1}
        value={t}
        onChange={(e) => setT(Math.min(Number(e.target.value), OFFERED_MAX))}
        aria-label="Buchungszeit wählen"
        style={{ background: trackBg }}
      />
      <div className="fee-slider-scale">
        <span>bis 4 Std.</span>
        <span className="muted">über 7 Std.: nicht buchbar</span>
      </div>

      <p className="fee-slider-note">
        Die Besuchsgebühr ist von der Stadt München festgelegt und richtet sich
        nach <strong>Haushaltseinkommen und Buchungszeit</strong>. Hinzu kommen
        monatlich <strong>95 € Essensgeld</strong> und{" "}
        <strong>10 € Vereinsbeitrag</strong>. Mit München-Pass, bei Bezug von
        Sozialleistungen oder als Geschwisterkind kann sich der Beitrag weiter
        reduzieren – teils auf 0 €. Beim Mausegarten sind Buchungszeiten von{" "}
        <strong>4–7 Std. pro Tag</strong> möglich – längere Zeiten (ausgegraut)
        bieten wir nicht an.
      </p>

      <p className="fee-disclaimer">
        ℹ️ Diese Angaben sind eine <strong>Orientierungshilfe ohne Gewähr</strong>.
        Die tatsächliche Einstufung und Bedürftigkeitsprüfung nimmt die Stadt
        München vor – maßgeblich sind deren Bescheide.
      </p>
    </div>
  );
}
