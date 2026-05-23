export default function SponsorsPage() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-white overflow-hidden pt-24 sm:pt-28 md:pt-32">
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
            Partner With Beyond
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-600 max-w-3xl mx-auto leading-relaxed px-4">
            Connect with India's brightest student innovators and future leaders
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{
                background: "linear-gradient(135deg, #3491ff, #0062ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Sponsor Benefits
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Why leading companies partner with Beyond
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Brand Visibility",
                desc: "Showcase your brand to thousands of talented students across India's top institutions",
                icon: "👁️",
              },
              {
                title: "Recruitment Access",
                desc: "Connect with pre-vetted talent and identify potential hires early",
                icon: "🎯",
              },
              {
                title: "Community Engagement",
                desc: "Build meaningful relationships with the student innovation community",
                icon: "🤝",
              },
              {
                title: "Workshops & Speaking",
                desc: "Host workshops and speaking sessions to share your expertise",
                icon: "🎤",
              },
              {
                title: "Thought Leadership",
                desc: "Position your company as an innovation leader in the student ecosystem",
                icon: "💡",
              },
              {
                title: "Product Feedback",
                desc: "Get insights and feedback from tech-savvy student users",
                icon: "📊",
              },
            ].map((benefit) => (
              <div key={benefit.title} className="bg-gradient-to-br from-blue-50/30 to-purple-50/30 rounded-2xl p-8 border border-zinc-200 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{benefit.title}</h3>
                <p className="text-zinc-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50/30 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{
                background: "linear-gradient(135deg, #3491ff, #0062ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Sponsorship Opportunities
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Flexible partnership options to match your goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                tier: "Title Sponsor",
                desc: "Maximum visibility and exclusive benefits across all events",
                features: ["Logo on all materials", "Keynote speaking slot", "Exclusive workshop", "Recruitment booth", "Social media features"],
              },
              {
                tier: "Track Sponsor",
                desc: "Sponsor a specific track (Hackathon or Pitch Competition)",
                features: ["Track branding", "Speaking opportunity", "Workshop session", "Recruitment access", "Logo placement"],
              },
              {
                tier: "Event Sponsor",
                desc: "Support specific events like workshops, demo days, or finale",
                features: ["Event branding", "Booth presence", "Logo on materials", "Social media mention", "Networking access"],
              },
            ].map((tier) => (
              <div key={tier.tier} className="bg-white rounded-2xl p-8 shadow-lg border border-zinc-200 hover:shadow-xl transition-shadow">
                <h3 
                  className="text-2xl font-bold mb-3"
                  style={{
                    background: "linear-gradient(135deg, #3491ff, #0062ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {tier.tier}
                </h3>
                <p className="text-zinc-600 mb-6">{tier.desc}</p>
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-zinc-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900">
            Let's Build Together
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 mb-10 max-w-2xl mx-auto">
            Partner with Beyond to connect with the next generation of innovators
          </p>
          <a
            href="mailto:sponsors@beyond.unifesto.com"
            className="inline-block px-8 py-4 rounded-full font-medium text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              background: "linear-gradient(135deg, #3491ff, #0062ff)",
            }}
          >
            Become a Sponsor
          </a>
        </div>
      </section>
    </div>
  );
}
