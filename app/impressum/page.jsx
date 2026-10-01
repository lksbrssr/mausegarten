export const metadata = { title: "Impressum" };

export default function Impressum() {
  return (
    <div className="wrap">
      <section className="page-head" style={{ gridTemplateColumns: "1fr" }}>
        <div>
          <span className="eyebrow">Rechtliches</span>
          <h1>Impressum</h1>
        </div>
      </section>

      <div className="prose" style={{ marginBottom: 60 }}>
        <p>
          Wir sind wegen Förderung von Erziehung durch Bescheinigung des
          Finanzamtes München, StNr. 143/213/50225, seit 2005 als gemeinnützig
          anerkannt. Die Körperschaft Elterninitiative Mausegarten e.V. dient
          ausschließlich und unmittelbar steuerbegünstigten gemeinnützigen Zwecken
          und fördert den als besonders förderungswürdig anerkannten gemeinnützigen
          Zweck Erziehung. Wir sind damit berechtigt, Spendenbescheinigungen
          auszustellen.
        </p>
        <p>
          Die Elterninitiative Mausegarten e.V. wird von der Landeshauptstadt
          München — Referat für Bildung und Sport — und nach Art. 19 BayKiBiG
          gefördert. Wir sind Mitglied im KKT-Kleinkindertagesstätten e.V.
          (www.kkt-muenchen.de), Kontakt- und Beratungsstelle für
          Elterninitiativen in München.
        </p>

        <h2>Vorstand</h2>
        <p>
          Josephine Wichmann (1. Vorstand)<br />
          Patrick Paul (2. Vorstand)<br />
          Stefanie Häußler (Personal-Vorstand)
        </p>

        <h2>Adresse</h2>
        <p>
          Elterninitiative Mausegarten e.V.<br />
          Albanistraße 12<br />
          81541 München
        </p>
        <p>
          <a href="https://www.mausegarten.de">www.mausegarten.de</a><br />
          <a href="mailto:kontakt@mausegarten.de">kontakt@mausegarten.de</a>
        </p>

        <h2>Rechtliche Hinweise</h2>
        <p>
          Herzlichen Dank für Ihren Besuch. Wir freuen uns über Ihr Interesse an
          unserem Internet-Auftritt. Bitte beachten Sie bei der Nutzung unserer
          Website die folgenden Hinweise:
        </p>
        <p>
          <strong>Gewährleistung:</strong> Die Informationen auf unserer Website
          wurden mit größtmöglicher Sorgfalt zusammengestellt. Trotzdem können wir
          nicht für die Fehlerfreiheit oder Genauigkeit der enthaltenen
          Informationen garantieren. Die Gewährleistung oder Haftung jeglicher Art
          ist ausgeschlossen.
        </p>
        <p>
          Alle Text- und Bildrechte liegen bei Mausegarten e.V. Jede Verwertung,
          Wiedergabe oder Veränderung der Inhalte bedarf der schriftlichen
          Zustimmung des Rechte-Inhabers.
        </p>
        <p>
          <strong>Links:</strong> Trotz sorgfältiger inhaltlicher Kontrolle
          übernehmen wir keine Haftung für die Inhalte externer Websites, die über
          die Links besucht werden können. Hierbei handelt es sich um fremde
          Angebote, auf deren inhaltliche Gestaltung wir keinen Einfluss haben.
          Sollten Sie Kenntnis von rechtswidrigen Inhalten auf verlinkten Seiten
          erhalten, geben Sie uns bitte einen Hinweis.
        </p>
        <p style={{ color: "var(--ink-soft)", fontSize: "0.9rem" }}>
          Webmaster: Thomas Reichel · website@mausegarten.de
        </p>
      </div>
    </div>
  );
}
