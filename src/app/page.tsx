"use client"
import Header from "@/components/Header"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import About from "@/components/About"

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
              I like to build things.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Software Engineer building meaningful, user-first digital products — currently shaping a map-based management platform at <a href="https://www.trubshaw.co/team-sherpa" target="_blank" rel="noopener noreferrer" className="text-[#64ffda]">Trubshaw Cumberlege</a>.
            </p>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <About
        aboutRef={aboutRef}
        aboutInView={aboutInView}
        fadeIn={fadeIn}
      />
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
