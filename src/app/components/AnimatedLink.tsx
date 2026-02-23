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
      <span className="animated-underline absolute bottom-0 left-0 h-[1px] w-full bg-stone-800 dark:bg-stone-300 scale-x-0" />
      <style jsx>{`
        .animated-underline {
          transform: scaleX(0);
          transform-origin: left;
        }
        *:hover > .animated-underline,
        *:hover > span > .animated-underline {
          animation: sweep 0.6s ease-in-out;
        }
      `}</style>
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
