import Link from "next/link";
import classNames from "classnames";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const styles = {
  primary:
    "bg-heading text-white hover:bg-brand-400",
  secondary: "border border-line-strong bg-white text-heading hover:border-heading",
  ghost: "text-brand-400 hover:text-brand-300 px-0",
};

/** Renders an internal Link, or a plain anchor for external/mailto URLs. */
export default function Button({ href, children, variant = "primary", className }: Props) {
  const cls = classNames(
    "group inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-200",
    styles[variant],
    className
  );
  const external = /^(https?:|mailto:)/.test(href);

  if (external) {
    const newTab = href.startsWith("http");
    return (
      <a href={href} className={cls} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={classNames("transition-transform group-hover:translate-x-1", className)}>
      →
    </span>
  );
}
