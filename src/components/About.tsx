// components/About.tsx
"use client";
import { motion } from "framer-motion";
import { RefObject } from "react";

export default function About({
  aboutRef,
  aboutInView,
  fadeIn,
}: {
  aboutRef: RefObject<HTMLElement>;
  aboutInView: boolean;
  fadeIn: Record<string, any>;
}) {
  return (
      <motion.section
        ref={aboutRef}
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        id="about" 
        className="min-h-screen flex items-center"
      >
        <div className="w-full max-w-5xl mx-auto px-16">
          <h2 className="flex items-center gap-2 text-2xl font-semibold text-black dark:text-zinc-50 mb-8 pt-20">
            <span className="text-[#64ffda]">01.</span> About Me
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 text-zinc-600 dark:text-zinc-400 space-y-4">
              <p>
                Hey, I’m Afzal - a full-stack software engineer based in Edinburgh who loves building things that feel great to use.
              </p>
              <p>
                I’m a full-stack developer with a soft spot for React, Ruby on Rails, and a clean, purposeful user experience. 
                Whether it’s crafting an interactive Mapbox visualization or tightening up accessibility details, I love bridging design and engineering.
              </p>
              <p>
                I’m currently at Trubshaw Cumberlege, where I help shape user-centric features across web and mobile. I care a lot about good design, maintainable code, and those little UI details that make you smile.
              </p>
              <p>Here are a few technologies I&apos;ve been working with recently:</p>
              <ul className="grid grid-cols-2 gap-2 mt-4">
                <li className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span> JavaScript (ES6+)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span> TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span> React
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span> Ruby on Rails
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span> Next.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span> React Native
                </li>
              </ul>
            </div>
            <div className="relative group">
              <div className="relative w-full aspect-square bg-[#64ffda]/10 rounded">
                {/* Add your profile image here */}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
  )
}
