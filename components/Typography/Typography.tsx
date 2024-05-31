import { cn } from "@/lib/utils";
import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: React.ReactNode;
}

export const Typography = ({ children, className, ...props }: Props) => {
  return (
    <p className={cn("text-sm", className)} {...props}>
      {children}
    </p>
  );
};
