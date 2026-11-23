import { ExternalLink, FileText, X } from 'lucide-react';
import { useEffect } from 'react';
import type { CertificationItem, ProjectItem } from '../data/portfolioData';

export type ModalState =
  | { type: 'project'; project: ProjectItem }
  | { type: 'certificate'; cert: CertificationItem }
  | { type: 'resume'; pdfUrl: string }
  | null;

interface DetailModalProps {
  modal: ModalState;
  onClose: () => void;
}

export default function DetailModal({ modal, onClose }: DetailModalProps) {
  useEffect(() => {
    if (!modal) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modal, onClose]);

  if (!modal) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Details preview"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded border border-zinc-800 bg-[#141416] text-zinc-100 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-zinc-800 px-6 py-4">
          <div className="min-w-0">
            {modal.type === 'project' && (
              <>
                <p className="text-[11px] font-semibold tracking-[0.18em] text-red-500 uppercase">
                  {modal.project.number} · {modal.project.category}
                </p>
                <h3 className="font-display truncate text-2xl font-extrabold tracking-wide text-white uppercase">
                  {modal.project.title}
                </h3>
              </>
            )}

            {modal.type === 'certificate' && (
              <>
                <p className="text-[11px] font-semibold tracking-[0.18em] text-red-500 uppercase">
                  {modal.cert.issuer}
                </p>
                <h3 className="font-display truncate text-2xl font-extrabold tracking-wide text-white uppercase">
                  {modal.cert.title}
                </h3>
              </>
            )}

            {modal.type === 'resume' && (
              <>
                <p className="text-[11px] font-semibold tracking-[0.18em] text-red-500 uppercase">
                  Official Document
                </p>
                <h3 className="font-display truncate text-2xl font-extrabold tracking-wide text-white uppercase">
                  Rishi Patel — Resume
                </h3>
              </>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded border border-zinc-800 bg-[#0c0c0e] text-zinc-300 transition-colors hover:border-red-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="overflow-y-auto p-6">
          {modal.type === 'project' && (
            <div className="space-y-5">
              <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400">
                <span className="font-medium text-zinc-200">{modal.project.subtitle}</span>
                <span aria-hidden="true">·</span>
                <span className="text-red-500 tabular-nums">{modal.project.period}</span>
                {modal.project.certificateId && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono text-zinc-400">
                      Cert ID: {modal.project.certificateId}
                    </span>
                  </>
                )}
              </div>

              <p className="text-sm leading-relaxed text-zinc-300">{modal.project.summary}</p>

              <div>
                <h4 className="mb-2.5 text-xs font-semibold tracking-[0.16em] text-zinc-400 uppercase">
                  Key Contributions &amp; Details
                </h4>
                <ul className="space-y-2 text-sm text-zinc-300">
                  {modal.project.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-red-600" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-zinc-800 pt-4">
                <p className="text-xs text-zinc-400">
                  Focus Areas:{' '}
                  <span className="text-zinc-200">{modal.project.tags.join(' · ')}</span>
                </p>
              </div>

              {modal.project.certificateUrl && (
                <div className="space-y-3 border-t border-zinc-800 pt-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs font-semibold tracking-[0.14em] text-zinc-300 uppercase">
                      Supporting Certificate Preview
                    </span>
                    <a
                      href={modal.project.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded bg-red-700 px-3.5 py-2 text-xs font-semibold tracking-wider text-white uppercase whitespace-nowrap shrink-0 transition-colors hover:bg-red-600"
                    >
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Open Certificate PDF</span>
                    </a>
                  </div>
                  <div className="h-[340px] w-full overflow-hidden rounded border border-zinc-800 bg-black">
                    <iframe
                      src={modal.project.certificateUrl}
                      title={`${modal.project.title} Certificate`}
                      className="h-full w-full"
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {modal.type === 'certificate' && (
            <div className="space-y-5">
              <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400">
                <span className="text-red-500 tabular-nums">{modal.cert.date}</span>
                {modal.cert.duration && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span>{modal.cert.duration}</span>
                  </>
                )}
                {modal.cert.certificateId && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono text-zinc-300">
                      ID: {modal.cert.certificateId}
                    </span>
                  </>
                )}
              </div>

              <p className="text-xs text-zinc-400">
                Skills Covered:{' '}
                <span className="text-zinc-200">{modal.cert.skillsCovered.join(' · ')}</span>
              </p>

              {modal.cert.pdfUrl ? (
                <div className="space-y-3">
                  <div className="flex items-center justify-end">
                    <a
                      href={modal.cert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded bg-red-700 px-3.5 py-2 text-xs font-semibold tracking-wider text-white uppercase whitespace-nowrap shrink-0 transition-colors hover:bg-red-600"
                    >
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Open Full PDF</span>
                    </a>
                  </div>
                  <div className="h-[420px] w-full overflow-hidden rounded border border-zinc-800 bg-black">
                    <iframe
                      src={modal.cert.pdfUrl}
                      title={modal.cert.title}
                      className="h-full w-full"
                    />
                  </div>
                </div>
              ) : (
                <div className="flex items-start gap-3 rounded border border-zinc-800 bg-[#0c0c0e] p-4 text-sm text-zinc-300">
                  <FileText className="mt-0.5 h-5 w-5 shrink-0 text-red-500" aria-hidden="true" />
                  <p>
                    Participated in an Artificial Intelligence workshop organized by Jio, exploring
                    foundational AI concepts and practical real-world use cases.
                  </p>
                </div>
              )}
            </div>
          )}

          {modal.type === 'resume' && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs text-zinc-400">
                  Rishi Patel · B.Tech ECE · Karnavati University
                </p>
                <a
                  href={modal.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded bg-red-700 px-3.5 py-2 text-xs font-semibold tracking-wider text-white uppercase whitespace-nowrap shrink-0 transition-colors hover:bg-red-600"
                >
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Open / Download Resume PDF</span>
                </a>
              </div>
              <div className="h-[480px] w-full overflow-hidden rounded border border-zinc-800 bg-black">
                <iframe
                  src={modal.pdfUrl}
                  title="Rishi Patel Resume PDF"
                  className="h-full w-full"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
