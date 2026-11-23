import { useState } from 'react';
import DetailModal, { type ModalState } from './components/DetailModal';
import FooterSection from './components/FooterSection';
import HeroSection from './components/HeroSection';
import LowerGridSection from './components/LowerGridSection';
import Navbar from './components/Navbar';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import { PROFILE } from './data/portfolioData';

export default function App() {
  const [modal, setModal] = useState<ModalState>(null);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100">
      <Navbar
        onOpenResume={() =>
          setModal({ type: 'resume', pdfUrl: PROFILE.resumePdfUrl })
        }
      />

      <main>
        <HeroSection />

        <ProjectsSection
          onSelectProject={(project) =>
            setModal({ type: 'project', project })
          }
        />

        <LowerGridSection
          onSelectCertificate={(cert) =>
            setModal({ type: 'certificate', cert })
          }
        />

        <SkillsSection />
      </main>

      <FooterSection
        onOpenResume={() =>
          setModal({ type: 'resume', pdfUrl: PROFILE.resumePdfUrl })
        }
      />

      <DetailModal modal={modal} onClose={() => setModal(null)} />
    </div>
  );
}
