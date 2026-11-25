"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Anton } from "next/font/google";
import { JOIN_CLUB_HREF } from "@/components/site";

const MEMBER_COUNT = 100;

// Condensed poster face, used only for the giant hero headline
const anton = Anton({ weight: "400", subsets: ["latin"], display: "swap" });

const HEADLINE =
  "pt-8 text-[23vw] uppercase leading-[0.95] tracking-[-0.005em] sm:whitespace-nowrap sm:pt-10 sm:text-[min(10.3vw,9.3rem)]";

function HeadlineWords() {
  return (
    <>
      <span className="block sm:inline">Amazon</span>{" "}
      <span className="block sm:inline">Web</span>{" "}
      <span className="block sm:inline">Services</span>
    </>
  );
}

// Fade-up entrance done in CSS, so no state is needed for it
// (delay classes are written out in full so Tailwind can find them)
const DELAYS = {
  0: "",
  100: "[animation-delay:100ms]",
  200: "[animation-delay:200ms]",
} as const;

const reveal = (delayMs: keyof typeof DELAYS = 0) =>
  `opacity-0 animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100 ${DELAYS[delayMs]}`;

export default function Hero() {
  const [memberCount, setMemberCount] = useState(0);

  // Count the member number up from 0 once the hero appears
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const duration = reduceMotion ? 0 : 1600;
    let start: number | null = null;
    let frame = 0;

    const tick = (now: number) => {
      if (start === null) start = now;
      const progress =
        duration === 0 ? 1 : Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setMemberCount(Math.round(eased * MEMBER_COUNT));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    // -mt-24/pt-24: the section runs under the fixed navbar, so the arm
    // can come in from the very top of the screen
    <section className="relative isolate -mt-24 overflow-hidden px-6 pb-16 pt-24 lg:pb-20">
      {/* Background: faint dot grid + one soft glow behind the key */}
      <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black_70%,transparent)]">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--color-primary) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-primary-fixed-dim/45 blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Headline with the arm + key image passing over it */}
        <div className={`relative z-10 ${reveal()}`}>
          <h1 className={`${anton.className} ${HEADLINE} text-on-surface`}>
            <HeadlineWords />
          </h1>

          {/* Arm pressing the key. The key area is a real Join link. */}
          <div className="pointer-events-none relative z-20 -mr-6 ml-auto -mt-[11vw] w-[88vw] max-w-[400px] drop-shadow-[0_24px_30px_rgba(46,16,101,0.3)] sm:-mt-[9vw] sm:max-w-[460px] lg:absolute lg:left-[35%] lg:top-[-6rem] lg:mx-0 lg:mt-0 lg:w-[47vw] lg:max-w-[610px] [&:has(a:active)_img]:translate-y-1 [&:has(a:hover)_img]:translate-y-0.5">
            <Image
              src="/hero-robot-arm.webp"
              alt="A robotic hand pressing a purple key labelled Join the club"
              width={820}
              height={828}
              priority
              sizes="(max-width: 1023px) 88vw, 47vw"
              className="h-auto w-full transition-transform duration-150 hero-arm-fade"
            />
            <Link
              href={JOIN_CLUB_HREF}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join the club on Meetup"
              className="pointer-events-auto absolute bottom-0 left-0 h-[34%] w-[38%] rounded-3xl"
            />
          </div>
        </div>

        {/* Below the heading: statement (left) and two cards (right) */}
        <div
          className={`relative flex flex-col gap-10 border-outline-variant/70 pt-8 lg:mt-6 lg:min-h-[340px] lg:flex-row lg:justify-between lg:border-t ${reveal(200)}`}
        >
          <div className="max-w-[21rem] sm:max-w-md lg:max-w-[25rem]">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-surface-container-lowest px-3.5 py-1.5 font-label text-[11px] font-bold uppercase tracking-[0.14em] text-on-secondary-fixed-variant shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              AWS Student Builder Group · MAIT
            </p>
            <p className="font-headline text-[1.7rem] font-medium leading-[1.18] tracking-[-0.025em] text-on-surface lg:text-[2rem]">
              Where MAIT students{" "}
              <span className="bg-gradient-to-r from-on-secondary-fixed-variant via-primary to-secondary bg-clip-text font-bold text-transparent">
                learn the cloud
              </span>
              , build real things and{" "}
              <span className="whitespace-nowrap underline decoration-primary decoration-wavy decoration-2 underline-offset-[6px]">
                find their people
              </span>
              .
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {["Workshops", "Hackathons", "Cloud events"].map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-secondary-fixed px-3.5 py-1.5 font-label text-xs font-bold text-on-secondary-fixed-variant"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid w-full max-w-md grid-cols-2 gap-3 self-start sm:gap-4 lg:w-auto">
            {/* Member count */}
            <div className="flex min-h-[10.5rem] flex-col justify-between rounded-3xl border border-outline-variant/60 bg-surface-container-lowest p-5 shadow-lg shadow-primary/10 lg:w-[11.5rem]">
              <p className="flex items-center gap-2.5 font-headline text-sm font-medium leading-tight text-on-surface-variant">
                <span className="material-symbols-outlined text-primary">
                  groups
                </span>
                Members
                <br />
                and growing
              </p>
              <p className="font-headline text-5xl font-medium tabular-nums tracking-[-0.04em] text-on-surface">
                {memberCount}
                {memberCount === MEMBER_COUNT ? "+" : ""}
              </p>
            </div>

            {/* Events link */}
            <Link
              href="/events"
              className="group flex min-h-[10.5rem] flex-col justify-between rounded-3xl bg-primary p-5 text-on-primary shadow-lg shadow-primary/30 transition-all duration-300 hover:-translate-y-1 hover:bg-primary-dim lg:w-[11.5rem]"
            >
              <p className="flex items-start justify-between gap-2 font-headline text-lg font-medium leading-tight">
                <span>
                  Explore
                  <br />
                  our events
                </span>
                <span className="material-symbols-outlined transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  arrow_outward
                </span>
              </p>
              <p className="font-headline text-sm leading-snug text-on-primary/85">
                Sessions that get
                <br />
                you building.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
