import clsx from "clsx";
import { nanoid } from "nanoid";
import { experienceData } from "data/data";
import { ExperienceCard } from "components/index";
import { StickyCard } from "ui/StickyCard";

export default function Experience() {
  return (
    <section
      id="experience"
      className={clsx("relative", "min-h-[400vh] w-full", "snap-start")}
    >
      {/* <div
        className={clsx("mx-auto w-full max-w-7xl px-4 py-20", "flex flex-col")}
      >
        {experienceData.map((style, i) => (
          <ExperienceCard data={experienceData[i]} key={nanoid()} index={i} />
        ))}
      </div> */}
      <div className={clsx("mx-auto w-full max-w-7xl px-4")}>
        {experienceData.map((item, i) => (
          <div key={nanoid()} className="relative h-[200vh]">
            <div
              className={clsx(
                "sticky top-0",
                "min-h-screen",
                "flex items-stretch",
              )}
              style={{ zIndex: i + 1 }}
            >
              <ExperienceCard data={item} index={i} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
