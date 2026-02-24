"use client";

import { useState } from "react";
import { RotateCcw } from "lucide-react";

const paths = [
  { d: "M 2 48 C 8 20, 14 8, 20 8 C 26 8, 30 20, 28 35 C 26 42, 22 48, 20 48", delay: 0 },
  { d: "M 10 32 C 14 30, 22 29, 28 30", delay: 0.4 },
  { d: "M 28 35 C 30 15, 33 8, 35 8 C 37 8, 38 20, 38 30 C 38 38, 36 48, 38 48 C 42 48, 48 30, 48 34 C 48 40, 44 48, 40 48", delay: 0.6 },
  { d: "M 50 28 C 54 32, 58 40, 62 48", delay: 1.1 },
  { d: "M 62 28 C 58 34, 54 42, 50 48", delay: 1.3 },
  { d: "M 78 6 C 78 16, 78 32, 78 48 C 80 48, 88 48, 94 46", delay: 1.6 },
  { d: "M 100 28 C 100 34, 100 40, 100 48", delay: 2.0 },
  { d: "M 99 20 C 100 19, 101 20, 100 21", delay: 2.2 },
];

export default function Signature() {
  const [key, setKey] = useState(0);

  return (
    <div className="flex flex-col items-end gap-2 my-8">
      <svg
        key={key}
        viewBox="0 0 112 56"
        fill="none"
        className="w-[240px] md:w-[300px] h-auto"
      >
        {paths.map(({ d, delay }, i) => (
          <path
            key={i}
            d={d}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-stone-400 dark:text-stone-600"
            style={{
              strokeDasharray: 1,
              strokeDashoffset: 1,
              animation: `draw 0.5s ease forwards ${delay}s`,
              pathLength: 1,
            } as React.CSSProperties}
          />
        ))}
      </svg>
      <style jsx>{`
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
      <button
        onClick={() => setKey((k) => k + 1)}
        className="text-stone-400 dark:text-stone-600 hover:text-stone-600 dark:hover:text-stone-400 transition-colors duration-200"
        aria-label="Replay signature animation"
      >
        <RotateCcw size={14} />
      </button>
    </div>
  );
}
