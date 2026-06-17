"use client";

import { useState } from "react";
import { Award, Calendar, ExternalLink, CheckCircle2 } from "lucide-react";

type Certification = {
  title: string;
  issuer: string;
  issued: string;
  expires?: string;
  credentialId?: string;
  verifyUrl?: string;
  skills: string[];
};

const certifications: Certification[] = [
  {
    title: "CS50's Introduction to Programming with Scratch",
    issuer: "Harvard University",
    issued: "Sep 21, 2023",
    verifyUrl: "https://certificates.cs50.io/c06b894d-1428-4154-858e-ac44b28f1013.pdf?size=letter",
    skills: ["Scratch", "Visual Programming", "Computational Thinking", "Problem Solving", "Logic"],
  },
  {
    title: "CS50's Introduction to Computer Science",
    issuer: "Harvard University",
    issued: "Dec 5, 2024",
    verifyUrl: "https://certificates.cs50.io/2ee3bd03-7283-4967-98b3-80f9c84fd899.pdf?size=letter",
    skills: ["C", "Python", "SQL", "JavaScript", "HTML/CSS", "Data Structures", "Algorithms"],
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    issued: "Aug 24, 2023",
    verifyUrl: "https://www.freecodecamp.org/certification/mari3l_p/responsive-web-design",
    skills: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "Responsive Design", "Accessibility"],
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    issued: "July 25, 2025",
    verifyUrl: "https://www.freecodecamp.org/certification/mari3l_p/javascript-algorithms-and-data-structures-v8",
    skills: ["JavaScript", "ES6+", "Data Structures", "Algorithms", "OOP", "Regular Expressions"],
  },
];

function CertCard({ cert }: { cert: Certification }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        className="relative w-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          minHeight: "280px",
        }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-2xl border border-white/10 bg-white/[0.03] p-6 flex flex-col justify-between"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex flex-col gap-4">
            {/* Top row: icon + verified badge */}
            <div className="flex flex-col items-end">
              
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/50 text-xs font-medium">
                <CheckCircle2 size={12} className="text-emerald-400" />
                Verified
              </div>
            </div>

            {/* Title + issuer */}
            <div>
              <h3 className="text-white font-bold text-base leading-snug mb-1">
                {cert.title}
              </h3>
              <p className="text-white/40 text-sm">{cert.issuer}</p>
            </div>

            {/* Dates */}
            <div className="flex items-center gap-1.5 text-white/35 text-xs">
              <Calendar size={12} />
              <span>Issued {cert.issued}</span>
              {cert.expires && (
                <>
                  <span className="text-white/20">·</span>
                  <span>Expires {cert.expires}</span>
                </>
              )}
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-4 border-t border-white/10">
            <p className="text-white/30 text-xs">Tap to see details →</p>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-2xl border border-white/10 bg-white/[0.05] p-6 flex flex-col justify-between"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="flex flex-col gap-4">
            <p className="text-white/40 text-xs font-semibold tracking-widest uppercase">
              Skills Covered
            </p>
            <div className="flex flex-wrap gap-2">
              {cert.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
            {cert.credentialId && (
              <p className="text-white/30 text-xs">
                ID: {cert.credentialId}
              </p>
            )}
            {cert.verifyUrl && (
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-white/50 hover:text-white text-xs transition-colors duration-200 w-fit"
              >
                <ExternalLink size={12} />
                Verify credential
              </a>
            )}
            {!cert.credentialId && !cert.verifyUrl && (
              <p className="text-white/20 text-xs italic">No credential ID available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CertificationsSection() {
  return (
    <section className="relative bg-black px-6 ">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-white/10" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Label pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/50 text-sm mb-6">
            <Award size={14} />
            Credentials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Certifications
          </h2>
          <p className="text-white/40 text-base md:text-lg font-light max-w-lg mx-auto">
            Industry-recognized credentials that validate my expertise. Tap any
            card to see details.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert) => (
            <CertCard key={cert.title} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}