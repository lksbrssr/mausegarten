import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata = {
  metadataBase: new URL("https://mausegarten.vercel.app"),
  title: {
    default: "Elterninitiative Mausegarten e.V. — Kinderkrippe in München-Au",
    template: "%s · Mausegarten e.V.",
  },
  description:
    "Die Elterninitiative Mausegarten e.V. ist eine kleine, liebevolle Kinderkrippe in der Münchner Au. 12 Betreuungsplätze für Kleinkinder von 1–3 Jahren, direkt an den Isarauen.",
  keywords: [
    "Kinderkrippe München",
    "Krippenplatz Au",
    "Elterninitiative",
    "Betreuung 1-3 Jahre",
    "Mausegarten",
  ],
  openGraph: {
    title: "Elterninitiative Mausegarten e.V.",
    description:
      "Kleine, liebevolle Kinderkrippe in der Münchner Au — 12 Plätze für Kinder von 1–3 Jahren.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
