// components/About.tsx
"use client";
import { motion, type Variants } from "framer-motion";
import { RefObject } from "react";
import Image from "next/image";

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

export default function About({
  aboutRef,
  aboutInView,
}: {
  aboutRef: (node?: HTMLElement | null) => void
  aboutInView: boolean
}) {
  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Ruby on Rails",
    "Next.js",
    "React Native",
    "Docker",
    "PostgreSQL",
    "Git & GitHub",
    "Tailwind CSS",
  ]

  return (
    <motion.section
      id="about"
      className="min-h-screen flex items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}  // animate on first 25% in-view
      variants={container}
    >
      <div className="w-full max-w-5xl mx-auto px-16">
        <motion.h2
          variants={item}
          className="flex items-center gap-2 text-2xl font-semibold text-black dark:text-zinc-50 mb-8 pt-20"
        >
          <span className="text-[#64ffda]">01.</span> About Me
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 text-zinc-600 dark:text-zinc-400 space-y-4">
          <motion.p variants={item}>
            Hey, I’m a full-stack software engineer with a soft spot for 
            <span className="text-[#64ffda]"> React</span>, 
            <span className="text-[#64ffda]"> Ruby on Rails</span>, and 
            <span className="text-[#64ffda]"> clean, purposeful user experiences</span>.
            Whether it’s crafting an interactive <span className="text-[#64ffda]">Mapbox</span> visualization or tightening up <span className="text-[#64ffda]">accessibility</span> details, 
            I love bridging <span className="text-[#64ffda]">design</span> and <span className="text-[#64ffda]">engineering</span>.
          </motion.p>
          <motion.p variants={item}>
            I believe the best software feels invisible - 
            <span className="text-[#64ffda]"> thoughtful interfaces</span>, 
            <span className="text-[#64ffda]"> fast interactions</span>, 
            and code that <span className="text-[#64ffda]">scales gracefully</span>.
          </motion.p>
          <motion.p variants={item}>
            I’m currently at <span className="text-[#64ffda]">Trubshaw Cumberlege</span>, where I help shape 
            <span className="text-[#64ffda]"> user-centric features</span> across web and mobile. 
            I care about <span className="text-[#64ffda]">good design</span>, 
            <span className="text-[#64ffda]">maintainable code</span>, and those 
            <span className="text-[#64ffda]"> little UI details that make you smile</span>.
          </motion.p>
          <motion.p variants={item}>
            Here are a few technologies I’ve been working with recently — and I’m always exploring 
            <span className="text-[#64ffda]"> new tools</span> that make building 
            <span className="text-[#64ffda]"> delightful software</span> faster and cleaner:
          </motion.p>



            <motion.ul
              className="grid grid-cols-2 gap-2 mt-4"
              variants={container} // reuse for stagger within the list
            >
              {skills.map((t) => (
                <motion.li key={t} variants={item} className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span> {t}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <motion.div className="relative group" variants={item}>
            <div
              className="relative inline-block transition-transform duration-300 ease-out group-hover:scale-[1.03]"
              style={{ boxShadow: "0 0 30px 2px rgba(100, 255, 218, 0.55)", borderRadius: 12 }}
            >
              <div className="relative w-full max-w-xs bg-[#64ffda]/10 rounded-xl overflow-hidden">
                <Image
                  src="/afzal.jpg"
                  alt="Afzal Miah"
                  width={500}
                  height={500}
                  className="w-full h-auto object-contain rounded-xl"
                  sizes="(max-width: 768px) 80vw, 300px"
                  priority
                />
              </div>
            </div>
          </motion.div>


        </div>
      </div>
    </motion.section>
  );
}
