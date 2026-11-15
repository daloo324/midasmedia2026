"use client";

import { useEffect, useRef, useState } from "react";

// The Midas touch: the homepage's one bespoke interaction.
// The marble king sits in a pinned scene. Wherever the visitor's pointer or finger touches him,
// a gilded copy of the same image shows through, and it stays. Scrolling through the scene gilds
// him along a path too, so everyone reaches the moment. Past about 40% gilded (or near the end of
// the scene) the gold floods him and the whole frame turns gold.

const MARBLE = "/home/bust-marble.webp";
const GOLD = "/home/bust-gold.webp";
const FLOOD_AT = 0.4;

export function TouchStage({ sectionId }: { sectionId: string }) {
  const kingRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gold, setGold] = useState(false);
  const [pct, setPct] = useState(0);
  const goldRef = useRef(false);

  useEffect(() => {
    const section = document.getElementById(sectionId);
    const king = kingRef.current;
    const canvas = canvasRef.current;
    if (!section || !king || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const goldImg = new Image();
    const marbleImg = new Image();
    goldImg.src = GOLD;
    marbleImg.src = MARBLE;

    // The mask holds every stroke so far; the visible canvas is the gold image cut by it.
    const mask = document.createElement("canvas");
    const mctx = mask.getContext("2d")!;
    // A small copy of the statue's own alpha, for measuring how much of HIM is gilded.
    const probe = document.createElement("canvas");
    const pctx = probe.getContext("2d", { willReadFrequently: true })!;
    let statueAlpha: Uint8ClampedArray | null = null;
    const PW = 60;
    let PH = 83;

    let W = 0, H = 0, dirty = true, autoT = 0, raf = 0, lastPt: { x: number; y: number } | null = null;

    function size() {
      const r = king!.getBoundingClientRect();
      const dpr = Math.min(devicePixelRatio || 1, 2);
      W = Math.max(1, Math.round(r.width * dpr));
      H = Math.max(1, Math.round(r.height * dpr));
      if (canvas!.width === W && canvas!.height === H) return;
      const keep = mask.width ? mask : null;
      let old: HTMLCanvasElement | null = null;
      if (keep && keep.width) {
        old = document.createElement("canvas");
        old.width = keep.width; old.height = keep.height;
        old.getContext("2d")!.drawImage(keep, 0, 0);
      }
      canvas!.width = W; canvas!.height = H;
      mask.width = W; mask.height = H;
      if (old) mctx.drawImage(old, 0, 0, W, H);
      dirty = true;
    }

    function measureStatue() {
      if (!marbleImg.complete || !marbleImg.naturalWidth) return;
      PH = Math.round(PW * (marbleImg.naturalHeight / marbleImg.naturalWidth));
      probe.width = PW; probe.height = PH;
      pctx.clearRect(0, 0, PW, PH);
      pctx.drawImage(marbleImg, 0, 0, PW, PH);
      statueAlpha = pctx.getImageData(0, 0, PW, PH).data.slice();
    }

    function stamp(x: number, y: number, r: number) {
      const g = mctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, "rgba(0,0,0,1)");
      g.addColorStop(0.6, "rgba(0,0,0,0.9)");
      g.addColorStop(1, "rgba(0,0,0,0)");
      mctx.fillStyle = g;
      mctx.beginPath();
      mctx.arc(x, y, r, 0, Math.PI * 2);
      mctx.fill();
      dirty = true;
    }

    function stroke(from: { x: number; y: number } | null, to: { x: number; y: number }, r: number) {
      if (!from) return stamp(to.x, to.y, r);
      const d = Math.hypot(to.x - from.x, to.y - from.y);
      const steps = Math.max(1, Math.ceil(d / (r * 0.35)));
      for (let i = 1; i <= steps; i++) {
        stamp(from.x + ((to.x - from.x) * i) / steps, from.y + ((to.y - from.y) * i) / steps, r);
      }
    }

    // The scroll-driven touch: a slow path down and across the statue.
    function autoPoint(t: number) {
      return {
        x: W * (0.5 + 0.34 * Math.sin(t * Math.PI * 5.2) * (0.55 + 0.45 * t)),
        y: H * (0.06 + 0.9 * t),
      };
    }

    function coverage() {
      if (!statueAlpha) return 0;
      pctx.clearRect(0, 0, PW, PH);
      pctx.drawImage(mask, 0, 0, PW, PH);
      const m = pctx.getImageData(0, 0, PW, PH).data;
      let inside = 0, painted = 0;
      for (let i = 3; i < m.length; i += 4) {
        if (statueAlpha[i] > 128) {
          inside++;
          if (m[i] > 128) painted++;
        }
      }
      return inside ? painted / inside : 0;
    }

    function flood(at?: { x: number; y: number }) {
      if (goldRef.current) return;
      goldRef.current = true;
      if (at) {
        const r = king!.getBoundingClientRect();
        const s = section!.querySelector<HTMLElement>(".sc-stage")!.getBoundingClientRect();
        section!.style.setProperty("--fx", `${((r.left + (at.x / W) * r.width - s.left) / s.width) * 100}%`);
        section!.style.setProperty("--fy", `${((r.top + (at.y / H) * r.height - s.top) / s.height) * 100}%`);
      }
      setGold(true);
    }

    let frames = 0;
    function tick() {
      raf = requestAnimationFrame(tick);
      const p = parseFloat(section!.style.getPropertyValue("--sc-p")) || 0;

      // Scroll gilds along the path between 15% and 80% of the scene. It only ever adds gold.
      const target = Math.min(1, Math.max(0, (p - 0.15) / 0.65));
      if (!goldRef.current && target > autoT && W) {
        const r = W * 0.06;
        let prev: { x: number; y: number } | null = autoT > 0 ? autoPoint(autoT) : null;
        const n = Math.ceil((target - autoT) * 120);
        for (let i = 1; i <= n; i++) {
          const pt = autoPoint(autoT + ((target - autoT) * i) / n);
          stroke(prev, pt, r);
          prev = pt;
        }
        autoT = target;
        lastPt = prev;
      }
      if (!goldRef.current && p > 0.82) flood(lastPt ?? undefined);

      if (dirty && goldImg.complete && goldImg.naturalWidth) {
        ctx!.globalCompositeOperation = "source-over";
        ctx!.clearRect(0, 0, W, H);
        ctx!.drawImage(goldImg, 0, 0, W, H);
        ctx!.globalCompositeOperation = "destination-in";
        ctx!.drawImage(mask, 0, 0);
        dirty = false;
        if (++frames % 3 === 0) {
          const c = coverage();
          setPct(Math.round(c * 100));
          if (c >= FLOOD_AT) flood(lastPt ?? undefined);
        }
      }
    }

    // Pointer painting. Mouse and pen paint while moving; a tap gilds a generous patch.
    let down = false;
    function local(e: PointerEvent) {
      const r = canvas!.getBoundingClientRect();
      return { x: ((e.clientX - r.left) / r.width) * W, y: ((e.clientY - r.top) / r.height) * H };
    }
    const onMove = (e: PointerEvent) => {
      if (goldRef.current) return;
      if (e.pointerType === "mouse" || down) {
        const pt = local(e);
        stroke(lastPt, pt, W * (e.pointerType === "mouse" ? 0.05 : 0.07));
        lastPt = pt;
      }
    };
    const onDown = (e: PointerEvent) => {
      if (goldRef.current) return;
      down = true;
      const pt = local(e);
      stamp(pt.x, pt.y, W * (e.pointerType === "mouse" ? 0.07 : 0.12));
      lastPt = pt;
    };
    const onUp = () => { down = false; };
    const onLeave = () => { lastPt = null; };

    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointerleave", onLeave);
    addEventListener("pointerup", onUp);
    addEventListener("pointercancel", onUp);

    const ro = new ResizeObserver(size);
    ro.observe(king);
    marbleImg.onload = measureStatue;
    if (marbleImg.complete) measureStatue();
    goldImg.onload = () => { dirty = true; };
    size();

    if (reduce) {
      flood();
    } else {
      raf = requestAnimationFrame(tick);
    }

    // Pause the loop when the scene is off screen.
    const io = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(raf);
      if (entry.isIntersecting && !reduce) raf = requestAnimationFrame(tick);
    });
    io.observe(section);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("pointerleave", onLeave);
      removeEventListener("pointerup", onUp);
      removeEventListener("pointercancel", onUp);
    };
  }, [sectionId]);

  // The class lives on the section so the flood and the copy swap can see it.
  useEffect(() => {
    document.getElementById(sectionId)?.classList.toggle("is-gold", gold);
  }, [gold, sectionId]);

  return (
    <div className="sc-stage" data-sc-stage>
      <div className="touch__flood" aria-hidden="true" />
      <div className="touch__grid">
        <div className="touch__copy" aria-live="polite">
          <div className="touch__before" aria-hidden={gold}>
            <h2>Touch him.</h2>
            <p>
              Run your cursor over the king, or tap him on your phone. Everything you
              touch turns to gold.
            </p>
            <button type="button" className="btn btn--gold" onClick={() => setGold(true)} tabIndex={gold ? -1 : 0}>
              Turn him gold
            </button>
            <p className="touch__meter" aria-hidden="true">{pct > 0 ? `${pct}% gold` : " "}</p>
          </div>
          <div className="touch__after" aria-hidden={!gold}>
            <h2>Everything we touch turns to gold.</h2>
            <p>
              That is the job. One look, carried across every post, page and print, until
              people know your brand before they read your name.
            </p>
          </div>
        </div>
        <div className="touch__king" ref={kingRef}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={MARBLE} alt="A marble bust of a crowned king in mirrored sunglasses" width={1100} height={1524} />
          <canvas ref={canvasRef} aria-hidden="true" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="gold-full" src={GOLD} alt="" width={1100} height={1524} aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
