import { SpotWork } from "../components/Papercut";
import OpeningHours from "../components/OpeningHours";

export const metadata = { title: "Stellenangebote & Praktika" };

export default function Stellenangebote() {
  return (
    <div className="wrap">
      <section className="page-head">
        <div>
          <span className="eyebrow">Mitarbeiten</span>
          <h1>Stellen & Praktika</h1>
          <p style={{ color: "var(--ink-soft)", maxWidth: "50ch" }}>
            Werde Teil eines tollen Teams in einer kleinen, familiären
            Kinderkrippe mitten in der Au.
          </p>
        </div>
        <div className="art"><SpotWork /></div>
      </section>

      <div className="layout">
        <div className="prose">
          <h2>Stellenangebote in der Kinderkrippe Mausegarten e.V.</h2>
          <p>
            Wir suchen Verstärkung für unser Team. Aktuelle Ausschreibungen findest
            Du hier als Download:
          </p>
          <p>
            <a
              href="https://www.mausegarten.de/.cm4all/uproc.php/0/Stellenangebote%2C%20Praktika%2C%20Aushilfen/Der%20Mausegarten%20such%20eine%20Aushilfe.pdf?cdp=a&_=182352079a8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Aushilfe gesucht (PDF) →
            </a>
          </p>

          <h2 style={{ color: "var(--teal-dark)" }}>
            Praktikum in der Kinderkrippe Mausegarten e.V.
          </h2>
          <p>
            Du bist im Rahmen Deiner Ausbildung / Deines Studiums auf der Suche
            nach einem Praktikumsplatz — dann freuen wir uns auf Deine Bewerbung.
            Wir bieten eine angenehme, fröhliche und freundliche Arbeitsatmosphäre
            an einem interessanten, verantwortungsvollen und vielseitigen
            Arbeitsplatz.
          </p>
          <div className="callout sage">
            Schicke uns Deine Bewerbung online an{" "}
            <a href="mailto:personal@mausegarten.de">personal@mausegarten.de</a>.
            Wir freuen uns auf Euch!
          </div>
        </div>

        <aside className="sidebar">
          <OpeningHours />
        </aside>
      </div>
    </div>
  );
}
