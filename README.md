# Flash Car Store

Site institucional da Flash Car Store — rede de intermediacao de veiculos com avaliacao gratuita, compradores verificados e pagamento via PIX.

---

## Paginas

| Pagina | URL | Descricao |
|---|---|---|
| Home | `/` | Hero, trust bar, como funciona, diferenciais, grid de veiculos, conversao |
| Como Funciona | `/como-funciona` | Metodologia em 6 passos, depoimentos |
| Sobre | `/sobre` | Historia, fundadores, missao e visao |
| Unidades | `/unidades` | Listagem filtrada de todas as unidades |
| Central de Ajuda | `/central-de-ajuda` | Perguntas frequentes |
| Seja um Franqueado | `/seja-um-franqueado` | Modelos de investimento, diferenciais, KPIs |

### Unidades

Cada unidade tem pagina propria. Dados em `units-config.js`.

| Unidade | URL | UF |
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

1. Adicionar os dados em `units-config.js`
2. Adicionar o rewrite em `vercel.json`
3. Copiar `unidade.html` para `nova-unidade/index.html`
4. Adicionar a URL em `sitemap.xml`

---

## Estrutura

```
design-system/                  ← raiz do site (upload via FTP)
├── index.html                  ← Home
├── unidade.html                ← Template de unidade
├── units-config.js             ← Dados das unidades
├── colors_and_type.css         ← Tokens de design
├── components.css              ← Componentes CSS
├── sitemap.xml                 ← Sitemap SEO
├── robots.txt                  ← Crawlers
├── car-black-suv.png           ← Imagem OG / hero
├── assets/                     ← Logos, videos, fotos
├── como-funciona/index.html    ← /como-funciona
├── sobre/index.html            ← /sobre
├── unidades/index.html         ← /unidades
├── central-de-ajuda/index.html ← /central-de-ajuda
├── seja-um-franqueado/index.html ← /seja-um-franqueado
├── blumenau/index.html         ← /blumenau
├── jaragua-do-sul/index.html   ← /jaragua-do-sul
├── ...                         ← demais unidades
└── goiania/index.html          ← /goiania
```

---

## Deploy

### Vercel (automatico)

- **Output directory:** `design-system/`
- **Build command:** nenhum
- Deploy automatico a cada push na branch `main`

### FTP (manual)

Fazer upload de todo o conteudo da pasta `design-system/` para a raiz do servidor.
