import Image from "next/image";
import backgroundImage from "@/resources/background.png";

export const HeroBackground = () => {
  return (
    <Image
      src={backgroundImage}
      alt="Section image"
      placeholder="blur"
      quality={100}
      style={{
        width: "100vw",
        height: "auto",
        objectFit: "cover",
        position: "fixed",
        zIndex: -1,
      }}
    />
  );
};
