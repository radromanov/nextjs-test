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
    <h3 className={cn("text-sm", className)} {...props}>
      <span>{children}</span>
    </h3>
  );
};
