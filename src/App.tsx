import { useState } from 'react'
import './index.css'

const Logo = () => (
  <svg width="18" height="18" viewBox="0 0 256 256" fill="none">
    <path
      fill="rgb(84, 84, 84)"
      d="M 160 88 L 194 34 L 216 0 L 256 0 L 256 40 L 221.5 93.5 L 200 128 L 256 128 L 256 256 L 96 256 L 96 168 L 64.246 220 L 40 256 L 0 256 L 0 216 L 34 162 L 56 128 L 0 128 L 0 0 L 160 0 Z"
    />
  </svg>
)

const NAV_LINKS = ['Estoque', 'Financiamento', 'Sobre', 'Contato']

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f0f0ee] flex flex-col">
      <style>{`
        @keyframes carFloat {
          0%   { transform: translate(-42%, -48%) scale(1); }
          100% { transform: translate(-42%, -48%) translateX(-18px) scale(1.045); }
        }
        @keyframes shadowPulse {
          0%   { opacity: 0.20; transform: translateX(-35%) scaleX(1); }
          100% { opacity: 0.13; transform: translateX(-35%) scaleX(0.90); }
        }
        @keyframes lightSweep {
          0%   { opacity: 0;   transform: translateX(-140%) rotate(-18deg); }
          12%  { opacity: 1; }
          88%  { opacity: 1; }
          100% { opacity: 0;   transform: translateX(140%) rotate(-18deg); }
        }
        .car-anim {
          animation: carFloat 14s ease-in-out infinite alternate;
          will-change: transform;
        }
        .shadow-anim {
          animation: shadowPulse 14s ease-in-out infinite alternate;
          will-change: transform, opacity;
        }
        .light-anim {
          animation: lightSweep 8s ease-in-out infinite;
          will-change: transform, opacity;
        }
      `}</style>

      {/* ── BACKGROUND LAYER ──────────────────────────────────────── */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">

        {/* Ground shadow — sits behind the car */}
        <div
          className="shadow-anim absolute rounded-full"
          style={{
            left: '50%',
            top: '74%',
            width: '55vw',
            height: '9vw',
            background: 'rgba(0,0,0,0.20)',
            filter: 'blur(48px)',
            transformOrigin: 'center center',
          }}
        />

        {/* Car — transparent PNG, dominant, centered-right */}
        {(() => {
          const [err, setErr] = useState(false)
          return err ? (
            /* Fallback silhouette if image isn't in public/ yet */
            <svg
              aria-hidden="true"
              className="car-anim absolute pointer-events-none select-none opacity-20"
              style={{ left: '50%', top: '50%', width: '82vw', maxWidth: '1400px' }}
              viewBox="0 0 900 380"
              fill="currentColor"
            >
              <path d="M860 220 C860 220 820 170 760 155 L680 130 C650 100 590 70 500 65 C420 60 340 75 280 100 L200 130 C150 145 100 170 80 195 L60 225 C50 235 50 255 65 260 L100 268 C105 295 130 315 160 315 C190 315 215 295 220 268 L670 268 C675 295 700 315 730 315 C760 315 785 295 790 268 L830 260 C850 255 865 240 860 220Z"/>
            </svg>
          ) : (
            <img
              src="/car-black-suv.png"
              alt=""
              aria-hidden="true"
              draggable={false}
              onError={() => setErr(true)}
              className="car-anim absolute object-contain pointer-events-none select-none"
              style={{ left: '50%', top: '50%', width: '82vw', maxWidth: '1400px' }}
            />
          )
        })()}

        {/* Subtle light-sweep reflection */}
        <div
          className="light-anim absolute pointer-events-none"
          style={{
            top: '-10%',
            left: '20%',
            width: '35%',
            height: '130%',
            background:
              'linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.08) 47%, rgba(255,255,255,0.16) 50%, rgba(255,255,255,0.08) 53%, transparent 100%)',
            transformOrigin: 'center center',
          }}
        />

        {/* Left→right gradient — protects text legibility */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(240,240,238,0.95) 0%, rgba(240,240,238,0.55) 42%, transparent 70%)',
          }}
        />

        {/* Bottom gradient — grounds the composition */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to top, rgba(240,240,238,0.80) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* ── NAVBAR ───────────────────────────────────────────────── */}
      <nav className="relative z-10 flex items-center justify-center pt-4 sm:pt-6 px-4 sm:px-8 gap-2 sm:gap-3">
        {/* Logo bubble */}
        <div
          className="flex items-center justify-center rounded-full w-10 h-10 sm:w-11 sm:h-11 shrink-0"
          style={{ backgroundColor: '#EDEDED' }}
        >
          <Logo />
        </div>

        {/* Links pill */}
        <div
          className="flex items-center gap-4 sm:gap-10 rounded-xl px-4 sm:px-8 py-2.5 sm:py-3"
          style={{ backgroundColor: '#EDEDED' }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              onClick={(e) => e.preventDefault()}
              className="text-[12px] sm:text-[14px] font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>
      </nav>

      {/* ── HERO CONTENT ─────────────────────────────────────────── */}
      <div className="flex-1 flex items-end pb-10 sm:pb-16 lg:pb-20 px-6 sm:px-12 md:px-20 lg:px-28">
        <div className="relative z-10 max-w-sm">

          {/* Badge */}
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center gap-1.5 text-[11.5px] font-medium text-blue-500 hover:text-blue-600 transition-colors mb-3 group"
          >
            Novos seminovos disponíveis
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </a>

          {/* Headline */}
          <h1 className="text-[1.5rem] sm:text-[1.75rem] leading-[1.15] font-medium text-gray-900 tracking-tight mb-3">
            Encontre o carro ideal para o seu próximo momento.
          </h1>

          {/* Subtext */}
          <p className="text-[13px] text-gray-500 font-normal mb-3">
            SUVs, sedãs e veículos selecionados com procedência, transparência e atendimento próximo.
          </p>

          {/* CTA */}
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center gap-2 text-[13px] font-medium text-blue-500 border border-blue-400 rounded-full px-5 py-2.5 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-200 group"
          >
            Ver veículos disponíveis
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}
