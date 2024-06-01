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
      className={cn(
        "group bg-neutral-100 rounded-md py-3 px-6 outline-none -outline-offset-2 hover:outline-blue-500 focus:outline-blue-500 active:outline-blue-500 cursor-pointer",
        className
      )}
      {...props}
    >
      <h3>
        <span className="font-bold group-hover:text-blue-500 group-hover:underline">
          {title}
        </span>
      </h3>

      {children}
    </section>
  );
};
