import { cn } from "@/lib/utils";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  children: React.ReactNode;
}

export const Header = ({ children, className, ...props }: Props) => {
  return (
    <h1
      className={cn(
        "font-bold text-lg mobile-md:text-xl mobile-lg:text-2xl tablet-sm:text-3xl laptop:text-4xl desktop-md:text-5xl",
        className
      )}
      {...props}
    >
      <span>{children}</span>
    </h1>
  );
};
