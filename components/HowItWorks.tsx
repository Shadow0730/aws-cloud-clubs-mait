import Link from "next/link";
import { JOIN_CLUB_HREF } from "@/components/site";

const steps = [
  {
    icon: "person_add",
    title: "Join the group",
    text: "Sign up on our Meetup page to hear about every session first.",
  },
  {
    icon: "school",
    title: "Learn hands-on",
    text: "Attend workshops that take you from cloud basics to real AWS services.",
  },
  {
    icon: "code_blocks",
    title: "Build with peers",
    text: "Team up at hackathons and turn ideas into working projects on AWS.",
  },
  {
    icon: "trending_up",
    title: "Grow your network",
    text: "Meet seniors, speakers from the industry and builders on the same path.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-6">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-inverse-surface px-6 py-14 sm:px-10 md:py-20 lg:rounded-[3rem]">
        {/* Dot grid + one soft glow, CSS only */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--color-primary-fixed-dim) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/30 blur-[90px]" />

        <div className="relative">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end lg:mb-16">
            <div className="max-w-2xl">
              <p className="mb-3 font-label text-xs font-bold uppercase tracking-[0.15rem] text-primary-fixed-dim">
                How it works
              </p>
              <h2 className="font-headline text-4xl font-extrabold text-white md:text-5xl">
                FROM FIRST SESSION
                <br className="hidden sm:block" /> TO FIRST BUILD
              </h2>
            </div>
            <Link
              href={JOIN_CLUB_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 self-start font-label text-sm font-bold uppercase tracking-wide text-primary-fixed-dim transition-colors hover:text-white md:self-auto"
            >
              Start with step one
              <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
          </div>

          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-fixed-dim/40 hover:bg-white/[0.07]"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-on-primary">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: "26px" }}
                    >
                      {step.icon}
                    </span>
                  </span>
                  <span className="font-headline text-5xl font-black text-white/10 transition-colors group-hover:text-primary-fixed-dim/30">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-headline text-xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
