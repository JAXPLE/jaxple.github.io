import type { Language, LocalizedMetadata } from '../i18n';

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

export interface Highlight {
  id: string;
  icon: 'performance' | 'realtime' | 'automation';
  text: string;
}

export interface ProfileContent {
  name: string;
  role: string;
  imageAlt: string;
  copyComplete: string;
  tagline: {
    prefix: string;
    firstEmphasis: string;
    middle: string;
    secondEmphasis: string;
    suffix: string;
  };
  languageSwitcher: {
    label: string;
    koreanLabel: string;
    englishLabel: string;
  };
}

export interface ViewCounterContent {
  total: string;
  today: string;
}

export interface LockScreenContent {
  status: string;
  messagePrefix: string;
  linkLabel: string;
  messageSuffix: string;
}

export interface PortfolioContent {
  profile: ProfileContent;
  sections: {
    about: string;
    skills: string;
    projects: string;
    openSource: string;
  };
  highlights: Highlight[];
  projects: Project[];
  openSource: Project[];
  skills: Skill[];
  viewCounter: ViewCounterContent;
  lockScreen: LockScreenContent;
  metadata: LocalizedMetadata;
  eof: string;
}

const KOREAN_CONTENT: PortfolioContent = {
  profile: {
    name: '이재원',
    role: 'Software Engineer',
    imageAlt: '이재원 프로필 사진',
    copyComplete: '복사완료!',
    tagline: {
      prefix: '본질적인 시스템의 ',
      firstEmphasis: '병목',
      middle: '을 찾아내고, ',
      secondEmphasis: '성능',
      suffix: '을 끌어올립니다.',
    },
    languageSwitcher: {
      label: '표시 언어 선택',
      koreanLabel: '한국어로 전환',
      englishLabel: '영어로 전환',
    },
  },
  sections: {
    about: '~/about',
    skills: '~/skills',
    projects: '~/projects',
    openSource: '~/open source',
  },
  highlights: [
    {
      id: 'dalso',
      icon: 'performance',
      text: '3,000개+ 아이템 시세 연산 및 이벤트 최적화 (TPS 3 → 20)',
    },
    {
      id: 'cosmos',
      icon: 'realtime',
      text: '동시성 이슈를 해결한 Event-Driven 실시간 서버 구축',
    },
    {
      id: 'samiltech',
      icon: 'automation',
      text: '레거시 통신 속도 83% 개선 및 문서 자동화로 소요 시간 93% 단축',
    },
  ],
  projects: [
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
      title: '코스모스 파트너스',
      period: '2025.03 - 2025.06',
      desc: [
        '실시간 시세 데이터 처리를 위한 Event-Driven 서버 설계 및 구현',
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
      id: 'samiltech',
      title: '삼일테크(주)',
      period: '2023.07 - 2025.01',
      desc: [
        '6개국의 총 13개 고객사 대응 MFC 기반 장비 소프트웨어 개발',
        '통신 구조 분석 및 블록 단위 재설계 (latency 83% 단축)',
        '반복 업무 프로세스 자동화 툴 구현 (소요 시간 93% 단축)',
      ],
      tech: ['C++', 'MFC', 'SVN'],
    },
  ],
  openSource: [
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
  ],
  skills: [
    { category: 'Language', items: 'Java, C++' },
    { category: 'Framework', items: 'MFC' },
    { category: 'Tool', items: 'Visual Studio, Visual Studio Code, Tortoise SVN, GitHub' },
  ],
  viewCounter: {
    total: '조회수',
    today: '오늘',
  },
  lockScreen: {
    status: '[시스템 인증 실패]',
    messagePrefix: '코드가 궁금하시다면 ',
    linkLabel: 'GitHub 저장소',
    messageSuffix: '에서 확인해주세요!',
  },
  metadata: {
    title: 'JwonLEE - Software Engineer',
    description: '본질적인 시스템의 병목을 찾아내고, 성능을 끌어올립니다. 이재원 - 소프트웨어 엔지니어',
    keywords: 'Software Engineer, 개발자, 포트폴리오, JwonLEE, 이재원, Java, 인프라, 아스타틴, Astn',
    openGraphTitle: 'JwonLEE - Software Engineer',
    openGraphDescription: '본질적인 시스템의 병목을 찾아내고, 성능을 끌어올립니다. 이재원 - 소프트웨어 엔지니어',
  },
  eof: './EOF',
};

const ENGLISH_CONTENT: PortfolioContent = {
  profile: {
    name: 'JwonLEE',
    role: 'Software Engineer',
    imageAlt: 'JwonLEE profile photo',
    copyComplete: 'Copied!',
    tagline: {
      prefix: 'Identifying critical system ',
      firstEmphasis: 'bottlenecks',
      middle: ' and delivering measurable ',
      secondEmphasis: 'performance',
      suffix: ' gains.',
    },
    languageSwitcher: {
      label: 'Select display language',
      koreanLabel: 'Switch to Korean',
      englishLabel: 'Switch to English',
    },
  },
  sections: {
    about: '~/about',
    skills: '~/skills',
    projects: '~/projects',
    openSource: '~/open source',
  },
  highlights: [
    {
      id: 'dalso',
      icon: 'performance',
      text: 'Optimized pricing and event processing for 3,000+ items, raising TPS from 3 to 20',
    },
    {
      id: 'cosmos',
      icon: 'realtime',
      text: 'Built a concurrency-safe, event-driven server for real-time market data',
    },
    {
      id: 'samiltech',
      icon: 'automation',
      text: 'Improved legacy communication speed by 83% and reduced documentation time by 93%',
    },
  ],
  projects: [
    {
      id: 'dalso',
      title: 'Dalso Town Project',
      period: 'Dec 2022 — Present',
      desc: [
        'Architected and continue to operate a Java-based game server',
        'Designed a dynamic economy for 3,000+ items using inventory and demand signals',
        'Raised server performance from 3 to 20 TPS by eliminating repetitive events and optimizing trade operations',
      ],
      tech: ['Java', 'Git', 'Ubuntu'],
      links: [
        {
          icon: 'notion',
          text: 'Project documentation',
          url: 'https://jaxple.notion.site/1e892da7e82180bda9f4d43c84200f97?source=copy_link',
          hoverClass: 'hover:bg-black hover:border-black',
        },
        {
          icon: 'github',
          text: 'Base source code',
          url: 'https://github.com/JAXPLE/R10-PUBLIC',
          hoverClass: 'hover:bg-[#24292e] hover:border-[#24292e]',
        },
        {
          icon: 'notion',
          text: 'Code documentation',
          url: 'https://jaxple.notion.site/R10-Project-1ae92da7e82181e6b595d3dd3128d484',
          hoverClass: 'hover:bg-black hover:border-black',
        },
      ],
    },
    {
      id: 'cosmos',
      title: 'Cosmos Partners',
      period: 'Mar 2025 — Jun 2025',
      desc: [
        'Designed and implemented an event-driven server for real-time market data processing',
        'Built an extensible architecture using the Observer pattern',
        'Implemented an asynchronous multithreaded pipeline for concurrent traffic processing',
      ],
      tech: ['Java', 'Git', 'Architecture Design'],
      links: [
        {
          icon: 'notion',
          text: 'Project documentation',
          url: 'https://jaxple.notion.site/COSMOS-Project-23592da7e821809dab4eea238f51fd43?source=copy_link',
          hoverClass: 'hover:bg-black hover:border-black',
        },
      ],
    },
    {
      id: 'samiltech',
      title: 'Samil Tech Co., Ltd.',
      period: 'Jul 2023 — Jan 2025',
      desc: [
        'Developed MFC-based equipment software for 13 clients across six countries',
        'Reduced communication latency by 83% through protocol analysis and modular redesign',
        'Reduced repetitive workflow time by 93% with a custom automation tool',
      ],
      tech: ['C++', 'MFC', 'SVN'],
    },
  ],
  openSource: [
    {
      id: 'wurst',
      title: 'Wurst Client',
      period: 'Dec 2022 — Present',
      desc: [
        'Contributed modules to a Java open-source project with 1.4k+ GitHub stars',
        'Designed and implemented asynchronous real-time chat translation using message hooks and the Google Translate API',
        'Improved usability by replacing hard-coded configuration with a GUI',
      ],
      tech: ['Java', 'Git', 'Open Source'],
      links: [
        {
          icon: 'github',
          text: 'PR: asynchronous chat translation foundation',
          url: 'https://github.com/Wurst-Imperium/Wurst7/pull/1021',
          hoverClass: 'hover:bg-[#24292e] hover:border-[#24292e]',
        },
        {
          icon: 'github',
          text: 'PR: GUI-based teleport module',
          url: 'https://github.com/Wurst-Imperium/Wurst7/pull/899',
          hoverClass: 'hover:bg-[#24292e] hover:border-[#24292e]',
        },
      ],
    },
  ],
  skills: [
    { category: 'Language', items: 'Java, C++' },
    { category: 'Framework', items: 'MFC' },
    { category: 'Tool', items: 'Visual Studio, Visual Studio Code, Tortoise SVN, GitHub' },
  ],
  viewCounter: {
    total: 'VIEWS',
    today: 'TODAY',
  },
  lockScreen: {
    status: '[System Auth Failed]',
    messagePrefix: 'View the source code in the ',
    linkLabel: 'GitHub repository',
    messageSuffix: '.',
  },
  metadata: {
    title: 'JwonLEE - Software Engineer',
    description: 'Software engineer focused on identifying system bottlenecks and delivering measurable performance improvements.',
    keywords: 'Software Engineer, Portfolio, JwonLEE, Java, C++, Systems Performance, Backend',
    openGraphTitle: 'JwonLEE - Software Engineer',
    openGraphDescription: 'Software engineer focused on system bottlenecks and measurable performance improvements.',
  },
  eof: './EOF',
};

export const PORTFOLIO_CONTENT: Record<Language, PortfolioContent> = {
  ko: KOREAN_CONTENT,
  en: ENGLISH_CONTENT,
};
