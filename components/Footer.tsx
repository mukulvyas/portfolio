"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-[var(--border-subtle)] section-bg-primary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
        >
          <p className="text-[var(--text-muted)]">
            © {year}{" "}
            <span className="gradient-text font-medium">Mukul Vyas</span>. All
            rights reserved.
          </p>
          <p className="text-[var(--text-muted)]">
            Built with{" "}
            <span className="text-[var(--text-secondary)]">Next.js</span>
            {" · "}
            <span className="text-[var(--text-secondary)]">Tailwind CSS</span>
            {" · "}
            <span className="text-[var(--text-secondary)]">Framer Motion</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
