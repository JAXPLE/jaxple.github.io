import { FolderGit2, Cpu, User, Star, type LucideIcon } from 'lucide-react';

import { PROJECTS_DATA, OPENSOURCE_DATA } from './data/portfolio';
import { ProfileHeader } from './components/ProfileHeader';
import { SectionHeader } from './components/SectionHeader';
import { AboutSection } from './components/AboutSection';
import { ProjectCard } from './components/ProjectCard';
import { SkillSection } from './components/SkillSection';
import { ParticleBackground } from './components/ParticleBackground';
import { useGimmicks } from './hooks/useGimmicks';

interface Section {
  id: string;
  icon: LucideIcon;
  title: string;
  content: React.ReactNode;
}

const sections: Section[] = [
  {
    id: 'about',
    icon: User,
    title: '~/about',
    content: <AboutSection />,
  },
];

function App() {
  const { mousePosition, scrollProgress, hackerMode, idle } = useGimmicks();

  const renderProjectSection = (icon: LucideIcon, title: string, data: typeof PROJECTS_DATA) => (
    <section className="space-y-4">
      <SectionHeader icon={icon} title={title} />
      <div className="space-y-3">
        {data.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );

  return (
    <div
      className={`relative min-h-screen bg-black text-[#a1a1aa] font-sans selection:bg-[#3f3f46] selection:text-white flex justify-center py-12 md:py-24 px-6 overflow-x-hidden transition-all duration-700 ${hackerMode ? '!bg-[#021200] !text-[#10b981]' : ''}`}
    >
      {/* 시네마틱 노이즈 그레인 */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* 스크롤 진행도 표시바 */}
      <div
        className={`fixed top-0 left-0 h-[2px] z-50 transition-all duration-150 ease-out ${hackerMode ? 'bg-[#10b981]' : 'bg-[#e4e4e7]'}`}
        style={{ width: `${scrollProgress}%` }}
      />

      {/* 마우스 인터랙티브 스포트라이트 */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-[2000ms]"
        style={{
          opacity: idle ? 0 : 1,
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, ${
            hackerMode ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.08)'
          }, transparent 40%)`,
        }}
      />

      {/* 파티클 네트워크 배경 */}
      <ParticleBackground hackerMode={hackerMode} />

      <div className="w-full max-w-xl space-y-16 animate-fade-in relative z-10">
        {/* 마그네틱 프로필 헤더 */}
        <div style={{ 
          transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.01}px, ${(mousePosition.y - window.innerHeight / 2) * 0.01}px)`,
          transition: 'transform 0.2s ease-out'
        }}>
          <ProfileHeader />
        </div>

        {sections.map(({ id, icon, title, content }) => (
          <section key={id} className="space-y-4">
            <SectionHeader icon={icon} title={title} />
            {content}
          </section>
        ))}

        {renderProjectSection(FolderGit2, '~/projects', PROJECTS_DATA)}
        {renderProjectSection(Star, '~/open source', OPENSOURCE_DATA)}

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

