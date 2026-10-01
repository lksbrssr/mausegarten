import { NextResponse } from "next/server";

// Passwortschutz für den Mitglieder-Bereich (HTTP Basic Auth).
// Zugangsdaten über Umgebungsvariablen MITGLIEDER_USER / MITGLIEDER_PASSWORT
// setzen (z.B. in den Vercel Project Settings). Fallback nur für die Testversion.
export const config = {
  matcher: ["/mitglieder-bereich", "/mitglieder-bereich/:path*"],
};

export function middleware(req) {
  const USER = process.env.MITGLIEDER_USER || "mitglieder";
  const PASS = process.env.MITGLIEDER_PASSWORT || "mausegarten";

  const header = req.headers.get("authorization");
  if (header) {
    const [scheme, encoded] = header.split(" ");
    if (scheme === "Basic" && encoded) {
      const decoded = atob(encoded);
      const sep = decoded.indexOf(":");
      const user = decoded.slice(0, sep);
      const pass = decoded.slice(sep + 1);
      if (user === USER && pass === PASS) {
        return NextResponse.next();
      }
    }
  }

  return new NextResponse("Zugang nur für Mitglieder.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Mausegarten Mitglieder-Bereich", charset="UTF-8"',
    },
  });
}
