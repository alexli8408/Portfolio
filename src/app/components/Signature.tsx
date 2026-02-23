"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";

export default function Signature() {
  const [key, setKey] = useState(0);

  return (
    <div className="flex flex-col items-center gap-2 my-8">
      <motion.div
        key={key}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ fontFamily: "var(--font-caveat)" }}
        className="text-6xl md:text-7xl text-stone-300 dark:text-stone-700 select-none"
      >
        Alex Li
      </motion.div>
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
