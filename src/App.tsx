import { FolderGit2, Cpu } from 'lucide-react';

import { PROJECTS_DATA } from './data/portfolio';
import { ProfileHeader } from './components/ProfileHeader';
import { SectionHeader } from './components/SectionHeader';
import { ProjectCard } from './components/ProjectCard';
import { SkillSection } from './components/SkillSection';

function App() {
  return (
    <div className="min-h-screen bg-black text-[#a1a1aa] font-sans selection:bg-[#3f3f46] selection:text-white flex justify-center py-12 md:py-24 px-6">
      <div className="w-full max-w-xl space-y-16 animate-fade-in">
        
        <ProfileHeader />

        <section className="space-y-4">
          <SectionHeader icon={FolderGit2} title="~/projects" />
          <div className="space-y-3">
            {PROJECTS_DATA.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

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
