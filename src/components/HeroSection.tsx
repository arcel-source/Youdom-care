"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

/* ── Animated counter ── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, target, { duration: 2.5, ease: "easeOut" });
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return () => { controls.stop(); unsub(); };
  }, [count, rounded, target]);

  return <>{display}{suffix}</>;
}

/* ── Floating particles ── */
function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10"
          style={{
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -80 - Math.random() * 120],
            x: [0, (Math.random() - 0.5) * 60],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ── Rotating words ── */
const words = ["sur mesure", "bienveillante", "de confiance", "d'exception"];

function RotatingWord() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setIndex((i) => (i + 1) % words.length), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block h-[1.2em] align-bottom overflow-hidden min-w-[280px] md:min-w-[340px]">
      {words.map((word, i) => (
        <motion.span
          key={word}
          className="absolute left-0 top-0 text-secondary whitespace-nowrap"
          initial={{ y: "100%", opacity: 0 }}
          animate={i === index ? { y: "0%", opacity: 1 } : { y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

/* ── Stats data ── */
const stats = [
  { value: 500, suffix: "+", label: "Familles accompagnées", icon: "👨‍👩‍👧‍👦" },
  { value: 98, suffix: "%", label: "Taux de satisfaction", icon: "⭐" },
  { value: 24, suffix: "/7", label: "Disponibilité", icon: "🕐" },
  { value: 50, suffix: "%", label: "Crédit d'impôt", icon: "💰" },
];

export default function HeroSection() {
  const formRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* ── Animated background ── */}
      <div className="absolute inset-0">
        {/* Main gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-primary-dark to-primary" />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-secondary/20 blur-[120px]"
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent/15 blur-[100px]"
          animate={{ scale: [1, 1.3, 1], x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full bg-primary-light/10 blur-[80px]"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Particles */}
        <Particles />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ─── Left: Message ─── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {/* Trust badge with pulse */}
            <motion.div
              className="inline-flex items-center gap-2 bg-white/[0.07] backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
              </span>
              <span className="text-white/90 text-sm font-medium">
                ✅ Réponse garantie sous 2 heures
              </span>
            </motion.div>

            {/* Heading with rotating word */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.3] mb-6">
              L&apos;aide à domicile
              <br />
              <RotatingWord />
              <br />
              <span className="text-white/90">qui change tout.</span>
            </h1>

            <motion.p
              className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Des auxiliaires de vie d&apos;exception, dédiées au bien-être de vos proches.
              <span className="text-white font-medium"> Paris &amp; Île-de-France — 24h/24, 7j/7.</span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-14"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Link
                href="/devis"
                className="group relative bg-secondary hover:bg-secondary-light text-primary-dark font-bold px-8 py-4 rounded-full text-lg transition-all cta-glow text-center overflow-hidden"
              >
                <span className="relative z-10">Obtenir mon Devis Gratuit →</span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-light to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <a
                href="tel:+33667224507"
                className="group border-2 border-white/20 hover:border-white/50 hover:bg-white/5 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all text-center flex items-center justify-center gap-2"
              >
                <span className="group-hover:animate-bounce">📞</span> Nous Appeler
              </a>
            </motion.div>

            {/* Stats with animated counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + i * 0.15 }}
                  className="bg-white/[0.05] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-4 text-center hover:bg-white/[0.08] transition-colors"
                >
                  <div className="text-lg mb-1">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold text-secondary">
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[11px] md:text-xs text-white/50 mt-1 leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ─── Right: Form card ─── */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, y: 50, rotateY: -5 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="perspective-1000"
          >
            <div className="relative">
              {/* Glow behind card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary/30 via-accent/20 to-secondary/30 rounded-[2rem] blur-xl opacity-60" />

              <div className="relative bg-white/[0.95] backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50">
                {/* Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    ⚡ Réponse sous 2h
                  </div>
                </div>

                <div className="text-center mb-6 mt-2">
                  <h2 className="text-2xl font-bold text-text">
                    Devis <span className="text-secondary">gratuit</span> en 2 min
                  </h2>
                  <p className="text-text-light text-sm mt-1">
                    Sans engagement • 100% confidentiel
                  </p>
                </div>

                <form className="space-y-3.5">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Prénom"
                        className="w-full px-4 py-3 rounded-xl bg-warm border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Nom"
                        className="w-full px-4 py-3 rounded-xl bg-warm border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                      />
                    </div>
                  </div>
                  <input
                    type="tel"
                    placeholder="📱 Téléphone"
                    className="w-full px-4 py-3 rounded-xl bg-warm border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                  />
                  <input
                    type="email"
                    placeholder="✉️ Email"
                    className="w-full px-4 py-3 rounded-xl bg-warm border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                  />
                  <select className="w-full px-4 py-3 rounded-xl bg-warm border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-text-light">
                    <option value="">🏥 Type de service souhaité</option>
                    <option>Aide à l&apos;autonomie</option>
                    <option>Garde de nuit</option>
                    <option>Aide au handicap</option>
                    <option>Transport PMR</option>
                    <option>Aide ménagère</option>
                    <option>Retour d&apos;hospitalisation</option>
                    <option>Téléassistance</option>
                    <option>Autre</option>
                  </select>
                  <textarea
                    placeholder="Décrivez brièvement votre besoin..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-warm border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"
                  />

                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white font-bold py-4 rounded-xl transition-all text-lg shadow-lg shadow-primary/25"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Recevoir mon Devis Gratuit ✨
                  </motion.button>

                  <div className="flex items-center justify-center gap-4 pt-1">
                    <span className="text-[11px] text-text-light flex items-center gap-1">🔒 Données protégées</span>
                    <span className="text-[11px] text-text-light flex items-center gap-1">⚡ Réponse rapide</span>
                    <span className="text-[11px] text-text-light flex items-center gap-1">💯 Sans engagement</span>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/40 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
