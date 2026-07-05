import { config } from "@/config/site.config";

const navItems = [
    { label: "Home", href: "#hero", icon: "bi-house" },
    { label: "About", href: "#about", icon: "bi-person" },
    { label: "Experience", href: "#experience", icon: "bi-file-earmark-text" },
    { label: "Projects", href: "#projects", icon: "bi-images" },
    { label: "Focus", href: "#focus", icon: "bi-hdd-stack" },
    { label: "Contact", href: "#contact", icon: "bi-envelope" },
];

export function Sidebar() {
    return (
        <header className="fixed bottom-0 left-0 top-0 z-50 hidden w-75 overflow-y-auto px-3.75 xl:flex xl:flex-col xl:justify-center">
            <div className="rounded-3xl border border-white/30 bg-white/5 backdrop-blur-3xl p-4">
                <nav>
                    <ul className="m-0 list-none space-y-1 p-0">
                        {navItems.map((item, index) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className={`flex items-center rounded-full px-4 py-3 text-[15px] font-medium transition ${
                                        index === 0
                                            ? "bg-neutral-800 text-white"
                                            : "text-neutral-400 hover:bg-neutral-800 hover:text-white"
                                    }`}
                                >
                                    <i className={`bi ${item.icon} mr-3 text-xl accent-gray-500`} />
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="mt-6 flex justify-center gap-2">
                    <a href={config.mediaLinks.github} className="flex size-10 items-center justify-center rounded-full bg-white/10 text-neutral-300 transition hover:bg-gray-50 hover:text-gray-700">
                        <i className="bi bi-github" />
                    </a>
                    <a href={config.mediaLinks.linkedIn} className="flex size-10 items-center justify-center rounded-full bg-white/10 text-neutral-300 transition hover:bg-gray-50 hover:text-gray-700">
                        <i className="bi bi-linkedin" />
                    </a>
                    <a href={config.mediaLinks.email} className="flex size-10 items-center justify-center rounded-full bg-white/10 text-neutral-300 transition hover:bg-gray-50 hover:text-gray-700">
                        <i className="bi bi-envelope" />
                    </a>
                </div>
            </div>
        </header>
    );
}