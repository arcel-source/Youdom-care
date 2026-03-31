"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
  { value: "500+", label: "Familles accompagnées" },
  { value: "98%", label: "Taux de satisfaction" },
  { value: "24/7", label: "Disponibilité" },
  { value: "50%", label: "Crédit d'impôt" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Message */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">
                Réponse garantie sous 2 heures
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              L&apos;aide à domicile{" "}
              <span className="text-secondary">sur mesure</span>{" "}
              qui change tout
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-xl">
              Des auxiliaires de vie d&apos;exception, dédiées à votre bien-être.
              Parce que vos proches méritent le meilleur accompagnement,
              à domicile, en toute sérénité.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/devis"
                className="bg-secondary hover:bg-secondary-light text-primary-dark font-bold px-8 py-4 rounded-full text-lg transition-all cta-glow text-center"
              >
                Obtenir mon Devis Gratuit →
              </Link>
              <a
                href="tel:+33667224507"
                className="border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-full text-lg transition-all text-center flex items-center justify-center gap-2"
              >
                📞 Nous Appeler
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-secondary">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-white/60 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Quick Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-text mb-2">
                  Devis gratuit en 2 min
                </h2>
                <p className="text-text-light text-sm">
                  Sans engagement — Nous vous rappelons sous 2h
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Prénom"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Nom"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Téléphone"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                />
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-text-light">
                  <option value="">Type de service souhaité</option>
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
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-light text-white font-bold py-4 rounded-xl transition-all text-lg"
                >
                  Recevoir mon Devis Gratuit
                </button>
                <p className="text-xs text-text-light text-center">
                  🔒 Vos données sont protégées et confidentielles
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
