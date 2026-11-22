import Link from "next/link";

export function HexMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="none">
      <path
        d="M16 2.5 27.7 9.25v13.5L16 29.5 4.3 22.75V9.25L16 2.5Z"
        className="stroke-muted"
        strokeWidth="1.5"
      />
      {/* cube – same mark as the favicon */}
      <path d="M16 8.6 22.6 12.4 16 16.2 9.4 12.4Z" fill="#a5f3fc" />
      <path d="M9.4 12.4 16 16.2v7.2l-6.6-3.8Z" fill="#3dd8f5" />
      <path d="M22.6 12.4v7.2L16 23.4v-7.2Z" fill="#0e9fc0" />
    </svg>
  );
}

export default function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label="TimTech Solutions – Home">
      <HexMark className="h-8 w-8 transition-transform duration-500 group-hover:rotate-[60deg]" />
      <span className="font-display text-[15px] font-semibold leading-none tracking-wide text-heading">
        TIM<span className="text-brand-400">TECH</span>
        <span className="mt-1 block font-mono text-[9px] font-normal tracking-[0.3em] text-muted">
          SOLUTIONS
        </span>
      </span>
    </Link>
  );
}
