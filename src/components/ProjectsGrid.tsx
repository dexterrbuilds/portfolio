import { useEffect, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Bot,
  Clapperboard,
  Crosshair,
  Github,
  Radio,
  Terminal,
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  status: string;
  positioning: string;
  description: string;
  technologies: string[];
  github: string;
  live?: string;
  image?: string;
  visual: string[];
  icon: JSX.Element;
}

const projects: Project[] = [
  {
    id: "voxa",
    title: "Voxa",
    category: "AI agent infrastructure",
    status: "MVP",
    positioning: "Runtime layer for conversational AI agents.",
    description:
      "Private LiveKit voice rooms connect Deepgram speech recognition, Gemini, TTS, and browser playback with Supabase auth and state. A typed SDK, agent review gates, public showcase, and developer analytics create a foundation beyond the first-party Nova agent.",
    technologies: ["TypeScript", "Next.js", "LiveKit", "Supabase", "Gemini"],
    github: "https://github.com/dexterrbuilds/voxa",
    live: "https://usevoxa.vercel.app",
    image: "/projects/voxa.jpg",
    visual: ["Voice", "STT", "Agent", "TTS"],
    icon: <Bot aria-hidden="true" />,
  },
  {
    id: "perpflow",
    title: "Perpflow",
    category: "Trading automation",
    status: "Backend system",
    positioning: "Telegram-first Solana launch and perpetuals automation.",
    description:
      "A Fastify and Telegraf backend provisions encrypted Solana wallets, creates vanity-mint Pump.fun launches, and routes swaps into Phoenix perpetual positions. BullMQ workers monitor deposits, creator fees, positions, and idempotent automation cycles backed by Prisma, Postgres, and Redis.",
    technologies: ["TypeScript", "Fastify", "Telegraf", "Solana", "BullMQ"],
    github: "https://github.com/dexterrbuilds/perpflow",
    image: "/projects/perpflow.jpg",
    visual: ["Telegram", "Launch", "Fees", "Phoenix"],
    icon: <Activity aria-hidden="true" />,
  },
  {
    id: "solard",
    title: "SLRD / Solard",
    category: "Solana infrastructure",
    status: "Developer tooling",
    positioning: "Multi-wallet Solana CLI, SDK, and operations terminal.",
    description:
      "A plugin-based kernel routes quotes, trades, launches, and claims across pump-style venues with simulation-first execution and Jito or Helius send lanes. Encrypted keys, SQLite history, positions, watchlists, and composable workflows support traders and autonomous agents.",
    technologies: ["TypeScript", "Bun", "Solana", "SQLite", "Jito"],
    github: "https://github.com/dexterrbuilds/solard",
    visual: ["CLI", "Kernel", "Venues", "Send"],
    icon: <Terminal aria-hidden="true" />,
  },
  {
    id: "perpetual-pro",
    title: "Perpetual Pro",
    category: "Trading systems",
    status: "Research system",
    positioning: "Execution-aware crypto futures research engine.",
    description:
      "The Python system combines closed-candle multi-exchange data, 80+ indicators, market structure, derivatives context, deterministic risk gates, and backtests. Durable lifecycle tracking, outcome-calibrated scoring, FastAPI, charts, and Telegram delivery make scans restart-safe and auditable.",
    technologies: ["Python", "FastAPI", "CCXT", "Postgres", "scikit-learn"],
    github: "https://github.com/dexterrbuilds/perpetual_pro",
    visual: ["Markets", "Signals", "Risk", "Lifecycle"],
    icon: <BarChart3 aria-hidden="true" />,
  },
  {
    id: "verity",
    title: "Verity",
    category: "Market intelligence",
    status: "Active development",
    positioning: "Reputation and intelligence for onchain markets.",
    description:
      "A Next.js and Supabase application ingests and normalizes Polymarket data into market discovery, forecaster profiles, leaderboards, and reputation-weighted conviction. Transparent scoring and admin tools keep the intelligence layer explainable as it expands.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Postgres", "Recharts"],
    github: "https://github.com/dexterrbuilds/verity",
    live: "https://useverity.netlify.app",
    visual: ["Markets", "Ingest", "Score", "Rank"],
    icon: <Radio aria-hidden="true" />,
  },
  {
    id: "pump-fun-bot",
    title: "Pump.fun Bot",
    category: "Solana trading bot",
    status: "Maintained fork",
    positioning: "Low-latency token listener and strategy runner.",
    description:
      "A maintained Python fork of Chainstack’s educational bot that watches Pump.fun and LetsBonk token creation through Geyser, logs, blocks, or PumpPortal, then runs configurable buy and exit strategies. The code hardens v2 account layouts, quote-mint handling, zero-RPC event buys, rate limits, transaction checks, and cleanup tooling.",
    technologies: ["Python", "Solana", "Yellowstone gRPC", "WebSockets", "solders"],
    github: "https://github.com/dexterrbuilds/pump-fun-bot",
    visual: ["Detect", "Build", "Submit", "Exit"],
    icon: <Crosshair aria-hidden="true" />,
  },
  {
    id: "clipscout",
    title: "ClipScout",
    category: "Creator tooling",
    status: "Product build",
    positioning: "Multi-source stock video search for creators.",
    description:
      "Comma-separated searches fan out to Pexels and Pixabay, normalize and deduplicate footage, then rank clips for a focused workspace. Hover previews, filters, batch selection, saved projects, and ZIP export turn search results into a usable production shortlist.",
    technologies: ["Next.js", "TypeScript", "Pexels API", "Pixabay API", "JSZip"],
    github: "https://github.com/dexterrbuilds/ClipScout",
    image:
      "https://raw.githubusercontent.com/dexterrbuilds/ClipScout/main/clipscout-web-screenshot.png",
    visual: ["Query", "Providers", "Rank", "Export"],
    icon: <Clapperboard aria-hidden="true" />,
  },
];

const ProjectsGrid = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 12;
      const y = (event.clientY / window.innerHeight - 0.5) * 12;

      document.body.style.setProperty(
        "--warp-transform",
        `perspective(1000px) rotateX(${y * 0.035}deg) rotateY(${-x * 0.035}deg) translate(${x * 0.25}px, ${y * 0.25}px)`,
      );
    };

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.style.removeProperty("--warp-transform");
    };
  }, []);

  const columns = projects
    .map((_, index) => (index === activeIndex ? "10fr" : "1fr"))
    .join(" ");

  return (
    <ul
      className="project-grid"
      style={{ gridTemplateColumns: columns }}
      aria-label="Featured projects"
    >
      {projects.map((project, index) => {
        const isActive = index === activeIndex;

        return (
          <li
            key={project.id}
            className="project-item"
            data-active={isActive}
            data-project={project.id}
            tabIndex={0}
            aria-label={`${project.title}: ${project.positioning}`}
            onMouseEnter={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
            onClick={() => setActiveIndex(index)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setActiveIndex(index);
              }
            }}
          >
            <article className="project-article">
              <div className="project-heading">
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span>{project.status}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-positioning">{project.positioning}</p>
              </div>

              <div className="project-rail-icon">{project.icon}</div>

              <div
                className={`project-media${project.image ? " project-media-image" : ""}`}
                aria-hidden="true"
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt=""
                    className="project-image"
                    loading="lazy"
                  />
                )}
                <div className="project-diagram">
                  {project.visual.map((item, itemIndex) => (
                    <span key={item}>
                      <small>{String(itemIndex + 1).padStart(2, "0")}</small>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-detail">
                <p className="project-description">{project.description}</p>

                <ul className="project-tech" aria-label={`${project.title} technologies`}>
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>

                <div className="project-actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <Github size={15} aria-hidden="true" />
                    Source
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link project-link-primary"
                      onClick={(event) => event.stopPropagation()}
                    >
                      Live site
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectsGrid;
