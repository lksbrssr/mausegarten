// Papercut-style SVG illustrations: flat layered "cut paper" shapes with
// soft offset shadows between layers and a subtle paper grain overlay.

function Defs({ id }) {
  return (
    <defs>
      {/* soft shadow that sits under each paper layer */}
      <filter id={`${id}-shadow`} x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#1c2b2a" floodOpacity="0.18" />
      </filter>
      {/* paper grain */}
      <filter id={`${id}-grain`}>
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" result="n" />
        <feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.05 0" />
      </filter>
    </defs>
  );
}

function Grain({ id }) {
  return <rect x="0" y="0" width="400" height="260" filter={`url(#${id}-grain)`} />;
}

/* ---------------- Hero: Isarauen landscape with children ---------------- */
export function HeroScene() {
  const id = "hero";
  const s = `url(#${id}-shadow)`;
  return (
    <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Papierschnitt-Landschaft der Isarauen mit spielenden Kindern">
      <Defs id={id} />
      {/* sky */}
      <rect width="400" height="260" fill="#cfe7ea" />
      {/* sun */}
      <circle cx="320" cy="56" r="30" fill="#f3d9a8" filter={s} />
      {/* far hills */}
      <path d="M0 150 Q90 108 190 134 T400 120 V260 H0 Z" fill="#cde0ad" filter={s} />
      {/* mid hill */}
      <path d="M0 176 Q120 140 230 168 T400 158 V260 H0 Z" fill="#a9d08a" filter={s} />
      {/* river (Isar) */}
      <path d="M150 260 C170 210 150 200 185 170 C210 148 205 132 240 118 L285 118 C250 140 258 158 232 182 C205 206 222 220 205 260 Z" fill="#7fc4c0" filter={s} />
      <path d="M176 260 C190 220 180 206 200 184" stroke="#a8dedb" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* front meadow */}
      <path d="M0 200 Q130 176 260 198 T400 196 V260 H0 Z" fill="#6bb06a" filter={s} />
      {/* trees */}
      <g filter={s}>
        <rect x="63" y="150" width="7" height="26" rx="2" fill="#9a6b3f" />
        <circle cx="66" cy="142" r="22" fill="#4f9e5b" />
        <circle cx="54" cy="150" r="14" fill="#5cae66" />
        <circle cx="80" cy="150" r="14" fill="#5cae66" />
      </g>
      <g filter={s}>
        <rect x="330" y="168" width="6" height="22" rx="2" fill="#9a6b3f" />
        <circle cx="333" cy="162" r="17" fill="#468f54" />
      </g>
      {/* child 1 - red */}
      <g filter={s}>
        <circle cx="120" cy="196" r="9" fill="#f0c9a0" />
        <path d="M111 205 Q120 198 129 205 L127 230 H113 Z" fill="#e98d6b" />
        <rect x="114" y="228" width="4" height="12" rx="2" fill="#4a4a4a" />
        <rect x="122" y="228" width="4" height="12" rx="2" fill="#4a4a4a" />
        <path d="M111 190 Q120 180 129 190 Q125 186 120 186 Q115 186 111 190 Z" fill="#6b4a2f" />
      </g>
      {/* child 2 - teal */}
      <g filter={s}>
        <circle cx="160" cy="202" r="9" fill="#f0c9a0" />
        <path d="M151 211 Q160 204 169 211 L167 236 H153 Z" fill="#3f9d99" />
        <rect x="154" y="234" width="4" height="12" rx="2" fill="#4a4a4a" />
        <rect x="162" y="234" width="4" height="12" rx="2" fill="#4a4a4a" />
        <path d="M151 196 Q160 187 169 196 L166 199 Q160 193 154 199 Z" fill="#e8b84b" />
      </g>
      {/* little flowers */}
      <g>
        <circle cx="40" cy="236" r="3" fill="#e98d6b" /><circle cx="300" cy="238" r="3" fill="#e8b84b" />
        <circle cx="250" cy="244" r="3" fill="#e98d6b" /><circle cx="90" cy="246" r="3" fill="#fff" />
      </g>
      <Grain id={id} />
    </svg>
  );
}

/* ---------------- Spot illustrations (card thumbnails) ---------------- */

export function SpotHouse() {
  const id = "house"; const s = `url(#${id}-shadow)`;
  return (
    <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <Defs id={id} />
      <rect width="400" height="260" fill="#f3e7cf" />
      <circle cx="330" cy="60" r="26" fill="#f3d9a8" filter={s} />
      <path d="M0 210 Q200 190 400 210 V260 H0 Z" fill="#cde0ad" filter={s} />
      <g filter={s}>
        <rect x="120" y="128" width="150" height="92" rx="6" fill="#e9d4b0" />
        <path d="M110 130 L195 78 L280 130 Z" fill="#e98d6b" />
        <rect x="150" y="160" width="34" height="34" rx="3" fill="#7fc4c0" />
        <rect x="206" y="160" width="34" height="34" rx="3" fill="#7fc4c0" />
        <rect x="182" y="178" width="26" height="42" rx="3" fill="#9a6b3f" />
      </g>
      <g filter={s}>
        <rect x="66" y="150" width="6" height="70" rx="2" fill="#9a6b3f" />
        <circle cx="69" cy="140" r="22" fill="#5cae66" />
      </g>
      <Grain id={id} />
    </svg>
  );
}

export function SpotLeaf() {
  const id = "leaf"; const s = `url(#${id}-shadow)`;
  return (
    <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <Defs id={id} />
      <rect width="400" height="260" fill="#dbe7c6" />
      <g filter={s}>
        <path d="M200 40 C120 90 120 190 200 230 C280 190 280 90 200 40 Z" fill="#6bb06a" />
        <path d="M200 50 L200 220" stroke="#3d7b47" strokeWidth="5" strokeLinecap="round" />
        <path d="M200 100 L150 80 M200 130 L160 118 M200 100 L250 80 M200 130 L240 118 M200 160 L165 155 M200 160 L235 155" stroke="#3d7b47" strokeWidth="3" strokeLinecap="round" />
      </g>
      <circle cx="90" cy="70" r="16" fill="#e8b84b" filter={s} />
      <circle cx="320" cy="200" r="12" fill="#e98d6b" filter={s} />
      <Grain id={id} />
    </svg>
  );
}

export function SpotBlocks() {
  const id = "blocks"; const s = `url(#${id}-shadow)`;
  return (
    <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <Defs id={id} />
      <rect width="400" height="260" fill="#f6f2e9" />
      <path d="M0 210 H400 V260 H0 Z" fill="#cde0ad" filter={s} />
      <g filter={s}>
        <rect x="120" y="150" width="60" height="60" rx="8" fill="#e98d6b" />
        <rect x="186" y="150" width="60" height="60" rx="8" fill="#7fc4c0" />
        <rect x="150" y="88" width="60" height="60" rx="8" fill="#e8b84b" />
        <circle cx="265" cy="180" r="30" fill="#8e7bc4" />
      </g>
      <Grain id={id} />
    </svg>
  );
}

export function SpotMail() {
  const id = "mail"; const s = `url(#${id}-shadow)`;
  return (
    <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <Defs id={id} />
      <rect width="400" height="260" fill="#bfe0e4" />
      <g filter={s}>
        <rect x="110" y="96" width="180" height="120" rx="10" fill="#f6f2e9" />
        <path d="M110 106 L200 170 L290 106" fill="none" stroke="#e98d6b" strokeWidth="8" strokeLinejoin="round" />
      </g>
      <circle cx="320" cy="60" r="18" fill="#e8b84b" filter={s} />
      <Grain id={id} />
    </svg>
  );
}

export function SpotPhone() {
  const id = "phone"; const s = `url(#${id}-shadow)`;
  return (
    <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <Defs id={id} />
      <rect width="400" height="260" fill="#f3e7cf" />
      <path d="M0 150 Q200 120 400 150 V260 H0 Z" fill="#a9d08a" filter={s} />
      <g filter={s}>
        <rect x="150" y="70" width="100" height="150" rx="16" fill="#2b2a26" />
        <rect x="160" y="84" width="80" height="112" rx="6" fill="#7fc4c0" />
        <circle cx="200" cy="208" r="6" fill="#f6f2e9" />
      </g>
      <Grain id={id} />
    </svg>
  );
}

export function SpotWork() {
  const id = "work"; const s = `url(#${id}-shadow)`;
  return (
    <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <Defs id={id} />
      <rect width="400" height="260" fill="#dbe7c6" />
      <circle cx="320" cy="64" r="24" fill="#f3d9a8" filter={s} />
      <g filter={s}>
        <circle cx="160" cy="110" r="26" fill="#f0c9a0" />
        <path d="M118 210 Q118 150 160 150 Q202 150 202 210 Z" fill="#3f9d99" />
        <path d="M150 96 Q160 84 170 96 Q182 92 178 108 L142 108 Q138 92 150 96 Z" fill="#6b4a2f" />
      </g>
      <g filter={s}>
        <circle cx="250" cy="126" r="22" fill="#f0c9a0" />
        <path d="M216 212 Q216 160 250 160 Q284 160 284 212 Z" fill="#e98d6b" />
        <path d="M234 114 Q250 104 266 114 L262 118 Q250 110 238 118 Z" fill="#e8b84b" />
      </g>
      <Grain id={id} />
    </svg>
  );
}

export function SpotDoc() {
  const id = "doc"; const s = `url(#${id}-shadow)`;
  return (
    <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <Defs id={id} />
      <rect width="400" height="260" fill="#f6f2e9" />
      <g filter={s}>
        <rect x="140" y="56" width="120" height="150" rx="8" fill="#fff" transform="rotate(-5 200 130)" />
        <rect x="150" y="66" width="120" height="150" rx="8" fill="#eef5df" transform="rotate(4 200 130)" />
        <g transform="rotate(4 200 130)">
          <rect x="166" y="92" width="88" height="8" rx="4" fill="#a9d08a" />
          <rect x="166" y="112" width="88" height="8" rx="4" fill="#cfe0b6" />
          <rect x="166" y="132" width="60" height="8" rx="4" fill="#cfe0b6" />
          <rect x="166" y="160" width="40" height="18" rx="9" fill="#e3ec8a" />
        </g>
      </g>
      <Grain id={id} />
    </svg>
  );
}
