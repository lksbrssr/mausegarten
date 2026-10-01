import OpeningHours from "../components/OpeningHours";

export const metadata = { title: "Mitglieder-Bereich", robots: { index: false } };

export default function MitgliederBereich() {
  return (
    <div className="wrap">
      <section className="page-head" style={{ gridTemplateColumns: "1fr" }}>
        <div>
          <span className="eyebrow">Intern</span>
          <h1>Wichtige Links für Mitglieder</h1>
        </div>
      </section>

      <div className="layout">
        <div className="prose">
          <p>
            Wir erstellen gerade Inhalte für diese Seite. Um unseren eigenen hohen
            Qualitätsansprüchen gerecht zu werden benötigen wir hierfür noch etwas
            Zeit.
          </p>

          <h2>Adressliste</h2>
          <p>
            <a
              href="https://docs.google.com/document/d/1S4AEqCDwCMJoECH7nVA1lVf4medlsf1R3h9PMc5CCgk/edit?usp=drive_link"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://docs.google.com/document/d/1S4AEqCDwCMJoECH7nVA1lVf4medlsf1R3h9PMc5CCgk/edit?usp=drive_link
            </a>
          </p>

          <h2>Handbuch</h2>
          <p>
            <a
              href="https://docs.google.com/document/d/1ftmZrnfnpNyk6F6WEJoIsom8jo44cNOZTZ0Gr4oQlh4/edit?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://docs.google.com/document/d/1ftmZrnfnpNyk6F6WEJoIsom8jo44cNOZTZ0Gr4oQlh4/edit?usp=sharing
            </a>
          </p>

          <p>Bitte besuchen Sie diese Seite bald wieder. Vielen Dank für ihr Interesse!</p>

          <h2>Fotos</h2>
          <p>
            <a
              href="https://drive.google.com/drive/folders/1bV5PwYfst6ruzV_Tb0yZNxuvoJO5CAXr?usp=drive_link"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://drive.google.com/drive/folders/1bV5PwYfst6ruzV_Tb0yZNxuvoJO5CAXr?usp=drive_link
            </a>
          </p>

          <h2>Protokolle</h2>
          <p>
            <a
              href="https://drive.google.com/drive/folders/1l5eLDfleq0TcariDzFtJKkD_9Ni_9I2T?usp=drive_link"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://drive.google.com/drive/folders/1l5eLDfleq0TcariDzFtJKkD_9Ni_9I2T?usp=drive_link
            </a>
          </p>
        </div>

        <aside className="sidebar">
          <OpeningHours />
        </aside>
      </div>
    </div>
  );
}
