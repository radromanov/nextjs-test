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
        `w-16 
        mobile-md:w-20 
        mobile-lg:w-20 mobile-lg:max-w-10
        tablet-sm:w-12 tablet-sm:max-w-full
        tablet:w-14
        laptop:w-20 laptop:max-w-11 
        desktop:w-24 desktop:max-w-full
        desktop-sm:w-24
        desktop-md:w-28
        desktop-lg:w-32 
        desktop-4k:w-40`,
        className
      )}
      {...props}
    >
      {children}
    </svg>
  );
};
