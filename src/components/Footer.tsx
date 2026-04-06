export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-800 bg-slate-900/80 backdrop-blur text-zinc-400 text-sm">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>
          &copy; {new Date().getFullYear()} Afzal Miah. Crafted with ❤️ and{' '}
          <span className="text-[#64ffda]">Next.js</span> - see the full source
          on{' '}
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="text-[#64ffda] transition-colors hover:underline font-semibold rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#64ffda] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            href="https://github.com/affyzal/nextjs-app"
          >
            GitHub
          </a>
          .
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/affyzal"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm hover:text-[#64ffda] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#64ffda] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/afzal-miah/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm hover:text-[#64ffda] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#64ffda] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            LinkedIn
          </a>
          <a
            href="mailto:contact@afzalmiah.dev"
            className="rounded-sm hover:text-[#64ffda] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#64ffda] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
