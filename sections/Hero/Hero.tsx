import { HeroHeader, Selections } from "@/collections";
import { HeroVideo } from "@/components/Videos";

export const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-w-screen min-h-screen laptop:gap-16 desktop-4k:gap-28">
      <HeroHeader />

      <div className="flex flex-col justify-center mobile-md:px-6 laptop:flex-row laptop:gap-12 desktop-sm:gap-16 desktop:w-3/4 desktop-md:w-5/6 desktop-md:gap-16 desktop-4k:gap-36 desktop-4k:max-w-[1600px]">
        <HeroVideo />

        <Selections />
      </div>
    </div>
  );
};
