"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Index() {
  const [activeTab, setActiveTab] = useState("case studies");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Load theme preference from localStorage after mount
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? "bg-[#1a1a1a] text-white" : "bg-white text-black"} py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-[680px] mx-auto">
        <div className="flex flex-col items-center gap-24">
          <div className="flex flex-col items-center gap-24 w-full">
            <LogoIcon isDark={isDark} onToggle={toggleTheme} />
            
            <div className="flex flex-col items-start gap-8 w-full">
              <h1 className={`font-inter text-[40px] font-bold leading-[110%] w-full ${isDark ? "text-white" : "text-black"}`}>
                Adriana–Portfolio
              </h1>

              <div className="flex flex-col items-start gap-6 w-full">
                <p className={`font-inter text-[18px] leading-[150%] w-full ${isDark ? "text-white/60" : "text-black/60"}`}>
                  Centralize communications, create advance AI assistants through chat, and gain actionable insights–all while keeping your data private.
                </p>

                <div className="flex items-start gap-4 flex-wrap">
                  <SocialBadge label="Linkedin" isDark={isDark} />
                </div>
              </div>
            </div>
          </div>

          <nav className={`flex items-center gap-8 w-full border-b ${isDark ? "border-white/25" : "border-black/25"}`}>
            <TabButton
              label="case studies"
              active={activeTab === "case studies"}
              onClick={() => setActiveTab("case studies")}
              isDark={isDark}
            />
            <TabButton
              label="other"
              active={activeTab === "other"}
              onClick={() => setActiveTab("other")}
              isDark={isDark}
            />
          </nav>

          <div className="flex flex-col gap-16 w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-16 w-full"
              >
                {activeTab === "case studies" && (
                  <>
                    <CaseStudyCard
                      id={1}
                      title="Hobart Product Landing Page Redesign"
                      description="A landing page redesign for Hobart focused on improving product clarity, visual hierarchy, and user engagement for a corded wire product."
                      tags={[]}
                      isDark={isDark}
                    />
                    <CaseStudyCard
                      id={2}
                      title="ITW Email Newsletter Redesign"
                      description="A landing page redesign for Hobart focused on improving product clarity, visual hierarchy, and user engagement for a corded wire product."
                      tags={[]}
                      isDark={isDark}
                    />
                    <CaseStudyCard
                      id={3}
                      title="ITW Email Newsletter Redesign"
                      description="A landing page redesign for Hobart focused on improving product clarity, visual hierarchy, and user engagement for a corded wire product."
                      tags={[]}
                      isDark={isDark}
                    />
                  </>
                )}

                {activeTab === "other" && (
                  <div className={`py-16 text-center font-inter ${isDark ? "text-white/50" : "text-black/50"}`}>
                    Content coming soon...
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

function RecentWorkList({ isDark }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const workItems = [
    { company: "Company", year: "2024–2025" },
    { company: "Company", year: "2023–2024" },
    { company: "Company", year: "2023–2024" },
    { company: "Company", year: "2023–2024" },
  ];

  const toggleItem = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <div className="flex flex-col items-start gap-8 w-full">
      {workItems.map((item, index) => (
        <WorkCard
          key={index}
          company={item.company}
          year={item.year}
          isExpanded={expandedIndex === index}
          onToggle={() => toggleItem(index)}
          isDark={isDark}
        />
      ))}
    </div>
  );
}

function LogoIcon({ isDark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="cursor-pointer hover:opacity-80 transition-opacity"
      aria-label="Toggle dark mode"
    >
      <svg
        width="60"
        height="24"
        viewBox="0 0 60 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex justify-center items-start gap-3"
      >
        {isDark ? (
          <>
            <circle cx="12" cy="12" r="11" stroke="white" strokeOpacity="0.9" strokeWidth="2"/>
            <path d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3V21Z" fill="white" fillOpacity="0.9"/>
            <circle cx="48" cy="12" r="11" stroke="white" strokeOpacity="0.25" strokeWidth="2"/>
            <circle cx="48" cy="12" r="4" fill="white" fillOpacity="0.25"/>
            <circle cx="48" cy="5" r="2" fill="white" fillOpacity="0.25"/>
            <circle cx="48" cy="19" r="2" fill="white" fillOpacity="0.25"/>
            <circle cx="55" cy="12" r="2" fill="white" fillOpacity="0.25"/>
            <circle cx="41" cy="12" r="2" fill="white" fillOpacity="0.25"/>
            <circle cx="43" cy="7" r="2" fill="white" fillOpacity="0.25"/>
            <circle cx="53" cy="7" r="2" fill="white" fillOpacity="0.25"/>
            <circle cx="53" cy="17" r="2" fill="white" fillOpacity="0.25"/>
            <circle cx="43" cy="17" r="2" fill="white" fillOpacity="0.25"/>
          </>
        ) : (
          <>
            <circle cx="12" cy="12" r="11" stroke="black" strokeOpacity="0.25" strokeWidth="2"/>
            <path d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3V21Z" fill="black" fillOpacity="0.25"/>
            <circle cx="48" cy="12" r="11" stroke="black" strokeOpacity="0.9" strokeWidth="2"/>
            <circle cx="48" cy="12" r="4" fill="black" fillOpacity="0.9"/>
            <circle cx="48" cy="5" r="2" fill="black" fillOpacity="0.9"/>
            <circle cx="48" cy="19" r="2" fill="black" fillOpacity="0.9"/>
            <circle cx="55" cy="12" r="2" fill="black" fillOpacity="0.9"/>
            <circle cx="41" cy="12" r="2" fill="black" fillOpacity="0.9"/>
            <circle cx="43" cy="7" r="2" fill="black" fillOpacity="0.9"/>
            <circle cx="53" cy="7" r="2" fill="black" fillOpacity="0.9"/>
            <circle cx="53" cy="17" r="2" fill="black" fillOpacity="0.9"/>
            <circle cx="43" cy="17" r="2" fill="black" fillOpacity="0.9"/>
          </>
        )}
      </svg>
    </button>
  );
}

function SocialBadge({ label, isDark }) {
  return (
    <div className={`flex px-2 py-1 justify-center items-center gap-2 rounded-md transition-colors ${isDark ? "bg-white/10" : "bg-[#ECECEC]"}`}>
      <span className={`font-inter text-sm leading-[150%] tracking-[-0.14px] ${isDark ? "text-white/75" : "text-black/75"}`}>
        {label}
      </span>
    </div>
  );
}

function TabButton({ label, active, onClick, isDark }) {
  return (
    <button
      onClick={onClick}
      className={`flex h-10 justify-center items-center relative ${
        active ? (isDark ? 'border-b border-white' : 'border-b border-black') : ''
      }`}
    >
      <span
        className={`font-orbit text-sm text-center leading-[150%] tracking-[0.14px] ${
          active ? (isDark ? 'text-white' : 'text-black') : (isDark ? 'text-white/50' : 'text-black/50')
        }`}
      >
        {label}
      </span>
    </button>
  );
}

function WorkCard({ company, year, isExpanded, onToggle, isDark }) {
  return (
    <motion.article
      layout
      className={`flex flex-col items-start w-full rounded-2xl border transition-colors overflow-hidden ${isDark ? "border-white/25 bg-white/5" : "border-black/25 bg-white"}`}
      initial={false}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={onToggle}
        className="flex justify-between items-start w-full p-8"
      >
        <div className="flex items-start gap-2">
          <div className={`flex w-6 h-6 p-12 items-start gap-12 flex-shrink-0 rounded-sm transition-colors ${isDark ? "bg-white/10" : "bg-[#E2E2E2]"}`}></div>
          <div className="flex flex-col items-start gap-2 flex-shrink-0">
            <div className={`font-inter text-base tracking-[-0.16px] ${isDark ? "text-white" : "text-black"}`}>
              {company}
            </div>
            <div className={`font-orbit text-[13px] leading-[100%] tracking-[0.13px] ${isDark ? "text-white/50" : "text-black/50"}`}>
              {year}
            </div>
          </div>
        </div>

        <div className={`flex w-4 h-[18px] flex-col justify-center text-right font-inter text-2xl leading-normal tracking-[-0.24px] ${isDark ? "text-white" : "text-black"}`}>
          <span className={isExpanded ? 'font-extralight' : 'font-light'}>
            {isExpanded ? '–' : '+'}
          </span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-start gap-4 w-full px-8 pb-16 pt-4"
          >
            <div className={`w-full h-[450px] rounded-lg transition-colors ${isDark ? "bg-white/5" : "bg-[#F4F4F4]"}`}></div>

            <div className="flex flex-col items-start gap-4 w-full">
              <p className={`font-inter text-base leading-[150%] tracking-[-0.16px] w-full ${isDark ? "text-white/75" : "text-black/75"}`}>
                Centralize communications, create advance AI assistants through chat, and gain actionable insights–all while keeping your data private.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

function CaseStudyCard({ id = 1, title, description, tags, isDark }) {
  const router = useRouter();

  return (
    <article className="flex w-full flex-col justify-center items-start gap-4">
      <h2 className={`font-inter text-[32px] font-normal leading-[120%] w-full ${isDark ? "text-white" : "text-black"}`}>
        {title}
      </h2>

      <div className={`w-full h-[400px] rounded-lg transition-colors ${isDark ? "bg-white/5" : "bg-[#E8E8E8]"}`}></div>

      <p className={`font-inter text-base leading-[150%] w-full ${isDark ? "text-white/75" : "text-black/75"}`}>
        {description}
      </p>

      <div className="flex items-center gap-3 flex-wrap w-full">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`font-inter text-sm leading-[150%] ${isDark ? "text-white/60" : "text-black/60"}`}
          >
            {tag}
          </span>
        ))}
      </div>

      <button
        onClick={() => router.push(`/case-study/${id}`)}
        className={`flex py-4 px-6 justify-center items-center gap-2 w-full rounded-lg transition-colors ${isDark ? "bg-[#2D2D2D] hover:bg-[#3D3D3D] text-white" : "bg-[#2D2D2D] hover:bg-[#1D1D1D] text-white"}`}
      >
        <span className="text-center font-inter text-sm font-medium tracking-[0.14px] uppercase">
          View Case Study
        </span>
        <ArrowIcon isDark={true} />
      </button>
    </article>
  );
}

function ArrowIcon({ isDark }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
    >
      <path
        d="M4.16797 10H15.8346M15.8346 10L10.0013 4.16667M15.8346 10L10.0013 15.8333"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

