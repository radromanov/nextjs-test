import { Card } from "@/components/Cards";
import { Typography } from "@/components/Typography";

export const Selections = () => {
  return (
    <div className="container flex flex-col gap-6 items-start w-full">
      <Card title="Brief" className="w-[92%] min-w-[265px]">
        <Typography>
          Complete{" "}
          <span className="font-bold">brief writing or simple guidance</span> on
          what to include, we've got you covered.
        </Typography>
      </Card>

      <Card title="Search" className="w-[96%] min-w-[280px]">
        <Typography>
          In-depth agency search covering;{" "}
          <span className="font-bold">criteria matching</span>, door knocking,
          and due-diligence vetting.
        </Typography>
      </Card>

      <Card title="Pitch" className="w-full min-w-[295px]">
        <Typography>
          Comprehensive <span className="font-bold">pitch management</span>,
          including comms, diary management, and pitch hosting.
        </Typography>
      </Card>
    </div>
  );
};
