import React from "react";

const portfolioData = {
  profile: {
    name: "Rohit Aggarwal",
    title: "Engineering Director · AI Systems Architect · Research Engineer",
    headline:
      "Building intelligent operational systems for enterprise-scale AI adoption.",
    description:
      "Engineering leader focused on AI infrastructure, operational intelligence, governance systems, and large-scale organizational automation.",
    currentFocus:
      "AI platform architecture, enterprise governance, operational intelligence, and research-driven infrastructure systems.",
  },

  metrics: [
    {
      value: "$23M",
      label: "Estimated savings in H2 2025",
    },
    {
      value: "8B",
      label: "Tokens/day through LLM Gateway",
    },
    {
      value: "95%",
      label: "Launch cycle reduction",
    },
    {
      value: "9000+",
      label: "Employees supported",
    },
  ],

  researchAreas: [
    "AI Systems",
    "Enterprise Automation",
    "Security Engineering",
    "Distributed Systems",
    "Algorithms",
    "Wireless Communications",
  ],

  patents: [
    {
      id: "patent-1",
      title:
        "Dynamic TDD Configuration for Carrier Aggregation in Wireless Networks",
      description:
        "Patent covering dynamic Time Division Duplex configuration and carrier aggregation optimization in wireless communication systems.",
      link: "https://patents.justia.com/patent/11533193",
    },
    {
      id: "patent-2",
      title: "Methods and Apparatus for Dynamic TDD Configuration",
      description:
        "Research and systems innovation focused on adaptive wireless communication optimization and network coordination.",
      link: "https://patents.justia.com/patent/20190370913",
    },
    {
      id: "patent-3",
      title: "Carrier Aggregation and Wireless Communication Optimization",
      description:
        "Systems-oriented research contribution involving carrier aggregation and advanced wireless infrastructure techniques.",
      link: "https://patents.justia.com/patent/20190154741",
    },
  ],

  publications: {
    title: "Rohit Aggarwal — Research Publications",
    description:
      "Research publications spanning wireless communications, systems engineering, algorithms, and analytical modeling.",
    link: "https://scholar.google.com/citations?user=XLgnsMsAAAAJ&hl=en",
  },

  flagshipProjects: [
    {
      id: "flagship-1",
      title: "AI Platform & Acceleration",
      category: "AI Infrastructure",
      narrative:
        "Led AI platform and acceleration initiatives enabling enterprise-scale AI adoption across Coinbase. Built foundational infrastructure including multi-provider LLM gateways, governance systems, observability tooling, workflow automation, and organizational AI economics controls.",
      highlights: [
        "8B tokens/day",
        "$23M estimated savings",
        "LLM Gateway",
        "AWS Knowledge Bases",
        "MCP Gateway",
        "LibreChat",
        "LangSmith",
        "n8n",
      ],
    },
    {
      id: "flagship-2",
      title: "Product Launch Assistant",
      category: "Operational Intelligence",
      narrative:
        "Built an AI-driven product launch consultation and governance platform that reduced final launch review timelines from 6 weeks to 2 days through automated intelligence workflows and human-in-the-loop operational governance.",
      highlights: [
        "6 weeks → 2 days",
        "Human-in-the-loop governance",
        "Workflow Automation",
        "Decision Systems",
        "Operational Intelligence",
        "Cross-functional Reviews",
      ],
    },
    {
      id: "flagship-3",
      title: "Smart Contract Vulnerability Detection",
      category: "Security Research",
      narrative:
        "Developed automated analysis pipelines for detecting vulnerabilities in smart contracts through intelligent security and systems analysis.",
      highlights: [
        "Security Engineering",
        "Static Analysis",
        "Research Systems",
        "Blockchain Security",
      ],
    },
  ],

  projects: [
    {
      id: "project-1",
      title: "HR Intelligence Assistant",
      category: "Enterprise AI",
      summary:
        "AI-powered internal assistant for HR workflows, policy retrieval, onboarding, and employee support.",
      technologies: ["LLMs", "Python", "Enterprise Search", "Automation"],
    },
    {
      id: "project-2",
      title: "Legal Subpoena Intake Automation",
      category: "Operational Intelligence",
      summary:
        "Automated legal email intake processing and structured information extraction for compliance workflows.",
      technologies: ["NLP", "Workflow Systems", "Automation"],
    },
    {
      id: "project-3",
      title: "Phishing Email Classification",
      category: "Security Systems",
      summary:
        "Machine learning pipelines for phishing detection and enterprise threat classification.",
      technologies: ["ML", "Security", "Classification Systems"],
    },
  ],

  experience: [
    {
      id: "experience-1",
      organization: "Coinbase",
      role: "AI Platform & Acceleration",
      description:
        "Led and contributed to intelligent systems, developer acceleration, and AI infrastructure initiatives.",
    },
    {
      id: "experience-2",
      organization: "Research",
      role: "PhD — Wireless Communications",
      description:
        "Research in algorithms, communications systems, and analytical modeling.",
    },
  ],
};

function SectionLabel({ children }) {
  return (
    <div className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-8">
      {children}
    </div>
  );
}

function Chip({ children }) {
  return (
    <div className="border border-neutral-300 rounded-full px-4 py-2 text-sm text-neutral-700">
      {children}
    </div>
  );
}

function FlagshipCard({ project }) {
  return (
    <div className="border border-neutral-300 rounded-[32px] p-10 lg:p-14 bg-white hover:bg-neutral-50 shadow-sm transition duration-500">
      <div className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-6">
        {project.category}
      </div>

      <h3 className="text-3xl md:text-4xl font-medium tracking-tight leading-tight max-w-3xl mb-8 text-balance">
        {project.title}
      </h3>

      <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-3xl mb-10">
        {project.narrative}
      </p>

      <div className="flex flex-wrap gap-3">
        {project.highlights.map((item) => (
          <Chip key={item}>{item}</Chip>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="border-t border-neutral-300 py-10 group transition">
      <div className="grid lg:grid-cols-[220px_1fr] gap-8">
        <div>
          <div className="text-sm text-neutral-500 mb-3">
            {project.category}
          </div>

          <div className="text-xl font-medium tracking-tight group-hover:translate-x-1 transition duration-300">
            {project.title}
          </div>
        </div>

        <div>
          <p className="text-neutral-700 text-lg leading-relaxed max-w-3xl">
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            {project.technologies.map((tech) => (
              <Chip key={tech}>{tech}</Chip>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PatentCard({ patent }) {
  return (
    <a
      href={patent.link}
      target="_blank"
      rel="noreferrer"
      className="block border-t border-neutral-300 py-10 group"
    >
      <div className="grid lg:grid-cols-[280px_1fr] gap-8">
        <div>
          <div className="text-xl font-medium tracking-tight group-hover:translate-x-1 transition duration-300">
            {patent.title}
          </div>
        </div>

        <div>
          <p className="text-neutral-700 text-lg leading-relaxed max-w-3xl">
            {patent.description}
          </p>
        </div>
      </div>
    </a>
  );
}

function MetricCard({ metric }) {
  return (
    <div className="border border-neutral-300 rounded-[28px] p-8 bg-white shadow-sm min-h-[260px] flex flex-col justify-between overflow-hidden">
      <div className="text-5xl md:text-6xl font-medium tracking-tight leading-[0.95]">
        {metric.value}
      </div>

      <div className="mt-4 text-neutral-600 leading-relaxed text-sm md:text-base">
        {metric.label}
      </div>
    </div>
  );
}

function ExperienceRow({ item }) {
  return (
    <div className="border-t border-neutral-300 py-10">
      <div className="grid lg:grid-cols-[260px_1fr] gap-8">
        <div>
          <div className="text-xl font-medium tracking-tight">
            {item.organization}
          </div>

          <div className="text-neutral-500 mt-2">{item.role}</div>
        </div>

        <div className="text-neutral-700 text-lg leading-relaxed max-w-3xl">
          {item.description}
        </div>
      </div>
    </div>
  );
}

export default function PortfolioWebsite() {
  const {
    profile,
    projects,
    researchAreas,
    experience,
    patents,
    publications,
    flagshipProjects,
    metrics,
  } = portfolioData;

  return (
    <div className="min-h-screen bg-[#fafaf7] text-[#111111] antialiased">
      <nav className="sticky top-0 z-50 border-b border-neutral-200 backdrop-blur-xl bg-[#fafaf7]/90">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="text-sm tracking-wide text-neutral-700">
            {profile.name}
          </div>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-6 pt-28 pb-36">
        <div className="max-w-4xl">
          <div className="text-sm text-neutral-500 tracking-wide mb-10">
            {profile.title}
          </div>

          <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.05] text-balance">
            {profile.headline}
          </h1>

          <p className="mt-12 text-xl text-neutral-600 leading-relaxed max-w-3xl">
            {profile.description}
          </p>

          <div className="mt-16 grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {metrics.map((metric) => (
              <MetricCard key={metric.label} metric={metric} />
            ))}
          </div>
        </div>

        <div className="mt-24 grid lg:grid-cols-2 gap-20 border-t border-neutral-200 pt-16">
          <div>
            <SectionLabel>Current Focus</SectionLabel>

            <div className="text-3xl leading-relaxed tracking-tight text-neutral-800 max-w-2xl">
              {profile.currentFocus}
            </div>
          </div>

          <div>
            <SectionLabel>Research Areas</SectionLabel>

            <div className="flex flex-wrap gap-3 max-w-xl">
              {researchAreas.map((area) => (
                <Chip key={area}>{area}</Chip>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-32 border-t border-neutral-200">
        <SectionLabel>Selected Systems & Infrastructure Work</SectionLabel>

        <div className="space-y-8">
          {flagshipProjects.map((project) => (
            <FlagshipCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-32 border-t border-neutral-200">
        <SectionLabel>Patents & Publications</SectionLabel>

        <div className="mb-24">
          {patents.map((patent) => (
            <PatentCard key={patent.id} patent={patent} />
          ))}
        </div>

        <a
          href={publications.link}
          target="_blank"
          rel="noreferrer"
          className="block border border-neutral-300 rounded-3xl p-10 hover:bg-neutral-100 transition"
        >
          <div className="text-3xl font-medium tracking-tight mb-6">
            {publications.title}
          </div>

          <div className="text-lg text-neutral-600 leading-relaxed max-w-3xl">
            {publications.description}
          </div>
        </a>
      </section>
    </div>
  );
}
