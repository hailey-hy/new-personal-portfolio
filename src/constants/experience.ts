export interface ExperienceType {
  title: string;
  period: string;
  description: string[];
}

// Experience
export const EXPERIENCES: ExperienceType[] = [
  {
    title: "티맥스와플",
    period: "2022.07 ~ 2023.12 | 1년 5개월",
    description: [
      "대규모 협업 환경에서 실시간 메신저 서비스 개발",
      "WebSocket 기반 통신 기능 및 구조 설계",
      "iframe 통합 구조 기반 시스템 개발 및 통합 적용",
    ],
  },
  {
    title: "사이드 프로젝트",
    period: "2023.12 ~ 진행중",
    description: [
      "생성형 AI 프롬프트 저장 및 추천 서비스 개발",
      "Next.js 14 기반 SSR 전환 및 SEO 최적화",
      "AWS Amplify 및 GitHub Actions 기반 CI/CD 구축",
      "디자인 시스템 구축 및 테스트 자동화 도입",
    ],
  },
];
