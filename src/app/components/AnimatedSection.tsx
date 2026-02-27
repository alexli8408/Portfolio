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

        const handleTouchInside = (e: TouchEvent) => {
            // Prevent the outside handler from immediately deactivating
            e.stopPropagation();
            setActive(true);
        };

        const handleTouchOutside = () => {
            setActive(false);
        };

        el.addEventListener("touchstart", handleTouchInside);
        document.addEventListener("touchstart", handleTouchOutside);

        return () => {
            el.removeEventListener("touchstart", handleTouchInside);
            document.removeEventListener("touchstart", handleTouchOutside);
        };
    }, []);

    return (
        <ul
            ref={ref}
            id={id}
            className={`group grid gap-1 hover:translate-x-1 transition-transform duration-200 outline-none ${active ? "translate-x-1 touched" : ""
                } ${className}`}
        >
            {children}
        </ul>
    );
}
