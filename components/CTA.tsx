import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="container max-w-5xl mx-auto text-center bg-surface-container-lowest px-5 py-10 sm:px-10 sm:py-12 md:p-16 rounded-lg md:rounded-xl lg:rounded-full shadow-2xl relative overflow-hidden border-4 sm:border-6 md:border-8 border-surface-container-low">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #275aa8 0, #275aa8 1px, transparent 0, transparent 50%)",
            backgroundSize: "10px 10px",
          }}
        ></div>
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-headline font-extrabold mb-5 sm:mb-6 md:mb-8 tracking-tight leading-[1.05] text-balance">
          THE CLOUD IS <br className="hidden sm:block" /> CALLING.
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-on-surface-variant mb-8 sm:mb-10 md:mb-12 max-w-xl mx-auto leading-relaxed text-balance">
          Explore our recent events and initiatives.
        </p>
        <Link
          href="https://www.meetup.com/aws-cloud-club-at-maharaja-agrasen-inst-of-technology/"
          target="_blank"
          className="inline-flex w-full sm:w-auto items-center justify-center bg-primary text-on-primary px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 rounded-full font-headline text-base sm:text-xl md:text-2xl font-black pixel-hard-shadow hover:scale-105 active:scale-95 transition-all border-2 border-on-primary-fixed"
        >
          JOIN THE CLUB
        </Link>
      </div>
    </section>
  );
}
