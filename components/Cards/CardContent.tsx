import { cn } from "@/lib/utils";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
}

export const CardContent = ({ children, className, ...props }: Props) => {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
};
