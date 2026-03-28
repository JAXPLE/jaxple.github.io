import { Github, Linkedin, Mail, Check } from 'lucide-react';
import React, { useState } from 'react';
import { BorderBeam } from './BorderBeam';

export const ProfileHeader: React.FC = () => {
  const [spinCount, setSpinCount] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    const email = 'jaxple@gmail.com';

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        throw new Error('Clipboard API unavailable');
      }
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = email;
      textArea.setAttribute('readonly', '');
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      textArea.style.top = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
      } catch (copyErr) {
        console.error('Fallback copy failed', copyErr);
      }
      document.body.removeChild(textArea);
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
  <header className="w-full flex flex-col items-center text-center space-y-8 py-4">
    <div
      onClick={() => setSpinCount(s => s + 1)}
      className="group w-28 h-28 rounded-full border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.03)] relative p-1.5 bg-[#09090b] cursor-pointer transition-all duration-700 hover:border-white/20"
      style={{
        transform: `rotate(${spinCount * 360}deg)`,
        transition: 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      }}
      title="Easter Egg! Click me"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#10b981]/10 via-transparent to-[#0ea5e9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <img src="https://avatars.githubusercontent.com/u/114869036?v=4" alt="Profile" className="w-full h-full rounded-full object-cover group-hover:scale-[1.02] transition-transform duration-700 relative z-10" />
      <div className="absolute bottom-2 right-2 w-5 h-5 bg-[#10b981] rounded-full border-[4px] border-[#09090b] z-20 shadow-[0_0_15px_rgba(16,185,129,0.4)]"></div>
    </div>

    <div className="space-y-3">
      <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-[#a1a1aa]">
        이재원
      </h1>
      <div className="flex items-center justify-center gap-2">
        <span className="h-[1px] w-4 bg-[#27272a]"></span>
        <p className="font-mono text-xs md:text-sm tracking-[0.2em] text-[#71717a]">
          Software Engineer
        </p>
        <span className="h-[1px] w-4 bg-[#27272a]"></span>
      </div>
    </div>

    <p className="text-base md:text-lg leading-relaxed max-w-xl text-[#71717a] font-medium">
      본질적인 시스템의 <span className="text-white">병목</span>을 찾아내고, <br className="hidden sm:block" />
      <span className="text-white">성능</span>을 끌어올립니다.
    </p>

    <div className="flex flex-col sm:flex-row gap-3 pt-4 items-center justify-center w-full">
      <button
        onClick={handleCopyEmail}
        className={`relative overflow-hidden w-full sm:w-auto group flex items-center justify-center h-11 px-5 rounded-xl bg-white/[0.03] border transition-all duration-300 ${copied ? 'border-green-500/50 bg-green-500/10' : 'border-white/5 hover:bg-[#EA4335] hover:border-[#EA4335]'}`}
        aria-label="Email"
      >
        <BorderBeam intensity="high" />
        {copied ? (
          <Check size={16} className="relative z-10 text-green-400 mr-2.5 animate-in zoom-in duration-300" />
        ) : (
          <Mail size={16} className="relative z-10 text-[#a1a1aa] group-hover:text-white transition-colors" />
        )}
        <span className={`relative z-10 font-mono text-xs font-semibold whitespace-nowrap transition-colors ${copied ? 'text-green-400' : 'text-[#a1a1aa] group-hover:text-white'} ml-2.5 outline-none`}>
          {copied ? '복사완료!' : 'jaxple@gmail.com'}
        </span>
      </button>

      <a href="https://github.com/JAXPLE" target="_blank" rel="noreferrer" className="relative overflow-hidden w-full sm:w-auto group flex items-center justify-center h-11 px-5 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-[#24292e] hover:border-[#24292e] transition-all duration-300" aria-label="GitHub">
        <BorderBeam intensity="high" />
        <Github size={16} className="relative z-10 text-[#a1a1aa] group-hover:text-white transition-colors" />
        <span className="relative z-10 font-mono text-xs font-semibold text-[#a1a1aa] group-hover:text-white transition-colors ml-2.5 outline-none whitespace-nowrap">
          JAXPLE
        </span>
      </a>

      <a href="https://www.linkedin.com/in/jaxple" target="_blank" rel="noreferrer" className="relative overflow-hidden w-full sm:w-auto group flex items-center justify-center h-11 px-5 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all duration-300" aria-label="LinkedIn">
        <BorderBeam intensity="high" />
        <Linkedin size={16} className="relative z-10 text-[#a1a1aa] group-hover:text-white transition-colors" />
        <span className="relative z-10 font-mono text-xs font-semibold text-[#a1a1aa] group-hover:text-white transition-colors ml-2.5 outline-none whitespace-nowrap">
          in/jaxple
        </span>
      </a>
    </div>
  </header>
  );
};
