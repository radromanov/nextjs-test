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
        "pointer-events-none select-none text-xxs mobile-md:text-xxs mobile-lg:text-xs tablet:text-sm desktop:text-sm desktop-md:text-lg desktop-4k:text-2xl font-medium",
        className
      )}
      {...props}
    >
      {children}
    </Typography>
  );
};
