// components/About.tsx
"use client";
import { motion, type Variants } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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

export default function Contact({
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
  ]

  return (
      <motion.section
        ref={aboutRef}
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
        transition={{ duration: 0.6 }}
        id="contact" 
        className="min-h-screen flex items-center"
        variants={container}
      >
        <div className="w-full max-w-3xl mx-auto px-16">
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <motion.h2 variants={item} className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-[#64ffda]">
              04. Let&apos;s Build Something Together
            </motion.h2>
            <motion.p variants={item} className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              I’m always interested in new opportunities, collaborations, or just chatting about tech and design.
              Whether you have a question, a project, or just want to say hi — my inbox is open!            
            </motion.p>
            <div className="flex items-center gap-6 mt-16">
              {/* Email button */}
              <motion.a
                variants={item}
                href="mailto:affyzal@gmail.com"
                whileHover={{ scale: 1.04, boxShadow: "0 0 20px 4px rgba(100,255,218,0.25)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
                className="inline-block px-5 py-2 border border-[#64ffda] rounded text-[#64ffda] font-medium hover:bg-[#64ffda]/10 transition origin-top"
                style={{ transformOrigin: "top center" }}
              >
                Say Hello
              </motion.a>

              {/* LinkedIn Button */}
              <motion.a
                href="https://www.linkedin.com/in/afzal-miah/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, boxShadow: "0 0 20px 4px rgba(100,255,218,0.25)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
                className="w-10 h-10 flex items-center justify-center rounded border border-[#64ffda]/70 bg-[#0077B5] hover:bg-[#64ffda] text-white transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </motion.a>

              {/* GitHub Button */}
              <motion.a
                href="https://github.com/affyzal"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, boxShadow: "0 0 20px 4px rgba(100,255,218,0.25)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
                className="w-10 h-10 flex items-center justify-center rounded border border-[#64ffda]/70 bg-[#171515] hover:bg-[#64ffda] text-white hover:text-[#0a192f] transition"
                aria-label="GitHub"
              >
                <FaGithub />
              </motion.a>

            </div>
          </div>
        </div>
      </motion.section>
  );
}
