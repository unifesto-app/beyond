export default function Footer() {
  return (
    <footer className="bg-white relative pt-8">
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #3491ff, transparent)" }}
      />
      
      {/* Newsletter strip */}
      <div className="w-full border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 md:py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-base font-semibold text-zinc-900">Stay in the loop</p>
              <p className="text-xs text-zinc-600 mt-0.5">Get the latest updates on events, workshops, and opportunities.</p>
            </div>
            <form className="flex items-center gap-2 md:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                required
                className="flex-1 md:w-64 bg-zinc-50 border border-zinc-300 rounded-full px-4 py-2 text-sm text-zinc-900 placeholder-zinc-500 outline-none hover:border-zinc-400 focus:border-[#3491ff] focus:bg-white transition-colors duration-200"
              />
              <button
                type="submit"
                className="rounded-full px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(52,145,255,0.4)] whitespace-nowrap"
                style={{ background: "linear-gradient(135deg, #3491ff, #0062ff)" }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="py-6 md:py-8">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            {/* Brand */}
            <div className="space-y-2">
              <h3 
                className="text-2xl md:text-3xl font-grandh"
                style={{
                  background: "linear-gradient(135deg, #3491ff, #0062ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                BeyonD
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed max-w-[320px] mx-auto">
                Dream. Build. Launch.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-2 justify-center">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-600 hover:text-zinc-900 border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 transition-all duration-200"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-600 hover:text-zinc-900 border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-600 hover:text-zinc-900 border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 transition-all duration-200"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 pt-1">
              <a href="/hackathon" className="text-xs text-zinc-600 hover:text-zinc-900 transition-colors duration-200">
                Hackathon
              </a>
              <span className="text-zinc-400">•</span>
              <a href="/pitch" className="text-xs text-zinc-600 hover:text-zinc-900 transition-colors duration-200">
                Pitch Competition
              </a>
              <span className="text-zinc-400">•</span>
              <a href="/sponsors" className="text-xs text-zinc-600 hover:text-zinc-900 transition-colors duration-200">
                Sponsors
              </a>
              <span className="text-zinc-400">•</span>
              <a href="/universities" className="text-xs text-zinc-600 hover:text-zinc-900 transition-colors duration-200">
                Universities
              </a>
              <span className="text-zinc-400">•</span>
              <a href="/privacy" className="text-xs text-zinc-600 hover:text-zinc-900 transition-colors duration-200">
                Privacy Policy
              </a>
              <span className="text-zinc-400">•</span>
              <a href="/terms" className="text-xs text-zinc-600 hover:text-zinc-900 transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-3">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-xs tracking-[0.2em] font-semibold"
              style={{
                background: "linear-gradient(135deg, #3491ff, #0062ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              BeyonD
            </p>
            <p className="text-xs text-zinc-500">
              © 2026 Unifesto Private Limited. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
