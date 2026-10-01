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
          Finanzamtes München, StNr. 143/213/50225 seit 2005 als gemeinnützig
          anerkannt. Die Körperschaft Elterninitiative Mausegarten e.V. dient
          ausschließlich und unmittelbar steuerbegünstigten gemeinnützigen
          Zwecken. Die Körperschaft fördert den als besonders förderungswürdig
          anerkannten gemeinnützigen Zweck Erziehung.
        </p>
        <p>Wir sind damit berechtigt Spendenbescheinigungen auszustellen.</p>
        <p>
          Die Elterninitiative Mausegarten e.V. wird von der Landeshauptstadt
          München - Referat für Bildung und Sport und nach Art. 19 BayKiBiG
          gefördert.
        </p>
        <p>
          Wir sind Mitglied im KKT-Kleinkindertagesstätten e.V.
          (www.kkt-muenchen.de) Kontakt- und Beratungsstelle für
          Elterninitiativen in München.
        </p>

        <h3>Vorstand</h3>
        <p>
          Josephine Wichmann (1. Vorstand)<br />
          Patrick Paul (2. Vorstand)<br />
          Stefanie Häußler (Personal-Vorstand)
        </p>

        <h3>Adresse</h3>
        <p>
          Elterninitiative Mausegarten e.V.<br />
          Albanistraße 12<br />
          81541 München
        </p>
        <p>
          <a href="https://www.mausegarten.de">www.mausegarten.de</a>
          <br />
          <a href="mailto:kontakt@mausegarten.de">kontakt(at)mausegarten.de</a>
        </p>

        <h3>Rechtliche Hinweise</h3>
        <p>
          Herzlichen Dank für Ihren Besuch. Wir freuen uns über Ihr Interesse an
          unserem Internet-Auftritt. Bitte beachten Sie bei der Nutzung unserer
          Website die folgenden Hinweise:
        </p>
        <p>
          Gewährleistung: Die Informationen auf unserer Website wurden mit
          größtmöglicher Sorgfalt zusammengestellt. Trotzdem können wir nicht für
          die Fehlerfreiheit oder Genauigkeit der enthaltenen Informationen
          garantieren. Die Gewährleistung oder Haftung jeglicher Art ist
          ausgeschlossen.
        </p>
        <p>
          Alle Text- und Bildrechte liegen bei Mausegarten e.V.. Jede Verwertung,
          Wiedergabe oder Veränderung der Inhalte bedarf der schriftlichen
          Zustimmung des Rechte-Inhabers.
        </p>
        <p>
          Links<br />
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
          für die Inhalte externer Websites, die über die Links besucht werden
          können. Hierbei handelt es sich um fremde Angebote und Informationen,
          auf deren inhaltliche Gestaltung wir keinen Einfluss haben. Sollten Sie
          Kenntnis von rechtswidrigen Inhalten auf den Websites anderer Anbieter
          erhalten, die Sie über unsere Website per Link besuchen können, geben
          Sie uns bitte einen Hinweis, damit wir den Link auf das entsprechende
          Angebot prüfen können.
        </p>
        <p>
          Webmaster: Thomas Reichel{" "}
          <a href="mailto:website@mausegarten.de">website(at)mausegarten.de</a>
        </p>
      </div>
    </div>
  );
}
