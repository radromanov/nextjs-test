import { cn } from "@/lib/utils";
import { Typography } from "../Typography";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: React.ReactNode;
}

export const CardText = ({ children, className, ...props }: Props) => {
  return (
    <Typography
      className={cn(
        "text-xxs mobile-md:text-xs tablet:text-sm font-medium",
        className
      )}
      {...props}
    >
      {children}
    </Typography>
  );
};
