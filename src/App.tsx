import { PROJECTS_DATA, OPENSOURCE_DATA } from './data/portfolio';
import { ProfileHeader } from './components/ProfileHeader';
import { SectionHeader } from './components/SectionHeader';
import { AboutSection } from './components/AboutSection';
import { ProjectCard } from './components/ProjectCard';
import { SkillSection } from './components/SkillSection';
import { ViewCounter } from './components/ViewCounter';
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
  const { scrollProgress } = useGimmicks();

  return (
    <div className="relative min-h-screen bg-[#0d0d0e] text-[#b9b9c0] font-sans selection:bg-[#303034] selection:text-white flex justify-center py-8 md:py-16 px-5 md:px-8 overflow-x-hidden">
      <div className="fixed top-0 left-0 h-[2px] z-50 transition-all duration-150 ease-out bg-[#d4d4d8]" style={{ width: `${scrollProgress}%` }} />
      <main className="w-full max-w-6xl animate-fade-in relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_minmax(0,1fr)] gap-12 lg:gap-16 items-start">
          <aside className="lg:sticky lg:top-16">
            <ProfileHeader />
          </aside>

          <div className="min-w-0 space-y-12">
            {GRID_SECTIONS.map(renderSection)}
            <footer className="pt-4 pb-8 flex flex-col items-start gap-5 text-[#52525b]">
              <ViewCounter />
              <span className="font-mono text-[10px] tracking-wider">./EOF</span>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
