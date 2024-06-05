import { Card, CardContent, CardHeader, CardText } from "@/components/Cards";
import { PresentationIcon, SearchIcon, ToolIcon } from "../Icons";

export const Selections = () => {
  return (
    <div className="flex flex-col gap-7 items-start justify-center w-full pb-6 tablet-sm:max-w-[640px] tablet:max-w-[516px] laptop:p-0 laptop:gap-9 desktop-md:max-w-[516px] desktop-4k:gap-16">
      <Card className="mobile-md:w-[92%]" tabIndex={2}>
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

      <Card className="mobile-md:w-[96%]" tabIndex={3}>
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

      <Card className="w-full" tabIndex={4}>
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
