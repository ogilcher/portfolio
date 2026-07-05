import { Sidebar } from "@/components/layout/sidebar";
import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about";
import { Experience } from "@/components/home/experience";
import { Projects } from "@/components/home/projects";
import { Philosophy } from "@/components/home/philosophy";
import {Skills} from "@/components/home/skills";
import {Contact} from "@/components/home/contact";

export default function Home() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-white/10">
            <Sidebar />

            <main className="relative z-10 xl:ml-82.5">
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Philosophy />
                <Skills />
                <Contact />
            </main>
        </div>
    );
}