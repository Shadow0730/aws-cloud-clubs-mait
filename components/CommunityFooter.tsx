import Link from "next/link";
import { type SVGProps } from "react";

const COMMUNITY_JOIN_HREF =
  "https://www.meetup.com/aws-sbg-at-maharaja-agrasen-institute-of-technology/";

const EXPLORE_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Events", href: "/events" },
  { name: "Team", href: "/team" },
  { name: "Community", href: "/community" },
];

const CONNECT_LINKS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/aws-studentbuilder-groups-maitt/",
    Icon: IconLinkedIn,
    isExternal: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/awsstudentbuildergroup_mait?vrfl=MTdkMG44Y2llaHYwcQ%3D%3D&utm_source=qr",
    Icon: IconInstagram,
    isExternal: true,
  },
  {
    name: "Meetup",
    href: "https://www.meetup.com/aws-sbg-at-maharaja-agrasen-institute-of-technology/",
    Icon: IconMeetup,
    isExternal: true,
  },
  {
    name: "Email",
    href: "mailto:awsacademymait@gmail.com",
    Icon: IconEmail,
    isExternal: false,
  },
];

export default function CommunityFooter() {
  return (
    <footer className="relative w-full overflow-hidden bg-background pt-8 pb-12 sm:pt-12 sm:pb-16 text-on-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* CLOSING CTA CARD */}
        <section
          aria-label="Join the community"
          className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] border border-[#d8c4fd]/60 bg-gradient-to-br from-[#f2ebff] via-[#e8dcff] to-[#d8c4fd] p-8 sm:p-12 md:p-14 lg:p-16 shadow-[0_20px_50px_rgba(124,58,237,0.08)]"
        >
          {/* Subtle cloud shapes in background */}
          <div
            className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-white/40 blur-2xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -top-12 right-1/4 h-56 w-56 rounded-full bg-[#fcfaff]/50 blur-xl"
            aria-hidden="true"
          />
          <svg
            className="pointer-events-none absolute right-0 bottom-0 h-48 w-auto text-white/30"
            viewBox="0 0 400 200"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M120 180 c20-40 60-60 100-40 c30-50 90-50 120-10 c20-10 50-5 60 20 c10 30-10 60-30 60 H120 z" />
          </svg>

          {/* Sparkle decorative star */}
          <div
            className="pointer-events-none absolute top-8 right-8 text-primary sm:top-10 sm:right-12"
            aria-hidden="true"
          >
            <svg
              className="h-6 w-6 sm:h-7 sm:w-7 animate-pulse text-[#6d28d9]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              {/* Eyebrow */}
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-primary" aria-hidden="true" />
                <span className="font-headline text-xs font-bold uppercase tracking-[0.2em] text-[#6d28d9]">
                  AWS CLOUD CLUBS · MAIT
                </span>
              </div>

              {/* Headline */}
              <h2 className="mt-4 font-headline text-3xl font-black tracking-tight text-[#1e0847] sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.12]">
                Build your next big thing with your people.
              </h2>

              {/* Subtitle */}
              <p className="mt-4 font-body text-base font-normal text-[#5b5666] sm:text-lg">
                Learn, collaborate and grow with a community of cloud enthusiasts.
              </p>
            </div>

            {/* CTA Button */}
            <div className="w-full shrink-0 lg:w-auto">
              <Link
                href={COMMUNITY_JOIN_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-[#6d28d9] px-7 py-3.5 sm:px-9 sm:py-4 font-headline text-sm sm:text-base font-black tracking-wide text-white shadow-[0_10px_25px_rgba(109,40,217,0.35)] transition-all duration-300 hover:bg-[#5b21b6] hover:shadow-[0_14px_30px_rgba(109,40,217,0.45)] hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6d28d9] lg:w-auto"
              >
                <span>JOIN THE COMMUNITY</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* 3-COLUMN FOOTER GRID */}
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-12 lg:gap-12 items-start">
          {/* COLUMN 1: BRAND */}
          <div className="flex items-start gap-4 sm:col-span-2 md:col-span-5 lg:col-span-4">
            {/* Cloud Avatar Emblem matching mockup */}
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#ede4ff] p-3 text-[#5b21b6] shadow-sm">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-10 w-10 text-[#5b21b6]"
                aria-hidden="true"
              >
                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                <circle cx="12" cy="14" r="1.5" fill="currentColor" stroke="none" />
                <circle cx="9" cy="15" r="1.2" fill="currentColor" stroke="none" />
                <circle cx="15" cy="15" r="1.2" fill="currentColor" stroke="none" />
              </svg>
            </div>

            <div className="flex flex-col">
              <Link
                href="/"
                className="font-headline text-xl font-black tracking-tight text-[#1e0847] transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6d28d9] rounded sm:text-2xl"
              >
                AWS Cloud Clubs MAIT
              </Link>
              <p className="mt-2 max-w-xs font-body text-sm leading-relaxed text-[#5b5666] sm:text-base">
                A space for builders, learners and cloud enthusiasts to connect and create.
              </p>
            </div>
          </div>

          {/* COLUMN 2: EXPLORE */}
          <div className="md:col-span-4 lg:col-span-5">
            <h3 className="font-headline text-xs font-black uppercase tracking-[0.2em] text-[#6d28d9]">
              EXPLORE
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 sm:flex sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-2 lg:flex-nowrap lg:gap-x-3.5 font-body text-sm sm:text-base">
              {EXPLORE_LINKS.map((item, index) => (
                <li key={item.name} className="flex items-center gap-3 lg:gap-3.5">
                  <Link
                    href={item.href}
                    className="inline-flex min-h-[44px] sm:min-h-0 items-center py-0.5 whitespace-nowrap font-medium text-[#2e1065] transition-colors duration-200 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6d28d9] rounded"
                  >
                    {item.name}
                  </Link>
                  {index < EXPLORE_LINKS.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="hidden sm:inline text-[#c9c3d4] select-none"
                    >
                      |
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: CONNECT */}
          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="font-headline text-xs font-black uppercase tracking-[0.2em] text-[#6d28d9]">
              CONNECT
            </h3>
            <ul className="mt-5 space-y-3.5 font-body text-sm sm:text-base">
              {CONNECT_LINKS.map((channel) => {
                const { Icon } = channel;
                return (
                  <li key={channel.name}>
                    <a
                      href={channel.href}
                      target={channel.isExternal ? "_blank" : undefined}
                      rel={channel.isExternal ? "noopener noreferrer" : undefined}
                      className="group inline-flex min-h-[44px] items-center gap-3 font-medium text-[#2e1065] transition-colors duration-200 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6d28d9] rounded"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#e2d5f7] bg-[#f5efff] text-[#6d28d9] transition-all duration-200 group-hover:border-primary group-hover:bg-[#ede4ff] group-hover:text-primary">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span>{channel.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="mt-16 border-t border-[#e5daf5] pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="font-body text-xs sm:text-sm text-[#7c7688]">
              © 2026 AWS Cloud Clubs MAIT
            </p>
            <p className="font-body text-xs sm:text-sm italic text-[#7c7688]">
              Made for curious minds.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative ambient bottom glow */}
      <div
        className="pointer-events-none absolute -bottom-10 left-1/2 h-32 w-3/4 -translate-x-1/2 rounded-full bg-[#f3e8ff]/50 blur-3xl"
        aria-hidden="true"
      />
    </footer>
  );
}

function IconLinkedIn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
    </svg>
  );
}

function IconInstagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function IconMeetup(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M19.34 9.87c-.12-.8-.43-1.55-.89-2.2-.47-.65-1.07-1.18-1.78-1.56-.7-.38-1.48-.59-2.29-.62-.81-.03-1.62.11-2.38.43-.75.31-1.42.79-1.95 1.39-.54.6-1.02 1.34-1.43 2.16-.3-.6-.71-1.14-1.2-1.58-.5-.45-1.08-.79-1.71-1.01-.63-.22-1.3-.32-1.97-.29-.67.03-1.33.19-1.93.48-.61.28-1.14.69-1.57 1.2-.42.51-.74 1.1-.92 1.74-.19.64-.24 1.32-.17 1.99.07.67.28 1.32.61 1.91.33.59.78 1.1 1.33 1.5.54.4 1.17.68 1.84.82.67.14 1.36.14 2.03 0 .68-.14 1.3-.43 1.84-.85.55-.42.98-.96 1.28-1.58.42.84.92 1.58 1.48 2.19.56.61 1.25 1.09 2.03 1.41.77.31 1.6.46 2.44.42.83-.03 1.64-.25 2.37-.64.73-.39 1.35-.93 1.82-1.6.48-.67.8-1.43.94-2.24.14-.81.08-1.65-.17-2.45-.25-.8-.69-1.54-1.28-2.16.59-.62 1.03-1.36 1.28-2.16.25-.8.31-1.64.17-2.45M9.36 14.28c-.28.42-.67.75-1.12.96-.46.2-.97.27-1.47.2-.5-.07-.97-.28-1.35-.61-.39-.33-.67-.76-.82-1.24-.15-.49-.15-1.01 0-1.49.15-.48.43-.91.82-1.24.38-.33.85-.54 1.35-.61.5-.07 1.01 0 1.47.2.45.21.84.54 1.12.96.28.43.43.93.43 1.44 0 .5-.15 1-.43 1.43m6.11 0c-.28.42-.67.75-1.12.96-.46.2-.97.27-1.47.2-.5-.07-.97-.28-1.35-.61-.39-.33-.67-.76-.82-1.24-.15-.49-.15-1.01 0-1.49.15-.48.43-.91.82-1.24.38-.33.85-.54 1.35-.61.5-.07 1.01 0 1.47.2.45.21.84.54 1.12.96.28.43.43.93.43 1.44 0 .5-.15 1-.43 1.43" />
    </svg>
  );
}

function IconEmail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}
