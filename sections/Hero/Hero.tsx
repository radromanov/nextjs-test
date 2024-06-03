import { Selections } from "@/collections";
import { Header, Subheader } from "@/components/Typography";
import { HeroVideo } from "@/components/Videos";

export const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-w-screen min-h-screen laptop:gap-16 desktop-4k:gap-28">
      <div className="flex flex-col items-center justify-center">
        <Header>Managed agency selection</Header>
        <Subheader>Strengthen your onboarding process</Subheader>
      </div>

      <div className="flex flex-col mobile-md:px-6 laptop:flex-row laptop:container desktop:w-3/4 desktop-md:w-5/6 desktop-md:gap-6 desktop-4k:gap-36 desktop-4k:max-w-[1600px]">
        <HeroVideo />

        <Selections />
      </div>
    </div>
  );
};
