---
name: Ujenzi 25 Directives
colors:
  surface: '#fbf8fb'
  surface-dim: '#dcd9dc'
  surface-bright: '#fbf8fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f5'
  surface-container: '#f0edf0'
  surface-container-high: '#eae7ea'
  surface-container-highest: '#e4e2e4'
  on-surface: '#1b1b1d'
  on-surface-variant: '#45464d'
  inverse-surface: '#303032'
  inverse-on-surface: '#f3f0f2'
  outline: '#76777e'
  outline-variant: '#c6c6ce'
  surface-tint: '#535e7b'
  primary: '#09152e'
  on-primary: '#ffffff'
  primary-container: '#1f2a44'
  on-primary-container: '#8691b0'
  inverse-primary: '#bbc6e7'
  secondary: '#904d00'
  on-secondary: '#ffffff'
  secondary-container: '#fe932c'
  on-secondary-container: '#663500'
  tertiary: '#6d5e10'
  on-tertiary: '#ffffff'
  tertiary-container: '#beab57'
  on-tertiary-container: '#4b3f00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d9e2ff'
  primary-fixed-dim: '#bbc6e7'
  on-primary-fixed: '#0f1b34'
  on-primary-fixed-variant: '#3b4662'
  secondary-fixed: '#ffdcc3'
  secondary-fixed-dim: '#ffb77d'
  on-secondary-fixed: '#2f1500'
  on-secondary-fixed-variant: '#6e3900'
  tertiary-fixed: '#f8e288'
  tertiary-fixed-dim: '#dbc66f'
  on-tertiary-fixed: '#221b00'
  on-tertiary-fixed-variant: '#534600'
  background: '#fbf8fb'
  on-background: '#1b1b1d'
  surface-variant: '#e4e2e4'
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Sora
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 42px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
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
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
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
  margin-desktop: 48px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-padding: 80px
---

## Brand & Style
The design system is engineered to evoke a sense of "Established Modernity"—blending the reliability of a premium construction firm with the seamless, fast-paced UX of a modern fintech platform. The target audience includes high-net-worth property developers, commercial contractors, and discerning homeowners in Tanzania who value professional precision and local relevance.

The visual style is **Corporate / Modern** with a focus on high-end polish. It utilizes generous whitespace to convey a "light and fast" performance feel, while anchoring the experience with heavy, authoritative typography and structured grid systems. The aesthetic avoids the clutter of traditional industrial design in favor of a clean, airbnb-inspired layout that emphasizes clarity and high-quality photography.

## Colors
The palette is rooted in a **Deep Navy** primary to establish institutional trust. **Warm Orange** is reserved strictly for conversion-oriented call-to-actions, ensuring high visual salience against the muted background. 

An **Olive/Gold** tertiary color acts as a bridge between the industrial and luxury aspects of the brand, used for decorative icons and premium badges. The background utilizes an **Off-white** tone to reduce eye strain and provide a softer, more sophisticated canvas than pure white. All surface elements (cards, containers) are pure white to create clear separation from the background through subtle tonal contrast and shadows.

## Typography
This design system uses a hierarchical font strategy:
- **Headings (Sora):** Set with tight letter-spacing to appear more structural and impactful. Use for all page titles and section headers.
- **Body (Inter):** Optimized for readability with a generous line-height (1.5x minimum). Inter provides a neutral, systematic feel that aligns with the "tech-enabled" brand promise.
- **Labels & Metrics (JetBrains Mono):** Used for technical metadata, division numbers (e.g., "01 SERVICE"), and status labels. This monospaced contrast reinforces the engineering and construction precision of the product.

## Layout & Spacing
The system utilizes a **12-column fluid grid** for desktop and a **4-column grid** for mobile. 

- **Vertical Rhythm:** A strict 8px baseline grid is used. Sections should be separated by 80px to 120px of vertical space to maintain the "premium" airy feel.
- **Safe Areas:** On desktop, the main content is centered within a 1280px container.
- **Grid Alignment:** Elements like Service Cards should span 4 columns (3 per row) on desktop and 12 columns (1 per row) on mobile.

## Elevation & Depth
Elevation is used sparingly to signify interactivity and layering without cluttering the UI. 

- **Surface Tiers:** The primary canvas is #FAFAF8. Interactive cards and containers use a pure white (#FFFFFF) surface.
- **Shadow Profile:** Shadows are soft and diffused, using the Primary Navy color as a very low-opacity tint (e.g., `rgba(31, 42, 68, 0.08)`).
- **Default Elevation:** 4px blur, 2px Y-offset.
- **Hover Elevation:** 12px blur, 6px Y-offset.
- **Glassmorphism:** Reserved exclusively for the Sticky Navbar when scrolling, using a 12px backdrop-filter blur and 90% opacity white.

## Shapes
The shape language is "Rounded-Soft," balancing professional rigidity with modern friendliness.
- **Base Components:** 12px (0.75rem) corner radius for buttons and input fields.
- **Large Containers:** 16px (1rem) corner radius for Service Cards and Modals.
- **Status Badges:** Fully rounded (pill-shaped) for maximum visual distinction from rectangular structural elements.
- **Circle Elements:** 50% radius for numbering badges and icon backgrounds.

## Components
### Buttons
- **Primary:** Solid Warm Orange (#D97706) with white text. Rounded (12px).
- **Secondary:** Navy (#1F2A44) outline with a 1.5px stroke.
- **Tertiary/Ghost:** No border, Navy text, appears on hover with a light gray tint.

### Service Cards
- **Structure:** White background, 16px radius, soft shadow.
- **Elements:** Top-left features a Navy circle with Olive/Gold text for the service number (e.g., 01). Icons are displayed on a circular light-gray or light-gold wash.
- **Image:** Full-width top-aligned image with a 15% warm-to-transparent gradient at the bottom for text legibility.

### Sticky Navbar
- **Height:** 80px.
- **Design:** White background with a subtle bottom border or soft shadow. Features a language toggle (English/Swahili) using the `label-mono` typography style.

### Badges & Status
- **Pills:** 12px height, uppercase JetBrains Mono text.
- **Colors:** Neutral Gray (Draft), Blue (In Progress), Orange (Pending), Green (Success).

### Input Fields
- **Design:** 1.5px border in light gray. On focus, the border transitions to Primary Navy. Labels use the `body-md` weight in Charcoal.