/* ============================================================
   Shared.jsx — Nav, Footer, Icon, small primitives.
   Exposed on window for use across all *.jsx files.
   ============================================================ */

const LOGO_COLOR = "../../assets/logo-flashcar-color.png";
const LOGO_WHITE = "../../assets/logo-flashcar-white.png";

/* Phosphor icon wrapper (kept name "MS" to avoid renaming all call sites).
   Maps Material-Symbols-style names → Phosphor names, picks weight variant. */
const ICON_MAP = {
  // brand & motion
  bolt: "lightning",
  // vehicles
  directions_car: "car-profile",
  two_wheeler: "motorcycle",
  local_shipping: "truck",
  // trust / security
  verified_user: "shield-check",
  shield_lock: "lock-key",
  verified: "seal-check",
  // people & money
  groups: "users-three",
  payments: "wallet",
  pix: "currency-circle-dollar",
  // process / actions
  event_available: "calendar-check",
  campaign: "megaphone",
  sell: "tag",
  hub: "graph",
  request_quote: "file-text",
  handshake: "handshake",
  gavel: "gavel",
  support_agent: "headset",
  workspace_premium: "trophy",
  check_circle: "check-circle",
  check: "check",
  close: "x",
  format_quote: "quotes",
  flag: "flag",
  visibility: "eye",
  auto_awesome: "sparkle",
  inventory_2: "package",
  ads_click: "cursor-click",
  school: "graduation-cap",
  rocket_launch: "rocket-launch",
  savings: "piggy-bank",
  business_center: "briefcase",
  // misc
  place: "map-pin",
  schedule: "clock",
  call: "phone",
  storefront: "storefront",
  arrow_forward: "arrow-right",
  menu: "list",
  question_answer: "chat-circle-dots",
  plus: "plus",
  minus: "minus",
};

function MS({ name, size = 24, fill = 0, weight = 400, style }) {
  const phName = ICON_MAP[name] || name;
  // Variant: fill > bold (700+) > regular
  let variant = "ph";
  if (fill === 1) variant = "ph-fill";
  else if (weight >= 600) variant = "ph-bold";
  else if (weight <= 300) variant = "ph-light";
  return (
    <i
      className={`${variant} ph-${phName}`}
      style={{
        fontSize: size,
        lineHeight: 1,
        display: "inline-flex",
        verticalAlign: "middle",
        ...style,
      }}
      aria-hidden="true"
    />
  );
}

/* Inline whatsapp glyph (kept brand-accurate vs. material symbol) */
function WhatsAppIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.6-.8-2.7-1.4-3.7-3.2-.3-.5.3-.4.7-1.4.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.1.2 2 3.1 4.9 4.4 1.8.8 2.5.8 3.4.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.7.4 3.4 1.3 4.9L2 22l5.3-1.3c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
    </svg>
  );
}

/* Nav */
const NAV_ITEMS = [
  { id: "home",          label: "Vender meu veículo", aliasOf: "home" },
  { id: "como-funciona", label: "Como funciona" },
  { id: "sobre",         label: "Sobre a Flash Car" },
  { id: "unidades",      label: "Unidades" },
  { id: "faq",           label: "Central de ajuda" },
  { id: "franquia",      label: "Seja um franqueado" },
];

function Nav({ current, onNav }) {
  return (
    <nav className="fc-nav">
      <a
        href="#home"
        className="fc-nav__brand"
        onClick={(e) => { e.preventDefault(); onNav("home"); }}
        aria-label="Flash Car Store — Início"
      >
        <img src={LOGO_COLOR} alt="Flash Car Store" />
      </a>
      <div className="fc-nav__links">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => { e.preventDefault(); onNav(item.id); }}
            className={
              "fc-nav__link" +
              (current === item.id ? " fc-nav__link--active" : "")
            }
          >
            {item.label}
          </a>
        ))}
      </div>
      <a
        href="#agendar"
        className="fc-btn fc-btn--primary fc-nav__cta"
        onClick={(e) => { e.preventDefault(); onNav("home"); }}
      >
        Agendar avaliação
      </a>
      <button className="fc-nav__menu-btn" aria-label="Abrir menu">
        <MS name="menu" size={26} />
      </button>
    </nav>
  );
}

/* Footer */
function Footer({ onNav }) {
  return (
    <React.Fragment>
      <footer className="kit-footer">
        <div className="kit-footer__inner">
          <div className="kit-footer__brand">
            <img src={LOGO_WHITE} alt="Flash Car Store" />
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, maxWidth: 280, color: "rgba(255,255,255,0.85)" }}>
              Especialistas em intermediação automotiva. Conectamos vendedores a compradores
              verificados — com segurança, agilidade e pagamento via PIX.
            </p>
          </div>
          <div>
            <h4>Para você</h4>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNav("home"); }}>Vender meu veículo</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNav("como-funciona"); }}>Como funciona</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNav("unidades"); }}>Encontrar unidade</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNav("faq"); }}>Central de ajuda</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNav("sobre"); }}>Sobre a Flash Car</a></li>
            </ul>
          </div>
          <div>
            <h4>Para empreendedores</h4>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNav("franquia"); }}>Seja um franqueado</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Modelos de investimento</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Suporte 360°</a></li>
            </ul>
          </div>
          <div>
            <h4>Receba novidades</h4>
            <p style={{ margin: "0 0 12px", fontSize: 13, color: "rgba(255,255,255,0.7)" }}>
              Sem spam. Apenas oportunidades de venda e novidades das unidades.
            </p>
            <form className="kit-footer__newsletter" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="seu@email.com" aria-label="E-mail" />
              <button type="submit" aria-label="Inscrever">
                <MS name="arrow_forward" size={20} />
              </button>
            </form>
          </div>
        </div>
        <div className="kit-footer__bottom">
          <span>© 2026 Flash Car Store · Todos os direitos reservados · contato@flashcar.store</span>
          <a
            href="https://metry.cc"
            target="_blank"
            rel="noopener noreferrer"
            className="kit-footer__credit"
          >
            Desenvolvido por <strong>metry.cc</strong>
            <MS name="arrow_forward" size={14} style={{ transform: "rotate(-45deg)" }} />
          </a>
        </div>
      </footer>
      <a
        href="https://wa.me/5500000000000"
        className="fc-fab-whatsapp"
        aria-label="Falar no WhatsApp"
        onClick={(e) => e.preventDefault()}
      >
        <WhatsAppIcon size={26} />
      </a>
    </React.Fragment>
  );
}

/* Trust bar (used on home + como funciona) */
function TrustBar() {
  const items = [
    { icon: "verified_user", label: "Avaliação especializada" },
    { icon: "groups",        label: "Compradores verificados" },
    { icon: "payments",      label: "Pagamento à vista" },
    { icon: "shield_lock",   label: "Processo 100% seguro" },
  ];
  return (
    <div style={{ background: "white", borderBottom: "1px solid var(--border-soft)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "32px 24px" }}>
        <div className="fc-trust" style={{ border: 0, padding: 0 }}>
          {items.map((it) => (
            <div className="fc-trust__item" key={it.icon}>
              <div className="fc-trust__icon"><MS name={it.icon} size={22} /></div>
              <div className="fc-trust__label">{it.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* End-of-page red CTA card */
function ConversionCard({ title, body, primary, secondary, onNav }) {
  return (
    <section style={{ padding: "48px 24px", background: "var(--bg-subtle)" }}>
      <div
        className="fc-card--brand"
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          display: "flex",
          gap: 24,
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "space-between",
          padding: 36,
          borderRadius: 16,
          background: "var(--fc-red)",
          color: "white",
        }}
      >
        <div style={{ maxWidth: 540 }}>
          <h3 style={{
            margin: "0 0 8px",
            font: "800 26px var(--font-display)",
            color: "white",
            letterSpacing: "-0.01em",
            lineHeight: 1.15,
          }}>{title}</h3>
          <p style={{ margin: 0, fontSize: 15, color: "rgba(255,255,255,0.9)" }}>{body}</p>
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <button
            className="fc-btn fc-btn--lg"
            style={{ background: "var(--fc-navy-900)", color: "white" }}
            onClick={() => onNav && onNav(primary.target)}
          >
            {primary.label}
          </button>
          {secondary && (
            <button
              className="fc-btn fc-btn--lg fc-btn--inverse"
              onClick={() => onNav && onNav(secondary.target)}
            >
              {secondary.label}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Footer, MS, WhatsAppIcon, TrustBar, ConversionCard, LOGO_COLOR, LOGO_WHITE });
