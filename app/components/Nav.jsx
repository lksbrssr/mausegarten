"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Über uns" },
  { href: "/konzept", label: "Konzept" },
  { href: "/organisation-kosten", label: "Organisation & Kosten" },
  { href: "/anmeldung", label: "Anmeldung" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/stellenangebote", label: "Stellenangebote" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <Image src="/images/logo2.png" alt="Mausegarten Logo" width={38} height={38} />
          <span>Mausegarten e.V.</span>
        </Link>
        <button
          className="nav-toggle"
          aria-label="Menü öffnen"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
        <nav className={`nav ${open ? "open" : ""}`}>
          {links.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={active ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
