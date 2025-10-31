# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

HookHub is a Next.js 16 application using the App Router architecture with React 19.2.0, TypeScript, and Tailwind CSS v4. The project leverages the React Compiler (babel-plugin-react-compiler) for automatic optimization.

## Project Structure

The main application lives in the `hookHubapp/` directory:

- `src/app/` - Next.js App Router pages and layouts
  - `page.tsx` - Main landing page component
  - `layout.tsx` - Root layout with Geist font configuration
  - `globals.css` - Global styles and Tailwind directives
- `public/` - Static assets
- Path alias: `@/*` maps to `./src/*`

## Development Commands

All commands should be run from the `hookHubapp/` directory:

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Technical Configuration

### TypeScript
- Target: ES2017
- JSX mode: `react-jsx` (new JSX transform)
- Strict mode enabled
- Module resolution: bundler

### Next.js Configuration
- React Compiler: Enabled (`reactCompiler: true` in next.config.ts)
- Uses Next.js 16 with App Router
- ESLint config extends both `next/core-web-vitals` and `next/typescript`

### Styling
- Tailwind CSS v4 with PostCSS plugin (`@tailwindcss/postcss`)
- Dark mode support configured in components
- Geist font family (sans and mono variants) loaded via `next/font/google`

## Architecture Notes

### React Compiler
This project uses the React Compiler (v1.0.0), which means:
- Components are automatically memoized when beneficial
- Manual memoization (useMemo, useCallback, memo) may be redundant
- The compiler optimizes re-renders automatically

### App Router Conventions
- Server Components by default (no "use client" directive needed unless using hooks/interactivity)
- `layout.tsx` defines shared UI across routes
- `page.tsx` exports the default component for each route
- Metadata export in layouts/pages for SEO

### Font Optimization
- Fonts are loaded via `next/font/google` for automatic optimization
- CSS variables (`--font-geist-sans`, `--font-geist-mono`) applied to body

## Development Guidelines

- Follow Next.js App Router conventions for file organization
- Use TypeScript strictly - all compiler strict checks are enabled
- Utilize the `@/*` path alias for imports from `src/`
- Dark mode support should be maintained using Tailwind's `dark:` prefix
- Images should use the Next.js `<Image>` component for optimization
