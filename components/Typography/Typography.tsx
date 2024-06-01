import { cn } from "@/lib/utils";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: React.ReactNode;
}

export const Typography = ({ children, className, ...props }: Props) => {
  return (
    <p className={cn("", className)} {...props}>
      {children}
    </p>
  );
};
