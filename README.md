# SNU DSBA Lab Research Page

서울대학교 데이터 사이언스 및 비즈니스 애널리틱스 연구실(DSBA Lab)의 연구 분야와 논문을 소개하는 웹 애플리케이션입니다.

> ### [Demo Site](https://wireless-sen-moves-text.trycloudflare.com/)
> 실제 동작하는 페이지를 확인하려면 위 링크를 클릭하세요.

## 기술 스택

| 분류 | 기술 |
|------|------|
| 프론트엔드 | React 19, TypeScript, Vite 7 |
| 백엔드 | Express 4 |
| UI 라이브러리 | shadcn/ui (Radix UI 기반) |
| 스타일링 | Tailwind CSS v4 |
| 라우팅 | Wouter |
| 애니메이션 | Framer Motion |
| 패키지 매니저 | pnpm 10.4.1+ |

## 요구 사항

- Node.js v24 이상
- pnpm 10.4.1 이상

## 설치 및 실행

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행 (포트 3000)
pnpm run dev

# 프로덕션 빌드
pnpm run build

# 프로덕션 서버 실행
pnpm start

# 프로덕션 빌드 로컬 미리보기
pnpm run preview

# 타입 체크
pnpm run check

# 코드 포매팅
pnpm run format
```

## 프로젝트 구조

```
dsba-research-page/
├── client/                        # React SPA (Vite)
│   ├── src/
│   │   ├── main.tsx              # 진입점
│   │   ├── App.tsx               # 루트 컴포넌트 및 라우팅
│   │   ├── index.css             # 디자인 토큰 및 Tailwind 설정
│   │   ├── const.ts              # 공유 상수 re-export
│   │   ├── pages/
│   │   │   ├── Home.tsx          # 메인 페이지 (연구 데이터 포함, ~900줄)
│   │   │   └── NotFound.tsx      # 404 페이지
│   │   ├── components/
│   │   │   ├── ErrorBoundary.tsx  # 에러 경계 컴포넌트
│   │   │   ├── Map.tsx           # 지도 컴포넌트
│   │   │   └── ui/               # shadcn/ui 컴포넌트 (50+)
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx   # 라이트/다크 모드 컨텍스트
│   │   ├── hooks/                # 커스텀 훅
│   │   │   ├── useComposition.ts
│   │   │   ├── useMobile.tsx
│   │   │   └── usePersistFn.ts
│   │   └── lib/
│   │       └── utils.ts          # cn() 유틸리티 (clsx + tailwind-merge)
│   └── public/
│       ├── Keyword/              # 연구 분야 키워드 이미지
│       └── papers/               # 논문 figure 이미지
├── server/
│   └── index.ts                  # Express 서버 (정적 파일 서빙 + SPA 폴백)
├── shared/
│   └── const.ts                  # 클라이언트-서버 공유 상수
├── patches/
│   └── wouter@3.7.1.patch        # Wouter 라우트 수집 패치
├── Keyword/                      # 연구 분야 키워드 원본 이미지
├── vite.config.ts                # Vite 설정 (경로 별칭, 플러그인)
├── tsconfig.json                 # TypeScript 설정
├── components.json               # shadcn/ui 설정
└── .prettierrc                   # Prettier 포매팅 설정
```

## 컴포넌트 트리

```
App.tsx
├── ErrorBoundary
└── ThemeProvider (defaultTheme="light")
    └── TooltipProvider
        ├── Toaster (Sonner)
        └── Router (Wouter)
            ├── /       → Home
            ├── /404    → NotFound
            └── *       → NotFound (폴백)
```

## 주요 기능

- **연구 분야 소개**: 시계열 분석, 자연어 처리, 컴퓨터 비전 등 주요 연구 분야 설명
- **논문 목록**: 각 연구 분야별 대표 논문 및 상세 정보 (키워드, 방법론, 기여점) 제공
- **응용 분야**: 실제 산업 적용 사례 소개
- **반응형 디자인**: 모바일 및 데스크톱 환경 지원
- **스크롤 애니메이션**: Framer Motion + Intersection Observer 기반 인터랙티브 UI

## 데이터 구조

모든 연구 데이터는 `client/src/pages/Home.tsx`에 TypeScript 상수로 하드코딩되어 있습니다. 별도의 API 호출 없이 클라이언트에서 직접 렌더링합니다.

주요 인터페이스:
- `ResearchTopic` — 연구 분야 (시계열, NLP, CV)
- `Paper` — 개별 논문 (제목, 저자, 발표지, 키워드, 방법론, 기여점)
- `ApplicationArea` — 응용 분야
- `AppSection` — 응용 분야 세부 섹션

## 디자인 철학

**Modern Academic Minimalism** — 학술적 디자인 원칙을 기반으로 한 미니멀 디자인을 지향합니다.

- **상태 색상**: 검정(완료), 파랑(진행 중), 빨강(향후 연구)
- **타이포그래피**: Noto Serif KR(제목), Noto Sans KR(본문)
- **여백**: 학술 논문 스타일의 넉넉한 여백 활용
- **애니메이션**: 카드 fade-in, 스크롤 트리거 slide-in, 호버 효과

## 빌드 파이프라인

1. Vite가 클라이언트를 `dist/public/`으로 빌드
2. esbuild가 `server/index.ts`를 `dist/index.js`로 번들링 (ESM, 외부 패키지 제외)
3. 프로덕션 서버가 `dist/public/`의 정적 파일을 서빙하고 모든 경로를 `index.html`로 폴백 (클라이언트 사이드 라우팅)

## 경로 별칭

| 별칭 | 경로 |
|------|------|
| `@` | `client/src/` |
| `@shared` | `shared/` |
| `@assets` | `attached_assets/` |

`tsconfig.json`과 `vite.config.ts` 양쪽에 설정되어 있습니다.

## 라이선스

MIT
