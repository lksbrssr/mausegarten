import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <h4>Elterninitiative Mausegarten e.V.</h4>
          <p className="fine">
            Seit über 20 Jahren eine kleine, liebevolle Kinderkrippe in der
            Münchner Au — direkt an den Isarauen. 12 Betreuungsplätze für
            Kleinkinder von 1–3 Jahren.
          </p>
          <p className="fine">
            Gefördert von der Landeshauptstadt München (Referat für Bildung und
            Sport) nach Art. 19 BayKiBiG. Mitglied im KKT e.V.
          </p>
        </div>
        <div>
          <h4>Seiten</h4>
          <Link href="/">Über uns</Link>
          <Link href="/konzept">Konzept</Link>
          <Link href="/organisation-kosten">Organisation & Kosten</Link>
          <Link href="/anmeldung">Anmeldung</Link>
          <Link href="/stellenangebote">Stellenangebote</Link>
          <Link href="/mitglieder-bereich">Mitglieder-Bereich</Link>
        </div>
        <div>
          <h4>Kontakt</h4>
          <p className="fine">
            Albanistraße 12<br />
            81541 München – Au
          </p>
          <a href="mailto:kontakt@mausegarten.de">kontakt@mausegarten.de</a>
          <div style={{ marginTop: 10 }}>
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Elterninitiative Mausegarten e.V. · Testversion —
        Neuaufbau der Website
      </div>
    </footer>
  );
}
