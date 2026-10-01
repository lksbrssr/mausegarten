import OpeningHours from "../components/OpeningHours";

export const metadata = { title: "Konzept" };

export default function Konzept() {
  return (
    <div className="wrap">
      <section className="page-head">
        <div>
          <span className="eyebrow">Pädagogik</span>
          <h1>Unser Konzept</h1>
          <p style={{ color: "var(--ink-soft)", maxWidth: "48ch" }}>
            Spielen, toben, singen, kreativ sein, gemeinsam essen — und ganz viel
            raus in die Natur.
          </p>
        </div>
        <div className="art"><img src="/images/gen/konzept.jpeg" alt="Papierschnitt: ein Setzling im Topf, Sonne und Blumen" /></div>
      </section>

      <div className="layout">
        <div className="prose">
          <p>
            Unser pädagogisches Konzept basiert auf dem{" "}
            <strong>situationsorientierten Ansatz</strong>. Die Gestaltung der
            Betreuungszeit orientiert sich an den aktuellen Bedürfnissen unserer
            Kinder. In liebevoller Atmosphäre spielen die Kinder, toben, singen,
            sind kreativ, essen gemeinsam und gehen natürlich viel raus.
          </p>

          <div className="callout sage">
            Elterninitiative = aktive und regelmäßige Mitarbeit der Eltern.
          </div>

          <h2>Was Mitarbeit bei uns heißt</h2>
          <p>
            Unter „Elterninitiative“ verstehen wir die aktive und regelmäßige
            Mitarbeit der Eltern. So gestalten die Eltern vieles maßgeblich mit.
            Dazu gehört bei uns:
          </p>
          <ul>
            <li>
              Obstzeit- und Wäschedienst (alle 11 Wochen, für eine gesamte Woche)
            </li>
            <li>Teilnahme an den Elternabenden (ca. alle 6–8 Wochen)</li>
            <li>Übernahme eines „Amtes“ (siehe Organigramm)</li>
          </ul>
        </div>

        <aside className="sidebar">
          <OpeningHours />
        </aside>
      </div>
    </div>
  );
}
