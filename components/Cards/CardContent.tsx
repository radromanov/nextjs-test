import { cn } from "@/lib/utils";
import { Typography } from "../Typography";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: React.ReactNode;
}

export const CardContent = ({ children, className, ...props }: Props) => {
  return (
    <Typography className={(cn(""), className)} {...props}>
      {children}
    </Typography>
  );
};
