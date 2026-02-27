"use client";

import { useState, useEffect, useRef } from "react";
import { Linkedin, Github, Mail, FileText } from "lucide-react";

const links = [
  {
    icon: Mail,
    href: "mailto:atli@uwaterloo.ca",
    label: "Email",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/alex-li-619870294",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/alexli8408",
    label: "GitHub",
  },
  {
    icon: FileText,
    href: "/Resume.pdf",
    label: "Resume",
  },
];

export default function Footer() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  // Close popup when tapping outside footer
  useEffect(() => {
    const handleTouch = (e: TouchEvent) => {
      if (footerRef.current && !footerRef.current.contains(e.target as Node)) {
        setActiveIndex(null);
      }
    };
    document.addEventListener("touchstart", handleTouch);
    return () => document.removeEventListener("touchstart", handleTouch);
  }, []);

  const handleTap = (index: number, e: React.TouchEvent) => {
    e.preventDefault();
    if (activeIndex === index) {
      // Second tap on same icon — follow the link
      window.open(links[index].href, "_blank");
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <footer className="flex flex-col gap-4 text-sm text-stone-500 dark:text-stone-400">
      <hr className="border-b border-neutral-200 dark:border-neutral-800" />
      <div ref={footerRef} className="flex flex-wrap gap-4">
        {links.map(({ icon: Icon, href, label }, index) => {
          const isActive = activeIndex === index;
          return (
            <a
              key={label}
              href={href}
              onTouchStart={(e) => handleTap(index, e)}
              className={`group flex items-center transition-colors duration-300 ${isActive
                  ? "text-neutral-800 dark:text-neutral-200"
                  : "hover:text-neutral-800 dark:hover:text-neutral-200"
                }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                className={`w-5 h-5 transition-transform duration-500 ease-out ${isActive ? "scale-110" : "hover:scale-110"
                  }`}
              />
              <span
                className={`inline-block overflow-hidden transition-all duration-500 ease-out ${isActive
                    ? "w-auto ml-2 opacity-100"
                    : "w-0 opacity-0 group-hover:w-auto group-hover:ml-2 group-hover:opacity-100"
                  }`}
              >
                {label}
              </span>
            </a>
          );
        })}
      </div>
      <p>2026 &copy; Alex Li</p>
    </footer>
  );
}
