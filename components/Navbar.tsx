"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Cloud } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Team", href: "#team" },
  { label: "Community", href: "#community" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(3,8,22,0.85)] backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-accent/10 border border-accent/30 group-hover:bg-accent/20 transition-colors duration-300">
                <Cloud size={20} className="text-accent" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-bold tracking-wide text-white">
                  AWSCC
                </span>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-accent/60 text-accent bg-accent/10 tracking-wider">
                  MAIT
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative px-5 py-2 text-[13px] font-medium tracking-wide uppercase text-gray-400 hover:text-white transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accent group-hover:w-3/4 transition-all duration-300" />
                </Link>
              ))}
              <Link
                href="#join"
                className="group ml-6 inline-flex items-center gap-2 px-6 py-2 text-[13px] font-semibold tracking-wide uppercase rounded-full border border-accent/60 text-accent hover:bg-accent hover:text-white hover:shadow-lg hover:shadow-accent/25 transition-all duration-300"
              >
                Join Us
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden relative z-50 p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute right-0 top-0 h-full w-72 bg-[#060d24]/95 backdrop-blur-xl border-l border-white/5 p-8 pt-24"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3 text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 }}
                  className="mt-4"
                >
                  <Link
                    href="#join"
                    onClick={() => setMobileOpen(false)}
                    className="block text-center px-5 py-3 text-sm font-semibold rounded-full bg-accent text-white hover:bg-accent/90 transition-all duration-300"
                  >
                    Join Us
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
