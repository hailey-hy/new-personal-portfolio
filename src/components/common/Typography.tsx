import React, { PropsWithChildren } from "react";

interface TyposType {
  typo: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "small" | "muted" | "list";
}
const Typos = ({ typo, children }: PropsWithChildren<TyposType>) => {
  switch (typo) {
    case "h1":
      return (
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          {children}
        </h4>
      );
    case "h5":
      return (
        <h4 className="scroll-m-20 text-sm font-semibold tracking-tight">
          {children}
        </h4>
      );
    case "p":
      return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
    case "small":
      return (
        <small className="text-sm font-medium leading-none">{children}</small>
      );
    case "muted":
      return <p className="text-sm text-muted-foreground">{children}</p>;
    case "list":
      return (
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-sm">{children}</ul>
      );
  }

  return <></>;
};

export default Typos;
