import Link from "next/link";

const JOIN_CLUB_HREF =
  "https://www.meetup.com/aws-cloud-club-at-maharaja-agrasen-inst-of-technology/";

export default function Stats() {
  return (
    <section className="py-24">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2 bg-primary cloud-gradient p-12 rounded-[2rem] text-on-primary flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-20">
              <span className="material-symbols-outlined text-9xl">
                rocket_launch
              </span>
            </div>
            <h3 className="text-4xl font-headline font-black mb-4">
              READY FOR LIFT OFF?
            </h3>
            <p className="text-lg opacity-90 max-w-sm">
              Join 101 students from MAIT exploring the vast cloud
              stratosphere.
            </p>
          </div>
          <div className="bg-tertiary-container p-8 rounded-[2rem] flex flex-col items-center justify-center text-center">
            <span className="text-6xl font-headline font-black text-on-tertiary-container">
              --
            </span>
            <span className="font-label uppercase font-bold text-on-tertiary-container mt-2">
              Workshops
            </span>
          </div>
          <div className="bg-secondary-container p-8 rounded-[2rem] flex flex-col items-center justify-center text-center">
            <span className="text-6xl font-headline font-black text-on-secondary-container">
              --
            </span>
            <span className="font-label uppercase font-bold text-on-secondary-container mt-2">
              Projects
            </span>
          </div>
          <div className="bg-surface-container-high md:col-span-1 p-8 rounded-[2rem] flex flex-col items-center justify-center text-center">
            <span className="text-6xl font-headline font-black text-primary">
              --
            </span>
            <span className="font-label uppercase font-bold text-on-surface-variant mt-2">
              Avg Rating
            </span>
          </div>
          <div className="md:col-span-3 bg-surface-container-highest p-6 sm:p-8 md:p-12 rounded-[2rem] flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
              <span className="text-6xl md:text-7xl font-headline font-black text-primary leading-none tabular-nums">
                101
              </span>
              <div className="max-w-md">
                <p className="text-lg sm:text-xl font-headline font-bold leading-snug text-balance">
                  Builders and counting
                </p>
                <p className="mt-2 text-sm sm:text-base text-on-surface-variant leading-relaxed text-balance">
                  Students from MAIT learning, building and shipping on AWS
                  together.
                </p>
              </div>
            </div>
            <Link
              href={JOIN_CLUB_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center bg-primary text-on-primary px-8 py-4 rounded-full font-headline text-base font-black pixel-hard-shadow hover:scale-105 active:scale-95 transition-all border-2 border-on-primary-fixed"
            >
              JOIN THEM
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
