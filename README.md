# Mausegarten e.V. — Website (Neuaufbau)

Ein Neuaufbau der Website der [Elterninitiative Mausegarten e.V.](https://www.mausegarten.de/),
einer kleinen Kinderkrippe in der Münchner Au.

**Testversion** — Inhalte stammen von der bestehenden Website und sollten vor
einem Live-Gang geprüft werden (insb. Datenschutz & Impressum).

## Design

- Editorial, ruhiges Layout (inspiriert von [nantesbuch.de](https://nantesbuch.de/))
- **Papierschnitt-Stil** ("Papercut"): die Illustrationen sind handgebaute,
  mehrschichtige SVGs mit weichen Schatten und Papier-Körnung — siehe
  `app/components/Papercut.jsx`. Keine Bild-Assets nötig, alles skalierbar.

## Tech

- [Next.js](https://nextjs.org/) (App Router), React 19
- Reines CSS (`app/globals.css`), keine UI-Abhängigkeiten
- Statisch generiert, deployt auf Vercel

## Entwicklung

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Produktions-Build
```

## Seiten

`/` Über uns · `/konzept` · `/organisation-kosten` · `/anmeldung` ·
`/kontakt` · `/stellenangebote` · `/impressum` · `/datenschutz`
