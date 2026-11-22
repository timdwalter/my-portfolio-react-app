import { motion } from "framer-motion";
import type { ReactNode } from "react";
import HexBackground from "./ui/HexBackground";

export default function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-10 pt-32 md:pb-16 md:pt-44">
      <HexBackground />
      <motion.div
        className="container relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <p className="eyebrow mb-5">{eyebrow}</p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">{title}</h1>
        {children && <div className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">{children}</div>}
      </motion.div>
    </section>
  );
}
