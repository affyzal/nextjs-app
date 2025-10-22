import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-[#0a192f]">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-[#0a192f] sm:items-start">
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h2 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-[#64ffda]">
              Hello there, My name is
            </h2>
            <h1 className="max-w-3xl text-6xl font-semibold tracking-tight text-black dark:text-zinc-50">
              Afzal Miah.
            </h1>
            <h1 className="max-w-3xl text-6xl font-semibold tracking-tight text-zinc-600 dark:text-zinc-400">
              I attempt to build useful things.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Software Engineer building meaningful, user-first digital products — currently shaping a map-based management platform at <a href="https://www.trubshaw.co/team-sherpa" target="_blank" rel="noopener noreferrer" className="text-[#64ffda]">Trubshaw Cumberlege</a>.
            </p>
          </div>
        </main>
      </div>
    </main>
  );
}
