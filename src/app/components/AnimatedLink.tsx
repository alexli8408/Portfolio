"use client";

import Link from "next/link";

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export default function AnimatedLink({
  href,
  children,
  className = "",
  external,
}: AnimatedLinkProps) {
  const isExternal = external ?? href.startsWith("http");

  const linkClasses = `
    relative inline-block font-medium text-stone-800 dark:text-stone-200
    ${className}
  `;

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {/* Static underline */}
      <span className="absolute bottom-0 left-0 h-[1px] w-full bg-stone-300 dark:bg-stone-600" />
      {/* Animated sweep underline */}
      <span className="absolute bottom-0 left-0 h-[1px] w-full overflow-hidden">
        <span className="sweep-line block h-full w-full bg-white -translate-x-full" />
      </span>
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={linkClasses}>
      {content}
    </Link>
  );
}
