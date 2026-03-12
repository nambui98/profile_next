# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Setup

**Node version is pinned to 16** — newer versions cause dependency crashes. Always run:
```bash
nvm use
```

Then install and start:
```bash
yarn install
yarn dev      # http://localhost:3000
yarn build
yarn start
yarn lint
```

No test framework is configured.

## Architecture

Personal portfolio/profile website built with Next.js 12, React 18, TypeScript, Tailwind CSS, and Framer Motion.

### Page Routes (`/pages`)
- `index.tsx` — Home/profile intro with social links, resume download/print
- `skills.tsx` — Tech stack grid
- `works.tsx` — Portfolio projects grid (25+ items) with modal detail view
- `contact.tsx` — Contact info with embedded Google Map
- `_app.tsx` — Root wrapper; wraps everything in ThemeProvider + ColorProvider, renders loading screen, main layout (Menu + content + sidebar avatar card)

### State & Theming (`/containers`)
- `ThemeContext/` — Dark/light mode, persisted in localStorage
- `ColorsContext/` — 6 selectable accent colors applied as CSS variables globally
- `Setting/` — Settings panel UI
- `ThemeToggle/` — Theme toggle button

### Components (`/components`)
- `WorkDialog.tsx` — Framer Motion modal for project details
- `bubbles/` — Animated background bubbles
- `loading/` — 2-second splash screen shown on mount
- `menu/` — Hamburger nav menu (Framer Motion)

### i18n (`/locales`)
English (`en`) and Vietnamese (`vn`) via `next-translate`. All pages use the `common` namespace. Config in `i18n.json`.

### Styling
- Tailwind CSS + SCSS (`styles/globals.scss`)
- Dark mode via `class` strategy on `<html>`
- Custom `smx` breakpoint (max-width: 639px)
- Neumorphic shadows: `shadow-3xl`, `shadow-3xl-dark`, `shadow-btn-shadow`
- Fonts: Poppins (sans), Merriweather (serif)

### Key Deps
- `framer-motion` 6 — animations throughout
- `next-translate` 1.4 — i18n
- `boxicons` 2 — icon library
- `react-transition-group` 4 — page transitions
