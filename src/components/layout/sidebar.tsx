"use client";

import { useEffect, useState } from "react";
import { config } from "@/config/site.config";
import {navigationLinks} from "@/data/navigation";

const navItems = [
    { label: "Home", href: "#hero", icon: "bi-house" },
    { label: "About", href: "#about", icon: "bi-person" },
    { label: "Experience", href: "#experience", icon: "bi-file-earmark-text" },
    { label: "Projects", href: "#projects", icon: "bi-images" },
    { label: "Philosophy", href: "#philosophy", icon: "bi-diagram-3" },
    { label: "Skills", href: "#skills", icon: "bi-code-slash" },
    { label: "Contact", href: "#contact", icon: "bi-envelope" },
];

export function Sidebar() {
    const [active, setActive] = useState("#hero");

    useEffect(() => {
        function updateActiveSection() {
            const sectionPositions = navigationLinks
                .map((item) => {
                    const section = document.querySelector(item.href);

                    if (!section) return null;

                    const rect = section.getBoundingClientRect();

                    return {
                        href: item.href,
                        distanceFromTop: Math.abs(rect.top - 160),
                        isAboveFold: rect.top <= window.innerHeight * 0.45,
                    };
                })
                .filter(Boolean) as {
                href: string;
                distanceFromTop: number;
                isAboveFold: boolean;
            }[];

            const closestSection = sectionPositions
                .filter((section) => section.isAboveFold)
                .sort((a, b) => a.distanceFromTop - b.distanceFromTop)[0];

            if (closestSection) {
                setActive(closestSection.href);
            }
        }

        updateActiveSection();

        window.addEventListener("scroll", updateActiveSection);
        window.addEventListener("resize", updateActiveSection);

        return () => {
            window.removeEventListener("scroll", updateActiveSection);
            window.removeEventListener("resize", updateActiveSection);
        };
    }, []);

    function scrollToSection(
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) {
        e.preventDefault();

        const section = document.querySelector(href);

        if (!section) return;

        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        // Keep the URL clean
        window.history.replaceState({}, "", "/");
    }

    return (
        <header className="fixed bottom-0 left-0 top-0 z-50 hidden w-75 overflow-y-auto px-3.75 xl:flex xl:flex-col xl:justify-center">
            <div className="rounded-3xl border border-white/30 bg-white/5 p-4 backdrop-blur-3xl">
                <nav>
                    <ul className="m-0 list-none space-y-1 p-0">
                        {navItems.map((item) => {
                            const isActive = active === item.href;

                            return (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        onClick={(e) =>
                                            scrollToSection(e, item.href)
                                        }
                                        className={`flex items-center rounded-full px-4 py-3 text-[15px] font-medium transition-all duration-300 ${
                                            isActive
                                                ? "bg-white text-slate-900 shadow-lg"
                                                : "text-white/55 hover:bg-white/10 hover:text-white"
                                        }`}
                                    >
                                        <i
                                            className={`bi ${item.icon} mr-3 text-xl transition-colors ${
                                                isActive
                                                    ? "text-slate-900"
                                                    : "text-white/50"
                                            }`}
                                        />

                                        {item.label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className="mt-6 flex justify-center gap-2">
                    <a
                        href={config.mediaLinks.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white/60 transition hover:bg-white hover:text-slate-900"
                    >
                        <i className="bi bi-github" />
                    </a>

                    <a
                        href={config.mediaLinks.linkedIn}
                        target="_blank"
                        rel="noreferrer"
                        className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white/60 transition hover:bg-white hover:text-slate-900"
                    >
                        <i className="bi bi-linkedin" />
                    </a>

                    <a
                        href={config.mediaLinks.email}
                        className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white/60 transition hover:bg-white hover:text-slate-900"
                    >
                        <i className="bi bi-envelope" />
                    </a>
                </div>
            </div>
        </header>
    );
}