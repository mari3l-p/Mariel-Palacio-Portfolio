import {
  Code2,
  Database,
  Palette,
  Rocket,
  Cloud,
  Smartphone,
} from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    tags: "React, TypeScript, Next.js, Tailwind CSS",
  },
  {
    icon: Database,
    title: "Backend Development",
    tags: "Node.js, Supabase",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    tags: "Figma, Responsive Design, Accessibility",
  },
  {
    icon: Rocket,
    title: "Performance",
    tags: "Optimization, SEO, Core Web Vitals",
  },
  {
    icon: Cloud,
    title: "DevOps",
    tags: "Vercel",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    tags: "Progressive Web Apps",
  },
];

export default function SkillsSection() {
  return (
    <section className="relative bg-black px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-white/10" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Skills &amp; Expertise
          </h2>
          <p className="text-white/40 text-base md:text-lg font-light">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map(({ icon: Icon, title, tags }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-7 flex flex-col gap-5 hover:border-white/20 hover:bg-white/[0.055] transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70 group-hover:text-white group-hover:border-white/20 transition-all duration-300">
                <Icon size={20} strokeWidth={1.5} />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-1.5">
                <h3 className="text-white font-semibold text-base tracking-tight">
                  {title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{tags}</p>
              </div>

              {/* Hover glow accent */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 40% at 30% 20%, rgba(255,255,255,0.03) 0%, transparent 70%)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}