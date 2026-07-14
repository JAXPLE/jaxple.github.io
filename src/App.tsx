import { useEffect, useState, type ReactNode } from 'react';
import { AboutSection } from './components/AboutSection';
import { LanguageToggle } from './components/LanguageToggle';
import { ProfileHeader } from './components/ProfileHeader';
import { ProjectCard } from './components/ProjectCard';
import { SectionHeader } from './components/SectionHeader';
import { SkillSection } from './components/SkillSection';
import { ViewCounter } from './components/ViewCounter';
import { PORTFOLIO_CONTENT, type Project } from './data/portfolio';
import { useGimmicks } from './hooks/useGimmicks';
import { useScrollReveal } from './hooks/useScrollReveal';
import {
  persistLanguage,
  resolveLanguage,
  syncDocumentMetadata,
  type Language,
} from './i18n';

type SectionNode =
  | { type: 'static'; id: string; title: string; content: ReactNode }
  | { type: 'cards'; id: string; title: string; data: Project[] };

function renderSection(node: SectionNode) {
  if (node.type === 'cards') {
    return (
      <section key={node.id} className="space-y-6">
        <SectionHeader title={node.title} />
        <div className="grid grid-cols-1 gap-4">
          {node.data.map((project, index) => (
            <ProjectCard key={project.id} project={project} revealDelay={index * 90} />
          ))}
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
  const [language, setLanguage] = useState<Language>(resolveLanguage);
  const content = PORTFOLIO_CONTENT[language];
  const { scrollProgress } = useGimmicks();
  useScrollReveal();

  useEffect(() => {
    persistLanguage(language);
    syncDocumentMetadata(language, content.metadata);
  }, [content.metadata, language]);

  const sections: SectionNode[] = [
    {
      type: 'static',
      id: 'about',
      title: content.sections.about,
      content: <AboutSection highlights={content.highlights} />,
    },
    {
      type: 'static',
      id: 'skills',
      title: content.sections.skills,
      content: <SkillSection skills={content.skills} />,
    },
    {
      type: 'cards',
      id: 'projects',
      title: content.sections.projects,
      data: content.projects,
    },
    {
      type: 'cards',
      id: 'opensource',
      title: content.sections.openSource,
      data: content.openSource,
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0d0d0e] text-[#b9b9c0] font-sans selection:bg-[#303034] selection:text-white flex justify-center py-8 md:py-16 px-5 md:px-8 overflow-x-hidden">
      <div
        className="fixed top-0 left-0 h-[2px] z-50 transition-all duration-150 ease-out bg-[#d4d4d8]"
        style={{ width: `${scrollProgress}%` }}
      />
      <main className="w-full max-w-6xl animate-fade-in relative z-10">
        <div className="mb-8 flex justify-center md:mb-10">
          <LanguageToggle
            language={language}
            label={content.profile.languageSwitcher.label}
            koreanLabel={content.profile.languageSwitcher.koreanLabel}
            englishLabel={content.profile.languageSwitcher.englishLabel}
            onChange={setLanguage}
          />
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-16">
          <aside className="lg:sticky lg:top-16">
            <ProfileHeader content={content.profile} />
          </aside>

          <div className="min-w-0 space-y-12">
            {sections.map(renderSection)}
            <footer
              data-scroll-reveal
              className="pt-4 pb-8 text-[#52525b]"
            >
              <ViewCounter content={content.viewCounter} language={language} />
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
