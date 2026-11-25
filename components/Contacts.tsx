import { type ComponentType, type SVGProps } from "react";
import Link from "next/link";
import ChipMark from "@/components/ChipMark";
import { JOIN_CLUB_HREF } from "@/components/site";

type Social = {
  name: string;
  handle: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const socials: Social[] = [
  {
    name: "Instagram",
    handle: "@awsstudentbuildergroup_mait",
    href: "https://www.instagram.com/awsstudentbuildergroup_mait/",
    Icon: IconInstagram,
  },
  {
    name: "LinkedIn",
    handle: "Company page",
    href: "https://www.linkedin.com/company/aws-studentbuilder-groups-maitt/",
    Icon: IconLinkedIn,
  },
  {
    name: "Meetup",
    handle: "Events and RSVPs",
    href: JOIN_CLUB_HREF,
    Icon: IconMeetup,
  },
];

const pages = [
  { name: "About", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Team", href: "/team" },
  { name: "Community", href: "/community" },
];

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

// Home page ending: contact links + a centred sign-off.
// Used instead of the shared Footer on the home page only.
export default function Contacts() {
  return (
    <footer className="relative overflow-hidden px-6 pb-12 pt-16 lg:pt-24">
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

        {/* Link columns */}
        <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          <nav aria-label="Social links">
            <p className="mb-5 flex items-center gap-2 font-headline text-lg font-bold text-on-surface">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Follow us
            </p>
            <ul className="space-y-3">
              {socials.map(({ name, handle, href, Icon }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-2xl border border-primary/20 bg-surface-container-lowest p-2.5 pr-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:shadow-lg hover:shadow-primary/15"
                  >
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-on-primary transition-transform duration-300 group-hover:rotate-6">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1 leading-tight">
                      <span className="block font-headline text-base font-bold text-on-surface">
                        {name}
                      </span>
                      <span className="block truncate text-xs text-on-surface-variant">
                        {handle}
                      </span>
                    </span>
                    <span className="material-symbols-outlined text-lg text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      arrow_outward
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Pages">
            <p className="mb-5 flex items-center gap-2 font-headline text-lg font-bold text-on-surface">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Explore
            </p>
            <ul className="grid grid-cols-2 gap-3 md:grid-cols-1 lg:grid-cols-2">
              {pages.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between gap-2 rounded-full border-2 border-on-surface px-5 py-3 font-headline text-sm font-bold uppercase tracking-wide text-on-surface transition-all duration-300 hover:border-primary hover:bg-primary hover:text-on-primary"
                  >
                    {link.name}
                    <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-5 inline-block font-headline text-lg font-bold text-on-surface underline decoration-primary decoration-wavy decoration-2 underline-offset-[6px]">
              Join our community
            </p>
            <p className="mb-5 max-w-xs font-body text-sm leading-relaxed text-on-surface-variant">
              Get every workshop, hackathon and session first on our Meetup
              page.
            </p>
            <Link
              href={JOIN_CLUB_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-on-surface px-6 py-3 font-label text-sm font-bold uppercase tracking-wide text-surface transition-all hover:bg-primary"
            >
              Join on Meetup
              <span className="material-symbols-outlined text-lg">
                arrow_outward
              </span>
            </Link>
          </div>
        </div>

        {/* Sign-off: centred name, no year so it never goes out of date */}
        <div className="relative mt-20 border-t border-outline-variant/70 pt-14 text-center lg:mt-24 lg:pt-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-10 -z-10 h-48 w-[min(640px,90%)] -translate-x-1/2 rounded-full bg-primary-fixed-dim/35 blur-[80px]"
          />
          <p className="whitespace-nowrap bg-gradient-to-br from-on-secondary-fixed-variant via-primary to-secondary bg-clip-text pb-2 font-headline text-[clamp(1.3rem,6vw,5.4rem)] font-black leading-[1.05] tracking-[-0.03em] text-transparent">
            AWS Student Builder Group
          </p>
          <p className="mt-2 font-label text-sm font-bold uppercase tracking-[0.5em] text-on-surface sm:text-base">
            MAIT
          </p>
          <p className="mt-6 font-body text-sm text-on-surface-variant">
            Built in the pixelated stratosphere.
          </p>
          <a
            href="#"
            className="group mt-8 inline-flex items-center gap-2 font-label text-xs font-bold uppercase tracking-[0.2em] text-primary"
          >
            Back to top
            <span className="material-symbols-outlined text-base transition-transform group-hover:-translate-y-1">
              arrow_upward
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

function IconInstagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconLinkedIn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <circle cx="8" cy="9" r="1" fill="currentColor" stroke="none" />
      <path d="M7 11v6" />
      <path d="M11 11v6" />
      <path d="M11 13.5c0-1.4 1-2.5 2.4-2.5S16 12.1 16 13.5V17" />
    </svg>
  );
}

function IconMeetup(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <path d="M6 16.8 9.4 8a1 1 0 0 1 1.9.2v4.5l1.6-3.7a1 1 0 0 1 1.9.2V15l1.2-2.2a1 1 0 0 1 1.8 1l-2.1 4a1.8 1.8 0 0 1-3.4-.8V13l-1.4 3.2a1.8 1.8 0 0 1-3.4-.8V12l-1.2 3.4A1 1 0 1 1 4.4 15L6 16.8Z" />
    </svg>
  );
}
