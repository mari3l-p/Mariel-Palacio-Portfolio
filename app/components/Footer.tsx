import { Github, Linkedin, Envelope } from "react-bootstrap-icons";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-white/30 text-sm">
          © 2026 Mariel Palacio Portfolio. Built using React, TypeScript &amp; Tailwind
          CSS.
        </p>

        {/* Social links */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white/25 hover:text-white/70 transition-colors duration-200"
          >
            <Github size={17} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white/25 hover:text-white/70 transition-colors duration-200"
          >
            <Linkedin size={17} />
          </a>
          <a
            href="mailto:hello@example.com"
            aria-label="Email"
            className="text-white/25 hover:text-white/70 transition-colors duration-200"
          >
            <Envelope size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}