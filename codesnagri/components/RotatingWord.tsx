"use client";
import { useEffect, useState } from "react";
export default function RotatingWord({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  useEffect(() => { const t = setInterval(() => setI((n) => (n + 1) % words.length), 2200); return () => clearInterval(t); }, [words.length]);
  return <span key={i} className="acc inline-block" style={{ animation: "rise .6s ease both" }}>{words[i]}</span>;
}
