export default function AboutPage() {
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
            About Beyond
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-600 max-w-3xl mx-auto leading-relaxed px-4">
            India's premier student innovation ecosystem by Unifesto
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-4xl mx-auto">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8"
              style={{
                background: "linear-gradient(135deg, #3491ff, #0062ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Our Story
            </h2>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-zinc-700 leading-relaxed">
              <p>
                Beyond is Unifesto's flagship innovation season designed to transform how students learn, build, and launch their ideas. We believe that every student has the potential to be a builder, founder, and innovator.
              </p>
              <p>
                Through our comprehensive 8-month program running from August to March, we provide students with the tools, mentorship, and platform they need to turn their dreams into reality. Whether you're building a technical solution or launching a startup, Beyond is your launchpad.
              </p>
              <p>
                We bring together students from across India's top universities, connect them with industry experts and investors, and create an ecosystem where innovation thrives. Beyond is more than a competition—it's a movement to empower the next generation of leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 sm:py-20 md:py-32 bg-gradient-to-br from-blue-50/30 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-16">
            {/* Vision */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg border border-zinc-200">
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
                style={{
                  background: "linear-gradient(135deg, #3491ff, #0062ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Vision
              </h2>
              <p className="text-base sm:text-lg text-zinc-700 leading-relaxed">
                To create India's most impactful student innovation ecosystem where students become 
                builders, founders, innovators, and future leaders who shape the world.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg border border-zinc-200">
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
                style={{
                  background: "linear-gradient(135deg, #3491ff, #0062ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Mission
              </h2>
              <p className="text-base sm:text-lg text-zinc-700 leading-relaxed">
                Help students solve real-world problems, build products, launch startup ideas, 
                learn industry skills, connect with mentors, and showcase their talent to the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto px-4">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Student-First",
                desc: "Every decision we make prioritizes student learning, growth, and success",
                icon: "🎓",
              },
              {
                title: "Innovation",
                desc: "We encourage bold ideas, creative thinking, and pushing boundaries",
                icon: "💡",
              },
              {
                title: "Collaboration",
                desc: "We believe in the power of teamwork and community-driven innovation",
                icon: "🤝",
              },
              {
                title: "Excellence",
                desc: "We strive for the highest quality in everything we deliver",
                icon: "⭐",
              },
              {
                title: "Inclusivity",
                desc: "We welcome students from all backgrounds, disciplines, and skill levels",
                icon: "🌍",
              },
              {
                title: "Impact",
                desc: "We focus on creating real-world solutions that make a difference",
                icon: "🚀",
              },
            ].map((value) => (
              <div key={value.title} className="bg-gradient-to-br from-blue-50/30 to-purple-50/30 rounded-2xl p-6 sm:p-8 border border-zinc-200 hover:shadow-lg transition-shadow">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{value.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 mb-2 sm:mb-3">{value.title}</h3>
                <p className="text-sm sm:text-base text-zinc-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
              Beyond by Numbers
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { number: "50+", label: "Partner Universities" },
              { number: "5000+", label: "Student Participants" },
              { number: "100+", label: "Industry Mentors" },
              { number: "₹50L+", label: "Total Prizes" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-lg border border-zinc-200">
                <div 
                  className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3"
                  style={{
                    background: "linear-gradient(135deg, #3491ff, #0062ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-zinc-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Powered by Unifesto
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto px-4">
              Beyond is brought to you by Unifesto, India's leading student innovation platform
            </p>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-base sm:text-lg text-zinc-700 leading-relaxed mb-6 sm:mb-8">
              Unifesto is on a mission to democratize innovation and entrepreneurship for students across India. 
              Through Beyond and our other initiatives, we're building a future where every student has the 
              opportunity to learn, build, and launch their ideas.
            </p>
            <a
              href="https://unifesto.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all text-base sm:text-lg"
            >
              Learn more about Unifesto
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-32 bg-gradient-to-br from-blue-50/30 to-purple-50/30">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-zinc-900">
            Join the Movement
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-600 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
            Be part of India's most impactful student innovation ecosystem
          </p>
          <a
            href="/#programs"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              background: "linear-gradient(135deg, #3491ff, #0062ff)",
            }}
          >
            Explore Programs
          </a>
        </div>
      </section>
    </div>
  );
}
