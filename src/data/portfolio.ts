// =============================================================================
// 타입 정의 — 모든 소비자가 이 파일 하나만 참조
// =============================================================================

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

// =============================================================================
// 프로젝트 데이터
// =============================================================================

export const PROJECTS_DATA: Project[] = [
  {
    id: 'r10-core',
    title: 'R10 Minecraft 플러그인',
    period: '2022.12 — 현재',
    desc: [
      'Java 기반 동시접속 20명+ 규모 게임 서버 운영',
      '재고기반 시세 연산을 통한 유동가격 경제 시스템 개발',
      '고빈도 이벤트 요청 방어 로직으로 서버 TPS 최적화 달성 (3 → 20)',
    ],
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
      },
    ],
  },
  {
    id: 'cosmos',
    title: 'TradingView <-> Telegram 시세 알림 미들웨어',
    period: '2025.03 - 2025.06',
    desc: [
      'TradingView-Telegram 연동 암호화폐 시세 알림 미들웨어 구축',
      'Observer 패턴 기반 Event-Driven 구조 설계 및 운영',
      'Thread Pool 기반 비동기 파이프라인 구축 및 대용량 트래픽 처리 경험',
    ],
    tech: ['Java', 'Git', 'Architect 설계'],
    links: [
      {
        icon: 'notion',
        text: 'Docs in Notion',
        url: 'https://jaxple.notion.site/COSMOS-Project-23592da7e821809dab4eea238f51fd43?source=copy_link',
        hoverClass: 'hover:bg-gray-300 hover:text-black hover:border-gray-300',
      },
    ],
  },
  {
    id: 'semicon-control',
    title: 'MFC 기반 반도체 장비 제어 SW',
    period: '2023.07 - 2025.01',
    desc: [
      'MFC(C++) 기반 글로벌 반도체 6개국 고객사 대상 장비 제어 SW 개발',
      '레거시 PLC 통신 구조를 블록 단위로 재설계하여 레이턴시 83% 단축 (3ms → 0.5ms)',
      '문서 자동화 툴 개발(소요 시간 70% 단축) 및 팀 내 SVN 형상관리 도입 주도',
    ],
    tech: ['C++', 'MFC', 'SVN'],
  },
];

// =============================================================================
// 오픈소스 기여 데이터
// =============================================================================

export const OPENSOURCE_DATA: Project[] = [
  {
    id: 'wurst',
    title: 'Wurst Client',
    period: '2022.12 - 현재',
    desc: [
      'GitHub Star 1.4k+ Java 기반 게임 유틸리티 오픈소스 기여',
      '채팅 후킹을 통한 Google Translate API 비동기 자동 번역 모듈 기여',
      'GUI를 활용한 사용자가 직접 명령어를 지정하도록 리팩토링',
    ],
    tech: ['Java', 'Git', 'Open Source'],
    links: [
      {
        icon: 'github',
        text: '채팅 자동 번역 모듈 PR',
        url: 'https://github.com/Wurst-Imperium/Wurst7/pull/1021',
        hoverClass: 'hover:bg-white hover:text-black hover:border-white',
      },
      {
        icon: 'github',
        text: '텔레포트 모듈 리팩토링 PR',
        url: 'https://github.com/Wurst-Imperium/Wurst7/pull/899',
        hoverClass: 'hover:bg-white hover:text-black hover:border-white',
      },
    ],
  },
];

// =============================================================================
// 기술 스택 데이터
// =============================================================================

export const SKILLS_DATA: Skill[] = [
  { category: 'Language',  items: 'Java, C++' },
  { category: 'Framework', items: 'MFC' },
  { category: 'Infra',     items: 'Ubuntu, SVN/Git' },
];
