import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Oliver Gilcher for software engineering opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <SiteNav active="contact" />
      <main id="main-content" className="subpage shell contact-page">
        <section className="contact-panel glass-surface">
          <p className="eyebrow">Contact</p>
          <h1>Build something that has to work.</h1>
          <p>I’m targeting early-career software engineering roles where real-time integration, APIs, data, web/mobile systems, reliability, and architecture all matter.</p>
          <div className="contact-links">
            <a className="button button-primary" href="mailto:olivergilcher@gmail.com">Email me <span aria-hidden="true">↗</span></a>
            <a className="button button-secondary glass-surface" href="https://github.com/ogilcher" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            <a className="button button-secondary glass-surface" href="https://www.linkedin.com/in/oliver-gilcher" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </main>
    </>
  );
}
