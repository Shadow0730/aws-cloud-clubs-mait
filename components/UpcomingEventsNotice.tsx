"use client";

import { useEffect, useState } from "react";
import * as motion from "framer-motion/client";
import Image from "next/image";

type NoticePhase = "loading" | "cooking" | "message";

export default function UpcomingEventsNotice() {
  const [phase, setPhase] = useState<NoticePhase>("loading");

  useEffect(() => {
    const cookingTimer = window.setTimeout(() => setPhase("cooking"), 1700);
    const messageTimer = window.setTimeout(() => setPhase("message"), 3300);

    return () => {
      window.clearTimeout(cookingTimer);
      window.clearTimeout(messageTimer);
    };
  }, []);

  return (
    <div className="min-h-48 rounded-3xl border-2 border-outline-variant/30 bg-surface-container-high p-10 text-center flex flex-col items-center justify-center">
      {phase === "loading" && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
          role="status"
          aria-live="polite"
        >
          <p className="text-on-surface-variant mb-4">Getting things ready...</p>
          <div
            className="h-3 w-full overflow-hidden rounded-full bg-surface-container-highest"
            role="progressbar"
            aria-label="Loading upcoming events"
          >
            <motion.div
              className="h-full origin-left rounded-full bg-primary"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}

      {phase === "cooking" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center gap-2"
          role="status"
          aria-live="polite"
        >
          <Image
            src="/event/chef.gif"
            alt=""
            width={64}
            height={64}
            unoptimized
            className="h-16 w-16 object-contain"
          />
          <p className="font-headline font-bold text-on-surface">
            Cooking up something exciting...
          </p>
        </motion.div>
      )}

      {phase === "message" && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center"
          role="status"
          aria-live="polite"
        >
          <h3 className="text-2xl font-headline font-bold text-on-surface mb-3">
            Stay tuned!
          </h3>
          <p className="text-on-surface-variant">
            We&apos;re cooking up exciting events.{" "}
            <Image
              src="/event/eye.gif"
              alt=""
              width={32}
              height={32}
              unoptimized
              className="inline-block h-8 w-8 align-middle"
              style={{ transform: "scaleX(-1)" }}
            />
          </p>
        </motion.div>
      )}
    </div>
  );
}
