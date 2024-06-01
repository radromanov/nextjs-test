import { Card, CardContent, CardHeader } from "@/components/Cards";

export const Selections = () => {
  return (
    <div className="container flex flex-col gap-6 items-start w-full">
      <Card className="w-[92%] min-w-[265px]">
        <CardHeader>Brief</CardHeader>
        <CardContent>
          Complete{" "}
          <span className="font-bold">brief writing or simple guidance</span> on
          what to include, we've got you covered.
        </CardContent>
      </Card>

      <Card className="w-[96%] min-w-[280px]">
        <CardHeader>Search</CardHeader>
        <CardContent>
          In-depth agency search covering;{" "}
          <span className="font-bold">criteria matching</span>, door knocking,
          and due-diligence vetting.
        </CardContent>
      </Card>

      <Card className="w-full min-w-[295px]">
        <CardHeader>Pitch</CardHeader>
        <CardContent>
          Comprehensive <span className="font-bold">pitch management</span>,
          including comms, diary management, and pitch hosting.
        </CardContent>
      </Card>
    </div>
  );
};
