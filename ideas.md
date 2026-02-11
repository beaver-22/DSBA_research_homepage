# SNU DSBA Lab Research Page - Design Concepts

## Concept 1: Modern Academic Minimalism (선택됨)
**Design Movement**: Contemporary Academic Design with Bauhaus principles  
**Probability**: 0.08

### Core Principles
- **Clarity through Restraint**: 최소한의 요소로 최대의 정보 전달, 학술적 신뢰성 강조
- **Hierarchical Information Architecture**: 연구 분야와 응용 분야의 명확한 구조 계층화
- **Functional Elegance**: 모든 시각 요소가 정보 전달에 기여하는 목적 지향적 디자인
- **Accessible Professionalism**: 국제 학술 커뮤니티에 통용되는 전문성과 접근성

### Color Philosophy
- **Primary Palette**: Deep Navy (#1a3a52) + Bright Academic Blue (#0066cc) + Clean White (#ffffff)
- **Accent Colors**: Warm Gray (#4a5568) for secondary text, Soft Gray (#f7fafc) for backgrounds
- **Semantic Colors**: Black for completed research, Blue for in-progress, Red (#e53e3e) for future directions
- **Reasoning**: 학술 기관의 신뢰성을 전달하면서도 현대적 감각을 유지. 색상 대비로 정보 계층 구분

### Layout Paradigm
- **Hero Section**: Full-width asymmetric layout with left-aligned institution name and right-aligned visual accent
- **Research Topics**: Three-column grid with generous vertical spacing, each card with distinct visual weight
- **Applications Section**: Vertical timeline-style layout with color-coded status indicators (black/blue/red)
- **Navigation**: Sticky header with minimal navigation, content-focused main area

### Signature Elements
1. **Vertical Accent Lines**: 연구 분야와 응용 분야 사이의 시각적 구분을 위한 수직 라인
2. **Color-Coded Status Badges**: 검정/파랑/빨강 원형 배지로 연구 상태 표시
3. **Research Card Borders**: 각 연구 분야 카드의 상단에 굵은 색상 라인

### Interaction Philosophy
- **Subtle Hover Effects**: 카드 호버 시 미묘한 그림자 증가와 배경색 변화
- **Smooth Transitions**: 모든 상태 변화에 0.3초의 부드러운 트랜지션
- **Focus States**: 접근성을 위한 명확한 포커스 링

### Animation
- **Entrance Animation**: 페이지 로드 시 연구 분야 카드들이 위에서 아래로 순차적으로 fade-in (100ms 간격)
- **Scroll-triggered**: 응용 분야 섹션이 뷰포트에 진입할 때 각 항목이 좌측에서 우측으로 슬라이드 인
- **Hover Micro-interactions**: 카드 호버 시 상단 색상 라인이 아래로 확장하는 효과

### Typography System
- **Display Font**: 'Noto Serif KR' (Bold 700) - 제목과 섹션 헤더
- **Body Font**: 'Noto Sans KR' (Regular 400, Medium 500) - 본문 텍스트
- **Hierarchy**: 
  - H1: 40px / 1.2 line-height (Noto Serif KR Bold)
  - H2: 28px / 1.3 line-height (Noto Serif KR Bold)
  - H3: 20px / 1.4 line-height (Noto Sans KR Medium)
  - Body: 16px / 1.6 line-height (Noto Sans KR Regular)
  - Small: 14px / 1.5 line-height (Noto Sans KR Regular)

---

## Concept 2: Data Visualization Forward
**Design Movement**: Information Design + Data Aesthetics  
**Probability**: 0.07

### Core Principles
- **Data as Design**: 연구 분야를 시각적 데이터 그래프로 표현
- **Interactive Exploration**: 사용자가 연구 분야를 탐색하면서 상세 정보 발견
- **Color Coding System**: 각 연구 분야와 응용 분야를 일관된 색상으로 매핑
- **Narrative Flow**: 데이터 흐름을 따라 자연스러운 스토리텔링

### Color Philosophy
- **Time-series**: Emerald Green (#10b981)
- **NLP**: Amber Gold (#f59e0b)
- **Computer Vision**: Indigo Purple (#6366f1)
- **Applications**: 상태별로 색상 강도 조절 (검정/파랑/빨강)

### Layout Paradigm
- **Radial/Network Layout**: 중앙의 DSBA Lab을 중심으로 연구 분야와 응용 분야가 방사형으로 배치
- **Interactive Nodes**: 각 연구 분야를 클릭하면 관련 응용 분야 강조
- **Flowing Connections**: SVG 선으로 연구 분야와 응용 분야의 연결 관계 표현

### Signature Elements
1. **Animated Network Graph**: D3.js 또는 Three.js를 활용한 인터랙티브 네트워크
2. **Gradient Flows**: 연구 분야에서 응용 분야로 흐르는 그래디언트 라인
3. **Particle Effects**: 백그라운드의 미묘한 입자 애니메이션

### Interaction Philosophy
- **Exploratory Interaction**: 사용자가 마우스를 움직이며 정보 발견
- **Responsive Highlighting**: 호버된 요소와 관련된 모든 항목 강조
- **Smooth Transitions**: 모든 변화가 유동적으로 진행

### Animation
- **Continuous Motion**: 백그라운드 입자가 지속적으로 움직임
- **Hover Expansion**: 노드 호버 시 연결된 모든 요소 확대
- **Scroll Reveal**: 응용 분야가 스크롤에 따라 순차적으로 나타남

### Typography System
- **Display Font**: 'Space Grotesk' (Bold) - 현대적이고 기술적
- **Body Font**: 'Inter' (Regular, Medium) - 명확하고 읽기 쉬운
- **Accent Font**: 'Courier Prime' (Mono) - 기술 용어와 코드 표현

---

## Concept 3: Institutional Heritage + Contemporary
**Design Movement**: Academic Tradition meets Modern Design  
**Probability**: 0.06

### Core Principles
- **Heritage Respect**: 서울대학교의 전통과 권위를 존중
- **Contemporary Expression**: 최신 AI/ML 연구의 혁신성을 표현
- **Dual Narrative**: 과거의 학문적 기초와 미래의 기술 비전을 동시에 전달
- **Sophisticated Restraint**: 장식적 요소보다 의미 있는 시각 표현

### Color Philosophy
- **Primary**: SNU 공식 색상 (Dark Blue #003478) + Modern Accent (Neon Blue #00d4ff)
- **Secondary**: Cream (#faf8f3), Dark Gray (#2d3748)
- **Semantic**: 상태별 색상 (검정/파랑/빨강)

### Layout Paradigm
- **Vertical Rhythm**: 일관된 수직 리듬으로 학문적 엄격함 표현
- **Split Screen**: 좌측은 전통적 텍스트, 우측은 현대적 비주얼
- **Serif + Sans Serif Mix**: 전통과 현대의 대비

### Signature Elements
1. **Institutional Crest Accent**: 섹션 구분에 기관 정체성 표현
2. **Timeline Visualization**: 연구 진행 상황을 시간축으로 표현
3. **Embossed Typography**: 제목에 미묘한 입체감 효과

### Interaction Philosophy
- **Formal Elegance**: 과도하지 않은 상호작용
- **Contextual Information**: 호버 시 추가 정보 제공
- **Scroll-based Narrative**: 스크롤을 통한 자연스러운 정보 공개

### Animation
- **Staggered Reveals**: 요소들이 순차적으로 나타남
- **Parallax Scrolling**: 섹션 간 깊이감 표현
- **Fade Transitions**: 부드러운 페이드 효과

### Typography System
- **Display Font**: 'Playfair Display' (Bold) - 우아한 세리프
- **Body Font**: 'Lato' (Regular, Medium) - 현대적이고 친근한
- **Accent Font**: 'IBM Plex Mono' - 기술적 신뢰성

---

## Selected Design: Modern Academic Minimalism

**선택 이유**: 
- 학술 기관의 신뢰성과 전문성을 가장 효과적으로 전달
- 복잡한 연구 정보를 명확하게 구조화
- 국제 학술 커뮤니티의 표준 디자인 언어와 부합
- 모바일 반응형 구현이 용이하고 접근성이 우수함
- 향후 콘텐츠 추가 시 확장성이 높음

**Design Philosophy**: 
> "정보는 명확하게, 표현은 세련되게. 모든 시각 요소는 학술적 신뢰성을 강화하고, 연구의 가치를 돋보이게 한다."

**Key Design Decisions**:
1. **Color-Coded Status System**: 검정(현재), 파랑(진행 중), 빨강(향후)으로 연구 상태를 직관적으로 표현
2. **Generous Whitespace**: 학술 문서의 읽기 경험을 웹으로 재현
3. **Typography-Driven Hierarchy**: 폰트 선택과 크기로 정보 계층 명확화
4. **Subtle Motion**: 과도하지 않은 애니메이션으로 현대성 표현
5. **Responsive Grid System**: 모바일부터 데스크톱까지 일관된 경험 제공
