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
    <h1 className={cn("text-2xl font-bold", className)} {...props}>
      <span>{children}</span>
    </h1>
  );
};
