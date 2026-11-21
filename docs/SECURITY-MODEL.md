# Security model and authorized use

Inspector Studio is a client-side developer workspace.

## Safe capabilities
- Review and debug code supplied by the user.
- Run snippets in a sandboxed iframe without same-origin access.
- Inspect metadata on the current app page.
- Observe Fetch calls initiated by this app page.
- Review security headers exposed through normal browser CORS rules.
- Decode JWT payloads for inspection only; no cryptographic validation is performed.
- Generate extension manifest templates for review.

## Explicit boundaries
- No cross-tab browser inspection or remote debugging protocol.
- No CORS bypass, credential harvesting, cookie extraction, session theft, stealth, persistence, exploit delivery or unauthorized access.
- No automated vulnerability exploitation or indiscriminate scanning.
- No arbitrary injection into third-party pages. Test integrations only in a browser context and target environment you control or are authorized to assess.

## Before running imported code
1. Review the complete source.
2. Remove network calls and permissions that are not needed.
3. Use test accounts and non-production data.
4. Keep backups and run in a disposable browser profile when uncertain.

The iframe sandbox is defense-in-depth for ordinary development. It is not a hardened security boundary against determined malicious JavaScript.
