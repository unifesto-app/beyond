export default function MentorshipPage() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-white overflow-hidden pt-24 sm:pt-28 md:pt-32">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 text-center">
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6"
            style={{
              background: "linear-gradient(135deg, #3491ff, #0062ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Mentorship Program
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-600 max-w-3xl mx-auto leading-relaxed px-4">
            Learn from industry experts, successful entrepreneurs, and experienced builders
          </p>
        </div>
      </section>

      {/* Why Mentorship Section */}
      <section className="py-16 sm:py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{
                background: "linear-gradient(135deg, #3491ff, #0062ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Why Mentorship Matters
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto px-4">
              Get guidance from those who've been there and done that
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Expert Guidance",
                desc: "Get advice from professionals with years of industry experience",
                icon: "🎯",
              },
              {
                title: "Avoid Common Mistakes",
                desc: "Learn from others' experiences and avoid costly pitfalls",
                icon: "🛡️",
              },
              {
                title: "Network Building",
                desc: "Connect with industry leaders and expand your professional network",
                icon: "🤝",
              },
              {
                title: "Skill Development",
                desc: "Accelerate your learning with personalized guidance",
                icon: "📈",
              },
              {
                title: "Career Insights",
                desc: "Get insider perspectives on career paths and opportunities",
                icon: "💼",
              },
              {
                title: "Confidence Boost",
                desc: "Build confidence through validation and constructive feedback",
                icon: "⭐",
              },
            ].map((item) => (
              <div key={item.title} className="bg-gradient-to-br from-blue-50/30 to-purple-50/30 rounded-2xl p-6 sm:p-8 border border-zinc-200 hover:shadow-lg transition-shadow">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{item.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-20 md:py-32 bg-gradient-to-br from-blue-50/30 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{
                background: "linear-gradient(135deg, #3491ff, #0062ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              How Mentorship Works
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Get Matched",
                desc: "Based on your track, project, and goals, we match you with relevant mentors from our network",
              },
              {
                step: "02",
                title: "1-on-1 Sessions",
                desc: "Schedule regular sessions with your mentor to discuss progress, challenges, and strategy",
              },
              {
                step: "03",
                title: "Group Workshops",
                desc: "Attend group mentorship sessions where mentors share insights with multiple teams",
              },
              {
                step: "04",
                title: "Office Hours",
                desc: "Drop in during mentor office hours for quick questions and feedback",
              },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-zinc-200">
                <div 
                  className="text-4xl sm:text-5xl font-bold mb-3 sm:mb-4 opacity-20"
                  style={{
                    background: "linear-gradient(135deg, #3491ff, #0062ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {item.step}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor Profiles Section */}
      <section className="py-16 sm:py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{
                background: "linear-gradient(135deg, #3491ff, #0062ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Our Mentors
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto px-4">
              Learn from leaders across technology, business, and innovation
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { category: "Tech Leaders", count: "30+", desc: "CTOs, Engineering Managers, Senior Developers" },
              { category: "Entrepreneurs", count: "25+", desc: "Startup Founders, Business Leaders" },
              { category: "Investors", count: "15+", desc: "VCs, Angel Investors, Fund Managers" },
              { category: "Product Experts", count: "20+", desc: "Product Managers, Designers, Growth Experts" },
            ].map((item) => (
              <div key={item.category} className="bg-gradient-to-br from-blue-50/30 to-purple-50/30 rounded-2xl p-6 sm:p-8 text-center border border-zinc-200 hover:shadow-lg transition-shadow">
                <div 
                  className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3"
                  style={{
                    background: "linear-gradient(135deg, #3491ff, #0062ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {item.count}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 mb-2">{item.category}</h3>
                <p className="text-xs sm:text-sm text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-16 sm:py-20 md:py-32 bg-gradient-to-br from-blue-50/30 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{
                background: "linear-gradient(135deg, #3491ff, #0062ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              What You'll Learn
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-zinc-200">
              <h3 
                className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6"
                style={{
                  background: "linear-gradient(135deg, #3491ff, #0062ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                For Hackathon Participants
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  "Technical architecture and best practices",
                  "Code quality and development workflows",
                  "Product thinking and user experience",
                  "Team collaboration and project management",
                  "Demo preparation and presentation skills",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm sm:text-base text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-zinc-200">
              <h3 
                className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6"
                style={{
                  background: "linear-gradient(135deg, #3491ff, #0062ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                For Pitch Participants
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  "Business model development and validation",
                  "Market research and competitive analysis",
                  "Financial modeling and projections",
                  "Fundraising strategies and investor relations",
                  "Pitch deck creation and storytelling",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm sm:text-base text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-zinc-900">
            Get Mentored by the Best
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-600 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
            Join Beyond and get access to our network of 100+ industry mentors
          </p>
          <a
            href="/#programs"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              background: "linear-gradient(135deg, #3491ff, #0062ff)",
            }}
          >
            Join Beyond
          </a>
        </div>
      </section>
    </div>
  );
}
