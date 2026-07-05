// src/components/home/philosophy.tsx

const principles = [
    {
        icon: "bi-diagram-3",
        title: "Architecture First",
        description:
            "Every project begins with understanding how the system should fit together before writing code. Strong architecture leads to maintainable software.",
    },
    {
        icon: "bi-shield-check",
        title: "Reliability",
        description:
            "I enjoy building software that remains dependable as it grows through clean design, monitoring, testing, and thoughtful engineering decisions.",
    },
    {
        icon: "bi-boxes",
        title: "Scalable Systems",
        description:
            "Whether it's deployment platforms, APIs, or backend services, I enjoy creating software that can evolve instead of being rewritten.",
    },
    {
        icon: "bi-code-slash",
        title: "Developer Experience",
        description:
            "Clear APIs, documentation, automation, and maintainable code make software easier to build, extend, and operate.",
    },
];

export function Philosophy() {
    return (
        <section id="philosophy" className="px-6 py-24 text-white/80">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-bold text-white md:text-5xl">
                        How I Build Software
                    </h2>

                    <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-sky-500" />

                    <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/60">
                        I believe software is more than code. Good engineering comes from
                        understanding systems, designing thoughtfully, and building
                        solutions that remain reliable as they grow.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {principles.map((principle) => (
                        <div
                            key={principle.title}
                            className="rounded-[28px] border border-white/10 bg-white/[0.05] p-8 backdrop-blur transition hover:border-sky-400/30 hover:bg-white/[0.07]"
                        >
                            <div className="mb-6 flex size-14 items-center justify-center rounded-full bg-sky-400/10 text-2xl text-sky-400">
                                <i className={`bi ${principle.icon}`} />
                            </div>

                            <h3 className="text-2xl font-bold text-white">
                                {principle.title}
                            </h3>

                            <p className="mt-4 leading-8 text-white/60">
                                {principle.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}