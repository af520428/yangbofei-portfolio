@echo off
setlocal
cd /d "%~dp0"

echo.
echo  Portfolio local server
echo  =====================
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo [ERROR] Node.js not found. Install: https://nodejs.org/
  echo.
  pause
  exit /b 1
)

if not exist "node_modules\" (
  echo [1/2] Installing dependencies...
  call npm.cmd install
  if errorlevel 1 (
    echo [ERROR] npm install failed
    echo.
    pause
    exit /b 1
  )
) else (
  echo [1/2] Dependencies OK
)

echo [2/2] Starting Vite...
echo.
echo  Open: http://localhost:5173/yangbofei-portfolio/
echo  Stop: Ctrl+C
echo.

start "" "http://localhost:5173/yangbofei-portfolio/"
call npm.cmd run dev
set EXITCODE=%ERRORLEVEL%

echo.
if not "%EXITCODE%"=="0" (
  echo [ERROR] Server exited with code %EXITCODE%
)
pause
exit /b %EXITCODE%
