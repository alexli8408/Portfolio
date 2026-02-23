"use client";

import { Linkedin, Github, Mail, Code } from "lucide-react";

const links = [
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
    icon: Mail,
    href: "mailto:atli@uwaterloo.ca",
    label: "Email",
  },
  {
    icon: Code,
    href: "https://github.com/alexli8408/portfolio",
    label: "Source",
  },
];

export default function Footer() {
  return (
    <footer className="mt-8 pt-6 border-t border-stone-200 dark:border-stone-800">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {links.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 text-stone-400 dark:text-stone-500 hover:text-stone-700 dark:hover:text-stone-300 transition-all duration-500"
              aria-label={label}
            >
              <Icon
                size={18}
                className="transition-transform duration-500 group-hover:scale-110"
              />
              <span className="hidden md:inline text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {label}
              </span>
            </a>
          ))}
        </div>
        <span className="text-xs text-stone-400 dark:text-stone-600">
          2026 &copy; Alex Li
        </span>
      </div>
    </footer>
  );
}
