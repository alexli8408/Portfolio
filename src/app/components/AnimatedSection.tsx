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
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Only use Intersection Observer on touch-only devices
        const hasHover = window.matchMedia("(hover: hover)").matches;
        if (hasHover) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <ul
            ref={ref}
            id={id}
            className={`group grid gap-1 hover:translate-x-1 transition-transform duration-200 outline-none ${inView ? "translate-x-1 in-view" : ""
                } ${className}`}
        >
            {children}
        </ul>
    );
}
