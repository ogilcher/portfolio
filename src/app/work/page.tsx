import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";
import { ProjectCard } from "@/components/ProjectCard";
import { caseStudies } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected software engineering case studies by Oliver Gilcher.",
};

export default function WorkPage() {
  return (
    <>
      <SiteNav active="work" />
      <main id="main-content" className="subpage shell">
        <header className="subpage-hero">
          <p className="eyebrow">Selected work</p>
          <h1>Systems with receipts.</h1>
          <p>Architecture, tradeoffs, validation, and concrete implementation evidence live inside each case study.</p>
        </header>
        <div className="project-grid project-grid-full">
          {caseStudies.map((study) => <ProjectCard study={study} key={study.slug} />)}
        </div>
      </main>
    </>
  );
}
