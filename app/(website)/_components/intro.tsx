import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

const Intro = () => {
  return (
    <section className="relative flex size-full w-full flex-col items-center justify-center gap-y-5 overflow-hidden rounded-lg border bg-background py-16 text-center">
      <h1 className="heading !z-10">
        Pitch Your Innovative Project, <br /> Connect with Visionary
        Entrepreneurs
      </h1>
      <p className="sub-heading">
        Showcase Your Project&apos;s Potential and Attract Strategic
        Partnerships
      </p>
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
