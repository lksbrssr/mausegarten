import { SpotBlocks } from "../components/Papercut";
import OpeningHours from "../components/OpeningHours";

export const metadata = { title: "Anmeldung" };

export default function Anmeldung() {
  return (
    <div className="wrap">
      <section className="page-head">
        <div>
          <span className="eyebrow">Platz finden</span>
          <h1>Anmeldung</h1>
          <p style={{ color: "var(--ink-soft)", maxWidth: "48ch" }}>
            Anmeldungen sind immer willkommen — manchmal werden auch kurzfristig
            Plätze frei!
          </p>
        </div>
        <div className="art"><SpotBlocks /></div>
      </section>

      <div className="layout">
        <div className="prose">
          <div className="callout">
            Reguläre Anmeldefrist: <strong>30.09.2026 – 31.01.2027</strong> für das
            KiTa-Jahr <strong>2027/2028</strong>. Schickt uns gerne Eure
            Online-Bewerbung!
          </div>

          <p>
            Wir nehmen <strong>Kinder ab einem Jahr</strong> auf — das heißt, Euer
            Kind sollte bei Eintritt in den Mausegarten bzw. im September des
            KiTa-Jahres mindestens 12 Monate alt sein.
          </p>
          <p>
            Die Reihenfolge der eingegangenen Anmeldungen spielt keine Rolle. In
            der Regel erfolgt spätestens im Februar/März die Vergabe der Plätze.
            Über die Aufnahme entscheidet ein vierköpfiges Gremium (Betreuungsperson,
            Vorstand und Eltern). Entschieden wird nach Alters- und
            Geschlechtsstruktur der aktuellen Gruppe.{" "}
            <strong>Es besteht kein Anspruch auf Aufnahme.</strong>
          </p>

          <h2>So bewerbt Ihr Euch</h2>
          <p>
            Wenn Du an einem Betreuungsplatz interessiert bist, drucke das
            Anmeldeformular aus, fülle es aus und schicke es per Post an:
          </p>
          <div className="callout sage">
            <strong>Elterninitiative Mausegarten e.V.</strong><br />
            Kindersuche<br />
            Albanistraße 12<br />
            81541 München
          </div>
          <p>
            <a href="https://www.mausegarten.de/.cm4all/uproc.php/0/MG_bewerbung_2022.pdf?cdp=a&amp;_=184a5e55cd8" target="_blank" rel="noopener noreferrer" className="btn">
              PDF-Anmeldeformular herunterladen →
            </a>
          </p>
          <p style={{ fontSize: "0.92rem", color: "var(--ink-soft)" }}>
            Bitte nutzt aus Datenschutzgründen nur unser Anmeldeformular. Schickt
            uns bitte keine Fotos und persönlichen Briefe. Vielen Dank!
          </p>
        </div>

        <aside className="sidebar">
          <OpeningHours />
          <div className="panel" style={{ background: "var(--lime)", borderColor: "transparent" }}>
            <h3>Fragen?</h3>
            <p className="fine">Meldet Euch jederzeit gerne.</p>
            <a href="mailto:kontakt@mausegarten.de" className="btn dark">E-Mail schreiben →</a>
          </div>
        </aside>
      </div>
    </div>
  );
}
