import type { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from "react";
import { Link, type LinkProps } from "react-router-dom";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary:
    "bg-brand-600 text-white shadow-lg shadow-brand-900/20 hover:bg-brand-700 hover:shadow-xl hover:-translate-y-0.5 focus-visible:ring-brand-500",
  accent:
    "bg-amber-glow text-ink-950 shadow-lg shadow-amber-900/20 hover:brightness-105 hover:-translate-y-0.5 focus-visible:ring-amber-glow",
  ghost:
    "bg-white/10 text-white backdrop-blur border border-white/25 hover:bg-white/20 focus-visible:ring-white",
  outline:
    "border-2 border-brand-600 text-brand-700 hover:bg-brand-50 focus-visible:ring-brand-500",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-[0.95rem]",
  lg: "px-8 py-4 text-base",
};

type CommonProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: PropsWithChildren<CommonProps & ButtonHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: PropsWithChildren<CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>>) {
  return (
    <a className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </a>
  );
}

export function RouteButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: PropsWithChildren<CommonProps & LinkProps>) {
  return (
    <Link className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </Link>
  );
}
