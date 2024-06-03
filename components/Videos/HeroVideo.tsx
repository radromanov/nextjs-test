import Image from "next/image";
import video from "@/resources/video.png";

export const HeroVideo = () => {
  return (
    <div className="flex items-center justify-center w-full py-8 laptop:py-0">
      <Image
        src={video}
        alt="Welcome Video"
        placeholder="blur"
        quality={100}
        style={{
          objectFit: "cover",
        }}
        className="rounded-md w-52 mobile-md:w-52 tablet:w-56 laptop:w-[308px] desktop:w-[308px] desktop-lg:w-[400px]"
      />
    </div>
  );
};
