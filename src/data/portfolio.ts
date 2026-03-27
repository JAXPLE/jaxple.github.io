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
      'Java 기반 게임 서버 아키텍처 구축 및 장기 운영',
      '재고·수요 기반 유동 경제 시스템 로직 설계',
      '반복 이벤트 차단 및 거래 연산 최적화로 TPS 개선 (3 → 20)',
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
      '실시간 시세 데이터 처리를 위한 Event-Driven 미들웨어 구축',
      'Observer 패턴 기반 확장형 아키텍처 설계',
      '비동기 Multi-thread 파이프라인 구현 및 트래픽 처리',
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
      '글로벌 고객사 대응 MFC 기반 장비 제어 시스템 개발',
      '통신 구조 분석 및 블록 단위 재설계 (latency 83% 단축)',
      '반복 업무 프로세스 자동화 툴 구현 (소요 시간 93% 단축)',
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
      'GitHub 1.4k+ Java 오픈소스 프로젝트 핵심 기여',
      '번역 API 연동 및 비동기 채팅 처리 모듈 설계·구현',
      '기존 명령어 하드코딩 구조를 GUI 기반 상호작용으로 리팩토링',
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
