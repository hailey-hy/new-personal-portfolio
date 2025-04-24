import { ReactNode } from "react";
import { RiArrowRightDownFill } from "react-icons/ri";
import { Link as ScrollLink, LinkProps } from "react-scroll";

export interface ExperienceType {
  title: string;
  period: string;
  role: string;
  link?: string;
  description: ReactNode[];
}
const Link = ScrollLink as unknown as React.FC<LinkProps>;
// Experience
export const EXPERIENCES: ExperienceType[] = [
  {
    title: "티맥스와플",
    period: "2022.07 ~ 2023.12 | 1년 5개월",
    role: "프론트엔드 팀원",
    link: "https://www.tmax.co.kr/tmaxwapl",
    description: [
      <>
        업무용 협업툴을 제작하는 회사에서 실시간 채팅 서비스
        <Link
          to="talk"
          smooth={true}
          offset={-100}
          duration={600}
          className="flex items-center gap-[1px] text-indigo-400 cursor-pointer"
        >
          TALK <RiArrowRightDownFill className="text-indigo-400" size={14} />
        </Link>
        를 개발했습니다.
      </>,
      "기획자, 백엔드 개발자, QA 엔지니어들과 함께 대규모 협업을 경험했습니다.",
    ],
  },
  {
    title: "시그마인",
    period: "2023.12 ~ 진행중",
    role: "프론트엔드 리드",
    description: [
      "AI를 기반으로 여러 서비스를 제작하는 사이드 프로젝트 팀에서 프론트엔드를 리드했습니다.",
      <>
        B2C 프로덕트
        <Link
          to="pocket-prompt"
          smooth={true}
          offset={-100}
          duration={600}
          className="flex items-center gap-[1px] text-indigo-400 cursor-pointer"
        >
          포켓 프롬프트{" "}
          <RiArrowRightDownFill className="text-indigo-400" size={14} />
        </Link>
        , B2B 프로덕트{" "}
        <Link
          to="sigmine"
          smooth={true}
          offset={-100}
          duration={600}
          className="flex items-center gap-[1px] text-indigo-400 cursor-pointer"
        >
          시그마인{" "}
          <RiArrowRightDownFill className="text-indigo-400 " size={14} />
        </Link>
        을 개발했습니다.
      </>,
      "MAU(활성 사용자) 10,000명을 유치하고 월 구독 결제 10건을 달성했습니다.",
    ],
  },
];
