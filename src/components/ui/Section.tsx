import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  variant?: "white" | "warm" | "cream" | "dark" | "primary" | "gradient" | "warm-grain";
  spacing?: "sm" | "md" | "lg" | "xl";
  className?: string;
  id?: string;
};

const variants = {
  white: "bg-white",
  warm: "bg-warm",
  cream: "bg-cream",
  dark: "bg-primary-dark text-white",
  primary: "bg-primary text-white",
  gradient: "bg-hero-gradient text-white",
  "warm-grain": "bg-warm-grain",
};

const spacings = {
  sm: "py-10 sm:py-14",
  md: "py-14 sm:py-20",
  lg: "py-20 sm:py-28",
  xl: "py-24 sm:py-32",
};

export default function Section({
  children,
  variant = "white",
  spacing = "md",
  className = "",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative ${variants[variant]} ${spacings[spacing]} ${className}`}
    >
      {children}
    </section>
  );
}
