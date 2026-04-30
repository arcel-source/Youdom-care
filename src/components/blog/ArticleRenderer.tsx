import type { ArticleBlock } from "@/lib/blog-articles";

const calloutStyles = {
  info: {
    bg: "bg-primary-50",
    border: "border-primary",
    icon: "💡",
    iconBg: "bg-primary text-white",
  },
  warning: {
    bg: "bg-secondary-50",
    border: "border-secondary",
    icon: "⚠️",
    iconBg: "bg-secondary text-primary-dark",
  },
  success: {
    bg: "bg-success-50",
    border: "border-success",
    icon: "✓",
    iconBg: "bg-success text-white",
  },
} as const;

export default function ArticleRenderer({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="prose-article">
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "p":
            return (
              <p key={idx} className="text-text leading-relaxed text-lg mb-5">
                {block.text}
              </p>
            );
          case "h2":
            return (
              <h2 key={idx} className="text-primary-dark mt-12 mb-4">
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={idx} className="text-primary-dark mt-8 mb-3">
                {block.text}
              </h3>
            );
          case "ul":
            return (
              <ul key={idx} className="space-y-2 mb-6 pl-1">
                {block.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-text leading-relaxed"
                  >
                    <span className="text-secondary text-xl shrink-0 leading-none mt-1" aria-hidden="true">
                      ◆
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={idx} className="space-y-3 mb-6 pl-1 counter-reset">
                {block.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-text leading-relaxed"
                  >
                    <span className="w-7 h-7 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span className="pt-0.5">{item}</span>
                  </li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote
                key={idx}
                className="my-8 pl-6 border-l-4 border-secondary bg-warm py-5 px-6 rounded-r-2xl"
              >
                <p className="text-lg italic text-primary-dark leading-relaxed mb-2">
                  &ldquo;{block.text}&rdquo;
                </p>
                {block.author ? (
                  <cite className="text-sm not-italic text-text-light font-semibold">
                    — {block.author}
                  </cite>
                ) : null}
              </blockquote>
            );
          case "callout": {
            const s = calloutStyles[block.variant];
            return (
              <aside
                key={idx}
                className={`my-8 p-6 rounded-2xl border-2 ${s.bg} ${s.border} flex gap-4`}
              >
                <div
                  className={`w-10 h-10 rounded-full ${s.iconBg} flex items-center justify-center text-lg shrink-0`}
                  aria-hidden="true"
                >
                  {s.icon}
                </div>
                <div>
                  <h4 className="font-bold text-primary-dark text-base mb-1.5 m-0">
                    {block.title}
                  </h4>
                  <p className="text-text leading-relaxed m-0">{block.text}</p>
                </div>
              </aside>
            );
          }
          default:
            return null;
        }
      })}
    </div>
  );
}
