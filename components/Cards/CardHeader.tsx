import { Subheader } from "../Typography";

interface Props {
  children: React.ReactNode;
}

export const CardHeader = ({ children }: Props) => {
  return (
    <Subheader
      className={`group-hover:text-blue-500 group-hover:underline font-bold
        text-xs
        mobile-lg:text-sm
        tablet:text-sm tablet:leading-5
        desktop-sm:text-xl desktop-sm:leading-8
        desktop-md:text-xl desktop-md:leading-6
        desktop-4k:text-3xl desktop-4k:leading-10`}
    >
      {children}
    </Subheader>
  );
};
