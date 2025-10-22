"use client"; // enables console.log and browser-side interactivity

import { useEffect, useState } from "react"
import Header from "@/components/Header";

export default function AboutPage() {
  console.log("💡 AboutPage rendered (top-level render)")

  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("🎬 useEffect: component mounted")
    return () => console.log("🧹 useEffect cleanup: component unmounted")
  }, [])

  useEffect(() => {
    console.log(`🔁 useEffect: count changed to ${count}`)
  }, [count])

  const handleClick = () => {
    console.log("👆 Button clicked!")
    setCount((prev) => prev + 1)
  }

  return (
    <main>
      <Header />
      <section className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="text-slate-600 leading-relaxed mb-6">
          We’re passionate about building clean, human-centred digital experiences.
          This page is a simple client component so you can test interactivity and logs.
      </p>
      <button
          onClick={handleClick}
          className="px-5 py-3 rounded-xl bg-slate-900 text-white hover:opacity-90 transition"
      >
          Click me now({count})
      </button>
      </section>
    </main>
  )
}
