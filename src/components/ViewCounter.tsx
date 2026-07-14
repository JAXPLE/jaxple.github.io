import { useEffect, useState } from 'react';
import type { ViewCounterContent } from '../data/portfolio';
import type { Language } from '../i18n';

interface ViewCounterProps {
  content: ViewCounterContent;
  language: Language;
}

function getKstDateString() {
  const date = new Date();
  date.setUTCHours(date.getUTCHours() + 9);
  return date.toISOString().split('T')[0];
}

export function ViewCounter({ content, language }: ViewCounterProps) {
  const [views, setViews] = useState<{ total: number; daily: number } | null>(null);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        const todayStr = getKstDateString();
        const storageKey = `view_counted_${todayStr}`;
        const hasCounted = localStorage.getItem(storageKey);

        const method = hasCounted ? 'GET' : 'POST';
        
        const apiUrl = import.meta.env.DEV ? 'https://jaxple.dev/api/views' : '/api/views';

        const response = await fetch(apiUrl, {
          method,
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          if (data.error) {
            console.error('ViewCounter API Error:', data.error);
            return;
          }
          
          setViews({ total: data.total, daily: data.daily });
          
          if (!hasCounted && method === 'POST') {
            localStorage.setItem(storageKey, 'true');
          }
        }
      } catch (error) {
        console.error('Failed to fetch view counts:', error);
      }
    };

    fetchViews();
  }, []);

  if (!views) {
    return null;
  }

  const locale = language === 'ko' ? 'ko-KR' : 'en-US';

  return (
    <div className="flex items-center gap-2 text-[10px] md:text-xs font-mono opacity-50 hover:opacity-100 transition-opacity tracking-wider cursor-default">
      <span className="text-emerald-500 animate-pulse">&gt;</span>
      <span>{content.total}: {views.total.toLocaleString(locale)}</span>
      <span className="text-zinc-600 opacity-50">|</span>
      <span className="text-zinc-400">{content.today}: {views.daily.toLocaleString(locale)}</span>
    </div>
  );
}
