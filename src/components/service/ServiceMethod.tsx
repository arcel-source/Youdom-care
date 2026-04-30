import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export type MethodPoint = {
  title: string;
  description: string;
};

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  points: MethodPoint[];
  image: string;
  imageAlt: string;
};

export default function ServiceMethod({
  eyebrow = "Notre approche",
  title,
  description,
  points,
  image,
  imageAlt,
}: Props) {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <Container size="wide">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative h-80 sm:h-[460px] rounded-3xl overflow-hidden shadow-lifted">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              description={description}
              align="left"
            />

            <ol className="space-y-5">
              {points.map((point, idx) => (
                <li key={point.title} className="flex gap-5">
                  <div className="shrink-0">
                    <div className="w-11 h-11 rounded-full border-2 border-primary text-primary font-bold flex items-center justify-center bg-white">
                      {idx + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-dark text-base mb-1">
                      {point.title}
                    </h3>
                    <p className="text-sm text-text-light leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
