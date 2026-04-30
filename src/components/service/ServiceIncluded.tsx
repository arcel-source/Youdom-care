import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export type IncludedItem = {
  icon: string;
  title: string;
  description: string;
};

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  items: IncludedItem[];
  layout?: "grid" | "list";
};

export default function ServiceIncluded({
  eyebrow = "Concrètement",
  title,
  description,
  items,
  layout = "grid",
}: Props) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        {layout === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {items.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-5 sm:p-6 rounded-2xl bg-warm border border-transparent hover:border-primary hover:bg-white transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-2xl shrink-0 shadow-card" aria-hidden="true">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-primary-dark text-base mb-1">{item.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4 max-w-3xl mx-auto">
            {items.map((item, idx) => (
              <div
                key={item.title}
                className="flex gap-5 items-start p-5 sm:p-6 rounded-2xl bg-warm border border-transparent hover:border-primary transition-colors"
              >
                <div
                  className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0"
                  aria-hidden="true"
                >
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl" aria-hidden="true">{item.icon}</span>
                    <h3 className="font-bold text-primary-dark text-base m-0">{item.title}</h3>
                  </div>
                  <p className="text-sm text-text-light leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
