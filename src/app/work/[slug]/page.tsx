import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteNav } from "@/components/SiteNav";
import { caseStudies, getCaseStudy } from "@/data/case-studies";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.summary,
    alternates: { canonical: `/work/${study.slug}` },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const currentIndex = caseStudies.findIndex((item) => item.slug === study.slug);
  const next = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <>
      <SiteNav active="work" />
      <main id="main-content" className="case-page shell">
        <article>
          <header className="case-hero glass-surface">
            <div className="case-hero-topline">
              <span className="case-number">{study.index}</span>
              <span className="eyebrow">{study.kicker} · {study.status}</span>
            </div>
            <h1>{study.title}</h1>
            <p className="case-summary">{study.summary}</p>

            <div className="case-links">
              {study.links.map((link) => (
                <a className="button button-secondary glass-surface" href={link.href} key={link.href} target="_blank" rel="noreferrer">
                  {link.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
              <Link className="button button-quiet" href="/work">All work</Link>
            </div>

            <dl className="case-facts">
              <div><dt>Year</dt><dd>{study.year}</dd></div>
              <div><dt>Role</dt><dd>{study.role}</dd></div>
              <div><dt>Stack</dt><dd>{study.technologies.join(" · ")}</dd></div>
            </dl>
          </header>

          <section className="case-section glass-surface two-col" aria-labelledby="problem-title">
            <div className="case-label"><span>01</span> Problem</div>
            <div className="case-copy">
              <h2 id="problem-title">What had to be solved.</h2>
              <p className="lead-copy">{study.problem}</p>
            </div>
          </section>

          <section className="case-section glass-surface two-col" aria-labelledby="approach-title">
            <div className="case-label"><span>02</span> Approach</div>
            <div className="case-copy">
              <h2 id="approach-title">Start with boundaries, not screens.</h2>
              <ol className="approach-list">
                {study.approach.map((item, i) => (
                  <li key={item}><span>{String(i + 1).padStart(2, "0")}</span><p>{item}</p></li>
                ))}
              </ol>
            </div>
          </section>

          <section className="case-section glass-surface two-col" aria-labelledby="architecture-title">
            <div className="case-label"><span>03</span> System</div>
            <div className="case-copy">
              <h2 id="architecture-title">Architecture at a glance.</h2>
              <div className="architecture-flow" role="list" aria-label={`${study.title} architecture flow`}>
                {study.architecture.map((node, i) => (
                  <div className="architecture-wrap" key={node.label} role="listitem">
                    <div className="architecture-node glass-surface">
                      <span className="architecture-index">{String(i + 1).padStart(2, "0")}</span>
                      <h3>{node.label}</h3>
                      <p>{node.detail}</p>
                    </div>
                    {i < study.architecture.length - 1 ? <span className="architecture-arrow" aria-hidden="true">→</span> : null}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="case-section glass-surface two-col" aria-labelledby="evidence-title">
            <div className="case-label"><span>04</span> Receipts</div>
            <div className="case-copy">
              <h2 id="evidence-title">Concrete evidence from the work.</h2>
              <div className="evidence-grid">
                {study.evidence.map((item) => (
                  <article className="evidence-card glass-surface" key={`${item.label}-${item.title}`}>
                    <p className="evidence-label">{item.label}</p>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                    {item.code ? <pre className="evidence-code"><code>{item.code}</code></pre> : null}
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="case-section glass-surface two-col" aria-labelledby="decisions-title">
            <div className="case-label"><span>05</span> Decisions</div>
            <div className="case-copy">
              <h2 id="decisions-title">Tradeoffs worth talking about.</h2>
              <div className="decision-list">
                {study.decisions.map((decision) => (
                  <article key={decision.title}>
                    <h3>{decision.title}</h3>
                    <p>{decision.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="case-section glass-surface two-col" aria-labelledby="validation-title">
            <div className="case-label"><span>06</span> Validation</div>
            <div className="case-copy">
              <h2 id="validation-title">How I think about correctness.</h2>
              <ul className="check-list">
                {study.validation.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </section>

          <section className="case-section glass-surface two-col" aria-labelledby="shipped-title">
            <div className="case-label"><span>07</span> Shipped</div>
            <div className="case-copy">
              <h2 id="shipped-title">What exists because of the work.</h2>
              <ul className="shipped-list">
                {study.shipped.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </section>

          <section className="case-proof glass-surface" aria-labelledby="proof-title">
            <p className="section-index">Engineering signal</p>
            <h2 id="proof-title">What this work demonstrates.</h2>
            <ul className="proof-list">
              {study.demonstrates.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <div className="case-next">
              <p>Next case study</p>
              <Link href={`/work/${next.slug}`}>{next.title} <span aria-hidden="true">→</span></Link>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
