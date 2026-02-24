"use client";

import { useState } from "react";
import { RotateCcw } from "lucide-react";

export default function Signature() {
  const [key, setKey] = useState(0);

  return (
    <div className="flex flex-col items-end gap-2">
      <svg
        key={key}
        viewBox="0 0 250 70"
        className="w-full max-w-xl text-stone-700 dark:text-stone-500"
      >
        <text
          x="10"
          y="48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="sig-text"
          style={{ fontFamily: "var(--font-caveat)", fontSize: "48px" }}
        >
          Alex Li
        </text>
        <line
          x1="2"
          y1="62"
          x2="248"
          y2="62"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="sig-line"
        />
      </svg>
      <button
        onClick={() => setKey((k) => k + 1)}
        className="sig-replay text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
      >
        <RotateCcw size={16} />
      </button>
    </div>
  );
}
