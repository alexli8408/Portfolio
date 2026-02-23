"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import * as Dialog from "@radix-ui/react-dialog";
import {
  Home,
  FolderOpen,
  Linkedin,
  Github,
  Mail,
  Code,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface CommandItem {
  label: string;
  icon: React.ReactNode;
  shortcut?: string;
  action: () => void;
  group: string;
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const commands: CommandItem[] = [
    {
      label: "Home",
      icon: <Home size={16} />,
      shortcut: "⇧H",
      action: () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setOpen(false);
      },
      group: "Navigation",
    },
    {
      label: "Projects",
      icon: <FolderOpen size={16} />,
      shortcut: "⇧P",
      action: () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
      },
      group: "Navigation",
    },
    {
      label: "LinkedIn",
      icon: <Linkedin size={16} />,
      shortcut: "⇧L",
      action: () => {
        window.open("https://linkedin.com/in/alex-li-619870294", "_blank");
        setOpen(false);
      },
      group: "Links",
    },
    {
      label: "GitHub",
      icon: <Github size={16} />,
      shortcut: "⇧G",
      action: () => {
        window.open("https://github.com/alexli8408", "_blank");
        setOpen(false);
      },
      group: "Links",
    },
    {
      label: "Email",
      icon: <Mail size={16} />,
      shortcut: "⇧E",
      action: () => {
        window.open("mailto:atli@uwaterloo.ca", "_blank");
        setOpen(false);
      },
      group: "Links",
    },
    {
      label: "Source Code",
      icon: <Code size={16} />,
      shortcut: "⇧C",
      action: () => {
        window.open("https://github.com/alexli8408/portfolio", "_blank");
        setOpen(false);
      },
      group: "Links",
    },
    {
      label: theme === "dark" ? "Light Mode" : "Dark Mode",
      icon: theme === "dark" ? <Sun size={16} /> : <Moon size={16} />,
      shortcut: "⇧T",
      action: () => {
        toggleTheme();
        setOpen(false);
      },
      group: "Theme",
    },
  ];

  // Keyboard shortcuts when palette is closed
  useEffect(() => {
    const handleShortcut = (e: KeyboardEvent) => {
      if (open) return;
      if (!e.shiftKey) return;

      const shortcuts: Record<string, () => void> = {
        H: () => window.scrollTo({ top: 0, behavior: "smooth" }),
        P: () =>
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }),
        L: () => window.open("https://linkedin.com/in/alex-li-619870294", "_blank"),
        G: () => window.open("https://github.com/alexli8408", "_blank"),
        E: () => window.open("mailto:atli@uwaterloo.ca", "_blank"),
        C: () => window.open("https://github.com/alexli8408/portfolio", "_blank"),
        T: () => toggleTheme(),
      };

      const action = shortcuts[e.key];
      if (action) {
        e.preventDefault();
        action();
      }
    };

    document.addEventListener("keydown", handleShortcut);
    return () => document.removeEventListener("keydown", handleShortcut);
  }, [open, toggleTheme]);

  const groups = [...new Set(commands.map((c) => c.group))];

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed top-[20%] left-1/2 -translate-x-1/2 z-50 w-[90vw] max-w-[460px] animate-slide-down">
          <Command className="rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950 shadow-2xl overflow-hidden">
            <Command.Input
              placeholder="Type a command or search..."
              className="w-full px-4 py-3 text-sm bg-transparent border-b border-stone-200 dark:border-stone-800 text-stone-800 dark:text-stone-200 placeholder:text-stone-400 dark:placeholder:text-stone-500 outline-none"
            />
            <Command.List className="max-h-[300px] overflow-y-auto p-2">
              <Command.Empty className="px-4 py-6 text-center text-sm text-stone-400 dark:text-stone-500">
                No results found.
              </Command.Empty>
              {groups.map((group) => (
                <Command.Group
                  key={group}
                  heading={group}
                  className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-stone-400 [&_[cmdk-group-heading]]:dark:text-stone-500"
                >
                  {commands
                    .filter((c) => c.group === group)
                    .map((cmd) => (
                      <Command.Item
                        key={cmd.label}
                        onSelect={cmd.action}
                        className="flex items-center justify-between px-2 py-2 rounded-lg cursor-pointer text-sm text-stone-600 dark:text-stone-400 data-[selected=true]:bg-stone-100 dark:data-[selected=true]:bg-stone-900 data-[selected=true]:text-stone-800 dark:data-[selected=true]:text-stone-200 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-stone-400 dark:text-stone-500">
                            {cmd.icon}
                          </span>
                          {cmd.label}
                        </div>
                        {cmd.shortcut && (
                          <kbd className="text-xs text-stone-400 dark:text-stone-600 bg-stone-100 dark:bg-stone-800 px-1.5 py-0.5 rounded font-mono">
                            {cmd.shortcut}
                          </kbd>
                        )}
                      </Command.Item>
                    ))}
                </Command.Group>
              ))}
            </Command.List>
          </Command>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
