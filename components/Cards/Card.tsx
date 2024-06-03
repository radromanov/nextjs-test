import { cn } from "@/lib/utils";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  children: React.ReactNode;
}

export const Card = ({ children, className, ...props }: Props) => {
  return (
    <section
      className={cn(
        `w-full flex justify-center items-center group bg-neutral-100 rounded-md outline-none -outline-offset-2 hover:outline-blue-500 focus:outline-blue-500 active:outline-blue-500 cursor-pointer 
        py-4 px-4 gap-4 
        mobile-lg:px-6 mobile-lg:gap-6 
        tablet:py-5 tablet:px-8 tablet:gap-8
        laptop:py-5 laptop:px-8 laptop:gap-8 
        desktop:px-10 desktop:gap-10 
        desktop-md:py-8 desktop-md:pl-12 desktop-md:pr-24 desktop-md:gap-12
        desktop-4k:py-12 desktop-4k:px-16 desktop-4k:gap-16`,
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};
