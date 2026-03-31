"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
        >
          <a
            href="tel:+33667224507"
            className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
            aria-label="Appeler"
          >
            <span className="text-2xl">📞</span>
          </a>
          <Link
            href="/devis"
            className="bg-secondary hover:bg-secondary-light text-primary-dark font-bold px-5 py-3 rounded-full shadow-xl cta-glow animate-pulse-soft text-sm text-center"
          >
            Devis Gratuit
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
