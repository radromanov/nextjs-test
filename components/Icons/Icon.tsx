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
      className={cn(
        "min-w-9 min-h-9 size-2/12 xs:max-w-10 xs:max-h-10",
        className
      )}
      {...props}
    >
      {children}
    </svg>
  );
};
