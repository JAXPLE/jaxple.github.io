import { useEffect, useState } from 'react';

function getKstDateString() {
  const date = new Date();
  date.setUTCHours(date.getUTCHours() + 9); // KST is UTC+9
  return date.toISOString().split('T')[0];
}

export function ViewCounter() {
  const [views, setViews] = useState<{ total: number; daily: number } | null>(null);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        const todayStr = getKstDateString();
        const storageKey = `view_counted_${todayStr}`;
        const hasCounted = localStorage.getItem(storageKey);

        const method = hasCounted ? 'GET' : 'POST';
        
        // In dev environment, try to hit production or a local worker proxy.
        // For production, use relative URL.
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
            return; // Don't show counter if there is a config error
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

  if (!views) return null;

  return (
    <div className="flex items-center gap-2 text-[10px] md:text-xs font-mono opacity-50 hover:opacity-100 transition-opacity tracking-wider cursor-default">
      <span className="text-emerald-500 animate-pulse">&gt;</span>
      <span>VIEWS: {views.total.toLocaleString()}</span>
      <span className="text-zinc-600 opacity-50">|</span>
      <span className="text-zinc-400">TODAY: {views.daily.toLocaleString()}</span>
    </div>
  );
}
