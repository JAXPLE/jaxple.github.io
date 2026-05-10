import { Github, Linkedin, Mail, Check } from 'lucide-react';
import React, { useState } from 'react';
import { SocialButton } from './SocialButton';

export const ProfileHeader: React.FC = () => {
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
  <header className="w-full flex flex-col items-center lg:items-start text-center lg:text-left space-y-7 py-2 lg:py-0">
    <div
      className="w-28 h-28 rounded-full border border-white/10 relative p-1.5 bg-[#111113] transition-colors duration-200 hover:border-white/20"
    >
      <img src="https://avatars.githubusercontent.com/u/114869036?v=4" alt="Profile" loading="lazy" width="100" height="100" className="w-full h-full rounded-full object-cover relative z-10" />
      <div className="absolute bottom-2 right-2 w-5 h-5 bg-[#10b981] rounded-full border-[4px] border-[#111113] z-20"></div>
    </div>

    <div className="space-y-3">
      <h1 className="text-5xl md:text-6xl lg:text-5xl font-black tracking-tight text-white">
        이재원
      </h1>
      <div className="flex items-center justify-center lg:justify-start gap-2">
        <span className="h-[1px] w-4 bg-[#27272a]"></span>
        <p className="font-mono text-xs md:text-sm tracking-[0.2em] text-[#71717a]">
          Software Engineer
        </p>
        <span className="h-[1px] w-4 bg-[#27272a]"></span>
      </div>
    </div>

    <p className="text-base md:text-lg lg:text-base leading-relaxed max-w-xl lg:max-w-[280px] text-[#a1a1aa] font-medium">
      본질적인 시스템의 <span className="text-white">병목</span>을 찾아내고, <br className="hidden sm:block lg:hidden" />
      <span className="text-white">성능</span>을 끌어올립니다.
    </p>

    <div className="flex flex-col sm:flex-row lg:flex-col gap-3 pt-2 items-center lg:items-stretch justify-center lg:justify-start w-full">
      <SocialButton
        onClick={handleCopyEmail}
        icon={copied ? <Check size={16} className="text-green-400" /> : <Mail size={16} />}
        label={copied ? '복사완료!' : 'jaxple@gmail.com'}
        isCopied={copied}
        hoverColorClass="hover:bg-white/[0.05] hover:border-[#EA4335]/60"
      />
      <SocialButton
        href="https://github.com/JAXPLE"
        icon={<Github size={16} />}
        label="JAXPLE"
        hoverColorClass="hover:bg-white/[0.05] hover:border-white/20"
      />
      <SocialButton
        href="https://www.linkedin.com/in/jaxple"
        icon={<Linkedin size={16} />}
        label="in/jaxple"
        hoverColorClass="hover:bg-white/[0.05] hover:border-[#0A66C2]/60"
      />
    </div>
  </header>
  );
};
