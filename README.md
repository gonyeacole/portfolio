# Portfolio

A designer portfolio site built with React, Vite, TypeScript, and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Customizing content

All editable content lives in two files:

- `src/data/profile.ts` — name, role, bio, skills, email, and social links.
- `src/data/projects.ts` — the project grid. Each project has a placeholder
  `gradient` cover; replace it with a real `image` once you have assets.

The rest of the UI lives in `src/components/`.

## Build

```bash
npm run build   # type-checks and outputs to dist/
npm run preview # preview the production build locally
```

## Deploying

The `dist/` folder is static and can be deployed to Vercel, Netlify, GitHub
Pages, or any static host.
