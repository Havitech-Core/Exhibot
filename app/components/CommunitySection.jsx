"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

const particleIcons = ["🎮", "🧠", "🕹️", "⚙️", "💬", "📡"];

const CommunitySection = () => {
  const sectionRef = useRef(null);
  const glitchTextRef = useRef(null);
  const subtitleRef = useRef(null);
  const particlesRef = useRef([]);
  const logoRef = useRef(null);

  const [textSwap, setTextSwap] = useState(true);

  useEffect(() => {
  if (sectionRef.current) {
    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.2, ease: "power2.out" });
  }

  if (subtitleRef.current) {
    gsap.fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.5 });
  }

  particlesRef.current.forEach((el, i) => {
    if (el) {
      gsap.to(el, {
        x: gsap.utils.random(-20, 20),
        y: gsap.utils.random(-20, 20),
        repeat: -1,
        yoyo: true,
        duration: gsap.utils.random(3, 6),
        ease: "sine.inOut",
        delay: i * 0.3,
      });
    }
  });

  if (logoRef.current) {
    gsap.to(logoRef.current, {
      scale: 1.18,
      opacity: 0.1,
      repeat: -1,
      yoyo: true,
      duration: 5,
      ease: "sine.inOut",
    });
  }

  const swapInterval = setInterval(() => setTextSwap((prev) => !prev), 5000);
  return () => clearInterval(swapInterval);
}, []);


  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-screen bg-gray-100 overflow-hidden flex items-center justify-center text-center px-4 sm:px-6"
    >
      {/* Floating Gamepad Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => {
          const icon = particleIcons[i % particleIcons.length];
          return (
            <div
              key={i}
              ref={(el) => (particlesRef.current[i] = el)}
              className="absolute text-gray-400 text-lg sm:text-xl opacity-40 select-none"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            >
              {icon}
            </div>
          );
        })}
      </div>

      {/* Cryptic Background Logo */}
      <img
        ref={logoRef}
        src="/logo_icon.png"
        alt="Logo"
        className="absolute right-4 sm:right-8 bottom-8 sm:bottom-12 w-[150px] sm:w-[300px] opacity-10 select-none pointer-events-none hidden md:block"
        style={{ zIndex: 1 }}
      />

      {/* Main Text Content */}
      <div className="relative z-10 max-w-3xl">
        <h2
          ref={glitchTextRef}
          className="text-3xl text-[#F97216] sm:text-4xl md:text-[3rem] tracking-wide uppercase px-4 py-6 sm:py-8 font-bold transition-all duration-1000 ease-in-out"
          style={{ fontFamily: 'Exima Geometric' }}
        >
          {(textSwap ? "CONNECT WITH THE CORE" : "BE THE CHANGE").split("").map((char, idx) => (
            <span key={idx} className="glitch-char inline-block" style={{ display: 'inline-block', whiteSpace: 'pre' }}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>

        <p
          ref={subtitleRef}
          className="mt-4 sm:mt-6 text-black py-6 sm:py-8 text-xl sm:text-2xl md:text-3xl font-medium max-w-xl mx-auto leading-relaxed tracking-wide"
        >
          Enter a community of fearless builders, gamers, and visionaries. Explore ideas, ship faster, and shape what's next — together.
        </p>

        {/* CTA Button with fun hover */}
        <div className="mt-8 sm:mt-10">
          <motion.a
            href="https://discord.gg/YOUR_INVITE"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="inline-block skew-x-[-12deg] bg-blue-700 hover:bg-blue-800 px-6 sm:px-10 py-3 sm:py-4 text-white font-bold text-base sm:text-lg shadow-xl tracking-wider transition-transform"
          >
            <span className="skew-x-[12deg] block">JOIN THE HAVITECH CORE</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default CommunitySection;
