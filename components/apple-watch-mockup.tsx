"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type WatchScreen = "score" | "health";

function pause(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

/**
 * Apple Watch Series 9 style mockup with animated READYPLAY score UI.
 * Cycles: score tap → score update → health glance → back
 */
export function AppleWatchMockup({ className = "" }: { className?: string }) {
  const [teamAScore, setTeamAScore] = useState(14);
  const [tapping, setTapping] = useState<string | null>(null);
  const [screen, setScreen] = useState<WatchScreen>("score");
  const alive = useRef(true);

  useEffect(() => {
    alive.current = true;

    async function loop() {
      while (alive.current) {
        // Wait, then simulate a tap on "+2"
        await pause(2800);
        if (!alive.current) break;

        setTapping("+2");
        await pause(380);
        if (!alive.current) break;

        setTeamAScore((s) => s + 2);
        setTapping(null);

        // Hold score view, then swipe to health
        await pause(3200);
        if (!alive.current) break;
        setScreen("health");

        await pause(3400);
        if (!alive.current) break;
        setScreen("score");

        await pause(1200);
      }
    }

    loop();
    return () => {
      alive.current = false;
    };
  }, []);

  return (
    <motion.div
      className={`relative mx-auto select-none ${className}`}
      style={{ width: 130, height: 164 }}
      initial={{ opacity: 0, y: 20, scale: 0.93 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Watch body — dark graphite aluminium */}
        <div
          className="relative shadow-[0_20px_60px_-12px_rgba(0,0,0,0.55)]"
          style={{
            width: 130,
            height: 164,
            borderRadius: 38,
            background: "linear-gradient(160deg, #3a3a3c 0%, #1c1c1e 60%, #111 100%)",
          }}
        >
          {/* Case highlight ring */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              borderRadius: 38,
              boxShadow: "inset 0 1px 1px rgba(255,255,255,0.12), inset 0 -1px 1px rgba(0,0,0,0.4)",
            }}
          />

          {/* Digital Crown */}
          <div
            className="absolute"
            style={{
              right: -5,
              top: "22%",
              width: 5,
              height: 28,
              borderRadius: "0 3px 3px 0",
              background: "linear-gradient(180deg, #4a4a4c 0%, #2c2c2e 100%)",
              boxShadow: "1px 0 3px rgba(0,0,0,0.4)",
            }}
          />

          {/* Side button */}
          <div
            className="absolute"
            style={{
              right: -5,
              top: "50%",
              width: 5,
              height: 18,
              borderRadius: "0 3px 3px 0",
              background: "linear-gradient(180deg, #4a4a4c 0%, #2c2c2e 100%)",
              boxShadow: "1px 0 3px rgba(0,0,0,0.4)",
            }}
          />

          {/* Band lugs */}
          <div
            className="absolute left-1/2 -translate-x-1/2 bg-neutral-800"
            style={{ top: -9, width: 32, height: 10, borderRadius: "4px 4px 0 0" }}
          />
          <div
            className="absolute left-1/2 -translate-x-1/2 bg-neutral-800"
            style={{ bottom: -9, width: 32, height: 10, borderRadius: "0 0 4px 4px" }}
          />

          {/* Screen bezel */}
          <div
            className="absolute overflow-hidden bg-black"
            style={{ inset: 6, borderRadius: 30 }}
          >
            <AnimatePresence mode="wait">
              {screen === "score" ? (
                <motion.div
                  key="score"
                  className="flex h-full flex-col"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Top label */}
                  <div className="pt-2 text-center">
                    <span
                      className="font-semibold uppercase"
                      style={{ fontSize: 7, letterSpacing: "0.15em", color: "#8e8e93" }}
                    >
                      READYPLAY
                    </span>
                  </div>

                  {/* Score */}
                  <div className="flex flex-1 items-center justify-center gap-2 px-2">
                    <div className="text-center">
                      <div style={{ fontSize: 7, color: "#636366", marginBottom: 1 }}>TEAM A</div>
                      <motion.div
                        key={teamAScore}
                        initial={{ scale: 1.5, color: "#dc2626" }}
                        animate={{ scale: 1, color: "#ffffff" }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        style={{ fontSize: 28, fontWeight: 700, lineHeight: 1, color: "#fff" }}
                      >
                        {teamAScore}
                      </motion.div>
                    </div>

                    <div style={{ fontSize: 12, color: "#48484a", fontWeight: 300 }}>–</div>

                    <div className="text-center">
                      <div style={{ fontSize: 7, color: "#636366", marginBottom: 1 }}>TEAM B</div>
                      <div style={{ fontSize: 28, fontWeight: 700, lineHeight: 1, color: "#fff" }}>12</div>
                    </div>
                  </div>

                  {/* Score buttons */}
                  <div className="flex gap-1 px-2.5 pb-2.5">
                    {["+1", "+2", "+3"].map((btn) => (
                      <motion.div
                        key={btn}
                        className="flex flex-1 items-center justify-center rounded-lg"
                        style={{ paddingTop: 5, paddingBottom: 5 }}
                        animate={{
                          backgroundColor:
                            tapping === btn ? "#dc2626" : "rgba(255,255,255,0.10)",
                          scale: tapping === btn ? 0.9 : 1,
                        }}
                        transition={{ duration: 0.14 }}
                      >
                        <span
                          style={{
                            fontSize: 9,
                            fontWeight: 700,
                            color: tapping === btn ? "#fff" : "#9ca3af",
                          }}
                        >
                          {btn}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="health"
                  className="flex h-full flex-col items-center justify-center gap-2 px-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span
                    className="font-semibold uppercase"
                    style={{ fontSize: 7, letterSpacing: "0.15em", color: "#8e8e93" }}
                  >
                    Activity
                  </span>

                  <div className="flex items-baseline gap-1">
                    <span style={{ fontSize: 14 }}>❤️</span>
                    <span style={{ fontSize: 22, fontWeight: 700, color: "#fff" }}>142</span>
                    <span style={{ fontSize: 8, color: "#8e8e93" }}>BPM</span>
                  </div>

                  <div
                    className="w-full rounded-lg text-center"
                    style={{ backgroundColor: "rgba(255,255,255,0.08)", padding: "4px 6px" }}
                  >
                    <div style={{ fontSize: 7, color: "#636366" }}>Active cal</div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: "#34d399" }}>380 kcal</div>
                  </div>

                  <div style={{ fontSize: 7, color: "#48484a" }}>VO₂ Max 42.3</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
