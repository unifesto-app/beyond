"use client";

import { useState, useEffect, useRef } from "react";
import { brandGradient } from "@/lib/styles";
import Image from "next/image";
import BeyondLogo from "@/app/assets/images/Beyond.png";

type NavItem = {
  label: string;
  href?: string;
  dropdown?: { label: string; href: string; description?: string; image?: any }[];
  twoColumn?: { title: string; items: { label: string; href: string; description?: string }[] }[];
};

const navItems: NavItem[] = [
  {
    label: "About",
    dropdown: [
      { label: "About Beyond", href: "/about", description: "Our story & mission" },
      { label: "Vision & Mission", href: "/#vision-mission", description: "What drives us" },
      { label: "Timeline", href: "/#timeline", description: "8-month journey" },
    ],
  },
  {
    label: "Programs",
    dropdown: [
      { label: "Beyond Hackathon", href: "/hackathon", description: "Build real-world solutions" },
      { label: "Beyond Pitch Competition", href: "/pitch", description: "Launch your startup idea" },
      { label: "Workshops & Bootcamps", href: "/workshops", description: "Learn industry skills" },
      { label: "Mentorship", href: "/mentorship", description: "Connect with experts" },
    ],
  },
  {
    label: "Journey",
    dropdown: [
      { label: "Hackathon Journey", href: "/hackathon#journey", description: "From idea to demo" },
      { label: "Pitch Journey", href: "/pitch#journey", description: "From concept to pitch day" },
      { label: "Event Calendar", href: "/events", description: "All upcoming events" },
    ],
  },
  {
    label: "Resources",
    dropdown: [
      { label: "Awards & Recognition", href: "/#awards", description: "Prizes & categories" },
      { label: "For Sponsors", href: "/sponsors", description: "Partnership opportunities" },
      { label: "For Universities", href: "/universities", description: "Institutional benefits" },
      { label: "FAQ", href: "/faq", description: "Common questions" },
    ],
  },
];

function MegaMenu({ items }: { items: NavItem[] }) {
  return (
    <div className="absolute top-full right-0 mt-4 w-[800px] max-w-[90vw] rounded-3xl border border-white/20 bg-white shadow-2xl overflow-hidden z-50 pointer-events-auto">
      <div className="h-1 w-full" style={{ background: brandGradient }} />
      <div className="p-8 flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <div key={item.label} className="flex flex-col h-full">
              <div className="mb-auto">
                <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-4 border-b border-zinc-200 pb-2">
                  {item.label}
                </h3>
                <div className="space-y-4">
                  {item.twoColumn ? (
                    item.twoColumn.map(col => (
                      <div key={col.title} className="mb-4">
                        <h4
                          className="text-xs font-semibold uppercase tracking-wider mb-2"
                          style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundImage: brandGradient }}
                        >
                          {col.title}
                        </h4>
                        <div className="space-y-1">
                          {col.items.map(sub => (
                            <a key={sub.label} href={sub.href} className="block px-3 py-2 -mx-3 rounded-xl hover:bg-zinc-100 transition-all group">
                              <div className="text-sm font-medium text-zinc-700 group-hover:text-zinc-900">{sub.label}</div>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))
                  ) : item.dropdown ? (
                    <div className="space-y-1">
                      {item.dropdown.map(sub => (
                        <a key={sub.label} href={sub.href} className="block px-3 py-2 -mx-3 rounded-xl hover:bg-zinc-100 transition-all group">
                          <div className="text-sm font-medium text-zinc-700 group-hover:text-zinc-900">{sub.label}</div>
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DesktopMenuTrigger({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 200);
  };

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  return (
    <div
      className="hidden md:flex relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="flex items-center gap-2 text-base text-zinc-700 hover:text-zinc-900 font-medium tracking-wide transition-colors duration-200 group px-4 py-2 rounded-full hover:bg-zinc-100"
        aria-expanded={open}
      >
        <span>Menu</span>
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && <MegaMenu items={items} />}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const getScrollY = () =>
      window.scrollY ?? window.pageYOffset ?? document.documentElement.scrollTop ?? 0;
    const handleScroll = () => setScrolled(getScrollY() > 24);
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${scrolled || menuOpen
        ? "bg-white border-b border-zinc-200 shadow-sm"
        : "bg-white/80 backdrop-blur-md"
        } ${menuOpen ? "h-screen overflow-y-auto" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
        <nav className="flex items-center justify-between h-20 md:h-24" aria-label="Primary navigation">

          {/* Logo */}
          <a href="/" aria-label="Beyond home" className="flex items-center group">
            <Image
              src={BeyondLogo}
              alt="Beyond"
              className="h-[4.5rem] w-auto transition-all duration-300"
              priority
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex flex-1 justify-end pt-2">
            <DesktopMenuTrigger items={navItems} />
          </div>

          {/* Desktop CTA removed to convert to standard menu item */}

          {/* Mobile toggle */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: "#3491ff" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 animate-fade-in-up">
            <div className="flex flex-col bg-white rounded-2xl border border-zinc-200 mt-1 overflow-hidden shadow-lg">
              {/* Gradient top accent */}
              <div className="h-px w-full" style={{ background: brandGradient }} />
              <div className="p-2">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.dropdown || item.twoColumn ? (
                      <>
                        <button
                          className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-base text-zinc-700 hover:text-zinc-900 font-medium hover:bg-zinc-100 transition-all duration-200"
                          onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                        >
                          <span>{item.label}</span>
                          <svg
                            className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {mobileExpanded === item.label && (
                          <div className="pl-4 pb-1">
                            {item.twoColumn ? (
                              item.twoColumn.map((column) => (
                                <div key={column.title} className="mb-4">
                                  <div className="px-3 py-1.5">
                                    <span
                                      className="text-xs font-bold uppercase tracking-wider"
                                      style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundImage: brandGradient }}
                                    >
                                      {column.title}
                                    </span>
                                  </div>
                                  {column.items.map((sub) => (
                                    <a
                                      key={sub.label}
                                      href={sub.href}
                                      className="flex flex-col px-3 py-2 rounded-xl hover:bg-zinc-100 transition-all duration-200"
                                      onClick={() => setMenuOpen(false)}
                                    >
                                      <span className="text-sm font-medium text-zinc-700">{sub.label}</span>
                                    </a>
                                  ))}
                                </div>
                              ))
                            ) : (
                              item.dropdown?.map((sub) => (
                                <a
                                  key={sub.label}
                                  href={sub.href}
                                  className="flex flex-col px-3 py-2 rounded-xl hover:bg-zinc-100 transition-all duration-200"
                                  onClick={() => setMenuOpen(false)}
                                >
                                  <span className="text-sm font-medium text-zinc-700">{sub.label}</span>
                                </a>
                              ))
                            )}
                          </div>
                        )}
                      </>
                    ) : (
                      <a
                        href={item.href}
                        className="block px-3 py-2.5 rounded-xl text-base text-zinc-700 hover:text-zinc-900 font-medium hover:bg-zinc-100 transition-all duration-200"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    )}
                  </div>
                ))}

                <div className="px-2 pt-1 pb-1">
                  {/* Mobile CTA removed to convert to standard menu item */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
