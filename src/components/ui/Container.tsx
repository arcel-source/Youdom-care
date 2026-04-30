import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  size?: "narrow" | "default" | "wide" | "full";
  className?: string;
};

const sizes = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
  full: "max-w-screen-2xl",
};

export default function Container({
  children,
  size = "default",
  className = "",
}: ContainerProps) {
  return (
    <div className={`${sizes[size]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
