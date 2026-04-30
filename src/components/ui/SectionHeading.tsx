import { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  invert = false,
  className = "",
}: Props) {
  return (
    <div
      className={`${align === "center" ? "text-center mx-auto" : "text-left"} max-w-3xl mb-10 sm:mb-14 ${className}`}
    >
      {eyebrow ? (
        <span
          className={`eyebrow ${invert ? "!text-secondary" : ""}`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2 className={invert ? "text-white" : ""}>{title}</h2>
      {description ? (
        <p
          className={`lead mt-4 ${invert ? "!text-white/80" : ""}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
