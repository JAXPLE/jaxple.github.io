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
| 배포 | GitHub Pages (GitHub Actions) |

---

## 프로젝트 구조

```
src/
├── components/
│   ├── AboutSection.tsx       # 자기소개 타임라인 블록
│   ├── CursorTrail.tsx        # 커서 잔상 컴포넌트 (비활성화)
│   ├── ParticleBackground.tsx # Canvas 파티클 네트워크 배경
│   ├── ProfileHeader.tsx      # 프로필 헤더 (마그네틱 이펙트)
│   ├── ProjectCard.tsx        # 프로젝트 아코디언 카드 (3D 틸트)
│   ├── SectionHeader.tsx      # 섹션 제목 헤더
│   └── SkillSection.tsx       # 기술 스택 리스트
├── data/
│   └── portfolio.ts           # 프로젝트/오픈소스/스킬 데이터
├── hooks/
│   └── useGimmicks.ts         # 전역 인터랙션 훅 (마우스, 스크롤, 키보드)
└── App.tsx                    # 루트 레이아웃 컴포넌트
```

---

## 인터랙티브 기믹

| 기믹 | 설명 |
|------|------|
| 🔦 마우스 스포트라이트 | 커서를 따라 은은한 배경 조명 |
| 🕸️ 파티클 네트워크 | 마우스 반발 반응하는 연결망 배경 |
| 📊 스크롤 프로그레스 바 | 화면 상단의 읽기 진행도 표시선 |
| 🌫️ 노이즈 그레인 | 시네마틱한 필름 질감 오버레이 |
| 🧲 마그네틱 헤더 | 마우스 방향에 따라 미세하게 움직이는 프로필 영역 |
| 💻 해커 모드 | 키보드로 `jaxple` 입력 시 매트릭스 풍 테마 전환 |
| 🎭 프로필 스핀 | 프로필 사진 클릭 시 360° 회전 이스터에그 |
| 🕵️ 콘솔 메시지 | 개발자 도구 열면 등장하는 숨겨진 환영 메시지 |

---

## 로컬 실행

```bash
npm install
npm run dev
```

빌드 산출물은 `dist/` 폴더에 생성됩니다.

```bash
npm run build
```

---

## 배포

`main` 브랜치에 Push 시 **GitHub Actions**가 자동으로 빌드 후 GitHub Pages에 배포합니다.  
커스텀 도메인: `jaxple.dev` (CNAME 설정 완료)

---

## 데이터 관리

모든 이력 및 프로젝트 정보는 `src/data/portfolio.ts` 한 파일에서 관리합니다.  
새로운 항목을 추가할 경우 해당 파일만 수정하면 UI가 자동으로 반영됩니다.

---

© 2026 JwonLEE
