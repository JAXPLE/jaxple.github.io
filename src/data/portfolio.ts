export const PROJECTS_DATA = [
  {
    id: 'r10-core',
    title: 'R10 Core Architecture',
    period: '2022.12 — 현재',
    desc: 'Minecraft 사설 서버 운영, 안정적인 서비스를 위한 핵심 코어 시스템 개발.',
    tech: ['Java', 'Ubuntu', 'Git'],
    links: [
      {
        icon: 'github',
        text: 'Code',
        url: 'https://github.com/JAXPLE/R10-PUBLIC',
        hoverClass: 'hover:bg-white hover:text-black hover:border-white',
      },
      {
        icon: 'notion',
        text: 'Docs in Notion',
        url: 'https://jaxple.notion.site/R10-Project-1ae92da7e82181e6b595d3dd3128d484',
        hoverClass: 'hover:bg-gray-300 hover:text-black hover:border-gray-300',
      }
    ]
  },
  {
    id: 'cosmos',
    title: 'Cosmos Data Pipeline',
    period: '2025.03 - 2025.06',
    desc: 'TradingView Webhook과 Telegram Bot을 연동한 시세 알림 미들웨어 개발.',
    tech: ['Java', 'Git', 'Architect 설계'],
    links: [
      {
        icon: 'notion',
        text: 'Docs in Notion',
        url: 'https://jaxple.notion.site/COSMOS-Project-23592da7e821809dab4eea238f51fd43?source=copy_link',
        hoverClass: 'hover:bg-gray-300 hover:text-black hover:border-gray-300',
      }
    ]
  },
  {
    id: 'semicon-control',
    title: 'Semicon Control System',
    period: '2023.07 - 2025.01',
    desc: '반도체 장비 통신 프로토콜 재설계. 블록 단위 처리로 레이턴시 83% 단축 (3ms → 0.5ms).',
    tech: ['C++', 'MFC', 'SVN']
  }
];

export const SKILLS_DATA = [
  { category: 'Language', items: 'Java, C++' },
  { category: 'Framework', items: 'MFC' },
  { category: 'Infra', items: 'Ubuntu, SVN/Git' }
];
