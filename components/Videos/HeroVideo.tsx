import Image from "next/image";
import video from "@/resources/video.png";

export const HeroVideo = () => {
  return (
    <div
      className="flex items-center justify-center min-w-fit rounded-md py-8 laptop:py-0 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-blue-400"
      tabIndex={1}
    >
      <Image
        src={video}
        alt="Welcome Video"
        placeholder="blur"
        quality={100}
        style={{
          objectFit: "cover",
        }}
        className={`cursor-pointer rounded-md 
        w-52 
        mobile-md:w-52 
        tablet:w-56 
        laptop:w-[308px]
        desktop:w-[288px]
        desktop-sm:w-[352px]
        desktop-md:w-[332px]
        desktop-4k:w-[512px]`}
      />
    </div>
  );
};
