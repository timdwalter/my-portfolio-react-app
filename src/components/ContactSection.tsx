import { mailto, site } from "@/content/site";
import { useT } from "@/lib/i18n";

/** Closing block on every page: ink ground, LinkedIn as the primary action, email beside it. */
export default function ContactSection() {
  const t = useT();
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-xl py-xl lg:py-2xl">
      <div className="container">
        <div className="-mx-md bg-ink px-md py-xl text-paper md:-mx-lg md:px-lg lg:-mx-xl lg:px-xl lg:py-2xl">
          <div className="grid-12 gap-y-lg">
            <div className="col-meta">
              <h2 id="contact-title" className="text-[2rem] leading-tight text-paper lg:text-[2.5rem]">
                {t.contact.eyebrow}
              </h2>
            </div>
            <div className="col-main">
              <p className="max-w-[34ch] font-display text-[1.75rem] leading-snug text-paper lg:text-[2.25rem]">
                {t.contact.text}
              </p>
              <div className="mt-xl flex flex-wrap items-center gap-x-lg gap-y-md">
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center border border-paper bg-paper px-lg py-sm text-[0.9375rem] font-medium leading-7 text-ink transition-colors hover:bg-transparent hover:text-paper"
                >
                  {t.contact.linkedin}
                </a>
                <a
                  href={mailto(t.contact.subject)}
                  className="text-[0.9375rem] text-paper underline decoration-paper/40 underline-offset-4 transition-colors hover:decoration-paper"
                >
                  {t.contact.email}
                </a>
              </div>
              <p className="mt-md font-mono text-[0.8125rem] text-paper/70">{site.email}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
