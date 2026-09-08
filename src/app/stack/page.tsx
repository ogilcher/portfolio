import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Stack",
  description: "Languages, platforms, integration patterns, and validation tools used by Oliver Gilcher.",
};

const groups = [
  { label: "Integration & events", values: ["REST APIs", "JSON", "WebSockets", "Event-driven architecture", "Real-time integration", "OpenAPI"] },
  { label: "Data", values: ["SQL", "PostgreSQL", "SQLite", "Relational modeling", "Supabase", "RLS"] },
  { label: "Languages", values: ["Go", "Python", "Java", "TypeScript", "JavaScript", "Swift", "C++"] },
  { label: "Web & mobile", values: ["Next.js", "React", "SwiftUI", "NavigationStack"] },
  { label: "Backend & platform", values: ["FastAPI", "Docker", "Linux", "Git", "Caddy", "Deployment automation"] },
  { label: "Validation & operations", values: ["API testing", "Payload validation", "Browser DevTools", "Health checks", "Integration debugging", "Technical documentation"] },
];

export default function StackPage() {
  return (
    <>
      <SiteNav active="stack" />
      <main id="main-content" className="subpage shell">
        <header className="subpage-hero">
          <p className="eyebrow">Technology</p>
          <h1>Tools I use to make systems work.</h1>
          <p>Technologies I use to design, integrate, validate, and operate software across APIs, data, web, mobile, and infrastructure.</p>
        </header>

        <section className="stack-grid stack-grid-page">
          {groups.map((group) => (
            <article className="stack-card glass-surface" key={group.label}>
              <h2>{group.label}</h2>
              <div className="stack-chips">
                {group.values.map((value) => <span key={value}>{value}</span>)}
              </div>
            </article>
          ))}
        </section>

        <section className="learning-card glass-surface">
          <p className="section-index">Currently expanding</p>
          <p>AWS · Kubernetes · Terraform · cloud infrastructure patterns</p>
        </section>
      </main>
    </>
  );
}
