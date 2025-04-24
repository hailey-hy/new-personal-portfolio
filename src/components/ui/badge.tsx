import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import * as SiIcons from "react-icons/si";
import Image from "next/image";

const badgeVariants = cva(
  "inline-flex h-fit w-fit items-center rounded-md border md:px-2.5 md:py-0.5 py-[3px] px-[3.5px] text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

interface TechBadgeProps {
  techName: string;
}

const techToIconKey: Record<string, string> = {
  "React.js": "SiReact",
  "Next.js 14": "SiNextdotjs",
  TypeScript: "SiTypescript",
  "AWS Amplify": "SiAwsamplify",
  "GitHub Actions": "SiGithubactions",
  Storybook: "SiStorybook",
  Playwright: "_custom_playwright",
  "Styled-components": "SiStyledcomponents",
  MobX: "SiMobx",
  WebSocket: "SiWebsocket",
};

const techToColor: Record<string, string> = {
  "React.js": "#61DAFB",
  "Next.js 14": "#6B7280",
  TypeScript: "#3178C6",
  "AWS Amplify": "#FF9900",
  "GitHub Actions": "#2088FF",
  Storybook: "#FF4785",
  Playwright: "#2E2E2E",
  "Styled-components": "#DB7093",
  MobX: "#FF9955",
  WebSocket: "#35495E",
};

function TechBadge({
  className,
  variant,
  techName,
  ...props
}: BadgeProps & TechBadgeProps) {
  const iconKey = techName && techToIconKey[techName];
  const IconComponent =
    iconKey && iconKey !== "_custom_playwright"
      ? SiIcons[iconKey as keyof typeof SiIcons]
      : null;

  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {iconKey === "_custom_playwright" ? (
        <Image
          src="/icons/playwright.svg"
          alt="Playwright"
          width={14}
          height={14}
          className="mr-1"
        />
      ) : (
        IconComponent && (
          <IconComponent
            size={14}
            className="mr-1"
            color={techToColor[techName] || "inherit"}
          />
        )
      )}
      {techName}
    </div>
  );
}

function Badge({ className, variant, children, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {children}
    </div>
  );
}

export { TechBadge, Badge, badgeVariants };
