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
        "w-full flex justify-center items-center group bg-neutral-100 rounded-md outline-none -outline-offset-2 hover:outline-blue-500 focus:outline-blue-500 active:outline-blue-500 cursor-pointer px-4 py-4 gap-4 mobile-lg:px-6 mobile-lg:gap-6 tablet:py-4 tablet:px-6 tablet:gap-6 laptop:px-8 laptop:py-5 laptop:gap-8 desktop:px-10 desktop:gap-10 desktop-md:py-8 desktop-4k:py-9 desktop-4k:pl-14 desktop:pr-20 desktop-4k:gap-14",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};
