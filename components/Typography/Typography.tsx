import { cn } from "@/lib/utils";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: React.ReactNode;
}

export const Typography = ({ children, className, ...props }: Props) => {
  return (
    <p
      className={cn(
        `font-medium 
        text-xxs 
        mobile-md:text-xxs 
        mobile-lg:text-xs 
        tablet:text-sm 
        desktop:text-xs
        desktop-sm:text-md
        desktop-md:text-lg
        desktop-4k:text-2xl`,
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};
