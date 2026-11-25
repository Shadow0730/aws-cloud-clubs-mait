import Image from "next/image";

type Card = {
  tag: string;
  title: string;
  text: string;
  image: { src: string; width: number; height: number; alt: string };
};

const cards: Card[] = [
  {
    tag: "Learn",
    title: "Workshops that start from zero",
    text: "From cloud basics to GenAI apps with PartyRock and Amazon Bedrock.",
    image: {
      src: "/slide-workshop.png",
      width: 484,
      height: 484,
      alt: "Faculty and AWS Academy guests at the AWS × Maharaja Agrasen welcome ceremony",
    },
  },
  {
    tag: "Build",
    title: "Hackathons that ship real ideas",
    text: "Form a team, pick a problem and build it on AWS.",
    image: {
      src: "/slide-hackathon.png",
      width: 1173,
      height: 520,
      alt: "AWS PartyRock Hackathon highlights banner",
    },
  },
  {
    tag: "Connect",
    title: "Speakers from AWS and the industry",
    text: "Learn from people who build in the cloud every day.",
    image: {
      src: "/slide-partnership.png",
      width: 1172,
      height: 625,
      alt: "Speakers from AWS and industry at a club hackathon",
    },
  },
  {
    tag: "Community",
    title: "Peers who learn together",
    text: "Ask questions, share what you build and grow with the group.",
    image: {
      src: "/slide-campus.jpg",
      width: 1360,
      height: 882,
      alt: "Main gate and fountain of the MAIT campus",
    },
  },
];

export default function Modules() {
  return (
    <section className="overflow-hidden px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Full-width statement: two lines on laptop, wraps on phone */}
        <div>
          <p className="mb-6 font-label text-xs font-bold uppercase tracking-[0.15rem] text-secondary">
            What we do · Expand your arsenal
          </p>
          <h2 className="font-headline text-[1.75rem] font-bold leading-[1.1] tracking-[-0.02em] text-on-surface sm:text-4xl lg:text-[min(4.1vw,3.7rem)]">
            <span className="lg:block lg:whitespace-nowrap">
              A student group of curious builders{" "}
            </span>
            <span className="text-on-surface/35 lg:block lg:whitespace-nowrap">
              turning cloud ideas into real projects on AWS.
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-on-surface-variant sm:text-base">
            The tools, the community, and the knowledge you need to master the
            AWS infrastructure.
          </p>
        </div>

        {/* Staggered cards: 2nd and 4th sit lower. Photo on top, text below */}
        <div className="mt-14 grid grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-6">
          {cards.map((card, i) => (
            <article
              key={card.title}
              className={`group flex flex-col overflow-hidden rounded-[1.75rem] bg-inverse-surface text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20 ${i % 2 === 1 ? "sm:mt-16 lg:mt-24" : ""
                }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {card.image && (
                  <Image
                    src={card.image.src}
                    alt={card.image.alt}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                {/* Short fade into the text panel */}
                <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-inverse-surface to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-black/35 px-3 py-1 font-label text-[11px] font-bold uppercase tracking-[0.1em] text-white backdrop-blur">
                  {card.tag}
                </span>
              </div>

              <div className="flex flex-1 flex-col px-6 pb-6 pt-3">
                <h3 className="font-headline text-xl font-bold leading-tight lg:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {card.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
