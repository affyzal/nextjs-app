'use client';
import { motion, type Variants } from 'framer-motion';
import { Tab } from '@headlessui/react';
import { useRef } from 'react';

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const jobsContainer = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { when: 'beforeChildren', staggerChildren: 0.12 },
  },
};

const jobItem = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

const headerBlock = jobItem;

const detailsContainer = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.15, staggerChildren: 0.05 },
  },
};

const detailItem = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
};

type Job = {
  title: string;
  company: string;
  period: string;
  bullets: string[];
};

const jobs: Job[] = [
  {
    title: 'Software Engineer',
    company: 'Trubshaw Cumberlege',
    period: 'Aug 2022 - Present',
    bullets: [
      'Delivered user-focused product features across web and mobile platforms, prioritizing UX quality, accessibility, and performance.',
      'Partnered with PMs and designers to translate concepts into high-impact user experiences, increasing feature adoption and reducing usability issues reported during QA.',
      'Built and maintained RESTful APIs in Ruby on Rails, supporting rich, data-driven product interfaces.',
      'Implemented Docker-based development environments and configured CI/CD pipelines using GitHub Actions, automating unit tests, linting, and build validation for efficient releases.',
      'Integrated Mapbox visualizations to create interactive user journeys, improving understanding and engagement with spatial data.',
      'Owned features end-to-end - from scoping and design to QA and iteration - reducing handoff delays and accelerating release cycles by ~20%.',
    ],
  },
  {
    title: 'Junior Software Developer',
    company: 'Trubshaw Cumberlege',
    period: 'Aug 2021 - Aug 2022',
    bullets: [
      'Actively involved in feature prototyping and product planning, collaborating with product and design teams to develop user-centric solutions.',
      'Designed scalable data models and background workers in Rails, improving query efficiency and reducing API response times significantly.',
      'Supported data collaboration with Napier University, enabling academic research access and uncovering usage insights that guided key UX improvements and boosted retention.',
      'Developed and tested user-facing features using Ruby on Rails and React, ensuring UX consistency and accessibility.',
      'Participated in architecture discussions to define API design, data flow, and maintainability.',
      'Supported Agile sprint cycles, retrospectives, and QA processes to improve product quality and delivery efficiency.',
    ],
  },
];

export default function Experience() {
  const listRef = useRef<HTMLDivElement>(null);

  return (
    <motion.section
      id="experience"
      className="flex flex-col items-start min-h-[auto] pb-16 md:min-h-screen md:items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={headerBlock}
    >
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-6">
        <motion.h2
          variants={item}
          className="flex items-center gap-2 text-2xl font-semibold text-black dark:text-zinc-50 mb-8 pt-20"
        >
          <span className="text-[#64ffda]">02.</span> My Professional Experience
        </motion.h2>

        <Tab.Group>
          {/* Tab headers */}
          <Tab.List
            ref={listRef}
            className="flex gap-2 border-b border-zinc-700 mb-6 overflow-x-auto overflow-y-hidden md:overflow-x-visible relative"
          >
            {jobs.map((job, index) => (
              <Tab
                id={index.toString()}
                key={job.title}
                as={motion.button}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 260, damping: 16 }}
                className={({ selected }) =>
                  `relative px-4 py-2 text-sm font-medium rounded-t-md transition-colors ${
                    selected
                      ? 'text-[#64ffda]'
                      : 'text-zinc-500 hover:text-[#64ffda]'
                  }`
                }
              >
                {({ selected }) => (
                  <>
                    {job.title}
                    {selected && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 bottom-[-1px] h-[2px] w-full bg-[#64ffda] rounded"
                        transition={{
                          type: 'spring',
                          stiffness: 500,
                          damping: 35,
                        }}
                      />
                    )}
                  </>
                )}
              </Tab>
            ))}
          </Tab.List>

          {/* Tab panels */}
          <Tab.Panels className="relative sm:space-y-6 md:min-h-[28rem]">
            {jobs.map((job) => (
              <Tab.Panel
                key={job.title}
                className="relative md:absolute md:inset-0"
              >
                <motion.article
                  variants={jobsContainer}
                  initial="hidden"
                  animate="visible"
                  className="space-y-2"
                >
                  {/* Header */}
                  <motion.div variants={headerBlock}>
                    <h3 className="text-xl font-semibold text-[#64ffda]">
                      {job.title}{' '}
                      <span className="text-zinc-400">| {job.company}</span>
                    </h3>
                    <p className="text-sm text-zinc-500 mb-4">{job.period}</p>
                  </motion.div>

                  {/* Bullet list */}
                  <motion.ul
                    variants={detailsContainer}
                    className="list-none pl-5 space-y-2 text-zinc-600 dark:text-zinc-400"
                  >
                    {job.bullets.map((b) => (
                      <motion.li key={b} variants={detailItem}>
                        <span className="text-[#64ffda]">▹</span> {b}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.article>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </motion.section>
  );
}
