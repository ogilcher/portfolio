import { config } from "@/config/site.config"

export function Projects() {
    return (
        <section id="projects" className="px-6 py-24 text-white/80">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-white md:text-5xl">
                        Featured Projects
                    </h2>

                    <div className="mt-4 h-1 w-20 rounded-full bg-sky-500" />

                    <p className="mt-5 max-w-2xl text-lg leading-8 text-white/60">
                        Selected work focused on backend systems, deployment infrastructure,
                        application architecture, and platform engineering.
                    </p>
                </div>

                <div className="grid gap-8">
                    {config.projects.map((project) => (
                        <article
                            key={project.name}
                            className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.05] shadow-xl backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.08]"
                        >
                            <div className="grid gap-0 lg:grid-cols-[0.8fr_1.2fr]">
                                <div className="flex min-h-[280px] items-center justify-center border-b border-white/10 bg-white/[0.04] p-10 lg:border-b-0 lg:border-r">
                                    <div className="flex size-36 items-center justify-center rounded-[30px] border border-sky-400/20 bg-sky-400/10 text-6xl text-sky-400 transition group-hover:scale-105">
                                        <i className={`bi ${project.icon}`} />
                                    </div>
                                </div>

                                <div className="p-8">
                                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-400">
                                        {project.type}
                                    </p>

                                    <h3 className="mt-3 text-3xl font-bold text-white">
                                        {project.name}
                                    </h3>

                                    <p className="mt-4 max-w-3xl text-lg leading-8 text-white/60">
                                        {project.description}
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/70"
                                            >
                        {tech}
                      </span>
                                        ))}
                                    </div>

                                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                                        {project.highlights.map((highlight) => (
                                            <div key={highlight} className="flex gap-3 text-white/60">
                                                <i className="bi bi-check2-circle mt-1 text-sky-400" />
                                                <span>{highlight}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-8 flex flex-wrap gap-4">
                                        <a
                                            href="#contact"
                                            className="rounded-full border border-sky-400/40 bg-sky-400/10 px-5 py-2.5 font-semibold text-sky-300 transition hover:bg-sky-400 hover:text-white"
                                        >
                                            View Case Study
                                        </a>

                                        {project.github !== undefined && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="rounded-full border border-white/10 px-5 py-2.5 font-semibold text-white/70 transition hover:bg-white hover:text-neutral-900"
                                            >
                                                GitHub
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}