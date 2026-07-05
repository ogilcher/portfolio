import { config } from "@/config/site.config";

export function Skills() {
    return (
        <section id="skills" className="px-6 py-24 text-white/80">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-bold text-white md:text-5xl">
                        Technologies
                    </h2>

                    <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-sky-500" />

                    <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/60">
                        Technologies I&apos;ve used throughout academic, professional, and
                        personal engineering projects.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {config.skills.map((group) => (
                        <div
                            key={group.title}
                            className="rounded-[28px] border border-white/10 bg-white/[0.05] p-8 backdrop-blur"
                        >
                            <div className="mb-6 flex items-center gap-4">
                                <div className="flex size-12 items-center justify-center rounded-full bg-sky-400/10 text-xl text-sky-400">
                                    <i className={`bi ${group.icon}`} />
                                </div>

                                <h3 className="text-2xl font-bold text-white">
                                    {group.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/70 transition hover:border-sky-400/30 hover:bg-sky-400/10 hover:text-sky-300"
                                    >
                    {skill}
                  </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}