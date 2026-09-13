# Jonathan Christyadi — Workstation Portfolio

A static developer portfolio built with React, TypeScript, Tailwind CSS, Vite, React Router, Zod, and shadcn/ui primitives.

## Development

```bash
npm install
npm run dev
npm run build
```

All portfolio content lives in `src/content/` and is validated at startup. Add a project to `projects.json`; the homepage, work registry, project route, and command palette derive it automatically.

## Deployment

The Vite build is entirely static. `public/_redirects` provides SPA fallback on hosts that understand the Netlify redirects format. Configure the equivalent rewrite to `/index.html` on other hosts.
