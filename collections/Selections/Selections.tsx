import { Card, CardContent, CardHeader } from "@/components/Cards";
import { PresentationIcon, SearchIcon, ToolIcon } from "../Icons";

export const Selections = () => {
  return (
    <div className="container flex flex-col gap-6 items-start w-full">
      <Card className="flex w-[92%] min-w-[265px] gap-6">
        <ToolIcon />
        <div>
          <CardHeader>Brief</CardHeader>
          <CardContent>
            Complete{" "}
            <span className="font-bold">brief writing or simple guidance</span>{" "}
            on what to include, we've got you covered.
          </CardContent>
        </div>
      </Card>

      <Card className="w-[96%] min-w-[280px] gap-6">
        <SearchIcon />
        <div>
          <CardHeader>Search</CardHeader>
          <CardContent>
            In-depth agency search covering;{" "}
            <span className="font-bold">criteria matching</span>, door knocking,
            and due-diligence vetting.
          </CardContent>
        </div>
      </Card>

      <Card className="w-full min-w-[295px] gap-6">
        <PresentationIcon />
        <div>
          <CardHeader>Pitch</CardHeader>
          <CardContent>
            Comprehensive <span className="font-bold">pitch management</span>,
            including comms, diary management, and pitch hosting.
          </CardContent>
        </div>
      </Card>
    </div>
  );
};
