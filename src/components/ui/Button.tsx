import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "white" | "dark";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  glow?: boolean;
  fullWidth?: boolean;
  icon?: ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
  onClick?: never;
  type?: never;
};

type ButtonAsButton = CommonProps & {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variants: Record<Variant, string> = {
  primary:
    "bg-secondary hover:bg-secondary-light text-primary-dark border border-transparent",
  secondary:
    "bg-primary hover:bg-primary-light text-white border border-transparent",
  outline:
    "bg-transparent hover:bg-primary hover:text-white text-primary border-2 border-primary",
  ghost:
    "bg-transparent hover:bg-primary-50 text-primary border border-transparent",
  white:
    "bg-white hover:bg-warm text-primary-dark border border-transparent",
  dark:
    "bg-primary-dark hover:bg-primary text-white border border-transparent",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm min-h-[40px] rounded-lg",
  md: "px-6 py-3 text-base min-h-[48px] rounded-xl",
  lg: "px-8 py-4 text-lg min-h-[56px] rounded-xl",
};

export default function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    className = "",
    glow = false,
    fullWidth = false,
    icon,
  } = props;

  const classes = [
    "inline-flex items-center justify-center gap-2 font-bold",
    "transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30",
    variants[variant],
    sizes[size],
    glow && variant === "primary" ? "cta-glow" : "",
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon ? <span className="shrink-0">{icon}</span> : null}
      <span>{children}</span>
    </>
  );

  if ("href" in props && props.href !== undefined) {
    if (props.external || props.href.startsWith("tel:") || props.href.startsWith("mailto:")) {
      return (
        <a href={props.href} className={classes}>
          {content}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={props.type ?? "button"} onClick={props.onClick} className={classes}>
      {content}
    </button>
  );
}
