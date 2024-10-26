import { IconStarFilled } from "@tabler/icons-react";

import SearchForm from "@/components/shared/search-form";
import { Badge } from "@/components/ui/badge";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

const Intro = ({ query }: { query: string }) => {
  return (
    <section className="relative flex size-full w-full flex-col items-center justify-center gap-y-5 overflow-hidden rounded-lg border bg-background px-5 py-16 text-center">
      <Badge variant={"primary"}>
        <IconStarFilled className="mr-2 size-4 text-yellow-400" />
        Don&apos;t Just Dream It, Do It!
      </Badge>
      <h1 className="heading !z-10">
        Pitch Your Innovative Project, <br /> Connect with Visionary
        Entrepreneurs
      </h1>
      <p className="sub-heading">
        Showcase Your Project&apos;s Potential and Attract Strategic
        Partnerships
      </p>
      <div className="mx-auto mt-8 w-full max-w-3xl">
        <SearchForm query={query} />
      </div>
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
        )}
      />
    </section>
  );
};

export default Intro;
