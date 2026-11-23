import {
  ArrowUpRight,
  Cpu,
  Lightbulb,
  PenTool,
  Presentation,
  Search,
} from 'lucide-react';
import {
  CERTIFICATIONS,
  EDUCATION,
  PROFILE,
  WORKFLOW_STEPS,
  type CertificationItem,
  type WorkflowStep,
} from '../data/portfolioData';

interface LowerGridSectionProps {
  onSelectCertificate: (cert: CertificationItem) => void;
}

function StepIcon({ name }: { name: WorkflowStep['iconName'] }) {
  const iconClass = 'h-4 w-4 text-zinc-200';
  switch (name) {
    case 'search':
      return <Search className={iconClass} aria-hidden="true" />;
    case 'lightbulb':
      return <Lightbulb className={iconClass} aria-hidden="true" />;
    case 'pentool':
      return <PenTool className={iconClass} aria-hidden="true" />;
    case 'cpu':
      return <Cpu className={iconClass} aria-hidden="true" />;
    case 'presentation':
      return <Presentation className={iconClass} aria-hidden="true" />;
  }
}

export default function LowerGridSection({
  onSelectCertificate,
}: LowerGridSectionProps) {
  return (
    <section
      id="credentials"
      className="border-b border-zinc-900 bg-[#0c0c0e] py-16 md:py-20"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          {/* Left Column: Education & Certifications */}
          <div className="flex flex-col justify-between space-y-8 lg:col-span-4">
            <div>
              <h2 className="font-display text-3xl font-extrabold tracking-wide text-white uppercase">
                Education &amp; Certifications
              </h2>

              {/* Education Subsection */}
              <div className="mt-6">
                <h3 className="text-[11px] font-semibold tracking-[0.2em] text-red-500 uppercase">
                  Education
                </h3>
                <div className="mt-4 space-y-5 divide-y divide-zinc-800/70">
                  {EDUCATION.map((edu, idx) => (
                    <div
                      key={edu.degree}
                      className={idx > 0 ? 'pt-4' : ''}
                    >
                      <div className="flex items-baseline justify-between gap-4">
                        <h4 className="text-sm font-semibold text-white">
                          {edu.degree}
                        </h4>
                        <span className="shrink-0 text-xs font-semibold text-red-500 tabular-nums">
                          {edu.period}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-zinc-400">
                        {edu.institution}
                      </p>
                      <p className="mt-0.5 text-[11px] text-zinc-500 tabular-nums">
                        {edu.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Training & Certifications Subsection */}
              <div className="mt-8 border-t border-zinc-800/80 pt-6">
                <h3 className="text-[11px] font-semibold tracking-[0.2em] text-red-500 uppercase">
                  Training &amp; Certifications
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {CERTIFICATIONS.map((cert) => (
                    <li key={cert.id}>
                      <button
                        type="button"
                        onClick={() => onSelectCertificate(cert)}
                        className="group flex w-full items-start justify-between gap-3 rounded-sm border border-zinc-800/70 bg-[#141416] px-3.5 py-2.5 text-left transition-colors duration-150 hover:border-red-800/80 hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                      >
                        <div className="min-w-0">
                          <p className="text-xs font-medium text-zinc-100 transition-colors group-hover:text-white">
                            {cert.title}
                          </p>
                          <p className="mt-0.5 text-[11px] text-zinc-500">
                            {cert.issuer}
                          </p>
                        </div>
                        <div className="flex shrink-0 items-center gap-1.5 pt-0.5">
                          <span className="text-[11px] font-medium text-red-500 tabular-nums">
                            {cert.date}
                          </span>
                          <ArrowUpRight
                            className="h-3.5 w-3.5 text-zinc-500 transition-colors group-hover:text-red-500"
                            aria-hidden="true"
                          />
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Middle Column: Workflow & Approach */}
          <div
            id="workflow"
            className="border-t border-zinc-800/80 pt-8 lg:col-span-5 lg:border-t-0 lg:border-l lg:border-zinc-800/80 lg:pt-0 lg:pl-8"
          >
            <h2 className="font-display text-3xl font-extrabold tracking-wide text-white uppercase">
              Workflow &amp; Approach
            </h2>

            <div className="relative mt-7 space-y-6">
              {WORKFLOW_STEPS.map((step, index) => (
                <div key={step.number} className="relative flex items-start gap-4">
                  <div className="flex w-8 shrink-0 items-center pt-1.5">
                    <span className="font-display text-2xl leading-none font-bold text-red-600 tabular-nums">
                      {step.number}
                    </span>
                  </div>

                  <div className="relative flex flex-col items-center">
                    <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-red-800/80 bg-[#141416]">
                      <StepIcon name={step.iconName} />
                    </span>
                    {index < WORKFLOW_STEPS.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="mt-2 h-8 w-px bg-zinc-800"
                      />
                    )}
                  </div>

                  <div className="pt-0.5">
                    <h3 className="text-xs font-bold tracking-[0.16em] text-red-500 uppercase">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Deep Crimson Quote Card */}
          <div className="lg:col-span-3">
            <div className="crimson-card-gradient flex h-full flex-col justify-between rounded-sm border border-red-900/50 p-7 text-white">
              <div>
                <span
                  aria-hidden="true"
                  className="font-display block text-7xl leading-[0.7] font-black text-red-300/60 select-none"
                >
                  &ldquo;
                </span>

                <blockquote className="mt-5 text-lg leading-relaxed font-medium text-zinc-100">
                  {PROFILE.quote}
                </blockquote>

                <div className="mt-7">
                  <p className="font-script text-4xl text-white">
                    {PROFILE.fullName}
                  </p>
                  <div className="mt-1 h-px w-28 bg-red-300/40" />
                </div>
              </div>

              <div className="mt-10 border-t border-red-400/20 pt-5">
                <p className="text-[11px] font-semibold tracking-[0.18em] text-red-100/90 uppercase">
                  {PROFILE.quoteFooter}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
