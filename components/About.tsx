"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    icon: "🧠",
    title: "Machine Learning Focus",
    desc: "Deepening expertise in ML fundamentals — from model training and evaluation to real-world deployment.",
  },
  {
    icon: "🤖",
    title: "LLMs & NLP",
    desc: "Exploring large language models, prompt engineering, and natural language processing applications.",
  },
  {
    icon: "🔬",
    title: "Project-Driven Learning",
    desc: "Learning by building — each project is an opportunity to apply ML to practical, impactful problems.",
  },
];

const stats = [
  { value: "4+", label: "ML Projects" },
  { value: "3+", label: "Languages" },
  { value: "∞", label: "Curiosity" },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-28 px-4 sm:px-6 lg:px-8 section-bg-primary"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <p className="text-[#6366f1] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* ── Left: Bio + Stats ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-5"
          >
            <p className="text-[var(--text-secondary)] text-base leading-relaxed">
              I'm{" "}
              <span className="text-[var(--text-primary)] font-semibold">
                Mukul Vyas
              </span>
              , an aspiring Machine Learning Engineer currently focused on
              mastering core ML concepts and applying them to solve real-world
              problems.
            </p>
            <p className="text-[var(--text-secondary)] text-base leading-relaxed">
              My primary interest lies in{" "}
              <span className="text-[#818cf8] font-medium">LLMs</span>,{" "}
              <span className="text-[#818cf8] font-medium">NLP</span>, and{" "}
              <span className="text-[#22d3ee] font-medium">Agentic AI</span> —
              areas that are reshaping how machines understand and interact with
              the world.
            </p>
            <p className="text-[var(--text-secondary)] text-base leading-relaxed">
              I learn best by building. Every project I take on deepens my
              understanding and pushes me closer to building truly intelligent
              systems.
            </p>

            {/* Stats */}
            <div className="flex gap-8 pt-4 border-t border-[var(--border-subtle)]">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold gradient-text">{s.value}</p>
                  <p className="text-[var(--text-muted)] text-xs mt-0.5">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Highlight Cards ── */}
          <div className="space-y-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="glass rounded-2xl p-5 hover:border-[#6366f1]/25 transition-colors duration-300 cursor-default"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl leading-none mt-0.5">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="text-[var(--text-primary)] font-semibold text-sm mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
