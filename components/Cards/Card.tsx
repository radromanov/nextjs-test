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
        "w-full flex justify-center items-center group bg-neutral-100 rounded-md outline-none -outline-offset-2 hover:outline-blue-500 focus:outline-blue-500 active:outline-blue-500 cursor-pointer px-4 py-4 gap-4 mobile-md:py-2 tablet:py-4 laptop:px-8 laptop:py-5 laptop:gap-8",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};
