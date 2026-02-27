"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export default function AnimatedSection({
    children,
    className = "",
    id,
}: AnimatedSectionProps) {
    const ref = useRef<HTMLUListElement>(null);
    const [active, setActive] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // On touch devices, tap to activate section, tap elsewhere to deactivate
        const hasHover = window.matchMedia("(hover: hover)").matches;
        if (hasHover) return;

        const handleTouch = (e: TouchEvent) => {
            if (el.contains(e.target as Node)) {
                setActive(true);
            } else {
                setActive(false);
            }
        };

        document.addEventListener("touchstart", handleTouch);
        return () => document.removeEventListener("touchstart", handleTouch);
    }, []);

    return (
        <ul
            ref={ref}
            id={id}
            className={`group grid gap-3 hover:translate-x-1 transition-transform duration-200 outline-none ${active ? "translate-x-1 touched" : ""
                } ${className}`}
        >
            {children}
        </ul>
    );
}
