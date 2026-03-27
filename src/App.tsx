import { FolderGit2, Cpu, User, Star } from 'lucide-react';

import { PROJECTS_DATA, OPENSOURCE_DATA } from './data/portfolio';
import { ProfileHeader } from './components/ProfileHeader';
import { SectionHeader } from './components/SectionHeader';
import { AboutSection } from './components/AboutSection';
import { ProjectCard } from './components/ProjectCard';
import { SkillSection } from './components/SkillSection';
import { ParticleBackground } from './components/ParticleBackground';
import { useGimmicks } from './hooks/useGimmicks';

const sections = [
  {
    id: 'about',
    icon: User,
    title: '~/about',
    content: <AboutSection />,
  },
];

function ProjectSection({ icon, title, data }: { icon: React.ElementType; title: string; data: typeof PROJECTS_DATA }) {
  return (
    <section className="space-y-4">
      <SectionHeader icon={icon} title={title} />
      <div className="space-y-3">
        {data.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

function App() {
  const { mousePosition, scrollProgress, hackerMode, idle } = useGimmicks();

  return (
    <div
      className={`relative min-h-screen bg-black text-[#a1a1aa] font-sans selection:bg-[#3f3f46] selection:text-white flex justify-center py-12 md:py-24 px-6 overflow-x-hidden transition-all duration-700 ${hackerMode ? '!bg-[#021200] !text-[#10b981]' : ''}`}
    >
      {/* Scroll Progress Bar */}
      <div
        className={`fixed top-0 left-0 h-[2px] z-50 transition-all duration-150 ease-out ${hackerMode ? 'bg-[#10b981]' : 'bg-[#e4e4e7]'}`}
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Background Interactive Spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-[2000ms]"
        style={{
          opacity: idle ? 0 : 1,
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, ${
            hackerMode ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.08)'
          }, transparent 40%)`,
        }}
      />

      {/* Particle Network Background */}
      <ParticleBackground hackerMode={hackerMode} />


      <div className="w-full max-w-xl space-y-16 animate-fade-in relative z-10">
        <ProfileHeader />

        {sections.map(({ id, icon, title, content }) => (
          <section key={id} className="space-y-4">
            <SectionHeader icon={icon} title={title} />
            {content}
          </section>
        ))}

        <ProjectSection icon={FolderGit2} title="~/projects" data={PROJECTS_DATA} />
        <ProjectSection icon={Star} title="~/open source" data={OPENSOURCE_DATA} />

        <section className="space-y-4">
          <SectionHeader icon={Cpu} title="~/skills" />
          <SkillSection />
        </section>

        <footer className="pt-8 flex justify-center text-[#52525b]">
          <span className="font-mono text-[10px]">
            ./EOF — © 2026 JwonLEE
          </span>
        </footer>
      </div>
    </div>
  );
}

export default App;

