import { useState, useEffect } from 'react';

interface Paper {
  id: string;
  title: string;
  authors: string;
  year: number;
  venue: string;
  description: string;
  figureUrl?: string;
  keywords?: string[];
  methodology?: { title: string; detail: string }[];
  contributions?: string[];
}

interface ResearchTopic {
  id: string;
  title: string;
  description: string;
  topics: string[];
  imageUrl: string;
  papers: Paper[];
}

interface AppSection {
  title: string;
  description: string;
  bullets: string[];
}

interface ApplicationArea {
  id: string;
  title: string;
  description: string;
  topics: string[];
  papers?: Paper[];
  sections?: AppSection[];
  figureUrl?: string;
  demoImages?: { title: string; url: string }[];
}

const researchTopics: ResearchTopic[] = [
  {
    id: 'vision',
    title: 'Computer Vision (CV)',
    description: '강건한 모델 학습과 이상 탐지를 통해 산업 환경에서의 시각 인식을 고도화합니다.',
    topics: [
      '강건한 모델 학습 (Robust Industrial Perception)',
      '이상 탐지 (Anomaly Detection)',
      '지식 기반 이상 탐지 및 추리 (Knowledge-based Outlier Detection & Reasoning)'
    ],
    imageUrl: '/papers/CV_box.png',
    papers: [
      {
        id: 'cv-1',
        title: 'Multi-class Image Anomaly Detection for Practical Applications: Requirements and Robust Solutions',
        authors: 'Jaehyuk Heo, Pilsung Kang*',
        year: 2026,
        venue: 'Neurocomputing, 671, 132660',
        description: '본 논문에서는 실제 산업 환경에서 요구되는 multi-class image anomaly detection을 위해, 클래스 라벨이 없는 상황에서도 학습과 성능 유지가 가능한 semantic-aware anomaly detection 프레임워크인 HierCore를 제안합니다. HierCore는 의미론적 특징 기반의 클러스터링을 통해 클래스를 추정하고, 이미지 패치 특징을 계층적 메모리 구조에 저장함으로써 클래스 라벨에 강건한 다중 클래스 이상 탐지를 가능하게 합니다.',
        figureUrl: '/papers/image.png',
        keywords: ['Semantic Clustering', 'Hierarchical Memory Bank', 'Anomaly Scoring'],
        methodology: [
          { title: 'Semantic Clustering', detail: '훈련 단계에서 입력 이미지의 semantic embedding을 활용하여 이미지 간 의미적 유사도를 계산하고, 가장 가능성이 높은 클래스를 추정하여 해당 이미지를 대응되는 메모리 뱅크에 할당함으로써, 명시적 라벨 없이 클래스 분리 효과를 달성합니다.' },
          { title: 'Hierarchical Memory Bank', detail: '정상 이미지의 지역적 패치 특징을 클래스별로 구성된 계층적 메모리 뱅크에 저장합니다. 전역 semantic 정보와 국소 시각 패턴을 함께 고려하여, 클래스 간 특징 중첩 상황에서도 대표적인 정상 패턴을 안정적으로 모델링합니다.' },
          { title: 'Anomaly Scoring', detail: '입력 이미지의 패치 특징을 메모리 뱅크에 저장된 정상 패턴과 비교하여 이상 점수를 계산합니다. 클래스 추정 오류나 클래스 간 유사성이 존재하더라도 강건한 이상 탐지가 가능하도록 설계되었습니다.' }
        ],
        contributions: [
          'Multi-class unsupervised image anomaly detection을 위한 두 가지 핵심 요구사항을 정의하고, 학습 및 평가 단계에서 클래스 정보 사용 여부에 따른 실용적 요구사항을 체계적으로 정리',
          '네 개의 산업용 벤치마크 데이터셋을 활용하여 현실적인 4가지 시나리오에서 기존 방법들을 종합적으로 재평가',
          'Semantic-aware hierarchical memory bank 기반 HierCore를 제안하여 모든 시나리오에서 안정적인 성능 유지',
          '클래스 수 증가 및 클래스 간 시각적 유사성이 높은 환경에서도 강건한 이상 탐지 성능 달성'
        ]
      },
      {
        id: 'cv-2',
        title: 'Patch-level proxy metric learning with coresets for precise anomaly localization',
        authors: 'Hun Im, Pilsung Kang',
        year: 2026,
        venue: 'Engineering Applications of Artificial Intelligence, 163, 113094',
        description: '본 논문에서는 기존 anomaly detection 방법들이 이상 위치의 정밀도 부족 문제를 가진다는 점을 지적하고, 이를 해결하기 위해 patch-level proxy metric learning과 coreset 기반 메모리 압축을 결합한 anomaly localization 프레임워크를 제안합니다. 제안 방법은 정상 패치 간 거리 구조를 명시적으로 학습하여, 미세한 이상 영역까지 정밀하게 탐지할 수 있습니다.',
        figureUrl: '/papers/Framework.png',
        keywords: ['Patch-level Anomaly Localization', 'Proxy-based Metric Learning', 'Coreset-based Normal Patch Memory'],
        methodology: [
          { title: 'Patch-level Anomaly Localization 문제 정의', detail: '이미지 단위 anomaly score는 정확하지만, 패치 단위 이상 위치 추정은 부정확한 기존 방법들의 한계를 분석하고, 단순 최근접 거리 기반 방식이 패치 간 의미적 관계를 충분히 반영하지 못함을 지적합니다.' },
          { title: 'Proxy-based Metric Learning', detail: '정상 패치의 대표적인 중심 역할을 하는 proxy embeddings를 학습합니다. 패치-패치 간 직접 비교 대신, 패치-proxy 간 거리 기반 학습을 통해 안정적인 metric space를 구성하고, intra-class compactness와 inter-pattern separability를 동시에 강화합니다.' },
          { title: 'Coreset 기반 정상 패치 메모리 구성', detail: '대규모 정상 패치 메모리를 그대로 사용하는 대신, 핵심 패치만을 선택하는 coreset 전략을 적용하여 메모리 효율성을 유지하면서도 정상 분포의 다양성을 보존합니다.' },
          { title: 'Precise Anomaly Scoring', detail: '테스트 이미지의 패치 특징을 proxy 및 coreset 메모리와 비교하여 anomaly score를 산출합니다. 미세한 텍스처 변화나 국소적 결함도 효과적으로 강조되도록 설계되었습니다.' }
        ],
        contributions: [
          'Patch-level anomaly localization 성능 향상을 위한 새로운 문제 설정 제안',
          'Proxy metric learning을 anomaly detection에 도입하여 기존 거리 기반 방법의 한계 극복',
          'Coreset 기반 메모리 압축과 성능의 균형을 달성하는 메모리 구성 전략 제시',
          '다양한 결함 유형과 해상도 환경에서 산업용 anomaly detection 데이터셋에서의 정밀 localization 성능 검증'
        ]
      },
      {
        id: 'cv-3',
        title: 'Detection and Defense: Student-Teacher Network for Adversarial Robustness',
        authors: 'Kyoungchan Park, Pilsung Kang*',
        year: 2024,
        venue: 'IEEE Access, 12, 82742-82752',
        description: '본 논문은 적대적 공격(adversarial attack)에 대한 신뢰성과 안전성을 보장하기 위해 학생-교사 네트워크(student-teacher network) 기반의 새로운 탐지 및 방어 방법을 제안합니다. 제안된 방법은 적대적 예제(adversarial examples, AEs)와 정상 예제(normal examples, NEs)를 구분하고, 방어 프로세스를 AEs에만 적용하여 NEs에 대한 분류 성능 저하를 최소화합니다.',
        figureUrl: '/papers/image 1.png',
        keywords: ['Student-Teacher Network', 'Adversarial Detection', 'Restoration Attack'],
        methodology: [
          { title: '학생-교사 네트워크를 통한 탐지 및 방어 통합', detail: '교사 네트워크(Teacher Network)는 분류기 역할을 하며, 학생 네트워크(Student Network)는 교사 네트워크의 왜곡되지 않은 숨겨진 계층(hidden layer) 특징을 예측하도록 학습합니다. 학생 네트워크와 교사 네트워크의 숨겨진 계층 특징 간의 차이를 기반으로 AEs를 탐지하고, AEs에 대해서는 학생 네트워크가 예측한 특징을 사용하여 올바른 분류 결과를 복구합니다.' },
          { title: '복원 공격(Restoration Attack) 기법 도입', detail: 'AEs에 대한 방어 성능을 향상시키기 위해 복원 공격이라는 사전 처리 기법을 도입합니다. 복원 공격은 학생 네트워크의 숨겨진 계층 특징을 왜곡된 교사 네트워크의 특징으로부터 멀어지게 하여 AEs의 올바른 분류 결과를 복구할 수 있게 합니다.' },
          { title: '광범위한 실험을 통한 성능 검증', detail: 'CIFAR-10, CIFAR-100, TinyImageNet 등의 대표적인 이미지 분류 데이터셋에서 실험을 수행하여 제안된 방법의 우수한 탐지 및 방어 성능을 입증합니다.' }
        ],
        contributions: [
          '탐지와 방어를 통합하여 적대적 공격 여부를 인식하고, 탐지된 AEs에 대해서만 방어 프로세스를 적용하여 NEs에 대한 분류 성능 저하를 방지하는 최초의 방법 제안',
          '복원 공격 기법을 통해 방어 성능을 추가적으로 개선하고, 완전한 화이트박스 공격(white-box attack)에서도 강력한 방어 성능 달성',
          '완전한 화이트박스 공격에서도 높은 탐지 및 방어 성능을 유지하여, 적대적 공격에 대한 강인성 확인',
          'CIFAR-10, CIFAR-100, TinyImageNet 등 다양한 데이터셋에서 기존의 최신 탐지 및 방어 방법과 비교하여 우수한 성능 입증'
        ]
      }
    ]
  },
  {
    id: 'timeseries',
    title: 'Time-Series (TS)',
    description: '시계열 데이터의 예측, 이상 탐지, 표현 학습을 통합한 고급 분석 기술을 개발합니다.',
    topics: [
      '시계열 예측 / 이상 탐지 / 표현 학습 (Forecasting / Anomaly Detection / Representation Learning)',
      '분포 변화 대응 (Shift-robust Adaptation)',
      '예지 보전 & 설명가능성 (Predictive Maintenance & Interpretability)'
    ],
    imageUrl: '/papers/TS_box.png',
    papers: [
      {
        id: 'ts-1',
        title: 'Granularity Fusion Transformer: Learning multi-granularity patterns for time-series forecasting',
        authors: 'Jinwoo Park, Hyeongwon Kang, Seunghun Han, Pilsung Kang*',
        year: 2025,
        venue: 'Knowledge-Based Systems',
        description: '본 논문에서는 시계열 예측을 위해 multi-granularity 패턴을 결합하는 Granularity Fusion Transformer (GFT)를 제안합니다. 이 방법은 시계열을 거친 추세(coarse)와 세밀한 변동(fine)으로 나누어 각각의 특성을 학습한 뒤, 두 정보를 효과적으로 융합해 예측 성능을 높이는 것을 목표합니다.',
        figureUrl: '/papers/image 2.png',
        keywords: ['Granularity Decomposition', 'Fine Pattern Enhancement', 'Cross-attention Fusion'],
        methodology: [
          { title: 'Granularity 분해 및 fine 패턴 강화', detail: '입력 시계열을 coarse(추세)와 fine(변동)으로 분해합니다. fine 성분은 반복되는 패턴을 더 잘 학습할 수 있도록 주기적 구조로 재구성하여, 단기 변동뿐 아니라 반복 구간에서의 패턴 변화까지 담는 표현을 학습합니다.' },
          { title: 'Coarse-fine 융합을 통한 예측', detail: 'coarse는 전체 맥락(큰 흐름)을 제공하고 fine은 세부 정보를 제공하도록 역할을 분리합니다. cross-attention 기반 융합 모듈로 두 표현을 결합해 통합 표현을 만들고, 이를 바탕으로 최종 예측을 수행합니다.' }
        ],
        contributions: [
          '추세와 변동을 분리, 학습, 융합하는 multi-granularity 기반 예측 구조를 제안하여 single-granularity 접근의 한계를 보완',
          'Fine 변동을 단순한 단기 변화로만 보지 않고, 주기적 반복 구조를 활용해 더 의미 있는 표현을 학습하도록 구성',
          '전역 패턴(coarse)과 국소 패턴(fine)이 상호보완적으로 작동하도록 cross-attention 기반 결합 구조를 설계',
          '여러 데이터 및 설정에서 제안 방법론의 실용성과 효과를 입증'
        ]
      },
      {
        id: 'ts-2',
        title: 'Multi-task Self-supervised Time-series Representation Learning',
        authors: 'Heejeong Choi, Pilsung Kang*',
        year: 2024,
        venue: 'Information Sciences',
        description: '본 논문에서는 시계열 데이터의 분석을 위해 다중 작업 자가 지도 학습(Multi-Task Self-Supervised Learning) 프레임워크를 제안합니다. 이 방법은 시계열 데이터의 다양한 일관성을 학습하여, 다양한 다운스트림 작업(예: 분류, 예측, 이상 탐지)에서 사용될 수 있는 일반적이고 강력한 데이터 표현을 학습합니다.',
        figureUrl: '/papers/image 3.png',
        keywords: ['Multi-task SSL', 'Contrastive Learning', 'Uncertainty Weighting'],
        methodology: [
          { title: '다중 작업 자가 지도 학습 프레임워크', detail: '시계열 데이터에서 맥락적 일관성 (Contextual Consistency), 시간적 일관성 (Temporal Consistency), 변환 일관성 (Transformation Consistency)을 통합하여 동시에 학습하는 프레임워크를 개발합니다. 세 가지 일관성에 기반한 대조 학습(Contrastive Learning)을 통해 다양한 시계열 데이터 특성을 포괄적으로 학습합니다.' },
          { title: '불확실성 가중 접근 (Uncertainty Weighting Approach)', detail: '여러 대조 손실 함수(Contrastive Loss)를 통합할 때 각 작업의 불확실성을 고려하여 최적화하는 방법을 도입하여, 다중 작업 학습의 효율성을 극대화합니다.' }
        ],
        contributions: [
          '시계열 데이터의 다양한 특성을 포괄적으로 학습하여 여러 다운스트림 작업에서 사용할 수 있는 일반적인 표현을 효과적으로 학습하는 새로운 자가 지도 학습 프레임워크 개발',
          '시계열 분류, 예측, 이상 탐지와 같은 다양한 작업에서 기존 벤치마크 모델들을 능가하는 성능 입증',
          '학습된 모델이 서로 다른 도메인 간에 효과적으로 전이될 수 있음을 실험적으로 확인하여 다양한 응용 가능성 제시',
          '불확실성 가중 접근의 도입으로 다양한 대조 학습의 손실을 균형 있게 최적화하여 학습 안정성 향상'
        ]
      },
      {
        id: 'ts-3',
        title: 'Transformer-based Multivariate Time Series Anomaly Detection using Inter-Variable Attention Mechanism',
        authors: 'Hyeongwon Kang, Pilsung Kang*',
        year: 2024,
        venue: 'Knowledge-Based Systems',
        description: '이 논문에서는 다변수 시계열 데이터의 이상 탐지를 위해 변수 간 주의 메커니즘을 사용하는 Transformer 기반의 새로운 방법론인 Variable Temporal Transformer (VTT)를 제안합니다. 이 모델은 Transformer의 셀프 어텐션 메커니즘을 활용하여 변수 간 상관관계와 시간적 의존성을 효과적으로 모델링하여 이상을 탐지합니다.',
        figureUrl: '/papers/image 4.png',
        keywords: ['Variable Temporal Transformer', 'Inter-Variable Attention', 'F1PA%K Metric'],
        methodology: [
          { title: 'Variable Temporal Transformer (VTT)', detail: 'Temporal Self-Attention과 Variable Self-Attention 메커니즘을 결합하여 다변수 시계열 데이터에서 변수 간 상관관계와 시간적 의존성을 동시에 고려할 수 있는 구조를 설계합니다. 기존 Transformer 모델의 한계인 변수 간 상관관계 학습 부족 문제를 해결합니다.' },
          { title: '재구성 기반 비지도 학습 모델', detail: '모델이 정상 데이터 분포를 학습하고, 이후 재구성된 데이터와의 차이를 통해 이상 점수를 계산하여 이상 탐지를 수행하는 비지도 학습 방식을 채택합니다.' },
          { title: 'F1PA%K 지표 사용', detail: '기존의 Point Adjustment F1 점수의 성능 과대평가 문제를 해결하기 위해 새로 제안된 평가 지표인 F1PA%K를 활용하여 모델 성능을 객관적으로 평가합니다.' }
        ],
        contributions: [
          '기존 Transformer의 시간적 의존성 학습 외에 변수 간의 상관관계를 고려하는 변수 주의 메커니즘 도입으로 이상 탐지 성능 향상',
          '추론 중 변수 간의 연관 가중치 변화를 추적하여 이상 발생 시점과 원인 변수를 정확히 추정할 수 있는 해석 가능한 모델 개발',
          '네 가지 실제 다변수 시계열 데이터셋에서 기존 비지도 학습 기반 이상 탐지 모델들을 능가하는 최첨단 성능 달성',
          '원 데이터와 재구성된 데이터의 어텐션 맵을 비교하여 이상 탐지 결과를 해석하고 이상 발생 원인을 설명할 수 있는 방법론 제공'
        ]
      }
    ]
  },
  {
    id: 'nlp',
    title: 'Natural Language Processing (NLP)',
    description: '대규모 언어 모델의 평가, 안전성, 추론 능력을 향상시키는 연구를 수행합니다.',
    topics: [
      'LLM 평가 및 정보 검색 (LLM Evaluation System & Information Retrieval)',
      'AI 안전성 (AI Safety)',
      'LLM 추론 (LLM Reasoning)'
    ],
    imageUrl: '/papers/NLP_box.png',
    papers: [
      {
        id: 'nlp-1',
        title: 'UFORank: Unified Framework of Unsupervised Keyphrase Extraction for Long Documents',
        authors: 'Doyoon Kim, Pilsung Kang*',
        year: 2026,
        venue: 'IEEE ACCESS',
        description: '본 논문은 긴 문서 내의 핵심 키워드를 추출하기 위해 핵심어구 추출 프레임워크를 제안합니다. 이 모델은 토픽 중요도, 문서 구조 내의 위치에 기반한 어구의 가중치, 어구-토픽 유사도를 모두 고려하여 문서의 핵심 내용을 나타내는 키프레이즈를 추출합니다.',
        figureUrl: '/papers/image 5.png',
        keywords: ['Topic Importance', 'Position-bias Weighting', 'BERT-flow/Glow'],
        methodology: [
          { title: '주제 중요도 고려', detail: '긴 문서 내에 포함되어 있는 다양한 주제를 식별하기 위해 후보 구절을 모아 주제의 중요성을 판단합니다.' },
          { title: '위치 편향 가중치 고려', detail: '문서 내에서 구절의 위치와 빈도를 모두 고려한 위치 편향 가중치를 사용합니다.' },
          { title: '후보 구 - 주제 간 유사도 평가', detail: '후보 구와 해당 주제 간의 의미적 관련성을 측정합니다.' },
          { title: 'BERT-flow의 Glow 모델 사용', detail: '뭉쳐있는 임베딩을 수학적 변환을 통해 표준 정규 분포로 바꾸는 과정을 거침으로써 구문과 문서 임베딩의 의미적 품질을 향상시킵니다.' }
        ],
        contributions: [
          '주제 중요도, 위치 편향 가중치, 후보 구-주제 간 유사도를 기반으로 긴 문서에 최적화된 unsupervised keyphrase 추출 프레임워크 제안',
          'SemEval2010, NUS, Krapivin을 포함한 긴 문서 데이터셋에서 공개된 최신 모델 대비 가장 우수한 성능 달성'
        ]
      },
      {
        id: 'nlp-2',
        title: 'CEREAL: personality-driven LLM-based conversational recommendation dataset with contextually-enriched and realistic user interactions',
        authors: 'Jiyoon Lee, Joonghoon Kim, Pilsung Kang*',
        year: 2026,
        venue: 'Multimedia Tools and Applications',
        description: '본 연구는 대화형 추천 시스템 학습을 위한 새로운 데이터셋인 CeReal을 제안합니다. CeReal 데이터셋은 영화 추천에 필요한 (1) 사용자 정보, (2) 동영상 정보, (3) 성격 정보를 포함하여 대화형 추천 시스템의 발전에 기여합니다.',
        figureUrl: '/papers/image 6.png',
        keywords: ['Big-5 Personality', 'Conversational Recommendation', 'LLM-based Response Generation'],
        methodology: [
          { title: '데이터셋 통합', detail: '실제 영화 시청기록 데이터와 평점, IMDb 메타데이터 중 완전한 데이터만을 추출하여 영화 도메인의 사용자 추천 시스템 데이터셋인 CeReal을 구축합니다.' },
          { title: '사용자 성격 분류', detail: '사용자의 성격을 5가지(개방성, 성실성, 외향성, 친화성, 신경증적)로 분류하여 사용자의 특성을 파악합니다.' },
          { title: 'LLM 기반 응답 생성', detail: '사용자의 영화 시청 기록 및 성격, 그리고 자연스러운 채팅을 위한 주제에서 벗어난 이야기 장려를 프롬프트에 반영하여 자연스러운 사용자 맞춤형 응답을 생성합니다.' }
        ],
        contributions: [
          '추천의 근거를 제시하여 추천 시스템에 대한 사용자의 신뢰도를 높임',
          '5가지 사용자 성격 특성을 기반으로 답변을 제공하여 사용자와 신뢰를 쌓고, 개인화된 추천에 대한 수용도를 높임',
          'LLM을 기반으로 자연스러운 대화를 생성하여 사용자가 추가적인 정보를 편안하게 공유하도록 유도'
        ]
      },
      {
        id: 'nlp-3',
        title: 'GETUSP: Goal-oriented topic modeling framework for unique selling point discovery',
        authors: 'Saeran Park, Snagmin Lee, Jiyoon Lee, Minjeoung Ma, Joonghoon Kim, Pilsung Kang*',
        year: 2026,
        venue: 'Journal of Retailing and Consumer Services',
        description: '이 논문은 제품의 고유한 강점(고유 판매 포인트, USP)을 고객에게 효과적으로 전달하기 위해 리뷰를 클러스터링하여 강점 후보를 추출하고, 이후 경쟁사와의 차별화를 반영해 후보를 정량적으로 평가하는 프레임워크를 제안합니다. 이는 소비자의 니즈에 부합하는 USP를 효과적으로 평가할 수 있도록 합니다.',
        figureUrl: '/papers/image 7.png',
        keywords: ['Goal-oriented Topic Modeling', 'Unique Selling Score', 'Consumer Review Analysis'],
        methodology: [
          { title: '주제 모델링 (Goal Oriented Topic Modeling)', detail: '리뷰를 클러스터링하여 해석이 가능한 문장으로 USP 후보를 선별합니다.' },
          { title: '고유 판매 점수 (Unique Selling Score) 기반 평가', detail: "USP 후보를 '고유 판매 점수' 척도를 활용해 소비자가 인식하는 제품의 강점과 경쟁사와의 차별점을 모두 고려하여 평가합니다." }
        ],
        contributions: [
          '기업과 소비자의 제품에 대한 인식 간극 원인을 규명하고, 소비자가 느끼는 제품의 핵심 가치를 정량화할 수 있는 기준 제시',
          '고객의 리뷰를 활용하여 소비자가 직접적으로 경험한 제품의 고유 강점을 차별성, 긍정성, 탁월성을 기준으로 자동 발굴하는 워크플로우를 제시하여 실무에서 활용 가능'
        ]
      }
    ]
  }
];

const applicationAreas: ApplicationArea[] = [
  {
    id: 'industrial-ai',
    title: 'Industrial AI',
    description: '산업인공지능(Industrial AI)은 제조 현장의 이상 탐지, 자율 제조, 피지컬 AI 등 실질적인 산업 문제를 데이터 기반으로 해결하는 연구를 수행합니다.',
    topics: [
      '산업 이상치 탐지 (Industrial Anomaly Detection)',
      '자율제조 (Autonomous Manufacturing)',
      '피지컬 AI (Physical AI)'
    ],
    papers: [
      {
        id: 'ind-1',
        title: 'Normalizing flow-based latent space mapping for implicit pattern authentication on mobile devices',
        authors: 'Jaehyuk Heo, Jeongseob Kim, Euisuk Chung, Subin Kim, Pilsung Kang, Donghwa Shin, Jinho Shin, Daehee Han*',
        year: 2025,
        venue: 'Applied Soft Computing, 169, 112469',
        description: '본 논문은 모바일 기기의 보안 강화를 위해 Normalizing Flow 를 활용하여 사용자별 잠재 공간 매핑 기반의 Behavior-based Authentication 방법론을 제안합니다. 특히, 기존 모델이 해결하기 어려웠던 랜덤 배치 PIN 패드 환경 상에서도 사용자의 고유 입력 패턴을 효과적으로 추출할 수 있습니다.',
        figureUrl: '/papers/image 11.png',
        keywords: ['Normalizing Flow', 'Latent Space Mapping', 'Behavior-based Authentication'],
        methodology: [
          { title: 'Normalizing flow 기반 잠재 공간 매핑', detail: '사용자들이 PIN 패드에 입력하는 복잡한 패턴을 단순한 분포 함수를 가진 잠재 공간으로 매핑합니다.' },
          { title: 'One-class classifier 로 사용자 분류', detail: 'k-NN, LOF, Forest, one-class SVM 모델을 사용하여 매핑되었던 잠재 공간을 기반으로 효과적으로 사용자를 인증합니다.' }
        ],
        contributions: [
          '무작위 PIN 패드 기반 사용자 인증 방식을 제안하여 고가의 생체 신호 장비 없이 개인의 특성을 잠재 공간에 매핑할 수 있는 방법론 도입',
          '단일 사용자와 여러 외부 침입자를 효과적으로 구분하는 단일 클래스 분류 프레임워크 제안',
          '모바일 뱅킹 서비스 사용자의 무작위 PIN 패드 패턴 데이터셋에서 우수한 성능 검증'
        ]
      },
      {
        id: 'ind-2',
        title: 'FINALE: Finance Domain Instruction-Tuning Dataset with High-Quality Rationales via Chain-of-Thought Prompting',
        authors: 'DSBA Lab',
        year: 2025,
        venue: 'Finance NLP',
        description: '본 논문은 금융 분야 언어모델의 답변 신뢰성을 높이기 위해 사고 사슬(CoT) 기반의 고품질 근거가 포함된 지시어 튜닝 데이터셋인 FINALE을 제안합니다. 이 데이터셋으로 학습된 모델은 기존 방식 대비 추론 성능과 사용자의 이해도를 높였습니다.',
        figureUrl: '/papers/image 12.png',
        keywords: ['Chain-of-Thought', 'Instruction Tuning', 'Finance NLP'],
        methodology: [
          { title: '고품질 시드 근거 생성', detail: 'LLM을 활용해 데이터 생성의 기준이 될 시드 데이터를 구축합니다. 데이터의 다양성과 품질을 기준으로 연구자가 검토 및 선별합니다.' },
          { title: 'Dynamically generating rationales', detail: '시드 데이터를 기반으로 Gemini-Pro를 활용해 근거 데이터셋을 생성합니다. 맥락과 지시어의 조합을 고려하여 작성한 프롬프트를 사용해 다양성을 확보합니다.' },
          { title: 'Quality Filtering', detail: '자동 필터링 기법을 통해 모델이 생성한 근거 내의 답변이 실제 정답과 완벽히 일치하는 고품질의 사례만을 최종 데이터셋으로 추출합니다.' }
        ],
        contributions: [
          '금융 도메인 LLM이 단순 정답을 넘어, 논리적 근거가 포함된 설명력 있는 답변을 생성하도록 학습시키는 고품질 근거 데이터셋 FINANCE 구축',
          '인간의 개입을 최소화하면서도 고품질 데이터를 대량으로 확보할 수 있는 효율적인 근거 생성 파이프라인 설계',
          'CoT를 활용하여 최종 답변의 정확도를 향상시키고, 금융 도메인에서의 CoT 학습이 성능 향상에 유효함을 최초로 입증',
          'Human Evaluation 결과, 기존 모델 대비 선호도 4배 향상으로 답변 신뢰성 증가를 입증'
        ]
      }
    ]
  },
  {
    id: 'agent',
    title: 'Agentic AI',
    description: 'Agentic AI는 단순한 데이터 처리를 넘어, 제조 현장의 복잡한 상황을 스스로 이해하고 최적의 대응책을 실행하는 \'현장 작업자 친화적\' 기술을 지향합니다. 파편화된 공정 데이터를 유기적으로 통합하고 지능적인 오케스트레이션을 통해 생산 현장의 자율성을 극대화합니다.',
    topics: [
      '데이터 분석 에이전트 (Data Analysis Agents)',
      'LLM 오케스트레이션 (LLM Orchestration)',
      '운영 에이전트 (Operational Agents)'
    ],
    figureUrl: '/papers/image 8.png',
    demoImages: [
      { title: '시연 예시', url: '/papers/agenteg.webp' }
    ],
    sections: [
      {
        title: '데이터 분석 에이전트 (Data Analysis Agents)',
        description: '제조 공정 전반의 데이터를 실시간으로 감시하고, 미래의 잠재적 위험을 선제적으로 파악합니다.',
        bullets: [
          '실시간 이상 징후 탐지: 공정 데이터 내의 미세한 변화를 실시간으로 포착하여 이상 상황 발생을 신속하게 식별',
          '멀티모달 통합 분석: 시계열, 이미지, 텍스트 등 제조 현장의 다양한 데이터를 통합적으로 처리하여 분석의 정밀도를 높임',
          '선제적 위험 예측: 현재의 공정 상태를 바탕으로 미래에 발생할 수 있는 품질 변동이나 장비 고장 가능성을 예측',
          '설명 가능한 분석 결과 제공: 인공지능이 특정 상황을 왜 위험으로 판단했는지 작업자가 이해할 수 있는 자연어 형태로 설명을 생성하여 신뢰성을 확보'
        ]
      },
      {
        title: 'LLM 오케스트레이션 (LLM Orchestration)',
        description: '다양한 에이전트들이 작업자의 의도에 맞춰 유기적으로 협력할 수 있도록 전체 과업을 조율합니다.',
        bullets: [
          '자연어 기반 과업 설계: 현장 작업자의 직관적인 질의를 분석하여 에이전트가 수행 가능한 구체적인 과업으로 변환',
          '에이전트 간 협업 최적화: 모니터링과 예측, 제어 등 각기 다른 역할을 가진 에이전트 간의 정보를 공유하고 작업 순서를 지능적으로 배분',
          '현장 제약 사항 및 선호도 반영: 공정의 물리적 제약 조건과 도메인 전문가의 숙련된 노하우를 의사결정 프로세스에 실시간으로 반영',
          '지능형 지식 활용: 사내 기술 문서나 과거 문제 해결 사례가 담긴 데이터베이스를 탐색하여 현재 상황에 가장 적합한 해결책을 찾아냄'
        ]
      },
      {
        title: '운영 에이전트 (Operational Agents)',
        description: '분석된 정보를 바탕으로 실제 공정 개선을 위한 최적의 액션을 제안하고 자율적인 제어를 수행합니다.',
        bullets: [
          '최적 제어 액션 생성: 공정 상태를 최적화하기 위한 구체적인 제어 변수를 산출하고 실행 가능한 액션 후보군을 제시',
          '자율적 의사결정 및 실행: 데이터 분석 결과와 환경 변화를 감지하여 인간의 개입을 최소화하면서도 안정적인 공정 운영을 실현',
          '안전성 및 규제 검증: 제안된 제어 액션이 장비의 한계를 초과하거나 안전 기준을 위배하지 않는지 시뮬레이션을 통해 사전에 검증',
          '물리 법칙 기반 신뢰성 확보: 실제 공정의 물리적 현상을 반영한 모델을 활용하여 모델의 판단이 현장 상황과 괴리되지 않도록 관리'
        ]
      }
    ]
  },
  {
    id: 'multimodal',
    title: 'Multimodal Model',
    description: '다양한 모달리티(비전, 시계열, 언어)를 통합하여 산업 환경에서의 복합적인 데이터를 이해하고 추론할 수 있는 멀티모달 모델을 개발합니다.',
    topics: [
      '비전/시계열-언어 모델 (Vision/Time-series-Language Model)',
      '멀티모달 추론 (Multimodal Reasoning)',
      '산업 통합 멀티모달 모델 (Unified Multimodal Foundation for Industry)'
    ],
    papers: [
      {
        id: 'mm-1',
        title: 'RobustMixGen: Data Augmentation for Enhancing Robustness of Visual-Language Models in the Presence of Distribution Shift',
        authors: 'Sunwoo Kim+, Hun Im+, Woojun Lee, Seonggye Lee, Pilsung Kang* (+: Equally contributed)',
        year: 2025,
        venue: 'Neurocomputing, 619, 129167',
        description: '본 논문은 분포 변화에 직면한 비전-언어 모델의 강인성을 향상시키기 위해 새로운 데이터 증강 기법인 RobustMixGen을 제안합니다. 이 기법은 이미지와 텍스트 콘텐츠를 동시에 고려하여 데이터 증강을 수행함으로써 기존의 MixGen 기법의 한계를 극복하고, 모델이 분포 변화와 노이즈에 더 강력하게 대처할 수 있도록 합니다.',
        figureUrl: '/papers/image 15.png',
        keywords: ['Visual-Language Model', 'Distribution Shift', 'Data Augmentation', 'RobustMixGen'],
        methodology: [
          { title: 'RobustMixGen 데이터 증강 기법 제안', detail: '객체와 배경을 사전에 분리하고, 이를 활용하여 이미지와 텍스트를 합성하는 새로운 데이터 증강 기법을 제안합니다. 이미지 합성을 위해 CutMixUp 방식을, 텍스트 합성을 위해 Conjunction Concat 방식을 도입하여 이미지와 텍스트 간의 의미적 관계를 유지합니다.' },
          { title: '모달리티 특화 고려', detail: '객체와 배경 클래스를 미리 분류하여, 이미지와 텍스트가 의미적으로 잘 맞도록 증강합니다. 이를 통해 모델이 잘못된 상관관계에 의존하지 않도록 유도합니다.' },
          { title: '성능 검증', detail: '이미지 검색 과제에서 기존 모델 대비 Recall@K 평균이 0.21% 향상되었음을 입증합니다. 분포 변화 시나리오 하에서는 이미지 및 텍스트 노이즈에 대해 각각 17.11%와 2.77%의 성능 향상을 보여 더 강력한 데이터 증강 기법임을 입증합니다.' }
        ],
        contributions: [
          '기존의 MixGen 기법이 가진 문제점(잘못된 상관관계)에 대응하여 이미지와 텍스트의 의미적 일치를 유지하는 새로운 멀티모달 데이터 증강 기법 제안',
          '이미지와 텍스트의 의미적 관계를 유지하여 모델이 잘못된 상관관계에 의존하는 것을 방지하고, 분포 변화에 대한 강인성을 크게 개선',
          '다양한 노이즈 유형(이미지와 텍스트) 하에서 기존 데이터 증강 방법보다 현저히 향상된 성능을 보이며, 실제 응용에 적합한 강력한 데이터 증강 기법으로서의 가능성을 확인'
        ]
      },
      {
        id: 'mm-2',
        title: 'Caption Re-ranking Evaluation Using Ensembled CLIP and Consensus Scores',
        authors: 'Kiyoon Jeong, Woojun Lee, Woongchan Nam, Minjeong Ma, Pilsung Kang*',
        year: 2024,
        venue: '(1st prize) Caption Re-ranking Topic, NICE Workshop, CVPR',
        description: '본 논문은 이미지 캡션의 정확성과 표현력을 평가하고 순위를 매기기 위한 새로운 프레임워크인 ECO(Ensembled CLIP and Consensus Scores)를 제안합니다. ECO는 이미지와 캡션 사이의 의미적 일치도와 캡션의 필수성을 동시에 고려하여 가장 적합한 캡션을 선택하는 방법론입니다. 이 프레임워크는 CVPR 2024의 NICE Challenge에서 우수한 성과를 보였습니다.',
        figureUrl: '/papers/image 16.png',
        keywords: ['Caption Re-ranking', 'Ensembled CLIP', 'Consensus Score', 'ECO Framework'],
        methodology: [
          { title: 'ECO 프레임워크 구성', detail: 'Ensembled CLIP Score: 다양한 사전 학습된 CLIP 모델을 사용하여 이미지와 캡션 간의 코사인 유사도를 계산하고, 이를 결합하여 보다 견고한 의미적 일치 점수를 생성합니다. Consensus Score: 캡션 후보군 내에서 자주 사용되는 필수 표현을 측정하여, 필수적인 표현만을 포함하는 캡션을 선택하도록 유도합니다.' },
          { title: '캡션 필터링 기법 적용', detail: '두 가지 필터(형식 필터 및 ITM 필터)를 적용하여 품질이 낮거나 이미지와 관련이 적은 캡션을 걸러내고, 높은 품질의 캡션만을 평가 대상으로 삼습니다.' },
          { title: '최종 캡션 선택', detail: '종합 점수를 기반으로 최적의 캡션을 선택하며, 상위 두 캡션 간 점수 차이가 작을 경우 더 짧은 캡션을 최종 선택합니다.' }
        ],
        contributions: [
          'ECO는 이미지-캡션의 의미적 일치도와 필수성을 모두 반영하여 다양한 기준에서 우수한 캡션을 선택할 수 있는 통합된 캡션 평가 프레임워크 제안',
          'CIDEr, SPICE, METEOR, ROUGE-L, BLEU 등의 다양한 평가 지표에서 상위 성적을 기록하며 NICE Challenge에서 성과 입증',
          'ITM 필터와 형식 필터를 도입하여 캡션 후보군의 품질을 높이고, 보다 신뢰할 수 있는 평가 결과 도출',
          '최종 점수가 비슷한 경우 더 짧은 캡션을 선택함으로써, 간결하고 필수적인 표현을 강조하는 효과적인 캡션 선택 전략 개발'
        ]
      }
    ]
  },
  {
    id: 'efficient-ai',
    title: 'Efficient AI',
    description: '경량화, 효율적 추론, 확장 가능한 AI 시스템을 통해 실제 배포 환경에서의 성능과 효율성을 동시에 달성하는 연구를 수행합니다.',
    topics: [
      '경량 모델링 (Light-weight Deep Learning)',
      '효율적 추론 (Efficient Inference)',
      '확장 및 배포 가능한 AI (Scalable & Deployable AI)'
    ],
    papers: [
      {
        id: 'eff-1',
        title: 'Memory Bank-Guided Diffusion Model for Lightweight Anomaly Detection',
        authors: 'Woojun Lee, Pilsung Kang',
        year: 2026,
        venue: 'Applied Soft Computing, 186, 114215',
        description: '본 논문에서는 기존 diffusion 기반 anomaly detection 방법들이 높은 연산 비용과 무거운 모델 구조로 인해 실제 적용이 어렵다는 한계를 지적하고, 이를 해결하기 위해 memory bank로 diffusion 과정을 유도하는 lightweight anomaly detection 프레임워크를 제안합니다. 정상 패턴 정보를 메모리 뱅크에 압축 저장하고, 이를 diffusion 모델의 생성 과정에 활용함으로써 효율적이면서도 정확한 이상 탐지를 합니다.',
        figureUrl: '/papers/image 13.png',
        keywords: ['Memory Bank', 'Diffusion Model', 'Lightweight Anomaly Detection'],
        methodology: [
          { title: 'Diffusion-based Anomaly Detection의 한계 분석', detail: '고품질 복원을 위해 많은 diffusion step과 대규모 네트워크가 필요함을 지적하고, 실제 산업 환경에서의 실시간성·경량화 요구와의 괴리 문제를 제시합니다.' },
          { title: 'Memory Bank 구성', detail: '정상 이미지에서 추출한 핵심 특징을 memory bank에 저장합니다. 정상 데이터 분포의 대표 패턴만을 유지하여 계산 효율성을 확보합니다.' },
          { title: 'Memory Bank-Guided Diffusion', detail: 'diffusion 복원 과정에서 완전히 무작위 노이즈 제거가 아닌, memory bank의 정상 특징을 가이드로 활용합니다. 정상 패턴 방향으로의 복원을 유도하여 diffusion step 수를 크게 감소시킵니다.' },
          { title: 'Lightweight Anomaly Scoring', detail: '복원된 이미지와 입력 이미지 간 차이를 기반으로 anomaly score를 산출합니다. 메모리 기반 가이던스를 통해 작은 결함도 안정적으로 강조합니다.' }
        ],
        contributions: [
          'memory bank를 활용해 diffusion 모델의 계산 비용을 효과적으로 감소시킨 경량화 anomaly detection 프레임워크 제안',
          '생성 모델과 메모리 기반 방법의 장점을 결합한 Memory-guided diffusion이라는 새로운 결합 방식 제시',
          '연산량을 크게 줄이면서도 기존 diffusion 기반 방법과 경쟁력 있는 성능을 확보하여 실제 적용을 고려한 효율-성능 균형 달성',
          '다양한 산업용 anomaly detection 데이터셋에서 정확도뿐 아니라 경량성 측면에서의 실용성 입증'
        ]
      },
      {
        id: 'eff-2',
        title: 'COUNTDOWN: Contextually Sparse Activation Filtering Out Unnecessary Weights in Down Projection',
        authors: 'Jaewon Cheon, Pilsung Kang',
        year: 2025,
        venue: 'EMNLP 2025 Main paper',
        description: '본 논문에서는 대형 언어 모델(LLM)의 Feed-Forward Network 출력을 down projection에서 여러 성분의 결합으로 생성되는 구조로 재해석합니다. 이를 통해, 최종 출력에 실제로 기여하는 성분만 선택적으로 계산하는 COUNTDOWN 프레임워크를 제안합니다. 제안 방법론은 실용성과 정확도에 따라 M-COUNTDOWN과 D-COUNTDOWN로 나뉘며, 연산량을 크게 줄이면서도 성능을 안정적으로 유지합니다.',
        figureUrl: '/papers/image 14.png',
        keywords: ['Sparse Activation', 'FFN Efficiency', 'LLM Inference'],
        methodology: [
          { title: '기존 Sparse Activation의 한계 분석', detail: 'Gated-MLP에서는 게이트 값이 작다고 해서 해당 뉴런의 기여도가 작다고 할 수 없으며, 기존 방식(CATS)의 선택 기준이 부정확해질 수 있음을 지적합니다.' },
          { title: '출력 기여도 기반 선택 (COUNTDOWN)', detail: 'FFN을 최종 출력에 대한 각 성분의 기여 관점에서 해석하고, 기여도가 큰 성분만 선택적으로 계산하도록 설계합니다.' },
          { title: 'M-COUNTDOWN (실용형)', detail: '비교적 쉽게 얻을 수 있는 신호를 이용해 계산할 대상을 선택하는 방식으로, 추가적인 Predictor 없이 적용 가능합니다.' },
          { title: 'D-COUNTDOWN (정확도형)', detail: '정확한 선택을 목표하는 방식으로, 높은 연산 비용을 줄이기 위해 입력 기반으로 선택 대상을 예측하는 소형 Predictor를 학습하여 근사합니다.' },
          { title: '실제 추론 속도까지 고려한 구현', detail: '연산량 감소가 실제 속도 향상으로 이어지도록 Triton 기반 전용 커널 최적화를 제시합니다.' }
        ],
        contributions: [
          'Activation 크기 대신 최종 출력 기여도를 기준으로 비활성화 대상을 정의하는 새로운 sparse FFN 관점 제시',
          '별도의 Predictor 없이 바로 적용 가능한 실용형(M-COUNTDOWN)과, 소형 Predictor를 통해 보다 정확한 선택을 수행하는 정확도형(D-COUNTDOWN) 함께 제안',
          '이상적인 조건에서 FFN 연산을 최대 90%까지 절감해도 성능 저하가 제한적임을 실험적으로 입증',
          '단순한 FLOPs 절감에 그치지 않고, 실제 추론 환경에서의 속도 향상을 목표로 Triton 기반 커널 최적화를 구현하여 시스템 관점의 실용성 확보'
        ]
      }
    ]
  }
];

function ResearchCard({ topic, selectedPaperId, onSelectPaper }: {
  topic: ResearchTopic;
  selectedPaperId: string | null;
  onSelectPaper: (id: string | null) => void;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    const el = document.getElementById(`card-${topic.id}`);
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [topic.id]);

  return (
    <div
      id={`card-${topic.id}`}
      className={`rounded-lg border border-border bg-card overflow-hidden transition-all duration-700 flex flex-col ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {/* Image */}
      <div className="w-full bg-white">
        <img src={topic.imageUrl} alt={topic.title} className="w-full h-auto object-contain" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-2xl font-bold text-foreground mb-2 tracking-tight">{topic.title}</h3>
        <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{topic.description}</p>

        {/* Sub-topics */}
        <ul className="space-y-2.5 mb-4">
          {topic.topics.map((t, i) => {
            const match = t.match(/^(.+?)\s*\((.+)\)$/);
            const korean = match ? match[1] : t;
            const english = match ? match[2] : null;
            return (
              <li key={i} className="flex items-start gap-2">
                <span className="text-slate-800 font-bold mt-0.5 shrink-0">▪</span>
                <div>
                  <p className="text-sm font-medium text-foreground leading-snug">{korean}</p>
                  {english && (
                    <p className="text-xs text-muted-foreground mt-0.5 pl-2">{english}</p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>

        {/* Paper List */}
        <div className="mt-auto border-t border-border pt-3">
          <p className="text-xs font-semibold text-muted-foreground mb-2">Publications</p>
          <div className="space-y-1">
            {topic.papers.map((paper) => {
              const isSelected = selectedPaperId === paper.id;
              return (
                <button
                  key={paper.id}
                  onClick={() => onSelectPaper(isSelected ? null : paper.id)}
                  className={`w-full text-left px-3 py-2 rounded transition-all duration-200 ${
                    isSelected
                      ? 'bg-slate-900 text-white'
                      : 'hover:bg-slate-100 text-foreground'
                  }`}
                >
                  <p className="text-sm font-medium leading-snug line-clamp-2">{paper.title}</p>
                  <p className={`text-xs mt-0.5 ${isSelected ? 'text-slate-300' : 'text-muted-foreground'}`}>
                    {paper.year} · {paper.venue.split(',')[0]}
                  </p>
                  <p className={`text-xs mt-0.5 ${isSelected ? 'text-slate-400' : 'text-blue-600/70'}`}>
                    {paper.authors}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function ApplicationDetailPanel({ area }: { area: ApplicationArea }) {
  return (
    <div className="mt-8 rounded-lg border border-slate-900 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
      {/* Overview header area */}
      <div className="p-6 bg-slate-200">
        <h3 className="text-lg font-extrabold text-foreground mb-1 tracking-tight">{area.title}</h3>
        <p className="text-sm text-foreground leading-relaxed mb-4">{area.description}</p>

        {/* Sub-topics */}
        <div className="flex flex-wrap gap-2">
          {area.topics.map((t, i) => (
            <span key={i} className="px-2 py-0.5 text-xs bg-white/70 text-slate-700 rounded">{t}</span>
          ))}
        </div>
      </div>

      {/* Detailed content area */}
      <div className="p-6 bg-slate-50">

      {/* Overview Figure */}
      {area.figureUrl && (
        <div className="max-w-2xl mx-auto rounded-lg overflow-hidden border border-border bg-white mb-6">
          <img src={area.figureUrl} alt={area.title} className="w-full h-auto object-contain" />
        </div>
      )}

      {/* Sections (for Agentic AI style) */}
      {area.sections && area.sections.length > 0 && (
        <div className="space-y-5 mb-6">
          {area.sections.map((sec, i) => (
            <div key={i} className="pl-4 border-l-2 border-slate-300">
              <p className="text-sm font-semibold text-foreground mb-1">{sec.title}</p>
              <p className="text-sm text-muted-foreground mb-2">{sec.description}</p>
              <ul className="space-y-1.5">
                {sec.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                    <span className="text-slate-800 font-bold mt-0.5 shrink-0">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Demo Images (for Agentic AI demo examples) */}
      {area.demoImages && area.demoImages.length > 0 && (
        <div className="space-y-6 mb-6">
          {area.demoImages.map((demo, idx) => (
            <div key={idx} className="max-w-2xl mx-auto">
              <h4 className="text-sm font-bold text-foreground mb-3">{demo.title}</h4>
              <div className="rounded-lg overflow-hidden border border-border bg-white">
                <img src={demo.url} alt={demo.title} className="w-full h-auto object-contain" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Papers */}
      {area.papers && area.papers.length > 0 && (
        <div className="space-y-8">
          {area.papers.map((paper, idx) => (
            <div key={paper.id} className={idx > 0 ? 'border-t border-slate-200 pt-6' : ''}>
              <h4 className="text-sm font-bold text-foreground mb-1 tracking-tight">{paper.title}</h4>
              <p className="text-xs text-muted-foreground mb-3">
                {paper.authors} · {paper.venue} ({paper.year})
              </p>
              <p className="text-sm text-foreground leading-relaxed mb-4">{paper.description}</p>

              {paper.keywords && paper.keywords.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {paper.keywords.map((kw, i) => (
                    <span key={i} className="px-2 py-0.5 text-xs bg-slate-200 text-slate-700 rounded">{kw}</span>
                  ))}
                </div>
              )}

              {paper.figureUrl && (
                <div className="max-w-2xl mx-auto rounded-lg overflow-hidden border border-border bg-white mb-6">
                  <img src={paper.figureUrl} alt={paper.title} className="w-full h-auto object-contain" />
                </div>
              )}

              {paper.methodology && paper.methodology.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">방법론 설명</h4>
                  <div className="space-y-3">
                    {paper.methodology.map((m, i) => (
                      <div key={i} className="pl-4 border-l-2 border-slate-300">
                        <p className="text-sm font-semibold text-foreground mb-1">{m.title}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{m.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {paper.contributions && paper.contributions.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">주요 기여</h4>
                  <ul className="space-y-2">
                    {paper.contributions.map((c, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                        <span className="text-slate-800 font-bold mt-0.5 shrink-0">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      </div>
    </div>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<'research' | 'applications'>('research');
  const [selectedPaperId, setSelectedPaperId] = useState<string | null>(null);
  const [selectedAppId, setSelectedAppId] = useState<string | null>(null);

  const allPapers = researchTopics.flatMap(t => t.papers);
  const selectedPaper = allPapers.find(p => p.id === selectedPaperId);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container py-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-extrabold text-foreground tracking-tight">SNU DSBA Lab</h1>
              <p className="text-sm text-muted-foreground mt-1 tracking-wide">Data Science & Business Analytics</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-foreground">Seoul National University</p>
              <p className="text-xs text-muted-foreground">Department of Industrial Engineering</p>
            </div>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="flex w-full">
        <button
          onClick={() => setActiveTab('research')}
          className={`w-1/2 py-5 text-lg font-bold tracking-tight transition-all duration-300 ${
            activeTab === 'research'
              ? 'bg-slate-900 text-white'
              : 'bg-slate-100 text-slate-400 hover:bg-slate-200 hover:text-slate-500'
          }`}
        >
          Research Topics
        </button>
        <button
          onClick={() => setActiveTab('applications')}
          className={`w-1/2 py-5 text-lg font-bold tracking-tight transition-all duration-300 ${
            activeTab === 'applications'
              ? 'bg-slate-900 text-white'
              : 'bg-slate-100 text-slate-400 hover:bg-slate-200 hover:text-slate-500'
          }`}
        >
          Applications & Research Directions
        </button>
      </nav>

      {/* Main Content */}
      <main className="container py-12">
        {activeTab === 'research' && (
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-2 tracking-tight">Research Topics</h2>
            <p className="text-sm text-muted-foreground mb-10">
              데이터 기반의 지능형 알고리즘 개발을 통해 산업 문제를 해결하고, 신뢰할 수 있는 AI 기술의 미래를 만들어갑니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {researchTopics.map((topic) => (
                <ResearchCard
                  key={topic.id}
                  topic={topic}
                  selectedPaperId={selectedPaperId}
                  onSelectPaper={setSelectedPaperId}
                />
              ))}
            </div>

            {/* Selected Paper Detail - Full Width Below Grid */}
            {selectedPaper && (
              <div className="mt-8 p-6 rounded-lg border border-slate-900 bg-slate-50 animate-in fade-in slide-in-from-top-2 duration-300">
                <h3 className="text-lg font-extrabold text-foreground mb-1 tracking-tight">
                  {selectedPaper.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-4">
                  {selectedPaper.authors} · {selectedPaper.venue} ({selectedPaper.year})
                </p>
                <p className="text-sm text-foreground leading-relaxed mb-4">
                  {selectedPaper.description}
                </p>

                {selectedPaper.keywords && selectedPaper.keywords.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedPaper.keywords.map((kw, i) => (
                      <span key={i} className="px-2 py-0.5 text-xs bg-slate-200 text-slate-700 rounded">
                        {kw}
                      </span>
                    ))}
                  </div>
                )}

                {selectedPaper.figureUrl && (
                  <div className="max-w-2xl mx-auto rounded-lg overflow-hidden border border-border bg-white mb-6">
                    <img
                      src={selectedPaper.figureUrl}
                      alt={`Figure: ${selectedPaper.title}`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                )}

                {/* Methodology */}
                {selectedPaper.methodology && selectedPaper.methodology.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">방법론 설명</h4>
                    <div className="space-y-3">
                      {selectedPaper.methodology.map((m, i) => (
                        <div key={i} className="pl-4 border-l-2 border-slate-300">
                          <p className="text-sm font-semibold text-foreground mb-1">{m.title}</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{m.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Contributions */}
                {selectedPaper.contributions && selectedPaper.contributions.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">주요 기여</h4>
                    <ul className="space-y-2">
                      {selectedPaper.contributions.map((c, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                          <span className="text-slate-800 font-bold mt-0.5 shrink-0">•</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </section>
        )}

        {activeTab === 'applications' && (
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-2 tracking-tight">
              Applications & Research Directions
            </h2>
            <p className="text-sm text-muted-foreground mb-10">
              우리 연구실은 다양한 산업 분야에 AI 기술을 적용하고 있으며, 향후 확장 방향을 지속적으로 모색하고 있습니다.
            </p>

            {/* 4-column Area Selector */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {applicationAreas.map((area) => {
                const isSelected = selectedAppId === area.id;
                const emojiMap: Record<string, string> = {
                  'industrial-ai': '🏭',
                  'agent': '🧠',
                  'multimodal': '🎨',
                  'efficient-ai': '⚡',
                };
                return (
                  <button
                    key={area.id}
                    onClick={() => setSelectedAppId(isSelected ? null : area.id)}
                    className={`text-left p-5 rounded-lg border transition-all duration-300 flex flex-col ${
                      isSelected
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-card border-border hover:bg-slate-100'
                    }`}
                  >
                    <h3 className={`text-sm font-bold mb-2 tracking-tight ${isSelected ? 'text-white' : 'text-foreground'}`}>
                      {emojiMap[area.id] || ''} {area.title}
                    </h3>
                    <ul className="space-y-1 mt-auto">
                      {area.topics.map((t, i) => (
                        <li key={i} className={`text-xs leading-snug flex items-start gap-1.5 ${isSelected ? 'text-slate-300' : 'text-muted-foreground'}`}>
                          <span className="shrink-0 mt-0.5">▪</span>
                          <span>{t.split('(')[0].trim()}</span>
                        </li>
                      ))}
                    </ul>
                  </button>
                );
              })}
            </div>

            {/* Selected Area Detail */}
            {selectedAppId && (
              <ApplicationDetailPanel area={applicationAreas.find(a => a.id === selectedAppId)!} />
            )}
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-16">
        <div className="container py-8">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-bold text-foreground mb-2 tracking-tight">Research Lab</h3>
              <p className="text-xs text-muted-foreground">Data Science & Business Analytics Lab</p>
              <p className="text-xs text-muted-foreground">Seoul National University</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground mb-2 tracking-tight">Research Areas</h3>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>Computer Vision</li>
                <li>Time-Series Analysis</li>
                <li>Natural Language Processing</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-6 pt-6 text-xs text-muted-foreground">
            <p>&copy; 2026 SNU DSBA Lab. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
