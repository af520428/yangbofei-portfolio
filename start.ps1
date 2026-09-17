# Portfolio local server (ASCII-safe)
Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $PSScriptRoot

Write-Host ''
Write-Host ' Portfolio local server'
Write-Host ' ====================='
Write-Host ''

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  Write-Host '[ERROR] Node.js not found. Install: https://nodejs.org/' -ForegroundColor Red
  Read-Host 'Press Enter to exit'
  exit 1
}

if (-not (Test-Path -LiteralPath 'node_modules')) {
  Write-Host '[1/2] Installing dependencies...'
  npm.cmd install
  if ($LASTEXITCODE -ne 0) {
    Write-Host '[ERROR] npm install failed' -ForegroundColor Red
    Read-Host 'Press Enter to exit'
    exit $LASTEXITCODE
  }
} else {
  Write-Host '[1/2] Dependencies OK'
}

Write-Host '[2/2] Starting Vite...'
Write-Host ''
Write-Host ' Open: http://localhost:5173/yangbofei-portfolio/'
Write-Host ' Stop: Ctrl+C'
Write-Host ''

Start-Process 'http://localhost:5173/yangbofei-portfolio/'
npm.cmd run dev
$code = $LASTEXITCODE
if ($code -ne 0) {
  Write-Host "[ERROR] Server exited with code $code" -ForegroundColor Red
  Read-Host 'Press Enter to exit'
}
exit $code
