"use client";

import {
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type SVGProps,
} from "react";

type Platform = {
  key: string;
  name: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const platforms: Platform[] = [
  {
    key: "whatsapp",
    name: "WhatsApp",
    href: "https://wa.me/?text=I%27d%20like%20to%20join%20AWS%20Cloud%20Club%20MAIT",
    Icon: IconWhatsApp,
  },
  {
    key: "linkedin",
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/aws-cloud-club-maitt/",
    Icon: IconLinkedIn,
  },
  {
    key: "instagram",
    name: "Instagram",
    href: "https://www.instagram.com/awscloudclub_mait",
    Icon: IconInstagram,
  },
  {
    key: "email",
    name: "Email",
    href: "https://mail.google.com/mail/u/0/?fs=1&to=awsacademymait@gmail.com&tf=cm",
    Icon: IconEmail,
  },
  {
    key: "meetup",
    name: "Meetup",
    href: "https://www.meetup.com/aws-sbg-at-maharaja-agrasen-institute-of-technology/",
    Icon: IconMeetup,
  },
];

export default function CommunitySection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
      aria-labelledby="community-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-80 max-w-5xl rounded-full bg-primary/5 blur-3xl"
      />
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
        <div
          className={`max-w-xl transition-all duration-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
        >
          <p className="mb-5 font-label text-xs font-bold uppercase tracking-[0.2em] text-secondary sm:text-sm">
            {"AWS Cloud Club \u00B7 MAIT"}
          </p>
          <h2
            id="community-heading"
            className="font-headline text-4xl font-black leading-[1.08] tracking-tight text-on-surface sm:text-5xl lg:text-6xl"
          >
            Find your cloud community
          </h2>
          <div className="mt-6 h-1 w-16 rounded-full bg-primary" />
          <p className="mt-6 max-w-lg font-body text-base leading-7 text-on-surface-variant sm:text-lg sm:leading-8">
            Learn, build, and grow alongside fellow cloud enthusiasts. Join the
            conversation on the platform that feels right for you.
          </p>
        </div>

        <div className="w-full border-t border-outline-variant/70">
          {platforms.map((platform, index) => {
            const { Icon } = platform;
            const isExternal = /^https?:\/\//.test(platform.href);

            return (
              <a
                key={platform.key}
                href={platform.href}
                target={isExternal && platform.key !== "email" ? "_blank" : undefined}
                rel={isExternal && platform.key !== "email" ? "noopener noreferrer" : undefined}
                className={`group relative isolate flex min-h-24 w-full items-center gap-4 overflow-hidden border-b border-outline-variant/70 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary sm:gap-6 sm:py-7 lg:gap-8 lg:py-8 ${
                  isVisible
                    ? "animate-fade-in-up motion-reduce:animate-none"
                    : "translate-y-5 opacity-0"
                }`}
                style={
                  isVisible
                    ? ({ animationDelay: `${index * 140}ms` } as const)
                    : undefined
                }
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-0 origin-left scale-x-0 bg-primary/10 transition-transform duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
                />
                <span className="relative z-10 w-7 shrink-0 font-label text-xs font-medium tracking-wider text-on-surface-variant/75 sm:w-10 sm:text-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="relative z-10 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-outline-variant bg-transparent text-primary transition-[background-color,border-color,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-primary group-hover:bg-primary group-hover:text-white group-focus-visible:border-primary group-focus-visible:bg-primary group-focus-visible:text-white motion-reduce:transition-none sm:h-14 sm:w-14">
                  <Icon className="h-6 w-6" />
                </span>

                <span className="relative z-10 min-w-0 flex-1 font-headline text-2xl font-medium tracking-tight text-on-surface transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-primary group-focus-visible:text-primary motion-reduce:transition-none sm:text-3xl lg:text-4xl">
                  {platform.name}
                </span>
                <span className="relative z-10 inline-flex shrink-0 items-center text-primary">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-7 w-7 rotate-[-45deg] opacity-60 transition-[transform,opacity] duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5 group-hover:opacity-100 group-focus-visible:translate-x-1.5 group-focus-visible:opacity-100 motion-reduce:transition-none sm:h-8 sm:w-8"
                  >
                    <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function IconWhatsApp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.05 2.04A9.93 9.93 0 0 0 2.14 11.95c0 1.73.45 3.42 1.31 4.9L2 22l5.29-1.39a9.9 9.9 0 0 0 4.76 1.22h.01A9.94 9.94 0 0 0 22 11.91a9.92 9.92 0 0 0-2.83-7.03 9.9 9.9 0 0 0-7.12-2.84Zm0 17.97h-.01a8.02 8.02 0 0 1-4.09-1.12l-.29-.17-3.14.82.84-3.05-.19-.31a8.02 8.02 0 0 1 1.24-10.15 7.95 7.95 0 0 1 5.64-2.34c4.41 0 8 3.59 8 8a8 8 0 0 1-8 8Zm4.39-6.02c-.24-.12-1.41-.69-1.63-.77-.22-.08-.39-.12-.56.12-.16.24-.62.77-.76.93-.14.16-.29.18-.53.06-.24-.12-1-.36-1.89-1.15-.71-.63-1.18-1.4-1.31-1.64-.14-.24-.01-.36.11-.48.11-.11.24-.28.35-.42.11-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.53-1.28-.73-1.76-.19-.45-.39-.39-.53-.39h-.45c-.16 0-.41.06-.62.3-.21.24-.82.8-.82 1.94 0 1.14.84 2.25.96 2.4.12.16 1.65 2.52 4 3.53.56.24 1 .38 1.35.48.57.18 1.09.15 1.5.09.46-.07 1.41-.57 1.61-1.12.2-.55.2-1.02.14-1.12-.06-.1-.23-.16-.47-.28Z" />
    </svg>
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

function IconEmail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
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
