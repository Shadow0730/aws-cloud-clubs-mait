"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/slide-partnership.png",
    title: "AWS × MAIT Partnership",
    subtitle: "Faculty & Team Collaboration",
  },
  {
    image: "/slide-campus.jpg",
    title: "MAIT Campus",
    subtitle: "Our Learning Hub",
  },
  {
    image: "/slide-workshop.png",
    title: "AWS Workshop 2024",
    subtitle: "Cloud Computing Event",
  },
  {
    image: "/slide-hackathon.png",
    title: "AWS PartyRock Hackathon",
    subtitle: "Build & Innovate",
  },
];

export default function Modules() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  // Total slides including duplicates for seamless loop
  const extendedSlides = [...slides, ...slides, ...slides];

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
  }, []);

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [startAutoPlay, stopAutoPlay]);

  // Reset position seamlessly when reaching end of second set
  useEffect(() => {
    if (currentIndex >= slides.length * 2) {
      const timeout = setTimeout(() => {
        if (trackRef.current) {
          trackRef.current.style.transition = "none";
          setCurrentIndex(currentIndex - slides.length);
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              if (trackRef.current) {
                trackRef.current.style.transition =
                  "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
              }
            });
          });
        }
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  const goToSlide = (direction: "prev" | "next") => {
    stopAutoPlay();
    setCurrentIndex((prev) =>
      direction === "next" ? prev + 1 : Math.max(prev - 1, 0),
    );
    startAutoPlay();
  };

  // Each card width + gap (container-based for consistent alignment)
  const [cardWidthPx, setCardWidthPx] = useState(360);
  const [gapPx, setGapPx] = useState(24);

  useEffect(() => {
    const updateCardMetrics = () => {
      const viewportWidth = viewportRef.current?.clientWidth;
      if (!viewportWidth) return;

      if (window.innerWidth < 768) {
        setCardWidthPx(Math.max(260, Math.floor(viewportWidth * 0.84)));
        setGapPx(14);
      } else if (window.innerWidth < 1024) {
        setCardWidthPx(Math.max(300, Math.floor(viewportWidth * 0.48)));
        setGapPx(18);
      } else {
        setCardWidthPx(Math.max(320, Math.floor(viewportWidth * 0.31)));
        setGapPx(24);
      }
    };

    updateCardMetrics();
    window.addEventListener("resize", updateCardMetrics);
    return () => window.removeEventListener("resize", updateCardMetrics);
  }, []);

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-label text-xs font-bold tracking-[0.15rem] uppercase mb-3 text-secondary">
              What We Do
            </h2>
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-4 text-on-surface">
              EXPAND YOUR ARSENAL
            </h2>
            <p className="text-lg leading-relaxed text-on-surface-variant">
              The tools, the community, and the knowledge you need to master the
              AWS infrastructure.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => goToSlide("prev")}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 bg-surface-container-highest border border-outline-variant text-on-surface hover:bg-primary hover:text-on-primary shadow-sm hover:shadow"
              aria-label="Previous slide"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button
              onClick={() => goToSlide("next")}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 bg-surface-container-highest border border-outline-variant text-on-surface hover:bg-primary hover:text-on-primary shadow-sm hover:shadow"
              aria-label="Next slide"
            >
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Progress Dots */}

        {/* Carousel Track */}
        <div
          className="relative"
          onMouseEnter={stopAutoPlay}
          onMouseLeave={startAutoPlay}
        >
          <div ref={viewportRef} className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex"
              style={{
                gap: `${gapPx}px`,
                transform: `translateX(-${currentIndex * (cardWidthPx + gapPx)}px)`,
                transition:
                  "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              {extendedSlides.map((slide, index) => {
                const isActive =
                  index % slides.length === currentIndex % slides.length;
                return (
                  <div
                    key={index}
                    className="relative flex-shrink-0 rounded-2xl overflow-hidden group cursor-pointer"
                    style={{
                      width: `${cardWidthPx}px`,
                      aspectRatio: "4/3",
                      minHeight: "280px",
                      maxHeight: "420px",
                      transition: "transform 0.5s ease",
                      transform: isActive ? "scale(1)" : "scale(0.96)",
                      opacity: 1,
                    }}
                  >
                    {/* Background Image */}
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 767px) 84vw, (max-width: 1023px) 48vw, 31vw"
                    />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10 bg-gradient-to-t from-black/50 to-transparent">
                      <h3
                        className="text-xl md:text-2xl font-headline font-bold mb-1 drop-shadow-md"
                        style={{ color: "#ffffff" }}
                      >
                        {slide.title}
                      </h3>
                      <p
                        className="text-sm font-body drop-shadow-md"
                        style={{ color: "rgba(255, 255, 255, 0.9)" }}
                      >
                        {slide.subtitle}
                      </p>
                    </div>

                    {/* Top-right active indicator */}
                    {isActive && (
                      <div
                        className="absolute top-4 right-4 w-2 h-2 rounded-full"
                        style={{
                          background: "var(--color-primary)",
                          boxShadow: "0 0 8px var(--color-primary-fixed-dim)",
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
