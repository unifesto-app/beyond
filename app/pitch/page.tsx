export default function PitchPage() {
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
            Beyond Pitch Competition
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
            Launch your startup idea, develop business models, and pitch to investors
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
              Pitch Competition Journey
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              From concept to pitch day - your entrepreneurial journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Registration",
                desc: "Sign up with your startup idea. Solo founders and teams are both welcome.",
              },
              {
                step: "02",
                title: "Idea Submission",
                desc: "Submit your business concept. Explain the problem, solution, and market opportunity.",
              },
              {
                step: "03",
                title: "Mentorship & Workshops",
                desc: "Learn from successful entrepreneurs. Refine your business model and strategy.",
              },
              {
                step: "04",
                title: "Business Development",
                desc: "Develop your go-to-market strategy, financial projections, and pitch deck.",
              },
              {
                step: "05",
                title: "Pitch Day",
                desc: "Present to a panel of investors and industry experts. Get valuable feedback.",
              },
              {
                step: "06",
                title: "Grand Finale",
                desc: "Final pitch round. Win funding, recognition, and investor connections.",
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
              { title: "Business Skills", desc: "Learn to build sustainable business models and strategies", icon: "📊" },
              { title: "Investor Network", desc: "Connect with VCs, angel investors, and potential partners", icon: "💼" },
              { title: "Expert Mentorship", desc: "Get guidance from successful entrepreneurs and founders", icon: "🎯" },
              { title: "Pitch Skills", desc: "Master the art of presenting and selling your vision", icon: "🎤" },
              { title: "Funding Opportunities", desc: "Win prizes and access to potential investment", icon: "💰" },
              { title: "Startup Ecosystem", desc: "Join a community of founders and innovators", icon: "🚀" },
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
            Ready to Launch?
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 mb-10 max-w-2xl mx-auto">
            Join the Beyond Pitch Competition and turn your startup idea into reality
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
