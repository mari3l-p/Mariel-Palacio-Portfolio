"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Envelope } from "react-bootstrap-icons";

const roles = [
  "Web Developer",
  "Web Designer",
  "UI/UX Enthusiast",
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [displayText, setDisplayText] = useState(roles[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => {
          const next = (prev + 1) % roles.length;
          setDisplayText(roles[next]);
          return next;
        });
        setAnimating(false);
      }, 400);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden px-6 text-center">
      {/* Subtle radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(255,255,255,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Noise texture overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl">
        {/* Name */}
        <p className="text-sm md:text-base text-white/40 tracking-[0.3em] uppercase font-medium">
          Mariel Palacio
        </p>

        {/* Animated role title */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-none -mt-2">
          <span
            key={displayText}
            className={`inline-block transition-all duration-[400ms] ease-in-out ${
              animating
                ? "opacity-0 translate-y-4 blur-sm"
                : "opacity-100 translate-y-0 blur-0"
            }`}
          >
            {displayText}
          </span>
        </h1>


        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/50 font-light tracking-wide mt-2">
          Crafting beautiful, responsive, and performant web experiences
        </p>

        {/* Description */}
        <p className="text-sm md:text-base text-white/35 leading-relaxed max-w-xl">
          I specialize in building modern web applications with cutting-edge
          technologies. From concept to deployment, I bring ideas to life with
          clean code and stunning design.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4 mt-4">
          <a href="#contact"><button className="px-7 py-3 rounded-xl bg-white text-black text-sm font-semibold tracking-wide hover:bg-white/90 active:scale-95 transition-all duration-200 shadow-lg shadow-white/10">
            Get In Touch
          </button></a>
          <a href="#projects"><button className="px-7 py-3 rounded-xl border border-white/20 text-white text-sm font-semibold tracking-wide hover:bg-white/5 active:scale-95 transition-all duration-200">
            View Work
          </button></a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6 mt-4">
          <a
            href="https://github.com/mari3l-p"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white/80 transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/mariel-palacio-7ba10b349/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white/80 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:mari3lpalacio@gmail.com"
            className="text-white/30 hover:text-white/80 transition-colors duration-200"
            aria-label="Email"
          >
            <Envelope size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}