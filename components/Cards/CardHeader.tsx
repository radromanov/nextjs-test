import { cn } from "@/lib/utils";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  children: React.ReactNode;
}

export const CardHeader = ({ children, className, ...props }: Props) => {
  return (
    <h3
      className={cn(
        "font-bold group-hover:text-blue-500 group-hover:underline",
        className
      )}
      {...props}
    >
      <span>{children}</span>
    </h3>
  );
};
