import { Github, Linkedin, Mail } from 'lucide-react';
import React, { useState } from 'react';

export const ProfileHeader: React.FC = () => {
  const [spinCount, setSpinCount] = useState(0);

  return (
  <header className="flex flex-col items-center text-center space-y-6">
    <div 
      onClick={() => setSpinCount(s => s + 1)}
      className="group w-24 h-24 rounded-full border-2 border-[#27272a] shadow-[0_0_30px_rgba(255,255,255,0.05)] relative p-1 bg-[#18181b] cursor-pointer"
      style={{ 
        transform: `rotate(${spinCount * 360}deg)`,
        transition: 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      }}
      title="Easter Egg! Click me"
    >
      <img src="https://avatars.githubusercontent.com/u/114869036?v=4" alt="Profile" className="w-full h-full rounded-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute bottom-1 right-1 w-4 h-4 bg-[#10b981] rounded-full border-[3px] border-[#18181b] group-hover:bg-[#34d399] transition-colors duration-500 blur-[1px] group-hover:blur-0"></div>
    </div>
    
    <div className="space-y-2">
      <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
        이재원
      </h1>
      <p className="font-mono text-xs md:text-sm text-[#71717a]">
        Software Engineer
      </p>
    </div>

    <p className="text-sm md:text-base leading-relaxed max-w-sm text-[#a1a1aa] transition-colors duration-500 hover:text-[#e4e4e7] cursor-default group">
      본질적인 시스템의 <span className="text-[#d4d4d8] font-medium group-hover:text-white transition-colors duration-500">병목</span>을 찾아내고, <br className="hidden sm:block" />
      <span className="text-[#d4d4d8] font-medium group-hover:text-white transition-colors duration-500">성능</span>을 끌어올립니다.
    </p>

    <div className="flex gap-3 pt-2 items-center flex-wrap justify-center">
      <a href="mailto:jaxple@gmail.com" className="group flex items-center justify-center h-[40px] px-[11px] rounded-full bg-[#18181b] border border-[#27272a] hover:px-4 hover:bg-[#0ea5e9] hover:text-white hover:border-[#0ea5e9] transition-all duration-500 shadow-lg hover:shadow-[0_0_20px_rgba(14,165,233,0.6)]" aria-label="Email">
        <Mail size={18} className="text-[#a1a1aa] shrink-0 group-hover:text-white transition-colors duration-500" />
        <span className="font-mono text-sm font-medium text-white overflow-hidden max-w-0 opacity-0 group-hover:max-w-[150px] group-hover:opacity-100 group-hover:ml-2 transition-all duration-500 whitespace-nowrap">
          jaxple@gmail.com
        </span>
      </a>
      
      <a href="https://github.com/JAXPLE" target="_blank" rel="noreferrer" className="group flex items-center justify-center h-[40px] px-[11px] rounded-full bg-[#18181b] border border-[#27272a] hover:px-4 hover:bg-white hover:text-black hover:border-white transition-all duration-500 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]" aria-label="GitHub">
        <Github size={18} className="text-[#a1a1aa] shrink-0 group-hover:text-black transition-colors duration-500" />
        <span className="font-mono text-sm font-medium text-black overflow-hidden max-w-0 opacity-0 group-hover:max-w-[150px] group-hover:opacity-100 group-hover:ml-2 transition-all duration-500 whitespace-nowrap">
          JAXPLE
        </span>
      </a>
      
      <a href="https://www.linkedin.com/in/jaxple" target="_blank" rel="noreferrer" className="group flex items-center justify-center h-[40px] px-[11px] rounded-full bg-[#18181b] border border-[#27272a] hover:px-4 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all duration-500 shadow-lg hover:shadow-[0_0_20px_rgba(10,102,194,0.6)]" aria-label="LinkedIn">
        <Linkedin size={18} className="text-[#a1a1aa] shrink-0 group-hover:text-white transition-colors duration-500" />
        <span className="font-mono text-sm font-medium text-white overflow-hidden max-w-0 opacity-0 group-hover:max-w-[150px] group-hover:opacity-100 group-hover:ml-2 transition-all duration-500 whitespace-nowrap">
          in/jaxple
        </span>
      </a>
    </div>
  </header>
  );
};
