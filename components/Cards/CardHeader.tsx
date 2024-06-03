import { Subheader } from "../Typography";

interface Props {
  children: React.ReactNode;
}

export const CardHeader = ({ children }: Props) => {
  return (
    <Subheader
      className={`group-hover:text-blue-500 group-hover:underline font-bold 
        text-xs leading-5
        mobile-md:leading-6
        mobile-lg:text-sm
        tablet:text-md
        desktop-md:text-lg 
        desktop-4k:text-3xl desktop-4k:leading-10`}
    >
      {children}
    </Subheader>
  );
};
