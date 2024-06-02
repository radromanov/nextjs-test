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
        "w-16 mobile-md:w-20 mobile-lg:w-16 tablet-sm:w-16 laptop:w-28",
        className
      )}
      {...props}
    >
      {children}
    </svg>
  );
};
