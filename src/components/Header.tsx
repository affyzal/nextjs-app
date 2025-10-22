"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const toggleMobile = () => setMobileOpen(!mobileOpen)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <header className="bg-slate-900/95 backdrop-blur sticky top-0 z-50 border-b border-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between h-16">
        {/* Branding / logo */}
        <button onClick={scrollToTop} className="text-xl font-bold hover:text-indigo-400 transition">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
        </button>

        {/* Desktop nav */}
        <nav className="hidden sm:flex gap-6 text-sm">
          <a href="#about" className="hover:text-[#64ffda] transition border-slate-800 rounded px-4 py-2"><span className="text-[#64ffda]">01.</span> About</a>
          <a href="#experience" className="hover:text-[#64ffda] transition border-slate-800 rounded px-4 py-2"><span className="text-[#64ffda]">02.</span> Experience</a>
          <a href="#work" className="hover:text-[#64ffda] transition border-slate-800 rounded px-4 py-2"><span className="text-[#64ffda]">03.</span> Work</a>
          <a href="#contact" className="hover:text-[#64ffda] transition border-slate-800 rounded px-4 py-2"><span className="text-[#64ffda]">04.</span> Contact</a>
          <Link href="/resume" className="hover:text-[#64ffda] transition border border-[#64ffda] rounded px-4 py-2"><span className="text-[#64ffda]">05.</span> Resume</Link>
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
