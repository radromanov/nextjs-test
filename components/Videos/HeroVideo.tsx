import Image from "next/image";
import video from "@/resources/video.png";

export const HeroVideo = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <Image
        src={video}
        alt="Welcome Video"
        placeholder="blur"
        quality={100}
        width={224}
        height={224}
        style={{
          objectFit: "cover",
        }}
        className="rounded-md"
      />
    </div>
  );
};
