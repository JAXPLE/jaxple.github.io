import { FolderGit2, Cpu, User, Star, type LucideIcon } from 'lucide-react';

import { PROJECTS_DATA, OPENSOURCE_DATA } from './data/portfolio';
import { ProfileHeader } from './components/ProfileHeader';
import { SectionHeader } from './components/SectionHeader';
import { AboutSection } from './components/AboutSection';
import { ProjectCard } from './components/ProjectCard';
import { SkillSection } from './components/SkillSection';
import { ParticleBackground } from './components/ParticleBackground';
import { useGimmicks } from './hooks/useGimmicks';

type SectionNode =
  | { type: 'static'; id: string; title: string; content: React.ReactNode }
  | { type: 'cards';  id: string; title: string; data: typeof PROJECTS_DATA };

const GRID_SECTIONS: SectionNode[] = [
  { type: 'static', id: 'about',      title: '~/about',       content: <AboutSection /> },
  { type: 'static', id: 'skills',     title: '~/skills',      content: <SkillSection /> },
  { type: 'cards',  id: 'projects',   title: '~/projects',    data: PROJECTS_DATA },
  { type: 'cards',  id: 'opensource', title: '~/open source', data: OPENSOURCE_DATA },
];

const NOISE_URL = 'https://grainy-gradients.vercel.app/noise.svg';

const THEME = {
  normal: { spotlight: 'rgba(255,255,255,0.08)', progress: 'bg-[#e4e4e7]', root: '' },
  hacker: { spotlight: 'rgba(16,185,129,0.15)',  progress: 'bg-[#10b981]',  root: '!bg-[#021200] !text-[#10b981]' },
} as const;

function renderSection(node: SectionNode) {
  if (node.type === 'cards') {
    return (
      <section key={node.id} className="space-y-6">
        <SectionHeader title={node.title} />
        <div className="grid grid-cols-1 gap-4">
          {node.data.map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>
      </section>
    );
  }
  return (
    <section key={node.id} className="space-y-6">
      <SectionHeader title={node.title} />
      {node.content}
    </section>
  );
}

function App() {
  const { mousePosition, scrollProgress, hackerMode, idle } = useGimmicks();
  const theme = hackerMode ? THEME.hacker : THEME.normal;

  return (
    <div className={`relative min-h-screen bg-black text-[#a1a1aa] font-sans selection:bg-[#3f3f46] selection:text-white flex justify-center py-12 md:py-24 px-6 overflow-x-hidden transition-all duration-700 ${theme.root}`}>
      <div className={`fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay bg-[url('${NOISE_URL}')]`} />
      <div className={`fixed top-0 left-0 h-[2px] z-50 transition-all duration-150 ease-out ${theme.progress}`} style={{ width: `${scrollProgress}%` }} />
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-[2000ms]"
        style={{ opacity: idle ? 0 : 1, background: `radial-gradient(1000px circle at ${mousePosition.x}px ${mousePosition.y}px, ${theme.spotlight}, transparent 40%)` }}
      />
      <ParticleBackground hackerMode={hackerMode} />

      <div className="w-full max-w-5xl animate-fade-in relative z-10 space-y-20">
        <ProfileHeader />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Column: About -> (Mobile Skills) -> Projects */}
          <div className="space-y-12">
            {renderSection(GRID_SECTIONS[0])} {/* About */}
            
            {/* Mobile-only Skills: Shows up between About and Projects on small screens */}
            <div className="md:hidden">
              {renderSection(GRID_SECTIONS[1])}
            </div>

            {renderSection(GRID_SECTIONS[2])} {/* Projects */}
          </div>

          {/* Right Column: (Desktop Skills) -> Open Source */}
          <div className="space-y-12">
            {/* Desktop-only Skills: Shows up in the sidebar on large screens */}
            <div className="hidden md:block">
              {renderSection(GRID_SECTIONS[1])}
            </div>
            
            {renderSection(GRID_SECTIONS[3])} {/* Open Source */}
          </div>
        </div>

        <footer className="pt-12 flex justify-center text-[#3f3f46]">
          <span className="font-mono text-[10px] tracking-wider">./EOF</span>
        </footer>
      </div>
    </div>
  );
}

export default App;
