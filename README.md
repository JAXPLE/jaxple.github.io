# jaxple.github.io

**이재원(JwonLEE)의 개인 포트폴리오 웹사이트**입니다.  
본질적인 시스템의 병목을 찾아내고, 성능을 끌어올립니다.

🔗 **라이브**: [jaxple.dev](https://jaxple.dev)

---

## 기술 스택

| 분류 | 기술 |
|------|------|
| 프레임워크 | React 18 + TypeScript |
| 번들러 | Vite |
| 스타일 | Tailwind CSS v4 |
| 보안 | Cloudflare Worker (프록시, 헤더 기반 보안) |
| 배포 | GitHub Pages (GitHub Actions) |

---

## 프로젝트 구조

```text
src/
├── components/
│   ├── AboutSection.tsx       # 소개 하이라이트 블록
│   ├── BorderBeam.tsx         # 테두리 광원 네온 효과 애니메이션
│   ├── HoverCard.tsx          # 공용 호버 카드 (스케일업, BorderBeam 적용)
│   ├── ParticleBackground.tsx # 반응형 파티클 네트워크 배경
│   ├── ProfileHeader.tsx      # 프로필 헤더 (브랜드 컬러 이펙트, 스핀)
│   ├── ProjectCard.tsx        # 프로젝트 카드 (아코디언, HoverCard 기반)
│   ├── SectionHeader.tsx      # 타이틀 헤더 컴포넌트
│   └── SkillSection.tsx       # 기술 스택 (인터랙션 없는 정적 박스)
├── data/
│   └── portfolio.ts           # 이력/프로젝트 전체 데이터 저장소
├── hooks/
│   └── useGimmicks.ts         # 마우스 위치 추적, 해커 모드(키보드 훅)
└── App.tsx                    # 애플리케이션 진입점 및 공통 레이아웃
```

---

## 인터랙티브 기믹 & 특징

| 기능 | 설명 |
|------|------|
| 🔦 **마우스 스포트라이트** | 커서 위치를 따라 렌더링되는 은은한 배경 광원 효과 |
| 🕸️ **파티클 네트워크** | 마우스와 반발하며 반응하는 배경 캔버스 애니메이션 |
| 🎭 **프로필 이스터에그** | 헤더의 프로필 사진 클릭 및 호버 시 회전 애니메이션 |
| 💻 **해커 모드 (Matrix)** | 키보드로 `jaxple` 타이핑 시 매트릭스 느낌의 테마로 웹사이트 전환 |
| ✨ **브랜드 호버 이펙트** | 이메일, 깃허브, 링크드인 버튼을 각 브랜드의 시그니처 색상으로 통일성 있게 반전 |

---

## 🚀 성능 및 접근성 최적화

포트폴리오의 화려한 시각적 효과가 사용자 경험을 저해하지 않도록 깊이 있는 최적화가 적용되었습니다.

- **렌더링 병목 완벽 제거 (CSS Variables)**: 마우스 스포트라이트 효과가 유발하던 React의 잦은 상태 업데이트(State Update)를 걷어내고, 자바스크립트가 네이티브 CSS 변수(`--mouse-x`, `--mouse-y`)를 직접 제어하도록 아키텍처를 변경하여 스크롤 및 마우스 이동 시의 프레임 드랍(Jank) 현상을 해결했습니다.
- **다형성(Polymorphism) 기반 웹 표준 준수**: 커스텀 인터랙티브 요소(`HoverCard`)에 다형성 컴포넌트 패턴을 도입했습니다. 단순 `<div>`에 이벤트를 억지로 바인딩하지 않고 시맨틱 `<button>` 태그로 변환 렌더링되게 하여, 스크린 리더 및 키보드 네비게이션 환경에서의 접근성(A11y)을 극대화했습니다.

---

## 🛡️ 보안 및 서버 구성

- **Cloudflare Worker (`cloudflare/worker.js`)**
  - 불필요한 GitHub 관련 헤더 제거를 통한 기술 스택 은닉
  - 가상 `Server: nginx` 헤더 주입 등 서버 스푸핑
  - `HTMLRewriter`를 통해 노출되는 HTML 주석 실시간 스크러빙
  - Vite 플러그인을 활용한 프론트엔드 코드 난독화 연계

---

## 로컬 실행 및 배포

```bash
# 종속성 설치 및 로컬 개발서버 실행
npm install
npm run dev

# 프로덕션 빌드 생성
npm run build
```

`main` 브랜치에 Push 시 **GitHub Actions** 파이프라인이 즉시 프로젝트를 빌드하고 `GitHub Pages`에 자동 배포합니다.
이후 Cloudflare가 구성된 도메인(`jaxple.dev`)으로 트래픽을 라우팅하고 최적화합니다.

---

© 2026 JwonLEE
