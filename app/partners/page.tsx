export default function PartnersPage() {
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
            Our Partners
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-600 max-w-3xl mx-auto leading-relaxed px-4">
            Building India's innovation ecosystem together
          </p>
        </div>
      </section>

      {/* Partner Categories */}
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
              Partner Ecosystem
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto px-4">
              A diverse network supporting student innovation
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                category: "Title Sponsors",
                desc: "Leading companies powering Beyond's mission",
                icon: "🏆",
                count: "3+",
              },
              {
                category: "Technology Partners",
                desc: "Providing tools, platforms, and technical resources",
                icon: "💻",
                count: "15+",
              },
              {
                category: "University Partners",
                desc: "Top institutions across India supporting students",
                icon: "🎓",
                count: "50+",
              },
              {
                category: "Investor Partners",
                desc: "VCs and angels supporting student startups",
                icon: "💰",
                count: "20+",
              },
              {
                category: "Media Partners",
                desc: "Amplifying student innovation stories",
                icon: "📰",
                count: "10+",
              },
              {
                category: "Community Partners",
                desc: "Organizations supporting the innovation ecosystem",
                icon: "🤝",
                count: "25+",
              },
            ].map((partner) => (
              <div key={partner.category} className="bg-gradient-to-br from-blue-50/30 to-purple-50/30 rounded-2xl p-6 sm:p-8 border border-zinc-200 hover:shadow-lg transition-shadow">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{partner.icon}</div>
                <div 
                  className="text-2xl sm:text-3xl font-bold mb-2"
                  style={{
                    background: "linear-gradient(135deg, #3491ff, #0062ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {partner.count}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 mb-2">{partner.category}</h3>
                <p className="text-sm sm:text-base text-zinc-600">{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
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
              Why Partner With Beyond
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                title: "Access to Top Talent",
                desc: "Connect with India's brightest student innovators and future leaders across 50+ universities",
                icon: "🎯",
              },
              {
                title: "Brand Visibility",
                desc: "Showcase your brand to thousands of engaged students through events, workshops, and digital platforms",
                icon: "👁️",
              },
              {
                title: "Innovation Pipeline",
                desc: "Discover innovative solutions and startup ideas that could become your next partnership or acquisition",
                icon: "💡",
              },
              {
                title: "Community Impact",
                desc: "Make a meaningful impact on student education and India's innovation ecosystem",
                icon: "🌟",
              },
              {
                title: "Thought Leadership",
                desc: "Position your organization as a leader in supporting student innovation and entrepreneurship",
                icon: "📢",
              },
              {
                title: "Networking Opportunities",
                desc: "Connect with other leading organizations, investors, and academic institutions",
                icon: "🤝",
              },
            ].map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-zinc-200 hover:shadow-xl transition-shadow">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{benefit.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 mb-2 sm:mb-3">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-zinc-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
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
              Partnership Opportunities
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto px-4">
              Multiple ways to engage with the Beyond ecosystem
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {[
              {
                title: "Sponsorship",
                desc: "Support Beyond as a title, track, or event sponsor with brand visibility and engagement benefits",
                link: "/sponsors",
              },
              {
                title: "Technology Partnership",
                desc: "Provide tools, platforms, or credits to help students build better solutions",
                link: "#contact",
              },
              {
                title: "Mentorship",
                desc: "Share expertise by mentoring student teams or conducting workshops and bootcamps",
                link: "/mentorship",
              },
              {
                title: "University Partnership",
                desc: "Bring Beyond to your campus and empower your students with innovation opportunities",
                link: "/universities",
              },
              {
                title: "Investment Partnership",
                desc: "Get early access to promising student startups and support the next generation of founders",
                link: "#contact",
              },
              {
                title: "Media Partnership",
                desc: "Help amplify student innovation stories and showcase their achievements",
                link: "#contact",
              },
            ].map((opportunity) => (
              <div key={opportunity.title} className="bg-gradient-to-br from-blue-50/30 to-purple-50/30 rounded-2xl p-6 sm:p-8 border border-zinc-200 hover:shadow-lg transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 mb-2">{opportunity.title}</h3>
                    <p className="text-sm sm:text-base text-zinc-600">{opportunity.desc}</p>
                  </div>
                  <a
                    href={opportunity.link}
                    className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all whitespace-nowrap"
                  >
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-32 bg-gradient-to-br from-blue-50/30 to-purple-50/30">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-zinc-900">
            Become a Partner
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-600 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
            Join leading organizations in building India's innovation ecosystem
          </p>
          <a
            href="mailto:partnerships@beyond.unifesto.com"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              background: "linear-gradient(135deg, #3491ff, #0062ff)",
            }}
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
