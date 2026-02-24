"use client";

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
              className="group relative text-stone-400 dark:text-stone-500 hover:text-stone-700 dark:hover:text-stone-300 transition-all duration-500"
              aria-label={label}
            >
              <Icon
                size={18}
                className="transition-transform duration-500 group-hover:scale-110"
              />
              <span className="hidden md:block absolute left-1/2 -translate-x-1/2 top-full mt-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
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
