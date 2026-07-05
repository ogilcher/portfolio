import Image from "next/image";
import {AnimatedRole} from "@/components/home/animated-role";
import { config } from "@/config/site.config";

export function Hero() {
    return (
        <section
            id="hero"
            className="relative flex min-h-screen items-center overflow-hidden px-6 py-24"
        >
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute right-[10%] top-[10%] size-75 animate-[float_6s_ease-in-out_infinite] rounded-full bg-sky-400/10" />
                <div className="absolute bottom-[20%] left-[5%] size-50 animate-[float_6s_ease-in-out_infinite_2s] rounded-full bg-sky-400/10" />
            </div>

            <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2 text-white/80">
                <div>
                    <h1 className="mb-4 text-6xl font-extrabold leading-tight md:text-7xl">
                        {config.firstName} <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-0.75 after:w-full after:bg-linear-to-r after:from-white/80 after:to-white/40">{config.lastName}</span>
                    </h1>

                    <h2 className="mb-3 text-3xl font-semibold">
                        Software Engineer
                    </h2>

                    <p className="mb-5 text-2xl ">
                        I&#39;m a <AnimatedRole />
                    </p>

                    <p className="mb-10 max-w-xl text-lg leading-8">
                        {config.jobInformation.descriptionOfWork}
                    </p>

                    <div className="mb-10 flex flex-wrap gap-5">
                        <a
                            href="#projects"
                            className="rounded-full border-2 border-sky-500 bg-sky-500 px-8 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sky-600"
                        >
                            View My Work
                        </a>

                        <a
                            href="#contact"
                            className="rounded-full border-2 border-sky-500 px-8 py-3.5 font-semibold text-sky-500 transition hover:-translate-y-0.5 hover:bg-sky-500 hover:text-white"
                        >
                            Get In Touch
                        </a>
                    </div>

                    <div className="flex gap-5">
                        <a href={config.mediaLinks.github} className="flex size-12 items-center justify-center rounded-full bg-white/10 text-neutral-300 transition hover:bg-gray-50 hover:text-gray-700">
                            <i className="bi bi-github" />
                        </a>
                        <a href={config.mediaLinks.linkedIn} className="flex size-12 items-center justify-center rounded-full bg-white/10 text-neutral-300 transition hover:bg-gray-50 hover:text-gray-700">
                            <i className="bi bi-linkedin" />
                        </a>
                        <a href={config.mediaLinks.email} className="flex size-12 items-center justify-center rounded-full bg-white/10 text-neutral-300 transition hover:bg-gray-50 hover:text-gray-700">
                            <i className="bi bi-envelope" />
                        </a>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="relative size-100 max-w-full">
                        <div className="absolute left-3.75 top-3.75 size-full rounded-[30px] bg-white-1" />
                        <div className="relative z-10 flex size-full items-center justify-center rounded-[30px] bg-white object-cover shadow-xl">
                            <Image
                                src="/images/headshot.webp"
                                alt="Oliver Gilcher"
                                fill
                                priority
                                className="rounded-[30px] object-cover "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}