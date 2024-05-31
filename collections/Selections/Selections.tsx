import { Card } from "@/components/Cards";

export const Selections = () => {
  return (
    <div className="container flex flex-col gap-6 items-start w-full">
      <Card title="Brief" className="w-[87%]">
        <p>
          Complete{" "}
          <span className="font-bold">brief writing or simple guidance</span> on
          what to include, we've got you covered.
        </p>
      </Card>

      <Card title="Search" className="w-[92%]">
        In-depth agency search covering;{" "}
        <span className="font-bold">criteria matching</span>, door knocking, and
        due-diligence vetting.
      </Card>

      <Card title="Pitch" className="w-[97%]">
        <p>
          Comprehensive <span className="font-bold">pitch management</span>,
          including comms, diary management, and pitch hosting.
        </p>
      </Card>
    </div>
  );
};
