# Inspector Studio

A mobile-first, local-first JavaScript and userscript workspace.

## Features
- Userscript library: create, import, search, enable/disable, edit and delete scripts.
- JavaScript editor: syntax validation, sandbox execution and source download.
- Developer console: isolated iframe execution with captured console output and runtime errors.
- Network log: records Fetch API requests initiated by this app's own page.
- Diagnostics: browser capabilities, environment and navigation timing.
- English and Bengali interface.
- Local backup/export; no account or backend required.

## Run locally
Serve this directory with any static HTTP server. For Termux:

```sh
pkg install python -y
cd inspector-studio
python -m http.server 8080
```

Open `http://127.0.0.1:8080`.

## Deploy
Import this repository into Vercel. The project is static; no build command is required and the output directory is the repository root.

## Security and scope
Imported scripts are untrusted. Review code before executing it. The sandbox is an isolation boundary for casual testing, not a hardened hostile-code security boundary. This application cannot inspect other browser tabs, browser-wide traffic, HttpOnly cookies, remote DevTools protocols, or arbitrary third-party origins. The network panel observes Fetch calls made by this application page only. Browser extension APIs and cross-origin inspection require separately installed browser extensions and explicit permissions.

## Persistence
Scripts and editor content are stored in the current browser's localStorage. Export backups regularly. Clearing browser data removes locally stored workspace content.

## Status
This is the initial functional foundation. It is not yet a full IDE, browser extension, remote debugging client, or production security scanner.
