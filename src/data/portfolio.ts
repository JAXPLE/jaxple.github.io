export interface ProjectLink {
  icon: 'github' | 'notion';
  text: string;
  url: string;
  hoverClass: string;
}

export interface Project {
  id: string;
  title: string;
  period: string;
  desc: string[];
  tech: string[];
  links?: ProjectLink[];
}

export interface Skill {
  category: string;
  items: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'dalso',
    title: '달소읍 프로젝트',
    period: '2022.12 — 현재',
    desc: [
      'Java 기반 게임 서버 아키텍처 설계 및 장기 운영',
      '3000개 이상의 아이템의 재고·수요 기반 유동 경제 시스템 로직 설계',
      '반복 이벤트 차단 및 거래 연산 최적화로 서버 성능 개선 (TPS 3 → 20)',
    ],
    tech: ['Java', 'Git', 'Ubuntu'],
    links: [
      {
        icon: 'notion',
        text: 'docs',
        url: 'https://jaxple.notion.site/1e892da7e82180bda9f4d43c84200f97?source=copy_link',
        hoverClass: 'hover:bg-black hover:border-black',
      },
      {
        icon: 'github',
        text: '기반 code',
        url: 'https://github.com/JAXPLE/R10-PUBLIC',
        hoverClass: 'hover:bg-[#24292e] hover:border-[#24292e]',
      },
      {
        icon: 'notion',
        text: '코드 docs',
        url: 'https://jaxple.notion.site/R10-Project-1ae92da7e82181e6b595d3dd3128d484',
        hoverClass: 'hover:bg-black hover:border-black',
      },
    ],
  },
  {
    id: 'cosmos',
    title: 'TradingView ↔ Telegram 시세 알림 미들웨어 개발',
    period: '2025.03 - 2025.06',
    desc: [
      '실시간 시세 데이터 처리를 위한 Event-Driven 미들웨어 설계 및 구현',
      'Observer 패턴 기반 확장형 아키텍처 설계',
      '비동기 Multi-thread 파이프라인 구현을 통한 트래픽 처리',
    ],
    tech: ['Java', 'Git', 'Architect 설계'],
    links: [
      {
        icon: 'notion',
        text: 'docs',
        url: 'https://jaxple.notion.site/COSMOS-Project-23592da7e821809dab4eea238f51fd43?source=copy_link',
        hoverClass: 'hover:bg-black hover:border-black',
      },
    ],
  },
  {
    id: 'semicon-control',
    title: 'MFC 기반 장비 미들웨어 개발 및 유지보수',
    period: '2023.07 - 2025.01',
    desc: [
      '6개국의 총 13개 고객사 대응 MFC 기반 장비 미들웨어 개발',
      '통신 구조 분석 및 블록 단위 재설계 (latency 83% 단축)',
      '반복 업무 프로세스 자동화 툴 구현 (소요 시간 93% 단축)',
    ],
    tech: ['C++', 'MFC', 'SVN'],
  },
];

export const OPENSOURCE_DATA: Project[] = [
  {
    id: 'wurst',
    title: 'Wurst Client',
    period: '2022.12 - 현재',
    desc: [
      'GitHub 1.4k+ Java 오픈소스 프로젝트 모듈 기여',
      '채팅 hooking 후 구글번역 API를 통한 실시간 비동기 채팅번역 모듈 설계·구현',
      '기존 하드코딩 구조를 GUI로 변경하여 사용성 개선',
    ],
    tech: ['Java', 'Git', 'Open Source'],
    links: [
      {
        icon: 'github',
        text: '비동기 채팅 번역 모듈 기반코드 제시 PR',
        url: 'https://github.com/Wurst-Imperium/Wurst7/pull/1021',
        hoverClass: 'hover:bg-[#24292e] hover:border-[#24292e]',
      },
      {
        icon: 'github',
        text: 'GUI로 개선한 텔레포트 모듈 PR',
        url: 'https://github.com/Wurst-Imperium/Wurst7/pull/899',
        hoverClass: 'hover:bg-[#24292e] hover:border-[#24292e]',
      },
    ],
  },
];

export const SKILLS_DATA: Skill[] = [
  { category: 'Language', items: 'Java, C++' },
  { category: 'Framework', items: 'MFC' },
  { category: 'Tool', items: 'Visual Studio, Visual Studio Code, Tortoise SVN, GitHub' },
];
