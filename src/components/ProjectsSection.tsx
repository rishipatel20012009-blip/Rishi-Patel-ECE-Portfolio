import { ArrowRight, Award, Cpu, Sprout } from 'lucide-react';
import { useState } from 'react';
import { PROJECTS, type ProjectItem } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

type FilterOption = 'All' | 'Hackathon' | 'Foundations';

function ProjectVisualPreview({ project }: { project: ProjectItem }) {
  if (project.id === 'kisan-setu') {
    return (
      <div className="relative flex h-44 w-full flex-col justify-between overflow-hidden border-b border-zinc-800/80 bg-[#0d0d10] p-5">
        <div
          aria-hidden="true"
          className="absolute -top-10 -right-10 h-36 w-36 rounded-full bg-red-800/20 blur-2xl"
        />
        <div className="relative flex items-center justify-between text-[10px] font-semibold tracking-[0.18em] text-zinc-400 uppercase">
          <span>{project.badgeLabel}</span>
          <Sprout className="h-4 w-4 text-red-500" aria-hidden="true" />
        </div>

        <div className="relative my-auto">
          <p className="font-display text-3xl leading-none font-black tracking-tight text-white uppercase">
            KISAN SETU
          </p>
          <p className="mt-1.5 text-xs text-zinc-400">
            Reducing intermediary layers between farmers &amp; consumers
          </p>
        </div>

        <div className="relative flex items-center justify-between border-t border-zinc-800/80 pt-2.5 text-[10px] tracking-widest text-zinc-500 uppercase">
          <span>{project.accentLabel}</span>
          <span className="text-red-500 tabular-nums">{project.period}</span>
        </div>
      </div>
    );
  }

  if (project.id === 'team-celestial') {
    return (
      <div className="relative flex h-44 w-full flex-col justify-between overflow-hidden border-b border-zinc-800/80 bg-zinc-950 p-5">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(185,28,28,0.18),transparent_60%)]"
        />
        <div className="relative flex items-center justify-between text-[10px] font-semibold tracking-[0.18em] text-zinc-400 uppercase">
          <span>{project.badgeLabel}</span>
          <Award className="h-4 w-4 text-red-500" aria-hidden="true" />
        </div>

        <div className="relative my-auto border border-zinc-800 bg-[#141416]/90 p-3.5">
          <p className="text-[10px] font-medium tracking-[0.16em] text-red-500 uppercase">
            Certificate of Appreciation
          </p>
          <p className="font-display mt-0.5 text-2xl font-bold tracking-wide text-white uppercase">
            Preliminary SIH 2026
          </p>
          <p className="mt-1 font-mono text-[10px] text-zinc-400 tabular-nums">
            ID: {project.certificateId}
          </p>
        </div>

        <div className="relative flex items-center justify-between text-[10px] tracking-widest text-zinc-500 uppercase">
          <span>{project.accentLabel}</span>
          <span className="text-zinc-300 tabular-nums">{project.period}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-44 w-full flex-col justify-between overflow-hidden border-b border-zinc-800/80 bg-[#0d0d10] p-5">
      <div
        aria-hidden="true"
        className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-red-900/20 blur-2xl"
      />
      <div className="relative flex items-center justify-between text-[10px] font-semibold tracking-[0.18em] text-zinc-400 uppercase">
        <span>{project.badgeLabel}</span>
        <Cpu className="h-4 w-4 text-red-500" aria-hidden="true" />
      </div>

      <div className="relative my-auto grid grid-cols-2 gap-2">
        {['C Language', 'Arduino', 'SOLIDWORKS', 'AI / ML'].map((item) => (
          <div
            key={item}
            className="border border-zinc-800/90 bg-[#141416] px-2.5 py-2 text-[11px] font-semibold tracking-wider text-zinc-200 uppercase"
          >
            {item}
          </div>
        ))}
      </div>

      <div className="relative flex items-center justify-between border-t border-zinc-800/80 pt-2.5 text-[10px] tracking-widest text-zinc-500 uppercase">
        <span>{project.accentLabel}</span>
        <span className="text-red-500 tabular-nums">{project.period}</span>
      </div>
    </div>
  );
}

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<FilterOption>('All');

  const visibleProjects =
    filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="border-b border-zinc-900 bg-[#09090b] py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-display text-3xl font-extrabold tracking-wide text-white uppercase sm:text-4xl">
            Selected Projects &amp; Highlights
          </h2>

          <div
            role="tablist"
            aria-label="Filter projects"
            className="flex items-center gap-1 rounded border border-zinc-800 bg-[#141416] p-1"
          >
            {(['All', 'Hackathon', 'Foundations'] as const).map((tab) => {
              const active = filter === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(tab)}
                  className={`rounded-sm px-3 py-1.5 text-xs font-medium tracking-wider uppercase whitespace-nowrap shrink-0 transition-colors duration-150 ${
                    active
                      ? 'bg-red-700 text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {visibleProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col justify-between overflow-hidden rounded-sm border border-zinc-800/80 bg-[#141416] transition-colors duration-200 hover:border-red-800/80"
            >
              <div>
                <ProjectVisualPreview project={project} />
                <div className="p-5">
                  <p className="text-sm leading-relaxed text-zinc-300">
                    {project.summary}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onSelectProject(project)}
                className="flex w-full items-center justify-between gap-4 border-t border-zinc-800/80 bg-[#111113] px-5 py-4 text-left transition-colors duration-150 hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-red-600"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <span className="font-display text-3xl leading-none font-bold text-red-600 tabular-nums">
                    {project.number}
                  </span>
                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-semibold tracking-wider text-white uppercase">
                      {project.title}
                    </h3>
                    <p className="truncate text-[11px] tracking-wider text-zinc-400 uppercase">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                <ArrowRight
                  className="h-4 w-4 shrink-0 text-zinc-400 transition-transform duration-150 group-hover:translate-x-1 group-hover:text-red-500"
                  aria-hidden="true"
                />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
