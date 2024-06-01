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
        "text-xs mobile-md:text-sm mobile-lg:text-md tablet-sm:text-lg tablet:text-xl",
        className
      )}
      {...props}
    >
      <span>{children}</span>
    </h3>
  );
};
