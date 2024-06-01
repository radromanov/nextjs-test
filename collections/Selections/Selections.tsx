import { Card, CardContent, CardHeader, CardText } from "@/components/Cards";
import { PresentationIcon, SearchIcon, ToolIcon } from "../Icons";

export const Selections = () => {
  return (
    <div className="flex flex-col gap-7 items-start w-full pb-6">
      <Card className="w-[92%] min-w-[265px]">
        <ToolIcon />
        <CardContent>
          <CardHeader>Brief</CardHeader>
          <CardText>
            Complete{" "}
            <span className="font-bold">brief writing or simple guidance</span>{" "}
            on what to include, we've got you covered.
          </CardText>
        </CardContent>
      </Card>

      <Card className="w-[96%] min-w-[280px]">
        <SearchIcon />
        <CardContent>
          <CardHeader>Search</CardHeader>
          <CardText>
            In-depth agency search covering;{" "}
            <span className="font-bold">criteria matching</span>, door knocking,
            and due-diligence vetting.
          </CardText>
        </CardContent>
      </Card>

      <Card className="w-full min-w-[295px]">
        <PresentationIcon />
        <CardContent>
          <CardHeader>Pitch</CardHeader>
          <CardText>
            Comprehensive <span className="font-bold">pitch management</span>,
            including comms, diary management, and pitch hosting.
          </CardText>
        </CardContent>
      </Card>
    </div>
  );
};
