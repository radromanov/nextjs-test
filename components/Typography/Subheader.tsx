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
        "leading-5 text-xs mobile-lg:text-xs tablet-sm:text-md laptop:text-lg desktop:text-lg desktop-lg:text-2xl",
        className
      )}
      {...props}
    >
      <span>{children}</span>
    </h3>
  );
};
