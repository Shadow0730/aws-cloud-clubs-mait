"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentType,
  type SVGProps,
} from "react";

type Platform = {
  key: string;
  name: string;
  description: string;
  cta: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  accent: string;
};

type SequenceItem =
  | { type: "card"; platform: Platform }
  | { type: "arrow"; key: string };

const platforms: Platform[] = [
  {
    key: "whatsapp",
    name: "WhatsApp",
    description:
      "Join our WhatsApp community for instant updates and discussion.",
    cta: "JOIN ->",
    href: "#",
    Icon: IconWhatsApp,
    accent: "text-secondary",
  },
  {
    key: "instagram",
    name: "Instagram",
    description:
      "Follow us for event highlights and behind-the-scenes content.",
    cta: "FOLLOW ->",
    href: "#",
    Icon: IconInstagram,
    accent: "text-error",
  },
  {
    key: "linkedin",
    name: "LinkedIn",
    description: "Connect professionally and follow us for opportunities.",
    cta: "CONNECT ->",
    href: "#",
    Icon: IconLinkedIn,
    accent: "text-primary",
  },
  {
    key: "meetup",
    name: "Meetup",
    description: "RSVP to our events and never miss a workshop or session.",
    cta: "VIEW EVENTS ->",
    href: "#",
    Icon: IconMeetup,
    accent: "text-secondary-dim",
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
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const sequence = useMemo<SequenceItem[]>(() => {
    return platforms.flatMap((platform, index) => {
      if (index === platforms.length - 1) {
        return [{ type: "card", platform }];
      }
      return [
        { type: "card", platform },
        { type: "arrow", key: `arrow-${platform.key}` },
      ];
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6"
      aria-labelledby="community-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-14">
          <p className="font-label text-xs font-bold tracking-[0.18rem] uppercase text-secondary mb-4">
            Join The Guild
          </p>
          <h2
            id="community-heading"
            className="font-headline font-black text-4xl md:text-6xl lg:text-7xl tracking-tight text-on-surface"
          >
            CONNECT WITH US
          </h2>
          <p className="mt-4 text-base md:text-xl text-on-surface-variant max-w-2xl mx-auto">
            Join our community across platforms.
          </p>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-x-0 top-1/2 hidden md:block h-px bg-gradient-to-r from-transparent via-outline-variant to-transparent" />

          <div className="relative flex flex-col md:flex-row md:items-stretch items-center justify-center gap-3 md:gap-2 lg:gap-3">
            {sequence.map((item, index) => {
              const revealClass = isVisible
                ? "animate-fade-in-up"
                : "opacity-0 translate-y-3";

              const revealStyle = isVisible
                ? ({ animationDelay: `${index * 130}ms` } as const)
                : undefined;

              if (item.type === "arrow") {
                return (
                  <div
                    key={item.key}
                    className={[
                      "flex items-center justify-center w-full md:w-10 lg:w-12 h-8 md:h-auto",
                      "text-outline",
                      "motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:animate-none",
                      revealClass,
                    ].join(" ")}
                    style={revealStyle}
                    aria-hidden="true"
                  >
                    <span className="hidden md:inline text-3xl leading-none">
                      →
                    </span>
                    <span className="md:hidden text-3xl leading-none">↓</span>
                  </div>
                );
              }

              const { platform } = item;
              const { Icon } = platform;
              const ctaEnabled = platform.href.trim().length > 0;

              return (
                <article
                  key={platform.key}
                  className={[
                    "w-full md:w-[16.5rem] lg:w-[17rem] min-h-[18rem]",
                    "rounded-[1.75rem] border border-outline-variant bg-surface-container-lowest",
                    "px-6 py-6 md:py-7",
                    "shadow-[0_8px_30px_rgba(39,90,168,0.08)]",
                    "transition-all duration-300",
                    "hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(39,90,168,0.16)] hover:border-primary/45",
                    "flex flex-col",
                    "motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:animate-none",
                    revealClass,
                  ].join(" ")}
                  style={revealStyle}
                >
                  <div className="w-14 h-14 rounded-2xl border border-surface-variant bg-surface-container flex items-center justify-center mb-5">
                    <Icon
                      className={[
                        "w-7 h-7",
                        platform.accent,
                        "transition-transform duration-300",
                        "group-hover:scale-110",
                      ].join(" ")}
                    />
                  </div>

                  <h3 className="font-headline font-black text-2xl text-on-surface tracking-tight">
                    {platform.name}
                  </h3>

                  <p className="mt-3 text-sm md:text-base text-on-surface-variant leading-relaxed">
                    {platform.description}
                  </p>

                  <div className="mt-auto pt-7">
                    {ctaEnabled ? (
                      <a
                        href={platform.href}
                        className={[
                          "inline-flex items-center gap-2",
                          "text-sm font-headline font-black tracking-wide uppercase",
                          platform.accent,
                          "hover:opacity-80 transition-opacity",
                        ].join(" ")}
                      >
                        {platform.cta}
                      </a>
                    ) : (
                      <span
                        className={[
                          "inline-flex items-center gap-2",
                          "text-sm font-headline font-black tracking-wide uppercase",
                          platform.accent,
                          "opacity-60",
                        ].join(" ")}
                        aria-disabled="true"
                      >
                        {platform.cta}
                      </span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function IconWhatsApp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <path d="M20 12A8 8 0 0 1 8.2 19l-3.7 1 1-3.5A8 8 0 1 1 20 12Z" />
      <path d="M9.6 8.7c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.4.2.4.8 1.8.9 1.9.1.2.1.3 0 .5-.1.2-.2.3-.3.4l-.4.4c-.1.1-.2.2-.1.4.1.2.5 1 1.2 1.6.8.7 1.5.9 1.7 1 .2.1.3 0 .4-.1l.6-.8c.1-.2.3-.2.5-.1l1.7.8c.2.1.4.2.4.4s-.1 1-.5 1.4c-.4.4-.8.4-1.1.5-.3 0-1.8-.2-3.4-1.6-2-1.7-2.7-3.6-2.8-3.8-.1-.2-.7-1.4-.7-2.6 0-.5.1-.9.3-1.2Z" />
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
