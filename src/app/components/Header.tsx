"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useModifierKey } from "../hooks/useModifierKey";
import AnimatedLink from "./AnimatedLink";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const modKey = useModifierKey();
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("visited");
    if (!hasVisited) {
      setShowHint(true);
      localStorage.setItem("visited", "true");
    }
  }, []);

  return (
    <header className="flex items-center justify-between mb-4">
      <AnimatedLink href="/" className="text-stone-700 dark:text-stone-200 font-normal">
        alex li
      </AnimatedLink>

      <nav className="flex items-center gap-4 text-sm">
        <a
          href="#projects"
          className="text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 transition-colors duration-200"
        >
          projects
        </a>
        <a
          href="https://github.com/alexli8408"
          target="_blank"
          rel="noopener noreferrer"
          className="text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 transition-colors duration-200"
        >
          github
        </a>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="p-1.5 text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 transition-colors duration-200"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        {/* Command palette trigger */}
        <div className="relative hidden md:block">
          <button
            onClick={() => {
              document.dispatchEvent(
                new KeyboardEvent("keydown", { key: "k", metaKey: true })
              );
            }}
            className="flex items-center justify-center w-7 h-7 rounded-md border border-stone-300 dark:border-stone-700 text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 hover:border-stone-500 dark:hover:border-stone-500 transition-all duration-200 text-xs font-medium"
            aria-label="Open command palette"
          >
            K
          </button>
          {showHint && (
            <div className="absolute -top-8 -right-4 text-xs text-stone-500 dark:text-stone-400 whitespace-nowrap animate-fade-in">
              <span>psst... try this!</span>
              <svg
                className="absolute -bottom-3 right-5 w-4 h-4 text-stone-400 dark:text-stone-500"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M4 2 C8 6, 10 10, 12 14" />
              </svg>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
