import { ArrowRight, Check, Copy, FileText, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import { PROFILE } from '../data/portfolioData';

interface FooterSectionProps {
  onOpenResume: () => void;
}

type CopyField = 'email' | 'phone' | 'location' | null;

export default function FooterSection({ onOpenResume }: FooterSectionProps) {
  const [copiedField, setCopiedField] = useState<CopyField>(null);

  const handleCopy = async (field: Exclude<CopyField, null>, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      window.setTimeout(() => {
        setCopiedField((current) => (current === field ? null : current));
      }, 2000);
    } catch {
      setCopiedField(null);
    }
  };

  return (
    <footer id="contact" className="bg-[#09090b] pt-16 pb-12 md:pt-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          {/* Left Column: Heading, Collaboration Note & Action */}
          <div className="lg:col-span-4">
            <h2 className="font-display text-4xl leading-[0.9] font-black tracking-tight text-white uppercase sm:text-5xl">
              LET&apos;S WORK
              <span className="block text-white">TOGETHER</span>
            </h2>

            <p className="mt-4 max-w-[34ch] text-xs leading-relaxed text-zinc-400 sm:text-sm">
              First-year B.Tech ECE student open to hackathon teams, collaborative
              engineering projects, and technical learning opportunities.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${PROFILE.email}`}
                className="group inline-flex items-center gap-3 text-xs font-semibold tracking-[0.16em] text-red-500 uppercase whitespace-nowrap shrink-0 transition-colors hover:text-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-red-700/80 bg-[#141416] text-red-500 transition-colors group-hover:bg-red-700 group-hover:text-white">
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span>{PROFILE.availability}</span>
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 rounded border border-zinc-800 bg-[#141416] px-3.5 py-2 text-xs font-medium tracking-wider text-zinc-200 uppercase whitespace-nowrap shrink-0 transition-colors hover:border-red-700 hover:text-white"
              >
                <FileText className="h-3.5 w-3.5 text-red-500" aria-hidden="true" />
                <span>Resume PDF</span>
              </button>
            </div>
          </div>

          {/* Middle Column: Contact Rows with Click-to-Copy Feedback */}
          <div className="space-y-3.5 lg:col-span-4">
            <button
              type="button"
              onClick={() => handleCopy('email', PROFILE.email)}
              className="group flex w-full items-center justify-between gap-3 rounded-sm border border-zinc-800/80 bg-[#141416] px-4 py-3 text-left transition-colors duration-150 hover:border-red-800/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
            >
              <div className="flex min-w-0 items-center gap-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-red-900/70 bg-[#0c0c0e] text-red-500">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] font-medium tracking-[0.16em] text-zinc-500 uppercase">
                    Email
                  </p>
                  <p className="truncate text-xs font-medium text-zinc-200">
                    {PROFILE.email}
                  </p>
                </div>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1 text-[11px] font-medium text-zinc-400 group-hover:text-red-400">
                {copiedField === 'email' ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-red-500" aria-hidden="true" />
                    <span className="text-red-500">Copied</span>
                  </>
                ) : (
                  <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                )}
              </span>
            </button>

            <button
              type="button"
              onClick={() => handleCopy('phone', PROFILE.phone)}
              className="group flex w-full items-center justify-between gap-3 rounded-sm border border-zinc-800/80 bg-[#141416] px-4 py-3 text-left transition-colors duration-150 hover:border-red-800/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
            >
              <div className="flex min-w-0 items-center gap-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-red-900/70 bg-[#0c0c0e] text-red-500">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] font-medium tracking-[0.16em] text-zinc-500 uppercase">
                    Phone
                  </p>
                  <p className="truncate text-xs font-medium text-zinc-200 tabular-nums">
                    {PROFILE.phone}
                  </p>
                </div>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1 text-[11px] font-medium text-zinc-400 group-hover:text-red-400">
                {copiedField === 'phone' ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-red-500" aria-hidden="true" />
                    <span className="text-red-500">Copied</span>
                  </>
                ) : (
                  <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                )}
              </span>
            </button>

            <button
              type="button"
              onClick={() => handleCopy('location', PROFILE.location)}
              className="group flex w-full items-center justify-between gap-3 rounded-sm border border-zinc-800/80 bg-[#141416] px-4 py-3 text-left transition-colors duration-150 hover:border-red-800/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
            >
              <div className="flex min-w-0 items-center gap-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-red-900/70 bg-[#0c0c0e] text-red-500">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] font-medium tracking-[0.16em] text-zinc-500 uppercase">
                    Location
                  </p>
                  <p className="truncate text-xs font-medium text-zinc-200">
                    {PROFILE.location}
                  </p>
                </div>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1 text-[11px] font-medium text-zinc-400 group-hover:text-red-400">
                {copiedField === 'location' ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-red-500" aria-hidden="true" />
                    <span className="text-red-500">Copied</span>
                  </>
                ) : (
                  <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                )}
              </span>
            </button>
          </div>

          {/* Right Column: Dark Hardware Laptop Visual Showcase Card */}
          <div className="lg:col-span-4">
            <div className="relative overflow-hidden rounded-sm border border-zinc-800/80 bg-[#111113] p-5">
              {/* Mock Laptop Screen */}
              <div className="overflow-hidden rounded-t-md border border-zinc-700/80 bg-[#09090b] shadow-inner">
                <div className="flex items-center justify-between border-b border-zinc-800/90 bg-[#141416] px-3 py-1.5 text-[9px] tracking-[0.16em] text-zinc-400 uppercase">
                  <span>RISHI PATEL</span>
                  <span className="text-red-500">ECE · SIH 2026</span>
                </div>

                <div className="relative grid grid-cols-12 gap-3 p-4">
                  <div className="col-span-7 flex flex-col justify-between">
                    <p className="font-display text-2xl leading-[0.9] font-extrabold text-white uppercase">
                      PRACTICAL
                      <span className="block text-red-600">ENGINEERING</span>
                      &amp; AI
                    </p>
                    <p className="mt-3 text-[10px] leading-relaxed text-zinc-400">
                      Kisan Setu · Team Celestial · C · Arduino · SOLIDWORKS
                    </p>
                  </div>

                  <div className="col-span-5 flex flex-col justify-between rounded-sm border border-red-900/40 bg-gradient-to-br from-red-900/40 via-[#141416] to-[#09090b] p-3">
                    <span className="font-display text-lg leading-none font-bold text-red-500 tabular-nums">
                      TOP 100
                    </span>
                    <span className="mt-4 text-[9px] font-medium tracking-wider text-zinc-300 uppercase">
                      Karnavati Univ. SIH 2026
                    </span>
                  </div>
                </div>
              </div>

              {/* Laptop Hinge & Base */}
              <div className="mx-auto h-2.5 w-[104%] -ml-[2%] rounded-b-md border border-t-0 border-zinc-700/80 bg-gradient-to-b from-zinc-800 to-zinc-900">
                <div className="mx-auto h-1 w-14 rounded-b bg-zinc-700" />
              </div>
            </div>
          </div>
        </div>

        {/* Quiet Copyright Footer Strip */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-900 pt-6 text-xs text-zinc-500">
          <span>&copy; 2026 Rishi Patel · Ahmedabad, Gujarat</span>
          <span>B.Tech ECE · Unitedworld Institute of Technology, Karnavati University</span>
        </div>
      </div>
    </footer>
  );
}
