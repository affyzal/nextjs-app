'use client';
import Header from '@/components/Header';
import { useInView } from 'react-intersection-observer';
import { motion, Variants } from 'framer-motion';
import About from '@/pages/About';
import Experience from '@/pages/Experience';
import Contact from '@/pages/Contact';
import Work from '@/pages/Work';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const { ref: homeRef, inView: homeInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const container: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        when: 'beforeChildren',
        staggerChildren: 0.08,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  useEffect(() => {
    console.log('Testing API endpoint...');
    axios.get('http://127.0.0.1:8000/tester')
    .then((response) => { console.log('API Response:', response.data); })
    .catch((error) => { console.error('API Error:', error); })
    .finally(() => { console.log('API test completed.'); });
  }, []);

  return (
    <main className="min-h-screen bg-[#0a192f]">
      <Header />

      {/* Hero Section */}
      <motion.section
        ref={homeRef}
        initial="hidden"
        animate={homeInView ? 'visible' : 'hidden'}
        transition={{ duration: 0.6 }}
        id="home"
        className="min-h-screen flex flex-col justify-center pt-16 sm:pt-20 md:pt-0 md:items-center"
        variants={container}
      >
        <div className="w-full max-w-3xl mx-auto px-16">
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <motion.h2
              variants={item}
              className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-[#64ffda]"
            >
              Hello there, My name is
            </motion.h2>
            <motion.h1
              variants={item}
              className="max-w-3xl text-6xl font-semibold tracking-tight text-zinc-50"
            >
              Afzal Miah.
            </motion.h1>
            <motion.h1
              variants={item}
              className="max-w-3xl text-6xl font-semibold tracking-tight text-zinc-400"
            >
              I like to build things.
            </motion.h1>
            <motion.p
              variants={item}
              className="max-w-xl text-lg leading-8 text-zinc-400"
            >
              Software Engineer building meaningful, user-first digital products
              - currently shaping a map-based management platform at{' '}
              <a
                href="https://www.trubshaw.co/team-sherpa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#64ffda]"
              >
                Trubshaw Cumberlege
              </a>
              .
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <About />

      {/* Experience Section */}
      <Experience />

      {/* Work Section */}
      <Work />

      {/* Contact Section */}
      <Contact contactRef={contactRef} contactInView={contactInView} />

      {/* Footer */}
      <Footer />
    </main>
  );
}
