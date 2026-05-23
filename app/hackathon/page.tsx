export default function HackathonPage() {
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
            Beyond Hackathon
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-600 max-w-3xl mx-auto leading-relaxed px-4 mb-8">
            Build real-world solutions, develop products, and showcase your technical skills
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a
              href="#register"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                background: "linear-gradient(135deg, #3491ff, #0062ff)",
              }}
            >
              Register Now
            </a>
            <a
              href="#journey"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg text-zinc-900 border-2 border-zinc-300 hover:border-zinc-400 hover:bg-zinc-50 transition-all duration-300"
            >
              View Journey
            </a>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-16 sm:py-20 md:py-32 bg-white">
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
              Hackathon Journey
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto px-4">
              From idea to demo - your path to building impactful solutions
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                step: "01",
                title: "Registration & Team Formation",
                desc: "Sign up individually or with your team. Connect with like-minded builders and form your squad.",
              },
              {
                step: "02",
                title: "Idea Submission",
                desc: "Submit your innovative idea. Define the problem you're solving and your proposed solution.",
              },
              {
                step: "03",
                title: "Workshops & Bootcamps",
                desc: "Learn from industry experts. Master the tools and technologies you need to build.",
              },
              {
                step: "04",
                title: "Development Sprint",
                desc: "Build your solution. Code, design, and create your product with mentor support.",
              },
              {
                step: "05",
                title: "Demo Day",
                desc: "Showcase your work. Present your solution to judges and get valuable feedback.",
              },
              {
                step: "06",
                title: "Grand Finale",
                desc: "Compete for awards. Present to industry leaders and win recognition for your innovation.",
              },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-6 sm:p-8 border border-zinc-200 hover:shadow-lg transition-shadow">
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
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Gain Section */}
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
              What You'll Gain
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              { title: "Technical Skills", desc: "Master cutting-edge technologies and development practices", icon: "💻" },
              { title: "Real-World Experience", desc: "Build solutions for actual problems and challenges", icon: "🌟" },
              { title: "Mentorship", desc: "Learn from industry experts and experienced developers", icon: "👥" },
              { title: "Networking", desc: "Connect with fellow builders, sponsors, and potential employers", icon: "🤝" },
              { title: "Portfolio Projects", desc: "Create impressive projects to showcase your abilities", icon: "📁" },
              { title: "Recognition & Awards", desc: "Win prizes and gain recognition for your innovation", icon: "🏆" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-zinc-200">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{item.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-zinc-900">
            Ready to Build?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-600 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
            Join the Beyond Hackathon and transform your ideas into reality
          </p>
          <a
            href="#register"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              background: "linear-gradient(135deg, #3491ff, #0062ff)",
            }}
          >
            Register Now
          </a>
        </div>
      </section>
    </div>
  );
}
