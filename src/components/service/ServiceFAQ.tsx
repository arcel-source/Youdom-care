"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  title?: string;
  description?: string;
  items: FAQItem[];
};

export default function ServiceFAQ({
  title = "Questions fréquentes sur ce service",
  description,
  items,
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-warm-grain py-16 sm:py-20">
      <Container size="narrow">
        <SectionHeading eyebrow="On vous répond" title={title} description={description} />

        <div className="space-y-3">
          {items.map((item, index) => {
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
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 -mt-1 text-text-light leading-relaxed whitespace-pre-line">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-text-light mb-4">Vous avez une autre question ?</p>
          <Button href="/contact" variant="outline" size="md">
            Posez-la-nous directement
          </Button>
        </div>
      </Container>
    </section>
  );
}
