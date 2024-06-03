import { Typography } from "../Typography";

interface Props {
  children: React.ReactNode;
}

export const CardText = ({ children }: Props) => {
  return (
    <Typography className={"pointer-events-none select-none"}>
      {children}
    </Typography>
  );
};
