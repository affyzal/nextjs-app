"use client";

import Link from "next/link";
import { useState } from "react";
import { House, Menu, X } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

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
  };


  return (
    <header className="bg-slate-900/95 backdrop-blur sticky top-0 z-50 border-b border-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between h-16">
        {/* Branding / logo */}
        <motion.a
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
          <motion.a href="#about" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 260, damping: 16 }} className="border-slate-800 rounded px-4 py-2 hover:text-[#64ffda]"><span className="text-[#64ffda]">01.</span> About</motion.a>
          <motion.a href="#experience" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 260, damping: 16 }} className="border-slate-800 rounded px-4 py-2 hover:text-[#64ffda]"><span className="text-[#64ffda]">02.</span> Experience</motion.a>
          <motion.a href="#work" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 260, damping: 16 }} className="border-slate-800 rounded px-4 py-2 hover:text-[#64ffda]"><span className="text-[#64ffda]">03.</span> Work</motion.a>
          <motion.a href="#contact" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 260, damping: 16 }} className="border-slate-800 rounded px-4 py-2 hover:text-[#64ffda]"><span className="text-[#64ffda]">04.</span> Contact</motion.a>
          <motion.a href="/api/resume" download whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 260, damping: 16 }} className="border border-[#64ffda] rounded px-4 py-2 hover:text-[#64ffda]" aria-label="Download resume"><span className="text-[#64ffda]">05.</span> Resume</motion.a>
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
            <li><Link href="/projects" className="block hover:text-indigo-400">Projects</Link></li>
            <li><Link href="/about" className="block hover:text-indigo-400">About</Link></li>
            <li><Link href="/contact" className="block hover:text-indigo-400">Contact</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
