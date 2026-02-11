# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SNU DSBA Lab Research Page — a full-stack React + Express application showcasing the Data Science & Business Analytics Laboratory at Seoul National University. Built with React 19, TypeScript, and Vite.

## Commands

```bash
pnpm install          # Install dependencies (requires pnpm 10.4.1+)
pnpm run dev          # Start Vite dev server on port 3000
pnpm run build        # Build client (Vite → dist/public) + server (esbuild → dist/index.js)
pnpm start            # Run production server (NODE_ENV=production)
pnpm run check        # TypeScript type check (tsc --noEmit)
pnpm run format       # Format with Prettier
```

No linter configured. No test files exist (vitest is available as a dev dependency).

## Architecture

**Monorepo structure with three directories:**

- `client/` — React 19 SPA (Vite root). Entry: `client/src/main.tsx` → `App.tsx`
- `server/` — Express server that serves the built SPA with client-side routing fallback
- `shared/` — Constants shared between client and server

**Path aliases** (in both tsconfig and vite config):
- `@` → `client/src/`
- `@shared` → `shared/`
- `@assets` → `attached_assets/`

**Routing:** Wouter (lightweight React Router alternative) with a custom patch that collects route paths to `window.__WOUTER_ROUTES__`. Routes defined in `client/src/App.tsx`.

**UI components:** shadcn/ui (new-york style) built on Radix UI primitives, located in `client/src/components/ui/`. Configuration in `components.json`.

**Styling:** Tailwind CSS v4 with `@theme` syntax. Design tokens defined as CSS variables in `client/src/index.css`. Typography uses Noto Serif KR (headings) and Noto Sans KR (body). Dark mode supported via `client/src/contexts/ThemeContext.tsx`.

**Animations:** Framer Motion for entrance animations and scroll-triggered effects.

**Data:** Research content is hard-coded as TypeScript constants in `client/src/pages/Home.tsx` — no API data fetching currently.

## Design System

The project follows "Modern Academic Minimalism" (documented in `ideas.md`):
- Status colors: black (completed), blue (in-progress), red (future research)
- Generous whitespace following academic design principles
- Semantic color tokens in CSS variables for light/dark mode

## Key Conventions

- ESM modules throughout (`"type": "module"`)
- Strict TypeScript enabled
- Prettier formatting (2 spaces, semicolons, double quotes, trailing commas es5, LF line endings)
