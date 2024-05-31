import { Selections } from "@/collections";
import { HeroVideo } from "@/components/Videos";

export const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen container">
      <HeroVideo />

      <Selections />
    </div>
  );
};
