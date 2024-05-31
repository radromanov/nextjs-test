import { HeroVideo } from "@/collections";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <HeroVideo />

      <div className="mt-8 w-full max-w-md p-4 bg-white bg-opacity-80 rounded-md shadow-md">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Brief</h2>
          <p className="text-gray-600">
            Complete brief writing or simple guidance on what to include, we’ve
            got you covered.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold">Search</h2>
          <p className="text-gray-600">
            In-depth agency search covering; criteria matching, door knocking,
            and due-diligence vetting.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold">Pitch</h2>
          <p className="text-gray-600">
            Comprehensive pitch management, including comms, diary management,
            and pitch hosting.
          </p>
        </div>
      </div>
    </div>
  );
};
