---
name: flashcar-design
description: Use this skill to generate well-branded interfaces and assets for Flash Car Store — a Brazilian vehicle-intermediation brand (red-led identity, Montserrat type, "venda em 60 minutos via PIX" promise). Contains essential design guidelines, the locked brand triad (red / yellow / green), Montserrat type scale, fonts, logo assets, and a working UI-kit recreation of the institutional site.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out of `assets/` and create static HTML files for the user to view. Always pull `colors_and_type.css` and `components.css` into the `<head>` — they expose the brand tokens (`--fc-red`, `--fc-navy-900`, `.fc-btn--primary`, `.fc-card`, etc.) you should use instead of inventing new colors.

If working on production code, copy the CSS tokens directly into your project and read the rules here to become an expert in designing with this brand.

**Critical rules — do not break:**
1. **Red leads.** `--fc-red` (`#F93031`) is the primary brand color. Use it for hero accents, CTAs, eyebrows, stat numbers. Never demote it to "just an accent."
2. **Navy is supporting, not primary.** `--fc-navy-900` is for footers, dark band sections, and quote blocks. Never use navy as the dominant hero background unless the brief explicitly asks for the franchise hero.
3. **No emoji in UI or copy.** Use Material Symbols Outlined icons + the brand triad badges instead.
4. **CTAs are imperative and short.** "Agendar avaliação", "Quero ser franqueado", "Falar com unidade". Never marketing-speak.
5. **Two journeys, never mixed.** Cliente final (vender) pages must not show franchise CTAs in destaque. Franquia pages must not show "Agendar avaliação" in destaque.
6. **No superlatives.** No "a maior", "a melhor", "a que mais cresce". Use verifiable specifics ("recorde de 24 min", "+17% YoY", "150 itens avaliados").
7. **WhatsApp is the conversion channel.** Every page meant for cliente final has a WhatsApp FAB. Unit cards say "Falar com esta unidade" pointing to WhatsApp.

If the user invokes this skill without any other guidance, ask them what they want to build or design (a slide deck? a new landing page? marketing graphic? prototype of a new flow?), ask 3–5 sharp questions about audience and goal, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
