export type Link = {
  label: string;
  href: string;
};

export type ArchitectureNode = {
  label: string;
  detail: string;
};

export type Decision = {
  title: string;
  detail: string;
};

export type EvidenceItem = {
  label: string;
  title: string;
  detail: string;
  code?: string;
};

export type CaseStudy = {
  slug: string;
  index: string;
  title: string;
  shortTitle: string;
  kicker: string;
  year: string;
  status: string;
  summary: string;
  role: string;
  technologies: string[];
  links: Link[];
  problem: string;
  approach: string[];
  architecture: ArchitectureNode[];
  evidence: EvidenceItem[];
  decisions: Decision[];
  validation: string[];
  shipped: string[];
  demonstrates: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "lunar-deploy-agent",
    index: "01",
    title: "Lunar Deploy Agent",
    shortTitle: "Deploy Agent",
    kicker: "Real-time deployment infrastructure",
    year: "2026",
    status: "Public repository",
    summary:
      "A lightweight Go deployment agent that accepts API-driven jobs, executes step-based pipelines, reports lifecycle events over WebSockets, and exposes health and deployment state for operators.",
    role: "Software Engineer & Co-Founder — agent architecture, API surface, deployment engine, event lifecycle, health reporting, and documentation.",
    technologies: ["Go", "REST APIs", "JSON", "WebSockets", "OpenAPI", "Swagger", "PM2", "Linux", "Docker", "Bearer auth"],
    links: [
      { label: "GitHub repository", href: "https://github.com/ogilcher/lunar-deploy-agent" },
    ],
    problem:
      "A deploy button is easy. A deploy system that can explain what it is doing, survive partial failures, expose health, serialize competing work, and give another system a stable API is much harder.",
    approach: [
      "Represent deployments as jobs composed of explicit steps with retries, results, and lifecycle state.",
      "Use HTTP for commands and queries, then WebSocket events for real-time progress instead of polling every state change.",
      "Expose node capability and health so orchestration can make decisions using current system context.",
      "Document the public surface with OpenAPI/Swagger so integration behavior is inspectable and repeatable.",
    ],
    architecture: [
      { label: "REST API", detail: "Deploy commands, job state, history, node metadata" },
      { label: "Job queue", detail: "Controls execution order and competing work" },
      { label: "Step engine", detail: "Git, Docker, Caddy, PM2, HTTP health checks" },
      { label: "WebSocket stream", detail: "Job, deployment, and step lifecycle events" },
    ],
    evidence: [
      {
        label: "Verified run",
        title: "Health validation before promotion",
        detail: "A deployment run performed an HTTP health check and received the expected 200 response before the candidate was promoted.",
        code: `{
  "StepName": "http_health_check",
  "Success": true,
  "Error": ""
}`,
      },
      {
        label: "Deployment state",
        title: "Promotion is recorded, not implied",
        detail: "After promotion, deployment state records the active container, image, and route target so the system can inspect or roll back what is live.",
        code: `{
  "active_container": "project-local-test-candidate-…",
  "route_target": "project-local-test-candidate-…:8080"
}`,
      },
      {
        label: "Failure path",
        title: "Rollback is an explicit workflow",
        detail: "Rollback runs through infrastructure checks before restoring the previous container instead of treating recovery as a manual afterthought.",
      },
    ],
    decisions: [
      {
        title: "Commands over HTTP, progress over events",
        detail:
          "The API starts and inspects work; the event stream publishes lifecycle changes. That keeps request/response semantics simple while supporting low-latency operational updates.",
      },
      {
        title: "Step-based execution",
        detail:
          "Deployment work is decomposed into explicit steps such as Git pull, build, routing, process restart, and health validation. Each step can produce its own result, making failures easier to isolate and report.",
      },
      {
        title: "Health is part of the product",
        detail:
          "Queue state, configuration, Git, runtime status, disk, memory, capabilities, and uptime are surfaced as operational signals rather than hidden implementation details.",
      },
    ],
    validation: [
      "HTTP health-check steps verify a service before the workflow is considered complete.",
      "Structured lifecycle events make expected sequences observable and testable by consuming systems.",
      "OpenAPI/Swagger documentation provides a concrete contract for request, response, and integration behavior.",
    ],
    shipped: [
      "Config-driven deployment pipelines with step execution, retries, history, and result reporting.",
      "REST endpoints for deployments, jobs, queue state, node metadata, and health.",
      "Real-time WebSocket events for deployment, job, and step lifecycles.",
    ],
    demonstrates: ["Event-driven architecture", "Real-time integration", "REST/JSON APIs", "Operational validation", "Technical documentation"],
  },
  {
    slug: "launchpad",
    index: "02",
    title: "Launchpad",
    shortTitle: "Launchpad",
    kicker: "Internal control plane",
    year: "2026",
    status: "Private system",
    summary:
      "A Go control plane for the operational side of LunarLabs: infrastructure nodes, clients, projects, deployment state, domains, and the workflows that connect operator intent to deployment execution.",
    role: "Software Engineer & Co-Founder — system architecture, API design, workflow modeling, data boundaries, and technical direction.",
    technologies: ["Go", "REST APIs", "JSON", "SQL", "SQLite", "WebSockets", "Deployment orchestration", "Docker", "Linux"],
    links: [],
    problem:
      "As deployment automation grew beyond a single script, the team needed one reliable place to represent infrastructure nodes, projects, clients, deployment history, and launch actions. The hard part was not another dashboard; it was defining the contracts and state transitions underneath it.",
    approach: [
      "Model the platform around explicit resources and lifecycle states instead of UI-specific actions.",
      "Keep deployment execution separate from control-plane concerns so the system can evolve independently.",
      "Treat node health, operational history, and failure state as core architecture rather than polish added later.",
      "Expose clear REST/JSON boundaries between the control plane and deployment agents.",
    ],
    architecture: [
      { label: "Operator UI", detail: "Projects, clients, domains, deployment actions" },
      { label: "Go API", detail: "Resource contracts, workflow rules, service/repository layers" },
      { label: "SQLite", detail: "Nodes, clients, projects, queued deployments, migrations" },
      { label: "Deploy agents", detail: "Execution, heartbeat reporting, callbacks" },
    ],
    evidence: [
      {
        label: "Persistence",
        title: "Schema changes are migration-backed",
        detail: "SQLite-backed migrations and APIs manage nodes, clients, projects, and queued deployments rather than keeping operational state in ad-hoc files or UI state.",
      },
      {
        label: "Node telemetry",
        title: "Registration and heartbeat are first-class workflows",
        detail: "Authenticated node registration and heartbeat reporting expose CPU, memory, disk, uptime, load, availability, and operational status to the control plane.",
      },
      {
        label: "Integration boundary",
        title: "Control plane and agents have explicit responsibilities",
        detail: "Dispatch, execution, logging, and status callbacks connect orchestration to deployment agents without collapsing host-level execution into the control plane.",
      },
    ],
    decisions: [
      {
        title: "Separate orchestration from execution",
        detail:
          "Launchpad owns intent and system state; deployment agents own host-level execution. That boundary keeps operational concerns isolated and supports multi-node growth without turning the control plane into a remote shell.",
      },
      {
        title: "Make state explicit",
        detail:
          "Deployment workflows are represented as stateful resources. That creates a cleaner API contract and makes failures, retries, callbacks, and history easier to reason about than ad-hoc action endpoints.",
      },
      {
        title: "Design for operational visibility",
        detail:
          "Node health, heartbeat state, deployment history, and callback status are modeled so operators can see what happened instead of inferring it from a dashboard action.",
      },
    ],
    validation: [
      "Validate API contracts and state transitions at resource boundaries.",
      "Keep operational history visible so a failed action can be traced to a project, node, and deployment attempt.",
      "Treat unavailable agents, invalid state transitions, and failed callbacks as explicit failure paths.",
    ],
    shipped: [
      "Go service and repository layers for infrastructure nodes, clients, projects, domains, and deployment lifecycles.",
      "Authenticated node-registration and heartbeat workflows with operational metadata reporting.",
      "SQLite-backed migrations and APIs for queued deployments and core control-plane resources.",
    ],
    demonstrates: ["API and JSON contract design", "SQL data modeling", "Operational tooling", "Cross-service integration", "System architecture"],
  },
  {
    slug: "lunapal",
    index: "03",
    title: "LunaPal",
    shortTitle: "LunaPal",
    kicker: "Privacy-first mobile platform",
    year: "2025–2026",
    status: "Architecture demo public",
    summary:
      "A privacy-first SwiftUI life-management platform designed around modular feature boundaries, coordinator navigation, dependency injection, a FastAPI backend, and a Postgres data layer secured through Supabase Auth and RLS.",
    role: "Lead Software Engineer & Founder — product architecture, iOS architecture, backend direction, data boundaries, and cross-platform roadmap.",
    technologies: ["Swift", "SwiftUI", "FastAPI", "Python", "REST APIs", "JSON", "Supabase Auth", "PostgreSQL", "RLS", "Azure"],
    links: [
      { label: "Architecture demo", href: "https://github.com/ogilcher/lunapal-architecture-demo" },
    ],
    problem:
      "A life-management product spans unrelated domains — health, finance, productivity, pets, education — while still needing consistent navigation, shared services, predictable data access, and privacy boundaries. A monolithic screen-first architecture would become difficult to evolve quickly.",
    approach: [
      "Organize the client into feature modules with shared infrastructure instead of one growing navigation tree.",
      "Centralize navigation state in a coordinator so views request actions without owning application flow.",
      "Use dependency injection and protocol-driven services so screens can run against mocks, previews, and test doubles.",
      "Keep client, API, authentication, and data responsibilities visibly separated in the system architecture.",
    ],
    architecture: [
      { label: "SwiftUI client", detail: "Modular features, reusable components, coordinator navigation" },
      { label: "API layer", detail: "Protocol-driven client services and REST/JSON boundaries" },
      { label: "FastAPI", detail: "Backend services hosted in Azure" },
      { label: "Supabase/Postgres", detail: "Auth plus RLS-secured persistent data" },
    ],
    evidence: [
      {
        label: "Public architecture",
        title: "The system boundaries are inspectable",
        detail: "The public architecture demo shows the SwiftUI client, API boundary, authentication, Postgres persistence, coordinator navigation, and dependency-injection structure without exposing proprietary production code.",
      },
      {
        label: "Privacy boundary",
        title: "Authorization reaches the data layer",
        detail: "Supabase Auth and Row Level Security keep user-scoped access visible in the architecture instead of treating authentication as only a login-screen concern.",
      },
      {
        label: "Testability",
        title: "Client services can be substituted",
        detail: "Protocol-driven dependencies allow mock API services and previews so feature behavior can be exercised independently of backend availability.",
      },
    ],
    decisions: [
      {
        title: "Navigation is application state",
        detail:
          "The coordinator owns route state and maps typed destinations to views. Feature screens remain focused on rendering and user intent rather than knowing the app's full navigation graph.",
      },
      {
        title: "Dependencies are injectable",
        detail:
          "Protocol-driven API services make it possible to substitute mock implementations for previews and testing, reducing coupling between UI work and backend availability.",
      },
      {
        title: "Privacy boundaries stay visible",
        detail:
          "The architecture demo intentionally exposes the major trust and data boundaries — client, API, auth, and RLS-secured Postgres — instead of hiding them behind a generic backend box.",
      },
    ],
    validation: [
      "Mock API services support predictable client development and testable feature behavior.",
      "Typed coordinator routes reduce stringly-typed navigation errors and centralize deep-flow debugging.",
      "A public architecture demo documents system boundaries without exposing proprietary production implementation.",
    ],
    shipped: [
      "Public architecture sample demonstrating coordinator navigation, dependency injection, modular features, mock networking, and reusable SwiftUI components.",
      "Documented high-level client/backend/auth/data architecture while keeping production implementation private.",
      "A maintainable structure for feature areas that can evolve without every screen depending on every other screen.",
    ],
    demonstrates: ["Mobile architecture", "Cross-system integration", "Privacy-aware design", "Data boundaries", "Testable client design"],
  },
  {
    slug: "swiftui-navigation-coordinator",
    index: "04",
    title: "SwiftUI Navigation Coordinator",
    shortTitle: "Navigation Coordinator",
    kicker: "Architecture + technical writing",
    year: "2026",
    status: "Public repository + article",
    summary:
      "A small, focused demonstration of deep NavigationStack flows using a coordinator and router: typed routes, centralized navigation state, cleaner views, and an architecture that is easier to debug as feature depth grows.",
    role: "Author & engineer — architecture sample, implementation, repository documentation, and published technical article.",
    technologies: ["Swift", "SwiftUI", "NavigationStack", "Observation", "Coordinator pattern", "Type-safe routing", "Technical writing"],
    links: [
      { label: "GitHub repository", href: "https://github.com/ogilcher/swiftui-navigation-coordinator" },
      { label: "Read the Medium article", href: "https://medium.com/@olivergilcher/managing-deep-navigation-in-swiftui-with-a-coordinator-architecture-8bba3fc23ceb" },
    ],
    problem:
      "Deep SwiftUI flows can become difficult to reason about when every screen pushes its own destinations and navigation logic leaks across the view hierarchy. The goal was to make flow ownership explicit without burying simple screens under framework code.",
    approach: [
      "Give one coordinator ownership of navigation state and path mutations.",
      "Represent destinations as typed route enums rather than strings or view-specific flags.",
      "Use a router to map routes to destination views, keeping screen code focused on rendering and user actions.",
      "Document the reasoning, tradeoffs, and implementation in a public article rather than publishing code without context.",
    ],
    architecture: [
      { label: "SwiftUI screen", detail: "Renders state and requests navigation actions" },
      { label: "AppCoordinator", detail: "Owns navigation state and flow mutations" },
      { label: "Typed route", detail: "Canonical destination model" },
      { label: "NavigationRouter", detail: "Maps route values to destination views" },
    ],
    evidence: [
      {
        label: "Public implementation",
        title: "The architecture is reviewable end to end",
        detail: "The GitHub repository contains the coordinator, route model, router, and example flow in a deliberately small codebase another engineer can inspect quickly.",
      },
      {
        label: "Technical writing",
        title: "The design reasoning is documented",
        detail: "A published article explains why centralized flow ownership matters, how typed routes are modeled, and where the coordinator pattern helps as navigation depth grows.",
      },
      {
        label: "Type safety",
        title: "Routes are compiler-checked values",
        detail: "Destinations are represented as typed domain values rather than string identifiers, constraining invalid navigation states before runtime.",
      },
    ],
    decisions: [
      {
        title: "One source of navigation truth",
        detail:
          "Centralized path state makes deep flows inspectable in one place and avoids distributing navigation flags through unrelated views.",
      },
      {
        title: "Routes are domain values",
        detail:
          "Typed enums make valid destinations explicit and let the compiler catch entire classes of mistakes that string identifiers cannot.",
      },
      {
        title: "Explain the architecture, not just the syntax",
        detail:
          "The accompanying article focuses on why flow ownership matters, giving reviewers a view into the design reasoning behind the code.",
      },
    ],
    validation: [
      "Centralized route state gives one debugging surface for deep navigation flows.",
      "Typed destinations constrain invalid navigation states at compile time.",
      "The public demo keeps the architecture small enough for another engineer to inspect end-to-end.",
    ],
    shipped: [
      "A public SwiftUI coordinator architecture demo built around NavigationStack.",
      "A reusable route/coordinator/router separation suitable for deeper application flows.",
      "A published technical article explaining the design and tradeoffs for other engineers.",
    ],
    demonstrates: ["Technical communication", "Reusable patterns", "Mobile engineering", "State modeling", "Architecture reasoning"],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
