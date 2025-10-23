"use client";

import Link from "next/link";
import { useState } from "react";
import { House, Menu, X } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { Variants } from "framer-motion";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const toggleMobile = () => setMobileOpen(!mobileOpen)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const pathname = usePathname()

  const onHomeClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (pathname === "/") {
      // Stay on the same page, smooth scroll, and clear the hash
      e.preventDefault()
      scrollToTop()
      // Remove #... from the URL without reloading
      history.replaceState(null, "", "/")
    }
    // else: allow Link to navigate to "/"
  }

  const container: Variants = {
    hidden:  { opacity: 0, y: 24 },
    visible: {
      opacity: 1, y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        when: "beforeChildren",
        staggerChildren: 0.08,
      },
    },
  }

  const item: Variants = {
    hidden:  { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }



  return (
    <motion.header variants={container} animate="visible" initial="hidden" className="bg-slate-900/95 backdrop-blur sticky top-0 z-50 border-b border-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between h-16">
        {/* Branding / logo */}
        <motion.a
          variants={item}
          href="/"
          onClick={onHomeClick}
          whileHover={{ scale: 1.25 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 260, damping: 16 }}
          className="inline-flex items-center justify-center"
          style={{ lineHeight: 0, transformOrigin: "center" }}
          aria-label="Scroll to top"
        >
          <House color="#64ffda" className="w-6 h-6" />
        </motion.a>
        {/* Desktop nav */}
        <nav className="hidden sm:flex gap-6 text-sm">
          <motion.a variants={item} href="#about" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 260, damping: 16 }} className="border-slate-800 rounded px-4 py-2 hover:text-[#64ffda]"><span className="text-[#64ffda]">01.</span> About</motion.a>
          <motion.a variants={item} href="#experience" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 260, damping: 16 }} className="border-slate-800 rounded px-4 py-2 hover:text-[#64ffda]"><span className="text-[#64ffda]">02.</span> Experience</motion.a>
          <motion.a variants={item} href="#work" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 260, damping: 16 }} className="border-slate-800 rounded px-4 py-2 hover:text-[#64ffda]"><span className="text-[#64ffda]">03.</span> Work</motion.a>
          <motion.a variants={item} href="#contact" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 260, damping: 16 }} className="border-slate-800 rounded px-4 py-2 hover:text-[#64ffda]"><span className="text-[#64ffda]">04.</span> Contact</motion.a>
          <motion.a variants={item} href="/api/resume" download whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 260, damping: 16 }} className="border border-[#64ffda] rounded px-4 py-2 hover:text-[#64ffda]" aria-label="Download resume"><span className="text-[#64ffda]">05.</span> Resume</motion.a>
        </nav>
        {/* Mobile menu toggle */}
        <button
          className="sm:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label="Toggle menu"
          onClick={toggleMobile}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav panel */}
      {mobileOpen && (
        <nav className="sm:hidden bg-slate-900 border-t border-slate-800">
          <ul className="px-6 py-4 space-y-3">
            <li>
              <Link href="/#about" className="block hover:text-indigo-400" onClick={() => setMobileOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/#experience" className="block hover:text-indigo-400" onClick={() => setMobileOpen(false)}>
                Experience
              </Link>
            </li>
            <li>
              <Link href="/#work" className="block hover:text-indigo-400" onClick={() => setMobileOpen(false)}>
                Work
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="block hover:text-indigo-400" onClick={() => setMobileOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/api/resume" className="block hover:text-indigo-400" onClick={() => setMobileOpen(false)}>
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      )}

    </motion.header>
  );
}
