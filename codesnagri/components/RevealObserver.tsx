"use client";
import { useEffect } from "react";
const SEL = "main .reveal, main ul.space-y-3 > li, main h2, main ul.grid > li, main ol > li, main details, main aside, main form, main .faq, footer > div > *";
export default function RevealObserver() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    const seen = new WeakSet<Element>();
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.target.classList.toggle("show", e.isIntersecting)),
      { threshold: 0.05 }
    );
    const scan = () => {
      document.querySelectorAll<HTMLElement>(SEL).forEach((el) => {
        if (seen.has(el) || el.closest(".hero-in")) return;
        seen.add(el);
        const sibs = el.parentElement ? Array.from(el.parentElement.children) : [];
        el.classList.add("reveal");
        el.dataset.dir = el.tagName === "H2" ? "l" : el.tagName === "ASIDE" ? "r" : "u";
        el.style.setProperty("--d", `${(Math.max(sibs.indexOf(el), 0) % 4) * 0.05}s`);
        if (el.getBoundingClientRect().top < innerHeight) el.classList.add("show");
        io.observe(el);
      });
    };
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    const bar = document.getElementById("sp");
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = document.documentElement.scrollHeight - innerHeight;
        if (bar) bar.style.transform = `scaleX(${h > 0 ? Math.min(scrollY / h, 1) : 0})`;
      });
    };
    addEventListener("scroll", onScroll, { passive: true }); onScroll();
    return () => { io.disconnect(); mo.disconnect(); removeEventListener("scroll", onScroll); };
  }, []);
  return <div id="sp" aria-hidden className="fixed left-0 top-0 z-[60] h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-brand via-cyan-400 to-pink-500" />;
}
