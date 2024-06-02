import { Card, CardContent, CardHeader, CardText } from "@/components/Cards";
import { PresentationIcon, SearchIcon, ToolIcon } from "../Icons";

export const Selections = () => {
  return (
    <div className="flex flex-col gap-7 items-start w-full pb-6 mobile-lg:container tablet-sm:max-w-[640px] tablet-sm:container laptop:p-0 laptop:justify-center laptop:gap-9">
      <Card className="mobile-md:w-[92%] laptop:w-96">
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

      <Card className="mobile-md:w-[96%] laptop:w-[408px]">
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

      <Card className="w-full laptop:w-[432px]">
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
