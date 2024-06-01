import { Selections } from "@/collections";
import { HeroVideo } from "@/components/Videos";

export const Hero = () => {
  return (
    <div className="relative flex flex-col gap-8 items-center justify-center min-h-screen container">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Managed agency selection</h1>
        <h3>Strengthen your onboarding process</h3>
      </div>

      <HeroVideo />

      <Selections />
    </div>
  );
};
