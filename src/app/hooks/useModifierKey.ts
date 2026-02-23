"use client";

import { useEffect, useState } from "react";

export function useModifierKey() {
  const [isMac, setIsMac] = useState(true);

  useEffect(() => {
    setIsMac(navigator.platform.toLowerCase().includes("mac"));
  }, []);

  return isMac ? "⌘" : "Ctrl";
}
