---
name: Velocity Precision
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#45474d'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#75777d'
  outline-variant: '#c5c6cd'
  surface-tint: '#545e76'
  primary: '#051125'
  on-primary: '#ffffff'
  primary-container: '#1b263b'
  on-primary-container: '#828da7'
  inverse-primary: '#bbc6e2'
  secondary: '#bc000b'
  on-secondary: '#ffffff'
  secondary-container: '#e3231f'
  on-secondary-container: '#fffbff'
  tertiary: '#695f00'
  on-tertiary: '#ffffff'
  tertiary-container: '#bead00'
  on-tertiary-container: '#474000'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#bbc6e2'
  on-primary-fixed: '#101b30'
  on-primary-fixed-variant: '#3c475d'
  secondary-fixed: '#ffdad5'
  secondary-fixed-dim: '#ffb4aa'
  on-secondary-fixed: '#410001'
  on-secondary-fixed-variant: '#930006'
  tertiary-fixed: '#fbe51b'
  tertiary-fixed-dim: '#dcc800'
  on-tertiary-fixed: '#201c00'
  on-tertiary-fixed-variant: '#4f4700'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
  success-green: '#60b239'
  surface-subtle: '#f4f5f7'
  border-muted: '#e2e8f0'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-xl:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-bold:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The brand personality is anchored in trust, expertise, and high-performance automotive intermediation. It targets a discerning audience seeking professional car-buying and selling experiences. The UI evokes a sense of reliability and premium quality through a "Corporate Modern" aesthetic.

The design style utilizes a refined, minimalist approach with expansive whitespace to allow high-quality vehicle imagery to breathe. It incorporates subtle depth through tonal layering and sophisticated typography to establish an authoritative presence in the automotive market. Every element is geared toward clarity and confidence, ensuring the user feels in control of their high-value transaction.

## Colors

The palette is led by **Deep Charcoal/Dark Blue**, utilized for headers, primary text, and structural elements to establish immediate trust. The **Action Red** (#fb372e) is reserved exclusively for critical calls-to-action (CTAs) and highlights, ensuring high visibility and urgency without overwhelming the premium feel.

**White** is the primary surface color to maintain a clinical, high-end showroom feel. **Success Green** and **Highlight Yellow** are used as semantic accents for price drops, status updates, or "Speedy Transaction" features. Tonal variations of the neutral palette provide soft borders and background tiers to separate content sections without using heavy lines.

## Typography

This design system exclusively uses **Montserrat** to project a modern and professional image. The type scale is built on a 4px baseline grid to ensure vertical rhythm. 

- **Display levels** are bold and slightly condensed in tracking to mimic high-performance automotive branding.
- **Body copy** maintains a comfortable line height (1.5x) to ensure legibility when reading technical specifications.
- **Labels** utilize uppercase styling and increased letter spacing to differentiate metadata (e.g., mileage, year, engine type) from body descriptions.
- **Mobile scaling** reduces large display headers to prevent awkward wrapping while maintaining their bold character.

## Layout & Spacing

The layout follows a **Fixed Grid** model for desktop to ensure content remains centered and focused, transitioning to a fluid model for mobile devices. 

- **Desktop:** 12-column grid with a max-width of 1280px, 24px gutters, and 64px margins.
- **Tablet:** 8-column grid with 24px gutters and 32px margins.
- **Mobile:** 4-column grid with 16px gutters and 16px margins.

Spacing is "generous" to communicate a premium service tier. Vertical sections are separated by `xl` spacing units, while related components (like car details and pricing) use `md` or `sm` units.

## Elevation & Depth

Visual hierarchy is established primarily through **Tonal Layers** rather than heavy shadows. The primary surface is pure white, while secondary sections (like filters or sidebars) sit on a subtle grey-blue tint (`surface-subtle`).

When depth is required for interactive elements:
- **Soft Ambient Shadows:** Use very low-opacity (8-12%) shadows with a wide blur radius, tinted with the primary charcoal color to maintain a cohesive look.
- **Low-Contrast Outlines:** Cards and input fields use a 1px solid border (`border-muted`) to define boundaries without adding visual noise.
- **Hover States:** Elements should lift slightly (2px translation) with a subtle increase in shadow depth to provide tactile feedback.

## Shapes

The shape language is "Soft" and professional. While the automotive industry often leans into sharp angles, this design system uses a consistent 0.25rem (4px) corner radius to feel approachable and modern without becoming overly playful or "bubbly."

- **Standard Elements:** (Inputs, Buttons, Cards) use a 4px radius.
- **Large Containers:** (Modals, Feature Sections) use an 8px radius.
- **Special Elements:** Tags or "Condition" chips may use a full-pill radius to distinguish them from actionable buttons.

## Components

### Buttons
- **Primary:** Solid Dark Blue (#1b263b) with white text. High-contrast, sharp, 4px radius.
- **Action:** Solid Red (#fb372e) with white text. Reserved for "Buy Now," "Book Inspection," or "Submit Offer."
- **Ghost:** 1px Dark Blue border with transparent background for secondary actions.

### Cards (Vehicle Listings)
Cards use a white background with a subtle border. The vehicle image is flush to the top. Information is structured with a clear hierarchy: Price (Action Red), Title (Headline-md), and Specs (Label-bold).

### Input Fields
Inputs are clean with a 1px border. The focus state uses a 2px Dark Blue border. Error states utilize the Action Red for both the border and the helper text.

### Chips & Status Indicators
Used for "New Arrival," "Certified," or "Price Drop." These use a full-pill radius. "Price Drop" chips specifically use the Highlight Yellow (#fce61d) background with Dark Blue text for maximum visibility.

### Icons
Simple, thin-stroke (1.5px) icons. They are monochromatic (Dark Blue) to avoid competing with vehicle photos, which are the primary visual focus.