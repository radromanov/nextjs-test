import { cn } from "@/lib/utils";
import React from "react";

interface Props extends React.SVGProps<SVGSVGElement> {
  children: React.ReactNode;
}

export const Icon = ({ children, className, ...props }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={cn("size-[100px]", className)}
      {...props}
    >
      {children}
    </svg>
  );
};
