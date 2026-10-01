import { SpotMail } from "../components/Papercut";
import OpeningHours from "../components/OpeningHours";

export const metadata = { title: "Kontakt" };

export default function Kontakt() {
  return (
    <div className="wrap">
      <section className="page-head">
        <div>
          <span className="eyebrow">Hallo sagen</span>
          <h1>Kontakt</h1>
          <p style={{ color: "var(--ink-soft)", maxWidth: "48ch" }}>
            Inmitten der wunderschönen Au, in direkter Nachbarschaft zu den
            Isarauen — und mit dem MVV gut und schnell zu erreichen.
          </p>
        </div>
        <div className="art"><SpotMail /></div>
      </section>

      <div className="layout">
        <div className="prose">
          <h2>Postadresse</h2>
          <p>
            <strong>Elterninitiative Mausegarten e.V.</strong><br />
            Albanistraße 12<br />
            81541 München – Au
          </p>

          <h2>E-Mail</h2>
          <p>
            <a href="mailto:kontakt@mausegarten.de">kontakt@mausegarten.de</a>
          </p>

          <h2>Lage</h2>
          <p>
            Inmitten der wunderschönen Au, in direkter Nachbarschaft zu den
            Isarauen und mit dem MVV gut und schnell zu erreichen.
          </p>
          <p>
            <a
              href="https://www.openstreetmap.org/search?query=Albanistra%C3%9Fe%2012%2C%2081541%20M%C3%BCnchen"
              target="_blank"
              rel="noopener noreferrer"
              className="btn ghost"
            >
              Auf der Karte ansehen →
            </a>
          </p>
        </div>

        <aside className="sidebar">
          <OpeningHours />
          <div className="panel" style={{ background: "var(--sky)", borderColor: "transparent" }}>
            <h3>Schreibt uns</h3>
            <p className="fine">Wir freuen uns auf Eure Nachricht.</p>
            <a href="mailto:kontakt@mausegarten.de" className="btn dark">E-Mail schreiben →</a>
          </div>
        </aside>
      </div>
    </div>
  );
}
