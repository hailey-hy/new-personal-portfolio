export interface ProjectType {
  subject: "사이드" | "회사";
  title: string;
  link?: string;
  github?: string;
  id: string;
  subTitle: string;
  period: string;
  goal: string;
  mainRole: string[];
  performance: string[];
  usedSkills: string[];
  insight: string[];
}

export const PROJECTS: ProjectType[] = [
  {
    subject: "사이드",
    id: "sigmine",
    title: "시그마인",
    subTitle: "AI 연동 마케팅 콘텐츠 제작 서비스 (B2B)",
    period: "2024.04 ~ 진행중",
    goal: "생성형 AI를 활용해 자동으로 콘텐츠를 제작하는 시스템 구축",
    mainRole: [
      "공통 UI 추출하여 Storybook 기반 디자인 시스템 구축 및 적용",
      "Playwright E2E 테스트 자동화 도입",
    ],
    performance: ["PoC 단계에서 핵심 기능 검증 및 테스트 완료"],
    usedSkills: [
      "Next.js 14",
      "React.js",
      "TypeScript",
      "Recoil",
      "TanStack-Query",
      "Styled-components",
      "Storybook",
      "Playwright",
      "AWS Amplify",
    ],
    insight: [
      "빠른 개발만큼 중요한 것은 코드 품질 관리와 시스템 일관성이라는 걸 체감했습니다.",
      "디자인 시스템과 테스트 자동화는 개발 속도뿐 아니라 서비스 확장성과 유지보수성에 직결된다는 것을 경험했습니다.",
    ],
    link: "https://sigmine.ai/",
    github: "https://github.com/ai-surfers/sigmine-ai-frontend",
  },
  {
    subject: "사이드",
    id: "pocket-prompt",
    title: "포켓 프롬프트",
    subTitle: "생성형 AI 프롬프트 저장 및 실행 서비스 (B2C)",
    period: "2023.12 ~ 2024.03",
    goal: "사용자가 원하는 프롬프트를 쉽게 저장하고 추천받을 수 있는 플랫폼 구축",
    mainRole: [
      "SEO 개선을 위한 Next.js 14 기반 SSR 전환",
      "Github Actions, AWS Amplify 기반 CI/CD 구축",
      "반응형 UI 개발",
    ],
    performance: [
      "현재 라이브 운영 중이며, 실제 사용자 반응 기반 유지보수 진행 중",
      "사용자 3,100명, 유료 결제자 10명 이상 확보",
    ],
    usedSkills: [
      "Next.js 14",
      "React.js",
      "TypeScript",
      "Recoil",
      "TanStack-Query",
      "React-hook-form",
      "Styled-components",
      "AWS Amplify",
      "GitHub Actions",
    ],
    insight: [
      "단순 기능 구현이 아니라, 검색 최적화/퍼포먼스 개선이 사용자 경험에 직결된다는 것을 체감했습니다.",
      "초기 개발 단계부터 운영성과를 고려한 설계(SEO, SNS OG 최적화, 배포 자동화)가 중요하다는 인사이트를 얻었습니다.",
    ],
    link: "https://pocket-prompt.com",
    github: "https://github.com/ai-surfers/pocket-prompt-frontend",
  },
  {
    subject: "회사",
    id: "talk",
    title: "TALK",
    subTitle: "업무용 실시간 채팅 서비스 개발",
    period: "2022.07 ~ 2023.12",
    goal: "대규모 사용자를 대상으로 실시간 메신저 서비스 구축",
    mainRole: [
      "WebSocket 기반 실시간 채팅 기능 및 투표, 공지 기능 개발",
      "iframe 앱간 연계 기능 개발",
      "npm 라이브러리화",
    ],
    performance: ["서울시교육청, 육군본부 등에 납품 완료 및 유지보수 진행"],
    usedSkills: [
      "React.js",
      "TypeScript",
      "MobX",
      "WebSocket",
      "Styled-components",
    ],
    insight: [
      "대규모 팀 협업 속에서는 개인 역량뿐 아니라 프로세스와 커뮤니케이션 능력이 서비스 품질에 직결된다는 걸 배웠습니다.",
      "실시간 통신 서비스는 초기 설계 단계에서 확장성과 복잡도를 예측하고 설계하는 것이 매우 중요하다는 걸 경험했습니다.",
    ],
  },
];
