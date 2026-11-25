import { TOPICS } from "@/components/site";

// Thin scrolling strip of AWS topics members can explore with the group.
export default function TopicStrip() {
  // Two copies so the CSS loop has no gap
  const items = [...TOPICS, ...TOPICS];

  return (
    <section
      aria-label="Topics you can explore"
      className="overflow-hidden border-y border-outline-variant/60 bg-surface-container-lowest py-4"
    >
      <ul className="marquee-track flex w-max items-center gap-8">
        {items.map((topic, i) => (
          <li
            key={i}
            aria-hidden={i >= TOPICS.length}
            className="flex items-center gap-8 whitespace-nowrap font-headline text-sm font-bold uppercase tracking-[0.12em] text-on-surface-variant sm:text-base"
          >
            {topic}
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          </li>
        ))}
      </ul>
    </section>
  );
}
