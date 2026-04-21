"use client";

import { motion } from "framer-motion";
import { MotionReveal } from "@/components/motion-reveal";

const questions = [
  "Who is playing?",
  "Which court?",
  "What time?",
  "Is it full?",
  "What was the score last week?",
];

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -18 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Problem() {
  return (
    <section
      id="problem"
      className="min-h-[85vh] scroll-mt-20 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <MotionReveal>
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
            The problem
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
            Pickup forgets itself.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-600">
            You played your best game of the year last Tuesday. The only proof is
            in someone&apos;s head. By the weekend, the group chat has buried it
            under logistics — same questions, different thread, every single week.
          </p>
        </MotionReveal>

        <MotionReveal className="mt-16 w-full max-w-lg" delay={0.1}>
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
            <motion.div
              className="flex flex-col gap-3"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {questions.map((line, i) => (
                <motion.div
                  key={line}
                  variants={itemVariants}
                  className="flex items-center gap-3 rounded-2xl bg-neutral-50 px-4 py-3 text-left text-neutral-600"
                  style={{ opacity: undefined }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                >
                  <span
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{
                      backgroundColor: `hsl(0 0% ${72 - i * 7}%)`,
                    }}
                  />
                  <span className="text-[15px]">{line}</span>
                </motion.div>
              ))}
            </motion.div>
            <motion.p
              className="mt-6 text-sm text-neutral-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.65, duration: 0.4 }}
            >
              Same questions. Different threads. Every week.
            </motion.p>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
