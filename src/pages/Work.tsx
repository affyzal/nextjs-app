// components/About.tsx
'use client';
import { motion, type Variants } from 'framer-motion';
import EmblaCarousel from '../components/embla/EmblaCarousel';

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
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

export default function Work() {
  const OPTIONS = { loop: true };
  const SLIDES = [
    {
      title: 'Sentiment Analysis',
      desc: 'An interactive web app that analyzes the emotional tone of presidential debates using natural language processing. Each candidate’s statements are scored for positive, neutral, or negative sentiment, and visualized over time to reveal shifts in tone, intensity, and audience reaction.',
      img: '/sent.png',
      link: 'https://sentiment.afzalmiah.dev',
    },
    {
      title: 'Currency Converter',
      desc: 'A web application that allows users to convert amounts between different currencies using real-time exchange rates. The app features a user-friendly interface where users can select their desired currencies, input the amount to convert, and receive accurate conversion results instantly.',
      img: '/fx.png',
      link: 'https://fx.afzalmiah.dev',
      video: '',
    },
    {
      title: '2D Platformer Game',
      desc: "Players navigate through challenging levels, avoiding obstacles and enemies built using GoDot. It's a fun small game which features pixel art graphics, catchy  music, and responsive controls for an engaging gaming experience.",
      img: '',
      link: '',
      video: 'https://www.youtube.com/embed/_fX05zkj7ps',
    },
  ];

  return (
    <motion.section
      id="work"
      aria-labelledby="work-heading"
      className="min-h-screen flex items-center scroll-mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }} // animate on first 25% in-view
      variants={container}
    >
      <div className="w-full max-w-5xl mx-auto px-16">
        <motion.h2
          id="work-heading"
          variants={item}
          className="flex items-center gap-2 text-2xl font-semibold text-zinc-50 mb-8"
        >
          <span className="text-[#64ffda]">03.</span> Some Things I&apos;ve
          Built
        </motion.h2>
        <motion.div variants={item}>
          <EmblaCarousel options={OPTIONS} slides={SLIDES} />
        </motion.div>
      </div>
    </motion.section>
  );
}
