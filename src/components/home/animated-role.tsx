"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { config } from "@/config/site.config";

export function AnimatedRole() {
    const el = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const typed = new Typed(el.current!, {
            strings: config.jobInformation.jobTitles,
            typeSpeed: 55,
            backSpeed: 35,
            backDelay: 1800,
            loop: true,
            smartBackspace: true,
            showCursor: true,
        });

        return () => typed.destroy();
    }, []);

    return (
        <span className="border-b-2">
      <span ref={el} />
    </span>
    );
}