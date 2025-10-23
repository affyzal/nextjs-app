// components/About.tsx
"use client";
import { motion, type Variants } from "framer-motion";
import { RefObject } from "react";

const item: Variants = {
  hidden:  { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

const jobsContainer = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1, y: 0,
    transition: { when: "beforeChildren", staggerChildren: 0.12 } // stagger between JOBS
  },
}

const jobItem = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

// header (title+company+period) block
const headerBlock = jobItem

// details list container: starts after header, then staggers bullets
const detailsContainer = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1, y: 0,
    transition: { delay: 0.15, staggerChildren: 0.05 } // <-- wait a beat, then list items
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
}

const jobs: Job[] = [
  {
    title: "Software Engineer",
    company: "Trubshaw Cumberlege",
    period: "Aug 2022 - Present",
    bullets: ["Delivered user-focused product features across web and mobile, prioritizing accessibility, performance, and UX quality.",
      "Built and maintained RESTful APIs in Ruby on Rails, powering rich, data-driven interfaces across multiple platforms.",
      "Implemented Docker-based development and CI/CD pipelines using GitHub Actions, automating testing and builds for faster, more reliable releases.",
      "Integrated Mapbox visualizations to create interactive user journeys, improving engagement and understanding of spatial data.",
      "Owned features end-to-end - from design to QA - reducing handoff delays and accelerating release cycles by ~20%."
    ],
  },
  {
    title: "Junior Software Developer",
    company: "Trubshaw Cumberlege",
    period: "Aug 2021 -Aug 2022",
    bullets: [
      "Actively involved in feature prototyping and product planning, collaborating with product and design teams to develop user-centric solutions.",
      "Designed scalable data models and background workers in Rails, improving query efficiency and reducing API response times significantly.",
      "Supported data collaboration with Napier University, enabling academic research access and uncovering usage insights that guided key UX improvements and boosted retention."
    ],
  },
]

const fulljobs: Job[] = [
  {
    title: "Software Engineer",
    company: "Trubshaw Cumberlege",
    period: "Aug 2022 – Present",
    bullets: [
      "Delivered user-focused product features across web and mobile platforms, prioritizing UX quality, accessibility, and performance.",
      "Partnered with PMs and designers to translate concepts into high-impact user experiences, increasing feature adoption and reducing usability issues reported during QA.",
      "Built and maintained RESTful APIs in Ruby on Rails, supporting rich, data-driven product interfaces.",
      "Implemented Docker-based development environments and configured CI/CD pipelines using GitHub Actions, automating unit tests, linting, and build validation for efficient releases.",
      "Integrated Mapbox visualizations to create interactive user journeys, improving understanding and engagement with spatial data.",
      "Owned features end-to-end - from scoping and design to QA and iteration - reducing handoff delays and accelerating release cycles by ~20%.",
      "Contributed to roadmap and sprint planning, aligning product priorities with user outcomes and design goals.",
      "Improved frontend performance through caching, reducing load times by ~30% and enhancing perceived responsiveness.",
      "Built an offline queuing and sync system enabling app functionality without internet access, automatically processing pending requests on reconnection to enhance reliability and usability in low-connectivity environments."
    ],
  },
  {
    title: "Junior Software Developer",
    company: "Trubshaw Cumberlege",
    period: "Aug 2021 – Aug 2022",
    bullets: [
      "Actively involved in feature prototyping and product planning, collaborating with product and design teams to develop user-centric solutions.",
      "Designed scalable data models and background workers in Rails, improving query efficiency and reducing API response times significantly.",
      "Supported data collaboration with Napier University, enabling academic research access and uncovering usage insights that guided key UX improvements and boosted retention.",
      "Developed and tested user-facing features using Ruby on Rails and React, ensuring UX consistency and accessibility.",
      "Participated in architecture discussions to define API design, data flow, and maintainability.",
      "Supported Agile sprint cycles, retrospectives, and QA processes to improve product quality and delivery efficiency.",
    ],
  },
]

export default function Experience({
  aboutRef,
  aboutInView,
}: {
  aboutRef: (node?: HTMLElement | null) => void
  aboutInView: boolean
}) {

  return (
    <motion.section
      id="experience"
      className="min-h-screen flex items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}  // animate on first 25% in-view
      variants={headerBlock}
    >
      <div className="w-full max-w-5xl mx-auto px-16">
    
        <motion.h2
          variants={item}
          className="flex items-center gap-2 text-2xl font-semibold text-black dark:text-zinc-50 mb-8 pt-20"
        >
          <span className="text-[#64ffda]">01.</span> My Professional Experience
        </motion.h2>

        <motion.div variants={jobsContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        {jobs.map((job) => (
            <motion.article key={job.title} variants={jobItem} className="space-y-2">
            {/* 1) Header first (title + company + period) */}
            <motion.div variants={headerBlock}>
                <h3 className="text-xl font-semibold text-[#64ffda]">
                {job.title} <span className="text-zinc-400">| {job.company}</span>
                </h3>
                <p className="text-sm text-zinc-500 mb-4">{job.period}</p>
            </motion.div>

            {/* 2) Then the details list */}
            <motion.ul variants={detailsContainer} className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                {job.bullets.map((b) => (
                <motion.li key={b} variants={detailItem}>
                    {b}
                </motion.li>
                ))}
            </motion.ul>
            </motion.article>
        ))}
        </motion.div>


      </div>
    
    </motion.section>
  );
}
