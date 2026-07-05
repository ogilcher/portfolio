import {config, ExperienceType} from "@/config/site.config";

export function Experience() {
    return (
        <section id="experience" className="px-6 py-24 text-white/80">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <h2 className="text-4xl font-bold text-white md:text-5xl">
                            Experience
                        </h2>

                        <div className="mt-4 h-1 w-20 rounded-full bg-sky-500" />

                        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/60">
                            Engineering work focused on backend systems, platform infrastructure,
                            deployment tooling, and scalable application architecture.
                        </p>
                    </div>

                    <a
                        href="/resume.pdf"
                        download
                        className="inline-flex w-fit items-center gap-3 rounded-full border border-sky-400/40 bg-sky-400/10 px-6 py-3 font-semibold text-sky-300 transition hover:-translate-y-0.5 hover:bg-sky-400 hover:text-white"
                    >
                        <i className="bi bi-download" />
                        Download Resume
                    </a>
                </div>

                <div className="relative">
                    <div className="absolute left-4 top-0 hidden h-full w-px bg-white/10 md:block" />

                    <div className="space-y-8">
                        {config.experiences.map((item) => (
                            <article
                                key={`${item.company}-${item.role}`}
                                className="relative rounded-[30px] border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur md:ml-12"
                            >
                                <div className="absolute -left-15 top-8 hidden size-8 items-center justify-center rounded-full border border-sky-400/30 bg-[#0b1120] text-sky-400 md:flex">
                                    <i className={GetIcon(item.type)}/>
                                </div>

                                <div className="mb-5 flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                                    <div>
                                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-400">
                                            {item.period}
                                        </p>

                                        <h3 className="mt-2 text-2xl font-bold text-white">
                                            {item.role}
                                        </h3>

                                        <p className="mt-1 text-lg font-semibold text-white/50">
                                            {item.company}
                                        </p>
                                    </div>
                                </div>

                                <p className="mb-6 max-w-3xl text-lg leading-8 text-white/60">
                                    {item.description}
                                </p>

                                <ul className="space-y-3">
                                    {item.highlights.map((highlight) => (
                                        <li key={highlight} className="flex gap-3 text-white/60">
                                            <i className="bi bi-check2-circle mt-1 text-sky-400" />
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function GetIcon(jobType: ExperienceType) {
    switch (jobType) {
        // 0 = job, 1 = internship, 2 = project
        case ExperienceType.job:
            return "bi bi-briefcase"
        case ExperienceType.internship:
            return "bi bi-mortarboard-fill"
        case ExperienceType.project:
            return "bi bi-newspaper"
    }
}