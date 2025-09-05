import { ExperienceCard } from "components/index";

import clsx from "clsx";
import { experienceData } from "data/data";
import { nanoid } from "nanoid";

export default function Experience() {
  return (
    <div
      id="experience"
      className={clsx("relative", "min-h-[400vh] w-full", "snap-start")}
    >
      <div className={clsx("mx-auto w-full max-w-7xl px-4")}>
        {experienceData.map((item, i) => (
          <div key={nanoid()} className="relative h-[300vh]">
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
    </div>
  );
}
