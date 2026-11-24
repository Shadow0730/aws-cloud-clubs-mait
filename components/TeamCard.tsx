"use client";


import { useRef, useState } from "react";
import TeamCard2D from "@/components/TeamCard2D";
import { teamMembers } from "@/components/teamdata";

const CARD_W = 320;
const CARD_H = 420;

// Put your back image in: public/team/screen2.png (or change this)
const CARD_BACK_SRC = "/team/card-back.png";



export default function TeamCard() {
  const [activeIndex, setActiveIndex] = useState(0);
const touchStart = useRef<{ x: number; y: number } | null>(null);

const active = teamMembers[activeIndex];

  const leftRemaining = activeIndex; // how many are behind us on the left
  const rightRemaining = teamMembers.length - activeIndex - 1;

  const leftCount = Math.min(leftRemaining, 3);
  const rightCount = Math.min(rightRemaining, 3);

  const goNext = () => {
  setActiveIndex((i) => (i + 1) % teamMembers.length);
};

const goPrev = () => {
  setActiveIndex(
    (i) => (i - 1 + teamMembers.length) % teamMembers.length
  );
};

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
  const touch = event.touches[0];

  if (touch) {
    touchStart.current = {
      x: touch.clientX,
      y: touch.clientY,
    };
  }
};

const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
  const start = touchStart.current;
  const touch = event.changedTouches[0];

  touchStart.current = null;

 if (!start || !touch) return;

  const deltaX = touch.clientX - start.x;
  const deltaY = touch.clientY - start.y;

  // Ignore vertical scrolling and small movements.
  if (Math.abs(deltaX) < 50 || Math.abs(deltaX) <= Math.abs(deltaY)) {
    return;
  }

  if (deltaX < 0) {
    goNext();
  } else {
    goPrev();
  }
};

  return (
    <div className="grid w-full min-w-0 grid-cols-1 items-center gap-6 lg:grid-cols-3 xl:gap-10">
      {/* Left deck (click to go previous) */}
      <div className="hidden lg:flex justify-center">
        <button
          type="button"
          onClick={goPrev}

          className="relative flex flex-col items-center gap-10"
          aria-label="Previous member"
        >
          <CardStack
            side="left"
            count={leftCount}
            cardBackSrc={CARD_BACK_SRC}
          />
          {/* optional hint */}
          {leftRemaining > 0 && (
           <span className="pointer-events-none text-xs font-bold text-on-surface-variant">
           Prev
           </span>
)}
        </button>
      </div>

      {/* Center card */}
<div className="flex min-w-0 justify-center">
  <div className="mx-auto w-full max-w-[320px]">

    {/* Member card with swipe support */}
    <div
      className="relative h-[390px] w-full touch-pan-y sm:h-[420px]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={() => {
        touchStart.current = null;
      }}
    >
      <div className="absolute inset-0">
  <TeamCard2D member={active} />
</div>
    </div>

    {/* Mobile navigation buttons */}
<div className="mt-4 flex w-full items-center justify-between gap-3 px-1 xl:hidden">

  <button
    type="button"
    onClick={goPrev}
    className="relative z-20 pointer-events-auto touch-manipulation flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full border border-surface-variant bg-surface-container-lowest px-4 py-3 font-headline font-bold text-on-surface-variant hover:text-primary"
  >
    <span aria-hidden="true">←</span>
    Previous
  </button>

  <button
    type="button"
    onClick={goNext}
    className="relative z-20 pointer-events-auto touch-manipulation flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full border border-surface-variant bg-surface-container-lowest px-4 py-3 font-headline font-bold text-on-surface-variant hover:text-primary"
  >
    Next
    <span aria-hidden="true">→</span>
  </button>

</div>

    {/* Member counter */}
    <p className="mt-3 text-center text-sm text-on-surface-variant xl:hidden">
      Member {activeIndex + 1} of {teamMembers.length}
      <span className="block text-xs mt-1">
        Swipe left or right to explore
      </span>
    </p>

  </div>
</div>
      {/* Right deck (click to go next) */}
      <div className="hidden lg:flex justify-center">
        <button
          type="button"
          onClick={goNext}

          className="relative flex flex-col items-center gap-10"
          aria-label="Next member"
        >
          <CardStack
            side="right"
            count={rightCount}
            cardBackSrc={CARD_BACK_SRC}
          />
          {/* optional hint */}
          {rightRemaining > 0 && (
            <span className="pointer-events-none text-xs font-bold text-on-surface-variant">
            Next
            </span>
          )}
        </button>
      </div>
    </div>
  );
}

function CardStack({
  side,
  count,
  cardBackSrc,
}: {
  side: "left" | "right";
  count: number; // capped to 3 by caller
  cardBackSrc: string;
}) {
  const depths = Array.from({ length: count }, (_, i) => i);

  return (
    <div className="relative" style={{ width: CARD_W, height: CARD_H }}>
      {depths
        .slice()
        .reverse()
        .map((depth) => {
          const offsetX = (side === "left" ? -12 : 12) * depth;
          const offsetY = 10 * depth;
          const isTop = depth === 0;

          return (
            <div
              key={`${side}-${depth}`}
              className="absolute inset-0 pointer-events-none"
              style={{
                transform: `translate(${offsetX}px, ${offsetY}px)`,
                opacity: 1 - depth * 0.12,
              }}
            >
              <div className="h-full w-full rounded-[28px] bg-surface-container-lowest border border-surface-variant shadow-lg overflow-hidden">
                {isTop ? (
                  <img
                    src={cardBackSrc}
                    alt="Card back"
                    className="h-full w-full object-cover"
                    draggable={false}
                  />
                ) : null}
              </div>
            </div>
          );
        })}
    </div>
  );
}
