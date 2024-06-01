import Image from "next/image";
import video from "@/resources/video.png";

export const HeroVideo = () => {
  return (
    <div className="flex items-center justify-center w-full py-8">
      <Image
        src={video}
        alt="Welcome Video"
        placeholder="blur"
        quality={100}
        style={{
          objectFit: "cover",
        }}
        className="rounded-md w-[192px] xs:w-[256px] sm:w-[288px] md:w-[320px]"
      />
    </div>
  );
};
