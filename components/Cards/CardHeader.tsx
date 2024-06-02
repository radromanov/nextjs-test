import { cn } from "@/lib/utils";
import { Subheader } from "../Typography";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  children: React.ReactNode;
}

export const CardHeader = ({ children, className, ...props }: Props) => {
  return (
    <Subheader
      className={cn(
        "text-xs leading-4 mobile-md:text-sm mobile-lg:text-sm tablet:text-md font-bold group-hover:text-blue-500 group-hover:underline",
        className
      )}
      {...props}
    >
      {children}
    </Subheader>
  );
};
