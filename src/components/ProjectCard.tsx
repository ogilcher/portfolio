import Link from "next/link";
import type { CaseStudy } from "@/data/case-studies";

const shortCopy: Record<string, string> = {
  "lunar-deploy-agent": "API-driven deployment jobs with step execution, verified health checks, and live lifecycle events.",
  launchpad: "Go control-plane architecture for nodes, projects, deployments, access, and operational state.",
  lunapal: "Privacy-first SwiftUI product architecture backed by FastAPI, Postgres, and modular services.",
  "swiftui-navigation-coordinator": "Typed deep-navigation architecture for SwiftUI, documented in code and technical writing.",
};

const cardTags: Record<string, string[]> = {
  "lunar-deploy-agent": ["Go", "WebSockets", "OpenAPI"],
  launchpad: ["Go", "REST / JSON", "SQLite"],
  lunapal: ["SwiftUI", "FastAPI", "PostgreSQL"],
  "swiftui-navigation-coordinator": ["Swift", "SwiftUI", "Typed routes"],
};

export function ProjectCard({ study, compact = false }: { study: CaseStudy; compact?: boolean }) {
  return (
    <article className={`project-card glass-surface${compact ? " project-card-compact" : ""}`}>
      <div className="project-card-topline">
        <span className="project-index">{study.index}</span>
        <span className="project-kicker">{study.kicker}</span>
      </div>
      <h3><Link href={`/work/${study.slug}`}>{study.title}</Link></h3>
      <p>{shortCopy[study.slug]}</p>
      <ul className="tag-list" aria-label={`${study.title} technologies`}>
        {cardTags[study.slug].map((tag) => <li key={tag}>{tag}</li>)}
      </ul>
      <Link className="card-link" href={`/work/${study.slug}`}>Case study <span aria-hidden="true">↗</span></Link>
    </article>
  );
}
