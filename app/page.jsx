import Link from "next/link";
import OpeningHours from "./components/OpeningHours";

const cards = [
  { href: "/konzept", label: "Pädagogik", title: "Unser Konzept", text: "Situationsorientiert, liebevoll, viel draußen — und mit aktiver Mitarbeit der Eltern.", img: "/images/gen/konzept.jpeg", pill: "sage" },
  { href: "/organisation-kosten", label: "Alltag", title: "Organisation & Kosten", text: "Gruppe, Räume, Buchungszeiten und die Beiträge nach dem EKI-Plus-Modell.", img: "/images/gen/organisation.jpeg", pill: "sand" },
  { href: "/anmeldung", label: "Platz finden", title: "Anmeldung", text: "Wie die Platzvergabe läuft und wie Ihr Euch mit unserem Formular bewerbt.", img: "/images/gen/anmeldung.jpeg", pill: "lime" },
  { href: "/kontakt", label: "Hallo sagen", title: "Kontakt", text: "Adresse, E-Mail und Lage inmitten der wunderschönen Au.", img: "/images/gen/kontakt.jpeg", pill: "sky" },
  { href: "/stellenangebote", label: "Mitarbeiten", title: "Stellen & Praktika", text: "Wir suchen Verstärkung und bieten Praktikumsplätze in einem tollen Team.", img: "/images/gen/stellenangebote.jpeg", pill: "sage" },
];

export default function Home() {
  return (
    <div className="wrap">
      <section className="hero">
        <div className="hero-card">
          <span className="eyebrow">Herzlich willkommen</span>
          <h1>Geborgen groß werden an der Isar</h1>
          <p>
            Die Elterninitiative Mausegarten e.V. ist seit 2004 eine kleine,
            familiäre Kinderkrippe in der Münchner Au — direkt an den Isarauen.
            In einer Gruppe von <strong>12 Kindern</strong> begleiten feste
            Bezugspersonen die Kleinen von 1–3 Jahren durch ihre ersten großen
            Jahre.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
            <Link href="/anmeldung" className="btn">Platz bewerben →</Link>
            <Link href="/konzept" className="btn ghost">Unser Konzept</Link>
          </div>
        </div>
        <div className="hero-art">
          <img src="/images/gen/hero.jpeg" alt="Papierschnitt-Illustration der Isarauen: sanfte Hügel, ein Fluss und zwei spielende Kleinkinder" />
        </div>
      </section>

      <div className="callout sage">
        <strong>Aktueller Hinweis:</strong> Alle Plätze für das KiTa-Jahr
        2026/2027 sind vergeben. Für <strong>2027/2028</strong> nehmen wir ab
        sofort gerne Eure Bewerbungen entgegen — Bewerbungsfrist ist der
        31.01.2027. Wir freuen uns auf Euch!
      </div>

      <div className="layout">
        <div>
          <section className="section" style={{ marginTop: 20 }}>
            <div className="section-head">
              <div>
                <span className="eyebrow">Wir sind</span>
                <h2>Eine Elterninitiative aus Überzeugung</h2>
              </div>
            </div>
            <div className="prose">
              <p>
                Den Mausegarten gibt es seit August 2004, seit 2005 sind wir ein
                eingetragener gemeinnütziger Verein in der Albanistraße — in
                direkter Nachbarschaft zu den wunderschönen Isarauen mit ihren
                tollen Spielplätzen.
              </p>
              <p>
                Seit über 20 Jahren bieten wir 12 Betreuungsplätze für
                Kleinkinder von 1–3 Jahren. Wir legen Wert auf eine kleine Gruppe
                mit festen erzieherischen Bezugspersonen, um diesen sensiblen
                ersten Lebensabschnitt bestmöglich zu gestalten. Unsere
                Erzieher:innen sind seit vielen Jahren ein tolles Team für dieses
                Ideal.
              </p>
            </div>
          </section>

          <section className="section">
            <div className="section-head">
              <h2>Die wichtigsten Infos</h2>
              <span className="pill lime">Alles auf einen Blick</span>
            </div>
            <div className="grid cols-3">
              {cards.map(({ href, label, title, text, img, pill }) => (
                <Link key={href} href={href} className="card">
                  <div className="art"><img src={img} alt={title} /></div>
                  <span className={`pill ${pill}`}>{label}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span className="more">Mehr erfahren →</span>
                </Link>
              ))}
            </div>
          </section>
        </div>

        <aside className="sidebar">
          <OpeningHours />
          <div className="panel">
            <h3>Gut zu wissen</h3>
            <p className="fine" style={{ margin: 0 }}>
              Die Elterninitiative Mausegarten e.V. wird von der Landeshauptstadt
              München — Referat für Bildung und Sport — und nach Art. 19 BayKiBiG
              gefördert. Wir sind Mitglied im KKT-Kleinkindertagesstätten e.V.,
              der Kontakt- und Beratungsstelle für Elterninitiativen in München.
            </p>
          </div>
          <div className="panel" style={{ background: "var(--sky)", borderColor: "transparent" }}>
            <h3>Schnell bewerben</h3>
            <p className="fine">Lust auf einen Platz ab 2027/2028?</p>
            <Link href="/anmeldung" className="btn dark">Zur Anmeldung →</Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
