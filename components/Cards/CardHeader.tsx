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
        desktop-sm:text-xl desktop-sm:leading-8
        desktop-md:text-xl desktop-md:leading-8
        desktop-4k:text-3xl desktop-4k:leading-10`}
    >
      {children}
    </Subheader>
  );
};
