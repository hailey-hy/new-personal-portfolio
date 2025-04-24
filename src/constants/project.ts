export interface ProjectType {
  subject: "사이드" | "회사";
  title: string;
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
    title: "AI 연동 스레드 콘텐츠 제작 서비스 개발",
    subTitle: "디자인 시스템 구축 및 테스트 자동화 기반의 품질 개선",
    period: "2024.04 ~ 진행중",
    goal: "생성형 AI를 활용해 자동으로 콘텐츠를 제작하는 시스템 구축",
    mainRole: [
      "Storybook 기반 디자인 시스템 구축",
      "Playwright E2E 테스트 자동화 도입",
    ],
    performance: ["UI 일관성 확보 및 생산성 향상", "품질 관리 체계 마련"],
    usedSkills: [
      "Next.js 14",
      "React.js",
      "TypeScript",
      "Storybook",
      "Playwright",
      "Styled-components",
    ],
    insight: [
      "빠른 개발만큼 중요한 것은 코드 품질 관리와 시스템 일관성이라는 걸 체감했습니다.",
      "디자인 시스템과 테스트 자동화는 개발 속도뿐 아니라 서비스 확장성과 유지보수성에 직결된다는 것을 경험했습니다.",
    ],
  },
  {
    subject: "사이드",
    id: "pocket-prompt",
    title: "생성형 AI 프롬프트 저장 및 실행 서비스 개발",
    subTitle: "Next.js 14 기반 SSR 전환 및 SEO 최적화, 배포 자동화 구축",
    period: "2023.12 ~ 2024.03",
    goal: "사용자가 원하는 프롬프트를 쉽게 저장하고 추천받을 수 있는 플랫폼 구축",
    mainRole: [
      "Next.js 14 기반 SSR 전환 및 SEO 최적화",
      "AWS Amplify 기반 CI/CD 구축",
      "반응형 UI 개발",
    ],
    performance: [
      "SNS 공유 최적화로 사용자 3,100명, 유료 결제자 10명 이상 확보",
      "배포 효율화",
    ],
    usedSkills: [
      "Next.js 14",
      "React.js",
      "TypeScript",
      "AWS Amplify",
      "GitHub Actions",
    ],
    insight: [
      "단순 기능 구현이 아니라, 검색 최적화/퍼포먼스 개선이 사용자 경험에 직결된다는 것을 체감했습니다.",
      "초기 개발 단계부터 운영성과를 고려한 설계(SEO, SNS OG 최적화, 배포 자동화)가 중요하다는 인사이트를 얻었습니다.",
    ],
  },
  {
    subject: "회사",
    id: "talk",
    title: "티맥스와플 TALK 실시간 메신저 개발",
    subTitle: "WebSocket 기반 실시간 채팅 시스템 및 iframe 통합 구조 설계",
    period: "2022.07 ~ 2023.12",
    goal: "대규모 사용자를 대상으로 실시간 메신저 서비스 구축",
    mainRole: [
      "WebSocket 기반 실시간 채팅 기능 개발",
      "iframe 통합 아키텍처 설계",
      "모듈화 및 라이브러리화",
    ],
    performance: ["안정적인 실시간 통신 구축", "통합 서비스 구조 확립"],
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
