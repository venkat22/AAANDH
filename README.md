# Sovereign Tech

Marketing site for **Sovereign Tech** — a consultancy focused on accelerating
software delivery with agent-driven development. A fast, fully static
single-page app with a light corporate theme.

🌐 **Live:** https://blue-sea-0ceb6430f.7.azurestaticapps.net

## Tech stack

- **React 19** + **TypeScript** — UI layer (no router; views swap via state)
- **Vite 6** — dev server and production bundler
- **Tailwind CSS v4** — CSS-first `@theme` design tokens
- **motion** — view and section transitions
- **lucide-react** — icon set

## Project structure

```
src/
  App.tsx              # view-switch state machine (Home/Services/Methodology/Contact)
  components/
    Navigation.tsx     # Navbar (default export) + Footer (named export)
    Views.tsx          # the four page views + shared iconMap & SectionHeading
  constants.ts         # static content: industries, process phases, services, tech, team
  index.css            # Tailwind v4 theme tokens + utility classes
public/
  staticwebapp.config.json  # Azure Static Web Apps SPA routing
scripts/
  deploy-azure.ps1     # one-command build + deploy to Azure
```

The app has no router: `App.tsx` keeps the active view in `useState` and swaps
between the four views with `AnimatePresence`. All page content lives in
`src/constants.ts`; visuals are driven by Tailwind v4 tokens in `src/index.css`.

## Local development

**Prerequisites:** Node.js 20+ (developed on Node 24, npm 11)

```bash
npm install      # install dependencies
npm run dev      # dev server on http://localhost:3000
npm run lint     # type-check (tsc --noEmit)
npm run build    # production build -> dist/
npm run preview  # serve the production build locally
```

## Deployment

The site deploys to two hosts:

- **Azure Static Web Apps** (Free tier) — primary host, deployed **manually**
  from the local build:

  ```bash
  npm run deploy:azure
  ```

  Requires the Azure CLI (`az`) and SWA CLI (`swa`) installed and `az login`
  completed.

- **GitHub Pages** — auto-deploys on every push to `main` via GitHub Actions
  (`.github/workflows/deploy.yml`).

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for resource details, manual steps, and
the deployment log.
