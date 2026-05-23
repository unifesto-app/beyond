import Footer from "@/components/Footer";

export default function Home() {
  const marqueeTexts = ["Dream. Build. Launch.", "Innovation Season 2026", "Beyond by Unifesto"];
  
  return (
    <div className="flex flex-col flex-1 w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-8 md:pt-0 w-full">
        {/* Marquee Bar - Bottom */}
        <div className="absolute bottom-[18%] sm:bottom-[15%] rotate-3 w-[150%] sm:w-[120%] -left-[25%] sm:-left-[10%] bg-white py-3 sm:py-3 md:py-4 border-y border-zinc-200 z-0 overflow-hidden shadow-sm">
          <div className="flex whitespace-nowrap animate-marquee-reverse">
            {marqueeTexts.map((text, i) => (
              <span 
                key={i} 
                className="text-xs sm:text-sm md:text-base font-grandh tracking-[0.2em] sm:tracking-[0.3em] mx-6 sm:mx-8"
                style={{
                  background: "linear-gradient(135deg, #3491ff, #0062ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {text}
              </span>
            )).concat(marqueeTexts.map((text, i) => (
              <span 
                key={i + marqueeTexts.length} 
                className="text-xs sm:text-sm md:text-base font-grandh tracking-[0.2em] sm:tracking-[0.3em] mx-6 sm:mx-8"
                style={{
                  background: "linear-gradient(135deg, #3491ff, #0062ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {text}
              </span>
            )))}
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-1/4 -left-48 w-96 h-96 rounded-full blur-3xl opacity-[0.15]"
            style={{ background: "linear-gradient(to bottom, #3491ff, #0062ff)" }}
          ></div>
          <div 
            className="absolute bottom-1/4 -right-48 w-96 h-96 rounded-full blur-3xl opacity-[0.15]"
            style={{ background: "linear-gradient(to bottom, #bdadff, #8666fa)" }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-16 text-center">
          <div className="space-y-5 md:space-y-6">
            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-grandl tracking-tight flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-3 md:gap-x-5 gap-y-2">
                <span className="text-black">Dream.</span>
                <span 
                  style={{
                    background: "linear-gradient(135deg, #3491ff, #0062ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Build.
                </span>
                <span className="text-black">
                  Launch.
                </span>
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed px-4">
              Build projects. Pitch ideas. Learn from experts. Connect with innovators.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-row gap-2 sm:gap-3 justify-center items-center pt-2 px-4">
              <a
                href="#get-started"
                className="flex-1 sm:flex-initial sm:w-auto group relative px-4 sm:px-7 py-3.5 rounded-full font-medium text-sm sm:text-base text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl text-center"
                style={{
                  background: "linear-gradient(135deg, #3491ff, #0062ff)",
                }}
              >
                <span className="relative z-10">Get Started</span>
              </a>
              
              <a
                href="#learn-more"
                className="flex-1 sm:flex-initial sm:w-auto px-4 sm:px-7 py-3.5 rounded-full font-medium text-sm sm:text-base text-zinc-900 border-2 border-zinc-300 hover:border-zinc-400 hover:bg-zinc-50 transition-all duration-300 text-center"
              >
                Learn More
              </a>
            </div>

            {/* Stats or Social Proof */}
            <div className="pt-6 grid grid-cols-3 gap-3 sm:gap-4 md:gap-5 max-w-3xl mx-auto px-4">
              <div className="space-y-0.5">
                <div 
                  className="text-lg sm:text-xl md:text-2xl font-light"
                  style={{
                    background: "linear-gradient(135deg, #3491ff, #0062ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  1 Platform
                </div>
                <div className="text-[10px] sm:text-xs text-zinc-600 font-medium">Learn & Launch</div>
              </div>
              
              <div className="space-y-0.5">
                <div 
                  className="text-lg sm:text-xl md:text-2xl font-light"
                  style={{
                    background: "linear-gradient(135deg, #3491ff, #0062ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  2 Tracks
                </div>
                <div className="text-[10px] sm:text-xs text-zinc-600 font-medium">Hackathon & Pitch</div>
              </div>
              
              <div className="space-y-0.5">
                <div 
                  className="text-lg sm:text-xl md:text-2xl font-light"
                  style={{
                    background: "linear-gradient(135deg, #3491ff, #0062ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Aug-Mar
                </div>
                <div className="text-[10px] sm:text-xs text-zinc-600 font-medium">Program Timeline</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-16 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg 
            className="w-6 h-6 text-zinc-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 sm:py-20 md:py-32 bg-white w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
          <div className="grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-16">
            {/* Vision */}
            <div className="space-y-4">
              <h2 
                className="text-3xl md:text-4xl font-grandh"
                style={{
                  background: "linear-gradient(135deg, #3491ff, #0062ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Vision
              </h2>
              <p className="text-base md:text-lg text-zinc-700 leading-relaxed">
                To create India's most impactful student innovation ecosystem where students become 
                builders, founders, innovators, and future leaders.
              </p>
            </div>

            {/* Mission */}
            <div className="space-y-4">
              <h2 
                className="text-3xl md:text-4xl font-grandh"
                style={{
                  background: "linear-gradient(135deg, #3491ff, #0062ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Mission
              </h2>
              <p className="text-base md:text-lg text-zinc-700 leading-relaxed">
                Help students solve real-world problems, build products, launch startup ideas, 
                learn industry skills, connect with mentors, and showcase talent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 sm:py-20 md:py-32 bg-white w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
          <div className="text-center mb-12 sm:mb-16">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-grandh mb-4"
              style={{
                background: "linear-gradient(135deg, #3491ff, #0062ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Flagship Programs
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto px-4">
              Two powerful tracks to transform your ideas into reality
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Hackathon Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow border border-zinc-200">
              <div className="space-y-6">
                <div>
                  <h3 
                    className="text-3xl md:text-4xl font-bold mb-3"
                    style={{
                      background: "linear-gradient(135deg, #3491ff, #0062ff)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Hackathon
                  </h3>
                  <p className="text-base text-zinc-600 leading-relaxed">
                    Build real-world solutions, develop products, and showcase your technical skills through hands-on development.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-zinc-700">Team formation & collaboration</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-zinc-700">Technical workshops & bootcamps</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-zinc-700">Development sprint & demo day</span>
                  </div>
                </div>

                <a
                  href="/hackathon"
                  className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all"
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Pitch Competition Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow border border-zinc-200">
              <div className="space-y-6">
                <div>
                  <h3 
                    className="text-3xl md:text-4xl font-bold mb-3"
                    style={{
                      background: "linear-gradient(135deg, #3491ff, #0062ff)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Pitch Competition
                  </h3>
                  <p className="text-base text-zinc-600 leading-relaxed">
                    Launch your startup idea, develop business models, and pitch to investors and industry leaders.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-zinc-700">Business model development</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-zinc-700">Mentorship from industry experts</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-zinc-700">Pitch day & investor connections</span>
                  </div>
                </div>

                <a
                  href="/pitch"
                  className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all"
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-16 sm:py-20 md:py-32 bg-white w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
          <div className="text-center mb-12 sm:mb-16">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-grandh mb-4"
              style={{
                background: "linear-gradient(135deg, #3491ff, #0062ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Timeline
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto px-4">
              From August to March, experience a comprehensive innovation ecosystem
            </p>
          </div>

          <div className="space-y-6">
            {/* Hackathon Track Header */}
            <div className="flex gap-4 sm:gap-6">
              <div className="w-10 sm:w-12"></div>
              <div className="flex-1">
                <h3 
                  className="text-xl sm:text-2xl md:text-3xl font-grandh mb-2"
                  style={{
                    background: "linear-gradient(135deg, #3491ff, #0062ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Hackathon Track
                </h3>
                <p className="text-sm sm:text-base text-zinc-600 mb-6">Build real-world solutions</p>
              </div>
            </div>

            {/* Hackathon Timeline */}
            {[
              { month: "Aug", title: "Registration & Team Formation", desc: "Sign up and form your team" },
              { month: "Sep", title: "Idea Submission & Bootcamp", desc: "Submit your project and learn tools" },
              { month: "Oct", title: "Development Sprint", desc: "Build your solution with mentor support" },
              { month: "Nov", title: "Demo Day & Finale", desc: "Showcase your project and win awards" },
            ].map((item, index) => (
              <div key={item.month} className="flex gap-4 sm:gap-6 group">
                <div className="flex flex-col items-center">
                  <div 
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-white text-xs sm:text-sm"
                    style={{ background: "linear-gradient(135deg, #3491ff, #0062ff)" }}
                  >
                    {item.month}
                  </div>
                  <div className="w-0.5 h-full bg-gradient-to-b from-blue-500 to-blue-200 mt-2"></div>
                </div>
                <div className="flex-1 pb-6 sm:pb-8">
                  <div className="bg-gradient-to-br from-blue-50/30 to-purple-50/30 rounded-2xl p-4 sm:p-6 border border-zinc-200 group-hover:border-blue-300 group-hover:shadow-md transition-all">
                    <h4 className="text-base sm:text-xl font-bold text-zinc-900 mb-2">{item.title}</h4>
                    <p className="text-sm sm:text-base text-zinc-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Pitch Competition Track Header */}
            <div className="flex gap-4 sm:gap-6 pt-8">
              <div className="w-10 sm:w-12"></div>
              <div className="flex-1">
                <h3 
                  className="text-xl sm:text-2xl md:text-3xl font-grandh mb-2"
                  style={{
                    background: "linear-gradient(135deg, #3491ff, #0062ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Pitch Competition Track
                </h3>
                <p className="text-sm sm:text-base text-zinc-600 mb-6">Launch your startup idea</p>
              </div>
            </div>

            {/* Pitch Competition Timeline */}
            {[
              { month: "Dec", title: "Registration & Idea Submission", desc: "Sign up with your startup concept" },
              { month: "Jan", title: "Business Workshops & Development", desc: "Build your business model and strategy" },
              { month: "Feb", title: "Mentorship & Pitch Preparation", desc: "Refine with experts and perfect your pitch" },
              { month: "Mar", title: "Pitch Day & Grand Finale", desc: "Present to investors and win awards" },
            ].map((item, index) => (
              <div key={item.month} className="flex gap-4 sm:gap-6 group">
                <div className="flex flex-col items-center">
                  <div 
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-white text-xs sm:text-sm"
                    style={{ background: "linear-gradient(135deg, #3491ff, #0062ff)" }}
                  >
                    {item.month}
                  </div>
                  {index < 3 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-blue-500 to-blue-200 mt-2"></div>
                  )}
                </div>
                <div className="flex-1 pb-6 sm:pb-8">
                  <div className="bg-gradient-to-br from-blue-50/30 to-purple-50/30 rounded-2xl p-4 sm:p-6 border border-zinc-200 group-hover:border-blue-300 group-hover:shadow-md transition-all">
                    <h4 className="text-base sm:text-xl font-bold text-zinc-900 mb-2">{item.title}</h4>
                    <p className="text-sm sm:text-base text-zinc-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-16 sm:py-20 md:py-32 bg-white w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
          <div className="text-center mb-12 sm:mb-16">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-grandh mb-4"
              style={{
                background: "linear-gradient(135deg, #3491ff, #0062ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Awards & Recognition
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto px-4">
              Celebrating innovation, impact, and excellence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { 
                title: "Hackathon Champion", 
                icon: (
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="url(#gradient)">
                    <defs>
                      <linearGradient id="gradient-trophy" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3491ff" />
                        <stop offset="100%" stopColor="#0062ff" />
                      </linearGradient>
                    </defs>
                    <path fill="url(#gradient-trophy)" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                )
              },
              { 
                title: "Runner-Up Awards", 
                icon: (
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="url(#gradient)">
                    <defs>
                      <linearGradient id="gradient-star" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3491ff" />
                        <stop offset="100%" stopColor="#0062ff" />
                      </linearGradient>
                    </defs>
                    <path fill="url(#gradient-star)" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                )
              },
              { 
                title: "Best AI Solution", 
                icon: (
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="url(#gradient)">
                    <defs>
                      <linearGradient id="gradient-ai" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3491ff" />
                        <stop offset="100%" stopColor="#0062ff" />
                      </linearGradient>
                    </defs>
                    <path fill="url(#gradient-ai)" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              { 
                title: "Best Innovation", 
                icon: (
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="url(#gradient)">
                    <defs>
                      <linearGradient id="gradient-bulb" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3491ff" />
                        <stop offset="100%" stopColor="#0062ff" />
                      </linearGradient>
                    </defs>
                    <path fill="url(#gradient-bulb)" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )
              },
              { 
                title: "Best Social Impact", 
                icon: (
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="url(#gradient)">
                    <defs>
                      <linearGradient id="gradient-globe" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3491ff" />
                        <stop offset="100%" stopColor="#0062ff" />
                      </linearGradient>
                    </defs>
                    <path fill="url(#gradient-globe)" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              { 
                title: "Best Startup Idea", 
                icon: (
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="url(#gradient)">
                    <defs>
                      <linearGradient id="gradient-rocket" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3491ff" />
                        <stop offset="100%" stopColor="#0062ff" />
                      </linearGradient>
                    </defs>
                    <path fill="url(#gradient-rocket)" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              { 
                title: "Most Investable Startup", 
                icon: (
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="url(#gradient)">
                    <defs>
                      <linearGradient id="gradient-money" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3491ff" />
                        <stop offset="100%" stopColor="#0062ff" />
                      </linearGradient>
                    </defs>
                    <path fill="url(#gradient-money)" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              { 
                title: "People's Choice", 
                icon: (
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="url(#gradient)">
                    <defs>
                      <linearGradient id="gradient-heart" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3491ff" />
                        <stop offset="100%" stopColor="#0062ff" />
                      </linearGradient>
                    </defs>
                    <path fill="url(#gradient-heart)" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                )
              },
            ].map((award) => (
              <div key={award.title} className="bg-white rounded-2xl p-5 sm:p-6 text-center shadow-lg hover:shadow-xl transition-shadow border border-zinc-200">
                <div className="mb-3 flex justify-center">
                  {award.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-zinc-900">{award.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-32 bg-white w-full">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-grandh mb-4 sm:mb-6 text-zinc-900">
            Ready to Go <span
              style={{
                background: "linear-gradient(135deg, #3491ff, #0062ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              BeyonD
            </span> ?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-600 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
            Join India's most impactful student innovation ecosystem. Transform your ideas into reality.
          </p>
          <div className="flex flex-row gap-2 sm:gap-4 justify-center px-4">
            <a
              href="#get-started"
              className="flex-1 sm:flex-initial sm:w-auto group relative px-4 sm:px-7 py-3 rounded-full font-medium text-sm sm:text-base md:text-lg text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl text-center"
              style={{
                background: "linear-gradient(135deg, #3491ff, #0062ff)",
              }}
            >
              <span className="relative z-10">Register Now</span>
            </a>
            
            <a
              href="/about"
              className="flex-1 sm:flex-initial sm:w-auto px-4 sm:px-7 py-3 rounded-full font-medium text-sm sm:text-base md:text-lg text-zinc-900 border-2 border-zinc-300 hover:border-zinc-400 hover:bg-zinc-50 transition-all duration-300 text-center"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
