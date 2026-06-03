/* ============================================================
   Pages.jsx — 5 page components for the Flash Car institutional site.
   Reads Nav/Footer/MS/etc. from window (set by Shared.jsx).
   ============================================================ */

const { MS, WhatsAppIcon, TrustBar, ConversionCard, LOGO_WHITE } = window;

/* ─── HOME ────────────────────────────────────────────────── */
function HomePage({ onNav }) {
  return (
    <React.Fragment>
      <section className="kit-hero">
        <div className="kit-hero__inner">
          <div>
            <span className="fc-badge fc-badge--soft-red" style={{ marginBottom: 22 }}>
              <MS name="bolt" size={14} fill={1} />
              Avaliação grátis em 40 minutos
            </span>
            <h1>
              Seu carro vendido <br/>
              <RotatingWord words={["em 60 min.", "via PIX.", "sem leilão.", "sem golpe.", "hoje mesmo."]} />
            </h1>
            <p className="lead">
              Avaliação técnica + rede exclusiva de compradores verificados + PIX no mesmo dia.
              Sem leilão, sem golpe, sem dor de cabeça.
            </p>
            <div className="kit-hero__ctas">
              <button className="fc-btn fc-btn--primary fc-btn--lg" onClick={() => onNav("home")}>
                Agendar avaliação gratuita
              </button>
              <button className="fc-btn fc-btn--ghost fc-btn--lg" onClick={() => onNav("como-funciona")}>
                Como funciona
              </button>
            </div>
          </div>
          <div className="kit-hero__visual" aria-hidden="true">
            <MS name="directions_car" size={160} weight={300} />
            <div className="price-card">
              Avaliado em <strong>R$ 87.400</strong>
            </div>
            <div className="speed-card">
              <div className="icon"><MS name="bolt" size={26} fill={1} /></div>
              <div>
                <strong>24 min</strong>
                <span>Recorde de liquidação</span>
              </div>
            </div>
            <div className="trust-tag">
              <MS name="verified" size={18} fill={1} />
              +15.000 veículos intermediados
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Steps */}
      <section className="section section--subtle">
        <div className="section__inner">
          <div className="section__head">
            <span className="fc-eyebrow">Nossa metodologia</span>
            <h2>Como facilitamos sua venda</h2>
            <p>Quatro etapas. Sem leilões, sem renegociações, sem golpes — focada no que importa: tempo e dinheiro.</p>
          </div>
          <div className="grid-4">
            <StepCard num="01" icon="event_available" title="Avaliação"
              body="Vistoria técnica presencial ou digital feita por especialistas em alta performance." />
            <StepCard num="02" icon="campaign" title="Divulgação"
              body="Seu veículo é apresentado para uma rede nacional de lojistas e investidores verificados." />
            <StepCard num="03" icon="sell" title="Propostas"
              body="Filtramos as melhores ofertas e você escolhe a que melhor atende suas expectativas." />
            <StepCard num="04" icon="pix" title="Pagamento PIX" active
              body="Após o aceite e documentação, o dinheiro cai na conta em menos de uma hora." />
          </div>
        </div>
      </section>

      {/* Differentiator dark band */}
      <section className="diff-band">
        <div className="diff-band__inner">
          <div className="section__head" style={{ textAlign: "left", marginBottom: 32 }}>
            <h2 style={{ color: "white" }}>Diferenciais Flash Car</h2>
          </div>
          <div className="grid-2">
            <div className="diff-card diff-card--feature">
              <div className="diff-card__icon"><MS name="workspace_premium" size={26} fill={1} /></div>
              <h3>A melhor proposta garantida</h3>
              <p>Nosso algoritmo de precificação e rede de compradores garantem que você receba o valor justo —
                sem leilões, sem desvalorização de concessionária.</p>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 8 }}>
                <div style={{ display: "flex" }}>
                  {[0,1,2].map(i => (
                    <div key={i} style={{
                      width: 28, height: 28, borderRadius: "50%",
                      background: ["#FBE51B", "#5BB336", "#F93031"][i],
                      border: "2px solid var(--fc-navy-800)",
                      marginLeft: i ? -8 : 0,
                    }} />
                  ))}
                </div>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.75)" }}>+500 clientes satisfeitos este mês</span>
              </div>
            </div>
            <div className="diff-card">
              <div className="diff-card__icon"><MS name="bolt" size={26} fill={1} /></div>
              <h3>Velocidade PIX</h3>
              <p>Tempo é dinheiro. Nosso recorde de liquidação é de 24 minutos. Venda hoje, receba hoje.</p>
            </div>
            <div className="diff-card">
              <div className="diff-card__icon"><MS name="gavel" size={26} fill={1} /></div>
              <h3>Suporte burocrático</h3>
              <p>Cuidamos da transferência, vistoria e laudos. Você só assina — sem fila no Detran, sem dor de cabeça.</p>
            </div>
            <div className="diff-card">
              <div className="diff-card__icon"><MS name="support_agent" size={26} fill={1} /></div>
              <h3>Atendimento especializado</h3>
              <p>Consultores acompanham cada etapa, tirando dúvidas em tempo real via WhatsApp ou presencial.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What we buy */}
      <section className="section">
        <div className="section__inner">
          <div className="section__head">
            <h2>Compramos seu veículo</h2>
            <p>Carros, motos e utilitários — todas as marcas, anos e categorias.</p>
          </div>
          <div className="grid-3">
            <VehicleType icon="directions_car" name="Carros"
              body="Sedans, hatches, SUVs e esportivos de todas as marcas e anos." />
            <VehicleType icon="two_wheeler" name="Motos"
              body="Desde urbanas até alta cilindrada. Avaliação rápida e justa." />
            <VehicleType icon="local_shipping" name="Caminhonetes & utilitários"
              body="Pickups de trabalho ou lazer. Valorizamos acessórios e conservação." />
          </div>
        </div>
      </section>

      <ConversionCard
        title="Quer saber quanto vale seu veículo hoje?"
        body="Nossa avaliação é gratuita e sem compromisso. Resultado em minutos."
        primary={{ label: "Agendar agora", target: "home" }}
        onNav={onNav}
      />
    </React.Fragment>
  );
}

/* Rotating word — cycles through a list with slide-up + fade. CSS-only animation per index switch. */
function RotatingWord({ words, interval = 2200 }) {
  const [idx, setIdx] = React.useState(0);
  React.useEffect(() => {
    const t = setTimeout(() => setIdx((idx + 1) % words.length), interval);
    return () => clearTimeout(t);
  }, [idx, words.length, interval]);
  // Width of widest word ensures no layout shift
  const widest = React.useMemo(
    () => words.reduce((a, b) => (a.length > b.length ? a : b), ""),
    [words]
  );
  return (
    <span className="fc-rotator" aria-live="polite">
      <span className="fc-rotator__ghost">{widest}</span>
      {words.map((w, i) => (
        <span
          key={i}
          className={"fc-rotator__word" + (i === idx ? " is-active" : (i === (idx - 1 + words.length) % words.length ? " is-leaving" : ""))}
        >
          {w}
        </span>
      ))}
    </span>
  );
}

function StepCard({ num, icon, title, body, active }) {
  return (
    <div className={"fc-step" + (active ? " fc-step--active" : "")}>
      <div className="fc-step__icon"><MS name={icon} size={18} fill={1} /></div>
      <div className="fc-step__num">{num}</div>
      <h4 style={{ margin: "0 0 4px", font: "700 17px var(--font-display)" }}>{title}</h4>
      <p style={{ margin: 0, font: "400 14px/1.55 var(--font-body)", color: "var(--fg-muted)" }}>{body}</p>
    </div>
  );
}

function VehicleType({ icon, name, body }) {
  return (
    <div style={{ textAlign: "center", padding: 32, background: "white", border: "1px solid var(--border-soft)", borderRadius: 16 }}>
      <div style={{
        width: 72, height: 72, borderRadius: 18, background: "var(--fc-danger-soft)",
        color: "var(--fc-red)", display: "grid", placeItems: "center", margin: "0 auto 16px",
      }}>
        <MS name={icon} size={38} weight={400} />
      </div>
      <h3 style={{ font: "700 20px var(--font-display)", margin: "0 0 8px", color: "var(--fg-strong)" }}>{name}</h3>
      <p style={{ font: "400 14px/1.55 var(--font-body)", color: "var(--fg-muted)", margin: 0 }}>{body}</p>
    </div>
  );
}

/* ─── COMO FUNCIONA ───────────────────────────────────────── */
function ComoFuncionaPage({ onNav }) {
  const steps = [
    { num: "01", icon: "event_available", title: "Agenda",
      body: "Você escolhe o melhor horário e a unidade Flash Car mais próxima para uma visita presencial rápida." },
    { num: "02", icon: "verified", title: "Avalia",
      body: "Nossos especialistas realizam vistoria técnica rigorosa em mais de 150 itens para garantir o valor justo." },
    { num: "03", icon: "hub", title: "Rede",
      body: "Conectamos seu veículo à rede exclusiva de compradores qualificados e concessionárias parceiras." },
    { num: "04", icon: "request_quote", title: "Proposta",
      body: "Apresentamos as melhores propostas do mercado em tempo recorde, baseadas em dados reais de comercialização." },
    { num: "05", icon: "handshake", title: "Negociação",
      body: "Nós mediamos todo o fechamento, documentação e burocracia. Você só assina quando estiver tudo certo." },
    { num: "06", icon: "pix", title: "PIX", active: true,
      body: "O pagamento cai na sua conta de forma instantânea e segura logo após a finalização do processo documental." },
  ];

  return (
    <React.Fragment>
      <header className="page-header">
        <div className="page-header__inner">
          <span className="fc-eyebrow">Excelência automotiva</span>
          <h1>Entenda como vendemos seu veículo com <span style={{ color: "var(--fc-red)" }}>agilidade e segurança</span></h1>
          <p>Esqueça os anúncios cansativos e os golpistas. Nós cuidamos de cada etapa — da avaliação técnica
            até a transferência do dinheiro para sua conta.</p>
        </div>
      </header>

      <section className="section section--subtle">
        <div className="section__inner">
          <div className="section__head">
            <h2>Nossa metodologia</h2>
            <p>Seis passos simples para transformar seu veículo em dinheiro na conta.</p>
          </div>
          <div className="steps-grid">
            {steps.map((s) => <StepCard key={s.num} {...s} />)}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-subtle)" }}>
        <div className="section__inner">
          <div className="grid-2" style={{ alignItems: "center", gap: 48 }}>
            <div>
              <span className="fc-eyebrow">Sem dor de cabeça</span>
              <h2 style={{ marginTop: 8, marginBottom: 24 }}>Sem estresse, sem perda de tempo.</h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Sem anúncios em plataformas públicas",
                  "Sem negociações desgastantes com curiosos",
                  "Sem insegurança em receber estranhos em casa",
                  "Sem disputa por documentação ou transferência",
                ].map((t) => (
                  <li key={t} style={{ display: "flex", gap: 12, alignItems: "center", color: "var(--fg-default)", fontSize: 16 }}>
                    <span style={{
                      width: 28, height: 28, borderRadius: "50%", background: "var(--fc-red)",
                      display: "grid", placeItems: "center", color: "white", flexShrink: 0,
                    }}>
                      <MS name="close" size={16} weight={600} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{
              background: "var(--fc-white)", border: "1px solid var(--border-soft)", borderRadius: 16, padding: 32, boxShadow: "var(--shadow-sm)",
            }}>
              <MS name="format_quote" size={36} style={{ color: "var(--fc-red)" }} fill={1} />
              <p style={{ fontStyle: "italic", color: "var(--fg-default)", margin: "12px 0 24px", lineHeight: 1.6, fontSize: 17 }}>
                "Assumimos toda a carga operacional do processo de venda. A Flash Car não é apenas uma intermediária,
                é sua parceira estratégica para garantir que seu patrimônio seja convertido com a máxima eficiência."
              </p>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <div style={{ width: 40, height: 40, background: "var(--fc-red)", borderRadius: 6 }} />
                <div>
                  <div style={{ font: "700 14px var(--font-display)", color: "var(--fg-strong)" }}>Diretoria Executiva</div>
                  <div style={{ font: "500 12px var(--font-body)", color: "var(--fg-muted)" }}>Flash Car Store · Brasil</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConversionCard
        title="Pronto para vender seu carro hoje?"
        body="Agende sua avaliação gratuita em uma de nossas unidades e receba uma oferta profissional."
        primary={{ label: "Encontrar unidade mais próxima", target: "unidades" }}
        secondary={{ label: "Falar com consultor", target: "home" }}
        onNav={onNav}
      />
    </React.Fragment>
  );
}

/* ─── SOBRE ───────────────────────────────────────────────── */
function SobrePage({ onNav }) {
  return (
    <React.Fragment>
      <header className="page-header">
        <div className="page-header__inner">
          <h1>A Flash Car nasceu para transformar a forma de vender veículos no Brasil</h1>
          <p>Mais de 15 anos de mercado, tecnologia de ponta, agilidade processual e atendimento humanizado
            para criar a melhor experiência automotiva do país.</p>
          <div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
            <span className="fc-badge fc-badge--outline">
              <MS name="verified" size={14} fill={1} /> 15 anos de experiência
            </span>
            <span className="fc-badge fc-badge--outline">
              <MS name="bolt" size={14} fill={1} /> Agilidade digital
            </span>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="section__inner">
          <div className="about-grid">
            <div>
              <span className="fc-eyebrow">Nossa história</span>
              <h2 style={{ marginTop: 8 }}>Do desafio à solução definitiva</h2>
              <p>A trajetória da Flash Car teve início com a visão empreendedora de <strong>David</strong> e <strong>Agnaldo</strong>,
                profissionais que vivenciaram por décadas as ineficiências e a falta de segurança no mercado tradicional
                de compra e venda de veículos.</p>
              <p>Eles identificaram que vender um carro no Brasil era um processo lento, burocrático e muitas vezes
                arriscado. A "dor do mercado" era clara: proprietários queriam liquidez e segurança, enquanto compradores
                buscavam procedência e confiança.</p>
              <p>Foi dessa necessidade que surgiu o modelo de intermediação da Flash Car. Não somos apenas uma loja —
                somos uma plataforma de confiança que profissionaliza a negociação, cuidando de cada detalhe para você
                ter tranquilidade total.</p>
            </div>
            <div className="about-photo">
              <img src="../../assets/founders-david-agnaldo.webp" alt="David e Agnaldo, fundadores da Flash Car" style={{
                position: "absolute", inset: 0, width: "100%", height: "100%",
                objectFit: "cover", objectPosition: "center top",
              }}/>
              <div className="stat-overlay">
                15k+
                <small>veículos intermediados</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--subtle">
        <div className="section__inner">
          <span className="fc-eyebrow">Nosso core</span>
          <h2 style={{ marginTop: 8 }}>Conectando quem quer vender com quem busca o melhor</h2>
          <p style={{ color: "var(--fg-muted)", maxWidth: 620, fontSize: 17, margin: "8px 0 32px" }}>
            Desenvolvemos um ecossistema que elimina as barreiras entre vendedores e compradores verificados.
          </p>
          <div className="grid-2">
            <div className="fc-card--feature" style={{ background: "white" }}>
              <h3 style={{ marginTop: 0 }}>Vendedores satisfeitos</h3>
              <p>Seu carro é avaliado por especialistas e anunciado em nossa rede nacional, garantindo a melhor
                oferta sem que você saia de casa.</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {["Avaliação técnica presencial", "Fotos profissionais inclusas", "Anúncio para rede de compradores"].map((t) => (
                  <li key={t} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 14 }}>
                    <MS name="check_circle" size={18} fill={1} style={{ color: "var(--fc-green)" }} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="fc-card--dark">
              <MS name="verified_user" size={36} fill={1} style={{ color: "var(--fc-red)" }} />
              <h3 style={{ color: "white", marginTop: 12 }}>Compradores verificados</h3>
              <p style={{ color: "rgba(255,255,255,0.78)" }}>
                Apenas interessados reais e pré-aprovados acessam nossa base, eliminando curiosos e golpes.
              </p>
              <a href="#" onClick={(e) => e.preventDefault()}
                 style={{ color: "var(--fc-red)", font: "700 13px var(--font-display)", letterSpacing: "0.04em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 6 }}>
                Saiba mais <MS name="arrow_forward" size={16} />
              </a>
            </div>
          </div>

          <div className="mv-grid">
            <div className="mv-card mission">
              <MS name="flag" size={28} fill={1} style={{ color: "var(--fc-yellow)" }} />
              <h3>Missão</h3>
              <p>Proporcionar uma intermediação automotiva ágil, transparente e segura, superando as expectativas
                de nossos clientes através de processos inovadores e excelência no atendimento.</p>
            </div>
            <div className="mv-card vision">
              <MS name="visibility" size={28} fill={1} style={{ color: "var(--fc-red)" }} />
              <h3>Visão</h3>
              <p>Ser uma referência confiável no mercado de intermediação automotiva brasileira, com tecnologia
                acessível e foco contínuo na satisfação do cliente.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <div className="section__head">
            <span className="fc-eyebrow">Nossos pilares</span>
            <h2>Valores que nos guiam</h2>
          </div>
          <div className="grid-4">
            {[
              { i: "visibility", t: "Transparência", b: "Processos claros e informações abertas em todas as etapas." },
              { i: "bolt",       t: "Agilidade",     b: "Reduzimos o tempo de venda com tecnologia e rede qualificada." },
              { i: "shield_lock",t: "Segurança",     b: "Garantia jurídica e verificação rigorosa de todos os veículos." },
              { i: "auto_awesome", t: "Excelência",  b: "Comprometimento com a perfeição nos detalhes da experiência." },
            ].map(p => (
              <div key={p.t} className="fc-card fc-card--lift">
                <MS name={p.i} size={28} fill={0} style={{ color: "var(--fc-red)" }} />
                <h3 style={{ font: "700 18px var(--font-display)", margin: "12px 0 6px" }}>{p.t}</h3>
                <p style={{ font: "400 14px/1.5 var(--font-body)", color: "var(--fg-muted)", margin: 0 }}>{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConversionCard
        title="Venda seu veículo com quem entende do mercado"
        body="Junte-se a milhares de clientes satisfeitos e experimente a nova era da intermediação automotiva."
        primary={{ label: "Agendar avaliação", target: "home" }}
        onNav={onNav}
      />
    </React.Fragment>
  );
}

/* ─── UNIDADES ────────────────────────────────────────────── */
const UNITS = [
  { city: "Florianópolis", uf: "SC", flag: "Sede própria", flagKind: "red",
    addr: "Rod. SC-401, 4500 — Saco Grande", hours: "Seg–Sex: 09h–19h · Sáb: 09h–13h", phone: "(48) 3232-4040" },
  { city: "São Paulo", uf: "SP", flag: null,
    addr: "Av. Europa, 1200 — Jardim Europa", hours: "Seg–Sex: 09h–20h · Sáb: 09h–17h", phone: "(11) 3085-5050" },
  { city: "Porto Alegre", uf: "RS", flag: null,
    addr: "Av. Nilo Peçanha, 2500 — Três Figueiras", hours: "Seg–Sex: 09h–19h · Sáb: 09h–13h", phone: "(51) 3333-6060" },
  { city: "Goiânia", uf: "GO", flag: "Novo espaço", flagKind: "soft-yellow",
    addr: "Av. Ricardo Paranhos, 800 — Setor Marista", hours: "Seg–Sex: 08h–18h · Sáb: 08h–12h", phone: "(62) 3999-7070" },
  { city: "Joinville", uf: "SC", flag: null,
    addr: "Rua XV de Novembro, 1500 — Glória", hours: "Seg–Sex: 09h–19h · Sáb: 09h–13h", phone: "(47) 3455-8080" },
  { city: "Campinas", uf: "SP", flag: "Top de avaliações", flagKind: "soft-green",
    addr: "Av. Norte-Sul, 1100 — Centro", hours: "Seg–Sex: 09h–19h · Sáb: 09h–13h", phone: "(19) 3222-1010" },
];

function UnidadesPage({ onNav }) {
  const [filter, setFilter] = React.useState("Todos");
  const states = ["Todos", "SC", "SP", "RS", "GO"];
  const visible = filter === "Todos" ? UNITS : UNITS.filter(u => u.uf === filter);

  return (
    <React.Fragment>
      <section className="section" style={{ paddingBottom: 32 }}>
        <div className="section__inner section__head" style={{ marginBottom: 0 }}>
          <h1 style={{ font: "800 clamp(32px, 4.4vw, 48px) var(--font-display)", letterSpacing: "-0.02em", lineHeight: 1.1, margin: "0 auto 16px" }}>
            Encontre a Flash Car mais perto de você
          </h1>
          <p>Estamos presentes nas principais regiões do país para garantir que você tenha a melhor experiência
            na compra ou venda do seu próximo veículo.</p>
        </div>
      </section>

      <div className="units-filterbar">
        <div className="units-filterbar__inner">
          <span className="units-filterbar__label">Filtrar por estado:</span>
          {states.map(s => (
            <button
              key={s}
              className={"fc-pill" + (filter === s ? " fc-pill--active" : "")}
              onClick={() => setFilter(s)}
            >
              {s}
            </button>
          ))}
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8, color: "var(--fg-muted)", fontSize: 13 }}>
            <MS name="place" size={16} />
            {visible.length} unidade{visible.length !== 1 ? "s" : ""}
          </div>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 48 }}>
        <div className="section__inner">
          <div className="grid-3">
            {visible.map(u => (
              <UnitCard key={u.city + u.uf} u={u} />
            ))}
          </div>
        </div>
      </section>

      <ConversionCard
        title="Quer vender seu veículo com mais segurança?"
        body="Nossos consultores estão prontos para oferecer uma avaliação justa e todo o suporte necessário."
        primary={{ label: "Encontrar minha unidade", target: "unidades" }}
        secondary={{ label: "Agendar agora", target: "home" }}
        onNav={onNav}
      />
    </React.Fragment>
  );
}

function UnitCard({ u }) {
  const flagCls = {
    "red": "fc-badge fc-badge--red",
    "soft-yellow": "fc-badge fc-badge--soft-yellow",
    "soft-green": "fc-badge fc-badge--soft-green",
  };
  return (
    <article className="fc-unit-card">
      <div className="fc-unit-card__media">
        <div style={{
          width: "100%", height: "100%",
          background: "linear-gradient(135deg, #1B2C46, #0A1628)",
          display: "grid", placeItems: "center", color: "rgba(255,255,255,0.3)",
          font: "600 12px var(--font-display)", letterSpacing: "0.1em", textTransform: "uppercase",
        }}>
          <MS name="storefront" size={48} weight={300} />
        </div>
        {u.flag && (
          <div className="fc-unit-card__flag">
            <span className={flagCls[u.flagKind || "red"]}>{u.flag}</span>
          </div>
        )}
      </div>
      <div className="fc-unit-card__body">
        <div className="fc-unit-card__title">Flash Car {u.city} / {u.uf}</div>
        <div className="fc-unit-card__meta"><MS name="place" size={16} fill={1} />{u.addr}</div>
        <div className="fc-unit-card__meta"><MS name="schedule" size={16} fill={0} />{u.hours}</div>
        <div className="fc-unit-card__meta"><MS name="call" size={16} fill={1} />{u.phone}</div>
        <a href="#" className="fc-btn fc-btn--dark fc-btn--block fc-unit-card__cta" onClick={(e) => e.preventDefault()}>
          <WhatsAppIcon size={16} />
          Falar com esta unidade
        </a>
      </div>
    </article>
  );
}

/* ─── FRANQUIA · pitch comercial ──────────────────────────── */
const MARKET_YEARS = [
  { y: "2020", v: 11.3 },
  { y: "2021", v: 12.8 },
  { y: "2022", v: 13.9 },
  { y: "2023", v: 14.8 },
  { y: "2024", v: 15.7 },
  { y: "2025", v: 18.5, highlight: true },
];

function FranquiaPage({ onNav }) {
  return (
    <React.Fragment>
      {/* HERO */}
      <section className="franq-hero">
        <div className="franq-hero__inner">
          <div>
            <span className="fc-badge fc-badge--red" style={{ marginBottom: 18 }}>
              <MS name="business_center" size={14} fill={1} />
              Oportunidade B2B · 2026
            </span>
            <h1>
              Seja dono do seu negócio no mercado mais <span className="accent">resiliente</span> do Brasil.
            </h1>
            <p>Mais de 18,5 milhões de veículos foram comercializados no Brasil em 2025. A Flash Car
              é a operação enxuta que conecta você a esse mercado com suporte completo, sem royalties
              e payback médio de 7 meses.</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button className="fc-btn fc-btn--primary fc-btn--lg" onClick={() => onNav("franquia")}>
                Receber dossiê completo
              </button>
              <button className="fc-btn fc-btn--ghost fc-btn--lg" onClick={() => onNav("franquia")}>
                Falar com especialista
              </button>
            </div>
          </div>
          <div className="kpi-grid">
            <div className="kpi">
              <div className="kpi__label">Investimento</div>
              <div className="kpi__value">R$ 95k</div>
              <div className="kpi__sub">A partir do modelo Smart</div>
            </div>
            <div className="kpi">
              <div className="kpi__label">Payback</div>
              <div className="kpi__value">7 meses</div>
              <div className="kpi__sub">Retorno médio do capital</div>
            </div>
            <div className="kpi">
              <div className="kpi__label">Margem de lucro</div>
              <div className="kpi__value">35–45%</div>
              <div className="kpi__sub">Alto giro · alto ticket</div>
            </div>
            <div className="kpi">
              <div className="kpi__label">Royalties</div>
              <div className="kpi__value" style={{ color: "var(--fc-green)" }}>Zero</div>
              <div className="kpi__sub">100% do lucro fica com você</div>
            </div>
          </div>
        </div>
      </section>

      {/* VÍDEO INSTITUCIONAL */}
      <section className="section">
        <div className="section__inner" style={{ maxWidth: 960 }}>
          <div className="section__head">
            <span className="fc-eyebrow">Apresentação 2026</span>
            <h2>Conheça a Flash Car em 90 segundos</h2>
            <p>Veja como o modelo funciona, o suporte que você recebe e por que franqueados estão
              fechando o payback antes do previsto.</p>
          </div>
          <div className="franq-video">
            <button className="franq-video__play" aria-label="Reproduzir vídeo institucional">
              <MS name="bolt" size={36} fill={1} />
            </button>
            <span className="franq-video__label">Vídeo institucional · 1:32</span>
            <span className="franq-video__placeholder">[ vídeo da franquia ]</span>
          </div>
        </div>
      </section>

      {/* QUEM SOMOS — fundadores */}
      <section className="section section--subtle">
        <div className="section__inner">
          <div className="about-grid">
            <div>
              <span className="fc-eyebrow">Quem está por trás</span>
              <h2 style={{ marginTop: 8 }}>15 anos de mercado automotivo, agora ao seu lado.</h2>
              <p>A Flash Car nasceu da parceria entre <strong>David</strong> e <strong>Agnaldo</strong>,
                profissionais que vivenciaram por décadas as ineficiências do mercado tradicional
                e estruturaram um modelo que une visão estratégica, agilidade processual e foco em
                resultado para o franqueado.</p>
              <p>O modelo é baseado em <strong>comissão sobre venda</strong>: nossos interesses
                ficam totalmente alinhados aos seus. Quanto maior a sua operação, maior nosso
                retorno — e por isso o suporte é diário, não burocrático.</p>
              <div style={{ display: "flex", gap: 14, marginTop: 20, flexWrap: "wrap" }}>
                <span className="fc-badge fc-badge--outline"><MS name="bolt" size={14} fill={1} /> Sem estoque imobilizado</span>
                <span className="fc-badge fc-badge--outline"><MS name="handshake" size={14} fill={1} /> Modelo baseado em comissão</span>
                <span className="fc-badge fc-badge--outline"><MS name="rocket_launch" size={14} fill={1} /> Implantação assistida</span>
              </div>
            </div>
            <div className="about-photo" style={{ aspectRatio: "1 / 1" }}>
              <img src="../../assets/founders-david-agnaldo.webp" alt="David e Agnaldo, fundadores da Flash Car" style={{
                position: "absolute", inset: 0, width: "100%", height: "100%",
                objectFit: "cover", objectPosition: "center top",
              }}/>
              <div className="stat-overlay">
                15+ anos
                <small>de mercado automotivo</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 PILARES — Confiança que gera valor */}
      <section className="section">
        <div className="section__inner">
          <div className="section__head">
            <span className="fc-eyebrow">Confiança que gera valor</span>
            <h2>Por que a Flash Car é uma operação rentável</h2>
            <p>Três pilares que sustentam o modelo financeiro da franquia.</p>
          </div>
          <div className="grid-3">
            <PillarCard
              icon="workspace_premium" tone="red"
              kicker="Pilar 01"
              title="Altamente lucrativa"
              body="Margens entre 35% e 45% por veículo intermediado. Ticket médio elevado e ciclo de venda curto sustentam um ROI rápido."
            />
            <PillarCard
              icon="inventory_2" tone="yellow"
              kicker="Pilar 02"
              title="Baixo custo operacional"
              body="Sem estoque imobilizado, time enxuto e estrutura digital. Você foca em comercial — o backoffice é nosso."
            />
            <PillarCard
              icon="savings" tone="green"
              kicker="Pilar 03"
              title="Franquia sem royalties"
              body="Zero royalties sobre faturamento. Você paga taxa de marketing fixa e mantém 100% do lucro da operação."
            />
          </div>
        </div>
      </section>

      {/* MERCADO — gráfico de crescimento */}
      <section className="section section--subtle">
        <div className="section__inner">
          <div className="grid-2" style={{ alignItems: "center", gap: 56 }}>
            <div>
              <span className="fc-eyebrow">Mercado aquecido</span>
              <h2 style={{ marginTop: 8 }}>Maior volume da série histórica.</h2>
              <p style={{ color: "var(--fg-default)", fontSize: 16 }}>
                O mercado de seminovos e usados no Brasil cresceu de forma consistente, mesmo em
                cenários de instabilidade econômica. A mobilidade segue sendo essencial — e a
                intermediação profissional ganha espaço a cada ano.
              </p>
              <div style={{ display: "grid", gap: 16, marginTop: 24 }}>
                <KPIInline value="+17%" body="Crescimento anual do volume de buscas por usados." accent="var(--fc-green)" />
                <KPIInline value="70%"  body="Dos compradores preferem intermediários certificados para maior segurança." accent="var(--fc-red)" />
                <KPIInline value="R$ 154k" body="Faturamento médio mensal das unidades Premium em operação." accent="var(--fc-navy-900)" />
              </div>
              <p style={{ fontSize: 12, fontStyle: "italic", color: "var(--fg-muted)", marginTop: 18 }}>
                Fonte: dados consolidados do mercado automotivo brasileiro 2020–2025.
              </p>
            </div>
            <div className="market-chart">
              <div className="market-chart__title">Veículos seminovos & usados comercializados</div>
              <div className="market-chart__sub">Em milhões · Brasil</div>
              <div className="market-chart__bars">
                {MARKET_YEARS.map(({ y, v, highlight }) => (
                  <div key={y} className={"market-chart__row" + (highlight ? " is-highlight" : "")}>
                    <span className="market-chart__year">{y}</span>
                    <div className="market-chart__track">
                      <span className="market-chart__bar" style={{ width: `${(v / 20) * 100}%` }} />
                    </div>
                    <span className="market-chart__value">{v.toString().replace(".", ",")}M</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS (dark editorial) */}
      <section className="section diff-band diff-band--dark">
        <div className="diff-band__inner">
          <div className="grid-2" style={{ alignItems: "start" }}>
            <div>
              <span className="fc-eyebrow" style={{ color: "var(--fc-yellow)" }}>Suporte 360°</span>
              <h2 style={{ color: "white", marginTop: 8 }}>Tudo o que você precisa pra faturar desde o dia 01.</h2>
              <p style={{ color: "rgba(255,255,255,0.78)", maxWidth: 420 }}>
                Não é só uma marca — é uma operação completa pronta pra ser implantada na sua cidade.
              </p>
            </div>
            <div style={{ display: "grid", gap: 14, gridTemplateColumns: "1fr 1fr" }}>
              {[
                { i: "gavel",        t: "Jurídico especializado", b: "Escritório exclusivo para consulta e validação de intermediações 100% seguras." },
                { i: "ads_click",    t: "Marketing exclusivo",    b: "Gestor de tráfego e campanhas personalizadas para cada franqueado." },
                { i: "school",       t: "Treinamento contínuo",   b: "Comercial, operacional, financeiro e marketing — capacitação 100% entregue." },
                { i: "rocket_launch",t: "Implantação assistida",  b: "Acompanhamento desde a escolha do ponto comercial até o dia a dia da operação." },
                { i: "hub",          t: "Sistema próprio",        b: "Ferramenta exclusiva para gestão de leads e operação. Seu CRM já vem dentro." },
                { i: "groups",       t: "Rede de parceiros",      b: "Acesso imediato à nossa base de compradores nacionais e parcerias locais." },
              ].map(d => (
                <div key={d.t} className="diff-card" style={{ padding: 22 }}>
                  <div className="diff-card__icon" style={{ width: 40, height: 40, fontSize: 20 }}>
                    <MS name={d.i} size={20} fill={1} />
                  </div>
                  <h3 style={{ font: "700 16px var(--font-display)", margin: "8px 0 4px", color: "white" }}>{d.t}</h3>
                  <p style={{ fontSize: 13, lineHeight: 1.55, color: "rgba(255,255,255,0.72)" }}>{d.b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MODELOS Smart vs Premium */}
      <section className="section">
        <div className="section__inner">
          <div className="section__head">
            <h2>Escolha o modelo certo pra sua cidade</h2>
            <p>Dois formatos pensados para tamanhos de mercado distintos. Comparativo direto, sem letrinha miúda.</p>
          </div>
          <div className="model-grid">
            <div className="model-card">
              <h3>Modelo de entrada</h3>
              <div className="model-name">Smart</div>
              <div className="price-row"><span className="lbl">Investimento inicial</span><span className="val">A partir de R$ 95 mil</span></div>
              <div className="price-row"><span className="lbl">Faturamento médio/mês</span><span className="val">R$ 97 mil</span></div>
              <div className="price-row"><span className="lbl">Lucratividade</span><span className="val">35% a 40%</span></div>
              <div className="price-row"><span className="lbl">Payback estimado</span><span className="val">7 meses</span></div>
              <div className="price-row" style={{ borderBottom: 0 }}><span className="lbl">Praça recomendada</span><span className="val">Cidades 50k–200k hab.</span></div>
              <button className="fc-btn fc-btn--dark fc-btn--block model-cta" onClick={() => onNav("franquia")}>
                Quero o modelo Smart
              </button>
            </div>
            <div className="model-card premium">
              <h3>Performance máxima</h3>
              <div className="model-name">Premium</div>
              <div className="price-row"><span className="lbl">Investimento inicial</span><span className="val">A partir de R$ 120 mil</span></div>
              <div className="price-row"><span className="lbl">Faturamento médio/mês</span><span className="val">R$ 154 mil</span></div>
              <div className="price-row"><span className="lbl">Lucratividade</span><span className="val">40% a 45%</span></div>
              <div className="price-row"><span className="lbl">Payback estimado</span><span className="val">5 a 6 meses</span></div>
              <div className="price-row" style={{ borderBottom: 0 }}><span className="lbl">Praça recomendada</span><span className="val">Capitais e regiões metropolitanas</span></div>
              <button className="fc-btn fc-btn--primary fc-btn--block model-cta" onClick={() => onNav("franquia")}>
                Quero o modelo Premium
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CASES — franqueados reais */}
      <section className="section section--subtle">
        <div className="section__inner">
          <div className="section__head">
            <span className="fc-eyebrow">Cases de sucesso</span>
            <h2>Quem já é franqueado Flash Car</h2>
            <p>Histórias reais de quem decidiu apostar no modelo — e está vendo o retorno.</p>
          </div>
          <div className="testi-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            <Testimonial
              name="Rayner" role="Franqueado · Flash Car Campinas" initial="R"
              body='"Sou o segundo franqueado da rede. O treinamento é prático, o suporte é diário e a operação ficou no positivo no terceiro mês. Estou abrindo a segunda unidade em 2026."'
            />
            <Testimonial
              name="Joel Silva" role="Franqueado · Unidade Curitiba" initial="J"
              body='"A facilidade de operar sem estoque gigante e o suporte jurídico me deram a segurança que eu precisava pra investir meu capital sem hesitar."'
            />
            <Testimonial
              name="Juliano Mendes" role="Franqueado · Unidade Campinas" initial="J"
              body='"O retorno veio antes do esperado. O marketing da franqueadora traz leads prontos pra fechar — o time só precisa atender bem."'
            />
          </div>
          <div style={{ display: "flex", gap: 24, justifyContent: "center", alignItems: "center", marginTop: 40, color: "var(--fg-muted)", fontSize: 13 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <MS name="verified" size={16} fill={1} style={{ color: "var(--fc-green)" }} />
              Avaliação 4,9 / 5 no segmento
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <MS name="storefront" size={16} fill={1} style={{ color: "var(--fc-red)" }} />
              6 unidades em operação
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <MS name="rocket_launch" size={16} fill={1} style={{ color: "var(--fc-navy-900)" }} />
              +20 cidades em expansão
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <ConversionCard
        title="Que tal você ser o nosso próximo case de sucesso?"
        body="Receba o dossiê completo da franquia com investimento, projeção financeira e cronograma de implantação."
        primary={{ label: "Quero receber o dossiê", target: "franquia" }}
        secondary={{ label: "Falar com consultor", target: "franquia" }}
        onNav={onNav}
      />
    </React.Fragment>
  );
}

function PillarCard({ kicker, title, body, icon, tone }) {
  const accents = {
    red:    { bg: "var(--fc-danger-soft)",  fg: "var(--fc-red)" },
    yellow: { bg: "var(--fc-warning-soft)", fg: "#6B5800" },
    green:  { bg: "var(--fc-success-soft)", fg: "var(--fc-green-deep)" },
  };
  const c = accents[tone] || accents.red;
  return (
    <div className="fc-card fc-card--lift" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{
        width: 52, height: 52, borderRadius: 14,
        background: c.bg, color: c.fg,
        display: "grid", placeItems: "center", fontSize: 26,
      }}>
        <MS name={icon} size={28} fill={1} />
      </div>
      <div style={{ font: "700 11px var(--font-display)", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fg-muted)" }}>{kicker}</div>
      <h3 style={{ font: "800 22px var(--font-display)", margin: 0, color: "var(--fg-strong)", letterSpacing: "-0.01em" }}>{title}</h3>
      <p style={{ font: "400 15px/1.6 var(--font-body)", color: "var(--fg-muted)", margin: 0 }}>{body}</p>
    </div>
  );
}


function KPIInline({ value, body, accent }) {
  return (
    <div style={{ display: "flex", gap: 18, alignItems: "baseline" }}>
      <div style={{ font: "800 28px var(--font-display)", color: accent, letterSpacing: "-0.01em", minWidth: 90 }}>{value}</div>
      <div style={{ fontSize: 14, color: "var(--fg-default)", lineHeight: 1.55 }}>{body}</div>
    </div>
  );
}

function Testimonial({ name, role, body, initial }) {
  return (
    <div className="testi">
      <div className="testi__quote">"</div>
      <p className="testi__body">{body}</p>
      <div className="testi__who">
        <div className="testi__avatar">{initial}</div>
        <div>
          <div className="testi__name">{name}</div>
          <div className="testi__role">{role}</div>
        </div>
      </div>
    </div>
  );
}

/* ─── FAQ / Central de ajuda ──────────────────────────────── */
const FAQ_GROUPS = [
  {
    title: "Avaliação e agendamento",
    items: [
      {
        q: "A avaliação é mesmo gratuita?",
        a: "Sim. Você não paga nada para receber a avaliação técnica do seu veículo. Nosso modelo é baseado em comissão sobre a venda — se você decidir não vender pela Flash Car, você não fica devendo nada.",
      },
      {
        q: "Quanto tempo demora a avaliação?",
        a: "A vistoria técnica leva em média 40 minutos. A proposta sai no mesmo dia. Em casos com documentação 100% em dia, conseguimos fechar todo o processo (incluindo PIX) em menos de 60 minutos.",
      },
      {
        q: "Preciso levar o carro à unidade ou vocês buscam?",
        a: "Trabalhamos com avaliação presencial na unidade mais próxima de você. Em alguns casos especiais (frota, veículos premium acima de R$ 200 mil), nossos consultores podem ir até o local. Consulte sua unidade.",
      },
    ],
  },
  {
    title: "Pagamento e segurança",
    items: [
      {
        q: "Como funciona o pagamento via PIX?",
        a: "Após o aceite da proposta e a conferência da documentação, o valor é transferido por PIX direto da conta da Flash Car para a conta de sua titularidade. Não trabalhamos com cheques, depósitos parcelados ou intermediários.",
      },
      {
        q: "Quais documentos preciso ter para vender?",
        a: "CRLV original, CPF e RG do proprietário, comprovante de residência atualizado e chave reserva (se disponível). Se houver financiamento ativo, traga o contrato — nós ajudamos com a quitação.",
      },
      {
        q: "E se o comprador desistir depois?",
        a: "Não há essa possibilidade no nosso modelo. A Flash Car compra direto pela rede de compradores verificados — você fecha negócio conosco, não com terceiros. O risco de desistência fica com a gente.",
      },
    ],
  },
  {
    title: "Sobre a Flash Car",
    items: [
      {
        q: "Vocês são uma concessionária?",
        a: "Não. A Flash Car é uma intermediadora especializada sem estoque próprio. Conectamos seu veículo a uma rede nacional de compradores verificados — lojistas e investidores que pagam à vista. Por isso conseguimos ofertas mais competitivas que concessionárias tradicionais.",
      },
      {
        q: "Quais marcas e categorias vocês compram?",
        a: "Todas. Carros, motos, caminhonetes, utilitários e veículos comerciais leves. Sem restrição de marca, modelo ou ano (desde que tenha documentação regular).",
      },
      {
        q: "Posso falar com alguém pelo WhatsApp?",
        a: "Sim. Cada unidade tem um número direto. Clique em \"Falar com esta unidade\" na página de Unidades, ou use o botão flutuante do WhatsApp no canto da tela.",
      },
    ],
  },
];

function FaqPage({ onNav }) {
  return (
    <React.Fragment>
      <header className="page-header">
        <div className="page-header__inner">
          <span className="fc-eyebrow">Central de ajuda</span>
          <h1>Tudo que você precisa saber antes de vender</h1>
          <p>Reunimos as perguntas mais frequentes de clientes que venderam seus veículos com a Flash Car.
            Se ainda restou dúvida, fale com a gente pelo WhatsApp.</p>
        </div>
      </header>

      <section className="section">
        <div className="section__inner" style={{ maxWidth: 880 }}>
          {FAQ_GROUPS.map((group, gi) => (
            <div key={group.title} style={{ marginBottom: 48 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{
                  width: 32, height: 32, borderRadius: 8, background: "var(--fc-danger-soft)",
                  color: "var(--fc-red)", display: "grid", placeItems: "center",
                  font: "800 13px var(--font-display)",
                }}>{String(gi + 1).padStart(2, "0")}</span>
                <h2 style={{ font: "800 24px var(--font-display)", margin: 0, color: "var(--fg-strong)" }}>
                  {group.title}
                </h2>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {group.items.map((item, idx) => <FaqItem key={idx} q={item.q} a={item.a} />)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <ConversionCard
        title="Não encontrou sua dúvida?"
        body="Nossos consultores respondem por WhatsApp em minutos — de segunda a sábado, das 09h às 19h."
        primary={{ label: "Falar com consultor", target: "unidades" }}
        secondary={{ label: "Agendar avaliação", target: "home" }}
        onNav={onNav}
      />
    </React.Fragment>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{
      border: "1px solid var(--border-soft)",
      borderRadius: 12,
      background: "white",
      transition: "border-color 200ms, box-shadow 200ms",
      borderColor: open ? "var(--fc-red)" : "var(--border-soft)",
      boxShadow: open ? "var(--shadow-sm)" : "none",
    }}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: "100%",
          background: "transparent",
          border: 0,
          padding: "18px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          cursor: "pointer",
          textAlign: "left",
          font: "700 16px var(--font-display)",
          color: "var(--fg-strong)",
        }}
      >
        <span>{q}</span>
        <span style={{
          width: 32, height: 32, borderRadius: "50%",
          background: open ? "var(--fc-red)" : "var(--fc-ink-100)",
          color: open ? "white" : "var(--fg-strong)",
          display: "grid", placeItems: "center",
          transition: "all 200ms",
          flexShrink: 0,
        }}>
          <MS name={open ? "minus" : "plus"} size={16} weight={600} />
        </span>
      </button>
      {open && (
        <div style={{
          padding: "0 20px 22px",
          font: "400 15px/1.6 var(--font-body)",
          color: "var(--fg-default)",
        }}>{a}</div>
      )}
    </div>
  );
}

Object.assign(window, { HomePage, ComoFuncionaPage, SobrePage, UnidadesPage, FranquiaPage, FaqPage });
