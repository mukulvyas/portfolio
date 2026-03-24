"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function SunIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" strokeWidth="2" strokeLinecap="round" />
      <path
        strokeWidth="2"
        strokeLinecap="round"
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
      />
    </svg>
  );
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  const updateActiveSection = useCallback(() => {
    const sections = NAV_LINKS.map((l) => l.href.slice(1));
    const scrollY = window.scrollY + 80;

    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el && el.offsetTop <= scrollY) {
        setActiveSection(sections[i]);
        return;
      }
    }
    setActiveSection("home");
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      updateActiveSection();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [updateActiveSection]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navBg = scrolled
    ? isDark
      ? "bg-[#030308]/85 backdrop-blur-xl border-b border-[#1e1e3a]/60 shadow-lg shadow-black/20"
      : "bg-white/85 backdrop-blur-xl border-b border-slate-200/70 shadow-lg shadow-black/5"
    : "bg-transparent";

  const logoText = isDark ? "text-white" : "text-slate-800";
  const linkActive = isDark ? "text-white" : "text-slate-900";
  const linkInactive = isDark
    ? "text-[#94a3b8] hover:text-white"
    : "text-slate-500 hover:text-slate-900";
  const pillBg = isDark
    ? "bg-[#6366f1]/10 border border-[#6366f1]/20"
    : "bg-indigo-50 border border-indigo-200";
  const mobileMenuBg = isDark
    ? "bg-[#0a0a14]/95 backdrop-blur-xl border-b border-[#1e1e3a]/60"
    : "bg-white/95 backdrop-blur-xl border-b border-slate-200/70";
  const mobileLinkActive = isDark
    ? "text-white bg-[#6366f1]/10 border border-[#6366f1]/20"
    : "text-indigo-700 bg-indigo-50 border border-indigo-200";
  const mobileLinkInactive = isDark
    ? "text-[#94a3b8] hover:text-white hover:bg-[#1e1e3a]/60"
    : "text-slate-500 hover:text-slate-800 hover:bg-slate-100";
  const hamburgerColor = isDark
    ? "text-[#94a3b8] hover:text-white hover:bg-[#1e1e3a]"
    : "text-slate-500 hover:text-slate-800 hover:bg-slate-100";

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366f1] to-[#06b6d4] flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span
              className={`font-semibold text-sm hidden sm:block ${logoText}`}
            >
              Mukul Vyas
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isActive ? linkActive : linkInactive
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className={`absolute inset-0 rounded-lg ${pillBg}`}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Right side: theme toggle + hamburger */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggle}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              aria-label={
                isDark ? "Switch to light theme" : "Switch to dark theme"
              }
              className={`relative w-14 h-7 rounded-full flex items-center transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 ${
                isDark
                  ? "bg-[#1e1e3a] border border-[#2d2d5a]"
                  : "bg-indigo-100 border border-indigo-200"
              }`}
            >
              {/* Track icons */}
              <span
                className={`absolute left-1.5 transition-opacity duration-300 ${isDark ? "opacity-100" : "opacity-40"}`}
              >
                <MoonIcon />
              </span>
              <span
                className={`absolute right-1.5 transition-opacity duration-300 ${isDark ? "opacity-40" : "opacity-100"}`}
              >
                <SunIcon />
              </span>
              {/* Thumb */}
              <motion.span
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`absolute w-5 h-5 rounded-full shadow-md transition-colors duration-300 ${
                  isDark ? "left-1 bg-[#6366f1]" : "left-[30px] bg-amber-400"
                }`}
              />
            </motion.button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden relative w-9 h-9 flex items-center justify-center rounded-lg transition-colors ${hamburgerColor}`}
              aria-label="Toggle navigation"
            >
              <span
                className={`absolute block w-5 h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? "rotate-45" : "-translate-y-[6px]"}`}
              />
              <span
                className={`absolute block w-5 h-0.5 bg-current transition-all duration-200 ${menuOpen ? "opacity-0 scale-x-0" : "opacity-100"}`}
              />
              <span
                className={`absolute block w-5 h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? "-rotate-45" : "translate-y-[6px]"}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`md:hidden overflow-hidden ${mobileMenuBg}`}
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive ? mobileLinkActive : mobileLinkInactive
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
