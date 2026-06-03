# Flash Car Design System

> **A Flash Car Store é uma rede de intermediação de veículos** que conecta vendedores a compradores verificados. A marca promete velocidade (PIX em até 60 minutos), transparência (sem leilões, sem golpes) e profissionalismo (avaliação técnica, suporte jurídico). Este design system traduz esses três pilares em pixels.

## Sumário

1. [Quem é a Flash Car](#quem-é-a-flash-car)
2. [Materiais de referência](#materiais-de-referência)
3. [Fundamentos de conteúdo](#fundamentos-de-conteúdo)
4. [Fundamentos visuais](#fundamentos-visuais)
5. [Iconografia](#iconografia)
6. [Índice de arquivos](#índice-de-arquivos)

---

## Quem é a Flash Car

A Flash Car Store nasceu da parceria entre **David** e **Agnaldo**, com mais de 15 anos de experiência na indústria automotiva. Atua como **intermediadora especializada — sem estoque** — conectando vendedores e compradores verificados via uma rede nacional de lojistas e investidores. Em 2025, o mercado de seminovos e usados que ela disputa movimentou **18,5 milhões de veículos** (+17% YoY).

### Dois públicos, duas jornadas

| Público | Promessa central | CTA principal |
|---|---|---|
| **Cliente final** (vendedor) | "Venda seu veículo com segurança, sem burocracia e pagamento via PIX em até 60 minutos." | **Agendar avaliação gratuita** |
| **Potencial franqueado** | "Abra uma franquia em um mercado de alta demanda, com suporte e modelo operacional estruturado." | **Quero ser franqueado** / **Falar com especialista** |

As duas jornadas **nunca se misturam** nas mesmas páginas — a comunicação de franquia fica restrita à landing page dela.

### Diferenciais comunicáveis

- Avaliação técnica especializada (150+ itens)
- Compradores verificados (rede exclusiva)
- Pagamento via PIX em até 60 minutos
- Suporte jurídico e burocrático completo
- Modelo de franquia: investimento a partir de R$ 95 mil (Smart) ou R$ 120 mil (Premium); lucratividade 35–45%; sem royalties

### O que NUNCA dizer

> Afirmações superlativas que não dá pra provar: "a maior", "a melhor", "a que mais cresce no Brasil". Sempre substituir por benefícios concretos e dados verificáveis.

---

## Materiais de referência

| Fonte | Localização | Notas |
|---|---|---|
| Logos brutos | `uploads/LOGOFLASHCAR*.png`, `uploads/*.svg` | Wordmark "FLASH$CAR.store" |
| Apresentação Franquia 2026 | `uploads/franquia.pdf` (11 páginas) | Conteúdo-fonte da página "Seja um franqueado" |
| Repo GitHub | [`iotiagopace/flashcar`](https://github.com/iotiagopace/flashcar) | Estava vazio na consulta (commit inicial pendente). Reconsulte quando houver código publicado. |
| Geração anterior (Stitch/Google) | `uploads/stitch_portal_flash_car_store/` | Estrutura de páginas útil; **paleta incorreta** (usava navy primário em vez de vermelho). |
| Direções "Velocity Commerce" e "Velocity Precision" | `uploads/stitch_portal_flash_car_store/velocity_*/DESIGN.md` | Conservamos a tipografia (Montserrat) e a estrutura, **mas trocamos a hierarquia de cor**: vermelho lidera; navy é apoio. |

---

## Fundamentos de conteúdo

### Tom de voz

Direto, seguro, profissional, comercial. **Sem jargão técnico** ("plataforma omnichannel de marketplace automotivo" → não). **Sem fofura, sem emoji.** Não é uma loja de carros tradicional, nem uma startup descolada — é um serviço financeiro-comercial confiável que precisa parecer rápido.

### Pessoa e voz

- **Você** ao falar com o leitor ("Venda **seu** veículo", "Encontre **sua** unidade"). Nunca "nós e vocês".
- **Nós** quando a empresa é o sujeito da ação ("**Conectamos** seu carro a uma rede exclusiva"). Mostra que a Flash Car faz o trabalho pesado.
- **Imperativo curto** nos CTAs ("Agendar avaliação", "Encontrar unidade", "Quero ser franqueado") — verbo + objeto, sem ornamento.

### Casing

- **Sentence case** em headlines e botões (`"Venda seu veículo com segurança"`, não `"VENDA SEU VEÍCULO COM SEGURANÇA"`).
- **MAIÚSCULAS** reservadas para eyebrows curtos (12px, `letter-spacing: 0.14em`): `OPORTUNIDADE B2B`, `EXCELÊNCIA AUTOMOTIVA`, `NOSSA HISTÓRIA`.
- **Title Case** evitar — soa americano e não combina com o tom.

### Comprimento

- Headline hero: ≤ 12 palavras.
- Sub-headline: ≤ 25 palavras.
- Card de benefício: 1 título + 1 frase de 12–18 palavras. Sem parágrafos.
- Step de processo: número + verbo + 1 frase explicando o quê + benefício.

### Exemplos de copy alinhada

> **Headline hero:**
> "Venda seu veículo com segurança, agilidade e pagamento via PIX em até **60 minutos**."
>
> **Eyebrow franquia:**
> "OPORTUNIDADE B2B"
>
> **Subhead franquia:**
> "Abra sua franquia Flash Car e empreenda no mercado de intermediação de veículos."
>
> **Card de diferencial:**
> "**Velocidade PIX** — Tempo é dinheiro. Nosso recorde de liquidação é de 24 minutos. Venda e receba no mesmo dia."
>
> **CTA:**
> "Agendar avaliação gratuita"

### Exemplos do que evitar

| Em vez de | Use |
|---|---|
| "A melhor experiência de venda do Brasil" | "Avaliação técnica + compradores verificados + PIX em até 60 min" |
| "Revolucionamos o mercado automotivo" | "Conectamos vendedores a uma rede exclusiva de compradores" |
| "Plataforma omnichannel de soluções" | "Atendimento por WhatsApp ou presencial na unidade" |
| Emoji 🚗💨💸 | Ícones outline (Material Symbols / Lucide) + cor da marca |

### Canal de conversão

**WhatsApp é o canal principal.** Todo CTA terciário ("Falar com esta unidade", "Falar com consultor") aponta para WhatsApp. Botão flutuante (`.fc-fab-whatsapp`) presente em todas as páginas voltadas ao cliente final.

---

## Fundamentos visuais

### A tríade de marca (não mexer)

A identidade vem do logo: **vermelho + amarelo + verde** sobre branco. O Stitch tentou inverter isso (usando navy como primária e vermelho só como secundária), o que apaga a personalidade da marca. Aqui a hierarquia é:

| Token | Hex | Uso |
|---|---|---|
| `--fc-red` | `#F93031` | Cor de marca dominante. Hero backgrounds, CTAs primários, eyebrows, números de stat |
| `--fc-yellow` | `#FBE51B` | Acento de energia/velocidade. Selos, micro-destaques de "rápido" ("PIX 24min"). Nunca como cor principal de texto |
| `--fc-green` | `#5BB336` | Acento de valor/dinheiro. WhatsApp CTA, badges de PIX, sucesso |
| `--fc-navy-900` | `#0A1628` | **Apoio**, não protagonista. Footer, seções premium da franquia, quote blocks |
| `--fc-white` | `#FFFFFF` | Canvas padrão. 70%+ das telas devem ser brancas com respiro |

### Tipografia

**Montserrat** em todos os pesos (400 → 900) é a fonte principal. Geométrica, confiante, conota indústria automotiva premium sem ser pesada. Pesos 800/900 para headlines de impacto; 700 para subtítulos; 400/500 para corpo.

- Display hero: `clamp(40px, 6vw, 72px)` weight 800, tracking `-0.02em`
- H1: `clamp(32px, 4.4vw, 52px)` weight 800
- Body: 16px weight 400 line-height 1.65 (cliente final precisa respirar)
- Eyebrow: 12px weight 700 uppercase tracking `0.14em` na cor vermelho

Inter fica como fallback técnico em UIs densas (tabelas, forms longos), mas Montserrat cobre 95% dos casos.

### Backgrounds

- **Branco puro** é o default. Páginas brancas, espaçadas, com cards leves.
- **Vermelho `#F93031` chapado** para o "hero card de conversão" (uma CTA grande no fim da página, "Quer saber quanto vale seu veículo?"). Quando aparece, ocupa o bloco inteiro.
- **Navy `#0A1628` chapado** para footer e para a seção "Diferenciais Flash Car" no meio das páginas. Cria contraste editorial.
- **Cinza `#F7F7F8` muito sutil** para alternar seções sem quebrar o ritmo branco.
- **Sem gradientes decorativos.** Se houver gradiente, é overlay funcional sobre foto (escurecer hero image: `linear-gradient(to right, rgba(10,22,40,0.85), rgba(10,22,40,0.4))`).
- **Sem padronagens decorativas, sem grain, sem texturas.** A marca é limpa.

### Cantos e bordas

- **8px** em inputs, secondary buttons, badges quadrados.
- **12px** em cards padrão.
- **16px** em cards de destaque (hero, franquia premium).
- **24px** em containers grandes de feature.
- **Pill (999px)** para CTAs primários, filter chips, status badges e badges de marca.
- **Bordas 1px `--border-soft` (`#E2E3E7`)** definem cards em superfícies brancas. Nunca borda colorida do lado esquerdo só (anti-tropo de "AI slop").

### Sombras

Dois sistemas em paralelo:

- **Ambiente neutro** (tint navy): `--shadow-sm`, `--shadow-md`, `--shadow-lg`. Eleva cards de produto, unidade, depoimento.
- **CTA tint** (vermelho): `--shadow-cta`, `--shadow-cta-hover`. **Exclusivo** do botão primário — dá a sensação de "botão quente que quer ser apertado".

### Animação e estados

- **Hover em cards:** lift de `-2px` + sombra cresce. 200ms `cubic-bezier(0.2, 0.7, 0.2, 1)`.
- **Hover em CTA primário:** vermelho clareia (`#FF4747`) + sombra mais forte. 120ms.
- **Press:** `translateY(1px)` (afundamento). Cor vai para `--fc-red-deep` `#E5161A`.
- **Focus:** outline 3px vermelho com offset 3px. Acessível em qualquer fundo.
- **Sem bouncy springs.** A marca é profissional, não brincalhona. Easings curtos e diretos.
- **Sem animações decorativas em loop.** O raio do logo é estático.

### Transparência e blur

- Modal/overlay: backdrop `rgba(10, 22, 40, 0.6)` + blur 12px. Foco total no conteúdo do modal.
- Glassmorphism: **evitar.** Não combina com a confiança institucional que a marca precisa transmitir. Se aparecer, é num único card de "depoimento sobre foto" — nunca em estruturas de layout.

### Imagens

- **Fotos de carros:** estúdio ou semi-estúdio, baixo-key (fundo escuro, carro premium). Tom **cool**, levemente azulado. Nunca shutterstock genérico de "homem feliz apertando mão de vendedor".
- **Fotos de unidades:** vidro, fachada, iluminação noturna. Mostra escala (concessionária real).
- **Fotos de pessoas:** sóbrias, ambiente corporativo, dupla de fundadores. Não usar stock com sorrisos exagerados.
- **Sem ilustrações vetoriais infantis.** Se ilustração for necessária, é técnica/linear (em outline).
- Imagens preenchem o card inteiro (object-fit cover), borda arredondada no card, **nunca circular** (exceto avatar/foto-de-perfil 32–56px).

### Layout

- **Mobile-first.** Container max 1200px no desktop. Gutter 16px mobile, 24px desktop.
- **Grid 12 colunas** no desktop com 24px gutters. Cards de 3 colunas para steps, 3 ou 4 para diferenciais, 1+2 (split) para "Mission & Vision".
- **Seção vertical:** 48px padding em mobile, 96px em desktop. Generoso, premium.
- **Navbar sticky** 72px, branco, com link ativo sublinhado em vermelho.
- **Footer navy** com 3 colunas + newsletter inline.

### Hierarquia de CTA por página

| Página | CTA primário | CTA secundário | CTA terciário |
|---|---|---|---|
| Home | Agendar avaliação gratuita | Encontrar unidade | WhatsApp (FAB) |
| Como funciona | Encontrar unidade mais próxima | Falar com consultor | — |
| Sobre | Agendar avaliação | Newsletter | — |
| Unidades | Falar com esta unidade (por card) | — | — |
| Seja um franqueado | Quero ser franqueado | Quero falar com um especialista | — |

A página de franquia **nunca** mostra "Agendar avaliação" e a home **nunca** mostra "Quero ser franqueado" em destaque (só como link discreto no nav).

---

## Iconografia

A Flash Car não possui um icon set proprietário ainda. Usamos **Material Symbols Outlined** (mesma família que o site Stitch já usou) como base — eles são gratuitos, têm cobertura completa de automotivo (carro, moto, garagem, ferramenta), e o estilo *outlined* combina com o tom técnico-profissional.

| Diretriz | Detalhe |
|---|---|
| Família | [Material Symbols Outlined](https://fonts.google.com/icons) — variant `outlined`, weight 400, optical size 24 |
| Tamanho default | 24px (UI), 36px (hero/destaque), 18px (inline) |
| Cor padrão | `currentColor` — herda da parent. Em cards brancos → vermelho. Em seções dark → branco |
| Stroke | 2px, nunca preencher |
| Substituição local | Tem cobertura para ⚡ (`bolt`), carro (`directions_car`), moto (`two_wheeler`), caminhão (`local_shipping`), escudo (`verified_user`), PIX (`pix`), WhatsApp use logo oficial |

### Logos

Disponíveis em `assets/`:

| Arquivo | Quando usar |
|---|---|
| `logo-flashcar-color.png` | Sobre fundo branco. Wordmark colorido completo. |
| `logo-flashcar-white.png` | Sobre fundo vermelho ou navy. Versão branca do wordmark. |
| `logo-mark.svg` | Símbolo do raio + cifrão isolado (sem ".store"). Para favicon ou app icon pequeno. |
| `logo-mark-red-bg.svg` | Símbolo sobre fundo vermelho com cantos arredondados. Para avatar quadrado / OG image. |
| `avatar-red-square.png` | Avatar quadrado oficial 1080×1080. Use para social, OG, profile. |
| `logo-flashcar-vertical-red.png` | Aplicação vertical com fundo vermelho. Para stories, banners 9:16. |

### Emojis

**Não.** A marca não usa emoji em UI nem em copy. Quando o conteúdo precisa de "ênfase visual", use:

- Badge colorido (`.fc-badge--yellow` por exemplo)
- Ícone outline em cor de marca
- Número de stat em vermelho grande
- **Nunca** ⚡🚗💸 inline no texto.

### Imagens de placeholder

Quando o conteúdo real ainda não existe, usar `images/placeholder-car-{1..4}.jpg`. As 4 fotos são genéricas de carro estúdio, dark-key, cool tone.

---

## Índice de arquivos

```
.
├── README.md                    ← este arquivo
├── SKILL.md                     ← invocação como Agent Skill
├── colors_and_type.css          ← tokens (cores, tipografia, espaço, sombras, motion)
├── components.css               ← botões, cards, badges, inputs, navbar, sections
│
├── assets/                      ← logos + marca
│   ├── logo-flashcar-color.png
│   ├── logo-flashcar-white.png
│   ├── logo-mark.svg
│   ├── logo-mark-red-bg.svg
│   ├── avatar-red-square.png
│   └── logo-flashcar-vertical-red.png
│
├── preview/                     ← cards do Design System tab
│   └── *.html  (logos, cores, type, components, etc)
│
└── ui_kits/
    └── flashcar_site/           ← UI kit do site institucional
        ├── README.md
        ├── index.html           ← protótipo navegável (home + páginas)
        ├── Nav.jsx, Hero.jsx, Steps.jsx, …
        └── pages/
```

Para começar do zero a usar essa marca, sempre:

1. Carregue `colors_and_type.css` e `components.css` no `<head>`.
2. Aplique `font-family: var(--font-body)` no `body` (já vem aplicado se incluir o reset).
3. Use as classes `.fc-btn--primary`, `.fc-card`, `.fc-section--brand` direto. Os tokens estão expostos como CSS custom properties para uso em estilos novos.
4. Para componentes React, copie o UI kit em `ui_kits/flashcar_site/` e remixar.
