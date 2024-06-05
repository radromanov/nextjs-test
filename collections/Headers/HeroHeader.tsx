import { Header, Subheader } from "@/components/Typography";

export const HeroHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header>Managed agency selection</Header>
      <Subheader
        className={`
        text-xxs
        mobile-lg:text-xs
        tablet-sm:text-sm
        tablet:text-sm
        laptop:text-md
        desktop:text-md
        desktop-md:text-lg
        desktop-lg:text-xl
        desktop-4k:text-3xl desktop-4k:leading-[56px]
      `}
      >
        Strengthen your onboarding process
      </Subheader>
    </div>
  );
};
