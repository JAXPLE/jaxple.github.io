# jaxple.github.io

이재원(JwonLEE)의 소프트웨어 엔지니어 포트폴리오입니다. 시스템 병목을 발견하고 측정 가능한 성능 개선으로 연결한 경험을 소개합니다.

라이브 사이트: [jaxple.dev](https://jaxple.dev)

## 디자인 원칙

- 채용 담당자가 성과와 역할을 빠르게 파악할 수 있는 단일 컬럼 구조
- 큰 타이포그래피, 충분한 여백, 얇은 구분선으로 구성한 다크 에디토리얼 스타일
- 언어 전환, 이메일 복사, 프로젝트 링크에 집중한 최소 인터랙션
- 한국어와 영어 콘텐츠, 키보드 포커스, 반응형 레이아웃 지원

## 기술 스택

| 분류 | 기술 |
| --- | --- |
| UI | React 18, TypeScript, Tailwind CSS 4 |
| 빌드 | Vite 6 |
| 배포 | GitHub Pages, GitHub Actions |
| 엣지 | Cloudflare Worker, KV |

## 프로젝트 구조

```text
src/
├── components/    # 프로필, 성과, 경력, 기술, 연락처 UI
├── data/          # 한국어·영어 포트폴리오 콘텐츠
├── utils/         # 코드 열람 보호 로직
├── App.tsx        # 페이지 정보 구조와 섹션 조합
├── i18n.ts        # 언어 선택, 저장, 메타데이터 동기화
└── index.css      # 디자인 토큰과 전역 스타일
```

## 로컬 실행

```bash
npm install
npm run dev
```

## 검증

```bash
npm run lint
npm run build
```

`main` 브랜치에 푸시하면 GitHub Actions가 정적 사이트를 빌드해 GitHub Pages에 배포합니다.
