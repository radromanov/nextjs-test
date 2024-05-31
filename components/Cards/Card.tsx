import React from "react";
import { cn } from "@/lib/utils";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  title: string;
  children: React.ReactNode;
}

export const Card = ({ title, children, className, ...props }: Props) => {
  return (
    <section
      className={cn("bg-neutral-100 rounded-md py-3 px-6", className)}
      {...props}
    >
      <h3>
        <span className="font-bold">{title}</span>
      </h3>

      {children}
    </section>
  );
};
