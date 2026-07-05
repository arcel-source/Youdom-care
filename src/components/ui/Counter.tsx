"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Compteur animé qui s'incrémente jusqu'à `value` lorsqu'il devient visible.
 * Effet « wouah » sur les chiffres clés (statistiques de marque).
 */
export default function Counter({
  value,
  duration = 1600,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
}: {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(value);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              // easeOutExpo pour une accélération franche puis douce
              const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
              setDisplay(value * eased);
              if (t < 1) requestAnimationFrame(tick);
              else setDisplay(value);
            };
            requestAnimationFrame(tick);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, duration]);

  const formatted = display.toLocaleString("fr-FR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
