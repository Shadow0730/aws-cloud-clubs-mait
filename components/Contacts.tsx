import ChipMark from "@/components/ChipMark";

// Thin line that runs into the big word, like a signal trace
function Trace({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 160"
      fill="none"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="none"
    >
      <path
        d="M0 120 L40 20 Q50 0 60 20 L95 130 Q105 150 115 130 L160 80 L300 80"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="160" cy="80" r="6" className="fill-primary" />
    </svg>
  );
}

// Home page "Contact" heading. The shared Footer renders below it.
export default function Contacts() {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-16 lg:pt-24">
      <div className="relative mx-auto max-w-7xl">
        {/* Big word row, with its own faint grid behind it */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-y-10 left-1/2 -z-10 w-screen -translate-x-1/2 opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--color-outline-variant) 1px, transparent 1px), linear-gradient(to bottom, var(--color-outline-variant) 1px, transparent 1px)",
              backgroundSize: "120px 120px",
              maskImage:
                "radial-gradient(ellipse at center, black 25%, transparent 70%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 25%, transparent 70%)",
            }}
          />

          {/* Small tilted tag (decoration) */}
          <span
            aria-hidden="true"
            className="absolute -top-8 left-[16%] hidden -rotate-6 rounded-lg bg-secondary-fixed px-2.5 py-1 font-label text-xs font-black text-on-secondary-fixed-variant lg:block"
          >
            AWS
          </span>

          <div className="flex items-center justify-center gap-4 lg:justify-start">
            <Trace className="hidden h-40 w-[26%] shrink-0 text-on-surface lg:block" />
            <h2
              aria-label="Contact"
              className="shrink-0 font-headline font-medium leading-none tracking-[-0.04em] text-on-surface"
              style={{ fontSize: "clamp(3.2rem, 13vw, 9.5rem)" }}
            >
              <span aria-hidden="true" className="flex items-center">
                C
                <ChipMark className="mx-[0.06em] h-[0.74em] w-[0.74em] text-primary" />
                NTACT
              </span>
            </h2>
            {/* Line starts right after the word and runs to the edge */}
            <span className="hidden h-0.5 flex-1 bg-on-surface lg:block" />
            <span className="-ml-4 hidden h-3 w-3 shrink-0 rounded-full bg-primary lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
