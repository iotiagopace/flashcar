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

function CarAnimated({ className, style }: { className?: string; style?: React.CSSProperties }) {
  const [err, setErr] = useState(false)
  if (err) return null
  return (
    <img
      src="/car-black-suv.png"
      alt=""
      aria-hidden="true"
      draggable={false}
      onError={() => setErr(true)}
      className={`car-anim absolute object-contain pointer-events-none select-none ${className ?? ''}`}
      style={style}
    />
  )
}

export default function App() {
  return (
    <div className="bg-[#f0f0ee] flex flex-col min-h-screen">
      <style>{`
        @keyframes carFloat {
          0%   { transform: translate(-50%, -50%) scale(1); }
          100% { transform: translate(-50%, -50%) translateX(-14px) scale(1.04); }
        }
        @keyframes carFloatCard {
          0%   { transform: translateX(0px) scale(1); }
          100% { transform: translateX(-12px) scale(1.03); }
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
        .car-anim-card {
          animation: carFloatCard 14s ease-in-out infinite alternate;
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

      {/* ── NAVBAR ───────────────────────────────────────────────── */}
      <nav className="relative z-10 flex items-center justify-center pt-4 sm:pt-6 px-4 sm:px-8 gap-2 sm:gap-3">
        <div
          className="flex items-center justify-center rounded-full w-10 h-10 sm:w-11 sm:h-11 shrink-0"
          style={{ backgroundColor: '#EDEDED' }}
        >
          <Logo />
        </div>
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

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden flex-1 flex items-end pb-10 sm:pb-16 lg:pb-20 px-6 sm:px-12 md:px-20 lg:px-28">
        {/* Background car */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div
            className="shadow-anim absolute rounded-full"
            style={{
              left: '50%', top: '74%',
              width: '55vw', height: '9vw',
              background: 'rgba(0,0,0,0.20)',
              filter: 'blur(48px)',
              transformOrigin: 'center center',
            }}
          />
          <CarAnimated style={{ left: '65%', top: '52%', width: '75vw', maxWidth: '900px' }} />
          <div
            className="light-anim absolute pointer-events-none"
            style={{
              top: '-10%', left: '20%', width: '35%', height: '130%',
              background: 'linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.08) 47%, rgba(255,255,255,0.16) 50%, rgba(255,255,255,0.08) 53%, transparent 100%)',
              transformOrigin: 'center center',
            }}
          />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(240,240,238,0.95) 0%, rgba(240,240,238,0.55) 42%, transparent 70%)' }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(240,240,238,0.80) 0%, transparent 50%)' }} />
        </div>

        <div className="relative z-10 max-w-sm">
          <a href="#" onClick={(e) => e.preventDefault()} className="inline-flex items-center gap-1.5 text-[11.5px] font-medium text-blue-500 hover:text-blue-600 transition-colors mb-3 group">
            Novos seminovos disponíveis
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </a>
          <h1 className="text-[1.5rem] sm:text-[1.75rem] leading-[1.15] font-medium text-gray-900 tracking-tight mb-3">
            Encontre o carro ideal para o seu próximo momento.
          </h1>
          <p className="text-[13px] text-gray-500 font-normal mb-3">
            SUVs, sedãs e veículos selecionados com procedência, transparência e atendimento próximo.
          </p>
          <a href="#" onClick={(e) => e.preventDefault()} className="inline-flex items-center gap-2 text-[13px] font-medium text-blue-500 border border-blue-400 rounded-full px-5 py-2.5 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-200 group">
            Ver veículos disponíveis
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </a>
        </div>
      </section>

      {/* ── AVALIAÇÃO CARD SECTION ───────────────────────────────── */}
      <section className="px-6 sm:px-12 md:px-20 lg:px-28 pb-16 sm:pb-20">
        <div className="relative rounded-2xl overflow-hidden min-h-[320px] sm:min-h-[380px] bg-[#e8e8e6]">

          {/* Carro animado como background do card */}
          <img
            src="/car-black-suv.png"
            alt=""
            aria-hidden="true"
            draggable={false}
            className="car-anim-card absolute object-contain object-bottom pointer-events-none select-none"
            style={{ right: '-5%', bottom: '0', width: '85%', maxWidth: '680px', opacity: 1 }}
          />

          {/* Badge topo direito */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-[#C0392B] rounded-2xl px-5 py-4 text-white text-right shadow-lg">
            <p className="text-[10px] font-semibold tracking-widest uppercase opacity-90 mb-1">Avaliação grátis em</p>
            <p className="text-[1.6rem] sm:text-[2rem] font-bold leading-none">40 minutos</p>
          </div>

          {/* Cards rodapé */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row gap-3">
            {/* 24 min */}
            <div className="bg-white rounded-2xl px-4 py-3 flex items-center gap-3 shadow-md flex-1">
              <div className="w-10 h-10 rounded-xl bg-[#F5C518] flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L4.09 12.11a1 1 0 0 0 .77 1.64H11l-1 8.25L19.91 11.89A1 1 0 0 0 19.14 10.25H13l1-8.25Z" fill="#1a1a1a"/>
                </svg>
              </div>
              <div>
                <p className="text-[1.1rem] font-bold text-gray-900 leading-none">24 min</p>
                <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase mt-0.5">Recorde de Liquidação</p>
              </div>
            </div>

            {/* 15.000 veículos */}
            <div className="bg-white rounded-2xl px-4 py-3 flex items-center gap-3 shadow-md flex-1">
              <div className="w-8 h-8 shrink-0 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Z" fill="#C0392B" opacity="0.15"/>
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Z" stroke="#C0392B" strokeWidth="1.5"/>
                  <path d="M8 12l3 3 5-5" stroke="#C0392B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-[0.95rem] font-semibold text-gray-800">+15.000 veículos intermediados</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
