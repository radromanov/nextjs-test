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
        "text-xs leading-5 mobile-lg:text-sm tablet:text-md tablet:leading-5 laptop:leading-7 desktop-md:text-xl font-bold group-hover:text-blue-500 group-hover:underline",
        className
      )}
      {...props}
    >
      {children}
    </Subheader>
  );
};
