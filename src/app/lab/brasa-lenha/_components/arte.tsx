// Arte em SVG/CSS (nenhuma imagem de terceiros). Tudo decorativo: aria-hidden.

// Grelha: barras finas sobre o carvão e brilho de brasa embaixo.
export const grelhaStyle = {
  backgroundImage:
    'repeating-linear-gradient(90deg, rgb(255 255 255 / 0.035) 0 2px, transparent 2px 28px), radial-gradient(ellipse 80% 60% at 50% 110%, rgb(242 128 58 / 0.28), transparent 70%)',
}

export function Chamas({ className }: { className?: string }) {
  return (
    // Anima o wrapper, não o <svg> (rendering-animate-svg-wrapper); motion-safe respeita reduced motion.
    <div aria-hidden="true" className={`origin-bottom motion-safe:animate-pulse motion-safe:[animation-duration:3.5s] ${className ?? ''}`}>
      <svg viewBox="0 0 200 240" className="h-full w-full">
        <defs>
          <linearGradient id="bl-fogo" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stopColor="#c2410c" />
            <stop offset=".55" stopColor="#f2803a" />
            <stop offset="1" stopColor="#fcd34d" />
          </linearGradient>
          <linearGradient id="bl-miolo" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stopColor="#f59e0b" />
            <stop offset="1" stopColor="#fef3c7" />
          </linearGradient>
        </defs>
        <path
          fill="url(#bl-fogo)"
          d="M100 8c10 34 44 52 50 96 4 30-6 52-18 64 4-20-2-38-14-48 2 26-10 40-18 46 2-16-4-30-12-36-2 20-16 30-20 44-14-12-22-30-20-52 2-26 24-40 30-62 6 12 6 24 2 34 14-12 24-50 20-86Z"
        />
        <path
          fill="url(#bl-miolo)"
          d="M102 96c6 22 26 32 26 58 0 18-12 30-26 34 8-12 6-24-2-32 0 14-8 22-16 26-10-8-14-22-10-36 4-14 16-22 18-34 4 6 6 14 4 22 8-10 10-24 6-38Z"
        />
        <g fill="#3a2a22">
          <rect x="22" y="196" width="156" height="14" rx="7" transform="rotate(-8 100 203)" />
          <rect x="22" y="196" width="156" height="14" rx="7" transform="rotate(8 100 203)" />
        </g>
        <g fill="#f2803a">
          <circle cx="62" cy="212" r="3" />
          <circle cx="104" cy="218" r="2.5" />
          <circle cx="142" cy="210" r="3" />
        </g>
      </svg>
    </div>
  )
}

export function MapaArte() {
  return (
    <svg viewBox="0 0 320 200" aria-hidden="true" className="h-full w-full">
      <rect width="320" height="200" fill="#221915" />
      {/* rio */}
      <path d="M-10 160C60 140 90 190 160 170s120-40 180-20v60H-10Z" fill="#2b3a3a" />
      {/* quadras e ruas */}
      <g stroke="#3a2a22" strokeWidth="10" strokeLinecap="round" fill="none">
        <path d="M0 40h320M0 100h320M60 0v150M150 0v170M250 0v160" />
      </g>
      <path d="M0 70C90 60 200 120 320 80" stroke="#4a382e" strokeWidth="14" fill="none" />
      <g fill="#a8927b" fontSize="9" fontFamily="sans-serif">
        <text x="170" y="34">Rua das Paineiras</text>
        <text x="8" y="94">Av. Cassiano Ricardo</text>
      </g>
      {/* pin */}
      <g transform="translate(200 40)">
        <circle r="18" fill="#f2803a" opacity=".18" />
        <path d="M0 6C-8-4-12-10-12-16a12 12 0 0 1 24 0c0 6-4 12-12 22Z" fill="#f2803a" transform="translate(0 -6)" />
        <circle cy="-22" r="4" fill="#16100d" />
      </g>
    </svg>
  )
}
