import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { ProjectCard } from "@/components/ProjectCard";
import { caseStudies } from "@/data/case-studies";

export default function Home() {
  return (
    <>
      <SiteNav active="work" />
      <main id="main-content">
        <section className="hero shell">
          <div className="hero-copy-block">
            <p className="eyebrow">Systems / APIs / real-time integration</p>
            <h1>Oliver Gilcher</h1>
            <p className="hero-role">Software Engineer</p>
            <p className="hero-line">Building reliable systems behind the experience.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/work">View work <span aria-hidden="true">→</span></Link>
              <a className="button button-secondary glass-surface" href="/resume.pdf" target="_blank" rel="noreferrer">Résumé <span aria-hidden="true">↗</span></a>
            </div>
          </div>

          <aside className="hero-signal glass-surface" aria-label="Professional snapshot">
            <div><span>Current</span><strong>Marriott + LunarLabs</strong></div>
            <div><span>Focus</span><strong>APIs · real-time · mobile</strong></div>
            <div><span>BSCS</span><strong>4.0 GPA · Apr 2027</strong></div>
          </aside>
        </section>

        <section className="section shell" id="work" aria-labelledby="work-title">
          <div className="section-heading section-heading-row">
            <div>
              <p className="section-index">01 / Featured work</p>
              <h2 id="work-title">A few things I’ve built.</h2>
            </div>
            <Link className="section-link" href="/work">All work <span aria-hidden="true">→</span></Link>
          </div>

          <div className="project-grid">
            {caseStudies.map((study) => <ProjectCard study={study} key={study.slug} compact />)}
          </div>
        </section>

        <section className="section shell preview-grid" aria-label="Experience and technology previews">
          <article className="preview-card glass-surface">
            <p className="section-index">02 / Experience</p>
            <h2>Software + operations.</h2>
            <p>Marriott operations, LunarLabs engineering, and a 4.0 B.S. Computer Science track.</p>
            <Link className="card-link" href="/experience">View experience <span aria-hidden="true">→</span></Link>
          </article>

          <article className="preview-card glass-surface">
            <p className="section-index">03 / Stack</p>
            <h2>Built around the work.</h2>
            <div className="stack-preview" aria-label="Selected technologies">
              {['Go', 'Python', 'Java', 'TypeScript', 'SQL', 'WebSockets', 'PostgreSQL', 'SwiftUI'].map((item) => <span key={item}>{item}</span>)}
            </div>
            <Link className="card-link" href="/stack">View stack <span aria-hidden="true">→</span></Link>
          </article>
        </section>

        <section className="section shell home-contact glass-surface">
          <div>
            <p className="section-index">04 / Contact</p>
            <h2>Build something that has to work.</h2>
          </div>
          <Link className="button button-primary" href="/contact">Get in touch <span aria-hidden="true">→</span></Link>
        </section>
      </main>

      <footer className="footer shell">
        <span>© 2026 Oliver Gilcher</span>
        <span>Software engineering · APIs · real-time systems</span>
      </footer>
    </>
  );
}
