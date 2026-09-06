# Design Specification

Purpose
-------
This document captures the core design tokens and usage guidelines for the portfolio site.

Color Palette
-------------
- Primary: --color-primary (#0B5FFF)
- Accent: --color-accent (#FF5A5F)
- Background: --color-bg (#FFFFFF)
- Surface: --color-surface (#F7F7F8)
- Text: --color-text (#111827)
- Muted: --color-muted (#6B7280)
- Success: --color-success (#16A34A)
- Warning: --color-warning (#F59E0B)
- Danger: --color-danger (#EF4444)

Typography
----------
- Font stack: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial
- Base size: 16px
- Scale: --font-size-sm: 14px; --font-size-base: 16px; --font-size-lg: 18px; --font-size-xl: 20px
- Line height: 1.4–1.6 depending on context

Spacing
-------
- 4px base grid. Use variables: --space-1 (4px), --space-2 (8px), --space-3 (12px), --space-4 (16px), --space-5 (24px)

Radii & Elevation
------------------
- Radii: --radius-sm (4px), --radius-md (8px), --radius-lg (12px)
- Shadows: subtle elevation using --shadow-1 and --shadow-2

Usage
-----
1. Import `tokens.css` in global styles (e.g., in the head).
2. Reference variables in component styles: `color: var(--color-text); padding: var(--space-4);`

Accessibility Notes
-------------------
- Ensure contrast ratios meet WCAG AA for text and UI elements. Use the tokens as a baseline and adjust when necessary.

Change Log
----------
- 2026-08-13: Initial spec and token file added.
