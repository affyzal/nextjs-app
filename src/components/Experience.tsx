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
    period: "Aug 2022 – Present",
    bullets: [
      "Delivered user-focused product features across web and mobile, prioritizing UX and performance.",
      "Built and maintained RESTful APIs in Ruby on Rails supporting data-rich interfaces.",
      "Implemented Docker + CI/CD with GitHub Actions, automating tests and builds.",
      "Integrated Mapbox visualizations improving spatial data engagement.",
      "Owned features end-to-end, accelerating release cycles ≈ 20%.",
    ],
  },
  {
    title: "Junior Software Developer",
    company: "Trubshaw Cumberlege",
    period: "Aug 2021 – Aug 2022",
    bullets: [
      "Collaborated on feature prototyping with product and design teams.",
      "Designed scalable data models and background workers improving query efficiency.",
      "Supported data collaboration with Napier University to drive UX insights.",
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
