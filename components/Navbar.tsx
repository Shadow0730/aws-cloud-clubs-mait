"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { name: "About", href: "/", badge: "01" },
  { name: "Events", href: "/events", badge: "02" },
  { name: "Team", href: "/team", badge: "03" },
  { name: "Community", href: "/community", badge: "04" },
];

const JOIN_CLUB_HREF =
  "https://www.meetup.com/aws-cloud-club-at-maharaja-agrasen-inst-of-technology/";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const getDesktopLinkClasses = (isActive: boolean) =>
    `relative font-headline font-bold pb-1 transition-colors after:absolute after:bottom-0 after:left-0 after:h-1 after:bg-primary after:transition-all after:duration-300 hover:text-primary ${
      isActive
        ? "text-primary after:w-full"
        : "text-on-surface-variant after:w-0 hover:after:w-full"
    }`;

  const getMobileLinkClasses = (isActive: boolean, index: number) =>
    `group relative flex items-center justify-between overflow-hidden rounded-2xl border px-4 py-3 font-headline font-bold transition-all duration-300 ${
      isActive
        ? "border-primary bg-primary text-on-primary shadow-lg shadow-primary/20"
        : "border-primary/20 bg-surface-container-high text-on-surface hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface-container-highest hover:text-primary"
    } ${index % 2 === 0 ? "-rotate-1" : "rotate-1"}`;

  return (
    <header className="fixed left-1/2 top-0 z-50 w-full max-w-7xl -translate-x-1/2 rounded-b-[2rem] px-4 py-3 glass-nav backdrop-blur-md shadow-xl shadow-blue-900/5 sm:px-6 sm:py-4">
      <div className="flex w-full items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-3">
          <img
            className="h-10 w-auto mix-blend-multiply"
            alt="AWS Cloud Clubs MAIT Logo"
            src="/logo/aws-cloud-clubs-logo.jpeg"
          />
          <span className="text-lg font-black tracking-tight text-on-primary-container font-headline sm:text-2xl">
            AWSCC MAIT
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                className={getDesktopLinkClasses(isActive)}
                href={link.href}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={JOIN_CLUB_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center bg-primary text-on-primary px-6 py-3 rounded-full font-headline text-sm font-black pixel-hard-shadow hover:scale-105 active:scale-95 transition-all border-2 border-on-primary-fixed"
          >
            JOIN THE CLUB
          </Link>

          <button
            type="button"
            className={`relative inline-flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-on-primary-fixed bg-primary text-on-primary shadow-lg transition-all duration-300 active:scale-95 md:hidden ${
              isMenuOpen ? "rotate-3" : "rotate-0"
            }`}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-menu"
          >
            <span className="sr-only">Menu</span>
            <span
              className={`absolute h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                isMenuOpen ? "rotate-45" : "-translate-y-2"
              }`}
              aria-hidden="true"
            />
            <span
              className={`absolute h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
              aria-hidden="true"
            />
            <span
              className={`absolute h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                isMenuOpen ? "-rotate-45" : "translate-y-2"
              }`}
              aria-hidden="true"
            />
            <span
              className={`pointer-events-none absolute -right-1 -top-1 h-3 w-3 rounded-full bg-on-primary transition-transform duration-300 ${
                isMenuOpen ? "scale-0" : "scale-100"
              }`}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav-menu"
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          isMenuOpen
            ? "mt-4 max-h-128 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-surface-container-low/95 p-3 shadow-2xl shadow-blue-900/10 backdrop-blur">
          <div
            className="pointer-events-none absolute inset-0 opacity-50"
            aria-hidden="true"
          >
            <div className="absolute -right-8 -top-10 h-24 w-24 rounded-full bg-primary/20 blur-2xl" />
            <div className="absolute -left-10 bottom-0 h-20 w-20 rounded-full bg-primary/10 blur-2xl" />
          </div>

          <div className="relative mb-3 flex items-center justify-between rounded-2xl border border-primary/20 bg-surface-container-high px-4 py-2">
            <span className="font-headline text-sm font-black tracking-wide text-primary">
              Explore
            </span>
            <span className="font-body text-xs text-on-surface-variant">
              tap a tile
            </span>
          </div>

          <div className="relative grid grid-cols-2 gap-2">
            {NAV_LINKS.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  className={getMobileLinkClasses(isActive, index)}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-black ${
                        isActive
                          ? "bg-on-primary/20 text-on-primary"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      {link.badge}
                    </span>
                    <span className="text-sm">{link.name}</span>
                  </span>
                  <span className="text-xs opacity-70">go</span>
                </Link>
              );
            })}
          </div>

          <Link
            href={JOIN_CLUB_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex w-full items-center justify-center bg-primary text-on-primary px-6 py-3 rounded-full font-headline text-base font-black tracking-wide pixel-hard-shadow hover:scale-[1.02] active:scale-95 transition-all border-2 border-on-primary-fixed"
          >
            JOIN THE CLUB
          </Link>

          <p className="relative pt-2 text-center text-xs text-on-surface-variant font-body">
            Build. Ship. Repeat.
          </p>
        </div>
      </nav>
    </header>
  );
}
