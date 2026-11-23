import { FileText, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  onOpenResume: () => void;
}

const NAV_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#credentials' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-900/90 bg-[#09090b]/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-6 py-3.5">
        <a
          href="#top"
          className="font-display text-2xl font-extrabold tracking-wider text-white uppercase whitespace-nowrap shrink-0 transition-colors hover:text-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
        >
          Rishi Patel
        </a>

        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium tracking-widest text-zinc-400 uppercase whitespace-nowrap shrink-0 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-2 rounded bg-red-700 px-4 py-2 text-xs font-semibold tracking-wider text-white uppercase whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
          >
            <FileText className="h-3.5 w-3.5" aria-hidden="true" />
            <span>View Resume</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded border border-zinc-800 bg-[#141416] text-zinc-200 transition-colors hover:border-red-700 hover:text-white md:hidden"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-zinc-800/90 bg-[#0c0c0e] px-6 py-4 md:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 text-sm font-medium tracking-wider text-zinc-300 uppercase transition-colors hover:text-red-500"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded bg-red-700 px-4 py-2.5 text-xs font-semibold tracking-wider text-white uppercase transition-colors hover:bg-red-600"
            >
              <FileText className="h-3.5 w-3.5" aria-hidden="true" />
              <span>View Resume</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
