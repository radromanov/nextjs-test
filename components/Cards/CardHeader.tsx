import { cn } from "@/lib/utils";
import { Subheader } from "../Typography";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  children: React.ReactNode;
}

// @TODO Working on responsiveness for Selection Cards

export const CardHeader = ({ children, className, ...props }: Props) => {
  return (
    <Subheader
      className={cn(
        "text-xs sm:text-md md:text-lg font-bold group-hover:text-blue-500 group-hover:underline",
        className
      )}
      {...props}
    >
      {children}
    </Subheader>
  );
};
