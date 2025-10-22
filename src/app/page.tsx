"use client";

import Header from "@/components/Header";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function Home() {
  const { ref: homeRef, inView: homeInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-[#0a192f]">
      <Header />
      
      {/* Hero Section */}
      <motion.section
        ref={homeRef}
        initial="hidden"
        animate={homeInView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        id="home" 
        className="min-h-screen flex items-center"
      >
        <div className="w-full max-w-3xl mx-auto px-16">
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h2 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-[#64ffda]">
              Hello there, My name is
            </h2>
            <h1 className="max-w-3xl text-6xl font-semibold tracking-tight text-black dark:text-zinc-50">
              Afzal Miah.
            </h1>
            <h1 className="max-w-3xl text-6xl font-semibold tracking-tight text-zinc-600 dark:text-zinc-400">
              I attempt to build useful things.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Software Engineer building meaningful, user-first digital products — currently shaping a map-based management platform at <a href="https://www.trubshaw.co/team-sherpa" target="_blank" rel="noopener noreferrer" className="text-[#64ffda]">Trubshaw Cumberlege</a>.
            </p>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
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

      {/* Experience Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        id="experience" 
        className="min-h-screen flex items-center"
      >
        <div className="w-full max-w-3xl mx-auto px-16">
          <h2 className="flex items-center gap-2 text-2xl font-semibold text-black dark:text-zinc-50 mb-8">
            <span className="text-[#64ffda]">02.</span> Where I&apos;ve Worked
          </h2>
          <div className="text-zinc-600 dark:text-zinc-400">
            {/* Add your experience content here */}
            <p className="mb-4">Experience section coming soon...</p>
          </div>
        </div>
      </motion.section>

      {/* Work Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        id="work" 
        className="min-h-screen flex items-center"
      >
        <div className="w-full max-w-3xl mx-auto px-16">
          <h2 className="flex items-center gap-2 text-2xl font-semibold text-black dark:text-zinc-50 mb-8">
            <span className="text-[#64ffda]">03.</span> Some Things I&apos;ve Built
          </h2>
          <div className="text-zinc-600 dark:text-zinc-400">
            {/* Add your work/projects content here */}
            <p className="mb-4">Projects section coming soon...</p>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        id="contact" 
        className="min-h-screen flex items-center"
      >
        <div className="w-full max-w-3xl mx-auto px-16">
          <h2 className="flex items-center gap-2 text-2xl font-semibold text-black dark:text-zinc-50 mb-8">
            <span className="text-[#64ffda]">04.</span> What&apos;s Next?
          </h2>
          <div className="text-zinc-600 dark:text-zinc-400">
            {/* Add your contact content here */}
            <p className="mb-4">Get in touch section coming soon...</p>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
