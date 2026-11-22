import Link from "next/link";

export function HexMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="none">
      <path
        d="M16 2.5 27.7 9.25v13.5L16 29.5 4.3 22.75V9.25L16 2.5Z"
        className="stroke-muted"
        strokeWidth="1.5"
      />
      {/* cube in the accent's three tones – same mark as the favicon */}
      <path d="M16 8.6 22.6 12.4 16 16.2 9.4 12.4Z" className="fill-accent-light" />
      <path d="M9.4 12.4 16 16.2v7.2l-6.6-3.8Z" className="fill-accent" />
      <path d="M22.6 12.4v7.2L16 23.4v-7.2Z" className="fill-accent-dark" />
    </svg>
  );
}

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-sm" aria-label="TimTech Solutions – Home">
      <HexMark className="h-8 w-8" />
      <span className="font-sans text-[15px] font-semibold leading-none tracking-[0.04em] text-ink">
        TIM<span className="text-accent">TECH</span>
        <span className="mt-xs block font-sans text-[11px] font-medium tracking-[0.18em] text-muted">
          SOLUTIONS
        </span>
      </span>
    </Link>
  );
}
