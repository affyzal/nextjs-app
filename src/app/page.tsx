"use client"
import Header from "@/components/Header"
import { useInView } from "react-intersection-observer"
import { motion, Variants } from "framer-motion"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Contact from "@/components/Contact"
import Work from "@/components/Work"
import Footer from "@/components/Footer"

export default function Home() {
  const { ref: homeRef, inView: homeInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });


  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

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
    <main className="min-h-screen bg-zinc-50 dark:bg-[#0a192f]">
      <Header />
      
      {/* Hero Section */}
      <motion.section
        ref={homeRef}
        initial="hidden"
        animate={homeInView ? "visible" : "hidden"}
        transition={{ duration: 0.6 }}
        id="home" 
        className="min-h-screen flex items-center"
        variants={container}
      >
        <div className="w-full max-w-3xl mx-auto px-16">
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <motion.h2 variants={item} className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-[#64ffda]">
              Hello there, My name is
            </motion.h2>
            <motion.h1 variants={item} className="max-w-3xl text-6xl font-semibold tracking-tight text-black dark:text-zinc-50">
              Afzal Miah.
            </motion.h1>
            <motion.h1 variants={item}  className="max-w-3xl text-6xl font-semibold tracking-tight text-zinc-600 dark:text-zinc-400">
              I like to build things.
            </motion.h1>
            <motion.p variants={item} className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Software Engineer building meaningful, user-first digital products - currently shaping a map-based management platform at <a href="https://www.trubshaw.co/team-sherpa" target="_blank" rel="noopener noreferrer" className="text-[#64ffda]">Trubshaw Cumberlege</a>.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <About
        aboutRef={aboutRef}
        aboutInView={aboutInView}
      />

      {/* Experience Section */}
      <Experience />

      {/* Work Section */}
      <Work />

      {/* Contact Section */}
      <Contact
        contactRef={contactRef}
        contactInView={contactInView}
      />

      {/* Footer */}
      <Footer />

    </main>
  )
}
