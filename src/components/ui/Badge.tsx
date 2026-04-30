import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "success" | "warm" | "white" | "dark";
  size?: "sm" | "md";
  className?: string;
};

const variants = {
  primary: "bg-primary-50 text-primary border-primary-100",
  secondary: "bg-secondary-50 text-secondary-dark border-secondary/30",
  accent: "bg-accent-50 text-accent-dark border-accent/20",
  success: "bg-success-50 text-success border-success/20",
  warm: "bg-warm text-text border-warm-dark",
  white: "bg-white text-primary border-white/30",
  dark: "bg-primary-dark text-white border-primary",
};

const sizes = {
  sm: "px-2.5 py-1 text-xs",
  md: "px-3.5 py-1.5 text-sm",
};

export default function Badge({
  children,
  variant = "primary",
  size = "sm",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-semibold rounded-full border ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </span>
  );
}
