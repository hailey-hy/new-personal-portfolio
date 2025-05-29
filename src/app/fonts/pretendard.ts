// app/fonts/pretendard.ts
import localFont from "next/font/local";

// Variable 버전 사용 (가볍고 최적화됨)
export const pretendard = localFont({
  src: [
    {
      path: "./PretendardVariable.woff2",
      weight: "45 920", // Variable range
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
  display: "swap", // 이 설정 있어도 layout shift 없음 (초기 스타일에 포함됨)
});
