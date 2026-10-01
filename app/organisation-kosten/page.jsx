import OpeningHours from "../components/OpeningHours";
import KrippenGebuehren from "../components/KrippenGebuehren";

export const metadata = { title: "Organisation & Kosten" };

export default function OrgKosten() {
  return (
    <div className="wrap">
      <section className="page-head">
        <div>
          <span className="eyebrow">Alltag</span>
          <h1>Organisation & Kosten</h1>
          <p style={{ color: "var(--ink-soft)", maxWidth: "50ch" }}>
            Ein großes Ladengeschäft, ein Toberaum, eine gemütliche Küche und ein
            Innenhof mit Sandkasten — mitten in der Au.
          </p>
        </div>
        <div className="art"><img src="/images/gen/organisation.jpeg" alt="Papierschnitt: ein kleines Haus mit rotem Dach und Baum auf einem Hügel" /></div>
      </section>

      <div className="layout">
        <div className="prose">
          <h2>Organisation</h2>
          <p>
            Um unsere Kinder kümmern sich zwei Erzieherinnen, eine
            Kinderpflegerin und eine Praktikantin. Unsere Räumlichkeiten bestehen
            aus einem großen Ladengeschäft (Hochparterre), einem
            Toberaum/Schlafraum und einer gemütlichen, großen Küche, in der die
            gemeinsamen Mahlzeiten eingenommen werden. Außerdem gibt es einen
            geräumigen Innenhof mit einem großen Sandkasten, der zum Spielen
            einlädt.
          </p>
          <p>
            Wir bieten 12 Betreuungsplätze für Kleinkinder zwischen 1–3 Jahren.
            Unsere gestaffelten Buchungszeiten sind 4–5 Stunden, 5–6 Stunden und
            6–7 Stunden im Zeitraum von 8:00–15:00 Uhr. Um einen für die Kinder
            angemessenen Ablauf sicherzustellen, gibt es eine Kernzeit von
            9:00–13:00 Uhr.

          </p>

          <h2>Kosten</h2>
          <div className="costgrid">
            <div className="box"><div className="big">bis 111 €</div><div className="lbl">Monatl. Beitrag (volle Buchungszeit)*</div></div>
            <div className="box"><div className="big">95 €</div><div className="lbl">Monatl. Essenspauschale</div></div>
            <div className="box"><div className="big">100 €</div><div className="lbl">Monatl. Vereinsbeitrag</div></div>
            <div className="box"><div className="big">250 €</div><div className="lbl">Einmalige Aufnahmegebühr</div></div>
            <div className="box"><div className="big">500 €</div><div className="lbl">Einmalige Beitragskaution</div></div>
          </div>

          <p>
            Wir sind eine Eltern-Kind-Initiative, die sich am EKI-Plus-Fördermodell
            der Stadt München beteiligt. Die Betreuungskosten für Kinder unter 3
            Jahren (Krippe) sind gestaffelt nach dem Brutto-Jahreseinkommen der
            Familie und nach der täglichen Betreuungszeit des Kindes. Zusätzlich
            fällt monatlich eine Essenspauschale an.
          </p>

          <h2>Besuchsgebühren für den Krippenplatz</h2>
          <div className="callout sage">
            <strong>Was ist eine Krippe?</strong> Eine Kinderkrippe betreut die
            Kleinsten – Kinder von <strong>1 bis 3 Jahren</strong>, also in der Zeit
            vor dem Kindergarten. Genau dafür ist der Mausegarten da.
          </div>
          <p>
            Die Höhe der Besuchsgebühr richtet sich nach der gewählten
            Buchungszeit. Zieh den Regler, um den jeweiligen Höchstbetrag zu sehen:
          </p>
          <KrippenGebuehren />

          <p style={{ fontSize: "0.9rem", color: "var(--ink-soft)" }}>
            *Der zu zahlende Elternbeitrag hängt von der gewählten Buchungszeit und
            dem Haushaltseinkommen ab und liegt zwischen 0 € und 111 €. Die Prüfung
            und Feststellung der Einkommensgruppe obliegt der Stadt München; hierzu
            ist ein Antrag zu stellen. Die Formulare stellen wir gern zur
            Verfügung. Zudem ist ein Antrag auf Geschwisterermäßigung möglich. Mehr
            Infos erhalten Eltern am ersten Elternabend im KiTa-Jahr.
          </p>
          <h2>Gebühren & Infos zum Download</h2>
          <ul className="doclist">
            <li>
              <a href="/dokumente/kita-gebuehren-uebersicht-2019.pdf" target="_blank" rel="noopener noreferrer">
                <span className="ic">PDF</span>
                <span>KiTa-Gebühren – Übersicht<small>Gebührenübersicht der Landeshauptstadt München</small></span>
              </a>
            </li>
            <li>
              <a href="https://stadt.muenchen.de/dam/jcr:4d4eba3f-8ee9-41f6-aca3-44161281948d/gebuehrenuebersicht.pdf" target="_blank" rel="noopener noreferrer">
                <span className="ic">PDF</span>
                <span>Gebührenübersicht (stadt.muenchen.de)<small>Aktuelle Gebührenstaffelung der Stadt München</small></span>
              </a>
            </li>
          </ul>
          <p>
            <a href="https://stadt.muenchen.de/infos/kosten-kita-platz.html" target="_blank" rel="noopener noreferrer">
              Infos zu den KiTa-Gebühren der Stadt München →
            </a>
          </p>
        </div>

        <aside className="sidebar">
          <OpeningHours />
          <div className="panel" style={{ background: "var(--sage)", borderColor: "transparent" }}>
            <h3>Kernzeit</h3>
            <p className="fine" style={{ margin: 0 }}>Täglich 9:00–13:00 Uhr — damit der Tag für alle Kinder gut läuft.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
