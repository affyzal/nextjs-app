'use client';
import { getCalApi } from '@calcom/embed-react';
import { motion, type Variants } from 'framer-motion';
import { CalendarClock } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

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

type CalApi = Awaited<ReturnType<typeof getCalApi>>;

export default function Contact({
  contactRef,
  contactInView,
}: {
  contactRef: (node?: HTMLElement | null) => void;
  contactInView: boolean;
}) {
  /** Event path like `yourname/20min` (from Cal.com → event type → embed). */
  const calLink = process.env.NEXT_PUBLIC_CALCOM_CAL_LINK?.trim();
  /** Cloud: omit. Self-hosted: your Cal.com base URL, e.g. `https://cal.example.com`. */
  const calOrigin = process.env.NEXT_PUBLIC_CALCOM_ORIGIN?.trim();
  /** Self-hosted only: where `embed.js` is served, e.g. `https://cal.example.com/embed/embed.js`. */
  const embedJsUrl = process.env.NEXT_PUBLIC_CALCOM_EMBED_JS_URL?.trim();

  const [calReady, setCalReady] = useState(false);
  const calApiRef = useRef<CalApi | null>(null);

  useEffect(() => {
    if (!calLink) return;

    let cancelled = false;

    void getCalApi(embedJsUrl ? { embedJsUrl } : undefined).then((api) => {
      if (cancelled) return;
      if (calOrigin) {
        api('init', { origin: calOrigin });
      }
      calApiRef.current = api;
      setCalReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, [calLink, calOrigin, embedJsUrl]);

  const openCalModal = useCallback(() => {
    if (!calLink || !calApiRef.current) return;
    calApiRef.current('modal', {
      calLink,
      ...(calOrigin ? { calOrigin } : {}),
    });
  }, [calLink, calOrigin]);

  return (
    <motion.section
      ref={contactRef}
      initial="hidden"
      animate={contactInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.6 }}
      id="contact"
      className="min-h-screen flex items-center"
      variants={container}
    >
      <div className="w-full max-w-3xl mx-auto px-16">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <motion.h2
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
            project, or just want to say hi - my inbox is open. Alternatively, Prefer to talk
            live? Grab a 20-minute slot and lets have a chat.
          </motion.p>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:justify-start">
            {/* Email button */}
            <motion.a
              variants={item}
              href="mailto:contact@afzalmiah.dev"
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 20px 4px rgba(100,255,218,0.25)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 260, damping: 16 }}
              className="inline-block px-5 py-2 border border-[#64ffda] rounded text-[#64ffda] font-medium hover:bg-[#64ffda]/10 transition origin-top"
              style={{ transformOrigin: 'top center' }}
            >
              Say Hello
            </motion.a>

            {calLink ? (
              <motion.button
                type="button"
                variants={item}
                onClick={openCalModal}
                disabled={!calReady}
                whileHover={
                  calReady
                    ? {
                        scale: 1.1,
                        boxShadow: '0 0 20px 4px rgba(100,255,218,0.25)',
                      }
                    : undefined
                }
                whileTap={calReady ? { scale: 0.95 } : undefined}
                transition={{ type: 'spring', stiffness: 260, damping: 16 }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded bg-[#64ffda] text-[#0a192f] font-medium hover:bg-[#64ffda]/90 transition disabled:opacity-50 disabled:pointer-events-none"
              >
                <CalendarClock className="size-5 shrink-0" aria-hidden />
                {calReady ? 'Book 20 minutes' : 'Loading calendar…'}
              </motion.button>
            ) : null}

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
              className="w-10 h-10 flex items-center justify-center rounded border border-[#64ffda]/70 bg-[#0077B5] hover:bg-[#64ffda] text-white transition"
              aria-label="LinkedIn"
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
