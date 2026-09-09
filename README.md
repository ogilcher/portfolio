# Oliver Gilcher - Engineering Portfolio

Source code for [olivergilcher.com](https://olivergilcher.com), my personal software engineering portfolio.

The portfolio showcases selected work across backend engineering, platform tooling, systems development, application
architecture, and software infrastructure.

## Featured Work

### Lunar Deploy Agent

Deployment orchestration and infrastructure tooling written in Go.

Built around REST APIs, WebSockets, deployment queues, application health monitoring, automated pipelines
authentication, and failure handling.

### Launchpad

Internal operations and deployment tooling developed for LunarLabs.

Designed to bring application management, deployment workflows, system visibility, and engineering operations into a
centralized interface.

### LunaPal

A full-stack life-management application with an emphasis on modular architecture, privacy, and secure data access.

Built across SwiftUI, FastAPI, PostgreSQL, Supabase, and cloud infrastructure.

### SwiftUI Navigation Coordinator

A scalable navigation architecture for SwiftUI applications using centralized coordination and type-safe routing.

The project explores separation of navigation state from view construction while supporting increasingly complex
application flows.

## Stack

The portfolio itself is built with:
- Next.js
- React
- TypeScript
- Tailwind CSS
- Vercel

Projects featured throughout the site additionally include technologies such as Go, C++, C, Python, Swift, FastAPI,
PostgreSQL, Supabase, Docker, WebSockets, REST APIs, and Linux.

## Design

The site is designed around a dark, minimal interface with translucent glass-inspired surfaces, responsive navigation,
and project-focused case studies. 

Rather than functioning as a traditional résumé websit, the portfolio is intended to show how I approach engineering
problems, architectural decisions, implementation, and shipping software.

## Development

Install dependencies (choose between bun or npm)

```shell
bun install
bun run dev
```

```shell
npm install
npm run dev
```

Then open:
`http://localhost:3000`

## Deployment

The portfolio is deployed through the same internal deployment infrastructure developed at LunarLabs.

It is managed through `Launchpad`, LunarLabs' internal operations and deployment interface, with deployments executed
and monitored by the Lunar Deploy Agent.

This makes the portfolio both a public-facing engineering portfolio and a production workload used to exercise the
deployment tooling I am building.

The deployment workflow includes:
- Application registration and configuration through Launchpad
- Automated deployment execution through Lunar Deploy Agent
- Build and process management
- Deployment status and health monitoring
- Operational visibility through the Luanchpad interface.