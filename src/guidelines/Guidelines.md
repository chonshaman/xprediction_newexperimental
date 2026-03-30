# Design System Guidelines

## Critical Color Rules
**ALWAYS use lum color variables instead of slate color variables**
- ❌ DO NOT use: `var(--background)`, `var(--slate-*)`, or any slate-based colors
- ✅ ALWAYS use: `var(--lum-01)`, `var(--lum-02)`, `var(--lum-03)` for backgrounds and neutral colors
- Preview backgrounds, card backgrounds, and any neutral surfaces must use lum variables
- This ensures consistency with the design system and proper theming

## Color System Variables
All components must use CSS variables defined in `/styles/globals.css`:
- **Backgrounds**: `var(--lum-01)`, `var(--lum-02)`, `var(--lum-03)`
- **Cards**: `var(--card-normal)`, `var(--card-hover)`
- **Borders**: `var(--black-a1)`, `var(--black-a2)`
- **Text**: `var(--card-foreground)`, `var(--muted-foreground)`
- **Primary**: `var(--primary-button-bg)`, `var(--primary-button-bg-hover)`
- **Accent colors**: `var(--iris-9)`, `var(--iris-11)`, etc.

## Spacing & Layout
- Use CSS variable spacing: `var(--gap--0-5rem)`, `var(--gap--1rem)`, `var(--gap--2rem)`, etc.
- Maximum content width: 1280px
- Use flexbox and grid for layouts (avoid absolute positioning unless necessary)

## Border Radius
- Use CSS variable radius: `var(--border-radius--0-375rem)`, `var(--border-radius--0-5rem)`, `var(--radius-card)`, `var(--radius-xl)`

## Typography
- **ONLY** use font faces defined in `/styles/globals.css`
- Font family: Inter (primary), Kanit (marketing cards only)
- Font sizes: `var(--text-sm)`, `var(--text-base)`, `var(--text-xl)`, `var(--text-3xl)`
- Font weights: `var(--font-weight-medium)`, `var(--font-weight-semi-bold)`, `var(--font-weight-extra-bold)`
- ❌ DO NOT use Tailwind typography classes like `text-2xl`, `font-bold`, `leading-none` unless specifically requested

## HeroCarousel Requirements
- Show 4 cards at max width (1280px)
- Reduce to 3 cards at 1024px
- Reduce to 2 cards at 768px
- Show 1 card on mobile

## Performance Optimization
- Use React.memo for components
- Use useCallback for event handlers
- Memoize expensive calculations
- Keep component file sizes small

## Component Guidelines
Some base components may have default styling (e.g., gap/typography) baked in. Always explicitly set any styling from these guidelines in the generated React to override defaults.
