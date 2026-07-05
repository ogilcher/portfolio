// src/components/home/contact.tsx

import { config } from "@/config/site.config";

const contactLinks = [
    {
        label: "Email",
        value: "olivergilcher@gmail.com",
        href: config.mediaLinks.email,
        icon: "bi-envelope",
    },
    {
        label: "GitHub",
        value: "github.com/olivergilcher",
        href: config.mediaLinks.github,
        icon: "bi-github",
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/olivergilcher",
        href: config.mediaLinks.linkedIn,
        icon: "bi-linkedin",
    },
];

export function Contact() {
    return (
        <section id="contact" className="px-6 py-24 text-white/80">
            <div className="mx-auto max-w-6xl">
                <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] shadow-xl backdrop-blur">
                    <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                        <div className="p-8 md:p-12">
                            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
                                Contact
                            </p>

                            <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
                                Let&apos;s build something reliable.
                            </h2>

                            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
                                I&apos;m currently preparing for Software Engineer I and new grad
                                roles focused on backend systems, platform engineering,
                                infrastructure, and software architecture.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">
                                <a
                                    href={config.mediaLinks.email}
                                    className="rounded-full border border-sky-400/40 bg-sky-400/10 px-6 py-3 font-semibold text-sky-300 transition hover:-translate-y-0.5 hover:bg-sky-400 hover:text-white"
                                >
                                    Email Me
                                </a>

                                <a
                                    href="/resume.pdf"
                                    download
                                    className="rounded-full border border-white/10 px-6 py-3 font-semibold text-white/70 transition hover:-translate-y-0.5 hover:bg-white hover:text-neutral-900"
                                >
                                    Download Resume
                                </a>
                            </div>
                        </div>

                        <div className="border-t border-white/10 bg-white/[0.03] p-8 md:p-12 lg:border-l lg:border-t-0">
                            <h3 className="mb-8 text-2xl font-bold text-white">
                                Find Me Online
                            </h3>

                            <div className="space-y-5">
                                {contactLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target={link.label === "Email" ? undefined : "_blank"}
                                        rel={link.label === "Email" ? undefined : "noreferrer"}
                                        className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-sky-400/30 hover:bg-sky-400/10"
                                    >
                                        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-sky-400/10 text-xl text-sky-400 transition group-hover:bg-sky-400 group-hover:text-white">
                                            <i className={`bi ${link.icon}`} />
                                        </div>

                                        <div>
                                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/40">
                                                {link.label}
                                            </p>
                                            <p className="mt-1 font-semibold text-white">
                                                {link.value}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <p className="mt-10 text-center text-sm text-white/40">
                    © {new Date().getFullYear()} Oliver Gilcher. Built with Next.js,
                    TypeScript, and Tailwind CSS.
                </p>
            </div>
        </section>
    );
}