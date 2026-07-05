"use client";

import { useEffect, useRef, useState } from "react";

type Direction = "up" | "left" | "right" | "zoom";

/**
 * Révèle son contenu quand il entre dans le viewport (IntersectionObserver).
 * Effet d'entrée fluide + délai optionnel pour créer un « stagger » élégant.
 * Respecte prefers-reduced-motion (géré en CSS).
 */
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Garde-fou : si l'API n'est pas disponible, on révèle immédiatement
    // pour ne jamais laisser de contenu masqué.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal={direction === "up" ? "" : direction}
      className={`${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
