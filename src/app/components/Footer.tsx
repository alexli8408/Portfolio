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
    <footer className="flex flex-col gap-4 text-sm text-stone-500 dark:text-stone-400">
      <hr className="border-b border-neutral-200 dark:border-neutral-800" />
      <div className="flex flex-wrap gap-4">
        {links.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-200 active:text-neutral-800 dark:active:text-neutral-200 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="w-5 h-5 hover:scale-110 active:scale-110 transition-transform duration-500 ease-out" />
          </a>
        ))}
      </div>
      <p>2026 &copy; Alex Li</p>
    </footer>
  );
}

