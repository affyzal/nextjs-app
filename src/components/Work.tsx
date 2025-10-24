// components/About.tsx
"use client";
import { motion, type Variants } from "framer-motion";
import { RefObject } from "react";
import Image from "next/image";
import EmblaCarousel from "./embla/EmblaCarousel";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
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

export default function Work({
  aboutRef,
  aboutInView,
}: {
  aboutRef: (node?: HTMLElement | null) => void
  aboutInView: boolean
}) {
    const OPTIONS = { loop: true }
    const SLIDES = [
    {
      title: "Portfolio Website",
      desc: "Built with Next.js, Tailwind, and Framer Motion.",
      img: "/max.jpg",
      link: "https://example.com",
    },
    {
      title: "Analytics Dashboard",
      desc: "Interactive data visualization with API integration.",
      img: "/max.jpg",
    },
  ];

  return (
    <motion.section
      id="work"
      className="min-h-screen flex items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}  // animate on first 25% in-view
      variants={container}
    >
      <div className="w-full max-w-5xl mx-auto px-16">
        <h2 className="flex items-center gap-2 text-2xl font-semibold text-black dark:text-zinc-50 mb-8">
          <span className="text-[#64ffda]">03.</span> Some Things I&apos;ve Built
        </h2>
        <EmblaCarousel
          options={OPTIONS}
          slides={SLIDES}
        />
      </div>
    </motion.section>
  );
}
