'use client';
import { motion, type Variants } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { CalendarClock } from 'lucide-react';

const CONTACT_EMAIL = 'contact@afzalmiah.dev';
const bookingMailto = `mailto:${CONTACT_EMAIL}?${new URLSearchParams({
  subject: '20-minute intro call',
  body:
    "Hi Afzal,\n\nI'd like to schedule a 20-minute chat. Here are a few times that work for me (please include your timezone):\n\n\nThank you!",
}).toString()}`;

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

export default function Contact({
  contactRef,
  contactInView,
}: {
  contactRef: (node?: HTMLElement | null) => void;
  contactInView: boolean;
}) {
  return (
    <motion.section
      ref={contactRef}
      initial="hidden"
      animate={contactInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.6 }}
      id="contact"
      aria-labelledby="contact-heading"
      className="min-h-screen flex items-center scroll-mt-20"
      variants={container}
    >
      <div className="w-full max-w-3xl mx-auto px-16">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <motion.h2
            id="contact-heading"
            variants={item}
            className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-zinc-50"
          >
            <span className="text-[#64ffda]">04. </span>Let&apos;s Build
            Something Together
          </motion.h2>
          <motion.p
            variants={item}
            className="max-w-xl text-lg leading-8 text-zinc-400"
          >
            I’m always interested in new opportunities, collaborations, or just
            chatting about tech and design. Whether you have a question, a
            project, or just want to say hi - my inbox is open!
          </motion.p>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-16">
            <motion.a
              variants={item}
              href={`mailto:${CONTACT_EMAIL}`}
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 20px 4px rgba(100,255,218,0.25)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 260, damping: 16 }}
              className="inline-flex items-center justify-center px-5 py-2 border border-[#64ffda] rounded text-[#64ffda] font-medium hover:bg-[#64ffda]/10 transition origin-top focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#64ffda] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a192f]"
              style={{ transformOrigin: 'top center' }}
            >
              Say Hello
            </motion.a>

            <motion.a
              variants={item}
              href={bookingMailto}
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 20px 4px rgba(100,255,218,0.25)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 260, damping: 16 }}
              className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded bg-[#64ffda] text-[#0a192f] font-semibold hover:bg-[#64ffda]/90 transition origin-top focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#64ffda] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a192f]"
              style={{ transformOrigin: 'top center' }}
              aria-label="Request a 20-minute meeting by email"
            >
              <CalendarClock className="h-5 w-5 shrink-0" aria-hidden />
              Book 20 minutes
            </motion.a>

            {/* LinkedIn Button */}
            <motion.a
              variants={item}
              href="https://www.linkedin.com/in/afzal-miah/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 20px 4px rgba(100,255,218,0.25)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 260, damping: 16 }}
              className="w-10 h-10 flex items-center justify-center rounded border border-[#64ffda]/70 bg-[#0077B5] hover:bg-[#64ffda] text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#64ffda] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a192f]"
              aria-label="Afzal Miah on LinkedIn (opens in a new tab)"
            >
              <FaLinkedin size={20} />
            </motion.a>

            {/* GitHub Button */}
            <motion.a
              variants={item}
              href="https://github.com/affyzal"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 20px 4px rgba(100,255,218,0.25)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 260, damping: 16 }}
              className="w-10 h-10 flex items-center justify-center rounded border border-[#64ffda]/70 bg-[#171515] hover:bg-[#64ffda] text-white hover:text-[#0a192f] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#64ffda] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a192f]"
              aria-label="Afzal Miah on GitHub (opens in a new tab)"
            >
              <FaGithub />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
