import { useState } from 'react';
import { SKILL_GROUPS, type SkillGroup } from '../data/portfolioData';

type SkillFilter = 'All' | SkillGroup['id'];

export default function SkillsSection() {
  const [selectedGroup, setSelectedGroup] = useState<SkillFilter>('All');

  const visibleGroups =
    selectedGroup === 'All'
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((g) => g.id === selectedGroup);

  return (
    <section id="skills" className="border-b border-zinc-900 bg-[#09090b] py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-display text-3xl font-extrabold tracking-wide text-white uppercase sm:text-4xl">
            Skills &amp; Capabilities
          </h2>

          <div
            role="tablist"
            aria-label="Filter skill categories"
            className="flex flex-wrap items-center gap-1 rounded border border-zinc-800 bg-[#141416] p-1"
          >
            {(['All', 'Technical', 'AI & ML', 'Tools', 'Soft Skills', 'Languages'] as const).map(
              (tab) => {
                const active = selectedGroup === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSelectedGroup(tab)}
                    className={`rounded-sm px-3 py-1.5 text-xs font-medium tracking-wider uppercase whitespace-nowrap shrink-0 transition-colors duration-150 ${
                      active
                        ? 'bg-red-700 text-white'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                );
              },
            )}
          </div>
        </div>

        <div className="space-y-8">
          {visibleGroups.map((group) => (
            <div key={group.id}>
              <h3 className="mb-3 text-[11px] font-semibold tracking-[0.2em] text-red-500 uppercase">
                {group.label}
              </h3>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {group.items.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between rounded-[4px] border border-zinc-800/90 bg-[#141416] px-4 py-3 text-xs font-semibold tracking-wider text-zinc-200 uppercase transition-colors duration-150 hover:border-red-800/80 hover:text-white"
                  >
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
