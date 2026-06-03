# Flash Car Site · UI Kit

Interactive recreation of the Flash Car Store institutional site, built on the design system tokens in `../../colors_and_type.css` + `../../components.css`. This is the **corrected** version of the Stitch output — the brand red leads instead of being relegated to a secondary accent.

## Run

Open `index.html` in any browser. No build step. The site uses hash routing (`#home`, `#como-funciona`, etc.) so links survive a refresh.

## Structure

| File | What's in it |
|---|---|
| `index.html` | Loader. Pulls React + Babel UMD, the system CSS, and the three JSX files. |
| `styles.css` | Page-specific layout (hero, page-header, dark band, footer grid). Tokens come from `colors_and_type.css`. |
| `Shared.jsx` | `Nav`, `Footer`, `MS` (Material Symbol wrapper), `WhatsAppIcon`, `TrustBar`, `ConversionCard`. |
| `Pages.jsx`  | `HomePage`, `ComoFuncionaPage`, `SobrePage`, `UnidadesPage`, `FranquiaPage` + helpers (`StepCard`, `UnitCard`, `Testimonial`, etc.). |
| `App.jsx`    | Root, hash router, mounts pages. |

## What this kit covers

| Page | Pattern coverage |
|---|---|
| Home | Hero with floating cards, trust bar, numbered steps, dark differentiator band, vehicle-type grid, end-of-page conversion card |
| Como funciona | Page header, 6-step methodology grid (with one `--active` red step), dark testimonial block with anti-pattern list |
| Sobre | Page header with badges, founders story split, mission/vision dual card, 4-pillar value grid |
| Unidades | Filter-pill state filtering, 6 unit cards with flags (sede própria, novo espaço, top de avaliações), WhatsApp CTA per card |
| Seja um franqueado | Navy hero with KPI grid (investimento, payback, margem), feature pair, 6-item differential grid on dark, 2-tier model cards (Smart / Premium with "RECOMENDADO" tag), market stats with inline KPIs, testimonials from real-name franchisees |

## Where I cut corners (intentionally)

- **All images are placeholders** (gradient + Material Symbol). The real site needs actual photos of: founders (David + Agnaldo), each unit's facade, vehicle hero shots. Once those exist, swap the `.about-photo`, `.kit-hero__visual`, and `.fc-unit-card__media` content.
- **Mobile nav menu** is a button only — the drawer isn't wired. The desktop nav is the canonical demo.
- **No form validation logic** — the inputs are visual demos of the field states.
- **WhatsApp + form submissions** all `preventDefault()`. Wire them to your real channels (the `wa.me/` link in the FAB is a placeholder).

## Tokens used

Everything red on this site uses `var(--fc-red)`. The dark band sections all use `var(--fc-navy-900)`. The "speed/PIX" yellow uses `var(--fc-yellow)`. If you change them in `colors_and_type.css`, every page picks it up.
