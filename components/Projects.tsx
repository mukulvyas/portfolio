"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    title: "Intelligent Legal AI Assistant",
    description: [
      "Built an AI-powered system to analyze and interact with legal documents using LLMs",
      "Features document summarization, a chatbot interface, and multi-document querying",
      "Applies NLP to a real-world legal domain, enabling efficient document understanding",
    ],
    tech: ["Python", "Streamlit", "LLMs", "NLP"],
    github: "https://github.com/mukulvyas",
  },
  {
    title: "Disease Prediction using Machine Learning",
    description: [
      "Developed an ML model to predict diseases based on patient-reported symptoms",
      "Applied classification techniques to a healthcare dataset for practical diagnosis support",
    ],
    tech: ["Python", "Scikit-learn", "Pandas"],
    github: "https://github.com/mukulvyas",
  },
  {
    title: "Speaker Identification System",
    description: [
      "Built a system to identify speakers from audio recordings using extracted audio features",
      "Applied machine learning techniques to audio processing and signal analysis",
    ],
    tech: ["Python", "NumPy"],
    github: "https://github.com/mukulvyas",
  },
  {
    title: "Forest Fire Prediction",
    description: [
      "Built an ML model to predict forest fire occurrence based on environmental conditions",
      "Applied regression and classification methods to environmental science datasets",
    ],
    tech: ["Python", "Scikit-learn"],
    github: "https://github.com/mukulvyas",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 px-4 sm:px-6 lg:px-8 section-bg-primary"
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
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
            Featured Projects
          </h2>
          <p className="text-[var(--text-muted)] text-sm max-w-md mx-auto leading-relaxed">
            Real ML projects built to solve practical problems and deepen my
            understanding of intelligent systems.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/mukulvyas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-medium text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-[#6366f1]/30 hover:text-[var(--text-primary)] hover:bg-[#6366f1]/5 transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            View all on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
