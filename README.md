# Personal Site — Design System Foundation

Step 1 of the build: tech scaffold, global styles, and the first core components (Button, Badge, Nav).

## Setup

```bash
npm install
npm run dev
```

Visit http://localhost:3000 — you'll see a temporary design-system preview page (colors, type, buttons, badges) with the real Nav on top. That page gets replaced by the real homepage in Step 2.

## Stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS 3 · class-variance-authority · lucide-react

## Structure

- `app/globals.css` — color tokens (light + dark) and base styles
- `tailwind.config.ts` — Tailwind theme wired to the tokens
- `lib/fonts.ts` — Fraunces (display) + Inter (body) via next/font
- `components/ui/` — Button, Badge
- `components/layout/` — Nav, Container
- `components/theme-script.tsx` — no-flash dark mode script
