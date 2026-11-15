"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

// Loads the scroll-craft engine (public/scrollcraft.js, unedited) and mounts it on the homepage,
// then drives "the river": the gold channel at the right edge that fills as the page turns to gold.

declare global {
  interface Window {
    ScrollCraft?: { mount: (root: Element) => unknown };
  }
}

export const riverStops = [
  { id: "touch", label: "The touch" },
  { id: "make", label: "What we make" },
  { id: "work", label: "Our work" },
  { id: "month", label: "Every week" },
  { id: "start", label: "Start" },
];

export function HomeEngine() {
  const mounted = useRef(false);
  const riverRef = useRef<HTMLElement>(null);

  function mount() {
    if (mounted.current || !window.ScrollCraft) return;
    const root = document.querySelector(".home");
    if (!root) return;
    mounted.current = true;
    window.ScrollCraft.mount(root);
  }

  useEffect(() => {
    // The script may already be cached from an earlier visit.
    mount();
    const river = riverRef.current;
    if (!river) return;
    const links = Array.from(river.querySelectorAll<HTMLAnchorElement>("a"));
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - innerHeight;
      river.style.setProperty("--river", String(max > 0 ? Math.min(1, scrollY / max) : 0));
      let current = -1;
      riverStops.forEach((s, i) => {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top < innerHeight * 0.5) current = i;
      });
      links.forEach((a, i) => {
        a.classList.toggle("is-passed", i <= current);
        if (i === current) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      });
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <Script src="/scrollcraft.js" strategy="afterInteractive" onReady={mount} />
      <nav className="river" ref={riverRef} aria-label="Page sections">
        <div className="river__channel" aria-hidden="true">
          <div className="river__fill" />
        </div>
        {riverStops.map((s) => (
          <a key={s.id} href={`#${s.id}`}>
            <span>{s.label}</span>
            <i aria-hidden="true" />
          </a>
        ))}
      </nav>
    </>
  );
}
