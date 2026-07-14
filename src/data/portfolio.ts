import type { Language, LocalizedMetadata } from '../i18n';

export interface ProjectLink {
  text: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  period: string;
  summary: string;
  details: string[];
  tech: string[];
  links?: ProjectLink[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Achievement {
  projectId: string;
  value: string;
  label: string;
}

export interface ContactContent {
  eyebrow: string;
  title: string;
  description: string;
  emailLabel: string;
  copyComplete: string;
  githubLabel: string;
  linkedinLabel: string;
}

export interface ProfileContent {
  name: string;
  role: string;
  imageAlt: string;
  tagline: {
    prefix: string;
    firstEmphasis: string;
    middle: string;
    secondEmphasis: string;
    suffix: string;
  };
  navigation: {
    work: string;
    contact: string;
  };
  contact: ContactContent;
  languageSwitcher: {
    label: string;
    koreanLabel: string;
    englishLabel: string;
  };
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
    impact: string;
    experience: string;
    openSource: string;
    skills: string;
  };
  achievements: Achievement[];
  projects: Project[];
  openSource: Project[];
  skills: Skill[];
  lockScreen: LockScreenContent;
  metadata: LocalizedMetadata;
}

const KOREAN_CONTENT: PortfolioContent = {
  profile: {
    name: '이재원',
    role: 'Software Engineer',
    imageAlt: '이재원 프로필 사진',
    tagline: {
      prefix: '본질적인 시스템의 ',
      firstEmphasis: '병목',
      middle: '을 찾아내고, ',
      secondEmphasis: '성능',
      suffix: '을 끌어올립니다.',
    },
    navigation: {
      work: '주요 경험 보기',
      contact: '연락하기',
    },
    contact: {
      eyebrow: '연락',
      title: '더 나은 시스템을 함께 만들고 싶다면.',
      description: '프로젝트와 기술적 도전에 관한 대화를 환영합니다.',
      emailLabel: '이메일 복사',
      copyComplete: '복사 완료',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
    },
    languageSwitcher: {
      label: '표시 언어 선택',
      koreanLabel: '한국어로 전환',
      englishLabel: '영어로 전환',
    },
  },
  sections: {
    impact: '핵심 성과',
    experience: '주요 경험',
    openSource: '오픈소스',
    skills: '기술',
  },
  achievements: [
    {
      projectId: 'dalso',
      value: '3 → 20 TPS',
      label: '3,000개+ 아이템의 시세·이벤트 연산 최적화',
    },
    {
      projectId: 'samiltech',
      value: '83% 단축',
      label: '레거시 통신 구조 재설계로 지연 시간 개선',
    },
    {
      projectId: 'samiltech',
      value: '93% 단축',
      label: '반복 문서 업무 자동화로 처리 시간 개선',
    },
  ],
  projects: [
    {
      id: 'dalso',
      title: '달소읍 프로젝트',
      period: '2022.12 — 현재',
      summary: '반복 이벤트와 거래 연산을 최적화해 서버 처리 성능을 TPS 3에서 20으로 높였습니다.',
      details: [
        'Java 기반 게임 서버 아키텍처를 설계하고 장기간 운영했습니다.',
        '3,000개 이상의 아이템에 재고·수요 기반 유동 경제 시스템을 적용했습니다.',
      ],
      tech: ['Java', 'Git', 'Ubuntu'],
      links: [
        {
          text: '프로젝트 문서',
          url: 'https://jaxple.notion.site/1e892da7e82180bda9f4d43c84200f97?source=copy_link',
        },
        {
          text: '기반 소스 코드',
          url: 'https://github.com/JAXPLE/R10-PUBLIC',
        },
        {
          text: '코드 문서',
          url: 'https://jaxple.notion.site/R10-Project-1ae92da7e82181e6b595d3dd3128d484',
        },
      ],
    },
    {
      id: 'cosmos',
      title: '코스모스 프로젝트',
      period: '2025.03 — 2025.06',
      summary: '동시성 이슈를 해결한 Event-Driven 실시간 시세 처리 서버를 설계·구현했습니다.',
      details: [
        'Observer 패턴을 적용해 확장 가능한 이벤트 처리 구조를 설계했습니다.',
        '비동기 Multi-thread 파이프라인으로 동시 트래픽을 처리했습니다.',
      ],
      tech: ['Java', 'Git', 'Architecture Design'],
      links: [
        {
          text: '프로젝트 문서',
          url: 'https://jaxple.notion.site/COSMOS-Project-23592da7e821809dab4eea238f51fd43?source=copy_link',
        },
      ],
    },
    {
      id: 'samiltech',
      title: '삼일테크(주)',
      period: '2023.07 — 2025.01',
      summary: '레거시 통신 지연을 83% 줄이고 문서 자동화로 반복 업무 시간을 93% 단축했습니다.',
      details: [
        '6개국 13개 고객사를 지원하는 MFC 기반 장비 소프트웨어를 개발했습니다.',
        '통신 구조를 블록 단위로 재설계하고 반복 업무 자동화 도구를 구현했습니다.',
      ],
      tech: ['C++', 'MFC', 'SVN'],
    },
  ],
  openSource: [
    {
      id: 'wurst',
      title: 'Wurst Client',
      period: '2022.12 — 현재',
      summary: 'GitHub 1.4k+ Java 오픈소스 프로젝트에 실시간 번역과 사용성 개선 모듈을 기여했습니다.',
      details: [
        '메시지 hook과 Google Translate API를 활용한 비동기 실시간 채팅 번역을 구현했습니다.',
        '하드코딩된 설정을 GUI로 전환해 사용성을 개선했습니다.',
      ],
      tech: ['Java', 'Git', 'Open Source'],
      links: [
        {
          text: 'PR · 비동기 채팅 번역',
          url: 'https://github.com/Wurst-Imperium/Wurst7/pull/1021',
        },
        {
          text: 'PR · GUI 텔레포트 모듈',
          url: 'https://github.com/Wurst-Imperium/Wurst7/pull/899',
        },
      ],
    },
  ],
  skills: [
    { category: 'Language', items: ['Java', 'C++'] },
    { category: 'Framework', items: ['MFC'] },
    { category: 'Tool', items: ['Visual Studio', 'Visual Studio Code', 'Tortoise SVN', 'GitHub'] },
  ],
  lockScreen: {
    status: '[시스템 인증 실패]',
    messagePrefix: '코드가 궁금하시다면 ',
    linkLabel: 'GitHub 저장소',
    messageSuffix: '에서 확인해주세요!',
  },
  metadata: {
    title: 'JwonLEE - Software Engineer',
    description: '본질적인 시스템의 병목을 찾아내고, 성능을 끌어올립니다. 이재원 - 소프트웨어 엔지니어',
    keywords: 'Software Engineer, 개발자, 포트폴리오, JwonLEE, 이재원, Java, C++, 시스템 성능',
    openGraphTitle: 'JwonLEE - Software Engineer',
    openGraphDescription: '본질적인 시스템의 병목을 찾아내고, 성능을 끌어올립니다. 이재원 - 소프트웨어 엔지니어',
  },
};

const ENGLISH_CONTENT: PortfolioContent = {
  profile: {
    name: 'JwonLEE',
    role: 'Software Engineer',
    imageAlt: 'JwonLEE profile photo',
    tagline: {
      prefix: 'Identifying critical system ',
      firstEmphasis: 'bottlenecks',
      middle: ' and delivering measurable ',
      secondEmphasis: 'performance',
      suffix: ' gains.',
    },
    navigation: {
      work: 'View selected work',
      contact: 'Get in touch',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s build better systems together.',
      description: 'I welcome conversations about projects and technical challenges.',
      emailLabel: 'Copy email',
      copyComplete: 'Copied',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
    },
    languageSwitcher: {
      label: 'Select display language',
      koreanLabel: 'Switch to Korean',
      englishLabel: 'Switch to English',
    },
  },
  sections: {
    impact: 'Impact',
    experience: 'Selected Work',
    openSource: 'Open Source',
    skills: 'Toolkit',
  },
  achievements: [
    {
      projectId: 'dalso',
      value: '3 → 20 TPS',
      label: 'Optimized pricing and event processing for 3,000+ items',
    },
    {
      projectId: 'samiltech',
      value: '83% faster',
      label: 'Reduced communication latency through modular redesign',
    },
    {
      projectId: 'samiltech',
      value: '93% faster',
      label: 'Reduced documentation time with workflow automation',
    },
  ],
  projects: [
    {
      id: 'dalso',
      title: 'Dalso Town Project',
      period: 'Dec 2022 — Present',
      summary: 'Raised server performance from 3 to 20 TPS by optimizing repetitive events and trade operations.',
      details: [
        'Architected and continue to operate a Java-based game server.',
        'Designed a dynamic economy for 3,000+ items using inventory and demand signals.',
      ],
      tech: ['Java', 'Git', 'Ubuntu'],
      links: [
        {
          text: 'Project documentation',
          url: 'https://jaxple.notion.site/1e892da7e82180bda9f4d43c84200f97?source=copy_link',
        },
        {
          text: 'Base source code',
          url: 'https://github.com/JAXPLE/R10-PUBLIC',
        },
        {
          text: 'Code documentation',
          url: 'https://jaxple.notion.site/R10-Project-1ae92da7e82181e6b595d3dd3128d484',
        },
      ],
    },
    {
      id: 'cosmos',
      title: 'Cosmos Project',
      period: 'Mar 2025 — Jun 2025',
      summary: 'Designed and built a concurrency-safe, event-driven server for real-time market data.',
      details: [
        'Built an extensible event-processing architecture using the Observer pattern.',
        'Implemented an asynchronous multithreaded pipeline for concurrent traffic.',
      ],
      tech: ['Java', 'Git', 'Architecture Design'],
      links: [
        {
          text: 'Project documentation',
          url: 'https://jaxple.notion.site/COSMOS-Project-23592da7e821809dab4eea238f51fd43?source=copy_link',
        },
      ],
    },
    {
      id: 'samiltech',
      title: 'Samil Tech Co., Ltd.',
      period: 'Jul 2023 — Jan 2025',
      summary: 'Reduced legacy communication latency by 83% and repetitive documentation time by 93%.',
      details: [
        'Developed MFC-based equipment software for 13 clients across six countries.',
        'Redesigned communication in modular blocks and built a workflow automation tool.',
      ],
      tech: ['C++', 'MFC', 'SVN'],
    },
  ],
  openSource: [
    {
      id: 'wurst',
      title: 'Wurst Client',
      period: 'Dec 2022 — Present',
      summary: 'Contributed real-time translation and usability modules to a Java project with 1.4k+ GitHub stars.',
      details: [
        'Built asynchronous chat translation using message hooks and the Google Translate API.',
        'Replaced hard-coded configuration with a GUI to improve usability.',
      ],
      tech: ['Java', 'Git', 'Open Source'],
      links: [
        {
          text: 'PR · Asynchronous chat translation',
          url: 'https://github.com/Wurst-Imperium/Wurst7/pull/1021',
        },
        {
          text: 'PR · GUI teleport module',
          url: 'https://github.com/Wurst-Imperium/Wurst7/pull/899',
        },
      ],
    },
  ],
  skills: [
    { category: 'Language', items: ['Java', 'C++'] },
    { category: 'Framework', items: ['MFC'] },
    { category: 'Tool', items: ['Visual Studio', 'Visual Studio Code', 'Tortoise SVN', 'GitHub'] },
  ],
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
};

export const PORTFOLIO_CONTENT: Record<Language, PortfolioContent> = {
  ko: KOREAN_CONTENT,
  en: ENGLISH_CONTENT,
};
