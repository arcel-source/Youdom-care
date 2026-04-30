import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export type PainPoint = {
  icon: string;
  title: string;
  description: string;
};

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  items: PainPoint[];
};

export default function ServicePainPoints({
  eyebrow = "Le contexte",
  title,
  description,
  items,
}: Props) {
  return (
    <section className="bg-warm-grain py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 border border-border shadow-card hover:shadow-lifted transition-shadow"
            >
              <div
                className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center text-2xl mb-4"
                aria-hidden="true"
              >
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-primary-dark mb-2">{item.title}</h3>
              <p className="text-sm text-text-light leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
