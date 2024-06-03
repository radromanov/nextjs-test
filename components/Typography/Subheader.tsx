import { cn } from "@/lib/utils";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  children: React.ReactNode;
}

export const Subheader = ({ children, className, ...props }: Props) => {
  return (
    <h3
      className={cn(
        "pointer-events-none select-none leading-5 text-xs mobile-lg:text-xs tablet-sm:text-md laptop:text-lg desktop:text-lg desktop-md:text-2xl desktop-4k:text-3xl",
        className
      )}
      {...props}
    >
      <span>{children}</span>
    </h3>
  );
};
