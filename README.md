# Flash Car Store

Site institucional da Flash Car Store — rede de intermediacao de veiculos com avaliacao gratuita, compradores verificados e pagamento via PIX.

---

## Paginas

| Pagina | Rota | Arquivo |
|---|---|---|
| Home | `/` | `design-system/index.html` |
| Unidade | `/:slug` | `design-system/unidade.html` |

### Unidades ativas

Cada unidade tem sua rota propria (rewrite no `vercel.json` para `unidade.html`). Os dados de cada unidade ficam em `design-system/units-config.js`.

| Unidade | Rota | UF |
|---|---|---|
| Blumenau | `/blumenau` | SC |
| Jaragua do Sul | `/jaragua-do-sul` | SC |
| Tijucas | `/tijucas` | SC |
| Rio do Sul | `/rio-do-sul` | SC |
| Concordia | `/concordia` | SC |
| Joinville | `/joinville` | SC |
| Itajai | `/itajai` | SC |
| Joacaba | `/joacaba` | SC |
| Chapeco | `/chapeco` | SC |
| Brusque | `/brusque` | SC |
| Ijui | `/ijui` | RS |
| Passo Fundo | `/passo-fundo` | RS |
| Bauru | `/bauru` | SP |
| Campinas | `/campinas` | SP |
| Sao Jose do Rio Preto | `/sao-jose-do-rio-preto` | SP |
| Goiania | `/goiania` | GO |

**Para adicionar uma nova unidade:**

1. Adicionar os dados em `design-system/units-config.js`
2. Adicionar o rewrite em `vercel.json`
3. Adicionar a URL em `design-system/sitemap.xml`

---

## Estrutura

```
flashcar/
├── design-system/
│   ├── index.html              ← Home
│   ├── unidade.html            ← Template de pagina de unidade
│   ├── units-config.js         ← Dados das unidades (nome, endereco, WhatsApp)
│   ├── colors_and_type.css     ← Tokens de design (cores, tipografia, espacamento)
│   ├── components.css          ← Componentes CSS (botoes, cards, badges, inputs)
│   ├── sitemap.xml             ← Sitemap SEO
│   ├── robots.txt              ← Configuracao de crawlers
│   ├── car-black-suv.png       ← Imagem OG / hero fallback
│   └── assets/                 ← Logos e marca
│       ├── logo-flashcar-color.png
│       ├── logo-flashcar-white.png
│       ├── logo-mark.svg
│       ├── logo-mark-red-bg.svg
│       ├── avatar-red-square.png
│       ├── logo-flashcar-red-box.png
│       ├── logo-flashcar-vertical-red.png
│       ├── flashcar-hero.mp4
│       ├── flashcar-institucional.mp4
│       └── founders-david-agnaldo.webp
├── vercel.json                 ← Configuracao de deploy (rewrites)
├── .gitignore
└── README.md
```

---

## Deploy

Deployado no **Vercel** como site estatico.

- **Output directory:** `design-system/`
- **Build command:** nenhum (HTML estatico)
- **Rewrites:** cada slug de unidade aponta para `unidade.html`

Deploy automatico a cada push na branch `main`.
