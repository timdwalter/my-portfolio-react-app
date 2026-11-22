import classNames from "classnames";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={classNames("relative scroll-mt-24 py-20 md:py-28", className)}>
      <div className="container">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  children,
  className,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={classNames("mb-12 max-w-2xl", className)}>
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
      {children && <div className="mt-4 text-lg leading-relaxed text-muted">{children}</div>}
    </Reveal>
  );
}

/** Fades content up once when it scrolls into view. */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
