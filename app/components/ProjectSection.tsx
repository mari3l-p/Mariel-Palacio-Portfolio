import { BoxArrowUpRight, Github } from "react-bootstrap-icons";

const projects = [
  {
    title: "Yoga Studio Website",
    description:
    "A modern web platform for a wellness studio, enabling clients to seamlessly browse schedules, book classes, manage user profiles, and purchase recurring memberships.",
    image: "/islass.png",
    tags: ["React", 'Tailwind Css', "Node.js", "Supabase"],
    liveUrl: "https://isla-studio.vercel.app/",
    repoUrl: "https://github.com/islaestudiomx/Isla-Studio",
  },
  {
    title: "Pilates Studio Platform",
    description:
      "Digital experience for a Pilates studio, allow clients book classes, manage their user profiles, and purchase memberships.",
    image: "/konnen1.png",
    tags: ["React", "Node.js", "Supabase", "Stripe"],
    liveUrl: "https://konnen-studio.vercel.app/",
    repoUrl: "https://github.com/mari3l-p/konnen-studio",
  },
  {
    title: "Vape E-Commerce Platform",
    description:
      "Vape e-commerce platform featuring a modern storefront, local delivery logistics in Mérida, and an analytics-driven admin dashboard",
    image: "/kings.png",
    tags: ["Next.js", "TypeScript", "Javascript API"],
    liveUrl: "https://the-vape-kings.vercel.app/",
    repoUrl: "https://github.com/mari3l-p/kings",
  },
  {
    title: "Instagram followers analizer",
    description:
      "A frontend analytics tool built with React and Tailwind CSS that connects to the Instagram API to visualize follower trends and engagement metrics.",
    image: "/insta.png", // replace with your image
    tags: ["React", "Tailwind Css", "Instagram API"],
    liveUrl: "https://analyze-data.vercel.app/",
    repoUrl: "https://github.com/mari3l-p/Analizador-Insta",
  },
  {
    title: "30 days of JS",
    description:
      "A collection of 30 interactive mini-projects built entirely with Vanilla JavaScript, demonstrating strong fundamentals in DOM manipulation and modern browser APIs.",
    image: "/30days.png",
    tags: ["JavaScript", "HTML", "CSS", "Git"],
    liveUrl: "https://mari3l-p.github.io/30-days-of-JavaScript/",
    repoUrl: "https://github.com/mari3l-p/30-days-of-JavaScript",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative bg-black px-6 py-24 md:py-32">
      {/* Subtle top separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-white/10" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-white/40 text-base md:text-lg font-light">
            A selection of my recent work and client projects
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map(({ title, description, image, tags, liveUrl, repoUrl }) => (
            <div
              key={title}
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              {/* Image container */}
              <div className="relative h-52 overflow-hidden bg-white/5">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Action buttons — appear on hover */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-11 h-11 rounded-xl bg-white text-black hover:bg-white/90 transition-colors duration-200 shadow-lg"
                    aria-label="View live site"
                  >
                    <BoxArrowUpRight size={18} strokeWidth={2} />
                  </a>
                  <a
                    href={repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors duration-200 shadow-lg backdrop-blur-sm"
                    aria-label="View repository"
                  >
                    <Github size={18} strokeWidth={2} />
                  </a>
                </div>
              </div>

              {/* Card body */}
              <div className="flex flex-col gap-4 p-6">
                <div className="flex flex-col gap-2">
                  <h3 className="text-white font-bold text-lg tracking-tight">
                    {title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}