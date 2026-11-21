# Inspector Studio

A modular, mobile-first JavaScript and browser diagnostics workspace with an authorized security analysis toolkit.

## Included modules
- **Userscripts:** create, import, search, edit, enable/disable, delete and export scripts. Imported scripts are inert until explicitly executed.
- **JavaScript Workbench:** source editing, syntax parsing, isolated execution, save and download.
- **Developer Console:** console log/info/warn/error capture and runtime error output inside a sandboxed iframe.
- **Page Inspector:** read-only metadata snapshot of the current Inspector Studio document.
- **Network Monitor:** observes Fetch calls initiated by this application page.
- **Security Lab:** passive HTTP security-header review (CORS permitting), local JWT decoding (no signature verification), Base64 and URL encoding utilities.
- **Extension Kit:** generates a starter Manifest V3 JSON manifest.
- **Diagnostics:** browser capabilities and environment information.
- **Workspace:** English/Bengali selector, local backup/restore, responsive touch menu, service-worker cache and PWA manifest.

## Architecture
- `index.html` — app shell and module entry point.
- `src/css/` — design tokens and responsive UI.
- `src/js/core/` — router, localization and local persistence.
- `src/js/modules/` — reusable feature modules.
- `src/js/pages/` — feature pages.
- `config/modules.json` — module registry.
- `sw.js` and `manifest.webmanifest` — offline/PWA support.
- `docs/ARCHITECTURE.md` — design and security boundaries.

## Run in Termux
```sh
pkg install python -y
git clone https://github.com/dvusa-bd/inspector-studio.git
cd inspector-studio
python -m http.server 8080
```
Open `http://127.0.0.1:8080` on the same device.

## Vercel
This is a static application. Import the repository into Vercel with the root directory set to `./`, no build command, and output directory left blank/default. Automatic deployment requires Git integration permission in the Vercel team.

## Security boundaries
Use security features only on systems and browser contexts you own or are explicitly authorized to test. No exploit launcher, credential theft, stealth, access bypass or unauthorized injection is included. The sandboxed iframe is useful for isolated development but is not a hardened hostile-code execution boundary. The network view is not browser-wide packet capture and does not inspect other tabs, workers, XHR, HttpOnly cookies or DevTools Protocol traffic. Header analysis uses standard Fetch/CORS and cannot bypass browser policy. JWT decode is not JWT signature or claim validation. The Extension Kit creates a manifest template, not a complete store-ready extension package. Review generated code and permissions before use.

## Persistence and limitations
Workspace data is stored in the current browser's localStorage. Export backups regularly. This release is a functional modular foundation, not a full Chrome DevTools replacement, remote debugger, full IDE, or production vulnerability scanner.
