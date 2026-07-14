import { useEffect, useState } from 'react';
import { AchievementSection } from './components/AchievementSection';
import { ContactSection } from './components/ContactSection';
import { LanguageToggle } from './components/LanguageToggle';
import { ProfileHeader } from './components/ProfileHeader';
import { ProjectEntry } from './components/ProjectEntry';
import { SectionHeader } from './components/SectionHeader';
import { SkillSection } from './components/SkillSection';
import { PORTFOLIO_CONTENT } from './data/portfolio';
import {
  persistLanguage,
  resolveLanguage,
  syncDocumentMetadata,
  type Language,
} from './i18n';

function App() {
  const [language, setLanguage] = useState<Language>(resolveLanguage);
  const content = PORTFOLIO_CONTENT[language];

  useEffect(() => {
    persistLanguage(language);
    syncDocumentMetadata(language, content.metadata);
  }, [content.metadata, language]);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="mx-auto w-full max-w-[960px] px-6 py-8 sm:px-8 md:px-12 md:py-12 lg:py-16">
        <header className="border-b border-[var(--color-line)] pb-16 md:pb-24">
          <div className="mb-12 flex justify-end md:mb-20">
            <LanguageToggle
              language={language}
              label={content.profile.languageSwitcher.label}
              koreanLabel={content.profile.languageSwitcher.koreanLabel}
              englishLabel={content.profile.languageSwitcher.englishLabel}
              onChange={setLanguage}
            />
          </div>
          <ProfileHeader content={content.profile} />
        </header>

        <main className="space-y-20 py-20 md:space-y-28 md:py-28">
          <section aria-labelledby="impact-title">
            <SectionHeader id="impact-title" title={content.sections.impact} />
            <AchievementSection achievements={content.achievements} />
          </section>

          <section id="work" aria-labelledby="work-title" className="scroll-mt-10">
            <SectionHeader id="work-title" title={content.sections.experience} />
            <div>
              {content.projects.map((project) => (
                <ProjectEntry key={project.id} project={project} />
              ))}
            </div>
          </section>

          <section aria-labelledby="open-source-title">
            <SectionHeader id="open-source-title" title={content.sections.openSource} />
            <div>
              {content.openSource.map((project) => (
                <ProjectEntry key={project.id} project={project} />
              ))}
            </div>
          </section>

          <section aria-labelledby="skills-title">
            <SectionHeader id="skills-title" title={content.sections.skills} />
            <SkillSection skills={content.skills} />
          </section>
        </main>

        <ContactSection content={content.profile.contact} />
      </div>
    </div>
  );
}

export default App;
