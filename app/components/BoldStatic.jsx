"use client";

import React from "react";
import { motion } from "framer-motion"; // For scroll reveal

const BoldStatic = ({ isVariant = false }) => {
  const marqueeText = isVariant 
    ? "Join the Revolution • Build, Innovate, Transform Nigeria • Exhibot Leads the Way •"
    : "The Future Is Not Imported • It’s Built Here • Exhibot Ng Is Nigeria’s Robotics Revolution •";

  const boldText = isVariant 
    ? "Become Part of the Story – Innovate with Exhibot"
    : "Exhibot is More Than Just Entertainment – It’s a Movement";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative bg-[#0f0f0f] text-white font-ui overflow-hidden"
    >
      {/* Marquees Section */}
      <div className="flex flex-col gap-6 sm:gap-10">
        <div className="relative overflow-hidden whitespace-nowrap bg-[#F97216] border-t border-white/20 border-dashed py-4 sm:py-6">
          <div className="marquee-track-bold text-xl sm:text-3xl md:text-[2.5rem] font-extrabold uppercase tracking-wider">
            <span className="inline-block px-6 sm:px-10">
              {marqueeText}
            </span>
            <span className="inline-block px-6 sm:px-10" aria-hidden="true">
              {marqueeText}
            </span>
          </div>
          {/* Fades */}
          <div className="absolute top-0 left-0 h-full w-[40px] sm:w-[80px] z-10 bg-gradient-to-r from-[#F97216] via-[#F97216]/70 to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 h-full w-[40px] sm:w-[80px] z-10 bg-gradient-to-l from-[#F97216] via-[#F97216]/70 to-transparent pointer-events-none" />
        </div>
      </div>

      <div className="bg-blue-700 py-12 sm:py-20 px-4 sm:px-8 md:px-[8rem]">
        <div className="w-full">
          <h1 className="text-4xl sm:text-6xl md:text-[8rem] leading-tight sm:leading-[8rem] md:leading-[12rem] text-white" style={{ fontFamily: 'Exima Geometric' }}>
            {boldText} <span className="text-[#F97216]">Join Now!</span>
          </h1>
        </div>
      </div>

      {/* Keyframe Styles */}
      <style jsx>{`
        .marquee-track-bold {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 18s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </motion.div>
  );
};

export default BoldStatic;
