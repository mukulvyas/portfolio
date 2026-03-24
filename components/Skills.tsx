"use client";

import { motion } from "framer-motion";

const CATEGORIES = [
  {
    label: "Languages",
    accent: "indigo",
    border: "border-indigo-500/20",
    bg: "from-indigo-600/10 to-indigo-600/3",
    dot: "bg-indigo-400",
    glow: "shadow-indigo-500/10",
    skills: [
      { name: "Python", icon: "🐍" },
      { name: "C++", icon: "⚡" },
      { name: "SQL", icon: "🗄️" },
    ],
  },
  {
    label: "Libraries & Tools",
    accent: "cyan",
    border: "border-cyan-500/20",
    bg: "from-cyan-500/10 to-cyan-500/3",
    dot: "bg-cyan-400",
    glow: "shadow-cyan-500/10",
    skills: [
      { name: "NumPy", icon: "🔢" },
      { name: "Pandas", icon: "🐼" },
      { name: "Scikit-learn", icon: "🔬" },
    ],
  },
  {
    label: "Currently Learning",
    accent: "purple",
    border: "border-purple-500/20",
    bg: "from-purple-600/10 to-purple-600/3",
    dot: "bg-purple-400",
    glow: "shadow-purple-500/10",
    skills: [
      { name: "PyTorch", icon: "🔥" },
      { name: "LLMs", icon: "🤖" },
      { name: "Agentic AI", icon: "🧠" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-4 sm:px-6 lg:px-8 section-bg-secondary"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <p className="text-[#6366f1] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            Skills & Tools
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
            Technical Arsenal
          </h2>
          <p className="text-[var(--text-muted)] text-sm max-w-md mx-auto leading-relaxed">
            Technologies I work with — and what I&apos;m currently mastering.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, margin: "-60px" }}
              className={`rounded-2xl border ${cat.border} bg-gradient-to-br ${cat.bg} p-6 shadow-xl ${cat.glow}`}
            >
              {/* Category label */}
              <div className="flex items-center gap-2.5 mb-6">
                <span className={`w-2 h-2 rounded-full ${cat.dot}`} />
                <span className="text-[var(--text-primary)] font-semibold text-xs uppercase tracking-[0.15em]">
                  {cat.label}
                </span>
              </div>

              {/* Skill items */}
              <div className="space-y-2.5">
                {cat.skills.map((skill, j) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 + j * 0.07 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5, transition: { duration: 0.18 } }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-indigo-400/30 transition-all duration-200 cursor-default`}
                  >
                    <span className="text-lg leading-none">{skill.icon}</span>
                    <span className="text-[var(--text-primary)] font-medium text-sm">
                      {skill.name}
                    </span>
                    {cat.label === "Currently Learning" && (
                      <span className="ml-auto">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse block" />
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
