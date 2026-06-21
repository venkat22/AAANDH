# Deployment

The site deploys to two hosts:

- **Azure Static Web Apps** (Free tier) — primary, deployed **manually** from
  the local build (details below).
- **GitHub Pages** — auto-deploys on every push to `main` via GitHub Actions
  (`.github/workflows/deploy.yml`). URL: https://venkat22.github.io/AAANDH/

## Environment

| Setting           | Value                                              |
| ----------------- | -------------------------------------------------- |
| Host              | Azure Static Web Apps                              |
| Subscription      | Personal Subscription                              |
| Resource group    | `rg-sovereign-tech`                                |
| App name          | `sovereign-tech`                                   |
| Region            | East US 2 (`eastus2`)                              |
| SKU               | Free                                               |
| Environment       | `production`                                       |
| Default hostname  | `blue-sea-0ceb6430f.7.azurestaticapps.net`         |
| Live URL          | https://blue-sea-0ceb6430f.7.azurestaticapps.net   |

## Prerequisites

- [Azure CLI](https://learn.microsoft.com/cli/azure/install-azure-cli) (`az`)
- [Azure Static Web Apps CLI](https://azure.github.io/static-web-apps-cli/) (`swa`)
- Signed in: `az login`

## Deploy

One command (build + deploy):

```bash
npm run deploy:azure
```

### Manual steps

```bash
# 1. Build
npm run build

# 2. Fetch the deployment token (never commit this value)
az staticwebapp secrets list --name sovereign-tech \
  --resource-group rg-sovereign-tech --query "properties.apiKey" -o tsv

# 3. Deploy the build to production
swa deploy ./dist --deployment-token <token> --env production
```

SPA routing is handled by `public/staticwebapp.config.json`, which Vite copies
into `dist/` on build; the navigation fallback rewrites unknown paths to
`/index.html`.

## Initial provisioning (already done — for reference)

```bash
az group create --name rg-sovereign-tech --location eastus2
az staticwebapp create --name sovereign-tech --resource-group rg-sovereign-tech \
  --sku Free --location eastus2
```

## Deployment log

Newest first. Add a row after each deploy.

| Date (UTC) | Commit    | Environment | Method        | Notes                                         |
| ---------- | --------- | ----------- | ------------- | --------------------------------------------- |
| 2026-06-21 | `513b17e` | production  | `swa deploy`  | mailto contact form + motion/interaction polish |
| 2026-06-21 | `7fba815` | production  | `swa deploy`  | Rebrand to HowardTech                          |
| 2026-06-21 | `e109b98` | production  | `swa deploy`  | Initial Azure SWA deploy of the light-theme redesign |
