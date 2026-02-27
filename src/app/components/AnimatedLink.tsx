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
    animated-link relative inline-flex items-center
    text-stone-700 dark:text-stone-300
    transition-all duration-300 outline-none
    after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full
    after:bg-stone-300 dark:after:bg-stone-600 after:z-[1]
    before:absolute before:left-0 before:bottom-0 before:h-[1px] before:w-full
    before:bg-stone-800 dark:before:bg-stone-300 before:opacity-0 before:z-[2]
    hover:before:opacity-100 active:before:opacity-100
    hover:text-stone-900 dark:hover:text-stone-100
    active:text-stone-900 dark:active:text-stone-100
    ${className}
  `;

  const content = <>{children}</>;

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
