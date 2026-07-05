const profileItems = [
    {
        icon: "bi-mortarboard",
        label: "Education",
        value: "B.S. Computer Science",
        detail: "Colorado Technical University",
    },
    {
        icon: "bi-bullseye",
        label: "Current Focus",
        value: "Backend & Platform Engineering",
        detail: "Distributed systems, APIs, infrastructure",
    },
    {
        icon: "bi-calendar-check",
        label: "Graduation",
        value: "April 2027",
        detail: "New grad software engineering roles",
    },
    {
        icon: "bi-graph-up-arrow",
        label: "GPA",
        value: "4.0",
        detail: "President’s List",
    },
    {
        icon: "bi-briefcase",
        label: "Seeking",
        value: "Software Engineer I",
        detail: "Backend, platform, systems, cloud",
    },
    {
        icon: "bi-stars",
        label: "Long-Term Goal",
        value: "Software Architect",
        detail: "Reliable, scalable software systems",
    },
];

const stats = [
    { value: "4.0", label: "GPA" },
    { value: "3+", label: "Major Projects" },
    { value: "2027", label: "Graduation" },
];

export function About() {
    return (
        <section id="about" className="px-6 py-24 text-white/80">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-bold text-white md:text-5xl">
                        About Me
                    </h2>

                    <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-sky-500" />

                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/60">
                        A systems-minded software engineer focused on backend platforms,
                        deployment infrastructure, and scalable software architecture.
                    </p>
                </div>

                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                    <div className="rounded-[30px] border border-white/10 bg-white/[0.06] p-8 shadow-xl backdrop-blur">
                        <h3 className="mb-8 text-2xl font-bold text-white">
                            Engineering Profile
                        </h3>

                        <div className="space-y-6">
                            {profileItems.map((item) => (
                                <div key={item.label} className="flex gap-4">
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-sky-400/20 bg-sky-400/10 text-xl text-sky-400">
                                        <i className={`bi ${item.icon}`} />
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/40">
                                            {item.label}
                                        </p>

                                        <p className="mt-1 text-lg font-bold text-white">
                                            {item.value}
                                        </p>

                                        <p className="text-sm leading-6 text-white/50">
                                            {item.detail}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-6 text-3xl font-bold leading-tight text-white">
                            Building the infrastructure behind great software.
                        </h3>

                        <div className="space-y-5 text-lg leading-8 text-white/60">
                            <p>
                                I’m Oliver Gilcher, a Computer Science student focused on
                                backend engineering, distributed systems, platform
                                infrastructure, and software architecture.
                            </p>

                            <p>
                                I enjoy working on the systems behind modern applications:
                                APIs, databases, authentication, deployment pipelines,
                                monitoring, automation, and the architectural decisions that
                                keep software reliable as it grows.
                            </p>

                            <p>
                                Through projects like Mission Control, Lunar Deploy Agent, and
                                LunaPal, I’ve been building software that goes beyond small
                                demos and focuses on real engineering problems: deployment
                                orchestration, backend APIs, infrastructure coordination, and
                                scalable application design.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 sm:grid-cols-3">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="rounded-[24px] border border-white/10 bg-white/[0.06] p-6 text-center shadow-sm backdrop-blur"
                                >
                                    <p className="text-4xl font-extrabold text-sky-400">
                                        {stat.value}
                                    </p>

                                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-white/40">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur">
                    <div className="grid md:grid-cols-4">
                        <Stat
                            label="Specialization"
                            value="Backend Engineering"
                        />

                        <Stat
                            label="Architecture"
                            value="Distributed Systems"
                        />

                        <Stat
                            label="Infrastructure"
                            value="Deployment Platforms"
                        />

                        <Stat
                            label="Career Target"
                            value="Software Engineer I"
                            last
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function Stat({
                  label,
                  value,
                  last = false,
              }: {
    label: string;
    value: string;
    last?: boolean;
}) {
    return (
        <div
            className={`p-8 ${
                !last ? "border-b border-white/10 md:border-b-0 md:border-r" : ""
            } border-white/10`}
        >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40 text-center">
                {label}
            </p>

            <p className="mt-3 text-xl font-bold text-white text-center">
                {value}
            </p>
        </div>
    );
}