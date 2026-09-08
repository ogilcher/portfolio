# Oliver Gilcher portfolio — Marriott-targeted build

A dark liquid-glass portfolio optimized for fast recruiter scanning, mobile/browser resilience, and deeper engineering case studies.

## What this build emphasizes

- Real-time integration, REST/JSON APIs, event-driven systems, web/mobile engineering, data, validation, and operational thinking.
- Lunar Deploy Agent is the lead case study because it is the strongest direct evidence for real-time/event-driven integration work.
- Case studies include a dedicated **Receipts** section with concrete implementation evidence instead of architecture claims alone.
- Launchpad is described using the currently supported implementation details: Go, REST/JSON, SQL/SQLite migrations, node registration/heartbeat, queued deployments, and agent callbacks.
- Experience titles and dates match the Marriott-targeted résumé.
- The Stack page separates integration/events, data, languages, web/mobile, backend/platform, and validation/operations.
- The résumé CTA is wired to `public/resume.pdf` and the final Marriott résumé is included in this package.

## Routes

- `/`
- `/work`
- `/work/lunar-deploy-agent`
- `/work/launchpad`
- `/work/lunapal`
- `/work/swiftui-navigation-coordinator`
- `/experience`
- `/stack`
- `/contact`

## Local validation

```bash
npm install
npm run build
npm run dev
```

Then run through `BROWSER-QA.md` before deployment.
