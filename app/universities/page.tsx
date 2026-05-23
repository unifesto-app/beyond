export default function UniversitiesPage() {
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
            For Universities
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-600 max-w-3xl mx-auto leading-relaxed px-4">
            Empower your students with India's premier innovation ecosystem
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
              University Benefits
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Why leading institutions partner with Beyond
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Innovation Culture",
                desc: "Foster a culture of innovation and entrepreneurship on your campus",
                icon: "💡",
              },
              {
                title: "Industry Exposure",
                desc: "Connect students with leading companies and industry professionals",
                icon: "🏢",
              },
              {
                title: "Student Skill Development",
                desc: "Provide hands-on learning opportunities beyond the classroom",
                icon: "📚",
              },
              {
                title: "Startup Ecosystem Access",
                desc: "Give students access to mentors, investors, and startup resources",
                icon: "🚀",
              },
              {
                title: "National Recognition",
                desc: "Showcase your institution's commitment to innovation and excellence",
                icon: "🏆",
              },
              {
                title: "Placement Opportunities",
                desc: "Enhance student placement prospects through industry connections",
                icon: "💼",
              },
            ].map((benefit) => (
              <div key={benefit.title} className="bg-gradient-to-br from-blue-50/30 to-purple-50/30 rounded-2xl p-8 border border-zinc-200 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-3">{benefit.title}</h3>
                <p className="text-zinc-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
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
              What We Offer
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Comprehensive support for your institution
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "On-Campus Events",
                desc: "We bring workshops, bootcamps, and networking events directly to your campus",
              },
              {
                title: "Dedicated Support",
                desc: "A dedicated team to coordinate with your institution and support student participation",
              },
              {
                title: "Marketing & Promotion",
                desc: "Co-branded marketing materials and promotion across our network",
              },
              {
                title: "Faculty Engagement",
                desc: "Opportunities for faculty to mentor and judge student projects",
              },
              {
                title: "Alumni Network",
                desc: "Connect students with successful alumni entrepreneurs and innovators",
              },
              {
                title: "Impact Reporting",
                desc: "Detailed reports on student participation, achievements, and outcomes",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 shadow-lg border border-zinc-200 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-zinc-900 mb-3">{item.title}</h3>
                <p className="text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900">
            Partner With Us
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 mb-10 max-w-2xl mx-auto">
            Join leading institutions in empowering the next generation of innovators
          </p>
          <a
            href="mailto:universities@beyond.unifesto.com"
            className="inline-block px-8 py-4 rounded-full font-medium text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
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
