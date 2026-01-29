"use client";
//test
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function CaseStudyDetail({ params }) {
  const router = useRouter();
  const [isDark, setIsDark] = useState(false);
  const currentId = parseInt(params.id);
  const nextId = currentId + 1;

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
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`min-h-screen transition-colors duration-300 ${isDark ? "bg-black text-white" : "bg-white text-black"} py-8 sm:py-12 px-4 sm:px-6 lg:px-8`}
    >
      <div className="max-w-[800px] mx-auto">
        <div className="flex flex-col items-start gap-12 sm:gap-16">
          {/* Back button */}
          <button
            onClick={() => router.push("/")}
            className={`flex items-center gap-2 font-inter text-xl sm:text-2xl font-extralight hover:opacity-70 transition-opacity ${isDark ? "text-white" : "text-black"}`}
          >
            <span>&lt;-</span>
            <span className="text-base sm:text-md">Back To Case Studies</span>
          </button>

          {/* Tags */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className={`flex px-2 py-1 justify-center items-center gap-2 rounded-md transition-colors font-inter text-sm leading-[150%] tracking-[-0.14px] ${isDark ? "bg-white/10 text-white/75" : "bg-[#ECECEC] text-black/75"}`}>
              UX/UI Design
            </span>
            <span className={`flex px-2 py-1 justify-center items-center gap-2 rounded-md transition-colors font-inter text-sm leading-[150%] tracking-[-0.14px] ${isDark ? "bg-white/10 text-white/75" : "bg-[#ECECEC] text-black/75"}`}>
              Email
            </span>
            <span className={`flex px-2 py-1 justify-center items-center gap-2 rounded-md transition-colors font-inter text-sm leading-[150%] tracking-[-0.14px] ${isDark ? "bg-white/10 text-white/75" : "bg-[#ECECEC] text-black/75"}`}>
              2024
            </span>
          </div>

          {/* Title */}
          <h1 className={`font-inter text-3xl sm:text-4xl lg:text-5xl font-bold leading-[120%] ${isDark ? "text-white" : "text-black"}`}>
            Hobart Product Landing Page Redesign
          </h1>

          {/* Hero Image */}
          <div className={`w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg transition-colors ${isDark ? "bg-white/5" : "bg-[#E8E8E8]"}`}></div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 w-full">
            <MetadataItem 
              label="Role"
              value="UX/UI Designer"
              isDark={isDark}
            />
            <MetadataItem 
              label="Timeline"
              value="1 Week"
              isDark={isDark}
            />
            <MetadataItem 
              label="Platform"
              value="Email"
              isDark={isDark}
            />
            <MetadataItem 
              label="Tools"
              value="Figma"
              isDark={isDark}
            />
          </div>

          {/* Overview Section */}
          <Section
            eyebrow="OVERVIEW"
            heading="Overview"
            content="A product landing page redesign for Hobart focused on improving product clarity, visual hierarchy, and user engagement for a corded wire product."
            isDark={isDark}
          />

          {/* The Problem Section */}
          <Section
            eyebrow="THE PROBLEM"
            heading="The challenge: Overcoming an under-leveraged landing page layout"
            content="The existing landing page had a dated design and confusing layout, which made the product seem less premium and obscured its key features. This led to low user engagement.

The goal was to redesign the page within one week and under a $5,000 budget to improve visual clarity and product presentation, guiding users toward key actions while maintaining the existing brand tone and core content."
            isDark={isDark}
          />

          {/* Role Section */}
          <Section
            eyebrow="ROLE"
            heading="My role & collaboration"
            content="Led the full UX/UI redesign—focusing on layout and hierarchy—and coordinated with graphic designers and project managers to meet all business, timeline, and budget goals."
            isDark={isDark}
          />

          {/* Design Process Section */}
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-3">
              <p className={`font-inter text-xs font-semibold tracking-wider uppercase ${isDark ? "text-white/50" : "text-black/50"}`}>
                RESEARCH & DISCOVERY
              </p>
              <h2 className={`font-inter text-2xl sm:text-3xl font-bold leading-[130%] ${isDark ? "text-white" : "text-black"}`}>
                Design process
              </h2>
            </div>

            <div className={`w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg transition-colors ${isDark ? "bg-white/5" : "bg-[#E8E8E8]"}`}></div>

            <p className={`font-inter text-base leading-[160%] ${isDark ? "text-white/75" : "text-black/75"}`}>
              The design process began by reviewing existing product and competitor pages to understand industrial marketing approaches. The focus was then shifted to creating a simplified layout that prioritized product imagery, key features, and clear calls-to-action.
            </p>
          </div>

          {/* Final Solution Section */}
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-3">
              <p className={`font-inter text-xs font-semibold tracking-wider uppercase ${isDark ? "text-white/50" : "text-black/50"}`}>
                FINAL SOLUTION
              </p>
              <h2 className={`font-inter text-2xl sm:text-3xl font-bold leading-[130%] ${isDark ? "text-white" : "text-black"}`}>
                The result: A high-impact, conversion-focused landing page
              </h2>
            </div>

            <div className={`w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg transition-colors ${isDark ? "bg-white/5" : "bg-[#E8E8E8]"}`}></div>

            <p className={`font-inter text-base leading-[160%] ${isDark ? "text-white/75" : "text-black/75"}`}>
              The redesign delivered a modern, visually-driven landing page that transforms product presentation. By emphasizing high-quality imagery, clear hierarchy, and strategic call-to-action placement, the new design makes the corded wire's value and key features immediately apparent, guiding users toward key conversion actions.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-4 w-full">
            <button
              onClick={() => router.push("/")}
              className={`flex py-4 px-6 justify-center items-center gap-2 flex-1 rounded-lg transition-colors ${isDark ? "bg-white/10 hover:bg-white/15 text-white border border-white/20" : "bg-black/5 hover:bg-black/10 text-black border border-black/20"}`}
            >
              <LeftArrowIcon isDark={isDark} />
              <span className="text-center font-inter text-sm font-medium tracking-[0.14px] uppercase">
                Back to Case Studies
              </span>
            </button>
            <button
              onClick={() => router.push(`/case-study/${nextId}`)}
              className={`flex py-4 px-6 justify-center items-center gap-2 flex-1 rounded-lg transition-colors ${isDark ? "bg-[#2D2D2D] hover:bg-[#3D3D3D] text-white" : "bg-[#2D2D2D] hover:bg-[#1D1D1D] text-white"}`}
            >
              <span className="text-center font-inter text-sm font-medium tracking-[0.14px] uppercase">
                View Next Case Study
              </span>
              <RightArrowIcon />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function LeftArrowIcon({ isDark }) {
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
        d="M15.832 10H4.16536M4.16536 10L9.9987 15.8333M4.16536 10L9.9987 4.16667"
        stroke={isDark ? "white" : "black"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RightArrowIcon() {
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

function MetadataItem({ label, value, isDark }) {
  return (
    <div className="flex flex-col gap-2">
      <p className={`font-inter text-xs font-semibold tracking-wider uppercase ${isDark ? "text-white/50" : "text-black/50"}`}>
        {label}
      </p>
      <p className={`font-inter text-sm font-medium ${isDark ? "text-white" : "text-black"}`}>
        {value}
      </p>
    </div>
  );
}

function Section({ eyebrow, heading, content, isDark }) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-3">
        <p className={`font-inter text-xs font-semibold tracking-wider uppercase ${isDark ? "text-white/50" : "text-black/50"}`}>
          {eyebrow}
        </p>
        <h2 className={`font-inter text-2xl sm:text-3xl font-bold leading-[130%] ${isDark ? "text-white" : "text-black"}`}>
          {heading}
        </h2>
      </div>
      <p className={`font-inter text-base leading-[160%] whitespace-pre-line ${isDark ? "text-white/75" : "text-black/75"}`}>
        {content}
      </p>
    </div>
  );
}

