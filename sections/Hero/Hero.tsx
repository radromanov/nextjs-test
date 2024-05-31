import { HeroVideo } from "./components";

export const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <HeroVideo />

      <div className="flex flex-col justify-center items-center">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Brief</h2>
          <p className="text-gray-600">
            In-depth agency search covering; criteria matching, door knocking,
            and due-diligence vetting.
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
