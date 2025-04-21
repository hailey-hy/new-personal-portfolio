export interface ProjectType {
  title: string;
  subTitle: string;
  period: string;
  aboutProject: string;
  mainRole: string[];
  performance: string[];
  usedSkills: string[];
}

export const PROJECTS: ProjectType[] = [
  {
    title: "[사이드 프로젝트] 레코듀 서비스 고도화",
    period: "2024.12 ~ 현재",
    subTitle: "SEO 최적화와 Next.js 마이그레이션, 배포 인프라 구축",
    aboutProject:
      "기존 CSR(클라이언트 사이드 렌더링) 기반 웹사이트를 Next.js 14로 전환하여, SEO 최적화 및 초기 로딩 속도 개선을 목표로 진행한 프로젝트입니다.",
    mainRole: [
      "기존 React 프로젝트를 Next.js 14로 마이그레이션",
      "S3+CloudFront를 통한 정적 파일 배포 인프라 구축",
      "AWS Amplify를 활용하여 브랜치별 자동 미리보기 환경 구축 및 Github Actions를 통한 배포 자동화",
      "SSR 적용으로 초기 페이지 로딩 성능 약 30% 개선",
      "메타태그 동적 생성 및 OG 태그 삽입으로 검색 최적화 구현",
    ],
    performance: [
      "SEO 최적화 후 검색 키워드 노출 확인",
      "초기 로딩 속도 개선 (Lighthouse 기준, FCP 30% 향상)",
    ],
    usedSkills: ["Next.js 14", "React.js", "AWS Amplify", "GitHub Actions"],
  },
];
