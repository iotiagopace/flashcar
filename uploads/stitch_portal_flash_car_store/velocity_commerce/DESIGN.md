---
name: Velocity Commerce
colors:
  surface: '#f8f9ff'
  surface-dim: '#c2dcff'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eef4ff'
  surface-container: '#e5efff'
  surface-container-high: '#dbe9ff'
  surface-container-highest: '#d1e4ff'
  on-surface: '#001d36'
  on-surface-variant: '#45474d'
  inverse-surface: '#17324d'
  inverse-on-surface: '#e9f1ff'
  outline: '#75777d'
  outline-variant: '#c5c6cd'
  surface-tint: '#545e76'
  primary: '#051125'
  on-primary: '#ffffff'
  primary-container: '#1b263b'
  on-primary-container: '#828da7'
  inverse-primary: '#bbc6e2'
  secondary: '#5c5f60'
  on-secondary: '#ffffff'
  secondary-container: '#e1e3e4'
  on-secondary-container: '#626566'
  tertiary: '#1a1000'
  on-tertiary: '#ffffff'
  tertiary-container: '#352300'
  on-tertiary-container: '#b98400'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#bbc6e2'
  on-primary-fixed: '#101b30'
  on-primary-fixed-variant: '#3c475d'
  secondary-fixed: '#e1e3e4'
  secondary-fixed-dim: '#c5c7c8'
  on-secondary-fixed: '#191c1d'
  on-secondary-fixed-variant: '#454748'
  tertiary-fixed: '#ffdea9'
  tertiary-fixed-dim: '#ffba27'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#5e4100'
  background: '#f8f9ff'
  on-background: '#001d36'
  surface-variant: '#d1e4ff'
typography:
  headline-xl:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 32px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is engineered for a premium automotive marketplace, prioritizing trust, objectivity, and commercial efficiency. The brand personality is modern and authoritative, designed to make high-value transactions feel secure and straightforward.

The visual style follows a **Corporate / Modern** aesthetic with a focus on high-clarity information density. It utilizes structured layouts, ample whitespace, and high-contrast focal points to guide users through the car-buying journey. The emotional response should be one of confidence and professional reliability, avoiding unnecessary flourish in favor of functional elegance.

## Colors

The palette is anchored by **Deep Navy (#1B263B)**, used for primary branding, navigation, and core interaction points to establish an immediate sense of institutional trust. 

**Vibrant Orange (#FFB703)** is reserved exclusively for high-priority Call to Actions (CTAs) and critical price highlights, ensuring maximum conversion visibility against the neutral backdrop. Surfaces utilize **Clean White (#FFFFFF)** for primary content areas and **Light Grey (#F8F9FA)** for secondary containers and background grouping. The neutral scale is extended with a muted blue-grey for secondary text and borders to maintain a cohesive, sophisticated atmosphere.

## Typography

This design system uses a dual-font strategy. **Montserrat** is used for headlines to provide a confident, geometric, and modern edge that fits the automotive industry. **Inter** is utilized for all body copy, technical specifications, and labels due to its exceptional legibility and neutral, professional character.

Information hierarchy is critical for comparing vehicle specs. Use `headline-xl` for hero pricing and vehicle names, and `body-md` for standard descriptions. All labels and technical data points should use `label-md` with increased tracking for clarity.

## Layout & Spacing

The system adopts a **Fluid Grid** model with a mobile-first approach. 

- **Mobile:** Single column layout with 16px side margins. Cards span the full width of the safe area.
- **Desktop:** 12-column grid with a maximum width of 1280px. 24px gutters provide breathing room between vehicle listings.
- **Rhythm:** An 8px linear scale governs all padding and margin decisions. 

Internal card padding should remain consistent at 24px (stack-lg) to emphasize the premium nature of the product. Lists of features should use 8px (stack-sm) vertical spacing to maintain grouping.

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layers** supplemented by **Ambient Shadows**. 

The background is `#F8F9FA`. Primary interactive elements like vehicle cards and search filters sit on `#FFFFFF` surfaces with a "Soft Lift" shadow: `0px 4px 12px rgba(27, 38, 59, 0.08)`. This creates a subtle distinction without feeling heavy or cluttered. 

Active states for buttons or focused inputs should use a slightly more pronounced shadow to indicate depth. Overlays and modals use a backdrop blur (12px) with a 40% opacity navy tint to keep the focus on the transaction.

## Shapes

The design system uses a **Rounded** shape language (8px-12px) to balance modern precision with approachability.

- **Standard Elements:** 8px (`0.5rem`) for inputs, small cards, and secondary buttons.
- **Large Elements:** 16px (`1rem`) for primary vehicle cards and hero sections.
- **Full Round:** Used exclusively for tags, status indicators (e.g., "New Arrival"), and iconography backgrounds to provide visual contrast against the structured grid.

## Components

### Buttons
- **Primary:** Deep Navy (#1B263B) background with White text. 8px corner radius. Bold weight.
- **CTA:** Vibrant Orange (#FFB703) background with Deep Navy text for maximum contrast. Used for "Buy Now" or "Book Test Drive."
- **Secondary:** Transparent with a 1.5px Deep Navy border.

### Cards
- **Vehicle Card:** White background, 16px corner radius, subtle ambient shadow. Images must be top-aligned with no padding. Content area below the image uses 20px padding.
- **Stats Card:** Light Grey (#F8F9FA) background, no shadow, used for technical specifications like "0-60 mph" or "Fuel Economy."

### Input Fields
- White background with a 1px border (#D1D5DB). On focus, the border thickens to 2px and changes to Deep Navy. Labels sit above the field in `label-md`.

### Navigation
- **Fixed Navbar:** 72px height, White background with a subtle bottom border. High-z-index to remain visible. Icons are simple 2px weight lines in Deep Navy.

### Chips & Tags
- Used for vehicle attributes (e.g., "Automatic", "Electric"). Pill-shaped with Light Grey backgrounds and `label-sm` typography.