"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { faqQuick } from "@/lib/site-config";

export default function FAQQuick() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-warm-grain py-16 sm:py-24">
      <Container size="narrow">
        <SectionHeading
          eyebrow="Questions fréquentes"
          title="Vos questions, nos réponses claires"
          description="Les 6 questions qu'on nous pose le plus. Vous avez la vôtre ? On y répond par téléphone ou par email."
        />

        <div className="space-y-3">
          {faqQuick.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article
                key={index}
                className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                  isOpen ? "border-primary shadow-card" : "border-border"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-base sm:text-lg font-bold text-primary-dark pr-4 m-0">
                    {item.question}
                  </h3>
                  <span
                    className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-lg transition-all ${
                      isOpen
                        ? "bg-primary text-white rotate-45"
                        : "bg-primary-50 text-primary"
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 -mt-1">
                      <p className="text-text-light leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-text-light mb-4">
            D&apos;autres questions ? On a une FAQ complète avec 30+ réponses.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button href="/faq" variant="outline" size="md">
              Voir la FAQ complète
            </Button>
            <Button href="/contact" variant="ghost" size="md">
              Posez votre question →
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
