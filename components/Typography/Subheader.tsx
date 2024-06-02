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
        "leading-5 text-xxs mobile-md:text-xs mobile-lg:text-sm tablet-sm:text-md laptop:text-lg",
        className
      )}
      {...props}
    >
      <span>{children}</span>
    </h3>
  );
};
