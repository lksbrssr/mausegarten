"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Über uns" },
  { href: "/konzept", label: "Konzept" },
  { href: "/organisation-kosten", label: "Organisation & Kosten" },
  { href: "/stellenangebote", label: "Stellenangebote" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
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
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={isActive(l.href) ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/anmeldung"
            className={`nav-cta ${isActive("/anmeldung") ? "active" : ""}`}
            onClick={() => setOpen(false)}
          >
            Anmeldung →
          </Link>
        </nav>
      </div>
    </header>
  );
}
