import Link from "next/link";
import { JOIN_CLUB_HREF } from "@/components/site";

export default function CTA() {
  return (
    <section className="px-6 pb-24 pt-4 lg:pb-32">
      <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-primary/15 bg-secondary-fixed px-6 py-16 text-center sm:px-12 md:py-24 lg:rounded-[3rem]">
        {/* Background: soft glows + thin orbit rings (CSS/SVG only) */}
        <div className="pointer-events-none absolute -left-24 -top-24 -z-10 h-80 w-80 rounded-full bg-primary/30 blur-[90px]" />
        <div className="pointer-events-none absolute -bottom-28 -right-20 -z-10 h-80 w-80 rounded-full bg-secondary/25 blur-[100px]" />
        <svg
          aria-hidden="true"
          viewBox="0 0 800 800"
          fill="none"
          stroke="currentColor"
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[170%] min-h-[640px] -translate-x-1/2 -translate-y-1/2 text-primary/20"
        >
          <circle cx="400" cy="400" r="130" />
          <circle cx="400" cy="400" r="210" />
          <circle cx="400" cy="400" r="290" strokeDasharray="4 8" />
          <circle cx="400" cy="400" r="370" />
          <circle cx="610" cy="400" r="7" className="fill-primary" stroke="none" />
          <circle cx="195" cy="195" r="5" className="fill-secondary" stroke="none" />
        </svg>

        <p className="mb-4 font-label text-xs font-bold uppercase tracking-[0.15rem] text-secondary">
          Ready for lift off?
        </p>
        <h2 className="mb-6 font-headline text-4xl font-extrabold leading-[1.05] tracking-tight text-balance text-on-surface sm:text-5xl md:text-7xl">
          THE CLOUD IS{" "}
          <span className="bg-gradient-to-br from-on-secondary-fixed-variant via-primary to-secondary bg-clip-text text-transparent">
            CALLING.
          </span>
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-on-surface-variant text-balance sm:text-lg md:text-xl">
          Join 100+ students from MAIT learning, building and shipping on AWS
          together.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={JOIN_CLUB_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-on-primary-fixed bg-primary px-10 py-4 font-headline text-base font-black uppercase text-on-primary pixel-hard-shadow transition-all hover:scale-105 active:scale-95 sm:w-auto md:text-lg"
          >
            Join the club
            <span className="material-symbols-outlined">arrow_outward</span>
          </Link>
          <Link
            href="/events"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-on-surface/70 px-10 py-4 font-headline text-base font-bold uppercase text-on-surface transition-all hover:bg-on-surface hover:text-surface sm:w-auto md:text-lg"
          >
            See our events
          </Link>
        </div>
      </div>
    </section>
  );
}
