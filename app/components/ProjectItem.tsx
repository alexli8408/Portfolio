"use client";

import { useState, useEffect, useRef } from "react";

interface ProjectItemProps {
  name: string;
  href: string;
  description: string;
  techStack: string;
}

export default function ProjectItem({
  name,
  href,
  description,
  techStack,
}: ProjectItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const charIndexRef = useRef(0);

  useEffect(() => {
    if (!isHovered) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      charIndexRef.current = 0;
      setDisplayedText("");
      return;
    }

    charIndexRef.current = 0;
    setDisplayedText("");

    const typeNextChar = () => {
      if (charIndexRef.current < techStack.length) {
        charIndexRef.current += 1;
        setDisplayedText(techStack.substring(0, charIndexRef.current));
        timeoutRef.current = setTimeout(typeNextChar, 50);
      }
    };

    timeoutRef.current = setTimeout(typeNextChar, 50);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isHovered, techStack]);

  return (
    <li
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="accent-link bold"
      >
        {name}
      </a>
      {description}{" "}
      {isHovered && (
        <span className="project-tech-typewriter">
          {displayedText}
          <span className="cursor">|</span>
        </span>
      )}
    </li>
  );
}
