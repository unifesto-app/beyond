export default function WorkshopsPage() {
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
            Workshops & Bootcamps
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-600 max-w-3xl mx-auto leading-relaxed px-4">
            Learn industry skills from experts through hands-on workshops and intensive bootcamps
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 sm:py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-16">
            <div className="bg-gradient-to-br from-blue-50/30 to-purple-50/30 rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg border border-zinc-200">
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
                style={{
                  background: "linear-gradient(135deg, #3491ff, #0062ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Workshops
              </h2>
              <p className="text-base sm:text-lg text-zinc-700 leading-relaxed mb-4">
                2-3 hour focused sessions on specific topics, tools, or skills. Perfect for learning new technologies and best practices.
              </p>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  "Live interactive sessions",
                  "Hands-on exercises",
                  "Q&A with experts",
                  "Recorded for later viewing",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm sm:text-base text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50/30 to-purple-50/30 rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg border border-zinc-200">
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
                style={{
                  background: "linear-gradient(135deg, #3491ff, #0062ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Bootcamps
              </h2>
              <p className="text-base sm:text-lg text-zinc-700 leading-relaxed mb-4">
                Multi-day intensive programs covering end-to-end development or business skills. Deep dive into building real projects.
              </p>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  "3-5 day intensive programs",
                  "Build complete projects",
                  "Mentor-guided learning",
                  "Certificate of completion",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
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

      {/* Technical Workshops Section */}
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
              Technical Workshops
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto px-4">
              For Hackathon participants and technical builders
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Web Development",
                topics: ["React & Next.js", "Node.js & Express", "Database Design", "API Development"],
                icon: "🌐",
              },
              {
                title: "Mobile Development",
                topics: ["React Native", "Flutter", "iOS & Android", "Cross-platform Apps"],
                icon: "📱",
              },
              {
                title: "AI & Machine Learning",
                topics: ["Python & TensorFlow", "ML Models", "Computer Vision", "NLP Basics"],
                icon: "🤖",
              },
              {
                title: "Cloud & DevOps",
                topics: ["AWS/Azure/GCP", "Docker & Kubernetes", "CI/CD Pipelines", "Deployment"],
                icon: "☁️",
              },
              {
                title: "Blockchain & Web3",
                topics: ["Smart Contracts", "Solidity", "DApps", "Crypto Wallets"],
                icon: "⛓️",
              },
              {
                title: "UI/UX Design",
                topics: ["Figma", "Design Systems", "User Research", "Prototyping"],
                icon: "🎨",
              },
            ].map((workshop) => (
              <div key={workshop.title} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-zinc-200 hover:shadow-xl transition-shadow">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{workshop.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 mb-3 sm:mb-4">{workshop.title}</h3>
                <ul className="space-y-2">
                  {workshop.topics.map((topic) => (
                    <li key={topic} className="text-sm sm:text-base text-zinc-600 flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Workshops Section */}
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
              Business Workshops
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto px-4">
              For Pitch Competition participants and aspiring entrepreneurs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Business Model Canvas",
                topics: ["Value Proposition", "Customer Segments", "Revenue Streams", "Cost Structure"],
                icon: "📊",
              },
              {
                title: "Market Research",
                topics: ["TAM/SAM/SOM", "Competitor Analysis", "Customer Discovery", "Market Validation"],
                icon: "🔍",
              },
              {
                title: "Financial Modeling",
                topics: ["Revenue Projections", "Unit Economics", "Burn Rate", "Fundraising Math"],
                icon: "💰",
              },
              {
                title: "Pitch Deck Creation",
                topics: ["Storytelling", "Slide Design", "Data Visualization", "Investor Psychology"],
                icon: "📽️",
              },
              {
                title: "Go-to-Market Strategy",
                topics: ["Marketing Channels", "Growth Hacking", "Sales Funnels", "Customer Acquisition"],
                icon: "🚀",
              },
              {
                title: "Legal & Compliance",
                topics: ["Company Formation", "IP Protection", "Contracts", "Regulatory Basics"],
                icon: "⚖️",
              },
            ].map((workshop) => (
              <div key={workshop.title} className="bg-gradient-to-br from-blue-50/30 to-purple-50/30 rounded-2xl p-6 sm:p-8 shadow-lg border border-zinc-200 hover:shadow-xl transition-shadow">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{workshop.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 mb-3 sm:mb-4">{workshop.title}</h3>
                <ul className="space-y-2">
                  {workshop.topics.map((topic) => (
                    <li key={topic} className="text-sm sm:text-base text-zinc-600 flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bootcamp Programs Section */}
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
              Intensive Bootcamps
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto px-4">
              Multi-day deep-dive programs to master complete skill sets
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                title: "Full-Stack Development Bootcamp",
                duration: "5 Days",
                desc: "Build a complete web application from scratch using modern tech stack",
                outcomes: [
                  "Frontend with React/Next.js",
                  "Backend with Node.js",
                  "Database integration",
                  "Deployment to cloud",
                ],
              },
              {
                title: "AI/ML Application Bootcamp",
                duration: "4 Days",
                desc: "Create AI-powered applications using Python and popular ML frameworks",
                outcomes: [
                  "ML model training",
                  "API integration",
                  "Real-world datasets",
                  "Production deployment",
                ],
              },
              {
                title: "Startup Launch Bootcamp",
                duration: "3 Days",
                desc: "Transform your idea into a fundable startup with complete business plan",
                outcomes: [
                  "Business model validation",
                  "Financial projections",
                  "Pitch deck creation",
                  "Investor pitch practice",
                ],
              },
              {
                title: "Product Management Bootcamp",
                duration: "3 Days",
                desc: "Learn to build products users love with product thinking and strategy",
                outcomes: [
                  "User research methods",
                  "Product roadmapping",
                  "Feature prioritization",
                  "Metrics & analytics",
                ],
              },
            ].map((bootcamp) => (
              <div key={bootcamp.title} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-zinc-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span 
                    className="text-sm sm:text-base font-bold px-3 py-1 rounded-full"
                    style={{
                      background: "linear-gradient(135deg, #3491ff, #0062ff)",
                      color: "white",
                    }}
                  >
                    {bootcamp.duration}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 mb-2 sm:mb-3">{bootcamp.title}</h3>
                <p className="text-sm sm:text-base text-zinc-600 mb-4 sm:mb-6">{bootcamp.desc}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-zinc-900">What You'll Build:</h4>
                  <ul className="space-y-2">
                    {bootcamp.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm sm:text-base text-zinc-700">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Attend Our Workshops
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { title: "Expert Instructors", desc: "Learn from industry professionals", icon: "👨‍🏫" },
              { title: "Hands-On Learning", desc: "Build real projects, not just theory", icon: "💻" },
              { title: "Free Access", desc: "All workshops free for participants", icon: "🎁" },
              { title: "Certificates", desc: "Get certified for completed programs", icon: "📜" },
            ].map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{benefit.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 mb-2">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-zinc-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-32 bg-gradient-to-br from-blue-50/30 to-purple-50/30">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-zinc-900">
            Start Learning Today
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-600 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
            Join Beyond to get free access to all workshops and bootcamps
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
