import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Experience",
  description: "Software engineering, operations, and education experience for Oliver Gilcher.",
};

const experience = [
  {
    date: "Jul 2026 — now",
    org: "Marriott International",
    role: "Front Desk Agent",
    body: "Support daily Marriott property operations across guest-facing systems and cross-department workflows, resolving time-sensitive issues while maintaining service continuity. That property-level context keeps the downstream impact of reliability, integration, and operational software visible in my engineering work.",
  },
  {
    date: "Jun 2024 — now",
    org: "LunarLabs",
    role: "Software Engineer & Co-Founder",
    body: "Build and maintain backend and platform systems spanning REST/JSON APIs, SQL-backed services, deployment infrastructure, and real-time event workflows. My work includes Lunar Deploy Agent, Launchpad, node registration and heartbeat reporting, deployment lifecycle management, API contracts, and cross-service integration debugging.",
  },
  {
    date: "Sep 2024 — now",
    org: "LunaPal",
    role: "Lead Software Engineer & Founder",
    body: "Architected a cross-platform product spanning SwiftUI iOS, Next.js web, FastAPI services, PostgreSQL/Supabase, and Azure infrastructure, including authenticated APIs, relational data models, Row Level Security, privacy-conscious data flows, and coordinator-based mobile architecture.",
  },
  {
    date: "Apr 2027",
    org: "Colorado Technical University",
    role: "B.S. Computer Science · 4.0 GPA",
    body: "Senior coursework across software engineering, computer architecture, mobile programming, data, requirements, systems, and distributed-computing foundations. President’s List with technical work continuing outside the classroom through product and infrastructure projects.",
  },
];

const principles = [
  {
    title: "Define the contract",
    body: "Explicit resources, typed state, and predictable payloads beat hidden coupling.",
    proof: "Lunar Deploy · REST/JSON + OpenAPI contracts",
  },
  {
    title: "Make events observable",
    body: "Lifecycle events, health, history, and failure state belong in the architecture.",
    proof: "Lunar Deploy · WebSocket lifecycle events",
  },
  {
    title: "Validate end to end",
    body: "A handler returning 200 is not the same thing as a working user flow.",
    proof: "Deploy pipeline · HTTP health validation",
  },
  {
    title: "Leave it operable",
    body: "Documentation and boring conventions are features when another engineer owns the system.",
    proof: "OpenAPI · deployment history · health metadata",
  },
];

export default function ExperiencePage() {
  return (
    <>
      <SiteNav active="experience" />
      <main id="main-content" className="subpage shell">
        <header className="subpage-hero">
          <p className="eyebrow">Experience</p>
          <h1>Software and operations.</h1>
          <p>I’ve worked on both sides of the screen: building systems and operating inside the environment where those systems affect people.</p>
        </header>

        <section className="timeline-card glass-surface" aria-label="Experience timeline">
          {experience.map((item) => (
            <article className="timeline-row" key={`${item.org}-${item.role}`}>
              <p className="timeline-date">{item.date}</p>
              <div>
                <p className="timeline-org">{item.org}</p>
                <h2>{item.role}</h2>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="section subpage-section" aria-labelledby="principles-title">
          <div className="section-heading">
            <p className="section-index">How I engineer</p>
            <h2 id="principles-title">Production-minded by default.</h2>
          </div>
          <div className="principle-grid">
            {principles.map((principle, index) => (
              <article className="principle-card glass-surface" key={principle.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
                <p className="principle-proof">{principle.proof}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
