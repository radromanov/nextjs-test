interface Props {
  children: React.ReactNode;
}

export const CardContent = ({ children }: Props) => {
  return <div className={"flex flex-col"}>{children}</div>;
};
