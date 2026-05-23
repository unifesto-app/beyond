export default function HackathonPage() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 overflow-hidden pt-32">
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center">
          <h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{
              background: "linear-gradient(135deg, #3491ff, #0062ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Beyond Hackathon
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
            Build real-world solutions, develop products, and showcase your technical skills
          </p>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
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
              Hackathon Journey
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              From idea to demo - your path to building impactful solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
              <div key={item.step} className="bg-gradient-to-br from-blue-50/30 to-purple-50/30 rounded-2xl p-8 border border-zinc-200 hover:shadow-lg transition-shadow">
                <div 
                  className="text-5xl font-bold mb-4 opacity-20"
                  style={{
                    background: "linear-gradient(135deg, #3491ff, #0062ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{item.title}</h3>
                <p className="text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Gain Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50/30 to-purple-50/30">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
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
              What You'll Gain
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Technical Skills", desc: "Master cutting-edge technologies and development practices", icon: "💻" },
              { title: "Real-World Experience", desc: "Build solutions for actual problems and challenges", icon: "🌟" },
              { title: "Mentorship", desc: "Learn from industry experts and experienced developers", icon: "👥" },
              { title: "Networking", desc: "Connect with fellow builders, sponsors, and potential employers", icon: "🤝" },
              { title: "Portfolio Projects", desc: "Create impressive projects to showcase your abilities", icon: "📁" },
              { title: "Recognition & Awards", desc: "Win prizes and gain recognition for your innovation", icon: "🏆" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 shadow-lg border border-zinc-200">
                <div className="text-4xl mb-4">{item.icon}</div>
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
            Ready to Build?
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 mb-10 max-w-2xl mx-auto">
            Join the Beyond Hackathon and transform your ideas into reality
          </p>
          <a
            href="#register"
            className="inline-block px-8 py-4 rounded-full font-medium text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
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
