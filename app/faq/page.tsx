"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
  category: string;
};

const faqs: FAQItem[] = [
  // General
  {
    category: "General",
    question: "What is Beyond?",
    answer: "Beyond is Unifesto's flagship innovation season - an 8-month comprehensive program (August to March) featuring two tracks: a Hackathon for building technical solutions and a Pitch Competition for launching startup ideas. It includes workshops, mentorship, networking, and awards.",
  },
  {
    category: "General",
    question: "Who can participate in Beyond?",
    answer: "Beyond is open to all college and university students across India. Whether you're a first-year student or in your final year, from any discipline or background, you're welcome to participate. Both individual participants and teams are accepted.",
  },
  {
    category: "General",
    question: "Is there a registration fee?",
    answer: "No, participation in Beyond is completely free. We believe in making innovation accessible to all students regardless of their financial background.",
  },
  {
    category: "General",
    question: "Can I participate in both tracks?",
    answer: "Yes! You can participate in both the Hackathon and Pitch Competition tracks. However, we recommend focusing on one track to make the most of the mentorship and learning opportunities.",
  },

  // Hackathon
  {
    category: "Hackathon",
    question: "Do I need to have a team to participate in the Hackathon?",
    answer: "No, you can register individually and we'll help you find teammates, or you can register with an existing team of 2-4 members. Team formation support is provided during the registration phase.",
  },
  {
    category: "Hackathon",
    question: "What kind of projects can I build?",
    answer: "You can build any technical solution that solves a real-world problem. This includes web apps, mobile apps, AI/ML solutions, IoT projects, blockchain applications, or any other innovative tech solution. We encourage projects with social impact.",
  },
  {
    category: "Hackathon",
    question: "What technologies can I use?",
    answer: "You're free to use any programming languages, frameworks, and technologies you're comfortable with. We'll also provide workshops on popular tech stacks to help you learn new tools.",
  },
  {
    category: "Hackathon",
    question: "Do I need to be an expert coder?",
    answer: "No! Beyond is designed for all skill levels. We provide bootcamps and workshops to help you learn the necessary skills. What matters most is your willingness to learn and build.",
  },

  // Pitch Competition
  {
    category: "Pitch Competition",
    question: "Do I need a working product to participate in the Pitch Competition?",
    answer: "No, you don't need a working product. The Pitch Competition focuses on your business idea, market opportunity, and execution plan. However, having a prototype or MVP can strengthen your pitch.",
  },
  {
    category: "Pitch Competition",
    question: "Can I pitch an existing startup?",
    answer: "Yes, if your startup is in its early stages (pre-seed or seed stage). The competition is designed to help students launch and refine their startup ideas.",
  },
  {
    category: "Pitch Competition",
    question: "What should my pitch deck include?",
    answer: "Your pitch deck should cover: problem statement, solution, market opportunity, business model, go-to-market strategy, team, competitive advantage, and financial projections. We'll provide templates and guidance during the mentorship phase.",
  },
  {
    category: "Pitch Competition",
    question: "Will I get funding if I win?",
    answer: "Winners receive cash prizes and recognition. Additionally, you'll get direct access to our network of investors and VCs who may be interested in funding your startup. Many past winners have secured follow-on funding.",
  },

  // Timeline & Process
  {
    category: "Timeline",
    question: "When does Beyond start?",
    answer: "Beyond runs from August to March each year. Hackathon registration opens in August, with the finale in November. Pitch Competition registration opens in December, with the finale in March.",
  },
  {
    category: "Timeline",
    question: "How much time commitment is required?",
    answer: "The time commitment varies by phase. During workshops and bootcamps, expect 4-6 hours per week. During development/preparation phases, you can dedicate as much time as you want. The program is designed to be flexible with your academic schedule.",
  },
  {
    category: "Timeline",
    question: "Are events held online or offline?",
    answer: "Beyond is a hybrid program. Workshops and bootcamps are primarily online for accessibility. Demo days, pitch days, and finales are held offline at partner university campuses or event venues. We ensure students from all locations can participate.",
  },

  // Mentorship & Support
  {
    category: "Support",
    question: "What kind of mentorship is provided?",
    answer: "You'll get access to industry experts, successful entrepreneurs, and technical mentors who will guide you through your journey. Mentorship includes 1-on-1 sessions, group workshops, office hours, and ongoing support via our community platform.",
  },
  {
    category: "Support",
    question: "How do I access workshops and bootcamps?",
    answer: "All registered participants get free access to our workshops and bootcamps. You'll receive links and schedules via email and our community platform. Sessions are recorded for those who can't attend live.",
  },
  {
    category: "Support",
    question: "Is there a community I can join?",
    answer: "Yes! All participants get access to our exclusive Beyond community platform where you can network with fellow participants, mentors, sponsors, and alumni. It's a great place to find teammates, get help, and stay updated.",
  },

  // Awards & Recognition
  {
    category: "Awards",
    question: "What prizes can I win?",
    answer: "Beyond offers over ₹50 lakhs in total prizes across both tracks. This includes cash prizes, sponsor awards, category-specific awards (Best AI Solution, Best Social Impact, etc.), and special recognition awards. Winners also get certificates and trophies.",
  },
  {
    category: "Awards",
    question: "How are winners selected?",
    answer: "Projects and pitches are evaluated by a panel of judges from industry, academia, and investment firms. Criteria include innovation, impact, feasibility, execution, and presentation. The judging process is transparent and merit-based.",
  },
  {
    category: "Awards",
    question: "What happens after I win?",
    answer: "Winners get ongoing support from Unifesto, including access to our alumni network, potential funding connections, media coverage, and opportunities to showcase at other events. Many winners have gone on to launch successful startups or join top companies.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(faqs.map(faq => faq.category)))];
  const filteredFAQs = selectedCategory === "All" 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <div className="flex flex-col flex-1">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-white overflow-hidden pt-24 sm:pt-28 md:pt-32">
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
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed px-4">
            Everything you need to know about Beyond
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-medium text-sm sm:text-base transition-all ${
                  selectedCategory === category
                    ? "text-white shadow-lg"
                    : "text-zinc-700 bg-zinc-100 hover:bg-zinc-200"
                }`}
                style={
                  selectedCategory === category
                    ? { background: "linear-gradient(135deg, #3491ff, #0062ff)" }
                    : {}
                }
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="space-y-3 sm:space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex items-center justify-between gap-4 text-left hover:bg-zinc-50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="text-xs sm:text-sm font-medium text-blue-600 mb-1 sm:mb-2">
                      {faq.category}
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-zinc-900">
                      {faq.question}
                    </h3>
                  </div>
                  <svg
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-zinc-400 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-5 sm:px-6 md:px-8 pb-4 sm:pb-5 md:pb-6">
                    <p className="text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-16 sm:py-20 md:py-32 bg-gradient-to-br from-blue-50/30 to-purple-50/30">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-zinc-900">
            Still Have Questions?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-600 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
            Our team is here to help. Reach out and we'll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a
              href="mailto:hello@beyond.unifesto.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                background: "linear-gradient(135deg, #3491ff, #0062ff)",
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </a>
            <a
              href="#"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg text-zinc-900 border-2 border-zinc-300 hover:border-zinc-400 hover:bg-zinc-50 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
              Join Discord
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
