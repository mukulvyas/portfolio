"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Radial glow — indigo, top-left */}
        <motion.div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[120px]"
          animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.8, 0.6] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Radial glow — cyan, bottom-right */}
        <motion.div
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-cyan-500/8 blur-[120px]"
          animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(99,102,241,0.8) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status badge */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-8"
        >
          <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-indigo-500/8 border border-indigo-500/20 text-indigo-300 text-xs font-medium tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400" />
            </span>
            Open to opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-bold tracking-tight leading-[1.06] mb-4"
        >
          <span className="text-[var(--text-primary)]">Mukul </span>
          <span className="hero-gradient-text">Vyas</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl font-medium text-[var(--text-secondary)] mb-4 tracking-tight"
        >
          Aspiring Machine Learning Engineer
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base text-[var(--text-muted)] max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Building machine learning systems and exploring{" "}
          <span className="text-[#818cf8] font-medium">LLMs</span> &{" "}
          <span className="text-[#22d3ee] font-medium">AI</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#06b6d4] text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-shadow duration-300"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-transparent text-[var(--text-primary)] font-semibold text-sm border border-[var(--border-subtle)] hover:border-[#6366f1]/50 hover:bg-[#6366f1]/8 transition-all duration-300"
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[var(--text-muted)] text-[11px] tracking-widest uppercase"
        >
          <span>Scroll</span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-[#6366f1]/60 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
