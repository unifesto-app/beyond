export default function EventsPage() {
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
            Events Calendar
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-600 max-w-3xl mx-auto leading-relaxed px-4">
            Your complete guide to all Beyond events, workshops, and milestones
          </p>
        </div>
      </section>

      {/* Hackathon Track Events */}
      <section className="py-16 sm:py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-12 sm:mb-16">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{
                background: "linear-gradient(135deg, #3491ff, #0062ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Hackathon Track Events
            </h2>
            <p className="text-base sm:text-lg text-zinc-600">August - November 2026</p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {[
              {
                month: "August",
                events: [
                  {
                    title: "Registration Opens",
                    date: "Aug 1",
                    type: "Milestone",
                    desc: "Hackathon registration opens for individuals and teams",
                  },
                  {
                    title: "Orientation Webinar",
                    date: "Aug 10",
                    type: "Online Event",
                    desc: "Learn about the program, timeline, and how to make the most of Beyond",
                  },
                  {
                    title: "Team Formation Week",
                    date: "Aug 15-22",
                    type: "Networking",
                    desc: "Connect with potential teammates through our platform",
                  },
                  {
                    title: "Registration Closes",
                    date: "Aug 31",
                    type: "Deadline",
                    desc: "Last day to register for the Hackathon track",
                  },
                ],
              },
              {
                month: "September",
                events: [
                  {
                    title: "Idea Submission Opens",
                    date: "Sep 1",
                    type: "Milestone",
                    desc: "Submit your project idea and problem statement",
                  },
                  {
                    title: "Tech Stack Workshop Series",
                    date: "Sep 5-20",
                    type: "Workshop",
                    desc: "Weekly workshops on React, Node.js, databases, and deployment",
                  },
                  {
                    title: "Development Bootcamp",
                    date: "Sep 22-26",
                    type: "Bootcamp",
                    desc: "5-day intensive bootcamp to kickstart your project",
                  },
                  {
                    title: "Idea Submission Deadline",
                    date: "Sep 30",
                    type: "Deadline",
                    desc: "Final day to submit your project idea",
                  },
                ],
              },
              {
                month: "October",
                events: [
                  {
                    title: "Development Sprint Begins",
                    date: "Oct 1",
                    type: "Milestone",
                    desc: "Start building your solution with mentor support",
                  },
                  {
                    title: "Weekly Mentor Office Hours",
                    date: "Every Wed & Sat",
                    type: "Mentorship",
                    desc: "Get help from mentors during scheduled office hours",
                  },
                  {
                    title: "Mid-Sprint Check-in",
                    date: "Oct 15",
                    type: "Review",
                    desc: "Present your progress to mentors and get feedback",
                  },
                  {
                    title: "UI/UX Design Workshop",
                    date: "Oct 20",
                    type: "Workshop",
                    desc: "Polish your product's user experience and interface",
                  },
                ],
              },
              {
                month: "November",
                events: [
                  {
                    title: "Final Submission Deadline",
                    date: "Nov 5",
                    type: "Deadline",
                    desc: "Submit your completed project and demo video",
                  },
                  {
                    title: "Demo Day Preparation",
                    date: "Nov 8-10",
                    type: "Workshop",
                    desc: "Learn how to present and pitch your project effectively",
                  },
                  {
                    title: "Demo Day",
                    date: "Nov 15",
                    type: "Major Event",
                    desc: "Showcase your project to judges and attendees",
                  },
                  {
                    title: "Hackathon Grand Finale",
                    date: "Nov 22",
                    type: "Major Event",
                    desc: "Final presentations, judging, and awards ceremony",
                  },
                ],
              },
            ].map((monthData) => (
              <div key={monthData.month} className="bg-gradient-to-br from-blue-50/30 to-purple-50/30 rounded-3xl p-6 sm:p-8 border border-zinc-200">
                <h3 
                  className="text-2xl sm:text-3xl font-bold mb-6"
                  style={{
                    background: "linear-gradient(135deg, #3491ff, #0062ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {monthData.month}
                </h3>
                <div className="space-y-4">
                  {monthData.events.map((event) => (
                    <div key={event.title} className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-zinc-200 hover:shadow-md transition-shadow">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-2">
                        <h4 className="text-lg sm:text-xl font-bold text-zinc-900">{event.title}</h4>
                        <span className="text-sm font-medium text-blue-600 whitespace-nowrap">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-700">
                          {event.type}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-zinc-600">{event.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pitch Competition Track Events */}
      <section className="py-16 sm:py-20 md:py-32 bg-gradient-to-br from-blue-50/30 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-12 sm:mb-16">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{
                background: "linear-gradient(135deg, #3491ff, #0062ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Pitch Competition Track Events
            </h2>
            <p className="text-base sm:text-lg text-zinc-600">December 2026 - March 2027</p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {[
              {
                month: "December",
                events: [
                  {
                    title: "Registration Opens",
                    date: "Dec 1",
                    type: "Milestone",
                    desc: "Pitch Competition registration opens for aspiring entrepreneurs",
                  },
                  {
                    title: "Startup Orientation",
                    date: "Dec 5",
                    type: "Online Event",
                    desc: "Introduction to the pitch track, timeline, and expectations",
                  },
                  {
                    title: "Idea Submission Opens",
                    date: "Dec 10",
                    type: "Milestone",
                    desc: "Submit your startup idea and initial business concept",
                  },
                  {
                    title: "Registration & Idea Submission Closes",
                    date: "Dec 31",
                    type: "Deadline",
                    desc: "Last day to register and submit your startup idea",
                  },
                ],
              },
              {
                month: "January",
                events: [
                  {
                    title: "Business Model Workshop",
                    date: "Jan 5-7",
                    type: "Workshop",
                    desc: "Learn to build and validate your business model canvas",
                  },
                  {
                    title: "Market Research Bootcamp",
                    date: "Jan 12-14",
                    type: "Bootcamp",
                    desc: "3-day intensive on market analysis and customer discovery",
                  },
                  {
                    title: "Mentor Matching",
                    date: "Jan 15",
                    type: "Milestone",
                    desc: "Get matched with industry mentors and entrepreneurs",
                  },
                  {
                    title: "Financial Modeling Workshop",
                    date: "Jan 20",
                    type: "Workshop",
                    desc: "Build financial projections and understand unit economics",
                  },
                  {
                    title: "1-on-1 Mentor Sessions Begin",
                    date: "Jan 22 onwards",
                    type: "Mentorship",
                    desc: "Regular sessions with your assigned mentor",
                  },
                ],
              },
              {
                month: "February",
                events: [
                  {
                    title: "Pitch Deck Workshop",
                    date: "Feb 1-3",
                    type: "Workshop",
                    desc: "Create compelling pitch decks that tell your story",
                  },
                  {
                    title: "Go-to-Market Strategy Session",
                    date: "Feb 8",
                    type: "Workshop",
                    desc: "Develop your customer acquisition and growth strategy",
                  },
                  {
                    title: "Mock Pitch Sessions",
                    date: "Feb 15-20",
                    type: "Practice",
                    desc: "Practice your pitch with mentors and get feedback",
                  },
                  {
                    title: "Pitch Deck Submission",
                    date: "Feb 25",
                    type: "Deadline",
                    desc: "Submit your final pitch deck for review",
                  },
                  {
                    title: "Pitch Day Preparation",
                    date: "Feb 28",
                    type: "Workshop",
                    desc: "Final tips and strategies for pitch day success",
                  },
                ],
              },
              {
                month: "March",
                events: [
                  {
                    title: "Preliminary Pitch Day",
                    date: "Mar 5",
                    type: "Major Event",
                    desc: "First round of pitches to select finalists",
                  },
                  {
                    title: "Finalist Announcement",
                    date: "Mar 8",
                    type: "Milestone",
                    desc: "Top teams selected for the grand finale",
                  },
                  {
                    title: "Finalist Coaching",
                    date: "Mar 10-15",
                    type: "Mentorship",
                    desc: "Intensive coaching for finalist teams",
                  },
                  {
                    title: "Investor Networking Event",
                    date: "Mar 18",
                    type: "Networking",
                    desc: "Meet and network with VCs and angel investors",
                  },
                  {
                    title: "Grand Finale & Awards",
                    date: "Mar 22",
                    type: "Major Event",
                    desc: "Final pitches to investors, judging, and awards ceremony",
                  },
                ],
              },
            ].map((monthData) => (
              <div key={monthData.month} className="bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200 shadow-lg">
                <h3 
                  className="text-2xl sm:text-3xl font-bold mb-6"
                  style={{
                    background: "linear-gradient(135deg, #3491ff, #0062ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {monthData.month}
                </h3>
                <div className="space-y-4">
                  {monthData.events.map((event) => (
                    <div key={event.title} className="bg-gradient-to-br from-blue-50/30 to-purple-50/30 rounded-xl p-4 sm:p-6 border border-zinc-200 hover:shadow-md transition-shadow">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-2">
                        <h4 className="text-lg sm:text-xl font-bold text-zinc-900">{event.title}</h4>
                        <span className="text-sm font-medium text-blue-600 whitespace-nowrap">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-700">
                          {event.type}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-zinc-600">{event.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types Legend */}
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
              Event Types
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto px-4">
              Understanding different types of events in Beyond
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                type: "Major Event",
                desc: "Large-scale events like demo days, pitch days, and finales",
                icon: "🎪",
              },
              {
                type: "Workshop",
                desc: "2-3 hour focused learning sessions on specific topics",
                icon: "📚",
              },
              {
                type: "Bootcamp",
                desc: "Multi-day intensive programs for deep skill development",
                icon: "🏕️",
              },
              {
                type: "Mentorship",
                desc: "1-on-1 or group sessions with industry mentors",
                icon: "👥",
              },
              {
                type: "Networking",
                desc: "Connect with peers, sponsors, and industry professionals",
                icon: "🤝",
              },
              {
                type: "Milestone",
                desc: "Important program milestones and phase transitions",
                icon: "🎯",
              },
              {
                type: "Deadline",
                desc: "Submission deadlines and registration cutoffs",
                icon: "⏰",
              },
              {
                type: "Online Event",
                desc: "Virtual events accessible from anywhere",
                icon: "💻",
              },
            ].map((eventType) => (
              <div key={eventType.type} className="bg-gradient-to-br from-blue-50/30 to-purple-50/30 rounded-2xl p-6 sm:p-8 text-center border border-zinc-200 hover:shadow-lg transition-shadow">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{eventType.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 mb-2">{eventType.type}</h3>
                <p className="text-sm sm:text-base text-zinc-600">{eventType.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Updated Section */}
      <section className="py-16 sm:py-20 md:py-32 bg-gradient-to-br from-blue-50/30 to-purple-50/30">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-zinc-900">
            Stay Updated
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-600 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
            Register for Beyond to get event reminders, calendar invites, and exclusive updates
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a
              href="/#programs"
              className="w-full sm:w-auto inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                background: "linear-gradient(135deg, #3491ff, #0062ff)",
              }}
            >
              Register Now
            </a>
            <a
              href="#"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg text-zinc-900 border-2 border-zinc-300 hover:border-zinc-400 hover:bg-zinc-50 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Download Calendar
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
