# Builds and deploys the production bundle to Azure Static Web Apps.
# Prerequisites: Azure CLI (az), SWA CLI (swa), and `az login` completed.

$ErrorActionPreference = "Stop"

$AppName       = "sovereign-tech"
$ResourceGroup = "rg-sovereign-tech"
$Environment   = "production"

Write-Host "==> Building production bundle..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) { throw "Build failed." }

Write-Host "==> Fetching deployment token..." -ForegroundColor Cyan
$token = az staticwebapp secrets list --name $AppName --resource-group $ResourceGroup --query "properties.apiKey" -o tsv
if (-not $token) { throw "Could not retrieve deployment token. Run 'az login' first." }

Write-Host "==> Deploying ./dist to '$Environment'..." -ForegroundColor Cyan
swa deploy ./dist --deployment-token $token --env $Environment
if ($LASTEXITCODE -ne 0) { throw "Deploy failed." }

Write-Host "==> Done. https://blue-sea-0ceb6430f.7.azurestaticapps.net" -ForegroundColor Green
